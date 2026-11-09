import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, BatteryCharging, Cable, Camera, Check, Clock3, Cpu, CreditCard, Instagram, MapPin, MessageCircle, MonitorSmartphone, Settings2, ShieldCheck, Smartphone, Wrench } from 'lucide-react';
import { CONTACT_INFO, STORES, REVIEWS } from '../data';
import { REALME_PRODUCTS } from '../realmeData';
import { bairrosData } from '../bairrosData';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import Hero from './Hero';
import RealmeProductCard from './RealmeProductCard';
import FAQ from './FAQ';

const services = [
  { Icon: MonitorSmartphone, title: 'Tela', text: 'Seu conteúdo de volta ao centro.', detail: 'Troca de tela' },
  { Icon: BatteryCharging, title: 'Bateria', text: 'Mais energia para sua rotina.', detail: 'Troca de bateria' },
  { Icon: Cpu, title: 'Placa', text: 'Cuidado nos mínimos circuitos.', detail: 'Reparo de placa e microsoldagem' },
  { Icon: Cable, title: 'Conexões', text: 'Cada conexão faz diferença.', detail: 'Conector de carga' },
  { Icon: Camera, title: 'Câmera & áudio', text: 'Imagem e som em sintonia.', detail: 'Câmera e alto-falante' },
  { Icon: Settings2, title: 'Sistema', text: 'Tecnologia funcionando para você.', detail: 'Software e atualização' },
];
const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.08 }, transition: { duration: 0.6 } };

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchQuery.trim().toLocaleLowerCase('pt-BR');
  const products = REALME_PRODUCTS.filter(product => `${product.name} ${product.shortDescription}`.toLocaleLowerCase('pt-BR').includes(query));
  return (
    <div className="sc-home">
      <EnhancedSEO title="SUNCELL Curitiba | Assistência Técnica de Celulares no Mercado Goes" description="Assistência técnica de celulares em Curitiba com diagnóstico gratuito e garantia. Troca de tela, bateria e placa nas unidades SUNCELL Guaíra e Alto Boqueirão, dentro do Mercado Goes." canonical="https://www.xiaomishopcell.com/" />
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <Hero />
        <div className="sc-benefit-strip"><div className="sc-container"><span><ShieldCheck aria-hidden="true" />12 meses de garantia local</span><span><CreditCard aria-hidden="true" />Pix ou até 12x no cartão</span><span><MapPin aria-hidden="true" />Duas lojas no Mercado Goes</span><span><MessageCircle aria-hidden="true" />Atendimento pelo WhatsApp</span></div></div>

        <motion.section {...reveal} id="celulares" className="sc-section sc-catalog-section">
          <div className="sc-container">
            <div className="sc-section-heading"><div><span className="sc-overline">01 / SUA PRÓXIMA CONEXÃO</span><h2 className="sc-display-heading">Escolha seu<br /><em>próximo passo.</em></h2></div><div className="sc-section-side"><p>Explore os smartphones Realme da nossa vitrine. Compare os detalhes e encontre o modelo que combina com você.</p><Link to="/celulares" className="sc-text-link">Catálogo completo <ArrowUpRight size={19} aria-hidden="true" /></Link></div></div>
            {query && <div className="sc-search-result" role="status">{products.length} modelo(s) para “{searchQuery}” <button type="button" onClick={() => setSearchQuery('')}>Limpar busca</button></div>}
            <div className="sc-home-products">{products.map(product => <RealmeProductCard key={product.slug} product={product} />)}</div>
            {products.length === 0 && <div className="sc-empty-search"><Smartphone size={32} aria-hidden="true" /><h3>Nenhum modelo encontrado.</h3><p>Tente outro nome ou fale com a equipe para consultar outras opções.</p><a className="sc-text-link" href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">Consultar opções <ArrowUpRight size={18} /></a></div>}
          </div>
        </motion.section>

        <section id="assistencia" className="sc-section sc-service-section">
          <div className="sc-container">
            <motion.div {...reveal} className="sc-service-intro">
              <div><span className="sc-overline">02 / ASSISTÊNCIA TÉCNICA</span><h2 className="sc-display-heading">Seu celular tem<br /><em>muito pela frente.</em></h2><p>Tela, bateria ou placa. Conte com a SUNCELL para cuidar do seu aparelho, com diagnóstico gratuito e garantia no serviço.</p><a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="sc-button sc-button-primary">Solicitar diagnóstico <ArrowUpRight size={20} aria-hidden="true" /></a></div>
              <div className="sc-diagnostic-art" aria-hidden="true"><div className="sc-diagnostic-circle" /><div className="sc-diagnostic-phone"><div className="sc-phone-island" /><Wrench size={56} strokeWidth={1} /><span>SUNCELL</span><div className="sc-scan-line" /><div className="sc-phone-grid" /></div><span className="sc-diagnostic-label sc-label-left"><span /> CUIDADO EM CADA DETALHE</span><span className="sc-diagnostic-label sc-label-right"><Check size={14} /> ASSISTÊNCIA LOCAL</span><span className="sc-diagnostic-coordinate">TELA / BATERIA / PLACA</span></div>
            </motion.div>
            <div className="sc-services-grid">{services.map(({ Icon, title, text, detail }, index) => <motion.a {...reveal} href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="sc-service-card" key={title} aria-label={`Consultar ${detail} no WhatsApp`}><div className="sc-service-card-top"><Icon size={27} strokeWidth={1.4} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><span className="sc-service-detail">{detail}<ArrowUpRight size={18} aria-hidden="true" /></span></motion.a>)}</div>
          </div>
        </section>

        <section className="sc-section sc-confidence-section" id="garantia"><div className="sc-container sc-confidence-layout"><motion.div {...reveal} className="sc-warranty-art"><ShieldCheck strokeWidth={1} size={86} aria-hidden="true" /><strong>12<span>MESES</span></strong><p>Garantia local nos aparelhos</p><div className="sc-warranty-rule" /><span>SUPORTE PERTO DE VOCÊ</span></motion.div><motion.div {...reveal}><span className="sc-overline">03 / TECNOLOGIA COM CONFIANÇA</span><h2 className="sc-display-heading">A experiência continua.<br /><em>Depois da compra.</em></h2><p>Smartphones novos e lacrados, com suporte presencial nas nossas lojas. Atendimento para escolher, comprar e cuidar do seu aparelho.</p><div className="sc-confidence-points"><span><Check aria-hidden="true" /> Produtos originais em caixas lacradas</span><span><Check aria-hidden="true" /> Garantia presencial no Mercado Goes</span><span><Check aria-hidden="true" /> Pagamento no Pix ou parcelado em até 12x</span></div><Link to="/sobre" className="sc-text-link">Conheça a SUNCELL <ArrowUpRight size={19} aria-hidden="true" /></Link></motion.div></div></section>

        <section id="RMCEbairros" className="sc-section sc-stores-section"><div className="sc-container">
          <motion.div {...reveal} className="sc-section-heading"><div><span className="sc-overline">04 / PERTINHO DE VOCÊ</span><h2 className="sc-display-heading">Digital por aqui.<br /><em>Presente em Curitiba.</em></h2></div><p className="sc-section-side">Duas unidades dentro do Mercado Goes. Escolha a mais próxima para conhecer os aparelhos ou falar com a nossa equipe.</p></motion.div>
          <div className="sc-store-grid">{STORES.map((store, index) => <motion.article {...reveal} className="sc-store-card" key={store.id}><div className="sc-store-image"><img src={index === 0 ? '/images/suncell-loja-guaira.webp' : '/images/suncell-loja-boqueirao.webp'} alt={`Loja ${store.name} no Mercado Goes`} width="960" height="480" loading="lazy" /><span>UNIDADE 0{index + 1}<ArrowUpRight size={17} aria-hidden="true" /></span></div><div className="sc-store-body"><span className="sc-overline">MERCADO GOES</span><h3>{store.neighborhood}</h3><p><MapPin size={18} aria-hidden="true" />{store.address}</p><p><Clock3 size={18} aria-hidden="true" />{store.hours}</p><div className="sc-store-actions"><a href={store.whatsappLink} className="sc-button sc-button-mint" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />{store.phone}</a><a href={store.mapsLink} className="sc-map-link" target="_blank" rel="noopener noreferrer" aria-label={`Ver ${store.name} no mapa`}>Como chegar <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></motion.article>)}</div>
          <details className="sc-coverage"><summary>Curitiba e região metropolitana <span>Explore os locais atendidos <ArrowDownIcon /></span></summary><div>{bairrosData.map(bairro => <Link key={bairro.slug} to={`/bairro/${bairro.slug}`}>{bairro.nome}<ArrowUpRight size={13} aria-hidden="true" /></Link>)}</div></details>
        </div></section>

        <section className="sc-section sc-reviews-section" id="depoimentos"><div className="sc-container"><motion.div {...reveal} className="sc-section-heading"><div><span className="sc-overline">05 / CONEXÕES REAIS</span><h2 className="sc-display-heading">Experiências<br /><em>compartilhadas.</em></h2></div><p className="sc-section-side">Relatos de clientes publicados na nossa loja.</p></motion.div><div className="sc-review-grid">{REVIEWS.map(review => <article className="sc-review-card" key={review.id}><span className="sc-quote-mark" aria-hidden="true">“</span><blockquote>{review.text}</blockquote><div><span className="sc-review-initial" aria-hidden="true">{review.author.slice(0,1)}</span><strong>{review.author}</strong></div></article>)}</div></div></section>
        <FAQ />
        <section id="instagram" className="sc-social-section"><div className="sc-container sc-social-layout"><div><span className="sc-overline">BASTIDORES / NOVIDADES / CONEXÕES</span><h2 className="sc-display-heading">A SUNCELL também<br />no seu <em>feed.</em></h2></div><a href="https://www.instagram.com/suncell.brasil" target="_blank" rel="noopener noreferrer" className="sc-social-link"><Instagram size={34} strokeWidth={1.4} aria-hidden="true" /><span>ACOMPANHE NO INSTAGRAM<strong>@suncell.brasil</strong></span><ArrowUpRight size={28} aria-hidden="true" /></a></div></section>
        <section className="sc-final-cta"><div className="sc-container"><span className="sc-overline">VAMOS CONVERSAR?</span><h2 className="sc-display-heading">Sua próxima conexão<br /><em>começa com um olá.</em></h2><a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="sc-button sc-button-primary">Falar com a SUNCELL <ArrowUpRight size={22} aria-hidden="true" /></a><span className="sc-cta-coordinate" aria-hidden="true">SUNCELL / CURITIBA / BR</span></div></section>
      </main>
      <Footer />
    </div>
  );
}
function ArrowDownIcon() { return <ArrowRight size={16} className="sc-coverage-arrow" aria-hidden="true" />; }
