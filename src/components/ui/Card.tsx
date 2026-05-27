"use client";

import { ReactNode, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "glass" | "elevated" | "featured" | "spotlight";
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  variant = "default",
  hover = true,
  className = "",
  onClick,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (variant !== "spotlight" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, [variant]);

  const baseClasses = "rounded-2xl transition-all duration-300";

  const variants: Record<string, string> = {
    default: `
      bg-surface/35 backdrop-blur-sm
      border border-white/5
      hover:border-primary/15
      glass-shine
    `,
    glass: `
      glass glass-shine
      hover:border-primary/15
    `,
    elevated: `
      bg-surface-elevated/50 backdrop-blur-md
      border border-white/8
      shadow-card glass-shine
      hover:shadow-card-hover hover:border-primary/15
    `,
    featured: `
      bg-gradient-to-br from-surface/50 to-surface-elevated/35
      backdrop-blur-sm glass-shine
      border-l-[3px] border-l-primary
      border-y border-r border-y-white/5 border-r-white/5
      hover:border-primary/25
    `,
    spotlight: `
      bg-surface/30 backdrop-blur-sm
      border border-white/5
      hover:border-primary/15
      card-spotlight glass-shine
    `,
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={hover ? { y: -2, scale: 1.005 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
