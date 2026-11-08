import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowUpRight, ChevronRight, Headphones, Home, MapPin, Menu,
  MessageSquare, Phone, Search, ShoppingCart, Smartphone, Store,
  Type, Users, X,
} from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { useCart } from '../context/CartContext';
import StoreSelectModal from './StoreSelectModal';
import '../shell.css';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSection?: string;
  onNavClick?: (section: string) => void;
}

const navigation = [
  { path: '/', label: 'Início', description: 'Explore a SUNCELL', Icon: Home },
  { path: '/celulares', label: 'Celulares', description: 'Encontre sua próxima conexão', Icon: Smartphone },
  { path: '/loja-de-celular-curitiba', label: 'Loja Curitiba', description: 'Conheça nossas lojas físicas', Icon: Store },
  { path: '/acessorios', label: 'Acessórios', description: 'Detalhes para o seu dia a dia', Icon: Headphones },
  { path: '/sobre', label: 'Sobre', description: 'A história da SUNCELL', Icon: Users },
  { path: '/contato', label: 'Contato', description: 'Converse com nossa equipe', Icon: Phone },
];

export default function Navbar({
  cartCount: propCartCount,
  onOpenCart: propOnOpenCart,
  searchQuery,
  onSearchChange,
}: NavbarProps) {
  const { totalItemsCount, openCart } = useCart();
  const cartCount = propCartCount ?? totalItemsCount;
  const onOpenCart = propOnOpenCart ?? openCart;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(searchQuery);
  const menuRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const dialog = menuRef.current;
    if (!mobileMenuOpen || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowSearch(false);
    setIsStoreModalOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (showSearch) searchRef.current?.focus();
  }, [showSearch]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1200px)');
    const closeMobileMenu = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    desktop.addEventListener('change', closeMobileMenu);
    return () => desktop.removeEventListener('change', closeMobileMenu);
  }, []);

  const closeSearch = () => {
    setShowSearch(false);
    searchButtonRef.current?.focus();
  };

  const updateSearch = (value: string) => {
    setSearchValue(value);
    onSearchChange(value);
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    setShowSearch(false);
    navigate(`/celulares?q=${encodeURIComponent(searchValue.trim())}`);
  };

  return (
    <>
      <div id="topbar" className="sc-shell-topbar">
        <div className="sc-shell-container sc-shell-topbar-inner">
          <button type="button" className="sc-shell-location" onClick={() => setIsStoreModalOpen(true)}>
            <MapPin size={13} aria-hidden="true" />
            <span>Curitiba, PR <span className="sc-shell-topbar-detail">/ Mercado Goes · Guaíra e Alto Boqueirão</span></span>
            <ChevronRight size={12} aria-hidden="true" />
          </button>
          <div className="sc-shell-topbar-contacts">
            <span className="sc-shell-hours">Seg–Sáb · 09h às 19h</span>
            <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Guaíra: (41) 99917-6640">
              <MessageSquare size={12} aria-hidden="true" />
              <span className="sc-shell-phone-number">{CONTACT_INFO.phone}</span>
              <span className="sc-shell-phone-short">WhatsApp</span>
            </a>
            <a className="sc-shell-second-phone" href={CONTACT_INFO.whatsappLink2} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Alto Boqueirão: (41) 99750-1961">
              {CONTACT_INFO.phone2}
            </a>
          </div>
        </div>
      </div>

      <header className={`sc-shell-header${scrolled ? ' sc-shell-header-scrolled' : ''}`}>
        <div className="sc-shell-container sc-shell-header-inner">
          <Link to="/" className="sc-shell-brand" id="brand-logo" aria-label="SUNCELL, página inicial">
            <span className="sc-shell-brand-symbol"><img src="/favicon.svg" alt="" width="42" height="42" /></span>
            <span className="sc-shell-brand-type">
              <strong>SUNCELL</strong>
              <small>TECNOLOGIA & CONEXÃO</small>
            </span>
          </Link>

          <nav className="sc-shell-desktop-nav" aria-label="Navegação principal">
            {navigation.map(({ path, label }) => (
              <Link key={path} to={path} aria-current={location.pathname === path ? 'page' : undefined}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="sc-shell-actions">
            <button
              ref={searchButtonRef}
              type="button"
              className={`sc-shell-icon-button${showSearch ? ' sc-shell-icon-active' : ''}`}
              id="search-btn"
              aria-label={showSearch ? 'Fechar busca' : 'Buscar celulares'}
              aria-expanded={showSearch}
              aria-controls="sc-shell-search-panel"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <X size={19} aria-hidden="true" /> : <Search size={19} aria-hidden="true" />}
            </button>
            <button type="button" className="sc-shell-icon-button sc-shell-cart" id="cart-btn" onClick={onOpenCart} aria-label={`Ver orçamentos${cartCount > 0 ? `, ${cartCount} itens` : ''}`}>
              <ShoppingCart size={19} aria-hidden="true" />
              {cartCount > 0 && <span className="sc-shell-cart-count" aria-hidden="true">{cartCount > 99 ? '99+' : cartCount}</span>}
            </button>
            <a className="sc-shell-contact-cta" id="contact-whatsapp-btn" href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
              Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="sc-shell-icon-button sc-shell-menu-toggle"
              id="mobile-menu-btn"
              aria-label="Abrir menu"
              aria-haspopup="dialog"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-dialog"
              onClick={() => { setShowSearch(false); setMobileMenuOpen(true); }}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>

        {showSearch && (
          <div id="sc-shell-search-panel" className="sc-shell-search-panel" onKeyDown={(event) => { if (event.key === 'Escape') closeSearch(); }}>
            <form className="sc-shell-container sc-shell-search-inner" role="search" aria-label="Buscar celulares no catálogo" onSubmit={submitSearch}>
              <Search size={22} aria-hidden="true" />
              <input ref={searchRef} type="search" name="q" aria-label="Buscar celulares" placeholder="Qual é a sua próxima conexão?" value={searchValue} onChange={(event) => updateSearch(event.target.value)} />
              <button type="submit" className="sc-shell-search-submit">Buscar <ArrowUpRight size={16} aria-hidden="true" /></button>
              <Link to="/celulares" onClick={() => setShowSearch(false)} className="sc-shell-search-catalog">Ver catálogo <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <button type="button" onClick={closeSearch} className="sc-shell-icon-button" aria-label="Fechar busca"><X size={20} aria-hidden="true" /></button>
            </form>
          </div>
        )}

        <dialog
          ref={menuRef}
          id="mobile-navigation-dialog"
          className={`sc-shell-drawer${isLargeText ? ' sc-shell-drawer-large' : ''}`}
          aria-labelledby="sc-shell-drawer-title"
          onCancel={(event) => { event.preventDefault(); setMobileMenuOpen(false); }}
          onClose={() => setMobileMenuOpen(false)}
          onClick={(event) => { if (event.target === event.currentTarget) setMobileMenuOpen(false); }}
        >
          <div className="sc-shell-drawer-content">
            <div className="sc-shell-drawer-top">
              <div className="sc-shell-brand-type"><strong id="sc-shell-drawer-title">SUNCELL</strong><small>EXPLORE. ESCOLHA. CONECTE.</small></div>
              <button type="button" className="sc-shell-icon-button" aria-label="Fechar menu" onClick={() => setMobileMenuOpen(false)} autoFocus><X size={23} aria-hidden="true" /></button>
            </div>
            <div className="sc-shell-drawer-utilities">
              <span>SEU PRÓXIMO PASSO</span>
              <button type="button" onClick={() => setIsLargeText(!isLargeText)} aria-pressed={isLargeText}><Type size={17} aria-hidden="true" /> {isLargeText ? 'Texto normal' : 'Aumentar texto'}</button>
            </div>
            <form className="sc-shell-drawer-search" role="search" aria-label="Buscar celulares pelo menu" onSubmit={submitSearch}>
              <Search size={19} aria-hidden="true" />
              <input type="search" name="q" aria-label="Pesquisar celulares" placeholder="Buscar celulares..." value={searchValue} onChange={(event) => updateSearch(event.target.value)} />
              <button type="submit" className="sc-shell-search-submit">Buscar <ArrowUpRight size={15} aria-hidden="true" /></button>
            </form>
            <nav className="sc-shell-mobile-nav" aria-label="Navegação principal móvel">
              {navigation.map(({ path, label, description, Icon }, index) => (
                <Link key={path} to={path} aria-current={location.pathname === path ? 'page' : undefined} onClick={() => setMobileMenuOpen(false)}>
                  <span className="sc-shell-nav-number">0{index + 1}</span>
                  <Icon size={21} className="sc-shell-nav-icon" aria-hidden="true" />
                  <span className="sc-shell-nav-copy"><strong>{label}</strong><small>{description}</small></span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className="sc-shell-drawer-contact">
              <span className="sc-shell-eyebrow">PESSOAS DE VERDADE. PERTO DE VOCÊ.</span>
              <p>Conte com a nossa equipe em Curitiba.</p>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer"><MessageSquare size={18} aria-hidden="true" /> Conversar no WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></a>
              <span className="sc-shell-drawer-address"><MapPin size={15} aria-hidden="true" /> Mercado Goes · Guaíra e Alto Boqueirão</span>
            </div>
          </div>
        </dialog>
      </header>
      <StoreSelectModal isOpen={isStoreModalOpen} onClose={() => setIsStoreModalOpen(false)} />
    </>
  );
}
