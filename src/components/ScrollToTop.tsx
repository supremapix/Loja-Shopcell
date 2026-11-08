import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component automatically scrolls the window to the top (0, 0)
 * on pathname or anchor changes. Query-only filters preserve the reading position.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const isNewPage = previousPath.current !== pathname;
    previousPath.current = pathname;
    // Removing a collection anchor during filtering must not jump to the hero.
    if (!hash && isNewPage) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.body.scrollTop = 0;
    } else if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}
