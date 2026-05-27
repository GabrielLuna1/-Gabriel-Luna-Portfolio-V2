"use client";

import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <a
              href="#"
              onClick={scrollToTop}
              className="text-5xl font-display font-black text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            >
              GL<span className="gradient-text">.</span>
            </a>
            <p className="text-secondary text-base leading-relaxed max-w-md font-medium">
              {t("footer.description")}
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/GabrielLuna1"
                target="_blank"
                className="p-3 glass rounded-xl text-secondary hover:text-white hover:border-primary/30 transition-all group"
                aria-label="GitHub"
              >
                <Github
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://linkedin.com/in/gabriel-luna-14b00821b"
                target="_blank"
                className="p-3 glass rounded-xl text-secondary hover:text-white hover:border-primary/30 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="mailto:gabriellunajob@gmail.com"
                className="p-3 glass rounded-xl text-secondary hover:text-white hover:border-primary/30 transition-all group"
                aria-label="Email"
              >
                <Mail
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-5 text-base">
              {t("footer.menu")}
            </h4>
            <ul className="space-y-1">
              {[
                { href: "/#about", label: t("nav.about") },
                { href: "/#tech", label: t("nav.stack") },
                { href: "/#projects", label: t("nav.projects") },
                { href: "/#experience", label: t("nav.career") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-primary group-hover:shadow-glow transition-all" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-5 text-base">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/GabrielLuna1?tab=repositories"
                  target="_blank"
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all text-sm"
                >
                  <Github
                    size={16}
                    className="text-white/30 group-hover:text-primary transition-colors"
                  />
                  <span className="font-medium">{t("footer.repos")}</span>
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GabrielLuna1"
                  target="_blank"
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all text-sm"
                >
                  <Github
                    size={16}
                    className="text-white/30 group-hover:text-primary transition-colors"
                  />
                  <span className="font-medium">{t("footer.profile")}</span>
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-xs font-medium">
            &copy; {new Date().getFullYear()} Gabriel Luna.
            <span className="hidden md:inline mx-2 opacity-30">|</span>
            <span className="block md:inline mt-2 md:mt-0 opacity-60">
              {t("footer.stack")}{" "}
              <span className="text-white/80 font-semibold">Next.js</span>,{" "}
              <span className="text-white/80 font-semibold">Tailwind</span> &{" "}
              <span className="text-white/80 font-semibold">Framer Motion</span>.
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors px-4 py-2 rounded-full border border-white/5 hover:border-primary/20 hover:bg-white/5 bg-surface/30"
          >
            {t("footer.back_to_top")}
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
