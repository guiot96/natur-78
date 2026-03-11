import { Link } from "wouter";
import { Ticket, ArrowRight } from "lucide-react";
import posterImg from "@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg";

export function Hero() {
  return (
    <header className="w-full overflow-hidden" style={{ background: "#191C0F" }}>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      {/* ── Poster full-bleed ── */}
      <div className="relative w-full pt-14">
        <img
          src={posterImg}
          alt="Festival NATUR 2026 — Primer Festival Nacional de Turismo Responsable y Sostenible"
          className="w-full h-auto block"
        />
        {/* Bottom gradient fade into CTA strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, #191C0F)" }}
        />
      </div>

      {/* ── Editorial CTA strip ── */}
      <div id="main-content" className="w-full" style={{ background: "#191C0F" }}>
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* Col 1 — headline */}
          <div className="md:col-span-2 px-8 md:px-14 py-10 md:py-12 border-r border-white/10">
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
            >
              Festival Nacional de Turismo Sostenible
            </p>
            <h1
              className="font-gasoek text-[13vw] md:text-[6vw] uppercase leading-[0.88] text-white"
            >
              NATUR<br />
              <span style={{ color: "#cad95e" }}>2026</span>
            </h1>
            <p className="text-white/45 text-sm mt-3 tracking-wide"
              style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
              14 y 15 de agosto · Kinder, Chapinero, Bogotá
            </p>
          </div>

          {/* Col 2 — CTA */}
          <div className="flex flex-col items-start justify-center px-8 md:px-10 py-10 md:py-12 gap-5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-white/35 text-xs" style={{ fontFamily: "Unbounded, sans-serif" }}>
                <span className="w-5 h-px bg-white/20" />
                <span className="uppercase tracking-widest">Entradas</span>
              </div>
              <p className="font-gasoek text-4xl md:text-5xl" style={{ color: "#f5e03a" }}>
                $50.000
              </p>
              <p className="text-white/30 text-[11px] uppercase tracking-widest" style={{ fontFamily: "Unbounded, sans-serif" }}>
                Desde · COP
              </p>
            </div>

            <Link to="/tickets">
              <button
                className="group flex items-center justify-between gap-6 w-full md:w-auto font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
                style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
              >
                <span className="flex items-center gap-2.5">
                  <Ticket className="w-3.5 h-3.5" />
                  Comprar entradas
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>

            <Link to="/agenda">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:gap-3 transition-all"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Unbounded, sans-serif" }}>
                <ArrowRight className="w-3 h-3" />
                Ver agenda
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
