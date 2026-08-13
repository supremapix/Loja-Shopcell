import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheck, MapPin, Truck, CreditCard, Star, MessageSquare, 
  Home, ChevronRight, CheckCircle2, Sparkles, PhoneCall 
} from 'lucide-react';
import { REALME_PRODUCTS } from '../realmeData';
import { CONTACT_INFO } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import RealmeProductCard from './RealmeProductCard';

export default function CelularesListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSeniorText, setIsSeniorText] = useState(false);

  // Sorted by price ascending (cheapest to most expensive)
  const sortedProducts = [...REALME_PRODUCTS].sort((a, b) => a.price - b.price);

  const filteredProducts = sortedProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.specs.tela.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const canonicalUrl = "https://www.celularescuritibashopcell.com.br/celulares";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.celularescuritibashopcell.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Celulares",
        "item": canonicalUrl
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": sortedProducts.map((prod, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": prod.name,
      "url": prod.canonical
    }))
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans ${isSeniorText ? 'text-lg' : 'text-base'}`}>
      <Helmet>
        <title>Smartphones Realme em Curitiba | Shopcell — Modelos com Garantia de 12 Meses</title>
        <meta 
          name="description" 
          content="Confira os smartphones Realme em Curitiba na Shopcell: realme Note 60X, P4 Lite, 14 5G e P4 Power 5G. Aparelhos novos com 12 meses de garantia local e entrega expressa." 
        />
        <meta name="keywords" content="smartphones realme curitiba, comprar realme curitiba, celular realme curitiba, realme note 60x curitiba, realme p4 lite curitiba, realme 14 5g curitiba, realme p4 power curitiba, loja de celulares curitiba" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shopcell — Loja de Celulares em Curitiba" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Smartphones Realme em Curitiba | Shopcell" />
        <meta property="og:description" content="Catálogo completo de celulares Realme com 12 meses de garantia física no Centro de Curitiba e entrega via motoboy." />
        <meta property="og:image" content="https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smartphones Realme em Curitiba | Shopcell" />
        <meta name="twitter:description" content="Catálogo de celulares Realme novos, originais e lacrados com 12 meses de garantia local em Curitiba." />
        <meta name="twitter:image" content="https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between flex-wrap gap-3">
            <nav className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-600" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#FF6600] flex items-center gap-1.5 transition-colors">
                <Home className="w-4 h-4 text-[#FF6600]" />
                <span>Início</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-slate-900 font-bold">Celulares Realme</span>
            </nav>

            {/* Senior font size toggle */}
            <button
              onClick={() => setIsSeniorText(!isSeniorText)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 px-3.5 py-1.5 rounded-xl cursor-pointer transition-colors"
              title="Ajustar tamanho da fonte para facilitar a leitura"
            >
              <Sparkles className="w-4 h-4 text-[#FF6600]" />
              <span>{isSeniorText ? 'Tamanho Padrão (A-)' : 'Aumentar Letra (A+)'}</span>
            </button>
          </div>
        </div>

        {/* Header Hero Section */}
        <header className="bg-gradient-to-b from-white to-slate-100 border-b border-slate-200 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/25 text-[#FF6600] px-4 py-1.5 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              Catálogo Oficial com 12 Meses de Garantia
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight mb-4">
              Smartphones Realme em Curitiba | Shopcell
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-8">
              Encontre o modelo ideal com procedência garantida, caixas lacradas de fábrica, 12 meses de garantia presencial no Centro de Curitiba e entrega expressa via motoboy.
            </p>

            {/* Fast Benefit Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#FF6600] shrink-0" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">12 Meses</div>
                  <div className="text-[11px] text-slate-500">Garantia Local</div>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                <Truck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">Entrega Rápida</div>
                  <div className="text-[11px] text-slate-500">Motoboy Curitiba</div>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">Até 12x</div>
                  <div className="text-[11px] text-slate-500">No Cartão ou Pix</div>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                <MapPin className="w-6 h-6 text-purple-600 shrink-0" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">Loja no Centro</div>
                  <div className="text-[11px] text-slate-500">Ed. Downtown</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Product Listing Grid */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#FF6600] tracking-wider block">
                Seleção Especializada
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                Modelos Disponíveis (Ordenados por Preço)
              </h2>
            </div>

            <div className="text-sm font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              Exibindo {filteredProducts.length} de {REALME_PRODUCTS.length} smartphones
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-slate-200 max-w-lg mx-auto my-8">
              <p className="text-lg font-bold text-slate-800 mb-4">Nenhum aparelho encontrado para sua busca.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="bg-[#FF6600] text-white px-6 py-3 rounded-xl font-bold cursor-pointer hover:bg-[#D45500]"
              >
                Limpar Busca
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <RealmeProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}

          {/* Senior / Help Assistance Callout */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#FF6600]/20 border border-[#FF6600]/40 text-[#FF6600] px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-[#FF6600]" />
                  Atendimento Humano e Paciente
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                  Dúvidas sobre qual celular Realme escolher?
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Nossos consultores estão prontos para ajudar você a escolher o melhor aparelho para o seu dia a dia, transferir seus dados, WhatsApp e fotos com total atenção.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Aparelhos na caixa lacrada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Configuração inicial sem custo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Pague na entrega em Curitiba</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[56px] px-8 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-lg font-black uppercase tracking-wide rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer text-center"
                >
                  <MessageSquare className="w-6 h-6 fill-current" />
                  <span>Falar com Consultor</span>
                </a>

                <a
                  href={CONTACT_INFO.phoneLink}
                  className="min-h-[56px] px-8 bg-slate-800 hover:bg-slate-700 text-white text-base font-bold rounded-2xl transition-all flex items-center justify-center gap-3 cursor-pointer border border-slate-700 text-center"
                >
                  <PhoneCall className="w-5 h-5 text-[#FF6600]" />
                  <span>Ligar para a Loja Física</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
