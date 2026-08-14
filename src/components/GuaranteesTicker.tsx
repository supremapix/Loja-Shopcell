import React from 'react';
import { ShieldCheck, Truck, CreditCard, Zap, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function GuaranteesTicker() {
  const tickerGuarantees = [
    { text: "GARANTIA LOCAL DE 12 MESES DIRETO NA LOJA", highlight: true, icon: ShieldCheck },
    { text: "ENTREGA EXPRESSA NO MESMO DIA VIA MOTOBOY", highlight: false, icon: Truck },
    { text: "PARCELAMENTO EXCLUSIVO EM ATÉ 12X NO CARTÃO", highlight: true, icon: CreditCard },
    { text: "PAGAMENTO SEGURO NA ENTREGA", highlight: false, icon: ShieldCheck },
    { text: "APARELHOS HOMOLOGADOS ANATEL", highlight: true, icon: Zap },
    { text: "TESTE E CONFIRA SEU APARELHO NO ATO", highlight: false, icon: CheckCircle2 },
  ];

  const duplicatedGuarantees = [...tickerGuarantees, ...tickerGuarantees, ...tickerGuarantees, ...tickerGuarantees];

  return (
    <div className="w-full bg-slate-950 text-white border-y border-white/10 py-3.5 relative overflow-hidden select-none z-20">
      {/* Decorative gradient shadows at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max relative">
        <div className="flex gap-6 sm:gap-12 animate-marquee-reverse-slow hover:[animation-play-state:paused] active:[animation-play-state:paused] transition-all duration-300">
          {duplicatedGuarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 text-xs sm:text-sm md:text-base font-display font-black tracking-widest uppercase transition-all group"
              >
                <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg text-[10px] sm:text-xs font-mono font-bold group-hover:scale-105 transition-transform">
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>OFICIAL</span>
                </span>
                <span className="text-white group-hover:text-[#FF8533] transition-colors drop-shadow-md">
                  {item.text}
                </span>
                <span className="text-[#FF6600]/70 ml-2 sm:ml-4">✦</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
