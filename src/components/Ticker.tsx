import React from 'react';
import { MessageSquare, MapPin, Sparkles, Shield, Gift, Megaphone, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Ticker() {
  const tickerItems = [
    {
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      text: "NOVIDADE: POCO F8 Ultra 5G NFC com Snapdragon 8s Gen 3 já disponível!",
      actionText: "Garanta o Seu",
      link: CONTACT_INFO.whatsappLink
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#FF6600]" />,
      text: "LOJA FÍSICA NO CENTRO: R. Conselheiro Laurindo, 809 - Sala 402, Curitiba/PR",
      actionText: "Ver Mapa",
      link: CONTACT_INFO.mapsLink
    },
    {
      icon: <Gift className="w-4 h-4 text-emerald-400" />,
      text: "PRESENTE DO MÊS: Película de Vidro + Capinha inclusas em todos os smartphones!",
      actionText: "Resgatar Brinde",
      link: CONTACT_INFO.whatsappLink
    },
    {
      icon: <MessageSquare className="w-4 h-4 text-[#25D366]" />,
      text: "CHAME NO WHATSAPP: Tire dúvidas ou faça um orçamento rápido pelo (41) 98822-0010",
      actionText: "Conversar Agora",
      link: CONTACT_INFO.whatsappLink
    },
    {
      icon: <Shield className="w-4 h-4 text-sky-400" />,
      text: "COMPRE COM SEGURANÇA: 12 Meses de Garantia Local em Todos os Aparelhos!",
      actionText: "Falar com Vendedor",
      link: CONTACT_INFO.whatsappLink
    },
    {
      icon: <Megaphone className="w-4 h-4 text-rose-400" />,
      text: "MENOR PREÇO GARANTIDO: Consulte o menor valor para este aparelho via WhatsApp agora mesmo!",
      actionText: "Aproveitar Desconto",
      link: CONTACT_INFO.whatsappLink
    }
  ];

  // Double the items to make the scroll seamless
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div 
      className="w-full bg-slate-900 text-white border-y border-slate-800 py-3.5 relative overflow-hidden select-none z-30"
      id="promotions-ticker-bar"
    >
      {/* Decorative gradient shadows at the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Ticker Content Wrapper */}
      <div className="flex w-max relative">
        <div className="flex gap-12 sm:gap-20 animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
          {duplicatedItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 text-xs sm:text-sm font-sans font-medium tracking-wide"
            >
              <div className="flex items-center justify-center p-1.5 bg-white/5 rounded-lg">
                {item.icon}
              </div>
              <span className="text-gray-200">{item.text}</span>
              
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1 bg-[#FF6600] hover:bg-[#D45500] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md transition-colors shadow-xs ml-1"
              >
                <span>{item.actionText}</span>
                <ChevronRight className="w-3 h-3 text-white" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
