"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SpaceBackground from "@/components/effects/SpaceBackground";
import GridOverlay from "@/components/effects/GridOverlay";
import LoadingScreen from "@/components/effects/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Workflow from "@/components/sections/Workflow";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* ── Main site — always rendered beneath the blur ── */}
      <div
        className="relative min-h-screen"
        style={{ background: "var(--bg-base)" }}
      >
        <SpaceBackground />
        <GridOverlay />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Services />
          <TechStack />
          <Projects />
          <Workflow />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* ── WhatsApp floating button (fixed, follows scroll) ── */}
      <WhatsAppButton />

      {/* ── Blur overlay — sits on top, exits revealing site ── */}
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>
    </>
  );
}
