export interface QAEntry {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  tags: string[];
}

export const qaDatabase: QAEntry[] = [
  {
    id: "greeting-hello",
    keywords: ["ola", "oi", "hello", "hey", "eai", "e ai", "iae", "salve", "opa"],
    question: "Olá / Oi / Hey",
    answer:
      "Olá! 👋 Sou o assistente virtual do Gabriel. Posso te contar sobre os projetos dele, stack técnica, experiência e muito mais. O que você quer saber?",
    tags: ["greeting", "small-talk"],
  },
  {
    id: "greeting-goodmorning",
    keywords: ["bom dia", "boa tarde", "boa noite", "boas"],
    question: "Bom dia / Boa tarde / Boa noite",
    answer:
      "Olá, bom te ver por aqui! 😊 Pode perguntar o que quiser sobre o Gabriel — projetos, skills, experiência ou como entrar em contato.",
    tags: ["greeting", "small-talk"],
  },
  {
    id: "greeting-howareyou",
    keywords: ["tudo bem", "tudo bom", "como vai", "como esta", "como voce esta", "td bem", "blz", "beleza"],
    question: "Tudo bem? / Como vai?",
    answer:
      "Tudo ótimo, obrigado por perguntar! 😄 Estou aqui para responder sobre o Gabriel. Tem alguma dúvida sobre os projetos ou skills dele?",
    tags: ["greeting", "small-talk"],
  },
  {
    id: "greeting-thanks",
    keywords: ["obrigado", "obrigada", "valeu", "thanks", "thank you", "grato", "grata", "agradeco"],
    question: "Obrigado / Valeu",
    answer:
      "Disponha! 🙌 Se tiver mais alguma dúvida sobre o Gabriel ou os projetos, é só perguntar.",
    tags: ["greeting", "small-talk"],
  },
  {
    id: "greeting-bye",
    keywords: ["tchau", "ate mais", "ate logo", "xau", "bye", "goodbye", "falou", "fui", "adeus"],
    question: "Tchau / Até mais",
    answer:
      "Até mais! 👋 Foi um prazer. Se precisar de mais informações sobre o Gabriel, estarei aqui.",
    tags: ["greeting", "small-talk"],
  },
  {
    id: "greeting-help",
    keywords: ["ajuda", "help", "o que voce faz", "o que voce sabe", "como funciona", "menu", "opcoes", "o que posso perguntar"],
    question: "O que você faz? / Como funciona? / O que posso perguntar?",
    answer:
      "Posso responder sobre:\n\n• **Quem é o Gabriel** — trajetória, formação e valores\n• **Projetos** — StockMaster, WorkPlus, Galactic Luna, ESC Cursos e mais\n• **Skills técnicas** — frontend, backend, banco de dados, DevOps\n• **Experiência profissional** — onde trabalhou e o que entregou\n• **Contato** — LinkedIn, GitHub e e-mail\n• **Disponibilidade** — freelance e projetos\n\nPode perguntar em linguagem natural, sem precisar de comandos.",
    tags: ["greeting", "meta"],
  },
  {
    id: "about-who",
    keywords: ["quem", "gabriel", "voce", "sobre", "apresente", "apresentacao", "bio", "historia", "trajetoria"],
    question: "Quem é você? / Quem é o Gabriel? / Fale sobre você",
    answer:
      "Sou o Gabriel — desenvolvedor Full Stack apaixonado por criar experiências digitais que combinam performance técnica com design cuidadoso. Trabalho com o ecossistema React/Next.js no frontend e Node.js no backend, sempre com foco em código limpo, escalável e bem arquitetado. Gosto de resolver problemas reais e transformá-los em interfaces que as pessoas realmente querem usar.",
    tags: ["about", "identity"],
  },
  {
    id: "about-what-do",
    keywords: ["faz", "trabalha", "atua", "especialidade", "especializado", "area", "atuacao", "profissao", "dev", "desenvolvedor"],
    question: "O que você faz? / Qual sua especialidade?",
    answer:
      "Sou desenvolvedor Full Stack com foco em aplicações web modernas. No frontend, trabalho principalmente com React, Next.js e TypeScript. No backend, uso Node.js, REST APIs e bancos como MongoDB e PostgreSQL. Também cuido de coisas como autenticação, permissões (RBAC), otimização de performance e deploy. Se o projeto precisa de ponta a ponta, estou no jogo.",
    tags: ["about", "identity"],
  },
  {
    id: "about-age-experience",
    keywords: ["anos", "experiencia", "tempo", "quanto tempo", "senioridade", "junior", "pleno", "senior", "nivel"],
    question: "Quantos anos de experiência? / Qual seu nível?",
    answer:
      "Tenho alguns anos de experiência prática com desenvolvimento web, com projetos reais que vão desde dashboards complexos com controle de acesso até ferramentas de automação e IA. Me considero pleno, com pegada de sênior em arquitetura frontend e integração de sistemas.",
    tags: ["about", "experience"],
  },
  {
    id: "about-location",
    keywords: ["mora", "cidade", "estado", "pais", "brasil", "sao paulo", "sp", "local", "localizacao", "onde", "remoto", "presencial", "hibrido"],
    question: "Onde você mora? / Trabalha remoto?",
    answer:
      "Estou baseado em São Paulo, Brasil. Trabalho 100% remoto e tenho experiência com times distribuídos. Estou aberto tanto a projetos remotos quanto a posições que exigem presença em SP.",
    tags: ["about", "location"],
  },
  {
    id: "about-freelance-available",
    keywords: ["freelance", "freela", "disponivel", "disponibilidade", "aceita", "contrata", "contratado", "hire", "oportunidade", "vaga", "aberto", "projeto novo"],
    question: "Está disponível? / Aceita freela? / Pode ser contratado?",
    answer:
      "Sim, estou aberto a novas oportunidades! Seja para freelas pontuais, projetos de longa duração ou posições CLT/PJ. O melhor caminho é me chamar pelo LinkedIn ou mandar um e-mail — os links estão na seção de contato do portfólio.",
    tags: ["about", "availability", "contact"],
  },
  {
    id: "education-general",
    keywords: ["formacao", "estudo", "estudou", "faculdade", "graduacao", "universidade", "curso", "diploma", "certificado", "certificacao"],
    question: "Qual sua formação? / Fez faculdade?",
    answer:
      "Minha formação é uma combinação de educação formal e aprendizado contínuo. Tenho cursos nas áreas de desenvolvimento web, arquitetura de software e tecnologias modernas como React, Node.js e TypeScript. Também invisto em cursos especializados de plataformas reconhecidas na área.",
    tags: ["education"],
  },
  {
    id: "education-courses",
    keywords: ["cursos", "plataforma", "udemy", "rocketseat", "alura", "coursera", "dio", "bootcamp", "treinamento", "formacao"],
    question: "Quais cursos você fez?",
    answer:
      "Passei por formações focadas em desenvolvimento Full Stack moderno, incluindo trilhas de React, Next.js, Node.js e TypeScript. Também tenho estudos em arquitetura de software, clean code e ferramentas de DevOps. O aprendizado aqui nunca para — a área muda rápido e acompanhar isso é parte do trabalho.",
    tags: ["education", "courses"],
  },
  {
    id: "skills-general",
    keywords: ["skills", "skill", "tecnologia", "tecnologias", "tech", "stack", "ferramentas", "conhecimento", "conhecimentos", "domina", "sabe"],
    question: "Quais são suas skills? / Quais tecnologias você usa?",
    answer:
      "As principais tecnologias do dia a dia:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n**Backend:** Node.js, Express, REST APIs, Server Actions, FastAPI\n**Banco de dados:** MongoDB, PostgreSQL\n**Auth & Segurança:** NextAuth, JWT, RBAC\n**DevOps / Infra:** Docker, Git, GitHub Actions, Vercel\n**IA / Automação:** Integração com LLMs (LM Studio, OpenRouter), automação de workflows",
    tags: ["skills", "tech"],
  },
  {
    id: "skills-frontend",
    keywords: ["frontend", "front end", "front-end", "react", "nextjs", "next js", "typescript", "javascript", "tailwind", "css", "html", "interface", "ui", "componente"],
    question: "Quais suas skills de frontend? / Você sabe React/Next.js?",
    answer:
      "Frontend é onde passo a maior parte do tempo. Trabalho com React e Next.js como base, TypeScript para tipagem sólida, Tailwind CSS para estilização e Framer Motion para animações. Tenho bastante experiência com arquitetura de componentes, gerenciamento de estado e otimização de performance (lazy loading, code splitting, Server Components).",
    tags: ["skills", "frontend"],
  },
  {
    id: "skills-backend",
    keywords: ["backend", "back end", "back-end", "node", "nodejs", "api", "rest", "servidor", "server", "express", "endpoint"],
    question: "Quais suas skills de backend? / Você faz API?",
    answer:
      "No backend trabalho com Node.js e Express para APIs REST, além de Server Actions do Next.js para lógica server-side integrada. Tenho experiência com autenticação (NextAuth, JWT), middleware, controle de acesso com RBAC e integração com bancos de dados relacionais e não-relacionais.",
    tags: ["skills", "backend"],
  },
  {
    id: "skills-database",
    keywords: ["banco", "banco de dados", "database", "mongodb", "postgresql", "postgres", "sql", "nosql", "prisma", "mongoose", "query", "dados"],
    question: "Quais bancos de dados você usa? / Sabe MongoDB? / Sabe PostgreSQL?",
    answer:
      "Trabalho com MongoDB (via Mongoose) para dados flexíveis e com documentos complexos — como no StockMaster. Também uso PostgreSQL para dados relacionais mais estruturados. Em ambos os casos, prezo por modelagem eficiente, indexação correta e queries otimizadas para não travar a aplicação em escala.",
    tags: ["skills", "database"],
  },
  {
    id: "skills-devops",
    keywords: ["devops", "docker", "git", "github", "actions", "ci", "cd", "deploy", "vercel", "pipeline", "infra", "infraestrutura", "cloud"],
    question: "Você trabalha com DevOps? / Usa Docker?",
    answer:
      "Sim! Uso Docker para containerização e ambientes consistentes, GitHub Actions para CI/CD, e Vercel para deploy de aplicações Next.js. Não sou especialista em infra, mas conheço bem o ciclo de vida do deploy e sei resolver a maioria dos problemas de ambiente e pipeline.",
    tags: ["skills", "devops"],
  },
  {
    id: "skills-ai",
    keywords: ["ia", "ai", "inteligencia artificial", "llm", "openai", "gpt", "claude", "modelo", "machine learning", "ml", "automacao", "nlp"],
    question: "Você trabalha com IA? / Usa LLMs?",
    answer:
      "Sim, tenho integrado IA em projetos práticos. No WorkPlus, por exemplo, uso LLMs para analisar compatibilidade entre vagas e perfil do candidato e para geração de cartas de apresentação personalizadas. Trabalho com APIs de modelos de linguagem e sei integrar IA como ferramenta de produtividade em aplicações reais.",
    tags: ["skills", "ai", "workhunter"],
  },
  {
    id: "skills-auth-security",
    keywords: ["autenticacao", "autenticação", "auth", "seguranca", "segurança", "jwt", "oauth", "nextauth", "permissao", "permissão", "acesso", "rbac", "login", "sessao"],
    question: "Você implementa autenticação? / Sabe RBAC?",
    answer:
      "Sim. Tenho experiência sólida com autenticação via NextAuth (OAuth e credenciais), JWT e controle de acesso baseado em papéis (RBAC). No StockMaster implementei um sistema RBAC completo com 4 níveis de permissão, protegendo rotas, ações e dados conforme o papel do usuário.",
    tags: ["skills", "auth", "security"],
  },
  {
    id: "skills-web-integration",
    keywords: ["web integration", "integracao web", "coleta dados", "dados web", "fontes abertas", "integração"],
    question: "Você faz integração com fontes web? / Usa APIs?",
    answer:
      "Sim! No WorkPlus construí um sistema de integração que consulta vagas em múltiplas plataformas de tecnologia de forma automatizada. Trabalho com APIs REST e consulta a sites de carreira para centralizar oportunidades de forma organizada.",
    tags: ["skills", "scraping", "workhunter"],
  },
  {
    id: "portfolio-overview",
    keywords: ["portfolio", "projetos", "projeto", "o que criou", "o que desenvolveu", "trabalhos", "trabalho", "lista", "quais projetos"],
    question: "Quais projetos você tem? / Me mostra o portfólio",
    answer:
      "Os projetos principais são:\n\n• **StockMaster** — sistema de gestão de estoque com RBAC, relatórios e auditoria\n• **WorkPlus** — plataforma de busca e gestão de vagas tech com match por IA local\n• **Galactic Luna** — e-commerce com loja virtual e painel de gerenciamento\n• **ESC Cursos** — plataforma educacional completa\n• **Este portfólio** — com design system próprio, animações e este chat\n\nPode perguntar mais detalhes de qualquer um deles!",
    tags: ["portfolio", "projects"],
  },
  {
    id: "portfolio-count",
    keywords: ["quantos", "numero", "total", "count", "lista completa"],
    question: "Quantos projetos você tem?",
    answer:
      "O portfólio apresenta 4 projetos principais — StockMaster, WorkPlus, Galactic Luna e ESC Cursos — além do próprio portfólio, que também é um projeto por si só. Cada um resolve um problema diferente e demonstra stacks e técnicas distintas.",
    tags: ["portfolio", "projects"],
  },
  {
    id: "portfolio-comparison",
    keywords: ["diferenca", "diferença", "comparacao", "comparação", "compara", "versus", "vs", "melhor", "stockmaster workplus", "workplus stockmaster", "stockmaster workhunter", "workhunter stockmaster"],
    question: "Qual a diferença entre StockMaster e WorkPlus?",
    answer:
      "São projetos com propósitos completamente diferentes:\n\n**StockMaster** é voltado para empresas — um sistema interno de gestão de estoque, com controle de usuários, permissões, relatórios e auditoria. O foco é confiabilidade, rastreabilidade e segurança de dados corporativos.\n\n**WorkPlus** é voltado para candidatos — uma plataforma que centraliza a busca de vagas tech, calculando compatibilidade via IA local e organizando o pipeline seletivo. O foco é inteligência de mercado e experiência do usuário.\n\nUm é B2B, o outro é B2C. Stacks similares, arquiteturas bem diferentes.",
    tags: ["portfolio", "stockmaster", "workhunter", "comparison"],
  },
  {
    id: "stockmaster-overview",
    keywords: ["stockmaster", "estoque", "gestao", "sistema gestao", "erp", "inventario"],
    question: "O que é o StockMaster?",
    answer:
      "StockMaster é um sistema de gestão de estoque full stack, projetado para empresas que precisam de controle real sobre seu inventário. Inclui controle de acesso com RBAC (4 papéis: Admin, Gerente, Operador e Auditor), dashboard com métricas em tempo real, relatórios exportáveis, log de auditoria completo e processamento em lotes. Feito com Next.js, TypeScript, MongoDB e Tailwind CSS.",
    tags: ["stockmaster", "projects"],
  },
  {
    id: "stockmaster-rbac",
    keywords: ["rbac", "permissao", "permissões", "papel", "papeis", "role", "roles", "admin", "gerente", "operador", "auditor", "acesso"],
    question: "Como funciona o RBAC no StockMaster?",
    answer:
      "O sistema tem 4 papéis com permissões granulares:\n\n• **Admin** — acesso total, gerencia usuários e configurações\n• **Gerente** — cria/edita produtos e fornecedores, gera relatórios\n• **Operador** — registra movimentações de estoque\n• **Auditor** — acesso somente leitura ao log de auditoria\n\nO controle é aplicado tanto no frontend (ocultando elementos proibidos) quanto no backend (bloqueando Server Actions não autorizadas).",
    tags: ["stockmaster", "rbac", "security"],
  },
  {
    id: "stockmaster-audit",
    keywords: ["auditoria", "log", "historico", "rastreabilidade", "registro", "trilha", "audit trail"],
    question: "O StockMaster tem auditoria?",
    answer:
      "Sim, e é um dos pontos fortes. Cada ação relevante no sistema — criar produto, alterar estoque, deletar fornecedor, mudar permissão — gera um registro imutável no log de auditoria. O registro guarda: quem fez, o quê, quando, e quais dados foram alterados (before/after). Só o papel Auditor e Admin têm acesso a essa tela.",
    tags: ["stockmaster", "audit"],
  },
  {
    id: "stockmaster-reports",
    keywords: ["relatorio", "relatorios", "exportar", "export", "pdf", "csv", "excel", "download", "graficos", "metricas"],
    question: "Gera relatórios? / Tem exportação?",
    answer:
      "Sim! O StockMaster tem uma área de relatórios com filtros por período, categoria e fornecedor. Os relatórios mostram movimentações, valor em estoque, produtos abaixo do mínimo e histórico de alterações. É possível exportar em PDF e CSV para uso externo ou arquivamento.",
    tags: ["stockmaster", "reports"],
  },
  {
    id: "stockmaster-batch",
    keywords: ["lote", "lotes", "batch", "processamento", "importacao", "bulk", "massa", "em massa"],
    question: "O StockMaster processa em lotes?",
    answer:
      "Sim. Para operações de grande volume — como importar uma lista de produtos, atualizar preços em massa ou processar inventário de fim de mês — o StockMaster tem processamento em lote com feedback visual de progresso, tratamento de erros por linha e relatório de sucesso/falha ao final.",
    tags: ["stockmaster", "batch"],
  },
  {
    id: "stockmaster-cache",
    keywords: ["cache", "performance", "rapido", "velocidade", "otimizacao", "revalidate", "isr"],
    question: "Como o StockMaster lida com performance?",
    answer:
      "Uso cache em múltiplas camadas: React Query no cliente para dados frequentemente acessados, cache de rotas do Next.js com revalidação seletiva (ISR), e índices no MongoDB para queries críticas. O dashboard carrega dados em paralelo para reduzir tempo de resposta.",
    tags: ["stockmaster", "performance", "cache"],
  },
  {
    id: "stockmaster-dashboard",
    keywords: ["dashboard", "painel", "metricas", "graficos", "charts", "kpi", "overview", "visao geral"],
    question: "Como é o dashboard do StockMaster?",
    answer:
      "O dashboard centraliza os KPIs mais importantes: valor total em estoque, itens abaixo do mínimo, movimentações do dia e alertas de reposição. Os dados são exibidos em cards de métricas e gráficos (barras e linha temporal). Tudo é carregado de forma otimizada com Server Components e atualiza sem recarregar a página.",
    tags: ["stockmaster", "dashboard"],
  },
  {
    id: "stockmaster-serveractions",
    keywords: ["server actions", "server action", "action", "mutation", "form action", "next server"],
    question: "O StockMaster usa Server Actions?",
    answer:
      "Sim, extensivamente. As operações de escrita (criar produto, registrar movimentação, alterar permissão) são feitas via Server Actions do Next.js, o que elimina a necessidade de uma API REST separada para mutações. Cada Server Action valida os dados com Zod e checa as permissões do usuário antes de executar.",
    tags: ["stockmaster", "serveractions", "nextjs"],
  },
  {
    id: "stockmaster-mongodb",
    keywords: ["mongodb", "mongoose", "banco", "colecao", "collection", "schema", "modelo"],
    question: "Por que MongoDB no StockMaster?",
    answer:
      "O MongoDB se encaixou bem porque o modelo de dados do estoque é hierárquico e variável — produtos com atributos diferentes, movimentações com metadados distintos por tipo. Usei Mongoose para schemas tipados e aproveito aggregation pipelines para os relatórios mais complexos.",
    tags: ["stockmaster", "mongodb", "database"],
  },
  {
    id: "workhunter-overview",
    keywords: ["workhunter", "workplus", "emprego", "vaga", "vagas", "candidatura", "candidato", "busca emprego", "job", "jobs", "hunting"],
    question: "O que é o WorkPlus?",
    answer:
      "WorkPlus é uma plataforma inteligente de busca e gestão de vagas tech. Ela centraliza oportunidades de múltiplas fontes, calcula compatibilidade com o perfil do usuário usando IA local (LM Studio), organiza tudo num Kanban e oferece analytics de mercado para ajudar na tomada de decisão.",
    tags: ["workhunter", "projects"],
  },
  {
    id: "workhunter-scraping",
    keywords: ["coleta", "coletar", "vagas", "sites", "plataformas", "linkedin", "indeed", "glassdoor", "fonte"],
    question: "Como o WorkPlus coleta vagas?",
    answer:
      "O WorkPlus se integra com múltiplas plataformas de emprego através de APIs abertas e consulta a sites de carreira, centralizando título, empresa, localização, descrição e requisitos de cada vaga em um único banco de dados.",
    tags: ["workhunter", "scraping"],
  },
  {
    id: "workhunter-match",
    keywords: ["match", "matching", "compatibilidade", "score", "pontuacao", "algoritmo", "relevancia", "rank", "ranking", "workplus"],
    question: "Como funciona o matching de vagas?",
    answer:
      "O WorkPlus compara o perfil do candidato (skills, experiências, preferências) com a descrição de cada vaga usando IA local (LM Studio). O resultado é um score de compatibilidade de 0 a 100%. Vagas com score alto aparecem no topo e recebem um destaque visual. O usuário pode ajustar os critérios do perfil para refinar os resultados.",
    tags: ["workhunter", "match", "ai"],
  },
  {
    id: "workhunter-kanban",
    keywords: ["kanban", "board", "quadro", "coluna", "arrastar", "drag", "drop", "pipeline", "funil", "etapa", "status"],
    question: "O WorkPlus tem Kanban?",
    answer:
      "Sim! Após encontrar as vagas, o usuário gerencia as candidaturas num Kanban com colunas personalizáveis: Encontradas, Aplicadas, Em Triagem, Entrevista, Oferta, Recusada. Dá pra arrastar os cards entre colunas, adicionar notas e acompanhar todo o processo seletivo num só lugar.",
    tags: ["workhunter", "kanban"],
  },
  {
    id: "workhunter-autoapply",
    keywords: ["kanban", "pipeline", "candidatura manual", "aplicar"],
    question: "Como gerenciar as candidaturas no WorkPlus?",
    answer:
      "O WorkPlus não faz candidatura automática. Após encontrar as vagas de interesse, o usuário gerencia o processo seletivo manualmente através do Kanban integrado. O sistema ajuda na organização com 8 estágios: Salvas, Analisadas, Aplicadas, Em Triagem, Entrevista, Oferta, Contratado e Rejeitado.",
    tags: ["workhunter", "autoapply", "ai"],
  },
  {
    id: "workhunter-architecture",
    keywords: ["arquitetura", "estrutura", "como foi feito", "tecnologia", "stack workhunter", "stack workplus"],
    question: "Qual a arquitetura do WorkPlus?",
    answer:
      "O WorkPlus tem:\n\n• **Frontend:** Next.js + TypeScript + Tailwind CSS para a interface do usuário\n• **Backend:** FastAPI + Celery para processamento assíncrono\n• **IA:** LM Studio com LLMs locais para match score e análise\n• **Banco:** MongoDB para armazenar vagas, perfis e pipeline\n• **Auth:** JWT com suporte a múltiplos perfis",
    tags: ["workhunter", "architecture"],
  },
  {
    id: "galacticluna-overview",
    keywords: ["galactic luna", "galacticluna", "ecommerce", "e-commerce", "loja", "loja virtual", "loja online", "produto", "carrinho", "compra"],
    question: "O que é o Galactic Luna?",
    answer:
      "Galactic Luna é um e-commerce completo com loja virtual e painel administrativo. A loja tem catálogo de produtos, carrinho, checkout e gestão de pedidos. O painel admin permite gerenciar produtos, categorias, estoque e clientes. Feito com Next.js, TypeScript e MongoDB, com foco em experiência de compra fluida.",
    tags: ["galacticluna", "ecommerce", "projects"],
  },
  {
    id: "esccursos-overview",
    keywords: ["esc cursos", "esccursos", "plataforma educacional", "ensino", "cursos online", "educacao", "aula", "aluno", "professor"],
    question: "O que é o ESC Cursos?",
    answer:
      "ESC Cursos é uma plataforma educacional online. Alunos podem se matricular em cursos, assistir aulas, acompanhar progresso e emitir certificados. Professores têm um painel para criar e gerenciar conteúdo. A plataforma tem autenticação, controle de acesso por papel (aluno/professor/admin) e integração de pagamentos.",
    tags: ["esccursos", "education", "projects"],
  },
  {
    id: "portfolio-stack",
    keywords: ["stack portfolio", "feito com", "tecnologia portfolio", "construido", "desenvolvido", "next portfolio", "tailwind portfolio"],
    question: "Com que tecnologia este portfólio foi feito?",
    answer:
      "Este portfólio foi construído com:\n\n• **Next.js 14** com App Router\n• **TypeScript** para tipagem completa\n• **Tailwind CSS** para estilos utilitários\n• **Framer Motion** para animações\n• **Design system próprio** com tokens de cor, tipografia e espaçamento\n• Um motor de busca por relevância (TF-IDF + Dice) rodando localmente aqui no chat",
    tags: ["portfolio", "stack", "tech"],
  },
  {
    id: "portfolio-designsystem",
    keywords: ["design system", "design", "sistema design", "componentes", "tokens", "cores", "tipografia", "espacamento"],
    question: "O que é o design system do portfólio?",
    answer:
      "O portfólio usa um design system próprio com tokens de cor (paleta primária, neutros, semântica), escala tipográfica, sistema de espaçamento e componentes reutilizáveis. Isso garante consistência visual em todas as páginas e facilita manutenção. Cada componente tem variantes claras e comportamento previsível.",
    tags: ["portfolio", "design"],
  },
  {
    id: "portfolio-animations",
    keywords: ["animacao", "animacoes", "animação", "animações", "framer", "motion", "transicao", "efeito", "scroll", "reveal"],
    question: "Quais animações o portfólio tem?",
    answer:
      "As animações são feitas com Framer Motion e incluem: reveal de seções ao scroll, transições de página suaves, hover states nos cards de projeto, efeito de digitação no hero e micro-interações nos botões. Todas respeitam a preferência do sistema (prefers-reduced-motion) para acessibilidade.",
    tags: ["portfolio", "animations"],
  },
  {
    id: "portfolio-mobile",
    keywords: ["mobile", "responsivo", "responsividade", "celular", "tablet", "dispositivo", "adaptado", "breakpoint"],
    question: "O portfólio é responsivo?",
    answer:
      "Sim, completamente. O layout foi projetado mobile-first e se adapta a todos os tamanhos de tela — de 320px a monitores ultrawide. A navegação, cards, seções e este próprio chat funcionam bem em qualquer dispositivo.",
    tags: ["portfolio", "mobile", "responsive"],
  },
  {
    id: "portfolio-i18n",
    keywords: ["i18n", "internacionalizacao", "internacionalização", "idioma", "ingles", "portugues", "traducao", "tradução", "lingua", "linguagem"],
    question: "O portfólio tem suporte a múltiplos idiomas?",
    answer:
      "Sim, o portfólio tem internacionalização (i18n) com suporte a português e inglês. O usuário pode alternar o idioma e todo o conteúdo — textos, labels e mensagens — é traduzido dinamicamente. A implementação usa um Context de linguagem que provê as traduções para todos os componentes.",
    tags: ["portfolio", "i18n"],
  },
  {
    id: "portfolio-grid-effect",
    keywords: ["grid", "efeito grid", "background", "fundo", "particula", "visual", "estetica", "estética"],
    question: "O que é o efeito grid do portfólio?",
    answer:
      "O efeito grid é um elemento visual de fundo que cria uma sensação de profundidade e movimento. É feito com CSS e animações sutis, sem impacto na performance. Faz parte da identidade visual do portfólio, que mistura estética técnica com design moderno.",
    tags: ["portfolio", "visual", "grid"],
  },
  {
    id: "portfolio-commandmenu",
    keywords: ["command menu", "commandmenu", "paleta", "paleta de comandos", "atalho", "busca", "cmd k", "ctrl k"],
    question: "Como funciona o Command Menu?",
    answer:
      "O Command Menu é ativado com Cmd+K (Mac) ou Ctrl+K (Windows/Linux) e abre uma paleta de comandos rápidos. De lá dá pra navegar entre seções, mudar o tema, trocar o idioma e acessar links de contato — tudo sem usar o mouse. É um padrão bastante usado em ferramentas de desenvolvedor que quis trazer pro portfólio.",
    tags: ["portfolio", "commandmenu", "ux"],
  },
  {
    id: "portfolio-chat-security",
    keywords: ["seguranca", "segurança", "chat seguranca", "protecao", "proteção", "xss", "injection", "ataque", "ameaca", "ameaça"],
    question: "O chat tem proteção de segurança?",
    answer:
      "Sim. O chat tem uma camada de análise de segurança que analisa cada mensagem antes de processá-la. Detecta e bloqueia tentativas de XSS, SQL Injection, Command Injection, Template Injection, SSRF e CSRF. Além disso, há rate limiting de 2 segundos entre mensagens para evitar spam.",
    tags: ["portfolio", "chat", "security"],
  },
  {
    id: "portfolio-chat-how",
    keywords: ["como funciona", "chat como", "motor", "tfidf", "tf idf", "algoritmo chat", "matching", "busca", "relevancia"],
    question: "Como o chat processa as perguntas?",
    answer:
      "O chat usa um motor de busca por relevância local, sem chamadas a APIs externas. O processo é:\n\n1. **Tokenização** — remove stopwords, normaliza texto\n2. **TF-IDF** (40% do score) — mede frequência e raridade dos termos\n3. **Dice Coefficient** (60% do score) — mede sobreposição com keywords das entradas\n4. **Threshold** — respostas com score > 0.3 são retornadas; abaixo disso, fallback\n\nTudo roda no browser, sem latência de rede.",
    tags: ["portfolio", "chat", "tfidf", "algorithm"],
  },
  {
    id: "experience-general",
    keywords: ["experiencia", "experiência", "trabalhou", "empresa", "emprego", "carreira", "historico profissional", "onde trabalhou"],
    question: "Onde você já trabalhou? / Qual sua experiência profissional?",
    answer:
      "Tenho experiência com desenvolvimento de produtos reais, incluindo projetos que atendem empresas e usuários finais. Ao longo da carreira entrei em equipes ágeis, participei de code reviews, entreguei features com deploy em produção e contribuí com arquitetura de sistemas. Os projetos do portfólio refletem bem o nível e tipo de trabalho que entrego.",
    tags: ["experience", "career"],
  },
  {
    id: "experience-methodology",
    keywords: ["metodologia", "agile", "scrum", "kanban", "sprint", "processo", "como trabalha", "forma de trabalhar", "workflow"],
    question: "Você usa metodologia ágil? / Como você trabalha?",
    answer:
      "Trabalho bem em ambientes ágeis — tanto Scrum quanto Kanban. Planejo entregas em ciclos curtos, comunico bloqueios cedo e prefiro mostrar progresso incremental a entregar tudo de uma vez. Sou a favor de code review, documentação suficiente (não excessiva) e testes nos pontos críticos.",
    tags: ["experience", "methodology"],
  },
  {
    id: "experience-teamwork",
    keywords: ["time", "equipe", "squad", "colaboracao", "colaboração", "trabalho em equipe", "comunicacao", "comunicação"],
    question: "Você trabalha bem em equipe?",
    answer:
      "Sim. Prefiro colaborar a trabalhar isolado. Tenho experiência com times distribuídos, uso de ferramentas assíncronas (Slack, Notion, Linear) e sou direto na comunicação — sem enrolação, sem desaparecer. Dou e recebo feedback com naturalidade.",
    tags: ["experience", "teamwork"],
  },
  {
    id: "contact-general",
    keywords: ["contato", "contact", "falar", "entrar em contato", "conversar", "chamar", "como chego", "como falo"],
    question: "Como entro em contato com o Gabriel?",
    answer:
      "O melhor caminho é pelo **LinkedIn** para conexões profissionais e oportunidades, ou por **e-mail** para projetos e freelas. O GitHub está sempre aberto pra ver código e contribuições. Os links ficam na seção de contato do portfólio.",
    tags: ["contact"],
  },
  {
    id: "contact-linkedin",
    keywords: ["linkedin", "linkedin.com", "rede profissional", "perfil linkedin", "conectar"],
    question: "Qual o LinkedIn do Gabriel?",
    answer:
      "O LinkedIn do Gabriel fica na seção de contato do portfólio — procure pelo ícone do LinkedIn nos links sociais. É o canal preferido para conexões profissionais e novas oportunidades.",
    tags: ["contact", "linkedin"],
  },
  {
    id: "contact-github",
    keywords: ["github", "github.com", "repositorio", "repositório", "codigo", "código", "open source", "repo", "perfil github"],
    question: "Qual o GitHub do Gabriel?",
    answer:
      "O GitHub do Gabriel está linkado na seção de contato. Lá dá pra ver o código dos projetos, contribuições e atividade. Fique à vontade para explorar os repositórios!",
    tags: ["contact", "github"],
  },
  {
    id: "contact-email",
    keywords: ["email", "e-mail", "mail", "correio", "mensagem", "mandar mensagem", "escrever"],
    question: "Qual o e-mail do Gabriel?",
    answer:
      "O e-mail do Gabriel está disponível na seção de contato do portfólio. É o canal ideal para propostas de freela, projetos ou qualquer comunicação mais formal.",
    tags: ["contact", "email"],
  },
  {
    id: "contact-hire",
    keywords: ["contratar", "proposta", "oportunidade", "vaga", "oferta", "recrutar", "recrutador", "hr", "rh"],
    question: "Posso contratar o Gabriel? / Tenho uma proposta",
    answer:
      "Com certeza! Gabriel está aberto a novas oportunidades — seja freela, PJ ou CLT. O melhor caminho é mandar uma mensagem pelo LinkedIn ou por e-mail (ambos na seção de contato). Quanto mais contexto sobre o projeto ou vaga, melhor para uma conversa produtiva.",
    tags: ["contact", "hire", "availability"],
  },
  {
    id: "misc-why-portfolio",
    keywords: ["por que", "motivo", "razao", "razão", "criou portfolio", "fez portfolio", "construiu portfolio"],
    question: "Por que você criou este portfólio?",
    answer:
      "Quis criar um portfólio que fosse ele mesmo um projeto — com design system próprio, animações cuidadosas, chat com motor de busca local e i18n. Em vez de um site estático com lista de projetos, é uma demonstração prática do que consigo entregar. Se gostou do portfólio, é um bom sinal do que esperar dos projetos.",
    tags: ["portfolio", "misc"],
  },
  {
    id: "misc-favorite-tech",
    keywords: ["favorita", "favorito", "preferida", "preferido", "gosta mais", "prefere", "prefiro", "tech favorita"],
    question: "Qual sua tecnologia favorita?",
    answer:
      "Difícil escolher uma só — mas se precisar: Next.js. A combinação de Server Components, Server Actions, roteamento, otimizações de imagem e deploy simplificado resolve boa parte dos problemas do desenvolvimento web moderno num único framework. TypeScript como companheiro obrigatório.",
    tags: ["misc", "skills"],
  },
  {
    id: "misc-open-source",
    keywords: ["open source", "opensource", "contribuicao", "contribuição", "projeto aberto", "community"],
    question: "Você contribui com open source?",
    answer:
      "Sim, os projetos do portfólio são públicos no GitHub. Contribuições são bem-vindas — seja abrindo issues, sugerindo melhorias ou mandando PRs. Acredito que código aberto é uma das melhores formas de aprender e colaborar.",
    tags: ["misc", "opensource"],
  },
  {
    id: "misc-learning",
    keywords: ["aprendendo", "aprender", "estuda", "estudando", "proximo", "próximo", "novidade", "tendencia", "tendência", "futuro"],
    question: "O que você está estudando / aprendendo agora?",
    answer:
      "Sempre tem algo novo na lista. Atualmente com foco em aprofundar integrações com IA (agentes, RAG, function calling), melhorar conhecimentos em infraestrutura e explorar testes mais robustos (Playwright para E2E). A área muda rápido e manter o ritmo de aprendizado é parte do trabalho.",
    tags: ["misc", "learning"],
  },
];

export const entriesByTag = qaDatabase.reduce<Record<string, QAEntry[]>>(
  (acc, entry) => {
    entry.tags.forEach((tag) => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(entry);
    });
    return acc;
  },
  {}
);

export const fullVocabulary: string[] = Array.from(
  new Set(qaDatabase.flatMap((e) => e.keywords))
).sort();

export default qaDatabase;
