import { Link } from 'wouter';
import { Ticket, ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import { Ticker } from '@/components/sections/Ticker';
import portraitImg from '@assets/generated_images/natur_grid_portrait.png';
import landscapeImg from '@assets/generated_images/natur_grid_landscape.png';

const P = {
  dark:      '#191C0F',
  darkGreen: '#1a4a1e',
  midGreen:  '#2d7a32',
  lime:      '#f5e03a',
  cream:     '#FCF8EE',
  rose:      '#f2c4c8',
  roseDeep:  '#c45870',
};

const ub = { fontFamily: 'Unbounded, sans-serif' };
const mono = { fontFamily: 'monospace' };

function Tag({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) {
  return (
    <span className="inline-block text-[9px] tracking-[0.32em] uppercase font-bold px-2.5 py-[3px]"
      style={{ background: bg, color, ...ub }}>
      {children}
    </span>
  );
}

function Rule({ color = 'rgba(255,255,255,0.1)' }: { color?: string }) {
  return <div className="w-full h-px" style={{ background: color }} />;
}

function InfoRow({ label, value, light }: { label: string; value: string; light?: boolean }) {
  const col = light ? 'rgba(25,28,15,0.45)' : 'rgba(255,255,255,0.38)';
  const val = light ? 'rgba(25,28,15,0.75)' : 'rgba(255,255,255,0.75)';
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-[9px] uppercase tracking-widest" style={{ color: col, ...ub }}>{label}</span>
      <span className="text-[10px] font-bold" style={{ color: val, ...ub }}>{value}</span>
    </div>
  );
}

export default function Tickets() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.dark }}>
      <HeaderButtons />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16" style={{ background: P.darkGreen }}>
        <img src={portraitImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,74,30,0.5) 0%, #191C0F 100%)' }} />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-end gap-0">
          {/* Left — headline */}
          <div className="px-8 sm:px-14 py-14 sm:py-24">
            <p className="text-[9px] tracking-[0.4em] uppercase mb-6 font-bold" style={{ color: P.lime, ...ub }}>
              Festival NATUR 2026 · Colombia
            </p>
            <h1 className="font-gasoek uppercase leading-none text-white mb-6"
              style={{ fontSize: 'clamp(4rem, 13vw, 9rem)' }}>
              ENTRA-<br />DAS
            </h1>
            <p className="font-unbounded font-extralight text-sm leading-relaxed max-w-xs"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              Dos días de turismo sostenible, cultura y conexión en Bogotá.
              Cupos limitados.
            </p>
          </div>
          {/* Right — fecha/venue strip */}
          <div className="flex flex-col gap-0 border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            {[
              { label: 'Fecha', value: '14 y 15 Agosto 2026', icon: <Calendar className="w-3.5 h-3.5" /> },
              { label: 'Sede',  value: 'Kinder · Chapinero · Bogotá', icon: <MapPin className="w-3.5 h-3.5" /> },
              { label: 'Horario', value: '10:00 — 22:00 h (ambos días)', icon: <Clock className="w-3.5 h-3.5" /> },
            ].map(({ label, value, icon }) => (
              <div key={label} className="flex items-center gap-4 px-8 py-7 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <span style={{ color: P.lime }}>{icon}</span>
                <div>
                  <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)', ...ub }}>{label}</p>
                  <p className="text-sm font-bold text-white" style={ub}>{value}</p>
                </div>
              </div>
            ))}
            <div className="px-8 py-7">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-3 py-1.5"
                style={{ background: P.lime, color: P.dark, ...ub }}>Primera edición · Colombia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.dark} color={P.lime} />

      {/* ── 3 TARJETAS PRINCIPALES ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3">

        {/* NATUR — identidad */}
        <div className="relative flex flex-col justify-between p-9 md:p-10 min-h-[80vw] md:min-h-[48vw]"
          style={{ background: P.darkGreen }}>
          <div className="flex items-start justify-between">
            <Tag bg={P.lime} color={P.dark}>Festival Nacional</Tag>
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.18)', ...mono }}>01/03</span>
          </div>
          <div className="flex-1 flex flex-col justify-center py-8">
            <p className="text-[9px] uppercase tracking-[0.35em] mb-2"
              style={{ color: 'rgba(255,255,255,0.32)', ...ub }}>Turismo Sostenible · Col</p>
            <h2 className="font-gasoek uppercase leading-none text-white"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)' }}>NATUR</h2>
            <p className="font-unbounded font-extralight text-sm mt-3 leading-snug"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              Agosto 2026 · Bogotá
            </p>
          </div>
          <div className="space-y-3">
            <Rule />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <InfoRow label="Fecha"   value="14 y 15 Ago" />
              <InfoRow label="Horario" value="10–22:00h" />
              <InfoRow label="Sede"    value="Kinder" />
              <InfoRow label="Desde"   value="$50.000" />
            </div>
            <Rule />
            <div className="flex items-center justify-between">
              <Tag bg="rgba(245,224,58,0.12)" color={P.lime}>Bogotá / COL</Tag>
              <span className="text-[9px] uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.22)', ...ub }}>@ Calle 59 #6-21</span>
            </div>
          </div>
        </div>

        {/* 1 DÍA */}
        <div className="relative flex flex-col justify-between p-9 md:p-10 min-h-[80vw] md:min-h-[48vw]"
          style={{ background: P.rose }}>
          <div className="flex items-start justify-between">
            <Tag bg={P.roseDeep} color="white">Un Día</Tag>
            <span className="text-[9px]" style={{ color: 'rgba(25,28,15,0.28)', ...mono }}>02/03</span>
          </div>
          <div className="flex-1 flex flex-col justify-center py-8">
            <p className="text-[9px] uppercase tracking-[0.35em] mb-2"
              style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>Entrada</p>
            <h2 className="font-gasoek uppercase leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', color: P.dark }}>1 DÍA</h2>
            <div className="flex items-baseline justify-between mt-3 gap-2">
              <p className="font-unbounded font-extralight text-sm"
                style={{ color: 'rgba(25,28,15,0.48)' }}>Elige tu jornada</p>
              <div className="text-right">
                <p className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>14 Jue · 10h</p>
                <p className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>15 Vie · 10h</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Rule color="rgba(25,28,15,0.12)" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <InfoRow light label="Duración" value="1 día" />
              <InfoRow light label="Cupos"    value="Limitados" />
              <InfoRow light label="Horario"  value="10:00–22:00" />
              <InfoRow light label="Sede"     value="Kinder" />
            </div>
            <Rule color="rgba(25,28,15,0.12)" />
            <div className="flex items-baseline gap-2">
              <span className="font-gasoek leading-none"
                style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', color: P.dark }}>$50.000</span>
              <div className="flex flex-col">
                <span className="text-[8px] font-bold" style={{ color: 'rgba(25,28,15,0.42)', ...ub }}>COP</span>
                <span className="text-[8px]" style={{ color: 'rgba(25,28,15,0.32)', ...ub }}>p. persona</span>
              </div>
            </div>
            <a href="mailto:info@festivalnatur.com?subject=Entrada 1 Día Festival NATUR 2026"
              className="flex items-center justify-between w-full px-5 py-4 font-bold text-[9px] uppercase tracking-widest hover:opacity-85 transition-opacity"
              style={{ background: P.dark, color: P.rose, ...ub }}>
              <span className="flex items-center gap-2"><Ticket className="w-3 h-3" />Comprar entrada</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-between">
              <Tag bg="rgba(196,88,112,0.15)" color={P.roseDeep}>1 Día / Flexible</Tag>
              <span className="text-[9px] uppercase tracking-widest" style={{ color: 'rgba(25,28,15,0.35)', ...ub }}>@ Kinder</span>
            </div>
          </div>
        </div>

        {/* 2 DÍAS */}
        <div className="relative flex flex-col justify-between p-9 md:p-10 min-h-[80vw] md:min-h-[48vw]"
          style={{ background: P.lime }}>
          <div className="flex items-start justify-between">
            <Tag bg={P.dark} color={P.lime}>Recomendado</Tag>
            <span className="text-[9px]" style={{ color: 'rgba(25,28,15,0.28)', ...mono }}>03/03</span>
          </div>
          <div className="flex-1 flex flex-col justify-center py-8">
            <p className="text-[9px] uppercase tracking-[0.35em] mb-2"
              style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>Entrada</p>
            <h2 className="font-gasoek uppercase leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', color: P.dark }}>2 DÍAS</h2>
            <div className="flex items-baseline justify-between mt-3 gap-2">
              <p className="font-unbounded font-extralight text-sm"
                style={{ color: 'rgba(25,28,15,0.48)' }}>Acceso completo</p>
              <div className="text-right">
                <p className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>14 Jue · 10h</p>
                <p className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>15 Vie · 10h</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Rule color="rgba(25,28,15,0.12)" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <InfoRow light label="Duración" value="2 días" />
              <InfoRow light label="Cupos"    value="Limitados" />
              <InfoRow light label="Horario"  value="10:00–22:00" />
              <InfoRow light label="Sede"     value="Kinder" />
            </div>
            <Rule color="rgba(25,28,15,0.12)" />
            <div className="flex items-baseline gap-2">
              <span className="font-gasoek leading-none"
                style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', color: P.dark }}>$70.000</span>
              <div className="flex flex-col">
                <span className="text-[8px] font-bold" style={{ color: 'rgba(25,28,15,0.42)', ...ub }}>COP</span>
                <span className="text-[8px]" style={{ color: 'rgba(25,28,15,0.32)', ...ub }}>p. persona</span>
              </div>
            </div>
            <a href="mailto:info@festivalnatur.com?subject=Entrada 2 Días Festival NATUR 2026"
              className="flex items-center justify-between w-full px-5 py-4 font-bold text-[9px] uppercase tracking-widest hover:opacity-85 transition-opacity"
              style={{ background: P.dark, color: P.lime, ...ub }}>
              <span className="flex items-center gap-2"><Ticket className="w-3 h-3" />Comprar entrada</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-between">
              <Tag bg="rgba(25,28,15,0.1)" color="rgba(25,28,15,0.65)">2 Días / Completo</Tag>
              <span className="text-[9px] uppercase tracking-widest" style={{ color: 'rgba(25,28,15,0.35)', ...ub }}>@ Kinder</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.cream} color={P.dark} reverse />

      {/* ── QUÉ INCLUYE ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2" style={{ background: P.dark }}>
        {/* Left: foto venue */}
        <div className="relative overflow-hidden min-h-[60vw] md:min-h-[40vw]">
          <img src={landscapeImg} alt="Kinder — Sede Festival NATUR"
            className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(25,28,15,0.2) 0%, rgba(25,28,15,0.6) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
            <p className="font-gasoek text-3xl sm:text-4xl uppercase leading-tight text-white">
              Kinder<br />Chapinero
            </p>
            <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.2)' }} />
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" style={{ color: P.lime }} />
              <span className="text-[10px] uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.5)', ...ub }}>Calle 59 #6-21 · Bogotá</span>
            </div>
          </div>
        </div>

        {/* Right: qué incluye */}
        <div className="flex flex-col justify-between p-10 md:p-14">
          <div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-[3px] mb-8"
              style={{ background: 'rgba(245,224,58,0.1)', color: P.lime, ...ub }}>¿Qué incluye?</span>
            <h2 className="font-unbounded font-bold uppercase leading-[0.95] text-white mb-6"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              ACCESO<br />COMPLETO
            </h2>
          </div>
          <div className="space-y-0">
            {[
              'Charlas y paneles con expertos en turismo sostenible',
              'Talleres experienciales: tintes, semillas, terrarios',
              'Feria de emprendimientos y stands',
              'Música en vivo y manifestaciones culturales',
              'Zona Chill y bienestar',
              'Gastronomía colombiana sostenible',
              'Networking con líderes del sector',
              'Acceso al foro Colombia Sostenible 2026',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3.5 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <span className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-sm"
                  style={{ background: P.lime }} />
                <p className="text-sm leading-snug"
                  style={{ color: 'rgba(255,255,255,0.65)', ...ub, fontWeight: 200 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.darkGreen} color={P.lime} />

      {/* ── CTA BOTTOM ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2" style={{ background: P.dark }}>
        <div className="flex flex-col justify-between p-10 md:p-16 border-b md:border-b-0 md:border-r"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div>
            <Tag bg={P.rose} color={P.dark}>1 Día</Tag>
          </div>
          <div>
            <p className="font-gasoek uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: P.rose }}>$50.000</p>
            <p className="text-[9px] uppercase tracking-widest mb-6"
              style={{ color: 'rgba(255,255,255,0.3)', ...ub }}>COP · por persona · 1 día</p>
            <a href="mailto:info@festivalnatur.com?subject=Entrada 1 Día Festival NATUR 2026"
              className="inline-flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
              style={{ background: P.rose, color: P.dark, ...ub }}>
              <Ticket className="w-3.5 h-3.5" />
              Comprar — 1 Día
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-10 md:p-16">
          <div>
            <Tag bg={P.lime} color={P.dark}>Recomendado · 2 Días</Tag>
          </div>
          <div>
            <p className="font-gasoek uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: P.lime }}>$70.000</p>
            <p className="text-[9px] uppercase tracking-widest mb-6"
              style={{ color: 'rgba(255,255,255,0.3)', ...ub }}>COP · por persona · acceso completo</p>
            <a href="mailto:info@festivalnatur.com?subject=Entrada 2 Días Festival NATUR 2026"
              className="inline-flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
              style={{ background: P.lime, color: P.dark, ...ub }}>
              <Ticket className="w-3.5 h-3.5" />
              Comprar — 2 Días
            </a>
          </div>
        </div>
      </section>

      <footer className="py-5 px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] uppercase tracking-[0.3em]"
        style={{ background: P.dark, color: 'rgba(255,255,255,0.18)', borderTop: '1px solid rgba(255,255,255,0.05)', ...ub }}>
        <span>© 2026 Festival NATUR — Colombia</span>
        <span>Cupos limitados · info@festivalnatur.com</span>
      </footer>
    </div>
  );
}
