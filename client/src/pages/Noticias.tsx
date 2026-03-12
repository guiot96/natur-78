import { Link } from 'wouter';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import { Ticker } from '@/components/sections/Ticker';
import { Footer } from '@/components/sections/Footer';
import { ArrowRight } from 'lucide-react';
import bannerImg from '@assets/stock_images/historias_banner.jpg';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#f5e03a', cream: '#FCF8EE',
};
const ub = { fontFamily: 'Unbounded, sans-serif' };

export default function Noticias() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.dark }}>
      <HeaderButtons />

      {/* ── BANNER HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '70vh' }}>
        <img
          src={bannerImg}
          alt="Historias NATUR"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(25,28,15,0.45) 0%, rgba(25,28,15,0.85) 70%, #191C0F 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full px-8 sm:px-14 py-16 sm:py-24 pt-28">
          <p className="text-[9px] tracking-[0.4em] uppercase mb-5 font-bold" style={{ color: P.lime, ...ub }}>
            Festival NATUR 2026 · Editorial
          </p>
          <h1
            className="font-gasoek uppercase leading-none text-white mb-6"
            style={{ fontSize: 'clamp(4rem, 14vw, 10rem)' }}
          >
            HISTORIAS<br />NATUR
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <span
              className="inline-block text-[9px] font-bold uppercase tracking-[0.32em] px-3 py-2"
              style={{ background: P.lime, color: P.dark, ...ub }}
            >
              Próximamente
            </span>
            <span className="text-sm font-extralight" style={{ color: 'rgba(255,255,255,0.45)', ...ub }}>
              Historias reales · Proyectos · Comunidad
            </span>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.darkGreen} color={P.lime} />

      {/* ── MENSAJE PRÓXIMAMENTE ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left — texto editorial */}
        <div className="flex flex-col justify-between p-10 md:p-16" style={{ background: P.dark }}>
          <div>
            <span
              className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-[3px] mb-10"
              style={{ background: 'rgba(245,224,58,0.1)', color: P.lime, ...ub }}
            >
              En construcción
            </span>
            <h2
              className="font-unbounded font-bold uppercase leading-[0.95] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}
            >
              HISTORIAS<br />QUE<br />INSPIRAN
            </h2>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: 'rgba(255,255,255,0.5)', ...ub, fontWeight: 200 }}
            >
              Estamos preparando un espacio editorial para contar las historias reales de
              proyectos, comunidades y viajeros que están transformando el turismo en Colombia.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <p className="text-[9px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)', ...ub }}>
              Mientras tanto
            </p>
            <Link to="/agenda">
              <div className="flex items-center justify-between px-6 py-4 border hover:brightness-110 transition-all cursor-pointer"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white" style={ub}>
                  Ver Agenda
                </span>
                <ArrowRight className="w-4 h-4" style={{ color: P.lime }} />
              </div>
            </Link>
            <Link to="/tickets">
              <div className="flex items-center justify-between px-6 py-4 border hover:brightness-110 transition-all cursor-pointer"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white" style={ub}>
                  Comprar Entradas
                </span>
                <ArrowRight className="w-4 h-4" style={{ color: P.lime }} />
              </div>
            </Link>
            <a href="mailto:info@festivalnatur.com">
              <div className="flex items-center justify-between px-6 py-4 border hover:brightness-110 transition-all cursor-pointer"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white" style={ub}>
                  Contacto
                </span>
                <ArrowRight className="w-4 h-4" style={{ color: P.lime }} />
              </div>
            </a>
          </div>
        </div>

        {/* Right — 3 temáticas próximas */}
        <div className="grid grid-cols-1 divide-y" style={{ divideColor: 'rgba(255,255,255,0.06)', background: '#111408' }}>
          {[
            { num: '01', cat: 'Comunidad', title: 'Turismo de Base Comunitaria', desc: 'Proyectos que devuelven el poder del territorio a las comunidades locales.' },
            { num: '02', cat: 'Impacto',   title: 'Viaje con Conciencia',       desc: 'Historias de viajeros que eligen destinos con propósito y regeneración.' },
            { num: '03', cat: 'Territorio', title: 'Colombia Biodiversa',        desc: 'Los ecosistemas de Colombia vistos desde el lente del turismo sostenible.' },
          ].map(({ num, cat, title, desc }) => (
            <div key={num} className="flex flex-col justify-between p-8 sm:p-10">
              <div className="flex items-start justify-between mb-6">
                <span
                  className="inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-[3px]"
                  style={{ background: 'rgba(245,224,58,0.1)', color: P.lime, ...ub }}
                >
                  {cat}
                </span>
                <span className="text-[10px] font-bold" style={{ color: 'rgba(255,255,255,0.1)', fontFamily: 'monospace' }}>
                  {num}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base uppercase leading-snug text-white mb-2" style={ub}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', ...ub, fontWeight: 200 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.lime} color={P.dark} reverse />

      <Footer />
    </div>
  );
}
