document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MENU MOBILE ---
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  if (mobileMenuBtn && navLinks) {
    // Toggle menu mobile
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileMenuBtn.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
      } else {
        icon.classList.replace("fa-xmark", "fa-bars");
      }
    });

    // Fechar menu ao clicar em um link
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) icon.classList.replace("fa-xmark", "fa-bars");
      });
    });
  }

  // --- 2. EFEITO DE SOMBRA NA NAVBAR AO ROLAR ---
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)";
      navbar.style.padding = "10px 0"; // Ligeiramente menor ao rolar
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.padding = "15px 0";
      navbar.style.background = "rgba(15, 23, 42, 0.85)";
    }
  });

  // --- 3. SMOOTH SCROLL PARA LINKS INTERNOS ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // --- 4. RENDERIZAÇÃO AUTOMÁTICA DOS PROJETOS ---
  function renderProjects() {
    const grid = document.querySelector(".projects-grid");
    if (!grid || typeof projects === "undefined") return;

    grid.innerHTML = projects
      .map((project) => {
        // Thumbnail: Imagem real ou um banner em gradiente com ícone focado no tema Backend
        const thumbnail = project.image
          ? `<img src="${project.image}" alt="${project.imageAlt}" class="project-thumb" loading="lazy" />`
          : `<div class="project-thumb--placeholder" aria-label="${project.title}">
               <i class="fa-solid ${project.placeholder || "fa-code"}" aria-hidden="true"></i>
               <span>${project.title}</span>
             </div>`;

        // Formatação das tecnologias (Ex: Spring Boot • PostgreSQL • Docker)
        const techsFormatted = project.techs.join(" • ");

        // Botão GitHub (Primário)
        const githubBtn = project.links.github
          ? `<a href="${project.links.github}" target="_blank" class="btn-sm"
               aria-label="Ver código do projeto ${project.title} no GitHub">
               <i class="fa-brands fa-github"></i> GitHub
             </a>`
          : "";

        // Botão Demo (Secundário/Contorno)
        const demoBtn = project.links.demo
          ? `<a href="${project.links.demo}" target="_blank" class="btn-sm secondary"
               aria-label="Ver demonstração ao vivo do ${project.title}">
               <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
             </a>`
          : "";

        return `
          <article class="project-card">
            ${thumbnail}
            <div class="card-content">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-techs">${techsFormatted}</div>
              <div class="project-links">
                ${githubBtn}
                ${demoBtn}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // Executa a renderização assim que o DOM carregar
  renderProjects();
});
