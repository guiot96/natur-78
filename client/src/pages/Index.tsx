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

      {/* VIVE LA EXPERIENCIA */}
      <AmbienteSection />

      {/* Pilares: Agenda Académica · Rumba y Cultura · Historias Reales */}
      <Pilares />

      {/* Divisor animado */}
      <Ticker bg="#FCF8EE" color="rgba(25,28,15,0.08)" />

      {/* Countdown — barra minimalista */}
      <Countdown />

      {/* Para quién es NATUR */}
      <Participation />

      {/* 3. Entradas */}
      <EntradasPreview />

      {/* Ticker between sections — reversed */}
      <Ticker bg="#191C0F" color="rgba(202,217,94,0.3)" reverse />

      {/* Divisor animado */}
      <Ticker bg="#FCF8EE" color="rgba(25,28,15,0.08)" />

      {/* ¿Por qué ser parte de esta tribu? */}
      <Benefits />

      {/* Divisor animado */}
      <Ticker bg="#191C0F" color="rgba(202,217,94,0.3)" reverse />

      {/* 5. Reserva tu Stand */}
      <Stand />

      {/* Divisor animado */}
      <Ticker bg="#FCF8EE" color="rgba(25,28,15,0.08)" />

      {/* 6. Historias */}
      <HistoriasPreview />

      {/* Divisor animado */}
      <Ticker bg="#191C0F" color="rgba(202,217,94,0.3)" reverse />

      {/* 7. Aliados */}
      <Partners />

      {/* Divisor animado */}
      <Ticker bg="#FCF8EE" color="rgba(25,28,15,0.08)" />

      {/* 8. Ubicación */}
      <Location />

      {/* Divisor animado */}
      <Ticker bg="#191C0F" color="rgba(202,217,94,0.3)" reverse />

      {/* 9. Contacto */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
