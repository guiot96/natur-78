import { Link } from "wouter";
import { Ticket, MapPin, Check, ArrowRight } from "lucide-react";
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

export function EntradasPreview() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3">

      {/* ─── CELL 1 — Dark green, NATUR identity ─── */}
      <div
        className="relative flex flex-col justify-between p-10 min-h-[70vw] md:min-h-[36vw]"
        style={{ background: P.darkGreen }}
      >
        <div>
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-5 px-3 py-1"
            style={{ background: P.lime, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}
          >
            Festival Nacional
          </span>
          <h2 className="font-gasoek text-[14vw] md:text-[5.5vw] uppercase leading-none text-white">
            NATUR
          </h2>
          <p
            className="font-unbounded font-extralight text-[4vw] md:text-[1.3vw] mt-1"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            Turismo Sostenible
          </p>
        </div>
        <div className="space-y-1">
          <p
            className="font-gasoek text-[9vw] md:text-[3.5vw] uppercase leading-none"
            style={{ color: P.lime }}
          >
            14 y 15
          </p>
          <p
            className="text-[2.5vw] md:text-[0.65rem] uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'Unbounded, sans-serif' }}
          >
            Agosto 2026
          </p>
          <div className="flex items-center gap-1 pt-1">
            <MapPin className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }} />
            <span className="text-[2.5vw] md:text-[0.65rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Kinder · Chapinero · Bogotá
            </span>
          </div>
        </div>
      </div>

      {/* ─── CELL 2 — Portrait photo ─── */}
      <div className="relative overflow-hidden min-h-[70vw] md:min-h-[36vw]">
        <img
          src={portraitImg}
          alt="Festival NATUR — naturaleza"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(25,28,15,0.5) 100%)' }}
        />
        <div className="absolute bottom-7 left-8">
          <span
            className="inline-block text-[1.8vw] md:text-[0.6rem] tracking-[0.25em] uppercase font-bold px-3 py-1"
            style={{ background: P.rose, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}
          >
            Turismo · Cultura
          </span>
        </div>
      </div>

      {/* ─── CELL 3 — Yellow, 2-DÍAS ─── */}
      <div
        className="relative flex flex-col justify-between p-10 min-h-[70vw] md:min-h-[36vw]"
        style={{ background: P.yellow }}
      >
        <div>
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-5 px-3 py-1"
            style={{ background: P.dark, color: P.yellow, fontFamily: 'Unbounded, sans-serif' }}
          >
            Recomendado
          </span>
          <h3 className="font-gasoek text-[13vw] md:text-[5.5vw] uppercase leading-none" style={{ color: P.dark }}>
            2 DÍAS
          </h3>
          <p
            className="font-unbounded font-extralight text-[3.5vw] md:text-[1.1vw] mt-1"
            style={{ color: 'rgba(25,28,15,0.5)' }}
          >
            Acceso completo
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-baseline gap-1">
            <span className="font-gasoek text-[11vw] md:text-[4vw] leading-none" style={{ color: P.dark }}>
              $70.000
            </span>
            <span className="text-[2.5vw] md:text-xs font-bold" style={{ color: 'rgba(25,28,15,0.4)', fontFamily: 'Unbounded, sans-serif' }}>
              COP
            </span>
          </div>
          <Link to="/tickets">
            <div
              className="flex items-center justify-between w-full px-5 py-3.5 font-bold text-[2.5vw] md:text-xs uppercase tracking-wider hover:opacity-85 transition-opacity cursor-pointer"
              style={{ background: P.dark, color: P.yellow, fontFamily: 'Unbounded, sans-serif' }}
            >
              <span className="flex items-center gap-2">
                <Ticket className="w-3.5 h-3.5" />
                Comprar
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* ─── CELL 4 — Landscape photo ─── */}
      <div className="relative overflow-hidden min-h-[70vw] md:min-h-[36vw]">
        <img
          src={landscapeImg}
          alt="Festival NATUR — ambiente"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(25,28,15,0.55) 0%, transparent 55%)' }}
        />
        <div className="absolute bottom-7 left-8 right-8">
          <p
            className="text-[2.5vw] md:text-[0.6rem] uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Unbounded, sans-serif' }}
          >
            @ Kinder · Calle 59 #6-21
          </p>
        </div>
      </div>

      {/* ─── CELL 5 — Rose, 1-DÍA ─── */}
      <div
        className="relative flex flex-col justify-between p-10 min-h-[70vw] md:min-h-[36vw]"
        style={{ background: P.rose }}
      >
        <div>
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-5 px-3 py-1"
            style={{ background: P.roseDeep, color: 'white', fontFamily: 'Unbounded, sans-serif' }}
          >
            Un día
          </span>
          <h3 className="font-gasoek text-[13vw] md:text-[5.5vw] uppercase leading-none" style={{ color: P.dark }}>
            1 DÍA
          </h3>
          <p
            className="font-unbounded font-extralight text-[3.5vw] md:text-[1.1vw] mt-1"
            style={{ color: 'rgba(25,28,15,0.5)' }}
          >
            El día que más te llame
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-baseline gap-1">
            <span className="font-gasoek text-[11vw] md:text-[4vw] leading-none" style={{ color: P.dark }}>
              $50.000
            </span>
            <span className="text-[2.5vw] md:text-xs font-bold" style={{ color: 'rgba(25,28,15,0.4)', fontFamily: 'Unbounded, sans-serif' }}>
              COP
            </span>
          </div>
          <Link to="/tickets">
            <div
              className="flex items-center justify-between w-full px-5 py-3.5 font-bold text-[2.5vw] md:text-xs uppercase tracking-wider hover:opacity-85 transition-opacity cursor-pointer"
              style={{ background: P.dark, color: P.rose, fontFamily: 'Unbounded, sans-serif' }}
            >
              <span className="flex items-center gap-2">
                <Ticket className="w-3.5 h-3.5" />
                Comprar
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* ─── CELL 6 — Cream, festival info + CTA ─── */}
      <div
        className="relative flex flex-col justify-between p-10 min-h-[70vw] md:min-h-[36vw]"
        style={{ background: P.cream }}
      >
        <div>
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold mb-5 px-3 py-1"
            style={{ background: P.midGreen, color: 'white', fontFamily: 'Unbounded, sans-serif' }}
          >
            Venue
          </span>
          <h3 className="font-gasoek text-[8vw] md:text-[3vw] uppercase leading-tight" style={{ color: P.darkGreen }}>
            Kinder<br />Chapinero
          </h3>
          <p
            className="font-unbounded font-extralight text-[3.5vw] md:text-[1.1vw] mt-2"
            style={{ color: 'rgba(25,28,15,0.45)' }}
          >
            Calle 59 #6-21 · Bogotá
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-[3vw] md:text-xs leading-relaxed" style={{ color: 'rgba(25,28,15,0.55)' }}>
            El primer festival nacional de turismo sostenible en Colombia.
          </p>
          <Link to="/tickets">
            <div
              className="inline-flex items-center gap-2 text-[2.5vw] md:text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all cursor-pointer"
              style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Ver todas las entradas
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}
