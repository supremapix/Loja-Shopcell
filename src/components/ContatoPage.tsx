import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, MapPin, Clock, Truck, ShieldCheck, 
  Send, CheckCircle2, Copy, Navigation, Store, Smartphone, Star 
} from 'lucide-react';
import { CONTACT_INFO } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import BackToTop from './BackToTop';

export default function ContatoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <EnhancedSEO
        title="Contato Shopcell Curitiba | Endereço, WhatsApp, Telefone e Loja Física"
        description="Fale com a Shopcell Curitiba. Loja física no Edifício Downtown, Rua Conselheiro Laurindo, 809 - Sala 402 - Centro. WhatsApp oficial (41) 3798-9918."
        canonical="https://www.celularescuritibashopcell.com.br/contato"
      />

      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* HERO SECTION DE CONTATO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF6600]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/15 border border-[#FF6600]/30 text-[#FF8533] text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <Store className="w-3.5 h-3.5" />
            Canais de Atendimento Oficial
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            Fale com a Shopcell Curitiba
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Tire dúvidas sobre modelos em estoque, consulte valores e formas de pagamento, agende sua retirada presencial ou solicite entrega expressa no mesmo dia via motoboy.
          </p>

          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-xs sm:text-sm text-slate-300">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Nota 5.0 no Google (+3.800 avaliações de clientes reais)</span>
          </div>
        </div>
      </section>

      {/* CARDS DE CONTATO PRINCIPAIS */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 sm:-mt-24 relative z-20">
            
            {/* WHATSAPP CARD */}
            <div className="bg-white rounded-2xl p-8 border-2 border-emerald-300 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-200 mb-6">
                  <MessageSquare className="w-7 h-7 fill-emerald-50" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  ATENDIMENTO MAIS RÁPIDO
                </span>
                <h3 className="font-display font-black text-slate-900 text-2xl mb-2">
                  WhatsApp Oficial
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Envie uma mensagem direta para nossa equipe. Passamos fotos reais, orçamentos e disponibilidade imediata.
                </p>
                <div className="text-lg font-mono font-bold text-slate-900 mb-6">
                  {CONTACT_INFO.whatsapp}
                </div>
              </div>

              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>
            </div>

            {/* LOJA FÍSICA CARD */}
            <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-[#FF6600]/10 text-[#FF6600] rounded-2xl flex items-center justify-center border border-[#FF6600]/20 mb-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-wider block mb-1">
                  RETIRADA PRESENCIAL
                </span>
                <h3 className="font-display font-black text-slate-900 text-2xl mb-2">
                  Loja no Centro
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Edifício Downtown: Rua Conselheiro Laurindo, 809 - Sala 402 - Centro, Curitiba/PR.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-6 bg-slate-100 p-2.5 rounded-lg">
                  <Clock className="w-4 h-4 text-[#FF6600] shrink-0" />
                  <span>Seg a Sex: 09h às 18h | Sáb: 09h às 13h</span>
                </div>
              </div>

              <button
                onClick={copyAddress}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Endereço Copiado!' : 'Copiar Endereço Completo'}</span>
              </button>
            </div>

            {/* TELEFONE & SUPORTE */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-200 mb-6">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  LIGAÇÃO TELEFÔNICA
                </span>
                <h3 className="font-display font-black text-slate-900 text-2xl mb-2">
                  Telefone Fixo
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Prefere ligar? Nosso time de atendimento está à disposição durante o horário comercial.
                </p>
                <div className="text-lg font-mono font-bold text-slate-900 mb-6">
                  {CONTACT_INFO.phone}
                </div>
              </div>

              <a
                href={CONTACT_INFO.phoneLink}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DO MAPA INTERATIVO E FOTOS DA LOJA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* INFORMAÇÕES DE VISITA */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block">
                COMO CHEGAR
              </span>
              <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight leading-tight">
                Localização Privilegiada no Centro de Curitiba
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nossa loja fica no tradicional <strong>Edifício Downtown</strong>, um prédio comercial moderno e seguro com portaria e elevadores, próximo à Rua XV de Novembro e ao Shopping Mueller.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Navigation className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">Fácil Acesso:</strong>
                    <span className="text-slate-600 text-xs">Estacionamentos conveniados e pontos de ônibus a poucos metros.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Truck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">Entrega Expressa no Mesmo Dia:</strong>
                    <span className="text-slate-600 text-xs">Não pode vir até a loja? Enviamos via motoboy para toda Curitiba e Região Metropolitana com pagamento seguro na entrega.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">12 Meses de Garantia Direto na Loja:</strong>
                    <span className="text-slate-600 text-xs">Suporte presencial humanizado para qualquer dúvida ou configuração.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>

            {/* MAPA EMBED GOOGLE MAPS */}
            <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-lg min-h-[420px] relative">
              <iframe
                title="Localização Shopcell Curitiba no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.220138096245!2d-49.2676059!3d-25.4308553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46d790d9ec3%3A0x8dd33e7daaa7e91!2sR.%20Conselheiro%20Laurindo%2C%20809%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080060-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px]"
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
