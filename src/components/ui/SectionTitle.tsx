"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  number?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  subtitle,
  title,
  number,
  description,
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
      {/* Subtitle with number + decorative line */}
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        {/* Decorative line with glow */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 32 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[2px] bg-gradient-to-r from-primary to-primary-light"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light blur-[3px] opacity-50" />
        </motion.div>

        {/* Number + Subtitle */}
        <div className="flex items-center gap-2">
          {number && (
            <span className="text-primary/40 font-mono text-xs font-bold">
              {number}
            </span>
          )}
          <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
            {subtitle}
          </span>
        </div>
      </motion.div>

      {/* Title — clean, strong typography without gimmicky first-letter gradient */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-display font-display font-bold text-white tracking-tighter"
      >
        {title}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-block text-primary ml-0.5"
        >
          .
        </motion.span>
      </motion.h2>

      {/* Optional description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-4 text-secondary text-body-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
