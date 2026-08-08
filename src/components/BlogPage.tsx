import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EnhancedSEO from './EnhancedSEO';
import { BLOG_POSTS } from '../blogData';

export default function BlogPage() {
  const postsList = Object.values(BLOG_POSTS);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#FF6600] selection:text-white flex flex-col justify-between">
      
      <EnhancedSEO
        title="Blog Shopcell Curitiba | Guias de Compra, Análises e Dicas de Celulares"
        description="Confira os melhores guias de compra e análises de smartphones em Curitiba. Descubra como escolher seu celular ideal com dicas de especialistas da Shopcell."
        canonical="https://www.celularescuritibashopcell.com.br/blog"
        keywords="blog celular curitiba, qual celular comprar, loja de celular curitiba, guia de compras celular curitiba"
      />

      <Navbar 
        cartCount={0}
        onOpenCart={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />

      <main className="flex-grow pt-24">
        
        {/* Breadcrumb Header */}
        <section className="bg-slate-900 text-white py-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-[#FF6600] transition-colors">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[#FF6600] font-bold">Blog & Guias de Compra</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-slate-950 text-white py-14 sm:py-18 border-b border-slate-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase mb-4">
              <BookOpen className="w-4 h-4" />
              <span>CONTEÚDO TÉCNICO & GUIAS DE COMPRA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white mb-4">
              Blog Shopcell Curitiba
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Tudo o que você precisa saber antes de comprar seu smartphone em Curitiba, Sítio Cercado e Região Metropolitana.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsList.map(post => (
                <article key={post.slug} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
                  
                  <div>
                    <div className="relative h-48 bg-slate-900 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <span className="absolute top-4 left-4 bg-[#FF6600] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-slate-400 text-[11px] font-mono mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#FF6600]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#FF6600]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-[#FF6600] transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-normal mb-4">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#FF6600] font-bold text-xs hover:text-[#D45500] transition-colors"
                    >
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
