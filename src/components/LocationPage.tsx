import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { bairrosData } from '../bairrosData';
import { CATEGORY_HIGHLIGHTS, CONTACT_INFO } from '../data';
import EnhancedSEO from './EnhancedSEO';
import Navbar from './Navbar';
import Ticker from './Ticker';
import Features from './Features';
import Garantia from './Garantia';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Footer from './Footer';
import ShareButton from './ShareButton';
import { MapPin, MessageSquare, ChevronRight, ShieldCheck, Check } from 'lucide-react';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();

  const currentBairro = bairrosData.find(
    (b) => b.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!currentBairro) {
    return <Navigate to="/404" replace />;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const customWhatsAppLink = `https://api.whatsapp.com/send?phone=554137989918&text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20celulares%20com%20entrega%20expressa%20para%20o%20bairro%20${encodeURIComponent(currentBairro.nome)}%20Curitiba%21`;

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans relative">
      <EnhancedSEO
        title={currentBairro.tituloSEO}
        description={currentBairro.metaDescription}
        canonical={`https://www.celularescuritibashopcell.com.br/bairro/${currentBairro.slug}`}
        bairroName={currentBairro.nome}
        regiaoName={currentBairro.regiao}
      />

      <Navbar
        searchQuery=""
        onSearchChange={() => {}}
      />

      <div className="pt-28 pb-10 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-mono font-medium">
            <Link to="/" className="hover:text-[#FF6600] transition-colors">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-500">Bairros Atendidos</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#FF6600] font-bold">{currentBairro.nome}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-1.5 bg-[#FF6600]/15 border border-[#FF6600]/25 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
                <span className="text-[10px] font-bold text-[#FF6600] uppercase tracking-wider font-mono">
                  Curitiba - Região {currentBairro.regiao}
                </span>
              </div>

              <h1 className="font-display font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
                Loja de Celulares no <span className="text-[#FF6600]">{currentBairro.nome}</span> Curitiba
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {currentBairro.introducao}
              </p>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex gap-3 text-xs text-slate-400 max-w-2xl">
                <MapPin className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-200 uppercase font-mono tracking-wider text-[10px]">Contexto Local & Direções</p>
                  <p className="mt-1 leading-relaxed">{currentBairro.coordenadasContexto}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={customWhatsAppLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-101"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900/50 border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Diferenciais do Serviço</span>
                <span className="text-xs text-[#FF6600] font-bold font-mono">★★★★★</span>
              </div>
              
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Pague na Chegada:</strong> Pagamento seguro após conferir o aparelho.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garantia Shopcell:</strong> Garantia completa de 12 meses presencial.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Entrega Expressa:</strong> Receba no mesmo dia no bairro {currentBairro.nome}.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Ticker />

      <section id="categorias" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-2">OPÇÕES DISPONÍVEIS</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
              Categorias Atendidas no {currentBairro.nome}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORY_HIGHLIGHTS.map(cat => (
              <div key={cat.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#FF6900]/10 text-[#FF6900] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase mb-3">
                    {cat.badge}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-1">{cat.title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{cat.description}</p>
                </div>

                <a
                  href={customWhatsAppLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Garantia />
      <Reviews />
      <FAQ />
      <Footer />

      <ShareButton />

      <a
        href={customWhatsAppLink}
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300"
        title="Enviar WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
