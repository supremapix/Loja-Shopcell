import React, { useState } from 'react';
import { MessageSquare, ShieldCheck, Store, Zap, Phone, MapPin, Star, ArrowRight, CheckCircle2, ChevronRight, Headphones, Smartphone, CreditCard } from 'lucide-react';
import { CATEGORY_HIGHLIGHTS, CONTACT_INFO, DIFFERENTIALS, FAQS, REVIEWS } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import Hero from './Hero';
import Features from './Features';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Location from './Location';
import Garantia from './Garantia';
import Cart from './Cart';
import ShareButton from './ShareButton';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans relative">
      <EnhancedSEO
        title="Shopcell — Loja de Celulares em Curitiba | Atendimento Especializado & Garantia Local"
        description="Sua loja de celulares em Curitiba. Aparelhos novos, originais e lacrados com 12 meses de garantia local, loja física no Centro de Curitiba e entrega rápida via motoboy."
        canonical="https://www.celularescuritibashopcell.com.br/"
      />

      <Navbar
        cartCount={0}
        onOpenCart={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Hero />

      {/* CATEGORIES / APPAREL SHOWCASE */}
      <section id="celulares" className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6600] uppercase tracking-widest block mb-2">
              CATEGORIAS DE CELULARES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Encontre o Celular Ideal para Seu Uso
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Trabalhamos com opções de celulares novos e originais em caixas lacradas. Fale com nossa equipe e consulte as melhores condições do dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORY_HIGHLIGHTS.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border-2 border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block bg-[#FF6900]/10 text-[#FF6900] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-[#FF6900]/20">
                    {cat.badge}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-xl leading-tight mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FF6600] mb-3">{cat.subtitle}</p>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">{cat.description}</p>

                  <ul className="space-y-2 mb-6">
                    {cat.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-extrabold uppercase tracking-wider py-3 px-4 rounded-xl transition-colors duration-200 text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar Opções</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SHOPCELL */}
      <Features />

      {/* WARRANTY & SECURITY */}
      <Garantia />

      {/* REVIEWS & GOOGLE 5.0 */}
      <Reviews />

      {/* PHYSICAL LOCATION & MAP */}
      <Location />

      {/* FAQ */}
      <FAQ />

      {/* WHATSAPP CONSULTATION BANNER */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Store className="w-12 h-12 text-[#FF6600] mx-auto mb-4" />
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-4 leading-tight">
            Procurando um Celular em Curitiba?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Consulte agora mesmo nosso atendimento via WhatsApp. Passamos opções de aparelhos disponíveis em estoque, fotos, especificações e orçamentos na hora!
          </p>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02]"
          >
            <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Falar com Consultor no WhatsApp</span>
          </a>
        </div>
      </section>

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={[]}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
        onClearCart={() => {}}
      />

      <ShareButton />

      {/* Floating WhatsApp */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group hover:scale-110 active:scale-95"
        title="Falar Conosco no WhatsApp"
        id="floating-whatsapp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40 pointer-events-none" />
        <MessageSquare className="w-6.5 h-6.5 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
}
