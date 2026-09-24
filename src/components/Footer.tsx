import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, ArrowUp, Star, Home, Smartphone, Store, Headphones, Users, ShieldCheck, CheckCircle2, Globe, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-200 relative z-10 overflow-hidden border-t-2 border-slate-800">
      {/* High-Visibility, High-Definition Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover min-w-full min-h-full opacity-60 filter brightness-90 contrast-115"
        >
          <source src="https://img.supremasite.com.br/shopcell.mp4" type="video/mp4" />
        </video>
        
        {/* Vignette & Contrast Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/75 to-slate-950" />
      </div>

      {/* Radiant Orange Metallic Accent Bar */}
      <div 
        className="w-full h-1.5 bg-gradient-to-r from-[#FF6600] via-amber-400 to-[#FF6600] relative z-10 shadow-lg shadow-[#FF6600]/30"
        id="premium-shifting-footer-separator"
      />

      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 relative z-10">
        {/* Top Feature Bar in Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-slate-900/85 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center gap-3.5 shadow-lg">
            <div className="p-2.5 bg-[#FF6600]/20 text-[#FF6600] rounded-xl border border-[#FF6600]/30 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-white font-display font-bold text-sm block">Garantia Local 12 Meses</span>
              <span className="text-slate-300 text-xs">Assistência e suporte técnico direto em nossas lojas físicas</span>
            </div>
          </div>

          <div className="bg-slate-900/85 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center gap-3.5 shadow-lg">
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-white font-display font-bold text-sm block">Produtos 100% Originais</span>
              <span className="text-slate-300 text-xs">Aparelhos novos lacrados e procedência garantida</span>
            </div>
          </div>

          <div className="bg-slate-900/85 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center gap-3.5 shadow-lg">
            <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-white font-display font-bold text-sm block">Mercado Goes (Guaíra & Boqueirão)</span>
              <span className="text-slate-300 text-xs">Retirada facilitada com estacionamento e motoboy express</span>
            </div>
          </div>
        </div>

        {/* Main Footer Columns with Glassmorphism Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-[#FF6600] to-[#E65C00] rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg shadow-[#FF6600]/30 border border-white/20">
                SC
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-wider text-white text-xl leading-none">
                  SUNCELL
                </span>
                <span className="font-mono text-[9px] text-[#FF8533] tracking-widest font-extrabold mt-1 uppercase">
                  Assistência & Celulares CWB
                </span>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-300 font-medium">
              Referência em smartphones originais e assistência técnica especializada em Curitiba, presente em duas unidades dentro do Mercado Goes.
            </p>

            <a
              href={CONTACT_INFO.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#FF8533] hover:text-white font-bold transition-colors bg-[#FF6600]/15 px-3 py-1.5 rounded-lg border border-[#FF6600]/30"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>suncellassistencia.com.br</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-4 shadow-xl">
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3">
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
                  <span>Catálogo de Celulares</span>
                </Link>
              </li>
              <li>
                <Link to="/acessorios" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-[#FF6600]" />
                  <span>Acessórios Originais</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FF6600]" />
                  <span>Sobre a SUNCELL</span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF6600]" />
                  <span>Contato & Unidades</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details for both stores */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-4 shadow-xl">
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3">
              Nossas Unidades
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              {/* Guaíra */}
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span>SUNCELL Guaíra (Mercado Goes)</span>
                </div>
                <p className="text-[11px] text-slate-400">Rua Maria Moscardi Fanini, 261</p>
                <a href={STORES[0].whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-400 font-bold font-mono text-[11px] hover:underline">
                  <MessageSquare className="w-3 h-3" />
                  <span>(41) 99917-6640</span>
                </a>
              </div>

              {/* Alto Boqueirão */}
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span>SUNCELL Alto Boqueirão</span>
                </div>
                <p className="text-[11px] text-slate-400">R. Pastor Antônio Polito, 1805</p>
                <a href={STORES[1].whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-400 font-bold font-mono text-[11px] hover:underline">
                  <MessageSquare className="w-3 h-3" />
                  <span>(41) 99750-1961</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Email, Timings and Top */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase border-l-2 border-[#FF6600] pl-3">
                Atendimento Oficial
              </h4>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 text-xs space-y-1.5">
                <span className="block text-[10px] text-slate-400 font-mono">E-MAIL:</span>
                <a href={CONTACT_INFO.emailLink} className="text-white hover:text-[#FF6600] font-mono font-bold text-xs truncate block">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300 font-mono bg-slate-950/80 p-3 rounded-xl border border-white/10">
                {CONTACT_INFO.hours}
              </p>
            </div>
            
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-[#FF6600] border border-white/20 hover:border-[#FF6600] text-xs font-bold text-white py-3 rounded-xl transition-all shadow-md cursor-pointer group"
                id="btn-voltar-ao-topo"
              >
                <ArrowUp className="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors" />
                <span>Voltar ao Topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Semantic Link Mesh */}
        <div className="border-t border-white/10 pt-8 pb-6 mb-8">
          <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider text-[#FF6600] mb-4">
            Páginas de Atendimento e SEO Local em Curitiba
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 text-[11px] font-mono text-slate-400">
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs text-slate-300 font-medium">
              © {new Date().getFullYear()} SUNCELL Curitiba. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-slate-400 font-mono">
              CNPJ: {CONTACT_INFO.cnpj} | Unidades Mercado Goes: Guaíra & Alto Boqueirão - Curitiba - PR
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-900/90 border border-white/15 px-4 py-2 rounded-2xl shadow-md backdrop-blur-md">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Desenvolvido por</span>
            <a 
              href={CONTACT_INFO.creditoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
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
