
```
███████╗██╗   ██╗██╗     ██╗     ███████╗████████╗ █████╗  ██████╗██╗  ██╗
██╔════╝██║   ██║██║     ██║     ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║  ██║
█████╗  ██║   ██║██║     ██║     █████╗     ██║   ███████║██║     ███████║
██╔══╝  ██║   ██║██║     ██║     ██╔══╝     ██║   ██╔══██║██║     ██╔══██║
██║     ╚██████╔╝███████╗███████╗███████╗   ██║   ██║  ██║╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
```

**Portfólio Full Stack** · Next.js 14 · TypeScript · Tailwind CSS · Vercel

[![Project Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)](https://github.com/GabrielLuna1/-Gabriel-Luna-Portfolio-V2)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[🔗 **gabriel-luna-portfolio-v2.vercel.app**](https://gabriel-luna-portfolio-v2.vercel.app) · [📋 Roadmap](#-roadmap) · [🚀 Instalação](#-instalação)

---

## O Projeto

Mais que um portfólio visual — uma aplicação **Full Stack** moderna que resolve problemas reais de engenharia de software: invalidade de cache em SPAs, internacionalização sem flicker e performance em rede global.

| Métrica | Valor |
|---------|-------|
| Performance Lighthouse | 98 |
| Acessibilidade | 87 |
| Boas Práticas | 100 |
| SEO | 100 |
| Idiomas | PT / EN |
| Componentes | 40+ |
| Dependências | ~15 pacotes |

---

## Funcionalidades

### 🌐 Internacionalização Nativa — Zero Flicker
Sistema de tradução PT/EN via Context API com troca instantânea, persistência de preferência e dicionários desacoplados — sem layout shift durante a troca.

### 🔄 AutoUpdate & Cache Busting
Componente invisível que faz polling de versão a cada 60s. Se o servidor tem uma versão mais nova, força atualização limpa sem o usuário perceber — resolve o problema clássico de SPAs estagnadas em abas abertas.

### 🎨 Design System "Tech Premium"
Tema Deep Space (`#0A0A0A`), Grid Pattern, Glassmorphism, Glows estratégicos, animações com Framer Motion e tipografia refinada. 100% responsivo.

### 🧠 Dados Desacoplados (CMS-like)
Todo conteúdo textual vive em `src/data/`, separado da lógica visual. Atualiza textos e projetos sem tocar em componentes.

---

## Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                          │
│         React 19 · Framer Motion · Tailwind CSS             │
│              Context API (i18n) · Lucide                    │
└───────────────────────┬─────────────────────────────────────┘
                        │ HTTP / SSR / SSG
┌───────────────────────▼─────────────────────────────────────┐
│                    NEXT.JS 14 (Vercel)                       │
│          App Router · RSC · Static Generation               │
│              API Routes (Formspree) · ISR                   │
└───────────────────────┬─────────────────────────────────────┘
                        │ Data Layer
┌───────────────────────▼─────────────────────────────────────┐
│                     STATIC DATA (src/data/)                  │
│     projects.ts · experience.ts · education.ts · stack.ts   │
│               pt.ts · en.ts · case-knowledge/               │
└─────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

### Core

| Tecnologia | Versão | Função |
|------------|--------|--------|
| **Next.js** | 14 | App Router, RSC, Static Generation, ISR |
| **TypeScript** | 5.9 | Tipagem estática strict mode |
| **React** | 19 | Componentes Server + Client |
| **Tailwind CSS** | 3 | Design system responsivo |

### UI & Animações

| Tecnologia | Versão | Função |
|------------|--------|--------|
| **Framer Motion** | 11 | Animações declarativas, scroll spy, parallax |
| **Lucide React** | — | Sistema de ícones vetoriais |

### Deploy & CI

| Tecnologia | Função |
|------------|--------|
| **Vercel** | Edge Network, CDN global, deploy automático |
| **GitHub Actions** | CI/CD via push |

---

## Engenharia & Performance

### AutoUpdate (Version Polling)

**Problema:** SPAs com abas abertas por dias não recebem novas versões de CSS/JS sem refresh manual.

**Solução:**
1. `generate-version.js` gera `version.json` com hash único no build
2. Componente `<AutoUpdate />` faz polling a cada 60s
3. Versão diferente → refresh limpo e silencioso

### i18n Nativo

Implementação proprietária com React Context:
- Dicionários separados (`pt.ts` / `en.ts`)
- Zero layout shift na troca de idioma
- Persistência em localStorage
- Provider com fallback para idioma do navegador

### Performance

- Static Generation para páginas de projeto
- Imagens otimizadas via Next.js Image
- Lazy loading de seções abaixo da dobra
- CSS purgado via Tailwind (Zero CSS não utilizado em prod)

---

## Estrutura

```
portfolio-v2/
├── public/              # Assets estáticos
├── src/
│   ├── app/
│   │   ├── api/         # API Routes (contato)
│   │   ├── projetos/    # Páginas de projeto [slug]
│   │   ├── globals.css  # Estilos globais + design tokens
│   │   └── layout.tsx   # Root layout
│   ├── components/
│   │   ├── layout/      # Header, Footer, Sidebar
│   │   ├── sections/    # Hero, Projects, About
│   │   ├── ui/          # Design System (Button, Badge)
│   │   └── utils/       # AutoUpdate.tsx
│   ├── contexts/        # LanguageContext (i18n)
│   └── data/            # CMS-like (projetos, skills, etc.)
├── generate-version.js  # Script de versionamento
├── DESIGN.md            # Design System
├── next.config.ts
└── tailwind.config.ts
```

---

## Deploy

```
git push origin main
      │
      ▼
  Vercel Git Integration
      │
      ▼
  Build (generate-version.js → version.json)
      │
      ▼
  Static Generation + ISR
      │
      ▼
  Edge Network (CDN Global)
      │
      ▼
  gabriel-luna-portfolio-v2.vercel.app  ✓
```

---

## Métricas do Sistema

```
┌──────────────────────────────────┐
│   GABRIEL LUNA · PORTFOLIO V2   │
│         EM NÚMEROS              │
├────────────────┬─────────────────┤
│ Performance    │ 98 Lighthouse   │
│ Páginas        │ 10+ rotas       │
│ Componentes    │ 40+             │
│ Idiomas        │ 2 (PT/EN)       │
│ Dependências   │ ~15 pacotes     │
│ Deploy         │ Vercel (auto)   │
│ Cache          │ ISR + Polling   │
│ Build          │ Turbopack       │
│ Responsivo     │ ✓ Mobile/Tablet │
└────────────────┴─────────────────┘
```

---

## Roadmap

- [x] Hero com efeito parallax e foto com rings
- [x] Sistema de tradução PT/EN (Context API)
- [x] Scroll spy com animações de entrada
- [x] Páginas dinâmicas de projetos
- [x] AutoUpdate com version polling
- [x] Chatbot interativo com IA (case-knowledge)
- [x] Glassmorphism + Grid Pattern design
- [ ] Modo escuro customizável
- [ ] Preview de vídeo nos projetos
- [ ] Blog integrado (MDX)
- [ ] PWA com Service Worker
- [ ] Analytics self-hosted

---

## Instalação

```bash
# Clone
git clone https://github.com/GabrielLuna1/-Gabriel-Luna-Portfolio-V2.git
cd -Gabriel-Luna-Portfolio-V2

# Instale
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Autor

**Gabriel Luna**

[![GitHub](https://img.shields.io/badge/GitHub-GabrielLuna1-181717?style=for-the-badge&logo=github)](https://github.com/GabrielLuna1) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Gabriel%20Luna-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/gabriel-luna-14b00821b/)

📧 gabriellunajob@gmail.com

---

**Gabriel Luna · Portfolio V2** · Versão 2.0 · Junho 2026

*Construído com Next.js, TypeScript e Tailwind CSS*

[🔗 gabriel-luna-portfolio-v2.vercel.app](https://gabriel-luna-portfolio-v2.vercel.app)
