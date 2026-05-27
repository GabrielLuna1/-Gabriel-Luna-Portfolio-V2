"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gabriellunajob@gmail.com");
    setHasCopiedEmail(true);
    setTimeout(() => setHasCopiedEmail(false), 2000);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqnrzgn";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
        event.currentTarget.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Ops! Algo deu errado.");
      }
    } catch {
      setErrorMessage("Erro de conexao. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClasses = "w-full bg-surface-elevated/40 border border-white/[0.04] rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/8 transition-all duration-300 placeholder:text-white/15 hover:border-white/8";
  const labelClasses = "text-[10px] text-secondary font-mono uppercase font-bold tracking-wider";

  return (
    <section id="contact" className="py-28 bg-background overflow-hidden relative">
      {/* Background mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-mesh opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          number="06"
          subtitle={t("contact.subtitle")}
          title={t("contact.title")}
        />

        <div className="grid lg:grid-cols-2 gap-14 mt-16 items-start">
          {/* Contact Info */}
          <Reveal direction="left" delay={0.1}>
            <div className="space-y-6">
              <p className="text-secondary text-body-lg leading-relaxed max-w-md">
                {t("contact.text")}
              </p>

              <div className="space-y-3">
                {/* Email Card */}
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center gap-3 p-4 rounded-xl card-premium hover:border-primary/20 transition-all group text-left relative overflow-hidden"
                  aria-label="Copy email"
                >
                  <div className="p-2.5 rounded-lg bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-secondary/60 font-mono uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-white font-medium text-sm">
                      gabriellunajob@gmail.com
                    </p>
                  </div>
                  <div className="text-secondary group-hover:text-primary transition-colors">
                    {hasCopiedEmail ? (
                      <Check size={18} className="text-success" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </div>
                  {hasCopiedEmail && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute right-12 text-xs font-bold text-success"
                    >
                      Copiado!
                    </motion.span>
                  )}
                </button>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/gabriel-luna-14b00821b"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-xl card-premium hover:border-[#0A66C2]/20 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/8 text-primary group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-secondary/60 font-mono uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <p className="text-white font-medium text-sm">Gabriel Luna</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/GabrielLuna1"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-xl card-premium hover:border-white/15 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/8 text-primary group-hover:bg-white group-hover:text-background transition-all duration-300">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-secondary/60 font-mono uppercase tracking-wider">
                      GitHub
                    </p>
                    <p className="text-white font-medium text-sm">GabrielLuna1</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full -z-10 opacity-10" />

              <div className="p-7 rounded-2xl card-premium relative overflow-hidden">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mb-5 border border-success/15"
                    >
                      <CheckCircle size={36} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-display font-bold text-white mb-2"
                    >
                      {t("contact.success.title")}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-secondary mb-6 leading-relaxed max-w-xs text-sm"
                    >
                      {t("contact.success.text")}
                    </motion.p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="w-full"
                    >
                      {t("contact.btn.again")}
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className={labelClasses}>
                          {t("contact.form.name")}
                        </label>
                        <input
                          name="name"
                          required
                          type="text"
                          placeholder="Seu nome"
                          className={inputClasses}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClasses}>
                          {t("contact.form.email")}
                        </label>
                        <input
                          name="email"
                          required
                          type="email"
                          placeholder="seu@email.com"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className={labelClasses}>
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder={t("contact.form.placeholder")}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-xl bg-error/8 border border-error/15 text-error text-sm flex items-center gap-2"
                      >
                        <span className="text-xs">!</span> {errorMessage}
                      </motion.div>
                    )}

                    <Button
                      className="w-full py-5"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {!isSubmitting && (
                        <>
                          {t("contact.btn.send")} <Send size={16} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
