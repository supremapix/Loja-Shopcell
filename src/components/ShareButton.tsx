import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Link2, MessageSquare, Twitter, Linkedin, Facebook, HelpCircle, Check, X } from 'lucide-react';

// Custom Pinterest Icon since lucide doesn't have it directly in typical sets or to ensure standard matching
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.64 11.14-.1-.95-.19-2.4.04-3.43.21-.93 1.35-5.74 1.35-5.74s-.34-.69-.34-1.71c0-1.6 1-.29-.24-.13a10.02 10.02 0 011 1c1.55 1.55 4.07 1.55 5.62 0 1.55-1.55 1.55-4.07 0-5.62-2.12-2.12-5.93-2.12-8.05 0-1.7 1.7-1.7 4.46 0 6.16.34.34.8.46 1.14.23.34-.23.46-.69.23-1.03-.85-.85-.85-2.23 0-3.08 1.27-1.27 3.55-1.27 4.82 0 1.27 1.27 1.27 3.55 0 4.82-1.27 1.27-3.55 1.27-4.82 0-.34-.34-.46-.8-.23-1.14l.85-3.4c.1-.4.1-.8 0-1.14-.34-.85-1.14-1.2-2.03-1.2-1.6 0-2.88 1.27-2.88 2.88 0 .8.34 1.5.85 2 .1.1.2.3.1.4l-.34 1.35c-.1.3-.3.4-.6.23-1.87-.85-2.88-2.63-2.88-4.71 0-3.3 2.76-6.16 6.16-6.16 3.4 0 6.16 2.86 6.16 6.16 0 3.8-2.38 6.84-5.7 6.84-1.1 0-2.15-.57-2.5-1.23l-.7 2.6c-.25.96-.92 2.16-1.37 2.9C8.93 23.77 10.42 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
    </svg>
  );
}

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const shareTitle = "Xiaomi Shop Cell Curitiba - Smartphones Xiaomi, POCO e Redmi Originais";
  const shareText = "Confira a loja Xiaomi mais bem avaliada de Curitiba com entrega expressa, retirada segura e 6 meses de garantia!";
  const currentPath = window.location.pathname;
  const shareUrl = currentPath && currentPath !== '/' 
    ? `https://www.xiaomishopcell.com${currentPath}`
    : "https://www.xiaomishopcell.com/";
  const shareImage = "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp";

  // Share link formatting
  const shareLinks = [
    {
      name: 'Copiar Link',
      icon: copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Link2 className="w-5 h-5 text-slate-300" />,
      color: copied ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-slate-900 border-slate-800 hover:bg-slate-800',
      textColor: copied ? 'text-emerald-400' : 'text-slate-200',
      action: async () => {
        try {
          await navigator.clipboard.writeText(shareUrl);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Falha ao copiar link: ", err);
        }
      }
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />,
      color: 'bg-emerald-600/10 border-emerald-500/20 hover:bg-emerald-600/20',
      textColor: 'text-emerald-400',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + "\n" + shareText + "\n" + shareUrl)}`
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5 fill-current" />,
      color: 'bg-blue-600/10 border-blue-500/20 hover:bg-blue-600/20',
      textColor: 'text-blue-400',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Twitter (X)',
      icon: <Twitter className="w-5 h-5 fill-current" />,
      color: 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700',
      textColor: 'text-white',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle + " - " + shareText)}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 fill-current" />,
      color: 'bg-indigo-600/10 border-indigo-500/20 hover:bg-indigo-600/20',
      textColor: 'text-indigo-400',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Pinterest',
      icon: <PinterestIcon className="w-5 h-5" />,
      color: 'bg-rose-600/10 border-rose-500/20 hover:bg-rose-600/20',
      textColor: 'text-rose-400',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(shareImage)}&description=${encodeURIComponent(shareTitle + " - " + shareText)}`
    }
  ];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40" ref={menuRef} id="floating-share-widget">
      
      {/* Floating expanded share menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="absolute bottom-16 left-0 bg-slate-950 border border-slate-850 p-4 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] w-64 text-left"
          >
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-900">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#FF6600]" />
                <span className="text-xs font-bold font-display uppercase text-white tracking-wider">
                  Compartilhar Site
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of shares */}
            <div className="space-y-2">
              {shareLinks.map((link, i) => (
                link.action ? (
                  <button
                    key={i}
                    onClick={link.action}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border ${link.color} transition-all duration-250 cursor-pointer text-left`}
                  >
                    <div className="flex-shrink-0">
                      {link.icon}
                    </div>
                    <span className={`text-xs font-bold font-sans ${link.textColor}`}>
                      {link.name}
                    </span>
                  </button>
                ) : (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    onClick={() => setIsOpen(false)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border ${link.color} transition-all duration-250 text-left`}
                  >
                    <div className="flex-shrink-0">
                      {link.icon}
                    </div>
                    <span className={`text-xs font-bold font-sans ${link.textColor}`}>
                      {link.name}
                    </span>
                  </a>
                )
              ))}
            </div>

            {/* Mini preview thumbnail card */}
            <div className="mt-3.5 pt-3 border-t border-slate-900 flex items-center gap-2.5">
              <img 
                src={shareImage} 
                alt="Xiaomi Curitiba Shopcell Preview" 
                referrerPolicy="no-referrer"
                className="w-12 h-10 object-cover rounded-md flex-shrink-0 border border-slate-800"
              />
              <div className="min-w-0 flex-1">
                <span className="block text-[8px] font-mono font-bold text-[#FF6600] uppercase tracking-widest leading-none">IMAGEM DE PREVIEW</span>
                <span className="block text-[10px] text-slate-400 truncate mt-1">loja-shopcell-monitores.webp</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Circle Trigger (Same pulse animation as Whatsapp) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-[0_5px_15px_rgba(255,102,0,0.15)] hover:shadow-[0_8px_25px_rgba(255,102,0,0.35)] border border-slate-800 transition-all duration-300 group hover:scale-110 active:scale-95 cursor-pointer relative"
        title="Compartilhar site"
        id="btn-trigger-share"
      >
        <span className="absolute inset-0 rounded-full bg-[#FF6600]/20 animate-ping opacity-25 group-hover:opacity-40 pointer-events-none" />
        <Share2 className="w-6.5 h-6.5 text-[#FF6600] relative z-10" />
      </button>

    </div>
  );
}
