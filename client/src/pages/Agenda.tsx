import React, { useState, useRef } from 'react';
import { Clock, Calendar, Ticket, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import { Ticker } from '@/components/sections/Ticker';
import posterImg from '@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg';

const P = {
  dark: '#191C0F',
  darkGreen: '#1a4a1e',
  midGreen: '#2d7a32',
  lime: '#f5e03a',
  cream: '#FCF8EE',
};
const ub = { fontFamily: 'Unbounded, sans-serif' };
const mono = { fontFamily: 'monospace' };

/* ─── DATA ─────────────────────────────────────────────────── */
const conocimientoSessions = {
  'paneles':  {
    dia1: [
      { time: '9:00',  title: 'Apertura del Festival — Charlas NATUR', speakers: ['Brigitte Baptiste', 'Equipo NATUR'] },
      { time: '11:30', title: 'Showcase de Emprendimientos Sostenibles', speakers: ['Startups Verdes', 'Emprendedores'] },
      { time: '16:00', title: 'Foro Colombia Sostenible 2026: Panel Nacional', speakers: ['Expertos en Sostenibilidad', 'Gobierno'] },
    ],
    dia2: [
      { time: '9:00',  title: 'Charlas NATUR: Turismo Regenerativo', speakers: ['Expertos Internacionales', 'Comunidades Locales'] },
      { time: '11:00', title: 'Pitch Session — Emprendimientos Sostenibles', speakers: ['Emprendedores', 'Inversionistas'] },
    ],
  },
  'dialogos': {
    dia1: [
      { time: '9:00',  title: 'Apertura del Festival — Charlas NATUR', speakers: ['Brigitte Baptiste', 'Equipo NATUR'] },
      { time: '16:00', title: 'Foro Colombia Sostenible 2026', speakers: ['Expertos en Sostenibilidad', 'Gobierno', 'Academia'] },
    ],
    dia2: [
      { time: '9:00',  title: 'Turismo Regenerativo: Conversaciones con Comunidades', speakers: ['Expertos Internacionales', 'Comunidades Locales'] },
      { time: '15:00', title: 'Diálogo: Biodiversidad y Viaje Consciente', speakers: ['Científicos', 'Viajeros'] },
    ],
  },
  'talleres': {
    dia1: [
      { time: '10:00', title: 'Taller: Tintes naturales y estampados', speakers: ['Artesanos textiles'] },
      { time: '11:00', title: 'Taller: Bombas de Semillas', speakers: ['Facilitadores ambientales'] },
      { time: '11:00', title: 'Taller: Crea tu propio terrario', speakers: ['Jardineros urbanos'] },
    ],
    dia2: [
      { time: '11:00', title: 'Taller: Bombas de Semillas', speakers: ['Facilitadores ambientales'] },
      { time: '9:00',  title: 'Talleres Especializados: Turismo Regenerativo', speakers: ['Facilitadores Expertos'] },
    ],
  },
};

const rumbaSessions = {
  dia1: [
    { time: '11:00', title: 'Origami del agua', tag: 'Arte', speakers: ['Artistas del papel'] },
    { time: '14:00', title: 'Zona Chill: Música y Relajación', tag: 'Música', speakers: ['Artistas Locales', 'DJs Orgánicos'] },
    { time: '14:00', title: 'Círculo de tambores', tag: 'Música', speakers: ['Músicos tradicionales'] },
    { time: '16:00', title: 'Ritual colectivo del agua', tag: 'Ritual', speakers: ['Sabedores del agua'] },
    { time: '19:00', title: 'Rumba y Manifestaciones Culturales', tag: 'Rumba', speakers: ['DJs', 'Grupos Folclóricos'] },
  ],
  dia2: [
    { time: '14:00', title: 'Círculo de tambores', tag: 'Música', speakers: ['Músicos tradicionales'] },
    { time: '15:00', title: 'Zona Chill: Actividades de Cierre', tag: 'Bienestar', speakers: ['Artistas', 'Facilitadores'] },
    { time: '16:00', title: 'Ritual colectivo del agua', tag: 'Ritual', speakers: ['Sabedores del agua'] },
    { time: '17:00', title: 'Ceremonia de Clausura', tag: 'Ceremonia', speakers: ['Equipo NATUR', 'Participantes'] },
    { time: '18:00', title: 'Cartel de Artistas: Presentaciones de Cierre', tag: 'Arte', speakers: ['Artistas Principales'] },
  ],
};

const historiasSessions = {
  dia1: [
    { title: 'Senderos que Sanan', desc: 'Comunidad indígena Wayuu — turismo de base comunitaria en La Guajira.', tag: 'Comunidad' },
    { title: 'De la Finca a la Mesa', desc: 'Proyecto de agricultura regenerativa en el Huila que conecta productores con viajeros.', tag: 'Impacto' },
    { title: 'Mares Vivos', desc: 'Iniciativa de conservación marina en el Pacífico colombiano con turismo científico.', tag: 'Territorio' },
  ],
  dia2: [
    { title: 'La Ruta del Cacao', desc: 'Emprendimiento familiar que transforma el cacao colombiano en experiencias de viaje.', tag: 'Testimonios' },
    { title: 'Páramos en Pie', desc: 'Proyecto de senderismo responsable que financia la conservación de ecosistemas de alta montaña.', tag: 'Impacto' },
    { title: 'Selva Adentro', desc: 'Operadora de turismo amazónico gestionada por comunidades locales con cero impacto.', tag: 'Comunidad' },
  ],
};

/* ─── COMPONENTS ───────────────────────────────────────────── */
function PilarCard({ num, cat, titulo, desc, tags, bg, tagBg, tagColor, textColor, onClick }:
  { num: string; cat: string; titulo: string[]; desc: string; tags: string[]; bg: string; tagBg: string; tagColor: string; textColor: string; onClick: () => void }) {
  return (
    <div
      className="group relative flex flex-col justify-between min-h-[380px] md:min-h-[460px] p-7 md:p-10 cursor-pointer transition-all duration-300 hover:brightness-110"
      style={{ background: bg }}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1"
          style={{ background: tagBg, color: tagColor, ...ub }}>{cat}</span>
        <span className="text-[11px] font-bold tabular-nums"
          style={{ color: textColor === '#fff' ? 'rgba(255,255,255,0.18)' : 'rgba(25,28,15,0.18)', ...ub }}>{num}</span>
      </div>
      <div className="flex-1 flex items-end pb-6">
        <h3 className="font-bold uppercase leading-[0.92] tracking-tight"
          style={{ ...ub, fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', color: textColor }}>
          {titulo.map((line, i) => <span key={i} className="block">{line}</span>)}
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed"
          style={{ color: textColor === '#fff' ? 'rgba(255,255,255,0.55)' : 'rgba(25,28,15,0.6)', ...ub, fontWeight: 200 }}>
          {desc}
        </p>
        <div className="flex items-center flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span key={tag} className="text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-[3px] inline-block"
              style={{ background: tagBg, color: tagColor, ...ub }}>{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
          <ChevronDown className="w-3 h-3" style={{ color: textColor }} />
          <span className="text-[9px] uppercase tracking-widest"
            style={{ color: textColor, ...ub }}>ver programa</span>
        </div>
      </div>
    </div>
  );
}

function SessionRow({ time, title, speakers, tag }: { time?: string; title: string; speakers: string[]; tag?: string }) {
  return (
    <div className="flex gap-4 sm:gap-6 py-5 border-b last:border-b-0 hover:bg-white/5 transition-colors px-6 sm:px-8"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      {time && (
        <div className="flex-shrink-0 w-12 pt-0.5">
          <span className="text-sm font-bold tabular-nums" style={{ color: P.lime, ...mono }}>{time}</span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm leading-snug mb-2 text-white" style={ub}>{title}</h4>
        <div className="flex flex-wrap items-center gap-2">
          {tag && (
            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-[3px]"
              style={{ background: P.lime, color: P.dark, ...ub }}>{tag}</span>
          )}
          {speakers.map((s, i) => (
            <span key={i} className="text-xs" style={{ color: 'rgba(255,255,255,0.38)', ...ub }}>
              {i > 0 ? '· ' : ''}{s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HistoriaCard({ title, desc, tag }: { title: string; desc: string; tag: string }) {
  return (
    <div className="flex flex-col justify-between p-7 border"
      style={{ borderColor: 'rgba(245,224,58,0.15)', background: 'rgba(255,255,255,0.03)' }}>
      <div>
        <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-[3px] mb-4"
          style={{ background: 'rgba(245,224,58,0.12)', color: P.lime, ...ub }}>{tag}</span>
        <h4 className="font-bold text-base leading-snug mb-3 text-white" style={ub}>{title}</h4>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', ...ub, fontWeight: 200 }}>{desc}</p>
      </div>
    </div>
  );
}

function DayToggle({ day, setDay, accent }: { day: number; setDay: (d: number) => void; accent: string }) {
  return (
    <div className="flex gap-0">
      {['Día 1 — Jue 14', 'Día 2 — Vie 15'].map((label, i) => (
        <button key={i} onClick={() => setDay(i)}
          className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all"
          style={{ ...ub, background: day === i ? accent : 'rgba(255,255,255,0.05)', color: day === i ? P.dark : 'rgba(255,255,255,0.35)' }}>
          {label}
        </button>
      ))}
    </div>
  );
}

function SectionHeader({ num, label, sub, accent }: { num: string; label: string; sub: string; accent: string }) {
  return (
    <div className="flex items-start justify-between mb-10 pb-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <div>
        <span className="text-[9px] uppercase tracking-[0.35em] mb-3 block" style={{ color: 'rgba(255,255,255,0.3)', ...ub }}>{sub}</span>
        <h2 className="font-bold uppercase leading-[0.92] tracking-tight text-white"
          style={{ ...ub, fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>
          {label}
        </h2>
      </div>
      <span className="text-[11px] font-bold tabular-nums mt-1" style={{ color: 'rgba(255,255,255,0.12)', ...ub }}>{num}</span>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function Agenda() {
  const [conocimientoFilter, setConocimientoFilter] = useState<'paneles' | 'dialogos' | 'talleres'>('paneles');
  const [conocimientoDay, setConocimientoDay] = useState(0);
  const [rumbaDay, setRumbaDay] = useState(0);
  const [historiasDay, setHistoriasDay] = useState(0);

  const conocRef = useRef<HTMLDivElement>(null);
  const rumbaRef = useRef<HTMLDivElement>(null);
  const historiasRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const conocSessions = conocimientoSessions[conocimientoFilter][conocimientoDay === 0 ? 'dia1' : 'dia2'];
  const rumbaDaySessions = rumbaDay === 0 ? rumbaSessions.dia1 : rumbaSessions.dia2;
  const historiasDaySessions = historiasDay === 0 ? historiasSessions.dia1 : historiasSessions.dia2;

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.dark }}>
      <HeaderButtons />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16" style={{ background: P.darkGreen }}>
        <img src={posterImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,74,30,0.6) 0%, #191C0F 100%)' }} />
        <div className="relative z-10 px-8 sm:px-14 py-14 sm:py-24">
          <p className="text-[9px] tracking-[0.4em] uppercase mb-6 font-bold" style={{ color: P.lime, ...ub }}>
            Festival NATUR 2026 · Bogotá
          </p>
          <h1 className="font-gasoek uppercase leading-none text-white mb-6"
            style={{ fontSize: 'clamp(4rem, 14vw, 10rem)' }}>
            AGENDA
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5"
              style={{ background: P.lime, color: P.dark, ...ub }}>14 Y 15 AGOSTO 2026</span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)', ...ub }}>Kinder · Chapinero · Bogotá</span>
          </div>
        </div>
      </section>

      {/* ── PILARES GRID (3 tarjetas clicables) ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3">
        <PilarCard
          num="01" cat="Conocimiento"
          titulo={['CONO-', 'CIMIENTO']}
          desc="Paneles, diálogos y talleres con líderes del turismo sostenible."
          tags={['Paneles', 'Diálogos', 'Talleres']}
          bg="#191C0F" tagBg={P.lime} tagColor={P.dark} textColor="#fff"
          onClick={() => scrollTo(conocRef)}
        />
        <PilarCard
          num="02" cat="Cultura"
          titulo={['NUESTRA', 'RUMBA Y SUS', 'MANIFES-', 'TACIONES']}
          desc="Música en vivo, arte urbana y cultura colombiana."
          tags={['Música', 'Arte', 'Inspiración']}
          bg={P.darkGreen} tagBg={P.lime} tagColor={P.dark} textColor="#fff"
          onClick={() => scrollTo(rumbaRef)}
        />
        <PilarCard
          num="03" cat="Inspiración"
          titulo={['HISTORIAS', 'REALES']}
          desc="Proyectos reales que prueban que viajar con conciencia es posible."
          tags={['Testimonios', 'Impacto', 'Comunidad']}
          bg={P.lime} tagBg={P.dark} tagColor={P.lime} textColor={P.dark}
          onClick={() => scrollTo(historiasRef)}
        />
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.darkGreen} color={P.lime} />

      {/* ── 01 CONOCIMIENTO ── */}
      <section ref={conocRef} className="w-full" style={{ background: '#111408' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <SectionHeader num="01" label="CONOCIMIENTO" sub="Paneles · Diálogos · Talleres" accent={P.lime} />

          {/* Filtros de formato */}
          <div className="flex gap-0 mb-6 flex-wrap">
            {([
              { id: 'paneles',  label: 'Paneles' },
              { id: 'dialogos', label: 'Diálogos' },
              { id: 'talleres', label: 'Talleres' },
            ] as const).map(f => (
              <button key={f.id} onClick={() => setConocimientoFilter(f.id)}
                className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all"
                style={{ ...ub, background: conocimientoFilter === f.id ? P.lime : 'rgba(255,255,255,0.05)', color: conocimientoFilter === f.id ? P.dark : 'rgba(255,255,255,0.35)' }}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Day toggle */}
          <div className="mb-8">
            <DayToggle day={conocimientoDay} setDay={setConocimientoDay} accent={P.lime} />
          </div>

          {/* Sessions */}
          <div className="border overflow-hidden" style={{ borderColor: 'rgba(245,224,58,0.12)', background: 'rgba(255,255,255,0.02)' }}>
            {conocSessions.length > 0
              ? conocSessions.map((s, i) => (
                  <SessionRow key={i} time={s.time} title={s.title} speakers={s.speakers} />
                ))
              : (
                <div className="py-16 text-center">
                  <p className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.2)', ...ub }}>Sin sesiones en este formato</p>
                </div>
              )
            }
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.lime} color={P.dark} reverse />

      {/* ── 02 NUESTRA RUMBA ── */}
      <section ref={rumbaRef} className="w-full" style={{ background: '#0d1a0f' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <SectionHeader num="02" label="NUESTRA RUMBA Y SUS MANIFESTACIONES" sub="Música · Arte · Cultura" accent={P.lime} />

          <div className="mb-8">
            <DayToggle day={rumbaDay} setDay={setRumbaDay} accent={P.lime} />
          </div>

          <div className="border overflow-hidden" style={{ borderColor: 'rgba(245,224,58,0.1)', background: 'rgba(255,255,255,0.02)' }}>
            {rumbaDaySessions.map((s, i) => (
              <SessionRow key={i} time={s.time} title={s.title} speakers={s.speakers} tag={s.tag} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.dark} color={P.lime} />

      {/* ── 03 HISTORIAS REALES ── */}
      <section ref={historiasRef} className="w-full" style={{ background: '#111408' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <SectionHeader num="03" label="HISTORIAS REALES" sub="Testimonios · Impacto · Comunidad" accent={P.lime} />

          <div className="mb-8">
            <DayToggle day={historiasDay} setDay={setHistoriasDay} accent={P.lime} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border" style={{ borderColor: 'rgba(245,224,58,0.1)' }}>
            {historiasDaySessions.map((h, i) => (
              <HistoriaCard key={i} title={h.title} desc={h.desc} tag={h.tag} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker bg={P.lime} color={P.dark} reverse />

      {/* ── CTA ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2" style={{ background: P.darkGreen }}>
        <div className="flex flex-col justify-between p-10 md:p-16">
          <div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-[3px] mb-8"
              style={{ background: 'rgba(245,224,58,0.12)', color: P.lime, ...ub }}>Asegura tu lugar</span>
            <h2 className="font-unbounded font-bold uppercase leading-[0.95] tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>
              ¿LISTO PARA<br />VIVIRLO?
            </h2>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.5)', ...ub, fontWeight: 200 }}>
              Cupos limitados. Dos días de turismo sostenible, cultura y conexión en Bogotá.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/tickets">
              <button className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
                style={{ background: P.lime, color: P.dark, ...ub }}>
                <Ticket className="w-3.5 h-3.5" />
                Comprar Entradas
              </button>
            </Link>
            <Link to="/contacto">
              <button className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', ...ub }}>
                <ArrowRight className="w-3.5 h-3.5" />
                Reservar Stand
              </button>
            </Link>
          </div>
        </div>
        {/* Info cols */}
        <div className="grid grid-cols-2 divide-x" style={{ divideColor: 'rgba(255,255,255,0.06)' }}>
          {[
            { label: 'Fecha', value: '14 y 15\nAgosto 2026' },
            { label: 'Sede', value: 'Kinder\nChapinero, Bogotá' },
            { label: 'Horario', value: '10:00 —\n22:00 h' },
            { label: 'Entrada', value: 'Desde\n$50.000 COP' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col justify-between p-7 border-b last:border-b-0"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <span className="text-[9px] uppercase tracking-widest mb-3 block" style={{ color: 'rgba(255,255,255,0.3)', ...ub }}>{label}</span>
              <span className="text-sm font-bold leading-snug text-white whitespace-pre-line" style={ub}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-6 text-center text-xs" style={{ background: P.dark, color: 'rgba(255,255,255,0.25)', ...ub }}>
        © {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados
      </footer>
    </div>
  );
}
