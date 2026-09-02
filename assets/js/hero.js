import { qs, qsa, isFinePointer, prefersReducedMotion, clamp } from './utils.js';

/** Premium hero entrance plus restrained pointer parallax. */
export function initHero() {
  const hero = qs('[data-hero]');
  if (!hero || prefersReducedMotion()) return;

  const title = qs('[data-hero-title]', hero);
  const layers = qsa('[data-hero-layer]', hero);

  if (window.SplitType && title) {
    new window.SplitType(title, { types: 'words', wordClass: 'word' });
    qsa('.word', title).forEach((word) => {
      const inner = document.createElement('span');
      inner.className = 'word-inner';
      inner.innerHTML = word.innerHTML;
      word.innerHTML = '';
      word.append(inner);
    });
  }

  if (window.gsap) {
    const timeline = window.gsap.timeline({ defaults: { ease: 'power4.out' } });
    timeline
      .from('[data-header]', { yPercent: -100, duration: 0.9, clearProps: 'transform' })
      .from('[data-hero-eyebrow]', { opacity: 0, y: 18, duration: 0.65 }, '-=0.45')
      .from('.hero-title .word-inner', { yPercent: 110, duration: 1.1, stagger: 0.055 }, '-=0.45')
      .from('[data-hero-copy], [data-hero-actions], [data-hero-meta]', { opacity: 0, y: 20, duration: 0.8, stagger: 0.09 }, '-=0.65')
      .from(layers, { opacity: 0, scale: 0.92, rotate: 2, duration: 1.25, stagger: 0.1 }, '-=1');
  }

  if (!isFinePointer()) return;
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = clamp(-1, ((event.clientX - rect.left) / rect.width - 0.5) * 2, 1);
    const y = clamp(-1, ((event.clientY - rect.top) / rect.height - 0.5) * 2, 1);
    layers.forEach((layer, index) => {
      const depth = Number(layer.dataset.depth || index + 1);
      window.gsap?.to(layer, { x: x * depth * 7, y: y * depth * 5, duration: 1.2, ease: 'power3.out', overwrite: true });
    });
  });
}
