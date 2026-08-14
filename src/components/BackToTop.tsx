import { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (totalScrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / totalScrollHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button once user has scrolled past 300px
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  // SVG Circle calculation for circular progress ring (radius = 20)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className="fixed bottom-24 right-5 sm:bottom-24 sm:right-6 z-40 flex items-center justify-end group select-none transition-all duration-500 animate-fadeIn"
      id="back-to-top-container"
    >
      {/* Elegante Tooltip Flutuante com Porcentagem e Brilho */}
      <div 
        className={`absolute right-14 sm:right-16 whitespace-nowrap py-1.5 px-3 bg-slate-950/90 text-white border border-white/20 rounded-xl shadow-2xl backdrop-blur-md text-xs font-mono font-bold flex items-center gap-2 pointer-events-none transition-all duration-300 transform ${
          isHovered 
            ? 'opacity-100 translate-x-0 scale-100 shadow-[#FF6600]/20' 
            : 'opacity-0 translate-x-2 scale-95'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-[#FF6600] animate-pulse" />
        <span className="font-sans font-semibold text-slate-200">Voltar ao topo</span>
        <span className="bg-[#FF6600]/20 text-[#FF8533] border border-[#FF6600]/40 px-1.5 py-0.5 rounded-md text-[10px]">
          {Math.round(scrollProgress)}%
        </span>
      </div>

      {/* Botão Principal com Efeito Premium, Halo de Luz e Anel de Progresso */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Voltar ao topo da página"
        id="btn-back-to-top"
        className={`relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:ring-offset-2 focus:ring-offset-slate-950 ${
          isClicked 
            ? 'scale-90 shadow-inner' 
            : 'hover:scale-110 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_35px_rgba(255,102,0,0.4)]'
        }`}
      >
        {/* Halo Glow de Fundo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6600]/30 via-amber-500/20 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Fundo de Vidro Escuro Luxuoso */}
        <div className="absolute inset-[3px] rounded-full bg-slate-950/90 backdrop-blur-md border border-white/20 group-hover:border-[#FF6600]/70 transition-colors" />

        {/* Anel de Progresso Circular em SVG */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
          viewBox="0 0 48 48"
        >
          {/* Trilha do Anel (Fundo) */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-white/10"
            strokeWidth="3"
            fill="none"
          />
          {/* Barra de Progresso Gradiente Laranja/Dourado */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="url(#progress-gradient)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-150 ease-out"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6600" />
              <stop offset="100%" stopColor="#FFA040" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ícone de Seta com Micro-Animação de Deslocamento */}
        <div className="relative z-10 text-white flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
          <ArrowUp className="w-5 h-5 text-white group-hover:text-[#FF8533] transition-colors stroke-[2.5]" />
        </div>

        {/* Pulso Sutil no Hover */}
        <span className="absolute inset-0 rounded-full border border-[#FF6600]/40 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none duration-1000" />
      </button>
    </div>
  );
}
