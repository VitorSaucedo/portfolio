// =============================================================
//  script.js — LÓGICA E RENDERIZAÇÃO
//  Lê os dados de data.js e monta o HTML automaticamente.
//  Não edite este arquivo para mudar conteúdo — use data.js.
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  // ─── 1. RENDERIZA HABILIDADES ──────────────────────────────
  function renderSkills() {
    const grid = document.querySelector(".skills-layout");
    if (!grid || typeof skills === "undefined") return;

    grid.innerHTML = skills
      .map((category) => {
        const badgesHtml = category.badges
          .map(
            (b) =>
              `<span class="badge${b.highlight ? " badge-accent" : ""}">${b.label}</span>`,
          )
          .join("");

        return `
        <div class="skill-card reveal">
          <div class="skill-card-icon"><i class="${category.icon}"></i></div>
          <div class="skill-card-title">${category.title}</div>
          <div class="badge-group">${badgesHtml}</div>
        </div>`;
      })
      .join("");

    grid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  // ─── 2. RENDERIZA PROJETOS ─────────────────────────────────
  function renderProjects() {
    const grid = document.querySelector(".projects-grid");
    if (!grid || typeof projects === "undefined") return;

    grid.innerHTML = projects
      .map((project, index) => {
        // Thumbnail: imagem real ou placeholder com ícone
        const thumb = project.image
          ? `<img src="${project.image}" alt="${project.imageAlt}" loading="lazy">`
          : `<i class="fa-solid ${project.icon || "fa-code"} thumb-icon"></i>
           <span class="thumb-name">${project.title}</span>`;

        // Badge opcional ("Destaque" etc.)
        const badge = project.badge
          ? `<span class="card-badge">${project.badge}</span>`
          : "";

        // Tags de tecnologia (máximo 5 exibidas)
        const techs = project.techs
          .slice(0, 5)
          .map((t) => `<span class="tech-tag">${t}</span>`)
          .join("");

        // Botões de link
        const githubBtn = project.links?.github
          ? `<a href="${project.links.github}" target="_blank" rel="noopener"
             class="card-link"
             aria-label="Ver código do projeto ${project.title} no GitHub">
             <i class="fa-brands fa-github"></i> GitHub
           </a>`
          : "";

        const demoBtn = project.links?.demo
          ? `<a href="${project.links.demo}" target="_blank" rel="noopener"
             class="card-link demo"
             aria-label="Ver demonstração ao vivo do ${project.title}">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
           </a>`
          : "";

        // Card com destaque (featured = 2 colunas)
        const featuredClass = project.featured ? " featured" : "";

        return `
        <article class="project-card${featuredClass} reveal" style="transition-delay: ${index * 60}ms">
          <div class="thumb">
            ${thumb}
            ${badge}
          </div>
          <div class="card-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-techs">${techs}</div>
            <div class="card-links">${githubBtn}${demoBtn}</div>
          </div>
        </article>`;
      })
      .join("");

    grid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  // ─── 3. RENDERIZA FORMAÇÃO ─────────────────────────────────
  function renderEducation() {
    const list = document.querySelector(".edu-list");
    if (!list || typeof education === "undefined") return;

    list.innerHTML = education
      .map(
        (item) => `
      <div class="edu-item reveal">
        <span class="edu-year">${item.period}</span>
        <div class="edu-main">
          <h3>${item.title}</h3>
          <p>${item.place}</p>
        </div>
      </div>`,
      )
      .join("");

    list.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  // ─── 4. RENDERIZA HERO (dados pessoais) ───────────────────
  function renderHero() {
    if (typeof personal === "undefined") return;

    // Título H1 com linhas destacadas
    const h1 = document.querySelector(".hero-h1");
    if (h1) {
      h1.innerHTML =
        personal.heroTitle
          .map((line, i) =>
            personal.heroHighlights.includes(i)
              ? `<span class="hl">${line}</span>`
              : line,
          )
          .join("<br>") + '<span class="cursor" id="cursor"></span>';
    }

    // Descrição
    const desc = document.querySelector(".hero-desc");
    if (desc) desc.textContent = personal.heroDescription;

    // Badge disponível
    const badge = document.querySelector(".java-badge-label");
    if (badge) {
      const wrapper = badge.closest(".java-badge");
      if (wrapper) wrapper.style.display = personal.available ? "flex" : "none";
    }

    // Stats
    const statRow = document.querySelector(".stat-row");
    if (statRow) {
      statRow.innerHTML = personal.stats
        .map(
          (s) => `
        <div class="stat">
          <div class="stat-n">${s.value}</div>
          <div class="stat-l">${s.label}</div>
        </div>`,
        )
        .join("");
    }

    // CV links
    document.querySelectorAll("[data-cv]").forEach((el) => {
      el.href = personal.cv;
    });

    // Contact links
    const emailEl = document.querySelector("[data-contact='email']");
    if (emailEl) emailEl.href = `mailto:${personal.contact.email}`;

    const linkedinEl = document.querySelector("[data-contact='linkedin']");
    if (linkedinEl) linkedinEl.href = personal.contact.linkedin;

    const githubEl = document.querySelector("[data-contact='github']");
    if (githubEl) githubEl.href = personal.contact.github;

    // Footer year e nome
    const footerName = document.querySelector("[data-footer-name]");
    if (footerName) footerName.textContent = personal.name;

    const footerYear = document.querySelector("[data-footer-year]");
    if (footerYear) footerYear.textContent = new Date().getFullYear();
  }

  // ─── 5. SCROLL REVEAL (Intersection Observer) ─────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // ─── 6. NAVBAR — sombra ao rolar ──────────────────────────
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  // ─── 7. MENU MOBILE ───────────────────────────────────────
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", isOpen);
      mobileBtn.querySelector("i").className = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    });

    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        mobileBtn.setAttribute("aria-expanded", "false");
        mobileBtn.querySelector("i").className = "fa-solid fa-bars";
      }),
    );
  }

  // ─── 8. SMOOTH SCROLL para âncoras internas ───────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ─── INIT ──────────────────────────────────────────────────
  renderHero();
  renderSkills();
  renderProjects();
  renderEducation();
});
