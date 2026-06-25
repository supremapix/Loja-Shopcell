import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Star, ShieldCheck, CreditCard, ShoppingBag, MessageSquare, 
  ChevronRight, Sparkles, AlertTriangle, Truck, BadgeCheck, Check, Info 
} from 'lucide-react';

import { Product, CartItem } from '../types';
import { PRODUCTS, CONTACT_INFO, getProductBySlug, getProductSlug } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import EnhancedSEO from './EnhancedSEO';
import { safeGetItem, safeSetItem } from '../utils/storage';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Load product based on the plus-separated slug
  const product = slug ? getProductBySlug(slug) : undefined;

  // Cart operations
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = safeGetItem('mi_shopcell_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync cart with local storage
  useEffect(() => {
    safeSetItem('mi_shopcell_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Scroll to top on page load or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <AlertTriangle className="w-16 h-16 text-amber-500 mb-4 animate-bounce" />
        <h1 className="text-2xl font-display font-black text-slate-900 mb-2">Produto Não Encontrado</h1>
        <p className="text-slate-600 mb-6 text-center max-w-md">O smartphone solicitado não existe em nosso catálogo ou o endereço está incorreto.</p>
        <Link to="/" className="bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wider text-xs transition-all">
          Voltar para a Página Inicial
        </Link>
      </div>
    );
  }

  // Cart action helpers
  const handleAddToCart = (prod: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === prod.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product: prod, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // WhatsApp helper
  const getWhatsAppMessage = (prod: Product) => {
    const text = `Olá! Vi o *${prod.name}* no site por *R$ ${prod.priceAt.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}* (${prod.parcelas}) e gostaria de saber sobre a disponibilidade ou finalizar a compra! Link: ${window.location.href}`;
    return `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(text)}`;
  };

  // Recommended/Related Products (same brand, or cheapest alternatives excluding current)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => {
      if (a.brand === product.brand && b.brand !== product.brand) return -1;
      if (a.brand !== product.brand && b.brand === product.brand) return 1;
      return a.priceAt - b.priceAt;
    })
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex flex-col font-sans relative">
      <EnhancedSEO
        title={`${product.name} | Xiaomi Shop Cell Curitiba`}
        description={`Garanta seu ${product.name} na Xiaomi Shop Cell Curitiba. Novo, original, caixa lacrada com 6 meses de garantia local. Em até 12x no cartão ou desconto à vista!`}
        canonical={`https://www.celularescuritibashopcell.com.br/produto/${getProductSlug(product)}`}
      />

      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        searchQuery=""
        onSearchChange={() => {}}
        activeSection=""
        onNavClick={() => navigate('/')}
      />

      {/* Main product body */}
      <main className="flex-grow py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Go Back */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar ao catálogo</span>
            </Link>

            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              SLUG: {getProductSlug(product)}
            </span>
          </div>

          {/* Product showcase card layout */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 mb-12">
            
            {/* Left Column: Image Area */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div className="relative bg-slate-50 border border-slate-100 rounded-2xl p-6 flex justify-center items-center overflow-hidden aspect-square max-h-[460px] md:max-h-[520px] w-full">
                
                {/* Product Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                  <span className="bg-slate-900 text-[#FF6600] border border-slate-800 font-mono text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    {product.brand}
                  </span>
                  {product.badges.map((b, i) => (
                    <span
                      key={i}
                      className={`font-mono text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider ${
                        b.includes('Novo') || b.includes('Destaque') || b.includes('NOVO') || b.includes('Premium')
                          ? 'bg-[#FF6600] text-white shadow-xs'
                          : 'bg-slate-200 text-slate-700 border border-slate-300/40'
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Main Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Delivery and availability badge */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 border border-slate-200/60 p-4 rounded-2xl text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 leading-none">Pronta Entrega</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">Disponível para Curitiba e RMC</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FF6600]/10 text-[#FF6600] rounded-lg">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 leading-none">100% Original</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">Novo, lacrado na caixa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Checkout Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Brand Logo Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest bg-[#FF6600]/10 px-3 py-1 rounded-full">
                    Série {product.brand}
                  </span>
                  
                  {/* Rating block */}
                  <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/50 px-2.5 py-1 rounded-xl">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-xs text-slate-800 font-bold">{product.rating}.0</span>
                    <span className="text-[10px] text-slate-400">({product.reviewsCount} avaliações)</span>
                  </div>
                </div>

                {/* Full name heading */}
                <h1 className="font-display font-semibold text-slate-900 text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-4">
                  {product.name}
                </h1>

                {/* Short Specs description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {product.desc}
                </p>

                {/* Local Guarantees Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider font-mono">6 Meses Garantia</h5>
                      <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">Suporte local rápido e direto no Centro de Curitiba.</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider font-mono">Até 12x Sem Juros</h5>
                      <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">Diretamente em nossa máquina física com taxas imbatíveis.</p>
                    </div>
                  </div>
                </div>

                {/* Extended Details specs sheet */}
                <div className="border-t border-slate-200 pt-6 mb-6">
                  <h3 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-3 bg-[#FF6600] rounded-full" />
                    <span>Especificações Técnicas</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Fabricante</span>
                      <span className="text-slate-800 font-bold">Xiaomi Corporation</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Marca</span>
                      <span className="text-slate-800 font-bold">{product.brand} Series</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Estado</span>
                      <span className="text-[#FF6600] font-bold">Original & Lacrado</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Garantia Local</span>
                      <span className="text-slate-800 font-bold">6 Meses (Curitiba)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & Call to Actions */}
              <div className="border-t border-slate-200 pt-6 bg-slate-50 -mx-6 -mb-6 p-6 sm:-mx-10 sm:-mb-10 sm:p-10 rounded-b-3xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                  {/* Price Box */}
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">Preço Promocional Especial</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      {product.priceDe && (
                        <span className="text-sm text-slate-400 line-through font-mono">
                          {product.priceDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      )}
                      <span className="text-3xl font-display font-bold text-slate-900 leading-none">
                        {product.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#FF6600] mt-1.5 font-mono">
                      À vista no PIX/Dinheiro ou {product.parcelas}
                    </span>
                  </div>

                  {/* Share button */}
                  <button
                    onClick={handleCopyLink}
                    className="self-start sm:self-center bg-white hover:bg-slate-100 border border-slate-200/80 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 font-bold">Link copiado!</span>
                      </>
                    ) : (
                      <>
                        <Info className="w-3.5 h-3.5" />
                        <span>Compartilhar</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Primary Actions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* WhatsApp contact */}
                  <a
                    href={getWhatsAppMessage(product)}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(37,211,102,0.25)] hover:scale-[1.01]"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                    <span>Chamar Especialista</span>
                  </a>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(255,102,0,0.25)] hover:scale-[1.01]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar ao Carrinho</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Related / Recommended products section */}
          <section className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-1">RECOMENDADO</span>
                <h2 className="font-display font-black text-2xl text-slate-900 tracking-tight">Quem comprou também olhou</h2>
              </div>
              <Link to="/" className="text-xs font-bold text-[#FF6600] hover:text-[#D45500] flex items-center gap-1 font-mono uppercase tracking-wider">
                <span>Ver catálogo completo</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Product recommendations grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => {
                const url = `/produto/${getProductSlug(p)}`;
                return (
                  <motion.div
                    key={p.id}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col h-full group"
                  >
                    <Link to={url} className="relative pt-[100%] bg-white overflow-hidden flex items-center justify-center p-3 cursor-pointer">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute inset-4 max-h-[85%] max-w-[85%] object-contain m-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[9px] font-mono font-bold text-[#FF6600] uppercase tracking-wider">{p.brand}</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span className="text-[11px] text-slate-600 font-bold">{p.rating}.0</span>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 leading-snug mb-2 group-hover:text-[#FF6600] transition-colors">
                        <Link to={url}>{p.name}</Link>
                      </h4>

                      <div className="mt-auto pt-3 border-t border-slate-100 flex flex-col">
                        <span className="text-sm font-display font-black text-slate-900">
                          {p.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono mt-0.5">{p.parcelas}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <Footer />

      {/* Cart Drawer */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
