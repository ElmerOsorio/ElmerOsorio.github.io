import { initSmoothScroll } from './smooth-scroll.js';
import { initNavbar } from './navbar.js';
import { initReveals } from './reveal.js';
import { initHero } from './hero.js';
import { initCursor } from './cursor.js';
import { initPortfolio } from './portfolio.js';
import { initParallax } from './parallax.js';
import { initTransitions } from './transitions.js';
import { initI18n } from './i18n.js';
import { initDownloads } from './downloads.js';
import { initTheme } from './theme.js';
import { initMagnetic } from './magnetic.js';
import { initCounters } from './counters.js';

/** Application bootstrap. Every module is defensive and page-aware. */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initI18n();
  initSmoothScroll();
  initNavbar();
  initReveals();
  initHero();
  initCursor();
  initPortfolio();
  initParallax();
  initTransitions();
  initDownloads();
  initMagnetic();
  initCounters();

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
});
