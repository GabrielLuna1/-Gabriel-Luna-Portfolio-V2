"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X, ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ProjectNavProps {
  projectName: string;
  projectColor: string;
  sections: NavSection[];
  nextProject?: { id: string; name: string };
  prevProject?: { id: string; name: string };
}

export function ProjectNav({ projectName, projectColor, sections, nextProject, prevProject }: ProjectNavProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Determine actual tailwind colors based on projectColor string
  const colorMap: Record<string, { text: string, bg: string, bgActive: string, border: string }> = {
    primary: { text: "text-primary", bg: "bg-primary", bgActive: "bg-primary/10", border: "border-primary/30" },
    "purple-500": { text: "text-purple-400", bg: "bg-purple-500", bgActive: "bg-purple-500/10", border: "border-purple-500/30" }
  };
  
  const theme = colorMap[projectColor] || colorMap.primary;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-4 z-50 w-12 h-12 rounded-full glass border border-white/[0.04] shadow-elevated flex items-center justify-center text-secondary hover:text-white transition-all md:hidden ${
          isVisible ? "top-4" : "-top-20"
        } transition-all duration-500`}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Sidebar */}
      <AnimatePresence>
        {(isOpen || isVisible) && (
          <motion.nav
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:block"
          >
            <div className="bg-surface/60 backdrop-blur-2xl border border-white/[0.04] rounded-2xl p-2.5 shadow-elevated ring-1 ring-white/5">
              <div className="space-y-1 relative">
                {/* Active Indicator Line */}
                <div className="absolute left-[-2px] top-0 bottom-0 w-px bg-white/[0.04]" />
                
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 group relative overflow-hidden ${
                        isActive
                          ? `text-white ${theme.bgActive}`
                          : "text-secondary hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      <span className={`shrink-0 z-10 transition-colors duration-300 ${
                        isActive ? theme.text : "text-secondary/60 group-hover:text-white"
                      }`}>
                        {section.icon}
                      </span>
                      <span className="whitespace-nowrap z-10">{section.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-bg"
                          className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none"
                        />
                      )}
                      
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-indicator"
                          className={`absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r-full ${theme.bg}`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.04] space-y-1">
                <Link
                  href="/projetos"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-secondary/60 hover:text-white hover:bg-white/[0.03] transition-all group"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                  Todos os Projetos
                </Link>
                
                {nextProject && (
                  <Link
                    href={`/projetos/${nextProject.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-secondary/60 hover:text-white hover:bg-white/[0.03] transition-all group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    {nextProject.name}
                  </Link>
                )}
                
                {prevProject && (
                  <Link
                    href={`/projetos/${prevProject.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-secondary/60 hover:text-white hover:bg-white/[0.03] transition-all group"
                  >
                    <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                    {prevProject.name}
                  </Link>
                )}
                
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-secondary/60 hover:text-white hover:bg-white/[0.03] transition-all mt-2"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={14} />
                    {language === "pt" ? "EN" : "PT"}
                  </div>
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute left-0 top-0 bottom-0 w-72 bg-surface/90 backdrop-blur-xl border-r border-white/[0.04] p-6 shadow-2xl"
            >
              <h3 className="text-white font-display font-bold text-xl mb-8">{projectName}</h3>
              <div className="space-y-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? `text-white ${theme.bgActive} border border-white/[0.04]`
                          : "text-secondary hover:text-white hover:bg-white/[0.02] border border-transparent"
                      }`}
                    >
                      <span className={`shrink-0 ${
                        isActive ? theme.text : "text-secondary/60"
                      }`}>
                        {section.icon}
                      </span>
                      {section.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.04] space-y-3">
                <Link href="/projetos" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-secondary/80 hover:text-white hover:bg-white/[0.02] transition-colors">
                  <ArrowLeft size={16} />
                  Todos os Projetos
                </Link>
                
                {nextProject && (
                  <Link href={`/projetos/${nextProject.id}`} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-secondary/80 hover:text-white hover:bg-white/[0.02] transition-colors">
                    <ChevronRight size={16} />
                    {nextProject.name}
                  </Link>
                )}
                
                <div className="pt-6 mt-6 border-t border-white/[0.04]">
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-white/[0.02] border border-white/[0.02] text-secondary hover:text-white hover:bg-white/[0.04] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Globe size={16} />
                      {language === "pt" ? "English" : "Português"}
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
