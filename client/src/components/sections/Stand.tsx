import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import standImg from "@assets/generated_images/natur_stand.png";

export function Stand() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2" style={{ background: "#cad95e" }}>

      {/* ── Left: editorial text block ── */}
      <div className="flex flex-col justify-between p-10 md:p-14 min-h-[60vw] md:min-h-[45vw]">
        <div>
          <span
            className="inline-block text-[9px] tracking-[0.32em] uppercase font-bold px-2.5 py-[3px] mb-8"
            style={{ background: "#191C0F", color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
          >
            Participa como marca
          </span>
          <h2 className="font-gasoek text-[11vw] md:text-[5.5vw] uppercase leading-[0.88]"
            style={{ color: "#191C0F" }}>
            RESERVA<br />TU STAND
          </h2>
          <p
            className="font-unbounded font-extralight text-[3.5vw] md:text-[1.2vw] mt-4 max-w-sm leading-relaxed"
            style={{ color: "rgba(25,28,15,0.55)" }}
          >
            Conecta directamente con viajeros, aliados e inversores en el primer festival de turismo sostenible de Colombia.
          </p>
        </div>

        <div className="space-y-5 mt-8">
          {/* Info rows */}
          <div className="space-y-2">
            {[
              ["Fecha", "14 y 15 de Agosto 2026"],
              ["Sede", "Kinder · Chapinero · Bogotá"],
              ["Cupos", "Limitados"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between border-b pb-2"
                style={{ borderColor: "rgba(25,28,15,0.15)" }}>
                <span className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(25,28,15,0.45)", fontFamily: "Unbounded, sans-serif" }}>
                  {label}
                </span>
                <span className="text-[10px] font-bold" style={{ color: "rgba(25,28,15,0.75)", fontFamily: "Unbounded, sans-serif" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link to="/contacto">
              <button
                className="flex items-center justify-between gap-6 font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
                style={{ background: "#191C0F", color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
              >
                <span className="flex items-center gap-2.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                  Reservar stand
                </span>
              </button>
            </Link>
            <a
              href="mailto:info@festivalnatur.com?subject=Stand Festival NATUR 2026"
              className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
              style={{ color: "rgba(25,28,15,0.5)", fontFamily: "Unbounded, sans-serif" }}
            >
              <ArrowRight className="w-3 h-3" />
              info@festivalnatur.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Right: stand photo ── */}
      <div className="relative overflow-hidden min-h-[65vw] md:min-h-[45vw]">
        <img
          src={standImg}
          alt="Stand Festival NATUR"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(245,224,58,0.4) 100%)" }}
        />
        {/* Bottom caption */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center justify-between">
            <span
              className="inline-block text-[9px] tracking-[0.3em] uppercase font-bold px-2.5 py-[3px]"
              style={{ background: "#1a4a1e", color: "white", fontFamily: "Unbounded, sans-serif" }}
            >
              Feria de emprendimientos
            </span>
            <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
              AGO 2026
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
