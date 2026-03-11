const partnerLogos = [
  "/lovable-uploads/04700395-8fa8-4aaa-8e0f-2499715a6016.png",
  "/lovable-uploads/82486c47-640c-497b-a6e3-7e218da4868a.png",
  "/lovable-uploads/a966ce20-3e42-4f79-bb18-32bdb9aef310.png",
  "/lovable-uploads/029db5e8-a1fb-4c6c-ab9f-a6c2cefaa99a.png",
  "/lovable-uploads/88f36f50-dff1-4c0c-a909-e6e073b6b80e.png",
  "/lovable-uploads/fbe328a3-9693-4e98-aba3-6915b86a23b4.png",
  "/lovable-uploads/c42792d2-c891-4c5f-9e17-5e10c02dd85c.png",
  "/lovable-uploads/b5b37f28-840d-4fcf-97c7-79446d8d7767.png",
  "/lovable-uploads/5fa2b81d-c76e-4674-8146-eb35c5acd256.png",
];

export function Partners() {
  return (
    <section className="w-full" style={{ background: "#FCF8EE" }}>

      {/* ── Full-width label strip ── */}
      <div
        className="flex items-center justify-between px-8 md:px-14 py-5 border-b border-black/10"
        style={{ background: "#FCF8EE" }}
      >
        <span
          className="font-gasoek text-[6vw] md:text-[3vw] uppercase leading-none"
          style={{ color: "#191C0F" }}
        >
          NUESTROS ALIADOS
        </span>
        <span
          className="text-[9px] uppercase tracking-widest hidden md:block"
          style={{ color: "rgba(25,28,15,0.3)", fontFamily: "Unbounded, sans-serif" }}
        >
          Turismo sostenible · Colombia
        </span>
      </div>

      {/* ── Logo strip — no rounded cards, pure brutalist row ── */}
      <div className="flex flex-wrap border-b border-black/10"
        style={{ borderLeft: "1px solid rgba(25,28,15,0.08)" }}>
        {partnerLogos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center border-r border-b border-black/8 hover:bg-black/4 transition-colors cursor-pointer"
            style={{
              width: "calc(100% / 3)",
              minWidth: "120px",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            <img
              src={logo}
              alt={`Aliado ${i + 1}`}
              className="object-contain opacity-60 hover:opacity-100 transition-opacity"
              style={{ height: "clamp(24px, 3vw, 40px)", maxWidth: "120px" }}
            />
          </div>
        ))}

        {/* Fill empty cell if odd count */}
        <div
          className="flex-1 border-r border-b border-black/8 flex items-center justify-center"
          style={{ minWidth: "120px", padding: "clamp(1.5rem, 3vw, 2.5rem)", background: "#1a4a1e" }}
        >
          <span
            className="text-[9px] uppercase tracking-widest text-center"
            style={{ color: "rgba(202,217,94,0.4)", fontFamily: "Unbounded, sans-serif" }}
          >
            Tu marca<br />aquí
          </span>
        </div>
      </div>

    </section>
  );
}
