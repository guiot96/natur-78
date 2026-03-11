import React, { useState } from 'react';
import { Clock, MapPin, Users, Calendar, ChevronRight, User, Star, Ticket } from 'lucide-react';
import { Link } from 'wouter';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import posterImg from '@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg';

/* ── palette ── */
const P = {
  dark:      '#191C0F',
  darkGreen: '#1a4a1e',
  midGreen:  '#2d7a32',
  lime:      '#cad95e',
  yellow:    '#f5e03a',
  cream:     '#FCF8EE',
};

/* ── session type tags ── */
const typeConfig: Record<string, { label: string; color: string }> = {
  charla:        { label: 'Charla',       color: P.lime },
  experiencia:   { label: 'Experiencia',  color: P.midGreen },
  taller:        { label: 'Taller',       color: P.yellow },
  showcase:      { label: 'Showcase',     color: P.lime },
  foro:          { label: 'Foro',         color: P.yellow },
  bienestar:     { label: 'Bienestar',    color: P.midGreen },
  vip:           { label: 'VIP',          color: P.yellow },
  arte:          { label: 'Arte',         color: P.lime },
  startup:       { label: 'Startup',      color: P.yellow },
  wellness:      { label: 'Wellness',     color: P.midGreen },
  musica:        { label: 'Música',       color: P.lime },
  rumba:         { label: 'Rumba',        color: P.yellow },
  ritual:        { label: 'Ritual',       color: P.midGreen },
  pitch:         { label: 'Pitch',        color: P.yellow },
  gastronomia:   { label: 'Gastronomía',  color: P.lime },
  ceremonia:     { label: 'Ceremonia',    color: P.yellow },
  entretenimiento:{ label: 'Cultura',    color: P.lime },
};

const agendaData = {
  'vive': {
    label: 'VIVE NATUR',
    subtitle: 'Agenda Abierta — 9:00 a.m. a 6:00 p.m.',
    desc: 'Charlas · Talleres · Feria de Emprendimientos · Cultura · Zona Chill',
    accent: P.lime,
    days: [
      {
        label: 'Día 1 — Jueves 14 de agosto',
        sessions: [
          { time: '9:00', title: 'Apertura del Festival — Charlas NATUR', speakers: ['Brigitte Baptiste', 'Equipo NATUR'], type: 'charla' },
          { time: '10:00', title: 'Networking Gastronómico — Rooftop', speakers: ['Chefs Sostenibles', 'Productores Locales'], type: 'gastronomia' },
          { time: '10:00', title: 'Taller: Tintes naturales y estampados', speakers: ['Artesanos textiles'], type: 'taller' },
          { time: '11:00', title: 'Taller: Bombas de Semillas', speakers: ['Facilitadores ambientales'], type: 'taller' },
          { time: '11:00', title: 'Taller: Crea tu propio terrario', speakers: ['Jardineros urbanos'], type: 'taller' },
          { time: '11:00', title: 'Origami del agua', speakers: ['Artistas del papel'], type: 'arte' },
          { time: '11:30', title: 'Showcase de Emprendimientos Sostenibles', speakers: ['Startups Verdes', 'Emprendedores Locales'], type: 'showcase' },
          { time: '14:00', title: 'Zona Chill: Música y Relajación', speakers: ['Artistas Locales', 'DJs Orgánicos'], type: 'musica' },
          { time: '14:00', title: 'Círculo de tambores', speakers: ['Músicos tradicionales'], type: 'musica' },
          { time: '16:00', title: 'Foro Colombia Sostenible 2026: Panel Nacional', speakers: ['Expertos en Sostenibilidad', 'Gobierno', 'Academia'], type: 'foro' },
          { time: '16:00', title: 'Ritual colectivo del agua', speakers: ['Sabedores del agua'], type: 'ritual' },
        ],
      },
      {
        label: 'Día 2 — Viernes 15 de agosto',
        sessions: [
          { time: '9:00', title: 'Charlas NATUR: Turismo Regenerativo', speakers: ['Expertos Internacionales', 'Comunidades Locales'], type: 'charla' },
          { time: '11:00', title: 'Pitch Session — Emprendimientos Sostenibles', speakers: ['Emprendedores', 'Inversionistas'], type: 'pitch' },
          { time: '11:00', title: 'Taller: Bombas de Semillas', speakers: ['Facilitadores ambientales'], type: 'taller' },
          { time: '11:00', title: 'Taller: Terrario urbano', speakers: ['Jardineros urbanos'], type: 'taller' },
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
        label: 'Día 1 — Jueves 14 de agosto',
        sessions: [
          { time: '8:00',  title: 'Desayuno VIP + Coffee Talks Exclusivos', speakers: ['Líderes del sector turístico'], type: 'vip' },
          { time: '9:00',  title: 'Cartel de Artistas: Presentaciones Matutinas', speakers: ['Artistas Nacionales', 'Músicos Sostenibles'], type: 'arte' },
          { time: '10:00', title: 'Taller: Tintes naturales y estampados (VIP)', speakers: ['Artesanos textiles'], type: 'taller' },
          { time: '10:30', title: 'Talleres Especializados: Turismo Regenerativo', speakers: ['Facilitadores Expertos', 'Consultores Internacionales'], type: 'taller' },
          { time: '11:00', title: 'Taller: Bombas de Semillas Premium', speakers: ['Facilitadores ambientales'], type: 'taller' },
          { time: '11:00', title: 'Origami del agua', speakers: ['Artistas del papel'], type: 'arte' },
          { time: '12:00', title: 'Zona Startups: Pitch y Demo Day', speakers: ['Startups Seleccionadas', 'Fondos de Inversión'], type: 'startup' },
          { time: '14:00', title: 'Círculo de tambores', speakers: ['Músicos tradicionales'], type: 'musica' },
          { time: '14:00', title: 'Zona Wellness: Bienestar y Naturaleza', speakers: ['Instructores Wellness', 'Terapeutas Holísticos'], type: 'wellness' },
          { time: '16:00', title: 'Experiencia NATUR: Actividad Inmersiva', speakers: ['Guías Especializados', 'Comunidades Locales'], type: 'experiencia' },
          { time: '16:00', title: 'Ritual colectivo del agua', speakers: ['Sabedores del agua'], type: 'ritual' },
          { time: '19:00', title: 'Rumba y Manifestaciones Culturales', speakers: ['DJs', 'Grupos Folclóricos'], type: 'rumba' },
        ],
      },
      {
        label: 'Día 2 — Viernes 15 de agosto',
        sessions: [
          { time: '8:00',  title: 'Coffee Talks VIP: Desayuno de Cierre', speakers: ['Panelistas Destacados', 'Invitados Especiales'], type: 'vip' },
          { time: '9:00',  title: 'Talleres Especializados: Implementación de Proyectos', speakers: ['Mentores Expertos', 'Facilitadores'], type: 'taller' },
          { time: '10:00', title: 'Taller: Tintes naturales VIP', speakers: ['Artesanos maestros'], type: 'taller' },
          { time: '10:30', title: 'Zona Startups: Demo Final y Premiación', speakers: ['Jurado de Expertos', 'Startups Finalistas'], type: 'startup' },
          { time: '11:00', title: 'Taller: Bombas de Semillas Premium', speakers: ['Facilitadores expertos'], type: 'taller' },
          { time: '12:00', title: 'Experiencia NATUR: Inmersión Completa', speakers: ['Guías Especializados', 'Comunidades Anfitrionas'], type: 'experiencia' },
          { time: '14:00', title: 'Círculo de tambores ceremonial', speakers: ['Músicos tradicionales maestros'], type: 'musica' },
          { time: '14:00', title: 'Zona Wellness: Sesión de Integración', speakers: ['Terapeutas', 'Instructores Certificados'], type: 'wellness' },
          { time: '16:00', title: 'Cartel de Artistas: Presentaciones de Cierre', speakers: ['Artistas Principales', 'Invitados Especiales'], type: 'arte' },
          { time: '16:00', title: 'Ritual colectivo del agua VIP', speakers: ['Sabedores ancestrales'], type: 'ritual' },
          { time: '18:00', title: 'Zona VIP: Cena de Gala y After Party', speakers: ['Chefs Estrella', 'DJs Internacionales'], type: 'vip' },
        ],
      },
    ],
  },
};

/* ── Session row ── */
function SessionRow({ session, accent }: { session: any; accent: string }) {
  const cfg = typeConfig[session.type] || { label: session.type, color: P.lime };
  return (
    <div className="flex gap-4 sm:gap-8 py-5 border-b last:border-b-0 group hover:bg-black/[0.02] transition-colors px-4 sm:px-8"
      style={{ borderColor: 'rgba(26,74,30,0.1)' }}>
      {/* Time */}
      <div className="flex-shrink-0 w-14 sm:w-20 pt-0.5">
        <span className="font-gasoek text-base sm:text-lg leading-none" style={{ color: P.darkGreen }}>
          {session.time}
        </span>
      </div>
      {/* Dot */}
      <div className="flex-shrink-0 flex flex-col items-center pt-2 gap-1">
        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: accent }} />
        <div className="w-px flex-1" style={{ background: 'rgba(26,74,30,0.15)' }} />
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0 pb-4">
        <h3 className="font-gasoek text-base sm:text-lg uppercase leading-tight mb-1.5" style={{ color: P.dark }}>
          {session.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs px-2 py-0.5 font-bold uppercase tracking-wider"
            style={{ background: cfg.color, color: P.dark }}>
            {cfg.label}
          </span>
          {session.speakers?.map((s: string, i: number) => (
            <span key={i} className="text-xs" style={{ color: 'rgba(25,28,15,0.5)' }}>
              {i > 0 ? '· ' : ''}{s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function Agenda() {
  const [track, setTrack] = useState<'vive' | 'pro'>('vive');
  const [day, setDay] = useState(0);

  const current = agendaData[track];
  const currentDay = current.days[day];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.cream }}>
      <HeaderButtons />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-16" style={{ background: P.darkGreen }}>
        <img src={posterImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,74,30,0.55) 0%, rgba(26,74,30,0.97) 80%)' }} />
        <div className="relative z-10 text-center px-6 py-14 sm:py-20">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-bold"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Festival NATUR 2026
          </p>
          <h1 className="font-gasoek text-6xl sm:text-7xl md:text-8xl uppercase leading-none mb-4 text-white">
            AGENDA
          </h1>
          <div className="flex items-center justify-center gap-3 flex-wrap mt-4">
            <span className="px-4 py-1.5 text-sm font-bold uppercase tracking-wider font-gasoek"
              style={{ background: P.yellow, color: P.dark }}>
              14 Y 15 AGOSTO
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/60 text-sm">Kinder, Chapinero, Bogotá</span>
          </div>
        </div>
      </section>

      {/* ── Track selector ── */}
      <div className="sticky top-16 z-30 border-b" style={{ background: P.dark, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-5xl mx-auto flex items-stretch">
          {(['vive', 'pro'] as const).map((t) => {
            const a = agendaData[t];
            const isActive = track === t;
            return (
              <button key={t} onClick={() => setTrack(t)}
                className="flex-1 py-4 px-6 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 transition-all relative"
                style={{ borderBottom: isActive ? `3px solid ${a.accent}` : '3px solid transparent' }}>
                <span className="font-gasoek text-lg sm:text-xl uppercase leading-none"
                  style={{ color: isActive ? a.accent : 'rgba(255,255,255,0.45)' }}>
                  {a.label}
                </span>
                <span className="text-xs hidden sm:block" style={{ color: isActive ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.25)' }}>
                  {a.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-0 sm:px-6 py-10">
        {/* Track description */}
        <div className="px-4 sm:px-0 mb-8">
          <p className="text-sm" style={{ color: 'rgba(25,28,15,0.55)', fontFamily: 'Unbounded, sans-serif' }}>
            {current.desc}
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 mb-8 px-4 sm:px-0">
          {current.days.map((d, i) => (
            <button key={i} onClick={() => setDay(i)}
              className="px-5 py-2.5 font-gasoek text-sm uppercase tracking-wide transition-all"
              style={day === i
                ? { background: current.accent, color: P.dark }
                : { background: 'transparent', color: P.darkGreen, border: `1px solid ${P.darkGreen}` }
              }>
              DÍA {i + 1}
            </button>
          ))}
        </div>

        {/* Day label */}
        <div className="mb-6 px-4 sm:px-0">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4" style={{ color: current.accent }} />
            <h2 className="font-gasoek text-xl sm:text-2xl uppercase" style={{ color: P.darkGreen }}>
              {currentDay.label}
            </h2>
          </div>
        </div>

        {/* Sessions */}
        <div className="border rounded-none overflow-hidden" style={{ borderColor: 'rgba(26,74,30,0.15)', background: 'white' }}>
          {currentDay.sessions.map((s, i) => (
            <SessionRow key={i} session={s} accent={current.accent} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 px-4 sm:px-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between py-8 border-t"
          style={{ borderColor: 'rgba(26,74,30,0.15)' }}>
          <div>
            <p className="font-gasoek text-xl uppercase" style={{ color: P.darkGreen }}>
              ¿Listo para vivir el festival?
            </p>
            <p className="text-sm mt-1" style={{ color: 'rgba(25,28,15,0.55)' }}>
              Compra tu entrada y asegura tu lugar en NATUR 2026.
            </p>
          </div>
          <Link to="/tickets">
            <button className="flex items-center gap-2 font-gasoek text-sm uppercase tracking-wider px-8 py-4 hover:opacity-90 transition-opacity"
              style={{ background: P.darkGreen, color: P.lime }}>
              <Ticket className="w-4 h-4" />
              COMPRAR ENTRADAS
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-xs" style={{ background: P.dark, color: 'rgba(255,255,255,0.3)' }}>
        <p>© {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
