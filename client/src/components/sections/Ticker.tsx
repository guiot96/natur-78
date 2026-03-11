const WORDS = [
  "FESTIVAL NATUR 2026",
  "TURISMO SOSTENIBLE",
  "14 Y 15 DE AGOSTO",
  "KINDER · BOGOTÁ",
  "COLOMBIA",
  "PRIMERA EDICIÓN",
];

const text = [...WORDS, ...WORDS, ...WORDS].join(" · ");

export function Ticker({ bg = "#1a4a1e", color = "#cad95e", reverse = false }: {
  bg?: string;
  color?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className="w-full overflow-hidden py-3 select-none"
      style={{ background: bg }}
    >
      <div
        className={`flex whitespace-nowrap ${reverse ? "animate-ticker-reverse" : "animate-ticker"}`}
        style={{ color, fontFamily: "Unbounded, sans-serif" }}
      >
        {[0, 1].map((i) => (
          <span key={i} className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] pr-16">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
