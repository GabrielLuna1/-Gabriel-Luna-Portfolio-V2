"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy (Detector de Seção)
      const sections = ["about", "tech", "experience", "projects", "education"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajuste fino para detectar quando a seção está visível
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCommandMenu = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, metaKey: true }),
    );
  };

  const navItems = [
    { name: t("nav.about"), href: "#about", id: "about" },
    { name: t("nav.stack"), href: "#tech", id: "tech" },
    { name: t("nav.career"), href: "#experience", id: "experience" },
    { name: t("nav.projects"), href: "#projects", id: "projects" },
    { name: t("nav.studies"), href: "#education", id: "education" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = id.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 100; // Offset maior para garantir que o título não fique escondido
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-2xl border-b border-white/5" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* 1. LOGO: Mantendo grande e chamativa, mas sem 'flex-shrink' rígido */}
        <div className="flex-shrink-0 w-[140px]">
          {" "}
          {/* Largura fixa para ajudar na centralização do nav */}
          <a
            href="#"
            className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter hover:opacity-90 transition-opacity flex items-baseline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            GL
            <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">
              .
            </span>
          </a>
        </div>

        {/* 2. MENU DESKTOP: CORRIGIDO (Sem Absolute) */}
        {/* Usamos flex-1 e justify-center para ele ocupar o espaço central naturalmente */}
        <nav className="hidden xl:flex items-center justify-center flex-1">
          <div className="flex items-center gap-1 p-1.5 bg-surface/50 backdrop-blur-sm border border-white/5 rounded-full px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary shadow-[0_0_10px_rgba(var(--primary),0.2)]"
                    : "text-secondary hover:text-primary hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* 3. AÇÕES DIREITA: Barra de Pesquisa */}
        <div className="hidden md:flex items-center justify-end gap-4 flex-1 xl:flex-none xl:w-auto">
          <button
            onClick={openCommandMenu}
            // Ajuste responsivo: w-full em telas menores, fixo em telas grandes
            className="hidden lg:flex items-center justify-between w-[200px] 2xl:w-[280px] px-4 py-2.5 rounded-xl bg-surface/50 border border-white/10 text-secondary hover:border-primary/50 hover:text-white hover:bg-surface transition-all group shadow-inner"
            title={t("nav.search")}
          >
            <div className="flex items-center gap-3">
              <Search
                size={18}
                className="group-hover:text-primary transition-colors"
              />
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100 truncate">
                {t("nav.search")}...
              </span>
            </div>
            <kbd className="hidden 2xl:inline-flex h-6 items-center gap-1 rounded border border-white/10 bg-black/20 px-2 font-mono text-[10px] font-bold text-secondary group-hover:text-primary group-hover:border-primary/30">
              <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>K
            </kbd>
          </button>

          <div className="h-6 w-px bg-white/10 hidden lg:block" />

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all text-xs font-bold uppercase"
            >
              <Globe size={18} />
              {language}
            </button>

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="ml-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 whitespace-nowrap"
              onClick={(e: any) => handleScrollTo(e, "#contact")}
            >
              {t("nav.cta")}
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 xl:hidden">
          <button
            onClick={openCommandMenu}
            className="text-secondary hover:text-primary md:hidden"
          >
            <Search size={24} />
          </button>
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold uppercase text-secondary border border-white/10 px-2 py-1 rounded md:hidden"
          >
            {language}
          </button>
          <button
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 xl:hidden flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`p-4 text-lg font-medium rounded-xl transition-colors ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-secondary hover:bg-white/5 hover:text-white"
                }`}
                onClick={(e) => handleScrollTo(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Button
              href="#contact"
              variant="primary"
              className="w-full py-4 text-lg"
              onClick={(e: any) => handleScrollTo(e, "#contact")}
            >
              {t("nav.cta")}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
