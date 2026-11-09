import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ShieldCheck, MessageSquare, ArrowLeft, ArrowUpRight, ChevronRight,
  CreditCard, MapPin, CheckCircle2, ChevronDown, Smartphone, Battery,
  Cpu, Layers, Camera, ShoppingCart, Plus, Minus, Check
} from 'lucide-react';
import { getRealmeProductBySlug, REALME_PRODUCTS } from '../realmeData';
import { useCart } from '../context/CartContext';
import Navbar from './Navbar';
import Footer from './Footer';
import '../catalog.css';

export default function CelularProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [isSeniorText, setIsSeniorText] = useState(false);
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'geral' | 'specs' | 'faq'>('geral');
  const [showStickyBottomBar, setShowStickyBottomBar] = useState(false);
  const { addToCart } = useCart();
  const product = slug ? getRealmeProductBySlug(slug) : undefined;

  useEffect(() => {
    const handleScroll = () => setShowStickyBottomBar(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSelectedQty(1);
    setActiveTab('geral');
  }, [slug]);

  if (!product) return <Navigate to="/404" replace />;

  const absoluteProductImage = new URL(product.image, product.canonical).href;
  const productImageType = new URL(absoluteProductImage).pathname.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
  const otherProducts = REALME_PRODUCTS.filter(p => p.slug !== product.slug);
  const displayName = product.name.replace(/\s*\([^)]*\)$/, '');
  const modelIndex = String(REALME_PRODUCTS.findIndex(p => p.slug === product.slug) + 1).padStart(2, '0');
  const whatsappUrl = `https://wa.me/5541999176640?text=${encodeURIComponent(`Olá! Tenho interesse no ${product.name} (${product.priceFormatted}) na SUNCELL Curitiba.`)}`;
  const scrollToSection = (id: string, tab: 'geral' | 'specs' | 'faq') => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: y, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };

  // Product JSON-LD Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": absoluteProductImage,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": "Realme"
    },
    "category": "Smartphones",
    "offers": {
      "@type": "Offer",
      "url": product.canonical,
      "priceCurrency": "BRL",
      "price": product.price.toFixed(2),
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "MobilePhoneStore",
        "name": "SUNCELL Curitiba",
        "telephone": "+55-41-99917-6640",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Maria Moscardi Fanini, 261 - Mercado Goes",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "80220-450",
          "addressCountry": "BR"
        }
      }
    }
  };

  // Breadcrumb JSON-LD Schema
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
        "item": "https://www.xiaomishopcell.com/celulares"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": product.canonical
      }
    ]
  };

  return (
    <div className={`sc-catalog-page sc-product-page ${isSeniorText ? 'sc-large-text' : ''}`}>
      <Helmet>
        {/* SEO Tags */}
        <title>{product.titleSEO}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={`${product.name}, comprar ${product.name} curitiba, ${product.name} menor preco curitiba, celular realme curitiba, suncell curitiba`} />
        <link rel="canonical" href={product.canonical} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="SUNCELL — Loja de Celulares em Curitiba" />
        <meta property="og:url" content={product.canonical} />
        <meta property="og:title" content={product.titleSEO} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:image" content={absoluteProductImage} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:type" content={productImageType} />
        <meta property="product:price:amount" content={product.price.toFixed(2)} />
        <meta property="product:price:currency" content="BRL" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.titleSEO} />
        <meta name="twitter:description" content={product.metaDescription} />
        <meta name="twitter:image" content={absoluteProductImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Navbar searchQuery="" onSearchChange={() => {}} />
      <main className="sc-catalog-main">
        <div className="sc-container sc-page-toolbar">
          <nav className="sc-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Início</Link><ChevronRight aria-hidden="true" /><Link to="/celulares">Celulares</Link><ChevronRight aria-hidden="true" /><span aria-current="page">{displayName}</span>
          </nav>
          <button className="sc-text-toggle" onClick={() => setIsSeniorText(!isSeniorText)} aria-pressed={isSeniorText}><span aria-hidden="true">Aa</span>{isSeniorText ? 'Letra padrão' : 'Aumentar letra'}</button>
        </div>

        <section id="visao-geral" className="sc-container sc-product-hero" aria-label={product.name}>
          <div className="sc-product-gallery">
            <div className="sc-product-gallery-top"><span>REALME / {modelIndex}</span><span><ShieldCheck aria-hidden="true" /> 12 meses de garantia</span></div>
            <div className="sc-product-lightbox"><img src={product.image} alt={product.altText} width="600" height="600" loading="eager" fetchPriority="high" /></div>
            <div className="sc-product-gallery-bottom"><div><small>ACABAMENTO</small><strong>{product.color}</strong></div><span className="sc-gallery-brand">realme</span></div>
            <div className="sc-product-gallery-notes"><span><Check aria-hidden="true" /> Caixa lacrada</span><span><Check aria-hidden="true" /> Homologado Anatel</span></div>
          </div>

          <div className="sc-product-summary">
            <Link to="/celulares" className="sc-back-link"><ArrowLeft aria-hidden="true" /> Explorar coleção</Link>
            <span className="sc-overline"><i aria-hidden="true" /> REALME / DUAL SIM / ANATEL</span>
            <h1>{displayName}</h1>
            <p className="sc-product-description">{product.shortDescription}</p>
            <div className="sc-product-price-panel">
              <span className="sc-price-caption">À vista no Pix / dinheiro</span>
              <strong>{product.priceFormatted}</strong>
              <span className="sc-installments"><CreditCard aria-hidden="true" /> ou até <b>{product.installments}</b> no cartão</span>
            </div>
            <div className="sc-product-actions">
              <div className="sc-quantity-row"><span>Quantidade</span><div className="sc-quantity-control"><button onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))} disabled={selectedQty <= 1} aria-label="Diminuir quantidade"><Minus aria-hidden="true" /></button><output aria-live="polite" aria-label="Quantidade selecionada">{selectedQty}</output><button onClick={() => setSelectedQty(selectedQty + 1)} aria-label="Aumentar quantidade"><Plus aria-hidden="true" /></button></div></div>
              <button onClick={() => addToCart(product, selectedQty)} className="sc-button sc-button-primary sc-button-full sc-product-cart-button" id="btn-incluir-carrinho"><ShoppingCart aria-hidden="true" /> Incluir no carrinho <ArrowUpRight aria-hidden="true" /></button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sc-button sc-button-mint sc-button-full" id="btn-comprar-whatsapp"><MessageSquare aria-hidden="true" /> Comprar direto no WhatsApp</a>
            </div>
            <div className="sc-product-reassurance"><span><ShieldCheck aria-hidden="true" /> Garantia local de 12 meses</span><span><MapPin aria-hidden="true" /> Mercado Goes, Curitiba</span></div>
          </div>
        </section>

        <div className="sc-container">
          <nav className="sc-product-section-nav" aria-label="Seções do produto">
            <div><button className={activeTab === 'geral' ? 'is-active' : ''} onClick={() => scrollToSection('visao-geral', 'geral')} aria-current={activeTab === 'geral' ? 'location' : undefined}><span>01</span> Visão geral</button><button className={activeTab === 'specs' ? 'is-active' : ''} onClick={() => scrollToSection('ficha-tecnica', 'specs')} aria-current={activeTab === 'specs' ? 'location' : undefined}><span>02</span> Ficha técnica</button><button className={activeTab === 'faq' ? 'is-active' : ''} onClick={() => scrollToSection('duvidas-frequentes', 'faq')} aria-current={activeTab === 'faq' ? 'location' : undefined}><span>03</span> Dúvidas</button></div>
            <span className="sc-section-nav-label">CONHEÇA CADA DETALHE <ArrowUpRight aria-hidden="true" /></span>
          </nav>
          <div className="sc-hardware-grid">
            <div><Battery aria-hidden="true" /><span>BATERIA</span><strong>{product.specs.bateria}</strong><small>01 / ENERGIA</small></div>
            <div><Cpu aria-hidden="true" /><span>PROCESSADOR</span><strong>{product.specs.processador}</strong><small>02 / DESEMPENHO</small></div>
            <div><Camera aria-hidden="true" /><span>CÂMERAS</span><strong>{product.specs.cameras}</strong><small>03 / IMAGEM</small></div>
            <div><Smartphone aria-hidden="true" /><span>TELA</span><strong>{product.specs.tela}</strong><small>04 / EXPERIÊNCIA</small></div>
          </div>
        </div>

        <section id="ficha-tecnica" className="sc-container sc-technical-section">
          <div className="sc-technical-intro"><span className="sc-overline">02 / POR DENTRO DO SEU REALME</span><h2>Detalhes que<br />fazem diferença<span>.</span></h2><p>{product.fullDescription}</p><span className="sc-technical-label"><Layers aria-hidden="true" /> Ficha técnica completa</span></div>
          <div className="sc-spec-table-wrap"><table className="sc-spec-table"><caption className="sr-only">Ficha técnica completa de {product.name}</caption><tbody>{product.specList.map(spec => <tr key={spec.label}><th scope="row">{spec.label}</th><td>{spec.value}</td></tr>)}</tbody></table></div>
        </section>

        <section className="sc-container sc-highlights-section" aria-label="Destaques do modelo">
          <div className="sc-highlight-heading"><span className="sc-overline">OS DIFERENCIAIS</span><h2>Feito para ir além.</h2></div>
          <div className="sc-highlights-grid">{product.highlights.map(highlight => <div key={highlight}><CheckCircle2 aria-hidden="true" /><span>{highlight}</span></div>)}</div>
        </section>

        <section id="duvidas-frequentes" className="sc-container sc-product-faq-section">
          <div className="sc-product-faq-intro"><span className="sc-overline">03 / COMPRA COM TRANQUILIDADE</span><h2>Boas perguntas.<br />Respostas claras.</h2><p>Saiba mais sobre este modelo, a compra e o atendimento SUNCELL.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sc-text-link">Ainda tem uma dúvida? <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="sc-product-faq-list">{product.faqs.map((faq, index) => <details key={faq.question}><summary><span className="sc-product-faq-number">{String(index + 1).padStart(2, '0')}</span><span>{faq.question}</span><ChevronDown aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="sc-container sc-related-section">
          <div className="sc-section-heading"><div><span className="sc-overline">CONTINUE EXPLORANDO</span><h2>Outras conexões<span>.</span></h2></div><Link to="/celulares" className="sc-text-link">Ver coleção <ArrowUpRight aria-hidden="true" /></Link></div>
          <div className="sc-related-grid">{otherProducts.map(other => <article key={other.slug} className="sc-related-card"><Link to={`/celular/${other.slug}`} onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="sc-related-image" aria-label={`Ver ${other.name}`}><img src={other.image} alt={other.altText} width="600" height="600" loading="lazy" /><ArrowUpRight aria-hidden="true" /></Link><div className="sc-related-body"><span className="sc-overline">REALME / ANATEL</span><h3><Link to={`/celular/${other.slug}`} onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>{other.name.replace(/\s*\([^)]*\)$/, '')}</Link></h3><span className="sc-price-caption">À vista no Pix / dinheiro</span><strong>{other.priceFormatted}</strong><span className="sc-installments">ou até {other.installments}</span><div><Link to={`/celular/${other.slug}`} onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="sc-button sc-button-outline">Ver modelo</Link><button onClick={() => addToCart(other, 1)} className="sc-button sc-button-primary" aria-label={`Incluir ${other.name} no carrinho`}><ShoppingCart aria-hidden="true" /> Carrinho</button></div></div></article>)}</div>
        </section>
      </main>

      {showStickyBottomBar && <div className="sc-mobile-purchase" aria-label="Compra rápida"><div><small>À vista</small><strong>{product.priceFormatted}</strong></div><button onClick={() => addToCart(product, selectedQty)} className="sc-button sc-button-primary" aria-label={`Incluir ${selectedQty} ${product.name} no carrinho`}><ShoppingCart aria-hidden="true" /><span>Carrinho</span></button><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sc-button sc-button-mint" aria-label={`Comprar ${product.name} no WhatsApp`}><MessageSquare aria-hidden="true" /><span>WhatsApp</span></a></div>}
      <Footer />
    </div>
  );
}
