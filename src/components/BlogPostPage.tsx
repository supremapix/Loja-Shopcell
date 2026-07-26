import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Calendar, User, Clock, MessageSquare, ArrowLeft, Share2, ShieldCheck, MapPin } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import { BLOG_POSTS } from '../blogData';
import { CONTACT_INFO } from '../data';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? BLOG_POSTS[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const getWhatsAppMsg = (text: string) => {
    return `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(text)}`;
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "Xiaomi Shop Cell Curitiba"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Xiaomi Shop Cell Curitiba",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
      }
    },
    "datePublished": "2026-07-26",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.celularescuritibashopcell.com.br/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#FF6600] selection:text-white flex flex-col justify-between">
      
      <EnhancedSEO
        title={`${post.title} | Blog Shopcell Curitiba`}
        description={post.metaDescription}
        canonical={`https://www.celularescuritibashopcell.com.br/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
      />

      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      <Navbar 
        cartCount={0}
        onOpenCart={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
        activeSection="inicio"
        onNavClick={() => {}}
      />

      <main className="flex-grow pt-24">
        
        {/* Breadcrumb Header */}
        <section className="bg-slate-900 text-white py-4 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-mono text-slate-400 overflow-x-auto">
            <Link to="/" className="hover:text-[#FF6600] transition-colors whitespace-nowrap">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link to="/blog" className="hover:text-[#FF6600] transition-colors whitespace-nowrap">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[#FF6600] font-bold whitespace-nowrap truncate">{post.title}</span>
          </div>
        </section>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#FF6600] text-xs font-mono font-bold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos</span>
          </Link>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            
            {/* Post Header */}
            <header className="space-y-4 border-b border-slate-200 pb-8">
              <span className="bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/30 text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
                {post.category}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 pt-2">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#FF6600]" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#FF6600]" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF6600]" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* Price Alert Banner */}
            <div className="bg-[#FF6900]/10 border border-[#FF6900]/30 rounded-2xl p-4 text-center">
              <span className="text-[#FF6600] font-bold text-xs sm:text-sm flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Consulte o menor valor para qualquer aparelho via WhatsApp agora mesmo!</span>
              </span>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-16/9">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Call to Action Box */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-display font-black text-white">
                Pronto para garantir seu Xiaomi no Sítio Cercado ou Curitiba?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Fale agora mesmo com nossos consultores especialistas no WhatsApp, tire suas dúvidas de modelos e solicite entrega no mesmo dia com opção de pagar ao receber!
              </p>
              <a
                href={getWhatsAppMsg(`Olá! Li o artigo "${post.title}" no blog e gostaria de consultar valores de smartphones!`)}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#D45500] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar Vendedor no WhatsApp</span>
              </a>
            </div>

            {/* Tags */}
            <footer className="border-t border-slate-200 pt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 font-bold mr-2">Tags:</span>
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-600 text-[11px] font-mono px-3 py-1 rounded-lg">
                  #{tag}
                </span>
              ))}
            </footer>

          </div>

        </article>

      </main>

      <Footer />

    </div>
  );
}
