import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, MapPin, Clock, Truck, ShieldCheck, 
  Send, CheckCircle2, Copy, Navigation, Store, Smartphone, Star, Mail, Globe, ExternalLink, ArrowRight
} from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import BackToTop from './BackToTop';

export default function ContatoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedStore, setCopiedStore] = useState<string | null>(null);

  const copyAddress = (address: string, storeId: string) => {
    navigator.clipboard.writeText(address);
    setCopiedStore(storeId);
    setTimeout(() => setCopiedStore(null), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <EnhancedSEO
        title="Contato SUNCELL Curitiba | Lojas no Mercado Goes (Guaíra e Alto Boqueirão)"
        description="Fale com a SUNCELL Assistência Técnica e Celulares em Curitiba. Unidade Guaíra: (41) 99917-6640 e Unidade Alto Boqueirão: (41) 99750-1961 (Dentro do Mercado Goes). E-mail: info@suncellassistencia.com.br."
        canonical="https://www.celularescuritibashopcell.com.br/contato"
      />

      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* HERO SECTION DE CONTATO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF6600]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/15 border border-[#FF6600]/30 text-[#FF8533] text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <Store className="w-3.5 h-3.5" />
            Canais de Atendimento SUNCELL
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            Fale com a SUNCELL Curitiba
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Possuímos duas unidades físicas dentro do tradicional <strong>Mercado Goes</strong> (Guaíra e Alto Boqueirão). Tire dúvidas sobre smartphones, solicite orçamentos de assistência técnica ou agende sua entrega via motoboy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6600] to-amber-500 hover:brightness-110 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>Ver Lojas no Site Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={CONTACT_INFO.emailLink}
              className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-slate-500 px-4 py-2.5 rounded-xl text-xs text-slate-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FF8533]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* DUAL STORE CONTACT CARDS */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-14 sm:-mt-20 relative z-20 mb-12">
            
            {/* SUNCELL GUAÍRA */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-wider bg-[#FF6600]/10 px-3 py-1 rounded-full">
                    UNIDADE GUAÍRA • MERCADO GOES
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    Loja Física
                  </span>
                </div>
                <h3 className="font-display font-black text-slate-900 text-2xl mb-2">
                  SUNCELL Guaíra
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dentro do Mercado Goes - Rua Maria Moscardi Fanini, 261 - Guaíra, Curitiba - PR, CEP 80220-450.
                </p>

                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Clock className="w-4 h-4 text-[#FF6600] shrink-0" />
                    <span>Segunda a Sábado em horário comercial</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold font-mono text-sm">
                    <Phone className="w-4 h-4 text-[#FF6600] shrink-0" />
                    <span>(41) 99917-6640</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={STORES[0].whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp Unidade Guaíra</span>
                </a>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => copyAddress(STORES[0].address, 'guaira')}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedStore === 'guaira' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedStore === 'guaira' ? 'Copiado!' : 'Copiar Endereço'}</span>
                  </button>
                  <a
                    href={STORES[0].mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SUNCELL ALTO BOQUEIRÃO */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-wider bg-[#FF6600]/10 px-3 py-1 rounded-full">
                    UNIDADE ALTO BOQUEIRÃO • MERCADO GOES
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    Loja Física
                  </span>
                </div>
                <h3 className="font-display font-black text-slate-900 text-2xl mb-2">
                  SUNCELL Alto Boqueirão
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dentro do Mercado Goes - R. Pastor Antônio Polito, 1805 - Alto Boqueirão, Curitiba - PR, CEP 81770-260.
                </p>

                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Clock className="w-4 h-4 text-[#FF6600] shrink-0" />
                    <span>Segunda a Sábado em horário comercial</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold font-mono text-sm">
                    <Phone className="w-4 h-4 text-[#FF6600] shrink-0" />
                    <span>(41) 99750-1961</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={STORES[1].whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp Alto Boqueirão</span>
                </a>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => copyAddress(STORES[1].address, 'boqueirao')}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedStore === 'boqueirao' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedStore === 'boqueirao' ? 'Copiado!' : 'Copiar Endereço'}</span>
                  </button>
                  <a
                    href={STORES[1].mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* EMAIL & SUPORTE INSTITUCIONAL */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF8533] uppercase">
                <Mail className="w-4 h-4" />
                <span>ATENDIMENTO CORPORATIVO & DÚVIDAS</span>
              </div>
              <h4 className="font-display font-black text-xl text-white">
                Prefere enviar uma mensagem por e-mail?
              </h4>
              <p className="text-slate-300 text-sm">
                Entre em contato pelo e-mail oficial: <strong className="text-white">{CONTACT_INFO.email}</strong>
              </p>
            </div>

            <a
              href={CONTACT_INFO.emailLink}
              className="bg-white hover:bg-slate-100 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#FF6600]" />
              <span>Enviar E-mail</span>
            </a>
          </div>

        </div>
      </section>

      {/* SEÇÃO DO MAPA INTERATIVO E INFORMAÇÕES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* INFORMAÇÕES DE VISITA */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block">
                CONVENIÊNCIA & SEGURANÇA
              </span>
              <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight leading-tight">
                Duas Unidades no Mercado Goes com Estacionamento
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As lojas da SUNCELL foram planejadas para oferecer total conforto: localizadas dentro do Mercado Goes (Unidade Guaíra e Unidade Alto Boqueirão), com estacionamento facilitado, ambiente seguro e equipe técnica qualificada.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Navigation className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">Fácil Acesso no Mercado Goes:</strong>
                    <span className="text-slate-600 text-xs">Estacionamento no local e facilidade para retirar seus aparelhos com total tranquilidade.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Truck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">Entrega Expressa no Mesmo Dia:</strong>
                    <span className="text-slate-600 text-xs">Não pode vir até uma das lojas? Enviamos via motoboy para toda Curitiba e Região Metropolitana com pagamento seguro na entrega.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">12 Meses de Garantia Local:</strong>
                    <span className="text-slate-600 text-xs">Suporte presencial humanizado e assistência técnica especializada.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD INSTITUCIONAL PORTAL OFICIAL */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <span className="text-xs font-mono font-bold text-[#FF8533] uppercase tracking-wider bg-[#FF6600]/20 px-3 py-1 rounded-full inline-block border border-[#FF6600]/30">
                PORTAL OFICIAL
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                SUNCELL Assistência Técnica & Vendas
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Conheça mais sobre a história, nossos laboratórios técnicos, troca de telas, baterias e serviços especializados no site oficial.
              </p>

              <div className="pt-2">
                <a
                  href={CONTACT_INFO.officialSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#D45500] text-white font-extrabold px-6 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Visitar suncellassistencia.com.br/#lojas-section</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
