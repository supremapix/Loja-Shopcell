import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './components/Home';
import LocationPage from './components/LocationPage';
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

export default function App() {
  return (
    <Routes>
      {/* Primary Home Page */}
      <Route path="/" element={<Home />} />

      {/* Dynamic Neighborhood / Location Pages with redirect guard */}
      <Route path="/bairro/:slug" element={<BairroRouteGuard />} />

      {/* Explicit 404 Route */}
      <Route path="/404" element={<NotFound />} />

      {/* Catch-all Route for any other undefined path */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
