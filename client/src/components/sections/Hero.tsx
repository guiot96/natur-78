import posterImg from "@assets/WhatsApp_Image_2026-03-10_at_9.37.22_PM_1773257877040.jpeg";

export function Hero() {
  return (
    <header className="w-full overflow-hidden" style={{ background: "#191C0F" }}>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      {/* ── Poster full-bleed ── */}
      <div className="relative w-full pt-14">
        <img
          src={posterImg}
          alt="Festival NATUR 2026 — Primer Festival Nacional de Turismo Responsable y Sostenible"
          className="w-full h-auto block"
        />
        {/* Bottom gradient fade into CTA strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, #191C0F)" }}
        />
      </div>

      {/* ── Info strip ── */}
      <div id="main-content" className="w-full px-8 md:px-14 py-8 md:py-10" style={{ background: "#191C0F" }}>
        <p
          className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
          style={{ color: "#cad95e", fontFamily: "Unbounded, sans-serif" }}
        >
          Festival Nacional de Turismo Sostenible
        </p>
        <h1 className="font-gasoek text-[13vw] md:text-[6vw] uppercase leading-[0.88] text-white">
          NATUR<br />
          <span style={{ color: "#cad95e" }}>2026</span>
        </h1>
        <p className="text-white/45 text-sm mt-3 tracking-wide"
          style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
          14 y 15 de agosto · Kinder, Chapinero, Bogotá
        </p>
      </div>
    </header>
  );
}
