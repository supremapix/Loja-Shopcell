import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Shield, Zap, Sparkles, ShoppingBag, ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
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

  const handleNextSlide = () => {
    setTransitionIndex(Math.floor(Math.random() * TRANSITIONS.length));
    setCurrentSlide((prev) => (prev + 1) % MOBILE_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setTransitionIndex(Math.floor(Math.random() * TRANSITIONS.length));
    setCurrentSlide((prev) => (prev - 1 + MOBILE_SLIDES.length) % MOBILE_SLIDES.length);
  };

  // Promotional items for fast mobile ticker linking directly to detailed pages with plus-separated slugs
  const promoItems = [
    { name: "POCO C85 NFC por R$ 999,99!", product: PRODUCTS.find(p => p.id === 2) },
    { name: "POCO M7 NFC por R$ 1.099,99!", product: PRODUCTS.find(p => p.id === 3) },
    { name: "Redmi 15 256GB por R$ 1.199,00!", product: PRODUCTS.find(p => p.id === 4) },
    { name: "Redmi Note 14 5G por R$ 1.349,99!", product: PRODUCTS.find(p => p.id === 6) },
    { name: "POCO X8 Pro 5G por R$ 2.249,99!", product: PRODUCTS.find(p => p.id === 7) },
    { name: "POCO F8 Ultra 16GB por R$ 5.199,99!", product: PRODUCTS.find(p => p.id === 12) },
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
    <>
      <section id="inicio" className="relative flex flex-col items-center justify-center overflow-hidden bg-black border-b border-slate-900 lg:border-b-0 pt-0 pb-0 sm:pb-0 lg:py-24 px-0 lg:px-4">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-[#FF6600]/8 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-[#FF6600]/6 rounded-full filter blur-[150px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* MOBILE & TABLET HERO (Slider-Only under lg viewport, edge-to-edge, colada na header) */}
        <div className="block lg:hidden w-full">
          <div className="relative w-full aspect-square bg-black overflow-hidden shadow-xs border-b border-slate-900">
            {/* Slide Images with random transition */}
            <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={MOBILE_SLIDES[currentSlide]}
                  alt="Xiaomi Banner"
                  referrerPolicy="no-referrer"
                  variants={TRANSITIONS[transitionIndex]}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  className="w-full h-full object-contain select-none"
                />
              </AnimatePresence>
            </div>

            {/* Progressive Filling Slide Indicator Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 w-[80%] max-w-[320px]">
              {MOBILE_SLIDES.map((_, index) => (
                <div key={index} className="h-1 flex-grow bg-white/20 rounded-full overflow-hidden backdrop-blur-xs">
                  {currentSlide === index ? (
                    <motion.div
                      key={`progress-bar-${index}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-[#FF6600] to-amber-400 shadow-[0_0_8px_#FF6600]"
                    />
                  ) : (
                    <div 
                      className={`h-full w-full ${index < currentSlide ? "bg-[#FF6600]" : "bg-transparent"}`} 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAST TICKER BELOW MOBILE SLIDER (Opposite direction, links to promo phones) */}
        <div className="block lg:hidden w-full bg-amber-500 text-slate-950 border-y border-amber-600/30 py-3 relative overflow-hidden select-none z-20 mb-0">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-500 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-500 to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max relative">
            <div className="flex gap-8 sm:gap-12 animate-marquee-reverse-fast hover:[animation-play-state:paused] transition-all duration-300">
              {duplicatedPromoItems.map((item, idx) => {
                const url = item.product ? `/produto/${getProductSlug(item.product)}` : '#';
                return (
                  <Link
                    key={idx}
                    to={url}
                    className="flex items-center gap-2 flex-shrink-0 text-xs sm:text-sm font-sans font-extrabold tracking-wide text-slate-950 hover:text-slate-800 transition-colors cursor-pointer uppercase"
                  >
                    <span className="inline-flex items-center justify-center px-1.5 py-0.5 bg-slate-950 text-amber-400 rounded-md text-[10px] font-mono font-bold mr-1 animate-pulse">PROMO</span>
                    <span>{item.name}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

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
              <span>Revendedor Xiaomi Premium Curitiba</span>
            </motion.div>

            {/* Headline with split-text layout */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              A Revolução <br />
              <span className="text-gradient-orange glow-orange">Xiaomi Curitiba</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Sua loja especializada premium no Centro de Curitiba. Os smartphones, tablets e fones mais potentes do mundo com <strong className="text-white">6 meses de garantia local</strong> e em até <strong className="text-white">12x parcelados</strong>. Venha garantir o seu!
            </motion.p>

            {/* Call-to-action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a 
                href="#produtos" 
                className="group flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(255,102,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,102,0,0.5)]"
                id="hero-cta-catalog"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => onSelectProduct(destaqueProduct)}
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
                id="hero-cta-destaque"
              >
                <span>Conhecer POCO F8 Ultra</span>
              </button>
            </motion.div>

            {/* Social Proof Badges Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-850"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">5.0</span>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-[#FF6600] fill-[#FF6600]" />
                  <span className="text-xs text-slate-400 font-medium">Google Nota Máxima</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#FF6600]">+3.500</span>
                <span className="text-xs text-slate-400 font-medium mt-1">Clientes Satisfeitos</span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">6 Meses</span>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span className="text-xs text-slate-400 font-medium">Garantia Local Completa</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#FF6600]">12x</span>
                <div className="flex items-center gap-1 mt-1">
                  <Zap className="w-3 h-3 text-[#FF6600]" />
                  <span className="text-xs text-slate-400 font-medium">Parcelas no Cartão</span>
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
              <div className="absolute inset-0 bg-[#FF6600]/10 rounded-3xl filter blur-[30px] -z-10" />

              <div className="bg-zinc-950 border border-zinc-800/80 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden backdrop-blur-md">
                {/* Flagship overlay badge */}
                <div className="absolute top-4 right-4 bg-[#FF6600] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_2px_10px_rgba(255,102,0,0.3)] z-20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white fill-white" />
                  <span>MÁXIMA PERFORMANCE</span>
                </div>

                {/* Product Image Wrapper */}
                <div className="bg-zinc-900/60 rounded-2xl p-1 mb-5 flex justify-center items-center relative group min-h-[220px]">
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
                  <span className="text-zinc-700 font-mono text-xs">•</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />
                    <span className="text-xs text-zinc-200 font-semibold font-sans">{destaqueProduct.rating}.0</span>
                    <span className="text-zinc-500 text-[11px]">({destaqueProduct.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-white text-lg tracking-tight mb-2 leading-tight">
                  {destaqueProduct.name}
                </h3>

                <p className="text-zinc-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                  {destaqueProduct.desc}
                </p>

                {/* Pricing section */}
                <div className="border-t border-zinc-800 pt-4 flex justify-between items-center mb-4">
                  <div>
                    <span className="block text-[11px] text-zinc-500 font-mono">À vista no Pix/Dinheiro</span>
                    <span className="text-xl font-display font-black text-white">
                      {destaqueProduct.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] text-zinc-500 font-mono">No cartão</span>
                    <span className="text-xs font-bold text-[#FF6600] block">{destaqueProduct.parcelas}</span>
                  </div>
                </div>

                {/* Direct Purchase Actions */}
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    to={`/produto/${getProductSlug(destaqueProduct)}`}
                    className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-200 text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-center cursor-pointer flex items-center justify-center hover:text-white"
                  >
                    Ver mais detalhes
                  </Link>
                  <button
                    onClick={() => onAddToCart(destaqueProduct)}
                    className="bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(255,102,0,0.2)] hover:shadow-[0_4px_20px_rgba(255,102,0,0.4)] uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
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
                      <div className="flex justify-between items-baseline mb-3">
                        <div>
                          {product.priceDe && (
                            <span className="block text-[10px] text-zinc-400 line-through">
                              {product.priceDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </span>
                          )}
                          <span className="text-sm sm:text-base font-display font-black text-zinc-900">
                            {product.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-[9px] text-zinc-400 font-mono">No cartão</span>
                          <span className="text-[10px] font-bold text-[#FF6600]">{product.parcelas}</span>
                        </div>
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
    </>
  );
}
