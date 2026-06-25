import { Star } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="depoimentos" className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background glow lights */}
      <div className="absolute left-0 bottom-0 w-[30rem] h-[30rem] bg-[#FF6600]/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title and Google Badge Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-16">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-3">AVALIAÇÕES DE CLIENTES</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
              O que dizem sobre nossa loja em Curitiba
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-4 leading-relaxed">
              Confira os depoimentos reais deixados por nossos clientes que compraram celulares Xiaomi, Redmi e POCO e comprovaram nossa qualidade.
            </p>
          </div>

          {/* Google Ratings Trust Card */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-4 flex-shrink-0 shadow-sm min-w-[280px] mx-auto lg:mx-0">
            <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-2.5 flex-shrink-0 shadow-xs">
              <img
                src="https://www.celularcuritibashopcell.com.br/images/selos-google.jpg"
                alt="Google Ratings Logo"
                referrerPolicy="no-referrer"
                className="max-h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-900 mt-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>5.0 / 5.0 Estrelas</span>
              </p>
              <p className="text-[11px] text-gray-400 font-mono mt-0.5 uppercase tracking-wide">Mais de 3.800 avaliações no Google</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between hover:border-[#FF6600]/30 transition-colors shadow-xs relative"
            >
              {/* Review Text */}
              <div>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#FF6600] fill-[#FF6600]" />
                  ))}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                {/* Fallback initials if image avatar fails to load */}
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 flex items-center justify-center border border-slate-200">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.author}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // fallback to initials
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <span className="text-xs font-bold text-[#FF6600] uppercase">
                      {review.author.slice(0, 2)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-xs sm:text-sm">
                    {review.author}
                  </h4>
                  <span className="text-[10px] text-[#FF6600] font-mono tracking-wider uppercase">Cliente Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
