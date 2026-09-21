import React from 'react';
import { X, MapPin, MessageSquare, Phone, Clock, Store, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data';

interface StoreSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMessage?: string;
}

export default function StoreSelectModal({ isOpen, onClose, defaultMessage }: StoreSelectModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="store-modal-title"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Store className="w-3.5 h-3.5" />
            Atendimento Presencial & WhatsApp
          </span>
          <h3 id="store-modal-title" className="font-display font-black text-2xl text-slate-900 tracking-tight">
            Escolha a Unidade SUNCELL
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Ambas as lojas estão localizadas dentro do <strong>Mercado Goes</strong> em Curitiba com estacionamento e pronta entrega.
          </p>
        </div>

        {/* Store Options */}
        <div className="space-y-4">
          {STORES.map((st) => {
            const customWa = defaultMessage
              ? `https://wa.me/${st.whatsappClean}?text=${encodeURIComponent(defaultMessage)}`
              : st.whatsappLink;

            return (
              <div
                key={st.id}
                className="border-2 border-slate-200 hover:border-[#FF6600] rounded-2xl p-4 sm:p-5 transition-all bg-slate-50/70 hover:bg-white hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#FF6600]">
                      {st.badge}
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                      Aberto hoje
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-[#FF6600] transition-colors">
                    {st.name}
                  </h4>

                  <div className="flex items-start gap-2 text-xs text-slate-600 mt-1 mb-3">
                    <MapPin className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                    <span>{st.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-4 bg-white p-2 rounded-lg border border-slate-200/80">
                    <Phone className="w-3.5 h-3.5 text-[#FF6600] shrink-0" />
                    <span>{st.phone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                  <a
                    href={customWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={st.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Ver no Mapa</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Portal Banner Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#FF6600]" />
            <span>Site oficial da assistência:</span>
          </div>
          <a
            href={CONTACT_INFO.officialSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#FF6600] hover:underline flex items-center gap-1 font-mono"
          >
            <span>suncellassistencia.com.br</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
