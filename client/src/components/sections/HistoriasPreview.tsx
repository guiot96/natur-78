import { Link } from "wouter";
import { ArrowRight, Lock } from "lucide-react";

const stories = [
  { num: "01", tag: "Ecosistemas",   title: "Caño Cristales — El Río de los Cinco Colores",            region: "Meta" },
  { num: "02", tag: "Patrimonio",    title: "Eje Cafetero — Patrimonio Cultural de la Humanidad",      region: "Caldas / Quindío" },
  { num: "03", tag: "Costa",         title: "Tayrona — Donde la Selva Abraza el Mar",                 region: "Magdalena" },
  { num: "04", tag: "Amazonia",      title: "Amazonas — El Pulmón Verde del Mundo",                   region: "Amazonas" },
  { num: "05", tag: "Desierto",      title: "Guajira — El Desierto que Respira",                      region: "La Guajira" },
  { num: "06", tag: "Insular",       title: "Providencia — La Isla Libre de Plástico",                region: "San Andrés" },
  { num: "07", tag: "Biodiversidad", title: "Los Llanos — Sabanas Vivas de la Orinoquía",             region: "Casanare / Vichada" },
  { num: "08", tag: "Montaña",       title: "Sierra Nevada — La Montaña Costera más Alta del Mundo",  region: "Santa Marta" },
  { num: "09", tag: "Comunidades",   title: "Pueblos Arhuacos — Guardianes del Territorio",           region: "Sierra Nevada" },
  { num: "10", tag: "Slow Travel",   title: "Jardín, Antioquia — El Turismo que Protege",             region: "Antioquia" },
];

export function HistoriasPreview() {
  return (
    <section className="w-full" style={{ background: "#191C0F" }}>

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 px-8 md:px-14 pt-16 pb-10 border-b border-white/8">
        <div>
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
            style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
          >
            Blog · Artículos
          </p>
          <h2 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none text-white">
            HISTORIAS<br />
            <span style={{ color: "#f5e03a" }}>NATUR</span>
          </h2>
        </div>

        {/* Próximamente badge */}
        <div className="flex flex-col items-start sm:items-end gap-3">
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{ background: "rgba(245,224,58,0.1)", border: "1px solid rgba(245,224,58,0.25)" }}
          >
            <Lock className="w-3 h-3" style={{ color: "#f5e03a" }} />
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
            >
              Próximamente
            </span>
          </div>
          <p
            className="text-[9px] uppercase tracking-widest text-right"
            style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Unbounded, sans-serif" }}
          >
            10 historias · Agosto 2026
          </p>
        </div>
      </div>

      {/* ── Story list ── */}
      <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        {stories.map((s, i) => (
          <div
            key={s.num}
            className="group flex items-center gap-5 md:gap-8 px-8 md:px-14 py-5 transition-colors hover:bg-white/3 cursor-default"
          >
            {/* Number */}
            <span
              className="font-gasoek text-3xl md:text-4xl leading-none w-10 flex-shrink-0 opacity-20 group-hover:opacity-40 transition-opacity tabular-nums"
              style={{ color: "#cad95e" }}
            >
              {s.num}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-[8px] font-bold uppercase tracking-widest px-2 py-[2px]"
                  style={{ background: "rgba(202,217,94,0.1)", color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
                >
                  {s.tag}
                </span>
                <span
                  className="text-[8px] uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Unbounded, sans-serif" }}
                >
                  {s.region}
                </span>
              </div>
              <h3
                className="font-gasoek text-lg md:text-2xl uppercase leading-tight truncate"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {s.title}
              </h3>
            </div>

            {/* Locked indicator */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <Lock className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.2)" }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA strip ── */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 md:px-14 py-8 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(202,217,94,0.04)" }}
      >
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
        >
          Las 10 historias más importantes del turismo sostenible en Colombia.<br />
          Publicadas en agosto 2026 — Festival NATUR.
        </p>
        <Link to="/historias">
          <button
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-7 py-4 hover:opacity-80 transition-opacity whitespace-nowrap"
            style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
            Ver todas
          </button>
        </Link>
      </div>

    </section>
  );
}
