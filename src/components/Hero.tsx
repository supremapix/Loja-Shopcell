import { motion } from 'motion/react';
import { Star, Shield, Zap, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO, PRODUCTS } from '../data';

interface HeroProps {
  destaqueProduct: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function Hero({ destaqueProduct, onSelectProduct, onAddToCart }: HeroProps) {
  // Sort products to find the 4 cheapest devices
  const cheapestProducts = [...PRODUCTS]
    .sort((a, b) => a.priceAt - b.priceAt)
    .slice(0, 4);

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
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-200">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-[#FF6600]/4 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-[#FF6600]/3 rounded-full filter blur-[150px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
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
              <div className="absolute top-4 right-4 bg-[#FF6600] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_2px_10px_rgba(255,102,0,0.3)] z-20">
                👑 MÁXIMA PERFORMANCE
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

        {/* Cheapest Devices Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="col-span-1 lg:col-span-12 mt-12 pt-12 border-t border-slate-200/70"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block mb-1">ECONOMIA INTELIGENTE</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 tracking-tight">
                Os Aparelhos Mais Baratos da Loja
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Modelos novos, originais e lacrados com o menor preço e 6 meses de garantia local.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/60 w-fit">
              <Zap className="w-3.5 h-3.5 text-[#FF6600] animate-bounce" />
              <span>Super Ofertas de Entrada</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cheapestProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative overflow-hidden group"
              >
                {/* Sale tag */}
                <div className="absolute top-3 left-3 bg-[#FF6600]/10 text-[#FF6600] font-mono text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider z-10">
                  Melhor Preço ⭐
                </div>

                {/* Image Area */}
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="bg-slate-50 rounded-xl p-1 mb-3 flex justify-center items-center h-36 cursor-pointer relative overflow-hidden group-hover:bg-slate-50/70 transition-colors"
                >
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

                  <h4 
                    onClick={() => onSelectProduct(product)}
                    className="font-display font-bold text-gray-900 text-xs sm:text-sm tracking-tight mb-1 line-clamp-1 group-hover:text-[#FF6600] transition-colors cursor-pointer"
                  >
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
                      onClick={() => onSelectProduct(product)}
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-gray-700 text-[10px] font-bold py-2 px-1 rounded-lg transition-all duration-300 uppercase tracking-wider text-center cursor-pointer"
                    >
                      Detalhes
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-[#FF6600] hover:bg-[#D45500] text-white text-[10px] font-bold py-2 px-1 rounded-lg transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Comprar</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
