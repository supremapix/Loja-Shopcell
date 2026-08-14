import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, MapPin, Star, Award, CheckCircle2, 
  MessageSquare, Phone, Clock, Truck, Smartphone, HeartHandshake,
  Users, Sparkles, ArrowRight
} from 'lucide-react';
import { CONTACT_INFO, DIFFERENTIALS, REVIEWS } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import BackToTop from './BackToTop';

export default function SobrePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <EnhancedSEO
        title="Sobre a Shopcell Curitiba | Loja Física no Centro e 12 Meses de Garantia"
        description="Conheça a história da Shopcell Curitiba. Mais de 8 anos de tradição em smartphones novos e originais com 12 meses de garantia local no Edifício Downtown."
        canonical="https://www.celularescuritibashopcell.com.br/sobre"
      />

      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* HEADER HERO INSTITUCIONAL */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF6600]/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6600]/15 border border-[#FF6600]/30 text-[#FF8533] text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <Building2 className="w-3.5 h-3.5" />
              Nossa História & Compromisso
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Mais de 8 Anos de Confiança e Excelência em Curitiba
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              A <strong className="text-white font-bold">Shopcell Curitiba</strong> nasceu com o propósito de oferecer smartphones novos, homologados e 100% originais com atendimento humanizado, segurança máxima e a verdadeira garantia local de 12 meses direto em nossa loja física.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-extrabold px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#FF6600]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com Nossa Equipe</span>
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-[#FF6600]" />
                <span>Visitar Loja Física</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* METRICAS DE DESTAQUE */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#FF6600] mb-1">8+ Anos</div>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold">Atuação no mercado de Curitiba</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-1">+3.800</div>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold">Clientes satisfeitos atendidos</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-emerald-600 mb-1">12 Meses</div>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold">Garantia local presencial</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-amber-500 mb-1">5.0 ★</div>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold">Avaliação máxima no Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA E PILARES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-3">
                QUEM SOMOS
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
                Segurança, Transparência e Atendimento que Faz a Diferença
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Localizada no coração de Curitiba, no tradicional <strong>Edifício Downtown</strong> (Rua Conselheiro Laurindo, 809 - Sala 402), a Shopcell oferece uma experiência de compra protegida e transparente.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Diferente de compras em marketplaces com vendedores desconhecidos, na Shopcell você tem endereço físico, equipe experiente para tirar dúvidas e a certeza de comprar um aparelho novo, original e lacrado na caixa.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Aparelhos novos, 100% originais e lacrados de fábrica</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Garantia local de 12 meses com atendimento direto no Centro</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Parcelamento flexível em até 12x no cartão de crédito</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Entrega rápida no mesmo dia para toda Curitiba e Região</span>
                </div>
              </div>
            </div>

            {/* FOTOS DA LOJA */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 h-64">
                <img
                  src="https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
                  alt="Loja Shopcell Curitiba - Atendimento Presencial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200 h-44">
                <img
                  src="https://www.celularescuritibashopcell.com.br/assets/sacola-shopcell-CFvwClu6.webp"
                  alt="Shopcell Sacola e Aparelhos Originais"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200 h-44">
                <img
                  src="https://www.celularescuritibashopcell.com.br/img-ext/loja-shopcell-2-10d4c7.webp"
                  alt="Interior Loja Shopcell Curitiba"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* PILARES SHOPCELL */}
          <div className="border-t border-slate-200 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                Nossos 3 Pilares Fundamentais
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                O que guia o nosso trabalho todos os dias em Curitiba
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-[#FF6600]/10 text-[#FF6600] rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-xl mb-3">1. Garantia Real</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Não deixamos você desamparado. Qualquer eventualidade durante os 12 meses de garantia é resolvida diretamente com a nossa equipe em Curitiba.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-xl mb-3">2. Procedência 100%</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Todos os smartphones são novos, lacrados na caixa de fábrica, com homologação Anatel e número de série conferido no momento da entrega.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-xl mb-3">3. Atendimento Humanizado</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Orientamos você a escolher o aparelho com o melhor custo-benefício para o seu uso real, sem empurrar modelos desnecessários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER CTA FINAL */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Building2 className="w-12 h-12 text-[#FF6600] mx-auto mb-4" />
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
            Venha Conhecer Nossa Loja em Curitiba
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Atendimento presencial no Edifício Downtown (Rua Conselheiro Laurindo, 809 - Sala 402) ou faça seu pedido pelo WhatsApp com entrega no mesmo dia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Chamar no WhatsApp</span>
            </a>
            <Link
              to="/celulares"
              className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200"
            >
              <Smartphone className="w-5 h-5" />
              <span>Ver Catálogo de Celulares</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
