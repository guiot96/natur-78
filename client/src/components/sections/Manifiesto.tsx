import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function Manifiesto() {
  return (
    <section className="w-full" style={{ background: "#FCF8EE" }}>

      <div className="flex items-stretch">
        <div
          className="hidden md:flex items-center justify-center flex-shrink-0 px-4 border-r"
          style={{
            background: "#2d7a32",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            borderColor: "rgba(25,28,15,0.08)",
          }}
        >
          <span
            className="text-[8px] font-bold uppercase tracking-[0.3em]"
            style={{ color: "#FCF8EE", fontFamily: "Unbounded, sans-serif" }}
          >
            El Festival
          </span>
        </div>

        <div className="flex-1">
          <div className="px-8 md:px-14 pt-14 md:pt-20 pb-6">
            <p
              className="text-[9px] uppercase tracking-[0.35em] font-bold mb-5"
              style={{ color: "#2d7a32", fontFamily: "Unbounded, sans-serif" }}
            >
              Festival NATUR 2026 · Bogotá, Colombia
            </p>
            <h2
              className="font-unbounded font-bold uppercase leading-[0.94] tracking-tight"
              style={{ fontSize: "clamp(1.2rem, 3.5vw, 3.5rem)", color: "#191C0F" }}
            >
              EL PRIMER FESTIVAL NACIONAL{" "}
              <span style={{ WebkitTextStroke: "1.5px #191C0F", color: "transparent" }}>
                DE TURISMO SOSTENIBLE
              </span>{" "}
              DE COLOMBIA
            </h2>
          </div>

          <div className="w-full h-px" style={{ background: "rgba(25,28,15,0.08)" }} />

          <div className="px-8 md:px-14 py-8 md:py-10">
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "rgba(25,28,15,0.60)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
            >
              Un espacio donde comunidades, viajeros y emprendedores se encuentran
              para aprender, bailar y volver a mirar a Colombia con otros ojos.
            </p>
          </div>

          <div className="w-full h-px" style={{ background: "rgba(25,28,15,0.08)" }} />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-8 md:px-14 py-7">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
            >
              14–15 AGO 2026 · KINDER, CHAPINERO · BOGOTÁ
            </p>
            <Link to="/historias/que-es-festival-natur">
              <span
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all cursor-pointer"
                style={{ color: "#2d7a32", fontFamily: "Unbounded, sans-serif" }}
              >
                <ArrowRight className="w-3 h-3" />
                Ver artículo completo
              </span>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
