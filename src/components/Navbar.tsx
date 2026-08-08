import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart, Menu, X, Phone, MessageSquare, Search, MapPin, Star, 
  CreditCard, ChevronRight, Home, Smartphone, Users, HelpCircle, ArrowLeft,
  Store, Headphones
} from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSection?: string;
  onNavClick?: (section: string) => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    { path: '/', label: 'Início', seniorLabel: 'Ir para o Início', icon: <Home className="w-5 h-5 text-[#FF6600]" />, bgClass: 'bg-[#FFF0E5] border-orange-200 text-orange-950', sub: 'Página inicial' },
    { path: '/celulares', label: 'Celulares', seniorLabel: 'Ver Celulares', icon: <Smartphone className="w-5 h-5 text-emerald-600" />, bgClass: 'bg-[#EAFDF5] border-emerald-200 text-emerald-950', sub: 'Aparelhos com garantia' },
    { path: '/loja-de-celular-curitiba', label: 'Loja Curitiba', seniorLabel: 'Loja em Curitiba', icon: <Store className="w-5 h-5 text-blue-600" />, bgClass: 'bg-[#EFF6FF] border-blue-200 text-blue-950', sub: 'Atendimento presencial no Centro' },
    { path: '/acessorios', label: 'Acessórios', seniorLabel: 'Acessórios', icon: <Headphones className="w-5 h-5 text-amber-600" />, bgClass: 'bg-[#FFFBEB] border-amber-200 text-amber-950', sub: 'Películas, capas e carregadores' },
    { path: '/sobre', label: 'Sobre', seniorLabel: 'Sobre a Shopcell', icon: <Users className="w-5 h-5 text-indigo-600" />, bgClass: 'bg-[#EEF2FF] border-indigo-200 text-indigo-950', sub: 'Mais de 8 anos de história' },
    { path: '/contato', label: 'Contato', seniorLabel: 'Falar com Atendente', icon: <Phone className="w-5 h-5 text-orange-600" />, bgClass: 'bg-[#FFF5F0] border-orange-200 text-orange-950', sub: 'Endereço e WhatsApp' },
  ];

  return (
    <>
      {/* Top Bar - Premium Dark Minimalist Layout */}
      <div 
        id="topbar" 
        className="w-full bg-[#0B0F19] text-slate-300 py-2 relative z-50 shadow-xs border-b border-slate-800 text-[11px] font-sans font-medium tracking-wide"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 flex items-center justify-between">
          
          {/* Desktop Left Side - Address */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <a 
              href={CONTACT_INFO.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FF6900] flex items-center gap-1.5 transition-colors duration-200"
              title="Ver localização no Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF6900]" />
              <span className="font-semibold text-slate-300">Loja Centro:</span>
              <span>R. Conselheiro Laurindo, 809 - Sala 402</span>
            </a>
          </div>

          {/* Desktop Center Side - High Conversion Slogan */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FF6900]/10 text-[#FF6900] rounded text-[9px] font-bold uppercase tracking-widest border border-[#FF6900]/20 animate-pulse">
              Shopcell
            </span>
            <span className="font-semibold text-slate-200">
              🔥 Celulares Originais em Curitiba • Até 12x no cartão • 12 Meses de Garantia Local!
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

          {/* Mobile/Tablet Marquee */}
          <div className="flex lg:hidden w-full relative overflow-hidden py-0.5">
            <div className="flex gap-10 animate-marquee-reverse hover:[animation-play-state:paused] transition-all duration-300 w-max text-[10px] font-sans font-bold tracking-wider uppercase text-slate-300">
              <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 flex-shrink-0 hover:text-[#FF6900]">
                <MapPin className="w-3.5 h-3.5 text-[#FF6900]" />
                <span>R. Conselheiro Laurindo, 809 - Sala 402, Centro</span>
              </a>
              <span className="text-slate-700 select-none">❖</span>
              <span className="flex items-center gap-1.5 flex-shrink-0 text-[#FF6900]">
                <span>🔥 CELULARES COM 12 MESES DE GARANTIA EM CURITIBA</span>
              </span>
              <span className="text-slate-700 select-none">❖</span>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 flex-shrink-0 hover:text-emerald-400 text-emerald-400 font-extrabold">
                <MessageSquare className="w-3.5 h-3.5 fill-emerald-400/10" />
                <span>WHATSAPP: {CONTACT_INFO.whatsapp}</span>
              </a>
              <span className="text-slate-700 select-none">❖</span>
              <span className="flex items-center gap-1.5 flex-shrink-0 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>NOTA 5.0 NO GOOGLE (+3.800 AVALIAÇÕES)</span>
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
          <Link
            to="/"
            className="flex items-center gap-3 group select-none flex-shrink-0"
            id="brand-logo"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center font-black text-white text-base shadow-md group-hover:scale-105 transition-all duration-300 relative overflow-hidden tracking-tighter"
            >
              SC
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <div className="flex flex-col">
              <span className="font-display font-black tracking-wider text-gray-900 text-lg leading-none group-hover:text-[#FF6600] transition-colors duration-200">
                SHOPCELL
              </span>
              <span className="font-mono text-[9px] text-[#FF6600] tracking-widest font-extrabold mt-0.5">
                LOJA DE CELULARES CURITIBA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-6 mx-2.5 xl:mx-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-sans font-bold text-[13px] xl:text-[14px] tracking-wide transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#FF6900]' : 'text-slate-700 hover:text-[#FF6900]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6900]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions Bar */}
          <div className="flex items-center gap-2.5 xl:gap-3.5 flex-shrink-0">
            {/* Desktop Search Bar */}
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

            {/* Mobile Search Button */}
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
                      placeholder="Buscar no site..."
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

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2 relative text-gray-500 hover:text-[#FF6600] transition-colors duration-200 cursor-pointer"
              aria-label="Ver orçamentos"
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

            {/* WhatsApp CTA Button */}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              referrerPolicy="no-referrer"
              className="hidden xl:flex items-center gap-1.5 bg-[#FF6600] hover:bg-[#D45500] text-white px-4 py-2 rounded-xl text-[11px] font-extrabold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer"
              id="contact-whatsapp-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>Falar no WhatsApp</span>
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
              {/* TOP NAVIGATION BAR */}
              <div className="flex items-center justify-between gap-3 border-b-2 border-slate-200 pb-4 mb-4">
                <button
                  onClick={() => {
                    navigate(-1);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-black px-4 py-3 rounded-2xl text-sm transition-all shadow-xs cursor-pointer"
                  style={{ minHeight: '48px' }}
                >
                  <ArrowLeft className="w-5 h-5 text-[#FF6600]" />
                  <span>VOLTAR</span>
                </button>
                
                <div className="flex items-center gap-2 select-none">
                  <div className="w-9 h-9 bg-[#FF6600] rounded-xl flex items-center justify-center font-black text-white text-sm shadow-sm">
                    SC
                  </div>
                  <span className="font-display font-black text-gray-900 text-sm tracking-tight">MENU SHOPCELL</span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-black px-4 py-3 rounded-2xl text-sm transition-all shadow-md cursor-pointer"
                  style={{ minHeight: '48px' }}
                >
                  <X className="w-5 h-5" />
                  <span>FECHAR</span>
                </button>
              </div>

              {/* ACCESSIBLE TEXT CONTROLS */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm mb-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-center sm:text-left">
                    <Users className="w-6 h-6 text-[#FF6600] flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-black text-gray-900 text-base">
                        Acessibilidade de Texto
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Aumente o tamanho das letras se preferir.
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

              {/* SEARCH INPUT */}
              <div className="relative mb-5">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className={`bg-white text-gray-900 px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/10 focus:outline-none w-full shadow-xs ${
                    isLargeText ? 'text-lg placeholder:text-gray-400 font-bold' : 'text-sm'
                  }`}
                />
                <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>

              {/* MAIN LINKS */}
              <div className="flex flex-col gap-3 flex-grow">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-mono font-black block px-1 text-center sm:text-left">
                  Menu Principal:
                </span>
                
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
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
                    </Link>
                  ))}
                </div>

                {/* WHATSAPP SUPPORT CARD */}
                <div className="flex flex-col gap-4 pt-6 mt-4 border-t-2 border-slate-200">
                  <div className="bg-emerald-50 border-2 border-emerald-300 p-5 rounded-2xl flex flex-col gap-4">
                    <div className="flex items-start gap-4 text-left">
                      <div className="p-2 bg-white rounded-xl shadow-xs border border-emerald-100 flex-shrink-0">
                        <MessageSquare className="w-7 h-7 text-emerald-600 fill-emerald-50" />
                      </div>
                      <div>
                        <h4 className="font-display font-black text-emerald-950 text-base leading-tight">
                          Atendimento via WhatsApp
                        </h4>
                        <p className="text-emerald-700 text-xs mt-1 leading-relaxed font-semibold">
                          Consulte aparelhos, disponibilidade e receba suporte direto da nossa equipe.
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

                  <div className="text-center text-slate-500 text-xs leading-relaxed flex flex-col items-center justify-center gap-1 bg-white border border-slate-200/60 p-4 rounded-xl">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                      <MapPin className="w-4 h-4 text-[#FF6600]" />
                      <span>{CONTACT_INFO.address}</span>
                    </div>
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
