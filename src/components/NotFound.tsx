import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  ShoppingBag, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  HelpCircle, 
  Clock, 
  FileText 
} from 'lucide-react';
import EnhancedSEO from './EnhancedSEO';
import { CONTACT_INFO } from '../data';

// Logo SVG with glowing rings matching Xiaomi identity
function Logo404() {
  return (
    <div className="relative w-36 h-36 mx-auto group">
      {/* Orange breathing halo glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
          boxShadow: [
            "0 0 20px rgba(255, 102, 0, 0.2)",
            "0 0 50px rgba(255, 102, 0, 0.6)",
            "0 0 20px rgba(255, 102, 0, 0.2)"
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-[#FF6600]/15 rounded-full filter blur-xl pointer-events-none"
      />

      {/* Floating inner sphere */}
      <motion.div
        animate={{ 
          y: [-4, 4, -4],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-full h-full bg-slate-900 border border-[#FF6600]/30 rounded-full flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105"
      >
        <span className="font-display font-black text-5xl text-[#FF6600] tracking-tighter">404</span>
      </motion.div>
    </div>
  );
}

export default function NotFound() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqList = [
    {
      q: "Os celulares são originais e lacrados?",
      a: "Sim! Trabalhamos apenas com celulares 100% originais da Xiaomi, Redmi e POCO, novos na caixa lacrada de fábrica. Nós abrimos o aparelho presencialmente com você na hora para testar tudo."
    },
    {
      q: "Em quantas vezes posso parcelar?",
      a: "Você pode parcelar diretamente em nossa loja física em até 12 vezes no cartão de crédito com as melhores taxas do mercado. Consulte as simulações com nosso atendimento via WhatsApp."
    },
    {
      q: "Qual a garantia dos aparelhos?",
      a: "Oferecemos garantia de 6 meses contra qualquer defeito de fabricação diretamente conosco na Xiaomi Shop Cell Curitiba, garantindo resolução rápida e assistência dedicada."
    },
    {
      q: "Onde fica a loja e qual o horário?",
      a: "Nossa loja física fica na Rua Conselheiro Laurindo, 809 – Sala 402, 4º Andar, Centro, Curitiba – PR (Edifício Downtown, bem próximo ao Shopping Estação). Funcionamos de Seg-Sex das 09h às 19h e Sábados das 10h às 16h."
    },
    {
      q: "Vocês fazem entrega / enviam para outras cidades?",
      a: "Sim! Fazemos entrega rápida via motoboy express com total segurança em Curitiba e em todas as cidades da Região Metropolitana (São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, etc.)."
    },
    {
      q: "Como faço para reservar um modelo?",
      a: "Basta clicar em qualquer um de nossos links para entrar em contato com nossa equipe comercial no WhatsApp. Nós reservamos o seu modelo preferido para entrega hoje ou para você retirar com segurança na loja física."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* 404 Noindex SEO Helmet */}
      <EnhancedSEO
        title="Página não encontrada (404) | Xiaomi Shop Cell Curitiba"
        description="A página solicitada não foi encontrada ou foi movida. Confira nossos canais de atendimento e perguntas frequentes."
        canonical="https://www.xiaomishopcell.com/404"
        keywords="404 xiaomi curitiba, pagina nao encontrada"
      />

      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_30%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-[#FF6600]/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10 w-full flex-grow flex flex-col justify-center items-center text-center">
        
        {/* Glowing Logo */}
        <div className="mb-8">
          <Logo404 />
        </div>

        {/* Message */}
        <div className="max-w-xl space-y-4 mb-12">
          <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest bg-[#FF6600]/10 border border-[#FF6600]/25 px-4 py-1.5 rounded-full inline-block">
            OPS! ALGO DEU ERRADO
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-none text-white">
            Página Não Encontrada
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            A URL que você tentou acessar não existe ou pode ter sido movida. Não se preocupe! Você pode falar diretamente com a nossa equipe comercial ou retornar para navegar por nossa vitrine virtual.
          </p>

          {/* Home and Catalog Core Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Voltar para a Home</span>
            </Link>
            
            <Link
              to="/#produtos"
              onClick={() => {
                // Ensure hash scroll works when going back home
                setTimeout(() => {
                  const el = document.getElementById('produtos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Celulares Disponíveis</span>
            </Link>
          </div>
        </div>

        {/* Actionable Contact Cards Grid */}
        <div className="w-full max-w-3xl mb-16">
          <h3 className="font-display font-extrabold text-sm uppercase text-slate-400 tracking-widest text-center mb-6">
            SUPORTE E ATENDIMENTO EXPRESSO
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Card WhatsApp */}
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="bg-slate-900 border border-slate-850 hover:border-[#25D366]/40 p-5 rounded-2xl flex flex-col items-center group transition-all"
            >
              <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform mb-3">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">WhatsApp</span>
              <span className="text-xs text-white font-bold font-mono mt-1 text-center truncate w-full">{CONTACT_INFO.whatsapp}</span>
            </a>

            {/* Card Fone */}
            <a 
              href={CONTACT_INFO.phoneLink}
              className="bg-slate-900 border border-slate-850 hover:border-[#FF6600]/40 p-5 rounded-2xl flex flex-col items-center group transition-all"
            >
              <div className="w-10 h-10 bg-[#FF6600]/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform mb-3">
                <Phone className="w-5 h-5 text-[#FF6600]" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Telefone</span>
              <span className="text-xs text-white font-bold font-mono mt-1 text-center truncate w-full">{CONTACT_INFO.phone}</span>
            </a>

            {/* Card E-mail */}
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-slate-900 border border-slate-850 hover:border-[#FF6600]/40 p-5 rounded-2xl flex flex-col items-center group transition-all"
            >
              <div className="w-10 h-10 bg-[#FF6600]/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform mb-3">
                <Mail className="w-5 h-5 text-[#FF6600]" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">E-mail</span>
              <span className="text-xs text-white font-bold font-mono mt-1 text-center truncate w-full">{CONTACT_INFO.email}</span>
            </a>

            {/* Card Localização */}
            <a 
              href={CONTACT_INFO.mapsLink}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="bg-slate-900 border border-slate-850 hover:border-[#FF6600]/40 p-5 rounded-2xl flex flex-col items-center group transition-all"
            >
              <div className="w-10 h-10 bg-[#FF6600]/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform mb-3">
                <MapPin className="w-5 h-5 text-[#FF6600]" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Mapa</span>
              <span className="text-xs text-white font-bold font-mono mt-1 text-center truncate w-full">Ver Loja no Mapa</span>
            </a>

          </div>
        </div>

        {/* Premium Animated Accordion FAQs Section */}
        <div className="w-full max-w-3xl text-left border-t border-slate-900 pt-16">
          <div className="flex items-center gap-2.5 mb-8 justify-center sm:justify-start">
            <HelpCircle className="w-5 h-5 text-[#FF6600]" />
            <h3 className="font-display font-extrabold text-lg text-white">
              Dúvidas Frequentes da Loja
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqList.map((faq, idx) => {
              const isSelected = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer select-none"
                  >
                    <span className="font-display font-bold text-sm text-slate-100 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        isSelected ? 'rotate-180 text-[#FF6600]' : ''
                      }`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-slate-850/40 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Store Details */}
        <div className="mt-16 pt-8 border-t border-slate-900 w-full max-w-3xl text-slate-500 text-xs space-y-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-600" />
              <span>{CONTACT_INFO.hours}</span>
            </div>
            <div>
              <span>CNPJ: {CONTACT_INFO.cnpj}</span>
            </div>
          </div>
          <p className="text-center sm:text-left leading-relaxed text-[11px] text-slate-600">
            Endereço: {CONTACT_INFO.address}
          </p>
        </div>

      </div>
    </div>
  );
}
