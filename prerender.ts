import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { bairrosData } from './src/bairrosData.js';
import { INTENT_PAGES } from './src/intentData.js';
import { REALME_PRODUCTS } from './src/realmeData.js';
import { BLOG_POSTS } from './src/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PATH = path.join(__dirname, 'dist');
const INDEX_HTML_PATH = path.join(DIST_PATH, 'index.html');

console.log('🏁 Iniciando processo de Pre-Rendering para SEO...');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error('❌ Erro: O arquivo dist/index.html não foi encontrado. Certifique-se de rodar "npm run build" primeiro!');
  process.exit(1);
}

const templateHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

// One-release compatibility for documents retained by the previous service worker.
// Old HTML must still load the current app while the cache updates itself.
for (const [pattern, legacyName] of [
  [/src="(\/assets\/[^"]+\.js)"/, 'index-DeeeCG6u.js'],
  [/src="(\/assets\/[^"]+\.js)"/, 'index-Rl6KhMIH.js'],
  [/src="(\/assets\/[^"]+\.js)"/, 'index-6cx5WXa-.js'],
  [/src="(\/assets\/[^"]+\.js)"/, 'index-DIUc9Mr2.js'],
  [/href="(\/assets\/[^"]+\.css)"/, 'index-CYt2YvPK.css'],
  [/href="(\/assets\/[^"]+\.css)"/, 'index-BgAgHVgu.css'],
  [/href="(\/assets\/[^"]+\.css)"/, 'index-DzWZbtRk.css'],
  [/href="(\/assets\/[^"]+\.css)"/, 'index-B5b2acns.css'],
] as const) {
  const currentAsset = templateHtml.match(pattern)?.[1];
  if (currentAsset) fs.copyFileSync(path.join(DIST_PATH, currentAsset), path.join(DIST_PATH, 'assets', legacyName));
}


interface PrerenderPage {
  path: string;
  outputPath: string;
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  bairroName?: string;
  regiaoName?: string;
  noindex?: boolean;
  ogType?: string;
  ogImage?: string;
  imageWidth?: number;
  imageHeight?: number;
  productData?: {
    name: string;
    price: number;
    image: string;
    description: string;
    brand: string;
  };
}

const pages: PrerenderPage[] = [
  // Home Page
  {
    path: '/',
    outputPath: 'index.html',
    title: 'SUNCELL — Assistência Técnica de Celular em Curitiba | Mercado Goes',
    description: 'Troca de tela, bateria e placa com diagnóstico gratuito e garantia. Duas lojas SUNCELL dentro do Mercado Goes: Guaíra e Alto Boqueirão, Curitiba.',
    canonical: 'https://www.celularescuritibashopcell.com.br/',
    keywords: 'assistência técnica celular curitiba, troca de tela curitiba, troca de bateria curitiba, conserto de celular curitiba, suncell curitiba, mercado goes'
  },
  // Realme Smartphones Catalog Page
  {
    path: '/celulares',
    outputPath: path.join('celulares', 'index.html'),
    title: 'Smartphones Realme em Curitiba | SUNCELL — Modelos com Garantia de 12 Meses',
    description: 'Confira os smartphones Realme em Curitiba na SUNCELL: realme Note 60X, P4 Lite, 14 5G e P4 Power 5G. Aparelhos novos com 12 meses de garantia local e entrega expressa.',
    canonical: 'https://www.celularescuritibashopcell.com.br/celulares',
    keywords: 'smartphones realme curitiba, comprar realme curitiba, celular realme curitiba, realme note 60x curitiba, realme p4 lite curitiba, realme 14 5g curitiba, realme p4 power curitiba, loja de celulares curitiba'
  },
  // Individual Realme Smartphone Pages
  ...REALME_PRODUCTS.map((prod) => ({
    path: `/celular/${prod.slug}`,
    outputPath: path.join('celular', prod.slug, 'index.html'),
    title: prod.titleSEO,
    description: prod.metaDescription,
    canonical: prod.canonical,
    keywords: `${prod.name}, comprar ${prod.name} curitiba, ${prod.name} menor preco curitiba, celular realme curitiba, suncell curitiba`,
    ogType: 'product',
    ogImage: new URL(prod.image, prod.canonical).href,
    imageWidth: 600,
    imageHeight: 600,
    productData: {
      name: prod.name,
      price: prod.price,
      image: new URL(prod.image, prod.canonical).href,
      description: prod.shortDescription,
      brand: 'realme'
    }
  })),
  {
    path: '/loja-de-celular-curitiba',
    outputPath: path.join('loja-de-celular-curitiba', 'index.html'),
    title: 'Loja de Celular em Curitiba | SUNCELL Mercado Goes',
    description: 'Encontre os melhores celulares com 12 meses de garantia na SUNCELL no Mercado Goes, em Curitiba. Atendimento presencial e entrega expressa.',
    canonical: 'https://www.celularescuritibashopcell.com.br/loja-de-celular-curitiba',
    keywords: 'loja de celular curitiba, loja de celular mercado goes, suncell curitiba'
  },
  {
    path: '/acessorios',
    outputPath: path.join('acessorios', 'index.html'),
    title: 'Acessórios para Celulares em Curitiba | Capinhas, Películas e Carregadores',
    description: 'Acessórios completos para seu celular em Curitiba. Capinhas, películas de vidro e carregadores com entrega expressa.',
    canonical: 'https://www.celularescuritibashopcell.com.br/acessorios',
    keywords: 'acessorios celular curitiba, capinha celular curitiba, pelicula celular curitiba'
  },
  {
    path: '/sobre',
    outputPath: path.join('sobre', 'index.html'),
    title: 'Sobre a SUNCELL — Assistência Técnica em Curitiba',
    description: 'Conheça a história da SUNCELL, referência em assistência técnica de celulares no Mercado Goes, em Curitiba.',
    canonical: 'https://www.celularescuritibashopcell.com.br/sobre',
    keywords: 'sobre suncell, historia suncell curitiba, assistencia tecnica celular curitiba'
  },
  {
    path: '/contato',
    outputPath: path.join('contato', 'index.html'),
    title: 'Contato e Localização | SUNCELL Curitiba',
    description: 'Fale com a SUNCELL pelo WhatsApp ou visite nossas lojas no Mercado Goes, em Curitiba: Guaíra e Alto Boqueirão.',
    canonical: 'https://www.celularescuritibashopcell.com.br/contato',
    keywords: 'contato suncell, whatsapp suncell curitiba, endereco suncell curitiba'
  },
  // Preserve metadata on direct requests as well as client-side navigation.
  {
    path: '/blog',
    outputPath: path.join('blog', 'index.html'),
    title: 'Blog SUNCELL Curitiba | Guias de Compra, Análises e Dicas de Celulares',
    description: 'Confira os melhores guias de compra e análises de smartphones em Curitiba. Descubra como escolher seu celular ideal com dicas de especialistas da SUNCELL.',
    canonical: 'https://www.celularescuritibashopcell.com.br/blog',
    keywords: 'blog celular curitiba, qual celular comprar, loja de celular curitiba, guia de compras celular curitiba'
  },
  ...Object.values(BLOG_POSTS).map((post) => ({
    path: `/blog/${post.slug}`,
    outputPath: path.join('blog', post.slug, 'index.html'),
    title: `${post.title} | Blog SUNCELL Curitiba`,
    description: post.metaDescription,
    canonical: `https://www.celularescuritibashopcell.com.br/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    ogType: 'article',
    ogImage: post.image,
    ...(new URL(post.image, "https://www.celularescuritibashopcell.com.br").pathname === "/images/suncell-assistencia-banner.webp"
      ? { imageWidth: 1536, imageHeight: 1024 } : {})
  })),
  {
    path: '/comparar',
    outputPath: path.join('comparar', 'index.html'),
    title: 'Comparativo de Celulares | SUNCELL — Loja de Celulares em Curitiba',
    description: 'Analise técnica e compare smartphones atuais com suas gerações anteriores. Saiba se vale a pena fazer o upgrade!',
    canonical: 'https://www.celularescuritibashopcell.com.br/comparar',
    keywords: 'assistência técnica celular Curitiba, troca de tela Curitiba, troca de bateria Curitiba, conserto de celular Curitiba, SUNCELL Curitiba, Mercado Goes'
  },
  // 404 Page
  {
    path: '/404',
    outputPath: '404.html',
    title: 'Página não encontrada (404) | SUNCELL Curitiba',
    description: 'A página solicitada não foi encontrada. Confira nossos canais de atendimento e navegabilidade.',
    canonical: 'https://www.celularescuritibashopcell.com.br/404',
    keywords: '404, pagina nao encontrada',
    noindex: true
  },
  // Intent Pages
  ...Object.values(INTENT_PAGES).map((ip) => ({
    path: `/${ip.slug}`,
    outputPath: path.join(ip.slug, 'index.html'),
    title: ip.title,
    description: ip.metaDescription,
    canonical: `https://www.celularescuritibashopcell.com.br/${ip.slug}`,
    keywords: ip.keywords,
    bairroName: ip.bairroFocus
  })),
  // Neighborhood pages
  ...bairrosData.map((b) => ({
    path: `/bairro/${b.slug}`,
    outputPath: path.join('bairro', b.slug, 'index.html'),
    title: b.tituloSEO,
    description: b.metaDescription,
    canonical: `https://www.celularescuritibashopcell.com.br/bairro/${b.slug}`,
    keywords: `assistência técnica ${b.nome}, conserto de celular ${b.nome}, troca de tela ${b.nome}, celular Curitiba, suncell curitiba`,
    bairroName: b.nome,
    regiaoName: b.regiao
  }))
];

function generateSchemas(page: PrerenderPage) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "name": "SUNCELL — Assistência Técnica de Celulares em Curitiba",
    "image": "https://www.celularescuritibashopcell.com.br/og-suncell.jpg",
    "@id": "https://www.celularescuritibashopcell.com.br/#localbusiness",
    "url": "https://www.celularescuritibashopcell.com.br",
    "telephone": "+55-41-99917-6640",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Maria Moscardi Fanini, 261 - Mercado Goes",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80220-450",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4716,
      "longitude": -49.2789
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
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://maps.app.goo.gl/UdXVapfdEjvFVWEC8"
    ]
  };

  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://www.celularescuritibashopcell.com.br"
    }
  ];

  if (page.path.startsWith('/celular/')) {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Celulares",
      "item": "https://www.celularescuritibashopcell.com.br/celulares"
    });
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 3,
      "name": page.productData?.name || page.title,
      "item": page.canonical
    });
  } else if (page.path === '/celulares') {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Celulares",
      "item": page.canonical
    });
  } else if (page.bairroName) {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": page.bairroName,
      "item": page.canonical
    });
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements
  };

  const productSchema = page.productData ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": page.productData.name,
    "image": page.productData.image,
    "description": page.productData.description,
    "brand": {
      "@type": "Brand",
      "name": page.productData.brand
    },
    "offers": {
      "@type": "Offer",
      "url": page.canonical,
      "priceCurrency": "BRL",
      "price": page.productData.price.toFixed(2),
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "MobilePhoneStore",
        "name": "SUNCELL Curitiba"
      }
    }
  } : null;

  return `
    <script type="application/ld+json">${JSON.stringify(localBusiness)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
    ${productSchema ? `<script type="application/ld+json">${JSON.stringify(productSchema)}</script>` : ''}
  `;
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

pages.forEach((page) => {
  let html = templateHtml;

  html = html.replace(/<title[^>]*>.*?<\/title>/gi, `<title data-rh="true">${escapeHtml(page.title)}</title>`);

  // Remove template SEO tags to avoid duplicates with the per-page tags below
  html = html
    .replace(/<link[^>]*rel=["']canonical["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]*(?:name|property)=["'](?:description|keywords|author|robots|geo\.[^"']*|ICBM|og:[^"']*|twitter:[^"']*)["'][^>]*>\s*/gi, '')
    .replace(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, '');

  const ogImage = new URL(page.ogImage || "/og-suncell.jpg", page.canonical).href;
  const defaultImage = !page.ogImage;
  const imageWidth = page.imageWidth ?? (defaultImage ? 1200 : undefined);
  const imageHeight = page.imageHeight ?? (defaultImage ? 630 : undefined);
  const ogImageType = ogImage.endsWith('.webp') ? 'image/webp' : ogImage.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const ogType = page.ogType || "website";
  
  const robotsTag = page.noindex 
    ? '<meta name="robots" content="noindex, nofollow" />' 
    : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />';

  const seoHeadTags = `
    <!-- Compiled Static SEO Tags -->
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="keywords" content="${escapeHtml(page.keywords)}" />
    <meta name="author" content="SUNCELL Curitiba" />
    <link rel="canonical" href="${escapeHtml(page.canonical)}" />
    ${robotsTag}
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="Curitiba${page.bairroName ? ` - ${page.bairroName}` : ''}" />
    <meta name="geo.position" content="-25.4716;-49.2789" />
    <meta name="ICBM" content="-25.4716, -49.2789" />

    <!-- Open Graph -->
    <meta property="og:type" content="${ogType}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="SUNCELL — Assistência Técnica de Celulares em Curitiba" />
    <meta property="og:url" content="${escapeHtml(page.canonical)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${escapeHtml(ogImage)}" />
    ${imageWidth ? `<meta property="og:image:width" content="${imageWidth}" />` : ''}
    ${imageHeight ? `<meta property="og:image:height" content="${imageHeight}" />` : ''}
    <meta property="og:image:type" content="${ogImageType}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImage)}" />

    <!-- Structured Data -->
    ${generateSchemas(page)}
  `.replace(/<(meta|link|script)\b/g, '<$1 data-rh="true"');

  const headEndIndex = html.toLowerCase().indexOf('</head>');
  if (headEndIndex !== -1) {
    html = html.substring(0, headEndIndex) + seoHeadTags + html.substring(headEndIndex);
  }

  const fullOutputPath = path.join(DIST_PATH, page.outputPath);
  const outputDir = path.dirname(fullOutputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(fullOutputPath, html, 'utf-8');
  console.log(`✅ Gerado: ${page.outputPath}`);
});

console.log('🎉 Pre-Rendering concluído com sucesso total!');
