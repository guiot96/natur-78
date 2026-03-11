import React from "react";
import { Link } from "wouter";
import { Ticket } from "lucide-react";

export function AmbienteSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }}>
      {/* Background photo — original hero image */}
      <img
        src="/lovable-uploads/96c8e76d-00c8-4cd5-b263-4b779aa85181.jpg"
        alt="Ambiente Festival NATUR"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay dark green gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,74,30,0.75) 0%, rgba(26,74,30,0.4) 50%, rgba(232,127,160,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-start justify-end px-8 sm:px-16 pb-16 sm:pb-24"
        style={{ minHeight: "70vh" }}
      >
        <p
          className="text-xs tracking-[0.35em] uppercase mb-3 font-bold"
          style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
        >
          Festival Nacional de Turismo Sostenible
        </p>
        <h2
          className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none text-white mb-4"
          style={{ maxWidth: "14ch" }}
        >
          VIVE LA<br />
          <span style={{ color: "#f5e03a" }}>EXPERIENCIA</span>
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
          Dos días de música, cultura, naturaleza e inspiración en el corazón de Bogotá.
          El primer festival de turismo responsable de Colombia.
        </p>
        <Link to="/tickets">
          <button
            className="flex items-center gap-2 font-gasoek text-sm uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
            style={{ background: "#cad95e", color: "#191C0F" }}
          >
            <Ticket className="w-4 h-4" />
            COMPRAR ENTRADAS
          </button>
        </Link>
      </div>
    </section>
  );
}
