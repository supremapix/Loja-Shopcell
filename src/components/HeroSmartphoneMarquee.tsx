import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, ArrowRight, Smartphone, Sparkles, MessageSquare, Star, ShoppingCart } from 'lucide-react';
import { REALME_PRODUCTS } from '../realmeData';
import { CONTACT_INFO } from '../data';
import { useCart } from '../context/CartContext';

export default function HeroSmartphoneMarquee() {
  const { addToCart } = useCart();
  // Triple the list to ensure a completely seamless continuous infinite marquee loop
  const marqueeProducts = [...REALME_PRODUCTS, ...REALME_PRODUCTS, ...REALME_PRODUCTS];

  const handleProductClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <section 
      aria-label="Esteira de Ofertas de Celulares Realme em Destaque"
      className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-8 sm:py-10 relative overflow-hidden border-b border-slate-800"
    >
      {/* Glow background ambiance */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar above the marquee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-10">
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 bg-[#FF6600] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm animate-pulse">
            <Zap className="w-3.5 h-3.5 fill-current" />
            OFERTAS EM DESTAQUE
          </span>
          <h2 className="text-base sm:text-lg lg:text-xl font-display font-black text-white tracking-tight">
            SMARTPHONES REALME COM 12 MESES DE GARANTIA
          </h2>
        </div>

        <Link
          to="/celulares"
          onClick={handleProductClick}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-[#FF6600] transition-colors group"
        >
          <span>Ver catálogo completo ({REALME_PRODUCTS.length} modelos)</span>
          <ArrowRight className="w-4 h-4 text-[#FF6600] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Edge gradient fade masks for smooth marquee appearance */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

      {/* Moving Marquee Belt */}
      <div className="w-full overflow-hidden select-none relative z-10">
        <div className="flex w-max">
          <div className="flex gap-4 sm:gap-6 animate-marquee-products hover:[animation-play-state:paused] py-2 px-4 transition-all duration-300">
            {marqueeProducts.map((prod, index) => {
              const whatsappUrl = `https://wa.me/554137989918?text=${encodeURIComponent(`Olá! Vi a oferta do ${prod.name} por ${prod.priceFormatted} e gostaria de comprar.`)}`;

              return (
                <div
                  key={`${prod.slug}-${index}`}
                  className="w-[280px] sm:w-[320px] bg-slate-900/90 hover:bg-slate-850 backdrop-blur-md rounded-2xl border-2 border-slate-700/80 hover:border-[#FF6600] p-4 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-2xl hover:shadow-[#FF6600]/10 shrink-0"
                >
                  {/* Top Badges */}
                  <div className="flex justify-between items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-[#FF6600]/20 text-[#FF8533] border border-[#FF6600]/30 px-2.5 py-0.5 rounded-full font-mono uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FF6600]" />
                      12M Garantia
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                      Lacrado Anatel
                    </span>
                  </div>

                  {/* Product Image Stage - Pure White Background for Perfect Image Blending */}
                  <Link
                    to={`/celular/${prod.slug}`}
                    onClick={handleProductClick}
                    className="relative w-full h-44 bg-white rounded-xl p-3 flex items-center justify-center overflow-hidden mb-3 group-hover:scale-[1.02] transition-transform duration-300 cursor-pointer border border-slate-200/90 shadow-sm"
                    aria-label={`Ver detalhes do ${prod.name}`}
                  >
                    <img
                      src={prod.image}
                      alt={prod.altText}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      {prod.color}
                    </div>
                  </Link>

                  {/* Title & Specs */}
                  <div className="mb-3">
                    <Link
                      to={`/celular/${prod.slug}`}
                      onClick={handleProductClick}
                      className="block font-display font-black text-white text-base sm:text-lg leading-tight hover:text-[#FF6600] transition-colors line-clamp-1"
                    >
                      {prod.name}
                    </Link>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {prod.specs.tela} • {prod.specs.bateria}
                    </p>
                  </div>

                  {/* High-Impact Attention-Grabbing Price Block */}
                  <div className="bg-slate-950/90 rounded-xl p-3 border border-slate-800 mb-3">
                    <div className="flex items-baseline justify-between gap-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        À vista Pix/Dinheiro:
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                        Economize
                      </span>
                    </div>

                    <div className="text-2xl sm:text-3xl font-display font-black text-emerald-400 tracking-tight leading-none my-1">
                      {prod.priceFormatted}
                    </div>

                    <div className="text-xs font-bold text-slate-300 flex items-center justify-between pt-1 border-t border-slate-800/60">
                      <span>ou até</span>
                      <span className="text-amber-400 font-extrabold bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                        {prod.installments}
                      </span>
                    </div>
                  </div>

                  {/* Call to action buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={() => addToCart(prod, 1)}
                      className="w-full bg-[#FF6600] hover:bg-[#E65C00] active:scale-[0.99] text-white text-xs font-black uppercase tracking-wider py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                      id={`marquee-cart-${prod.slug}-${index}`}
                    >
                      <ShoppingCart className="w-4 h-4 shrink-0" />
                      <span>Incluir no Carrinho</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/celular/${prod.slug}`}
                        onClick={handleProductClick}
                        className="bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold py-2 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 text-center border border-slate-700"
                      >
                        <span>Ficha Técnica</span>
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] font-black uppercase py-2 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 text-center shadow-xs"
                        aria-label={`Comprar ${prod.name} no WhatsApp`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom ticker footer banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-medium text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-4 h-4 text-[#FF6600]" />
          <span>Passe o mouse ou toque para pausar a esteira de ofertas</span>
        </div>
        <div className="flex items-center gap-4 mx-auto sm:mx-0 text-slate-300 font-semibold">
          <span>🛵 Motoboy no mesmo dia em Curitiba</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">💳 Pague somente na entrega</span>
        </div>
      </div>
    </section>
  );
}
