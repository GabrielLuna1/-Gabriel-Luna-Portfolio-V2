"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxOrbProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: number;
  opacity?: number;
  yOffset?: number;
}

export function ParallaxOrb({
  color = "bg-primary",
  size = 300,
  top,
  left,
  right,
  bottom,
  blur = 100,
  opacity = 0.2,
  yOffset = 150
}: ParallaxOrbProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, yOffset]);

  return (
    <motion.div
      style={{ y, top, left, right, bottom }}
      className={`absolute -z-10 rounded-full ${color}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [opacity, opacity * 1.5, opacity],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div 
        style={{ 
          width: size, 
          height: size, 
          filter: `blur(${blur}px)`,
        }} 
      />
    </motion.div>
  );
}
