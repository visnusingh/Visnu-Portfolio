// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('show'));
  });
}

// Sticky header shadow on scroll
const header = document.querySelector('.site-header');
addEventListener('scroll', () => {
  const y = window.scrollY || 0;
  header.style.boxShadow = y > 6 ? '0 8px 24px -18px rgba(0,0,0,.6)' : 'none';
}, { passive: true });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll (Framer‑motion vibe, no library)
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
reveals.forEach(el => io.observe(el));
