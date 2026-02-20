document.addEventListener('DOMContentLoaded',()=>{
  // Reveal scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.15});
  document.querySelectorAll('.reveal-on-scroll').forEach(el=>obs.observe(el));
});
