"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import MoonLogo from "@/components/ui/MoonLogo";

const navLinks = [
  { label: "Servicios", href: "#services" },
  { label: "Stack",     href: "#stack" },
  { label: "Proyectos", href: "#projects" },
  { label: "Workflow",  href: "#workflow" },
  { label: "Nosotros",  href: "#about" },
  { label: "Contacto",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { theme, toggleTheme }    = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: "var(--bg-nav)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid var(--border-card)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────── */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Realistic moon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MoonLogo size={30} />
            </motion.div>

            <span
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{ color: "var(--text-heading)" }}
            >
              Infra<span className="text-[#00d4ff]">Moon</span>
            </span>
          </a>

          {/* ── Desktop nav links ─────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer"
                style={{
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-heading)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── Right actions ─────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                color: "var(--text-secondary)",
              }}
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={15} className="text-[#f59e0b]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90,  opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={15} className="text-[#7c3aed]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <button
              onClick={() => handleNav("#contact")}
              className="btn-primary px-5 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              Contáctanos
            </button>
          </div>

          {/* ── Mobile: theme + hamburger ──────────────── */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}
            >
              {isDark
                ? <Sun  size={14} className="text-[#f59e0b]" />
                : <Moon size={14} className="text-[#7c3aed]" />
              }
            </button>
            <button
              className="p-2 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ──────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-xl md:hidden"
            style={{
              background: "var(--bg-nav)",
              borderBottom: "1px solid var(--border-card)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm rounded-lg transition-all cursor-pointer"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </button>
              ))}
              <div
                className="pt-2 mt-2"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <button
                  onClick={() => handleNav("#contact")}
                  className="btn-primary w-full py-3 rounded-lg text-sm font-medium cursor-pointer"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
