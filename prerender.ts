import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { bairrosData } from './src/bairrosData.js';
import { INTENT_PAGES } from './src/intentData.js';

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
}

const pages: PrerenderPage[] = [
  // Home Page
  {
    path: '/',
    outputPath: 'index.html',
    title: 'Shopcell — Loja de Celulares em Curitiba | Aparelhos Lacrados e Garantia',
    description: 'Tradicional loja de celulares no Centro de Curitiba. Aparelhos novos, lacrados na caixa com 6 meses de garantia local. Entrega expressa via motoboy!',
    canonical: 'https://www.celularescuritibashopcell.com.br/',
    keywords: 'loja de celular curitiba, celular sitio cercado, comprar celular curitiba, loja de celular centro curitiba, celulares com garantia curitiba'
  },
  // Core institutional pages
  {
    path: '/celulares',
    outputPath: path.join('celulares', 'index.html'),
    title: 'Celulares em Curitiba — Shopcell | Modelos Novos com Garantia',
    description: 'Confira as melhores opções de celulares novos em Curitiba. Entrega rápida via motoboy e opção de pague na entrega.',
    canonical: 'https://www.celularescuritibashopcell.com.br/celulares',
    keywords: 'celulares curitiba, comprar celular novo curitiba, loja de celulares curitiba'
  },
  {
    path: '/loja-de-celular-curitiba',
    outputPath: path.join('loja-de-celular-curitiba', 'index.html'),
    title: 'Loja de Celular em Curitiba | Shopcell Centro',
    description: 'Encontre os melhores celulares com 6 meses de garantia na Shopcell no Centro de Curitiba. Atendimento presencial e entrega expressa.',
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

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.celularescuritibashopcell.com.br"
      },
      ...(page.bairroName ? [{
        "@type": "ListItem",
        "position": 2,
        "name": page.bairroName,
        "item": page.canonical
      }] : [])
    ]
  };

  return `
    <script type="application/ld+json">${JSON.stringify(localBusiness)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
  `;
}

pages.forEach((page) => {
  let html = templateHtml;

  html = html.replace(/<title>.*?<\/title>/gi, `<title>${page.title}</title>`);

  const ogImage = "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp";
  
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
    <meta property="og:type" content="website" />
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
