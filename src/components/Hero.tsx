import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Shield, Zap, Sparkles, ArrowRight, ChevronLeft, ChevronRight, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const DESKTOP_SLIDES = [
  "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
];

const DESKTOP_SLIDE_DATA = [
  {
    badge: "Loja Física no Centro de Curitiba",
    title: "LOJA DE CELULARES EM CURITIBA",
    subtitle: "Sua loja especializada com garantia local de 12 meses, produtos novos e lacrados e o melhor atendimento da região.",
    incentive: "Garantia Local de 12 Meses • Atendimento Humanizado • 8+ Anos de História",
    ctaText: "Consultar Celulares no WhatsApp",
    ctaLink: CONTACT_INFO.whatsappLink
  }
];

export default function Hero() {
  const [currentDesktopSlide, setCurrentDesktopSlide] = useState(0);

  const promoItems = [
    "SHOPCELL — LOJA DE CELULARES EM CURITIBA",
    "COMPRE SEU CELULAR NOVO E LACRADO COM 12 MESES DE GARANTIA",
    "LOJA FÍSICA NO EDIFÍCIO DOWNTOWN — CENTRO DE CURITIBA",
    "ENTREGA EXPRESSA VIA MOTOBOY COM OPÇÃO DE PAGAR NA ENTREGA",
    "NOTA 5.0 NO GOOGLE COM MAIS DE 3.800 AVALIAÇÕES SATISFEITAS",
    "PARCELAMENTO EM ATÉ 12X NO CARTÃO DE CRÉDITO"
  ];

  const duplicatedPromoItems = [...promoItems, ...promoItems, ...promoItems];

  return (
    <div id="inicio" className="w-full flex flex-col bg-white">
      {/* DESKTOP HERO BANNER */}
      <div className="w-full relative z-20">
        <div className="relative w-full min-h-[460px] lg:min-h-[520px] bg-slate-900 overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60 z-10" />
          
          <img
            src={DESKTOP_SLIDES[0]}
            alt="Shopcell Loja de Celulares em Curitiba"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full z-20 py-12 lg:py-16">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-1.5 bg-[#FF6900] text-white px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-lg mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-white" />
                <span>{DESKTOP_SLIDE_DATA[0].badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white leading-tight mb-4 tracking-tight uppercase">
                {DESKTOP_SLIDE_DATA[0].title}
              </h1>

              <p className="text-slate-200 text-sm sm:text-base lg:text-lg mb-8 font-medium leading-relaxed">
                {DESKTOP_SLIDE_DATA[0].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-[#FF6600] hover:bg-[#D45500] text-white text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar no WhatsApp</span>
                </a>

                <Link
                  to="/celulares"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <span>Conhecer Celulares</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300 pt-4 border-t border-slate-800">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Garantia Local 12 Meses</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Entrega Motoboy no Mesmo Dia</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Até 12x no Cartão</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROMOTIONAL TICKER */}
      <div className="block w-full bg-slate-950 text-white border-y border-slate-800 py-3 relative overflow-hidden select-none z-20">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max relative">
          <div className="flex gap-8 sm:gap-12 animate-marquee-reverse-fast hover:[animation-play-state:paused] transition-all duration-300">
            {duplicatedPromoItems.map((item, idx) => (
              <a
                key={idx}
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 flex-shrink-0 text-xs sm:text-sm font-sans font-extrabold tracking-wide text-white hover:text-emerald-400 transition-colors cursor-pointer uppercase"
              >
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 bg-[#FF6900] text-white rounded-md text-[10px] font-mono font-bold mr-1">SHOPCELL</span>
                <span>{item}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
