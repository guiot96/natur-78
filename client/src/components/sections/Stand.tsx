import React from "react";
import { Link } from "wouter";
import { ArrowRight, Store } from "lucide-react";

export function Stand() {
  return (
    <section className="w-full bg-[#aa3b1e] py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left */}
        <div className="flex-1">
          <p
            className="text-[#e5bbb0] text-xs tracking-[0.3em] uppercase mb-4 font-bold"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            Participa como marca
          </p>
          <h2 className="font-gasoek text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-tight mb-6">
            RESERVA TU<br />STAND
          </h2>
          <p className="text-[#e5bbb0] text-base sm:text-lg leading-relaxed max-w-lg">
            Sé parte de los emprendimientos y marcas que están construyendo el
            futuro del turismo sostenible. Conecta directamente con viajeros,
            aliados e inversores en el primer festival de turismo sostenible de
            Colombia.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="flex items-center gap-3 text-[#e5bbb0]">
            <Store className="w-8 h-8" />
            <span className="font-gasoek text-xl uppercase">Kinder · Agosto 2026</span>
          </div>
          <Link to="/contacto">
            <button className="bg-white text-[#aa3b1e] font-gasoek text-sm uppercase tracking-wider px-10 py-4 hover:bg-[#FCF8EE] transition-colors flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              RESERVAR STAND
            </button>
          </Link>
          <p className="text-[#e5bbb0]/60 text-xs text-center max-w-[220px]">
            Cupos limitados · info@festivalnatur.com
          </p>
        </div>
      </div>
    </section>
  );
}
