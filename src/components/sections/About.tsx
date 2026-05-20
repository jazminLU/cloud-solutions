"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Globe, Award } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import MoonLogo from "@/components/ui/MoonLogo";

const values = [
  {
    icon: Shield, title: "Confiabilidad primero",
    description: "Diseñamos sistemas que fallan con gracia. SLOs rigurosos, redundancia y playbooks de incidentes son non-negociable.",
    color: "#00d4ff",
  },
  {
    icon: Zap, title: "Automatización total",
    description: "Si algo se hace más de dos veces, se automatiza. Desde provisioning hasta testing — eliminamos la fricción operativa.",
    color: "#7c3aed",
  },
  {
    icon: Globe, title: "Cloud-native by design",
    description: "Arquitecturas diseñadas para la nube desde el inicio. Escalabilidad horizontal, stateless, observabilidad integrada.",
    color: "#22c55e",
  },
  {
    icon: Award, title: "Calidad sin concesiones",
    description: "Código limpio, documentado y testeado. Code reviews rigurosos y estándares de ingeniería que perduran en el tiempo.",
    color: "#f59e0b",
  },
];

const capabilities = [
  "Arquitectura de microservicios",
  "Event-driven systems",
  "API design (REST / gRPC / GraphQL)",
  "Kubernetes & container orchestration",
  "GitOps & delivery pipelines",
  "Security as Code",
  "Cost optimization cloud",
  "SRE practices",
  "Database design & migrations",
  "Performance engineering",
  "Developer experience (DX)",
  "Incident management",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6" ref={ref}>
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Text ──────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge>Nosotros</SectionBadge>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white leading-tight">
                Ingeniería de
                <br />
                <span className="text-gradient-cyan">próxima generación</span>
              </h2>
              <p className="mt-5 t-body text-sm sm:text-base leading-relaxed">
                Infra Moon es una empresa moderna de ingeniería de software enfocada en
                construir sistemas escalables, automatizados y confiables para empresas
                que no se pueden permitir fallar.
              </p>
              <p className="mt-3 t-body text-sm sm:text-base leading-relaxed">
                No somos una agencia de desarrollo genérica. Somos un equipo técnico
                especializado en cloud, infraestructura y calidad de software. Pensamos
                en sistemas distribuidos, SLOs y pipelines antes de escribir la primera
                línea de código.
              </p>
              <p className="mt-3 t-body text-sm sm:text-base leading-relaxed">
                Nuestro enfoque combina las mejores prácticas de SRE, DevOps y engineering
                moderno para entregar soluciones que escalan con tu negocio y que tu
                equipo puede operar con confianza.
              </p>
            </motion.div>

            {/* Values grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div key={i} className="glass-card rounded-xl p-4 group">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: `${val.color}15`, border: `1px solid ${val.color}25` }}
                    >
                      <Icon size={15} style={{ color: val.color }} />
                    </div>
                    <h4 className="text-xs font-semibold t-heading mb-1.5">{val.title}</h4>
                    <p className="text-[11px] t-body leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right: Terminal + Moon card ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Terminal capabilities */}
            <div className="glass-card rounded-2xl overflow-hidden border border-[#00d4ff10]">
              <div
                className="flex items-center gap-2 px-5 py-3 border-b"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[11px] font-mono t-muted ml-2">capabilities.sh</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2">
                <div className="t-muted mb-4">
                  <span className="text-[#00d4ff]">$</span> cat ./infra-moon/capabilities.txt
                </div>
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#22c55e]">✓</span>
                    <span className="t-body">{cap}</span>
                  </motion.div>
                ))}
                <div className="pt-3 flex items-center gap-2">
                  <span className="text-[#00d4ff]">$</span>
                  <span className="t-muted cursor-blink">_</span>
                </div>
              </div>
            </div>

            {/* Moon card — usa el mismo MoonLogo del header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-5 sm:mt-6 glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <MoonLogo size={64} />
                <div>
                  <div className="text-sm font-semibold t-heading mb-1">
                    Infra<span className="text-[#00d4ff]">Moon</span>
                  </div>
                  <div className="text-xs t-body leading-relaxed">
                    Donde la infraestructura técnica y la confiabilidad
                    se encuentran con la ambición empresarial.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
