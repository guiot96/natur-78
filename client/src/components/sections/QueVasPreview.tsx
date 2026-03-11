import { Link } from "wouter";
import { ArrowRight, BookOpen, Music, Leaf } from "lucide-react";
import speakerImg from "@assets/generated_images/natur_speaker.png";
import botanicaImg from "@assets/generated_images/natur_botanica.png";

const items = [
  {
    num: "01",
    Icon: BookOpen,
    tag: "Conocimiento",
    title: "Agenda Académica",
    desc: "Charlas, paneles y talleres con líderes del turismo sostenible y expertos en naturaleza.",
    accent: "#cad95e",
    bg: "#191C0F",
    textColor: "#FCF8EE",
  },
  {
    num: "02",
    Icon: Music,
    tag: "Cultura",
    title: "Rumba y Manifestaciones",
    desc: "Música en vivo, arte urbano, gastronomía local y expresiones culturales de Colombia.",
    accent: "#f5e03a",
    bg: "#1a4a1e",
    textColor: "#FCF8EE",
  },
  {
    num: "03",
    Icon: Leaf,
    tag: "Inspiración",
    title: "Historias Transformadoras",
    desc: "Proyectos reales de impacto positivo que prueban que viajar con conciencia es posible.",
    accent: "#cad95e",
    bg: "#2d7a32",
    textColor: "#FCF8EE",
  },
];

export function QueVasPreview() {
  return (
    <section className="w-full" style={{ background: "#FCF8EE" }}>

      {/* ── Full-width header ── */}
      <div className="px-8 md:px-14 pt-16 pb-8 border-b border-black/10">
        <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
          style={{ color: "#2d7a32", fontFamily: "Unbounded, sans-serif" }}>
          Festival NATUR 2026
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-gasoek text-[12vw] md:text-[6.5vw] uppercase leading-[0.88]" style={{ color: "#191C0F" }}>
            ¿QUÉ VAS<br />A ENCONTRAR?
          </h2>
          <Link to="/que-vas-a-encontrar">
            <button
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-7 py-4 hover:opacity-80 transition-opacity whitespace-nowrap mb-1"
              style={{ background: "#1a4a1e", color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Descubrir
            </button>
          </Link>
        </div>
      </div>

      {/* ── Mosaic grid: photo + 3 cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/10">

        {/* Left: speaker photo + botanical */}
        <div className="grid grid-rows-2 border-r border-black/10">
          {/* Speaker portrait */}
          <div className="relative overflow-hidden min-h-[55vw] md:min-h-[28vw]">
            <img
              src={speakerImg}
              alt="Ponentes Festival NATUR"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(25,28,15,0.7) 0%, transparent 50%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-gasoek text-[4.5vw] md:text-[2.2vw] uppercase leading-tight text-white">
                Conferencistas<br />&amp; Ponentes
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-4 h-px bg-white/40" />
                <span className="text-[10px] uppercase tracking-widest text-white/40"
                  style={{ fontFamily: "Unbounded, sans-serif" }}>
                  Expertos nacionales e internacionales
                </span>
              </div>
            </div>
          </div>

          {/* Botanical square */}
          <div className="relative overflow-hidden min-h-[55vw] md:min-h-[28vw]">
            <img
              src={botanicaImg}
              alt="Naturaleza NATUR"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(26,74,30,0.45)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="font-gasoek text-[7vw] md:text-[3.5vw] uppercase leading-none text-center"
                style={{ color: "#cad95e" }}
              >
                Naturaleza<br />&amp; Cultura
              </p>
            </div>
          </div>
        </div>

        {/* Right: 3 stacked cards */}
        <div className="flex flex-col divide-y"
          style={{ borderColor: "rgba(25,28,15,0.1)" }}>
          {items.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.title}
                className="flex-1 flex flex-col justify-between p-9 md:p-10 min-h-[200px]"
                style={{ background: item.bg }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.accent}22`, border: `1px solid ${item.accent}44` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: item.accent }} />
                    </div>
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest"
                      style={{ color: item.accent, fontFamily: "Unbounded, sans-serif" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <span
                    className="font-gasoek text-4xl leading-none opacity-15"
                    style={{ color: item.textColor }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* Title + desc */}
                <div>
                  <h3
                    className="font-gasoek text-2xl md:text-3xl uppercase leading-tight mb-3"
                    style={{ color: item.textColor }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: `${item.textColor}80` }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
