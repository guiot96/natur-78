import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  return (
    <section className="w-full bg-[#191C0F] py-20 px-6" id="contact">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p
            className="text-[#cad95e] text-xs tracking-[0.3em] uppercase mb-3 font-bold"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            Escríbenos
          </p>
          <h2 className="font-gasoek text-4xl sm:text-5xl text-white uppercase leading-tight">
            CONTACTO
          </h2>
        </div>

        {sent ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-gasoek text-2xl text-[#cad95e] uppercase mb-2">¡Mensaje enviado!</h3>
            <p className="text-white/60">Te responderemos pronto a través de info@festivalnatur.com</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">Nombre *</label>
                <input
                  required
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#cad95e]/50 transition-colors placeholder-white/20"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#cad95e]/50 transition-colors placeholder-white/20"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">Teléfono</label>
              <input
                type="tel"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#cad95e]/50 transition-colors placeholder-white/20"
                placeholder="+57 300 000 0000"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">Mensaje *</label>
              <textarea
                required
                rows={5}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#cad95e]/50 transition-colors placeholder-white/20 resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <p className="text-white/30 text-xs">
                Responderemos a <span className="text-[#cad95e]/60">info@festivalnatur.com</span>
              </p>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#cad95e] text-[#191C0F] font-gasoek text-sm uppercase tracking-wider px-10 py-3.5 hover:bg-[#b8c94d] transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {loading ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
