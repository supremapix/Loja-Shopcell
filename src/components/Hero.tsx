import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, BatteryCharging, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { REALME_PRODUCTS } from '../realmeData';

export default function Hero() {
  const [selected, setSelected] = useState(2);
  const product = REALME_PRODUCTS[selected];
  const shortName = product.name.split(' (')[0];
  return (
    <section id="inicio" className="sc-hero" aria-labelledby="sc-hero-title">
      <div className="sc-hero-grid" aria-hidden="true" />
      <div className="sc-hero-orb" aria-hidden="true" />
      <div className="sc-container sc-hero-layout">
        <div className="sc-hero-copy">
          <div className="sc-overline"><span className="sc-signal" /> SUNCELL · CURITIBA / PR</div>
          <h1 id="sc-hero-title">O próximo nível.<br /><span>Nas suas mãos.</span></h1>
          <p>Smartphones para ir além. Assistência para seguir em frente. Encontre sua próxima conexão com a SUNCELL, no Mercado Goes.</p>
          <div className="sc-hero-actions">
            <Link to="/celulares" className="sc-button sc-button-primary">Explorar smartphones <ArrowUpRight size={20} aria-hidden="true" /></Link>
            <a href="#assistencia" className="sc-button sc-button-ghost">Preciso de assistência <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="sc-hero-proof">
            <span><ShieldCheck size={19} aria-hidden="true" /> Garantia local de 12 meses nos aparelhos</span>
            <span><MapPin size={19} aria-hidden="true" /> Guaíra & Alto Boqueirão</span>
          </div>
        </div>

        <div className="sc-hero-showcase">
          <div className="sc-orbit sc-orbit-one" aria-hidden="true" /><div className="sc-orbit sc-orbit-two" aria-hidden="true" />
          <div className="sc-showcase-caption"><span>COLEÇÃO REALME</span><span>0{selected + 1} / 04</span></div>
          <div className="sc-device-stage">
            <span className="sc-device-side-label" aria-hidden="true">DESIGN / CONEXÃO / MOBILIDADE</span>
            <Link to={`/celular/${product.slug}`} className="sc-device-lightbox" aria-label={`Conhecer ${product.name}`}>
              <img key={product.slug} src={product.image} alt={product.altText} width="420" height="420" fetchPriority="high" className="sc-hero-device" />
              <span className="sc-device-lightbox-corner" aria-hidden="true"><ArrowUpRight size={22} /></span>
            </Link>
            <div className="sc-device-feature"><BatteryCharging size={22} aria-hidden="true" /><span>BATERIA<strong>{product.specs.bateria.split(',')[0]}</strong></span></div>
            <div className="sc-device-cross" aria-hidden="true">+</div>
          </div>
          <div className="sc-featured-info" aria-live="polite">
            <div><span>EM DESTAQUE NA VITRINE</span><h2>{shortName}</h2></div>
            <Link to={`/celular/${product.slug}`} aria-label={`Ver ${product.name} por ${product.priceFormatted}`}><small>À vista no Pix / dinheiro</small><strong>{product.priceFormatted}</strong><span>{product.installments}</span></Link>
          </div>
          <div className="sc-model-selector" aria-label="Escolher modelo em destaque">
            {REALME_PRODUCTS.map((item, index) => (
              <button type="button" key={item.slug} onClick={() => setSelected(index)} aria-pressed={selected === index} aria-label={`Mostrar ${item.name}`}>
                <span>0{index + 1}</span>{item.name.replace('Realme ', '').split(' (')[0]}<span className="sc-selector-line" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="sc-container sc-hero-bottom"><a href="#celulares"><ArrowDown size={16} aria-hidden="true" /> Descubra a SUNCELL</a><span><Smartphone size={16} aria-hidden="true" /> CELULARES + ACESSÓRIOS + ASSISTÊNCIA</span><a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">Atendimento humano <ArrowUpRight size={16} aria-hidden="true" /></a></div>
    </section>
  );
}
