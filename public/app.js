(() => {
  function initMenuToggle() {
    const btn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    const closeBtn = document.querySelector('.menu-close');
    const backdrop = document.querySelector('.menu-backdrop');
    if (!btn || !nav) return;

    function setOpen(open){
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', open);
    }

    btn.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      setOpen(open);
    });

    closeBtn?.addEventListener('click', () => setOpen(false));
    backdrop?.addEventListener('click', () => setOpen(false));

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setOpen(false);
      });
    });

    const mq = window.matchMedia('(min-width: 901px)');
    mq.addEventListener('change', (e) => {
      if (e.matches) {
        setOpen(false);
      }
    });
  }

  function initResumeForm() {
    const form = document.getElementById('resumeForm');
    const email = document.getElementById('resumeEmail');
    const hp = document.getElementById('company');
    const btn = document.getElementById('resumeBtn');
    const msg = document.getElementById('resumeMsg');
    if (!form || !email || !hp || !btn || !msg) return;

    function setStatus(text, ok) {
      msg.textContent = text || '';
      msg.style.color = ok ? 'var(--success, #7CFFB2)' : 'var(--warn, #ffb86c)';
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      setStatus('');
      const value = (email.value || '').trim();
      const trap = (hp.value || '').trim();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        setStatus('Please enter a valid email address.', false);
        email.focus();
        return;
      }
      if (trap) {
        setStatus('Something went wrong.', false);
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending…';
      btn.setAttribute('aria-busy', 'true');

      try {
        const res = await fetch('/api/request-resume', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: value }),
        });

        let data = {};
        try { data = await res.json(); } catch {}

        if (res.ok && data?.success) {
          setStatus('✅ Resume sent! Please check your inbox (and spam folder).', true);
          form.reset();
        } else if (data?.redirectToContact) {
          setStatus('⚠️ Please reach out via the contact section.', false);
          location.hash = '#contact';
        } else {
          setStatus(data?.error || '⚠️ Failed to send. Please try again.', false);
        }
      } catch {
        setStatus('⚠️ Network error. Please try again.', false);
      } finally {
        btn.disabled = false;
        btn.textContent = 'Request Resume';
        btn.removeAttribute('aria-busy');
      }
    });
  }

  function initFooterYear() {
    const year = document.getElementById('y');
    if (year) year.textContent = new Date().getFullYear();
  }

  initMenuToggle();
  initResumeForm();
  initFooterYear();
})();
