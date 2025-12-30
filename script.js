// ========================================
// PORTFÓLIO - DEV FULLSTACK INICIANTE
// ========================================

console.log('🚀 Portfólio carregado! Bem-vindo ao meu projeto...');

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================================
// MENU MOBILE
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    navMenu.style.position = 'absolute';
    navMenu.style.top = '60px';
    navMenu.style.left = '0';
    navMenu.style.right = '0';
    navMenu.style.flexDirection = 'column';
    navMenu.style.background = 'rgba(15, 23, 42, 0.95)';
    navMenu.style.padding = '2rem';
    navMenu.style.gap = '1rem';
    navMenu.style.zIndex = '999';
    navMenu.style.borderBottom = '1px solid rgba(59, 130, 246, 0.2)';
});

// Fechar menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// ========================================
// ANIMAÇÃO DE SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de projetos
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observar cards de skills
document.querySelectorAll('.tech-group').forEach(card => {
    observer.observe(card);
});

// Observar cards de stats
document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// Observar items de caminho de aprendizado
document.querySelectorAll('.path-item').forEach(item => {
    observer.observe(item);
});

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegar valores do formulário
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector('textarea');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    // Validação básica
    if (name === '' || email === '' || message === '') {
        mostrarAlerta('Por favor, preencha todos os campos!', 'erro');
        return;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarAlerta('Por favor, insira um email válido!', 'erro');
        return;
    }
    
    // Simular envio
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simular delay de envio
    setTimeout(() => {
        mostrarAlerta('Mensagem enviada com sucesso! Obrigado pelo contato! 🎉', 'sucesso');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Log para verificar dados
        console.log('📧 Mensagem enviada:', { name, email, message });
    }, 1500);
});

// ========================================
// FUNÇÃO DE ALERTA PERSONALIZADO
// ========================================
function mostrarAlerta(mensagem, tipo = 'info') {
    const alerta = document.createElement('div');
    alerta.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    
    if (tipo === 'sucesso') {
        alerta.style.background = '#10b981';
    } else if (tipo === 'erro') {
        alerta.style.background = '#ef4444';
    } else {
        alerta.style.background = '#3b82f6';
    }
    
    alerta.textContent = mensagem;
    document.body.appendChild(alerta);
    
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// ========================================
// DESTAQUE DO LINK ATIVO
// ========================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkId = link.getAttribute('href').slice(1);
        
        if (linkId === current) {
            link.style.color = 'var(--accent-color)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
});

// ========================================
// ANIMAÇÃO DE CONTADORES
// ========================================
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const finalValue = parseInt(text);
                let currentValue = 0;
                
                const increment = finalValue / 30;
                const interval = setInterval(() => {
                    currentValue += increment;
                    
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(interval);
                    } else {
                        target.textContent = Math.floor(currentValue) + '+';
                    }
                }, 30);
                
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statCards.forEach(card => {
        counterObserver.observe(card);
    });
}

animateCounters();

// ========================================
// ANIMAÇÃO DAS BARRAS DE PROGRESSO
// ========================================
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                progressBar.style.width = '0';
                
                setTimeout(() => {
                    progressBar.style.transition = 'width 1.5s ease-out';
                    progressBar.style.width = width;
                }, 100);
                
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

animateSkillBars();

// ========================================
// EFEITO HOVER NAS BUTTONS
// ========================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// AÇÕES NOS BOTÕES DO HERO
// ========================================
document.querySelectorAll('.hero-buttons .btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            // Rolar para projetos
            document.querySelector('#projetos').scrollIntoView({ behavior: 'smooth' });
        } else if (index === 1) {
            // Abrir GitHub
            window.open('https://github.com/VitorSaucedo', '_blank');
        }
    });
});

// ========================================
// EFEITO DE GLOW NOS ÍCONES SOCIAIS
// ========================================
document.querySelectorAll('.social-icon').forEach((icon, index) => {
    icon.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.8)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
    
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        
        // GitHub
        if (index === 0) {
            window.open('https://github.com/VitorSaucedo', '_blank');
        }
        // LinkedIn
        else if (index === 1) {
            window.open('https://linkedin.com/in/vitor-saucedo-uggeri-641868365', '_blank');
        }
    });
});

// ========================================
// FEEDBACK VISUAL NO FORMULÁRIO
// ========================================
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.3)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
    });
});

// ========================================
// TOOLTIP PARA SKILLS
// ========================================
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// ========================================
// AÇÕES DOS LINKS DOS PROJETOS
// ========================================
document.querySelectorAll('.project-link').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 0. JavaJobs
        if (index === 0) {
            window.open('https://github.com/VitorSaucedo/java_jobs', '_blank');
        }
        // 1. To Do List
        else if (index === 1) {
            window.open('https://github.com/VitorSaucedo/to_do_list_app', '_blank');
        }
        // 2. Aplicativo de Finanças
        else if (index === 2) {
            window.open('https://github.com/VitorSaucedo/finances_app', '_blank');
        }
        // 3. Gerenciador de Logística
        else if (index === 3) {
            window.open('https://github.com/VitorSaucedo/logistics-management-system', '_blank');
        }
        // 4. Gerenciador de Biblioteca
        else if (index === 4) {
            window.open('https://github.com/VitorSaucedo/library-management-system', '_blank');
        }
    });
});

// ========================================
// VARIAÇÃO NAS ANIMAÇÕES
// ========================================
document.querySelectorAll('.project-card, .tech-group, .path-item').forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
});

// ========================================
// DICAS E INFORMAÇÕES DO CONSOLE
// ========================================
console.log('%c👨‍💻 Dev Fullstack Iniciante', 'font-size: 20px; color: #3b82f6; font-weight: bold;');
console.log('%cEstou aprendendo praticando!', 'font-size: 14px; color: #10b981;');
console.log('%cTecnologias: Java | Python | JavaScript', 'font-size: 12px; color: #f1f5f9;');
console.log('%cGitHub: github.com/seuusuario', 'font-size: 12px; color: #f1f5f9;');
