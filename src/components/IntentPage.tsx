import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Smartphone, ShieldCheck, MapPin, Truck, ChevronRight, MessageSquare, 
  HelpCircle, Star, CheckCircle2, Award, Zap, Building2, PhoneCall, ArrowRight,
  Gift, RefreshCw, Sparkles, ShoppingBag, ExternalLink
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import ProductDetailModal from './ProductDetailModal';
import { INTENT_PAGES } from '../intentData';
import { PRODUCTS, CONTACT_INFO } from '../data';
import { Product } from '../types';

export default function IntentPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageKey = slug?.toLowerCase() || 'sitio-cercado';
  const pageData = INTENT_PAGES[pageKey] || INTENT_PAGES['sitio-cercado'];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filter products based on brandFocus if present
  const displayProducts = PRODUCTS.filter(p => {
    if (!pageData.brandFocus || pageData.brandFocus === 'todas') return true;
    if (pageData.brandFocus === 'xiaomi') return p.brand.toLowerCase() === 'xiaomi' || p.brand.toLowerCase() === 'poco' || p.brand.toLowerCase() === 'redmi';
    if (pageData.brandFocus === 'poco') return p.brand.toLowerCase() === 'poco';
    if (pageData.brandFocus === 'redmi') return p.brand.toLowerCase() === 'redmi';
    if (pageData.brandFocus === 'iphone') return p.brand.toLowerCase() === 'apple';
    if (pageData.brandFocus === 'samsung') return p.brand.toLowerCase() === 'samsung';
    return true;
  }).slice(0, 8);

  const getWhatsAppMsg = (text: string) => {
    return `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(text)}`;
  };

  const defaultMsg = `Olá! Vi a página de *${pageData.h1}* no site e gostaria de consultar o menor valor do dia e agendar minha entrega/retirada!`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#FF6600] selection:text-white flex flex-col justify-between">
      
      <EnhancedSEO
        title={pageData.title}
        description={pageData.metaDescription}
        canonical={`https://www.celularescuritibashopcell.com.br/${pageData.slug}`}
        keywords={pageData.keywords}
        bairroName={pageData.bairroFocus}
        faqList={pageData.faqs}
      />

      <Navbar 
        cartCount={0}
        onOpenCart={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
        activeSection="inicio"
        onNavClick={() => {}}
      />

      <main className="flex-grow pt-24">
        
        {/* Breadcrumb Header */}
        <section className="bg-slate-900 text-white py-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-mono text-slate-400 overflow-x-auto">
            <Link to="/" className="hover:text-[#FF6600] transition-colors whitespace-nowrap">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link to="/#RMCEbairros" className="hover:text-[#FF6600] transition-colors whitespace-nowrap">Atendimento Local</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[#FF6600] font-bold whitespace-nowrap">{pageData.h1}</span>
          </div>
        </section>

        {/* Hero Section with High Conversion Callout */}
        <section className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/30 via-slate-950 to-slate-950 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Main Copy */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#FF6600]" />
                  <span>{pageData.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight">
                  {pageData.h1}
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-medium">
                  {pageData.introText}
                </p>

                {/* Direct Price Consultation Alert */}
                <div className="bg-[#FF6900]/15 border-2 border-[#FF6900]/40 rounded-2xl p-4 sm:p-5 text-left max-w-2xl">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-6 h-6 text-[#FF6600] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                        Consulte o menor valor para este aparelho via WhatsApp agora mesmo!
                      </h3>
                      <p className="text-slate-300 text-xs mt-1">
                        Devido às oscilações diárias de estoque e cotações promocionais, garantimos o menor preço do dia diretamente com nossos atendentes no WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary WhatsApp Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <a
                    href={getWhatsAppMsg(defaultMsg)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF6600] hover:bg-[#D45500] text-white font-display font-bold text-base px-8 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 group"
                    id="intent-hero-whatsapp-btn"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{pageData.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={CONTACT_INFO.phoneLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm px-6 py-4 rounded-2xl transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-[#FF6600]" />
                    <span>(41) 3538-1822</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#FF6600]" /> 6 Meses de Garantia
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#FF6600]" /> Entregas via Motoboy
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 5.0 no Google (3.800+ avaliações)
                  </span>
                </div>
              </div>

              {/* EEAT & Store Trust Card */}
              <div className="lg:col-span-4">
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xs space-y-5">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-12 h-12 bg-[#FF6600]/20 rounded-2xl flex items-center justify-center text-[#FF6600]">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">Loja Física em Curitiba</h3>
                      <p className="text-slate-400 text-xs font-mono">Edifício Downtown - Centro</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span><strong>Atendimento no Sítio Cercado:</strong> Entregas expressas no mesmo dia na sua casa ou trabalho.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span><strong>Pague na Entrega:</strong> Inspecione a caixa lacrada e pague via Pix, dinheiro ou cartão ao motoboy.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span><strong>Aparelhos 100% Originais:</strong> Versão Global oficial com película e capinha inclusas de brinde.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span><strong>Endereço Físico:</strong> R. Conselheiro Laurindo, 809 - Sala 402, Centro - Curitiba/PR.</span>
                    </li>
                  </ul>

                  <a
                    href="https://maps.app.goo.gl/UdXVapfdEjvFVWEC8"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors border border-slate-700"
                  >
                    <MapPin className="w-4 h-4 text-[#FF6600]" />
                    <span>Ver Localização no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#FF6600] font-mono text-xs font-bold uppercase tracking-widest">Por Que Escolher a Shopcell</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">
                Vantagens Exclusivas para Curitiba e Região
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.benefits.map((b, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:border-[#FF6600]/40 transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-[#FF6600]/10 rounded-xl flex items-center justify-center text-[#FF6600] mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Catalog Grid */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[#FF6600] font-mono text-xs font-bold uppercase tracking-widest">Smartphones em Destaque</span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">
                  Catálogo Atualizado de Aparelhos Lacrados
                </h2>
                <p className="text-slate-500 text-xs mt-1">
                  Todos acompanham película de vidro e capinha anti-impacto de brinde + 6 meses de garantia local.
                </p>
              </div>

              <a
                href={getWhatsAppMsg(`Olá! Gostaria de receber o catálogo completo em PDF e orçamentos do dia!`)}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm w-fit"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pedir Catálogo no WhatsApp</span>
              </a>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProducts.map(p => {
                const prodUrl = p.id === 16 ? '/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram'
                  : p.id === 7 ? '/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb8gb-ram'
                  : p.id === 17 ? '/celular-xiaomi-redmi-note-15-5g-nfc-dual-sim-256gb8gb-ram'
                  : `/produto/${p.id}`;

                return (
                  <div key={p.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                    
                    <div>
                      <div className="relative aspect-4/3 bg-slate-100 rounded-xl mb-4 p-3 flex items-center justify-center overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.name}
                          className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 bg-slate-900 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                          {p.brand}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-slate-900 text-sm leading-snug mb-2 line-clamp-2">
                        {p.name}
                      </h3>

                      <p className="text-slate-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                        {p.desc}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Price Alert Badge */}
                      <a
                        href={getWhatsAppMsg(`Olá! Gostaria de consultar o menor valor do ${p.name} via WhatsApp!`)}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="bg-[#FF6900]/10 hover:bg-[#FF6900]/20 border border-[#FF6900]/30 rounded-xl p-2.5 text-center block transition-colors group/alert"
                      >
                        <span className="text-[#FF6600] font-bold text-[11px] leading-tight flex items-center justify-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                          <span>Consulte o menor valor via WhatsApp!</span>
                        </span>
                      </a>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to={prodUrl}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold text-xs py-2.5 rounded-xl transition-colors"
                        >
                          Detalhes
                        </Link>
                        <a
                          href={getWhatsAppMsg(`Olá! Quero cotar o *${p.name}*!`)}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="bg-[#FF6600] hover:bg-[#D45500] text-white text-center font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Cotar</span>
                        </a>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Extended FAQ Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-[#FF6600] font-mono text-xs font-bold uppercase tracking-widest">Respostas Rápidas</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">
                Perguntas Frequentes (FAQ)
              </h2>
            </div>

            <div className="space-y-4">
              {pageData.faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#FF6600] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Semantic Internal Links Cluster Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 className="text-xl font-display font-bold text-white mb-2">
                Outras Buscas Relacionadas em Curitiba e Região Metropolitana
              </h2>
              <p className="text-slate-400 text-xs">
                Navegue pelos principais polos de atendimento, bairros e categorias de celulares da Xiaomi Shopcell:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs font-mono">
              <Link to="/sitio-cercado" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Sítio Cercado Curitiba
              </Link>
              <Link to="/loja-de-celular-sitio-cercado" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Loja Celular Sítio Cercado
              </Link>
              <Link to="/loja-xiaomi-curitiba" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Loja Xiaomi Curitiba
              </Link>
              <Link to="/comprar-celular-curitiba" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Comprar Celular Curitiba
              </Link>
              <Link to="/redmi-curitiba" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Redmi Curitiba
              </Link>
              <Link to="/poco-curitiba" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • POCO Curitiba
              </Link>
              <Link to="/iphone-curitiba" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • iPhone Curitiba
              </Link>
              <Link to="/samsung-curitiba" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Samsung Curitiba
              </Link>
              <Link to="/bairro/xaxim" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Xaxim Curitiba
              </Link>
              <Link to="/bairro/pinheirinho" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Pinheirinho Curitiba
              </Link>
              <Link to="/bairro/boqueirao" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • Boqueirão Curitiba
              </Link>
              <Link to="/bairro/sao-jose-dos-pinhais" className="bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 border border-slate-700 p-3 rounded-xl text-slate-200 hover:text-[#FF6600] transition-colors">
                • São José dos Pinhais
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
