import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Mail, Clock, ShieldAlert, ChevronDown, ChevronUp, Video, Home } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { bairrosData } from '../bairrosData';

export default function Location() {
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllBairros, setShowAllBairros] = useState(false);

  // Categorize from bairrosData
  const cities = bairrosData.filter(b => b.regiao === "Região Metropolitana");
  const officialBairros = bairrosData.filter(b => b.regiao === "Curitiba (IPPUC)" || ["Central", "Nobre", "Sul", "Oeste", "Norte", "Leste"].includes(b.regiao));
  const unofficialBairros = bairrosData.filter(b => b.regiao === "Curitiba (Região Popular)");

  return (
    <section id="RMCEbairros" className="py-12 sm:py-20 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-[20rem] h-[20rem] bg-[#FF6600]/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-3">ATENDIMENTO LOCAL</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Nossa Loja Física em Curitiba
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-3">
            Venha nos visitar no Edifício Downtown para retirar seu aparelho Xiaomi com segurança ou solicite nossa entrega rápida.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 sm:mb-16">
          {/* Photos and Details */}
          <div className="col-span-1 lg:col-span-6 space-y-6">
            {/* Optimized Gallery Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {/* Image 1 - Shop Cell Monitores (Main) */}
              <div className="col-span-2 bg-white border border-slate-200 p-2 rounded-2xl shadow-xs h-56 sm:h-64 overflow-hidden relative group">
                <img
                  src="https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
                  alt="Xiaomi Shop Cell - Monitores e Atendimento"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-103"
                  id="img-gallery-monitores"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/85 backdrop-blur-xs text-white px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase">
                  Atendimento Premium
                </div>
              </div>

              {/* Image 2 - Sacola Shop Cell */}
              <div className="col-span-1 bg-white border border-slate-200 p-2 rounded-2xl shadow-xs h-40 overflow-hidden relative group">
                <img
                  src="https://www.celularescuritibashopcell.com.br/assets/sacola-shopcell-CFvwClu6.webp"
                  alt="Sacola Xiaomi Shop Cell"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  id="img-gallery-sacola"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wider uppercase">
                  Seu Aparelho
                </div>
              </div>

              {/* Image 3 - Loja Shop Cell Interior */}
              <div className="col-span-1 bg-white border border-slate-200 p-2 rounded-2xl shadow-xs h-40 overflow-hidden relative group">
                <img
                  src="https://www.celularescuritibashopcell.com.br/img-ext/loja-shopcell-2-10d4c7.webp"
                  alt="Interior Loja Xiaomi Shop Cell"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  id="img-gallery-interior"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wider uppercase">
                  Espaço Físico
                </div>
              </div>
            </div>

            {/* Address Details Card */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <div className="flex gap-3.5">
                <MapPin className="w-5.5 h-5.5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-base">Endereço Oficial</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
                    {CONTACT_INFO.address}
                  </p>
                  <span className="flex items-center gap-1.5 text-[#FF6600] hover:underline text-xs font-bold font-mono uppercase tracking-wider mt-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Abrir no Google Maps</span>
                  </span>
                </div>
              </div>

              <div className="flex gap-3.5 border-t border-slate-200 pt-4">
                <Clock className="w-5.5 h-5.5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-base">Horário de Funcionamento</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1 font-mono">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF6600]" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono leading-none">Telefone Fixo</span>
                    <a href={CONTACT_INFO.phoneLink} className="text-gray-800 text-xs sm:text-sm font-bold font-mono hover:text-[#FF6600]">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#FF6600]" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono leading-none">WhatsApp</span>
                    <a href={CONTACT_INFO.whatsappLink} className="text-gray-800 text-xs sm:text-sm font-bold font-mono hover:text-[#FF6600]">
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed and Directory */}
          <div className="col-span-1 lg:col-span-6 flex flex-col h-full">
            <div className="bg-white border border-slate-200 p-2.5 rounded-2xl shadow-sm h-[280px] sm:h-[350px] relative overflow-hidden flex-grow mb-6">
              <iframe
                title="Google Maps Xiaomi Shop Cell"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8279869689843!2d-49.2638!3d-25.4357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzA4LjUiUyA0OcKwMTUnNDkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 rounded-xl"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Highlighted 16:9 Institutional Video */}
        <div className="w-full max-w-4xl mx-auto mb-10 sm:mb-16 px-1">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
            {/* Soft decorative background glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600]/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="text-center mb-6 relative z-10">
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest bg-[#FF6600] px-3.5 py-1.5 rounded-full shadow-md inline-flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5" />
                <span>VÍDEO EXCLUSIVO DA LOJA</span>
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-4 tracking-tight">
                Assista ao Vídeo e Conheça Nossa Estrutura de Retirada & Envio!
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                Nesse vídeo, você confere como funciona nossa entrega expressa via motoboy para Curitiba e Região Metropolitana, além do nosso atendimento na loja física no Centro de Curitiba.
              </p>
            </div>

            {/* Video Player in Max 16:9 Prominence Aspect Ratio */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe
                src="https://www.youtube.com/embed/so2ruQUFU6Q?rel=0&autoplay=0"
                title="Apresentação Xiaomi Shop Cell Curitiba"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                id="youtube-institutional-video"
              />
            </div>
          </div>
        </div>

        {/* Directory Regions & Cities served (SEO Booster) */}
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-8" id="regions-directory">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Metropolitan Cities */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-gray-900 text-base flex items-center gap-2 border-b border-slate-200/60 pb-3">
                <span className="w-2.5 h-2.5 bg-[#FF6600] rounded-full animate-pulse" />
                <span>Cidades Atendidas na RMC (Entrega via Motoboy)</span>
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {(showAllCities ? cities : cities.slice(0, 6)).map((city) => (
                  <Link
                    key={city.slug}
                    to={`/bairro/${city.slug}`}
                    className="bg-white border border-slate-200 hover:border-[#FF6600]/40 text-gray-700 hover:text-[#FF6600] px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 h-11"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
                    <span className="truncate">{city.nome}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowAllCities(!showAllCities)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6600] hover:text-[#D45500] uppercase tracking-wider transition-colors py-2 px-3 rounded-lg hover:bg-[#FF6600]/5 cursor-pointer"
                >
                  <span>{showAllCities ? "Ver menos cidades" : "Veja mais cidades / RMC"}</span>
                  {showAllCities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Column 2: Neighborhoods in Highlight */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-gray-900 text-base flex items-center gap-2 border-b border-slate-200/60 pb-3">
                <span className="w-2.5 h-2.5 bg-[#FF6600] rounded-full animate-pulse" />
                <span>Bairros Principais de Curitiba</span>
              </h3>
              
              <div className="flex flex-wrap gap-1.5">
                {(showAllBairros ? officialBairros : officialBairros.slice(0, 12)).map((bairro) => (
                  <Link
                    key={bairro.slug}
                    to={`/bairro/${bairro.slug}`}
                    className="bg-white border border-slate-200 hover:border-[#FF6600]/40 text-gray-700 hover:text-[#FF6600] px-3 py-1.5 rounded-lg text-xs font-medium shadow-xs transition-all flex items-center gap-1 hover:shadow-xs font-mono"
                  >
                    <Home className="w-3 h-3 text-[#FF6600]" />
                    <span className="truncate">{bairro.nome}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowAllBairros(!showAllBairros)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6600] hover:text-[#D45500] uppercase tracking-wider transition-colors py-2 px-3 rounded-lg hover:bg-[#FF6600]/5 cursor-pointer"
                >
                  <span>{showAllBairros ? "Recolher Bairros" : "Veja mais bairros / regiões Curitiba"}</span>
                  {showAllBairros ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          {/* Collapsible Panel for Unofficial & Remaining popular regions */}
          {showAllBairros && (
            <div className="pt-6 border-t border-slate-200/80 space-y-4 animate-fadeIn">
              <h4 className="font-display font-bold text-gray-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-400 rounded-full" />
                <span>Vilas, Loteamentos e Regiões Populares de Curitiba (Muito buscadas para SEO)</span>
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
                Além dos bairros oficiais reconhecidos pelo IPPUC, atendemos com rapidez as principais vilas, loteamentos planejados e divisões populares que fazem parte do dia a dia dos curitibanos:
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {unofficialBairros.map((bairro) => (
                  <Link
                    key={bairro.slug}
                    to={`/bairro/${bairro.slug}`}
                    className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#FF6600]/40 text-gray-600 hover:text-[#FF6600] px-2.5 py-1.5 rounded-md text-[11px] font-sans shadow-xs transition-all flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3 text-[#FF6600]" />
                    <span>{bairro.nome}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
