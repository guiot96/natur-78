import React from 'react';
import { Link } from 'wouter';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import { Footer } from '@/components/sections/Footer';
import { Leaf, Users, Globe, Lightbulb, Handshake, Calendar, MapPin, Mail, ArrowRight } from 'lucide-react';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#cad95e', yellow: '#f5e03a', cream: '#FCF8EE',
};

const stats = [
  { number: '2026', label: 'Año del Festival', icon: Calendar },
  { number: '500+', label: 'Empresas Sostenibles', icon: Users },
  { number: '50+',  label: 'Experiencias Únicas', icon: Leaf },
  { number: '15',   label: 'Países Participantes', icon: Globe },
];

const values = [
  { icon: Leaf,      title: 'Sostenibilidad',       desc: 'Promovemos prácticas responsables que protegen nuestros ecosistemas naturales y culturales.', accent: P.lime },
  { icon: Users,     title: 'Responsabilidad Social', desc: 'Fomentamos el turismo que beneficia directamente a las comunidades locales.', accent: P.yellow },
  { icon: Lightbulb, title: 'Innovación',            desc: 'Integramos tecnología y creatividad para crear experiencias transformadoras.', accent: P.lime },
  { icon: Handshake, title: 'Colaboración',          desc: 'Construimos redes que conectan a viajeros conscientes con empresas sostenibles.', accent: P.yellow },
];

const team = [
  { name: 'María Rodríguez', role: 'Directora Ejecutiva',  bio: 'Experta en turismo sostenible con 15 años de experiencia en Colombia y Latinoamérica.' },
  { name: 'Carlos Mendoza',  role: 'Director de Innovación', bio: 'Especialista en tecnología verde y modelos de negocio regenerativos.' },
  { name: 'Ana Gutiérrez',   role: 'Directora de Comunidad', bio: 'Líder en desarrollo de redes de turismo sostenible y relaciones institucionales.' },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: P.cream }}>
      <HeaderButtons />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6" style={{ background: P.darkGreen }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-bold"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Sobre el Festival
          </p>
          <h1 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none text-white mb-6">
            NOSOTROS
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Festival NATUR es el primer Festival Nacional de Turismo Responsable y Sostenible de Colombia.
            Un espacio donde la industria, las comunidades y los viajeros se encuentran para construir
            el futuro del turismo consciente.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-0" style={{ background: P.dark }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="py-10 px-6 border-r last:border-r-0 text-center"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              <p className="font-gasoek text-4xl sm:text-5xl" style={{ color: P.lime }}>{s.number}</p>
              <p className="text-xs mt-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</p>
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
            <h2 className="font-gasoek text-3xl sm:text-4xl uppercase leading-tight mb-6" style={{ color: P.dark }}>
              CONSTRUIR EL<br />FUTURO DEL<br />TURISMO
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(25,28,15,0.65)' }}>
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
            <h2 className="font-gasoek text-3xl sm:text-4xl uppercase leading-tight mb-6" style={{ color: P.dark }}>
              14 Y 15 DE<br />AGOSTO, 2026
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(25,28,15,0.65)' }}>
              Dos días en Kinder, Chapinero, Bogotá. Un programa que incluye charlas magistrales,
              talleres prácticos, feria de emprendimientos, conciertos, gastronomía sostenible
              y experiencias culturales únicas.
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: P.darkGreen }}>
              <MapPin className="w-4 h-4" />
              <span>Kinder — Calle 59 #6-21, Chapinero, Bogotá</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6" style={{ background: P.darkGreen }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-10 font-bold text-center"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Nuestros Valores
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {values.map((v, i) => (
              <div key={i} className="p-8 flex flex-col gap-4" style={{ background: P.darkGreen }}>
                <div className="w-10 h-10 flex items-center justify-center"
                  style={{ background: v.accent }}>
                  <v.icon className="w-5 h-5" style={{ color: P.dark }} />
                </div>
                <h3 className="font-gasoek text-lg uppercase text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-10 font-bold"
          style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
          Equipo
        </p>
        <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(26,74,30,0.12)' }}>
          {team.map((t, i) => (
            <div key={i} className="p-8" style={{ background: P.cream }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 font-gasoek text-xl"
                style={{ background: i % 2 === 0 ? P.lime : P.yellow, color: P.dark }}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-gasoek text-lg uppercase leading-tight mb-1" style={{ color: P.dark }}>{t.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: P.midGreen }}>{t.role}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(25,28,15,0.6)' }}>{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: P.yellow }}>
        <h2 className="font-gasoek text-3xl sm:text-4xl uppercase mb-3" style={{ color: P.dark }}>
          Únete al Movimiento
        </h2>
        <p className="mb-8 max-w-md mx-auto text-base" style={{ color: 'rgba(25,28,15,0.65)' }}>
          Compra tu entrada o escríbenos para ser parte de este festival histórico.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/tickets">
            <button className="flex items-center gap-2 font-gasoek text-sm uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
              style={{ background: P.dark, color: P.lime }}>
              <ArrowRight className="w-4 h-4" />COMPRAR ENTRADAS
            </button>
          </Link>
          <a href="mailto:info@festivalnatur.com"
            className="flex items-center gap-2 font-gasoek text-sm uppercase tracking-wider px-10 py-4 border-2 hover:opacity-80 transition-opacity"
            style={{ borderColor: P.dark, color: P.dark }}>
            <Mail className="w-4 h-4" />CONTACTAR
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
