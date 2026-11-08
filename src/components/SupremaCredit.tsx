import { ArrowUpRight, Heart } from 'lucide-react';
import '../suprema-signature.css';

export default function SupremaCredit() {
  return (
    <section className="suprema-signature" aria-label="Desenvolvimento do site">
      <p className="suprema-signature-credit">
        Desenvolvido com <Heart size={16} role="img" aria-label="amor" className="suprema-signature-heart" /> por
      </p>
      <a
        id="developer-suprema-link"
        className="suprema-signature-link"
        href="https://supremasite.com.br"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Suprema Sites Express: conheça nosso site (abre em nova aba)"
      >
        <span className="suprema-signature-logo">
          <img src="/images/suprema-logo.webp" alt="Suprema Mídia" width="649" height="185" loading="lazy" decoding="async" />
        </span>
        <span className="suprema-signature-name"><strong>Suprema Sites Express</strong><span>Conheça nosso site <ArrowUpRight size={17} aria-hidden="true" /></span></span>
      </a>
    </section>
  );
}
