import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, ShieldCheck, Zap, Smartphone, MessageSquare, 
  CheckCircle2, Sparkles, Star, PackageCheck, ArrowRight, Shield 
} from 'lucide-react';
import { CONTACT_INFO } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import BackToTop from './BackToTop';

export default function AcessoriosPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const acessoriosList = [
    {
      id: 'carregadores-turbo',
      title: 'Carregadores Turbo & Cabos Rápidos',
      subtitle: '33W, 67W e 80W Ultra Fast Charge',
      description: 'Fontes e cabos tipo C com homologação e proteção contra sobrecarga. Carregamento veloz e seguro para seu smartphone.',
      badge: 'ALTA POTÊNCIA',
      color: 'border-orange-200 bg-orange-50/40',
      iconColor: 'text-[#FF6600] bg-[#FF6600]/10',
      items: ['Carregadores Turbo 33W', 'Carregadores SuperVOOC 67W / 80W', 'Cabos Type-C Reforçados de 1m e 2m', 'Adaptadores homologados Anatel']
    },
    {
      id: 'peliculas-protecao',
      title: 'Películas de Alta Resistência',
      subtitle: 'Vidro 3D, Cerâmica e Privacidade',
      description: 'Proteção máxima contra riscos, trincos e quedas. Aplicação profissional de película na hora em nossa loja no Centro.',
      badge: 'PROTEÇÃO MÁXIMA',
      color: 'border-blue-200 bg-blue-50/40',
      iconColor: 'text-blue-600 bg-blue-50',
      items: ['Películas de Vidro Temperado 3D/9D', 'Películas Cerâmica Anti-Impacto', 'Películas Fosca e Anti-Espião/Privacidade', 'Aplicação perfeita sem bolhas']
    },
    {
      id: 'capas-anti-impacto',
      title: 'Capas & Cases Anti-Impacto',
      subtitle: 'Bordas Reforçadas e Proteção de Câmera',
      description: 'Modelos de cases transparentes de alta densidade, capas aveludadas por dentro e capas com borda airbag para absorver quedas.',
      badge: 'DURABILIDADE',
      color: 'border-emerald-200 bg-emerald-50/40',
      iconColor: 'text-emerald-600 bg-emerald-50',
      items: ['Capas Transparentes Anti-Amarelamento', 'Capas de Silicone com Interior Aveludado', 'Cases com Proteção Deslizante de Lente', 'Encaixe preciso para todos os botões']
    },
    {
      id: 'fones-audio',
      title: 'Fones de Ouvido & Áudio Bluetooth',
      subtitle: 'Graves Potentes e Cancelamento de Ruído',
      description: 'Fones sem fio TWS com bateria de longa duração, microfone nítido para chamadas e baixa latência para vídeos e jogos.',
      badge: 'SOM PREMIUM',
      color: 'border-purple-200 bg-purple-50/40',
      iconColor: 'text-purple-600 bg-purple-50',
      items: ['Fones Bluetooth TWS com estojo de carga', 'Fones intra-auriculares Type-C / P2', 'Microfones integrados com cancelamento de ruído', 'Até 28h de autonomia total']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <EnhancedSEO
        title="Acessórios para Celulares em Curitiba | Capas, Películas e Carregadores Turbo"
        description="Acessórios originais para smartphones em Curitiba. Carregadores rápidos, películas 3D com aplicação na loja, capas anti-impacto e fones de ouvido."
        canonical="https://www.celularescuritibashopcell.com.br/acessorios"
      />

      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF6600]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/15 border border-[#FF6600]/30 text-[#FF8533] text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <Headphones className="w-3.5 h-3.5" />
            Proteção e Performance
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            Acessórios para Celulares em Curitiba
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Complete seu aparelho com carregadores turbo originais, capas resistentes contra impactos, películas de alta durabilidade e fones bluetooth.
          </p>

          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-extrabold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#FF6600]/25"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar Acessório no WhatsApp</span>
          </a>
        </div>
      </section>

      {/* CATEGORIAS DE ACESSÓRIOS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              CATÁLOGO DE ACESSÓRIOS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Tudo para Cuidar e Turbinar seu Aparelho
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {acessoriosList.map((cat) => (
              <div
                key={cat.id}
                className={`p-8 rounded-3xl border-2 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${cat.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-800 uppercase tracking-wider">
                      {cat.badge}
                    </span>
                    <PackageCheck className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="font-display font-black text-2xl text-slate-900 mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FF6600] mb-3">{cat.subtitle}</p>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de consultar modelos e preços de ${cat.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-[#FF6600] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar Disponibilidade & Valores</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER RETIRADA NA LOJA OU MOTOBOY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold text-[#FF8533] uppercase tracking-widest block mb-2">
                APLICAÇÃO E RETIRADA NO CENTRO
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-3">
                Aplicação de Película e Teste de Carregador no Local
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Venha em nossa loja no Edifício Downtown (Rua Conselheiro Laurindo, 809 - Sala 402). Aplicamos a película perfeitamente em seu smartphone ou enviamos junto na entrega do seu novo aparelho.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Pedir no WhatsApp</span>
              </a>
              <Link
                to="/celulares"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all text-center"
              >
                <Smartphone className="w-4 h-4" />
                <span>Ver Celulares</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
