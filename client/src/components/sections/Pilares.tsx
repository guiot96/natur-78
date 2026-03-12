import { Link } from "wouter";

const PILARES = [
  {
    categoria: "Conocimiento",
    numero: "01",
    titulo: ["CONO-", "CIMIENTO"],
    descripcion: "Paneles, diálogos y talleres con líderes del turismo sostenible.",
    tags: ["Paneles", "Diálogos", "Talleres"],
    bg: "#191C0F",
    tagBg: "#f5e03a",
    tagColor: "#191C0F",
    textColor: "#fff",
    badgeBg: "#f5e03a",
    badgeColor: "#191C0F",
    href: "/agenda",
  },
  {
    categoria: "Cultura",
    numero: "02",
    titulo: ["NUESTRA", "RUMBA Y SUS", "MANIFES-", "TACIONES"],
    descripcion: "Música en vivo, arte urbana y cultura colombiana.",
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
    numero: "03",
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
    <section className="w-full grid grid-cols-1 md:grid-cols-3">
      {PILARES.map((p) => (
        <Link key={p.numero} to={p.href}>
          <div
            className="group relative flex flex-col justify-between min-h-[380px] md:min-h-[480px] p-7 md:p-10 cursor-pointer transition-all duration-300"
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
                  fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
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
              <div className="flex items-center flex-wrap gap-y-1">
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
    </section>
  );
}
