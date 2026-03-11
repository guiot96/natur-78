import React from "react";
import { Link } from "wouter";
import { Ticket } from "lucide-react";

export function EntradasPreview() {
  return (
    <section className="w-full bg-[#191C0F] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 font-bold"
            style={{ color: '#cad95e', fontFamily: "Unbounded, sans-serif" }}>
            14 y 15 de agosto · Bogotá
          </p>
          <h2 className="font-unbounded font-extralight text-4xl sm:text-5xl text-white leading-tight">
            Elige tu entrada
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* 1 día */}
          <div className="p-8 flex flex-col gap-6" style={{ border: '1px solid rgba(202,217,94,0.25)' }}>
            <div>
              <p className="text-[11px] uppercase tracking-widest mb-1 font-bold"
                style={{ color: 'rgba(202,217,94,0.55)', fontFamily: 'Unbounded, sans-serif' }}>Entrada</p>
              <h3 className="font-gasoek text-3xl text-white uppercase">1 DÍA</h3>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-gasoek text-5xl" style={{ color: '#cad95e' }}>$50.000</span>
              <span className="text-white/40 text-sm">COP</span>
            </div>
            <ul className="space-y-2 text-white/65 text-sm flex-1">
              {["Charlas y conferencias", "Conciertos en vivo", "Feria de emprendimientos", "Experiencias sostenibles"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#cad95e' }} />{f}
                </li>
              ))}
            </ul>
          </div>

          {/* 2 días */}
          <div className="p-8 flex flex-col gap-6 relative" style={{ background: '#cad95e' }}>
            <div className="absolute top-4 right-4 text-[10px] font-bold px-3 py-1 uppercase tracking-widest"
              style={{ background: '#191C0F', color: '#cad95e', fontFamily: 'Unbounded, sans-serif' }}>
              RECOMENDADO
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest mb-1 font-bold"
                style={{ color: 'rgba(25,28,15,0.5)', fontFamily: 'Unbounded, sans-serif' }}>Entrada</p>
              <h3 className="font-gasoek text-3xl uppercase" style={{ color: '#191C0F' }}>2 DÍAS</h3>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-gasoek text-5xl" style={{ color: '#191C0F' }}>$70.000</span>
              <span className="text-sm" style={{ color: 'rgba(25,28,15,0.5)' }}>COP</span>
            </div>
            <ul className="space-y-2 text-sm flex-1" style={{ color: 'rgba(25,28,15,0.75)' }}>
              {["Acceso completo ambos días", "Todas las actividades", "Conciertos y programación", "Zona especial y networking"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#1a4a1e' }} />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link to="/tickets">
            <button className="text-sm font-bold uppercase tracking-wider px-12 py-4 hover:opacity-90 transition-colors flex items-center gap-2 mx-auto"
              style={{ background: '#cad95e', color: '#191C0F', fontFamily: 'Unbounded, sans-serif' }}>
              <Ticket className="w-4 h-4" />
              COMPRAR ENTRADAS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
