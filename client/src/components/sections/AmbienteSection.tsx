import { Link } from "wouter";
import { Ticket, ArrowRight } from "lucide-react";
import crowdImg from "@assets/generated_images/natur_crowd.png";

export function AmbienteSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "85vh" }}>

      {/* Full-bleed background */}
      <img
        src={crowdImg}
        alt="Ambiente Festival NATUR 2026"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(25,28,15,0.35) 0%, rgba(25,28,15,0.55) 100%)" }}
      />

      {/* Content — editorial bottom-left anchored */}
      <div
        className="relative z-10 flex flex-col justify-between px-8 sm:px-14 py-16 md:py-20"
        style={{ minHeight: "85vh" }}
      >
        {/* Top label */}
        <div className="flex items-center justify-between">
          <span
            className="text-[10px] tracking-[0.35em] uppercase font-bold"
            style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
          >
            Agosto 14 y 15 · 2026
          </span>
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Unbounded, sans-serif" }}
          >
            Kinder · Chapinero · Bogotá
          </span>
        </div>

        {/* Bottom — massive text + CTA */}
        <div className="mt-auto">
          <h2 className="font-gasoek text-[18vw] md:text-[10vw] uppercase leading-[0.85] text-white mb-2">
            VIVE
          </h2>
          <h2 className="font-gasoek text-[12vw] md:text-[6.5vw] uppercase leading-[0.85] mb-8"
            style={{ color: "#cad95e" }}>
            LA EXPERIENCIA
          </h2>

          {/* Info + CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link to="/tickets">
              <button
                className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest px-9 py-4 hover:opacity-90 transition-opacity"
                style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
              >
                <Ticket className="w-4 h-4" />
                Comprar entradas
              </button>
            </Link>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-3 h-px" style={{ background: "rgba(255,255,255,0.4)" }} />
                <p className="text-white/50 text-xs tracking-wide"
                  style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
                  2 días · Música, charlas, naturaleza
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-px" style={{ background: "rgba(255,255,255,0.4)" }} />
                <p className="text-white/50 text-xs tracking-wide"
                  style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
                  Primer festival de turismo sostenible de Colombia
                </p>
              </div>
            </div>

            <Link to="/agenda">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:gap-3 transition-all ml-0 sm:ml-auto"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Unbounded, sans-serif" }}>
                <ArrowRight className="w-3.5 h-3.5" />
                Ver agenda
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
