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

  /* Site-wide interactive graphics canvas (particles + pointer attractor)
     - auto-initializes on each page
     - respects prefers-reduced-motion and small-screen fallbacks
     - colors and density are read from CSS variables so theme-aware */
  (function addInteractiveCanvas(){
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // check css var to allow site config to turn off
    const rootStyle = getComputedStyle(document.documentElement);
    const enabled = rootStyle.getPropertyValue('--interactive-enabled').trim();
    if (enabled === '0') return;
    if (window.innerWidth <= 640) return; // small-screen disabled in CSS too

    const canvas = document.createElement('canvas');
    canvas.id = 'interactive-canvas';
    canvas.className = 'interactive-canvas';
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, dpr = window.devicePixelRatio || 1;
    let particles = [];
    let pointer = { x: null, y: null, down: false };
    let animId = null;

    function parseColor(v){ return v ? v.trim() : 'rgba(10,36,114,0.12)'; }

    function setup(){
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // determine particle count based on density variable
      const density = parseFloat(rootStyle.getPropertyValue('--interactive-density')) || 0.00011;
      const count = Math.max(12, Math.round(width * height * density));
      // initialize particles
      particles = new Array(count).fill().map(()=>createParticle());
    }

    function rnd(min, max){ return Math.random()*(max-min)+min; }

    function createParticle(){
      return {
        x: Math.random()*width,
        y: Math.random()*height,
        vx: rnd(-0.25,0.25),
        vy: rnd(-0.25,0.25),
        r: rnd(1.2,3.6),
        life: rnd(60, 220),
        age: Math.random()*220
      };
    }

    function update(){
      const primary = parseColor(rootStyle.getPropertyValue('--interactive-primary'));
      const accent = parseColor(rootStyle.getPropertyValue('--interactive-accent'));

      ctx.clearRect(0,0,width,height);

      // pointer attraction
      const px = pointer.x === null ? width*0.5 : pointer.x;
      const py = pointer.y === null ? height*0.5 : pointer.y;

      particles.forEach((p, i)=>{
        // small wandering velocity
        p.vx += rnd(-0.03, 0.03);
        p.vy += rnd(-0.03, 0.03);
        // attraction to pointer
        const dx = px - p.x;
        const dy = py - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy) + 0.001;
        const attract = Math.min(0.08, 12 / (dist));
        p.vx += dx/dist * attract * 0.02;
        p.vy += dy/dist * attract * 0.02;
        // damping
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy;

        // wrap around
        if(p.x < -40) p.x = width + 40;
        if(p.x > width + 40) p.x = -40;
        if(p.y < -40) p.y = height + 40;
        if(p.y > height + 40) p.y = -40;

        // aging
        p.age += 1;
        if(p.age > p.life){
          // respawn
          particles[i] = createParticle();
        }

        // draw
        const t = (Math.sin((p.age/p.life) * Math.PI));
        const size = p.r * (0.6 + 0.8*t);
        // pick color mix partly varied per index
        const alpha = 0.25 + 0.55 * t;
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size*3);
        grad.addColorStop(0, primary.replace(/rgba\(([^)]+)\)/, `rgba($1,${alpha})`));
        grad.addColorStop(0.7, accent.replace(/rgba\(([^)]+)\)/, `rgba($1,${Math.max(0.06, alpha*0.2)})`));
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, size*2, 0, Math.PI*2);
        ctx.fill();
      });

      // draw subtle connecting lines between nearby particles (cheap, few)
      for(let i=0;i<particles.length;i+=Math.max(1, Math.floor(particles.length/14))){
        for(let j=i+1;j<i+5 && j<particles.length;j++){
          const a = particles[i], b = particles[j];
          const dx = a.x-b.x; const dy = a.y-b.y; const d = Math.sqrt(dx*dx + dy*dy);
          if(d < 160){
            const strength = 1 - (d/160);
            ctx.beginPath();
            ctx.strokeStyle = primary.replace(/rgba\(([^)]+)\)/, `rgba($1,${0.06*strength})`);
            ctx.lineWidth = 1.25 * strength;
            ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
            ctx.stroke();
          }
        }
      }
    }

    function loop(){
      update();
      animId = requestAnimationFrame(loop);
    }

    // pointer handling - read from window so canvas can remain pointer-events: none
    let lastPointerTime = 0;
    window.addEventListener('pointermove', (e)=>{
      const now = Date.now();
      // throttle to ~60hz
      if(now - lastPointerTime < 8) return;
      lastPointerTime = now;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }, {passive:true});

    window.addEventListener('pointerleave', ()=>{ pointer.x = null; pointer.y = null; });

    // hide/stop on page hide
    document.addEventListener('visibilitychange', ()=>{
      if(document.hidden){ cancelAnimationFrame(animId); animId = null;} else { if(!animId) animId = requestAnimationFrame(loop); }
    });

    // responsive: rebuild on resize
    let resizeId = null;
    window.addEventListener('resize', ()=>{
      if(resizeId) clearTimeout(resizeId);
      resizeId = setTimeout(()=>{ setup(); }, 220);
    });

    // initialize and start
    try{ setup(); animId = requestAnimationFrame(loop); } catch(e){ console.warn('interactive canvas failed', e); }
  })();
})();
