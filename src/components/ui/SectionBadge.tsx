"use client";

interface SectionBadgeProps {
  children: React.ReactNode;
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase terminal-text border border-[#00d4ff30] bg-[#00d4ff08]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
      {children}
    </span>
  );
}
