const CLARITY_ID = 'yd4vg3hugt';
const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]', ''];

/**
 * Loads Microsoft Clarity once, for every page that boots app.js, so no page
 * needs its own snippet. Skipped on local previews so testing doesn't pollute the data.
 */
export function initAnalytics() {
  if (LOCAL_HOSTS.includes(location.hostname) || window.clarity) return;

  window.clarity = function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.append(script);
}
