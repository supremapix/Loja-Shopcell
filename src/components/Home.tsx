import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Search, SlidersHorizontal, Sparkles, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

import { Product, CartItem } from '../types';
import { PRODUCTS, CONTACT_INFO } from '../data';

import Navbar from './Navbar';
import Hero from './Hero';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import Cart from './Cart';
import Features from './Features';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Location from './Location';
import Footer from './Footer';
import CatalogoModal from './CatalogoModal';
import Ticker from './Ticker';
import Garantia from './Garantia';
import ShareButton from './ShareButton';
import EnhancedSEO from './EnhancedSEO';

export default function Home() {
  // State definitions
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('mi_shopcell_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBrand, setActiveBrand] = useState<string>('Todos');
  const [cartOpen, setCartOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('mi_shopcell_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ['inicio', 'produtos', 'diferenciais', 'RMCEbairros', 'depoimentos', 'faq'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products based on active brand and search query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesBrand = activeBrand === 'Todos' || product.brand === activeBrand;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  // Highlighted product (POCO F8 Ultra 5G NFC)
  const destaqueProduct = PRODUCTS.find((p) => p.isHeroDestaque) || PRODUCTS[11];

  // Cart actions
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Open cart automatically when an item is added for nice UI feedback
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
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

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans relative">
      {/* Enhanced SEO with canonical link for the Home Page */}
      <EnhancedSEO
        title="Xiaomi Shop Cell Curitiba | Celulares Xiaomi, Redmi e POCO com Garantia"
        description="Sua loja especializada Xiaomi em Curitiba. Celulares originais, novos e lacrados com 6 meses de garantia local. Parcelamos em até 12x. Entrega expressa!"
        canonical="https://www.xiaomishopcell.com/"
      />

      {/* Premium Navbar Header */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* Hero Section */}
      <Hero
        destaqueProduct={destaqueProduct}
        onSelectProduct={setSelectedProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Animated Promotions & Address Ticker Letreiro */}
      <Ticker />

      {/* Main Catalog Showcase */}
      <section id="produtos" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-2.5">XIAOMI SHOWCASE</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Nossos Aparelhos de Última Geração
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Escolha o seu modelo favorito com 6 meses de garantia local na Xiaomi Shop Cell. Todos os aparelhos são originais e lacrados.
              </p>
            </div>

            {/* Quick stats / trust badging */}
            <div className="flex items-center gap-4 bg-white border border-slate-200/80 p-3.5 rounded-2xl w-fit shadow-sm mx-auto md:mx-0">
              <ShieldCheck className="w-5 h-5 text-[#FF6600]" />
              <div>
                <span className="block text-xs font-bold text-gray-900 uppercase font-mono tracking-wider">ENTREGA IMEDIATA</span>
                <span className="text-[10px] text-gray-500 leading-none">Curitiba & Região Metropolitana</span>
              </div>
            </div>
          </div>

          {/* Filters Bar & Brand Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/60">
            {/* Horizontal Scroll Brand Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none max-w-full">
              {['Todos', 'POCO', 'Redmi', 'Xiaomi', 'Tablet'].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex-shrink-0 cursor-pointer ${
                    activeBrand === brand
                      ? 'bg-[#FF6600] text-white shadow-[0_4px_12px_rgba(255,102,0,0.3)]'
                      : 'bg-white hover:bg-slate-50 border border-slate-200 text-gray-600 hover:text-gray-900'
                  }`}
                  id={`filter-tab-${brand}`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Simple Result Count */}
            <div className="flex items-center gap-2 font-mono text-xs text-gray-500 self-end sm:self-auto">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>Exibindo <strong>{filteredProducts.length}</strong> modelos</span>
            </div>
          </div>

          {/* Products Grid Showcase */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-display font-bold text-gray-900 text-lg">Nenhum smartphone encontrado</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-sm mx-auto leading-relaxed">
                Não encontramos nenhum resultado para "{searchQuery}" com o filtro "{activeBrand}". Tente buscar por outros termos!
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveBrand('Todos');
                }}
                className="bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold px-6 py-3 rounded-xl uppercase tracking-wider mt-6 transition-colors cursor-pointer"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              id="products-showcase-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={(p) => setSelectedProduct(p)}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </section>

      {/* Differentials / Features section */}
      <Features />

      {/* 6-Month Local Warranty Section */}
      <Garantia />

      {/* Reviews testimonials section */}
      <Reviews />

      {/* Location physical store & regions served map section */}
      <Location />

      {/* FAQ section */}
      <FAQ />

      {/* CTA final "Solicite o catálogo" */}
      <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-[#FF6600]/3 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FileText className="w-12 h-12 text-[#FF6600] mx-auto mb-6 glow-orange animate-pulse" />
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4 leading-tight">
            Gostaria de ver o catálogo completo em PDF?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Receba agora mesmo em seu WhatsApp nosso PDF completo com todos os smartphones, tablets, fones de ouvido e acessórios Xiaomi originais com preços promocionais.
          </p>
          <button
            onClick={() => setCatalogModalOpen(true)}
            className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(255,102,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,102,0,0.5)] cursor-pointer"
            id="footer-catalog-cta-btn"
          >
            <span>Solicitar Catálogo Completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer complete */}
      <Footer />

      {/* Product details modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping cart drawer panel */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Catalog request modal */}
      <CatalogoModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
      />

      {/* Floating Share button with dynamic expandable menu */}
      <ShareButton />

      {/* Floating WhatsApp button with pulse glow */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group hover:scale-110 active:scale-95"
        title="Falar Conosco no WhatsApp"
        id="floating-whatsapp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40 pointer-events-none" />
        <MessageSquare className="w-6.5 h-6.5 fill-white text-[#25D366] relative z-10" />
      </a>

    </div>
  );
}
