import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Building2, Users, Map, MessageCircle, ArrowRight, MapPin, Network
} from "lucide-react";

interface PortalStats {
  totalCompanies: number;
  totalTravelers: number;
  totalUsers: number;
  recentCompanies: Array<{
    id: number;
    companyName: string;
    companyCategory: string;
    city: string;
    country: string;
    createdAt: string;
  }>;
}

export default function HomePage() {
  const { user, loading: authLoading } = useAuth();

  const effectiveUser = user || (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null);

  useEffect(() => {
    if (!authLoading && (!effectiveUser || (effectiveUser.role !== 'empresa' && effectiveUser.role !== 'admin'))) {
      window.location.replace('/auth/empresas');
    }
  }, [effectiveUser, authLoading]);

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['/api/portal/stats'],
    staleTime: 5 * 60 * 1000,
  }) as { data: PortalStats; isLoading: boolean };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#f5e03a]"></div>
      </div>
    );
  }

  if (!effectiveUser || (effectiveUser.role !== 'empresa' && effectiveUser.role !== 'admin')) {
    return null;
  }

  const displayName = `${effectiveUser.firstName || ''}`.trim() || effectiveUser.email?.split('@')[0] || 'Usuario';
  const companyName = effectiveUser.companyName || '';

  const quickActions = [
    { label: "Mapa", icon: Map, path: "/portal-empresas/mapa", color: "bg-emerald-600", desc: "Explora empresas" },
    { label: "Red", icon: Network, path: "/portal-empresas/red", color: "bg-blue-600", desc: "Conecta" },
    { label: "Chat", icon: MessageCircle, path: "/portal-empresas/mensajes", color: "bg-violet-600", desc: "Mensajes" },
  ];

  const recentCompanies = stats?.recentCompanies?.slice(0, 5) || [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 lg:py-10 space-y-6">
      
      {/* Greeting */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          Hola, {displayName}
        </h1>
        {companyName && (
          <p className="text-white/60 text-sm mt-1">{companyName}</p>
        )}
      </div>

      {/* Stats row */}
      <div className="flex gap-3">
        <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {statsLoading ? "–" : stats?.totalCompanies || 0}
              </p>
              <p className="text-white/50 text-xs">Empresas</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {statsLoading ? "–" : stats?.totalTravelers || 0}
              </p>
              <p className="text-white/50 text-xs">Viajeros</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-3 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.label} href={action.path}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-4 lg:p-5 text-center hover:bg-white/15 transition-colors active:scale-95 cursor-pointer">
                <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold text-sm">{action.label}</p>
                <p className="text-white/50 text-xs mt-0.5 hidden lg:block">{action.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Festival NATUR 2026 banner */}
      <div className="bg-gradient-to-r from-emerald-900/60 to-emerald-800/40 border border-emerald-500/20 rounded-2xl p-5 lg:p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[#f5e03a] font-semibold text-xs uppercase tracking-wider">Próximo evento</p>
            <h3 className="text-white font-bold text-lg lg:text-xl mt-1">Festival NATUR 2026</h3>
            <p className="text-white/60 text-sm mt-1">14–15 de agosto · Kinder, Bogotá</p>
          </div>
          <Link href="/tickets">
            <div className="bg-[#f5e03a] text-black font-bold text-xs px-4 py-2 rounded-full hover:bg-[#f5e03a]/90 transition-colors cursor-pointer whitespace-nowrap">
              Entradas
            </div>
          </Link>
        </div>
      </div>

      {/* Recent companies */}
      {recentCompanies.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-semibold text-base">Empresas recientes</h2>
            <Link href="/portal-empresas/red">
              <span className="text-emerald-400 text-sm flex items-center gap-1 cursor-pointer hover:underline">
                Ver todas <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
          <div className="space-y-2">
            {recentCompanies.map((company) => (
              <div 
                key={company.id}
                className="bg-white/8 backdrop-blur-lg border border-white/10 rounded-xl p-3 flex items-center gap-3 hover:bg-white/12 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold text-sm">
                    {company.companyName?.charAt(0) || 'E'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">{company.companyName}</p>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    {company.companyCategory && <span>{company.companyCategory}</span>}
                    {company.city && (
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-3 h-3" /> {company.city}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Profile CTA */}
      <Link href="/portal-empresas/perfil">
        <div className="bg-white/8 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/12 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white/60" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Completa tu perfil</p>
              <p className="text-white/50 text-xs">Aparece en el mapa y conecta con viajeros</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-white/40" />
        </div>
      </Link>
    </div>
  );
}
