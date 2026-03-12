
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
import { useEffect, lazy, Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import React from "react";
import { PortalSkeleton } from "@/components/ui/PortalSkeleton";

import Tickets from "./pages/Tickets";
import Noticias from "./pages/Noticias";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";

import AuthEmpresas from "./pages/AuthEmpresas";
import ComprehensiveCompanyRegistration from "./pages/ComprehensiveCompanyRegistration";
import { PortalEmpresasLayout } from "./components/layout/PortalEmpresasLayout";

const HomePage = lazy(() => import("./pages/portal-empresas/HomePage"));
const MapaPage = lazy(() => import("./pages/portal-empresas/MapaPage"));
const RedPage = lazy(() => import("./pages/portal-empresas/RedPage"));
const ExperienciasPage = lazy(() => import("./pages/portal-empresas/ExperienciasPage"));
const MensajesPage = lazy(() => import("./pages/portal-empresas/MensajesPage"));
const PerfilPage = lazy(() => import("./pages/portal-empresas/PerfilPage"));
const ConfigPage = lazy(() => import("./pages/portal-empresas/ConfigPage"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

import SessionDetail from "./pages/SessionDetail";
import VerificationPending from "./pages/VerificationPending";
import EmailVerification from "./pages/EmailVerification";

const queryClient = new QueryClient();

const PortalPage = ({ children }: { children: React.ReactNode }) => (
  <PortalEmpresasLayout>
    <Suspense fallback={<PortalSkeleton />}>
      {children}
    </Suspense>
  </PortalEmpresasLayout>
);

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
                <Route path="/historias" component={Noticias} />
                <Route path="/historias/:slug" component={BlogPost} />
                <Route path="/nosotros" component={About} />
                <Route path="/contacto" component={Contact} />

                {/* ── Portal Empresas ── */}
                <Route path="/auth/empresas" component={AuthEmpresas} />
                <Route path="/registro-empresa" component={ComprehensiveCompanyRegistration} />
                <Route path="/portal-empresas/mapa">
                  <PortalPage><MapaPage /></PortalPage>
                </Route>
                <Route path="/portal-empresas/red">
                  <PortalPage><RedPage /></PortalPage>
                </Route>
                <Route path="/portal-empresas/experiencias">
                  <PortalPage><ExperienciasPage /></PortalPage>
                </Route>
                <Route path="/portal-empresas/mensajes">
                  <PortalPage><MensajesPage /></PortalPage>
                </Route>
                <Route path="/portal-empresas/perfil">
                  <PortalPage><PerfilPage /></PortalPage>
                </Route>
                <Route path="/portal-empresas/config">
                  <PortalPage><ConfigPage /></PortalPage>
                </Route>
                <Route path="/portal-empresas">
                  <PortalPage><HomePage /></PortalPage>
                </Route>

                {/* ── Auth & utility ── */}
                <Route path="/verificacion-pendiente" component={VerificationPending} />
                <Route path="/verificar-email" component={EmailVerification} />
                <Route path="/admin">
                  {() => (
                    <Suspense fallback={<PortalSkeleton />}>
                      <AdminDashboard />
                    </Suspense>
                  )}
                </Route>
                <Route path="/sesion/:sessionId" component={SessionDetail} />

                {/* ── Legacy redirects ── */}
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
