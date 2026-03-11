
import React, { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Participation } from "@/components/sections/Participation";
import { Program } from "@/components/sections/Program";
import { Location } from "@/components/sections/Location";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { HeaderButtons } from "@/components/layout/HeaderButtons";

const Index = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      <div className="w-full">
        <HeaderButtons />

        <Hero />

        <div id="about">
          <About />
        </div>

        <div id="benefits">
          <Benefits />
        </div>

        <div id="participate">
          <Participation />
        </div>

        <div id="program">
          <Program />
        </div>

        <div id="location">
          <Location />
        </div>

        <div id="partners">
          <Partners />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <footer className="bg-[#191C0F] text-[#FCF8EE] py-10 w-full">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-gasoek text-lg text-[#cad95e] tracking-widest uppercase mb-1">FESTIVAL NATUR</p>
              <p className="text-sm text-white/50">14 y 15 de agosto, 2026 · Kinder, Bogotá</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-white/40">
              <a href="/tickets" className="hover:text-[#cad95e] transition-colors">Entradas</a>
              <a href="/agenda" className="hover:text-[#cad95e] transition-colors">Agenda</a>
              <a href="/nosotros" className="hover:text-[#cad95e] transition-colors">Nosotros</a>
              <a href="/contacto" className="hover:text-[#cad95e] transition-colors">Contacto</a>
              <a href="/portal-empresas" className="hover:text-[#cad95e] transition-colors">Portal Empresas</a>
            </div>
            <p className="text-xs text-white/30 text-center">
              © {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
