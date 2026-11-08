import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './premium.css';

// Static SEO serves crawlers and link previews. React 19 hoists Helmet metadata,
// so retire the static copy once before rendering to avoid duplicate canonicals.
document.head.querySelectorAll([
  'link[rel="canonical"]',
  'meta[name="description"]', 'meta[name="keywords"]', 'meta[name="author"]',
  'meta[name="robots"]', 'meta[name^="geo."]', 'meta[name="ICBM"]',
  'meta[property^="og:"]', 'meta[name^="twitter:"]',
  'script[type="application/ld+json"]',
].join(',')).forEach((element) => element.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

// Register service worker for offline capabilities and asset caching
try {
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && (import.meta as any).env?.PROD) {
    window.addEventListener('load', () => {
      try {
        navigator.serviceWorker.register('/sw.js')
          .then((reg) => console.log('Service Worker registrado com sucesso: ', reg.scope))
          .catch((err) => console.error('Falha ao registrar o Service Worker: ', err));
      } catch (err) {
        console.warn('Falha ao registrar o Service Worker (iframe / sandbox):', err);
      }
    });
  }
} catch (err) {
  console.warn('Service worker não é suportado ou está bloqueado:', err);
}

