"use client";

import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* 1. GRID PATTERN (Fundo) */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,black_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* --- COLUNA 1 & 2: MARCA --- */}
          <div className="md:col-span-2 space-y-8">
            <a
              href="#"
              onClick={scrollToTop}
              className="text-5xl font-display font-black text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            >
              GL
              <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.6)]">
                .
              </span>
            </a>
            {/* TRADUÇÃO AQUI 👇 */}
            <p className="text-secondary text-lg leading-relaxed max-w-md font-medium">
              {t("footer.description")}
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/GabrielLuna1"
                target="_blank"
                className="p-4 bg-surface/50 border border-white/10 rounded-2xl text-secondary hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all group"
                aria-label="GitHub"
              >
                <Github
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://linkedin.com/in/gabriel-luna-14b00821b"
                target="_blank"
                className="p-4 bg-surface/50 border border-white/10 rounded-2xl text-secondary hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="mailto:gabriellunajob@gmail.com"
                className="p-4 bg-surface/50 border border-white/10 rounded-2xl text-secondary hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all group"
                aria-label="Email"
              >
                <Mail
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* --- COLUNA 3: MENU --- */}
          <div className="md:col-span-1">
            {/* TRADUÇÃO AQUI 👇 */}
            <h4 className="text-white font-bold mb-6 text-xl">
              {t("footer.menu")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="group flex items-center gap-3 px-4 py-3 rounded-full text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-all" />
                  <span className="text-base font-medium">
                    {t("nav.about")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  className="group flex items-center gap-3 px-4 py-3 rounded-full text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-all" />
                  <span className="text-base font-medium">
                    {t("nav.stack")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="group flex items-center gap-3 px-4 py-3 rounded-full text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-all" />
                  <span className="text-base font-medium">
                    {t("nav.projects")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="group flex items-center gap-3 px-4 py-3 rounded-full text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-all" />
                  <span className="text-base font-medium">
                    {t("nav.career")}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* --- COLUNA 4: RECURSOS --- */}
          <div className="md:col-span-1">
            {/* TRADUÇÃO AQUI 👇 */}
            <h4 className="text-white font-bold mb-6 text-xl">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/GabrielLuna1?tab=repositories"
                  target="_blank"
                  className="group flex items-center gap-3 px-4 py-3 rounded-full text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  <Github
                    size={18}
                    className="text-white/40 group-hover:text-primary transition-colors"
                  />
                  {/* TRADUÇÃO AQUI 👇 */}
                  <span className="text-base font-medium">
                    {t("footer.repos")}
                  </span>
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GabrielLuna1"
                  target="_blank"
                  className="group flex items-center gap-3 px-4 py-3 rounded-full text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  <Github
                    size={18}
                    className="text-white/40 group-hover:text-primary transition-colors"
                  />
                  {/* TRADUÇÃO AQUI 👇 */}
                  <span className="text-base font-medium">
                    {t("footer.profile")}
                  </span>
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-secondary text-sm font-medium">
            © {new Date().getFullYear()} Gabriel Luna.
            <span className="hidden md:inline mx-3 opacity-30">|</span>
            <span className="block md:inline mt-2 md:mt-0 opacity-70">
              {t("footer.stack")}{" "}
              <span className="text-white font-semibold">Next.js 14</span>,{" "}
              <span className="text-white font-semibold">Tailwind</span> &{" "}
              <span className="text-white font-semibold">Framer Motion</span>.
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white hover:text-primary transition-colors px-6 py-3 rounded-full border border-white/10 hover:border-primary/20 hover:bg-white/5 bg-surface/50"
          >
            {/* TRADUÇÃO AQUI 👇 */}
            {t("footer.back_to_top")}
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
