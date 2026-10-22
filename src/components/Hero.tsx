import React from 'react';
import { MessageSquare, ArrowRight, MapPin } from 'lucide-react';
import HeroSmartphoneMarquee from './HeroSmartphoneMarquee';
import { CONTACT_INFO } from '../data';

export default function Hero() {

  // WhatsApp Catalog Ticker items - Running to the RIGHT (animate-marquee-reverse)
  const whatsappCatalogLink = `https://wa.me/5541999176640?text=${encodeURIComponent("Olá! Gostaria de um orçamento de assistência técnica na SUNCELL.")}`;

  const catalogTickerItems = [
    {
      badge: "DIAGNÓSTICO GRATUITO",
      title: "TROCA DE TELA, BATERIA E PLACA COM GARANTIA",
      cta: "FALAR NO WHATSAPP",
      highlight: true
    },
    {
      badge: "2 LOJAS NO MERCADO GOES",
      title: "SUNCELL GUAÍRA E ALTO BOQUEIRÃO",
      cta: "PEDIR ORÇAMENTO",
      highlight: false
    },
    {
      badge: "ATENDIMENTO ESPECIALIZADO",
      title: "IPHONE, SAMSUNG, XIAOMI E MOTOROLA",
      cta: "CHAMAR NO WHATSAPP",
      highlight: true
    },
    {
      badge: "CONSERTO NO MESMO DIA",
      title: "TELA, BATERIA, CONECTOR DE CARGA E CÂMERA",
      cta: "AGENDAR AGORA",
      highlight: false
    }
  ];

  const duplicatedCatalog = [...catalogTickerItems, ...catalogTickerItems, ...catalogTickerItems, ...catalogTickerItems];

  return (
    <div id="inicio" className="w-full flex flex-col bg-slate-950">
      {/* CINEMATIC HERO: NO MOBILE PROPORÇÃO 16:9 SEM CORTAR TEXTO LATERAL; NO DESKTOP ALTO E IMPONENTE */}
      <div className="w-full relative z-20 overflow-hidden bg-slate-950">
        <div className="relative w-full h-[580px] sm:h-[60vh] sm:min-h-[500px] md:h-[68vh] md:min-h-[580px] lg:h-[76vh] lg:min-h-[680px] xl:h-[82vh] xl:min-h-[760px] 2xl:min-h-[820px] bg-slate-950 flex flex-col justify-between overflow-hidden">
          
          {/* Background Image Layer - Loja SUNCELL no Mercado Goes */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <img
              src="/images/suncell-loja-guaira.webp"
              alt="Interior da loja SUNCELL no Mercado Goes, em Curitiba"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
            
            {/* Contrast & Framing Overlays */}
            <div className="absolute inset-0 bg-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/55 to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/35" />
          </div>

          {/* ÁREA CENTRAL LIVRE */}
          <div className="flex-1 w-full pointer-events-none" aria-hidden="true" />

          {/* HERO CONTENT */}
          <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-6 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12 pointer-events-none">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl pointer-events-auto">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF8533]/40 bg-slate-950/70 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFB27A] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6600]" />
                  Assistência técnica em Curitiba
                </span>
                <h1 className="mt-4 font-display text-3xl font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
                  Seu celular em boas mãos, <span className="text-[#FF8533]">no Mercado Goes.</span>
                </h1>
                <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] sm:text-base">
                  Troca de tela, bateria e placa com diagnóstico gratuito e garantia. Duas lojas SUNCELL: Guaíra e Alto Boqueirão.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] px-5 py-3 text-xs font-black uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(255,102,0,0.35)] transition-all hover:-translate-y-0.5 hover:brightness-110 sm:text-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Pedir orçamento
                  </a>
                  <a
                    href="#assistencia"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/60 px-5 py-3 text-xs font-black uppercase tracking-wide text-white backdrop-blur-md transition-all hover:border-[#FF8533]/60 hover:bg-slate-900/80 sm:text-sm"
                  >
                    <MapPin className="h-4 w-4 text-[#FF8533]" />
                    Ver lojas
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* LETREIRO CHAMATIVO: CATÁLOGO VIA WHATSAPP (CORRENDO PARA O LADO DIREITO) */}
      <div className="w-full relative z-25 overflow-hidden select-none bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 border-y-2 border-[#25D366]/80 shadow-[0_0_25px_rgba(37,211,102,0.35)] py-2.5 sm:py-3.5">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-emerald-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max relative">
          <div className="flex gap-6 sm:gap-14 animate-marquee-reverse hover:[animation-play-state:paused] active:[animation-play-state:paused] transition-all duration-300">
            {duplicatedCatalog.map((item, idx) => (
              <a
                key={idx}
                href={whatsappCatalogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0 group cursor-pointer"
              >
                {/* Glowing WhatsApp Badge */}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#25D366] text-slate-950 font-black text-[10px] sm:text-xs rounded-full shadow-[0_0_12px_rgba(37,211,102,0.6)] group-hover:scale-105 transition-transform tracking-wider uppercase font-mono">
                  <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-slate-950" />
                  <span>{item.badge}</span>
                </span>

                {/* Main Heading Text */}
                <span className="text-white text-[11px] sm:text-sm md:text-base font-display font-black tracking-wide uppercase group-hover:text-emerald-300 transition-colors drop-shadow-md">
                  {item.title}
                </span>

                {/* Call To Action Button Pill */}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3.5 sm:py-1 bg-gradient-to-r from-[#FF6600] to-amber-500 text-white font-extrabold text-[10px] sm:text-xs rounded-lg shadow-md group-hover:shadow-[0_0_15px_rgba(255,102,0,0.7)] group-hover:scale-105 transition-all tracking-wider uppercase">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                </span>

                <span className="text-[#25D366] font-bold text-base sm:text-lg ml-1 sm:ml-2">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SMARTPHONE SHOWCASE CONVEYOR / TICKER */}
      <HeroSmartphoneMarquee />
    </div>
  );
}
