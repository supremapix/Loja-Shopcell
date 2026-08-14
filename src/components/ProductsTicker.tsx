import React from 'react';
import { Zap, Sparkles, Star, CheckCircle2, Flame, ArrowRight, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function ProductsTicker() {
  const tickerModels = [
    { text: "REALME 14 5G — ULTRA VELOCIDADE & CÂMERA PRO", highlight: true, icon: Zap },
    { text: "REALME NOTE 60X — RESISTÊNCIA & BATERIA MONSTRO", highlight: false, icon: Sparkles },
    { text: "REALME P4 LITE — O MELHOR CUSTO-BENEFÍCIO", highlight: true, icon: Zap },
    { text: "REALME P4 POWER 5G — DESEMPENHO EXTREMO", highlight: false, icon: Sparkles },
    { text: "WHATSAPP OFICIAL: (41) 3798-9918", highlight: true, icon: CheckCircle2 },
    { text: "MENOR PREÇO GARANTIDO DE CURITIBA", highlight: false, icon: Star },
    { text: "APARELHOS NOVOS, ORIGINAIS E COM NOTA", highlight: true, icon: Flame },
  ];

  const duplicatedModels = [...tickerModels, ...tickerModels, ...tickerModels, ...tickerModels];

  return (
    <div className="w-full bg-slate-900 text-white border-y border-slate-800 py-3 relative overflow-hidden select-none z-20">
      {/* Decorative gradient shadows at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max relative">
        <div className="flex gap-6 sm:gap-10 animate-marquee-slow hover:[animation-play-state:paused] active:[animation-play-state:paused] transition-all duration-300">
          {duplicatedModels.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase text-slate-200 group"
              >
                <span className={`inline-flex items-center justify-center p-1 rounded-md ${item.highlight ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-800 text-slate-300'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className={item.highlight ? 'text-amber-300 font-extrabold group-hover:text-amber-200 transition-colors' : 'text-slate-200 group-hover:text-white transition-colors'}>
                  {item.text}
                </span>
                <span className="text-white/20 ml-2 sm:ml-3">—</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
