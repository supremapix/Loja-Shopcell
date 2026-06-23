import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Shield, Zap, Sparkles, ShoppingBag, ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO, PRODUCTS } from '../data';

interface HeroProps {
  destaqueProduct: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const MOBILE_SLIDES = [
  "https://loja.xiaomishopcell.com/img/slider-5.png",
  "https://loja.xiaomishopcell.com/img/slider-4.png",
  "https://loja.xiaomishopcell.com/img/slider-mobile-3.png"
];

// Randomized smooth transitions
const TRANSITIONS = [
  { initial: { opacity: 0, scale: 0.95, x: 50 }, animate: { opacity: 1, scale: 1, x: 0 }, exit: { opacity: 0, scale: 1.05, x: -50 } },
  { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
  { initial: { opacity: 0, rotate: -2, scale: 0.98 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: { opacity: 0, rotate: 2, scale: 1.02 } },
  { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 } }
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
    <section id="inicio" className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-200 py-10 sm:py-16 md:py-20 lg:py-24 px-4">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-[#FF6600]/4 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-[#FF6600]/3 rounded-full filter blur-[150px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* MOBILE & TABLET HERO (Slider-Only under lg viewport, no overlay text as requested) */}
        <div className="block lg:hidden w-full px-1 mb-8 max-w-[480px] mx-auto">
          {/* Animated Glowing Gradient Border Wrapper */}
          <div className="relative p-[3px] rounded-3xl bg-gradient-to-r from-[#FF6900] via-[#FFE86F] to-[#FF6900] bg-[size:200%_auto] animate-gradient-shift shadow-[0_0_25px_rgba(255,105,0,0.45)] transition-all duration-500 overflow-hidden group">
            
            {/* Tech HUD corners */}
            <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#FF6900] z-30 pointer-events-none rounded-tl-sm animate-pulse" />
            <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#FF6900] z-30 pointer-events-none rounded-tr-sm animate-pulse" />
            <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#FF6900] z-30 pointer-events-none rounded-bl-sm animate-pulse" />
            <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#FF6900] z-30 pointer-events-none rounded-br-sm animate-pulse" />

            <div className="relative w-full aspect-square bg-white rounded-[21px] overflow-hidden">
              {/* Slide Images with random transition */}
              <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center">
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

              {/* Slider Control Buttons (ChevronLeft / ChevronRight) */}
              <div className="absolute inset-0 flex justify-between items-center px-4 z-20 pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all border border-white/15 backdrop-blur-xs active:scale-95"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all border border-white/15 backdrop-blur-xs active:scale-95"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Pagination Indicators / Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/10">
                {MOBILE_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setTransitionIndex(Math.floor(Math.random() * TRANSITIONS.length));
                      setCurrentSlide(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#FF6900] w-5' : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
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
              className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-900 leading-[1.1] tracking-tight mb-6"
            >
              A Revolução <br />
              <span className="text-gradient-orange glow-orange">Xiaomi Curitiba</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Sua loja especializada premium no Centro de Curitiba. Os smartphones, tablets e fones mais potentes do mundo com <strong className="text-gray-900">6 meses de garantia local</strong> e em até <strong className="text-gray-900">12x parcelados</strong>. Venha garantir o seu!
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
                className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 text-gray-800 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
                id="hero-cta-destaque"
              >
                <span>Conhecer POCO F8 Ultra</span>
              </button>
            </motion.div>

            {/* Social Proof Badges Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">5.0</span>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-[#FF6600] fill-[#FF6600]" />
                  <span className="text-xs text-gray-500 font-medium">Google Nota Máxima</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#FF6600]">+3.500</span>
                <span className="text-xs text-gray-500 font-medium mt-1">Clientes Satisfeitos</span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900">6 Meses</span>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span className="text-xs text-gray-500 font-medium">Garantia Local Completa</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#FF6600]">12x</span>
                <div className="flex items-center gap-1 mt-1">
                  <Zap className="w-3 h-3 text-[#FF6600]" />
                  <span className="text-xs text-gray-500 font-medium">Parcelas no Cartão</span>
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

              <div className="bg-white border border-slate-200/80 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Flagship overlay badge */}
                <div className="absolute top-4 right-4 bg-[#FF6600] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_2px_10px_rgba(255,102,0,0.3)] z-20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white fill-white" />
                  <span>MÁXIMA PERFORMANCE</span>
                </div>

                {/* Product Image Wrapper */}
                <div className="bg-slate-50 rounded-2xl p-1 mb-5 flex justify-center items-center relative group min-h-[220px]">
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
                  <span className="text-gray-300 font-mono text-xs">•</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />
                    <span className="text-xs text-gray-700 font-semibold font-sans">{destaqueProduct.rating}.0</span>
                    <span className="text-gray-400 text-[11px]">({destaqueProduct.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-gray-900 text-lg tracking-tight mb-2 leading-tight">
                  {destaqueProduct.name}
                </h3>

                <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                  {destaqueProduct.desc}
                </p>

                {/* Pricing section */}
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center mb-4">
                  <div>
                    <span className="block text-[11px] text-gray-400 font-mono">À vista no Pix/Dinheiro</span>
                    <span className="text-xl font-display font-black text-gray-900">
                      {destaqueProduct.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] text-gray-400 font-mono">No cartão</span>
                    <span className="text-xs font-bold text-[#FF6600] block">{destaqueProduct.parcelas}</span>
                  </div>
                </div>

                {/* Direct Purchase Actions */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onSelectProduct(destaqueProduct)}
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-gray-700 text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-center cursor-pointer"
                  >
                    Ver detalhes
                  </button>
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

        {/* Cheapest Devices Gallery (Highly polished) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="col-span-1 lg:col-span-12 mt-12 pt-12 border-t border-slate-200/70"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block mb-1">ECONOMIA INTELIGENTE</span>
              <h3 className="font-display font-black text-2xl text-gray-900 tracking-tight">
                Os Aparelhos Mais Baratos da Loja
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 max-w-xl">
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
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max relative">
              <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused] transition-all duration-300">
                {[...cheapestProducts, ...cheapestProducts, ...cheapestProducts, ...cheapestProducts].map((product, idx) => (
                  <div
                    key={`${product.id}-${idx}`}
                    onClick={() => onSelectProduct(product)}
                    className="w-64 sm:w-72 flex-shrink-0 bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#FF6600]/40 transition-all cursor-pointer group relative overflow-hidden"
                  >
                    {/* Sale tag */}
                    <div className="absolute top-3 left-3 bg-[#FF6600]/10 text-[#FF6600] font-mono text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider z-10 flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-[#FF6600] text-[#FF6600]" />
                      <span>Melhor Preço</span>
                    </div>

                    {/* Image Area */}
                    <div className="bg-slate-50 rounded-xl p-1 mb-3 flex justify-center items-center h-36 relative overflow-hidden group-hover:bg-slate-50/70 transition-colors">
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
                        <span className="text-gray-300 font-mono text-xs">•</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-[#FF6600] fill-[#FF6600]" />
                          <span className="text-[10px] text-gray-700 font-bold">{product.rating}.0</span>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-gray-900 text-xs sm:text-sm tracking-tight mb-1 line-clamp-1 group-hover:text-[#FF6600] transition-colors">
                        {product.name}
                      </h4>

                      <p className="text-gray-500 text-[10px] line-clamp-2 mb-3 leading-relaxed flex-grow">
                        {product.desc}
                      </p>
                    </div>

                    {/* Price and Action Section */}
                    <div className="border-t border-slate-100 pt-3 mt-auto">
                      <div className="flex justify-between items-baseline mb-3">
                        <div>
                          {product.priceDe && (
                            <span className="block text-[10px] text-gray-400 line-through">
                              {product.priceDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </span>
                          )}
                          <span className="text-sm sm:text-base font-display font-black text-gray-900">
                            {product.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-[9px] text-gray-400 font-mono">No cartão</span>
                          <span className="text-[10px] font-bold text-[#FF6600]">{product.parcelas}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          className="bg-slate-50 group-hover:bg-[#FF6600]/5 border border-slate-200 group-hover:border-[#FF6600]/25 text-gray-700 group-hover:text-[#FF6600] text-[10px] font-bold py-2 px-1 rounded-lg transition-all duration-300 uppercase tracking-wider text-center"
                        >
                          Detalhes
                        </button>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
