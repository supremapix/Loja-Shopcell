import React, { useState } from 'react';
import { Globe, ExternalLink, MapPin, Sparkles, ChevronUp, ChevronDown, X, Store, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data';

export default function FloatingOfficialSite() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        type="button"
        id="btn-reopen-official-site"
        aria-label="Abrir link do site oficial SUNCELL"
        className="fixed bottom-6 left-4 z-40 bg-[#0B0F19] text-white p-3 rounded-full border border-[#FF6600]/40 shadow-xl hover:scale-105 transition-all text-xs font-mono font-bold flex items-center gap-1.5"
        title="Site Oficial SUNCELL"
      >
        <Globe className="w-4 h-4 text-[#FF7A00]" />
        <span className="hidden sm:inline text-[11px]">Site Oficial</span>
      </button>
    );
  }

  return (
    <aside 
      aria-label="Site Oficial SUNCELL"
      className="fixed bottom-5 left-3 sm:left-5 z-40 max-w-[calc(100vw-5rem)] sm:max-w-sm transition-all duration-300"
    >
      <div className="bg-[#0B0F19]/95 text-white backdrop-blur-md border border-slate-700/80 hover:border-[#FF6600]/60 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300">
        
        {/* Main Floating Bar */}
        <div className="p-2.5 sm:p-3 flex items-center justify-between gap-3">
          <a
            href={CONTACT_INFO.officialSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="link-floating-official-site-main"
            className="flex items-center gap-2.5 group flex-1 min-w-0"
            title="Acessar site oficial da SUNCELL Assistência Técnica"
          >
            {/* Solar Icon Badge */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#FF6600] to-amber-500 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Globe className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>

            {/* Typography */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#FF8533]">
                  SITE OFICIAL
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate group-hover:text-[#FF8533] transition-colors flex items-center gap-1">
                suncellassistencia.com.br
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white shrink-0" />
              </span>
            </div>
          </a>

          {/* Action buttons */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              type="button"
              id="btn-toggle-stores-drawer"
              aria-label="Ver endereços das unidades SUNCELL"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title={isExpanded ? "Ocultar unidades" : "Ver unidades no Mercado Goes"}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              type="button"
              id="btn-dismiss-official-badge"
              aria-label="Minimizar badge"
              className="p-1.5 text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
              title="Minimizar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Expandable Unit Details Drawer */}
        {isExpanded && (
          <div className="px-3 pb-3 pt-1 border-t border-slate-800 space-y-2 bg-slate-950/60 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between pb-1">
              <span>Nossas Lojas em Curitiba</span>
              <span className="text-[#FF8533] font-bold">Mercado Goes</span>
            </div>

            {STORES.map((st) => (
              <div 
                key={st.id} 
                className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-2.5 rounded-xl transition-all flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 font-bold text-white text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6600] shrink-0" />
                    <span className="truncate">{st.name}</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 font-mono">
                    Ativo
                  </span>
                </div>

                <p className="text-[10px] text-slate-300 leading-tight">
                  {st.address}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={st.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-slate-950 font-black py-1 px-2 rounded-md text-[10px] text-center uppercase tracking-wider transition-colors"
                  >
                    WhatsApp {st.id === 'guaira' ? 'Guaíra' : 'Boqueirão'}
                  </a>
                  <a
                    href={st.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-1 px-2 rounded-md text-[10px] text-center transition-colors"
                    title="Ver no Google Maps"
                  >
                    Mapa
                  </a>
                </div>
              </div>
            ))}

            <a
              href={CONTACT_INFO.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 bg-gradient-to-r from-[#FF6600] to-amber-500 hover:brightness-110 text-white font-extrabold text-[11px] rounded-xl uppercase tracking-wider shadow-sm transition-all"
            >
              Abrir Seção de Lojas no Site Oficial ➔
            </a>
          </div>
        )}

      </div>
    </aside>
  );
}
