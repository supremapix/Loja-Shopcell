import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Smartphone, ShieldCheck, MapPin, Truck, ChevronRight, MessageSquare, 
  HelpCircle, Star, CheckCircle2, Building2, PhoneCall, ArrowRight, Sparkles, ExternalLink
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import { INTENT_PAGES } from '../intentData';
import { CONTACT_INFO, CATEGORY_HIGHLIGHTS } from '../data';

export default function IntentPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageKey = slug?.toLowerCase() || 'sitio-cercado';
  const pageData = INTENT_PAGES[pageKey] || INTENT_PAGES['sitio-cercado'];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getWhatsAppMsg = (text: string) => {
    return `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(text)}`;
  };

  const defaultMsg = `Olá! Vi a página de *${pageData.h1}* no site e gostaria de consultar as opções de celulares disponíveis e agendar minha entrega/retirada!`;

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
      />

      <main className="flex-grow pt-24">
        
        {/* Breadcrumb Header */}
        <section className="bg-slate-900 text-white py-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-mono text-slate-400 overflow-x-auto">
            <Link to="/" className="hover:text-[#FF6600] transition-colors whitespace-nowrap">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[#FF6600] font-bold whitespace-nowrap">{pageData.h1}</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
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

                <div className="pt-4 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#FF6600]" /> 6 Meses de Garantia Local
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#FF6600]" /> Entregas via Motoboy Express
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Nota 5.0 no Google (3.800+ avaliações)
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xs space-y-5">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-12 h-12 bg-[#FF6600]/20 rounded-2xl flex items-center justify-center text-[#FF6600]">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">Shopcell Curitiba</h3>
                      <p className="text-slate-400 text-xs font-mono">Edifício Downtown - Centro</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span><strong>Atendimento em Curitiba e RMC:</strong> Entregas expressas via motoboy.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span><strong>Pague na Entrega:</strong> Receba o aparelho lacrado e efetue o pagamento na entrega.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span><strong>Produtos Novos e Originais:</strong> Aparelhos lacrados na caixa com garantia de 6 meses.</span>
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
                Vantagens Exclusivas para Curitiba
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

        {/* Categories Showcase */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#FF6600] font-mono text-xs font-bold uppercase tracking-widest">Opções em Destaque</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">
                Linhas e Categorias Disponíveis
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORY_HIGHLIGHTS.map(cat => (
                <div key={cat.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[#FF6900]/10 text-[#FF6900] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase mb-3">
                      {cat.badge}
                    </span>
                    <h3 className="font-display font-bold text-slate-900 text-lg mb-1">{cat.title}</h3>
                    <p className="text-xs text-slate-500 mb-4">{cat.description}</p>
                  </div>

                  <a
                    href={getWhatsAppMsg(`Olá! Gostaria de consultar opções na categoria *${cat.title}*!`)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Consultar no WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-[#FF6600] font-mono text-xs font-bold uppercase tracking-widest">Respostas Rápidas</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">
                Perguntas Frequentes
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

      </main>

      <Footer />
    </div>
  );
}
