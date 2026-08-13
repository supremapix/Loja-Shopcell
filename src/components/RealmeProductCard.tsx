import { Link } from 'react-router-dom';
import { MessageSquare, ShieldCheck, ArrowRight, Battery, Cpu, Smartphone, ShoppingCart } from 'lucide-react';
import { RealmeProduct } from '../realmeData';
import { useCart } from '../context/CartContext';

interface RealmeProductCardProps {
  product: RealmeProduct;
}

export default function RealmeProductCard({ product }: RealmeProductCardProps) {
  const { addToCart } = useCart();
  const whatsappUrl = `https://wa.me/554137989918?text=${encodeURIComponent(`Olá! Tenho interesse no ${product.name}`)}`;

  return (
    <article 
      className="bg-white rounded-3xl border-2 border-slate-200/90 hover:border-[#FF6600] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
      id={`card-celular-${product.slug}`}
    >
      {/* Product Image and Badges - Pure Solid White Background */}
      <div className="p-6 sm:p-8 bg-white flex flex-col items-center relative border-b border-slate-100">
        <div className="w-full flex justify-between items-center mb-4 gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/25 font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-mono uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
            12 Meses Garantia
          </span>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            {product.color}
          </span>
        </div>

        <Link 
          to={`/celular/${product.slug}`}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
          className="relative w-full aspect-square max-w-[280px] bg-white flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300"
          aria-label={`Ver detalhes do ${product.name}`}
        >
          <img 
            src={product.image} 
            alt={product.altText}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </Link>
      </div>

      {/* Product Information Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider font-mono">
              Realme Oficial Anatel
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-display font-black text-slate-900 leading-snug mb-3 hover:text-[#FF6600] transition-colors">
            <Link 
              to={`/celular/${product.slug}`}
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            >
              {product.name}
            </Link>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            {product.shortDescription}
          </p>

          {/* Key spec pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
              <Smartphone className="w-4 h-4 text-[#FF6600] shrink-0" />
              <span className="truncate">{product.specs.tela}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
              <Battery className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{product.specs.bateria}</span>
            </div>
          </div>
        </div>

        {/* Pricing Block */}
        <div className="pt-4 border-t border-slate-100">
          <div className="mb-4">
            <span className="block text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
              Preço à vista no Pix / Dinheiro:
            </span>
            <div className="text-3xl sm:text-4xl font-display font-black text-emerald-700 leading-none mt-1">
              {product.priceFormatted}
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-700 mt-1.5 flex items-center gap-1.5">
              <span>ou em até</span>
              <span className="bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-md font-extrabold border border-amber-200">
                {product.installments}
              </span>
            </div>
          </div>

          {/* Action Buttons (Large Touch Targets >= 56px) */}
          <div className="space-y-2.5">
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full min-h-[52px] bg-[#FF6600] hover:bg-[#E65C00] active:scale-[0.99] text-white text-sm sm:text-base font-black uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 px-4 text-center cursor-pointer border border-[#E65C00]"
              id={`btn-cart-${product.slug}`}
            >
              <ShoppingCart className="w-5 h-5 shrink-0" />
              <span>Incluir no Carrinho</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.99] text-white text-xs sm:text-sm font-black uppercase tracking-wide rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 px-2 text-center cursor-pointer border border-[#1EBE5D]"
                aria-label={`Comprar ${product.name} no WhatsApp`}
                id={`btn-whatsapp-${product.slug}`}
              >
                <MessageSquare className="w-4 h-4 shrink-0 fill-current" />
                <span>WhatsApp</span>
              </a>

              <Link
                to={`/celular/${product.slug}`}
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
                className="w-full min-h-[48px] bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 px-2 text-center cursor-pointer shadow-xs"
                id={`btn-detalhes-${product.slug}`}
              >
                <span>Ficha Técnica</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF6600]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
