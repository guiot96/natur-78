import React, { useState } from 'react';
import { Link } from 'wouter';
import { Check, Calendar, MapPin, Music, Mic, Store, Sparkles, ArrowRight, Ticket } from 'lucide-react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';

const Tickets = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const tickets = [
    {
      id: 'un-dia',
      name: '1 DÍA',
      subtitle: 'Elige el día que quieras',
      price: '50.000',
      color: '#cad95e',
      bg: '#191C0F',
      features: [
        { icon: Mic, text: 'Charlas y conferencias' },
        { icon: Music, text: 'Conciertos en vivo' },
        { icon: Store, text: 'Feria de emprendimientos' },
        { icon: Sparkles, text: 'Experiencias sostenibles' },
      ],
    },
    {
      id: 'dos-dias',
      name: '2 DÍAS',
      subtitle: 'Acceso completo al festival',
      price: '70.000',
      color: '#191C0F',
      bg: '#cad95e',
      badge: 'RECOMENDADO',
      features: [
        { icon: Check, text: 'Acceso completo ambos días' },
        { icon: Mic, text: 'Todas las actividades' },
        { icon: Music, text: 'Conciertos y programación cultural' },
        { icon: Sparkles, text: 'Zona especial y networking' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCF8EE] overflow-x-hidden">
      <HeaderButtons />

      {/* Hero */}
      <section className="bg-[#191C0F] pt-28 pb-16 px-6 text-center">
        <p className="text-[#cad95e] text-xs tracking-[0.3em] uppercase mb-3 font-bold" style={{ fontFamily: 'Unbounded, sans-serif' }}>
          Festival NATUR 2026
        </p>
        <h1 className="font-gasoek text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-tight mb-4">
          ENTRADAS
        </h1>
        <p className="text-white/60 text-base sm:text-lg max-w-lg mx-auto">
          14 y 15 de agosto · Kinder, Chapinero, Bogotá
        </p>
      </section>

      {/* Tickets */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelected(ticket.id)}
              className="relative cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ outline: selected === ticket.id ? `3px solid ${ticket.color === '#cad95e' ? '#cad95e' : '#191C0F'}` : 'none', outlineOffset: '4px' }}
            >
              {ticket.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[#191C0F] text-[#cad95e] text-xs font-bold tracking-widest px-4 py-1 font-gasoek uppercase">
                  {ticket.badge}
                </div>
              )}
              <div
                className="rounded-none p-8 sm:p-10 flex flex-col h-full min-h-[420px]"
                style={{ background: ticket.bg, color: ticket.color }}
              >
                {/* Name & Price */}
                <div className="mb-8">
                  <h2 className="font-gasoek text-3xl sm:text-4xl uppercase mb-1" style={{ color: ticket.color }}>
                    {ticket.name}
                  </h2>
                  <p className="text-sm opacity-70 mb-6">{ticket.subtitle}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-gasoek text-5xl sm:text-6xl" style={{ color: ticket.color }}>
                      ${ticket.price}
                    </span>
                    <span className="text-sm opacity-60 ml-1">COP</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {ticket.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm opacity-85">
                      <f.icon className="w-4 h-4 flex-shrink-0" style={{ color: ticket.color }} />
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-3.5 font-gasoek text-sm uppercase tracking-wider transition-opacity hover:opacity-80"
                  style={{
                    background: ticket.color,
                    color: ticket.bg,
                    border: 'none',
                  }}
                >
                  <Ticket className="w-4 h-4 inline mr-2" />
                  COMPRAR ENTRADA
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="max-w-4xl mx-auto mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Calendar, label: 'Fechas', value: '14 y 15 de agosto, 2026' },
            { icon: MapPin, label: 'Lugar', value: 'Kinder — Calle 59 #6-21, Bogotá' },
            { icon: Ticket, label: 'Cupos', value: 'Limitados — compra ya' },
          ].map((item) => (
            <div key={item.label} className="bg-[#191C0F] text-white px-6 py-5 flex items-start gap-4">
              <item.icon className="w-5 h-5 text-[#cad95e] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider font-bold mb-0.5">{item.label}</p>
                <p className="text-sm text-white/90">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#cad95e] py-14 px-6 text-center">
        <h2 className="font-gasoek text-3xl sm:text-4xl text-[#191C0F] uppercase mb-3">
          ¿Tienes dudas?
        </h2>
        <p className="text-[#191C0F]/70 text-base mb-8 max-w-md mx-auto">
          Escríbenos a <a href="mailto:info@festivalnatur.com" className="font-bold underline">info@festivalnatur.com</a> o visita nuestra página de contacto.
        </p>
        <Link to="/contacto">
          <button className="bg-[#191C0F] text-[#cad95e] font-gasoek text-sm uppercase tracking-wider px-10 py-3.5 hover:opacity-90 transition-opacity">
            <ArrowRight className="w-4 h-4 inline mr-2" />
            CONTACTAR
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#191C0F] text-white/40 text-center py-6 text-xs">
        <p>© {new Date().getFullYear()} Festival NATUR · Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Tickets;
