"use client";

import { motion, Variants } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { TechItem } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

// --- DEFINIÇÕES DE ANIMAÇÃO ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
// ------------------------------

interface TechStackProps {
  data: TechItem[];
}

export function TechStack({ data }: TechStackProps) {
  const { t } = useLanguage();

  return (
    <section id="tech" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle={t("stack.subtitle")} title={t("stack.title")} />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {data.map((group) => (
            <div key={group.category} className="space-y-6">
              {/* Título da Categoria */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-display font-bold text-white border-l-4 border-primary pl-4"
              >
                {group.category}
              </motion.h3>

              {/* Grid de Ícones */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 gap-3"
              >
                {group.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="flex items-center p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Área do Ícone */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-white/5 mr-4 group-hover:scale-110 transition-transform">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        // CORREÇÃO: Removido 'grayscale'. Agora as cores aparecem sempre.
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    {/* Nome da Tecnologia */}
                    <span className="text-secondary group-hover:text-white font-medium transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
