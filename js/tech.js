/* js/tech.js — animaciones de seccion mejoradas y fondo oscuro (sin tech-mode) */

document.addEventListener('DOMContentLoaded', () => {

  /* TYPING — efecto en <h1> */
  (function typingEffect(){
    const h1 = document.querySelector('h1');
    if(!h1) return;
    const full = h1.textContent.trim();
    h1.textContent = '';
    let i = 0;
    function step(){ if(i < full.length){ h1.textContent += full.charAt(i++); setTimeout(step, 30 + Math.random()*25); } }
    setTimeout(step, 250);
  })();

  /* REVEAL: IntersectionObserver para elementos .reveal-on-scroll */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

  /* SECTIONS: estado inicial y utilidades */
  const sections = Array.from(document.querySelectorAll('section'));
  let isTransitioning = false;

  // Si no hay secciones, nada que hacer
  if(sections.length === 0) return;

  // Inicializar: marcar la primera visible como active, el resto inactivas
  sections.forEach((s, idx) => {
    s.classList.remove('active-section','fading-out');
    if(idx === 0) {
      s.classList.add('active-section');
      // permitir que el revealObserver revele contenido interno
    } else {
      // ya están opacas por CSS
    }
  });

  /* Función para cambiar a sección objetivo con fade-out/fade-in */
  async function goToSection(targetEl){
    if(!targetEl || isTransitioning) return;
    isTransitioning = true;

    // encontrar la sección actual (la que tenga active-section)
    const current = document.querySelector('section.active-section') || sections[0];

    // Si el target ya es la actual, solo aseguramos scroll suave
    if(current === targetEl){
      targetEl.scrollIntoView({ behavior: 'smooth' });
      isTransitioning = false;
      return;
    }

    // fade out current
    current.classList.add('fading-out');
    current.classList.remove('active-section');

    // espera breve para que el usuario vea el fade-out
    await new Promise(r => setTimeout(r, 200));

    // scroll suave a target
    targetEl.scrollIntoView({ behavior: 'smooth' });

    // aseguramos que target tenga tiempo para posicionarse y entonces fade-in
    await new Promise(r => setTimeout(r, 200));

    // remover cualquier estado y activar target
    targetEl.classList.remove('fading-out');
    targetEl.classList.add('active-section');

    // limpiar el estado de fading del anterior
    current.classList.remove('fading-out');

    // pequeño buffer antes de permitir nuevas transiciones
    await new Promise(r => setTimeout(r, 160));
    isTransitioning = false;
  }

  /* Enlaces de ancla: interceptar clicks y llamar a goToSection */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if(!href || href === '#' ) return;
      const target = document.querySelector(href);
      if(target && target.tagName.toLowerCase() === 'section'){
        e.preventDefault();
        goToSection(target);
      }
    });
  });

  /* También consideramos el scroll manual: cuando el usuario hace scroll y llega a una sección,
     la marcamos como active (sin forzar el fade-out). Esto mejora la UX si el usuario se desplaza. */
  const sectionInViewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !isTransitioning){
        sections.forEach(s => s.classList.remove('active-section'));
        entry.target.classList.add('active-section');
      }
    });
  }, { threshold: 0.55 });

  sections.forEach(s => sectionInViewObserver.observe(s));

});
