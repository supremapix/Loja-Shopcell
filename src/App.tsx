import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './components/Home';
import LocationPage from './components/LocationPage';
import Compare from './components/Compare';
import ProductPage from './components/ProductPage';
import NotFound from './components/NotFound';

// Route guard to detect non-normalized slugs (with accents, capitals, spaces) and redirect to normalized form
function BairroRouteGuard() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  // Normalize: lowercased, removed accents, replace spaces with hifens, only alphanumeric and hifens
  const normalized = slug
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/\s+/g, "-")           // spaces to hifens
    .replace(/[^a-z0-9\-]/g, "");    // remove any invalid chars

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
    <Routes>
      {/* Primary Home Page */}
      <Route path="/" element={<Home />} />

      {/* Dedicated Product Detail Pages with + separators */}
      <Route path="/produto/:slug" element={<ProductPage />} />

      {/* Direct custom URL for Xiaomi 17T Pro */}
      <Route path="/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram" element={<ProductPage />} />

      {/* Direct custom URL for POCO X8 Pro */}
      <Route path="/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb8gb-ram" element={<ProductPage />} />

      {/* Dynamic Neighborhood / Location Pages with redirect guard */}
      <Route path="/bairro/:slug" element={<BairroRouteGuard />} />
      
      {/* Comparison page routes */}
      <Route path="/comparar" element={<Compare />} />
      <Route path="/compare" element={<Navigate to="/comparar" replace />} />
      
      {/* City and Region Route Aliases */}
      <Route path="/cidade/:slug" element={<PrefixRedirect />} />
      <Route path="/regiao/:slug" element={<PrefixRedirect />} />

      {/* Explicit 404 Route */}
      <Route path="/404" element={<NotFound />} />

      {/* Catch-all Route for any other undefined path */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
