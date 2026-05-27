"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github, Mouse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";
import type { Profile } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  data: Profile;
}

export function Hero({ data }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Grid Pattern — deepest layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-cross">
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]" />
      </div>

      {/* Radial gradient depth overlay — mid layer */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Glow Orbs — with temperature variation */}
      <ParallaxOrb
        color="bg-primary/12"
        size={450}
        top="8%"
        right="-6%"
        blur={120}
        yOffset={120}
      />
      {/* Warm accent orb for temperature contrast */}
      <ParallaxOrb
        color="bg-accent-warm/8"
        size={300}
        bottom="-8%"
        left="-4%"
        blur={100}
        yOffset={-80}
      />
      {/* Cool accent orb */}
      <ParallaxOrb
        color="bg-accent-cool/6"
        size={250}
        top="60%"
        left="20%"
        blur={110}
        yOffset={-60}
      />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-7"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-strong border border-primary/15 text-primary text-xs font-bold tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t("hero.badge")}
          </motion.div>

          {/* Title — impactful hierarchy */}
          <div>
            <h1 className="font-display font-bold leading-[1.02]">
              <span className="text-display-xl">
                <AnimatedTitle text="Full Stack" gradient />
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-display-lg text-white/80 font-semibold"
              >
                Developer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-block text-primary ml-0.5 text-display-lg"
              >
                .
              </motion.span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-secondary text-body-lg max-w-lg leading-relaxed border-l-2 border-primary/25 pl-4"
          >
            {t("hero.description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button
              href="#projects"
              variant="primary"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              {t("hero.btn.projects")}
            </Button>

            <div className="flex gap-2">
              <Button href={data.linkedin} target="_blank" variant="outline" size="sm" className="px-3" icon={<Linkedin size={18} />}>
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button href={data.github} target="_blank" variant="outline" size="sm" className="px-3" icon={<Github size={18} />}>
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mt-8 md:mt-0"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent-cool rounded-full blur-[80px] opacity-15 -z-10 scale-110" />

            {/* HALO DASHED — faster rotation for "alive" feel */}
            <motion.div
              className="absolute -inset-6 md:-inset-10 border-2 border-dashed border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute -inset-6 md:-inset-10 border border-primary/15 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.1)]" />

            {/* Orbiting dot */}
            <motion.div
              className="absolute -inset-6 md:-inset-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            </motion.div>

            {/* Photo container with stacked depth */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-surface/25 backdrop-blur-md flex items-center justify-center p-2 shadow-elevated ring-1 ring-white/5 z-10 stacked-depth">
              <img
                src="/me.png"
                alt={data.name}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%2318181B' width='400' height='400'/%3E%3Ccircle fill='%233B82F6' cx='200' cy='150' r='60'/%3E%3Cpath fill='%233B82F6' d='M80 350c0-66 54-120 120-120s120 54 120 120'/%3E%3C/svg%3E";
                }}
                className="w-full h-full object-cover rounded-full border-2 border-white/5"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator — more elegant */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-secondary/40 font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mouse size={18} className="text-secondary/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
