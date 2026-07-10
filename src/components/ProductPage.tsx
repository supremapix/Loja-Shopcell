import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Star, ShieldCheck, CreditCard, ShoppingBag, MessageSquare, 
  ChevronRight, Sparkles, AlertTriangle, Truck, BadgeCheck, Check, Info,
  Play, Lock, Phone
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { Product, CartItem } from '../types';
import { PRODUCTS, CONTACT_INFO, getProductBySlug, getProductSlug } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import EnhancedSEO from './EnhancedSEO';
import { safeGetItem, safeSetItem } from '../utils/storage';

export default function ProductPage() {
  let { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // If slug is empty and path matches custom url, resolve to custom slug
  if (!slug && window.location.pathname.includes('celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram')) {
    slug = 'celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram';
  }

  // Load product based on the plus-separated slug
  const product = slug ? getProductBySlug(slug) : undefined;

  // Cart operations
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = safeGetItem('mi_shopcell_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
    const phone = prod.id === 16 ? '5541988837477' : '554137989918';
    const text = `Olá! Vi o *${prod.name}* no site por *R$ ${prod.priceAt.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}* (${prod.parcelas}) e gostaria de saber sobre a disponibilidade ou finalizar a compra! Link: ${window.location.href}`;
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
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
        title={product.id === 16 ? "Xiaomi 17T Pro 5G NFC 512GB 12GB RAM em Curitiba | Shopcell" : `${product.name} | Xiaomi Shop Cell Curitiba`}
        description={product.id === 16 ? "Garanta seu Xiaomi 17T Pro 5G NFC 512GB 12GB RAM na Xiaomi Shop Cell Curitiba por R$ 5.199,99 à vista ou parcelado em até 12x de R$ 501,52 no cartão. Loja segura no Centro de Curitiba com garantia local de 6 meses. Compre com retirada imediata!" : `Garanta seu ${product.name} na Xiaomi Shop Cell Curitiba. Novo, original, caixa lacrada com 6 meses de garantia local. Em até 12x no cartão ou desconto à vista!`}
        canonical={product.id === 16 ? "https://www.xiaomishopcell.com/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram" : `https://www.celularescuritibashopcell.com.br/produto/${getProductSlug(product)}`}
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
                  onClick={() => setIsLightboxOpen(true)}
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                />

                {/* Floating "Ver Vídeo" button inside image container */}
                {product.id === 16 && (
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="absolute bottom-4 right-4 bg-black/75 hover:bg-[#FF6600] text-white rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md z-10 cursor-pointer border border-white/10 hover:scale-105"
                  >
                    <Play className="w-3.5 h-3.5 fill-white text-transparent" />
                    <span>Ver Vídeo</span>
                  </button>
                )}
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

                  {/* For Xiaomi 17T Pro, show installment table */}
                  {product.id === 16 && (
                    <div className="mt-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                      <h4 className="font-bold text-slate-900 mb-2.5 font-mono uppercase text-[10px] tracking-wider text-[#FF6600] flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4" />
                        <span>Tabela de Parcelamento (Loja Física)</span>
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px] text-slate-600">
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">1x</strong> R$ 5.402,79</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">2x</strong> R$ 2.770,47</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">3x</strong> R$ 1.862,51</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">4x</strong> R$ 1.408,59</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">5x</strong> R$ 1.136,29</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">6x</strong> R$ 954,80</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">7x</strong> R$ 825,20</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">8x</strong> R$ 728,03</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">9x</strong> R$ 652,48</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">10x</strong> R$ 592,07</div>
                        <div className="bg-white border border-slate-100 p-2 rounded-lg"><strong className="text-slate-900">11x</strong> R$ 542,67</div>
                        <div className="bg-orange-50 border border-orange-200 p-2 rounded-lg font-bold text-[#FF6600]"><span className="text-orange-800 font-bold">12x</span> R$ 501,52</div>
                      </div>
                    </div>
                  )}

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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp contact */}
                  <a
                    href={getWhatsAppMessage(product)}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wide transition-all shadow-xs hover:scale-[1.01]"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                    <span>Pedir WhatsApp</span>
                  </a>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center gap-1.5 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wide transition-all shadow-xs hover:scale-[1.01]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar ao Carrinho</span>
                  </button>
                </div>

                {/* Comprar pelo Telefone Call CTA */}
                <div className="mt-3">
                  <a
                    href={product.id === 16 ? "tel:41988837477" : "tel:4135381822"}
                    className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xs hover:scale-[1.01]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Comprar pelo Telefone {product.id === 16 ? "(41) 98883-7477" : "(41) 3538-1822"}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Custom Rich Description Section for Xiaomi 17T Pro */}
          {product.id === 16 && (
            <section className="mb-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
              <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-2.5 font-bold">EXPLORE O APARELHO</span>
                <h2 className="font-display font-black text-2xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
                  Xiaomi 17T Pro 5G: O ápice da tecnologia móvel
                </h2>
                <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                  O <strong className="text-slate-900">Xiaomi 17T Pro</strong> chega como um smartphone premium, rodando o sistema <strong className="text-slate-900">Android 16</strong> com a interface <strong className="text-slate-900">HyperOS 3.0</strong>, oferecendo desempenho extremo, recursos avançados de inteligência e uma experiência multimídia de alto nível.
                </p>
              </div>

              {/* Intercalated 7 Sections with .webp images */}
              <div className="space-y-16 sm:space-y-24">
                
                {/* 1. Desempenho */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block font-bold">PODER PROCESSAMENTO</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">1. Desempenho de última geração</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Equipado com o avançado <strong className="text-slate-900">MediaTek Dimensity 9500 Octa-Core</strong>, o Xiaomi 17T Pro entrega velocidade impressionante para jogos, edição de vídeos, inteligência artificial e multitarefas, mantendo alto desempenho com excelente eficiência energética.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-2 overflow-hidden aspect-video flex items-center justify-center shadow-xs">
                    <img
                      src="https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-1.webp"
                      alt="Xiaomi 17T Pro Desempenho"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 2. Bateria */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4 order-1 md:order-2">
                    <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block font-bold">AUTONOMIA IMPRESSIONANTE</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">2. Bateria gigante para o dia inteiro</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Com impressionantes <strong className="text-slate-900">7.000 mAh</strong> de capacidade, o Xiaomi 17T Pro oferece autonomia para enfrentar longas jornadas de trabalho, entretenimento, jogos e navegação sem preocupações.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-2 overflow-hidden aspect-video flex items-center justify-center shadow-xs order-2 md:order-1">
                    <img
                      src="https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-2.webp"
                      alt="Xiaomi 17T Pro Bateria"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 3. Carregamento */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block font-bold">VELOCIDADE MAXIMA</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">3. Carregamento ultrarrápido com e sem fio</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Recarregue sua bateria rapidamente com carregamento de até <strong className="text-slate-900">100 W via cabo</strong> e até <strong className="text-slate-900">50 W sem fio</strong>, proporcionando muito mais praticidade para a rotina.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-2 overflow-hidden aspect-video flex items-center justify-center shadow-xs">
                    <img
                      src="https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-3.webp"
                      alt="Xiaomi 17T Pro Carregamento"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 4. Câmeras Leica */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4 order-1 md:order-2">
                    <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block font-bold font-bold">FOTOGRAFIA PROFISSIONAL</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">4. Sistema Leica Summilux de 50 MP</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Capture imagens com qualidade profissional graças ao conjunto Leica Summilux composto por câmera principal de <strong className="text-slate-900">50 MP</strong>, ultra-wide de <strong className="text-slate-900">12 MP</strong> e teleobjetiva de <strong className="text-slate-900">50 MP</strong>, oferecendo excelente desempenho em qualquer situação.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-2 overflow-hidden aspect-video flex items-center justify-center shadow-xs order-2 md:order-1">
                    <img
                      src="https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-4.webp"
                      alt="Xiaomi 17T Pro Lentes Leica"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 5. Proteção */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block font-bold font-bold font-bold">RESISTENCIA E SEGURANÇA</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">5. Proteção IP68 para mais segurança</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      A certificação <strong className="text-slate-900">IP68</strong> garante resistência contra água e poeira, proporcionando maior tranquilidade para o uso diário em diferentes ambientes.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-2 overflow-hidden aspect-video flex items-center justify-center shadow-xs">
                    <img
                      src="https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-5.webp"
                      alt="Xiaomi 17T Pro IP68"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 6. Tela */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4 order-1 md:order-2">
                    <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block font-bold font-bold font-bold">TELA SURREAL</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">6. Tela AMOLED 1.5K de 144 Hz</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      A tela AMOLED de <strong className="text-slate-900">6,83"</strong> oferece resolução 1.5K, Dolby Vision, HDR10+, tecnologia Wet Touch e protection Corning Gorilla Glass 7i, garantindo excelente visualização mesmo em diferentes condições de uso.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-2 overflow-hidden aspect-video flex items-center justify-center shadow-xs order-2 md:order-1">
                    <img
                      src="https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-6.webp"
                      alt="Xiaomi 17T Pro AMOLED Tela"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 7. Conectividade */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[10px] font-mono font-bold text-[#FF6600] uppercase tracking-wider block font-bold font-bold">PRONTO PARA O FUTURO</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">7. Conectividade de última geração</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Com <strong className="text-slate-900">Wi-Fi 7, Bluetooth 6.0, NFC, GPS multissistema</strong> e suporte às redes 5G, o Xiaomi 17T Pro oferece conexões rápidas, estáveis e preparadas para o futuro.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-2 overflow-hidden aspect-video flex items-center justify-center shadow-xs">
                    <img
                      src="https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-7.webp"
                      alt="Xiaomi 17T Pro Conectividade"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </section>
          )}

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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setIsLightboxOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center justify-center pointer-events-auto"
            >
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] max-w-full object-contain rounded-xl select-none"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer transition-colors"
                aria-label="Fechar zoom"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setVideoOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-black rounded-3xl overflow-hidden w-full max-w-3xl aspect-video z-10 shadow-2xl border border-slate-800 pointer-events-auto"
            >
              <iframe
                src="https://www.youtube.com/embed/dSPOGtBxMds?autoplay=1"
                title="Xiaomi 17T Pro Video Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-[#FF6600] text-white rounded-full p-2 cursor-pointer transition-colors"
                aria-label="Fechar vídeo"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Structured Schema Markup (JSON-LD) */}
      {product.id === 16 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Celular Xiaomi 17T Pro 5G NFC 512GB 12GB RAM",
              "image": [
                "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram.jpg",
                "https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-1.webp",
                "https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-2.webp",
                "https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-3.webp",
                "https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-4.webp",
                "https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-5.webp",
                "https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-6.webp",
                "https://xiaomishopcell.com.br/images/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram-7.webp"
              ],
              "description": "O Xiaomi 17T Pro chega como um smartphone premium, rodando o sistema Android 16 com a interface HyperOS 3.0, oferecendo desempenho extremo, recursos avançados de inteligência e uma experiência multimídia de alto nível. Bateria titânica de 7.000 mAh e carregamento de 100W.",
              "sku": "1631388",
              "mpn": "1631388",
              "brand": {
                "@type": "Brand",
                "name": "Xiaomi"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.xiaomishopcell.com/celular-xiaomi-17t-pro-nfc-dual-sim-de-512gb12gb-ram",
                "priceCurrency": "BRL",
                "price": 5199.99,
                "priceValidUntil": "2027-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "MobilePhoneStore",
                  "name": "Xiaomi Shop Cell Curitiba"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "528"
              }
            })}
          </script>
        </Helmet>
      )}
    </div>
  );
}
