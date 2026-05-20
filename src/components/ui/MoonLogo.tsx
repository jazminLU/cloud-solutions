"use client";

interface MoonLogoProps {
  size?: number;
}

export default function MoonLogo({ size = 32 }: MoonLogoProps) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Outer atmospheric glow ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: -size * 0.2,
          background:
            "radial-gradient(circle, rgba(0,180,255,0.28) 0%, rgba(0,120,220,0.12) 50%, transparent 75%)",
          filter: `blur(${size * 0.15}px)`,
        }}
      />

      {/* Moon sphere */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 36% 30%, #e8f3ff 0%, #bddaf5 16%, #88bde8 34%, #4e9ad6 54%, #2470b8 70%, #0f4a8e 84%, #072d65 100%)",
          boxShadow: `
            0 0 0 1px rgba(80,160,255,0.4),
            0 0 ${size * 0.5}px rgba(0,160,255,0.55),
            0 0 ${size}px rgba(0,100,220,0.25),
            inset 0 0 ${size * 0.3}px rgba(0,30,80,0.4)
          `,
        }}
      >
        {/* Large crater - left-center */}
        <div
          className="absolute rounded-full"
          style={{
            left: "18%",
            top: "28%",
            width: "30%",
            height: "30%",
            background:
              "radial-gradient(circle at 38% 38%, rgba(200,230,255,0.12) 0%, rgba(0,20,70,0.30) 55%, rgba(0,10,50,0.40) 100%)",
            border: `${size * 0.025}px solid rgba(255,255,255,0.18)`,
          }}
        />

        {/* Small crater - upper right */}
        <div
          className="absolute rounded-full"
          style={{
            left: "60%",
            top: "18%",
            width: "18%",
            height: "18%",
            background:
              "radial-gradient(circle at 38% 38%, rgba(180,220,255,0.1) 0%, rgba(0,20,70,0.22) 100%)",
            border: `${size * 0.02}px solid rgba(255,255,255,0.12)`,
          }}
        />

        {/* Medium crater - lower right */}
        <div
          className="absolute rounded-full"
          style={{
            left: "62%",
            top: "52%",
            width: "24%",
            height: "24%",
            background:
              "radial-gradient(circle at 38% 38%, rgba(180,220,255,0.08) 0%, rgba(0,20,70,0.20) 100%)",
            border: `${size * 0.02}px solid rgba(255,255,255,0.1)`,
          }}
        />

        {/* Tiny crater */}
        <div
          className="absolute rounded-full"
          style={{
            left: "38%",
            top: "63%",
            width: "12%",
            height: "12%",
            background: "rgba(0,20,60,0.22)",
          }}
        />

        {/* Surface highlight / light reflection */}
        <div
          className="absolute rounded-full"
          style={{
            top: "8%",
            left: "14%",
            width: "36%",
            height: "26%",
            background:
              "radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.45) 0%, rgba(220,240,255,0.15) 55%, transparent 100%)",
            filter: `blur(${size * 0.04}px)`,
          }}
        />

        {/* Dark limb shadow on right edge */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 80% 60%, rgba(0,10,40,0.55) 0%, transparent 55%)",
          }}
        />
      </div>
    </div>
  );
}
