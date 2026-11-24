import { prefersReducedMotion } from './utils.js';

/** Initializes Lenis only when motion is allowed and the library is available. */
export function initSmoothScroll() {
  if (prefersReducedMotion() || typeof window.Lenis === 'undefined') return null;

  const lenis = new window.Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
    syncTouch: false,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  if (window.gsap && window.ScrollTrigger) {
    lenis.on('scroll', window.ScrollTrigger.update);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -72, duration: 1.1 });
    });
  });

  return lenis;
}
