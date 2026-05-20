"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import TechIcon from "@/components/ui/TechIcon";

const techCategories = [
  {
    label: "Frontend",
    color: "#00d4ff",
    techs: ["React", "Next.js", "Angular", "TypeScript", "Tailwind"],
  },
  {
    label: "Backend",
    color: "#7c3aed",
    techs: ["Node.js", "Go", "Python", "PostgreSQL", "Redis"],
  },
  {
    label: "Cloud & Infra",
    color: "#f59e0b",
    techs: ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible"],
  },
  {
    label: "CI/CD & QA",
    color: "#22c55e",
    techs: ["GitHub Actions", "ArgoCD", "Playwright", "k6", "Grafana"],
  },
];

const allTechs = [
  "React", "Next.js", "Angular", "TypeScript", "Node.js", "Go", "Python",
  "PostgreSQL", "Redis", "AWS", "GCP", "Docker", "Kubernetes", "Terraform",
  "Ansible", "GitHub Actions", "ArgoCD", "Playwright", "Cypress", "k6",
  "Grafana", "Prometheus", "Loki", "Helm", "Pulumi", "Jest", "Vitest",
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6" ref={ref}>
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 lg:pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <SectionBadge>Stack Tecnológico</SectionBadge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white">
            Herramientas enterprise
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto t-body">
            Las mejores herramientas del ecosistema cloud-native, battle-tested en producción.
          </p>
        </motion.div>

        {/* Category grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-4 sm:p-5"
            >
              <div
                className="text-xs font-mono font-bold tracking-widest uppercase mb-4"
                style={{ color: cat.color }}
              >
                {cat.label}
              </div>
              <div className="space-y-1">
                {cat.techs.map((tech, ti) => (
                  <motion.div
                    key={ti}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.1 + ti * 0.05 + 0.3 }}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg transition-colors group cursor-default"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {/* Brand SVG icon */}
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <TechIcon name={tech} size={18} />
                    </span>
                    <span className="text-sm t-body transition-colors group-hover:text-white">
                      {tech}
                    </span>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: cat.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── NEON MARQUEE ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow halo behind container */}
            <div
              className="absolute -inset-2 rounded-[18px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,212,255,0.18) 0%, rgba(124,58,237,0.08) 50%, transparent 80%)",
                filter: "blur(12px)",
              }}
            />

            {/* Neon container */}
            <div className="neon-marquee-container relative py-3 sm:py-4">
              {/* Left fade */}
              <div
                className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }}
              />
              {/* Right fade */}
              <div
                className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }}
              />

              <motion.div
                animate={{ x: [0, -54 * allTechs.length] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="flex gap-2 sm:gap-3 whitespace-nowrap px-4"
              >
                {[...allTechs, ...allTechs, ...allTechs].map((tech, i) => (
                  <span
                    key={i}
                    className="neon-chip inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-medium select-none"
                  >
                    <span className="flex-shrink-0">
                      <TechIcon name={tech} size={13} />
                    </span>
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
