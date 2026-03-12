import React from 'react';
import { Link } from 'wouter';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import { Footer } from '@/components/sections/Footer';
import { Leaf, Users, Globe, Lightbulb, Handshake, Calendar, MapPin, Mail, ArrowRight } from 'lucide-react';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#f5e03a', yellow: '#f5e03a', cream: '#FCF8EE',
};

const stats = [
  { number: '2026', label: 'Año del Festival', icon: Calendar },
  { number: '500+', label: 'Empresas Sostenibles', icon: Users },
  { number: '50+',  label: 'Experiencias Únicas', icon: Leaf },
  { number: '15',   label: 'Países Participantes', icon: Globe },
];

const values = [
  { icon: Leaf,      title: 'Sostenibilidad',        desc: 'Promovemos prácticas responsables que protegen nuestros ecosistemas naturales y culturales.', accent: P.lime },
  { icon: Users,     title: 'Responsabilidad Social', desc: 'Fomentamos el turismo que beneficia directamente a las comunidades locales.',               accent: P.yellow },
  { icon: Lightbulb, title: 'Innovación',             desc: 'Integramos tecnología y creatividad para crear experiencias transformadoras.',               accent: P.lime },
  { icon: Handshake, title: 'Colaboración',           desc: 'Construimos redes que conectan a viajeros conscientes con empresas sostenibles.',            accent: P.yellow },
];

const team = [
  { name: 'María Rodríguez', role: 'Directora Ejecutiva',   bio: 'Experta en turismo sostenible con 15 años de experiencia en Colombia y Latinoamérica.' },
  { name: 'Carlos Mendoza',  role: 'Director de Innovación', bio: 'Especialista en tecnología verde y modelos de negocio regenerativos.' },
  { name: 'Ana Gutiérrez',   role: 'Directora de Comunidad', bio: 'Líder en desarrollo de redes de turismo sostenible y relaciones institucionales.' },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden pb-16 md:pb-0" style={{ background: P.cream }}>
      <HeaderButtons />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6" style={{ background: P.darkGreen }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-bold"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Sobre el Festival
          </p>
          <h1 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none text-white mb-3">
            NOSOTROS
          </h1>
          <p className="font-unbounded font-extralight text-xl sm:text-2xl mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
            El primer Festival Nacional de Turismo Sostenible de Colombia
          </p>
          <p className="max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Un espacio donde la industria, las comunidades y los viajeros se encuentran para construir
            el futuro del turismo consciente en Colombia y el mundo.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: P.dark }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="py-10 px-6 border-r last:border-r-0 text-center"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              <p className="font-gasoek text-4xl sm:text-5xl" style={{ color: P.lime }}>{s.number}</p>
              <p className="text-xs mt-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Unbounded, sans-serif' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-bold"
              style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
              Nuestra Misión
            </p>
            <h2 className="font-unbounded font-extralight text-3xl sm:text-4xl leading-tight mb-6" style={{ color: P.darkGreen }}>
              Construir el futuro del turismo sostenible
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(25,28,15,0.6)' }}>
              Festival NATUR nace de la convicción de que el turismo puede ser una fuerza transformadora
              para Colombia. Reunimos a emprendedores, líderes de la industria, comunidades locales
              y viajeros conscientes en un festival que celebra y acelera el turismo sostenible.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-bold"
              style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
              El Evento
            </p>
            <h2 className="font-unbounded font-extralight text-3xl sm:text-4xl leading-tight mb-5" style={{ color: P.darkGreen }}>
              14 y 15 de agosto, 2026
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(25,28,15,0.6)' }}>
              Dos días en Kinder, Chapinero, Bogotá. Un programa que incluye charlas magistrales,
              talleres prácticos, feria de emprendimientos, conciertos, gastronomía sostenible
              y experiencias culturales únicas.
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: P.darkGreen }}>
              <MapPin className="w-4 h-4" />
              Kinder — Calle 59 #6-21, Chapinero, Bogotá
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6" style={{ background: P.darkGreen }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 font-bold text-center"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Nuestros Valores
          </p>
          <h2 className="font-unbounded font-extralight text-2xl sm:text-3xl text-center text-white mb-10">
            Lo que nos guía
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {values.map((v, i) => (
              <div key={i} className="p-8 flex flex-col gap-3" style={{ background: P.darkGreen }}>
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: v.accent }}>
                  <v.icon className="w-5 h-5" style={{ color: P.dark }} />
                </div>
                <h3 className="font-semibold text-base text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3 font-bold"
          style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
          Equipo
        </p>
        <h2 className="font-unbounded font-extralight text-2xl sm:text-3xl mb-10" style={{ color: P.darkGreen }}>
          Las personas detrás del festival
        </h2>
        <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(26,74,30,0.12)' }}>
          {team.map((t, i) => (
            <div key={i} className="p-8" style={{ background: P.cream }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 font-gasoek text-xl flex-shrink-0"
                style={{ background: i % 2 === 0 ? P.lime : P.yellow, color: P.dark }}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-semibold text-base leading-tight mb-0.5" style={{ color: P.dark }}>{t.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
                {t.role}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(25,28,15,0.55)' }}>{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: P.yellow }}>
        <h2 className="font-unbounded font-extralight text-3xl sm:text-4xl mb-3" style={{ color: P.dark }}>
          Únete al movimiento
        </h2>
        <p className="mb-8 max-w-md mx-auto text-base" style={{ color: 'rgba(25,28,15,0.6)' }}>
          Compra tu entrada o escríbenos para ser parte de este festival histórico.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/tickets">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
              style={{ background: P.dark, color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
              <ArrowRight className="w-4 h-4" />COMPRAR ENTRADAS
            </button>
          </Link>
          <a href="mailto:info@festivalnatur.com"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-10 py-4 border-2 hover:opacity-80 transition-opacity"
            style={{ borderColor: P.dark, color: P.dark, fontFamily: 'Unbounded, sans-serif' }}>
            <Mail className="w-4 h-4" />CONTACTAR
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
