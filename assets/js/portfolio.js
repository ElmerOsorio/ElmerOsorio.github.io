import { qsa, isFinePointer, prefersReducedMotion, clamp } from './utils.js';

/** Subtle 3D project-card response. Transforms are applied only to an inner wrapper. */
export function initPortfolio() {
  if (!isFinePointer() || prefersReducedMotion()) return;

  qsa('[data-project-card]').forEach((card) => {
    const surface = card.querySelector('[data-tilt-surface]');
    const overlay = card.querySelector('.project-overlay');
    if (!surface) return;

    card.addEventListener('pointermove', (event) => {
      const rect = surface.getBoundingClientRect();
      const px = clamp(0, (event.clientX - rect.left) / rect.width, 1);
      const py = clamp(0, (event.clientY - rect.top) / rect.height, 1);
      const rotateY = (px - 0.5) * 5;
      const rotateX = (0.5 - py) * 5;
      surface.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0,-2px,0)`;
      if (overlay) {
        overlay.style.setProperty('--pointer-x', `${px * 100}%`);
        overlay.style.setProperty('--pointer-y', `${py * 100}%`);
      }
    });
    card.addEventListener('pointerleave', () => {
      surface.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translate3d(0,0,0)';
    });
  });
}
