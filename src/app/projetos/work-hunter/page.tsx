"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Server, Database, Globe, Brain, Zap, Target, BarChart3, Cpu, Network, Layers, Workflow, GitBranch, FlaskConical, Radar, BookOpen } from "lucide-react";
import Link from "next/link";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";
import { ProjectNav } from "@/components/ui/ProjectNav";
import { ProjectCommandMenu } from "@/components/ui/ProjectCommandMenu";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { FloatingTechTags } from "@/components/ui/FloatingTechTags";

const getFeatures = (lang: "pt" | "en") => [
  {
    title: lang === "pt" ? "Scraping Inteligente" : "Smart Scraping",
    description: lang === "pt" ? "Coleta automatizada de 9+ fontes com proxies rotativos anti-bloqueio." : "Automated collection from 9+ sources with anti-blocking rotating proxies.",
    icon: Globe,
  },
  {
    title: lang === "pt" ? "Match Scoring com IA" : "AI Match Scoring",
    description: lang === "pt" ? "Análise profunda de currículo vs vaga usando LLMs locais (Qwen 3.6 35B)." : "Deep analysis of resume vs job using local LLMs (Qwen 3.6 35B).",
    icon: Brain,
  },
  {
    title: lang === "pt" ? "Auto-Apply" : "Auto-Apply",
    description: lang === "pt" ? "Candidatura em 1-clique com preenchimento dinâmico de formulários." : "1-click applications with dynamic form filling and context generation.",
    icon: Zap,
  },
  {
    title: lang === "pt" ? "Kanban Analítico" : "Analytical Kanban",
    description: lang === "pt" ? "Pipeline visual com métricas preditivas de probabilidade de avanço." : "Visual pipeline with predictive advancement probability metrics.",
    icon: Target,
  },
  {
    title: lang === "pt" ? "Rastreabilidade SHA256" : "SHA256 Traceability",
    description: lang === "pt" ? "Deduplicação de currículos e mapeamento bidirecional vaga-currículo." : "Resume deduplication and bidirectional job-resume mapping.",
    icon: GitBranch,
  },
  {
    title: lang === "pt" ? "Fallback Cascade" : "Fallback Cascade",
    description: lang === "pt" ? "Circuito LM Studio → Ollama → OpenRouter para alta disponibilidade." : "LM Studio → Ollama → OpenRouter circuit for high availability.",
    icon: Cpu,
  },
];

const getArchitectureLayers = (lang: "pt" | "en") => [
  {
    title: "Frontend (Next.js 15)",
    items: lang === "pt" 
      ? ["Server Components", "Streaming SSR", "WebSocket Real-time", "ResizablePanel Hub"]
      : ["Server Components", "Streaming SSR", "Real-time WebSockets", "ResizablePanel Hub"],
    color: "text-primary",
  },
  {
    title: "API Gateway (FastAPI)",
    items: lang === "pt"
      ? ["RESTful API v1", "Pydantic v2", "JWT Auth", "WebSocket Events"]
      : ["RESTful API v1", "Pydantic v2", "JWT Auth", "WebSocket Events"],
    color: "text-emerald-400",
  },
  {
    title: "Workers (Celery)",
    items: lang === "pt"
      ? ["Playwright Stealth", "Redis Queue", "Rate limits", "Beautiful Soup"]
      : ["Playwright Stealth", "Redis Queue", "Rate limits", "Beautiful Soup"],
    color: "text-amber-400",
  },
  {
    title: "IA Engine",
    items: lang === "pt"
      ? ["LM Studio", "Ollama Fallback", "Semantic Embeddings", "Prompt Fine-tuning"]
      : ["LM Studio", "Ollama Fallback", "Semantic Embeddings", "Prompt Fine-tuning"],
    color: "text-purple-400",
  },
];

const getTechDetails = (lang: "pt" | "en") => [
  { name: "FastAPI", desc: "Async REST Backend", icon: Server },
  { name: "Playwright", desc: "Headless Scraping", icon: Globe },
  { name: "LM Studio", desc: "Local LLMs", icon: Brain },
  { name: "Celery", desc: "Distributed Workers", icon: Cpu },
];

const getNavSections = (lang: "pt" | "en") => [
  { id: "wh-hero", label: lang === "pt" ? "Visão Geral" : "Overview", icon: <BookOpen size={16} /> },
  { id: "wh-features", label: lang === "pt" ? "Funcionalidades" : "Features", icon: <Layers size={16} /> },
  { id: "wh-architecture", label: lang === "pt" ? "Arquitetura" : "Architecture", icon: <Server size={16} /> },
  { id: "wh-flow", label: lang === "pt" ? "Fluxo" : "Flow", icon: <Workflow size={16} /> },
];

const getCmdActions = (lang: "pt" | "en", features: any[], techDetails: any[]) => [
  { id: "gh", label: "GitHub", icon: <Github size={16} />, action: () => window.open("https://github.com/GabrielLuna1/job-hunter-ai", "_blank") },
];

const getFlowSteps = (lang: "pt" | "en") => [
  { step: "01", title: lang === "pt" ? "Descoberta" : "Discovery", desc: lang === "pt" ? "Playwright coleta vagas de 9+ fontes com stealth mode." : "Playwright collects jobs from 9+ sources using stealth mode.", icon: Radar },
  { step: "02", title: lang === "pt" ? "Análise" : "Analysis", desc: lang === "pt" ? "IA local analisa a vaga contra o currículo do candidato." : "Local AI analyzes the job against your resume.", icon: Brain },
  { step: "03", title: "Match Score", desc: lang === "pt" ? "Score multidimendional com explicação por IA." : "Multidimensional scoring with AI explanation.", icon: BarChart3 },
  { step: "04", title: "Auto-Apply", desc: lang === "pt" ? "Candidatura automatizada com currículo otimizado." : "Automated applications tailored specifically for the job.", icon: Zap },
];

const pageContent = {
  pt: {
    backBtn: "Voltar",
    heroDesc: "Plataforma inteligente que unifica scraping multi-fonte, match por inteligência artificial, auto-apply, pipeline kanban e analytics em tempo real.",
    btnCode: "Repositório",
    statsTitle: "Capacidade",
    stats: [
      { label: "Fontes", value: "9+" },
      { label: "Modelos IA", value: "4" },
      { label: "Estágios", value: "8" },
      { label: "Workers", value: "16" },
    ],
    featuresTitle: "Core Features.",
    featuresDesc: "Inteligência artificial aplicada para automatizar o funil de contratação.",
    archTitle: "Architecture.",
    archDesc: "Arquitetura de microsserviços projetada para processamento assíncrono e inferência de IA local.",
    flowTitle: "Pipeline.",
    flowDesc: "O ciclo de vida completo de uma vaga através do ecossistema.",
  },
  en: {
    backBtn: "Back",
    heroDesc: "Intelligent platform that unifies multi-source scraping, artificial intelligence matching, auto-apply, kanban pipeline, and real-time analytics.",
    btnCode: "Repository",
    statsTitle: "Capacity",
    stats: [
      { label: "Sources", value: "9+" },
      { label: "AI Models", value: "4" },
      { label: "Stages", value: "8" },
      { label: "Workers", value: "16" },
    ],
    featuresTitle: "Core Features.",
    featuresDesc: "Artificial intelligence applied to automate the hiring funnel.",
    archTitle: "Architecture.",
    archDesc: "Microservices architecture designed for asynchronous processing and local AI inference.",
    flowTitle: "Pipeline.",
    flowDesc: "The complete lifecycle of a job opportunity through the ecosystem.",
  }
};

const floatingTags = [
  { name: "Python", icon: <Code2 size={12} /> },
  { name: "Playwright", icon: <Globe size={12} /> },
  { name: "Celery", icon: <Cpu size={12} /> },
  { name: "Docker", icon: <Server size={12} /> },
  { name: "FastAPI", icon: <Zap size={12} /> },
  { name: "MongoDB", icon: <Database size={12} /> },
  { name: "React", icon: <Layers size={12} /> },
];

export default function WorkHunterPage() {
  const { language } = useLanguage();
  const t = pageContent[language];

  const features = getFeatures(language);
  const architectureLayers = getArchitectureLayers(language);
  const techDetails = getTechDetails(language);
  const navSections = getNavSections(language);
  const cmdActions = getCmdActions(language, features, techDetails);
  const flowSteps = getFlowSteps(language);

  return (
    <main className="min-h-screen bg-[#020202] pt-32 pb-24 relative overflow-hidden transition-all">
      {/* Mesh Background — pure dark focus */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-noise opacity-[0.03]" />

      <ProjectNav
        projectName="Job Hunter"
        projectColor="primary"
        sections={navSections}
        prevProject={{ id: "stockmaster", name: "StockMaster Pro" }}
      />
      <ProjectCommandMenu
        projectName="Job Hunter"
        sections={navSections}
        actions={cmdActions}
      />

      {/* Hero Section — Centered Documentation Style */}
      <section id="wh-hero" className="container mx-auto px-4 max-w-4xl mb-32 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Floating tech tags behind the title */}
        <FloatingTechTags tags={floatingTags} colorTheme="primary" />

        <div className="text-center relative z-10 w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated/40 border border-white/[0.04] text-[10px] text-secondary font-mono tracking-wider uppercase mb-12 shadow-sm"
          >
            <span>Projetos</span>
            <span className="text-white/20">&gt;</span>
            <span className="text-white font-bold">Job Hunter</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[7rem] font-display font-black tracking-tighter mb-8 leading-[1]"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Job Hunter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-secondary/80 leading-relaxed mb-12 max-w-2xl font-medium"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <a 
              href="https://github.com/GabrielLuna1/job-hunter-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1e40af] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-all shadow-[0_0_40px_rgba(30,64,175,0.6)] hover:shadow-[0_0_60px_rgba(30,64,175,0.8)] border border-blue-400/20 group"
            >
              <Github size={18} />
              {t.btnCode}
              <ArrowLeft size={16} className="rotate-135 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Little Tech Orbs */}
            <div className="flex -space-x-3">
              {['PY', 'FA', 'NE', 'MO'].map((tech, i) => (
                <div key={tech} className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[9px] font-bold font-mono text-secondary z-10 hover:z-20 hover:scale-110 hover:border-blue-500/50 hover:text-white transition-all cursor-default shadow-lg">
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-secondary">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowLeft size={14} className="-rotate-90 text-secondary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Grid */}
      <section className="container mx-auto px-4 max-w-5xl mb-32 relative z-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {techDetails.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-strong border border-white/[0.04] group hover:border-blue-400/30 transition-colors"
              >
                <Icon size={18} className="text-blue-400/60 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-bold text-white tracking-wide">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="section-fade-separator max-w-4xl mx-auto" />

      {/* Features */}
      <section id="wh-features" className="container mx-auto px-4 max-w-5xl py-24 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-4"
          >
            {t.featuresTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-secondary"
          >
            {t.featuresDesc}
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="card-premium p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-white/[0.04] flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-500 shadow-elevated">
                  <Icon className="text-blue-400 opacity-80 group-hover:opacity-100" size={20} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <div className="section-fade-separator max-w-4xl mx-auto" />

      {/* Architecture & Flow — Split Layout */}
      <section id="wh-architecture" className="container mx-auto px-4 max-w-5xl py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Architecture */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-display font-black text-white tracking-tighter mb-4"
            >
              {t.archTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary text-sm mb-12"
            >
              {t.archDesc}
            </motion.p>

            <div className="space-y-4">
              {architectureLayers.map((layer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-spotlight p-6 elevation-2 border border-white/[0.04] bg-surface/40 hover:bg-surface/60 transition-colors"
                >
                  <h3 className={`text-xs font-mono tracking-wider uppercase font-bold ${layer.color} mb-4`}>
                    {layer.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item, j) => (
                      <span key={j} className="inline-flex items-center px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] text-secondary/80 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Flow */}
          <div id="wh-flow">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-display font-black text-white tracking-tighter mb-4"
            >
              {t.flowTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary text-sm mb-12"
            >
              {t.flowDesc}
            </motion.p>

            <div className="relative pl-6">
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent" />

              <div className="space-y-10">
                {flowSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute -left-[30px] top-1 w-3 h-3 bg-[#020202] border-2 border-blue-500 rounded-full flex items-center justify-center z-10">
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                      </div>
                      
                      <h3 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                        <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 rounded">{step.step}</span>
                        {step.title}
                      </h3>
                      <p className="text-sm text-secondary/80 leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
