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
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Glow Orbs — back depth */}
      <ParallaxOrb
        color="bg-primary/15"
        size={500}
        top="10%"
        right="-8%"
        blur={120}
        yOffset={150}
      />
      <ParallaxOrb
        color="bg-primary/10"
        size={350}
        bottom="-5%"
        left="-5%"
        blur={100}
        yOffset={-100}
      />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-xs font-bold tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t("hero.badge")}
          </motion.div>

          {/* Title */}
          <div>
            <h1 className="text-display-xl font-display font-bold leading-[1.05]">
              <AnimatedTitle text="Full Stack" gradient />
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
                Developer
              </span>
              <span className="inline-block text-primary ml-0.5 animate-pulse-glow rounded-full">
                .
              </span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-secondary text-body-lg max-w-lg leading-relaxed border-l-2 border-primary/30 pl-4"
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
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mt-8 md:mt-0"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-light rounded-full blur-[80px] opacity-20 -z-10 scale-110" />

            {/* HALO DASHED — anel giratório */}
            <motion.div
              className="absolute -inset-6 md:-inset-10 border-2 border-dashed border-primary/40 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute -inset-6 md:-inset-10 border border-primary/20 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.15)]" />

            {/* Bolinha brilhante girando no anel — Framer Motion */}
            <motion.div
              className="absolute -inset-6 md:-inset-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]" />
            </motion.div>

            {/* Photo container with stacked depth */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-surface/30 backdrop-blur-md flex items-center justify-center p-2 shadow-elevated ring-1 ring-white/5 z-10 stacked-depth">
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mouse size={20} className="text-secondary/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
