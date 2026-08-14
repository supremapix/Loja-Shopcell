import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, MessageSquare, ArrowRight } from 'lucide-react';
import HeroSmartphoneMarquee from './HeroSmartphoneMarquee';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Attempt playback on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback to muted if browser blocks unmuted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  // WhatsApp Catalog Ticker items - Running to the RIGHT (animate-marquee-reverse)
  const whatsappCatalogLink = `https://wa.me/554137989918?text=${encodeURIComponent("Olá! Gostaria de receber o catálogo completo com todos os celulares e preços atualizados no WhatsApp.")}`;

  const catalogTickerItems = [
    {
      badge: "CATÁLOGO WHATSAPP",
      title: "TRABALHAMOS COM CATÁLOGO COMPLETO VIA WHATSAPP!",
      cta: "CLIQUE AQUI PARA RECEBER",
      highlight: true
    },
    {
      badge: "ESTOQUE ATUALIZADO",
      title: "PREÇOS PROMOCIONAIS E PRONTA ENTREGA EM CURITIBA",
      cta: "SOLICITAR TABELA NO WHATSAPP",
      highlight: false
    },
    {
      badge: "ATENDIMENTO IMEDIATO",
      title: "RECEBA FOTOS E VÍDEOS DOS APARELHOS LACRADOS",
      cta: "CHAMAR NO WHATSAPP",
      highlight: true
    },
    {
      badge: "12 MESES GARANTIA",
      title: "SMARTPHONES ORIGINAIS COM RETIRADA NO CENTRO OU MOTOBOY",
      cta: "CLIQUE AQUI E CONFIRA",
      highlight: false
    }
  ];

  const duplicatedCatalog = [...catalogTickerItems, ...catalogTickerItems, ...catalogTickerItems, ...catalogTickerItems];

  return (
    <div id="inicio" className="w-full flex flex-col bg-slate-950">
      {/* CINEMATIC HERO: NO MOBILE PROPORÇÃO 16:9 SEM CORTAR TEXTO LATERAL; NO DESKTOP ALTO E IMPONENTE */}
      <div className="w-full relative z-20 overflow-hidden bg-slate-950">
        <div className="relative w-full aspect-video sm:aspect-auto sm:h-[60vh] sm:min-h-[500px] md:h-[68vh] md:min-h-[580px] lg:h-[76vh] lg:min-h-[680px] xl:h-[82vh] xl:min-h-[760px] 2xl:min-h-[820px] bg-slate-950 flex flex-col justify-between overflow-hidden">
          
          {/* Background Video Layer - Full frame fit without side text cropping */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden z-0 cursor-pointer"
            onClick={() => toggleSound()}
            title="Clique para ativar ou desativar o som"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center min-w-full min-h-full opacity-95 filter brightness-100 contrast-105 transition-all duration-500"
            >
              <source src="https://img.supremasite.com.br/shocell-cwb.mp4" type="video/mp4" />
            </video>
            
            {/* Subtle Gradient Framing */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/70 pointer-events-none" />
          </div>

          {/* ÁREA CENTRAL LIVRE */}
          <div className="flex-1 w-full pointer-events-none" aria-hidden="true" />

          {/* BOTÃO DE ÁUDIO NA PARTE DE BAIXO DA HERO - PEQUENO, REDONDO E DISCRETO */}
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-5 z-30 pointer-events-auto">
            <button
              onClick={toggleSound}
              type="button"
              id="hero-sound-toggle-btn"
              aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
              title={isMuted ? "Ativar som" : "Desativar som"}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 shadow-xl cursor-pointer select-none group ${
                isMuted 
                  ? 'bg-slate-950/85 hover:bg-slate-900 border-white/20 hover:border-[#FF6600] text-slate-300 hover:text-white' 
                  : 'bg-emerald-950/90 hover:bg-emerald-900 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              }`}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-[#FF8533] group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform animate-pulse" />
              )}
            </button>
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
