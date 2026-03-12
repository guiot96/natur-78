import { Link } from "wouter";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import standImg from "@assets/generated_images/natur_stand.png";
import gastroImg from "@assets/stock_images/colombian_food.jpg";

export function Stand() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    // SLIDE 1 — RESERVA TU STAND
    {
      content: (
        <div className="w-full grid grid-cols-1 md:grid-cols-2" style={{ background: "#f5e03a" }}>
          {/* ── Left: editorial text block ── */}
          <div className="flex flex-col justify-between p-10 md:p-16 min-h-[60vw] md:min-h-[45vw]">
            <div>
              <span
                className="inline-block text-[9px] tracking-[0.32em] uppercase font-bold px-2.5 py-[3px] mb-10"
                style={{ background: "#191C0F", color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
              >
                Participa como marca
              </span>
              <h2
                className="font-unbounded font-bold uppercase leading-[0.95] tracking-tight mb-5"
                style={{ fontSize: "clamp(1.6rem, 5.5vw, 3.5rem)", color: "#191C0F" }}
              >
                RESERVA<br />TU STAND
              </h2>
              <p
                className="font-unbounded font-extralight text-sm leading-relaxed max-w-sm"
                style={{ color: "rgba(25,28,15,0.55)" }}
              >
                Conecta directamente con viajeros, aliados e inversores en el primer festival de turismo sostenible de Colombia.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              <div className="space-y-2">
                {[
                  ["Fecha", "14 y 15 de Agosto 2026"],
                  ["Sede", "Kinder · Chapinero · Bogotá"],
                  ["Cupos", "Limitados"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between border-b pb-2"
                    style={{ borderColor: "rgba(25,28,15,0.15)" }}>
                    <span className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(25,28,15,0.45)", fontFamily: "Unbounded, sans-serif" }}>
                      {label}
                    </span>
                    <span className="text-[10px] font-bold" style={{ color: "rgba(25,28,15,0.75)", fontFamily: "Unbounded, sans-serif" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link to="/contacto">
                  <button
                    className="flex items-center justify-between gap-6 font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
                    style={{ background: "#191C0F", color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
                  >
                    <span className="flex items-center gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5" />
                      Reservar stand
                    </span>
                  </button>
                </Link>
                <a
                  href="mailto:info@festivalnatur.com?subject=Stand Festival NATUR 2026"
                  className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                  style={{ color: "rgba(25,28,15,0.5)", fontFamily: "Unbounded, sans-serif" }}
                >
                  <ArrowRight className="w-3 h-3" />
                  info@festivalnatur.com
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: stand photo ── */}
          <div className="relative overflow-hidden min-h-[65vw] md:min-h-[45vw]">
            <img
              src={standImg}
              alt="Stand Festival NATUR"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center justify-between">
                <span
                  className="inline-block text-[9px] tracking-[0.3em] uppercase font-bold px-2.5 py-[3px]"
                  style={{ background: "#1a4a1e", color: "white", fontFamily: "Unbounded, sans-serif" }}
                >
                  Feria de emprendimientos
                </span>
                <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
                  AGO 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 2 — GASTRONOMÍA COLOMBIANA
    {
      content: (
        <div className="w-full grid grid-cols-1 md:grid-cols-2" style={{ background: "#1a4a1e" }}>
          {/* ── Left: gastro photo ── */}
          <div className="relative overflow-hidden min-h-[65vw] md:min-h-[45vw] order-2 md:order-1">
            <img
              src={gastroImg}
              alt="Gastronomía Colombiana"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(25,28,15,0.35)" }}
            />
          </div>

          {/* ── Right: editorial text block ── */}
          <div className="flex flex-col justify-between p-10 md:p-16 min-h-[60vw] md:min-h-[45vw] order-1 md:order-2">
            <div>
              <span
                className="inline-block text-[9px] tracking-[0.32em] uppercase font-bold px-2.5 py-[3px] mb-10"
                style={{ background: "rgba(245,224,58,0.15)", color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
              >
                Celebración culinaria
              </span>
              <h2
                className="font-unbounded font-bold uppercase leading-[0.95] tracking-tight mb-5 text-white"
                style={{ fontSize: "clamp(1.6rem, 5.5vw, 3.5rem)" }}
              >
                GASTRONOMÍA<br />COLOMBIANA
              </h2>
              <p
                className="font-unbounded font-extralight text-sm leading-relaxed max-w-sm text-white"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Una celebración de los sabores del territorio. Cocinas tradicionales, ingredientes locales y propuestas gastronómicas que cuentan la historia de Colombia a través de su biodiversidad y sus culturas.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              <div className="flex gap-3 flex-wrap">
                {["Sabores", "Territorio", "Tradición"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.28em] uppercase font-bold px-2.5 py-[3px]"
                    style={{ background: "rgba(245,224,58,0.1)", color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link to="/contacto">
                <button
                  className="flex items-center justify-between gap-6 font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
                  style={{ background: "#f5e03a", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
                >
                  <span className="flex items-center gap-2.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                    Reserva tu stand
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full relative">
      {/* Slider container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation — absolute overlay on bottom */}
      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10 pointer-events-none">
        <button
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          className="flex items-center justify-center w-10 h-10 rounded transition-all hover:brightness-125 pointer-events-auto"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: "#fff" }} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="transition-all"
              style={{
                width: current === idx ? "32px" : "8px",
                height: "8px",
                background: current === idx ? "#f5e03a" : "rgba(255,255,255,0.3)",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer"
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="flex items-center justify-center w-10 h-10 rounded transition-all hover:brightness-125 pointer-events-auto"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: "#fff" }} />
        </button>
      </div>
    </section>
  );
}
