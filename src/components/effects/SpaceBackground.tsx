"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
    }));

    let frame: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      stars.forEach((star, i) => {
        const twinkle = Math.sin(time * 2 + i) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      // Nebula glows
      const nebula1 = ctx.createRadialGradient(
        canvas.width * 0.15, canvas.height * 0.25, 0,
        canvas.width * 0.15, canvas.height * 0.25, canvas.width * 0.35
      );
      nebula1.addColorStop(0, "rgba(0, 212, 255, 0.04)");
      nebula1.addColorStop(1, "transparent");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nebula2 = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.7, 0,
        canvas.width * 0.85, canvas.height * 0.7, canvas.width * 0.3
      );
      nebula2.addColorStop(0, "rgba(124, 58, 237, 0.05)");
      nebula2.addColorStop(1, "transparent");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 space-bg"
    />
  );
}
