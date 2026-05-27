"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface FloatingTag {
  name: string;
  icon?: React.ReactNode;
}

interface FloatingTechTagsProps {
  tags: FloatingTag[];
  colorTheme?: "primary" | "purple";
}

export function FloatingTechTags({ tags, colorTheme = "primary" }: FloatingTechTagsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define a set of random-ish but pleasing fixed positions around a center
  // These represent [x, y] coordinates in percentages relative to a central container
  const positions = [
    { x: -35, y: -45, scale: 0.8 },
    { x: 40, y: -30, scale: 0.9 },
    { x: -45, y: 15, scale: 1 },
    { x: 35, y: 35, scale: 0.75 },
    { x: -10, y: 55, scale: 0.85 },
    { x: 15, y: -60, scale: 0.95 },
    { x: -60, y: -10, scale: 0.7 },
    { x: 60, y: 5, scale: 0.8 },
  ];

  const colorClass = colorTheme === "purple" ? "text-purple-400 border-purple-500/30" : "text-primary border-primary/30";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-4xl h-full">
        {tags.map((tag, index) => {
          const pos = positions[index % positions.length];
          // Randomize timing slightly based on index
          const duration = 6 + (index % 4) * 2; // Between 6 and 12 seconds
          const delay = index * 1.5;

          return (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: [0, 0.4, 0.8, 0.4, 0],
                y: [10, -10, -20, -10, 10],
                x: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
              className="absolute left-1/2 top-1/2"
              style={{
                marginLeft: `${pos.x}%`,
                marginTop: `${pos.y}%`,
                transform: `scale(${pos.scale})`
              }}
            >
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-strong border ${colorClass} bg-surface/40 backdrop-blur-md shadow-glow-sm`}>
                {tag.icon && <span className="opacity-80">{tag.icon}</span>}
                <span className="text-xs font-mono font-bold tracking-wider opacity-90">{tag.name}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
