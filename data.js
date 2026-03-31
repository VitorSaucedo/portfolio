// =============================================================
//  data.js — ARQUIVO DE CONTEÚDO DO PORTFÓLIO
//  Edite aqui para atualizar projetos, skills e formação.
//  Não é necessário tocar em index.html, style.css ou script.js.
// =============================================================

// ─────────────────────────────────────────────────────────────
// INFORMAÇÕES PESSOAIS
// Usadas no hero, navbar, footer e meta tags (via script.js).
// ─────────────────────────────────────────────────────────────
const personal = {
  name: "Vitor Saucedo",
  role: "Desenvolvedor Backend",
  heroTitle: ["Vitor Saucedo,", "Desenvolvedor", "Backend"],
  heroHighlights: [2],
  heroDescription:
    "Gosto de construir o que acontece nos bastidores — APIs, autenticação, mensageria, banco de dados. Tenho experiência com Spring Boot e Java, mas o que me move é resolver problemas de backend bem feitos.",
  available: true,
  stats: [
    { value: "6", label: "projetos" },
    { value: "1", label: "ano de código" },
    { value: "5+", label: "tecnologias core" },
  ],
  cv: "https://drive.google.com/file/d/12RmfW8WQlU_kcrceNDP978tiuKubT2Sb/view?usp=sharing",
  contact: {
    email: "vitorsaucedo18@outlook.com",
    linkedin: "https://www.linkedin.com/in/vitor-saucedo-uggeri-641868365/",
    github: "https://github.com/VitorSaucedo",
  },
};

// ─────────────────────────────────────────────────────────────
// HABILIDADES TÉCNICAS
// Adicione ou remova categorias e badges livremente.
// icon: classe FontAwesome (ex: "fa-solid fa-database")
// ─────────────────────────────────────────────────────────────
const skills = [
  {
    icon: "fa-brands fa-java",
    title: "Linguagens & Core",
    badges: [
      { label: "Java 21", highlight: true },
      { label: "APIs RESTful" },
      { label: "OOP" },
      { label: "SOLID" },
    ],
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Ecossistema Spring",
    badges: [
      { label: "Spring Boot", highlight: true },
      { label: "Spring Security" },
      { label: "Spring Data JPA" },
      { label: "Spring Cloud Gateway" },
      { label: "Spring AMQP" },
      { label: "Spring Mail" },
    ],
  },
  {
    icon: "fa-solid fa-database",
    title: "Dados & Mensageria",
    badges: [
      { label: "PostgreSQL", highlight: true },
      { label: "RabbitMQ" },
      { label: "Flyway" },
      { label: "JJWT" },
    ],
  },
  {
    icon: "fa-solid fa-terminal",
    title: "DevOps & Testes",
    badges: [
      { label: "Docker", highlight: true },
      { label: "Git & GitHub" },
      { label: "JUnit 5" },
      { label: "Mockito" },
      { label: "Testcontainers" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJETOS
//
// Campos:
//   title      (string)  — nome do projeto
//   description (string) — texto descritivo
//   image      (string|null) — caminho da thumbnail; null = ícone
//   imageAlt   (string)  — alt text da imagem (acessibilidade)
//   icon       (string)  — ícone FontAwesome usado quando image=null
//   badge      (string|null) — ex: "Destaque"; null = sem badge
//   featured   (bool)    — card ocupa 2 colunas no grid (destaque visual)
//   techs      (array)   — lista de tecnologias exibidas como tags
//   links.github (string|null) — URL do repositório
//   links.demo   (string|null) — URL da demo ao vivo
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Storefront",
    description:
      "Plataforma de e-commerce com arquitetura de microsserviços: 5 serviços independentes, comunicação assíncrona via RabbitMQ, Saga de compensação de estoque, API Gateway reativo com Spring Cloud Gateway e frontend SPA em React + TypeScript.",
    image: "assets/img/storefront.png",
    imageAlt: "Interface da Storefront",
    icon: "fa-store",
    badge: "Destaque",
    featured: true,
    techs: [
      "Spring Boot",
      "Spring Cloud Gateway",
      "Spring Security",
      "RabbitMQ",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    links: {
      github: "https://github.com/VitorSaucedo/storefront",
      demo: null,
    },
  },
  {
    title: "Janus",
    description:
      "API standalone de autenticação pronta para produção: JWT com access token (15min) + refresh token rotativo (7 dias), bloqueio de conta após 5 tentativas falhas, histórico de senhas, recuperação por e-mail com token de uso único e audit log de eventos de segurança.",
    image: null,
    imageAlt: "Imagem de escudo",
    icon: "fa-shield-halved",
    badge: null,
    featured: false,
    techs: [
      "Spring Boot",
      "Spring Security",
      "Spring Mail",
      "PostgreSQL",
      "Flyway",
      "JJWT",
      "Testcontainers",
      "Docker",
    ],
    links: {
      github: "https://github.com/VitorSaucedo/janus",
      demo: null,
    },
  },
  {
    title: "Finly",
    description:
      "Aplicação de controle financeiro pessoal com rastreamento de receitas e despesas, gerenciamento de parcelas, controle de orçamentos e acompanhamento de metas financeiras.",
    image: "assets/img/finly.png",
    imageAlt: "Interface do Finly",
    icon: "fa-wallet",
    badge: null,
    featured: false,
    techs: [
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
      "Flyway",
      "JJWT",
    ],
    links: {
      github: "https://github.com/VitorSaucedo/finly",
      demo: null,
    },
  },
  {
    title: "Vbank",
    description:
      "Projeto educacional que simula operações bancárias modernas, incluindo PIX, transferências, depósitos e extratos.",
    image: "assets/img/vbank.png",
    imageAlt: "Interface do projeto Vbank",
    icon: "fa-building-columns",
    badge: null,
    featured: false,
    techs: ["Spring Boot", "Spring Security", "Spring Data JPA", "Swagger"],
    links: {
      github: "https://github.com/VitorSaucedo/vbank",
      demo: null,
    },
  },
  {
    title: "JavaJobs",
    description:
      "Portal especializado em agregar vagas para desenvolvedores Java, com sistema de sincronização via API.",
    image: "assets/img/javajobs-thumb.png",
    imageAlt: "Interface do projeto JavaJobs",
    icon: "fa-briefcase",
    badge: null,
    featured: false,
    techs: ["Spring Boot", "PostgreSQL"],
    links: {
      github: "https://github.com/VitorSaucedo/java_jobs",
      demo: "https://java-jobs.onrender.com/",
    },
  },
  {
    title: "To Do List",
    description:
      "Aplicação web moderna de gerenciamento de tarefas desenvolvida com Spring Boot.",
    image: "assets/img/todo-thumb.png",
    imageAlt: "Interface do projeto To Do List",
    icon: "fa-list-check",
    badge: null,
    featured: false,
    techs: ["Spring Boot", "Spring Security", "Swagger"],
    links: {
      github: "https://github.com/VitorSaucedo/to_do_list_app",
      demo: "https://to-do-list-app-iek9.onrender.com/",
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FORMAÇÃO & CERTIFICAÇÕES
//
// Campos:
//   period  (string) — ex: "2024 — 2026"
//   title   (string) — nome do curso / certificação
//   place   (string) — instituição
// ─────────────────────────────────────────────────────────────
const education = [
  {
    period: "2024 — 2026",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Cruzeiro do Sul Virtual",
  },
  {
    period: "2025",
    title: "Geração Caldeira",
    place: "Formação Intensiva em Desenvolvimento Java e Soft Skills",
  },
  {
    period: "2026",
    title: "Residência Iniciação Fullstack",
    place: "Instituto de Pesquisas Eldorado",
  },
];
