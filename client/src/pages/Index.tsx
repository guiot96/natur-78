import React, { useEffect } from "react";
import { Pilares } from "@/components/sections/Pilares";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Countdown } from "@/components/sections/Countdown";
import { EntradasPreview } from "@/components/sections/EntradasPreview";
import { Participation } from "@/components/sections/Participation";
import { Benefits } from "@/components/sections/Benefits";
import { Manifiesto } from "@/components/sections/Manifiesto";
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

      {/* Ticker — lime on dark green */}
      <Ticker />

      {/* Manifiesto — ¿Qué es Festival NATUR? */}
      <Manifiesto />

      {/* Countdown */}
      <Countdown />

      {/* Pilares: Agenda Académica · Rumba y Cultura · Historias Reales */}
      <Pilares />

      {/* Para quién es NATUR */}
      <Participation />

      {/* 3. Entradas */}
      <EntradasPreview />

      {/* Ticker between sections — reversed */}
      <Ticker bg="#191C0F" color="rgba(202,217,94,0.3)" reverse />

      {/* 4. Ambiente — foto del festival */}
      <AmbienteSection />

      {/* ¿Por qué ser parte de esta tribu? */}
      <Benefits />

      {/* 5. Reserva tu Stand */}
      <Stand />

      {/* 6. Historias */}
      <HistoriasPreview />

      {/* 7. Aliados */}
      <Partners />

      {/* 8. Ubicación */}
      <Location />

      {/* 9. Contacto */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
