import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Ticket } from "lucide-react";

const FESTIVAL_DATE = new Date("2026-08-14T10:00:00-05:00");

function getTimeLeft() {
  const now = new Date();
  const diff = FESTIVAL_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, "0")}</>;
}

export function Countdown() {
  const [t, setT] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Días",     value: t.days    },
    { label: "Horas",    value: t.hours   },
    { label: "Minutos",  value: t.minutes },
    { label: "Segundos", value: t.seconds },
  ];

  return (
    <section className="w-full" style={{ background: "#191C0F" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/8">

        {/* ── Left: copy ── */}
        <div className="flex flex-col justify-between px-8 md:px-14 py-14 md:py-18 border-b md:border-b-0 border-r-0 md:border-r border-white/8">
          <div>
            <span
              className="inline-block text-[9px] tracking-[0.35em] uppercase font-bold px-2.5 py-[3px] mb-6"
              style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
            >
              Cuenta regresiva
            </span>
            <h2 className="font-gasoek text-[10vw] md:text-[4.5vw] uppercase leading-[0.88] text-white mb-4">
              EL FESTIVAL<br />
              <span style={{ color: "#cad95e" }}>SE ACERCA</span>
            </h2>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
            >
              14 y 15 de agosto de 2026<br />
              Kinder · Calle 59 #6-21 · Chapinero · Bogotá
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <Link to="/tickets">
              <button
                className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest px-8 py-4 hover:opacity-85 transition-opacity"
                style={{ background: "#cad95e", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
              >
                <Ticket className="w-3.5 h-3.5" />
                Comprar entradas ya
              </button>
            </Link>
          </div>
        </div>

        {/* ── Right: clock ── */}
        <div className="grid grid-cols-2 divide-x divide-y divide-white/8">
          {units.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-10 px-4"
            >
              <span
                className="font-gasoek text-[14vw] md:text-[6vw] leading-none tabular-nums"
                style={{ color: "#cad95e" }}
              >
                <Pad n={value} />
              </span>
              <span
                className="text-[9px] uppercase tracking-[0.3em] mt-2"
                style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Unbounded, sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
