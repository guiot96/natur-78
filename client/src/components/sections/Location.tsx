import React from "react";
import kinderImage from "@assets/Captura_de_pantalla_2026-02-19_a_la(s)_11.35.23_a._m._1771518928744.png";

export function Location() {
  return <section className="w-full font-jakarta bg-[#e6f0c1] py-0 m-0">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Left: Background Image with headline */}
        <div className="relative w-full lg:w-[45%] min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-black">
          <img src={kinderImage} alt="Kinder Venue Architecture" className="w-full h-full object-cover block opacity-85" />
          <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-25">
            <div className="p-4 pb-6 sm:p-6 md:p-8">
              <h1 className="font-gasoek text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-wide uppercase text-zinc-50">
                KINDER
              </h1>
            </div>
          </div>
        </div>
        
        {/* Right: Info Panel */}
        <div className="flex items-stretch w-full lg:w-[55%] bg-[#CEDD9F] min-h-[300px]">
          <div className="flex flex-col justify-center w-full p-4 py-6 sm:p-6 md:p-8 lg:p-10">
            <h2 style={{
            letterSpacing: 1.5
          }} className="font-gasoek text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-wide uppercase mb-4 sm:mb-6 md:mb-8 text-zinc-950">
              ¿CUÁNDO Y DÓNDE?
            </h2>
            
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl p-4 sm:p-6 border border-[#191C0F]/10 mb-4">
              <time className="text-sm sm:text-base md:text-lg font-bold text-[#222] tracking-wide uppercase block text-center" dateTime="2026-08-14">
                14 Y 15 DE AGOSTO / 2026
              </time>
              <p className="text-xs sm:text-sm text-center text-[#222] mt-2 font-bold">
                Calle 59 #6-21, Chapinero, Bogotá, Colombia
              </p>
            </div>
            
            <div className="text-xs sm:text-sm md:text-base leading-relaxed text-[#13160c] font-medium space-y-3">
              <div className="backdrop-blur-sm bg-white/20 rounded-3xl p-3 sm:p-4 border border-[#191C0F]/10">
                <p>
                  Kinder será la sede del Primer Festival de Turismo Sostenible en Colombia. Un lugar que se ha consolidado como uno de los nuevos referentes culturales de la ciudad, donde convergen arquitectura, memoria, arte y vida nocturna contemporánea.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/20 rounded-3xl p-3 sm:p-4 border border-[#191C0F]/10">
                <p>
                  Ubicado en el corazón de Chapinero, Kinder nace de la transformación de un antiguo espacio educativo en un escenario que hoy simboliza renovación, encuentro y exploración cultural. Su arquitectura y su identidad lo han posicionado como un punto clave dentro del nuevo mapa cultural de Bogotá.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/20 rounded-3xl p-3 sm:p-4 border border-[#191C0F]/10">
                <p>
                  Con una programación constante de música, arte y experiencias, Kinder representa el espíritu de una ciudad en evolución: abierta, diversa y conectada con el futuro. El festival llega al lugar ideal para inspirar nuevas formas de viajar y construir una nueva visión del turismo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}