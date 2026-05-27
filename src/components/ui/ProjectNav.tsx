"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X, ArrowLeft, BookOpen, Server, Code2, Layers, Workflow, Globe } from "lucide-react";
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

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-4 z-50 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/30 transition-all shadow-lg md:hidden ${
          isVisible ? "top-4" : "-top-20"
        } transition-all duration-300`}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Desktop Sidebar */}
      <AnimatePresence>
        {(isOpen || isVisible) && (
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed left-4 top-32 z-40 hidden md:block"
          >
            <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl">
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all group ${
                      activeSection === section.id
                        ? `text-white bg-${projectColor}/10`
                        : "text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={`shrink-0 ${
                      activeSection === section.id ? `text-${projectColor}` : "text-secondary"
                    }`}>
                      {section.icon}
                    </span>
                    <span className="whitespace-nowrap">{section.label}</span>
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="nav-active"
                        className={`w-1 h-1 rounded-full bg-${projectColor} ml-auto`}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 space-y-1">
                <Link
                  href="/projetos"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-secondary hover:text-white hover:bg-white/5 transition-all"
                >
                  <ArrowLeft size={14} />
                  Todos os Projetos
                </Link>
                {nextProject && (
                  <Link
                    href={`/projetos/${nextProject.id}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-secondary hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    <ChevronRight size={14} />
                    {nextProject.name}
                  </Link>
                )}
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-xs font-medium text-secondary hover:text-white hover:bg-white/5 transition-all mt-2"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={14} />
                    {language === "pt" ? "English" : "Português"}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-1.5 py-0.5 rounded text-white/70">
                    {language}
                  </span>
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
              onClick={(e) => e.stopPropagation()}
              className="absolute left-0 top-0 bottom-0 w-72 bg-surface border-r border-white/10 p-6 shadow-2xl"
            >
              <h3 className="text-white font-bold text-lg mb-6">{projectName}</h3>
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? `text-white bg-${projectColor}/10`
                        : "text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={`shrink-0 ${
                      activeSection === section.id ? `text-${projectColor}` : "text-secondary"
                    }`}>
                      {section.icon}
                    </span>
                    {section.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                <Link href="/projetos" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
                  <ArrowLeft size={16} />
                  Todos os Projetos
                </Link>
                {nextProject && (
                  <Link href={`/projetos/${nextProject.id}`} className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
                    <ChevronRight size={16} />
                    {nextProject.name}
                  </Link>
                )}
                
                <div className="pt-4 mt-2 border-t border-white/5">
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-between gap-2 px-3 py-3 rounded-xl text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Globe size={16} />
                      {language === "pt" ? "Switch to English" : "Mudar para Português"}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-1.5 py-0.5 rounded text-white/70">
                      {language}
                    </span>
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
