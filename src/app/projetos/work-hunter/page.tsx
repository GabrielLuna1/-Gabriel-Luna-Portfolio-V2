"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Server, Database, Globe, Brain, Zap, Target, BarChart3, Shield, Cpu, Network, Layers, Workflow, GitBranch, FlaskConical, Radar, BookOpen } from "lucide-react";
import Link from "next/link";
import ProjectNavigation from "@/components/ui/ProjectNavigation";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";
import { ProjectNav } from "@/components/ui/ProjectNav";
import { ProjectCommandMenu } from "@/components/ui/ProjectCommandMenu";
import { useLanguage } from "@/contexts/LanguageContext";

const getFeatures = (lang: "pt" | "en") => [
  {
    title: lang === "pt" ? "Scraping Multi-Fonte Inteligente" : "Intelligent Multi-Source Scraping",
    description: lang === "pt" ? "Coleta automatizada de vagas de 9+ fontes (LinkedIn, Gupy, Indeed, Catho, InfoJobs, Glassdoor, GeekHunter, Programathor, Rocketseat) usando Playwright com fingerprints realistas e proxies rotativos anti-bloqueio." : "Automated job collection from 9+ sources (LinkedIn, Gupy, Indeed, etc.) using Playwright with realistic fingerprints and anti-blocking rotating proxies.",
    icon: Globe,
  },
  {
    title: lang === "pt" ? "Match Scoring com IA Local" : "Local AI Match Scoring",
    description: lang === "pt" ? "Análise profunda de currículo vs. vaga usando LLMs locais (Qwen 3.6 35B no LM Studio, com fallback cascade: Ollama Lllama → OpenRouter GPT-4o-mini). Score multidimendional com breakdown por skills, experiência e fit cultural." : "Deep analysis of resume vs. job description using local LLMs (Qwen 3.6 35B via LM Studio, cascading to Ollama → OpenRouter). Multidimensional score with skills, experience, and cultural fit breakdown.",
    icon: Brain,
  },
  {
    title: lang === "pt" ? "Auto-Apply Inteligente" : "Smart Auto-Apply",
    description: lang === "pt" ? "Candidatura automatizada com um clique em plataformas suportadas. Preenche formulários dinamicamente, anexa currículo otimizado por vaga e responde perguntas frequentes com contexto gerado por IA." : "One-click automated applications on supported platforms. Dynamically fills forms, attaches tailored resumes, and answers custom questions using AI-generated context.",
    icon: Zap,
  },
  {
    title: lang === "pt" ? "Pipeline Kanban Analítico" : "Analytical Kanban Pipeline",
    description: lang === "pt" ? "Pipeline visual de 8 estágios com métricas de tempo médio por estágio, taxa de conversão entre etapas e análise preditiva de probabilidade de avanço. Cada estágio dispara ações automáticas." : "8-stage visual pipeline featuring average time per stage, conversion rates between steps, and predictive advancement probability. Each stage triggers automated actions.",
    icon: Target,
  },
  {
    title: lang === "pt" ? "Rastreabilidade Pipeline-Currículo" : "Pipeline-Resume Traceability",
    description: lang === "pt" ? "Hashing SHA256 para deduplicação de currículos, histórico completo de versões, e rastreabilidade bidirecional: do currículo às vagas aplicadas e vice-versa." : "SHA256 hashing for resume deduplication, full version history, and bidirectional traceability mapping resumes directly to applied positions.",
    icon: GitBranch,
  },
  {
    title: lang === "pt" ? "Multi-Model Fallback Cascade" : "Multi-Model Fallback Cascade",
    description: lang === "pt" ? "Circuito inteligente de fallback: LM Studio → Ollama → OpenRouter, com health checks automáticos. Garante disponibilidade máxima sem depender de nuvem para operações core." : "Intelligent fallback circuit: LM Studio → Ollama → OpenRouter with automatic health checks. Guarantees maximum uptime without relying on cloud services for core operations.",
    icon: Cpu,
  },
];

const getArchitectureLayers = (lang: "pt" | "en") => [
  {
    title: "Frontend (Next.js 15 App Router)",
    items: lang === "pt" 
      ? ["Server Components + Client Islands", "Streaming SSR para páginas de vagas", "Real-time WebSocket para status de scraping", "Split Layout com ResizablePanel no hub", "Dashboard analítico com Recharts"]
      : ["Server Components + Client Islands", "Streaming SSR for job pages", "Real-time WebSockets for scraping status", "Split Layout with ResizablePanel", "Analytical dashboard with Recharts"],
    color: "text-primary",
    border: "border-primary/30",
  },
  {
    title: "API Gateway (FastAPI)",
    items: lang === "pt"
      ? ["Rotas RESTful versionadas (/api/v1)", "Celery Tasks para scraping assíncrono", "Validação com Pydantic v2", "Rate limiting e autenticação JWT", "WebSocket para eventos em tempo real"]
      : ["Versioned RESTful routes (/api/v1)", "Celery Tasks for async scraping", "Pydantic v2 data validation", "Rate limiting and JWT authentication", "WebSockets for real-time events"],
    color: "text-sky-400",
    border: "border-sky-400/30",
  },
  {
    title: "Workers & Scraping (Playwright + Celery)",
    items: lang === "pt"
      ? ["Workers isolados em pool configurável", "Playwright com stealth mode e proxies rotativos", "Beautiful Soup para parsing secundário", "Respeito a robots.txt e rate limits", "Fila de tarefas com Redis + Celery"]
      : ["Isolated workers in a configurable pool", "Playwright with stealth mode and rotating proxies", "Beautiful Soup for secondary parsing", "Respects robots.txt and rate limits", "Task queue powered by Redis + Celery"],
    color: "text-sky-400",
    border: "border-sky-400/30",
  },
  {
    title: "IA Engine (LM Studio + Ollama + OpenRouter)",
    items: lang === "pt"
      ? ["Cascade fallback automático multi-modelo", "Fine-tuning de prompts por tipo de vaga", "Embeddings para similaridade semântica", "Cache de respostas com TTL configurável", "Logging de inferência para auditoria"]
      : ["Automatic multi-model fallback cascade", "Prompt fine-tuning by job type", "Embeddings for semantic similarity", "Response caching with configurable TTL", "Inference logging for auditing"],
    color: "text-purple-400",
    border: "border-purple-400/30",
  },
  {
    title: "Data Layer (MongoDB + Redis)",
    items: lang === "pt"
      ? ["MongoDB: vagas, currículos, pipelines, logs", "Redis: cache, fila Celery, sessões", "Índices compostos para busca full-text", "TTL automático para dados temporários", "GridFS para armazenamento de currículos"]
      : ["MongoDB: jobs, resumes, pipelines, logs", "Redis: cache, Celery queue, sessions", "Compound indexes for full-text search", "Automatic TTL for temporary data", "GridFS for resume storage"],
    color: "text-amber-400",
    border: "border-amber-400/30",
  },
];

const getTechDetails = (lang: "pt" | "en") => [
  { name: "FastAPI", desc: lang === "pt" ? "Backend assíncrono com REST e WebSockets" : "Async backend with REST and WebSockets", icon: Server },
  { name: "Next.js 15", desc: lang === "pt" ? "App Router com Server Components" : "App Router with Server Components", icon: Code2 },
  { name: "MongoDB", desc: lang === "pt" ? "Banco NoSQL flexível" : "Flexible NoSQL database", icon: Database },
  { name: "Playwright", desc: lang === "pt" ? "Browser headless para scraping" : "Headless browser for stealth scraping", icon: Globe },
  { name: "LM Studio / Ollama", desc: lang === "pt" ? "LLMs locais sem dependência cloud" : "Local LLMs without cloud dependency", icon: Brain },
  { name: "Celery + Redis", desc: lang === "pt" ? "Workers e filas distribuídas" : "Distributed queues and workers", icon: Cpu },
  { name: "Python", desc: lang === "pt" ? "Workers e processamento de IA" : "Scraping workers and AI processing", icon: FlaskConical },
  { name: "TypeScript", desc: lang === "pt" ? "Tipagem estática" : "Static typing across the stack", icon: Code2 },
];

const getNavSections = (lang: "pt" | "en") => [
  { id: "wh-hero", label: lang === "pt" ? "Visão Geral" : "Overview", icon: <BookOpen size={16} /> },
  { id: "wh-tech", label: "Stack", icon: <Code2 size={16} /> },
  { id: "wh-features", label: lang === "pt" ? "Funcionalidades" : "Features", icon: <Layers size={16} /> },
  { id: "wh-architecture", label: lang === "pt" ? "Arquitetura" : "Architecture", icon: <Server size={16} /> },
  { id: "wh-flow", label: lang === "pt" ? "Fluxo de Dados" : "Data Flow", icon: <Workflow size={16} /> },
];

const getCmdActions = (lang: "pt" | "en", features: any[], techDetails: any[]) => [
  { id: "gh", label: lang === "pt" ? "Ver Código no GitHub" : "View Code on GitHub", icon: <Github size={16} />, keywords: "github codigo repo code", action: () => window.open("https://github.com/GabrielLuna1/job-hunter-ai", "_blank") },
  { id: "demo", label: lang === "pt" ? "Ver Demo Online" : "View Live Demo", icon: <ExternalLink size={16} />, keywords: "demo online ao vivo live", action: () => window.open("https://github.com/GabrielLuna1/job-hunter-ai", "_blank") },
  ...features.map((f, i) => ({
    id: `feat-${i}`, label: `Feature: ${f.title}`, icon: <Target size={16} />, keywords: `${f.title} feature funcionalidade`, action: () => document.getElementById("wh-features")?.scrollIntoView({ behavior: "smooth" }),
  })),
  ...techDetails.map((t, i) => ({
    id: `tech-${i}`, label: `Tech: ${t.name}`, icon: <Code2 size={16} />, keywords: `${t.name} ${t.desc} tecnologia tech`, action: () => document.getElementById("wh-tech")?.scrollIntoView({ behavior: "smooth" }),
  })),
];

const getFlowSteps = (lang: "pt" | "en") => [
  { step: "01", title: lang === "pt" ? "Descoberta" : "Discovery", desc: lang === "pt" ? "Playwright coleta vagas de 9+ fontes com stealth mode e proxies rotativos." : "Playwright collects jobs from 9+ sources using stealth mode and proxies.", icon: Radar },
  { step: "02", title: lang === "pt" ? "Análise" : "Analysis", desc: lang === "pt" ? "IA local analisa a vaga contra o currículo: skills, senioridade, fit cultural." : "Local AI analyzes the job against your resume: skills, seniority, and cultural fit.", icon: Brain },
  { step: "03", title: "Match Score", desc: lang === "pt" ? "Score multidimendional com breakdown visual e explicação por IA." : "Multidimensional scoring with visual breakdown and AI explanation.", icon: BarChart3 },
  { step: "04", title: "Pipeline", desc: lang === "pt" ? "Vaga entra no Kanban de 8 estágios com automações por etapa." : "Job enters the 8-stage Kanban pipeline with per-stage automations.", icon: Workflow },
  { step: "05", title: "Auto-Apply", desc: lang === "pt" ? "Candidatura automatizada com currículo otimizado por vaga." : "Automated applications utilizing a resume tailored specifically for the job.", icon: Zap },
  { step: "06", title: "Tracking", desc: lang === "pt" ? "Acompanhamento em tempo real com métricas e análises preditivas." : "Real-time tracking with metrics and predictive analytics.", icon: Target },
];

const pageContent = {
  pt: {
    backBtn: "Voltar para Projetos",
    heroBadge: "Inteligência Artificial & Automação",
    heroDesc: "Um ecossistema completo de automação de busca de empregos. De scraping multi-fonte a candidaturas automatizadas e match scoring com IA local — tudo offline-first e self-hosted.",
    btnCode: "Ver Código",
    btnDemo: "Ver Demo Online",
    statsTitle: "Arquitetura em Números",
    stats: [
      { label: "Fontes de Vagas", value: "9+" },
      { label: "Modelos de IA", value: "3+1" },
      { label: "Estágios Pipeline", value: "8" },
      { label: "Workers Máx.", value: "16" },
      { label: "Fallback Tiers", value: "3" },
      { label: "Linguagens", value: "4" },
    ],
    techTitle: "Stack Tecnológica",
    featuresTitle: "Funcionalidades Estratégicas",
    featuresDesc: "Cada funcionalidade foi desenhada para resolver um problema real do ecossistema de busca de empregos.",
    archTitle: "Arquitetura Multicamadas",
    archDesc: "Uma arquitetura de microsserviços moderna, projetada para escalabilidade horizontal e resiliência.",
    flowTitle: "Fluxo de Dados",
    flowDesc: "O ciclo completo: da descoberta de vagas à candidatura inteligente.",
  },
  en: {
    backBtn: "Back to Projects",
    heroBadge: "Artificial Intelligence & Automation",
    heroDesc: "A comprehensive job search automation ecosystem. From multi-source scraping to automated applications and local AI match scoring — all offline-first and self-hosted.",
    btnCode: "View Code",
    btnDemo: "Live Demo",
    statsTitle: "Architecture by the Numbers",
    stats: [
      { label: "Job Sources", value: "9+" },
      { label: "AI Models", value: "3+1" },
      { label: "Pipeline Stages", value: "8" },
      { label: "Max Workers", value: "16" },
      { label: "Fallback Tiers", value: "3" },
      { label: "Languages", value: "4" },
    ],
    techTitle: "Technology Stack",
    featuresTitle: "Strategic Features",
    featuresDesc: "Each feature was engineered to solve a real-world bottleneck in the modern job search ecosystem.",
    archTitle: "Multi-Tier Architecture",
    archDesc: "A modern microservices architecture designed for horizontal scalability and resilience.",
    flowTitle: "Data Flow",
    flowDesc: "The complete cycle: from intelligent job discovery to automated application.",
  }
};

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
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      <ProjectNav
        projectName="WorkHunter"
        projectColor="primary"
        sections={navSections}
        prevProject={{ id: "stockmaster-pro", name: "StockMaster Pro" }}
      />
      <ProjectCommandMenu
        projectName="WorkHunter"
        sections={navSections}
        actions={cmdActions}
      />

      <ParallaxOrb color="bg-primary/10" size={500} top="5%" right="-10%" blur={140} yOffset={150} />
      <ParallaxOrb color="bg-purple-500/10" size={400} bottom="20%" left="-10%" blur={120} yOffset={-100} />

      {/* Hero */}
      <section id="wh-hero" className="container mx-auto px-4 max-w-6xl mb-24 relative z-10">
        <Link href="/projetos" className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
          {t.backBtn}
        </Link>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <Brain size={16} />
              {t.heroBadge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
            >
              Work<span className="text-primary">Hunter</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary leading-relaxed mb-8"
            >
              {t.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://github.com/GabrielLuna1/job-hunter-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20">
                <Github size={20} />
                {t.btnCode}
              </a>
              <a href="https://github.com/GabrielLuna1/job-hunter-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface/50 border border-white/10 text-white font-medium hover:bg-white/5 transition-all hover:-translate-y-0.5">
                <ExternalLink size={20} />
                {t.btnDemo}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-surface/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4">{t.statsTitle}</h3>
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="bg-background/50 rounded-xl p-4 border border-white/5">
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="wh-tech" className="border-y border-white/5 bg-surface/20 py-20 mb-24 relative">
        <div className="absolute inset-0 bg-cross opacity-30" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-semibold text-secondary uppercase tracking-widest mb-12 text-center"
          >
            {t.techTitle}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techDetails.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-background/50 border border-white/5 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{tech.name}</h3>
                  <p className="text-xs text-secondary/70">{tech.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="wh-features" className="container mx-auto px-4 max-w-6xl mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-white mb-4"
        >
          {t.featuresTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-secondary mb-12 max-w-2xl"
        >
          {t.featuresDesc}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-surface/30 border border-white/5 p-6 rounded-2xl hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-secondary/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Arquitetura */}
      <section id="wh-architecture" className="container mx-auto px-4 max-w-6xl mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-white mb-4"
        >
          {t.archTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-secondary mb-12 max-w-2xl"
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
              className="bg-surface/30 border border-white/5 rounded-xl p-6 hover:bg-surface/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`w-1 h-full min-h-[80px] bg-white/5 rounded-full mt-1 shrink-0`} style={{ width: 3, backgroundColor: `color-mix(in srgb, ${layer.color.replace('text-', '')} 20%, transparent)` }} />
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${layer.color} mb-3`}>{layer.title}</h3>
                  <ul className="space-y-2">
                    {layer.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-secondary/80">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${layer.color} bg-current shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fluxo de Dados */}
      <section id="wh-flow" className="border-y border-white/5 bg-surface/20 py-20 mb-24 relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-black text-white mb-4 text-center"
          >
            {t.flowTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-secondary mb-12 text-center max-w-2xl mx-auto"
          >
            {t.flowDesc}
          </motion.p>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />

            {flowSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-6 mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-[10px] font-bold tracking-widest text-primary">{step.step}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-secondary/80 max-w-md inline-block">{step.desc}</p>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-surface border border-primary/30 rounded-full items-center justify-center shrink-0 relative z-10">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectNavigation
        nextProject={{ id: "stockmaster-pro", name: "StockMaster Pro" }}
      />
    </main>
  );
}
