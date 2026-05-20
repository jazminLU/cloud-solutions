"use client";

import { Mail } from "lucide-react";
import MoonLogo from "@/components/ui/MoonLogo";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const navSections = [
  {
    title: "Servicios",
    links: [
      { label: "Frontend Engineering",  href: "#services" },
      { label: "Backend Engineering",   href: "#services" },
      { label: "QA Automation",         href: "#services" },
      { label: "Cloud & DevOps",        href: "#services" },
      { label: "Infrastructure as Code", href: "#services" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Stack Tecnológico", href: "#stack" },
      { label: "Proyectos",         href: "#projects" },
      { label: "Workflow",          href: "#workflow" },
      { label: "Nosotros",          href: "#about" },
      { label: "Contacto",          href: "#contact" },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#00d4ff30] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand — full width on smallest, 2 cols on sm */}
          <div className="col-span-2 sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <MoonLogo size={28} />
              <span className="text-sm font-semibold t-heading">
                Infra<span className="text-[#00d4ff]">Moon</span>
              </span>
            </div>
            <p className="text-sm t-body leading-relaxed max-w-xs">
              Ingeniería de software escalable, automatización cloud y calidad
              de software de próxima generación para empresas que construyen el futuro.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {[
                { icon: <Mail size={14} />, href: "mailto:hola@inframoon.dev" },
                { icon: <LinkedinIcon />, href: "https://linkedin.com" },
                { icon: <GithubIcon />, href: "https://github.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all t-muted hover:text-[#00d4ff]"
                  style={{ border: "1px solid var(--border-subtle)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav sections */}
          {navSections.map((section, i) => (
            <div key={i}>
              <div className="text-[10px] font-mono t-muted uppercase tracking-widest mb-4">
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm t-body hover:text-[#00d4ff] transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 sm:mt-12 pt-5 sm:pt-6 flex flex-col items-center gap-2 text-center"
          style={{ borderTop: "1px solid rgba(0,212,255,0.15)" }}
        >
          <p
            className="text-xs font-mono tracking-widest"
            style={{
              color: "#00d4ff",
              textShadow: "0 0 10px rgba(0,212,255,0.8), 0 0 25px rgba(0,212,255,0.4)",
            }}
          >
            © {new Date().getFullYear()} Infra Moon. All rights reserved.
          </p>
          <p
            className="text-xs font-mono tracking-wide flex items-center gap-1.5 flex-wrap justify-center"
            style={{
              color: "rgba(0,212,255,0.65)",
              textShadow: "0 0 8px rgba(0,212,255,0.5)",
            }}
          >
           
          </p>
        </div>
      </div>
    </footer>
  );
}
