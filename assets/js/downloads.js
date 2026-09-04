import { qsa } from './utils.js';

// iPadOS reports as "MacIntel" but exposes touch points, unlike a real Mac.
const isIOS = /iP(hone|od|ad)/.test(navigator.userAgent)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

/**
 * Forces a real download instead of navigation. Safari on desktop often
 * ignores the `download` attribute for PDFs and opens its own viewer
 * instead; fetching the file as a blob and clicking a temporary object-URL
 * link sidesteps that. iOS Safari has no reliable equivalent: any download
 * triggered after an `await` no longer counts as user-initiated and gets
 * silently blocked, so there we just let the link open the PDF natively —
 * the Share button in Safari's viewer is the standard way to save it there.
 */
export function initDownloads() {
  if (isIOS) return;

  qsa('[data-download-link]').forEach((link) => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      const filename = link.getAttribute('download') || '';
      try {
        const response = await fetch(link.href);
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.href = blobUrl;
        tempLink.download = filename;
        document.body.appendChild(tempLink);
        tempLink.click();
        tempLink.remove();
        URL.revokeObjectURL(blobUrl);
      } catch {
        // Fall back to a normal navigation if the fetch/blob approach fails.
        window.location.href = link.href;
      }
    });
  });
}
