import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { bairrosData } from './src/bairrosData.js';
import { INTENT_PAGES } from './src/intentData.js';
import { REALME_PRODUCTS } from './src/realmeData.js';

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
    title: 'Shopcell — Loja de Celulares em Curitiba | Aparelhos Lacrados e Garantia',
    description: 'Tradicional loja de celulares no Centro de Curitiba. Aparelhos novos, lacrados na caixa com 12 meses de garantia local. Entrega expressa via motoboy!',
    canonical: 'https://www.celularescuritibashopcell.com.br/',
    keywords: 'loja de celular curitiba, celular sitio cercado, comprar celular curitiba, loja de celular centro curitiba, celulares com garantia curitiba'
  },
  // Realme Smartphones Catalog Page
  {
    path: '/celulares',
    outputPath: path.join('celulares', 'index.html'),
    title: 'Smartphones Realme em Curitiba | Shopcell — Modelos com Garantia de 12 Meses',
    description: 'Confira os smartphones Realme em Curitiba na Shopcell: realme Note 60X, P4 Lite, 14 5G e P4 Power 5G. Aparelhos novos com 12 meses de garantia local e entrega expressa.',
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
    keywords: `${prod.name}, comprar ${prod.name} curitiba, ${prod.name} menor preco curitiba, celular realme curitiba, shopcell curitiba`,
    ogType: 'product',
    ogImage: prod.image,
    productData: {
      name: prod.name,
      price: prod.price,
      image: prod.image,
      description: prod.shortDescription,
      brand: 'realme'
    }
  })),
  {
    path: '/loja-de-celular-curitiba',
    outputPath: path.join('loja-de-celular-curitiba', 'index.html'),
    title: 'Loja de Celular em Curitiba | Shopcell Centro',
    description: 'Encontre os melhores celulares com 12 meses de garantia na Shopcell no Centro de Curitiba. Atendimento presencial e entrega expressa.',
    canonical: 'https://www.celularescuritibashopcell.com.br/loja-de-celular-curitiba',
    keywords: 'loja de celular curitiba, loja de celular centro curitiba, shopcell curitiba'
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
    title: 'Sobre a Shopcell — Loja de Celulares em Curitiba',
    description: 'Conheça a história da Shopcell, há mais de 8 anos oferecendo celulares originais e atendimento de excelência em Curitiba.',
    canonical: 'https://www.celularescuritibashopcell.com.br/sobre',
    keywords: 'sobre shopcell, historia shopcell curitiba, loja de celular confiavel curitiba'
  },
  {
    path: '/contato',
    outputPath: path.join('contato', 'index.html'),
    title: 'Contato e Localização | Shopcell Curitiba',
    description: 'Fale com a Shopcell pelo WhatsApp ou visite nossa loja física na Rua Conselheiro Laurindo, 809 - Sala 402, Centro, Curitiba/PR.',
    canonical: 'https://www.celularescuritibashopcell.com.br/contato',
    keywords: 'contato shopcell, whatsapp shopcell curitiba, endereco shopcell curitiba'
  },
  // 404 Page
  {
    path: '/404',
    outputPath: '404.html',
    title: 'Página não encontrada (404) | Shopcell Curitiba',
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
    keywords: `celulares ${b.nome}, comprar celular ${b.nome}, loja de celular ${b.nome}, celular Curitiba, loja de celulares Curitiba`,
    bairroName: b.nome,
    regiaoName: b.regiao
  }))
];

function generateSchemas(page: PrerenderPage) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "name": "Shopcell — Loja de Celulares em Curitiba",
    "image": "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
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
        "name": "Shopcell Curitiba"
      }
    }
  } : null;

  return `
    <script type="application/ld+json">${JSON.stringify(localBusiness)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
    ${productSchema ? `<script type="application/ld+json">${JSON.stringify(productSchema)}</script>` : ''}
  `;
}

pages.forEach((page) => {
  let html = templateHtml;

  html = html.replace(/<title>.*?<\/title>/gi, `<title>${page.title}</title>`);

  const ogImage = page.ogImage || "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp";
  const ogType = page.ogType || "website";
  
  const robotsTag = page.noindex 
    ? '<meta name="robots" content="noindex, nofollow" />' 
    : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />';

  const seoHeadTags = `
    <!-- Compiled Static SEO Tags -->
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="Shopcell Curitiba" />
    <link rel="canonical" href="${page.canonical}" />
    ${robotsTag}
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="Curitiba${page.bairroName ? ` - ${page.bairroName}` : ''}" />
    <meta name="geo.position" content="-25.4357;-49.2638" />
    <meta name="ICBM" content="-25.4357, -49.2638" />

    <!-- Open Graph -->
    <meta property="og:type" content="${ogType}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Shopcell — Loja de Celulares em Curitiba" />
    <meta property="og:url" content="${page.canonical}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/webp" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${ogImage}" />

    <!-- Structured Data -->
    ${generateSchemas(page)}
  `;

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
