"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  once?: boolean;
  gradient?: boolean;
}

export function AnimatedTitle({
  text,
  className = "",
  once = true,
  gradient = false,
}: AnimatedTitleProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.04 } },
          hidden: {},
        }}
        aria-hidden
        className="inline-block"
      >
        {text.split(" ").map((word, wordIndex) => (
          <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      ease: [0.16, 1, 0.3, 1],
                      duration: 0.5,
                    },
                  },
                }}
                className={`inline-block ${
                  gradient
                    ? "bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent"
                    : "text-white"
                }`}
                key={`${char}-${charIndex}`}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
