const STORAGE_KEY = 'portfolio-theme';

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function setStoredTheme(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    /* private-browsing / storage disabled: theme just won't persist */
  }
}

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(theme, toggle) {
  document.documentElement.dataset.theme = theme;
  if (!toggle) return;
  const isDark = theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

/**
 * A blocking inline script in <head> already set document.documentElement.dataset.theme
 * before first paint (to avoid a flash of the wrong theme). This module only syncs the
 * toggle button's a11y state to that value and wires interaction it never recomputes
 * the initial theme on its own.
 */
export function initTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  const current = document.documentElement.dataset.theme || (systemPrefersDark() ? 'dark' : 'light');
  applyTheme(current, toggle);

  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next, toggle);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (getStoredTheme()) return; // user made an explicit choice; system changes no longer apply
    applyTheme(event.matches ? 'dark' : 'light', toggle);
  });
}
