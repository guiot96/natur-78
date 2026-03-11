import React from "react";
import { Link } from "wouter";
import { Ticket, ArrowRight, Calendar, MapPin } from "lucide-react";

export function EntradasPreview() {
  return (
    <section className="w-full bg-[#191C0F] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3 font-bold"
            style={{ color: '#cad95e', fontFamily: "Unbounded, sans-serif" }}
          >
            14 y 15 de agosto · Bogotá
          </p>
          <h2 className="font-gasoek text-4xl sm:text-5xl text-white uppercase leading-tight">
            ENTRADAS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* 1 día */}
          <div className="p-8 flex flex-col gap-6" style={{ border: '1px solid rgba(202,217,94,0.25)' }}>
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(202,217,94,0.6)' }}>Entrada</p>
              <h3 className="font-gasoek text-3xl text-white uppercase">1 DÍA</h3>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-gasoek text-5xl" style={{ color: '#cad95e' }}>$50.000</span>
              <span className="text-white/40 text-sm">COP</span>
            </div>
            <ul className="space-y-2 text-white/70 text-sm flex-1">
              {["Charlas y conferencias", "Conciertos en vivo", "Feria de emprendimientos", "Experiencias sostenibles"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full" style={{ background: '#cad95e' }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* 2 días */}
          <div className="p-8 flex flex-col gap-6 relative" style={{ background: '#e87fa0' }}>
            <div className="absolute top-4 right-4 text-[10px] font-bold px-3 py-1 font-gasoek uppercase tracking-widest" style={{ background: '#f5e03a', color: '#191C0F' }}>
              RECOMENDADO
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Entrada</p>
              <h3 className="font-gasoek text-3xl uppercase" style={{ color: 'white' }}>2 DÍAS</h3>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-gasoek text-5xl" style={{ color: 'white' }}>$70.000</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>COP</span>
            </div>
            <ul className="space-y-2 text-sm flex-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {["Acceso completo ambos días", "Todas las actividades", "Conciertos y programación", "Zona especial y networking"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/tickets">
            <button className="bg-[#cad95e] text-[#191C0F] font-gasoek text-sm uppercase tracking-wider px-12 py-4 hover:bg-[#b8c94d] transition-colors flex items-center gap-2 mx-auto">
              <Ticket className="w-4 h-4" />
              COMPRAR ENTRADAS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
