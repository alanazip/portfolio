"use strict";

// Rolagem suave ao clicar nos links do menu
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Botão do topo (AP) → volta para home
document.getElementById("scroll-to-top").addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

// Animação simples quando a seção entra na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

// Aplica em todas as seções
document.querySelectorAll("section").forEach(sec => observer.observe(sec));
