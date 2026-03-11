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
    <section className="w-full bg-[#CEDD9F] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p
              className="text-[#4a5a20] text-xs tracking-[0.3em] uppercase mb-2 font-bold"
              style={{ fontFamily: "Unbounded, sans-serif" }}
            >
              Festival NATUR 2026
            </p>
            <h2 className="font-gasoek text-4xl sm:text-5xl text-[#191C0F] uppercase leading-tight">
              ¿QUÉ VAS A<br />ENCONTRAR?
            </h2>
          </div>
          <Link to="/que-vas-a-encontrar">
            <button className="flex items-center gap-2 bg-[#191C0F] text-[#cad95e] font-gasoek text-xs uppercase tracking-wider px-6 py-3 hover:opacity-80 transition-opacity whitespace-nowrap">
              <ArrowRight className="w-3.5 h-3.5" />
              DESCUBRIR
            </button>
          </Link>
        </div>

        {/* Items */}
        <div className="grid sm:grid-cols-3 gap-px bg-[#191C0F]/15">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-[#CEDD9F] p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#191C0F]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#191C0F]" />
                  </div>
                  <span className="text-xs font-bold text-[#4a5a20] uppercase tracking-wider">{item.tag}</span>
                </div>
                <h3 className="font-gasoek text-xl text-[#191C0F] uppercase leading-tight">{item.title}</h3>
                <p className="text-sm text-[#191C0F]/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
