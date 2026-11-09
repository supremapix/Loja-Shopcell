import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { bairrosData } from '../bairrosData';
import { LOCAL_SITE, localPath, localSchemas } from '../localGuideData';
import Navbar from './Navbar';
import Footer from './Footer';
import LocalGuide from './LocalGuide';
import '../local-guide.css';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const local = bairrosData.find(item => item.slug === slug?.toLowerCase());
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [slug]);
  if (!local) return <Navigate to="/404" replace />;
  const canonical = `${LOCAL_SITE}${localPath(local)}`;
  return <div className="min-h-screen bg-white text-slate-900">
    <Helmet>
      <title>{local.tituloSEO}</title><meta name="description" content={local.metaDescription} />
      <link rel="canonical" href={canonical} /><meta name="robots" content="index, follow, max-image-preview:large" />
      <meta property="og:type" content="website" /><meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={local.tituloSEO} /><meta property="og:description" content={local.metaDescription} />
      <meta property="og:url" content={canonical} /><meta property="og:image" content={`${LOCAL_SITE}/og-suncell.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      {localSchemas(local).map((schema, index) => <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>)}
    </Helmet>
    <Navbar searchQuery="" onSearchChange={() => {}} />
    <LocalGuide local={local} />
    <Footer />
  </div>;
}
