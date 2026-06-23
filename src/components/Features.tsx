import { MapPin, CreditCard, ShieldCheck, Star, Smartphone, MessageSquare } from 'lucide-react';
import { DIFFERENTIALS } from '../data';

const iconMap: { [key: string]: any } = {
  MapPin,
  CreditCard,
  ShieldCheck,
  Star,
  Smartphone,
  MessageSquare,
};

export default function Features() {
  return (
    <section id="diferenciais" className="py-20 bg-white relative border-y border-slate-200/60">
      {/* Decorative side lights */}
      <div className="absolute right-0 top-1/4 w-[25rem] h-[25rem] bg-[#FF6600]/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest block mb-3">DIFERENCIAIS EXCLUSIVOS</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
            Por que escolher a Xiaomi Shop Cell Curitiba?
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-4 leading-relaxed">
            Mais que uma loja, oferecemos segurança, transparência e o melhor suporte técnico pós-venda para smartphones Xiaomi no Paraná.
          </p>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((diff, index) => {
            const IconComponent = iconMap[diff.icon] || Smartphone;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 hover:border-[#FF6600]/40 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(255,102,0,0.05)] group"
              >
                {/* Feature Icon box */}
                <div className="w-12 h-12 bg-[#FF6600]/10 rounded-xl flex items-center justify-center border border-[#FF6600]/15 mb-5 group-hover:bg-[#FF6600] group-hover:border-[#FF6600] transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display font-bold text-gray-900 text-lg mb-2 group-hover:text-[#FF6600] transition-colors duration-200">
                  {diff.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
