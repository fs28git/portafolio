/* tech.js actualizado — animaciones suaves + fondo oscuro sin tech-mode */

document.addEventListener('DOMContentLoaded', () => {

  // Efecto de tipeo en el título principal
  (function typingEffect(){
    const h1 = document.querySelector('h1');
    if(!h1) return;

    const text = h1.textContent.trim();
    h1.textContent = '';
    let i = 0;
    function step(){
      if(i < text.length){
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(step, 40);
      }
    }
    setTimeout(step, 400);
  })();

  // Reveal animación por scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

  // Scroll suave entre secciones + efecto fade-in/out al cambiar
  const sections = document.querySelectorAll('section');
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if(targetId.startsWith('#') && targetId.length > 1){
        const target = document.querySelector(targetId);
        if(target){
          e.preventDefault();
          // Desvanecer sección actual
          sections.forEach(sec => sec.classList.remove('active-section'));
          target.classList.add('active-section');
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Inicializa la primera sección como visible
  const firstSection = document.querySelector('section');
  if(firstSection) firstSection.classList.add('active-section');

});
