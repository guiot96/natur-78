import { useState, useEffect } from "react";

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

function pad(n: number) { return String(n).padStart(2, "0"); }

export function Countdown() {
  const [t, setT] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="w-full border-t border-b"
      style={{ background: "#191C0F", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">

        <span
          className="text-[9px] uppercase tracking-[0.3em] font-bold"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Unbounded, sans-serif" }}
        >
          Festival NATUR · 14 ago 2026
        </span>

        <div className="flex items-center gap-3">
          {[
            { v: t.days,    l: "d" },
            { v: t.hours,   l: "h" },
            { v: t.minutes, l: "m" },
            { v: t.seconds, l: "s" },
          ].map(({ v, l }, i) => (
            <span key={l} className="flex items-baseline gap-0.5">
              {i > 0 && (
                <span
                  className="text-xs mr-2"
                  style={{ color: "rgba(255,255,255,0.12)", fontFamily: "Unbounded, sans-serif" }}
                >
                  ·
                </span>
              )}
              <span
                className="text-sm font-bold tabular-nums"
                style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
              >
                {pad(v)}
              </span>
              <span
                className="text-[9px] uppercase"
                style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Unbounded, sans-serif" }}
              >
                {l}
              </span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
