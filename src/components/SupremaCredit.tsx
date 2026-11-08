import { Heart } from 'lucide-react';

export default function SupremaCredit() {
  return (
    <div className="suprema-credit mx-auto mt-6 flex max-w-7xl items-center justify-center border-t border-white/10 px-4 pt-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center rounded-full border border-white/15 bg-slate-950/70 px-5 py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#FF6600]/40 hover:shadow-[0_0_18px_rgba(255,102,0,0.18)]">
        <p className="flex flex-wrap items-center justify-center gap-2 text-center text-[11px] font-bold text-slate-300 sm:text-xs">
          <span className="opacity-90">Desenvolvido com</span>
          <Heart
            size={13}
            aria-label="amor"
            role="img"
            className="shrink-0 animate-[pulse_1.5s_infinite] fill-red-500 text-red-500 drop-shadow-[0_0_3px_rgba(239,68,68,0.65)]"
          />
          <span className="opacity-90">por</span>
          <a
            id="developer-suprema-link"
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-dashed border-yellow-400/50 font-black text-yellow-400 transition-all hover:border-yellow-300 hover:text-yellow-300"
          >
            Suprema Sites Express
            <img
              src="https://img.supremamidia.com/suprema-img.png"
              alt=""
              width="80"
              height="16"
              loading="lazy"
              decoding="async"
              className="inline h-[16px] w-auto shrink-0 select-none transition-transform duration-300 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
