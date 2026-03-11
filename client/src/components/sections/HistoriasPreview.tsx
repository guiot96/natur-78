import { Link } from "wouter";
import { ArrowRight, Feather } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Naturaleza",
    desc: "Destinos que respiran: ecosistemas, paisajes y territorios que demuestran que Colombia es el país más biodiverso del mundo.",
    accent: "#cad95e",
    bg: "#1a4a1e",
  },
  {
    num: "02",
    title: "Comunidades",
    desc: "Historias de personas y pueblos que han hecho del turismo una herramienta de vida, cultura y preservación del territorio.",
    accent: "#f5e03a",
    bg: "#191C0F",
  },
  {
    num: "03",
    title: "Futuro",
    desc: "Proyectos, modelos y visiones que están redefiniendo la forma en que Colombia se muestra al mundo — desde adentro.",
    accent: "#cad95e",
    bg: "#2d7a32",
  },
];

export function HistoriasPreview() {
  return (
    <section className="w-full" style={{ background: "#191C0F" }}>

      {/* ── Header ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/8">

        {/* Left: heading */}
        <div className="px-8 md:px-14 pt-14 pb-10 border-b md:border-b-0 md:border-r border-white/8">
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
            style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
          >
            Blog · Editorial
          </p>
          <h2 className="font-gasoek uppercase leading-[0.88] text-white"
            style={{ fontSize: "clamp(2.8rem, 9vw, 7rem)" }}>
            HISTORIAS<br />
            <span style={{ color: "#f5e03a" }}>NATUR</span>
          </h2>
        </div>

        {/* Right: intro */}
        <div className="flex flex-col justify-between px-8 md:px-12 py-10 gap-6">
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
              style={{ background: "rgba(202,217,94,0.12)", border: "1px solid rgba(202,217,94,0.25)" }}
            >
              <Feather className="w-3.5 h-3.5" style={{ color: "#cad95e" }} />
            </div>
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-widest mb-2"
                style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
              >
                Próximamente · Agosto 2026
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
              >
                Historias NATUR será el espacio editorial del festival — crónicas, reportajes y entrevistas sobre el turismo sostenible colombiano. Voces desde el territorio, proyectos que transforman y destinos que inspiran.
              </p>
            </div>
          </div>

          <div>
            <div className="w-full h-px mb-4" style={{ background: "rgba(255,255,255,0.07)" }} />
            <p
              className="text-[9px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Unbounded, sans-serif" }}
            >
              Las primeras historias se publican en agosto 2026 — junto al festival.
            </p>
          </div>
        </div>
      </div>

      {/* ── Three thematic pillars ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/8">
        {pillars.map((p, i) => (
          <div
            key={p.num}
            className="flex flex-col justify-between p-8 md:p-10 min-h-[60vw] md:min-h-[32vw]"
            style={{
              background: p.bg,
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : undefined,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <span
                className="text-[9px] font-bold uppercase tracking-widest px-2 py-[2px]"
                style={{ background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}30`, fontFamily: "Unbounded, sans-serif" }}
              >
                Eje temático
              </span>
              <span className="font-gasoek text-5xl leading-none opacity-10 text-white">{p.num}</span>
            </div>

            {/* Middle: giant category name */}
            <div className="py-4">
              <h3
                className="font-gasoek uppercase leading-[0.88]"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "rgba(255,255,255,0.85)" }}
              >
                {p.title}
              </h3>
            </div>

            {/* Bottom */}
            <div>
              <div className="w-full h-px mb-3" style={{ background: "rgba(255,255,255,0.08)" }} />
              <p className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA strip ── */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 md:px-14 py-7"
        style={{ background: "rgba(202,217,94,0.04)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
        >
          Sé el primero en leer — las historias llegan con el festival.
        </p>
        <Link to="/historias">
          <button
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-7 py-3.5 hover:opacity-80 transition-opacity whitespace-nowrap"
            style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
          >
            <ArrowRight className="w-3 h-3" />
            Saber más
          </button>
        </Link>
      </div>

    </section>
  );
}
