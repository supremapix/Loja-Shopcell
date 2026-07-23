import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Shield, Zap, Sparkles, ShoppingBag, ArrowRight, ChevronLeft, ChevronRight, Check, MessageSquare } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO, PRODUCTS, getProductSlug } from '../data';

interface HeroProps {
  destaqueProduct: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const MOBILE_SLIDES = [
  "https://loja.xiaomishopcell.com/img/slider-5.png",
  "https://loja.xiaomishopcell.com/img/slider-4.png",
  "https://loja.xiaomishopcell.com/img/slider-mobile-3.png",
  "https://loja.xiaomishopcell.com/img/slider-2-movel.png",
  "https://loja.xiaomishopcell.com/img/slider-movel-1.png",
  "https://loja.xiaomishopcell.com/img/slider-5q.png"
];

const DESKTOP_SLIDES = [
  "https://loja.xiaomishopcell.com/img/hero-xiaomi-mi-curitiba-pr.webp",
  "https://loja.xiaomishopcell.com/img/hero-xiaomi-mi-curitiba.webp",
  "https://loja.xiaomishopcell.com/img/hero-xiaomi-mi-curitiba-cwb.webp",
  "https://loja.xiaomishopcell.com/img/hero-xiaomi-mi-cwb.webp"
];

const DESKTOP_SLIDE_DATA = [
  {
    badge: "Estoque Real no Centro de Curitiba",
    title: "XIAOMI ORIGINAL COM GARANTIA",
    subtitle: "Sua loja especializada com garantia local real de 6 meses e o melhor suporte técnico da região.",
    incentive: "Garantia Local • Suporte Pós-Venda • Brindes Exclusivos",
    ctaText: "Comprar Agora",
    ctaLink: "#produtos"
  },
  {
    badge: "Entrega Expressa via Motoboy",
    title: "SEU NOVO CELULAR HOJE MESMO",
    subtitle: "Compre e receba em Curitiba e Região Metropolitana em poucas horas com total segurança e comodidade.",
    incentive: "Receba em Casa • Pague na Entrega • 100% Seguro",
    ctaText: "Ver Modelos",
    ctaLink: "#produtos"
  },
  {
    badge: "Melhor Condição do Estado",
    title: "PARCELAMENTO EM ATÉ 12X",
    subtitle: "Aproveite 8% de desconto no Pix ou parcele em até 12 vezes sem juros no cartão de crédito.",
    incentive: "Parcelas Suaves • Menor Preço Garantido • Sem Burocracia",
    ctaText: "Falar com Consultor",
    ctaLink: CONTACT_INFO.whatsappLink
  },
  {
    badge: "Sua Melhor Escolha em Curitiba",
    title: "PRODUTOS 100% ORIGINAIS LACRADOS",
    subtitle: "Trabalhamos apenas com aparelhos novos, originais e com garantia de fábrica. Venha nos visitar ou peça entrega expressa.",
    incentive: "Estoque Real • Selo de Autenticidade • Atendimento Especializado",
    ctaText: "Aproveitar Ofertas",
    ctaLink: "#produtos"
  }
];

// Extremely high-impact futuristic sci-fi transitions
const TRANSITIONS = [
  // 1. Zoom portal transition with blur & flash
  { 
    initial: { opacity: 0, scale: 0.2, rotate: -15, filter: "blur(12px) brightness(2)" }, 
    animate: { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px) brightness(1)" }, 
    exit: { opacity: 0, scale: 1.8, rotate: 15, filter: "blur(12px) brightness(0.5)" } 
  },
  // 2. High-speed warp slide with skew & glow
  { 
    initial: { opacity: 0, x: "100%", skewX: -20, filter: "contrast(1.5)" }, 
    animate: { opacity: 1, x: 0, skewX: 0, filter: "contrast(1)" }, 
    exit: { opacity: 0, x: "-100%", skewX: 20, filter: "contrast(1.5)" } 
  },
  // 3. Digital Glitch reveal
  { 
    initial: { opacity: 0, scaleY: 0.05, scaleX: 1.5, filter: "hue-rotate(90deg)" }, 
    animate: { opacity: 1, scaleY: 1, scaleX: 1, filter: "hue-rotate(0deg)" }, 
    exit: { opacity: 0, scaleY: 0.05, scaleX: 1.5, filter: "hue-rotate(-90deg)" } 
  },
  // 4. Elastic 3D flip & bounce
  { 
    initial: { opacity: 0, rotateY: 90, scale: 0.8, filter: "brightness(1.5)" }, 
    animate: { opacity: 1, rotateY: 0, scale: 1, filter: "brightness(1)" }, 
    exit: { opacity: 0, rotateY: -90, scale: 0.8, filter: "brightness(0.5)" } 
  }
];

export default function Hero({ destaqueProduct, onSelectProduct, onAddToCart }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDesktopSlide, setCurrentDesktopSlide] = useState(0);
  const [transitionIndex, setTransitionIndex] = useState(0);

  // Sort products to find the 4 cheapest devices
  const cheapestProducts = [...PRODUCTS]
    .sort((a, b) => a.priceAt - b.priceAt)
    .slice(0, 4);

  // Auto-slide every 5 seconds with random transition
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Desktop auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextDesktopSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentDesktopSlide]);

  const handleNextSlide = () => {
    setTransitionIndex(Math.floor(Math.random() * TRANSITIONS.length));
    setCurrentSlide((prev) => (prev + 1) % MOBILE_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setTransitionIndex(Math.floor(Math.random() * TRANSITIONS.length));
    setCurrentSlide((prev) => (prev - 1 + MOBILE_SLIDES.length) % MOBILE_SLIDES.length);
  };

  const handleNextDesktopSlide = () => {
    setCurrentDesktopSlide((prev) => (prev + 1) % DESKTOP_SLIDES.length);
  };

  const handlePrevDesktopSlide = () => {
    setCurrentDesktopSlide((prev) => (prev - 1 + DESKTOP_SLIDES.length) % DESKTOP_SLIDES.length);
  };

  // Promotional items for fast mobile ticker linking directly to detailed pages with plus-separated slugs
  const promoItems = [
    { name: "Consulte o menor valor para o POCO C85 NFC via WhatsApp agora mesmo!", product: PRODUCTS.find(p => p.id === 2) },
    { name: "Consulte o menor valor para o POCO M7 NFC via WhatsApp agora mesmo!", product: PRODUCTS.find(p => p.id === 3) },
    { name: "Consulte o menor valor para o Redmi 15 256GB via WhatsApp agora mesmo!", product: PRODUCTS.find(p => p.id === 4) },
    { name: "Consulte o menor valor para o Redmi Note 14 5G via WhatsApp agora mesmo!", product: PRODUCTS.find(p => p.id === 6) },
    { name: "Consulte o menor valor para o POCO X8 Pro 5G via WhatsApp agora mesmo!", product: PRODUCTS.find(p => p.id === 7) },
    { name: "Consulte o menor valor para o POCO F8 Ultra 16GB via WhatsApp agora mesmo!", product: PRODUCTS.find(p => p.id === 12) },
  ].filter(item => item.product !== undefined);

  const duplicatedPromoItems = [...promoItems, ...promoItems, ...promoItems];

  // Container stagger properties
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as const;

  return (
    <div id="inicio" className="w-full flex flex-col bg-white">
      {/* DESKTOP SLIDER BANNER (Visible on lg+, 100% full width, flush under header, rente aos lados, no rounding, no borders) */}
      <div className="hidden lg:block w-full relative z-20">
        <div className="relative w-full aspect-[2.6/1] bg-slate-900 overflow-hidden">
          {/* Slides */}
          <div className="absolute inset-0 w-full h-full bg-slate-900">
            <AnimatePresence mode="wait">
              <div key={currentDesktopSlide} className="relative w-full h-full">
                {/* Cinema black-gradient mask overlay for perfect readability of text content over any image part */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

                <motion.img
                  src={DESKTOP_SLIDES[currentDesktopSlide]}
                  alt="Xiaomi Desktop Banner"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover select-none"
                />

                {/* Text Overlay contents & CTA */}
                <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-12 sm:px-16 md:px-24 xl:px-32 max-w-xl sm:max-w-2xl lg:max-w-3xl z-20 text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-1.5 bg-[#FF6900] text-white px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-md mb-4 w-fit shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    <span>{DESKTOP_SLIDE_DATA[currentDesktopSlide].badge}</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-display font-semibold text-white leading-tight mb-3 tracking-tight uppercase drop-shadow-md"
                  >
                    {DESKTOP_SLIDE_DATA[currentDesktopSlide].title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="text-slate-200 text-xs sm:text-sm lg:text-base max-w-lg mb-6 font-medium leading-relaxed drop-shadow-xs"
                  >
                    {DESKTOP_SLIDE_DATA[currentDesktopSlide].subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                  >
                    {DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaLink.startsWith('#') ? (
                      <a
                        href={DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaLink}
                        className="group bg-[#FF6900] hover:bg-[#D45500] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-4.5 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-1.5 cursor-pointer w-fit hover:scale-[1.01]"
                      >
                        <span>{DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        href={DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaLink}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="group bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-4.5 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-1.5 cursor-pointer w-fit hover:scale-[1.01]"
                      >
                        <span>{DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaText}</span>
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <span className="text-[#FF6900] text-[11px] sm:text-xs font-bold uppercase tracking-wider block bg-black/40 px-3 py-1 rounded-md backdrop-blur-xs">
                      {DESKTOP_SLIDE_DATA[currentDesktopSlide].incentive}
                    </span>
                  </motion.div>
                </div>
              </div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevDesktopSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-[#FF6900]/95 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer z-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button 
            onClick={handleNextDesktopSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-[#FF6900]/95 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer z-30"
            aria-label="Próximo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {DESKTOP_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDesktopSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentDesktopSlide === index 
                    ? "bg-[#FF6900] w-7 shadow-sm" 
                    : "bg-white/45 hover:bg-white"
                }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET HERO (Slider matching desktop slides, aspect-[1.15/1], object-right, same overlays) */}
      <div className="block lg:hidden w-full">
        <div className="relative w-full aspect-[1.15/1] bg-slate-950 overflow-hidden shadow-xs border-b border-slate-900">
          {/* Slide Images with random transition */}
          <div className="absolute inset-0 w-full h-full bg-slate-950">
            <AnimatePresence mode="wait">
              <div key={currentDesktopSlide} className="relative w-full h-full">
                {/* Cinema black-gradient mask overlay for perfect readability of text content over any image part */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 z-10 pointer-events-none" />

                <motion.img
                  src={DESKTOP_SLIDES[currentDesktopSlide]}
                  alt="Xiaomi Banner Mobile"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover object-right select-none"
                />

                {/* Mobile Text Overlay contents & CTA */}
                <div className="absolute inset-x-0 bottom-12 flex flex-col justify-end px-5 py-2 z-20 text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1 bg-[#FF6900] text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-md mb-2 w-fit shadow-xs"
                  >
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>{DESKTOP_SLIDE_DATA[currentDesktopSlide].badge}</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg sm:text-xl font-display font-semibold text-white leading-tight mb-1.5 uppercase drop-shadow-md"
                  >
                    {DESKTOP_SLIDE_DATA[currentDesktopSlide].title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-slate-300 text-[11px] sm:text-xs max-w-xs mb-3 font-medium leading-relaxed drop-shadow-xs"
                  >
                    {DESKTOP_SLIDE_DATA[currentDesktopSlide].subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3"
                  >
                    {DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaLink.startsWith('#') ? (
                      <a
                        href={DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaLink}
                        className="bg-[#FF6900] hover:bg-[#D45500] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all duration-300 shadow-md inline-flex items-center gap-1 cursor-pointer w-fit"
                      >
                        <span>{DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <a
                        href={DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaLink}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all duration-300 shadow-md inline-flex items-center gap-1 cursor-pointer w-fit"
                      >
                        <span>{DESKTOP_SLIDE_DATA[currentDesktopSlide].ctaText}</span>
                        <MessageSquare className="w-3 h-3" />
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </AnimatePresence>
          </div>

          {/* Progressive Filling Slide Indicator Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 w-[80%] max-w-[320px]">
            {DESKTOP_SLIDES.map((_, index) => (
              <div key={index} className="h-1 flex-grow bg-white/20 rounded-full overflow-hidden backdrop-blur-xs">
                {currentDesktopSlide === index ? (
                  <motion.div
                    key={`progress-bar-${index}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-[#FF6900]"
                  />
                ) : (
                  <div 
                    className={`h-full w-full ${index < currentDesktopSlide ? "bg-[#FF6900]" : "bg-transparent"}`} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROMOTIONAL TICKER - NOW ON ALL DEVICES, BLACK BACKGROUND, WHITE TEXT */}
      <div className="block w-full bg-slate-950 text-white border-y border-slate-800 py-3 relative overflow-hidden select-none z-20 mb-0">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max relative">
          <div className="flex gap-8 sm:gap-12 animate-marquee-reverse-fast hover:[animation-play-state:paused] transition-all duration-300">
            {duplicatedPromoItems.map((item, idx) => {
              const url = item.product ? `/produto/${getProductSlug(item.product)}` : '#';
              return (
                <Link
                  key={idx}
                  to={url}
                  className="flex items-center gap-2 flex-shrink-0 text-xs sm:text-sm font-sans font-extrabold tracking-wide text-white hover:text-slate-200 transition-colors cursor-pointer uppercase"
                >
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 bg-[#FF6900] text-white rounded-md text-[10px] font-mono font-bold mr-1 animate-pulse">PROMO</span>
                  <span>{item.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* THE INNER GRID HERO CONTENT (with container, background decoration, etc) */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white lg:bg-[#F9FAFB] border-b border-slate-200/60 lg:border-b-0 py-12 lg:py-24 px-4 lg:px-8">
        {/* Decorative Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-[#FF6600]/4 rounded-full filter blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-orange-100/30 rounded-full filter blur-[150px]" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">

        {/* DESKTOP HERO (Grid content, visible on lg+) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/25 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Revendedor Autorizado Multimarcas Curitiba</span>
            </motion.div>

            {/* Headline with split-text layout */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[42px] xl:text-[50px] font-display font-bold text-slate-900 leading-[1.15] tracking-tight mb-6"
            >
              Seu Xiaomi Novo & Original <br />
              <span className="text-[#FF6600]">Com Garantia de Verdade</span> <br />
              <span className="text-slate-900">e Entrega no Mesmo Dia!</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-medium"
            >
              Não coloque seu dinheiro em risco com golpes ou aparelhos recondicionados sem nota. Na <strong className="text-slate-950 font-bold">Xiaomi Shop Cell</strong>, você compra seu smartphone novo, original e lacrado com <strong className="text-slate-950 font-bold">6 meses de garantia local completa</strong>. Retire com total segurança em nossa loja física no Centro de Curitiba ou receba em casa em poucas horas por motoboy!
            </motion.p>

            {/* Call-to-action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a 
                href="#produtos" 
                className="group flex items-center justify-center gap-1.5 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-xs hover:scale-[1.01]"
                id="hero-cta-catalog"
              >
                <span>Ver Modelos</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button 
                onClick={() => onSelectProduct(destaqueProduct)}
                className="flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] cursor-pointer shadow-2xs"
                id="hero-cta-destaque"
              >
                <span>POCO F8 Ultra</span>
              </button>
            </motion.div>

            {/* Social Proof Badges Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t-2 border-slate-200/60"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-bold text-slate-950">5.0</span>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />
                  <span className="text-xs text-slate-500 font-bold font-sans">Google Nota Máxima</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#FF6600]">+3.800</span>
                <span className="text-xs text-slate-500 font-bold font-sans mt-1">Clientes Satisfeitos</span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-bold text-slate-950">6 Meses</span>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span className="text-xs text-slate-500 font-bold font-sans">Garantia Local Real</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#FF6600]">12x</span>
                <div className="flex items-center gap-1 mt-1">
                  <Zap className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span className="text-xs text-slate-500 font-bold font-sans">No Cartão de Crédito</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlight Product Box */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="col-span-1 lg:col-span-5 flex justify-center items-center"
          >
            {/* Card Wrapper with flotation animation */}
            <div className="relative animate-float w-full max-w-[380px]" id="hero-destaque-card">
              {/* Ambient orange glow container behind card */}
              <div className="absolute inset-0 bg-[#FF6600]/5 rounded-3xl filter blur-[30px] -z-10" />

              <div className="bg-white border-2 border-slate-200/95 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,102,0,0.08)] transition-all duration-300 relative overflow-hidden">
                {/* Flagship overlay badge */}
                <div className="absolute top-4 right-4 bg-[#FF6600] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white fill-white" />
                  <span>Destaque da Semana</span>
                </div>

                {/* Product Image Wrapper */}
                <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-2 mb-5 flex justify-center items-center relative group min-h-[220px]">
                  <img 
                    src={destaqueProduct.image} 
                    alt={destaqueProduct.name} 
                    referrerPolicy="no-referrer"
                    className="max-h-[220px] max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    id="hero-destaque-img"
                  />
                </div>

                {/* Product Info */}
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6600]">{destaqueProduct.brand}</span>
                  <span className="text-slate-300 font-mono text-xs">•</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />
                    <span className="text-xs text-slate-800 font-bold font-sans">{destaqueProduct.rating}.0</span>
                    <span className="text-slate-400 text-[11px] font-bold">({destaqueProduct.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-slate-900 text-lg tracking-tight mb-2 leading-tight">
                  {destaqueProduct.name}
                </h3>

                <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed font-medium">
                  {destaqueProduct.desc}
                </p>

                {/* Pricing Alert section */}
                <div className="border-t border-slate-200/75 pt-3 mb-4 bg-[#FF6900]/10 border border-[#FF6900]/25 rounded-xl p-2.5 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[#FF6600] font-bold text-[11px] leading-tight">
                    <MessageSquare className="w-3.5 h-3.5 shrink-0 text-[#FF6600]" />
                    <span>Consulte o menor valor para este aparelho via WhatsApp agora mesmo!</span>
                  </div>
                </div>

                 {/* Direct Purchase Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={`/produto/${getProductSlug(destaqueProduct)}`}
                    className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold py-2 px-3 rounded-lg transition-all duration-300 uppercase tracking-wider text-center cursor-pointer flex items-center justify-center hover:text-slate-900 hover:border-slate-300 shadow-2xs"
                  >
                    Detalhes
                  </Link>
                  <button
                    onClick={() => onAddToCart(destaqueProduct)}
                    className="bg-[#FF6600] hover:bg-[#D45500] text-white text-[11px] font-bold py-2 px-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer hover:scale-[1.01]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Comprar</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section: Economia Inteligente / Os Aparelhos Mais Baratos da Loja */}
    <section className="bg-white border-b border-slate-200 py-12 lg:py-20 relative overflow-hidden">
      {/* Subtle background decoration for white page */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-[#FF6600]/3 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-amber-500/3 rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="w-full"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block mb-1">ECONOMIA INTELIGENTE</span>
              <h3 className="font-display font-black text-2xl text-zinc-900 tracking-tight">
                Os Aparelhos Mais Baratos da Loja
              </h3>
              <p className="text-xs text-zinc-600 mt-0.5 max-w-xl">
                Modelos novos, originais e lacrados com o menor preço e 6 meses de garantia local direto na loja física em Curitiba.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#FF6600] font-bold bg-[#FF6600]/10 border border-[#FF6600]/20 px-4 py-2 rounded-xl w-fit mx-auto sm:mx-0">
              <Zap className="w-3.5 h-3.5 animate-bounce" />
              <span>Super Ofertas de Entrada</span>
            </div>
          </div>

          {/* Infinite Carousel / Conveyor Belt of Products */}
          <div className="w-full relative overflow-hidden py-4 select-none">
            {/* Ambient edge shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-max relative">
              <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused] transition-all duration-300">
                {[...cheapestProducts, ...cheapestProducts, ...cheapestProducts, ...cheapestProducts].map((product, idx) => (
                  <Link
                    key={`${product.id}-${idx}`}
                    to={`/produto/${getProductSlug(product)}`}
                    className="w-64 sm:w-72 flex-shrink-0 bg-zinc-100 hover:bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#FF6600]/40 transition-all cursor-pointer group relative overflow-hidden text-left"
                  >
                    {/* Sale tag */}
                    <div className="absolute top-3 left-3 bg-[#FF6600]/10 text-[#FF6600] font-mono text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider z-10 flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-[#FF6600] text-[#FF6600]" />
                      <span>Melhor Preço</span>
                    </div>

                    {/* Image Area */}
                    <div className="bg-white rounded-xl p-1 mb-3 flex justify-center items-center h-36 relative overflow-hidden group-hover:bg-white/90 transition-colors">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow flex flex-col">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF6600]">{product.brand}</span>
                        <span className="text-zinc-300 font-mono text-xs">•</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-[#FF6600] fill-[#FF6600]" />
                          <span className="text-[10px] text-zinc-700 font-bold">{product.rating}.0</span>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-zinc-900 text-xs sm:text-sm tracking-tight mb-1 line-clamp-1 group-hover:text-[#FF6600] transition-colors">
                        {product.name}
                      </h4>

                      <p className="text-zinc-600 text-[10px] line-clamp-2 mb-3 leading-relaxed flex-grow">
                        {product.desc}
                      </p>
                    </div>

                    {/* Price and Action Section */}
                    <div className="border-t border-zinc-200 pt-3 mt-auto">
                      <div className="bg-[#FF6900]/10 border border-[#FF6900]/25 rounded-xl p-2 text-center mb-3">
                        <span className="text-[#FF6600] font-bold text-[10px] leading-tight block">
                          Consulte o menor valor para este aparelho via WhatsApp agora mesmo!
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <span
                          className="bg-white hover:bg-zinc-150 border border-zinc-200 text-zinc-700 text-[10px] font-bold py-2 px-1 rounded-lg transition-all duration-300 uppercase tracking-wider text-center cursor-pointer flex items-center justify-center"
                        >
                          Ver mais detalhes
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="bg-[#FF6600] hover:bg-[#D45500] text-white text-[10px] font-bold py-2 px-1 rounded-lg transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Comprar</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
