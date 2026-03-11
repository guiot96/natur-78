import React from "react";
import { Link } from "wouter";
import { Ticket } from "lucide-react";
import posterImg from "@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg";

export function Hero() {
  return (
    <header className="w-full overflow-hidden" style={{ background: "#191C0F" }}>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      {/* ── Poster completo ── */}
      <div className="relative w-full pt-16">
        <img
          src={posterImg}
          alt="Festival NATUR 2026 — Primer Festival Nacional de Turismo Responsable y Sostenible"
          className="w-full h-auto block"
          style={{ display: "block", maxWidth: "100%" }}
        />
      </div>

      {/* ── CTA strip debajo del poster ── */}
      <div
        id="main-content"
        className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-16 py-10"
        style={{ background: "#191C0F" }}
      >
        {/* Info izquierda */}
        <div>
          <p
            className="text-xs tracking-[0.35em] uppercase mb-1 font-bold"
            style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
          >
            Festival Nacional de Turismo Sostenible
          </p>
          <p className="text-white/50 text-sm tracking-wide">
            14 y 15 de agosto · Kinder, Chapinero, Bogotá
          </p>
        </div>

        {/* Botón derecha */}
        <Link to="/tickets">
          <button
            className="flex items-center gap-2 font-gasoek text-base uppercase tracking-wider px-12 py-5 hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg"
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
      </div>
    </header>
  );
}
