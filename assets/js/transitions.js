import { qs, prefersReducedMotion } from './utils.js';

const FLAG_KEY = 'page-transition-active';

function getFlag() {
  try {
    return sessionStorage.getItem(FLAG_KEY) === '1';
  } catch (error) {
    return false;
  }
}

function clearFlag() {
  try {
    sessionStorage.removeItem(FLAG_KEY);
  } catch (error) {
    /* ignore */
  }
}

function setFlag() {
  try {
    sessionStorage.setItem(FLAG_KEY, '1');
  } catch (error) {
    /* ignore: transition simply won't reveal-in on the next page */
  }
}

/** Internal page transition (curtain out on click, curtain lifts open on the next page). */
export function initTransitions() {
  const overlay = qs('[data-page-transition]');
  if (!overlay || prefersReducedMotion() || !window.gsap) return;

  if (getFlag()) {
    clearFlag();
    window.gsap.set(overlay, { scaleY: 1, transformOrigin: 'top' });
    window.gsap.to(overlay, { scaleY: 0, duration: 0.7, ease: 'power4.inOut', delay: 0.05 });
  } else {
    window.gsap.set(overlay, { scaleY: 0, transformOrigin: 'bottom' });
  }

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link || link.target === '_blank' || link.hasAttribute('download') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')) return;
    const destination = new URL(link.href, location.href);
    if (destination.origin !== location.origin || (destination.pathname === location.pathname && destination.hash)) return;
    event.preventDefault();
    window.gsap.set(overlay, { transformOrigin: 'bottom' });
    window.gsap.to(overlay, {
      scaleY: 1,
      duration: 0.65,
      ease: 'power4.inOut',
      onComplete: () => {
        setFlag();
        location.href = link.href;
      },
    });
  });

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) window.gsap.set(overlay, { scaleY: 0 });
  });
}
