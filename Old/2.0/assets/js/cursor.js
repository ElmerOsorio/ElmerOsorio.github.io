import { qs, qsa, isFinePointer, lerp } from './utils.js';

/** RAF-based cursor. It never runs on touch or coarse-pointer devices. */
export function initCursor() {
  if (!isFinePointer()) return;
  const dot = qs('[data-cursor-dot]');
  const ring = qs('[data-cursor-ring]');
  if (!dot || !ring) return;

  const pointer = { x: innerWidth / 2, y: innerHeight / 2 };
  const follower = { x: pointer.x, y: pointer.y };

  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  }, { passive: true });

  const render = () => {
    follower.x = lerp(follower.x, pointer.x, 0.16);
    follower.y = lerp(follower.y, pointer.y, 0.16);
    dot.style.transform = `translate3d(${pointer.x - 3.5}px, ${pointer.y - 3.5}px, 0)`;
    ring.style.transform = `translate3d(${follower.x - ring.offsetWidth / 2}px, ${follower.y - ring.offsetHeight / 2}px, 0)`;
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  qsa('[data-cursor-label]').forEach((target) => {
    target.addEventListener('pointerenter', () => {
      ring.dataset.label = target.dataset.cursorLabel || 'View';
      ring.classList.add('is-active');
    });
    target.addEventListener('pointerleave', () => ring.classList.remove('is-active'));
  });
}
