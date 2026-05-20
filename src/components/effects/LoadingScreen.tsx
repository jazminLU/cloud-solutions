"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MoonLogo from "@/components/ui/MoonLogo";

/* ─── Typewriter config ──────────────────────────────── */
const LINES = [
  { text: "Bienvenido!",                           speed: 90  },
  { text: "Acá está la solución que buscabas.",    speed: 55  },
];

type Phase = "typing-0" | "typing-1" | "done" | "idle";

/* ─── Blinking cursor ────────────────────────────────── */
function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
      className="inline-block w-[2px] h-[1.1em] align-middle ml-[2px]"
      style={{ background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }}
    />
  );
}

/* ─── Main component ─────────────────────────────────── */
export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [texts, setTexts]   = useState(["", ""]);
  const [phase, setPhase]   = useState<Phase>("typing-0");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let delay = 0;

    // Brief intro pause
    delay = 350;

    // Type each line sequentially
    LINES.forEach((line, lineIdx) => {
      // Start cursor for this line
      timers.push(
        setTimeout(() =>
          setPhase(`typing-${lineIdx}` as Phase),
          delay,
        ),
      );

      // Type character by character
      for (let i = 1; i <= line.text.length; i++) {
        const slice = line.text.slice(0, i);
        timers.push(
          setTimeout(
            () =>
              setTexts((prev) => {
                const next = [...prev];
                next[lineIdx] = slice;
                return next;
              }),
            delay,
          ),
        );
        delay += line.speed;
      }

      // Pause between lines
      delay += lineIdx === 0 ? 380 : 0;
    });

    // Done — blink cursor on last line
    timers.push(setTimeout(() => setPhase("done"), delay));

    // Exit — parent unmounts us, AnimatePresence triggers exit
    delay += 1100;
    timers.push(setTimeout(onComplete, delay));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    /* ── Blur overlay ─────────────────────────────────── */
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{
        backdropFilter:       "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        background:           "rgba(5,5,8,0.72)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity:     0,
        filter:      "blur(6px)",
        scale:       1.015,
        transition: { duration: 0.75, ease: "easeInOut" },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ── Terminal card ─────────────────────────────── */}
      <motion.div
        className="w-full max-w-lg"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0,  scale: 1    }}
        exit={{
          opacity:     0,
          y:          -16,
          scale:       0.95,
          filter:      "blur(4px)",
          transition: { duration: 0.45, ease: "easeIn" },
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        style={{
          background:  "rgba(8, 8, 14, 0.94)",
          border:      "1px solid rgba(0,212,255,0.22)",
          borderRadius: "18px",
          boxShadow: [
            "0 0  0   1px rgba(0,212,255,0.08)",
            "0 0 60px     rgba(0,212,255,0.12)",
            "0 0 120px    rgba(124,58,237,0.08)",
            "inset 0 0 40px rgba(0,212,255,0.03)",
          ].join(", "),
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2.5 px-5 py-3.5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.025)", borderRadius: "18px 18px 0 0" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          <div className="flex-1 flex items-center justify-center gap-2.5">
            <MoonLogo size={16} />
            <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
              infra-moon — terminal
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-7 space-y-4 font-mono">

          {/* Line 1 */}
          <div className="flex items-start gap-3 text-sm sm:text-base">
            <span className="select-none mt-px" style={{ color: "#00d4ff" }}>›</span>
            <span className="text-white font-medium tracking-wide">
              {texts[0]}
              {phase === "typing-0" && <Cursor />}
            </span>
          </div>

          {/* Line 2 — only shown once line 1 is done */}
          <AnimatePresence>
            {phase !== "typing-0" && (
              <motion.div
                key="line2"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-3 text-sm sm:text-base"
              >
                <span className="select-none mt-px" style={{ color: "#7c3aed" }}>›</span>
                <span className="tracking-wide" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {texts[1]}
                  {(phase === "typing-1" || phase === "done") && <Cursor />}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Idle line after typing completes */}
          <AnimatePresence>
            {phase === "done" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex items-center gap-3 pt-1"
              >
                <span style={{ color: "rgba(0,212,255,0.4)" }}>›</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-[7px] h-[14px] align-middle"
                  style={{ background: "rgba(0,212,255,0.5)" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-px mx-5 mb-5 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.25), rgba(124,58,237,0.2), transparent)" }}
        />
      </motion.div>

      {/* Subtle vignette corners */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(5,5,8,0.4) 100%)"
      }} />
    </motion.div>
  );
}
