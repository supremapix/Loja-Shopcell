import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare, ArrowUp, Star, Home, Smartphone, Store, Headphones, Users } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative z-10 overflow-hidden">
      <div 
        className="w-full h-1.5 bg-gradient-to-r from-[#FF6600] via-orange-500 to-[#FF6600]"
        id="premium-shifting-footer-separator"
      />

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center font-black text-white text-base shadow-md">
                SC
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-wider text-white text-lg leading-none">
                  SHOPCELL
                </span>
                <span className="font-mono text-[9px] text-[#FF6600] tracking-widest font-extrabold mt-0.5">
                  LOJA DE CELULARES CURITIBA
                </span>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-400 font-medium">
              Sua loja especializada em celulares em Curitiba. Há mais de 8 anos oferecendo atendimento personalizado, garantia de 6 meses e produtos originais.
            </p>
            
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2.5 rounded-xl w-fit shadow-xs">
              <Star className="w-4 h-4 text-[#FF6600] fill-[#FF6600]" />
              <span className="text-white text-xs font-bold font-mono">5.0</span>
              <span className="text-[10px] text-slate-500 font-mono">Mais de 3.800 avaliações</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3.5">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#FF6600]" />
                  <span>Início</span>
                </Link>
              </li>
              <li>
                <Link to="/celulares" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#FF6600]" />
                  <span>Celulares</span>
                </Link>
              </li>
              <li>
                <Link to="/loja-de-celular-curitiba" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#FF6600]" />
                  <span>Loja Curitiba</span>
                </Link>
              </li>
              <li>
                <Link to="/acessorios" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-[#FF6600]" />
                  <span>Acessórios</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FF6600]" />
                  <span>Sobre A Shopcell</span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF6600]" />
                  <span>Contato & Localização</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3.5">
              Atendimento
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono">TELEFONE:</span>
                  <a href={CONTACT_INFO.phoneLink} className="hover:text-[#FF6600] font-mono font-bold text-white text-xs">{CONTACT_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono">WHATSAPP:</span>
                  <a href={CONTACT_INFO.whatsappLink} className="hover:text-[#FF6600] font-mono font-bold text-white text-xs">{CONTACT_INFO.whatsapp}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono">ENDEREÇO:</span>
                  <span className="leading-normal text-slate-200 font-medium">{CONTACT_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Timings and Top */}
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

        {/* Semantic Link Mesh */}
        <div className="border-t border-slate-900 pt-8 pb-6 mb-8">
          <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider text-[#FF6600] mb-4">
            Páginas de Atendimento e SEO Local em Curitiba
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-[11px] font-mono text-slate-400">
            <Link to="/sitio-cercado" className="hover:text-[#FF6600] transition-colors truncate">• Sítio Cercado</Link>
            <Link to="/loja-de-celular-sitio-cercado" className="hover:text-[#FF6600] transition-colors truncate">• Loja Sítio Cercado</Link>
            <Link to="/comprar-celular-curitiba" className="hover:text-[#FF6600] transition-colors truncate">• Comprar Celular</Link>
            <Link to="/celular-barato-curitiba" className="hover:text-[#FF6600] transition-colors truncate">• Celular Barato</Link>
            <Link to="/troca-de-celular-curitiba" className="hover:text-[#FF6600] transition-colors truncate">• Troca de Celular</Link>
            <Link to="/celular-com-garantia-curitiba" className="hover:text-[#FF6600] transition-colors truncate">• Celular com Garantia</Link>
            <Link to="/loja-de-celulares-perto-de-mim" className="hover:text-[#FF6600] transition-colors truncate">• Celulares Perto de Mim</Link>
            <Link to="/bairro/centro" className="hover:text-[#FF6600] transition-colors truncate">• Centro Curitiba</Link>
            <Link to="/bairro/batel" className="hover:text-[#FF6600] transition-colors truncate">• Batel</Link>
            <Link to="/bairro/agua-verde" className="hover:text-[#FF6600] transition-colors truncate">• Água Verde</Link>
            <Link to="/bairro/pinheirinho" className="hover:text-[#FF6600] transition-colors truncate">• Pinheirinho</Link>
            <Link to="/bairro/boqueirao" className="hover:text-[#FF6600] transition-colors truncate">• Boqueirão</Link>
          </div>
        </div>

        {/* Lower section */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Shopcell Curitiba. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              CNPJ: {CONTACT_INFO.cnpj} | R. Conselheiro Laurindo, 809 - Sala 402 - Curitiba - PR
            </p>
          </div>

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
