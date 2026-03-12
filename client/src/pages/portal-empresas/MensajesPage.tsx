import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useSearch } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Search, MessageCircle, Send, MoreVertical, Globe, AtSign, 
  ArrowLeft, CheckCheck, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface UserInfo {
  id: number;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  companyName?: string | null;
  profilePicture?: string | null;
}

interface ForumPost {
  id: number;
  userId: number;
  content: string;
  mentions: number[] | null;
  createdAt: string;
  author?: {
    id: number;
    firstName: string | null;
    lastName: string | null;
    companyName: string | null;
    profilePicture: string | null;
  };
}

function getDisplayName(u?: UserInfo | ForumPost["author"] | null): string {
  if (!u) return "Usuario";
  if (u.companyName) return u.companyName;
  const f = u.firstName || "";
  const l = u.lastName || "";
  const full = `${f} ${l}`.trim();
  if (full) return full;
  if ("email" in u && (u as UserInfo).email) return (u as UserInfo).email.split("@")[0];
  return "Usuario";
}

function getInitials(u?: UserInfo | ForumPost["author"] | null): string {
  if (!u) return "U";
  if (u.companyName) return u.companyName[0].toUpperCase();
  const f = u.firstName?.[0] || "";
  const l = u.lastName?.[0] || "";
  if (f || l) return (f + l).toUpperCase();
  if ("email" in u && (u as UserInfo).email) return (u as UserInfo).email[0].toUpperCase();
  return "U";
}

function renderMentions(content: string) {
  const regex = /(@[\wÁÉÍÓÚáéíóúñÑ]+)/g;
  const parts = content.split(regex);
  return parts.map((part, i) => {
    if (part.startsWith("@")) {
      return (
        <span key={i} className="text-cyan-400 font-semibold bg-cyan-500/10 px-0.5 rounded">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function MentionDropdown({
  query,
  users,
  onSelect,
  visible,
}: {
  query: string;
  users: UserInfo[];
  onSelect: (user: UserInfo) => void;
  visible: boolean;
}) {
  if (!visible || users.length === 0) return null;
  const filtered = users
    .filter((u) => getDisplayName(u).toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6);
  if (filtered.length === 0) return null;
  return (
    <div className="absolute bottom-full left-0 right-0 mb-1 bg-gray-800 border border-cyan-500/30 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto">
      {filtered.map((user) => (
        <div
          key={user.id}
          onClick={() => onSelect(user)}
          className="flex items-center gap-2 px-3 py-2 hover:bg-cyan-500/10 cursor-pointer transition-colors"
        >
          <Avatar className="h-7 w-7 bg-gradient-to-br from-emerald-500 to-cyan-500">
            <AvatarFallback className="bg-transparent text-white text-xs font-bold">
              {getInitials(user)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{getDisplayName(user)}</p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatInput({
  value,
  onChange,
  onSend,
  placeholder,
  disabled,
  allUsers,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: (text: string, mentionIds: number[]) => void;
  placeholder: string;
  disabled?: boolean;
  allUsers: UserInfo[];
}) {
  const [showMentions, setShowMentions] = useState(false);
  const [mentionQuery, setMentionQuery] = useState("");
  const [mentionIds, setMentionIds] = useState<number[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    onChange(text);
    const cursorPos = e.target.selectionStart;
    const beforeCursor = text.substring(0, cursorPos);
    const atMatch = beforeCursor.match(/@(\w*)$/);
    if (atMatch) {
      setShowMentions(true);
      setMentionQuery(atMatch[1]);
    } else {
      setShowMentions(false);
      setMentionQuery("");
    }
  };

  const handleMentionSelect = (user: UserInfo) => {
    const cursorPos = inputRef.current?.selectionStart || value.length;
    const before = value.substring(0, cursorPos);
    const after = value.substring(cursorPos);
    const atIndex = before.lastIndexOf("@");
    const displayName = getDisplayName(user).replace(/\s/g, "");
    const newText = before.substring(0, atIndex) + `@${displayName} ` + after;
    onChange(newText);
    if (!mentionIds.includes(user.id)) {
      setMentionIds([...mentionIds, user.id]);
    }
    setShowMentions(false);
    setMentionQuery("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        onSend(value.trim(), mentionIds);
        onChange("");
        setMentionIds([]);
      }
    }
  };

  return (
    <div className="relative flex items-end gap-3">
      <div className="flex-1 relative">
        <MentionDropdown
          query={mentionQuery}
          users={allUsers}
          onSelect={handleMentionSelect}
          visible={showMentions}
        />
        <textarea
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={1}
          className="w-full resize-none bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 rounded-2xl px-4 py-3 text-sm outline-none"
          style={{ minHeight: "44px", maxHeight: "120px" }}
          onInput={(e) => {
            const t = e.target as HTMLTextAreaElement;
            t.style.height = "auto";
            t.style.height = Math.min(t.scrollHeight, 120) + "px";
          }}
        />
      </div>
      <Button
        onClick={() => {
          if (value.trim()) {
            onSend(value.trim(), mentionIds);
            onChange("");
            setMentionIds([]);
          }
        }}
        disabled={disabled || !value.trim()}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg flex-shrink-0 disabled:opacity-40"
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function MensajesPage() {
  const [activeTab, setActiveTab] = useState<"mensajes" | "foro">("mensajes");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [messageText, setMessageText] = useState("");
  const [forumText, setForumText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const forumEndRef = useRef<HTMLDivElement>(null);
  const searchStr = useSearch();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const currentUserId = user?.id;

  const { data: conversations = [], isLoading: conversationsLoading } = useQuery({
    queryKey: ["/api/conversations"],
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000,
  }) as { data: any[]; isLoading: boolean };

  const { data: allUsers = [] } = useQuery<UserInfo[]>({
    queryKey: ["/api/messages/search-users", ""],
  });

  const { data: forumPostsRaw, isLoading: forumLoading, error: forumError } = useQuery<ForumPost[]>({
    queryKey: ["/api/forum/posts"],
    enabled: !!currentUserId,
    refetchInterval: activeTab === "foro" ? 10000 : false,
    staleTime: 30000,
    retry: 3,
    retryDelay: 1000,
  });
  const forumPosts: ForumPost[] = Array.isArray(forumPostsRaw) ? forumPostsRaw : [];

  const { data: chatMessages = [], isLoading: messagesLoading } = useQuery<any[]>({
    queryKey: ["/api/conversations", selectedConversation, "messages"],
    enabled: !!selectedConversation && selectedConversation > 0,
    refetchInterval: 10000,
  });

  const { data: searchResults = [] } = useQuery<UserInfo[]>({
    queryKey: ["/api/messages/search-users", searchQuery],
    enabled: searchQuery.length > 1,
  });

  const selectedConvData = conversations.find((c: any) => c.id === selectedConversation);

  const sendMessageMutation = useMutation({
    mutationFn: async (data: { receiverId: number; content: string; mentions?: number[] }) => {
      return apiRequest("/api/messages", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/conversations"] });
      queryClient.invalidateQueries({ queryKey: ["/api/mentions/unread-count"] });
      if (selectedConversation) {
        queryClient.invalidateQueries({
          queryKey: ["/api/conversations", selectedConversation, "messages"],
        });
      }
      setMessageText("");
    },
  });

  const sendForumPostMutation = useMutation({
    mutationFn: async (data: { content: string; mentions: number[] }) => {
      return apiRequest("/api/forum/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/forum/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/mentions/unread-count"] });
      setForumText("");
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(searchStr);
    const convId = params.get("conversation");
    if (convId) setSelectedConversation(parseInt(convId));
  }, [searchStr]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    forumEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [forumPosts]);

  const handleSendMessage = (text: string, mentionIds: number[]) => {
    if (!text || !selectedConvData) return;
    const otherId = selectedConvData.otherUser?.id;
    if (!otherId) return;
    sendMessageMutation.mutate({ receiverId: otherId, content: text, mentions: mentionIds.length > 0 ? mentionIds : undefined });
  };

  const handleSendForumPost = (text: string, mentionIds: number[]) => {
    if (!text) return;
    sendForumPostMutation.mutate({ content: text, mentions: mentionIds });
  };

  const startNewConversation = (targetUser: UserInfo) => {
    setSearchQuery("");
    sendMessageMutation.mutate(
      { receiverId: targetUser.id, content: "¡Hola! Me gustaría conectar contigo." },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["/api/conversations"] });
        },
      }
    );
  };

  const filteredConversations = conversations.filter((conv: any) => {
    if (!searchQuery) return true;
    const ou = conv.otherUser;
    return (
      ou?.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ou?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ou?.lastName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const { data: mentionData } = useQuery<{ forumMentions: number; chatMentions: number; total: number }>({
    queryKey: ["/api/mentions/unread-count"],
    refetchInterval: 15000,
  });
  const mentionCount = mentionData?.total || 0;

  const formatTime = (ts: string) => {
    const date = new Date(ts);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 1) return "Ahora";
    if (diffMins < 60) return `${diffMins}m`;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 24) return `${diffHours}h`;
    return format(date, "d MMM", { locale: es });
  };

  const safeAllUsers: UserInfo[] = Array.isArray(allUsers) ? allUsers : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-900">
      <div className="flex h-screen">
        <div className="w-full lg:w-80 border-r border-white/20 bg-white/5 backdrop-blur-xl flex flex-col">
          <div className="p-4 border-b border-white/20">
            <h1 className="text-xl font-bold text-white mb-3">Mensajes</h1>

            <div className="flex bg-white/10 rounded-xl p-1 mb-3">
              <button
                onClick={() => setActiveTab("mensajes")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "mensajes"
                    ? "bg-green-600 text-white shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                Chats
              </button>
              <button
                onClick={() => setActiveTab("foro")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all relative ${
                  activeTab === "foro"
                    ? "bg-cyan-600 text-white shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Globe className="h-4 w-4" />
                Foro
                {mentionCount > 0 && activeTab !== "foro" && (
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center p-0">
                    {mentionCount}
                  </Badge>
                )}
              </button>
            </div>

            {activeTab === "mensajes" && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                <Input
                  placeholder="Buscar usuarios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pl-10"
                />
              </div>
            )}
          </div>

          {activeTab === "mensajes" && searchQuery.length > 1 && Array.isArray(searchResults) && searchResults.length > 0 && (
            <div className="p-3 border-b border-white/10">
              <p className="text-xs text-white/50 mb-2">Usuarios encontrados</p>
              {searchResults.map((u: UserInfo) => (
                <div
                  key={u.id}
                  onClick={() => startNewConversation(u)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <Avatar className="h-8 w-8 border border-green-400/30">
                    <AvatarFallback className="bg-green-600/20 text-green-400 text-xs">
                      {getInitials(u)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm text-white truncate">{getDisplayName(u)}</p>
                    <p className="text-xs text-white/40 truncate">{u.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex-1 overflow-y-auto">
            {activeTab === "mensajes" ? (
              conversationsLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="p-4 border-b border-white/10">
                    <div className="flex items-center gap-3 animate-pulse">
                      <div className="w-12 h-12 bg-white/20 rounded-full" />
                      <div className="flex-1">
                        <div className="h-4 bg-white/20 rounded mb-2" />
                        <div className="h-3 bg-white/20 rounded w-3/4" />
                      </div>
                    </div>
                  </div>
                ))
              ) : filteredConversations.length === 0 ? (
                <div className="p-8 text-center">
                  <MessageCircle className="w-10 h-10 text-white/30 mx-auto mb-3" />
                  <p className="text-white/60 text-sm">
                    {conversations.length === 0
                      ? "Sin conversaciones aún"
                      : "No se encontraron resultados"}
                  </p>
                  <p className="text-white/40 text-xs mt-1">Busca usuarios para iniciar un chat</p>
                </div>
              ) : (
                filteredConversations.map((conv: any) => {
                  const ou = conv.otherUser;
                  const isSelected = selectedConversation === conv.id;
                  return (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv.id)}
                      className={`w-full p-4 border-b border-white/10 text-left transition-all hover:bg-white/10 ${
                        isSelected ? "bg-white/15 border-l-2 border-l-green-500" : "border-l-2 border-l-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 border-2 border-green-400/30">
                          <AvatarImage src={ou?.profilePicture} />
                          <AvatarFallback className="bg-green-600/20 text-green-400">
                            {getInitials(ou)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-white font-medium truncate">
                              {getDisplayName(ou)}
                            </h3>
                            <span className="text-white/50 text-xs">{formatTime(conv.lastActivity)}</span>
                          </div>
                          <p className="text-white/60 text-sm truncate">
                            Conversación activa
                          </p>
                        </div>
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      </div>
                    </button>
                  );
                })
              )
            ) : (
              <div className="p-4">
                <div className="flex items-center gap-2 text-white/50 mb-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">Foro General</span>
                </div>
                <p className="text-xs text-white/40">
                  Espacio público para todas las empresas. Usa @ para mencionar a otros usuarios.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 hidden lg:flex flex-col">
          {activeTab === "foro" ? (
            <>
              <div className="p-4 border-b border-white/20 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-cyan-600 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">Foro General</h2>
                    <p className="text-sm text-cyan-400">
                      Todas las empresas · Usa @ para mencionar
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-white/3">
                <div className="space-y-4 max-w-3xl mx-auto">
                  {forumLoading && forumPosts.length === 0 ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500" />
                    </div>
                  ) : forumError ? (
                    <div className="text-center py-12">
                      <Globe className="h-12 w-12 text-red-400/40 mx-auto mb-3" />
                      <p className="text-sm text-red-400">Error al cargar el foro</p>
                      <button
                        className="mt-2 text-xs text-cyan-400 hover:underline"
                        onClick={() => queryClient.invalidateQueries({ queryKey: ["/api/forum/posts"] })}
                      >Reintentar</button>
                    </div>
                  ) : forumPosts.length === 0 ? (
                    <div className="text-center py-16">
                      <Globe className="h-12 w-12 text-white/20 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-white/50 mb-1">El foro está vacío</h3>
                      <p className="text-sm text-white/40">Sé el primero en publicar</p>
                    </div>
                  ) : (
                    [...forumPosts].reverse().map((post) => {
                      const isOwn = post.userId === currentUserId;
                      const isMentioned = post.mentions?.includes(currentUserId || 0);
                      return (
                        <div key={post.id} className="flex gap-3">
                          <Avatar className="h-9 w-9 bg-gradient-to-br from-emerald-500 to-cyan-500 flex-shrink-0 mt-1">
                            <AvatarFallback className="bg-transparent text-white text-xs font-bold">
                              {getInitials(post.author)}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`flex-1 min-w-0 ${isMentioned ? "ring-1 ring-cyan-500/30 rounded-xl" : ""}`}>
                            <div className={`px-4 py-3 rounded-2xl ${
                              isOwn
                                ? "bg-green-600/15 border border-green-500/25"
                                : "bg-white/8 border border-white/10"
                            }`}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-emerald-400">
                                  {getDisplayName(post.author)}
                                </span>
                                {isOwn && <span className="text-xs text-white/40">(tú)</span>}
                                {isMentioned && (
                                  <Badge className="bg-cyan-500/20 text-cyan-400 text-xs px-1.5 py-0">
                                    <AtSign className="h-3 w-3 mr-0.5" />
                                    Mención
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-white/90 leading-relaxed">
                                {renderMentions(post.content)}
                              </p>
                              <span className="text-xs text-white/40 mt-1 block">
                                {format(new Date(post.createdAt), "d MMM, HH:mm", { locale: es })}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div ref={forumEndRef} />
                </div>
              </div>

              <div className="p-4 border-t border-white/20 bg-white/5 backdrop-blur-xl">
                <ChatInput
                  value={forumText}
                  onChange={setForumText}
                  onSend={handleSendForumPost}
                  placeholder="Escribe en el foro... usa @ para mencionar"
                  disabled={sendForumPostMutation.isPending}
                  allUsers={safeAllUsers}
                />
              </div>
            </>
          ) : selectedConversation && selectedConvData ? (
            <>
              <div className="p-4 border-b border-white/20 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-green-400/30">
                      <AvatarImage src={selectedConvData.otherUser?.profilePicture} />
                      <AvatarFallback className="bg-green-600/20 text-green-400">
                        {getInitials(selectedConvData.otherUser)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-semibold text-white">
                        {getDisplayName(selectedConvData.otherUser)}
                      </h2>
                      <p className="text-sm text-emerald-400">En línea</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-white/3">
                <div className="space-y-3 max-w-3xl mx-auto">
                  {messagesLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500" />
                    </div>
                  ) : chatMessages.length === 0 ? (
                    <div className="text-center py-16">
                      <MessageCircle className="h-10 w-10 text-white/20 mx-auto mb-3" />
                      <p className="text-white/50 text-sm">Sin mensajes aún. Envía el primero.</p>
                    </div>
                  ) : (
                    chatMessages.map((msg: any) => {
                      const isOwn = msg.senderId === currentUserId;
                      return (
                        <div key={msg.id} className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                              isOwn
                                ? "bg-green-600 text-white"
                                : "bg-white/10 text-white border border-white/10"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{renderMentions(msg.content)}</p>
                            <div className={`flex items-center justify-end gap-1 mt-1.5 ${
                              isOwn ? "text-green-100" : "text-white/40"
                            }`}>
                              <span className="text-xs">
                                {format(new Date(msg.createdAt), "HH:mm", { locale: es })}
                              </span>
                              {isOwn && (
                                msg.isRead ? (
                                  <CheckCheck className="h-3 w-3 text-cyan-200" />
                                ) : (
                                  <Check className="h-3 w-3 text-white/60" />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="p-4 border-t border-white/20 bg-white/5 backdrop-blur-xl">
                <ChatInput
                  value={messageText}
                  onChange={setMessageText}
                  onSend={handleSendMessage}
                  placeholder="Escribe un mensaje... usa @ para mencionar"
                  disabled={sendMessageMutation.isPending}
                  allUsers={safeAllUsers}
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-white/5 backdrop-blur-xl">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <h3 className="text-white/70 text-xl mb-2">Selecciona una conversación</h3>
                <p className="text-white/50 text-sm">Elige un chat o visita el Foro General</p>
              </div>
            </div>
          )}
        </div>

        {selectedConversation && activeTab === "mensajes" && (
          <div className="lg:hidden fixed inset-0 bg-gray-900 z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/5 backdrop-blur-xl">
              <Button variant="ghost" onClick={() => setSelectedConversation(null)} className="text-white">
                <ArrowLeft className="w-5 h-5 mr-2" /> Volver
              </Button>
              <h2 className="text-white font-medium truncate">
                {getDisplayName(selectedConvData?.otherUser)}
              </h2>
              <Button variant="ghost" className="text-white">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-3">
                {chatMessages.map((msg: any) => {
                  const isOwn = msg.senderId === currentUserId;
                  return (
                    <div key={msg.id} className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        isOwn ? "bg-green-600 text-white" : "bg-white/10 text-white border border-white/10"
                      }`}>
                        <p className="text-sm">{renderMentions(msg.content)}</p>
                        <div className={`flex items-center justify-end gap-1 mt-1 ${isOwn ? "text-green-100" : "text-white/40"}`}>
                          <span className="text-xs">{format(new Date(msg.createdAt), "HH:mm", { locale: es })}</span>
                          {isOwn && (msg.isRead ? <CheckCheck className="h-3 w-3" /> : <Check className="h-3 w-3" />)}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="p-4 border-t border-white/20 bg-white/5">
              <ChatInput
                value={messageText}
                onChange={setMessageText}
                onSend={handleSendMessage}
                placeholder="Escribe un mensaje..."
                disabled={sendMessageMutation.isPending}
                allUsers={safeAllUsers}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}