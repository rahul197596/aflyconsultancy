(function(){
  const root = document.documentElement;
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const themeToggle = document.getElementById('themeToggle');

  // Restore theme from localStorage; fall back to OS preference if not set
  const saved = localStorage.getItem('afly-theme');
  if(saved === 'light' || saved === 'dark'){
    root.setAttribute('data-theme', saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // respect system preference on first visit
    root.setAttribute('data-theme', 'dark');
  }

  // 3D effects: UI toggle removed — interactions enabled by default. Users who prefer reduced motion are respected.
  function updateThemeUI(theme){
    const isDark = theme==='dark';
    if(themeToggle){
      themeToggle.setAttribute('aria-pressed', isDark? 'true':'false');
      themeToggle.setAttribute('aria-label', isDark? 'Activate light mode':'Activate dark mode');
      themeToggle.title = isDark? 'Light Mode':'Dark Mode';
      const sun = themeToggle.querySelector('.icon-sun');
      const moon = themeToggle.querySelector('.icon-moon');
      if(sun && moon){
        sun.style.display = isDark ? 'none':'block';
        moon.style.display = isDark ? 'block':'none';
      }
      themeToggle.dataset.mode = theme;
    }
  }
  updateThemeUI(root.getAttribute('data-theme')||'light');

  // Theme toggle
  if(themeToggle){
    themeToggle.addEventListener('click',()=>{
      const current = root.getAttribute('data-theme')||'light';
      const next = current==='light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('afly-theme', next);
      updateThemeUI(next);
    });
  }

  // Nav toggle
  if(navToggle && navMenu){
    navToggle.addEventListener('click',()=>{
      const open = navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Dropdown logic
  document.querySelectorAll('.nav-link').forEach(btn=>{
    btn.addEventListener('click',e=>{
      if(window.innerWidth>940) return;
      const expanded = btn.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.nav-link').forEach(b=>{
        b.setAttribute('aria-expanded','false');
        b.parentElement.classList.remove('show');
      });
      btn.setAttribute('aria-expanded', expanded ? 'false':'true');
      btn.parentElement.classList.toggle('show', !expanded);
    });
    btn.addEventListener('mouseenter',()=>{
      if(window.innerWidth<=940) return;
      btn.setAttribute('aria-expanded','true');
      btn.parentElement.classList.add('show');
    });
    btn.parentElement.addEventListener('mouseleave',()=>{
      if(window.innerWidth<=940) return;
      btn.setAttribute('aria-expanded','false');
      btn.parentElement.classList.remove('show');
    });
  });

  // Close on resize
  window.addEventListener('resize',()=>{
    if(window.innerWidth>940){
      navMenu && navMenu.classList.remove('open');
      navToggle && navToggle.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded','false');
      document.querySelectorAll('.nav-link').forEach(b=>{
        b.setAttribute('aria-expanded','false');
        b.parentElement.classList.remove('show');
      });
    }
  });

  /* Lightweight hero parallax + card tilt interactions */
  (function add3DInteractions(){
    // fxEnabled removed; interactions enabled by default (respect prefers-reduced-motion below)
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // respect reduced motion

    const hero = document.getElementById('hero');
    if (hero) {
      const layers = Array.from(hero.querySelectorAll('.parallax-layer'));
      let px = 0, py = 0, lx = 0, ly = 0;
      let raf = null;
      const damp = 0.04; // slightly softer, subtler motion

      function onPointer(e){
        const rect = hero.getBoundingClientRect();
        const cx = rect.left + rect.width/2;
        const cy = rect.top + rect.height/2;
        const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || cx;
        const clientY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || cy;
        // normalized -1..1
        px = (clientX - cx) / (rect.width/2);
        py = (clientY - cy) / (rect.height/2);
        if(!raf) raf = requestAnimationFrame(step);
      }

      function step(){
        lx += (px - lx) * damp;
        ly += (py - ly) * damp;
        // apply transform to layers with different factors
        layers.forEach((el, i) => {
          const depth = (i+1) / layers.length; // 0..1
          // read tuning multipliers from CSS custom properties (fallback values in code for older browsers)
          const style = getComputedStyle(document.documentElement);
          const pxMult = parseFloat(style.getPropertyValue('--parallax-translate-mult')) || 8;
          const rzMult = parseFloat(style.getPropertyValue('--parallax-rotate-mult')) || 1.2;
          const tx = lx * pxMult * depth; // move horizontally
          const ty = ly * (pxMult * 0.75) * depth; // move vertically
          const rz = lx * rzMult * depth; // small rotation
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateZ(${rz}deg)`;
          el.style.opacity = 0.7 + (0.3 * (1 - depth));
        });
        raf = null;
      }

      // Track pointer / touch
      hero.addEventListener('pointermove', onPointer, {passive:true});
      hero.addEventListener('touchmove', onPointer, {passive:true});
      hero.addEventListener('pointerleave', ()=>{ px=0; py=0; if(!raf) raf = requestAnimationFrame(step); });
      hero.addEventListener('touchend', ()=>{ px=0; py=0; if(!raf) raf = requestAnimationFrame(step); });
    }

    // Card tilt interactions (desktop primarily)
    const cards = Array.from(document.querySelectorAll('.card'));
    const supportsPointerEvents = window.PointerEvent !== undefined;

    function enableTilt(el){
      const inner = el.querySelector('.card-inner') || el;
      let rect = null;
      // read desired intensity from CSS var (safe fallback)
      const style = getComputedStyle(document.documentElement);
      const intensity = parseFloat(style.getPropertyValue('--card-tilt-intensity')) || 6; // degrees, softer

      function handleMove(e){
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        rect = rect || el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width; // 0..1
        const y = (e.clientY - rect.top) / rect.height; // 0..1
        const rotY = (x - 0.5) * intensity * -1; // invert
        const rotX = (y - 0.5) * intensity;
        requestAnimationFrame(()=>{
          inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(12px)`;
          el.classList.add('tilt');
        });
      }

      function reset(){
        requestAnimationFrame(()=>{
          inner.style.transform = '';
          el.classList.remove('tilt');
        });
      }

      if (supportsPointerEvents) {
        el.addEventListener('pointermove', handleMove);
        el.addEventListener('pointerleave', reset);
        el.addEventListener('pointercancel', reset);
      } else {
        // fallback for old browsers
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', reset);
      }
    }

    // only enable tilt for larger screens
    if (window.innerWidth > 720) {
      cards.forEach(enableTilt);
    }

    // disable tilt on small screens and re-enable on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 720) {
        cards.forEach(c => { const inner = c.querySelector('.card-inner') || c; inner.style.transform = ''; c.classList.remove('tilt'); });
      } else {
        cards.forEach(enableTilt);
      }
    });
  })();
})();
