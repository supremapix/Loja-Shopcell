import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheck, MessageSquare, ArrowLeft, Home, ChevronRight, 
  Truck, CreditCard, MapPin, CheckCircle2, ChevronDown, 
  Sparkles, Smartphone, Battery, Cpu, Layers, Camera,
  ShoppingCart, Plus, Minus, Check, Star, RefreshCw
} from 'lucide-react';
import { getRealmeProductBySlug, REALME_PRODUCTS } from '../realmeData';
import { CONTACT_INFO } from '../data';
import { useCart } from '../context/CartContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function CelularProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [isSeniorText, setIsSeniorText] = useState(false);
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'geral' | 'specs' | 'faq'>('geral');
  const [showStickyBottomBar, setShowStickyBottomBar] = useState(false);
  const { addToCart } = useCart();

  const product = slug ? getRealmeProductBySlug(slug) : undefined;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyBottomBar(true);
      } else {
        setShowStickyBottomBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const otherProducts = REALME_PRODUCTS.filter(p => p.slug !== product.slug);

  const whatsappUrl = `https://wa.me/554137989918?text=${encodeURIComponent(`Olá! Tenho interesse no ${product.name} (R$ ${product.priceFormatted}) na Shopcell Curitiba.`)}`;

  const scrollToSection = (id: string, tab: 'geral' | 'specs' | 'faq') => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Product JSON-LD Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
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
        "name": "Shopcell Curitiba",
        "telephone": "+55-41-3538-1822",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "R. Conselheiro Laurindo, 809 – Sala 402, Centro",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "80060-100",
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
        "item": "https://www.celularescuritibashopcell.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Celulares",
        "item": "https://www.celularescuritibashopcell.com.br/celulares"
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
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans ${isSeniorText ? 'text-lg' : 'text-base'}`}>
      <Helmet>
        {/* SEO Tags */}
        <title>{product.titleSEO}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={`${product.name}, comprar ${product.name} curitiba, ${product.name} menor preco curitiba, celular realme curitiba, shopcell curitiba`} />
        <link rel="canonical" href={product.canonical} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Shopcell — Loja de Celulares em Curitiba" />
        <meta property="og:url" content={product.canonical} />
        <meta property="og:title" content={product.titleSEO} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:image" content={product.image} />
        <meta property="product:price:amount" content={product.price.toFixed(2)} />
        <meta property="product:price:currency" content="BRL" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.titleSEO} />
        <meta name="twitter:description" content={product.metaDescription} />
        <meta name="twitter:image" content={product.image} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar
        searchQuery=""
        onSearchChange={() => {}}
      />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Navigation & Accessibility */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between flex-wrap gap-3">
            <nav className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-600 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#FF6600] flex items-center gap-1.5 transition-colors">
                <Home className="w-4 h-4 text-[#FF6600]" />
                <span>Início</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <Link to="/celulares" className="hover:text-[#FF6600] transition-colors">
                Celulares
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                {product.name}
              </span>
            </nav>

            {/* Accessibility Toggle */}
            <button
              onClick={() => setIsSeniorText(!isSeniorText)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 px-3.5 py-1.5 rounded-xl cursor-pointer transition-colors"
              title="Ajustar tamanho da fonte para facilitar a leitura"
            >
              <Sparkles className="w-4 h-4 text-[#FF6600]" />
              <span>{isSeniorText ? 'Tamanho Padrão (A-)' : 'Aumentar Letra (A+)'}</span>
            </button>
          </div>
        </div>

        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Link 
            to="/celulares" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#FF6600] font-bold text-sm sm:text-base transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para catálogo de celulares</span>
          </Link>
        </div>

        {/* SECTION 1: HERO PRODUCT SHOWCASE (Natural Scroll, Zero Obstruction) */}
        <section id="visao-geral" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Product Image Stage (Natural flow - not locked/sticky to screen) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-white rounded-2xl p-4 sm:p-6 border border-slate-200">
              <div className="w-full flex justify-between items-center mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/25 font-bold text-xs sm:text-sm px-3.5 py-1 rounded-full font-mono uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  12 Meses Garantia
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Cor: {product.color}
                </span>
              </div>

              {/* Clean White Background for Product Photo */}
              <div className="w-full aspect-square max-w-[340px] sm:max-w-[380px] bg-white flex items-center justify-center p-2">
                <img 
                  src={product.image} 
                  alt={product.altText}
                  className="max-h-full max-w-full object-contain"
                  loading="eager"
                />
              </div>

              <div className="w-full mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs font-bold text-slate-600">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80 flex items-center justify-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Caixa Lacrada</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80 flex items-center justify-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Versão Anatel</span>
                </div>
              </div>
            </div>

            {/* Product Information & Purchase Box */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-extrabold text-[#FF6600] uppercase tracking-wider">
                  <span>Realme Oficial</span>
                  <span>•</span>
                  <span>Homologado Anatel</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold">Em Estoque</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-slate-900 leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-slate-600 text-sm sm:text-base font-normal">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price & Installment Card */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="block text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider font-mono">
                    Valor Promocional à vista (Pix/Dinheiro):
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded-full border border-emerald-300 font-mono">
                    Melhor Preço
                  </span>
                </div>
                
                <div className="text-4xl sm:text-5xl font-display font-black text-emerald-700 leading-none">
                  {product.priceFormatted}
                </div>

                <div className="text-base sm:text-lg font-bold text-slate-800 pt-1 flex items-center gap-2 flex-wrap">
                  <span>Ou parcele em até</span>
                  <span className="bg-amber-100 text-amber-950 px-3 py-1 rounded-lg font-black border border-amber-300">
                    {product.installments}
                  </span>
                  <span className="text-xs text-slate-500 font-normal">no cartão de crédito</span>
                </div>
              </div>

              {/* Purchase Actions (Quantity + Add to Cart + WhatsApp) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-slate-200 bg-slate-50 rounded-2xl p-1 shrink-0 h-14">
                    <button
                      onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                      disabled={selectedQty <= 1}
                      className="w-10 h-full flex items-center justify-center text-slate-600 hover:text-slate-900 disabled:opacity-40 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-9 text-center font-mono font-bold text-base text-slate-900">
                      {selectedQty}
                    </span>
                    <button
                      onClick={() => setSelectedQty(selectedQty + 1)}
                      className="w-10 h-full flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(product, selectedQty)}
                    className="flex-1 min-h-[56px] bg-[#FF6600] hover:bg-[#E65C00] active:scale-[0.99] text-white text-base sm:text-lg font-black uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 px-5 text-center cursor-pointer border-2 border-[#E65C00]"
                    id="btn-incluir-carrinho"
                  >
                    <ShoppingCart className="w-6 h-6 shrink-0" />
                    <span>Incluir no Carrinho</span>
                  </button>
                </div>

                {/* Direct WhatsApp Purchase Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[54px] bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.99] text-white text-base sm:text-lg font-black uppercase tracking-wide rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 px-6 text-center cursor-pointer border-2 border-[#1EBE5D]"
                  id="btn-comprar-whatsapp"
                >
                  <MessageSquare className="w-6 h-6 fill-current shrink-0" />
                  <span>Comprar Direto no WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FF6600] shrink-0" />
                  <span>12 Meses Garantia Local</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Entrega Expressa Hoje</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>Edifício Downtown - Centro</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: MODERN UX ANCHOR TABS (Easy Quick Jump Navigation) */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto py-2.5 gap-2 scrollbar-none">
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToSection('visao-geral', 'geral')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'geral' 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#FF6600]" />
                <span>Visão Geral</span>
              </button>

              <button
                onClick={() => scrollToSection('ficha-tecnica', 'specs')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'specs' 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Layers className="w-4 h-4 text-[#FF6600]" />
                <span>Ficha Técnica Completa</span>
              </button>

              <button
                onClick={() => scrollToSection('duvidas-frequentes', 'faq')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'faq' 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#FF6600]" />
                <span>Dúvidas & Garantia</span>
              </button>
            </div>

            {/* Quick Buy CTA inside Tabs Bar */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-500">
                {product.priceFormatted}
              </span>
              <button
                onClick={() => addToCart(product, 1)}
                className="bg-[#FF6600] hover:bg-[#E65C00] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Adicionar</span>
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3: KEY HARDWARE HIGHLIGHTS (Visual Grid) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="p-2.5 bg-orange-100 text-[#FF6600] rounded-xl shrink-0">
                <Battery className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block uppercase">Bateria</span>
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">{product.specs.bateria}</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block uppercase">Processador</span>
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">{product.specs.processador}</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl shrink-0">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block uppercase">Câmeras</span>
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">{product.specs.cameras}</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block uppercase">Tela & Sistema</span>
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">{product.specs.tela}</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FULL DETAILED TECHNICAL SPECIFICATIONS (Clean, Unobstructed, Full-Width) */}
        <section id="ficha-tecnica" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-extrabold text-[#FF6600] uppercase tracking-wider block mb-1">
                  Especificações Homologadas
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 flex items-center gap-2">
                  <Layers className="w-7 h-7 text-[#FF6600]" />
                  <span>Ficha Técnica Completa — {product.name}</span>
                </h2>
              </div>
              <span className="text-xs sm:text-sm font-bold bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
                Garantia Física de 1 Ano
              </span>
            </div>

            {/* Spec Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <tbody>
                  {product.specList.map((spec, index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? 'bg-slate-50/80 hover:bg-slate-100/80 transition-colors' : 'bg-white hover:bg-slate-50/80 transition-colors'}
                    >
                      <th className="py-4 px-4 sm:px-8 font-bold text-slate-900 w-1/3 sm:w-1/4 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wider font-mono">
                        {spec.label}
                      </th>
                      <td className="py-4 px-4 sm:px-8 text-slate-700 font-medium border-b border-slate-200">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Description & Highlights */}
            <div className="pt-6 space-y-6">
              <h3 className="text-xl font-display font-bold text-slate-900">
                Sobre este Smartphone:
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {product.fullDescription}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Principais Diferenciais do Modelo:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {product.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-sm sm:text-base text-slate-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
        <section id="duvidas-frequentes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-wider block mb-1">
                Transparência & Segurança
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                Dúvidas Frequentes sobre a Compra
              </h2>
            </div>

            <div className="space-y-3.5">
              {product.faqs.map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 sm:p-5 transition-colors open:bg-orange-50/40 open:border-[#FF6600]/30"
                >
                  <summary className="font-bold text-base sm:text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-[#FF6600] shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 pt-3 border-t border-slate-200/80 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: OTHER REALME MODELS IN CURITIBA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-wider block">
                Catálogo Realme
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-black text-slate-900">
                Outros Modelos Disponíveis na Loja
              </h2>
            </div>
            <Link 
              to="/celulares" 
              className="text-xs sm:text-sm font-bold text-[#FF6600] hover:underline flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((other) => (
              <div 
                key={other.slug}
                className="bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-[#FF6600]/50 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="w-full aspect-square max-h-[180px] bg-white flex items-center justify-center p-2 mb-3">
                  <img 
                    src={other.image} 
                    alt={other.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 line-clamp-1">
                    {other.name}
                  </h3>
                  <div className="text-lg font-black text-emerald-700 mt-1">
                    {other.priceFormatted}
                  </div>
                  <span className="text-xs text-slate-500 block mb-4">
                    Ou {other.installments}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <Link
                    to={`/celular/${other.slug}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-2.5 px-2 rounded-xl text-center transition-colors"
                  >
                    Ver Modelo
                  </Link>
                  <button
                    onClick={() => addToCart(other, 1)}
                    className="bg-[#FF6600] hover:bg-[#E65C00] text-white text-xs font-black uppercase py-2.5 px-2 rounded-xl text-center transition-colors cursor-pointer"
                  >
                    + Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* MOBILE STICKY FLOATING BOTTOM BUY BAR (Appears on scroll without blocking content) */}
      {showStickyBottomBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-300 p-3 shadow-2xl md:hidden transition-all animate-fadeIn">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-slate-500">Valor à vista:</span>
              <span className="font-display font-black text-base text-emerald-700 leading-tight">
                {product.priceFormatted}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-1 justify-end">
              <button
                onClick={() => addToCart(product, 1)}
                className="bg-[#FF6600] active:scale-95 text-white font-black text-xs uppercase px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>+ Carrinho</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-black text-xs uppercase px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
