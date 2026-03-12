import React, { useState } from 'react';
import { Clock, Calendar, Ticket } from 'lucide-react';
import { Link } from 'wouter';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import posterImg from '@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#f5e03a', yellow: '#f5e03a', cream: '#FCF8EE',
};

const typeConfig: Record<string, { label: string; color: string }> = {
  charla:         { label: 'Charla',        color: P.lime },
  experiencia:    { label: 'Experiencia',   color: P.midGreen },
  taller:         { label: 'Taller',        color: P.yellow },
  showcase:       { label: 'Showcase',      color: P.lime },
  foro:           { label: 'Foro',          color: P.yellow },
  bienestar:      { label: 'Bienestar',     color: P.midGreen },
  vip:            { label: 'VIP',           color: P.yellow },
  arte:           { label: 'Arte',          color: P.lime },
  startup:        { label: 'Startup',       color: P.yellow },
  wellness:       { label: 'Wellness',      color: P.midGreen },
  musica:         { label: 'Música',        color: P.lime },
  rumba:          { label: 'Rumba',         color: P.yellow },
  ritual:         { label: 'Ritual',        color: P.midGreen },
  pitch:          { label: 'Pitch',         color: P.yellow },
  gastronomia:    { label: 'Gastronomía',   color: P.lime },
  ceremonia:      { label: 'Ceremonia',     color: P.yellow },
  entretenimiento:{ label: 'Cultura',       color: P.lime },
};

const agendaData = {
  'vive': {
    label: 'VIVE NATUR',
    subtitle: 'Agenda Abierta — 9:00 a.m. a 6:00 p.m.',
    desc: 'Charlas · Talleres · Feria de Emprendimientos · Cultura · Zona Chill',
    accent: P.lime,
    days: [
      {
        label: 'Jueves 14 de agosto',
        sessions: [
          { time: '9:00',  title: 'Apertura del Festival — Charlas NATUR', speakers: ['Brigitte Baptiste', 'Equipo NATUR'], type: 'charla' },
          { time: '10:00', title: 'Networking Gastronómico — Rooftop', speakers: ['Chefs Sostenibles', 'Productores Locales'], type: 'gastronomia' },
          { time: '10:00', title: 'Taller: Tintes naturales y estampados', speakers: ['Artesanos textiles'], type: 'taller' },
          { time: '11:00', title: 'Taller: Bombas de Semillas', speakers: ['Facilitadores ambientales'], type: 'taller' },
          { time: '11:00', title: 'Taller: Crea tu propio terrario', speakers: ['Jardineros urbanos'], type: 'taller' },
          { time: '11:00', title: 'Origami del agua', speakers: ['Artistas del papel'], type: 'arte' },
          { time: '11:30', title: 'Showcase de Emprendimientos Sostenibles', speakers: ['Startups Verdes', 'Emprendedores'], type: 'showcase' },
          { time: '14:00', title: 'Zona Chill: Música y Relajación', speakers: ['Artistas Locales', 'DJs Orgánicos'], type: 'musica' },
          { time: '14:00', title: 'Círculo de tambores', speakers: ['Músicos tradicionales'], type: 'musica' },
          { time: '16:00', title: 'Foro Colombia Sostenible 2026: Panel Nacional', speakers: ['Expertos en Sostenibilidad', 'Gobierno', 'Academia'], type: 'foro' },
          { time: '16:00', title: 'Ritual colectivo del agua', speakers: ['Sabedores del agua'], type: 'ritual' },
        ],
      },
      {
        label: 'Viernes 15 de agosto',
        sessions: [
          { time: '9:00',  title: 'Charlas NATUR: Turismo Regenerativo', speakers: ['Expertos Internacionales', 'Comunidades Locales'], type: 'charla' },
          { time: '11:00', title: 'Pitch Session — Emprendimientos Sostenibles', speakers: ['Emprendedores', 'Inversionistas'], type: 'pitch' },
          { time: '11:00', title: 'Taller: Bombas de Semillas', speakers: ['Facilitadores ambientales'], type: 'taller' },
          { time: '13:00', title: 'Almuerzo Sostenible — Rooftop', speakers: ['Restaurantes Km0', 'Cocineros Tradicionales'], type: 'gastronomia' },
          { time: '14:00', title: 'Círculo de tambores', speakers: ['Músicos tradicionales'], type: 'musica' },
          { time: '15:00', title: 'Zona Chill: Actividades de Cierre', speakers: ['Artistas', 'Facilitadores Wellness'], type: 'bienestar' },
          { time: '16:00', title: 'Ritual colectivo del agua', speakers: ['Sabedores del agua'], type: 'ritual' },
          { time: '17:00', title: 'Ceremonia de Clausura VIVE NATUR', speakers: ['Equipo NATUR', 'Participantes'], type: 'ceremonia' },
        ],
      },
    ],
  },
  'pro': {
    label: 'NATUR PRO',
    subtitle: 'Agenda Especializada — 8:00 a.m. a 10:00 p.m.',
    desc: 'Todo VIVE NATUR + VIP Breakfasts · Startups · Wellness · Rumba · Zona VIP',
    accent: P.yellow,
    days: [
      {
        label: 'Jueves 14 de agosto',
        sessions: [
          { time: '8:00',  title: 'Desayuno VIP + Coffee Talks Exclusivos', speakers: ['Líderes del sector turístico'], type: 'vip' },
          { time: '9:00',  title: 'Cartel de Artistas: Presentaciones Matutinas', speakers: ['Artistas Nacionales', 'Músicos Sostenibles'], type: 'arte' },
          { time: '10:00', title: 'Taller: Tintes naturales y estampados (VIP)', speakers: ['Artesanos textiles'], type: 'taller' },
          { time: '10:30', title: 'Talleres Especializados: Turismo Regenerativo', speakers: ['Facilitadores Expertos', 'Consultores Internacionales'], type: 'taller' },
          { time: '12:00', title: 'Zona Startups: Pitch y Demo Day', speakers: ['Startups Seleccionadas', 'Fondos de Inversión'], type: 'startup' },
          { time: '14:00', title: 'Zona Wellness: Bienestar y Naturaleza', speakers: ['Instructores Wellness', 'Terapeutas Holísticos'], type: 'wellness' },
          { time: '16:00', title: 'Experiencia NATUR: Actividad Inmersiva', speakers: ['Guías Especializados', 'Comunidades Locales'], type: 'experiencia' },
          { time: '19:00', title: 'Rumba y Manifestaciones Culturales', speakers: ['DJs', 'Grupos Folclóricos'], type: 'rumba' },
        ],
      },
      {
        label: 'Viernes 15 de agosto',
        sessions: [
          { time: '8:00',  title: 'Coffee Talks VIP: Desayuno de Cierre', speakers: ['Panelistas Destacados', 'Invitados Especiales'], type: 'vip' },
          { time: '9:00',  title: 'Talleres Especializados: Implementación de Proyectos', speakers: ['Mentores Expertos', 'Facilitadores'], type: 'taller' },
          { time: '10:30', title: 'Zona Startups: Demo Final y Premiación', speakers: ['Jurado de Expertos', 'Startups Finalistas'], type: 'startup' },
          { time: '12:00', title: 'Experiencia NATUR: Inmersión Completa', speakers: ['Guías Especializados', 'Comunidades Anfitrionas'], type: 'experiencia' },
          { time: '14:00', title: 'Zona Wellness: Sesión de Integración', speakers: ['Terapeutas', 'Instructores Certificados'], type: 'wellness' },
          { time: '16:00', title: 'Cartel de Artistas: Presentaciones de Cierre', speakers: ['Artistas Principales', 'Invitados Especiales'], type: 'arte' },
          { time: '18:00', title: 'Zona VIP: Cena de Gala y After Party', speakers: ['Chefs Estrella', 'DJs Internacionales'], type: 'vip' },
        ],
      },
    ],
  },
};

function SessionRow({ session, accent }: { session: any; accent: string }) {
  const cfg = typeConfig[session.type] || { label: session.type, color: P.lime };
  return (
    <div className="flex gap-4 sm:gap-6 py-5 border-b last:border-b-0 hover:bg-black/[0.02] transition-colors px-4 sm:px-8"
      style={{ borderColor: 'rgba(26,74,30,0.1)' }}>
      {/* Time */}
      <div className="flex-shrink-0 w-12 sm:w-16 pt-0.5">
        <span className="text-sm font-semibold tabular-nums" style={{ color: P.darkGreen }}>
          {session.time}
        </span>
      </div>
      {/* Dot timeline */}
      <div className="flex flex-col items-center pt-2 gap-1 flex-shrink-0">
        <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
        <div className="w-px flex-1 min-h-[20px]" style={{ background: 'rgba(26,74,30,0.12)' }} />
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0 pb-4">
        <h3 className="font-semibold text-base leading-snug mb-2" style={{ color: P.dark }}>
          {session.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] px-2 py-0.5 font-bold uppercase tracking-widest"
            style={{ background: cfg.color, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
            {cfg.label}
          </span>
          {session.speakers?.map((s: string, i: number) => (
            <span key={i} className="text-xs" style={{ color: 'rgba(25,28,15,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {i > 0 ? '· ' : ''}{s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const CATEGORIAS = [
  { id: 'todas',    label: 'Todas',    types: null },
  { id: 'paneles',  label: 'Paneles',  types: ['foro', 'pitch', 'startup', 'showcase'] },
  { id: 'dialogos', label: 'Diálogos', types: ['charla', 'vip', 'foro'] },
  { id: 'talleres', label: 'Talleres', types: ['taller', 'bienestar', 'wellness'] },
] as const;

type CategoriaId = typeof CATEGORIAS[number]['id'];

export default function Agenda() {
  const [track, setTrack] = useState<'vive' | 'pro'>('vive');
  const [day, setDay] = useState(0);
  const [categoria, setCategoria] = useState<CategoriaId>('todas');
  const current = agendaData[track];
  const currentDay = current.days[day];
  const catConfig = CATEGORIAS.find(c => c.id === categoria)!;
  const filteredSessions = catConfig.types
    ? currentDay.sessions.filter(s => (catConfig.types as readonly string[]).includes(s.type))
    : currentDay.sessions;

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.cream }}>
      <HeaderButtons />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-16" style={{ background: P.darkGreen }}>
        <img src={posterImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,74,30,0.55) 0%, rgba(26,74,30,0.97) 80%)' }} />
        <div className="relative z-10 text-center px-6 py-14 sm:py-20">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-bold"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Festival NATUR 2026
          </p>
          <h1 className="font-gasoek text-6xl sm:text-7xl md:text-8xl uppercase leading-none mb-3 text-white">
            AGENDA
          </h1>
          <p className="font-unbounded font-extralight text-xl sm:text-2xl mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Dos días de turismo sostenible, cultura y conexión
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider px-4 py-1.5"
              style={{ background: P.yellow, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
              14 Y 15 AGOSTO
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/55 text-sm">Kinder, Chapinero, Bogotá</span>
          </div>
        </div>
      </section>

      {/* ── Track selector ── */}
      <div className="sticky top-16 z-30 border-b" style={{ background: P.dark, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-5xl mx-auto flex">
          {(['vive', 'pro'] as const).map((t) => {
            const a = agendaData[t];
            const isActive = track === t;
            return (
              <button key={t} onClick={() => setTrack(t)}
                className="flex-1 py-4 px-4 sm:px-8 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 transition-all"
                style={{ borderBottom: isActive ? `2px solid ${a.accent}` : '2px solid transparent' }}>
                <span className="font-gasoek text-base sm:text-xl uppercase leading-none"
                  style={{ color: isActive ? a.accent : 'rgba(255,255,255,0.4)' }}>
                  {a.label}
                </span>
                <span className="text-xs hidden sm:block" style={{ color: isActive ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.2)' }}>
                  {a.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-0 sm:px-6 py-10">
        <div className="px-4 sm:px-0 mb-8">
          <p className="text-sm" style={{ color: 'rgba(25,28,15,0.5)', fontFamily: 'Unbounded, sans-serif' }}>
            {current.desc}
          </p>
        </div>

        {/* Bloque CONOCIMIENTO */}
        <div className="mb-8 border overflow-hidden" style={{ borderColor: 'rgba(26,74,30,0.15)' }}>
          {/* Header strip */}
          <div
            className="flex items-center justify-between px-6 py-3 border-b"
            style={{ background: P.dark, borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <span
              className="text-[9px] font-bold uppercase tracking-[0.35em]"
              style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Unbounded, sans-serif' }}
            >
              Conocimiento
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-[0.3em]"
              style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}
            >
              3 formatos
            </span>
          </div>
          {/* Sub-category buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0"
            style={{ divideColor: 'rgba(26,74,30,0.12)' }}>
            {CATEGORIAS.map(c => {
              const isActive = categoria === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCategoria(c.id)}
                  className="flex flex-col items-start px-5 py-4 transition-all text-left"
                  style={{
                    background: isActive ? P.dark : 'white',
                    borderBottom: '1px solid rgba(26,74,30,0.1)',
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest leading-none"
                    style={{
                      fontFamily: 'Unbounded, sans-serif',
                      color: isActive ? P.lime : P.darkGreen,
                    }}
                  >
                    {c.label}
                  </span>
                  {isActive && (
                    <span
                      className="mt-1 text-[9px] uppercase tracking-wider"
                      style={{ color: 'rgba(245,224,58,0.5)', fontFamily: 'Unbounded, sans-serif' }}
                    >
                      seleccionado
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 mb-8 px-4 sm:px-0">
          {current.days.map((d, i) => (
            <button key={i} onClick={() => setDay(i)}
              className="px-5 py-2.5 text-sm font-semibold transition-all"
              style={day === i
                ? { background: current.accent, color: P.dark }
                : { background: 'transparent', color: P.darkGreen, border: `1px solid rgba(26,74,30,0.3)` }
              }>
              Día {i + 1}
            </button>
          ))}
        </div>

        {/* Day label */}
        <div className="mb-6 px-4 sm:px-0 flex items-center gap-3">
          <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: current.accent }} />
          <h2 className="font-unbounded font-extralight text-xl sm:text-2xl" style={{ color: P.darkGreen }}>
            {currentDay.label}
          </h2>
        </div>

        {/* Sessions */}
        <div className="border overflow-hidden" style={{ borderColor: 'rgba(26,74,30,0.15)', background: 'white' }}>
          {filteredSessions.length > 0
            ? filteredSessions.map((s, i) => (
                <SessionRow key={i} session={s} accent={current.accent} />
              ))
            : (
              <div className="py-16 text-center px-8">
                <p className="text-sm font-bold uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(25,28,15,0.25)', fontFamily: 'Unbounded, sans-serif' }}>
                  Sin sesiones en esta categoría
                </p>
                <p className="text-xs" style={{ color: 'rgba(25,28,15,0.35)' }}>
                  Prueba con otro día o categoría
                </p>
              </div>
            )
          }
        </div>

        {/* CTA */}
        <div className="mt-12 px-4 sm:px-0 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between py-8 border-t"
          style={{ borderColor: 'rgba(26,74,30,0.15)' }}>
          <div>
            <h3 className="font-unbounded font-extralight text-2xl sm:text-3xl" style={{ color: P.darkGreen }}>
              ¿Listo para vivir el festival?
            </h3>
            <p className="text-sm mt-1" style={{ color: 'rgba(25,28,15,0.5)' }}>
              Asegura tu lugar en NATUR 2026 — cupos limitados.
            </p>
          </div>
          <Link to="/tickets">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-8 py-4 hover:opacity-90 transition-opacity flex-shrink-0"
              style={{ background: P.darkGreen, color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
              <Ticket className="w-4 h-4" />
              COMPRAR ENTRADAS
            </button>
          </Link>
        </div>
      </div>

      <footer className="py-6 text-center text-xs" style={{ background: P.dark, color: 'rgba(255,255,255,0.3)' }}>
        © {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados
      </footer>
    </div>
  );
}
