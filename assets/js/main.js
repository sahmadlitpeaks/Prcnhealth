/* =============================================================
   Precision Health — main.js
   Lightweight, dependency-free interactions.
   ============================================================= */

(() => {
  'use strict';

  // -------- Mobile menu toggle --------
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.addEventListener('click', e => {
      if (e.target.tagName === 'A') mobileMenu.classList.add('hidden');
    });
  }

  // -------- Sticky header shrink --------
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
  }

  // -------- Reveal on scroll --------
  const targets = document.querySelectorAll('section h2, section h3, .reveal');
  if ('IntersectionObserver' in window && targets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }

  // -------- Counter animation --------
  const counters = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window && counters.length) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseInt(el.dataset.counter, 10);
        const isPercent = el.textContent.includes('%');
        const isK = el.textContent.includes('k');
        let current = 0;
        const step = Math.max(1, Math.floor(target / 60));
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          let label = current.toLocaleString();
          if (isK && target >= 1000) label = (current / 1000).toFixed(0) + 'k+';
          if (isPercent) label = current + '%';
          el.textContent = label;
          if (current >= target) clearInterval(timer);
        }, 16);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => co.observe(el));
  }

  // -------- FAQ — close siblings when one opens --------
  const faq = document.getElementById('faq');
  if (faq) {
    faq.querySelectorAll('details').forEach(d => {
      d.addEventListener('toggle', () => {
        if (d.open) faq.querySelectorAll('details').forEach(o => { if (o !== d) o.open = false; });
      });
    });
  }

  // -------- Year in footer --------
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // -------- Form: client-side basic validation + fake submit --------
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) return;  // let browser show messages
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending…';
      setTimeout(() => {
        btn.innerHTML = '✓ We\'ll be in touch within 1 business day';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4000);
      }, 900);
    });
  });
})();
