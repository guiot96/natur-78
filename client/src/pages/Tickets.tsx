import React, { useState } from 'react';
import { Link } from 'wouter';
import { Calendar, MapPin, Ticket, Mail, Leaf, Mic, Music, Store, Sparkles, Check } from 'lucide-react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import posterImg from '@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#cad95e', yellow: '#f5e03a', cream: '#FCF8EE',
};

function TicketBand({ accent, label }: { accent: string; label: string }) {
  return (
    <div className="relative overflow-hidden px-8 py-6 flex items-end justify-between"
      style={{ background: P.darkGreen, minHeight: '110px' }}>
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-10" style={{ background: accent }} />
      <div className="absolute -bottom-6 right-16 w-20 h-20 rounded-full opacity-10" style={{ background: accent }} />
      <div className="absolute top-3 right-4 opacity-20">
        <Leaf className="w-10 h-10" style={{ color: accent }} />
      </div>
      <div>
        <p className="text-xs tracking-[0.3em] uppercase mb-1 font-bold"
          style={{ color: accent, opacity: 0.7, fontFamily: 'Unbounded, sans-serif' }}>
          Festival NATUR 2026
        </p>
        <p className="font-gasoek text-3xl uppercase text-white leading-none">{label}</p>
      </div>
      <div className="text-right">
        <div className="inline-block px-3 py-1" style={{ background: accent }}>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>14 y 15 AGO</span>
        </div>
        <p className="text-white/40 text-xs mt-1">Kinder · Bogotá</p>
      </div>
    </div>
  );
}

interface TicketProps {
  id: string; name: string; subtitle: string; price: string; badge?: string;
  features: { icon: React.ElementType; text: string }[];
  selected: boolean; onSelect: () => void;
  accent: string; label: string;
}

function TicketCard({ id, name, subtitle, price, badge, features, selected, onSelect, accent, label }: TicketProps) {
  return (
    <div onClick={onSelect} className="relative cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: selected ? `0 0 0 3px ${accent}, 0 24px 60px rgba(0,0,0,0.18)` : '0 4px 24px rgba(0,0,0,0.10)' }}>
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 text-[11px] font-bold tracking-widest px-5 py-1 uppercase"
          style={{ background: P.yellow, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
          {badge}
        </div>
      )}
      <TicketBand accent={accent} label={label} />
      {/* Perforated line */}
      <div className="relative flex items-center" style={{ background: P.dark }}>
        <div className="w-5 h-5 rounded-full absolute -left-2.5" style={{ background: P.cream }} />
        <div className="flex-1 mx-5 border-t-2 border-dashed" style={{ borderColor: `${accent}30` }} />
        <div className="w-5 h-5 rounded-full absolute -right-2.5" style={{ background: P.cream }} />
      </div>
      {/* Body */}
      <div className="px-8 py-6 flex flex-col gap-5" style={{ background: P.dark }}>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-gasoek text-4xl sm:text-5xl uppercase leading-none" style={{ color: accent }}>{name}</h2>
            <p className="text-sm mt-1 font-unbounded font-extralight" style={{ color: 'rgba(255,255,255,0.4)' }}>{subtitle}</p>
          </div>
          <div className="text-right">
            <p className="font-gasoek text-4xl sm:text-5xl leading-none" style={{ color: accent }}>${price}</p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>COP</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <f.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
              {f.text}
            </li>
          ))}
        </ul>
        <div className="flex gap-1">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="flex-1 h-px" style={{ background: `${accent}20` }} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
            NATUR-2026-{id.toUpperCase()}
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1.5 rounded-sm" style={{ height: `${8 + (i % 3) * 4}px`, background: accent, opacity: 0.3 + (i % 4) * 0.2 }} />
            ))}
          </div>
        </div>
        <button className="w-full py-4 text-sm font-bold uppercase tracking-wider hover:opacity-85 flex items-center justify-center gap-2 transition-opacity"
          style={{ background: accent, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
          <Ticket className="w-4 h-4" />
          COMPRAR ENTRADA
        </button>
      </div>
    </div>
  );
}

export default function Tickets() {
  const [selected, setSelected] = useState<string | null>(null);

  const tickets = [
    {
      id: 'un-dia', name: '1 DÍA', label: '1 DÍA', subtitle: 'Elige el día que prefieras', price: '50.000',
      accent: P.lime,
      features: [
        { icon: Mic,      text: 'Charlas y conferencias magistrales' },
        { icon: Music,    text: 'Conciertos y música en vivo' },
        { icon: Store,    text: 'Feria de emprendimientos sostenibles' },
        { icon: Sparkles, text: 'Experiencias y actividades culturales' },
      ],
    },
    {
      id: 'dos-dias', name: '2 DÍAS', label: '2 DÍAS', subtitle: 'Acceso completo al festival', price: '70.000',
      badge: 'RECOMENDADO',
      accent: P.yellow,
      features: [
        { icon: Check,    text: 'Acceso completo ambos días' },
        { icon: Mic,      text: 'Toda la programación cultural' },
        { icon: Sparkles, text: 'Zona especial y networking' },
        { icon: Music,    text: 'Experiencias premium + rumba nocturna' },
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.cream }}>
      <HeaderButtons />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16" style={{ background: P.darkGreen }}>
        <img src={posterImg} alt="Festival NATUR 2026"
          className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(26,74,30,0.5) 0%, rgba(26,74,30,0.96) 75%)' }} />
        <div className="relative z-10 text-center px-6 py-16 sm:py-24">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-bold"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Festival Nacional de Turismo Sostenible
          </p>
          <h1 className="font-gasoek text-6xl sm:text-7xl md:text-8xl uppercase leading-none mb-2 text-white">
            ENTRADAS
          </h1>
          <p className="font-unbounded font-extralight text-xl sm:text-2xl mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Elige tu experiencia y vive el festival
          </p>
          <h2 className="font-gasoek text-2xl sm:text-3xl uppercase" style={{ color: P.lime }}>NATUR 2026</h2>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider px-4 py-1.5"
              style={{ background: P.yellow, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
              14 Y 15 AGOSTO
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/55 text-sm">Kinder, Chapinero, Bogotá</span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
          {tickets.map((t) => (
            <TicketCard key={t.id} {...t} selected={selected === t.id} onSelect={() => setSelected(t.id)} />
          ))}
        </div>

        {/* Info strip */}
        <div className="max-w-4xl mx-auto mt-10 grid sm:grid-cols-3 gap-1">
          {[
            { icon: Calendar, label: 'Fechas', value: '14 y 15 de agosto, 2026' },
            { icon: MapPin,   label: 'Sede',   value: 'Kinder · Calle 59 #6-21, Bogotá' },
            { icon: Ticket,   label: 'Cupos',  value: 'Limitados — reserva ya' },
          ].map((item) => (
            <div key={item.label} className="px-6 py-5 flex items-start gap-4" style={{ background: P.darkGreen }}>
              <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: P.lime }} />
              <div>
                <p className="text-xs uppercase tracking-wider font-bold mb-0.5"
                  style={{ color: P.lime, opacity: 0.6, fontFamily: 'Unbounded, sans-serif' }}>
                  {item.label}
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dudas CTA */}
      <section className="py-16 px-6 text-center" style={{ background: P.darkGreen }}>
        <h2 className="font-unbounded font-extralight text-3xl sm:text-4xl mb-2 text-white">¿Tienes dudas?</h2>
        <p className="mb-8 max-w-md mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Escríbenos y te ayudamos a elegir la opción perfecta para ti.
        </p>
        <a href="mailto:info@festivalnatur.com"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
          style={{ background: P.lime, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
          <Mail className="w-4 h-4" />
          info@festivalnatur.com
        </a>
      </section>

      <footer className="py-6 text-center text-xs" style={{ background: P.dark, color: 'rgba(255,255,255,0.3)' }}>
        © {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados
      </footer>
    </div>
  );
}
