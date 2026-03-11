import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "turismo-regenerativo-futuro",
    tag: "Sostenibilidad",
    title: "Turismo Regenerativo: El Futuro del Viaje Consciente",
    excerpt: "Cómo el turismo regenerativo está transformando la industria, creando experiencias que restauran ecosistemas y comunidades.",
    emoji: "🌱",
  },
  {
    slug: "experiencias-autenticas-colombia",
    tag: "Experiencias",
    title: "Experiencias Auténticas: el Alma de Colombia",
    excerpt: "Más allá del turismo tradicional: conexiones profundas con la cultura, la naturaleza y las comunidades locales.",
    emoji: "🎭",
  },
  {
    slug: "economia-circular-turismo",
    tag: "Innovación",
    title: "Economía Circular en el Turismo",
    excerpt: "Modelos de negocio que convierten residuos en recursos y construyen destinos más resilientes.",
    emoji: "♻️",
  },
];

export function HistoriasPreview() {
  return (
    <section className="w-full py-20 px-6" style={{ background: '#f5e03a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 font-bold"
              style={{ color: '#1a4a1e', fontFamily: "Unbounded, sans-serif" }}>
              Blog &amp; artículos
            </p>
            <h2 className="font-unbounded font-extralight text-4xl sm:text-5xl leading-tight" style={{ color: '#191C0F' }}>
              Historias NATUR
            </h2>
          </div>
          <Link to="/historias">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ background: '#1a4a1e', color: '#f5e03a', fontFamily: 'Unbounded, sans-serif' }}>
              <ArrowRight className="w-3.5 h-3.5" />
              VER HISTORIAS
            </button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(26,74,30,0.15)' }}>
          {articles.map((article) => (
            <Link key={article.slug} to={`/historias/${article.slug}`}>
              <article className="p-8 flex flex-col h-full min-h-[280px] cursor-pointer group transition-colors"
                style={{ background: '#f5e03a' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1a4a1e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f5e03a')}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: '#1a4a1e', fontFamily: 'Unbounded, sans-serif' }}>
                    {article.tag}
                  </span>
                  <span className="text-3xl">{article.emoji}</span>
                </div>
                <h3 className="font-unbounded font-extralight text-xl leading-snug mb-3 transition-colors" style={{ color: '#191C0F' }}>
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(25,28,15,0.65)' }}>
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase"
                  style={{ color: '#1a4a1e', fontFamily: 'Unbounded, sans-serif' }}>
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
