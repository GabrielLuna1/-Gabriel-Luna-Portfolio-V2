import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  variant?: "default" | "strong" | "elevated";
  className?: string;
}

export function GlassPanel({
  children,
  variant = "default",
  className = "",
}: GlassPanelProps) {
  const variants: Record<string, string> = {
    default: "glass",
    strong: "glass-strong",
    elevated: "glass-elevated",
  };

  return (
    <div className={`${variants[variant]} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}
