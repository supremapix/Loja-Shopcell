import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare, ArrowUp, Star, Home, Smartphone, ShieldCheck, HelpCircle, RefreshCw } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative z-10 overflow-hidden">
      
      {/* Premium modern animated color-shifting gradient separator bar */}
      <div 
        className="w-full h-1.5 bg-gradient-to-r from-[#FF6600] via-red-500 via-[#FF6600] via-orange-400 to-[#FF6600] bg-[length:200%_auto] animate-gradient-shift"
        id="premium-shifting-footer-separator"
      />

      <div className="max-w-7xl mx-auto py-16 px-6">
        
        {/* Upper section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FF6600] rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-md">
                MI
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-wider text-white text-base leading-none">
                  MI SHOP CELL
                </span>
                <span className="font-mono text-[8px] text-[#FF6600] tracking-widest font-bold mt-0.5">
                  CURITIBA · PR
                </span>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-400 font-medium">
              Sua revenda autorizada multimarcas especializada em Xiaomi, POCO e Redmi no coração de Curitiba. Há mais de 8 anos conectando você ao melhor da tecnologia mundial.
            </p>
            
            {/* Google Stars Rating */}
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2.5 rounded-xl w-fit shadow-xs">
              <Star className="w-4 h-4 text-[#FF6600] fill-[#FF6600]" />
              <span className="text-white text-xs font-bold font-mono">5.0</span>
              <span className="text-[10px] text-slate-500 font-mono">Mais de 3.800 avaliações</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3.5">
              Navegação Útil
            </h4>
            <ul className="space-y-3 text-sm font-sans text-slate-300">
              <li>
                <a href="#inicio" className="flex items-center gap-2 py-3 px-4 sm:py-1 sm:px-0 bg-slate-900 sm:bg-transparent border border-slate-800 sm:border-0 rounded-xl sm:rounded-none text-slate-200 hover:text-[#FF6600] transition-all font-bold sm:font-semibold shadow-2xs min-h-[46px] sm:min-h-0">
                  <Home className="w-4.5 h-4.5 text-[#FF6600]" />
                  <span>Ir para o Início</span>
                </a>
              </li>
              <li>
                <a href="#produtos" className="flex items-center gap-2 py-3 px-4 sm:py-1 sm:px-0 bg-slate-900 sm:bg-transparent border border-slate-800 sm:border-0 rounded-xl sm:rounded-none text-slate-200 hover:text-[#FF6600] transition-all font-bold sm:font-semibold shadow-2xs min-h-[46px] sm:min-h-0">
                  <Smartphone className="w-4.5 h-4.5 text-[#FF6600]" />
                  <span>Catálogo de Smartphones</span>
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="flex items-center gap-2 py-3 px-4 sm:py-1 sm:px-0 bg-slate-900 sm:bg-transparent border border-slate-800 sm:border-0 rounded-xl sm:rounded-none text-slate-200 hover:text-[#FF6600] transition-all font-bold sm:font-semibold shadow-2xs min-h-[46px] sm:min-h-0">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#FF6600]" />
                  <span>Por que comprar com a gente?</span>
                </a>
              </li>
              <li>
                <a href="#RMCEbairros" className="flex items-center gap-2 py-3 px-4 sm:py-1 sm:px-0 bg-slate-900 sm:bg-transparent border border-slate-800 sm:border-0 rounded-xl sm:rounded-none text-slate-200 hover:text-[#FF6600] transition-all font-bold sm:font-semibold shadow-2xs min-h-[46px] sm:min-h-0">
                  <MapPin className="w-4.5 h-4.5 text-[#FF6600]" />
                  <span>Cidades e Bairros Atendidos</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="flex items-center gap-2 py-3 px-4 sm:py-1 sm:px-0 bg-slate-900 sm:bg-transparent border border-slate-800 sm:border-0 rounded-xl sm:rounded-none text-slate-200 hover:text-[#FF6600] transition-all font-bold sm:font-semibold shadow-2xs min-h-[46px] sm:min-h-0">
                  <HelpCircle className="w-4.5 h-4.5 text-[#FF6600]" />
                  <span>Dúvidas Frequentes (FAQ)</span>
                </a>
              </li>
              <li>
                <Link to="/comparar" className="flex items-center gap-2 py-3 px-4 sm:py-1 sm:px-0 bg-[#FF6600]/10 border border-[#FF6600]/30 sm:border-0 rounded-xl sm:rounded-none text-[#FF6600] hover:text-[#D45500] sm:text-slate-200 sm:hover:text-[#FF6600] transition-all font-bold sm:font-semibold shadow-2xs min-h-[46px] sm:min-h-0">
                  <RefreshCw className="w-4.5 h-4.5 text-[#FF6600]" />
                  <span>Compare Modelos (Novos vs Antigos)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3.5">
              Contatos Rápidos
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono leading-none">LIGAR CONVERSAR:</span>
                  <a href={CONTACT_INFO.phoneLink} className="hover:text-[#FF6600] font-mono font-bold text-white text-sm">{CONTACT_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <MessageSquare className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono leading-none">WHATSAPP DIRETO:</span>
                  <a href={CONTACT_INFO.whatsappLink} className="hover:text-[#FF6600] font-mono font-bold text-white text-sm">{CONTACT_INFO.whatsapp}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono leading-none">E-MAIL COMERCIAL:</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#FF6600] font-mono text-slate-300 break-all">{CONTACT_INFO.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono leading-none">NOSSO ENDEREÇO:</span>
                  <span className="leading-normal text-slate-200 font-medium">{CONTACT_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Timings and Voltar ao Topo */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3.5">
              Horários de Atendimento
            </h4>
            <p className="text-xs leading-relaxed text-slate-400 font-mono">
              Segunda a Sexta: 09:00h às 19:00h<br />
              Sábado: 10:00h às 16:00h<br />
              Domingo: Fechado
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 px-4 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
                id="btn-voltar-ao-topo"
              >
                <ArrowUp className="w-4 h-4 text-[#FF6600]" />
                <span>Voltar ao Topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Lower section */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* CNPJ and Legal */}
          <div className="space-y-1.5">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Xiaomi Shop Cell Curitiba. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              CNPJ: {CONTACT_INFO.cnpj} | R. Conselheiro Laurindo, 809 - Sala 402 - Curitiba - PR
            </p>
          </div>

          {/* Credits - Suprema Sites Express */}
          <div className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl shadow-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Desenvolvido por</span>
            <a 
              href={CONTACT_INFO.creditoUrl} 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              id="credit-suprema-sites"
            >
              <img 
                src={CONTACT_INFO.creditoLogo} 
                alt="Logo Suprema Sites" 
                referrerPolicy="no-referrer"
                className="h-4 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-bold text-white">{CONTACT_INFO.creditoName}</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
