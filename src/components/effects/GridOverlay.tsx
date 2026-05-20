"use client";

export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 grid-overlay"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.025) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    />
  );
}
