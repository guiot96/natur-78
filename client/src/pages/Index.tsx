import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Ticket } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Countdown } from "@/components/sections/Countdown";
import { QueVasPreview } from "@/components/sections/QueVasPreview";
import { EntradasPreview } from "@/components/sections/EntradasPreview";
import { Participation } from "@/components/sections/Participation";
import { AmbienteSection } from "@/components/sections/AmbienteSection";
import { Stand } from "@/components/sections/Stand";
import { HistoriasPreview } from "@/components/sections/HistoriasPreview";
import { Partners } from "@/components/sections/Partners";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { HeaderButtons } from "@/components/layout/HeaderButtons";
import ContactForm from "@/components/sections/ContactForm";

const Index = () => {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowMobileCta(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      <HeaderButtons />

      {/* 1. Hero */}
      <Hero />

      {/* Ticker — lime on dark green */}
      <Ticker />

      {/* Countdown */}
      <Countdown />

      {/* 2. ¿Qué vas a encontrar? */}
      <QueVasPreview />

      {/* Para quién es NATUR */}
      <Participation />

      {/* 3. Entradas */}
      <EntradasPreview />

      {/* Ticker between sections — reversed */}
      <Ticker bg="#191C0F" color="rgba(202,217,94,0.3)" reverse />

      {/* 4. Ambiente — foto del festival */}
      <AmbienteSection />

      {/* 5. Reserva tu Stand */}
      <Stand />

      {/* 6. Historias */}
      <HistoriasPreview />

      {/* 7. Aliados */}
      <Partners />

      {/* 8. Ubicación */}
      <Location />

      {/* 9. Contacto */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* ── Mobile sticky CTA — only on small screens, appears after scroll ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
          showMobileCta ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ background: "#191C0F", borderTop: "1px solid rgba(202,217,94,0.25)" }}
      >
        <div className="flex items-center justify-between px-5 py-3 gap-3">
          <div>
            <p className="text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Unbounded, sans-serif" }}>
              Festival NATUR 2026
            </p>
            <p className="text-[10px] font-bold" style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}>
              14 y 15 de agosto · Bogotá
            </p>
          </div>
          <Link to="/tickets">
            <button
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 whitespace-nowrap"
              style={{ background: "#f5e03a", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
            >
              <Ticket className="w-3.5 h-3.5" />
              Entradas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
