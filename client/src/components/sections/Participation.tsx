import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const PARTICIPANTS = [
  "Agencias y operadores turísticos",
  "Hoteles y hostales",
  "Emprendimientos de turismo comunitario",
  "Guías turísticos",
  "Proyectos, fundaciones y organizaciones",
  "Empresas comprometidas con la sostenibilidad",
  "Instituciones gubernamentales y atractivos turísticos",
  "Restaurantes con propósito",
  "Startups",
];

export function Participation() {
  return (
    <section className="w-full" style={{ background: "#191C0F" }}>

      <div className="border-b" style={{ borderColor: "rgba(245,224,58,0.10)" }}>
        <div className="flex items-start md:items-center flex-col md:flex-row">
          <div
            className="hidden md:flex items-center justify-center flex-shrink-0 px-4 self-stretch border-r"
            style={{
              background: "#f5e03a",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              borderColor: "rgba(245,224,58,0.10)",
            }}
          >
            <span
              className="text-[8px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
            >
              ¿Para quién?
            </span>
          </div>

          <div className="flex-1 px-8 md:px-14 py-10 md:py-12">
            <h2
              className="font-unbounded font-bold uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.1rem, 3.2vw, 3.2rem)", color: "#f5e03a" }}
            >
              BUSCAMOS INICIATIVAS{" "}
              <span style={{ WebkitTextStroke: "1.5px #f5e03a", color: "transparent" }}>
                QUE HAGAN TURISMO SOSTENIBLE
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-14 py-8 border-b" style={{ borderColor: "rgba(245,224,58,0.10)" }}>
        <p
          className="text-sm md:text-base leading-relaxed max-w-2xl"
          style={{ color: "rgba(252,248,238,0.50)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
        >
          Si haces parte de la cadena turística y quieres aprender del turismo
          con propósito, este festival es para ti.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PARTICIPANTS.map((label, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-4 px-8 md:px-10 py-7 transition-colors duration-200"
            style={{
              borderBottom: "1px solid rgba(245,224,58,0.08)",
              borderRight: "1px solid rgba(245,224,58,0.08)",
              background: "rgba(255,255,255,0.02)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(245,224,58,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
            }}
          >
            <span
              className="flex-shrink-0 text-[10px] font-bold tabular-nums opacity-25"
              style={{ color: "#f5e03a", fontFamily: "monospace" }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span
              className="text-sm font-medium leading-snug"
              style={{ color: "#FCF8EE", fontFamily: "Unbounded, sans-serif", fontWeight: 300 }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-8 md:px-14 py-8"
        style={{ borderTop: "1px solid rgba(245,224,58,0.10)" }}
      >
        <Link to="/portal-empresas">
          <button
            className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest px-7 py-3.5 hover:brightness-110 transition-all"
            style={{ background: "#f5e03a", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
          >
            <ArrowRight className="w-3 h-3" />
            Reserva tu Stand
          </button>
        </Link>
        <span
          className="text-[9px] uppercase tracking-[0.25em]"
          style={{ color: "rgba(252,248,238,0.20)", fontFamily: "Unbounded, sans-serif" }}
        >
          9 categorías · Cupos limitados
        </span>
      </div>

    </section>
  );
}
