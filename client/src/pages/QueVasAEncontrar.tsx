import React from "react";
import { HeaderButtons } from "@/components/layout/HeaderButtons";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Music, Leaf } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    tag: "CONOCIMIENTO",
    title: "Agenda Académica",
    description:
      "Charlas, paneles y talleres con líderes del turismo sostenible, emprendedores regenerativos y expertos en naturaleza. Aprende, debate y llévate herramientas reales para transformar tu forma de viajar y hacer negocios.",
    color: "#cad95e",
    bg: "#191C0F",
    items: [
      "Conferencias magistrales",
      "Paneles de expertos",
      "Talleres prácticos",
      "Casos de éxito nacionales e internacionales",
    ],
  },
  {
    icon: Music,
    tag: "CULTURA",
    title: "Nuestra Rumba y sus Manifestaciones",
    description:
      "Música en vivo, arte urbano, gastronomía local y expresiones culturales que celebran la diversidad de Colombia. Una fiesta que conecta territorios, artistas y comunidades en un solo escenario.",
    color: "#FCF8EE",
    bg: "#aa3b1e",
    items: [
      "Música en vivo",
      "Arte y expresión urbana",
      "Gastronomía sostenible",
      "Experiencias culturales inmersivas",
    ],
  },
  {
    icon: Leaf,
    tag: "INSPIRACIÓN",
    title: "Historias Transformadoras del Turismo Sostenible",
    description:
      "Conoce personas y proyectos que están cambiando la narrativa del turismo en Colombia y el mundo. Historias reales de impacto positivo que demuestran que viajar con conciencia es posible y rentable.",
    color: "#191C0F",
    bg: "#cad95e",
    items: [
      "Testimonios de emprendedores",
      "Proyectos de impacto comunitario",
      "Iniciativas de conservación",
      "Modelos de negocio regenerativos",
    ],
  },
];

const QueVasAEncontrar = () => {
  return (
    <div className="min-h-screen bg-[#FCF8EE] overflow-x-hidden">
      <HeaderButtons />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#191C0F] pt-20">
        <div className="text-center px-6 py-16 max-w-3xl mx-auto">
          <p
            className="text-[#cad95e] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-bold"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            Festival NATUR 2026 — Bogotá
          </p>
          <h1
            className="font-gasoek text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-tight mb-6"
          >
            ¿Qué vas a{" "}
            <span className="text-[#cad95e]">encontrar?</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Tres mundos en un solo festival. Conocimiento, cultura e inspiración
            para construir un turismo diferente.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="w-full">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isEven = index % 2 === 0;
          return (
            <div
              key={section.title}
              className="flex flex-col lg:flex-row min-h-[420px]"
              style={{ background: section.bg }}
            >
              {/* Text block */}
              <div
                className={`flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-20 w-full lg:w-1/2 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: section.color + "22", border: `1px solid ${section.color}44` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: section.color }} />
                  </div>
                  <span
                    className="text-xs font-bold tracking-[0.25em] uppercase"
                    style={{ color: section.color, fontFamily: "Unbounded, sans-serif" }}
                  >
                    {section.tag}
                  </span>
                </div>

                <h2
                  className="font-gasoek text-3xl sm:text-4xl md:text-5xl uppercase leading-tight mb-5"
                  style={{ color: section.color }}
                >
                  {section.title}
                </h2>

                <p
                  className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: section.color + "cc" }}
                >
                  {section.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium"
                      style={{ color: section.color + "bb" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: section.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/tickets">
                  <Button
                    className="rounded-none font-gasoek text-sm tracking-wider uppercase px-6 py-3 w-fit"
                    style={{
                      background: section.color,
                      color: section.bg,
                      border: "none",
                    }}
                  >
                    DESCUBRIR
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Visual block */}
              <div
                className={`w-full lg:w-1/2 min-h-[280px] lg:min-h-[420px] flex items-center justify-center ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
                style={{ background: section.color + "15" }}
              >
                <Icon
                  className="opacity-10"
                  style={{ color: section.color, width: "200px", height: "200px" }}
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA bottom */}
      <section className="bg-[#cad95e] py-16 px-6 text-center">
        <h2 className="font-gasoek text-3xl sm:text-4xl md:text-5xl text-[#191C0F] uppercase mb-4">
          ¡Nos vemos el 14 y 15 de agosto!
        </h2>
        <p className="text-[#191C0F]/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Kinder — Calle 59 #6-21, Chapinero, Bogotá
        </p>
        <Link to="/tickets">
          <Button className="bg-[#191C0F] hover:bg-black text-[#cad95e] rounded-none font-gasoek text-sm tracking-wider uppercase px-10 py-4">
            <ArrowRight className="w-4 h-4 mr-2" />
            COMPRAR ENTRADAS
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#191C0F] text-[#FCF8EE]/50 text-center py-6 text-xs">
        <p>© {new Date().getFullYear()} Festival NATUR — Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default QueVasAEncontrar;
