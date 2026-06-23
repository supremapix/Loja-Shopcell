import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface CatalogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogoModal({ isOpen, onClose }: CatalogoModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Por favor, digite seu nome.');
      return;
    }

    const message = `Olá! Gostaria de receber o catálogo completo em PDF da *Xiaomi Shop Cell Curitiba* com todos os smartphones, tablets e acessórios disponíveis.\n\n👤 *Nome:* ${name}\n📱 *Contato:* ${phone || 'Não informado'}\n\n_Solicitado via formulário de catálogo do site_`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 pointer-events-auto"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl w-full max-w-md p-6 relative shadow-2xl pointer-events-auto"
              id="catalog-modal"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-800 hover:bg-slate-100 transition-colors cursor-pointer"
                id="close-catalog-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Section */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FF6600]/10 border border-[#FF6600]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5.5 h-5.5 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-base">Solicitar Catálogo PDF</h3>
                  <p className="text-gray-600 text-xs mt-0.5">Receba no seu WhatsApp nossa lista atualizada.</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-700 mb-1 font-semibold">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Daniela Viviani"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/10 focus:outline-none"
                    id="catalog-name"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-700 mb-1 font-semibold">WhatsApp para contato (Opcional)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (41) 99999-9999"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/10 focus:outline-none"
                    id="catalog-phone"
                  />
                </div>

                {/* Info Note */}
                <div className="bg-[#FF6600]/5 border border-[#FF6600]/15 rounded-xl p-3 text-[11px] text-gray-600 leading-normal">
                  📦 O catálogo completo contém fotos detalhadas, lista de preços à vista, parcelamentos finais e prazos de garantia de todos os aparelhos Xiaomi da loja.
                </div>

                {/* Actions */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    id="submit-catalog"
                  >
                    <Send className="w-4 h-4" />
                    <span>Receber PDF no WhatsApp</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
