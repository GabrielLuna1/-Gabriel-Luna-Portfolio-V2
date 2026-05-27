"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Sparkles, ShieldAlert, GripHorizontal } from "lucide-react";
import { qaDatabase } from "@/data/case-knowledge/portfolio";
import { TfidfEngine } from "@/lib/tfidf";
import { analyzeThreat } from "@/lib/chat-security";

const quickActions = [
  "Quais projetos você já fez?",
  "Quem é Gabriel?",
  "Quais skills técnicas?",
  "Como entrar em contato?",
];

const dotVariants = {
  initial: { y: 0 },
  animate: (i: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      delay: i * 0.15,
      ease: "easeInOut" as const,
    },
  }),
};

export function CaseChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai", text: string }[]>([
    { role: "ai", text: "Olá! Sou o assistente do Gabriel. Pergunte sobre projetos, skills, experiência ou carreira — ou escolha uma sugestão abaixo." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastSent, setLastSent] = useState(0);
  const [violationsCount, setViolationsCount] = useState(0);
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [blockedThreat, setBlockedThreat] = useState<string | null>(null);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const engine = useMemo(() => new TfidfEngine(qaDatabase), []);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = useCallback(async (text: string) => {
    const now = Date.now();

    // Check cooldown
    if (now < cooldownUntil) {
      const remaining = Math.ceil((cooldownUntil - now) / 1000 / 60);
      setBlockedThreat(`Cooldown ativo (DoS protection). Tente novamente em ${remaining} min.`);
      setTimeout(() => setBlockedThreat(null), 3000);
      return;
    }

    // Rate limiting (1 msg/second)
    if (now - lastSent < 1000) {
      const newCount = violationsCount + 1;
      setViolationsCount(newCount);
      
      if (newCount >= 3) {
        setCooldownUntil(now + 5 * 60 * 1000); // 5 min cooldown
        setBlockedThreat("Rate limit excedido (3 violações). Cooldown de 5 minutos ativado.");
        setTimeout(() => setBlockedThreat(null), 5000);
        return;
      }

      setBlockedThreat(`Aguarde 1 segundo entre mensagens (Aviso ${newCount}/3)`);
      setTimeout(() => setBlockedThreat(null), 2000);
      return;
    }

    const threat = analyzeThreat(text);
    if (threat.blocked) {
      setBlockedThreat(`Ameaça bloqueada: ${threat.threat}`);
      setTimeout(() => setBlockedThreat(null), 3000);
      return;
    }

    // Reset violations upon successful message
    setViolationsCount(0);

    setShowQuickActions(false);
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    setLastSent(now);

    await new Promise(r => setTimeout(r, 600 + Math.random() * 400));

    const results = engine.query(text);
    let response: string;
    if (results.length > 0 && results[0].score > 0.3) {
      response = results[0].entry.answer;
    } else if (results.length > 0) {
      const suggestions = results.slice(0, 3).map((r) => `"${r.entry.question}"`).join("\n");
      response = `Não encontrei uma resposta exata, mas talvez se interesse por:\n\n${suggestions}\n\nOu reformule sua pergunta.`;
    } else {
      response = "Não encontrei uma resposta. Tente perguntar sobre quem é Gabriel, projetos, skills, contato ou experiência.";
    }

    setMessages(prev => [...prev, { role: "ai", text: response }]);
    setIsTyping(false);
    setShowQuickActions(true);
  }, [lastSent, engine]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    sendMessage(text);
  }, [input, sendMessage]);

  const handleSendDirect = useCallback((text: string) => {
    sendMessage(text);
  }, [sendMessage]);

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-[0_0_24px_rgba(59,130,246,0.45)] flex items-center justify-center group overflow-hidden border border-white/10 hover:shadow-[0_0_32px_rgba(59,130,246,0.6)] transition-shadow duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <div className="absolute inset-0 rounded-full animate-pulse ring-2 ring-primary/40" />
        <MessageCircle size={22} />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: isMinimized ? 0 : 0,
          }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: "spring", stiffness: 250, damping: 28, mass: 0.9 }}
          style={{ transformOrigin: "bottom right" }}
          className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-32px)] bg-[#030303]/90 backdrop-blur-3xl border border-white/[0.08] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div
            className="relative bg-gradient-to-r from-blue-500/10 via-[#050505]/50 to-transparent border-b border-white/[0.08] p-4 flex items-center justify-between cursor-pointer select-none"
            onClick={() => isMinimized && setIsMinimized(false)}
          >
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 bg-primary/15 rounded-xl border border-primary/25">
                <Sparkles size={16} className="text-primary" />
                <div className="absolute inset-0 rounded-xl bg-primary/5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-semibold text-sm tracking-tight">Copilot</h3>
                  <span className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-[10px] font-medium text-primary leading-none">
                    {qaDatabase.length} Q&A
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="relative w-1.5 h-1.5">
                    <span className="absolute inset-0 bg-green-500 rounded-full" />
                    <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-60" />
                  </span>
                  <span className="text-[11px] text-secondary">Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }}
                className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-secondary hover:text-white"
                aria-label="Minimizar"
              >
                <GripHorizontal size={15} />
              </button>
              <button
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setIsOpen(false);
                  setTimeout(() => {
                    setMessages([{ role: "ai", text: "Olá! Sou o assistente do Gabriel. Pergunte sobre projetos, skills, experiência ou carreira — ou escolha uma sugestão abaixo." }]);
                    setShowQuickActions(true);
                    setViolationsCount(0);
                    setBlockedThreat(null);
                  }, 300); // Clear after animation finishes
                }}
                className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-secondary hover:text-red-400"
                aria-label="Fechar"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Minimized state - compact bar */}
          {isMinimized ? (
            <div
              onClick={() => setIsMinimized(false)}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <Sparkles size={15} className="text-primary shrink-0" />
              <span className="text-xs text-secondary truncate">
                {messages.length > 1
                  ? messages[messages.length - 1].text.slice(0, 60) + "..."
                  : "Copilot pronto para ajudar"}
              </span>
            </div>
          ) : (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-5 custom-scrollbar" style={{ minHeight: "320px", maxHeight: "380px" }}>
                {messages.map((msg, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "ai" ? (
                      <div className="flex items-start gap-2.5 max-w-[90%]">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mt-0.5">
                          <Sparkles size={13} className="text-primary" />
                        </div>
                        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm glass-shine">
                          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-primary/40 rounded-full" />
                          <p className="text-[13px] text-secondary/90 leading-relaxed pl-2.5">{msg.text}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-[85%] bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl rounded-br-sm px-4 py-3 shadow-[0_4px_20px_rgba(59,130,246,0.3)] border border-blue-400/20">
                        <p className="text-[13px] leading-relaxed">{msg.text}</p>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Quick Actions */}
                {showQuickActions && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {quickActions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setShowQuickActions(false);
                          setInput(q);
                          handleSendDirect(q);
                        }}
                        className="px-3 py-1.5 bg-blue-500/[0.04] border border-blue-500/20 rounded-full text-[11px] text-blue-300/80 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/[0.15] hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="shrink-0 w-7 h-7 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
                      <Sparkles size={13} className="text-primary" />
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl rounded-tl-sm px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            custom={i}
                            variants={dotVariants}
                            initial="initial"
                            animate="animate"
                            className="w-1.5 h-1.5 bg-primary/50 rounded-full block"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={endOfMessagesRef} />
              </div>

              {/* Threat alert */}
              <AnimatePresence>
                {blockedThreat && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="mx-4 mb-2 p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center gap-2.5"
                  >
                    <ShieldAlert size={14} className="text-amber-400 shrink-0" />
                    <span className="text-[12px] text-amber-300/90 font-medium">{blockedThreat}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Area */}
              <div className="p-4 bg-surface/20 border-t border-white/5">
                <div className="relative flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !isTyping && handleSend()}
                    placeholder="Pergunte sobre arquitetura, projetos..."
                    className="w-full bg-[#000000]/50 border border-white/[0.08] shadow-inner rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-secondary/40 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 focus:bg-[#050505] transition-all"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="absolute right-1.5 p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-blue-500/25"
                  >
                    <Send size={15} />
                  </button>
                </div>
                <p className="text-[10px] text-secondary/30 text-center mt-2">
                  Respostas baseadas na base de conhecimento do portfólio
                </p>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
