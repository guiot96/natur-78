import React, { useState } from 'react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';
import { Footer } from '@/components/sections/Footer';
import { Mail, MapPin, Phone, Send, Instagram } from 'lucide-react';

const P = {
  dark: '#191C0F', darkGreen: '#1a4a1e', midGreen: '#2d7a32',
  lime: '#f5e03a', yellow: '#f5e03a', cream: '#FCF8EE',
};

const info = [
  { icon: Mail,      label: 'Email',     value: 'info@festivalnatur.com' },
  { icon: MapPin,    label: 'Sede',      value: 'Kinder, Calle 59 #6-21, Chapinero, Bogotá' },
  { icon: Phone,     label: 'WhatsApp',  value: '+57 300 000 0000' },
  { icon: Instagram, label: 'Instagram', value: '@festivalnatur' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div className="min-h-screen overflow-x-hidden pb-16 md:pb-0" style={{ background: P.cream }}>
      <HeaderButtons />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6" style={{ background: P.darkGreen }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-bold"
            style={{ color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
            Hablemos
          </p>
          <h1 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none text-white mb-3">
            CONTACTO
          </h1>
          <p className="font-unbounded font-extralight text-xl sm:text-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Estamos listos para escucharte
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Info */}
          <div className="lg:col-span-2 space-y-0">
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-5 px-6 py-5 border-b"
                style={{ borderColor: 'rgba(26,74,30,0.12)' }}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: i % 2 === 0 ? P.lime : P.yellow }}>
                  <item.icon className="w-4 h-4" style={{ color: P.dark }} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold mb-0.5"
                    style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
                    {item.label}
                  </p>
                  <p className="text-sm" style={{ color: P.dark }}>{item.value}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 p-6" style={{ background: P.darkGreen }}>
              <h3 className="font-unbounded font-extralight text-lg text-white mb-2">Festival NATUR 2026</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                14 y 15 de agosto · Kinder, Chapinero, Bogotá.<br />
                El primer Festival Nacional de Turismo Sostenible de Colombia.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-80 text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: P.lime }}>
                  <Send className="w-7 h-7" style={{ color: P.dark }} />
                </div>
                <h2 className="font-unbounded font-extralight text-2xl mb-2" style={{ color: P.dark }}>
                  ¡Mensaje enviado!
                </h2>
                <p className="text-sm" style={{ color: 'rgba(25,28,15,0.55)' }}>
                  Te respondemos pronto a <strong>{form.email}</strong>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs tracking-[0.3em] uppercase mb-6 font-bold"
                  style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
                  Envíanos un mensaje
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field} className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest font-bold"
                        style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
                        {field === 'name' ? 'Nombre' : 'Email'}
                      </label>
                      <input name={field} type={field === 'email' ? 'email' : 'text'} required
                        value={form[field]} onChange={handleChange}
                        className="border px-4 py-3 text-sm focus:outline-none"
                        style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold"
                    style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
                    Asunto
                  </label>
                  <select name="subject" value={form.subject} onChange={handleChange} required
                    className="border px-4 py-3 text-sm focus:outline-none"
                    style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }}>
                    <option value="">Selecciona un asunto</option>
                    <option>Compra de entradas</option>
                    <option>Reserva de stand</option>
                    <option>Alianzas y patrocinios</option>
                    <option>Prensa y medios</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold"
                    style={{ color: P.midGreen, fontFamily: 'Unbounded, sans-serif' }}>
                    Mensaje
                  </label>
                  <textarea name="message" rows={6} required
                    value={form.message} onChange={handleChange} placeholder="Cuéntanos más..."
                    className="border px-4 py-3 text-sm focus:outline-none resize-none"
                    style={{ borderColor: 'rgba(26,74,30,0.2)', background: 'white', color: P.dark }} />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                  style={{ background: P.darkGreen, color: P.lime, fontFamily: 'Unbounded, sans-serif' }}>
                  <Send className="w-4 h-4" />
                  ENVIAR MENSAJE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
