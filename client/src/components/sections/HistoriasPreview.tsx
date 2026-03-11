import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "turismo-regenerativo-futuro",
    tag: "Sostenibilidad",
    title: "Turismo Regenerativo: El Futuro del Viaje Consciente",
    excerpt:
      "Cómo el turismo regenerativo está transformando la industria, creando experiencias que restauran ecosistemas y comunidades.",
    emoji: "🌱",
  },
  {
    slug: "experiencias-autenticas-colombia",
    tag: "Experiencias",
    title: "Experiencias Auténticas: el Alma de Colombia",
    excerpt:
      "Más allá del turismo tradicional: conexiones profundas con la cultura, la naturaleza y las comunidades locales.",
    emoji: "🎭",
  },
  {
    slug: "economia-circular-turismo",
    tag: "Innovación",
    title: "Economía Circular en el Turismo",
    excerpt:
      "Modelos de negocio que convierten residuos en recursos y construyen destinos más resilientes.",
    emoji: "♻️",
  },
];

export function HistoriasPreview() {
  return (
    <section className="w-full bg-[#FCF8EE] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p
              className="text-[#6D7A4E] text-xs tracking-[0.3em] uppercase mb-2 font-bold"
              style={{ fontFamily: "Unbounded, sans-serif" }}
            >
              Blog &amp; artículos
            </p>
            <h2 className="font-gasoek text-4xl sm:text-5xl text-[#191C0F] uppercase leading-tight">
              HISTORIAS<br />NATUR
            </h2>
          </div>
          <Link to="/historias">
            <button className="flex items-center gap-2 bg-[#191C0F] text-[#cad95e] font-gasoek text-xs uppercase tracking-wider px-6 py-3 hover:opacity-80 transition-opacity whitespace-nowrap">
              <ArrowRight className="w-3.5 h-3.5" />
              VER HISTORIAS
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#191C0F]/10">
          {articles.map((article) => (
            <Link key={article.slug} to={`/historias/${article.slug}`}>
              <article className="bg-[#FCF8EE] p-8 flex flex-col h-full min-h-[280px] hover:bg-[#cad95e]/10 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-[#6D7A4E] uppercase tracking-wider">{article.tag}</span>
                  <span className="text-3xl">{article.emoji}</span>
                </div>
                <h3 className="font-gasoek text-xl text-[#191C0F] uppercase leading-tight mb-3 group-hover:text-[#4a5a20] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#191C0F]/60 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#6D7A4E] uppercase">
                  <ArrowRight className="w-3 h-3" />
                  Leer artículo
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
