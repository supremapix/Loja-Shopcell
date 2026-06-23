import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Phone, MessageSquare, Search, MapPin, Star, CreditCard, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  activeSection,
  onNavClick
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início', seniorLabel: '🏠 Ir para o Início' },
    { id: 'produtos', label: 'Produtos', seniorLabel: '📱 Ver Celulares e Preços' },
    { id: 'RMCEbairros', label: 'Cidades & Bairros', seniorLabel: '🗺️ Onde fica a Loja Física?' },
    { id: 'quem-somos', label: 'Quem Somos', seniorLabel: '🤝 Conhecer a Nossa Loja' },
    { id: 'faq', label: 'Dúvidas / FAQ', seniorLabel: '❓ Tirar Dúvidas Frequentes' },
  ];

  const topbarItems = [
    {
      icon: <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />,
      text: "Próximo ao Shopping Estação e Rodoferroviária – R. Conselheiro Laurindo, 809, Sala 402",
      actionText: "Ver Mapa 📍",
      link: CONTACT_INFO.mapsLink
    },
    {
      icon: <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />,
      text: "Avaliação 5.0 Google – +3.500 clientes satisfeitos em Curitiba!",
      actionText: "Avaliações ⭐",
      link: CONTACT_INFO.mapsLink
    },
    {
      icon: <CreditCard className="w-3.5 h-3.5 text-[#FF6600]" />,
      text: "Facilidade de Pagamento: Parcele em até 12x no cartão diretamente na loja física!",
      actionText: "Ver Parcelas 💳",
      link: CONTACT_INFO.whatsappLink
    },
    {
      icon: <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-transparent" />,
      text: "Atendimento Rápido via WhatsApp – Tire suas dúvidas ou solicite entrega expressa!",
      actionText: "Falar Conosco 💬",
      link: CONTACT_INFO.whatsappLink
    }
  ];

  const duplicatedTopbarItems = [...topbarItems, ...topbarItems];

  return (
    <>
      {/* Top Bar Ticker */}
      <div 
        id="topbar" 
        className="w-full bg-slate-900 text-white border-b border-slate-800 py-2.5 relative overflow-hidden select-none z-50"
      >
        {/* Decorative gradient shadows at the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        {/* Ticker Content Wrapper */}
        <div className="flex w-max relative">
          <div className="flex gap-12 sm:gap-20 animate-marquee-reverse hover:[animation-play-state:paused] transition-all duration-300">
            {duplicatedTopbarItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 text-xs font-sans font-medium tracking-wide"
              >
                <div className="flex items-center justify-center p-1 bg-white/5 rounded-md">
                  {item.icon}
                </div>
                <span className="text-gray-200">{item.text}</span>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1 bg-[#FF6600] hover:bg-[#D45500] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md transition-colors shadow-xs ml-1 cursor-pointer"
                >
                  <span>{item.actionText}</span>
                  <span className="text-[9px]">➔</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? 'bg-white/95 shadow-lg border-b border-slate-200 backdrop-blur-md py-3'
            : 'bg-white/85 border-b border-slate-100 py-4.5 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              onNavClick('inicio');
            }}
            className="flex items-center gap-3 group select-none"
            id="brand-logo"
          >
            {/* MI icon box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-[0_4px_12px_rgba(255,102,0,0.25)] group-hover:scale-105 group-hover:shadow-[0_4px_20px_rgba(255,102,0,0.5)] transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 font-display">MI</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="font-display font-black tracking-wider text-gray-900 text-lg leading-none group-hover:text-[#FF6600] transition-colors duration-200">
                MI SHOP CELL
              </span>
              <span className="font-mono text-[9px] text-[#FF6600] tracking-widest font-semibold mt-0.5">
                CURITIBA · PR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                }}
                className={`relative font-semibold text-sm tracking-wide transition-colors duration-200 py-1 ${
                  activeSection === item.id ? 'text-[#FF6600]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6600]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Comparison Link */}
            <Link
              to="/comparar"
              className="bg-amber-500/15 hover:bg-amber-500 text-amber-600 hover:text-white border border-amber-500/30 hover:border-transparent px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 shadow-xs uppercase tracking-wider"
              id="compare-nav-link"
            >
              <span>🔄</span>
              <span>Compare Modelos</span>
            </Link>
          </nav>

          {/* Actions Bar */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <div className="relative">
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-10 top-1/2 -translate-y-1/2"
                  >
                    <input
                      type="text"
                      placeholder="Buscar aparelho..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="bg-slate-50 text-xs text-gray-900 px-3 py-1.5 rounded-full border border-slate-200 focus:border-[#FF6600] focus:outline-none w-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-gray-500 hover:text-[#FF6600] transition-colors duration-200"
                aria-label="Buscar"
                id="search-btn"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2 relative text-gray-500 hover:text-[#FF6600] transition-colors duration-200"
              aria-label="Ver carrinho"
              id="cart-btn"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#FF6600] text-white font-mono text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Contact WhatsApp Call-To-Action Button */}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              referrerPolicy="no-referrer"
              className="hidden sm:flex items-center gap-2 bg-[#FF6600]/10 hover:bg-[#FF6600] border border-[#FF6600]/30 text-[#FF6600] hover:text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300"
              id="contact-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4 text-inherit" />
              <span>Orçar WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-gray-500 hover:text-gray-900 transition-colors duration-200"
              aria-label="Menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden w-full bg-slate-50 border-b border-slate-300 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-5">
                {/* Senior Help & Font Size Controller Box */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-sm flex items-center justify-center sm:justify-start gap-1.5">
                        <span>👵👴</span>
                        <span>Menu de Ajuda Simplificado</span>
                      </h4>
                      <p className="text-gray-500 text-[11px] mt-0.5">
                        Projetado para facilitar a leitura e o toque.
                      </p>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setIsLargeText(!isLargeText)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 border ${
                        isLargeText
                          ? 'bg-[#FF6600] text-white border-[#FF6600] shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-gray-700 border-slate-300'
                      }`}
                    >
                      <span>🔍</span>
                      <span>{isLargeText ? 'Letra Normal' : 'Aumentar Letra'}</span>
                    </button>
                  </div>
                </div>

                {/* Search Input for Mobile */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar por modelo de celular..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={`bg-white text-gray-900 px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/10 focus:outline-none w-full shadow-xs ${
                      isLargeText ? 'text-base placeholder:text-gray-400' : 'text-sm'
                    }`}
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>

                {/* Senior Friendly Main Links List */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono font-bold block px-1 text-center sm:text-left">
                    Toque em uma opção para navegar:
                  </span>
                  
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 w-full py-4 px-4 rounded-xl border font-bold transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-[#FF6600]/10 border-[#FF6600] text-[#FF6600]'
                          : 'bg-white border-slate-200 text-gray-800 hover:bg-slate-100 shadow-xs'
                      } ${
                        isLargeText ? 'text-lg' : 'text-sm sm:text-base'
                      }`}
                      style={{ minHeight: '52px' }}
                    >
                      <span className="leading-tight text-left">{item.seniorLabel}</span>
                    </a>
                  ))}

                  {/* Highly highlighted comparison link for Mobile */}
                  <Link
                    to="/comparar"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between w-full py-4 px-4 rounded-xl border border-amber-300 bg-amber-500/10 text-amber-700 font-extrabold shadow-sm hover:bg-amber-500 hover:text-white transition-all duration-200 ${
                      isLargeText ? 'text-lg' : 'text-sm sm:text-base'
                    }`}
                    style={{ minHeight: '52px' }}
                  >
                    <span className="flex items-center gap-3">
                      <span>🔄</span>
                      <span>Compare Modelos (Novo vs Antigo)</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-inherit" />
                  </Link>
                </div>

                {/* Big Help Action Buttons */}
                <div className="flex flex-col gap-3 pt-3 border-t border-slate-200">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono font-bold block px-1 text-center">
                    Precisa de ajuda humana imediata?
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={CONTACT_INFO.whatsappLink}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className={`flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-5 rounded-2xl font-bold uppercase tracking-wider text-center shadow-md transition-colors ${
                        isLargeText ? 'text-base' : 'text-xs sm:text-sm'
                      }`}
                      style={{ minHeight: '56px' }}
                    >
                      <MessageSquare className="w-5.5 h-5.5 fill-white text-[#25D366]" />
                      <span>Falar no WhatsApp</span>
                    </a>
                    <a
                      href={CONTACT_INFO.phoneLink}
                      className={`flex items-center justify-center gap-3 bg-slate-200 hover:bg-slate-300 border border-slate-300 text-gray-800 py-4 px-5 rounded-2xl font-bold uppercase tracking-wider text-center shadow-xs transition-colors ${
                        isLargeText ? 'text-base' : 'text-xs sm:text-sm'
                      }`}
                      style={{ minHeight: '56px' }}
                    >
                      <Phone className="w-5 h-5 text-gray-700" />
                      <span>Ligar por Telefone</span>
                    </a>
                  </div>

                  <p className="text-center text-gray-500 text-[10px] leading-relaxed mt-1">
                    📍 Endereço: {CONTACT_INFO.address} (Fácil acesso com rampa e elevador)
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
