"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import type { ExperienceItem } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExperienceProps {
  data: ExperienceItem[];
}

export function Experience({ data }: ExperienceProps) {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle={t("experience.subtitle")}
          title={t("experience.title")}
        />

        <div className="mt-16 relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {data.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[10px] md:left-[-6px] top-3 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                </div>

                {/* Experience Card */}
                <div className="group card-base elevation-3 p-6 md:p-8 hover:border-primary/20 hover:bg-surface/30 hover:-translate-y-0.5">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-heading font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {t(item.role)}
                      </h3>
                      <p className="text-secondary font-medium flex items-center gap-2 text-sm">
                        <Briefcase size={14} className="text-primary" />
                        {item.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-secondary whitespace-nowrap font-mono">
                      <Calendar size={12} className="text-primary/70" />
                      {t(item.period)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary/80 text-body leading-relaxed mb-5">
                    {t(item.description)}
                  </p>

                  {/* Achievements */}
                  <ul className="grid gap-2.5">
                    {item.achievements.map((achievementKey, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-secondary text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 text-primary/50 shrink-0 group-hover:text-primary transition-colors"
                        />
                        <span className="leading-relaxed">
                          {t(achievementKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
