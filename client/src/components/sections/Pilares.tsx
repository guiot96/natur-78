import { Link } from "wouter";

const CONOCIMIENTO = [
  {
    numero: "01",
    titulo: "PANELES",
    descripcion: "Conversaciones con líderes del turismo sostenible de Colombia y el mundo.",
    bg: "#191C0F",
    href: "/agenda",
  },
  {
    numero: "02",
    titulo: "DIÁLOGOS",
    descripcion: "Espacios de encuentro íntimo entre emprendedores, comunidades y viajeros.",
    bg: "#101408",
    href: "/agenda",
  },
  {
    numero: "03",
    titulo: "TALLERES",
    descripcion: "Experiencias prácticas para aprender haciendo desde la cultura del cuidado.",
    bg: "#0b0f06",
    href: "/agenda",
  },
];

const OTROS = [
  {
    categoria: "Cultura",
    numero: "04",
    titulo: ["RUMBA Y", "CULTURA"],
    descripcion: "Música en vivo, arte urbana, gastronomía y cultura colombiana.",
    tags: ["Música", "Arte"],
    bg: "#1a4a1e",
    tagBg: "#f5e03a",
    tagColor: "#191C0F",
    textColor: "#fff",
    badgeBg: "#f5e03a",
    badgeColor: "#191C0F",
    href: "/agenda",
  },
  {
    categoria: "Inspiración",
    numero: "05",
    titulo: ["HISTORIAS", "REALES"],
    descripcion: "Proyectos reales que prueban que viajar con conciencia es posible.",
    tags: ["Testimonios", "Impacto", "Comunidad"],
    bg: "#f5e03a",
    tagBg: "#191C0F",
    tagColor: "#f5e03a",
    textColor: "#191C0F",
    badgeBg: "#191C0F",
    badgeColor: "#f5e03a",
    href: "/historias",
  },
];

export function Pilares() {
  return (
    <section className="w-full">

      {/* ── Conocimiento label strip ── */}
      <div
        className="flex items-center justify-between px-7 md:px-10 py-3 border-b"
        style={{ background: "#191C0F", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span
          className="text-[9px] font-bold uppercase tracking-[0.3em]"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Unbounded, sans-serif" }}
        >
          Conocimiento
        </span>
        <span
          className="text-[9px] font-bold uppercase tracking-[0.3em]"
          style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
        >
          01 — 03
        </span>
      </div>

      {/* ── Conocimiento: 3 sub-cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {CONOCIMIENTO.map((c, idx) => (
          <Link key={c.numero} to={c.href}>
            <div
              className="group flex flex-col justify-between min-h-[280px] md:min-h-[340px] p-7 md:p-10 cursor-pointer border-r border-b transition-all duration-200 hover:brightness-125"
              style={{
                background: c.bg,
                borderColor: "rgba(255,255,255,0.05)",
                borderRight: idx < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              {/* Number */}
              <span
                className="text-[10px] font-bold tabular-nums"
                style={{ color: "rgba(255,255,255,0.12)", fontFamily: "Unbounded, sans-serif" }}
              >
                {c.numero}
              </span>

              {/* Title */}
              <h3
                className="font-bold uppercase leading-none"
                style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                {c.titulo}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: 200,
                }}
              >
                {c.descripcion}
              </p>

              {/* Arrow */}
              <span
                className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
              >
                Ver agenda →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Cultura + Inspiración ── */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {OTROS.map((p) => (
          <Link key={p.numero} to={p.href}>
            <div
              className="group relative flex flex-col justify-between min-h-[380px] md:min-h-[440px] p-7 md:p-10 cursor-pointer transition-all duration-300"
              style={{ background: p.bg }}
            >
              {/* Top row: badge + number */}
              <div className="flex items-start justify-between">
                <span
                  className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1"
                  style={{
                    background: p.badgeBg,
                    color: p.badgeColor,
                    fontFamily: "Unbounded, sans-serif",
                  }}
                >
                  {p.categoria}
                </span>
                <span
                  className="text-[11px] font-bold tabular-nums"
                  style={{
                    color: p.textColor === "#fff" ? "rgba(255,255,255,0.18)" : "rgba(25,28,15,0.18)",
                    fontFamily: "Unbounded, sans-serif",
                  }}
                >
                  {p.numero}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1 flex items-end pb-6 md:pb-8">
                <h3
                  className="font-bold uppercase leading-[0.92] tracking-tight"
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    color: p.textColor,
                  }}
                >
                  {p.titulo.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
              </div>

              {/* Bottom: description + tags */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: p.textColor === "#fff" ? "rgba(255,255,255,0.55)" : "rgba(25,28,15,0.6)",
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 200,
                  }}
                >
                  {p.descripcion}
                </p>
                <div className="flex items-center gap-0">
                  {p.tags.map((tag, i) => (
                    <span key={tag}>
                      <span
                        className="text-[8px] font-bold uppercase tracking-[0.2em]"
                        style={{
                          background: p.tagBg,
                          color: p.tagColor,
                          fontFamily: "Unbounded, sans-serif",
                          padding: "3px 8px",
                          display: "inline-block",
                        }}
                      >
                        {tag}
                      </span>
                      {i < p.tags.length - 1 && (
                        <span
                          className="text-[8px] font-bold px-1"
                          style={{ color: p.textColor === "#fff" ? "rgba(255,255,255,0.3)" : "rgba(25,28,15,0.3)" }}
                        >
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
