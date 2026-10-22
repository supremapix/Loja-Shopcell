import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Instagram, ShieldCheck } from 'lucide-react';

export default function InstagramFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="instagram"
      className="relative overflow-hidden border-y border-slate-200/80 bg-gray-50/50 px-4 py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-rose-300/30 via-amber-200/25 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-300/25 via-rose-200/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-4 py-1.5 shadow-lg shadow-rose-500/15">
            <Instagram className="h-3.5 w-3.5 text-white" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              Social Real @suncell.brasil
            </span>
          </div>

          <h3 className="mt-5 font-display text-2xl font-black uppercase leading-[1.05] tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
            Siga-nos no Instagram{' '}
            <span className="text-[#FF6600]">• @suncell.brasil</span>
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-gray-600">
            Bastidores das lojas, reparos do dia a dia, novidades e ofertas reais das unidades
            Guaíra e Alto Boqueirão. Acompanhe os stories e fale com a nossa equipe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-md"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] transition-transform duration-300 hover:scale-[1.01]">
            <iframe
              src="https://www.instagram.com/suncell.brasil/embed/"
              title="Instagram oficial da SUNCELL Assistência Técnica"
              loading="lazy"
              className="aspect-[9/11] w-full border-0 bg-white sm:aspect-[4/5]"
              frameBorder={0}
              scrolling="no"
              allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://www.instagram.com/suncell.brasil"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:brightness-110 sm:w-auto"
          >
            <Instagram className="h-5 w-5" />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />
            <span className="text-left font-mono text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-gray-600">
              Comunidade 100% organizada
              <span className="block text-gray-400">de Curitiba e região</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
