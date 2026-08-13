import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import CelularesListingPage from './components/CelularesListingPage';
import CelularProductPage from './components/CelularProductPage';
import LocationPage from './components/LocationPage';
import IntentPage from './components/IntentPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import Compare from './components/Compare';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';

function BairroRouteGuard() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const normalized = slug
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");

  if (slug !== normalized) {
    return <Navigate to={`/bairro/${normalized}`} replace />;
  }

  return <LocationPage />;
}

function PrefixRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/bairro/${slug}`} replace />;
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
      {/* Primary Institutional Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/celulares" element={<CelularesListingPage />} />
      <Route path="/celular/:slug" element={<CelularProductPage />} />
      <Route path="/loja-de-celular-curitiba" element={<IntentPage />} />
      <Route path="/acessorios" element={<Home />} />
      <Route path="/sobre" element={<Home />} />
      <Route path="/contato" element={<Home />} />

      {/* Spotlight Sítio Cercado & Local Intent Routes */}
      <Route path="/sitio-cercado" element={<IntentPage />} />
      <Route path="/loja-de-celular-sitio-cercado" element={<IntentPage />} />
      <Route path="/comprar-celular-curitiba" element={<IntentPage />} />
      <Route path="/celular-barato-curitiba" element={<IntentPage />} />
      <Route path="/troca-de-celular-curitiba" element={<IntentPage />} />
      <Route path="/celular-com-garantia-curitiba" element={<IntentPage />} />
      <Route path="/loja-de-celulares-perto-de-mim" element={<IntentPage />} />

      {/* Redirects for legacy brand/model paths to protect SEO authority */}
      <Route path="/loja-xiaomi-sitio-cercado" element={<Navigate to="/loja-de-celular-sitio-cercado" replace />} />
      <Route path="/loja-xiaomi-curitiba" element={<Navigate to="/loja-de-celular-curitiba" replace />} />
      <Route path="/iphone-curitiba" element={<Navigate to="/celulares" replace />} />
      <Route path="/samsung-curitiba" element={<Navigate to="/celulares" replace />} />
      <Route path="/redmi-curitiba" element={<Navigate to="/celulares" replace />} />
      <Route path="/poco-curitiba" element={<Navigate to="/celulares" replace />} />
      <Route path="/assistencia-xiaomi-curitiba" element={<Navigate to="/contato" replace />} />

      {/* Redirect legacy product URL patterns to clean category page */}
      <Route path="/produto/*" element={<Navigate to="/celulares" replace />} />
      <Route path="/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram" element={<Navigate to="/celulares" replace />} />
      <Route path="/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb8gb-ram" element={<Navigate to="/celulares" replace />} />
      <Route path="/celular-xiaomi-redmi-note-15-5g-nfc-dual-sim-256gb8gb-ram" element={<Navigate to="/celulares" replace />} />

      {/* Blog & Content Module */}
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />

      {/* Dynamic Neighborhood / Location Pages */}
      <Route path="/bairro/:slug" element={<BairroRouteGuard />} />
      
      {/* Comparison page routes */}
      <Route path="/comparar" element={<Compare />} />
      <Route path="/compare" element={<Navigate to="/comparar" replace />} />
      
      {/* City and Region Aliases */}
      <Route path="/cidade/:slug" element={<PrefixRedirect />} />
      <Route path="/regiao/:slug" element={<PrefixRedirect />} />

      {/* Explicit 404 Route */}
      <Route path="/404" element={<NotFound />} />

      {/* Catch-all Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </CartProvider>
  );
}
