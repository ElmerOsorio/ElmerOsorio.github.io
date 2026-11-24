import { qsa, prefersReducedMotion } from './utils.js';

const DURATION = 1200;

function animateValue(el) {
  const raw = el.textContent.trim();
  const match = raw.match(/^[+-]?\d+(\.\d+)?/);
  if (!match) return; // non-numeric placeholders (e.g. "XX") are left as-is

  const target = parseFloat(match[0]);
  const decimals = (match[0].split('.')[1] || '').length;
  const suffix = raw.slice(match[0].length);
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = (target * eased).toFixed(decimals);
    el.textContent = `${current}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = raw;
  };
  requestAnimationFrame(step);
}

/** Counts stat values up from zero the first time they enter view. */
export function initCounters() {
  const values = qsa('.metric-value');
  if (!values.length || prefersReducedMotion()) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateValue(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  values.forEach((value) => observer.observe(value));
}
