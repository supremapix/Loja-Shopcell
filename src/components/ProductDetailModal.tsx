import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShieldCheck, CreditCard, ShoppingBag, MessageSquare } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  if (!product) return null;

  const getWhatsAppMessage = (prod: Product) => {
    const text = `Olá! Gostaria de consultar o menor valor para o *${prod.name}* via WhatsApp agora mesmo!`;
    return `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black pointer-events-auto"
        />

        {/* Modal Panel content */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl relative shadow-2xl pointer-events-auto overflow-hidden max-h-[90vh] flex flex-col"
          id="product-detail-modal"
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-800 hover:bg-slate-100 transition-colors z-20 cursor-pointer"
            id="close-product-detail-modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal body scrollable */}
          <div className="overflow-y-auto p-6 flex-grow custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Left Column: Image wrapper */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-2 flex justify-center items-center relative overflow-hidden h-[280px] sm:h-[320px]">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Right Column: Specifications */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/20 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {product.brand}
                  </span>
                  {product.badges.map((b, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-gray-700 border border-slate-200/60 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-700 font-semibold">{product.rating}.0</span>
                  <span className="text-[10px] text-gray-400">({product.reviewsCount} avaliações)</span>
                </div>

                <h3 className="font-display font-semibold text-gray-900 text-xl sm:text-2xl leading-tight">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {product.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
                    <div>
                      <span className="block text-[10px] font-bold text-gray-900 uppercase tracking-wider font-mono">12 Meses</span>
                      <span className="text-[9px] text-gray-400 leading-none block">Garantia Local</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
                    <CreditCard className="w-4 h-4 text-[#FF6600]" />
                    <div>
                      <span className="block text-[10px] font-bold text-gray-900 uppercase tracking-wider font-mono">Até 12x</span>
                      <span className="text-[9px] text-gray-400 leading-none block">No Cartão</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <h4 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-full" />
                <span>Especificações Detalhadas</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-gray-500 font-medium">Categoria</span>
                  <span className="text-gray-800 font-bold">{product.brand}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-gray-500 font-medium">Estado do Produto</span>
                  <span className="text-[#FF6600] font-bold">Novo na Caixa (Lacrada)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-gray-500 font-medium">Garantia</span>
                  <span className="text-gray-800 font-bold">12 Meses Direto na Loja</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-gray-500 font-medium">Suporte Técnico</span>
                  <span className="text-gray-800 font-bold">Incluso (Curitiba Centro)</span>
                </div>
              </div>
            </div>

          </div>

          <div className="p-6 border-t border-slate-150 bg-slate-50/75 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            <div className="sm:col-span-7 bg-[#FF6900]/10 border border-[#FF6900]/30 rounded-2xl p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[#FF6600] font-bold text-xs">
                <MessageSquare className="w-4 h-4 shrink-0 text-[#FF6600]" />
                <span>Consulte o menor valor para este aparelho via WhatsApp agora mesmo!</span>
              </div>
            </div>

            <div className="sm:col-span-6 grid grid-cols-2 gap-2">
              <a
                href={getWhatsAppMessage(product)}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-[11px] font-bold py-2 px-2.5 rounded-lg uppercase tracking-wide transition-all duration-300 text-center cursor-pointer"
                id={`modal-whatsapp-${product.id}`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex items-center justify-center gap-1 bg-[#FF6600] hover:bg-[#D45500] text-white text-[11px] font-bold py-2 px-2.5 rounded-lg uppercase tracking-wide transition-all duration-300 shadow-xs cursor-pointer"
                id={`modal-cart-${product.id}`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Comprar</span>
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
