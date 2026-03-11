import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Feather } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Naturaleza",
    desc: "Destinos que respiran: ecosistemas, paisajes y territorios que demuestran que Colombia es el país más biodiverso del mundo.",
    accent: "#f5e03a",
    bg: "#1a4a1e",
  },
  {
    num: "02",
    title: "Comunidades",
    desc: "Historias de personas y pueblos que han hecho del turismo una herramienta de vida, cultura y preservación del territorio.",
    accent: "#f5e03a",
    bg: "#191C0F",
  },
  {
    num: "03",
    title: "Futuro",
    desc: "Proyectos, modelos y visiones que están redefiniendo la forma en que Colombia se muestra al mundo — desde adentro.",
    accent: "#f5e03a",
    bg: "#2d7a32",
  },
];

const CYCLE_MS = 4000;
const TICK_MS = 50;

export function HistoriasPreview() {
  const [active, setActive] = useState(0);
  const [progressDisplay, setProgressDisplay] = useState(0);
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  const tick = useCallback(() => {
    if (!mountedRef.current) return;
    const elapsed = Date.now() - startTimeRef.current;
    const p = Math.min(elapsed / CYCLE_MS, 1);
    setProgressDisplay(p);
    if (p >= 1) {
      startTimeRef.current = Date.now();
      setActive((a) => (a + 1) % pillars.length);
      setProgressDisplay(0);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    startTimeRef.current = Date.now();
    setProgressDisplay(0);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    startTimeRef.current = Date.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      mountedRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const current = pillars[active];
  const inactiveIndices = pillars
    .map((_, i) => i)
    .filter((i) => i !== active);

  return (
    <section className="w-full" style={{ background: "#191C0F" }}>

      {/* ── Header ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/8">

        {/* Left: heading */}
        <div className="px-8 md:px-14 pt-16 pb-14 md:pt-20 md:pb-16 border-b md:border-b-0 md:border-r border-white/8">
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-bold mb-5"
            style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
          >
            Blog · Editorial
          </p>
          <h2
            className="font-unbounded font-bold uppercase leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)" }}
          >
            HISTORIAS<br />
            <span style={{ color: "#f5e03a" }}>NATUR</span>
          </h2>
        </div>

        {/* Right: intro */}
        <div className="flex flex-col justify-between px-8 md:px-12 py-14 md:py-16 gap-8">
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
              style={{ background: "rgba(202,217,94,0.12)", border: "1px solid rgba(202,217,94,0.25)" }}
            >
              <Feather className="w-3.5 h-3.5" style={{ color: "#f5e03a" }} />
            </div>
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "#f5e03a", fontFamily: "Unbounded, sans-serif" }}
              >
                Próximamente · Agosto 2026
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
              >
                Historias NATUR será el espacio editorial del festival — crónicas, reportajes y entrevistas sobre el turismo sostenible colombiano. Voces desde el territorio, proyectos que transforman y destinos que inspiran.
              </p>
            </div>
          </div>

          <div>
            <div className="w-full h-px mb-4" style={{ background: "rgba(255,255,255,0.07)" }} />
            <p
              className="text-[9px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Unbounded, sans-serif" }}
            >
              Las primeras historias se publican en agosto 2026 — junto al festival.
            </p>
          </div>
        </div>
      </div>

      {/* ── Animated thematic pillars ── */}
      <div className="border-b border-white/8">
        <div className="flex flex-col md:flex-row">

          {/* Featured card */}
          <div className="relative flex-1 min-h-[56vw] md:min-h-[34vw] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                data-testid="featured-card"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 md:p-12"
                style={{ background: current.bg }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2 py-[2px]"
                    style={{
                      background: `${current.accent}18`,
                      color: current.accent,
                      border: `1px solid ${current.accent}30`,
                      fontFamily: "Unbounded, sans-serif",
                    }}
                  >
                    Eje temático
                  </span>
                  <span
                    className="text-5xl md:text-7xl leading-none opacity-10 text-white tabular-nums"
                    style={{ fontFamily: "monospace" }}
                  >
                    {current.num}
                  </span>
                </div>

                <div className="py-6">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.35 }}
                    className="font-unbounded font-bold uppercase leading-[0.9] tracking-tight"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "rgba(255,255,255,0.9)" }}
                  >
                    {current.title}
                  </motion.h3>
                </div>

                <div>
                  <div className="w-full h-px mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />
                  <motion.p
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.35 }}
                    className="text-xs md:text-sm leading-relaxed max-w-lg"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
                  >
                    {current.desc}
                  </motion.p>
                </div>

                {/* Progress bar */}
                <div
                  role="progressbar"
                  aria-valuenow={Math.round(progressDisplay * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="h-full"
                    style={{ background: current.accent, width: `${progressDisplay * 100}%`, transition: "width 50ms linear" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Compact selector tabs — vertical on desktop, horizontal pills on mobile */}
          <div className="flex flex-row md:flex-col md:w-[260px] lg:w-[300px] border-t md:border-t-0 md:border-l border-white/8">
            {inactiveIndices.map((idx) => {
              const p = pillars[idx];
              return (
                <button
                  key={p.num}
                  data-testid={`pillar-tab-${p.title.toLowerCase()}`}
                  onClick={() => goTo(idx)}
                  className="flex-1 md:flex-none flex items-center gap-4 px-5 py-5 md:px-7 md:py-8 text-left transition-colors duration-200 hover:bg-white/[0.04] group"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="text-lg md:text-2xl tabular-nums opacity-20 group-hover:opacity-40 transition-opacity text-white"
                    style={{ fontFamily: "monospace" }}
                  >
                    {p.num}
                  </span>
                  <div className="min-w-0">
                    <span
                      className="block text-xs md:text-sm font-bold uppercase tracking-wide text-white/60 group-hover:text-white/80 transition-colors"
                      style={{ fontFamily: "Unbounded, sans-serif" }}
                    >
                      {p.title}
                    </span>
                    <span
                      className="hidden md:block text-[10px] leading-relaxed mt-1 text-white/25 group-hover:text-white/35 transition-colors line-clamp-2"
                      style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
                    >
                      {p.desc}
                    </span>
                  </div>
                  <div
                    className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: p.accent }}
                  />
                </button>
              );
            })}

            {/* Dot indicators */}
            <div className="hidden md:flex items-center justify-center gap-2 py-4 px-7">
              {pillars.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === active ? "#f5e03a" : "rgba(255,255,255,0.15)",
                    transform: i === active ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 md:px-14 py-8"
        style={{ background: "rgba(202,217,94,0.04)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
        >
          Sé el primero en leer — las historias llegan con el festival.
        </p>
        <Link to="/historias">
          <button
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-7 py-3.5 hover:opacity-80 transition-opacity whitespace-nowrap"
            style={{ background: "#f5e03a", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
          >
            <ArrowRight className="w-3 h-3" />
            Saber más
          </button>
        </Link>
      </div>

    </section>
  );
}
