import React from 'react';
import { Link } from 'wouter';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import { Footer } from '@/components/sections/Footer';
import { ArrowRight, Calendar, User } from 'lucide-react';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#cad95e', yellow: '#f5e03a', cream: '#FCF8EE',
};

const articles = [
  {
    id: 1, slug: 'turismo-regenerativo-futuro',
    title: 'Turismo Regenerativo: El Futuro del Viaje Consciente',
    excerpt: 'Cómo el turismo regenerativo está transformando la industria, creando experiencias que restauran ecosistemas y comunidades.',
    date: '15 Nov 2024', author: 'María Rodríguez', category: 'Sostenibilidad', readTime: '8 min', featured: true,
  },
  {
    id: 2, slug: 'experiencias-autenticas-colombia',
    title: 'Experiencias Auténticas: el Alma de Colombia',
    excerpt: 'Más allá del turismo tradicional: conexiones profundas con la cultura, la naturaleza y las comunidades locales.',
    date: '12 Nov 2024', author: 'Carlos Mendoza', category: 'Experiencias', readTime: '6 min', featured: true,
  },
  {
    id: 3, slug: 'economia-circular-turismo',
    title: 'Economía Circular en el Turismo',
    excerpt: 'Modelos de negocio que convierten residuos en recursos y construyen destinos más resilientes.',
    date: '10 Nov 2024', author: 'Ana Gutiérrez', category: 'Innovación', readTime: '7 min', featured: true,
  },
  {
    id: 4, slug: 'colombia-lidera-ecoturismo',
    title: 'Colombia Lidera la Revolución del Ecoturismo',
    excerpt: 'Con su biodiversidad única y compromiso con la sostenibilidad, Colombia se posiciona como líder regional en ecoturismo.',
    date: '8 Nov 2024', author: 'Diego Torres', category: 'Destinos', readTime: '5 min',
  },
  {
    id: 5, slug: 'festival-natur-comunidades-sostenibles',
    title: 'Festival NATUR 2026: Conectando Comunidades Sostenibles',
    excerpt: 'El evento más importante de turismo sostenible en Colombia reunirá emprendedores, viajeros conscientes y líderes de la industria.',
    date: '5 Nov 2024', author: 'Laura Jiménez', category: 'Festival', readTime: '4 min',
  },
  {
    id: 6, slug: 'tecnologia-turismo-sostenible',
    title: 'Tecnología al Servicio del Turismo Sostenible',
    excerpt: 'Desde apps de impacto hasta blockchain para transparencia, las innovaciones están revolucionando el turismo.',
    date: '2 Nov 2024', author: 'Andrés López', category: 'Tecnología', readTime: '7 min',
  },
];

const catColor = (c: string) => {
  const m: Record<string, string> = {
    Sostenibilidad: P.lime, Experiencias: P.yellow, Innovación: P.lime,
    Destinos: P.yellow, Festival: P.lime, Tecnología: P.yellow,
  };
  return m[c] || P.lime;
};

export default function Noticias() {
  const featured = articles.filter(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.cream }}>
      <HeaderButtons />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center" style={{ background: P.darkGreen }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3 font-bold"
          style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
          Blog &amp; Artículos
        </p>
        <h1 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase text-white leading-none mb-3">
          HISTORIAS<br />NATUR
        </h1>
        <p className="font-unbounded font-extralight text-xl sm:text-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Turismo sostenible, naturaleza e innovación en Colombia
        </p>
      </section>

      {/* Featured */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-6 font-bold"
          style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
          Artículos destacados
        </p>
        <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(26,74,30,0.12)' }}>
          {featured.map((a) => (
            <Link key={a.id} to={`/historias/${a.slug}`}>
              <article className="p-8 flex flex-col gap-4 h-full min-h-[300px] cursor-pointer transition-colors hover:bg-[#1a4a1e] group"
                style={{ background: P.cream }}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1"
                    style={{ background: catColor(a.category), color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
                    {a.category}
                  </span>
                  <span className="text-xs" style={{ color: 'rgba(25,28,15,0.35)' }}>{a.readTime}</span>
                </div>
                <h2 className="font-unbounded font-extralight text-xl leading-snug group-hover:text-white transition-colors"
                  style={{ color: P.dark }}>
                  {a.title}
                </h2>
                <p className="text-sm leading-relaxed flex-1 group-hover:text-white/65 transition-colors"
                  style={{ color: 'rgba(25,28,15,0.55)' }}>
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(25,28,15,0.35)' }}>
                    <User className="w-3 h-3" />{a.author}
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:text-[#cad95e] transition-colors"
                    style={{ color: 'rgba(25,28,15,0.25)' }} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* More */}
      <section className="py-10 px-6 max-w-6xl mx-auto border-t"
        style={{ borderColor: 'rgba(26,74,30,0.12)' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-8 font-bold"
          style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
          Más historias
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a) => (
            <Link key={a.id} to={`/historias/${a.slug}`}>
              <article className="p-6 border cursor-pointer hover:border-[#1a4a1e] transition-all group"
                style={{ borderColor: 'rgba(26,74,30,0.15)' }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5"
                    style={{ background: catColor(a.category), color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
                    {a.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(25,28,15,0.35)' }}>
                    <Calendar className="w-3 h-3" />{a.date}
                  </div>
                </div>
                <h2 className="font-unbounded font-extralight text-lg leading-snug mb-2 group-hover:text-[#1a4a1e] transition-colors"
                  style={{ color: P.dark }}>
                  {a.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(25,28,15,0.5)' }}>{a.excerpt}</p>
                <div className="flex items-center gap-1.5 mt-4 text-xs font-bold uppercase"
                  style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
                  <ArrowRight className="w-3 h-3" />Leer artículo
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
