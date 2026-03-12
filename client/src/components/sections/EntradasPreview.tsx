import { Link } from "wouter";
import { Ticket, ArrowRight, MapPin } from "lucide-react";
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

const mono = { fontFamily: 'monospace' };
const ub   = { fontFamily: 'Unbounded, sans-serif' };

function Tag({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) {
  return (
    <span className="inline-block text-[9px] tracking-[0.28em] uppercase font-bold px-2.5 py-[3px]"
      style={{ background: bg, color, ...ub }}>
      {children}
    </span>
  );
}

function Rule({ color = 'rgba(255,255,255,0.12)' }: { color?: string }) {
  return <div className="w-full h-px" style={{ background: color }} />;
}

function InfoRow({ label, value, light }: { label: string; value: string; light?: boolean }) {
  const col = light ? 'rgba(25,28,15,0.4)' : 'rgba(255,255,255,0.38)';
  const val = light ? 'rgba(25,28,15,0.72)' : 'rgba(255,255,255,0.72)';
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-[9px] uppercase tracking-widest" style={{ color: col, ...ub }}>{label}</span>
      <span className="text-[10px] font-bold" style={{ color: val, ...ub }}>{value}</span>
    </div>
  );
}

function BottomStrip({ tagBg, tagColor, tagText, venueColor, venueText }:
  { tagBg: string; tagColor: string; tagText: string; venueColor: string; venueText: string }) {
  return (
    <div className="flex items-center justify-between">
      <Tag bg={tagBg} color={tagColor}>{tagText}</Tag>
      <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: venueColor, ...ub }}>@ {venueText}</span>
    </div>
  );
}

export function EntradasPreview() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3">

      {/* ═══ CELL 1 — dark green · identity ═══ */}
      <div className="relative flex flex-col justify-between p-8 sm:p-10 min-h-[70vw] md:min-h-[38vw]"
        style={{ background: P.darkGreen }}>

        <div className="flex items-start justify-between">
          <Tag bg={P.lime} color={P.dark}>Festival Nacional</Tag>
          <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.22)', ...mono }}>01/06</span>
        </div>

        <div className="flex-1 flex flex-col justify-center py-6">
          <p className="text-[9px] uppercase tracking-[0.28em] mb-2"
            style={{ color: 'rgba(255,255,255,0.32)', ...ub }}>
            Turismo Sostenible · Col
          </p>
          <h2
            className="font-unbounded font-extralight uppercase leading-[0.9] tracking-widest text-white"
            style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}
          >
            NATUR
          </h2>
          <p className="text-[10px] mt-3"
            style={{ color: 'rgba(255,255,255,0.38)', ...ub, fontWeight: 200 }}>
            Agosto 2026 · Bogotá
          </p>
        </div>

        <div className="space-y-3">
          <Rule />
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            <InfoRow label="Fecha"   value="14 y 15 Ago" />
            <InfoRow label="Horario" value="10–22:00h" />
            <InfoRow label="Sede"    value="Kinder" />
            <InfoRow label="Entrada" value="Desde $50k" />
          </div>
          <Rule />
          <BottomStrip
            tagBg="rgba(202,217,94,0.15)" tagColor={P.lime} tagText="Bogotá / COL"
            venueColor="rgba(255,255,255,0.22)" venueText="Calle 59 #6-21" />
        </div>
      </div>

      {/* ═══ CELL 2 — portrait photo ═══ */}
      <div className="relative overflow-hidden min-h-[70vw] md:min-h-[38vw]">
        <img src={portraitImg} alt="Festival NATUR 2026"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background: 'rgba(25,28,15,0.42)' }} />

        <div className="absolute top-5 left-5 sm:top-7 sm:left-7">
          <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.38)', ...mono }}>02/06</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2">
          <p
            className="font-unbounded font-extralight uppercase leading-snug tracking-wide text-white"
            style={{ fontSize: 'clamp(1rem, 3.5vw, 1.8rem)' }}
          >
            Cultura · Naturaleza
          </p>
          <Rule />
          <div className="flex items-center justify-between">
            <Tag bg={P.rose} color={P.dark}>Turismo · Cultura</Tag>
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.38)', ...mono }}>AGO 2026</span>
          </div>
        </div>
      </div>

      {/* ═══ CELL 3 — lime · 2 días ═══ */}
      <div className="relative flex flex-col justify-between p-8 sm:p-10 min-h-[70vw] md:min-h-[38vw]"
        style={{ background: P.lime }}>

        <div className="flex items-start justify-between">
          <Tag bg={P.dark} color={P.lime}>Recomendado</Tag>
          <span className="text-[9px]" style={{ color: 'rgba(25,28,15,0.28)', ...mono }}>03/06</span>
        </div>

        <div className="flex-1 flex flex-col justify-center py-6">
          <p className="text-[9px] uppercase tracking-[0.28em] mb-2"
            style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>Entrada</p>
          <h3
            className="font-unbounded font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: P.dark }}
          >
            2 DÍAS
          </h3>
          <div className="flex items-baseline justify-between mt-3 gap-2">
            <p className="text-[10px]"
              style={{ color: 'rgba(25,28,15,0.48)', ...ub, fontWeight: 200 }}>Acceso completo</p>
            <div className="text-right flex-shrink-0">
              <p className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>14 Jue · 10h</p>
              <p className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.38)', ...ub }}>15 Vie · 10h</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Rule color="rgba(25,28,15,0.14)" />
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            <InfoRow light label="Duración"  value="2 días" />
            <InfoRow light label="Cupos"     value="Limitados" />
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="font-unbounded font-bold leading-none"
              style={{ fontSize: 'clamp(1.4rem, 5vw, 2.8rem)', color: P.dark }}
            >
              $70.000
            </span>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold" style={{ color: 'rgba(25,28,15,0.42)', ...ub }}>COP</span>
              <span className="text-[8px]" style={{ color: 'rgba(25,28,15,0.32)', ...ub }}>p. persona</span>
            </div>
          </div>
          <Link to="/tickets">
            <div className="flex items-center justify-between w-full px-4 py-3.5 font-bold text-[9px] uppercase tracking-widest hover:opacity-85 transition-opacity cursor-pointer"
              style={{ background: P.dark, color: P.lime, ...ub }}>
              <span className="flex items-center gap-2"><Ticket className="w-3 h-3" />Comprar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
          <BottomStrip
            tagBg="rgba(25,28,15,0.1)" tagColor="rgba(25,28,15,0.65)" tagText="2 Días / Completo"
            venueColor="rgba(25,28,15,0.35)" venueText="Kinder" />
        </div>
      </div>


    </section>
  );
}
