import React from "react";
import { Link } from "wouter";
import { ArrowRight, Store } from "lucide-react";

/* Mini decorative sun — matches the poster's red sun motif */
function SunDecor() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 opacity-20 absolute right-8 top-8 pointer-events-none select-none hidden lg:block">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
        <line key={i}
          x1="60" y1="60"
          x2={60 + Math.cos(a * Math.PI / 180) * 58}
          y2={60 + Math.sin(a * Math.PI / 180) * 58}
          stroke="white" strokeWidth="3" />
      ))}
      <circle cx="60" cy="60" r="26" fill="white" />
    </svg>
  );
}

export function Stand() {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden" style={{ background: '#c62828' }}>
      <SunDecor />
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left */}
        <div className="flex-1">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 font-bold"
            style={{ color: 'rgba(255,220,200,0.8)', fontFamily: "Unbounded, sans-serif" }}
          >
            Participa como marca
          </p>
          <h2 className="font-gasoek text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-tight mb-6">
            RESERVA TU<br />STAND
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(255,220,200,0.85)' }}>
            Sé parte de los emprendimientos y marcas que están construyendo el
            futuro del turismo sostenible. Conecta directamente con viajeros,
            aliados e inversores en el primer festival de turismo sostenible de
            Colombia.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="flex items-center gap-3" style={{ color: 'rgba(255,220,200,0.8)' }}>
            <Store className="w-8 h-8" />
            <span className="font-gasoek text-xl uppercase">Kinder · Agosto 2026</span>
          </div>
          <Link to="/contacto">
            <button className="font-gasoek text-sm uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity flex items-center gap-2" style={{ background: '#f5e03a', color: '#191C0F' }}>
              <ArrowRight className="w-4 h-4" />
              RESERVAR STAND
            </button>
          </Link>
          <p className="text-xs text-center max-w-[220px]" style={{ color: 'rgba(255,200,180,0.6)' }}>
            Cupos limitados · info@festivalnatur.com
          </p>
        </div>
      </div>
    </section>
  );
}
