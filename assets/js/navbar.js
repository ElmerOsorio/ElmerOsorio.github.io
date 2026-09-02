import { qs, qsa, rafThrottle } from './utils.js';

/** Handles sticky styling, directional visibility and active section. */
export function initNavbar() {
  const header = qs('[data-header]');
  if (!header) return;

  let lastY = window.scrollY;
  const updateHeader = rafThrottle(() => {
    const currentY = window.scrollY;
    header.classList.toggle('is-scrolled', currentY > 24);
    header.classList.toggle('is-hidden', currentY > lastY && currentY > 180);
    lastY = currentY;
  });
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const links = qsa('[data-section-link]');
  const sections = links.map((link) => qs(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55%', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
