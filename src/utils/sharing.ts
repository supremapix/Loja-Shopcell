export function getShareLinks(text: string, url: string, image: string) {
  const encode = encodeURIComponent;
  return [
    { name: 'WhatsApp', url: `https://wa.me/?text=${encode(text)}` },
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encode(url)}` },
    { name: 'X / Twitter', url: `https://twitter.com/intent/tweet?text=${encode(text)}` },
    { name: 'Pinterest', url: `https://pinterest.com/pin/create/button/?url=${encode(url)}&media=${encode(image)}&description=${encode(text)}` },
    { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encode(url)}` },
    { name: 'Threads', url: `https://www.threads.net/intent/post?text=${encode(text)}` },
  ];
}

export async function copyRecommendation(text: string): Promise<boolean> {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const previousFocus = document.activeElement as HTMLElement | null;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('aria-label', 'Texto para copiar');
    textarea.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
    // A modal dialog makes the rest of the document inert, so use it as the fallback host.
    const host = document.querySelector('dialog[open]') || document.body;
    host.appendChild(textarea);
    let copied = false;
    try {
      textarea.focus();
      textarea.select();
      copied = document.execCommand('copy');
    } catch { copied = false; }
    finally {
      textarea.remove();
      previousFocus?.focus({ preventScroll: true });
    }
    return copied;
  }
}
