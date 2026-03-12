import React, { useState, useEffect } from "react";
import { X, Ticket, Home, Calendar, BookOpen, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImg from "@assets/2026_1771518463695.png";

const NAV = [
  { label: "Home",                  short: "Home",      href: "/" },
  { label: "Entradas",              short: "Entradas",  href: "/tickets" },
  { label: "Agenda",                short: "Agenda",    href: "/agenda" },
  { label: "Historias NATUR",       short: "Historias", href: "/historias" },
  { label: "Nosotros",              short: "Nosotros",  href: "/nosotros" },
  { label: "Contacto",              short: "Contacto",  href: "/contacto" },
  { label: "Portal Empresas",       short: "Empresas",  href: "/portal-empresas" },
];

const BOTTOM_TABS = [
  { label: "Home",      href: "/",          icon: Home },
  { label: "Agenda",    href: "/agenda",    icon: Calendar },
  { label: "Entradas",  href: "/tickets",   icon: Ticket, accent: true },
  { label: "Historias", href: "/historias", icon: BookOpen },
];

interface HeaderButtonsProps {
  showPortalButtons?: boolean;
  showPortalEmpresasNav?: boolean;
  navItems?: Array<{ id: string; label: string; icon: React.ComponentType<any> }>;
  activeView?: string;
  onNavigation?: (viewId: string) => void;
}

export function HeaderButtons({}: HeaderButtonsProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      {/* ── Top bar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-[70] transition-colors duration-200"
        style={{
          background: scrolled || open ? '#191C0F' : 'rgba(25,28,15,0.55)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex items-center justify-between h-14 px-5 sm:px-8 max-w-screen-xl mx-auto">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logoImg} alt="Festival NATUR 2026"
              className="h-7 sm:h-8 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6">
            {NAV.map((item) => (
              <Link key={item.href} to={item.href}>
                <span
                  className="text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                  style={{
                    fontFamily: 'Unbounded, sans-serif',
                    color: isActive(item.href) ? '#f5e03a' : 'rgba(255,255,255,0.42)',
                  }}
                  onMouseEnter={e => { if (!isActive(item.href)) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
                  onMouseLeave={e => { if (!isActive(item.href)) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.42)'; }}
                >
                  {item.short}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA + burger (desktop only) */}
          <div className="flex items-center gap-3">
            <Link to="/tickets" className="hidden md:block">
              <button
                className="flex items-center gap-1.5 text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.12em] px-3.5 py-2 transition-opacity hover:opacity-80"
                style={{ background: '#f5e03a', color: '#191C0F', fontFamily: 'Unbounded, sans-serif' }}
              >
                <Ticket className="w-3 h-3" />
                Entradas
              </button>
            </Link>

            {/* Burger — desktop only; mobile uses bottom nav Menú tab */}
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="hidden md:flex items-center justify-center w-9 h-9 transition-colors duration-150"
              style={{ color: open ? '#f5e03a' : 'rgba(255,255,255,0.65)' }}
            >
              {open ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="flex flex-col gap-[5px] justify-center w-5">
                  <span className="block w-full h-px bg-current" />
                  <span className="block w-3 h-px bg-current" />
                  <span className="block w-full h-px bg-current" />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen menu overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto"
          style={{ background: '#191C0F', paddingTop: '56px' }}
        >
          <nav className="flex-1 flex flex-col justify-center px-7 sm:px-16 py-6 sm:py-10 max-w-3xl mx-auto w-full">
            {NAV.map((item, i) => {
              const active = isActive(item.href);
              return (
                <Link key={item.href} to={item.href} onClick={() => setOpen(false)}>
                  <div
                    className="group flex items-center gap-4 sm:gap-8 py-[10px] sm:py-5 border-b cursor-pointer transition-all duration-150"
                    style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                  >
                    <span
                      className="text-[9px] w-5 text-right flex-shrink-0 tabular-nums transition-colors"
                      style={{
                        fontFamily: 'Unbounded, sans-serif',
                        color: active ? '#f5e03a' : 'rgba(255,255,255,0.15)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="uppercase leading-none transition-colors flex-1"
                      style={{
                        fontFamily: active ? 'Gasoek One, sans-serif' : 'Unbounded, sans-serif',
                        fontWeight: active ? 400 : 300,
                        fontSize: 'clamp(0.9rem, 3.2vw, 2.2rem)',
                        color: active ? '#f5e03a' : 'rgba(255,255,255,0.75)',
                        letterSpacing: active ? '-0.01em' : '0.02em',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-base transition-all duration-150 opacity-0 group-hover:opacity-100"
                      style={{ color: '#f5e03a' }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom strip */}
          <div className="flex-shrink-0 px-8 sm:px-16 py-6 max-w-3xl mx-auto w-full flex items-center justify-between gap-4 flex-wrap border-t"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-0.5"
                style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Unbounded, sans-serif' }}>
                Festival NATUR 2026
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
                14 y 15 de agosto · Kinder, Bogotá
              </p>
            </div>
            <Link to="/tickets" onClick={() => setOpen(false)}>
              <button
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 hover:opacity-85 transition-opacity"
                style={{ background: '#f5e03a', color: '#191C0F', fontFamily: 'Unbounded, sans-serif' }}
              >
                <Ticket className="w-3.5 h-3.5" />
                COMPRAR ENTRADAS
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* ── Mobile bottom navigation bar ── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-around"
        style={{
          background: '#191C0F',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        {BOTTOM_TABS.map((tab) => {
          const Icon = tab.icon;
          const active = isActive(tab.href);
          const color = active ? '#f5e03a' : tab.accent ? '#f5e03a' : 'rgba(255,255,255,0.4)';
          return (
            <Link key={tab.href} to={tab.href}>
              <button className="flex flex-col items-center gap-0.5 py-2.5 px-3 min-w-[56px]">
                <Icon className="w-5 h-5" style={{ color }} />
                <span
                  className="text-[10px] font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Unbounded, sans-serif', color }}
                >
                  {tab.label}
                </span>
              </button>
            </Link>
          );
        })}

        {/* Menú tab */}
        <button
          onClick={() => setOpen(v => !v)}
          className="flex flex-col items-center gap-0.5 py-2.5 px-3 min-w-[56px]"
        >
          {open
            ? <X className="w-5 h-5" style={{ color: '#f5e03a' }} />
            : <Menu className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.4)' }} />
          }
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ fontFamily: 'Unbounded, sans-serif', color: open ? '#f5e03a' : 'rgba(255,255,255,0.4)' }}
          >
            Menú
          </span>
        </button>
      </nav>
    </>
  );
}
