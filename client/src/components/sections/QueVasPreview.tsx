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
    <section className="w-full py-20 px-6" style={{ background: '#e87fa0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-2 font-bold"
              style={{ color: '#1a4a1e', fontFamily: "Unbounded, sans-serif" }}
            >
              Festival NATUR 2026
            </p>
            <h2 className="font-gasoek text-4xl sm:text-5xl uppercase leading-tight" style={{ color: 'white' }}>
              ¿QUÉ VAS A<br />ENCONTRAR?
            </h2>
          </div>
          <Link to="/que-vas-a-encontrar">
            <button className="flex items-center gap-2 font-gasoek text-xs uppercase tracking-wider px-6 py-3 hover:opacity-80 transition-opacity whitespace-nowrap" style={{ background: '#1a4a1e', color: '#cad95e' }}>
              <ArrowRight className="w-3.5 h-3.5" />
              DESCUBRIR
            </button>
          </Link>
        </div>

        {/* Items */}
        <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.2)' }}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-8 flex flex-col gap-4" style={{ background: '#e87fa0' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.25)' }}>
                    <Icon className="w-4 h-4" style={{ color: 'white' }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.tag}</span>
                </div>
                <h3 className="font-gasoek text-xl uppercase leading-tight" style={{ color: 'white' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
