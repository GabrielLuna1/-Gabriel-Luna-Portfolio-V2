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

  // Coordinates represent percentage offset from the center (0,0)
  // Max should be around -40 to 40 so they don't hit the edges and get clipped
  const positions = [
    { x: -28, y: -30, scale: 0.8 },
    { x: 30, y: -25, scale: 0.9 },
    { x: -35, y: 10, scale: 1 },
    { x: 35, y: 20, scale: 0.75 },
    { x: -15, y: 35, scale: 0.85 },
    { x: 15, y: -35, scale: 0.95 },
    { x: -40, y: -10, scale: 0.7 },
    { x: 40, y: 5, scale: 0.8 },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
      <div className="relative w-full max-w-5xl h-full">
        {tags.map((tag, index) => {
          const pos = positions[index % positions.length];
          // Randomize timing slightly based on index
          const duration = 6 + (index % 4) * 2; // Between 6 and 12 seconds
          const delay = index * 1.5;

          return (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 0.5, 1, 0.5, 0],
                y: [20, -10, -30, -10, 20],
                x: ["-50%", `calc(-50% + 10px)`, "-50%", `calc(-50% - 10px)`, "-50%"]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                left: `${50 + pos.x}%`,
                top: `${50 + pos.y}%`,
                scale: pos.scale
              }}
            >
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${colorTheme === "purple" ? "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]" : "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"} bg-[#050505]/90 backdrop-blur-md`}>
                {tag.icon && <span className={colorTheme === "purple" ? "text-purple-400" : "text-blue-400"}>{tag.icon}</span>}
                <span className="text-sm font-mono font-bold tracking-wider text-white">{tag.name}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
