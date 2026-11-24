/** Shared, dependency-free utilities. */
export const qs = (selector, context = document) => context.querySelector(selector);
export const qsa = (selector, context = document) => [...context.querySelectorAll(selector)];
export const clamp = (min, value, max) => Math.min(Math.max(value, min), max);
export const lerp = (start, end, amount) => start + (end - start) * amount;
export const isFinePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const on = (target, event, handler, options) => {
  target?.addEventListener(event, handler, options);
  return () => target?.removeEventListener(event, handler, options);
};
export const rafThrottle = (callback) => {
  let queued = false;
  return (...args) => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      callback(...args);
      queued = false;
    });
  };
};
