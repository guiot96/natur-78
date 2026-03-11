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

      {/* ── Header strip ── */}
      <div className="flex items-center justify-between px-8 md:px-14 py-5 border-b border-black/10">
        <span className="font-unbounded font-bold uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(1.1rem, 3.8vw, 2.4rem)", color: "#191C0F" }}>
          NUESTROS ALIADOS
        </span>
        <span className="text-[9px] uppercase tracking-widest hidden md:block"
          style={{ color: "rgba(25,28,15,0.3)", fontFamily: "Unbounded, sans-serif" }}>
          Turismo sostenible · Colombia
        </span>
      </div>

      {/* ── Logo grid: 2-col mobile / 3-col md+ ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 border-b border-black/10"
        style={{ borderLeft: "1px solid rgba(25,28,15,0.08)" }}>
        {partnerLogos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center border-r border-b border-black/8 hover:bg-black/4 transition-colors"
            style={{ padding: "clamp(1.2rem, 3.5vw, 2.5rem)" }}
          >
            <img
              src={logo}
              alt={`Aliado ${i + 1}`}
              className="object-contain opacity-55 hover:opacity-90 transition-opacity"
              style={{ height: "clamp(22px, 3.5vw, 42px)", maxWidth: "100%" }}
            />
          </div>
        ))}

        {/* "Tu marca aquí" filler */}
        <div
          className="flex items-center justify-center border-r border-b border-black/8"
          style={{ padding: "clamp(1.2rem, 3.5vw, 2.5rem)", background: "#1a4a1e" }}
        >
          <span className="text-[9px] uppercase tracking-widest text-center"
            style={{ color: "rgba(202,217,94,0.45)", fontFamily: "Unbounded, sans-serif" }}>
            Tu marca<br />aquí
          </span>
        </div>
      </div>

    </section>
  );
}
