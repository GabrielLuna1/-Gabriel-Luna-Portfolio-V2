"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github, Mouse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Profile } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  data: Profile;
}

export function Hero({ data }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* --- GRID PATTERN (CSS PURO - GARANTIDO) --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          // Cria um grid de 50x50px com linhas brancas bem sutis
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      >
        {/* Máscara para suavizar as bordas (Vignette) */}
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]" />
      </div>

      {/* --- Efeitos de Fundo (Glows) --- */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-60 animate-pulse" />
      <div className="absolute bottom-0 left-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 opacity-40" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Lado Esquerdo: Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 backdrop-blur-sm border border-white/10 text-primary text-xs font-bold tracking-wide shadow-lg shadow-primary/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            {t("hero.badge")}
          </motion.div>

          {/* Título */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1]">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
                Developer
              </span>
              <span className="text-primary inline-block animate-bounce">
                .
              </span>
            </h1>
          </div>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-secondary text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-primary/30 pl-4"
          >
            {t("hero.description")}
          </motion.p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              href="#projects"
              variant="primary"
              className="shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow"
            >
              {t("hero.btn.projects")} <ArrowRight size={18} />
            </Button>

            <div className="flex gap-2">
              <Button
                href={data.linkedin}
                target="_blank"
                variant="outline"
                className="px-3"
              >
                <Linkedin size={20} />
              </Button>
              <Button
                href={data.github}
                target="_blank"
                variant="outline"
                className="px-3"
              >
                <Github size={20} />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-[80px] opacity-20 -z-10 transform scale-110" />

            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 bg-surface/30 backdrop-blur-md flex items-center justify-center p-3 shadow-2xl ring-1 ring-white/5">
              <img
                src="/me.png"
                alt={data.name}
                className="w-full h-full object-cover rounded-full border-2 border-primary/20 shadow-inner"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <Mouse size={24} />
      </motion.div>
    </section>
  );
}
