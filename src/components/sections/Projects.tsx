"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Cloud, Activity, Shield, ArrowUpRight } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const projects = [
  {
    icon: Cloud,
    category: "Cloud Architecture",
    title: "Migración Multi-Cloud Enterprise",
    description:
      "Migración de infraestructura monolítica a arquitectura cloud-native en AWS con Kubernetes. Zero downtime, reducción del 40% en costos operativos.",
    accent: "#00d4ff",
    metrics: [
      { label: "Uptime",    value: "99.99%" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Deploy Time",    value: "↓ 85%" },
    ],
    tags: ["AWS", "EKS", "Terraform", "ArgoCD"],
    diagram: [
      { label: "Load Balancer",  icon: "⚡", connects: true },
      { label: "API Gateway",    icon: "🔀", connects: true },
      { label: "Microservices",  icon: "📦", connects: true },
      { label: "RDS Cluster",    icon: "🐘", connects: false },
    ],
  },
  {
    icon: GitBranch,
    category: "CI/CD Pipeline",
    title: "Pipeline DevSecOps End-to-End",
    description:
      "Implementación de pipeline CI/CD con security scanning, testing automático y deploy canary. De commit a producción en menos de 4 minutos.",
    accent: "#7c3aed",
    metrics: [
      { label: "Deploy Time",  value: "< 4min" },
      { label: "Test Coverage", value: "96%" },
      { label: "Security Score", value: "A+" },
    ],
    tags: ["GitHub Actions", "Snyk", "SonarQube", "Helm"],
    diagram: [
      { label: "Push → CI",    icon: "⬆️", connects: true },
      { label: "Security Scan", icon: "🔒", connects: true },
      { label: "Test Suite",   icon: "🧪", connects: true },
      { label: "CD → Prod",    icon: "🚀", connects: false },
    ],
  },
  {
    icon: Activity,
    category: "Observability",
    title: "Stack de Monitoreo Full-Stack",
    description:
      "Observabilidad completa: métricas, logs, trazas distribuidas y alertas inteligentes. SLA garantizado con respuesta en < 30s.",
    accent: "#22c55e",
    metrics: [
      { label: "MTTR",      value: "< 30s" },
      { label: "Alertas",   value: "99% exactitud" },
      { label: "Dashboards", value: "45+" },
    ],
    tags: ["Grafana", "Prometheus", "Loki", "Tempo"],
    diagram: [
      { label: "Apps",          icon: "📱", connects: true },
      { label: "OpenTelemetry", icon: "📡", connects: true },
      { label: "Prometheus",    icon: "📊", connects: true },
      { label: "Grafana",       icon: "🖥️", connects: false },
    ],
  },
  {
    icon: Shield,
    category: "QA Automation",
    title: "Suite de Testing Enterprise",
    description:
      "Framework completo de QA automation con Playwright para E2E, k6 para performance y cobertura de APIs. 3000+ tests por PR.",
    accent: "#f59e0b",
    metrics: [
      { label: "Tests",    value: "3,200+" },
      { label: "Coverage", value: "98%" },
      { label: "Exec Time", value: "8 min" },
    ],
    tags: ["Playwright", "k6", "Jest", "Allure"],
    diagram: [
      { label: "E2E Tests", icon: "🎭", connects: true },
      { label: "API Tests", icon: "🔌", connects: true },
      { label: "Load Tests", icon: "📈", connects: true },
      { label: "Reports",   icon: "📋", connects: false },
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6" ref={ref}>
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 lg:pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <SectionBadge>Proyectos</SectionBadge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white">
            Casos de éxito
          </h2>
          <p className="mt-4 text-base sm:text-lg t-body max-w-2xl mx-auto">
            Soluciones enterprise reales, resultados medibles. Arquitectura sólida y
            métricas que importan.
          </p>
        </motion.div>

        {/* Cards: 1 col mobile → 2 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card rounded-2xl p-5 sm:p-6 group relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-5 group-hover:opacity-10 transition-opacity blur-2xl"
                  style={{ background: project.accent }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
                    >
                      <Icon size={16} style={{ color: project.accent }} />
                    </div>
                    <div>
                      <div
                        className="text-[10px] font-mono tracking-widest uppercase mb-0.5"
                        style={{ color: project.accent }}
                      >
                        {project.category}
                      </div>
                      <h3 className="text-sm font-semibold t-heading">{project.title}</h3>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="t-dim group-hover:text-[#00d4ff] transition-colors flex-shrink-0" />
                </div>

                <p className="text-xs t-body leading-relaxed mb-4 sm:mb-5">{project.description}</p>

                {/* Architecture diagram */}
                <div
                  className="rounded-xl p-3 sm:p-4 mb-4 sm:mb-5"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
                >
                  <div className="text-[11px] font-mono t-secondary mb-3 tracking-widest uppercase font-semibold">arquitectura</div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {project.diagram.map((node, ni) => (
                      <div key={ni} className="flex items-center gap-1">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-base leading-none">{node.icon}</span>
                          <span className="text-[10px] font-mono t-secondary whitespace-nowrap hidden sm:block font-medium">
                            {node.label}
                          </span>
                        </div>
                        {node.connects && (
                          <div className="w-3 sm:w-4 h-px mx-0.5 sm:mx-1" style={{ background: `${project.accent}40` }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                  {project.metrics.map((metric, mi) => (
                    <div
                      key={mi}
                      className="text-center p-2 rounded-lg"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <div className="text-xs sm:text-sm font-bold font-mono" style={{ color: project.accent }}>
                        {metric.value}
                      </div>
                      <div className="text-[11px] t-secondary mt-0.5 font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full font-mono t-secondary font-medium"
                      style={{ border: "1px solid var(--border-subtle)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
