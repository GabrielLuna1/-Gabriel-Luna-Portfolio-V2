"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "glass" | "elevated" | "featured";
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
  const baseClasses = "rounded-2xl transition-all duration-300";

  const variants: Record<string, string> = {
    default: `
      bg-surface/40 backdrop-blur-sm
      border border-white/5
      hover:border-primary/20
    `,
    glass: `
      glass
      hover:border-primary/15
    `,
    elevated: `
      bg-surface-elevated/50 backdrop-blur-md
      border border-white/8
      shadow-card
      hover:shadow-card-hover hover:border-primary/20
    `,
    featured: `
      bg-gradient-to-br from-surface/60 to-surface-elevated/40
      backdrop-blur-sm
      border-l-[3px] border-l-primary
      border-y border-r border-y-white/5 border-r-white/5
      hover:border-primary/30
    `,
  };

  return (
    <motion.div
      whileHover={hover ? { y: -3, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
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
