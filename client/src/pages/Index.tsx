
import React, { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { QueVasPreview } from "@/components/sections/QueVasPreview";
import { EntradasPreview } from "@/components/sections/EntradasPreview";
import { AmbienteSection } from "@/components/sections/AmbienteSection";
import { Stand } from "@/components/sections/Stand";
import { HistoriasPreview } from "@/components/sections/HistoriasPreview";
import { Partners } from "@/components/sections/Partners";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { HeaderButtons } from "@/components/layout/HeaderButtons";
import ContactForm from "@/components/sections/ContactForm";

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
      <HeaderButtons />

      {/* 1. Hero */}
      <Hero />

      {/* 2. ¿Qué vas a encontrar? */}
      <QueVasPreview />

      {/* 3. Entradas */}
      <EntradasPreview />

      {/* 4. Ambiente — foto del festival */}
      <AmbienteSection />

      {/* 5. Reserva tu Stand */}
      <Stand />

      {/* 6. Historias */}
      <HistoriasPreview />

      {/* 6. Aliados */}
      <Partners />

      {/* 7. Ubicación */}
      <Location />

      {/* 8. Contacto */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
