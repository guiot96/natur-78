import { Link } from 'wouter';
import { Ticket, ArrowRight, MapPin } from 'lucide-react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import portraitImg from '@assets/generated_images/natur_grid_portrait.png';
import landscapeImg from '@assets/generated_images/natur_grid_landscape.png';

const P = {
  dark:      '#191C0F',
  darkGreen: '#1a4a1e',
  midGreen:  '#2d7a32',
  lime:      '#f5e03a',
  yellow:    '#f5e03a',
  cream:     '#FCF8EE',
  rose:      '#f2c4c8',
  roseDeep:  '#c45870',
};

const mono = { fontFamily: 'monospace' };
const ub   = { fontFamily: 'Unbounded, sans-serif' };

/* ── shared sub-components ── */

function Tag({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) {
  return (
    <span className="inline-block text-[9px] tracking-[0.32em] uppercase font-bold px-2.5 py-[3px]"
      style={{ background: bg, color, ...ub }}>
      {children}
    </span>
  );
}

function Rule({ color = 'rgba(255,255,255,0.12)' }: { color?: string }) {
  return <div className="w-full h-px" style={{ background: color }} />;
}

function InfoRow({ label, value, light }: { label: string; value: string; light?: boolean }) {
  const col = light ? 'rgba(25,28,15,0.45)' : 'rgba(255,255,255,0.4)';
  const val = light ? 'rgba(25,28,15,0.75)' : 'rgba(255,255,255,0.75)';
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-[9px] uppercase tracking-widest" style={{ color: col, ...ub }}>{label}</span>
      <span className="text-[10px] font-bold" style={{ color: val, ...ub }}>{value}</span>
    </div>
  );
}

function BottomStrip({ tagBg, tagColor, tagText, venueBg, venueColor, venueText }:
  { tagBg: string; tagColor: string; tagText: string;
    venueBg: string; venueColor: string; venueText: string }) {
  return (
    <div className="flex items-stretch justify-between">
      <Tag bg={tagBg} color={tagColor}>{tagText}</Tag>
      <span className="text-[9px] tracking-[0.2em] uppercase flex items-center px-2.5" style={{ color: venueColor, background: venueBg, ...ub }}>
        @ {venueText}
      </span>
    </div>
  );
}

/* ── page ── */

export default function Tickets() {
  return (
    <div className="min-h-screen overflow-x-hidden pb-16 md:pb-0" style={{ background: P.dark }}>
      <HeaderButtons />

      <main className="pt-14 grid grid-cols-1 md:grid-cols-3">

        {/* ═══ CELL 1 — dark green · identity ═══ */}
        <div className="relative flex flex-col justify-between p-9 md:p-10 min-h-[72vw] md:min-h-[48vw]"
          style={{ background: P.darkGreen }}>

          {/* top */}
          <div className="flex items-start justify-between">
            <Tag bg={P.lime} color={P.dark}>Colombia</Tag>
            <span className="text-[9px] leading-none pt-[3px]" style={{ color: 'rgba(255,255,255,0.25)', ...mono }}>01/06</span>
          </div>

          {/* hero type */}
          <div className="flex-1 flex flex-col justify-center py-6 md:py-0">
            <p className="text-[2.4vw] md:text-[0.8vw] uppercase tracking-[0.35em] mb-2"
              style={{ color: 'rgba(255,255,255,0.35)', ...ub }}>
              Festival Nacional de Turismo
            </p>
            <h1 className="font-gasoek text-[19vw] md:text-[7.5vw] uppercase leading-[0.88] text-white">
              NATUR
            </h1>
            <p className="font-unbounded font-extralight text-[4vw] md:text-[1.45vw] mt-3 leading-snug"
              style={{ color: 'rgba(255,255,255,0.42)' }}>
              Sostenibilidad · Cultura<br />Comunidad · Naturaleza
            </p>
          </div>

          {/* info block */}
          <div className="space-y-3">
            <Rule />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <InfoRow label="Edición"    value="Primera" />
              <InfoRow label="País"       value="Colombia" />
              <InfoRow label="Sector"     value="Turismo" />
              <InfoRow label="Entradas"   value="Desde $50k" />
            </div>
            <Rule />
            <div className="flex items-end justify-between">
              <div>
                <p className="font-gasoek text-[8.5vw] md:text-[3.8vw] uppercase leading-none"
                  style={{ color: P.lime }}>14 y 15</p>
                <p className="text-[2.2vw] md:text-[0.7vw] uppercase tracking-widest mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.35)', ...ub }}>Agosto · 2026</p>
              </div>
              <div className="text-right">
                <p className="text-[2.2vw] md:text-[0.7vw] uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.3)', ...ub }}>10:00 — 22:00h</p>
                <p className="text-[2.2vw] md:text-[0.7vw] uppercase tracking-widest mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.3)', ...ub }}>Ambos días</p>
              </div>
            </div>
            <BottomStrip
              tagBg="rgba(202,217,94,0.18)" tagColor={P.lime}    tagText="BOGOTÁ / COL"
              venueBg="transparent"          venueColor="rgba(255,255,255,0.22)" venueText="Kinder · Calle 59 #6-21" />
          </div>
        </div>

        {/* ═══ CELL 2 — portrait photo ═══ */}
        <div className="relative overflow-hidden min-h-[72vw] md:min-h-[48vw]">
          <img src={portraitImg} alt="Festival NATUR 2026"
            className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(25,28,15,0.3) 0%, transparent 45%, rgba(25,28,15,0.65) 100%)' }} />

          {/* top-left counter */}
          <div className="absolute top-8 left-8">
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.45)', ...mono }}>02/06</span>
          </div>

          {/* bottom caption block */}
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
            <p className="font-gasoek text-[5vw] md:text-[2vw] uppercase leading-tight text-white">
              Turismo<br />Sostenible
            </p>
            <Rule />
            <div className="flex items-center justify-between">
              <Tag bg={P.rose}    color={P.dark}>Cultura · Naturaleza</Tag>
              <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)', ...mono }}>AGO 2026</span>
            </div>
          </div>
        </div>

        {/* ═══ CELL 3 — yellow · 2 días ═══ */}
        <div className="relative flex flex-col justify-between p-9 md:p-10 min-h-[72vw] md:min-h-[48vw]"
          style={{ background: P.yellow }}>

          {/* top */}
          <div className="flex items-start justify-between">
            <Tag bg={P.dark} color={P.yellow}>Recomendado</Tag>
            <span className="text-[9px] leading-none pt-[3px]" style={{ color: 'rgba(25,28,15,0.3)', ...mono }}>03/06</span>
          </div>

          {/* hero type */}
          <div className="flex-1 flex flex-col justify-center py-4 md:py-0">
            <p className="text-[2.4vw] md:text-[0.8vw] uppercase tracking-[0.35em] mb-1"
              style={{ color: 'rgba(25,28,15,0.4)', ...ub }}>Entrada</p>
            <h2 className="font-gasoek text-[16vw] md:text-[7vw] uppercase leading-[0.88]" style={{ color: P.dark }}>
              2 DÍAS
            </h2>
            <div className="flex items-baseline justify-between mt-2">
              <p className="font-unbounded font-extralight text-[3.5vw] md:text-[1.3vw]"
                style={{ color: 'rgba(25,28,15,0.5)' }}>
                Acceso completo
              </p>
              <div className="text-right">
                <p className="text-[2.2vw] md:text-[0.72vw] uppercase" style={{ color: 'rgba(25,28,15,0.4)', ...ub }}>
                  14 Jue — 10.00h
                </p>
                <p className="text-[2.2vw] md:text-[0.72vw] uppercase" style={{ color: 'rgba(25,28,15,0.4)', ...ub }}>
                  15 Vie — 10.00h
                </p>
              </div>
            </div>
          </div>

          {/* info + price + CTA */}
          <div className="space-y-4">
            <Rule color="rgba(25,28,15,0.15)" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <InfoRow light label="Duración"   value="2 días" />
              <InfoRow light label="Cupos"      value="Limitados" />
              <InfoRow light label="Horario"    value="10:00–22:00" />
              <InfoRow light label="Sede"       value="Kinder" />
            </div>
            <Rule color="rgba(25,28,15,0.15)" />
            <div className="flex items-baseline gap-2">
              <span className="font-gasoek text-[12vw] md:text-[5vw] leading-none" style={{ color: P.dark }}>
                $70.000
              </span>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase" style={{ color: 'rgba(25,28,15,0.45)', ...ub }}>COP</span>
                <span className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.35)', ...ub }}>por persona</span>
              </div>
            </div>
            <a href="mailto:info@festivalnatur.com?subject=Entrada 2 Días Festival NATUR 2026"
              className="flex items-center justify-between w-full px-5 py-4 font-bold text-[2.2vw] md:text-[0.72vw] uppercase tracking-widest hover:opacity-85 transition-opacity"
              style={{ background: P.dark, color: P.yellow, ...ub }}>
              <span className="flex items-center gap-2.5">
                <Ticket className="w-3.5 h-3.5" />Comprar entrada
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <BottomStrip
              tagBg="rgba(25,28,15,0.12)" tagColor="rgba(25,28,15,0.7)" tagText="Acceso / 2 Días"
              venueBg="transparent"        venueColor="rgba(25,28,15,0.4)"   venueText="Kinder" />
          </div>
        </div>

        {/* ═══ CELL 4 — landscape photo ═══ */}
        <div className="relative overflow-hidden min-h-[72vw] md:min-h-[48vw]">
          <img src={landscapeImg} alt="Festival NATUR — ambiente"
            className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(25,28,15,0.7) 0%, transparent 55%)' }} />

          <div className="absolute top-8 right-8">
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)', ...mono }}>04/06</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
            <p className="font-gasoek text-[5vw] md:text-[2vw] uppercase leading-tight text-white">
              Kinder<br />Chapinero
            </p>
            <Rule />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" style={{ color: 'rgba(255,255,255,0.45)' }} />
                <span className="text-[2.2vw] md:text-[0.65vw] uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.45)', ...ub }}>
                  Calle 59 #6-21 · Bogotá
                </span>
              </div>
              <Tag bg={P.lime} color={P.dark}>Venue</Tag>
            </div>
          </div>
        </div>

        {/* ═══ CELL 5 — rose · 1 día ═══ */}
        <div className="relative flex flex-col justify-between p-9 md:p-10 min-h-[72vw] md:min-h-[48vw]"
          style={{ background: P.rose }}>

          {/* top */}
          <div className="flex items-start justify-between">
            <Tag bg={P.roseDeep} color="white">Un Día</Tag>
            <span className="text-[9px] leading-none pt-[3px]" style={{ color: 'rgba(25,28,15,0.3)', ...mono }}>05/06</span>
          </div>

          {/* hero type */}
          <div className="flex-1 flex flex-col justify-center py-4 md:py-0">
            <p className="text-[2.4vw] md:text-[0.8vw] uppercase tracking-[0.35em] mb-1"
              style={{ color: 'rgba(25,28,15,0.4)', ...ub }}>Entrada</p>
            <h2 className="font-gasoek text-[16vw] md:text-[7vw] uppercase leading-[0.88]" style={{ color: P.dark }}>
              1 DÍA
            </h2>
            <div className="flex items-baseline justify-between mt-2">
              <p className="font-unbounded font-extralight text-[3.5vw] md:text-[1.3vw]"
                style={{ color: 'rgba(25,28,15,0.5)' }}>
                Elige tu jornada
              </p>
              <div className="text-right">
                <p className="text-[2.2vw] md:text-[0.72vw] uppercase" style={{ color: 'rgba(25,28,15,0.4)', ...ub }}>
                  14 Jue — 10.00h
                </p>
                <p className="text-[2.2vw] md:text-[0.72vw] uppercase" style={{ color: 'rgba(25,28,15,0.4)', ...ub }}>
                  15 Vie — 10.00h
                </p>
              </div>
            </div>
          </div>

          {/* info + price + CTA */}
          <div className="space-y-4">
            <Rule color="rgba(25,28,15,0.15)" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <InfoRow light label="Duración"   value="1 día" />
              <InfoRow light label="Cupos"      value="Limitados" />
              <InfoRow light label="Horario"    value="10:00–22:00" />
              <InfoRow light label="Sede"       value="Kinder" />
            </div>
            <Rule color="rgba(25,28,15,0.15)" />
            <div className="flex items-baseline gap-2">
              <span className="font-gasoek text-[12vw] md:text-[5vw] leading-none" style={{ color: P.dark }}>
                $50.000
              </span>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase" style={{ color: 'rgba(25,28,15,0.45)', ...ub }}>COP</span>
                <span className="text-[9px] uppercase" style={{ color: 'rgba(25,28,15,0.35)', ...ub }}>por persona</span>
              </div>
            </div>
            <a href="mailto:info@festivalnatur.com?subject=Entrada 1 Día Festival NATUR 2026"
              className="flex items-center justify-between w-full px-5 py-4 font-bold text-[2.2vw] md:text-[0.72vw] uppercase tracking-widest hover:opacity-85 transition-opacity"
              style={{ background: P.dark, color: P.rose, ...ub }}>
              <span className="flex items-center gap-2.5">
                <Ticket className="w-3.5 h-3.5" />Comprar entrada
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <BottomStrip
              tagBg="rgba(196,88,112,0.18)" tagColor={P.roseDeep} tagText="Acceso / 1 Día"
              venueBg="transparent"          venueColor="rgba(25,28,15,0.4)"  venueText="Kinder" />
          </div>
        </div>

        {/* ═══ CELL 6 — cream · venue & info ═══ */}
        <div className="relative flex flex-col justify-between p-9 md:p-10 min-h-[72vw] md:min-h-[48vw]"
          style={{ background: P.cream }}>

          {/* top */}
          <div className="flex items-start justify-between">
            <Tag bg={P.midGreen} color="white">Venue</Tag>
            <span className="text-[9px] leading-none pt-[3px]" style={{ color: 'rgba(25,28,15,0.28)', ...mono }}>06/06</span>
          </div>

          {/* hero type */}
          <div className="flex-1 flex flex-col justify-center py-4 md:py-0">
            <p className="text-[2.4vw] md:text-[0.8vw] uppercase tracking-[0.35em] mb-1"
              style={{ color: 'rgba(25,28,15,0.35)', ...ub }}>Sede del festival</p>
            <h3 className="font-gasoek text-[10vw] md:text-[4vw] uppercase leading-[0.9]" style={{ color: P.darkGreen }}>
              Kinder<br />Chapinero
            </h3>
            <p className="font-unbounded font-extralight text-[3.5vw] md:text-[1.2vw] mt-3"
              style={{ color: 'rgba(25,28,15,0.45)' }}>
              Calle 59 #6-21<br />Bogotá, Colombia
            </p>
          </div>

          {/* info + CTA */}
          <div className="space-y-4">
            <Rule color="rgba(25,28,15,0.15)" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <InfoRow light label="Ciudad"   value="Bogotá" />
              <InfoRow light label="País"     value="Colombia" />
              <InfoRow light label="Barrio"   value="Chapinero" />
              <InfoRow light label="Año"      value="2026" />
            </div>
            <Rule color="rgba(25,28,15,0.15)" />
            <p className="text-[2.8vw] md:text-[0.72vw] leading-relaxed"
              style={{ color: 'rgba(25,28,15,0.5)' }}>
              El primer festival nacional de turismo sostenible conecta viajeros, empresas y comunidades con el futuro del planeta.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:info@festivalnatur.com"
                className="text-[2.4vw] md:text-[0.72vw] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                style={{ color: P.midGreen, ...ub }}>
                <ArrowRight className="w-3 h-3" />info@festivalnatur.com
              </a>
              <Link href="/contacto"
                className="text-[2.4vw] md:text-[0.72vw] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                style={{ color: P.roseDeep, ...ub }}>
                <ArrowRight className="w-3 h-3" />Más información
              </Link>
            </div>
            <BottomStrip
              tagBg={`rgba(45,122,50,0.12)`} tagColor={P.midGreen} tagText="Turismo Sostenible"
              venueBg="transparent"            venueColor="rgba(25,28,15,0.35)" venueText="Chapinero · Bogotá" />
          </div>
        </div>

      </main>

      <footer className="py-5 px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] uppercase tracking-[0.3em]"
        style={{ background: P.dark, color: 'rgba(255,255,255,0.18)', ...ub }}>
        <span>© 2026 Festival NATUR — Colombia</span>
        <span>Cupos limitados · Reserva ya · info@festivalnatur.com</span>
      </footer>
    </div>
  );
}
