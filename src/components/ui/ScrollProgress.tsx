"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useSyncExternalStore } from "react";

function useClientOnlyMount() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ScrollProgress() {
  const mounted = useClientOnlyMount();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary-light to-primary origin-left z-[100]"
      style={{ scaleX }}
    >
      {/* Glow bleed below the progress bar */}
      <div className="absolute inset-x-0 top-full h-[6px] bg-gradient-to-r from-primary/30 via-primary-light/20 to-primary/30 blur-[4px] pointer-events-none" />
    </motion.div>
  );
}
