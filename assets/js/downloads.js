import { qsa } from './utils.js';

/**
 * Forces a real download instead of navigation. Safari in particular often
 * ignores the `download` attribute for PDFs and opens its own viewer
 * instead; fetching the file as a blob and clicking a temporary object-URL
 * link sidesteps that.
 */
export function initDownloads() {
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
