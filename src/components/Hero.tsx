import { ShieldCheck, Zap, MapPin, Truck, CreditCard, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import HeroSmartphoneMarquee from './HeroSmartphoneMarquee';

export default function Hero() {
  // Row 1: Brand, Location & Identity Ticker (Moves Left: animate-marquee)
  const tickerBrand = [
    { text: "SHOPCELL CURITIBA", highlight: true, icon: Sparkles },
    { text: "LOJA FÍSICA NO EDIFÍCIO DOWNTOWN — CENTRO", highlight: false, icon: MapPin },
    { text: "SMARTPHONES NOVOS, ORIGINAIS E LACRADOS", highlight: true, icon: Zap },
    { text: "ATENDIMENTO VIP DE ALTO PADRÃO", highlight: false, icon: CheckCircle2 },
    { text: "AVALIAÇÃO MÁXIMA 5.0 NO GOOGLE — +3.800 CLIENTES", highlight: true, icon: Star },
    { text: "PRONTA ENTREGA EM TODA CURITIBA E REGIÃO", highlight: false, icon: Truck },
  ];

  // Row 2: Warranties, Payment & Guarantees Ticker (Moves Right in Reverse: animate-marquee-reverse)
  const tickerGuarantees = [
    { text: "GARANTIA LOCAL DE 12 MESES DIRETO NA LOJA", highlight: true, icon: ShieldCheck },
    { text: "ENTREGA EXPRESSA NO MESMO DIA VIA MOTOBOY", highlight: false, icon: Truck },
    { text: "PARCELAMENTO EXCLUSIVO EM ATÉ 12X NO CARTÃO", highlight: true, icon: CreditCard },
    { text: "PAGAMENTO SEGURO NA ENTREGA", highlight: false, icon: ShieldCheck },
    { text: "APARELHOS HOMOLOGADOS ANATEL", highlight: true, icon: Zap },
    { text: "TESTE E CONFIRA SEU APARELHO NO ATO", highlight: false, icon: CheckCircle2 },
  ];

  // Row 3: Models & Fast Contact Ticker (Moves Left: animate-marquee)
  const tickerModels = [
    { text: "REALME 14 5G — ULTRA VELOCIDADE & CÂMERA PRO", highlight: true, icon: Zap },
    { text: "REALME NOTE 60X — RESISTÊNCIA & BATERIA MONSTRO", highlight: false, icon: Sparkles },
    { text: "REALME P4 LITE — O MELHOR CUSTO-BENEFÍCIO", highlight: true, icon: Zap },
    { text: "REALME P4 POWER 5G — DESEMPENHO EXTREMO", highlight: false, icon: Sparkles },
    { text: "WHATSAPP OFICIAL: (41) 3798-9918", highlight: true, icon: CheckCircle2 },
    { text: "MENOR PREÇO GARANTIDO DE CURITIBA", highlight: false, icon: Star },
  ];

  const duplicatedBrand = [...tickerBrand, ...tickerBrand, ...tickerBrand, ...tickerBrand];
  const duplicatedGuarantees = [...tickerGuarantees, ...tickerGuarantees, ...tickerGuarantees, ...tickerGuarantees];
  const duplicatedModels = [...tickerModels, ...tickerModels, ...tickerModels, ...tickerModels];

  return (
    <div id="inicio" className="w-full flex flex-col bg-slate-950">
      {/* CINEMATIC LUXURY HERO BANNER: 1 TICKER NO TOPO E 2 TICKERS NO RODAPÉ DA HERO (CENTRO TOTALMENTE LIVRE PARA O VÍDEO) */}
      <div className="w-full relative z-20 overflow-hidden">
        <div className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] bg-slate-950 flex flex-col justify-between overflow-hidden">
          
          {/* Background Video Layer - 100% Immersive, Ultra Crisp & Prominent */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover min-w-full min-h-full opacity-90 filter brightness-100 contrast-105"
            >
              <source src="https://img.supremasite.com.br/shopcell.mp4" type="video/mp4" />
            </video>
            
            {/* Subtle Gradient Framing - Keeps top/bottom legible while the entire center is completely clear */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30 pointer-events-none" />
          </div>

          {/* 1. LETREIRO NO TOPO DA HERO (Move para a Esquerda) */}
          <div className="w-full relative z-20 overflow-hidden py-2.5 select-none border-b border-white/10 backdrop-blur-md bg-slate-950/50">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max relative">
              <div className="flex gap-6 sm:gap-10 animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
                {duplicatedBrand.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 flex-shrink-0 text-xs sm:text-sm font-sans font-black tracking-wider uppercase text-white/95"
                    >
                      <span className={`inline-flex items-center justify-center p-1 rounded-md ${item.highlight ? 'bg-[#FF6600] text-white shadow-xs' : 'bg-white/15 text-slate-200'}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className={item.highlight ? 'text-[#FF8533] font-black' : 'text-white'}>
                        {item.text}
                      </span>
                      <span className="text-white/30 ml-3">•</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ÁREA CENTRAL 100% LIVRE - VISÃO COMPLETA E LIMPA DO VÍDEO CINEMATOGRÁFICO */}
          <div className="flex-1 w-full pointer-events-none" aria-hidden="true" />

          {/* 2. DUPLO LETREIRO NO RODAPÉ DA HERO (2 Lados Inversos) */}
          <div className="w-full relative z-20 flex flex-col">
            
            {/* Letreiro Inferior 1 (Move para a Direita em Sentido Inverso) */}
            <div className="w-full overflow-hidden py-3 sm:py-3.5 select-none border-t border-white/15 backdrop-blur-md bg-slate-950/65">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
              
              <div className="flex w-max relative">
                <div className="flex gap-8 sm:gap-12 animate-marquee-reverse hover:[animation-play-state:paused] transition-all duration-300">
                  {duplicatedGuarantees.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={CONTACT_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 flex-shrink-0 text-xs sm:text-base font-display font-black tracking-widest uppercase transition-all group"
                      >
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg text-xs font-mono font-bold group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4 text-emerald-400" />
                          <span>OFICIAL</span>
                        </span>
                        <span className="text-white group-hover:text-[#FF8533] transition-colors drop-shadow-md">
                          {item.text}
                        </span>
                        <span className="text-[#FF6600]/70 ml-4">✦</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Letreiro Inferior 2 (Move para a Esquerda) */}
            <div className="w-full overflow-hidden py-2.5 select-none border-t border-white/10 backdrop-blur-md bg-slate-950/80">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
              
              <div className="flex w-max relative">
                <div className="flex gap-6 sm:gap-10 animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
                  {duplicatedModels.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 flex-shrink-0 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase text-slate-200"
                      >
                        <span className={`inline-flex items-center justify-center p-1 rounded-md ${item.highlight ? 'bg-amber-500/30 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-300'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className={item.highlight ? 'text-amber-300 font-extrabold' : 'text-slate-100'}>
                          {item.text}
                        </span>
                        <span className="text-white/20 ml-3">—</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SMARTPHONE SHOWCASE CONVEYOR / TICKER */}
      <HeroSmartphoneMarquee />
    </div>
  );
}
