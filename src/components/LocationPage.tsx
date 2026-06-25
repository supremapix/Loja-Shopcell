import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { bairrosData } from '../bairrosData';
import { PRODUCTS } from '../data';
import { Product, CartItem } from '../types';
import EnhancedSEO from './EnhancedSEO';
import Navbar from './Navbar';
import Ticker from './Ticker';
import Features from './Features';
import Garantia from './Garantia';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Footer from './Footer';
import Cart from './Cart';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import CatalogoModal from './CatalogoModal';
import ShareButton from './ShareButton';
import { MapPin, MessageSquare, ChevronRight, ShieldCheck, ShoppingBag, Sparkles, Star, Check, Search, FileText, Smartphone } from 'lucide-react';
import { safeGetItem, safeSetItem } from '../utils/storage';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find the current neighborhood data
  const currentBairro = bairrosData.find(
    (b) => b.slug.toLowerCase() === slug?.toLowerCase()
  );

  // If neighborhood slug is not found in database, redirect to 404 page
  if (!currentBairro) {
    return <Navigate to="/404" replace />;
  }

  // Cart and Modal state (replicated from App.tsx for flawless full-fidelity experience)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = safeGetItem('mi_shopcell_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBrand, setActiveBrand] = useState<string>('Todos');
  const [cartOpen, setCartOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    safeSetItem('mi_shopcell_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Scroll to top on page render
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

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

  // Custom pre-loaded WhatsApp link tailored for this specific neighborhood
  const customWhatsAppLink = `https://api.whatsapp.com/send?phone=554137989918&text=Ol%C3%A1%21%20Gostaria%20de%20comprar%20um%20Xiaomi%20com%20entrega%20expressa%20para%20o%20bairro%20${encodeURIComponent(currentBairro.nome)}%20Curitiba%21`;

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans relative">
      {/* Enhanced SEO with dynamic per-page schema */}
      <EnhancedSEO
        title={currentBairro.tituloSEO}
        description={currentBairro.metaDescription}
        canonical={`https://www.xiaomishopcell.com/bairro/${currentBairro.slug}`}
        bairroName={currentBairro.nome}
        regiaoName={currentBairro.regiao}
      />

      {/* Premium Navbar Header */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection=""
        onNavClick={(id) => {
          // If nav click occurs, go to main page route with hash
          window.location.href = `/#${id}`;
        }}
      />

      {/* Customized Neighborhood Banner / Breadcrumb Header */}
      <div className="pt-28 pb-10 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Soft geometric grid in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-[#FF6600]/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-mono font-medium">
            <Link to="/" className="hover:text-[#FF6600] transition-colors">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-500">Bairros Atendidos</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#FF6600] font-bold">{currentBairro.nome}</span>
          </nav>

          {/* Headline & Badging */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-1.5 bg-[#FF6600]/15 border border-[#FF6600]/25 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
                <span className="text-[10px] font-bold text-[#FF6600] uppercase tracking-wider font-mono">
                  Curitiba - Região {currentBairro.regiao}
                </span>
              </div>

              <h1 className="font-display font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
                Xiaomi no <span className="text-[#FF6600]">{currentBairro.nome}</span> Curitiba
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {currentBairro.introducao}
              </p>

              {/* Geo-reference context block */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex gap-3 text-xs text-slate-400 max-w-2xl backdrop-blur-xs">
                <MapPin className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-200 uppercase font-mono tracking-wider text-[10px]">Contexto Local & Direções</p>
                  <p className="mt-1 leading-relaxed">{currentBairro.coordenadasContexto}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={customWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-101"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#FF6600]" />
                  <span>Pedir Entrega no {currentBairro.nome}</span>
                </a>
                
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Ver Celulares Pronta Entrega</span>
                </a>
              </div>
            </div>

            {/* Side highlights */}
            <div className="lg:col-span-4 bg-slate-900/50 border border-slate-850 p-6 rounded-3xl space-y-4 shadow-xl backdrop-blur-xs">
              <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Diferenciais do Serviço</span>
                <span className="text-xs text-[#FF6600] font-bold font-mono">★★★★★</span>
              </div>
              
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Pague na Chegada:</strong> Pagamento seguro apenas após a chegada do motoboy, teste e aprovação do seu Xiaomi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garantia Shopcell:</strong> Garantia completa de 6 meses direto conosco na nossa loja física.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Brinde Especial:</strong> Seu aparelho já sai com película de vidro aplicada e capinha de brinde!</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Segurança Máxima:</strong> Caixa lacrada aberta e ativada na sua frente pelo nosso motoboy.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Promos Ticker */}
      <Ticker />

      {/* Products Showcase directly styled with dynamic neighborhood mentions */}
      <section id="produtos" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-2.5">ENTREGA NO {currentBairro.nome.toUpperCase()}</span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Modelos Disponíveis para o {currentBairro.nome}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                Todos os aparelhos originais abaixo podem ser entregues hoje no bairro {currentBairro.nome} ou retirados com segurança no Centro.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white border border-slate-200/80 p-3.5 rounded-2xl w-fit shadow-sm mx-auto md:mx-0">
              <ShieldCheck className="w-5 h-5 text-[#FF6600]" />
              <div>
                <span className="block text-xs font-bold text-gray-900 uppercase font-mono tracking-wider">ENTREGA EXPRESSA</span>
                <span className="block text-[10px] text-gray-400 font-mono mt-0.5">Segura via Motoboy</span>
              </div>
            </div>
          </div>

          {/* Search and Brand Filters */}
          <div className="bg-white border border-slate-200 p-5 rounded-3xl shadow-xs mb-10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              
              {/* Search Bar */}
              <div className="w-full md:flex-1 relative">
                <input
                  type="text"
                  placeholder={`Pesquisar modelo de celular para receber no ${currentBairro.nome}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 px-4 py-3 pl-10 rounded-2xl text-xs sm:text-sm focus:outline-hidden focus:border-[#FF6600] transition-colors"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Quick Catalogue Action */}
              <button
                onClick={() => setCatalogModalOpen(true)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Catálogo Completo (PDF)</span>
                </span>
              </button>
            </div>

            {/* Brand Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs text-gray-400 font-mono font-bold uppercase tracking-wider mr-2">Filtrar:</span>
              {['Todos', 'Xiaomi', 'POCO', 'Redmi', 'Tablet'].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                    activeBrand === brand
                      ? 'bg-[#FF6600] text-white shadow-xs'
                      : 'bg-slate-50 text-gray-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 p-12 rounded-3xl text-center">
              <Smartphone className="w-8 h-8 text-slate-400 mx-auto mb-4" />
              <h3 className="font-display font-bold text-gray-900 text-lg mt-4">Nenhum aparelho encontrado</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                Não encontramos smartphones correspondentes à pesquisa. Chame nossos vendedores no WhatsApp para conferir todo o nosso estoque de reposição!
              </p>
              <a
                href={customWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl mt-4 transition-colors"
              >
                <span>Consultar Vendedores</span>
              </a>
            </div>
          )}

        </div>
      </section>

      {/* Differentials / Features */}
      <Features />

      {/* Warranty details */}
      <Garantia />

      {/* Google reviews */}
      <Reviews />

      {/* FAQ block */}
      <FAQ />

      {/* Footer component */}
      <Footer />

      {/* Overlay Slide-out Cart */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Dynamic Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* PDF Catalog Modal */}
      <CatalogoModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
      />

      {/* Floating share options */}
      <ShareButton />

      {/* Floating WhatsApp button */}
      <a
        href={customWhatsAppLink}
        target="_blank"
        rel="noreferrer"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.15)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 group relative cursor-pointer"
        title="Enviar WhatsApp"
        id="btn-whatsapp-floating-bairro"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping opacity-25 group-hover:opacity-40 pointer-events-none" />
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-white text-emerald-500 relative z-10"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.628 3.978 14.157 2.95 11.53 2.95c-5.44 0-9.866 4.372-9.87 9.802 0 1.706.463 3.375 1.34 4.848l-.997 3.642 3.754-.975zm13.111-7.14c-.29-.145-1.71-.845-1.975-.94-.266-.1-.46-.145-.654.145-.194.29-.752.94-.922 1.137-.17.194-.34.218-.63.073-.29-.145-1.226-.453-2.335-1.443-.863-.77-1.446-1.72-1.616-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.34.435-.509.145-.17.194-.29.29-.485.097-.194.048-.364-.024-.509-.073-.145-.654-1.577-.896-2.16-.236-.57-.478-.492-.654-.501-.17-.009-.364-.01-.558-.01-.194 0-.509.073-.776.364-.267.29-1.02 1.02-1.02 2.475 0 1.457 1.043 2.864 1.189 3.058.145.194 2.055 3.184 4.978 4.458.696.303 1.238.484 1.662.618.7.223 1.337.192 1.841.116.562-.085 1.71-.699 1.953-1.376.242-.677.242-1.26.17-1.376-.073-.116-.267-.194-.557-.34z" />
        </svg>
      </a>
    </div>
  );
}
