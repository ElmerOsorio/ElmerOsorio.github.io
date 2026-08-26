import { qs, prefersReducedMotion } from './utils.js';

/** Internal page transition with a safe immediate-navigation fallback. */
export function initTransitions() {
  const overlay = qs('[data-page-transition]');
  if (!overlay || prefersReducedMotion() || !window.gsap) return;

  window.gsap.set(overlay, { scaleY: 0, transformOrigin: 'bottom' });
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || link.target === '_blank' || link.hasAttribute('download') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')) return;
    const destination = new URL(link.href, location.href);
    if (destination.origin !== location.origin || destination.pathname === location.pathname && destination.hash) return;
    event.preventDefault();
    window.gsap.to(overlay, { scaleY: 1, duration: 0.65, ease: 'power4.inOut', onComplete: () => { location.href = link.href; } });
  });

  window.addEventListener('pageshow', () => window.gsap.set(overlay, { scaleY: 0 }));
}
