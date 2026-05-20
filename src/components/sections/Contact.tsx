"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const contactLinks = [
  {
    label: "Email",
    value: "hola@inframoon.dev",
    href: "mailto:hola@inframoon.dev",
    color: "#00d4ff",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/company/infra-moon",
    href: "https://linkedin.com",
    color: "#0077b5",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/infra-moon",
    href: "https://github.com",
    color: "#94a3b8",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Hubo un error al enviar. Intentá de nuevo.");
      }
    } catch {
      setError("No se pudo conectar. Revisá tu conexión.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6" ref={ref}>
      <div className="section-divider mb-0" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(0,212,255,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 lg:pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <SectionBadge>Contacto</SectionBadge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 text-base sm:text-lg t-body max-w-xl mx-auto">
            ¿Listo para llevar tu infraestructura al siguiente nivel?
            Cuéntanos tu desafío.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── Left: Contact info ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card rounded-xl p-4 group transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}25`, color: link.color }}
                  >
                    {link.renderIcon()}
                  </div>
                  <div>
                    <div className="text-xs t-secondary font-mono tracking-widest uppercase font-semibold">{link.label}</div>
                    <div className="text-sm t-body group-hover:text-white transition-colors">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Info card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-[#7c3aed20]">
              <div className="text-xs font-mono text-[#7c3aed] tracking-widest uppercase mb-3">
                ¿Por qué Infra Moon?
              </div>
              <ul className="space-y-2">
                {[
                  "Respuesta inicial en menos de 24h",
                  "Discovery gratuito para proyectos calificados",
                  "Equipo técnico senior, sin intermediarios",
                  "Metodología ágil y transparencia total",
                  "SLAs definidos desde el primer sprint",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs t-body">
                    <span className="text-[#7c3aed] mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Right: Form ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-[#00d4ff10]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 sm:py-12 text-center"
                >
                  <CheckCircle size={40} className="text-[#22c55e] mb-4" />
                  <h3 className="text-lg font-semibold t-heading mb-2">Mensaje enviado</h3>
                  <p className="text-sm t-body">
                    Nos pondremos en contacto en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono t-secondary uppercase tracking-widest mb-2 font-semibold">
                        Nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono t-secondary uppercase tracking-widest mb-2 font-semibold">
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Tu empresa"
                        className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono t-muted uppercase tracking-widest mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@empresa.com"
                      className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono t-muted uppercase tracking-widest mb-1.5">
                      Cuéntanos tu desafío
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe tu proyecto, tecnologías actuales, desafíos y qué tipo de ayuda buscas..."
                      rows={5}
                      className="form-input w-full rounded-lg px-4 py-2.5 text-sm resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-xs text-[#ef4444] text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-[#00d4ff40] border-t-[#00d4ff] rounded-full"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
