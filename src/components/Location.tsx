import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Mail, Clock, ShieldAlert, ChevronDown, ChevronUp, Video, Home } from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data';
import { bairrosData } from '../bairrosData';

export default function Location() {
  const [selectedStore, setSelectedStore] = useState<'guaira' | 'alto-boqueirao'>('guaira');
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllBairros, setShowAllBairros] = useState(false);

  // Categorize from bairrosData
  const cities = bairrosData.filter(b => b.regiao === "Região Metropolitana");
  const officialBairros = bairrosData.filter(b => b.regiao === "Curitiba (IPPUC)" || ["Central", "Nobre", "Sul", "Oeste", "Norte", "Leste"].includes(b.regiao));
  const unofficialBairros = bairrosData.filter(b => b.regiao === "Curitiba (Região Popular)");

  const currentStoreData = STORES.find(s => s.id === selectedStore) || STORES[0];

  return (
    <section id="RMCEbairros" className="py-12 sm:py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
            NOSSAS UNIDADES EM CURITIBA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Lojas Físicas SUNCELL no Mercado Goes
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Atendimento presencial especializado, assistência técnica e smartphones originais com 12 meses de garantia local. Escolha a unidade mais próxima de você:
          </p>
        </div>

        {/* Store Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {STORES.map((st) => {
            const isSelected = selectedStore === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setSelectedStore(st.id as 'guaira' | 'alto-boqueirao')}
                className={`px-5 py-3 rounded-2xl font-display font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 border-2 ${
                  isSelected
                    ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-md scale-102'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#FF6600]/50 hover:bg-white'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#FF7A00]' : 'text-slate-400'}`} />
                <span>{st.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${isSelected ? 'bg-[#FF6600] text-white' : 'bg-slate-200 text-slate-700'}`}>
                  Mercado Goes
                </span>
              </button>
            );
          })}
        </div>

        {/* Two Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {STORES.map((st) => {
            const isSelected = selectedStore === st.id;
            return (
              <div
                key={st.id}
                className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 border-2 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-50 border-[#FF6600] shadow-xl ring-1 ring-[#FF6600]/20'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-extrabold uppercase tracking-wider">
                      <Home className="w-3.5 h-3.5" />
                      {st.landmark}
                    </span>
                    <span className="text-[11px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      Garantia Local 12M
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-slate-900 mb-2">
                    {st.name}
                  </h3>

                  <div className="flex items-start gap-3 text-slate-700 text-sm mb-4">
                    <MapPin className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">{st.address}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{st.city}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-slate-700 bg-white p-4 rounded-2xl border border-slate-200 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FF6600] shrink-0" />
                      <span>{st.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF6600] shrink-0" />
                      <span>Tel / WhatsApp: <strong className="text-slate-900">{st.phone}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={st.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={st.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B0F19] hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Portal Banner Card */}
        <div className="bg-gradient-to-br from-[#0B0F19] to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-mono font-bold text-[#FF8533] uppercase tracking-widest bg-[#FF6600]/20 px-3 py-1 rounded-full border border-[#FF6600]/30 inline-block">
              PORTAL OFICIAL SUNCELL ASSISTÊNCIA
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              Visite a Seção de Lojas em Nosso Site Oficial
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Consulte todas as unidades, serviços de assistência técnica para telas, baterias e reparos de placas diretamente no portal da SUNCELL.
            </p>
          </div>
          <a
            href={CONTACT_INFO.officialSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-gradient-to-r from-[#FF6600] to-amber-500 hover:brightness-110 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <span>Acessar suncellassistencia.com.br</span>
            <MapPin className="w-4 h-4" />
          </a>
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
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center">
              <video
                src="https://img.supremasite.com.br/shopcell.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain rounded-2xl"
                id="shopcell-institutional-video"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
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
