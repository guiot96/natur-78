import { useState, useEffect, useRef, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Send, 
  MoreVertical, 
  ArrowLeft,
  CheckCheck,
  Check,
  MessageCircle,
  Globe,
  AtSign
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface User {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  profilePicture?: string;
}

interface MessageItem {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  messageType: string;
  isRead: boolean;
  createdAt: string;
}

interface Conversation {
  id: number;
  participant1Id: number;
  participant2Id: number;
  lastMessageId?: number;
  lastActivity: string;
  otherUser?: User;
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

interface ChatPageProps {
  currentUserId: number;
  preSelectedUserId?: number;
  onClose?: () => void;
}

function getUserDisplayName(user?: User | ForumPost["author"] | null): string {
  if (!user) return "Usuario";
  if ("companyName" in user && user.companyName) return user.companyName;
  const first = user.firstName || "";
  const last = user.lastName || "";
  const full = `${first} ${last}`.trim();
  return full || ("email" in user ? (user as User).email?.split("@")[0] : "Usuario") || "Usuario";
}

function getUserInitials(user?: User | ForumPost["author"] | null): string {
  if (!user) return "U";
  if ("companyName" in user && user.companyName) return user.companyName[0].toUpperCase();
  const first = user.firstName?.[0] || "";
  const last = user.lastName?.[0] || "";
  if (first || last) return (first + last).toUpperCase();
  if ("email" in user) return ((user as User).email?.[0] || "U").toUpperCase();
  return "U";
}

function renderContentWithMentions(content: string) {
  const parts = content.split(/(@\w[\w\s]*?)(?=\s@|\s|$)/g);
  const mentionRegex = /^@.+/;
  return parts.map((part, i) => {
    if (mentionRegex.test(part)) {
      return (
        <span key={i} className="text-cyan-400 font-semibold bg-cyan-500/10 px-1 rounded">
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
  visible 
}: { 
  query: string; 
  users: User[]; 
  onSelect: (user: User) => void; 
  visible: boolean;
}) {
  if (!visible || users.length === 0) return null;
  
  const filtered = users.filter(u => {
    const name = getUserDisplayName(u).toLowerCase();
    return name.includes(query.toLowerCase());
  }).slice(0, 6);
  
  if (filtered.length === 0) return null;
  
  return (
    <div className="absolute bottom-full left-0 right-0 mb-1 bg-gray-800 border border-cyan-500/30 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto">
      {filtered.map(user => (
        <div
          key={user.id}
          onClick={() => onSelect(user)}
          className="flex items-center gap-2 px-3 py-2 hover:bg-cyan-500/10 cursor-pointer transition-colors"
        >
          <Avatar className="h-7 w-7 bg-gradient-to-br from-emerald-500 to-cyan-500">
            <AvatarFallback className="bg-transparent text-white text-xs font-bold">
              {getUserInitials(user)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{getUserDisplayName(user)}</p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MessageInput({
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
  allUsers: User[];
}) {
  const [showMentions, setShowMentions] = useState(false);
  const [mentionQuery, setMentionQuery] = useState("");
  const [mentionIds, setMentionIds] = useState<number[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    onChange(text);
    
    const cursorPos = e.target.selectionStart;
    const textBeforeCursor = text.substring(0, cursorPos);
    const atMatch = textBeforeCursor.match(/@(\w*)$/);
    
    if (atMatch) {
      setShowMentions(true);
      setMentionQuery(atMatch[1]);
    } else {
      setShowMentions(false);
      setMentionQuery("");
    }
  };

  const handleMentionSelect = (user: User) => {
    const cursorPos = inputRef.current?.selectionStart || value.length;
    const textBeforeCursor = value.substring(0, cursorPos);
    const textAfterCursor = value.substring(cursorPos);
    const atIndex = textBeforeCursor.lastIndexOf("@");
    
    const displayName = getUserDisplayName(user).replace(/\s/g, "");
    const newText = textBeforeCursor.substring(0, atIndex) + `@${displayName} ` + textAfterCursor;
    
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
          className="w-full resize-none bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 rounded-2xl px-4 py-3 text-sm outline-none"
          style={{ minHeight: "44px", maxHeight: "120px" }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = Math.min(target.scrollHeight, 120) + "px";
          }}
        />
      </div>
      {value.trim() ? (
        <Button
          onClick={() => {
            if (value.trim()) {
              onSend(value.trim(), mentionIds);
              onChange("");
              setMentionIds([]);
            }
          }}
          disabled={disabled}
          className="bg-gradient-to-r from-green-500 to-green-700 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full p-3 shadow-lg flex-shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          disabled
          className="text-gray-500 rounded-full p-3 flex-shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export function ChatPage({ currentUserId, preSelectedUserId, onClose }: ChatPageProps) {
  const [activeTab, setActiveTab] = useState<"mensajes" | "foro">("mensajes");
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messageText, setMessageText] = useState("");
  const [forumText, setForumText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const forumEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: conversations = [] } = useQuery<Conversation[]>({
    queryKey: ["/api/conversations"],
  });

  const { data: allUsersRaw = [] } = useQuery<User[]>({
    queryKey: ["/api/messages/search-users", ""],
    enabled: true,
  });

  const { data: forumPosts = [], isLoading: forumLoading } = useQuery<ForumPost[]>({
    queryKey: ["/api/forum/posts"],
    enabled: activeTab === "foro",
    refetchInterval: 10000,
  });

  const { data: chatMessages = [] } = useQuery<MessageItem[]>({
    queryKey: ["/api/conversations", selectedConversation?.id, "messages"],
    enabled: !!selectedConversation?.id && selectedConversation.id > 0,
  });

  const { data: searchResults = [] } = useQuery<User[]>({
    queryKey: ["/api/messages/search-users", searchQuery],
    enabled: searchQuery.length > 1,
  });

  const allUsers: User[] = Array.isArray(allUsersRaw) ? allUsersRaw : [];

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
          queryKey: ["/api/conversations", selectedConversation.id, "messages"],
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    forumEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [forumPosts]);

  useEffect(() => {
    if (preSelectedUserId && conversations.length > 0) {
      const existingConv = conversations.find(
        (conv) => conv.otherUser?.id === preSelectedUserId
      );
      if (existingConv) {
        setSelectedConversation(existingConv);
      } else {
        const newConv: Conversation = {
          id: 0,
          participant1Id: currentUserId,
          participant2Id: preSelectedUserId,
          lastActivity: new Date().toISOString(),
          otherUser: {
            id: preSelectedUserId,
            email: `user${preSelectedUserId}@example.com`,
            firstName: "Usuario",
            lastName: `${preSelectedUserId}`,
          },
        };
        setSelectedConversation(newConv);
      }
    }
  }, [preSelectedUserId, conversations, currentUserId]);

  const handleSendMessage = (text: string, mentionIds: number[]) => {
    if (!text || !selectedConversation?.otherUser) return;
    sendMessageMutation.mutate({
      receiverId: selectedConversation.otherUser.id,
      content: text,
      mentions: mentionIds.length > 0 ? mentionIds : undefined,
    });
  };

  const handleSendForumPost = (text: string, mentionIds: number[]) => {
    if (!text) return;
    sendForumPostMutation.mutate({
      content: text,
      mentions: mentionIds,
    });
  };

  const startNewConversation = (user: User) => {
    const newConv: Conversation = {
      id: 0,
      participant1Id: currentUserId,
      participant2Id: user.id,
      lastActivity: new Date().toISOString(),
      otherUser: user,
    };
    setSelectedConversation(newConv);
    setSearchQuery("");
    setActiveTab("mensajes");
  };

  const { data: mentionData } = useQuery<{ forumMentions: number; chatMentions: number; total: number }>({
    queryKey: ["/api/mentions/unread-count"],
    refetchInterval: 15000,
  });
  const mentionCount = mentionData?.total || 0;

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-80 bg-gray-800/90 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl flex flex-col">
        <div className="p-4 border-b border-cyan-500/20 bg-gradient-to-r from-gray-900/80 to-gray-800/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {onClose && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <h1 className="text-xl font-sans bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Mensajes
              </h1>
            </div>
          </div>

          <div className="flex bg-gray-700/50 rounded-xl p-1 mb-4">
            <button
              onClick={() => setActiveTab("mensajes")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "mensajes"
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              Chats
            </button>
            <button
              onClick={() => setActiveTab("foro")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all relative ${
                activeTab === "foro"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar usuarios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-cyan-500/20"
              />
            </div>
          )}
        </div>

        {activeTab === "mensajes" && searchQuery && Array.isArray(searchResults) && searchResults.length > 0 && (
          <div className="p-4 border-b border-gray-700/50">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Usuarios encontrados</h3>
            {(searchResults as User[]).map((user: User) => (
              <div
                key={user.id}
                onClick={() => startNewConversation(user)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-500/10 cursor-pointer transition-all"
              >
                <Avatar className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-700">
                  <AvatarFallback className="bg-transparent text-white font-bold">
                    {getUserInitials(user)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white">{getUserDisplayName(user)}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "mensajes" && (
          <div className="flex-1 overflow-y-auto">
            {conversations.length === 0 ? (
              <div className="p-6 text-center">
                <MessageCircle className="h-10 w-10 text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Sin conversaciones aún</p>
                <p className="text-xs text-gray-600 mt-1">Busca usuarios para iniciar un chat</p>
              </div>
            ) : (
              conversations.map((conversation) => {
                const name = getUserDisplayName(conversation.otherUser);
                const initials = getUserInitials(conversation.otherUser);
                return (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`flex items-center gap-3 p-4 hover:bg-gray-700/50 cursor-pointer transition-all border-l-2 ${
                      selectedConversation?.id === conversation.id
                        ? "bg-cyan-500/10 border-l-cyan-500"
                        : "border-l-transparent"
                    }`}
                  >
                    <Avatar className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-cyan-500">
                      <AvatarFallback className="bg-transparent text-white font-bold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-white truncate">{name}</p>
                        <span className="text-xs text-gray-400">
                          {format(new Date(conversation.lastActivity), "HH:mm", { locale: es })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 truncate">
                        Última actividad
                      </p>
                    </div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {activeTab === "foro" && (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">Foro General</span>
              </div>
              <p className="text-xs text-gray-500">
                Espacio abierto para todas las empresas del portal. Publica mensajes, comparte novedades y menciona a otros con @.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        {activeTab === "foro" ? (
          <>
            <div className="bg-gray-800/90 backdrop-blur-xl border-b border-cyan-500/20 p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
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

            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <div className="space-y-4">
                {forumLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
                  </div>
                ) : forumPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <Globe className="h-12 w-12 text-gray-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-400 mb-1">
                      El foro está vacío
                    </h3>
                    <p className="text-sm text-gray-500">
                      Sé el primero en publicar un mensaje
                    </p>
                  </div>
                ) : (
                  [...forumPosts].reverse().map((post) => {
                    const isOwn = post.userId === currentUserId;
                    const isMentioned = post.mentions?.includes(currentUserId);
                    return (
                      <div key={post.id} className="flex gap-3">
                        <Avatar className="h-9 w-9 bg-gradient-to-br from-emerald-500 to-cyan-500 flex-shrink-0 mt-1">
                          <AvatarFallback className="bg-transparent text-white text-xs font-bold">
                            {getUserInitials(post.author)}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`flex-1 min-w-0 ${isMentioned ? "ring-1 ring-cyan-500/30 rounded-xl" : ""}`}>
                          <div className={`px-4 py-3 rounded-2xl ${
                            isOwn
                              ? "bg-gradient-to-r from-green-500/20 to-green-700/20 border border-green-500/30"
                              : "bg-gray-700/60 border border-gray-600/30"
                          }`}>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-semibold text-emerald-400">
                                {getUserDisplayName(post.author)}
                              </span>
                              {isOwn && (
                                <span className="text-xs text-gray-500">(tú)</span>
                              )}
                              {isMentioned && (
                                <Badge className="bg-cyan-500/20 text-cyan-400 text-xs px-1.5 py-0">
                                  <AtSign className="h-3 w-3 mr-0.5" />
                                  Te mencionó
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-white leading-relaxed">
                              {renderContentWithMentions(post.content)}
                            </p>
                            <span className="text-xs text-gray-500 mt-1 block">
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

            <div className="bg-gray-800/90 backdrop-blur-xl border-t border-cyan-500/20 p-4">
              <MessageInput
                value={forumText}
                onChange={setForumText}
                onSend={handleSendForumPost}
                placeholder="Escribe en el foro... usa @ para mencionar"
                disabled={sendForumPostMutation.isPending}
                allUsers={allUsers}
              />
            </div>
          </>
        ) : selectedConversation ? (
          <>
            <div className="bg-gray-800/90 backdrop-blur-xl border-b border-cyan-500/20 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-gradient-to-br from-emerald-500 to-cyan-500">
                    <AvatarFallback className="bg-transparent text-white font-bold">
                      {getUserInitials(selectedConversation.otherUser)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-white">
                      {getUserDisplayName(selectedConversation.otherUser)}
                    </h2>
                    <p className="text-sm text-emerald-400">En línea</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <div className="space-y-4">
                {Array.isArray(chatMessages) && chatMessages.map((message: MessageItem) => {
                  const isOwn = message.senderId === currentUserId;
                  return (
                    <div
                      key={message.id}
                      className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm ${
                          isOwn
                            ? "bg-gradient-to-r from-green-500 to-green-700 text-white ml-auto"
                            : "bg-gray-700/80 text-white mr-auto border border-gray-600/50"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">
                          {renderContentWithMentions(message.content)}
                        </p>
                        <div className={`flex items-center justify-end gap-1 mt-2 ${
                          isOwn ? "text-cyan-100" : "text-gray-400"
                        }`}>
                          <span className="text-xs">
                            {format(new Date(message.createdAt), "HH:mm", { locale: es })}
                          </span>
                          {isOwn && (
                            message.isRead ? (
                              <CheckCheck className="h-3 w-3 text-cyan-200" />
                            ) : (
                              <Check className="h-3 w-3 text-gray-300" />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="bg-gray-800/90 backdrop-blur-xl border-t border-cyan-500/20 p-4">
              <MessageInput
                value={messageText}
                onChange={setMessageText}
                onSend={handleSendMessage}
                placeholder="Escribe un mensaje... usa @ para mencionar"
                disabled={sendMessageMutation.isPending}
                allUsers={allUsers}
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Send className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Selecciona una conversación
              </h3>
              <p className="text-gray-400 max-w-md">
                Elige una conversación de la lista o busca usuarios para comenzar a chatear. También puedes visitar el Foro General.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}