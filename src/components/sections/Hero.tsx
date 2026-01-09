"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Profile } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext"; // <--- 1. Importação Essencial

interface HeroProps {
  data: Profile;
}

export function Hero({ data }: HeroProps) {
  const { t } = useLanguage(); // <--- 2. Ativa o tradutor

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Efeito de fundo (Blur) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Textos */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Badge "Disponível" */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-primary text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t("hero.badge")} {/* <--- AQUI MUDA O TEXTO */}
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Front-end <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Developer
            </span>
            <span className="text-primary">.</span>
          </h1>

          {/* Descrição */}
          <p className="text-secondary text-lg md:text-xl max-w-lg leading-relaxed">
            {t("hero.description")} {/* <--- AQUI MUDA A DESCRIÇÃO */}
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button href="#projects" variant="primary">
              {t("hero.btn.projects")} <ArrowRight size={18} /> {/* <--- AQUI MUDA O BOTÃO */}
            </Button>
            
            <Button href={data.linkedin} target="_blank" variant="outline">
              <Linkedin size={18} /> LinkedIn
            </Button>
          </div>
        </motion.div>

        {/* Lado Direito: Foto */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-surface/50 backdrop-blur-sm flex items-center justify-center overflow-hidden p-2">
             <img 
               src="/me.png" 
               alt={data.name} 
               className="w-full h-full object-cover rounded-full border-2 border-primary/20"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}