import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, ShieldCheck, Cpu, Smartphone, Camera, Battery, Zap, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import EnhancedSEO from './EnhancedSEO';
import Navbar from './Navbar';
import Ticker from './Ticker';
import Footer from './Footer';
import Cart from './Cart';
import { CartItem, Product } from '../types';

export interface ComparisonModel {
  name: string;
  screen: string;
  processor: string;
  camera: string;
  battery: string;
  charger: string;
  antutu: string;
  weight: string;
  highlights: string[];
}

export interface PresetComparison {
  id: string;
  title: string;
  category: string;
  performanceDiff: string;
  cameraDiff: string;
  verdict: string;
  recommendation: 'UPGRADE_RECOMENDADO' | 'PENSAR_DUAS_VEZES' | 'CONTINUE_COM_O_SEU';
  current: ComparisonModel;
  old: ComparisonModel;
}

const PRESET_COMPARISONS: PresetComparison[] = [
  {
    id: 'note-13-pro-vs-note-12-pro',
    title: 'Redmi Note 13 Pro 5G vs Redmi Note 12 Pro 5G',
    category: 'Intermediário Premium',
    performanceDiff: '+25% de Desempenho',
    cameraDiff: 'Upgrade de 50MP para 200MP OIS',
    verdict: 'O Redmi Note 13 Pro 5G traz uma tela 1.5K muito mais brilhante (1800 nits contra 900 nits) e uma câmera sensacional de 200MP que tira fotos absurdamente nítidas mesmo no escuro.',
    recommendation: 'UPGRADE_RECOMENDADO',
    current: {
      name: 'Redmi Note 13 Pro 5G (Atual)',
      screen: '6.67" 1.5K AMOLED (1220p), 120Hz, 1800 nits, Dolby Vision',
      processor: 'Snapdragon 7s Gen 2 (4nm)',
      camera: '200 MP (Principal, OIS) + 8 MP (Ultrawide) + 2 MP (Macro)',
      battery: '5100 mAh',
      charger: '67W Turbo Charge (100% em 44min)',
      antutu: '605.000 pontos',
      weight: '187g',
      highlights: ['Câmera monstruosa de 200MP com super zoom digital', 'Tela 1.5K ultra definida', 'Bordas de tela extremamente finas']
    },
    old: {
      name: 'Redmi Note 12 Pro 5G (Antigo)',
      screen: '6.67" FHD+ AMOLED (1080p), 120Hz, 900 nits, HDR10+',
      processor: 'MediaTek Dimensity 1080 (6nm)',
      camera: '50 MP (Principal, OIS) + 8 MP (Ultrawide) + 2 MP (Macro)',
      battery: '5000 mAh',
      charger: '67W Fast Charge',
      antutu: '490.000 pontos',
      weight: '187g',
      highlights: ['Boa câmera para uso básico', 'Ótimo equilíbrio geral', 'Corpo com traseira em vidro']
    }
  },
  {
    id: 'poco-f6-pro-vs-poco-f5-pro',
    title: 'POCO F6 Pro vs POCO F5 Pro',
    category: 'Flagship Killer (Gamer)',
    performanceDiff: '+42% de Velocidade',
    cameraDiff: 'Novo Sensor Light Fusion 800',
    verdict: 'Com o processador Snapdragon 8 Gen 2, o POCO F6 Pro é um monstro para jogos e multitarefa pesada. O carregamento de 120W carrega a bateria de zero a 100% em apenas 19 minutos.',
    recommendation: 'UPGRADE_RECOMENDADO',
    current: {
      name: 'POCO F6 Pro (Atual)',
      screen: '6.67" WQHD+ Flow AMOLED, 120Hz, 4000 nits, 3840Hz PWM',
      processor: 'Snapdragon 8 Gen 2 (4nm)',
      camera: '50 MP (Light Fusion 800, OIS) + 8 MP (Ultrawide) + 2 MP',
      battery: '5000 mAh',
      charger: '120W HyperCharge (100% em 19min)',
      antutu: '1.610.000 pontos',
      weight: '209g',
      highlights: ['Processador topo de linha extremamente fluído', 'Carregador de 120W incluso na caixa', 'Tela brilhante de 4000 nits em ambientes ensolarados']
    },
    old: {
      name: 'POCO F5 Pro (Antigo)',
      screen: '6.67" WQHD+ AMOLED, 120Hz, 1400 nits, HDR10+',
      processor: 'Snapdragon 8+ Gen 1 (4nm)',
      camera: '64 MP (Principal, OIS) + 8 MP + 2 MP',
      battery: '5160 mAh',
      charger: '67W Turbo / 30W Sem Fio',
      antutu: '1.135.000 pontos',
      weight: '204g',
      highlights: ['Suporta carregamento sem fio', 'Excelente tela WQHD+', 'Boa autonomia de bateria']
    }
  },
  {
    id: 'xiaomi-14-vs-xiaomi-13',
    title: 'Xiaomi 14 vs Xiaomi 13',
    category: 'Super Premium (Leica)',
    performanceDiff: '+35% de GPU & Inteligência Artificial',
    cameraDiff: 'Lentes Leica Summilux de Última Geração',
    verdict: 'O Xiaomi 14 traz o que há de mais moderno em fotografia compacta com as fantásticas lentes Leica Summilux e um sensor de imagem que capta 80% mais luz do que a geração anterior.',
    recommendation: 'UPGRADE_RECOMENDADO',
    current: {
      name: 'Xiaomi 14 (Atual)',
      screen: '6.36" 1.5K LTPO OLED, 120Hz, 3000 nits, Gorilla Glass Victus 2',
      processor: 'Snapdragon 8 Gen 3 (4nm)',
      camera: '50 MP (Leica Summilux, OIS) + 50 MP (Telefoto, OIS) + 50 MP',
      battery: '4610 mAh',
      charger: '90W HyperCharge / 50W Sem Fio',
      antutu: '2.120.000 pontos',
      weight: '188g',
      highlights: ['Lentes profissionais Leica Summilux de abertura f/1.6', 'O celular compacto mais potente do mundo', 'Brilho de tela e durabilidade absurdos']
    },
    old: {
      name: 'Xiaomi 13 (Antigo)',
      screen: '6.36" FHD+ OLED, 120Hz, 1900 nits, Dolby Vision',
      processor: 'Snapdragon 8 Gen 2 (4nm)',
      camera: '50 MP (Leica, OIS) + 10 MP (Telefoto, OIS) + 12 MP',
      battery: '4500 mAh',
      charger: '67W Turbo / 50W Sem Fio',
      antutu: '1.550.000 pontos',
      weight: '185g',
      highlights: ['Corpo compacto extremamente confortável', 'Lentes Leica clássicas', 'Ótima performance de bateria']
    }
  }
];

export default function Compare() {
  const [selectedPresetId, setSelectedPresetId] = useState(PRESET_COMPARISONS[0].id);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('mi_shopcell_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);

  // Sync cart
  useEffect(() => {
    localStorage.setItem('mi_shopcell_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedPresetId]);

  const currentPreset = PRESET_COMPARISONS.find(p => p.id === selectedPresetId) || PRESET_COMPARISONS[0];

  const handleAddToCartFromComparison = (productName: string) => {
    // Generate a quick pre-built product to trigger add to cart or whatsapp
    const cleanName = productName.split('(')[0].trim();
    const whatsappMessage = `Olá! Vi o comparativo do *${cleanName}* no site e gostaria de saber se vocês têm a pronta entrega na loja física de Curitiba!`;
    const fullLink = `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(fullLink, '_blank', 'referrer');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <EnhancedSEO 
        title="Comparativo Xiaomi: Modelo Atual vs Antigo | Mi Shop Cell Curitiba"
        description="Analise técnica e compare os smartphones atuais da Xiaomi, POCO e Redmi com suas gerações anteriores. Saiba se vale a pena fazer o upgrade!"
        canonical="https://www.xiaomishopcell.com/comparar"
        bairroName="Comparativo" 
        regiaoName="Shopcell"
      />
      
      {/* Ticker bar */}
      <Ticker />

      {/* Main Navbar Link Back to Home */}
      <header className="sticky top-0 z-40 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md py-4 w-full">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-md">
              MI
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black tracking-wider text-white text-lg leading-none group-hover:text-[#FF6600] transition-colors">
                MI SHOP CELL
              </span>
              <span className="font-mono text-[9px] text-[#FF6600] tracking-widest font-semibold mt-0.5">
                CURITIBA · PR
              </span>
            </div>
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Loja</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full relative">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[24rem] h-[24rem] bg-[#FF6600]/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest bg-[#FF6600]/10 px-3 py-1 rounded-full">
            COMPARADOR INTELIGENTE DE MODELOS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none">
            Modelo Atual vs Versão Antiga: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-amber-500">
              Descubra se Vale o Upgrade
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Seja transparente em suas escolhas. Analise de forma técnica o desempenho, câmeras, bateria e tecnologia de tela para decidir se é o momento de trocar o seu celular atual.
          </p>
        </div>

        {/* Preset Selector Dropdown */}
        <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-4 relative z-10 mb-12">
          <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider whitespace-nowrap">
            Escolha o Comparativo:
          </label>
          <select
            value={selectedPresetId}
            onChange={(e) => setSelectedPresetId(e.target.value)}
            className="bg-slate-950 border border-slate-850 text-white rounded-xl py-3 px-4 text-xs font-bold w-full focus:outline-none focus:border-[#FF6600] cursor-pointer"
          >
            {PRESET_COMPARISONS.map(preset => (
              <option key={preset.id} value={preset.id} className="bg-slate-900 text-white text-xs">
                {preset.title} ({preset.category})
              </option>
            ))}
          </select>
        </div>

        {/* Main Comparison Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Side Panel: Verdict */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono text-[#FF6600] font-bold uppercase tracking-widest">VEREDITO TÉCNICO</span>
              <h2 className="font-display font-extrabold text-white text-xl mt-1">Recomendação Final</h2>
            </div>

            {/* Recommendation badge */}
            <div className="bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-2xl p-4 flex items-start gap-3">
              <div className="p-2 bg-[#FF6600]/20 rounded-xl text-[#FF6600] mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold text-[#FF6600] tracking-wider uppercase">VEREDITO SHOPCELL</span>
                <span className="text-sm font-black text-white block mt-0.5">
                  Upgrade Altamente Recomendado!
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              {currentPreset.verdict}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">DIFERENÇAS PRINCIPAIS</h4>
              <div className="bg-slate-950 border border-slate-850 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span>⚡</span>
                <span>{currentPreset.performanceDiff}</span>
              </div>
              <div className="bg-slate-950 border border-slate-850 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold text-[#FF6600]">
                <span>📸</span>
                <span>{currentPreset.cameraDiff}</span>
              </div>
            </div>

            <button
              onClick={() => handleAddToCartFromComparison(currentPreset.current.name)}
              className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#FF6600]/25 hover:shadow-2xl hover:shadow-[#FF6600]/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar Preço Especial no WhatsApp</span>
            </button>
          </div>

          {/* Core Table Specs Sheet */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl">
            <h3 className="font-display font-bold text-white text-lg border-b border-slate-800 pb-4">
              Ficha Técnica Lado a Lado
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Recurso</th>
                    <th className="py-3 px-4 text-xs font-display font-black text-[#FF6600] uppercase tracking-wide bg-[#FF6600]/5 rounded-t-xl">{currentPreset.current.name}</th>
                    <th className="py-3 px-4 text-xs font-display font-bold text-slate-400 uppercase tracking-wide">{currentPreset.old.name}</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-slate-300 divide-y divide-slate-800/50">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[#FF6600]" />
                      <span>Tela & Brilho</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.screen}</td>
                    <td className="py-4 px-4">{currentPreset.old.screen}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#FF6600]" />
                      <span>Processador</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.processor}</td>
                    <td className="py-4 px-4">{currentPreset.old.processor}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-[#FF6600]" />
                      <span>Conjunto de Câmeras</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.camera}</td>
                    <td className="py-4 px-4">{currentPreset.old.camera}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <Battery className="w-4 h-4 text-[#FF6600]" />
                      <span>Capacidade de Bateria</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.battery}</td>
                    <td className="py-4 px-4">{currentPreset.old.battery}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#FF6600]" />
                      <span>Velocidade de Carga</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.charger}</td>
                    <td className="py-4 px-4">{currentPreset.old.charger}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <span>📊</span>
                      <span>AnTuTu Benchmark v10</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-emerald-400 bg-[#FF6600]/2">{currentPreset.current.antutu}</td>
                    <td className="py-4 px-4">{currentPreset.old.antutu}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <span>⚖️</span>
                      <span>Peso Líquido</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.weight}</td>
                    <td className="py-4 px-4">{currentPreset.old.weight}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bullets lists highlight details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-[#FF6600] font-mono uppercase tracking-wider">Vantagens do Novo Modelo</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {currentPreset.current.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF6600] font-bold">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/40 border border-slate-850/50 p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Ainda Bom no Modelo Anterior</h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  {currentPreset.old.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-500 font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Trust guarantees badge */}
      <section className="bg-slate-900 border-t border-b border-slate-800 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-2xl">🛡️</span>
            <h4 className="font-display font-bold text-white text-sm">Garantia Shopcell de 6 Meses</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">Suporte total e troca direta na nossa loja física localizada no Centro de Curitiba.</p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl">🏍️</span>
            <h4 className="font-display font-bold text-white text-sm">Pague na Entrega do Motoboy</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">Você só paga após receber, abrir a caixa, testar e conferir o IMEI e autenticidade.</p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl">🎁</span>
            <h4 className="font-display font-bold text-white text-sm">Brindes Completos Inclusos</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">Todos os aparelhos são entregues com película de vidro de alta resistência e capinha anti-impacto de brinde.</p>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
