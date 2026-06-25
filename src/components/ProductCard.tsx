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
      className="bg-white border-2 border-slate-200/80 rounded-3xl overflow-hidden hover:border-[#FF6900]/70 transition-all duration-300 flex flex-col h-full shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_25px_rgba(255,105,0,0.06)] group relative text-left"
    >
      {/* Product Image and badges */}
      <div className="relative pt-[100%] bg-white overflow-hidden flex items-center justify-center p-1">
        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-[#FF6900]/10 text-[#FF6900] border border-[#FF6900]/20 font-sans text-[9px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
            {product.brand}
          </span>
          {product.badges.map((b, i) => (
            <span
              key={i}
              className={`font-sans text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                b.includes('Novo') || b.includes('Destaque') || b.includes('NOVO') || b.includes('Premium')
                  ? 'bg-[#FF6900] text-white shadow-2xs'
                  : 'bg-slate-900 text-white'
              }`}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Product Image Link */}
        <Link to={productUrl} className="absolute inset-0 flex items-center justify-center p-1.5 cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full p-1.5 object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            id={`product-img-${product.id}`}
          />
        </Link>
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Brand & Ratings Row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-mono text-[#FF6900] uppercase font-bold tracking-widest">{product.brand}</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3.5 h-3.5 text-[#FF6900] fill-[#FF6900]" />
            <span className="text-xs text-slate-800 font-bold">{product.rating}.0</span>
            <span className="text-[10px] text-slate-400 font-bold">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-slate-900 text-[15px] sm:text-[16px] leading-snug line-clamp-2 mb-2 group-hover:text-[#FF6900] transition-colors duration-200">
          <Link to={productUrl} className="hover:text-[#FF6900]">
            {product.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed font-medium flex-grow">
          {product.desc}
        </p>

        {/* Pricing */}
        <div className="border-t border-slate-100 pt-3.5 mt-auto flex flex-col mb-4.5">
          <div className="flex items-baseline gap-2">
            {product.priceDe && (
              <span className="text-[11px] text-slate-400 line-through font-bold">
                {product.priceDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            )}
            <span className="text-lg font-display font-bold text-slate-950">
              {product.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-bold">À vista no Pix</span>
            <span className="text-xs font-bold text-[#FF6900]">{product.parcelas}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {/* View Details Link */}
          <Link
            to={productUrl}
            className="flex items-center justify-center gap-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[10.5px] sm:text-[11px] font-bold py-2 px-1.5 rounded-lg transition-all duration-300 uppercase tracking-wider cursor-pointer hover:text-slate-900 hover:border-slate-300 shadow-2xs"
            aria-label="Ver detalhes do produto"
            id={`view-details-${product.id}`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Detalhes</span>
          </Link>

          {/* Add to Cart triggers adding */}
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1 bg-[#FF6900] hover:bg-[#D45500] text-white text-[10.5px] sm:text-[11px] font-bold py-2 px-1.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md uppercase tracking-wider cursor-pointer hover:scale-[1.01]"
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
          className="flex items-center justify-center gap-1.5 text-center text-[10px] text-slate-400 hover:text-[#FF6900] font-mono uppercase font-bold tracking-wider mt-3.5 transition-colors"
          id={`direct-whatsapp-${product.id}`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Falar com Vendedor</span>
        </a>
      </div>
    </motion.div>
  );
}
