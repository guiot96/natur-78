import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    num: "01",
    slug: "turismo-regenerativo-futuro",
    tag: "Sostenibilidad",
    tagColor: "#cad95e",
    tagBg: "#1a4a1e",
    title: "Turismo Regenerativo: El Futuro del Viaje Consciente",
    excerpt: "Cómo el turismo regenerativo está transformando la industria, creando experiencias que restauran ecosistemas y comunidades.",
    bg: "#191C0F",
    textColor: "#FCF8EE",
    accentColor: "#cad95e",
  },
  {
    num: "02",
    slug: "experiencias-autenticas-colombia",
    tag: "Experiencias",
    tagColor: "#191C0F",
    tagBg: "#f5e03a",
    title: "Experiencias Auténticas: el Alma de Colombia",
    excerpt: "Más allá del turismo tradicional: conexiones profundas con la cultura, la naturaleza y las comunidades locales.",
    bg: "#1a4a1e",
    textColor: "#FCF8EE",
    accentColor: "#f5e03a",
  },
  {
    num: "03",
    slug: "economia-circular-turismo",
    tag: "Innovación",
    tagColor: "#191C0F",
    tagBg: "#cad95e",
    title: "Economía Circular en el Turismo",
    excerpt: "Modelos de negocio que convierten residuos en recursos y construyen destinos más resilientes.",
    bg: "#FCF8EE",
    textColor: "#191C0F",
    accentColor: "#1a4a1e",
  },
];

export function HistoriasPreview() {
  return (
    <section className="w-full" style={{ background: "#191C0F" }}>

      {/* ── Header row ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 px-8 md:px-14 pt-16 pb-10 border-b border-white/10">
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
            style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}>
            Blog · Artículos
          </p>
          <h2 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none text-white">
            HISTORIAS<br />
            <span style={{ color: "#f5e03a" }}>NATUR</span>
          </h2>
        </div>
        <Link to="/historias">
          <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-7 py-4 hover:opacity-80 transition-opacity whitespace-nowrap"
            style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}>
            <ArrowRight className="w-3.5 h-3.5" />
            Ver todas
          </button>
        </Link>
      </div>

      {/* ── Article grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {articles.map((a, i) => (
          <Link key={a.slug} to={`/historias/${a.slug}`}>
            <article
              className="group flex flex-col justify-between p-9 md:p-10 min-h-[420px] cursor-pointer transition-opacity hover:opacity-90 border-b md:border-b-0 border-white/10"
              style={{
                background: a.bg,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[8px] font-bold uppercase tracking-widest px-2.5 py-1"
                  style={{ background: a.tagBg, color: a.tagColor, fontFamily: "Unbounded, sans-serif" }}
                >
                  {a.tag}
                </span>
                <span
                  className="font-gasoek text-5xl leading-none opacity-20"
                  style={{ color: a.textColor }}
                >
                  {a.num}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3
                  className="font-gasoek text-3xl md:text-4xl uppercase leading-[0.92] mb-4"
                  style={{ color: a.textColor }}
                >
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: `${a.textColor}99` }}>
                  {a.excerpt}
                </p>
              </div>

              {/* Bottom link */}
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all"
                style={{ color: a.accentColor, fontFamily: "Unbounded, sans-serif" }}>
                <ArrowRight className="w-3 h-3" />
                Leer artículo
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
