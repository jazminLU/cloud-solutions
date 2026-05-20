"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search, LayoutTemplate, Code2, TestTube, Rocket, Eye, RefreshCw,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    step: "01", icon: Search,        title: "Discovery",
    description: "Análisis profundo del contexto, requisitos y restricciones. Definimos KPIs, arquitectura target y plan de ejecución con el equipo cliente.",
    duration: "1-2 semanas", color: "#00d4ff",
  },
  {
    step: "02", icon: LayoutTemplate, title: "Arquitectura",
    description: "Diseño de la solución: diagramas, ADRs, selección de stack y non-functional requirements. Revisión con stakeholders.",
    duration: "1 semana", color: "#7c3aed",
  },
  {
    step: "03", icon: Code2,          title: "Desarrollo",
    description: "Sprints iterativos con trunk-based development, code reviews y pair programming. Código limpio, documentado y testeado desde el día uno.",
    duration: "Iterativo", color: "#3b82f6",
  },
  {
    step: "04", icon: TestTube,       title: "QA Automation",
    description: "Testing continuo en cada PR: E2E, integración, performance y security. Sin merge sin cobertura verificada.",
    duration: "Continuo", color: "#22c55e",
  },
  {
    step: "05", icon: Rocket,         title: "Deploy",
    description: "Deploy automatizado via GitOps con estrategias canary o blue/green. Rollback automático si los health checks fallan.",
    duration: "< 10 min", color: "#f59e0b",
  },
  {
    step: "06", icon: Eye,            title: "Monitoreo",
    description: "Observabilidad completa desde el día uno: métricas, logs, trazas y alertas. SLOs definidos y rastreados en tiempo real.",
    duration: "24/7", color: "#ef4444",
  },
  {
    step: "07", icon: RefreshCw,      title: "Mejora Continua",
    description: "Retrospectivas, análisis de métricas y optimización constante. El sistema mejora con cada ciclo — performance, costos y confiabilidad.",
    duration: "Permanente", color: "#a855f7",
  },
];

export default function Workflow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workflow" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6" ref={ref}>
      <div className="section-divider mb-0" />

      <div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 lg:pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <SectionBadge>Workflow</SectionBadge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-base sm:text-lg t-body max-w-xl mx-auto">
            Un proceso probado, iterativo y orientado a resultados medibles.
            Transparencia total en cada fase.
          </p>
        </motion.div>

        {/* ── Mobile: vertical list ─────────────────── */}
        <div className="block lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass-card rounded-2xl p-4 flex gap-4 items-start"
              >
                {/* Left: step dot + line */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{ borderColor: step.color, background: "#050508", boxShadow: `0 0 10px ${step.color}40` }}
                  >
                    <Icon size={13} style={{ color: step.color }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[16px]" style={{ background: `${step.color}30` }} />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <div>
                      <span className="text-[10px] font-mono" style={{ color: step.color }}>
                        FASE {step.step}
                      </span>
                      <h3 className="text-sm font-semibold t-heading">{step.title}</h3>
                    </div>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                      style={{ color: step.color, background: `${step.color}10`, border: `1px solid ${step.color}20` }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs t-body leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Desktop: zigzag timeline ──────────────── */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff20] via-[#7c3aed20] to-transparent" />
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start ${isRight ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-[calc(50%-2.5rem)] ${isRight ? "mr-auto pr-12" : "ml-auto pl-12"}`}>
                    <div className="glass-card rounded-2xl p-5 group relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                        style={{ background: `radial-gradient(ellipse at top left, ${step.color}08, transparent 60%)` }}
                      />
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${step.color}15`, border: `1px solid ${step.color}25` }}
                        >
                          <Icon size={15} style={{ color: step.color }} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-widest" style={{ color: step.color }}>
                            FASE {step.step}
                          </span>
                          <h3 className="text-sm font-semibold t-heading">{step.title}</h3>
                        </div>
                        <span
                          className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full"
                          style={{ color: step.color, background: `${step.color}10`, border: `1px solid ${step.color}20` }}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs t-body leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center z-10"
                    style={{ borderColor: step.color, background: "var(--bg-base)", boxShadow: `0 0 12px ${step.color}50` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
