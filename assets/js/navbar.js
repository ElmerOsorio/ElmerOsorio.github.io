import { qs, qsa, rafThrottle } from './utils.js';

/** Handles sticky styling, directional visibility, mobile menu and active section. */
export function initNavbar() {
  const header = qs('[data-header]');
  const toggle = qs('[data-menu-toggle]');
  const menu = qs('[data-nav-menu]');
  if (!header) return;

  let lastY = window.scrollY;
  const updateHeader = rafThrottle(() => {
    const currentY = window.scrollY;
    header.classList.toggle('is-scrolled', currentY > 24);
    header.classList.toggle('is-hidden', currentY > lastY && currentY > 180 && !document.body.classList.contains('is-menu-open'));
    lastY = currentY;
  });
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const closeMenu = () => {
    toggle?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('is-open');
    document.body.classList.remove('is-menu-open');
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('is-open', !open);
    document.body.classList.toggle('is-menu-open', !open);
  });
  qsa('[data-nav-menu] a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());

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
