"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor, Server, TestTube, Cloud, Code2, GitBranch, Gauge, Activity,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const services = [
  {
    icon: Monitor,
    title: "Frontend Engineering",
    description: "Interfaces modernas y performantes con React, Next.js y Angular. Optimización de Core Web Vitals, accesibilidad y UX excepcional.",
    tags: ["React", "Next.js", "Angular", "TypeScript"],
    accent: "#00d4ff",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "APIs robustas, microservicios y arquitecturas event-driven. Diseño escalable con Node.js, Go o Python orientado a alta disponibilidad.",
    tags: ["Node.js", "Go", "REST", "gRPC"],
    accent: "#7c3aed",
  },
  {
    icon: TestTube,
    title: "QA Automation",
    description: "Suites de testing completas con Playwright y frameworks de performance. Cobertura end-to-end que asegura calidad en cada release.",
    tags: ["Playwright", "Cypress", "Jest", "k6"],
    accent: "#22c55e",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Arquitecturas cloud nativas en AWS, GCP y Azure. Gestión de infraestructura, seguridad, costos y escalabilidad enterprise.",
    tags: ["AWS", "GCP", "Azure", "EKS"],
    accent: "#f59e0b",
  },
  {
    icon: Code2,
    title: "Infrastructure as Code",
    description: "Infraestructura versionada, reproducible y automatizada con Terraform y Ansible. Eliminamos la configuración manual del stack.",
    tags: ["Terraform", "Ansible", "Pulumi", "CDK"],
    accent: "#00d4ff",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Pipelines de entrega continua con GitHub Actions y ArgoCD. Deploy seguro, rápido y auditable en cualquier entorno.",
    tags: ["GitHub Actions", "ArgoCD", "GitOps", "Helm"],
    accent: "#7c3aed",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description: "Load testing, stress testing y análisis de cuellos de botella. Garantizamos que tu sistema aguante cuando más lo necesitas.",
    tags: ["k6", "Gatling", "Locust", "JMeter"],
    accent: "#ef4444",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description: "Stacks completos de observabilidad con Grafana, Prometheus y OpenTelemetry. Visibilidad total de tus sistemas en tiempo real.",
    tags: ["Grafana", "Prometheus", "Loki", "Tempo"],
    accent: "#22c55e",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 sm:h-32 bg-gradient-to-b from-transparent via-[#00d4ff40] to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <SectionBadge>Servicios</SectionBadge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white leading-tight">
            Engineering de punta a punta
          </h2>
          <p className="mt-4 text-base sm:text-lg t-body max-w-2xl mx-auto">
            Desde el primer commit hasta producción. Cubrimos todo el ciclo de vida
            del software con estándares enterprise.
          </p>
        </motion.div>

        {/* Grid: 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card rounded-2xl p-5 group relative overflow-hidden cursor-default"
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: service.accent }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${service.accent}15`,
                    border: `1px solid ${service.accent}25`,
                  }}
                >
                  <Icon size={18} style={{ color: service.accent }} />
                </div>

                <h3 className="text-sm font-semibold t-heading mb-2">{service.title}</h3>
                <p className="text-xs t-body leading-relaxed mb-4">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                      style={{
                        color: service.accent,
                        background: `${service.accent}10`,
                        border: `1px solid ${service.accent}20`,
                      }}
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
