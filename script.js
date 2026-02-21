// Efeito de sombra na navbar ao rolar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)";
    navbar.style.padding = "15px 0";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.padding = "20px 0";
  }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Renderização automática dos projetos

function renderProjects() {
  const grid = document.querySelector(".projects-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map((project) => {
      // Thumbnail: imagem real ou placeholder com ícone
      const thumbnail = project.image
        ? `<img src="${project.image}" alt="${project.imageAlt}" class="project-thumb" />`
        : `<div class="project-thumb project-thumb--placeholder" aria-label="${project.title}">
             <i class="fa-solid ${project.placeholder || "fa-code"}" aria-hidden="true"></i>
             <span>Sem preview</span>
           </div>`;

      // Botão GitHub
      const githubBtn = project.links.github
        ? `<a href="${project.links.github}" target="_blank" class="btn-sm"
             aria-label="Ver código do projeto ${project.title} no GitHub">GitHub</a>`
        : "";

      // Botão Demo
      const demoBtn = project.links.demo
        ? `<a href="${project.links.demo}" target="_blank" class="btn-sm secondary"
             aria-label="Ver demonstração ao vivo do ${project.title}">Live Demo</a>`
        : "";

      return `
        <article class="project-card">
          ${thumbnail}
          <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-techs">
              ${project.techs.map((tech) => `<span>#${tech}</span>`).join(" ")}
            </div>
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

renderProjects();
