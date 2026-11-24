import { qsa, isFinePointer, prefersReducedMotion } from './utils.js';

const STRENGTH = 0.35;

/** Subtle magnetic pull for compact CTAs. Skipped on touch and reduced-motion. */
export function initMagnetic() {
  if (!isFinePointer() || prefersReducedMotion()) return;

  qsa('[data-magnetic]').forEach((el) => {
    let frame = null;

    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const relX = event.clientX - (rect.left + rect.width / 2);
      const relY = event.clientY - (rect.top + rect.height / 2);
      el.style.transition = 'none';
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${relX * STRENGTH}px, ${relY * STRENGTH}px, 0)`;
      });
    });

    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      el.style.transition = '';
      void el.offsetWidth; // force reflow so the spring-back transition actually runs
      el.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}
