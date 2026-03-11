import { Link } from 'wouter';
import { Ticket, Mic, Music, Store, Sparkles, Check, MapPin, ArrowRight } from 'lucide-react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import portraitImg from '@assets/generated_images/natur_grid_portrait.png';
import landscapeImg from '@assets/generated_images/natur_grid_landscape.png';

const P = {
  dark:      '#191C0F',
  darkGreen: '#1a4a1e',
  midGreen:  '#2d7a32',
  lime:      '#cad95e',
  yellow:    '#f5e03a',
  cream:     '#FCF8EE',
  rose:      '#f2c4c8',
  roseDeep:  '#c45870',
};

export default function Tickets() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.dark }}>
      <HeaderButtons />

      {/* 6-CELL EDITORIAL GRID */}
      <main className="pt-14 grid grid-cols-1 md:grid-cols-3 grid-rows-auto">

        {/* ─── CELL 1 — Dark green, NATUR identity ─── */}
        <div
          className="relative flex flex-col justify-between p-10 min-h-[56vw] md:min-h-[46vw]"
          style={{ background: P.darkGreen }}
        >
          <div>
            <span
              className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-6 px-3 py-1"
              style={{ background: P.lime, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}
            >
              Festival Nacional
            </span>
            <h1
              className="font-gasoek text-[13vw] md:text-[5.5vw] uppercase leading-none text-white"
            >
              NATUR
            </h1>
            <p
              className="font-unbounded font-extralight text-[4vw] md:text-[1.4vw] mt-2 leading-snug"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Turismo Sostenible
            </p>
          </div>
          <div className="space-y-1">
            <p
              className="font-gasoek text-[8vw] md:text-[3.5vw] uppercase leading-none"
              style={{ color: P.lime }}
            >
              14 y 15
            </p>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Unbounded, sans-serif' }}
            >
              Agosto 2026
            </p>
            <div className="flex items-center gap-1 mt-2">
              <MapPin className="w-3 h-3" style={{ color: 'rgba(255,255,255,0.35)' }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Kinder · Chapinero · Bogotá
              </span>
            </div>
          </div>
        </div>

        {/* ─── CELL 2 — Festival portrait photo ─── */}
        <div className="relative overflow-hidden min-h-[60vw] md:min-h-[46vw]">
          <img
            src={portraitImg}
            alt="Festival NATUR 2026"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(25,28,15,0.55) 100%)' }}
          />
          <div className="absolute bottom-8 left-8">
            <span
              className="inline-block text-[10px] tracking-[0.25em] uppercase font-bold px-3 py-1"
              style={{ background: P.rose, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}
            >
              Turismo · Cultura
            </span>
          </div>
        </div>

        {/* ─── CELL 3 — Yellow, 2-DÍAS ticket ─── */}
        <div
          className="relative flex flex-col justify-between p-10 min-h-[56vw] md:min-h-[46vw]"
          style={{ background: P.yellow }}
        >
          <div>
            <span
              className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-6 px-3 py-1"
              style={{ background: P.dark, color: P.yellow, fontFamily: 'Unbounded, sans-serif' }}
            >
              Recomendado
            </span>
            <h2 className="font-gasoek text-[13vw] md:text-[5.5vw] uppercase leading-none" style={{ color: P.dark }}>
              2 DÍAS
            </h2>
            <p
              className="font-unbounded font-extralight text-[3.5vw] md:text-[1.3vw] mt-1"
              style={{ color: 'rgba(25,28,15,0.55)' }}
            >
              Acceso completo al festival
            </p>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-gasoek text-[11vw] md:text-[4.5vw] leading-none" style={{ color: P.dark }}>
                  $70.000
                </span>
                <span className="text-xs font-bold" style={{ color: 'rgba(25,28,15,0.45)', fontFamily: 'Unbounded, sans-serif' }}>
                  COP
                </span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {[
                  'Toda la programación ambos días',
                  'Conciertos y rumba nocturna',
                  'Zona networking premium',
                  'Feria de emprendimientos',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[3vw] md:text-xs" style={{ color: 'rgba(25,28,15,0.7)' }}>
                    <Check className="w-3 h-3 flex-shrink-0" style={{ color: P.dark }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="mailto:info@festivalnatur.com?subject=Entrada 2 Días Festival NATUR 2026"
              className="flex items-center justify-between w-full px-5 py-4 font-bold text-xs uppercase tracking-wider hover:opacity-85 transition-opacity"
              style={{ background: P.dark, color: P.yellow, fontFamily: 'Unbounded, sans-serif' }}
            >
              <span className="flex items-center gap-2">
                <Ticket className="w-3.5 h-3.5" />
                Comprar entrada
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ─── CELL 4 — Landscape festival photo ─── */}
        <div className="relative overflow-hidden min-h-[60vw] md:min-h-[46vw]">
          <img
            src={landscapeImg}
            alt="Festival NATUR — Experiencias"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(25,28,15,0.6) 0%, transparent 60%)' }}
          />
          <div className="absolute bottom-8 left-8 right-8">
            <p
              className="text-[3vw] md:text-xs uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Unbounded, sans-serif' }}
            >
              @ Kinder · Calle 59 #6-21
            </p>
          </div>
        </div>

        {/* ─── CELL 5 — Rose/Pink, 1-DÍA ticket ─── */}
        <div
          className="relative flex flex-col justify-between p-10 min-h-[56vw] md:min-h-[46vw]"
          style={{ background: P.rose }}
        >
          <div>
            <span
              className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-6 px-3 py-1"
              style={{ background: P.roseDeep, color: 'white', fontFamily: 'Unbounded, sans-serif' }}
            >
              Un día
            </span>
            <h2 className="font-gasoek text-[13vw] md:text-[5.5vw] uppercase leading-none" style={{ color: P.dark }}>
              1 DÍA
            </h2>
            <p
              className="font-unbounded font-extralight text-[3.5vw] md:text-[1.3vw] mt-1"
              style={{ color: 'rgba(25,28,15,0.55)' }}
            >
              Elige el día que más te llame
            </p>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-gasoek text-[11vw] md:text-[4.5vw] leading-none" style={{ color: P.dark }}>
                  $50.000
                </span>
                <span className="text-xs font-bold" style={{ color: 'rgba(25,28,15,0.45)', fontFamily: 'Unbounded, sans-serif' }}>
                  COP
                </span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {[
                  'Charlas y conferencias magistrales',
                  'Conciertos y música en vivo',
                  'Feria de emprendimientos',
                  'Experiencias culturales',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[3vw] md:text-xs" style={{ color: 'rgba(25,28,15,0.7)' }}>
                    <Check className="w-3 h-3 flex-shrink-0" style={{ color: P.roseDeep }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="mailto:info@festivalnatur.com?subject=Entrada 1 Día Festival NATUR 2026"
              className="flex items-center justify-between w-full px-5 py-4 font-bold text-xs uppercase tracking-wider hover:opacity-85 transition-opacity"
              style={{ background: P.dark, color: P.rose, fontFamily: 'Unbounded, sans-serif' }}
            >
              <span className="flex items-center gap-2">
                <Ticket className="w-3.5 h-3.5" />
                Comprar entrada
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ─── CELL 6 — Cream, festival details + CTA ─── */}
        <div
          className="relative flex flex-col justify-between p-10 min-h-[56vw] md:min-h-[46vw]"
          style={{ background: P.cream }}
        >
          <div>
            <span
              className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-6 px-3 py-1"
              style={{ background: P.midGreen, color: 'white', fontFamily: 'Unbounded, sans-serif' }}
            >
              Info · Venue
            </span>
            <h3 className="font-gasoek text-[8vw] md:text-[3vw] uppercase leading-tight" style={{ color: P.darkGreen }}>
              Kinder<br />Chapinero
            </h3>
            <p
              className="font-unbounded font-extralight text-[3.5vw] md:text-[1.2vw] mt-2 leading-relaxed"
              style={{ color: 'rgba(25,28,15,0.5)' }}
            >
              Calle 59 #6-21<br />Bogotá, Colombia
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[3vw] md:text-xs leading-relaxed" style={{ color: 'rgba(25,28,15,0.6)' }}>
              El primer festival nacional de turismo sostenible conecta viajeros, empresas y comunidades con el futuro del planeta.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@festivalnatur.com"
                className="text-[3vw] md:text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
                info@festivalnatur.com
              </a>
              <Link
                href="/contacto"
                className="text-[3vw] md:text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                style={{ color: P.roseDeep, fontFamily: 'Unbounded, sans-serif' }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
                Más información
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Thin footer */}
      <footer
        className="py-5 px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] uppercase tracking-[0.25em]"
        style={{ background: P.dark, color: 'rgba(255,255,255,0.2)', fontFamily: 'Unbounded, sans-serif' }}
      >
        <span>© 2026 Festival NATUR</span>
        <span>Cupos limitados · Reserva ya</span>
      </footer>
    </div>
  );
}
