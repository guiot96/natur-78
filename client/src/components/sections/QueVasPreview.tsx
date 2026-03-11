import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import speakerImg from "@assets/generated_images/natur_speaker.png";

/* ── Three giant vertical pillars — like stage modules ── */
const pillars = [
  {
    num: "01",
    tag: "Conocimiento",
    title: "AGENDA\nACADÉMICA",
    desc: "Charlas, paneles y talleres con líderes del turismo sostenible.",
    bg: "#191C0F",
    accent: "#cad95e",
    textColor: "#FCF8EE",
    detail: "Conferencias · Paneles · Talleres",
  },
  {
    num: "02",
    tag: "Cultura",
    title: "RUMBA Y\nMANIFES-\nTACIONES",
    desc: "Música en vivo, arte urbano, gastronomía y cultura colombiana.",
    bg: "#1a4a1e",
    accent: "#f5e03a",
    textColor: "#FCF8EE",
    detail: "Música · Arte · Gastronomía",
  },
  {
    num: "03",
    tag: "Inspiración",
    title: "HISTORIAS\nTRANS-\nFORMADORAS",
    desc: "Proyectos reales que prueban que viajar con conciencia es posible.",
    bg: "#cad95e",
    accent: "#191C0F",
    textColor: "#191C0F",
    detail: "Testimonios · Impacto · Comunidad",
  },
];

export function QueVasPreview() {
  return (
    <section className="w-full" style={{ background: "#FCF8EE" }}>

      {/* ── Overflowing headline banner ── */}
      <div className="overflow-hidden border-b border-black/10" style={{ background: "#FCF8EE" }}>
        <div className="flex items-center gap-0">
          {/* Rotated label */}
          <div
            className="hidden md:flex items-center justify-center flex-shrink-0 px-5 py-3 self-stretch border-r border-black/10"
            style={{ background: "#1a4a1e", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}>
              Festival NATUR 2026
            </span>
          </div>

          <div className="flex-1 px-8 md:px-14 py-10 md:py-12">
            <h2
              className="font-gasoek uppercase leading-[0.85] whitespace-nowrap overflow-visible"
              style={{ fontSize: "clamp(3rem, 10vw, 9rem)", color: "#191C0F" }}
            >
              ¿QUÉ VAS&nbsp;
              <span style={{ WebkitTextStroke: "2px #1a4a1e", color: "transparent" }}>
                A ENCONTRAR?
              </span>
            </h2>
          </div>

          <Link to="/que-vas-a-encontrar" className="hidden md:block flex-shrink-0 pr-8">
            <button
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ background: "#1a4a1e", color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
            >
              <ArrowRight className="w-3 h-3" />
              Descubrir
            </button>
          </Link>
        </div>
      </div>

      {/* ── Three vertical stage pillars ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10">
        {pillars.map((p, i) => (
          <div
            key={p.num}
            className="relative flex flex-col justify-between p-8 md:p-10 min-h-[70vw] md:min-h-[42vw]"
            style={{
              background: p.bg,
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
            }}
          >
            {/* Top: number + tag */}
            <div className="flex items-start justify-between">
              <span
                className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-[3px]"
                style={{ background: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}33`, fontFamily: "Unbounded, sans-serif" }}
              >
                {p.tag}
              </span>
              <span
                className="font-gasoek text-5xl leading-none opacity-15"
                style={{ color: p.textColor }}
              >
                {p.num}
              </span>
            </div>

            {/* Middle: giant title */}
            <div className="flex-1 flex items-center py-4">
              <h3
                className="font-gasoek uppercase leading-[0.88] whitespace-pre-line"
                style={{
                  fontSize: "clamp(2rem, 6vw, 4.5rem)",
                  color: p.textColor,
                }}
              >
                {p.title}
              </h3>
            </div>

            {/* Bottom: desc + detail */}
            <div className="space-y-3">
              <div className="w-full h-px" style={{ background: `${p.textColor}18` }} />
              <p className="text-xs leading-relaxed" style={{ color: `${p.textColor}70`, fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
                {p.desc}
              </p>
              <span
                className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-[3px]"
                style={{ background: p.accent, color: p.bg, fontFamily: "Unbounded, sans-serif" }}
              >
                {p.detail}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Photo band: speaker image full-bleed with stat row ── */}
      <div className="relative overflow-hidden" style={{ height: "38vw", minHeight: "240px", maxHeight: "480px" }}>
        <img
          src={speakerImg}
          alt="Ponentes NATUR"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: "grayscale(25%)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(25,28,15,0.82) 0%, rgba(25,28,15,0.3) 60%, transparent 100%)" }} />

        {/* Left overlay */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center px-8 md:px-14 gap-2">
          <p className="text-[9px] uppercase tracking-[0.35em] font-bold" style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}>
            Conferencistas &amp; Ponentes
          </p>
          <p className="font-gasoek text-3xl md:text-5xl uppercase leading-tight text-white max-w-xs">
            Expertos Nacionales e Internacionales
          </p>
        </div>

        {/* Right stat strip */}
        <div className="absolute right-0 top-0 bottom-0 hidden md:flex flex-col justify-center gap-6 px-14">
          {[["3", "Escenarios"], ["20+", "Ponentes"], ["2", "Días"]].map(([n, l]) => (
            <div key={l} className="text-right">
              <p className="font-gasoek text-4xl leading-none text-white">{n}</p>
              <p className="text-[9px] uppercase tracking-widest text-white/35 mt-0.5" style={{ fontFamily: "Unbounded, sans-serif" }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
