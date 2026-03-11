import React from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Music, Leaf } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    tag: "Conocimiento",
    title: "Agenda Académica",
    desc: "Charlas, paneles y talleres con líderes del turismo sostenible y expertos en naturaleza.",
  },
  {
    icon: Music,
    tag: "Cultura",
    title: "Nuestra Rumba y sus Manifestaciones",
    desc: "Música en vivo, arte urbano, gastronomía local y expresiones culturales de Colombia.",
  },
  {
    icon: Leaf,
    tag: "Inspiración",
    title: "Historias Transformadoras",
    desc: "Proyectos reales de impacto positivo que prueban que viajar con conciencia es posible.",
  },
];

export function QueVasPreview() {
  return (
    <section className="w-full py-20 px-6" style={{ background: '#FCF8EE' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 font-bold"
              style={{ color: '#2d7a32', fontFamily: "Unbounded, sans-serif" }}>
              Festival NATUR 2026
            </p>
            <h2 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none" style={{ color: '#191C0F' }}>
              ¿Qué vas a encontrar?
            </h2>
          </div>
          <Link to="/que-vas-a-encontrar">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ background: '#1a4a1e', color: '#cad95e', fontFamily: 'Unbounded, sans-serif' }}>
              <ArrowRight className="w-3.5 h-3.5" />
              DESCUBRIR
            </button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(26,74,30,0.12)' }}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-8 flex flex-col gap-4" style={{ background: '#FCF8EE' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center" style={{ background: '#cad95e' }}>
                    <Icon className="w-4 h-4" style={{ color: '#191C0F' }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: '#2d7a32', fontFamily: 'Unbounded, sans-serif' }}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-gasoek text-2xl sm:text-3xl uppercase leading-tight" style={{ color: '#191C0F' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(25,28,15,0.6)' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
