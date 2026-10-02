/* ===================================================
   PORTFOLIO — main.js
   GitHub: DA7-WTDS | Yahia Ahmed Abdelmoneim
=================================================== */

const GITHUB_USERNAME = 'DA7-WTDS';

// ─── Featured projects config ──────────────────────
// Pinned repos from GitHub profile — updated automatically when repos go public.
const PROJECTS = [
  {
    repoName:    'Graduation-project',
    displayName: 'QuantWise',
    description: 'My graduation project. A full-stack AI-powered stock advisory platform. I built the entire backend in ASP.NET Core with CQRS, a Python FastAPI ML scoring pipeline (XGBoost + FinBERT), RabbitMQ event messaging, Redis caching, and a constrained Gemini LLM layer.',
    tags:        ['C#', '.NET 10', 'CQRS', 'FastAPI', 'XGBoost', 'FinBERT', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
    language:    'C#',
    langDotClass:'csharp',
    github:      `https://github.com/${GITHUB_USERNAME}/Graduation-project`,
    accentColor: '#06b6d4',
    _apiOwner:   GITHUB_USERNAME,
    _apiRepo:    'Graduation-project',
  },
  {
    repoName:    'kyx-backend',
    displayName: 'kyx',
    description: 'Backend services for kyx — a collaborative real-world project. Built with ASP.NET Core and C#, handling core API contracts, business logic, and data persistence. Dockerized for consistent deployment.',
    tags:        ['C#', 'ASP.NET Core', 'REST API', 'Docker', 'Collaboration'],
    language:    'C#',
    langDotClass:'csharp',
    github:      'https://github.com/RealOrangeKun/kyx-backend',
    accentColor: '#8b5cf6',
    badge:       'Collab',
    _apiOwner:   'RealOrangeKun',
    _apiRepo:    'kyx-backend',
  },
  {
    repoName:    'rock-loyalty-system',
    displayName: 'Rock Loyalty System',
    description: 'A backend loyalty and rewards system. Handles point accrual, tier management, and redemption flows for customer retention programs — built with clean layered architecture.',
    tags:        ['C#', 'ASP.NET Core', 'REST API', 'Loyalty System', 'Backend'],
    language:    'C#',
    langDotClass:'csharp',
    github:      `https://github.com/${GITHUB_USERNAME}/rock-loyalty-system`,
    accentColor: '#10b981',
    _apiOwner:   GITHUB_USERNAME,
    _apiRepo:    'rock-loyalty-system',
  },
];

// ─── C# class displayed in the terminal window ───
const CODE_LINES = [
  '<span class="ck">// Backend Engineer Portfolio</span>',
  '<span class="kw">public</span> <span class="kw">class</span> <span class="cn">Portfolio</span>',
  '<span class="pt">{</span>',
  '    <span class="kw">public</span> <span class="tp">string</span>   Name      <span class="op">{ get; }</span> <span class="pt">=</span> <span class="st">"Yahia Abdelmoneim"</span><span class="pt">;</span>',
  '    <span class="kw">public</span> <span class="tp">string</span>   Role      <span class="op">{ get; }</span> <span class="pt">=</span> <span class="st">"Backend Engineer"</span><span class="pt">;</span>',
  '    <span class="kw">public</span> <span class="tp">string</span><span class="pt">[]</span> Stack     <span class="op">{ get; }</span> <span class="pt">=</span> <span class="pt">{</span> <span class="st">"C#"</span><span class="pt">,</span> <span class="st">".NET"</span><span class="pt">,</span> <span class="st">"Java"</span><span class="pt">,</span> <span class="st">"Docker"</span> <span class="pt">};</span>',
  '    <span class="kw">public</span> <span class="tp">bool</span>     Available <span class="op">{ get; }</span> <span class="pt">=</span> <span class="kw">true</span><span class="pt">;</span>',
  '    <span class="kw">public</span> <span class="tp">string</span><span class="pt">[]</span> Projects  <span class="op">{ get; }</span> <span class="pt">=</span>',
  '    <span class="pt">{</span>',
  '        <span class="st">"QuantWise"</span><span class="pt">,</span>',
  '        <span class="st">"kyx"</span><span class="pt">,</span>',
  '        <span class="st">"Rock Loyalty System"</span>',
  '    <span class="pt">};</span>',
  '<span class="pt">}</span>',
];

// ─── Typewriter roles ──────────────────────────────
const ROLES = [
  'Backend Engineer',
  'System Architect',
  '.NET Developer',
  'API Specialist',
  'AI Systems Builder',
];

/* ===================================================
   PARTICLES
=================================================== */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  const COLORS = ['rgba(6,182,212,', 'rgba(139,92,246,', 'rgba(6,182,212,'];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.min(80, Math.floor((W * H) / 18000));
    particles = Array.from({ length: count }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.5 + 0.5,
      c:  COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw dots
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + '0.5)';
      ctx.fill();

      // Move
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

/* ===================================================
   NAVBAR
=================================================== */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  toggle?.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on link click (mobile)
  links?.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ===================================================
   TYPEWRITER
=================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const role = ROLES[ri];
    el.textContent = deleting ? role.slice(0, ci--) : role.slice(0, ci++);

    if (!deleting && ci > role.length) {
      setTimeout(() => { deleting = true; tick(); }, 1800);
      return;
    }
    if (deleting && ci < 0) {
      deleting = false;
      ci = 0;
      ri = (ri + 1) % ROLES.length;
    }

    setTimeout(tick, deleting ? 45 : 80);
  }

  tick();
}

/* ===================================================
   TERMINAL / CODE WINDOW
=================================================== */
function initTerminal() {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  // Line numbers
  let lineNum = 1;
  let i = 0;

  function addLine() {
    if (i >= CODE_LINES.length) return;

    const el  = document.createElement('span');
    el.className = 'code-line';

    const num = document.createElement('span');
    num.className = 'line-num';
    num.textContent = String(lineNum).padStart(2, ' ');

    const content = document.createElement('span');
    content.className = 'line-content';
    content.innerHTML = CODE_LINES[i] || '';

    el.appendChild(num);
    el.appendChild(content);

    el.style.opacity = '0';
    el.style.transform = 'translateX(-4px)';
    body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
      el.style.opacity  = '1';
      el.style.transform = 'translateX(0)';
    });

    body.scrollTop = body.scrollHeight;
    lineNum++;
    i++;
    setTimeout(addLine, i <= 3 ? 220 : 90);
  }

  setTimeout(addLine, 500);
}

/* ===================================================
   GITHUB API
=================================================== */
async function fetchGitHubData() {
  try {
    // Fetch profile + all project repos in parallel
    const repoFetches = PROJECTS.map(p =>
      fetch(`https://api.github.com/repos/${p._apiOwner}/${p._apiRepo}`)
    );

    const [profileRes, ...repoResponses] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      ...repoFetches,
    ]);

    if (profileRes.ok) {
      const p = await profileRes.json();
      // Hero stats
      setTextIfEl('stat-repos',    p.public_repos);
      setTextIfEl('stat-followers', p.followers);
      // GitHub section
      setTextIfEl('gh-repos',     p.public_repos);
      setTextIfEl('gh-followers', p.followers);
      setTextIfEl('gh-following', p.following);
      setTextIfEl('gh-name',      p.name || 'Yahia Ahmed Abdelmoneim');
      setTextIfEl('gh-bio',       p.bio  || 'Backend Engineer');
      // Avatars
      ['github-avatar', 'gh-avatar'].forEach(id => {
        const img = document.getElementById(id);
        if (img && p.avatar_url) img.src = p.avatar_url;
      });
    }

    // Stars & forks for each project
    for (let i = 0; i < repoResponses.length; i++) {
      if (repoResponses[i].ok) {
        const r = await repoResponses[i].json();
        PROJECTS[i]._stars = r.stargazers_count ?? 0;
        PROJECTS[i]._forks = r.forks_count ?? 0;
        // Fill in description from API if repo has one and we don't override it
        if (r.description && !PROJECTS[i]._descOverridden) {
          // keep our custom description — don't overwrite
        }
      }
    }

  } catch (e) {
    console.warn('GitHub API fetch failed:', e);
  } finally {
    renderProjects();
  }
}

function setTextIfEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val ?? '-';
}

/* ===================================================
   PROJECT CARDS
=================================================== */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROJECTS.forEach((proj, i) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.animationDelay = `${i * 0.12}s`;

    const langDot = `<span class="lang-dot ${proj.langDotClass || ''}"></span>`;
    const tags    = proj.tags.map(t => `<span class="card-tag">${t}</span>`).join('');
    const stars   = proj._stars !== undefined ? proj._stars : '';
    const starBadge = stars !== ''
      ? `<span class="card-star">
           <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
           ${stars}
         </span>`
      : '';

    const collabBadge = proj.badge
      ? `<span class="card-collab-badge">${proj.badge}</span>`
      : '';

    card.innerHTML = `
      <div class="card-top-bar" style="background: linear-gradient(90deg, ${proj.accentColor}, #8b5cf6);"></div>
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-name">${proj.displayName}${collabBadge}</h3>
          ${starBadge}
        </div>
        <p class="card-desc">${proj.description}</p>
        <div class="card-tags">${tags}</div>
        <div class="card-footer">
          <div class="card-lang">
            ${langDot}
            ${proj.language || ''}
          </div>
          <a href="${proj.github}" target="_blank" rel="noopener" class="card-link" id="project-link-${i}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View on GitHub
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
    // Trigger animation
    requestAnimationFrame(() => card.classList.add('visible'));
  });
}

/* ===================================================
   SCROLL REVEAL
=================================================== */
function initScrollReveal() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ===================================================
   ACTIVE NAV HIGHLIGHT
=================================================== */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          active?.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => io.observe(s));
}

/* ===================================================
   COUNTER ANIMATION
=================================================== */
function animateCounter(el, target, duration = 1000) {
  if (!el || isNaN(target)) return;
  const start = performance.now();
  const from  = 0;
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (target - from) * ease);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const targets = [
    ['stat-repos', 'gh-repos'],
    ['stat-followers', 'gh-followers'],
    ['gh-following'],
  ];

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const val = parseInt(el.dataset.val, 10);
      if (!isNaN(val)) animateCounter(el, val);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  // Observe after GitHub data loads (we'll call this again post-fetch)
  document.querySelectorAll('.stat-value, .gh-stat-val').forEach(el => {
    const raw = parseInt(el.textContent, 10);
    if (!isNaN(raw)) {
      el.dataset.val = raw;
      el.textContent = '0';
      io.observe(el);
    }
  });
}

/* ===================================================
   NAV ACTIVE STYLE
=================================================== */
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: var(--cyan) !important; }`;
document.head.appendChild(style);

/* ===================================================
   INIT
=================================================== */
document.addEventListener('DOMContentLoaded', async () => {
  initParticles();
  initNavbar();
  initTypewriter();
  initTerminal();
  initScrollReveal();
  initActiveNav();

  await fetchGitHubData();
  // Animate counters after data loaded
  initCounters();
});
