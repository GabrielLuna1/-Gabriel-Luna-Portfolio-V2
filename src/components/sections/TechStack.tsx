"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import type { TechItem } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface TechStackProps {
  data: TechItem[];
}

export function TechStack({ data }: TechStackProps) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="tech" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle={t("stack.subtitle")} title={t("stack.title")} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {data.map((group, groupIndex) => (
            <Reveal key={group.category} direction="up" delay={groupIndex * 0.1}>
              <div className="space-y-5">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-light shadow-glow" />
                  <h3 className="text-subheading font-display font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Tech Items */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col gap-2"
                >
                  {group.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={staggerItem}
                      className="flex items-center justify-between p-3.5 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 flex items-center justify-center shrink-0">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
