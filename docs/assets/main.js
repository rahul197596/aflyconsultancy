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
})();
