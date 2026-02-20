/* js/tech.js
   Efectos JS:
   - typing effect para el <h1> (si existe)
   - IntersectionObserver para revelar elementos con .reveal-on-scroll
   - pequeña mejora para enlaces externos (abrir en nueva pestaña)
*/

document.addEventListener('DOMContentLoaded', function(){
  // TYPING EFFECT para el h1 (si existe)
  (function typingEffect(){
    const h1 = document.querySelector('h1');
    if(!h1) return;

    // Si ya hay un texto, hacemos efecto de tipeo solo si no tiene data-typed
    const originalText = h1.textContent.trim();
    if(!originalText) return;

    // Evitamos duplicar si ya fue procesado
    if(h1.dataset.typed === "true") return;
    h1.dataset.typed = "true";

    h1.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    h1.parentNode.insertBefore(cursor, h1.nextSibling);

    let i = 0;
    function step(){
      if(i <= originalText.length){
        h1.textContent = originalText.substring(0, i);
        i++;
        const delay = (originalText.charAt(i-1) === ' ')? 40 : 38 + Math.random()*35;
        setTimeout(step, delay);
      } else {
        // keep cursor visible for a bit then remove
        setTimeout(()=> {
          cursor.parentNode && cursor.parentNode.removeChild(cursor);
        }, 800);
      }
    }
    // slight delay before starting
    setTimeout(step, 250);
  })();

  // IntersectionObserver: reveal elements with .reveal-on-scroll
  (function scrollReveal(){
    const els = document.querySelectorAll('.reveal-on-scroll');
    if(!els.length) return;

    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('revealed');
          // once revealed, unobserve to improve perf
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => obs.observe(el));
  })();

  // make external links show a tiny console log (techy) and ensure target blank
  (function externalLinks(){
    document.querySelectorAll('a[href^="http"]').forEach(a=>{
      if(a.hostname && a.hostname !== location.hostname){
        a.setAttribute('target','_blank');
        a.setAttribute('rel','noopener noreferrer');
        a.addEventListener('click', ()=> {
          try { console.log('[abrir-externo]', a.href); } catch(e){}
        });
      }
    });
  })();

  // optional: add a small "tech-ribbon" if not present
  if(!document.querySelector('.tech-ribbon')){
    const ribbon = document.createElement('div');
    ribbon.className = 'tech-ribbon';
    ribbon.textContent = '⚡️ tech-mode';
    document.body.appendChild(ribbon);
  }
});
