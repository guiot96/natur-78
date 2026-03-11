import React, { useState } from "react";
import { Building2, Leaf, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import posterImg from '@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#cad95e', yellow: '#f5e03a', cream: '#FCF8EE',
};

export default function AuthEmpresas() {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [showPwd, setShowPwd] = useState(false);
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async (values: { email: string; password: string }) =>
      apiRequest('/api/auth/login', { method: 'POST', body: JSON.stringify(values) }),
    onSuccess: (data) => {
      toast({ title: '¡Bienvenido!', description: 'Sesión iniciada correctamente' });
      if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
      setTimeout(() => window.location.replace('/portal-empresas'), 800);
    },
    onError: (e: any) => toast({ title: 'Error', description: e.message, variant: 'destructive' }),
  });

  const registerMutation = useMutation({
    mutationFn: async (values: any) =>
      apiRequest('/api/auth/register', { method: 'POST', body: JSON.stringify({ ...values, role: 'empresa' }) }),
    onSuccess: (data) => {
      toast({ title: 'Cuenta creada', description: 'Empresa registrada exitosamente' });
      if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
      setTimeout(() => window.location.replace('/portal-empresas'), 800);
    },
    onError: (e: any) => toast({ title: 'Error', description: e.message, variant: 'destructive' }),
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as any;
    loginMutation.mutate(d);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as any;
    registerMutation.mutate(d);
  };

  return (
    <div className="min-h-screen flex overflow-hidden" style={{ background: P.dark }}>
      {/* Left panel — image + branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-12">
        <img src={posterImg} alt="Festival NATUR"
          className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(26,74,30,0.85) 0%, rgba(25,28,15,0.9) 100%)'
        }} />
        {/* Header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center" style={{ background: P.lime }}>
            <Leaf className="w-4 h-4" style={{ color: P.dark }} />
          </div>
          <Link to="/">
            <span className="font-gasoek text-xl text-white hover:opacity-80 transition-opacity cursor-pointer">
              NATUR
            </span>
          </Link>
        </div>
        {/* Content */}
        <div className="relative z-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-bold"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Portal Empresas
          </p>
          <h1 className="font-gasoek text-5xl uppercase text-white leading-tight mb-6">
            CONECTA TU<br />EMPRESA CON<br />EL TURISMO<br />SOSTENIBLE
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)' }} className="text-base leading-relaxed max-w-sm">
            Accede a la red de empresas, gestiona experiencias y conecta con
            viajeros conscientes en el festival más importante de Colombia.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['Red de Empresas', 'Mapa Interactivo', 'Mensajes B2B', 'Gestión de Experiencias'].map((f) => (
              <span key={f} className="text-xs font-bold uppercase tracking-wider px-3 py-1.5"
                style={{ background: 'rgba(202,217,94,0.12)', color: P.lime, border: `1px solid ${P.lime}30` }}>
                {f}
              </span>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="relative z-10">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Festival NATUR 2026 · 14 y 15 de agosto · Bogotá
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12"
        style={{ background: P.cream }}>
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: P.lime }}>
              <Leaf className="w-4 h-4" style={{ color: P.dark }} />
            </div>
            <span className="font-gasoek text-xl" style={{ color: P.dark }}>NATUR</span>
          </div>

          <p className="text-xs tracking-[0.3em] uppercase mb-2 font-bold"
            style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
            Portal Empresas
          </p>
          <h2 className="font-gasoek text-3xl uppercase mb-8" style={{ color: P.dark }}>
            {tab === 'login' ? 'INICIAR SESIÓN' : 'CREAR CUENTA'}
          </h2>

          {/* Tab toggle */}
          <div className="flex mb-8 border-b" style={{ borderColor: 'rgba(26,74,30,0.15)' }}>
            {(['login', 'register'] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className="flex-1 pb-3 text-sm font-gasoek uppercase tracking-wide transition-all"
                style={{
                  borderBottom: tab === t ? `2px solid ${P.darkGreen}` : '2px solid transparent',
                  color: tab === t ? P.darkGreen : 'rgba(25,28,15,0.4)',
                }}>
                {t === 'login' ? 'Ingresar' : 'Registrarse'}
              </button>
            ))}
          </div>

          {/* Login form */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold"
                  style={{ color: P.midGreen }}>Email</label>
                <input name="email" type="email" required
                  className="w-full border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark,
                    '--tw-ring-color': P.lime } as any} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold"
                  style={{ color: P.midGreen }}>Contraseña</label>
                <div className="relative">
                  <input name="password" type={showPwd ? 'text' : 'password'} required
                    className="w-full border px-4 py-3 pr-12 text-sm focus:outline-none"
                    style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }} />
                  <button type="button" onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-70">
                    {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={loginMutation.isPending}
                className="w-full py-4 font-gasoek text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60 transition-opacity"
                style={{ background: P.darkGreen, color: P.lime }}>
                {loginMutation.isPending ? 'Ingresando…' : (
                  <><ArrowRight className="w-4 h-4" />ENTRAR AL PORTAL</>
                )}
              </button>
              <p className="text-xs text-center mt-4" style={{ color: 'rgba(25,28,15,0.45)' }}>
                ¿No tienes cuenta?{' '}
                <button type="button" onClick={() => setTab('register')}
                  className="font-bold underline" style={{ color: P.midGreen }}>
                  Regístrate aquí
                </button>
              </p>
            </form>
          )}

          {/* Register form */}
          {tab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {[['firstName', 'Nombre'], ['lastName', 'Apellido']].map(([name, label]) => (
                  <div key={name} className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-bold"
                      style={{ color: P.midGreen }}>{label}</label>
                    <input name={name} required
                      className="w-full border px-4 py-3 text-sm focus:outline-none"
                      style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }} />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold"
                  style={{ color: P.midGreen }}>Empresa</label>
                <input name="companyName" required placeholder="Nombre de tu empresa"
                  className="w-full border px-4 py-3 text-sm focus:outline-none"
                  style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold"
                  style={{ color: P.midGreen }}>Email corporativo</label>
                <input name="email" type="email" required
                  className="w-full border px-4 py-3 text-sm focus:outline-none"
                  style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold"
                  style={{ color: P.midGreen }}>Contraseña</label>
                <div className="relative">
                  <input name="password" type={showPwd ? 'text' : 'password'} required
                    className="w-full border px-4 py-3 pr-12 text-sm focus:outline-none"
                    style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }} />
                  <button type="button" onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-70">
                    {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={registerMutation.isPending}
                className="w-full py-4 font-gasoek text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60 transition-opacity"
                style={{ background: P.darkGreen, color: P.lime }}>
                {registerMutation.isPending ? 'Registrando…' : (
                  <><Building2 className="w-4 h-4" />CREAR CUENTA</>
                )}
              </button>
              <p className="text-xs text-center mt-4" style={{ color: 'rgba(25,28,15,0.45)' }}>
                ¿Ya tienes cuenta?{' '}
                <button type="button" onClick={() => setTab('login')}
                  className="font-bold underline" style={{ color: P.midGreen }}>
                  Inicia sesión
                </button>
              </p>
            </form>
          )}

          <div className="mt-10 pt-6 border-t" style={{ borderColor: 'rgba(26,74,30,0.12)' }}>
            <Link to="/">
              <button className="text-xs uppercase tracking-wider font-bold hover:opacity-70 transition-opacity"
                style={{ color: 'rgba(25,28,15,0.4)' }}>
                ← Volver al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
