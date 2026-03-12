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
      </div>
    </header>
  );
}
