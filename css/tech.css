/* tech.js — efectos futuristas avanzados */

document.addEventListener('DOMContentLoaded', () => {

  // Efecto de tipeo mejorado con cursor
  (function typingEffect() {
    const h1 = document.querySelector('h1');
    if (!h1) return;
    const text = h1.textContent.trim();
    h1.textContent = '';
    h1.style.borderRight = '3px solid var(--accent)';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      } else {
        // Parpadeo del cursor
        setInterval(() => {
          h1.style.borderRight = h1.style.borderRight === 'none' 
            ? '3px solid var(--accent)' 
            : 'none';
        }, 500);
      }
    }
    
    setTimeout(type, 500);
  })();

  // Scroll progress indicator
  const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.prepend(indicator);
    
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      indicator.style.width = scrolled + '%';
    });
  };
  createScrollIndicator();

  // Reveal scroll con efecto stagger
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e, index) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.classList.add('revealed');
        }, index * 100);
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObs.observe(el));

  // Transición entre secciones
  const sections = Array.from(document.querySelectorAll('section'));
  let transitioning = false;

  function goTo(target) {
    if (!target || transitioning) return;
    transitioning = true;
    
    const current = document.querySelector('section.active-section') || sections[0];
    
    if (current === target) {
      target.scrollIntoView({ behavior: 'smooth' });
      transitioning = false;
      return;
    }

    current.classList.add('fading-out');
    
    setTimeout(() => {
      current.classList.remove('active-section', 'fading-out');
      target.classList.add('active-section');
      target.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => transitioning = false, 700);
    }, 300);
  }

  // Inicial
  if (sections.length > 0) sections[0].classList.add('active-section');

  // Enlaces con efecto
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target && target.tagName.toLowerCase() === 'section') {
          e.preventDefault();
          goTo(target);
        }
      }
    });
  });

  // Sincroniza scroll manual
  const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !transitioning) {
        sections.forEach(s => s.classList.remove('active-section'));
        e.target.classList.add('active-section');
      }
    });
  }, { threshold: 0.55 });

  sections.forEach(s => activeObs.observe(s));

  // Parallax effect mejorado + Hide/Show Navbar
  let ticking = false;
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        document.documentElement.style.setProperty('--parallax-y', `${scrolled}px`);
        
        // Hide/Show navbar based on scroll direction
        if (navbar) {
          if (scrolled > lastScrollTop && scrolled > 100) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
            navbar.classList.add('scrolled');
          } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
            if (scrolled > 50) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          }
          lastScrollTop = scrolled <= 0 ? 0 : scrolled;
        }
        
        ticking = false;
      });
      ticking = true;
    }
  });


  // Efecto de partículas en el cursor (opcional)
  const createCursorEffect = () => {
    let particles = [];
    
    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.9) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          opacity: 1;
          box-shadow: 0 0 10px var(--accent);
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => {
          particle.style.transition = 'all 1s ease-out';
          particle.style.opacity = '0';
          particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
          setTimeout(() => particle.remove(), 1000);
        }, 10);
      }
    });
  };
  
  // Activar efecto de partículas solo en desktop
  if (window.innerWidth > 768) {
    createCursorEffect();
  }

  // Animación de números contadores (si hay estadísticas)
  const animateNumbers = () => {
    const numbers = document.querySelectorAll('[data-count]');
    numbers.forEach(num => {
      const target = parseInt(num.getAttribute('data-count'));
      let current = 0;
      const increment = target / 50;
      
      const updateCount = () => {
        current += increment;
        if (current < target) {
          num.textContent = Math.ceil(current);
          requestAnimationFrame(updateCount);
        } else {
          num.textContent = target;
        }
      };
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.disconnect();
        }
      });
      
      observer.observe(num);
    });
  };
  animateNumbers();

  // Efecto de brillo en cards al pasar el mouse
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

});

