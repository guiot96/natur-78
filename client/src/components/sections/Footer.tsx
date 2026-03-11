import React from "react";
import { Link } from "wouter";
import { Mail, MessageCircle, MapPin, Instagram, Facebook, Youtube, Music } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Entradas", href: "/tickets" },
  { label: "Agenda", href: "/agenda" },
  { label: "¿Qué vas a encontrar?", href: "/que-vas-a-encontrar" },
  { label: "Historias", href: "/historias" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Portal Empresas", href: "/portal-empresas" },
];

export function Footer() {
  return (
    <footer className="bg-[#191C0F] text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/">
            <h3 className="font-gasoek text-2xl text-[#cad95e] uppercase tracking-widest mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              FESTIVAL<br />NATUR
            </h3>
          </Link>
          <p className="text-white/50 text-xs leading-relaxed mt-3 max-w-[200px]">
            El primer Festival de Turismo Sostenible de Colombia.
          </p>
          <p className="text-white/40 text-xs mt-3">
            14 y 15 de agosto, 2026<br />Kinder · Bogotá
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Menú</h4>
          <ul className="space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>
                  <span className="text-sm text-white/60 hover:text-[#cad95e] transition-colors cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Contacto</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:info@festivalnatur.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#cad95e] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@festivalnatur.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#cad95e] transition-colors"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                WhatsApp
              </a>
            </li>
            <li>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Bogotá, Colombia
              </div>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Redes</h4>
          <div className="flex flex-col gap-3">
            {[
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              { icon: Music, label: "TikTok", href: "https://tiktok.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#cad95e] transition-colors"
              >
                <s.icon className="w-4 h-4 flex-shrink-0" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados</p>
          <div className="flex gap-5">
            <Link to="/contacto">
              <span className="hover:text-white/60 transition-colors cursor-pointer">Política de privacidad</span>
            </Link>
            <Link to="/contacto">
              <span className="hover:text-white/60 transition-colors cursor-pointer">Términos y condiciones</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
