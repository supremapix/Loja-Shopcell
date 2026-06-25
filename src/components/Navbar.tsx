import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart, Menu, X, Phone, MessageSquare, Search, MapPin, Star, 
  CreditCard, ChevronRight, Home, Smartphone, Users, HelpCircle, RefreshCw, ArrowLeft
} from 'lucide-react';
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'inicio', label: 'Início', seniorLabel: 'Ir para o Início da Página', icon: <Home className="w-6 h-6 text-[#FF6600]" />, bgClass: 'bg-[#FFF0E5] border-orange-200 text-orange-950 hover:bg-orange-100', sub: 'Voltar ao topo' },
    { id: 'produtos', label: 'Produtos', seniorLabel: 'Ver Celulares e Preços', icon: <Smartphone className="w-6 h-6 text-emerald-600" />, bgClass: 'bg-[#EAFDF5] border-emerald-200 text-emerald-950 hover:bg-emerald-100', sub: 'Modelos originais com garantia' },
    { id: 'RMCEbairros', label: 'Bairros', seniorLabel: 'Onde fica a Loja Física?', icon: <MapPin className="w-6 h-6 text-purple-600" />, bgClass: 'bg-[#F5F3FF] border-purple-200 text-purple-950 hover:bg-purple-100', sub: 'Como chegar no Centro de Curitiba' },
    { id: 'quem-somos', label: 'Sobre', seniorLabel: 'Conhecer a Nossa Loja', icon: <Users className="w-6 h-6 text-indigo-600" />, bgClass: 'bg-[#EEF2FF] border-indigo-200 text-indigo-950 hover:bg-indigo-100', sub: 'Mais de 8 anos em Curitiba' },
    { id: 'faq', label: 'FAQ', seniorLabel: 'Tirar Dúvidas Frequentes', icon: <HelpCircle className="w-6 h-6 text-orange-600" />, bgClass: 'bg-[#FFF5F0] border-orange-200 text-orange-950 hover:bg-orange-50', sub: 'Perguntas e respostas fáceis' },
  ];

  const topbarItems = [
    {
      icon: <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />,
      text: "Próximo ao Shopping Estação e Rodoferroviária – R. Conselheiro Laurindo, 809, Sala 402",
      actionText: "Ver Mapa",
      link: CONTACT_INFO.mapsLink
    },
    {
      icon: <Star className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />,
      text: "Avaliação 5.0 Google – +3.500 clientes satisfeitos em Curitiba!",
      actionText: "Avaliações",
      link: CONTACT_INFO.mapsLink
    },
    {
      icon: <CreditCard className="w-3.5 h-3.5 text-[#FF6600]" />,
      text: "Facilidade de Pagamento: Parcele em até 12x no cartão diretamente na loja física!",
      actionText: "Ver Parcelas",
      link: CONTACT_INFO.whatsappLink
    },
    {
      icon: <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-transparent" />,
      text: "Atendimento Rápido via WhatsApp – Tire suas dúvidas ou solicite entrega expressa!",
      actionText: "Falar Conosco",
      link: CONTACT_INFO.whatsappLink
    }
  ];

  const duplicatedTopbarItems = [...topbarItems, ...topbarItems];

  return (
    <>
      {/* Top Bar - Premium Dark Minimalist Layout */}
      <div 
        id="topbar" 
        className="w-full bg-[#0B0F19] text-slate-300 py-2 relative z-50 shadow-xs border-b border-slate-800 text-[11px] font-sans font-medium tracking-wide"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 flex items-center justify-between">
          
          {/* Desktop Left Side - Clickable Address */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <a 
              href={CONTACT_INFO.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FF6900] flex items-center gap-1.5 transition-colors duration-200"
              title="Ver localização no Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF6900]" />
              <span className="font-semibold text-slate-300">Endereço:</span>
              <span>Rua Conselheiro Laurindo, 809 - Sala 402</span>
            </a>
          </div>

          {/* Desktop Center Side - High Conversion Persuasive Slogan */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FF6900]/10 text-[#FF6900] rounded text-[9px] font-bold uppercase tracking-widest border border-[#FF6900]/20 animate-pulse">
              Destaque
            </span>
            <span className="font-semibold text-slate-200">
              🔥 Até 12x no cartão • 8% de Desconto no Pix • Mais de 3.800 avaliações 5 estrelas!
            </span>
          </div>

          {/* Desktop Right Side - Clickable Contacts */}
          <div className="hidden lg:flex items-center gap-4 text-slate-400">
            <a 
              href={CONTACT_INFO.phoneLink} 
              className="hover:text-white flex items-center gap-1 transition-colors duration-200"
              title="Ligar para nós"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6900]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={CONTACT_INFO.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors duration-200"
              title="Chamar no WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/10" />
              <span className="text-emerald-400 font-bold">WhatsApp</span>
            </a>
          </div>

          {/* Mobile/Tablet Marquee - All elements clickable & persistent */}
          <div className="flex lg:hidden w-full relative overflow-hidden py-0.5">
            <div className="flex gap-10 animate-marquee-reverse hover:[animation-play-state:paused] transition-all duration-300 w-max text-[10px] font-sans font-bold tracking-wider uppercase text-slate-300">
              <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 flex-shrink-0 hover:text-[#FF6900]">
                <MapPin className="w-3.5 h-3.5 text-[#FF6900]" />
                <span>R. Conselheiro Laurindo, 809 - Sala 402, Curitiba</span>
              </a>
              <span className="text-slate-700 select-none">❖</span>
              <span className="flex items-center gap-1.5 flex-shrink-0 text-[#FF6900]">
                <span>🔥 PARCELAMENTO EM ATÉ 12X • 8% DE DESCONTO NO PIX</span>
              </span>
              <span className="text-slate-700 select-none">❖</span>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 flex-shrink-0 hover:text-emerald-400 text-emerald-400 font-extrabold">
                <MessageSquare className="w-3.5 h-3.5 fill-emerald-400/10" />
                <span>WHATSAPP: {CONTACT_INFO.whatsapp}</span>
              </a>
              <span className="text-slate-700 select-none">❖</span>
              <span className="flex items-center gap-1.5 flex-shrink-0 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>MAIS DE 3.800 AVALIAÇÕES 5 ESTRELAS NO GOOGLE</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? 'bg-white shadow-md border-b border-slate-200/90 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              onNavClick('inicio');
            }}
            className="flex items-center gap-3 group select-none flex-shrink-0"
            id="brand-logo"
          >
            {/* MI icon box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-9 h-9 bg-[#FF6600] rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-md group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              MI
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="font-display font-black tracking-wider text-gray-900 text-base leading-none group-hover:text-[#FF6600] transition-colors duration-200">
                MI SHOP CELL
              </span>
              <span className="font-mono text-[8px] text-[#FF6600] tracking-widest font-bold mt-0.5">
                CURITIBA · PR
              </span>
            </div>
          </a>

          {/* Desktop Navigation - normal title casing, sleek text, identical to official Xiaomi brand menus */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-5 mx-2.5 xl:mx-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                }}
                className={`relative font-sans font-bold text-[12px] xl:text-[13px] tracking-wide transition-colors duration-200 py-1 ${
                  activeSection === item.id ? 'text-[#FF6900]' : 'text-slate-700 hover:text-[#FF6900]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6900]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Comparison Link - elegant inline link instead of bulky button */}
            <Link
              to="/comparar"
              className="font-sans font-bold text-[12px] xl:text-[13px] tracking-wide text-amber-600 hover:text-[#FF6900] transition-colors duration-200 py-1 flex items-center gap-1 cursor-pointer"
              id="compare-nav-link"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow text-amber-500" />
              <span>Comparar</span>
            </Link>
          </nav>

          {/* Actions Bar */}
          <div className="flex items-center gap-2.5 xl:gap-3.5 flex-shrink-0">
            {/* Desktop Search Bar - Always visible like mibrasil.com.br */}
            <div className="hidden lg:flex items-center relative w-32 focus-within:w-44 xl:w-36 xl:focus-within:w-48 transition-all duration-300">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-slate-50 text-[11px] xl:text-xs text-slate-900 px-3 py-1.5 pr-8 rounded-full border border-slate-200 focus:border-[#FF6900] focus:ring-1 focus:ring-[#FF6900] focus:bg-white focus:outline-none transition-all placeholder-slate-400 font-bold"
              />
              <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>

            {/* Mobile Search Button (shown on mobile and smaller tablet sizes where input bar is hidden) */}
            <div className="relative lg:hidden">
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 160, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-10 top-1/2 -translate-y-1/2"
                  >
                    <input
                      type="text"
                      placeholder="Buscar aparelho..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="bg-slate-50 text-xs text-gray-900 px-3 py-1.5 rounded-full border border-slate-200 focus:border-[#FF6600] focus:outline-none w-full animate-fade-in"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-gray-500 hover:text-[#FF6600] transition-colors duration-200 cursor-pointer"
                aria-label="Buscar"
                id="search-btn"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2 relative text-gray-500 hover:text-[#FF6600] transition-colors duration-200 cursor-pointer"
              aria-label="Ver carrinho"
              id="cart-btn"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-slate-950 text-white font-mono text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md"
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
              className="hidden xl:flex items-center gap-1.5 bg-[#FF6600]/10 hover:bg-[#FF6600] border border-[#FF6600]/25 text-[#FF6600] hover:text-white px-3.5 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all duration-300 shadow-2xs cursor-pointer"
              id="contact-whatsapp-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 text-inherit" />
              <span>Orçar</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 xl:hidden text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-full h-screen bg-slate-50 z-50 overflow-y-auto flex flex-col p-4 sm:p-6"
            >
              {/* TOP NAVIGATION BAR FOR ELDERLY */}
              <div className="flex items-center justify-between gap-3 border-b-2 border-slate-200 pb-4 mb-4">
                {/* Big Back Button */}
                <button
                  onClick={() => {
                    if (window.history.length > 1) {
                      window.history.back();
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-black px-4 py-3 rounded-2xl text-sm transition-all shadow-xs cursor-pointer"
                  style={{ minHeight: '48px' }}
                >
                  <ArrowLeft className="w-5 h-5 text-[#FF6600]" />
                  <span>VOLTAR</span>
                </button>
                
                {/* Branding indicator */}
                <div className="flex items-center gap-2 select-none">
                  <div className="w-9 h-9 bg-[#FF6600] rounded-xl flex items-center justify-center font-bold text-white text-base shadow-sm">
                    MI
                  </div>
                  <span className="font-display font-black text-gray-900 text-sm tracking-tight">MENU DA LOJA</span>
                </div>

                {/* Big Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-black px-4 py-3 rounded-2xl text-sm transition-all shadow-md cursor-pointer"
                  style={{ minHeight: '48px' }}
                >
                  <X className="w-5 h-5" />
                  <span>FECHAR</span>
                </button>
              </div>

              {/* MENU CONTROLS - ADJUST TEXT SIZE */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm mb-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-center sm:text-left">
                    <Users className="w-6 h-6 text-[#FF6600] flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-black text-gray-900 text-base">
                        Ajuda para Enxergar Melhor
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Deseja aumentar o tamanho das letras do menu?
                      </p>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setIsLargeText(!isLargeText)}
                    className={`px-5 py-3 rounded-2xl text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border w-full sm:w-auto ${
                      isLargeText
                        ? 'bg-[#FF6600] text-white border-[#FF6600] shadow-md scale-102'
                        : 'bg-slate-100 hover:bg-slate-200 text-gray-800 border-slate-300'
                    }`}
                  >
                    <Search className="w-4 h-4" />
                    <span>{isLargeText ? 'Letra Normal' : 'Aumentar Letras'}</span>
                  </button>
                </div>
              </div>

              {/* SEARCH MODEL INPUT */}
              <div className="relative mb-5">
                <input
                  type="text"
                  placeholder="Pesquisar por modelo de celular..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className={`bg-white text-gray-900 px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/10 focus:outline-none w-full shadow-xs ${
                    isLargeText ? 'text-lg placeholder:text-gray-400 font-bold' : 'text-sm'
                  }`}
                />
                <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>

              {/* MAIN ACCESSIBLE NAVIGATION LINKS */}
              <div className="flex flex-col gap-3 flex-grow">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-mono font-black block px-1 text-center sm:text-left">
                  Escolha abaixo o que você quer ver:
                </span>
                
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl border-2 shadow-sm hover:shadow-md transition-all duration-200 ${item.bgClass}`}
                      style={{ minHeight: '68px' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-xs border border-slate-100">
                          {item.icon}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className={`font-black tracking-tight leading-snug ${isLargeText ? 'text-xl' : 'text-base sm:text-lg'}`}>
                            {item.seniorLabel}
                          </span>
                          <span className="text-[11px] opacity-80 font-medium">
                            {item.sub}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 opacity-70" />
                    </a>
                  ))}

                  {/* Accessible comparison link */}
                  <Link
                    to="/comparar"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl border-2 border-orange-200 bg-[#FFF5F0] text-orange-950 hover:bg-orange-100 shadow-sm transition-all duration-200"
                    style={{ minHeight: '68px' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-white rounded-xl shadow-xs border border-slate-100">
                        <RefreshCw className="w-6 h-6 text-[#FF6600] animate-spin-slow" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className={`font-black tracking-tight leading-snug text-[#FF6600] ${isLargeText ? 'text-xl' : 'text-base sm:text-lg'}`}>
                          Compare Modelos de Celular
                        </span>
                        <span className="text-[11px] text-orange-600 font-medium">
                          Descubra qual celular Xiaomi é ideal para você
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#FF6600]" />
                  </Link>
                </div>

                {/* HELP CARDS FOR OLDER PEOPLE */}
                <div className="flex flex-col gap-4 pt-6 mt-4 border-t-2 border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-mono font-black block px-1 text-center">
                    Conversar ou ligar para tirar dúvidas:
                  </span>
                  
                  {/* WhatsApp Support Card */}
                  <div className="bg-emerald-50 border-2 border-emerald-300 p-5 rounded-2xl flex flex-col gap-4">
                    <div className="flex items-start gap-4 text-left">
                      <div className="p-2 bg-white rounded-xl shadow-xs border border-emerald-100 flex-shrink-0">
                        <MessageSquare className="w-7 h-7 text-emerald-600 fill-emerald-50" />
                      </div>
                      <div>
                        <h4 className="font-display font-black text-emerald-950 text-base leading-tight">
                          Falar com Atendente no WhatsApp
                        </h4>
                        <p className="text-emerald-700 text-xs mt-1 leading-relaxed font-semibold">
                          Tire suas dúvidas, veja preços ou peça entrega para sua casa conversando com uma pessoa de verdade.
                        </p>
                      </div>
                    </div>
                    <a
                      href={CONTACT_INFO.whatsappLink}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-5 rounded-xl font-bold uppercase text-center shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                      <span>Conversar no WhatsApp</span>
                    </a>
                  </div>

                  {/* Phone Call Support Card */}
                  <div className="bg-orange-50 border-2 border-orange-200 p-5 rounded-2xl flex flex-col gap-4">
                    <div className="flex items-start gap-4 text-left">
                      <div className="p-2 bg-white rounded-xl shadow-xs border border-orange-100 flex-shrink-0">
                        <Phone className="w-7 h-7 text-[#FF6600]" />
                      </div>
                      <div>
                        <h4 className="font-display font-black text-orange-950 text-base leading-tight">
                          Ligar por Telefone Comum
                        </h4>
                        <p className="text-orange-700 text-xs mt-1 leading-relaxed font-semibold">
                          Se você prefere falar ouvindo nossa voz, clique no botão abaixo para nos telefonar diretamente.
                        </p>
                      </div>
                    </div>
                    <a
                      href={CONTACT_INFO.phoneLink}
                      className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white py-3 px-5 rounded-xl font-bold uppercase text-center shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Ligar Agora</span>
                    </a>
                  </div>

                  {/* Footnote address details */}
                  <div className="text-center text-slate-500 text-xs leading-relaxed mt-2 flex flex-col items-center justify-center gap-1 bg-white border border-slate-200/60 p-4 rounded-xl">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                      <MapPin className="w-4 h-4 text-[#FF6600]" />
                      <span>{CONTACT_INFO.address}</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Temos acesso fácil com rampas de acessibilidade e elevador para melhor atendê-lo.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
