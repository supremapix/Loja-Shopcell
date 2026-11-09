import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowDown, ArrowUpRight, ShieldCheck, MapPin, CreditCard,
  MessageSquare, ChevronRight, PhoneCall, Search, SlidersHorizontal, X
} from 'lucide-react';
import { REALME_PRODUCTS } from '../realmeData';
import { CONTACT_INFO } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import RealmeProductCard from './RealmeProductCard';
import '../catalog.css';

export default function CelularesListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const setSearchQuery = (query: string) => {
    setSearchParams(current => {
      const next = new URLSearchParams(current);
      if (query) next.set('q', query);
      else next.delete('q');
      return next;
    }, { replace: true });
  };
  const [isSeniorText, setIsSeniorText] = useState(false);
  const [sortOrder, setSortOrder] = useState('price-asc');
  const sortedProducts = [...REALME_PRODUCTS].sort((a, b) => a.price - b.price);
  const filteredProducts = sortedProducts.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.specs.tela.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => sortOrder === 'price-desc' ? b.price - a.price : a.price - b.price);

  const canonicalUrl = "https://www.xiaomishopcell.com/celulares";

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
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Celulares",
        "item": canonicalUrl
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": sortedProducts.map((prod, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": prod.name,
      "url": prod.canonical
    }))
  };

  return (
    <div className={`sc-catalog-page ${isSeniorText ? 'sc-large-text' : ''}`}>
      <Helmet>
        <title>Smartphones Realme em Curitiba | SUNCELL — Modelos com Garantia de 12 Meses</title>
        <meta
          name="description"
          content="Confira os smartphones Realme em Curitiba na SUNCELL: realme Note 60X, P4 Lite, 14 5G e P4 Power 5G. Aparelhos novos com 12 meses de garantia local e entrega expressa."
        />
        <meta name="keywords" content="smartphones realme curitiba, comprar realme curitiba, celular realme curitiba, realme note 60x curitiba, realme p4 lite curitiba, realme 14 5g curitiba, realme p4 power curitiba, loja de celulares curitiba" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SUNCELL — Loja de Celulares em Curitiba" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Smartphones Realme em Curitiba | SUNCELL" />
        <meta property="og:description" content="Catálogo completo de celulares Realme com 12 meses de garantia física no Mercado Goes, em Curitiba e entrega via motoboy." />
        <meta property="og:image" content="/images/suncell-assistencia-banner.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smartphones Realme em Curitiba | SUNCELL" />
        <meta name="twitter:description" content="Catálogo de celulares Realme novos, originais e lacrados com 12 meses de garantia local em Curitiba." />
        <meta name="twitter:image" content="/images/suncell-assistencia-banner.webp" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="sc-catalog-main">
        <div className="sc-container sc-page-toolbar">
          <nav className="sc-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Início</Link><ChevronRight aria-hidden="true" /><span aria-current="page">Celulares</span>
          </nav>
          <button className="sc-text-toggle" onClick={() => setIsSeniorText(!isSeniorText)} aria-pressed={isSeniorText}>
            <span aria-hidden="true">Aa</span>{isSeniorText ? 'Letra padrão' : 'Aumentar letra'}
          </button>
        </div>

        <header className="sc-catalog-hero sc-container">
          <div className="sc-catalog-hero-copy">
            <span className="sc-overline"><i aria-hidden="true" /> SUNCELL / CATÁLOGO REALME</span>
            <h1>Sua próxima<br /><span>conexão.</span></h1>
            <p>Smartphones Realme em Curitiba. Explore os detalhes, compare os modelos e encontre o celular que acompanha o seu ritmo.</p>
            <a href="#colecao" className="sc-button sc-button-primary">Explorar modelos <ArrowDown aria-hidden="true" /></a>
            <div className="sc-catalog-location"><MapPin aria-hidden="true" /> Atendimento presencial no Mercado Goes</div>
          </div>
          <div className="sc-catalog-visual" aria-hidden="true">
            <div className="sc-visual-grid" />
            <span className="sc-visual-topline">DESIGN. CONEXÃO. POSSIBILIDADES.</span>
            <div className="sc-visual-orbit sc-visual-orbit-one" /><div className="sc-visual-orbit sc-visual-orbit-two" />
            <div className="sc-visual-core"><span>realme</span><strong>{String(REALME_PRODUCTS.length).padStart(2, '0')}</strong><small>MODELOS PARA EXPLORAR</small></div>
            <div className="sc-visual-caption"><span>CURITIBA / PR</span><span>ESCOLHA O SEU <ArrowUpRight /></span></div>
          </div>
        </header>

        <div className="sc-container">
          <div className="sc-service-strip">
            <div><ShieldCheck aria-hidden="true" /><span><strong>12 meses</strong><small>de garantia local</small></span><span className="sc-service-index">01</span></div>
            <div><CreditCard aria-hidden="true" /><span><strong>Até 12x</strong><small>no cartão de crédito</small></span><span className="sc-service-index">02</span></div>
            <div><MapPin aria-hidden="true" /><span><strong>Loja física</strong><small>no Mercado Goes, Curitiba</small></span><span className="sc-service-index">03</span></div>
          </div>
        </div>

        <section id="colecao" className="sc-container sc-collection">
          <div className="sc-section-heading">
            <div><span className="sc-overline">01 / EXPLORE A COLEÇÃO</span><h2>Tecnologia no seu ritmo<span>.</span></h2></div>
            <span className="sc-result-count" aria-live="polite">{String(filteredProducts.length).padStart(2, '0')} <span>de {String(REALME_PRODUCTS.length).padStart(2, '0')} modelos</span></span>
          </div>
          <div className="sc-catalog-controls">
            <div className="sc-search-field">
              <Search aria-hidden="true" />
              <label className="sr-only" htmlFor="sc-catalog-search">Buscar no catálogo</label>
              <input id="sc-catalog-search" type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Busque um modelo ou recurso..." />
              {searchQuery && <button aria-label="Limpar busca" onClick={() => setSearchQuery('')}><X aria-hidden="true" /></button>}
            </div>
            <div className="sc-sort-field">
              <SlidersHorizontal aria-hidden="true" /><label className="sr-only" htmlFor="sc-catalog-sort">Ordenar modelos</label>
              <select id="sc-catalog-sort" value={sortOrder} onChange={e => setSortOrder(e.target.value)}><option value="price-asc">Menor preço primeiro</option><option value="price-desc">Maior preço primeiro</option></select>
            </div>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="sc-empty-state"><Search aria-hidden="true" /><h3>Nenhum modelo encontrado.</h3><p>Tente outro nome ou explore todos os smartphones.</p><button className="sc-button sc-button-primary" onClick={() => setSearchQuery('')}>Limpar busca <ArrowUpRight aria-hidden="true" /></button></div>
          ) : (
            <div className="sc-product-grid">{filteredProducts.map(product => <RealmeProductCard key={product.slug} product={product} />)}</div>
          )}
        </section>

        <section className="sc-container sc-concierge-wrap">
          <div className="sc-concierge">
            <div className="sc-concierge-symbol" aria-hidden="true"><MessageSquare /></div>
            <div className="sc-concierge-copy"><span className="sc-overline">TECNOLOGIA COM ATENDIMENTO HUMANO</span><h2>A escolha é sua.<br />A gente ajuda.</h2><p>Converse com nossa equipe para entender as diferenças entre os modelos e escolher com tranquilidade.</p></div>
            <div className="sc-concierge-actions"><a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="sc-button sc-button-mint">Falar com um consultor <ArrowUpRight aria-hidden="true" /></a><a href={CONTACT_INFO.phoneLink} className="sc-button sc-button-outline"><PhoneCall aria-hidden="true" /> Ligar para a loja</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
