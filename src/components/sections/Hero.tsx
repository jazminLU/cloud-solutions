"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap, MessageCircle } from "lucide-react";

const terminalLines = [
  { prefix: "$", text: "infra-moon deploy --env production", color: "#00d4ff" },
  { prefix: "✓", text: "Infrastructure provisioned (Terraform)", color: "#22c55e" },
  { prefix: "✓", text: "Containers deployed to Kubernetes",    color: "#22c55e" },
  { prefix: "✓", text: "CI/CD pipeline executed in 2m 14s",    color: "#22c55e" },
  { prefix: "✓", text: "Health checks passed (99.98% uptime)", color: "#22c55e" },
  { prefix: "→", text: "System operational",                   color: "#7c3aed" },
];

const stats = [
  { value: "99.98%", label: "Uptime SLA" },
  { value: "< 2min", label: "Deploy Time" },
  { value: "100%",   label: "Coverage" },
  { value: "∞",      label: "Escalabilidad" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, #00d4ff 0%, #7c3aed 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

        {/* ── Left: Content ─────────────────────────── */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[#00d4ff25] bg-[#00d4ff08] text-xs font-mono text-[#00d4ff] tracking-widest uppercase"
          >
            <Zap size={10} />
            Next-Gen Cloud Engineering
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6"
          >
            <span className="text-gradient-white">Infraestructura</span>
            <br />
            <span className="text-gradient-cyan">Escalable.</span>
            <br />
            <span className="opacity-80" style={{ color: "var(--text-heading)" }}>Software</span>{" "}
            <span className="text-gradient-violet">Confiable.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-lg mx-auto lg:mx-0 t-body"
          >
            Diseñamos, construimos y operamos sistemas cloud de alta disponibilidad.
            Desde CI/CD hasta Infrastructure as Code — engineering de próxima
            generación para empresas que no se permiten fallar.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 sm:mb-12"
          >
            <button
              onClick={() => handleScroll("#services")}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium cursor-pointer"
            >
              Ver Servicios
              <ArrowRight size={16} />
            </button>
            <motion.button
              onClick={() => handleScroll("#contact")}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(0,212,255,0.2))",
                border: "1px solid rgba(0,212,255,0.6)",
                color: "#ffffff",
                boxShadow: "0 0 18px rgba(0,212,255,0.35), 0 0 40px rgba(124,58,237,0.2), inset 0 0 18px rgba(0,212,255,0.06)",
              }}
              animate={{
                boxShadow: [
                  "0 0 18px rgba(0,212,255,0.35), 0 0 40px rgba(124,58,237,0.2), inset 0 0 18px rgba(0,212,255,0.06)",
                  "0 0 30px rgba(0,212,255,0.65), 0 0 60px rgba(124,58,237,0.35), inset 0 0 25px rgba(0,212,255,0.12)",
                  "0 0 18px rgba(0,212,255,0.35), 0 0 40px rgba(124,58,237,0.2), inset 0 0 18px rgba(0,212,255,0.06)",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(0,212,255,0.8), 0 0 80px rgba(124,58,237,0.5), inset 0 0 30px rgba(0,212,255,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatDelay: 0.6 }}
              />
              <MessageCircle size={15} />
              Contáctanos
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto lg:mx-0 items-end"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-bold text-gradient-cyan leading-none"
                  style={{
                    fontSize: s.value === "∞"
                      ? "clamp(1.4rem, 3.5vw, 1.65rem)"
                      : "clamp(0.95rem, 2.5vw, 1.25rem)",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-[11px] sm:text-xs mt-1 tracking-wide leading-tight font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Terminal (hidden on small mobile) ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden sm:block"
        >
          {/* Glow */}
          <div
            className="absolute -inset-4 rounded-2xl opacity-30"
            style={{
              background: "radial-gradient(ellipse at center, #00d4ff20 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Terminal window */}
          <div className="relative glass-card rounded-2xl overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#ffffff08] bg-[#ffffff04]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] font-mono t-dim">infra-moon — terminal</span>
              </div>
              <Terminal size={12} className="t-dim" />
            </div>

            {/* Body */}
            <div className="p-5 font-mono text-sm space-y-2 min-h-[260px]">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.18 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-xs mt-0.5 flex-shrink-0 font-bold" style={{ color: line.color }}>
                    {line.prefix}
                  </span>
                  <span className="text-xs leading-relaxed t-body">{line.text}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex items-center gap-2 pt-2"
              >
                <span className="text-[#00d4ff] text-xs">$</span>
                <span className="text-xs t-dim cursor-blink">_</span>
              </motion.div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3 border border-[#22c55e20]"
          >
            <div className="text-[10px] t-dim mb-1 font-mono">PIPELINE</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-xs font-semibold text-[#22c55e]">All systems go</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="absolute -top-4 -right-4 glass-card rounded-xl p-3 border border-[#7c3aed25]"
          >
            <div className="text-[10px] t-dim mb-1 font-mono">NODES</div>
            <div className="text-xs font-bold text-gradient-violet">48 pods running</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#00d4ff40] to-transparent"
        />
      </motion.div>
    </section>
  );
}
