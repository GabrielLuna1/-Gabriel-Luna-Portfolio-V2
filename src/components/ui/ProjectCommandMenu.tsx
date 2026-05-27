"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, BookOpen } from "lucide-react";

interface CmdAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  keywords?: string;
  action: () => void;
}

interface ProjectCommandMenuProps {
  projectName: string;
  sections: { id: string; label: string; icon: React.ReactNode }[];
  actions: CmdAction[];
}

export function ProjectCommandMenu({ projectName, sections, actions }: ProjectCommandMenuProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        e.stopPropagation();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", down, true);
    return () => window.removeEventListener("keydown", down, true);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const sectionActions = sections.map((s) => ({
    id: `sec-${s.id}`,
    label: `Ir para: ${s.label}`,
    icon: s.icon,
    keywords: `${s.label} secao section scroll`,
    action: () => {
      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    },
  }));

  const allActions = [...sectionActions, ...actions];

  const filtered = allActions.filter((a) => {
    const q = query.toLowerCase();
    if (!q) return true;
    return a.label.toLowerCase().includes(q) || (a.keywords || "").includes(q);
  });

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      filtered[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, y: 10, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-xl bg-surface/80 backdrop-blur-2xl border border-white/[0.04] rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
            onKeyDown={handleKey}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.04] bg-white/[0.02]">
              <BookOpen size={14} className="text-secondary/60 shrink-0" />
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">{projectName}</span>
            </div>

            <div className="flex items-center px-5 py-2 border-b border-white/[0.04]">
              <Search className="w-5 h-5 text-secondary/50" />
              <input
                autoFocus
                type="text"
                placeholder={`Buscar no projeto...`}
                className="w-full bg-transparent p-4 text-white text-lg placeholder:text-secondary/40 focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKey}
              />
              <span className="text-[10px] font-mono font-bold text-secondary/60 border border-white/[0.04] bg-white/[0.02] px-2 py-1 rounded-md">ESC</span>
            </div>

            <div className="max-h-[350px] overflow-y-auto p-3 custom-scrollbar">
              {filtered.length === 0 ? (
                <div className="p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] flex items-center justify-center mb-3">
                    <Search className="w-5 h-5 text-secondary/40" />
                  </div>
                  <p className="text-sm font-medium text-secondary">Nenhum resultado encontrado para &quot;{query}&quot;.</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {filtered.map((action, i) => {
                    const isSelected = i === selectedIndex;
                    return (
                      <button
                        key={action.id}
                        onClick={action.action}
                        onMouseEnter={() => setSelectedIndex(i)}
                        className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left group relative overflow-hidden ${
                          isSelected ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="cmd-active-indicator"
                            className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full bg-primary"
                          />
                        )}
                        
                        <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                          isSelected ? "bg-primary/10 text-primary shadow-glow-sm" : "bg-surface-elevated/40 text-secondary border border-white/[0.04]"
                        }`}>
                          {action.icon}
                        </div>
                        
                        <span className={`flex-1 text-sm font-medium transition-colors ${
                          isSelected ? "text-white" : "text-secondary group-hover:text-white"
                        }`}>
                          {action.label}
                        </span>
                        
                        <ArrowRight className={`w-4 h-4 transition-all shrink-0 text-primary ${
                          isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="p-3 border-t border-white/[0.04] bg-white/[0.01] text-[10px] font-bold text-secondary/60 text-center flex gap-6 justify-center uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.04]">↑↓</kbd> Navegar</span>
              <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.04]">Enter</kbd> Selecionar</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
