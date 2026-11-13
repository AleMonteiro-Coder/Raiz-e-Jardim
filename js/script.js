// MENU PARA CELULARES

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");

    const menuAberto = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.textContent = menuAberto ? "✕" : "☰";
});

// FECHAR MENU AO CLICAR EM UM LINK

const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// ANO AUTOMÁTICO NO RODAPÉ

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();