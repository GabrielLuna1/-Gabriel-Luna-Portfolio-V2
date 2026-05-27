"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { EducationItem } from "@/data/types";

interface EducationProps {
  data: EducationItem[];
}

export function Education({ data }: EducationProps) {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-28 bg-surface/8 relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-mesh opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          number="05"
          subtitle={t("education.subtitle")}
          title={t("education.title")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-5 mt-16 max-w-5xl mx-auto"
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className={`group relative flex flex-col h-full rounded-2xl p-6 transition-all duration-300 ${
                item.type === "degree"
                  ? "card-premium border-l-[3px] border-l-primary shadow-glow"
                  : "card-premium"
              }`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl transition-all duration-300 ${
                      item.type === "degree"
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-glow"
                        : "bg-white/5 text-secondary group-hover:text-white group-hover:bg-white/8"
                    }`}
                  >
                    {item.type === "degree" ? (
                      <GraduationCap size={20} />
                    ) : (
                      <Award size={20} />
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-elevated/40 border border-white/[0.04] text-[10px] text-secondary font-mono">
                    <Calendar size={10} />
                    {t(item.period)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold text-white mb-1.5 group-hover:text-primary transition-colors tracking-tight">
                  {t(item.course)}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-secondary/60 mb-4">
                  <BookOpen size={13} />
                  {t(item.institution)}
                </div>

                {/* Description */}
                <p className="text-secondary text-sm leading-relaxed mt-auto border-t border-white/[0.04] pt-3">
                  {t(item.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
