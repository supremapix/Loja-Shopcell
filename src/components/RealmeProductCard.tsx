import { Link } from 'react-router-dom';
import { ArrowUpRight, Battery, MessageSquare, ShieldCheck, ShoppingCart, Smartphone } from 'lucide-react';
import { RealmeProduct } from '../realmeData';
import { useCart } from '../context/CartContext';
import '../catalog.css';

interface RealmeProductCardProps {
  product: RealmeProduct;
}

export default function RealmeProductCard({ product }: RealmeProductCardProps) {
  const { addToCart } = useCart();
  const whatsappUrl = `https://wa.me/5541999176640?text=${encodeURIComponent(`Olá! Tenho interesse no ${product.name}`)}`;
  const displayName = product.name.replace(/\s*\([^)]*\)$/, '');
  const goToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  return (
    <article className="sc-product-card" id={`card-celular-${product.slug}`}>
      <div className="sc-card-stage">
        <div className="sc-card-stage-top">
          <span className="sc-stage-label">REALME / SMARTPHONE</span>
          <span className="sc-stage-color">{product.color}</span>
        </div>
        <Link
          to={`/celular/${product.slug}`}
          onClick={goToTop}
          className="sc-card-image"
          aria-label={`Ver detalhes do ${product.name}`}
        >
          <img src={product.image} alt={product.altText} loading="lazy" width="600" height="600" />
        </Link>
        <div className="sc-card-stage-bottom">
          <span><ShieldCheck aria-hidden="true" /> 12 meses de garantia</span>
          <Link to={`/celular/${product.slug}`} onClick={goToTop} className="sc-image-arrow" aria-label={`Conhecer ${product.name}`}>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="sc-card-body">
        <div className="sc-card-heading">
          <span className="sc-overline">Dual SIM · Anatel</span>
          <h2><Link to={`/celular/${product.slug}`} onClick={goToTop}>{displayName}</Link></h2>
          <p>{product.shortDescription}</p>
        </div>
        <div className="sc-card-specs">
          <div><Smartphone aria-hidden="true" /><span><small>Tela</small>{product.specs.tela}</span></div>
          <div><Battery aria-hidden="true" /><span><small>Bateria</small>{product.specs.bateria}</span></div>
        </div>
        <div className="sc-card-purchase">
          <div className="sc-card-price">
            <span className="sc-price-caption">À vista no Pix / dinheiro</span>
            <strong>{product.priceFormatted}</strong>
            <span className="sc-installments">ou até <b>{product.installments}</b></span>
          </div>
          <button
            onClick={() => addToCart(product, 1)}
            className="sc-button sc-button-primary sc-button-full"
            id={`btn-cart-${product.slug}`}
            aria-label={`Incluir ${product.name} no carrinho`}
          >
            <ShoppingCart aria-hidden="true" /> Incluir no carrinho <ArrowUpRight aria-hidden="true" />
          </button>
          <div className="sc-card-secondary">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sc-button sc-button-mint" aria-label={`Comprar ${product.name} no WhatsApp`} id={`btn-whatsapp-${product.slug}`}>
              <MessageSquare aria-hidden="true" /> WhatsApp
            </a>
            <Link to={`/celular/${product.slug}`} onClick={goToTop} className="sc-button sc-button-outline" id={`btn-detalhes-${product.slug}`}>
              Ficha técnica <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
