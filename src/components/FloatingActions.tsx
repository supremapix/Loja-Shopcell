import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp, Check, Copy, Facebook, Link2, Linkedin, MessageCircle, Phone, Share2, X } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { copyRecommendation, getShareLinks } from '../utils/sharing';

const SITE_NAME = 'SUNCELL — Assistência Técnica & Celulares';

export default function FloatingActions() {
  const location = useLocation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showTop, setShowTop] = useState(false);
  const [page, setPage] = useState({ title: SITE_NAME, url: '', image: '' });
  const isProductPage = location.pathname.startsWith('/celular/');

  useEffect(() => {
    setIsOpen(false);
    setCopyStatus('idle');
    const syncPage = () => setPage({
      title: document.title || SITE_NAME,
      url: window.location.href,
      // Use this site's existing branded image, including its verified phone numbers.
      image: new URL('/og-suncell.jpg', window.location.origin).href,
    });
    syncPage();
    const observer = new MutationObserver(syncPage);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!isOpen) { if (dialog.open) dialog.close(); return; }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  const closeShare = () => {
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  };
  const recommendation = `Recomendo conhecer a SUNCELL: ${page.title}\n${page.url}`;
  const links = getShareLinks(recommendation, page.url, page.image);
  const icons = [<MessageCircle />, <Facebook />, <span aria-hidden="true">𝕏</span>, <span aria-hidden="true">P</span>, <Linkedin />, <span aria-hidden="true">@</span>];

  const copy = async () => {
    setCopyStatus(await copyRecommendation(recommendation) ? 'success' : 'error');
  };

  return (
    <>
      <div className={`suprema-float suprema-float-left ${isProductPage ? 'suprema-product-offset' : ''}`} id="floating-share-widget">
        <button ref={triggerRef} type="button" onClick={() => { setCopyStatus('idle'); setIsOpen(true); }}
          aria-label="Compartilhar esta página" aria-haspopup="dialog" aria-controls="suprema-share-dialog" aria-expanded={isOpen}
          className="suprema-circle suprema-share-trigger" id="btn-trigger-share">
          <Share2 aria-hidden="true" size={22} />
        </button>
      </div>

      <dialog ref={dialogRef} id="suprema-share-dialog" className="suprema-share-dialog" aria-labelledby="suprema-share-title"
        onCancel={closeShare} onClose={closeShare} onClick={(event) => { if (event.target === event.currentTarget) closeShare(); }}>
        <div className="suprema-share-content">
          <div className="suprema-share-heading">
            <div><span className="suprema-eyebrow">SUNCELL</span><h2 id="suprema-share-title">Compartilhar página</h2></div>
            <button type="button" className="suprema-circle suprema-close" aria-label="Fechar compartilhamento" onClick={closeShare}><X aria-hidden="true" size={22} /></button>
          </div>
          <p className="suprema-page-title">{page.title}</p>
          <p className="suprema-share-hint">Escolha onde compartilhar. Você revisa a mensagem antes de publicar.</p>
          <div className="suprema-share-grid">
            {links.map((link, index) => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
              aria-label={`Compartilhar no ${link.name}`} className="suprema-share-network">
              <span aria-hidden="true" className="suprema-network-icon">{icons[index]}</span><span>{link.name}</span>
            </a>)}
          </div>
          <button type="button" onClick={copy} className="suprema-copy" id="btn-copy-share-link">
            {copyStatus === 'success' ? <Check aria-hidden="true" size={20} /> : <Copy aria-hidden="true" size={20} />}
            {copyStatus === 'success' ? 'Texto e link copiados!' : 'Copiar recomendação e link'}
          </button>
          <p role="status" aria-live="polite" className="suprema-copy-status">{copyStatus === 'success' ? 'Pronto! Cole onde quiser compartilhar.' : copyStatus === 'error' ? 'Não foi possível copiar. Selecione o texto abaixo e copie manualmente.' : ''}</p>
          {copyStatus === 'error' && <label className="suprema-manual-copy">Texto para copiar<textarea readOnly value={recommendation} onFocus={(event) => event.target.select()} /></label>}
          <span className="suprema-share-footer"><Link2 aria-hidden="true" size={14} /> Compartilhamento da página atual</span>
        </div>
      </dialog>

      <div className={`suprema-float suprema-float-right ${isProductPage ? 'suprema-product-offset' : ''}`} id="floating-quick-actions" aria-label="Atalhos de atendimento">
        {showTop && <button type="button" aria-label="Voltar ao topo" id="btn-back-to-top" className="suprema-circle suprema-top"
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
          <ArrowUp aria-hidden="true" size={21} />
        </button>}
        <a href={CONTACT_INFO.phoneLink} id="floating-call" aria-label="Ligar para a SUNCELL Guaíra" className="suprema-contact suprema-call">
          <Phone aria-hidden="true" size={21} /><span><small>Unidade Guaíra</small>Ligar</span>
        </a>
        <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" id="floating-whatsapp"
          aria-label="Conversar no WhatsApp da SUNCELL Guaíra" className="suprema-contact suprema-whatsapp">
          <MessageCircle aria-hidden="true" size={23} /><span><small>Fale com a equipe</small>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
