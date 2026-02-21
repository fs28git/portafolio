// ui.js — Control de menú y animaciones

document.addEventListener("DOMContentLoaded", () => {
  
  // Animación suave al hacer scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animación hover en cards y materias
  const elementos = document.querySelectorAll(".card, .materia, .event");
  elementos.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.transition = "transform 0.3s ease";
    });
  });

  // Efecto de aparición al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Aplicar animación a secciones
  document.querySelectorAll(".section, .card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

});
