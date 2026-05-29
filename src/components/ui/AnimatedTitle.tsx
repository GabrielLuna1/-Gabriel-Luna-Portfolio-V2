"use client";

import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { ease: [0.16, 1, 0.3, 1] as const, duration: 0.5 },
    },
  };

  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={containerVariants}
      aria-label={text}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              variants={charVariants}
              className={`inline-block ${
                gradient
                  ? "bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
                  : "text-white"
              }`}
              key={`${char}-${charIndex}`}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
