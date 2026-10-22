import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUp,
  Check,
  Link2,
  MessageCircle,
  MessageSquare,
  Phone,
  RefreshCw,
  Share2,
  X,
} from 'lucide-react';
import { CONTACT_INFO } from '../data';

const SITE_NAME = 'SUNCELL Assistência Técnica';
const SERVICE_NAME = 'serviço de assistência técnica de celulares de Curitiba';
const OG_IMAGE =
  'https://www.celularescuritibashopcell.com.br/og-suncell.jpg';

const SHARE_MESSAGES = [
  'Assistência técnica de celular em Curitiba com diagnóstico gratuito na SUNCELL. Duas lojas no Mercado Goes: Guaíra e Alto Boqueirão.',
  'Troca de tela, bateria e conector de carga no mesmo dia. Atendimento especializado SUNCELL em Curitiba.',
  'Seu celular em boas mãos: assistência técnica SUNCELL no Mercado Goes, com garantia no serviço.',
  'Conserto de celular perto de você: SUNCELL Guaíra e Alto Boqueirão, em Curitiba.',
  'iPhone, Samsung, Xiaomi e Motorola: orçamento gratuito na SUNCELL Assistência Técnica.',
  'Bateria descarregando rápido? Troca expressa na SUNCELL, dentro do Mercado Goes.',
  'Tela quebrada? Faça seu orçamento sem compromisso nas lojas SUNCELL de Curitiba.',
  'Atendimento de bairro com estrutura de loja: SUNCELL no Mercado Goes, Guaíra e Alto Boqueirão.',
  'Reparo de placa, câmera e alto-falante com técnicos especializados em Curitiba.',
  'Assistência técnica de confiança em Curitiba, com duas unidades e avaliação 5 estrelas.',
  'Moradores do Boqueirão, Xaxim e Sítio Cercado: a SUNCELL está pertinho de você.',
  'Moradores do Água Verde, Batel e Portão: atendimento SUNCELL na unidade Guaíra.',
  'Conserto de celular com transparência: você aprova o orçamento antes do reparo.',
  'Peças de qualidade e garantia local na SUNCELL Assistência Técnica em Curitiba.',
  'Agende seu atendimento pelo WhatsApp e retire no Mercado Goes, sem fila.',
];

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.9 11.1c-.1-2.7-1.7-4.3-4.4-4.3-1.5 0-3 .6-3.8 1.7l1.3 1.1c.6-.7 1.5-1.1 2.4-1.1 1.5 0 2.4.8 2.5 2.1-.6-.2-1.2-.2-1.8-.2-2.4 0-4 1.2-4 3.2 0 1.8 1.4 3 3.3 3 1.6 0 2.8-.7 3.5-1.9.5 1.2 1.4 1.9 2.6 1.9 1.4 0 2.5-.9 2.5-2.4 0-1.5-1.2-2.5-2.7-2.5-.4 0-.8 0-1.2.1l-.2.3Zm-2 2.1c-.5 1-1.2 1.5-2.1 1.5-.8 0-1.4-.4-1.4-1.1 0-.8.7-1.2 1.7-1.2.7 0 1.3.1 1.9.3v.5Z"
        fill="currentColor"
      />
      <path
        d="M12 2.5c-5.5 0-9.5 4-9.5 9.5s4 9.5 9.5 9.5c5.2 0 9.2-3.6 9.5-8.7.1-1.9-.4-3.4-1.5-4.5-1.3-1.3-3.2-1.9-5.6-1.9-1.1 0-2.2.1-3.2.4v2c1-.3 2.1-.4 3.2-.4 2.6 0 4.1 1 4.5 2.8-1-.4-2.1-.6-3.3-.6-3.8 0-6.3 2-6.3 5 0 2.7 2 4.7 5 4.7 2.3 0 4.1-1 5.2-2.7.8 1.1 1.9 1.7 3.3 1.7.1 0 .2 0 .3 0-.8 2.8-3.4 4.7-6.8 4.7-4.4 0-7.5-3.1-7.5-7.5s3.1-7.5 7.5-7.5c4.3 0 7.4 3 7.5 7.3h2C22.2 6.2 18.2 2.5 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.683l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0Z" />
    </svg>
  );
}

type ShareLink = {
  name: string;
  label: string;
  icon: ReactNode;
  className: string;
  getUrl: (text: string, url: string, title: string) => string;
};

const SHARE_LINKS: ShareLink[] = [
  {
    name: 'WhatsApp',
    label: 'WhatsApp',
    icon: <MessageSquare className="h-4.5 w-4.5" />,
    className: 'bg-[#25D366]/12 text-[#25D366] border-[#25D366]/25 hover:bg-[#25D366]/20',
    getUrl: (text, url) =>
      `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`,
  },
  {
    name: 'Facebook',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
      </svg>
    ),
    className: 'bg-[#1877F2]/12 text-[#1877F2] border-[#1877F2]/25 hover:bg-[#1877F2]/20',
    getUrl: (_text, url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: 'X (Twitter)',
    label: 'X / Twitter',
    icon: <XIcon className="h-4 w-4" />,
    className: 'bg-slate-900/10 text-slate-900 border-slate-300 hover:bg-slate-900/15',
    getUrl: (text, url) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
  },
  {
    name: 'Pinterest',
    label: 'Pinterest',
    icon: <PinterestIcon className="h-4.5 w-4.5" />,
    className: 'bg-[#E60023]/10 text-[#E60023] border-[#E60023]/25 hover:bg-[#E60023]/20',
    getUrl: (text, url, title) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(OG_IMAGE)}&description=${encodeURIComponent(`${title} - ${text}`)}`,
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452Z" />
      </svg>
    ),
    className: 'bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/25 hover:bg-[#0A66C2]/20',
    getUrl: (_text, url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    name: 'Threads',
    label: 'Threads',
    icon: <ThreadsIcon className="h-4.5 w-4.5" />,
    className: 'bg-slate-950/8 text-slate-950 border-slate-300 hover:bg-slate-950/15',
    getUrl: (text, url) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(`${text}\n${url}`)}`,
  },
];

export default function FloatingActions() {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [pageUrl, setPageUrl] = useState('https://www.celularescuritibashopcell.com.br/');
  const [pageTitle, setPageTitle] = useState(SITE_NAME);

  const isProductPage = location.pathname.startsWith('/celular/');

  useEffect(() => {
    const syncPage = () => {
      setPageUrl(window.location.href);
      setPageTitle(document.title || SITE_NAME);
    };
    syncPage();
    const timer = window.setTimeout(syncPage, 400);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % SHARE_MESSAGES.length);
    }, 15000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const currentMessage = SHARE_MESSAGES[messageIndex];

  const copyText = useMemo(
    () =>
      `Estou indicando o melhor ${SERVICE_NAME}: ${pageTitle} (${pageUrl})`,
    [pageTitle, pageUrl],
  );

  const advanceMessage = () => {
    setMessageIndex((current) => (current + 1) % SHARE_MESSAGES.length);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = copyText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
  };

  const openShare = (link: ShareLink) => {
    const target = link.getUrl(currentMessage, pageUrl, pageTitle);
    window.open(target, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        ref={menuRef}
        className={`fixed left-4 z-[70] sm:left-6 ${isProductPage ? 'bottom-24 sm:bottom-6' : 'bottom-5 sm:bottom-6'}`}
        id="floating-share-widget"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="absolute bottom-[4.5rem] left-0 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/15 bg-slate-950/92 text-white shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              role="dialog"
              aria-label="Compartilhar esta página"
            >
              <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#FF6600]/25 blur-3xl" />

              <div className="relative flex items-start justify-between gap-3 border-b border-white/10 px-4 pb-3 pt-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF6600] text-white">
                      <Share2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFA366]">
                      Compartilhar
                    </span>
                  </div>
                  <p className="mt-1.5 truncate text-xs font-semibold text-slate-200">{pageTitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu de compartilhamento"
                  className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="relative px-4 pt-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Mensagem {messageIndex + 1}/{SHARE_MESSAGES.length}
                    </span>
                    <button
                      type="button"
                      onClick={advanceMessage}
                      className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFA366] transition-colors hover:bg-white/10 hover:text-white"
                      title="Trocar mensagem agora"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Trocar
                    </button>
                  </div>
                  <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-slate-200">
                    “{currentMessage}”
                  </p>
                  <div className="mt-2.5 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      key={messageIndex}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 15, ease: 'linear' }}
                      className="h-full rounded-full bg-[#FF6600]"
                    />
                  </div>
                  <p className="mt-1.5 text-[9px] font-medium text-slate-500">
                    A mensagem muda sozinha a cada 15 segundos.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-2 px-4 pb-3 pt-3">
                {SHARE_LINKS.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => openShare(link)}
                    className={`flex items-center gap-2 rounded-xl border px-2.5 py-2 text-left transition-all duration-200 active:scale-[0.98] ${link.className}`}
                    aria-label={`Compartilhar no ${link.name}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/70">
                      {link.icon}
                    </span>
                    <span className="truncate text-[11px] font-bold">{link.label}</span>
                  </button>
                ))}
              </div>

              <div className="relative px-4 pb-4">
                <button
                  type="button"
                  onClick={copyLink}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold transition-all duration-300 ${
                    copied
                      ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-300'
                      : 'border-[#FF6600]/40 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white shadow-lg shadow-[#FF6600]/20 hover:brightness-110'
                  }`}
                  id="btn-copy-share-link"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                  <span>{copied ? 'Link Copiado com Sucesso!' : 'Copiar Link da Página'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Compartilhar esta página"
          aria-expanded={isOpen}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-slate-950 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:border-[#FF6600]/60 active:scale-95"
          id="btn-trigger-share"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[#FF6600]/35 opacity-40 blur-md transition-opacity group-hover:opacity-70" />
          <span className="pointer-events-none absolute inset-0 animate-ping rounded-full border border-[#FF6600]/40 opacity-25" />
          <Share2 className="relative z-10 h-6 w-6 text-[#FF8A3D]" />
          <span className="absolute -right-0.5 -top-0.5 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-slate-950 bg-[#FF6600] text-[8px] font-black text-white">
            +
          </span>
        </button>
      </div>

      <div
        className={`fixed right-4 z-[70] flex flex-col items-end gap-2.5 sm:right-6 ${isProductPage ? 'bottom-24 sm:bottom-6' : 'bottom-5 sm:bottom-6'}`}
        id="floating-quick-actions"
      >
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/90 text-slate-200 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6600]/60 hover:text-[#FFA366]"
              id="btn-back-to-top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={CONTACT_INFO.phoneLink}
          className="group flex items-center gap-2 rounded-full border border-[#FF6600]/40 bg-gradient-to-r from-[#FF6600] to-[#FF8533] py-2 pl-2 pr-2 text-white shadow-[0_10px_25px_rgba(255,102,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:pr-4"
          id="floating-call"
          aria-label="Ligar agora para a SUNCELL"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <Phone className="h-4.5 w-4.5 animate-[bounce_2.4s_ease-in-out_infinite]" />
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80">Atendimento</span>
            <span className="block text-xs font-black">Ligar Agora</span>
          </span>
        </a>

        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 rounded-full border border-emerald-300/40 bg-gradient-to-r from-[#128C7E] to-[#25D366] py-2 pl-2 pr-2 text-white shadow-[0_10px_25px_rgba(37,211,102,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:pr-4"
          id="floating-whatsapp"
          aria-label="Falar no WhatsApp 24h"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/30 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="h-5 w-5 fill-white/20 transition-transform duration-300 group-hover:rotate-6" />
            <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full border border-white bg-lime-400" />
            </span>
          </span>
          <span className="relative hidden text-left leading-tight sm:block">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80">Online agora</span>
            <span className="block text-xs font-black">WhatsApp 24h</span>
          </span>
        </a>
      </div>
    </>
  );
}
