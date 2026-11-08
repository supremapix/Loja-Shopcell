import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Clock3, Globe, Instagram, Mail, MapPin, MessageSquare, Plus } from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data';
import SupremaCredit from './SupremaCredit';

const localLinks = [
  ['/sitio-cercado', 'Sítio Cercado'],
  ['/loja-de-celular-sitio-cercado', 'Loja Sítio Cercado'],
  ['/comprar-celular-curitiba', 'Comprar celular em Curitiba'],
  ['/celular-barato-curitiba', 'Celular barato em Curitiba'],
  ['/troca-de-celular-curitiba', 'Troca de celular'],
  ['/celular-com-garantia-curitiba', 'Celular com garantia'],
  ['/loja-de-celulares-perto-de-mim', 'Celulares perto de mim'],
  ['/bairro/centro', 'Centro Curitiba'],
  ['/bairro/batel', 'Batel'],
  ['/bairro/agua-verde', 'Água Verde'],
  ['/bairro/pinheirinho', 'Pinheirinho'],
  ['/bairro/boqueirao', 'Boqueirão'],
];

const footerNavigation = [
  ['/', 'Início'],
  ['/celulares', 'Catálogo de celulares'],
  ['/#assistencia', 'Assistência técnica'],
  ['/acessorios', 'Acessórios'],
  ['/sobre', 'Sobre a SUNCELL'],
  ['/contato', 'Contato & unidades'],
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });

  return (
    <footer className="sc-shell-footer">
      <div className="sc-shell-footer-orbit" aria-hidden="true" />
      <div className="sc-shell-container sc-shell-footer-content">
        <div className="sc-shell-footer-intro">
          <div>
            <span className="sc-shell-eyebrow"><span aria-hidden="true" /> A CONEXÃO CONTINUA</span>
            <h2>O próximo passo.<br /><span>Mais perto de você.</span></h2>
          </div>
          <a className="sc-shell-footer-cta" href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <span>Vamos conversar<small>Encontre sua próxima conexão</small></span>
            <span className="sc-shell-footer-cta-icon"><ArrowUpRight size={27} aria-hidden="true" /></span>
          </a>
        </div>

        <div className="sc-shell-footer-stores">
          {STORES.map((store, index) => (
            <article key={store.id} className="sc-shell-store-card">
              <img src={index === 0 ? '/images/suncell-loja-guaira.webp' : '/images/suncell-loja-boqueirao.webp'} alt={`${store.name} no Mercado Goes`} loading="lazy" decoding="async" />
              <div className="sc-shell-store-card-shade" aria-hidden="true" />
              <div className="sc-shell-store-card-content">
                <span className="sc-shell-store-label"><span>0{index + 1} / LOJA FÍSICA</span><MapPin size={15} aria-hidden="true" /></span>
                <h3>{store.neighborhood}</h3>
                <p>Dentro do Mercado Goes</p>
                <address>{store.street}<br />{store.neighborhood} · Curitiba, PR · {store.cep}</address>
                <div className="sc-shell-store-links">
                  <a href={store.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${store.neighborhood}: ${store.phone}`}><MessageSquare size={15} aria-hidden="true" />{store.phone}</a>
                  <a href={store.mapsLink} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${store.name} no mapa`}>Como chegar <ArrowUpRight size={15} aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="sc-shell-footer-main">
          <div className="sc-shell-footer-brand">
            <Link to="/" className="sc-shell-brand" aria-label="SUNCELL, página inicial">
              <span className="sc-shell-brand-symbol"><img src="/favicon.svg" alt="" width="42" height="42" /></span>
              <span className="sc-shell-brand-type"><strong>SUNCELL</strong><small>TECNOLOGIA & CONEXÃO</small></span>
            </Link>
            <p>Smartphones, acessórios e assistência técnica. Tecnologia com atendimento próximo, em duas unidades de Curitiba.</p>
            <div className="sc-shell-social-links">
              <a href="https://www.instagram.com/suncell.brasil" target="_blank" rel="noopener noreferrer" aria-label="Instagram oficial da SUNCELL"><Instagram size={18} aria-hidden="true" /></a>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da SUNCELL"><MessageSquare size={18} aria-hidden="true" /></a>
              <a href={CONTACT_INFO.officialSiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Site oficial da SUNCELL"><Globe size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <nav className="sc-shell-footer-nav" aria-label="Navegação do rodapé">
            <h3>Explore</h3>
            {footerNavigation.map(([path, label]) => <Link key={path} to={path}>{label}<ArrowUpRight size={13} aria-hidden="true" /></Link>)}
          </nav>
          <div className="sc-shell-footer-service">
            <h3>Atendimento</h3>
            <a href={CONTACT_INFO.emailLink}><Mail size={16} aria-hidden="true" />{CONTACT_INFO.email}</a>
            <p><Clock3 size={16} aria-hidden="true" /><span>Segunda a sábado · 09h às 19h<br /><small>Dentro do Mercado Goes</small></span></p>
            <a href={CONTACT_INFO.officialSiteUrl} target="_blank" rel="noopener noreferrer" className="sc-shell-official-site">suncellassistencia.com.br <ArrowUpRight size={15} aria-hidden="true" /></a>
            <button type="button" className="sc-shell-back-top" id="btn-voltar-ao-topo" onClick={scrollToTop}>Voltar ao topo <ArrowUp size={17} aria-hidden="true" /></button>
          </div>
        </div>

        <details className="sc-shell-local-links">
          <summary>Conectando Curitiba <span>Explore o atendimento na sua região <Plus size={17} aria-hidden="true" /></span></summary>
          <nav aria-label="Atendimento local em Curitiba">{localLinks.map(([path, label]) => <Link key={path} to={path}>{label}<ArrowUpRight size={12} aria-hidden="true" /></Link>)}</nav>
        </details>

        <div className="sc-shell-footer-bottom">
          <p>© {new Date().getFullYear()} SUNCELL Curitiba. Todos os direitos reservados.</p>
          <p>CNPJ: {CONTACT_INFO.cnpj}</p>
          <span>GUAÍRA & ALTO BOQUEIRÃO / CURITIBA, PR</span>
        </div>
        <SupremaCredit />
        <div className="sc-shell-footer-wordmark" aria-hidden="true">SUNCELL</div>
      </div>
    </footer>
  );
}
