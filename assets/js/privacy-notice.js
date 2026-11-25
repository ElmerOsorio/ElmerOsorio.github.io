const STORAGE_KEY = 'privacy-notice';
const PRIVACY_URL = new URL('../../privacidad.html', import.meta.url).href;

/**
 * Informational notice that the site uses Microsoft Clarity and cookies.
 * It does not gate Clarity: dismissing it only hides the notice in this browser.
 * Must run before initI18n() so the notice text is translated with the rest of the page.
 */
export function initPrivacyNotice() {
  if (document.body.hasAttribute('data-no-privacy-notice')) return;

  let dismissed = false;
  try { dismissed = localStorage.getItem(STORAGE_KEY) === 'dismissed'; } catch { /* storage blocked: show it each visit */ }
  if (dismissed) return;

  const notice = document.createElement('div');
  notice.className = 'privacy-notice';
  notice.setAttribute('role', 'region');
  notice.setAttribute('aria-label', 'Aviso de privacidad');
  notice.setAttribute('data-i18n', 'privacy.label');
  notice.setAttribute('data-i18n-attr', 'aria-label');

  const text = document.createElement('p');
  const message = document.createElement('span');
  message.setAttribute('data-i18n', 'privacy.notice');
  message.textContent = 'Este sitio usa Microsoft Clarity y cookies para entender cómo se navega.';
  const link = document.createElement('a');
  link.href = PRIVACY_URL;
  link.setAttribute('data-i18n', 'privacy.more');
  link.textContent = 'Más información';
  text.append(message, ' ', link);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'privacy-notice__ok';
  button.setAttribute('data-i18n', 'privacy.ok');
  button.textContent = 'Entendido';
  button.addEventListener('click', () => {
    try { localStorage.setItem(STORAGE_KEY, 'dismissed'); } catch { /* storage blocked */ }
    notice.classList.remove('is-visible');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) notice.remove();
    else notice.addEventListener('transitionend', () => notice.remove(), { once: true });
  });

  notice.append(text, button);
  document.body.append(notice);
  requestAnimationFrame(() => requestAnimationFrame(() => notice.classList.add('is-visible')));
}
