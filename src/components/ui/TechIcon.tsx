"use client";

import type { ReactNode } from "react";
import {
  siReact, siNextdotjs, siTypescript, siTailwindcss,
  siNodedotjs, siGo, siPython, siPostgresql, siRedis,
  siGooglecloud, siDocker, siKubernetes, siTerraform, siAnsible,
  siGithubactions, siArgo, siCypress, siK6, siGrafana,
  siPrometheus, siHelm, siPulumi, siJest, siVitest,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

/* ─── Types ──────────────────────────────────────────── */
type SinglePathIcon = { path: string; hex: string; title: string };
type MultiIcon      = { jsx: ReactNode; title: string };
type IconEntry      = SimpleIcon | SinglePathIcon | MultiIcon;

const isMulti = (e: IconEntry): e is MultiIcon => "jsx" in e;

/* ─── Custom multi-element icons ─────────────────────── */

// Angular — brand red #DD0031 (simple-icons stores it as near-black in v13)
const ANGULAR: SinglePathIcon = {
  title: "Angular",
  hex:   "DD0031",
  path:  "M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996L7.574 18.31H4.936L12 2.981z",
};

// AWS — orange logo
const AWS: SinglePathIcon = {
  title: "AWS",
  hex:   "FF9900",
  path:  "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.347.347 0 0 1 .056.176c0 .077-.048.154-.152.23l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.382-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687a.49.49 0 0 1-.32-.08c-.063-.056-.12-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32a.5.5 0 0 1-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.877.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.566 3.153 11.89 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.37.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z",
};

// Loki (Grafana product)
const LOKI: SinglePathIcon = {
  title: "Loki",
  hex:   "F46800",
  path:  "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7 7h4v2H7V7zm0 4h4v2H7v-2zm0 4h4v2H7v-2zm6-8h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z",
};

// Playwright — dos caretas oficiales (comedy roja + tragedy verde)
const PLAYWRIGHT: MultiIcon = {
  title: "Playwright",
  jsx: (
    <>
      {/* Careta comedia — roja, atrás-izquierda */}
      <ellipse cx="8.5" cy="12" rx="6.5" ry="7.5" fill="#E2574C" />
      {/* Ojos comedia */}
      <circle cx="6.3" cy="10" r="1.1" fill="white" fillOpacity="0.9" />
      <circle cx="9.8" cy="9.5" r="1"   fill="white" fillOpacity="0.9" />
      {/* Boca sonriente */}
      <path d="M5.5 13.5 Q8.5 16.5 11.5 13.5" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* Careta tragedia — verde, adelante-derecha */}
      <ellipse cx="15.5" cy="12" rx="6.5" ry="7.5" fill="#2EAD33" />
      {/* Ojos tragedia */}
      <circle cx="13.3" cy="10" r="1.1" fill="white" fillOpacity="0.9" />
      <circle cx="16.8" cy="9.5" r="1"  fill="white" fillOpacity="0.9" />
      {/* Boca triste */}
      <path d="M12.5 15 Q15.5 12 18.5 15" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </>
  ),
};

/* ─── Icon map ───────────────────────────────────────── */
const ICONS: Record<string, IconEntry> = {
  "React":          siReact,
  "Next.js":        siNextdotjs,
  "Angular":        ANGULAR,
  "TypeScript":     siTypescript,
  "Tailwind":       siTailwindcss,
  "Node.js":        siNodedotjs,
  "Go":             siGo,
  "Python":         siPython,
  "PostgreSQL":     siPostgresql,
  "Redis":          siRedis,
  "AWS":            AWS,
  "GCP":            siGooglecloud,
  "Docker":         siDocker,
  "Kubernetes":     siKubernetes,
  "Terraform":      siTerraform,
  "Ansible":        siAnsible,
  "GitHub Actions": siGithubactions,
  "ArgoCD":         siArgo,
  "Playwright":     PLAYWRIGHT,
  "Cypress":        siCypress,
  "k6":             siK6,
  "Grafana":        siGrafana,
  "Prometheus":     siPrometheus,
  "Loki":           LOKI,
  "Helm":           siHelm,
  "Pulumi":         siPulumi,
  "Jest":           siJest,
  "Vitest":         siVitest,
};

/* ─── Component ──────────────────────────────────────── */
export default function TechIcon({
  name,
  size = 20,
  colored = true,
}: {
  name: string;
  size?: number;
  colored?: boolean;
}) {
  const icon = ICONS[name];

  if (!icon) {
    return (
      <span
        className="inline-flex items-center justify-center font-mono font-bold select-none"
        style={{ width: size, height: size, fontSize: size * 0.45, color: "#00d4ff" }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  // Multi-element SVG (e.g. Playwright masks)
  if (isMulti(icon)) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        style={{ flexShrink: 0 }}
        aria-label={icon.title}
      >
        {icon.jsx}
      </svg>
    );
  }

  // Single-path icon (simple-icons or custom)
  const color = colored ? `#${icon.hex}` : "currentColor";

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={{ flexShrink: 0 }}
      aria-label={"title" in icon ? icon.title : name}
    >
      <path d={icon.path} />
    </svg>
  );
}
