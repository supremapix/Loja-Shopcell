import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, ShieldCheck, Cpu, Smartphone, Camera, Battery, Zap } from 'lucide-react';
import EnhancedSEO from './EnhancedSEO';
import Ticker from './Ticker';
import Footer from './Footer';

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
  image?: string;
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
    id: 'intermediario-premium-vs-anterior',
    title: 'Celular Intermediário Premium Versão Atual vs Versão Anterior',
    category: 'Intermediário Premium',
    performanceDiff: '+25% de Desempenho',
    cameraDiff: 'Upgrade de Câmera e Estabilização',
    verdict: 'O modelo atual traz tela mais brilhante com cores vivas e câmera aprimorada que tira fotos nítidas e detalhadas mesmo no escuro.',
    recommendation: 'UPGRADE_RECOMENDADO',
    current: {
      name: 'Intermediário Premium (Atual)',
      screen: '6.67" 1.5K AMOLED (1220p), 120Hz, Dolby Vision',
      processor: 'Processador Octa-Core de Alta Eficiência (4nm)',
      camera: '200 MP (Principal, OIS) + Ultrawide + Macro',
      battery: '5100 mAh',
      charger: '67W Turbo Charge (100% em ~44min)',
      antutu: '605.000 pontos',
      weight: '187g',
      highlights: ['Câmera avançada com super zoom digital', 'Tela 1.5K ultra definida', 'Bordas de tela extremamente finas'],
      image: "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
    },
    old: {
      name: 'Intermediário Premium (Anterior)',
      screen: '6.67" FHD+ AMOLED (1080p), 120Hz',
      processor: 'Processador Octa-Core Intermediário (6nm)',
      camera: '50 MP (Principal, OIS) + Ultrawide + Macro',
      battery: '5000 mAh',
      charger: '67W Fast Charge',
      antutu: '490.000 pontos',
      weight: '187g',
      highlights: ['Boa câmera para uso básico', 'Ótimo equilíbrio geral', 'Corpo com acabamento elegante'],
      image: "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
    }
  },
  {
    id: 'flagship-gamer-vs-anterior',
    title: 'Smartphone Gamer / Alta Performance Atual vs Anterior',
    category: 'Alta Performance',
    performanceDiff: '+42% de Velocidade',
    cameraDiff: 'Sensor Fotográfico Atualizado',
    verdict: 'Com processador topo de linha, o modelo atual é um monstro para jogos e multitarefa pesada. O carregamento super rápido recarrega a bateria de zero a 100% em poucos minutos.',
    recommendation: 'UPGRADE_RECOMENDADO',
    current: {
      name: 'Alta Performance (Atual)',
      screen: '6.67" WQHD+ AMOLED, 120Hz, Alta Taxa de Amostragem',
      processor: 'Processador Flagship de Última Geração (4nm)',
      camera: '50 MP (Sensor Principal com OIS) + Ultrawide',
      battery: '5000 mAh',
      charger: '120W HyperCharge',
      antutu: '1.610.000 pontos',
      weight: '209g',
      highlights: ['Processador topo de linha extremamente fluído', 'Carregador super rápido incluso na caixa', 'Tela brilhante em ambientes ensolarados'],
      image: "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
    },
    old: {
      name: 'Alta Performance (Anterior)',
      screen: '6.67" WQHD+ AMOLED, 120Hz',
      processor: 'Processador Flagship da Geração Passada',
      camera: '64 MP (Principal, OIS) + Ultrawide',
      battery: '5160 mAh',
      charger: '67W Turbo',
      antutu: '1.135.000 pontos',
      weight: '204g',
      highlights: ['Excelente desempenho geral', 'Boa tela WQHD+', 'Boa autonomia de bateria'],
      image: "https://www.celularescuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp"
    }
  }
];

export default function Compare() {
  const [selectedPresetId, setSelectedPresetId] = useState(PRESET_COMPARISONS[0].id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedPresetId]);

  const currentPreset = PRESET_COMPARISONS.find(p => p.id === selectedPresetId) || PRESET_COMPARISONS[0];

  const handleConsultWhatsApp = (productName: string) => {
    const whatsappMessage = `Olá! Vi o comparativo de *${productName}* no site e gostaria de saber as opções disponíveis a pronta entrega!`;
    const fullLink = `https://api.whatsapp.com/send?phone=554137989918&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(fullLink, '_blank', 'referrer');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <EnhancedSEO 
        title="Comparativo de Celulares | Shopcell — Loja de Celulares em Curitiba"
        description="Analise técnica e compare smartphones atuais com suas gerações anteriores. Saiba se vale a pena fazer o upgrade!"
        canonical="https://www.celularescuritibashopcell.com.br/comparar"
      />
      
      <Ticker />

      <header className="sticky top-0 z-40 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md py-4 w-full">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-md">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black tracking-wider text-white text-lg leading-none group-hover:text-[#FF6600] transition-colors">
                SHOPCELL
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

      <section className="py-16 px-4 max-w-7xl mx-auto w-full relative">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest bg-[#FF6600]/10 px-3 py-1 rounded-full">
            COMPARADOR INTELIGENTE
          </span>
          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-none">
            Geração Atual vs Versão Anterior: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-amber-500">
              Descubra se Vale o Upgrade
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Analise de forma técnica o desempenho, câmeras, bateria e tecnologia de tela para decidir se é o momento de trocar o seu celular.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-4 relative z-10 mb-12">
          <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider whitespace-nowrap">
            Escolha o Comparativo:
          </label>
          <select
            value={selectedPresetId}
            onChange={(e) => setSelectedPresetId(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-white rounded-xl py-3 px-4 text-xs font-bold w-full focus:outline-none focus:border-[#FF6600] cursor-pointer"
          >
            {PRESET_COMPARISONS.map(preset => (
              <option key={preset.id} value={preset.id} className="bg-slate-900 text-white text-xs">
                {preset.title} ({preset.category})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono text-[#FF6600] font-bold uppercase tracking-widest">VEREDITO TÉCNICO</span>
              <h2 className="font-display font-extrabold text-white text-xl mt-1">Recomendação Final</h2>
            </div>

            <div className="bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-2xl p-4 flex items-start gap-3">
              <div className="p-2 bg-[#FF6600]/20 rounded-xl text-[#FF6600] mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold text-[#FF6600] tracking-wider uppercase">VEREDITO SHOPCELL</span>
                <span className="text-sm font-black text-white block mt-0.5">
                  Upgrade Recomendado!
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              {currentPreset.verdict}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">DIFERENÇAS PRINCIPAIS</h4>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{currentPreset.performanceDiff}</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold text-[#FF6600]">
                <Camera className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                <span>{currentPreset.cameraDiff}</span>
              </div>
            </div>

            <button
              onClick={() => handleConsultWhatsApp(currentPreset.current.name)}
              className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar Opções no WhatsApp</span>
            </button>
          </div>

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
                      <span>Tela</span>
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
                      <span>Câmeras</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.camera}</td>
                    <td className="py-4 px-4">{currentPreset.old.camera}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-slate-400 flex items-center gap-2">
                      <Battery className="w-4 h-4 text-[#FF6600]" />
                      <span>Bateria</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-[#FF6600]/2">{currentPreset.current.battery}</td>
                    <td className="py-4 px-4">{currentPreset.old.battery}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
