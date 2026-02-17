// ui.js — Control de menú y animaciones simples

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-btn");
  const navList = document.querySelector("nav ul");

  // Alternar visibilidad del menú en móvil
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navList.classList.toggle("open");
      menuBtn.classList.toggle("active");
    });
  }

  // Animación suave al hacer hover en bloques o nodos
  const elementos = document.querySelectorAll(".bloque, .nodo");
  elementos.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.transition = "transform 0.3s ease";
      el.style.transform = "scale(1.05)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });
  });
});
