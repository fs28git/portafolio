/* tech.js — cambio de sección con efecto fade + zoom futurista */

document.addEventListener('DOMContentLoaded', () => {

  // Efecto de tipeo
  (function typingEffect(){
    const h1 = document.querySelector('h1');
    if(!h1) return;
    const text = h1.textContent.trim();
    h1.textContent = '';
    let i = 0;
    function type(){
      if(i < text.length){
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(type, 35);
      }
    }
    setTimeout(type, 300);
  })();

  // Reveal scroll
  const revealObs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal-on-scroll').forEach(el=>revealObs.observe(el));

  // Transición entre secciones
  const sections = Array.from(document.querySelectorAll('section'));
  let transitioning = false;

  function goTo(target){
    if(!target || transitioning) return;
    transitioning = true;

    const current = document.querySelector('section.active-section') || sections[0];
    if(current === target){
      target.scrollIntoView({behavior:'smooth'});
      transitioning = false;
      return;
    }

    current.classList.add('fading-out');
    setTimeout(()=>{
      current.classList.remove('active-section','fading-out');
      target.classList.add('active-section');
      target.scrollIntoView({behavior:'smooth'});
      setTimeout(()=>transitioning=false, 700);
    },300);
  }

  // Inicial
  if(sections.length>0) sections[0].classList.add('active-section');

  // Enlaces
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const href=link.getAttribute('href');
      if(href && href.startsWith('#') && href.length>1){
        const target=document.querySelector(href);
        if(target && target.tagName.toLowerCase()==='section'){
          e.preventDefault();
          goTo(target);
        }
      }
    });
  });

  // Sincroniza scroll manual
  const activeObs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting && !transitioning){
        sections.forEach(s=>s.classList.remove('active-section'));
        e.target.classList.add('active-section');
      }
    });
  },{threshold:0.55});
  sections.forEach(s=>activeObs.observe(s));
});

