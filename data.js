// =============================================================
//  data.js — ARQUIVO DE CONTEÚDO DO PORTFÓLIO
//  Edite aqui para atualizar projetos, skills e formação.
//  Não é necessário tocar em index.html, style.css ou script.js.
// =============================================================

// ─────────────────────────────────────────────────────────────
// INFORMAÇÕES PESSOAIS
// ─────────────────────────────────────────────────────────────
const personal = {
  name: "Vitor Saucedo",
  role: "Desenvolvedor Backend",
  heroTitle: ["Vitor Saucedo,", "Desenvolvedor", "Backend"],
  heroHighlights: [2],
  heroDescription:
    "Construo o que acontece nos bastidores — APIs RESTful, microsserviços, mensageria e bancos de dados. Experiência prática corporativa com Java, Spring Boot e Python/Django, com foco em arquitetura limpa e soluções escaláveis.", //
  available: true,
  stats: [
    { value: "3", label: "projetos" },
    { value: "1", label: "ano de experiência" }, 
    { value: "8+", label: "tecnologias core" },
  ],
  cv: "https://drive.google.com/file/d/1zSwVnCuwPrGnsbVuSVi0gFOJXV9DXDdy/view?usp=sharing",
  contact: {
    email: "vitorsaucedouggeri@gmail.com",
    linkedin: "https://www.linkedin.com/in/vitor-saucedo-uggeri-641868365/",
    github: "https://github.com/VitorSaucedo",
  },
};

// ─────────────────────────────────────────────────────────────
// HABILIDADES TÉCNICAS
// ─────────────────────────────────────────────────────────────
const skills = [
  {
    icon: "fa-brands fa-java",
    title: "Linguagens & Core",
    badges: [
      { label: "Java 21", highlight: true },
      { label: "Python" }, 
      { label: "Django" }, 
      { label: "APIs RESTful"},
      { label: "SOLID & OOP" },
    ],
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Ecossistema Spring",
    badges: [
      { label: "Spring Boot 4", highlight: true },
      { label: "Spring Security",},
      { label: "Spring Data JPA" },
      { label: "Spring Cloud Gateway" },
    ],
  },
  {
    icon: "fa-solid fa-database",
    title: "Dados & Mensageria",
    badges: [
      { label: "PostgreSQL", highlight: true },
      { label: "RabbitMQ",},
      { label: "Redis" },
      { label: "Flyway" },
      { label: "Hibernate" },
    ],
  },
  {
    icon: "fa-solid fa-terminal",
    title: "DevOps, Testes & Práticas",
    badges: [
      { label: "Docker", highlight: true },
      { label: "Git & Github",}, 
      { label: "Testcontainers" },
      { label: "Swagger" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJETOS
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Janus",
    description:
      "Identity Provider (IdP) standalone projetado para arquiteturas de microsserviços. Implementa rotação de Refresh Token (UUID) com revogação imediata, audit log de segurança, bloqueio automático após 5 tentativas falhas e controle de histórico para validação de reutilização de senhas.",
    image: null,
    imageAlt: "Ícone de escudo representando segurança",
    icon: "fa-shield-halved",
    badge: null,
    featured: false,
    techs: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "Testcontainers",
      "Docker",
    ],
    links: {
      github: "https://github.com/VitorSaucedo/janus",
      demo: null,
    },
  },
  {
    title: "Storefront",
    description:
      "Plataforma de e-commerce baseada em microsserviços com comunicação assíncrona orientada a eventos. Possui 5 serviços independentes orquestrados por API Gateway, padrão Saga de compensação para consistência eventual de estoque e processamento de pagamentos com idempotência.",
    image: "assets/img/storefront.png",
    imageAlt: "Interface da Storefront",
    icon: "fa-store",
    badge: "Destaque",
    featured: true,
    techs: [
      "Java 21",
      "Spring Boot 4",
      "Spring Cloud Gateway",
      "Spring AMQP",
      "RabbitMQ",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
    ],
    links: {
      github: "https://github.com/VitorSaucedo/storefront",
      demo: null,
    },
  },
  {
    title: "Habits Tracker",
    description:
      "Aplicação fullstack para rastreamento de hábitos com recursos de gamificação (streaks, pontos, níveis, conquistas e ranking social). Conta com gerenciamento de estado avançado no front-end e cache de alta performance para o tracking de streaks via Redis.",
    image: null,
    imageAlt: "Ícone representando hábitos e metas",
    icon: "fa-fire",
    badge: "Em desenvolvimento",
    featured: false,
    techs: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "Redis",
      "PostgreSQL",
      "Flyway",
      "React",
      "Vite",
      "React Query",
      "Zod",
      "Docker",
    ],
    links: {
      github: "https://github.com/VitorSaucedo/habits-tracker",
      demo: null,
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FORMAÇÃO & CERTIFICAÇÕES
// ─────────────────────────────────────────────────────────────
const education = [
  {
    period: "2024 — 2027",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Cruzeiro do Sul Virtual", 
  },
  {
    period: "2025",
    title: "Programação Java",
    place: "Instituto Caldeira",
  },
  {
    period: "2026",
    title: "Iniciação Fullstack",
    place: "Instituto de Pesquisas Eldorado",
  },
];