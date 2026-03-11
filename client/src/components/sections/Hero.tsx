import React from "react";
import { Link } from "wouter";
import { Ticket } from "lucide-react";
import posterImg from "@assets/WhatsApp_Image_2026-03-10_at_10.00.13_PM_1773257287514.jpeg";

export function Hero() {
  return (
    <header className="relative w-full overflow-hidden" style={{ minHeight: "100svh" }}>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      {/* ── Poster — protagonist ── */}
      <img
        src={posterImg}
        alt="Festival NATUR 2026 — Primer Festival Nacional de Turismo Responsable y Sostenible"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ filter: "brightness(0.96)" }}
      />

      {/* Subtle gradient only at bottom so CTA is readable */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "45%",
          background: "linear-gradient(to top, rgba(26,74,30,0.92) 0%, rgba(26,74,30,0.5) 50%, transparent 100%)",
        }}
      />

      {/* ── Content pinned to bottom ── */}
      <div
        id="main-content"
        className="relative z-10 flex flex-col items-center justify-end px-6 pb-14 sm:pb-20"
        style={{ minHeight: "100svh" }}
      >
        {/* Date badge */}
        <p
          className="text-xs tracking-[0.35em] uppercase mb-5 font-bold"
          style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
        >
          14 y 15 de agosto · Kinder, Bogotá
        </p>

        {/* CTA */}
        <Link to="/tickets">
          <button
            className="flex items-center gap-2 font-gasoek text-base sm:text-lg uppercase tracking-wider px-12 py-5 shadow-2xl hover:opacity-90 transition-opacity"
            style={{
              background: "#cad95e",
              color: "#191C0F",
              letterSpacing: "0.12em",
            }}
          >
            <Ticket className="w-5 h-5" />
            COMPRAR ENTRADAS
          </button>
        </Link>

        {/* Scroll hint */}
        <div className="mt-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </div>
    </header>
  );
}
