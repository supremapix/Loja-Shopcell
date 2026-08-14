import React from 'react';
import { Sparkles, MapPin, Zap, CheckCircle2, Star, Truck } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function BrandTicker() {
  const tickerBrand = [
    { text: "SHOPCELL CURITIBA", highlight: true, icon: Sparkles },
    { text: "LOJA FÍSICA NO EDIFÍCIO DOWNTOWN — CENTRO", highlight: false, icon: MapPin },
    { text: "SMARTPHONES NOVOS, ORIGINAIS E LACRADOS", highlight: true, icon: Zap },
    { text: "ATENDIMENTO VIP DE ALTO PADRÃO", highlight: false, icon: CheckCircle2 },
    { text: "AVALIAÇÃO MÁXIMA 5.0 NO GOOGLE — +3.800 CLIENTES", highlight: true, icon: Star },
    { text: "PRONTA ENTREGA EM TODA CURITIBA E REGIÃO", highlight: false, icon: Truck },
  ];

  const duplicatedBrand = [...tickerBrand, ...tickerBrand, ...tickerBrand, ...tickerBrand];

  return (
    <div className="w-full bg-slate-950 text-white border-y border-slate-800 py-3 relative overflow-hidden select-none z-20">
      {/* Decorative gradient shadows at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max relative">
        <div className="flex gap-6 sm:gap-10 animate-marquee-slow hover:[animation-play-state:paused] active:[animation-play-state:paused] transition-all duration-300">
          {duplicatedBrand.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 text-xs sm:text-sm font-sans font-black tracking-wider uppercase text-white/95 group"
              >
                <span className={`inline-flex items-center justify-center p-1 rounded-md ${item.highlight ? 'bg-[#FF6600] text-white shadow-xs' : 'bg-white/15 text-slate-200'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className={item.highlight ? 'text-[#FF8533] font-black group-hover:text-[#FFA366] transition-colors' : 'text-white group-hover:text-slate-200 transition-colors'}>
                  {item.text}
                </span>
                <span className="text-white/30 ml-2 sm:ml-3">•</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
