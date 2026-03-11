
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Agenda from "./pages/Agenda";
import ErrorBoundary from "@/components/ErrorBoundary";
import { setupGlobalErrorHandlers } from "@/lib/errorHandler";
import { useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import React from "react";

// Main public pages
import Tickets from "./pages/Tickets";
import Noticias from "./pages/Noticias";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import QueVasAEncontrar from "./pages/QueVasAEncontrar";

// Portal Empresas
import MinimalistPortalEmpresas from "./pages/MinimalistPortalEmpresas";
import AuthEmpresas from "./pages/AuthEmpresas";
import ComprehensiveCompanyRegistration from "./pages/ComprehensiveCompanyRegistration";
import HomePage from "./pages/portal-empresas/HomePage";
import MapaPage from "./pages/portal-empresas/MapaPage";
import RedPage from "./pages/portal-empresas/RedPage";
import ExperienciasPage from "./pages/portal-empresas/ExperienciasPage";
import MensajesPage from "./pages/portal-empresas/MensajesPage";
import PerfilPage from "./pages/portal-empresas/PerfilPage";
import ConfigPage from "./pages/portal-empresas/ConfigPage";
import { PortalEmpresasLayout } from "./components/layout/PortalEmpresasLayout";

// Misc
import AdminDashboard from "./pages/AdminDashboard";
import SessionDetail from "./pages/SessionDetail";
import VerificationPending from "./pages/VerificationPending";
import EmailVerification from "./pages/EmailVerification";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    setupGlobalErrorHandlers();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ErrorBoundary>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Router>
              <Switch>
                {/* ── Main public pages ── */}
                <Route path="/" component={Index} />
                <Route path="/tickets" component={Tickets} />
                <Route path="/agenda" component={Agenda} />
                <Route path="/que-vas-a-encontrar" component={QueVasAEncontrar} />
                <Route path="/historias" component={Noticias} />
                <Route path="/historias/:slug" component={BlogPost} />
                <Route path="/nosotros" component={About} />
                <Route path="/contacto" component={Contact} />

                {/* ── Portal Empresas ── */}
                <Route path="/auth/empresas" component={AuthEmpresas} />
                <Route path="/registro-empresa" component={ComprehensiveCompanyRegistration} />
                <Route path="/portal-empresas/mapa">
                  <PortalEmpresasLayout><MapaPage /></PortalEmpresasLayout>
                </Route>
                <Route path="/portal-empresas/red">
                  <PortalEmpresasLayout><RedPage /></PortalEmpresasLayout>
                </Route>
                <Route path="/portal-empresas/experiencias">
                  <PortalEmpresasLayout><ExperienciasPage /></PortalEmpresasLayout>
                </Route>
                <Route path="/portal-empresas/mensajes">
                  <PortalEmpresasLayout><MensajesPage /></PortalEmpresasLayout>
                </Route>
                <Route path="/portal-empresas/perfil">
                  <PortalEmpresasLayout><PerfilPage /></PortalEmpresasLayout>
                </Route>
                <Route path="/portal-empresas/config">
                  <PortalEmpresasLayout><ConfigPage /></PortalEmpresasLayout>
                </Route>
                <Route path="/portal-empresas">
                  <PortalEmpresasLayout><HomePage /></PortalEmpresasLayout>
                </Route>

                {/* ── Auth & utility ── */}
                <Route path="/verificacion-pendiente" component={VerificationPending} />
                <Route path="/verificar-email" component={EmailVerification} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/sesion/:sessionId" component={SessionDetail} />

                {/* ── Legacy redirects — keep old blog URLs working ── */}
                <Route path="/noticias" component={Noticias} />
                <Route path="/blog/:slug" component={BlogPost} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />

                {/* 404 */}
                <Route><NotFound /></Route>
              </Switch>
            </Router>
          </TooltipProvider>
        </ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
