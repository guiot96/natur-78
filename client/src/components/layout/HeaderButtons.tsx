import React, { useState, useEffect } from "react";
import { Menu, X, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/2026_1771518463695.png";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ENTRADAS", href: "/tickets" },
  { label: "AGENDA", href: "/agenda" },
  { label: "¿QUÉ VAS A ENCONTRAR?", href: "/que-vas-a-encontrar" },
  { label: "HISTORIAS NATUR", href: "/historias" },
  { label: "NOSOTROS", href: "/nosotros" },
  { label: "CONTACTO", href: "/contacto" },
  { label: "PORTAL EMPRESAS", href: "/portal-empresas" },
];

interface HeaderButtonsProps {
  showPortalButtons?: boolean;
  showPortalEmpresasNav?: boolean;
  navItems?: Array<{ id: string; label: string; icon: React.ComponentType<any> }>;
  activeView?: string;
  onNavigation?: (viewId: string) => void;
}

export function HeaderButtons({
  showPortalButtons = false,
  showPortalEmpresasNav = false,
  navItems = [],
  activeView = "",
  onNavigation,
}: HeaderButtonsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "bg-[#191C0F]/95 backdrop-blur-lg shadow-lg border-b border-white/10"
            : "bg-black/20 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
          {/* Logo → always links to HOME */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={logoImg}
              alt="Festival NATUR 2026"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation — hidden on mobile */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                <button
                  className={`px-3 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 rounded whitespace-nowrap font-gasoek ${
                    isActive(item.href)
                      ? "text-[#cad95e] bg-white/10"
                      : "text-white/80 hover:text-[#cad95e] hover:bg-white/5"
                  } ${item.href === "/portal-empresas" ? "text-[#cad95e] border border-[#cad95e]/40 hover:bg-[#cad95e]/10" : ""}`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA — buy tickets */}
          <div className="hidden xl:flex items-center gap-3">
            <Link to="/tickets">
              <Button
                size="sm"
                className="bg-[#cad95e] hover:bg-[#b8c94d] text-black font-bold tracking-wide uppercase rounded-none px-5 py-2 font-gasoek"
              >
                <Ticket className="w-4 h-4 mr-2" />
                COMPRAR ENTRADAS
              </Button>
            </Link>
          </div>

          {/* Hamburger — visible below xl */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="xl:hidden w-11 h-11 text-white hover:text-[#cad95e] hover:bg-white/10 rounded-lg border border-white/20 transition-all"
            aria-label="Abrir menú"
          >
            <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </Button>
        </div>
      </header>

      {/* Mobile / tablet menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 sm:top-18 left-0 right-0 z-40 bg-[#191C0F]/97 backdrop-blur-xl border-b border-white/10 shadow-2xl xl:hidden"
          >
            <nav className="flex flex-col divide-y divide-white/5 max-h-[calc(100vh-70px)] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)}>
                  <button
                    className={`w-full text-left px-6 py-4 text-base font-gasoek tracking-widest uppercase transition-colors duration-150 ${
                      isActive(item.href)
                        ? "text-[#cad95e] bg-white/5"
                        : "text-white/80 hover:text-[#cad95e] hover:bg-white/5"
                    } ${item.href === "/portal-empresas" ? "text-[#cad95e]" : ""}`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="px-6 py-5">
                <Link to="/tickets" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#cad95e] hover:bg-[#b8c94d] text-black font-bold tracking-wide uppercase rounded-none font-gasoek text-sm py-3">
                    <Ticket className="w-4 h-4 mr-2" />
                    COMPRAR ENTRADAS
                  </Button>
                </Link>
              </div>

              {/* Social links */}
              <div className="px-6 py-4 flex gap-4 text-white/50 text-xs">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#cad95e] transition-colors">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#cad95e] transition-colors">Facebook</a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[#cad95e] transition-colors">TikTok</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#cad95e] transition-colors">YouTube</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
