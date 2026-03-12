import { Link } from "wouter";
import { Ticket, ArrowRight } from "lucide-react";
import crowdImg from "@assets/stock_images/whale_landscape.jpg";

export function AmbienteSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "60vh" }}>

      <img
        src={crowdImg}
        alt="Ballena jorobada — Festival NATUR 2026"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(25,28,15,0.52)" }}
      />

      <div
        className="relative z-10 flex flex-col justify-between px-7 sm:px-14 py-12 sm:py-16 md:py-20"
        style={{ minHeight: "60vh" }}
      >
        {/* Top label */}
        <div className="flex items-center justify-between">
          <span
            className="text-[9px] tracking-[0.35em] uppercase font-bold"
            style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
          >
            Agosto 14 y 15 · 2026
          </span>
          <span
            className="text-[9px] tracking-[0.25em] uppercase hidden sm:block"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Unbounded, sans-serif" }}
          >
            Kinder · Chapinero · Bogotá
          </span>
        </div>

        {/* Bottom — text + CTA */}
        <div className="mt-auto">
          <h2 className="font-gasoek text-[8vw] sm:text-[9vw] md:text-[5.5vw] uppercase leading-[0.88] text-white mb-1">
            VIVE
          </h2>
          <h2
            className="font-unbounded font-extralight uppercase leading-[1.1] tracking-widest mb-7"
            style={{ fontSize: "clamp(0.75rem, 2.8vw, 1.6rem)", color: "#f5e03a" }}
          >
            LA EXPERIENCIA
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link to="/tickets">
              <button
                className="flex items-center gap-2.5 font-bold text-[11px] uppercase tracking-widest px-7 py-3.5 hover:brightness-110 transition-all"
                style={{ background: "#f5e03a", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
              >
                <Ticket className="w-3.5 h-3.5" />
                Comprar entradas
              </button>
            </Link>
            <Link to="/agenda">
              <div
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all cursor-pointer"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Unbounded, sans-serif" }}
              >
                <ArrowRight className="w-3 h-3" />
                Ver agenda completa
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
