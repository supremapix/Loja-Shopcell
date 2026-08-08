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
  faqList?: { question: string; answer: string }[];
}

export default function EnhancedSEO({
  title,
  description,
  canonical,
  ogImage = "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
  ogType = 'website',
  keywords = "loja de celulares Curitiba, celulares Curitiba, comprar celular Curitiba, celular com garantia Curitiba, loja de celular Centro Curitiba, Shopcell Curitiba",
  bairroName,
  regiaoName,
  noindex = false,
  faqList,
}: EnhancedSEOProps) {
  
  // Organization & LocalBusiness Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shopcell Curitiba",
    "url": "https://www.celularescuritibashopcell.com.br",
    "logo": ogImage,
    "telephone": "+55-41-3538-1822",
    "sameAs": [
      "https://maps.app.goo.gl/UdXVapfdEjvFVWEC8"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "name": "Shopcell — Loja de Celulares em Curitiba",
    "image": ogImage,
    "@id": "https://www.celularescuritibashopcell.com.br/#localbusiness",
    "url": "https://www.celularescuritibashopcell.com.br",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3800",
      "bestRating": "5",
      "worstRating": "1"
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

  const neighborhoodBusinessSchema = bairroName ? {
    ...localBusinessSchema,
    "@id": `https://www.celularescuritibashopcell.com.br/bairro/${bairroName.toLowerCase()}#localbusiness`,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${bairroName}, Curitiba, PR`
    },
    "description": `Loja de celulares atendendo com rapidez e segurança o bairro ${bairroName} em Curitiba.`
  } : localBusinessSchema;

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shopcell Curitiba",
    "url": "https://www.celularescuritibashopcell.com.br"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.celularescuritibashopcell.com.br"
      },
      ...(bairroName ? [{
        "@type": "ListItem",
        "position": 2,
        "name": bairroName,
        "item": canonical
      }] : [])
    ]
  };

  // Optional FAQPage Schema
  const faqSchema = faqList && faqList.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}${bairroName ? `, loja de celular ${bairroName}, celular ${bairroName}` : ''}`} />
      <meta name="author" content="Suprema Sites Express" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="pt-BR" href={canonical} />

      {/* Robots indexing constraints */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Geo-targeting Meta Tags */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content={`Curitiba${bairroName ? ` - ${bairroName}` : ''}`} />
      <meta name="geo.position" content="-25.4357;-49.2638" />
      <meta name="ICBM" content="-25.4357, -49.2638" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Shopcell — Loja de Celulares em Curitiba" />
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

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data Scripts (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(neighborhoodBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
}
