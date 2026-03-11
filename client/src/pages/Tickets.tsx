import React, { useState } from 'react';
import { Link } from 'wouter';
import { Calendar, MapPin, Ticket, Mail } from 'lucide-react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import posterImg from '@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg';

/* ─── Palette — verde / amarillo / crema ─── */
const C = {
  yellow:     '#f5e03a',
  darkGreen:  '#1a4a1e',
  midGreen:   '#2e7d32',
  lightGreen: '#66bb6a',
  lime:       '#cad95e',
  teal:       '#1a8a7a',
  cream:      '#FCF8EE',
  dark:       '#191C0F',
  amber:      '#e8a000',
};

/* ─── SVG: paisaje diurno (1 día) ─── */
function IllustrationDay() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
      {/* Sky — yellow like the poster */}
      <rect width="400" height="180" fill={C.yellow} />
      {/* Sun rays */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
        <line key={i} x1="340" y1="40"
          x2={340 + Math.cos(a * Math.PI / 180) * 120}
          y2={40 + Math.sin(a * Math.PI / 180) * 120}
          stroke="white" strokeWidth="5" strokeOpacity="0.5" />
      ))}
      {/* Sun amber */}
      <circle cx="340" cy="40" r="28" fill={C.amber} />
      {/* Mountains */}
      <polygon points="0,140 60,50 120,140" fill={C.darkGreen} />
      <polygon points="80,140 160,30 240,140" fill="#1b5e20" />
      <polygon points="200,140 280,55 360,140" fill={C.darkGreen} />
      <polygon points="290,140 360,65 430,140" fill="#2e7d32" />
      {/* Snow caps */}
      <polygon points="160,30 150,65 170,65" fill="white" opacity="0.9" />
      <polygon points="280,55 270,85 290,85" fill="white" opacity="0.9" />
      {/* Hills */}
      <ellipse cx="100" cy="155" rx="130" ry="40" fill={C.midGreen} />
      <ellipse cx="300" cy="160" rx="130" ry="35" fill={C.midGreen} />
      {/* River */}
      <path d="M180,130 Q200,150 220,145 Q240,140 260,155 L260,180 L180,180 Z" fill="#5bc8e0" opacity="0.75" />
      {/* Ground */}
      <rect x="0" y="155" width="400" height="25" fill="#2e7d32" />
      {/* Palm left */}
      <line x1="30" y1="180" x2="45" y2="100" stroke="#795548" strokeWidth="5" />
      <ellipse cx="45" cy="100" rx="30" ry="12" fill={C.darkGreen} transform="rotate(-20,45,100)" />
      <ellipse cx="45" cy="100" rx="25" ry="10" fill={C.midGreen} transform="rotate(10,45,100)" />
      <ellipse cx="45" cy="100" rx="20" ry="8" fill={C.lightGreen} transform="rotate(40,45,100)" />
      {/* Palm right */}
      <line x1="370" y1="180" x2="355" y2="95" stroke="#795548" strokeWidth="5" />
      <ellipse cx="355" cy="95" rx="28" ry="11" fill={C.darkGreen} transform="rotate(20,355,95)" />
      <ellipse cx="355" cy="95" rx="22" ry="9" fill={C.midGreen} transform="rotate(-15,355,95)" />
      {/* Parrot */}
      <ellipse cx="310" cy="72" rx="10" ry="14" fill="#1565c0" transform="rotate(-15,310,72)" />
      <ellipse cx="310" cy="62" rx="7" ry="8" fill={C.yellow} />
      <circle cx="313" cy="60" r="3" fill="#1565c0" />
      <circle cx="314" cy="59" r="1" fill="white" />
      <polygon points="316,63 322,65 314,67" fill="#e65100" />
      <polygon points="295,75 310,72 308,82" fill="#1565c0" opacity="0.8" />
      {/* Person */}
      <ellipse cx="200" cy="140" rx="8" ry="8" fill="#d4a870" />
      <rect x="194" y="148" width="12" height="20" rx="3" fill="#efebe9" />
      <rect x="190" y="155" width="8" height="14" rx="2" fill="#d4a870" />
      <rect x="202" y="155" width="8" height="14" rx="2" fill="#d4a870" />
    </svg>
  );
}

/* ─── SVG: escena nocturna (2 días) ─── */
function IllustrationNight() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
      <defs>
        <linearGradient id="skyN" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a2a10" />
          <stop offset="60%" stopColor="#1a4a1e" />
          <stop offset="100%" stopColor="#2d7a32" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#skyN)" />
      {/* Stars */}
      {[[50,18],[100,12],[160,22],[220,10],[280,16],[340,20],[380,8],[70,38],[150,6],[300,33]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.75" />
      ))}
      {/* Moon */}
      <circle cx="330" cy="35" r="22" fill={C.yellow} />
      <circle cx="322" cy="28" r="17" fill="#1a4a1e" />
      <circle cx="330" cy="35" r="32" fill="none" stroke={C.yellow} strokeWidth="2" opacity="0.15" />
      <circle cx="330" cy="35" r="44" fill="none" stroke={C.yellow} strokeWidth="1" opacity="0.08" />
      {/* Mountains */}
      <polygon points="0,140 70,45 140,140" fill="#0d2a10" />
      <polygon points="90,140 180,25 270,140" fill="#113518" />
      <polygon points="200,140 290,50 380,140" fill="#0d2a10" />
      {/* Snow */}
      <polygon points="180,25 170,60 190,60" fill="white" opacity="0.75" />
      <polygon points="290,50 280,80 300,80" fill="white" opacity="0.75" />
      {/* Ground */}
      <rect x="0" y="145" width="400" height="35" fill="#1b5e20" />
      {/* River */}
      <path d="M170,130 Q200,145 230,140 Q255,135 270,150 L270,180 L170,180 Z" fill={C.teal} opacity="0.35" />
      {/* Trees */}
      <polygon points="30,145 40,110 50,145" fill="#0a1f0c" />
      <polygon points="25,145 40,100 55,145" fill="#0a1f0c" />
      <polygon points="340,145 352,108 364,145" fill="#0a1f0c" />
      <polygon points="335,145 352,98 369,145" fill="#0a1f0c" />
      {/* Fireflies — lime */}
      {[[100,120],[150,105],[250,115],[300,108],[200,125]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill={C.lime} opacity="0.9" />
      ))}
      {/* Festival light string */}
      <line x1="60" y1="90" x2="340" y2="90" stroke="white" strokeWidth="1" opacity="0.4" strokeDasharray="4 8" />
      {[80,120,160,200,240,280,320].map((x,i)=>(
        <circle key={i} cx={x} cy={90} r="4" fill={i%2===0 ? C.yellow : C.lime} opacity="0.95" />
      ))}
      {/* Person pair */}
      <ellipse cx="195" cy="133" rx="7" ry="7" fill="#d4a870" />
      <rect x="190" y="140" width="10" height="16" rx="3" fill="#1b3a1e" />
      <ellipse cx="210" cy="132" rx="6" ry="7" fill="#c48b5a" />
      <rect x="205" y="139" width="10" height="16" rx="3" fill="#2d5a30" />
    </svg>
  );
}

/* ─── Ticket card ─── */
interface TicketCardProps {
  id: string; name: string; subtitle: string; price: string; badge?: string;
  features: string[]; selected: boolean; onSelect: () => void;
  illustration: React.ReactNode;
  accentColor: string; textColor: string; bgColor: string;
}

function TicketCard({ id, name, subtitle, price, badge, features, selected, onSelect, illustration, accentColor, textColor, bgColor }: TicketCardProps) {
  return (
    <div
      onClick={onSelect}
      className="relative cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: selected ? `0 0 0 3px ${accentColor}, 0 20px 50px rgba(0,0,0,0.25)` : '0 4px 24px rgba(0,0,0,0.12)' }}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest px-5 py-1 font-gasoek uppercase"
          style={{ background: C.yellow, color: C.dark }}>
          {badge}
        </div>
      )}
      {/* Illustration */}
      <div className="overflow-hidden">{illustration}</div>
      {/* Tear line */}
      <div className="relative flex items-center" style={{ background: bgColor }}>
        <div className="w-5 h-5 rounded-full absolute -left-2.5" style={{ background: C.cream }} />
        <div className="w-full border-t-2 border-dashed mx-4" style={{ borderColor: accentColor + '40' }} />
        <div className="w-5 h-5 rounded-full absolute -right-2.5" style={{ background: C.cream }} />
      </div>
      {/* Content */}
      <div className="px-8 pt-6 pb-8 flex flex-col" style={{ background: bgColor }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h2 className="font-gasoek text-3xl sm:text-4xl uppercase leading-none" style={{ color: accentColor }}>{name}</h2>
            <p className="text-sm mt-1" style={{ color: textColor, opacity: 0.6 }}>{subtitle}</p>
          </div>
          <div className="text-right">
            <p className="font-gasoek text-4xl sm:text-5xl leading-none" style={{ color: accentColor }}>${price}</p>
            <p className="text-xs mt-0.5" style={{ color: textColor, opacity: 0.45 }}>COP</p>
          </div>
        </div>
        <ul className="space-y-2.5 my-6 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm" style={{ color: textColor, opacity: 0.85 }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
              {f}
            </li>
          ))}
        </ul>
        <button
          className="w-full py-4 font-gasoek text-sm uppercase tracking-wider transition-all hover:opacity-85 flex items-center justify-center gap-2"
          style={{ background: accentColor, color: bgColor }}
        >
          <Ticket className="w-4 h-4" />
          COMPRAR ENTRADA
        </button>
      </div>
    </div>
  );
}

/* ─── Page ─── */
const Tickets = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: C.cream }}>
      <HeaderButtons />

      {/* ── Hero con poster landscape ── */}
      <section className="relative overflow-hidden pt-16" style={{ background: C.darkGreen }}>
        <img
          src={posterImg}
          alt="Festival NATUR 2026"
          className="absolute inset-0 w-full h-full object-cover opacity-25 object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,74,30,0.5) 0%, rgba(26,74,30,0.95) 75%)' }} />
        <div className="relative z-10 text-center px-6 py-16 sm:py-24">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-bold"
            style={{ color: C.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Festival Nacional de Turismo Sostenible
          </p>
          <h1 className="font-gasoek text-6xl sm:text-7xl md:text-8xl uppercase leading-none mb-4 text-white">
            ENTRADAS
          </h1>
          <h2 className="font-gasoek text-3xl sm:text-4xl md:text-5xl uppercase" style={{ color: C.lime }}>
            NATUR 2026
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <span className="px-4 py-1.5 text-sm font-bold uppercase tracking-wider font-gasoek"
              style={{ background: C.yellow, color: C.dark }}>
              14 Y 15 AGOSTO
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/60 text-sm">Kinder, Chapinero, Bogotá</span>
          </div>
        </div>
      </section>

      {/* ── Ticket cards ── */}
      <section className="py-16 px-6" style={{ background: C.cream }}>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
          <TicketCard
            id="un-dia"
            name="1 DÍA"
            subtitle="Elige el día que prefieras"
            price="50.000"
            illustration={<IllustrationDay />}
            bgColor={C.dark}
            accentColor={C.lime}
            textColor="white"
            features={['Charlas y conferencias','Conciertos en vivo','Feria de emprendimientos sostenibles','Experiencias y actividades culturales']}
            selected={selected === 'un-dia'}
            onSelect={() => setSelected('un-dia')}
          />
          <TicketCard
            id="dos-dias"
            name="2 DÍAS"
            subtitle="Acceso completo al festival"
            price="70.000"
            badge="RECOMENDADO"
            illustration={<IllustrationNight />}
            bgColor={C.dark}
            accentColor={C.yellow}
            textColor="white"
            features={['Acceso completo ambos días','Toda la programación cultural','Zona especial y networking','Experiencias premium + rumba']}
            selected={selected === 'dos-dias'}
            onSelect={() => setSelected('dos-dias')}
          />
        </div>

        {/* Info strip */}
        <div className="max-w-4xl mx-auto mt-10 grid sm:grid-cols-3 gap-1">
          {[
            { icon: Calendar, label: 'Fechas',  value: '14 y 15 de agosto, 2026' },
            { icon: MapPin,   label: 'Sede',    value: 'Kinder · Calle 59 #6-21, Bogotá' },
            { icon: Ticket,   label: 'Cupos',   value: 'Limitados — reserva ya' },
          ].map((item) => (
            <div key={item.label} className="px-6 py-5 flex items-start gap-4" style={{ background: C.darkGreen }}>
              <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.lime }} />
              <div>
                <p className="text-xs uppercase tracking-wider font-bold mb-0.5" style={{ color: C.lime, opacity: 0.6 }}>{item.label}</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA dudas ── */}
      <section className="py-16 px-6 text-center" style={{ background: C.darkGreen }}>
        <h2 className="font-gasoek text-3xl sm:text-4xl uppercase mb-3 text-white">
          ¿Tienes dudas?
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-md mx-auto">
          Escríbenos y te ayudamos a elegir la opción perfecta para ti.
        </p>
        <a href="mailto:info@festivalnatur.com"
          className="inline-flex items-center gap-2 font-gasoek text-sm uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
          style={{ background: C.lime, color: C.dark }}>
          <Mail className="w-4 h-4" />
          info@festivalnatur.com
        </a>
      </section>

      {/* Footer mini */}
      <footer className="py-6 text-center text-xs" style={{ background: C.dark, color: 'rgba(255,255,255,0.3)' }}>
        <p>© {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Tickets;
