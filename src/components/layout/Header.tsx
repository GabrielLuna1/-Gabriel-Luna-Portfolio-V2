"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";

function useIsMac() {
  return useSyncExternalStore(
    () => () => {},
    () => navigator.platform.toUpperCase().indexOf("MAC") >= 0,
    () => false
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const isMac = useIsMac();
  const pathname = usePathname();
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "tech", "experience", "projects", "education"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCommandMenu = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, metaKey: true })
    );
  };

  const navItems = [
    { name: t("nav.home") || "Inicio", href: "#", id: "home" },
    { name: t("nav.about"), href: "#about", id: "about" },
    { name: t("nav.stack"), href: "#tech", id: "tech" },
    { name: t("nav.career"), href: "#experience", id: "experience" },
    { name: t("nav.studies"), href: "#education", id: "education" },
    { name: t("nav.projects"), href: "#projects", id: "projects" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = id.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  if (pathname?.startsWith("/projetos")) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-strong py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-[120px]">
            <a
              href="#"
              className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter hover:opacity-90 transition-opacity flex items-baseline"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              GL<span className="gradient-text">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1 p-1.5 bg-surface/30 backdrop-blur-sm border border-white/5 rounded-full px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`relative px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Actions Right */}
          <div className="hidden md:flex items-center justify-end gap-3 flex-1 xl:flex-none xl:w-auto">
            <button
              onClick={openCommandMenu}
              className="hidden lg:flex items-center justify-between w-[200px] 2xl:w-[260px] px-3 py-2 rounded-xl bg-surface/30 border border-white/5 text-secondary hover:border-primary/30 hover:text-white transition-all group"
              title={t("nav.search")}
            >
              <div className="flex items-center gap-2.5">
                <Search
                  size={16}
                  className="group-hover:text-primary transition-colors"
                />
                <span className="text-xs font-medium opacity-60 group-hover:opacity-100 truncate">
                  {t("nav.search")}...
                </span>
              </div>
              <kbd className="hidden 2xl:inline-flex h-5 items-center gap-1 rounded border border-white/10 bg-black/20 px-1.5 font-mono text-[10px] font-bold text-secondary group-hover:text-primary group-hover:border-primary/20">
                <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>K
              </kbd>
            </button>

            <div className="h-5 w-px bg-white/10 hidden lg:block" />

            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all text-xs font-bold uppercase"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                {language}
              </button>

              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="shadow-glow whitespace-nowrap"
                onClick={(e) => { e.preventDefault(); handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact"); }}
              >
                {t("nav.cta")}
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={openCommandMenu}
              className="text-secondary hover:text-primary p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold uppercase text-secondary border border-white/10 px-2 py-1 rounded lg:hidden"
              aria-label="Toggle language"
            >
              {language}
            </button>
            <button
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-surface border-l border-white/5 xl:hidden flex flex-col"
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <span className="text-lg font-display font-bold text-white">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-secondary"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sheet Nav */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      href={item.href}
                      className={`p-3 rounded-xl text-sm font-semibold transition-colors ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-secondary hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={(e) => handleScrollTo(e, item.href)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                <div className="my-4 h-px bg-white/5" />

                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full"
              onClick={(e) => { e.preventDefault(); handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact"); }}
                >
                  {t("nav.cta")}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
