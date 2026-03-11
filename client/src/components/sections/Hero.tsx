
import React from "react";
import { Link } from "wouter";
import { Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Festival_NATUR from "@assets/2026_1771518463695.png";

export function Hero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      {/* Background */}
      <img
        alt="Festival NATUR 2026 — Primer Festival de Turismo Sostenible de Colombia"
        className="absolute h-full w-full object-cover inset-0"
        src="/lovable-uploads/96c8e76d-00c8-4cd5-b263-4b779aa85181.jpg"
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div id="main-content" className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center flex flex-col items-center gap-10">
          {/* Logo */}
          <img
            src={Festival_NATUR}
            alt="Festival NATUR 2026"
            className="w-full h-auto"
            style={{ maxWidth: "480px" }}
          />

          {/* Single CTA */}
          <Link to="/tickets">
            <Button
              size="lg"
              className="text-black font-bold text-base sm:text-lg px-10 py-5 rounded-none shadow-xl hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#cad95e",
                fontFamily: "Unbounded, sans-serif",
                fontWeight: "600",
                letterSpacing: "0.1em",
              }}
            >
              <Ticket className="w-5 h-5 mr-2" />
              COMPRAR ENTRADAS
            </Button>
          </Link>

          {/* Sub info */}
          <p className="text-white/60 text-sm tracking-wider uppercase">
            14 y 15 de agosto · Kinder, Bogotá
          </p>
        </div>
      </div>
    </header>
  );
}
