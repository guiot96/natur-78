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

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 px-8 md:px-14 pt-14 pb-10 border-b border-black/10">
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
            style={{ color: "#2d7a32", fontFamily: "Unbounded, sans-serif" }}>
            Aliados &amp; patrocinadores
          </p>
          <h2 className="font-gasoek text-5xl sm:text-6xl md:text-7xl uppercase leading-none" style={{ color: "#191C0F" }}>
            NUESTROS<br />
            <span style={{ color: "#1a4a1e" }}>ALIADOS</span>
          </h2>
        </div>
        <p className="text-sm max-w-xs leading-relaxed text-right"
          style={{ color: "rgba(25,28,15,0.45)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}>
          Organizaciones comprometidas con el turismo sostenible y la conservación en Colombia
        </p>
      </div>

      {/* Logo grid — brutalist row, no cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 border-b border-black/10"
        style={{ borderLeft: "1px solid rgba(25,28,15,0.08)" }}>
        {partnerLogos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-8 md:p-10 border-r border-b border-black/10 hover:bg-black/5 transition-colors cursor-pointer"
          >
            <img
              src={logo}
              alt={`Aliado ${i + 1}`}
              className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
