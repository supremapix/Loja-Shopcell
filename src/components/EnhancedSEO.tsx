import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  keywords?: string;
  bairroName?: string;
  regiaoName?: string;
  noindex?: boolean;
}

export default function EnhancedSEO({
  title,
  description,
  canonical,
  ogImage = "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
  ogType = 'website',
  keywords = "Xiaomi Curitiba, comprar Xiaomi Curitiba, celular Xiaomi Centro, Redmi Note 14, POCO X8 Pro, POCO F8 Ultra, Xiaomi original Curitiba, loja Xiaomi Curitiba",
  bairroName,
  regiaoName,
  noindex = false,
}: EnhancedSEOProps) {
  
  // Base structured data (JSON-LD) for the business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "name": "Xiaomi Shop Cell Curitiba",
    "image": ogImage,
    "@id": "https://www.xiaomishopcell.com/#localbusiness",
    "url": "https://www.xiaomishopcell.com",
    "telephone": "+55-41-3538-1822",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Conselheiro Laurindo, 809 – Sala 402, Centro",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80060-100",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4357,
      "longitude": -49.2638
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://maps.app.goo.gl/UdXVapfdEjvFVWEC8"
    ]
  };

  // If this is a neighborhood page, we append areaServed and unique information
  const neighborhoodBusinessSchema = bairroName ? {
    ...localBusinessSchema,
    "@id": `https://www.xiaomishopcell.com/bairro/${bairroName.toLowerCase()}#localbusiness`,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${bairroName}, Curitiba, PR`
    },
    "description": `Revenda autorizada especializada Xiaomi atendendo com rapidez e segurança o bairro ${bairroName} em Curitiba.`
  } : localBusinessSchema;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.xiaomishopcell.com"
      },
      ...(bairroName ? [{
        "@type": "ListItem",
        "position": 2,
        "name": bairroName,
        "item": canonical
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}${bairroName ? `, Xiaomi ${bairroName}, celular Xiaomi ${bairroName}, Redmi ${bairroName}, POCO ${bairroName}` : ''}`} />
      <meta name="author" content="Suprema Sites Express" />
      <link rel="canonical" href={canonical} />

      {/* Robots indexing constraints */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Geo-targeting Meta Tags (Curitiba focus) */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content={`Curitiba${bairroName ? ` - ${bairroName}` : ''}`} />
      <meta name="geo.position" content="-25.4357;-49.2638" />
      <meta name="ICBM" content="-25.4357, -49.2638" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Xiaomi Shop Cell Curitiba" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Resource Hints (Performance Optimization) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.celularescuritibashopcell.com.br" />
      <link rel="dns-prefetch" href="https://www.celularescuritibashopcell.com.br" />

      {/* Font preloads to minimize Layout Shift */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;700&display=swap" as="style" />

      {/* Structured Data Scripts (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(neighborhoodBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
