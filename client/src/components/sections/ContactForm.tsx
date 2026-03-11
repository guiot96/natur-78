import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="w-full" id="contact" style={{ background: "#191C0F" }}>

      {/* ── Giant heading — Sound Ethics style ── */}
      <div className="overflow-hidden border-b border-white/8">
        <h2
          className="font-gasoek uppercase leading-[0.82] px-8 md:px-14 pt-12 pb-10 text-white"
          style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)", letterSpacing: "-0.02em" }}
        >
          HABLE-<br />MOS
        </h2>
      </div>

      {sent ? (
        /* ── Success state ── */
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/8">
          <div className="flex flex-col justify-center px-8 md:px-14 py-20">
            <span
              className="inline-block text-[9px] tracking-[0.32em] uppercase font-bold px-2.5 py-[3px] mb-6"
              style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
            >
              Enviado
            </span>
            <p className="font-gasoek text-4xl md:text-5xl uppercase leading-tight text-white mb-4">
              ¡Mensaje<br />recibido!
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
              Te responderemos pronto a través de<br />
              <span style={{ color: "#cad95e" }}>info@festivalnatur.com</span>
            </p>
          </div>
          <div className="hidden md:block" style={{ background: "#1a4a1e" }} />
        </div>
      ) : (
        /* ── Form layout: 2-col editorial ── */
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left col: info */}
            <div
              className="flex flex-col justify-between px-8 md:px-14 py-12 border-b md:border-b-0 border-r-0 md:border-r border-white/8"
              style={{ background: "#1a4a1e" }}
            >
              <div>
                <p
                  className="text-[9px] uppercase tracking-[0.35em] font-bold mb-5"
                  style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
                >
                  Escríbenos
                </p>
                <p className="font-gasoek text-3xl md:text-4xl uppercase leading-tight text-white mb-4">
                  ¿Tienes preguntas<br />sobre el festival?
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.42)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
                >
                  Cuéntanos sobre tu interés — estands, entradas, prensa, alianzas o cualquier consulta.
                </p>
              </div>
              <div className="mt-8 md:mt-0 space-y-2">
                <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
                <p className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Unbounded, sans-serif" }}>
                  info@festivalnatur.com
                </p>
                <p className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Unbounded, sans-serif" }}>
                  Bogotá, Colombia · 2026
                </p>
              </div>
            </div>

            {/* Right col: fields */}
            <div className="flex flex-col gap-0 divide-y divide-white/8">
              {/* Name + email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
                <div className="flex flex-col">
                  <label className="text-[8px] uppercase tracking-widest px-8 pt-6 pb-1"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Unbounded, sans-serif" }}>
                    Nombre *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full bg-transparent text-white text-sm px-8 pb-6 pt-1 focus:outline-none placeholder-white/15"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[8px] uppercase tracking-widest px-8 pt-6 pb-1"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Unbounded, sans-serif" }}>
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-white text-sm px-8 pb-6 pt-1 focus:outline-none placeholder-white/15"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[8px] uppercase tracking-widest px-8 pt-6 pb-1"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Unbounded, sans-serif" }}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full bg-transparent text-white text-sm px-8 pb-6 pt-1 focus:outline-none placeholder-white/15"
                  placeholder="+57 300 000 0000"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col flex-1">
                <label className="text-[8px] uppercase tracking-widest px-8 pt-6 pb-1"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Unbounded, sans-serif" }}>
                  Mensaje *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full bg-transparent text-white text-sm px-8 pb-6 pt-1 focus:outline-none placeholder-white/15 resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              {/* Submit strip */}
              <div className="flex items-center justify-between px-8 py-5">
                <p className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Unbounded, sans-serif" }}>
                  Respuesta en 48h
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest px-7 py-3.5 hover:opacity-85 transition-opacity disabled:opacity-40"
                  style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  {loading ? "Enviando…" : "Enviar"}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

    </section>
  );
}
