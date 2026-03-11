import kinderImage from "@assets/Captura_de_pantalla_2026-02-19_a_la(s)_11.35.23_a._m._1771518928744.png";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Location() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2" style={{ background: "#191C0F" }}>

      {/* ── Left: full-bleed Kinder photo ── */}
      <div className="relative overflow-hidden min-h-[60vw] md:min-h-[42vw]">
        <img
          src={kinderImage}
          alt="Kinder — Sede Festival NATUR"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(25,28,15,0.75) 0%, transparent 55%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <p className="font-gasoek text-[8vw] md:text-[3.5vw] uppercase leading-none text-white mb-2">
            KINDER
          </p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-px bg-white/35" />
            <span className="text-[9px] uppercase tracking-widest text-white/40"
              style={{ fontFamily: "Unbounded, sans-serif" }}>
              Chapinero · Bogotá
            </span>
          </div>
        </div>
      </div>

      {/* ── Right: venue editorial info ── */}
      <div
        className="flex flex-col justify-between p-8 md:p-12 min-h-[60vw] md:min-h-[42vw]"
        style={{ background: "#cad95e" }}
      >
        {/* Top */}
        <div>
          <span
            className="inline-block text-[9px] tracking-[0.32em] uppercase font-bold px-2.5 py-[3px] mb-8"
            style={{ background: "#191C0F", color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
          >
            Sede del festival
          </span>
          <h2 className="font-gasoek text-[8vw] md:text-[3.8vw] uppercase leading-[0.9] mb-4"
            style={{ color: "#191C0F" }}>
            ¿CUÁNDO<br />Y DÓNDE?
          </h2>
          <p
            className="font-gasoek text-[5vw] md:text-[2.2vw] uppercase leading-tight mb-6"
            style={{ color: "#1a4a1e" }}
          >
            14 y 15 de<br />Agosto 2026
          </p>
        </div>

        {/* Info rows */}
        <div className="space-y-3">
          {[
            ["Dirección", "Calle 59 #6-21"],
            ["Barrio",    "Chapinero"],
            ["Ciudad",    "Bogotá, Colombia"],
            ["Horario",   "10:00 — 22:00h"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between border-b pb-2"
              style={{ borderColor: "rgba(25,28,15,0.18)" }}
            >
              <span className="text-[9px] uppercase tracking-widest"
                style={{ color: "rgba(25,28,15,0.45)", fontFamily: "Unbounded, sans-serif" }}>
                {label}
              </span>
              <span className="text-[10px] font-bold"
                style={{ color: "rgba(25,28,15,0.8)", fontFamily: "Unbounded, sans-serif" }}>
                {value}
              </span>
            </div>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <p className="text-xs leading-relaxed"
              style={{ color: "rgba(25,28,15,0.55)" }}>
              Kinder nace de la transformación de un antiguo espacio educativo en un referente cultural de Bogotá — el lugar perfecto para el primer festival de turismo sostenible de Colombia.
            </p>
            <Link to="/contacto">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all cursor-pointer"
                style={{ color: "#1a4a1e", fontFamily: "Unbounded, sans-serif" }}>
                <ArrowRight className="w-3 h-3" />
                Cómo llegar
              </div>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
