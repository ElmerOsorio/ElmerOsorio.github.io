import { qsa, prefersReducedMotion } from './utils.js';

/** ScrollTrigger parallax is opt-in through data-parallax-speed. */
export function initParallax() {
  if (prefersReducedMotion() || !window.gsap || !window.ScrollTrigger) return;
  window.gsap.registerPlugin(window.ScrollTrigger);

  qsa('[data-parallax-speed]').forEach((element) => {
    const speed = Number(element.dataset.parallaxSpeed || 0.15);
    window.gsap.fromTo(element, { yPercent: -speed * 20 }, {
      yPercent: speed * 20,
      ease: 'none',
      scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    });
  });
}
