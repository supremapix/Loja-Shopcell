import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star, Sparkles, MessageSquare, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Garantia() {
  return (
    <section 
      id="garantia" 
      className="py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-t border-b border-slate-200"
    >
      {/* Background radial soft light */}
      <div className="absolute right-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#FF6600]/4 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Main responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Copywriting Text - Center-aligned on Mobile, Left-aligned on Desktop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Soft Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#FF6600]/10 border border-[#FF6600]/20 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider font-mono">
                Compra 100% Protegida
              </span>
            </div>

            {/* Title / Header */}
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight">
              Garantia de <span className="text-[#FF6600] underline decoration-[#FF6600]/20 decoration-wavy">12 Meses</span> em Todos os Produtos
            </h2>

            {/* Paragraph Text */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Garantimos uma compra tranquila e oferecemos garantia de 12 meses para os produtos. Compre com segurança na loja mais bem avaliada de Curitiba. Nosso compromisso é o seu total contentamento e tranquilidade pós-compra.
            </p>

            {/* Google Reviews Trust Block */}
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm max-w-md mx-auto lg:mx-0 space-y-3.5">
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div>
                <p className="text-gray-900 font-display font-bold text-lg leading-none">
                  Mais de 3.800 avaliações reais
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  De clientes reais extremamente satisfeitos em Curitiba e Região!
                </p>
              </div>
            </div>

            {/* Additional trust bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Assistência Técnica Própria</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Aparelhos Originais & Lacrados</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Suporte Pós-Venda Humanizado</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Retirada Segura no Centro</span>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102"
                id="cta-garantia-whatsapp"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-white text-[#FF6600]" />
                <span>Conversar com Atendente</span>
              </a>
            </div>

          </div>

          {/* Column 2: Warranty Seal with Animations */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Pulsing decorative background glow */}
              <div className="absolute inset-0 bg-[#FF6600]/10 rounded-full filter blur-2xl scale-95 animate-pulse" />
              
              {/* Outer decorative floating star badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 z-20"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider font-mono">Selo Oficial</span>
              </motion.div>

              {/* Main Seal Image in Premium Container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow relative z-10 max-w-[280px] sm:max-w-[340px]"
              >
                <img
                  src="https://www.celularescuritibashopcell.com.br/assets/selo-garantia-1-ano-D4gjKxPE.webp"
                  alt="Selo de Garantia de 12 Meses Shopcell"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-2xl animate-float"
                  id="img-selo-garantia-12-meses"
                />
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
