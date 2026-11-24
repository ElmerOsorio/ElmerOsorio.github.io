import { qsa, prefersReducedMotion } from './utils.js';

/** Reveals content with IntersectionObserver; no scroll listener is required. */
export function initReveals() {
  const items = qsa('[data-reveal]');
  if (!items.length) return;
  if (prefersReducedMotion()) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = Number(entry.target.dataset.revealDelay || 0);
      window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8%' });
  items.forEach((item) => observer.observe(item));
}
