// Efeito de sombra na navbar ao rolar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '20px 0';
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});