import { Link } from "wouter";
import { Globe, Award, Radio, Leaf, TrendingUp, Zap, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Globe, text: "Acceso a 50+ experiencias sostenibles en toda Colombia" },
  { icon: Award, text: "Conecta con comunidades, emprendedores y artistas locales" },
  { icon: Leaf, text: "Sé parte del primer movimiento de turismo regenerativo" },
];

export function Benefits() {
  return (
    <section className="w-full" style={{ background: "#1a4a1e" }}>

      <div className="border-b" style={{ borderColor: "rgba(245,224,58,0.10)" }}>
        <div className="flex items-center">
          <div
            className="hidden md:flex items-center justify-center flex-shrink-0 px-4 self-stretch border-r"
            style={{
              background: "#f5e03a",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              borderColor: "rgba(245,224,58,0.10)",
            }}
          >
            <span
              className="text-[8px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
            >
              Beneficios
            </span>
          </div>

          <div className="flex-1 px-8 md:px-14 py-10 md:py-12">
            <h2
              className="font-unbounded font-bold uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.1rem, 3.2vw, 3.2rem)", color: "#f5e03a" }}
            >
              BENEFICIOS DE TUS{" "}
              <span style={{ WebkitTextStroke: "1.5px #f5e03a", color: "transparent" }}>
                ENTRADAS
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {benefits.map((b, idx) => {
          const Icon = b.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-5 px-8 md:px-10 py-8 transition-colors duration-200"
              style={{
                borderBottom: "1px solid rgba(245,224,58,0.08)",
                borderRight: "1px solid rgba(245,224,58,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245,224,58,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ background: "#f5e03a" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#191C0F" }} />
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#FCF8EE", fontFamily: "Unbounded, sans-serif", fontWeight: 300 }}
              >
                {b.text}
              </p>
            </div>
          );
        })}
      </div>

      <div
        className="px-8 md:px-14 py-8 border-t"
        style={{ borderColor: "rgba(245,224,58,0.10)" }}
      >
        <p
          className="text-sm md:text-base leading-relaxed max-w-3xl"
          style={{ color: "rgba(245,224,58,0.55)", fontFamily: "Unbounded, sans-serif", fontWeight: 200 }}
        >
          El Festival NATUR es el punto de encuentro entre la sostenibilidad, el
          turismo y la innovación. Aquí convergen viajeros, empresas y destinos
          que creen en el turismo como fuerza transformadora.
        </p>
      </div>

      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-8 md:px-14 py-7 border-t"
        style={{ borderColor: "rgba(245,224,58,0.10)" }}
      >
        <Link to="/portal-empresas">
          <button
            className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest px-7 py-3.5 hover:brightness-110 transition-all"
            style={{ background: "#f5e03a", color: "#191C0F", fontFamily: "Unbounded, sans-serif" }}
          >
            <ArrowRight className="w-3 h-3" />
            Reserva tu Stand
          </button>
        </Link>
        <span
          className="text-[9px] uppercase tracking-[0.25em]"
          style={{ color: "rgba(252,248,238,0.20)", fontFamily: "Unbounded, sans-serif" }}
        >
          6 razones · Cupos limitados
        </span>
      </div>

    </section>
  );
}
