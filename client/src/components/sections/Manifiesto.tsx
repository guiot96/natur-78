import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Manifiesto() {
  const [isExpanded, setIsExpanded] = useState(false);

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
            <div className="flex items-start gap-3 flex-wrap">
              <p
                className="text-sm md:text-base leading-relaxed max-w-2xl"
                style={{ color: "rgba(25,28,15,0.60)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
              >
                Un espacio donde comunidades, viajeros y emprendedores se encuentran
                para aprender, bailar y volver a mirar a Colombia con otros ojos.
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest hover:gap-1.5 transition-all cursor-pointer flex-shrink-0 pt-0.5"
                style={{ color: "#2d7a32", fontFamily: "Unbounded, sans-serif" }}
              >
                <span>{isExpanded ? "Ver menos" : "Ver más"}</span>
                <ChevronDown
                  className={`w-2.5 h-2.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {isExpanded && (
              <div
                className="space-y-4 mt-4"
                style={{ color: "rgba(25,28,15,0.55)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
              >
                <p className="text-sm md:text-base leading-relaxed">
                  El Festival NATUR nace del amor profundo por Colombia y de la convicción de que viajar también puede ser una forma de cuidar. No es una feria de viajes. No es una cumbre corporativa. Es un lugar común donde se encuentran las historias más transformadoras del turismo responsable del país: comunidades, viajeros, emprendedores y artistas que han decidido habitar el territorio desde la cultura del cuidado.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Durante dos días, NATUR se convierte en un espacio para aprender, bailar, compartir y volver a mirar a Colombia con otros ojos. Porque viajar también es un acto de sanar, transformar y enseñarnos a vivir juntos.
                </p>
              </div>
            )}
          </div>

          <div className="w-full h-px" style={{ background: "rgba(25,28,15,0.08)" }} />

          <div className="flex items-center px-8 md:px-14 py-7">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
            >
              14–15 AGO 2026 · KINDER, CHAPINERO · BOGOTÁ
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
