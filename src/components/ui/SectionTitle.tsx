"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  subtitle,
  title,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {/* Subtitle with decorative line */}
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 32 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-[2px] bg-gradient-to-r from-primary to-primary-light"
        />
        <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
          {subtitle}
        </span>
      </motion.div>

      {/* Title with gradient accent on first letter */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-display font-display font-bold text-white"
      >
        <span className="gradient-text">{title.charAt(0)}</span>
        <span>{title.slice(1)}</span>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-block text-primary ml-0.5"
        >
          .
        </motion.span>
      </motion.h2>
    </div>
  );
}
