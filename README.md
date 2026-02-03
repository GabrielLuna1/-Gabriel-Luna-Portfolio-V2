# 🚀 Gabriel Luna | Full Stack Portfolio

![Project Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

> **Arquitetura Escalável, i18n & Engenharia de Performance**

Este projeto representa a evolução técnica do meu perfil profissional. Mais do que um portfólio visual, é uma aplicação **Full Stack** moderna que resolve problemas reais de engenharia de software, como invalidade de cache em SPAs e internacionalização sem flicker.

---

## 📸 Preview

![Preview do Projeto]([INSIRA O CAMINHO DO SEU PRINT DE CAPA AQUI])

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Arquitetura Técnica](#-arquitetura-técnica)
- [Engenharia & Performance (Destaques)](#-engenharia--performance)
- [Estrutura de Pastas](#-estrutura-de-pastas)

---

## 💡 Sobre o Projeto

### FASE 1: CONCEPÇÃO & PRODUTO

O objetivo foi transformar uma vitrine estática em uma ferramenta de comunicação global e resiliente.

- **Global Ready:** Sistema de tradução (PT/EN) via Context API com troca instantânea.
- **Smart UX:** Navegação fluida, scroll spy, feedback visual e adaptação total para Mobile.
- **Identidade Visual:** "Tech Premium" — Utilizando Grid Pattern, Glassmorphism (efeito vidro) e Glows estratégicos sobre um tema Deep Space (`#0A0A0A`).

---

## 🛠 Arquitetura Técnica

### FASE 2: STACK & DADOS

O projeto foi construído sobre pilares de **Clean Code** e **Performance**.

| Categoria | Tecnologias |
|-----------|-------------|
| **Core** | Next.js 14 (App Router), React 19|
| **Linguagem** | TypeScript (Strict Mode) |
| **Estilo** | Tailwind CSS, Framer Motion (Animações), Lucide React (Ícones) |
| **Deploy** | Vercel Edge Network |

#### Engenharia de Dados
- **Desacoplamento:** Todo o conteúdo textual vive em `src/data/`, separado da lógica visual. Isso permite atualizar textos e projetos sem risco de quebrar o layout.
- **Versionamento:** Script customizado (`generate-version.js`) que roda no build para controle de cache.

---

## ⚙️ Engenharia & Performance

Aqui estão os diferenciais técnicos que elevam este projeto além de um site estático comum.

### 1. AutoUpdate & Cache Busting (Version Polling) 🔄
**O Problema:** Em Single Page Applications (SPAs), usuários que deixam a aba aberta por dias não recebem novas atualizações (CSS/JS) a menos que recarreguem a página manualmente, podendo causar quebras visuais.

**A Solução:**
1.  Um script (`generate-version.js`) roda antes do build e cria um arquivo `version.json` com um ID único.
2.  O componente invisível `<AutoUpdate />` faz polling no cliente a cada 60 segundos.
3.  Se a versão do servidor diferir da versão local, o sistema força uma atualização limpa e silenciosa.

### 2. Internacionalização (i18n) Nativa 🌐
Implementação de um **LanguageProvider** proprietário utilizando React Context.
- Dicionários de tradução separados (`pt.ts` / `en.ts`).
- Zero "Layout Shift" ou "Flicker" durante a troca de idioma.
- Persistência de preferência do usuário.

---

## 📂 Estrutura de Pastas

```
src/
├── app/               # Next.js App Router & Layouts
├── components/
│   ├── layout/        # Header, Footer (Estruturais)
│   ├── sections/      # Blocos de conteúdo (Hero, Projects, About)
│   ├── ui/            # Design System (Buttons, Badges)
│   └── utils/         # Lógica invisível (AutoUpdate.tsx)
├── contexts/          # Gestão de Estado Global (LanguageContext)
└── data/              # Conteúdo estático tipado (CMS-like)
generate-version.js    # Script de versionamento pré-build
```
📬 Contato
Projeto desenvolvido e mantido por Gabriel Luna. Código limpo, interfaces vivas.

Entre em contato através do meu LinkedIn ou e-mail: gabriellunajob@gmail.com.
