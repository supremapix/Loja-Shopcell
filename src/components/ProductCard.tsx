import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingBag, Info, MessageSquare } from 'lucide-react';
import { Product } from '../types';
import { getProductSlug } from '../data';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onSelect, onAddToCart }: ProductCardProps) {
  // Generate WhatsApp text for single product query
  const getWhatsAppMessage = (prod: Product) => {
    const text = `Olá! Vi o *${prod.name}* no site por *R$ ${prod.priceAt.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}* (${prod.parcelas}) e gostaria de saber sobre a disponibilidade ou finalizar a compra! Link: ${prod.link}`;
    return `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(text)}`;
  };

  const productUrl = `/produto/${getProductSlug(product)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-zinc-100 hover:bg-zinc-50 border border-zinc-200/85 rounded-2xl overflow-hidden hover:border-[#FF6600]/60 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-lg group relative text-left"
    >
      {/* Product Image and badges */}
      <div className="relative pt-[100%] bg-white overflow-hidden flex items-center justify-center p-1">
        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-zinc-900 text-[#FF6600] border border-zinc-800 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            {product.brand}
          </span>
          {product.badges.map((b, i) => (
            <span
              key={i}
              className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                b.includes('Novo') || b.includes('Destaque') || b.includes('NOVO') || b.includes('Premium')
                  ? 'bg-[#FF6600] text-white shadow-xs'
                  : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
              }`}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Product Image Link */}
        <Link to={productUrl} className="absolute inset-0 flex items-center justify-center p-3 cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            id={`product-img-${product.id}`}
          />
        </Link>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Brand & Ratings Row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-mono text-[#FF6600] uppercase font-bold tracking-widest">{product.brand}</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />
            <span className="text-xs text-zinc-700 font-semibold">{product.rating}.0</span>
            <span className="text-[10px] text-zinc-500 font-medium">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-zinc-900 text-sm sm:text-base leading-snug line-clamp-2 mb-1.5 group-hover:text-[#FF6600] transition-colors duration-200">
          <Link to={productUrl} className="hover:text-[#FF6600]">
            {product.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-zinc-600 text-xs line-clamp-2 mb-4 leading-relaxed flex-grow">
          {product.desc}
        </p>

        {/* Pricing */}
        <div className="border-t border-zinc-200 pt-3 mt-auto flex flex-col mb-4">
          <div className="flex items-baseline gap-2">
            {product.priceDe && (
              <span className="text-[11px] text-zinc-400 line-through">
                {product.priceDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            )}
            <span className="text-base font-display font-black text-zinc-900">
              {product.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-wider font-bold">À vista no PIX</span>
            <span className="text-xs font-bold text-[#FF6600] font-mono">{product.parcelas}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {/* View Details Link */}
          <Link
            to={productUrl}
            className="flex items-center justify-center gap-1.5 bg-white hover:bg-zinc-200/60 border border-zinc-200 text-zinc-700 text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-300 uppercase tracking-wider cursor-pointer hover:text-zinc-900"
            aria-label="Ver detalhes do produto"
            id={`view-details-${product.id}`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Ver mais detalhes</span>
          </Link>

          {/* Add to Cart triggers adding */}
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1.5 bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-300 shadow-[0_3px_10px_rgba(255,102,0,0.15)] hover:shadow-[0_4px_15px_rgba(255,102,0,0.3)] uppercase tracking-wider cursor-pointer"
            aria-label="Adicionar produto ao carrinho"
            id={`add-to-cart-${product.id}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Comprar</span>
          </button>
        </div>

        {/* Direct WhatsApp Quote Link */}
        <a
          href={getWhatsAppMessage(product)}
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center justify-center gap-1.5 text-center text-[10px] text-zinc-500 hover:text-[#FF6600] font-mono uppercase tracking-wider mt-3 transition-colors"
          id={`direct-whatsapp-${product.id}`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chamar vendedor direto</span>
        </a>
      </div>
    </motion.div>
  );
}
