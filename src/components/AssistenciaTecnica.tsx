import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  Camera,
  CheckCircle2,
  Clock3,
  Cpu,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Settings2,
  ShieldCheck,
  Star,
  Store,
  Wrench,
} from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data';

type Coverage = {
  storeId: string;
  neighborhoods: { name: string; slug: string }[];
  cities: { name: string; slug: string }[];
};

const COVERAGE: Coverage[] = [
  {
    storeId: 'guaira',
    neighborhoods: [
      { name: 'Guaíra', slug: 'guaira' },
      { name: 'Água Verde', slug: 'agua-verde' },
      { name: 'Batel', slug: 'batel' },
      { name: 'Centro', slug: 'centro' },
      { name: 'Bigorrilho', slug: 'bigorrilho' },
      { name: 'Portão', slug: 'portao' },
      { name: 'Vila Izabel', slug: 'vila-izabel' },
      { name: 'Parolin', slug: 'parolin' },
      { name: 'Novo Mundo', slug: 'novo-mundo' },
      { name: 'Mercês', slug: 'merces' },
    ],
    cities: [
      { name: 'Campo Largo', slug: 'campo-largo' },
      { name: 'Campo Magro', slug: 'campo-magro' },
    ],
  },
  {
    storeId: 'alto-boqueirao',
    neighborhoods: [
      { name: 'Alto Boqueirão', slug: 'alto-boqueirao' },
      { name: 'Boqueirão', slug: 'boqueirao' },
      { name: 'Xaxim', slug: 'xaxim' },
      { name: 'Sítio Cercado', slug: 'sitio-cercado' },
      { name: 'Pinheirinho', slug: 'pinheirinho' },
      { name: 'Ganchinho', slug: 'ganchinho' },
      { name: 'Hauer', slug: 'hauer' },
      { name: 'Fanny', slug: 'fanny' },
      { name: 'Lindóia', slug: 'lindoia' },
      { name: 'CIC', slug: 'cic' },
    ],
    cities: [
      { name: 'São José dos Pinhais', slug: 'sao-jose-dos-pinhais' },
      { name: 'Pinhais', slug: 'pinhais' },
      { name: 'Fazenda Rio Grande', slug: 'fazenda-rio-grande' },
      { name: 'Araucária', slug: 'araucaria' },
    ],
  },
];

const SERVICES = [
  { icon: MonitorSmartphone, label: 'Troca de tela', detail: 'Peças com garantia' },
  { icon: BatteryCharging, label: 'Troca de bateria', detail: 'Serviço expresso' },
  { icon: Cable, label: 'Conector de carga', detail: 'Reparo preciso' },
  { icon: Cpu, label: 'Reparo de placa', detail: 'Microsoldagem' },
  { icon: Camera, label: 'Câmera e alto-falante', detail: 'Peças originais' },
  { icon: Settings2, label: 'Software e sistema', detail: 'Atualização segura' },
];

const STORE_IMAGES: Record<string, string> = {
  guaira: '/images/suncell-loja-guaira.webp',
  'alto-boqueirao': '/images/suncell-loja-boqueirao.webp',
};

export default function AssistenciaTecnica() {
  return (
    <section
      id="assistencia"
      className="relative overflow-hidden border-y border-slate-200 bg-white py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#FF6600]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#FF6600]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6600]/25 bg-[#FF6600]/8 px-3.5 py-1.5">
              <Wrench className="h-3.5 w-3.5 text-[#FF6600]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D45500]">
                Assistência técnica SUNCELL · Mercado Goes
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-display text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]">
              Conserto de celular em Curitiba,{' '}
              <span className="text-[#FF6600]">perto de você.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              Duas unidades dentro do Mercado Goes, em Guaíra e no Alto Boqueirão, com diagnóstico
              gratuito, peças de qualidade e garantia no serviço. Atendemos os bairros ao redor das
              lojas e toda a Região Metropolitana de Curitiba.
            </p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                <Store className="h-4 w-4 text-[#FF6600]" />
                <p className="mt-2 text-2xl font-black leading-none text-slate-950">2</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  Lojas físicas
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <p className="mt-2 text-2xl font-black leading-none text-slate-950">12</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  Meses de garantia
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <p className="mt-2 text-2xl font-black leading-none text-slate-950">5,0</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  Avaliação Google
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                <Clock3 className="h-4 w-4 text-[#FF6600]" />
                <p className="mt-2 text-2xl font-black leading-none text-slate-950">Hoje</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  Reparos expressos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.label}
                className="group rounded-2xl border border-slate-200 bg-white p-3.5 transition-all duration-300 hover:border-[#FF6600]/40 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF6600]/10 text-[#FF6600] transition-colors group-hover:bg-[#FF6600] group-hover:text-white">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <p className="mt-2.5 text-xs font-bold text-slate-900">{service.label}</p>
                <p className="mt-0.5 text-[10px] font-medium text-slate-500">{service.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {STORES.map((store) => {
            const coverage = COVERAGE.find((item) => item.storeId === store.id);
            if (!coverage) return null;

            return (
              <article
                key={store.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
              >
                <div className="relative h-44 overflow-hidden bg-slate-900 sm:h-52">
                  <img
                    src={STORE_IMAGES[store.id]}
                    alt={`Loja ${store.name} dentro do Mercado Goes`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/55 px-3 py-1 backdrop-blur-md">
                    <Store className="h-3 w-3 text-[#FFA366]" />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                      {store.landmark}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl font-black text-white">{store.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-200">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-[#FFA366]" />
                      {store.street} · {store.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5 text-[#FF6600]" />
                      Seg a Sáb · 09h às 19h
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      Garantia no serviço
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <a
                      href={store.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-3 text-xs font-extrabold text-white transition-all hover:brightness-95"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <a
                      href={store.phoneLink}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-xs font-bold text-slate-800 transition-all hover:border-[#FF6600]/40 hover:text-[#D45500]"
                    >
                      <Phone className="h-4 w-4 text-[#FF6600]" />
                      {store.phone}
                    </a>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Bairros atendidos ao redor da loja
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {coverage.neighborhoods.map((neighborhood) => (
                        <Link
                          key={neighborhood.slug}
                          to={`/bairro/${neighborhood.slug}`}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 transition-all hover:border-[#FF6600]/40 hover:bg-white hover:text-[#D45500]"
                        >
                          {neighborhood.name}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Região:
                      </span>
                      {coverage.cities.map((city) => (
                        <Link
                          key={city.slug}
                          to={`/bairro/${city.slug}`}
                          className="inline-flex items-center gap-1 rounded-md bg-[#FF6600]/8 px-2 py-1 text-[10px] font-bold text-[#D45500] transition-colors hover:bg-[#FF6600]/15"
                        >
                          {city.name}
                          <ArrowUpRight className="h-2.5 w-2.5" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <a
                    href={store.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 transition-colors hover:text-[#D45500]"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    Ver rota no Google Maps
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-slate-200 bg-slate-950 p-6 sm:flex-row sm:items-center sm:p-7">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFA366]">
              Diagnóstico gratuito e sem compromisso
            </p>
            <h3 className="mt-2 font-display text-xl font-black text-white sm:text-2xl">
              Traga seu celular em uma das lojas SUNCELL
            </h3>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Orçamento na hora
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Você aprova antes do reparo
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Atendimento humanizado
              </span>
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:brightness-95"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir orçamento
            </a>
            <a
              href={CONTACT_INFO.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-[#FF6600] hover:text-[#FFA366]"
            >
              Site oficial
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-5 text-center">
          <Link
            to="/#RMCEbairros"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 underline decoration-slate-300 decoration-dotted underline-offset-4 transition-colors hover:text-[#D45500]"
          >
            Ver todos os bairros e cidades atendidas
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
