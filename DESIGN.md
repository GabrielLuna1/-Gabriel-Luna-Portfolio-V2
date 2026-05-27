# Diretrizes de Design & Identidade Visual (V2)

Este documento centraliza as definições de UI/UX, tokens de design e regras de composição visual para garantir a consistência de todo o ecossistema do portfólio.

## 1. Identidade Visual e Cores
O portfólio adota uma estética "Dark Mode Premium", inspirada em interfaces modernas de IA e SaaS enterprise.

- **Cor Base (Background)**: `#09090B` (Preto Profundo) - Fundo escuro puro que maximiza contraste com elementos luminosos e preserva a estética limpa. Diferente de Slate-900, não possui undertone azulado.
- **Surface (Camadas)**: `#18181B` (Cinza Zinc-900) com diferentes níveis de opacidade e blur para efeitos de glassmorphism.
- **Primária (Azul Forge)**: `#3B82F6` (Blue-500) - Usada para CTAs, glows, links importantes e a marca registrada "GL.". Substituiu o ciano #22D3EE para uma identidade mais sóbria e profissional.
- **Secundária**: `#A1A1AA` (Zinc-400) - Usada para textos descritivos e subtítulos, oferecendo legibilidade sem competir com o branco puro.
- **Acentos Específicos**:
  - `StockMaster`: Tons de Azul (`#3B82F6`) para transmitir dados e logística segura.
  - `WorkHunter`: Tons de Azul (`#3B82F6`) e Índigo para tecnologia analítica e IA.

## 2. Tipografia
- **Display (Títulos)**: `Outfit` ou fonte sans-serif limpa e geométrica. Usada em pesos fortes (Bold/Black) com tracking ajustado (`tracking-tighter`).
- **Body (Corpo)**: `Inter` ou similar para legibilidade máxima em textos de componentes descritivos e artigos.

## 3. UI Patterns & Estilização

### Glassmorphism & Profundidade
Ao invés de caixas sólidas, os cards utilizam:
```css
bg-surface/50 backdrop-blur-sm border border-white/5
```
Isso gera uma sensação de hierarquia flutuante e espacial (profundidade). Os hovers devem sutilmente aumentar a opacidade do fundo ou o brilho da borda (`hover:border-primary/30`).

### Glows e Luz Dinâmica
Para destacar áreas focais (Hero, botões de ação), usamos orbes desfocados no fundo ou sombras intensas nos botões:
- **Botão Primário**: `shadow-[0_0_20px_rgba(var(--primary),0.3)]`
- **Orbe de Fundo**: `bg-primary/10 rounded-full blur-[120px]`

## 4. Animações (Motion Design)
Utilizamos `framer-motion` em todo o projeto. A regra principal é: **fluidez e sutileza**.

- **Reveal Animations**: Elementos devem surgir levemente de baixo para cima (`y: 20 -> 0`) com `opacity: 0 -> 1`.
- **Micro-interações**: Botões e cards escalam sutilmente (`scale: 1.02` ou `translate-y-1`) ao hover, adicionando uma resposta tátil virtual sem balançar o layout.
- **Scroll Progress**: Utilizado na seção de Tecnologias para guiar o usuário visualmente sobre o volume de conteúdo consumido/disponível.

## 5. Experiência de Uso (UX)
- **Navegação Inteligente**: A presença do `CommandMenu` (Ctrl+K) não deve ser apenas um atalho de páginas, mas um **índice de conhecimento**, onde o usuário pode buscar por stacks ou termos (ex: "Scraping") e ser guiado até a solução.
- **Acessibilidade**: Contraste garantido entre texto (Branco/Secundária) e fundo (Grafite escuro).

---
> "O design não deve apenas parecer bom, deve parecer vivo."
