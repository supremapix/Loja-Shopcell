import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { bairrosData } from './src/bairrosData.js';

// Derive __dirname in ES Modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PATH = path.join(__dirname, 'dist');
const INDEX_HTML_PATH = path.join(DIST_PATH, 'index.html');

console.log('🏁 Iniciando processo de Pre-Rendering para SEO...');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error('❌ Erro: O arquivo dist/index.html não foi encontrado. Certifique-se de rodar "npm run build" primeiro!');
  process.exit(1);
}

// Read the baseline compiled template
const templateHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

// List of pages to generate
interface PrerenderPage {
  path: string; // URL path like '/' or '/bairro/capao-raso'
  outputPath: string; // File system output like 'index.html' or 'bairro/capao-raso/index.html'
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  bairroName?: string;
  regiaoName?: string;
  introducao?: string;
}

const pages: PrerenderPage[] = [
  // Home Page
  {
    path: '/',
    outputPath: 'index.html',
    title: 'Xiaomi Shop Cell Curitiba | Celulares Xiaomi, Redmi e POCO com Garantia',
    description: 'Sua loja especializada Xiaomi em Curitiba. Celulares originais, novos e lacrados com 6 meses de garantia local. Parcelamos em até 12x. Entrega expressa!',
    canonical: 'https://www.xiaomishopcell.com/',
    keywords: 'Xiaomi Curitiba, comprar Xiaomi Curitiba, celular Xiaomi Centro, Redmi Note 14, POCO X8 Pro, POCO F8 Ultra, Xiaomi original Curitiba, loja Xiaomi Curitiba'
  },
  // Neighborhood pages
  ...bairrosData.map((b) => ({
    path: `/bairro/${b.slug}`,
    outputPath: path.join('bairro', b.slug, 'index.html'),
    title: b.tituloSEO,
    description: b.metaDescription,
    canonical: `https://www.xiaomishopcell.com/bairro/${b.slug}`,
    keywords: `Xiaomi ${b.nome}, comprar Xiaomi ${b.nome}, celular Xiaomi ${b.nome}, Redmi ${b.nome}, POCO ${b.nome}, Xiaomi Curitiba, loja Xiaomi Curitiba`,
    bairroName: b.nome,
    regiaoName: b.regiao,
    introducao: b.introducao
  }))
];

// Helper to generate the JSON-LD schemas
function generateSchemas(page: PrerenderPage) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "name": "Xiaomi Shop Cell Curitiba",
    "image": "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
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

  const neighborhoodBusiness = page.bairroName ? {
    ...localBusiness,
    "@id": `${page.canonical}#localbusiness`,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${page.bairroName}, Curitiba, PR`
    },
    "description": `Revenda autorizada especializada Xiaomi atendendo com rapidez e segurança o bairro ${page.bairroName} em Curitiba.`
  } : localBusiness;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.xiaomishopcell.com"
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
    <script type="application/ld+json">${JSON.stringify(neighborhoodBusiness)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
  `;
}

// Core Pre-rendering generation loop
pages.forEach((page) => {
  let html = templateHtml;

  // 1. Title Replacement
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${page.title}</title>`);

  // 2. Head Tags Generation (Canonical, Metas, Geo, OG, Twitter)
  const ogImage = "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp";
  const seoHeadTags = `
    <!-- Compiled Static SEO Tags -->
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="Suprema Sites Express" />
    <link rel="canonical" href="${page.canonical}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="Curitiba${page.bairroName ? ` - ${page.bairroName}` : ''}" />
    <meta name="geo.position" content="-25.4357;-49.2638" />
    <meta name="ICBM" content="-25.4357, -49.2638" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Xiaomi Shop Cell Curitiba" />
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

  // Inject metadata block in place of existing meta tags or before the closing head tag
  const headEndIndex = html.toLowerCase().indexOf('</head>');
  if (headEndIndex !== -1) {
    html = html.substring(0, headEndIndex) + seoHeadTags + html.substring(headEndIndex);
  }

  // 3. Output files writing
  const fullOutputPath = path.join(DIST_PATH, page.outputPath);
  const outputDir = path.dirname(fullOutputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(fullOutputPath, html, 'utf-8');
  console.log(`✅ Gerado: ${page.outputPath}`);
});

console.log('🎉 Pre-Rendering concluído com sucesso total!');
