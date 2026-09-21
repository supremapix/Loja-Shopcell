import { Product, Review, FAQItem, Differential, CategoryHighlight } from './types';

export const CATEGORY_HIGHLIGHTS: CategoryHighlight[] = [
  {
    id: "entrada",
    title: "Smartphones de Entrada",
    subtitle: "Uso Essencial & Bateria de Longa Duração",
    description: "Ideais para redes sociais, chamadas de vídeo, navegação fluida e WhatsApp no dia a dia. Excelente autonomia e facilidade de uso.",
    icon: "Smartphone",
    badge: "Excelente Custo-Benefício",
    features: [
      "Baterias de alta capacidade (5000mAh+)",
      "Telas amplas e nítidas",
      "Câmeras com inteligência artificial",
      "Armazenamento de 128GB a 256GB"
    ]
  },
  {
    id: "intermediarios",
    title: "Smartphones Intermediários 5G",
    subtitle: "Equilíbrio Perfeito entre Velocidade e Fotografia",
    description: "A escolha mais procurada em Curitiba. Conectividade 5G ultrarrápida, telas AMOLED fluidas de 120Hz e conjunto fotográfico avançado.",
    icon: "Zap",
    badge: "Mais Vendidos em Curitiba",
    features: [
      "Conexão 5G e tecnologia NFC para pagamentos",
      "Telas AMOLED de 120Hz com cores vivas",
      "Câmeras de alta resolução (50MP a 108MP)",
      "Carregamento rápido com fonte inclusa"
    ]
  },
  {
    id: "alta-performance",
    title: "Smartphones de Alta Performance",
    subtitle: "Velocidade Máxima para Jogos e Multitarefa",
    description: "Projetados para quem precisa de alto processamento, jogos pesados sem engasgos, resfriamento otimizado e multitarefa contínua.",
    icon: "Cpu",
    badge: "Máxima Velocidade",
    features: [
      "Processadores octa-core de última geração",
      "Até 12GB ou 16GB de memória RAM",
      "Carregadores de alta potência (67W a 100W)",
      "Sistemas de refrigeração inteligente"
    ]
  },
  {
    id: "premium",
    title: "Smartphones Premium & Topo de Linha",
    subtitle: "Fotografia Profissional e Materiais Nobres",
    description: "O mais alto padrão em tecnologia móvel. Conjunto fotográfico profissional, gravação de vídeo em altíssima definição e acabamento de luxo.",
    icon: "Star",
    badge: "Lançamentos e Flagships",
    features: [
      "Sensores de câmera profissionais",
      "Proteção IP68 contra água e poeira",
      "Construção em alumínio e vidro de alta resistência",
      "Garantia estendida e suporte dedicado"
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Smartphone Essencial 128GB",
    category: "Entrada",
    desc: "Bateria de longa duração de 5000mAh, tela imersiva de alta definição e desempenho confiável para seu dia a dia.",
    rating: 5,
    reviewsCount: 180,
    image: "https://www.celularcuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
    badges: ["Bateria 5000mAh", "128GB", "Câmera HD"]
  },
  {
    id: 2,
    name: "Smartphone 5G Intermediário 256GB",
    category: "Intermediário",
    desc: "Equipado com tecnologia NFC para pagamentos por aproximação, câmera tripla de 50MP e tela fluida AMOLED.",
    rating: 5,
    reviewsCount: 264,
    image: "https://www.celularcuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
    badges: ["Conexão 5G", "NFC", "256GB"]
  },
  {
    id: 3,
    name: "Smartphone Alta Performance 256GB 12GB RAM",
    category: "Alta Performance",
    desc: "Processador ultra-rápido, carregamento de alta potência e sistema de resfriamento para jogos e multitarefa pesada.",
    rating: 5,
    reviewsCount: 528,
    image: "https://www.celularcuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
    badges: ["12GB RAM", "Processador Octa-Core", "120Hz"]
  },
  {
    id: 4,
    name: "Smartphone Premium Flagship 512GB",
    category: "Premium",
    desc: "Conjunto fotográfico de nível profissional, gravação em alta definição, acabamento nobre e certificação de resistência IP68.",
    rating: 5,
    reviewsCount: "3.500+",
    image: "https://www.celularcuritibashopcell.com.br/assets/loja-shopcell-monitores-CqWnbbff.webp",
    badges: ["512GB", "Câmera Profissional", "Resistente à Água"],
    isHeroDestaque: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Daniela Viviani",
    rating: 5,
    text: "Ótimo atendimento, preço justo e qualidade exemplar. Meu celular foi aberto na minha frente na caixa lacrada por um preço excelente. Recomendo muito!",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba.webp"
  },
  {
    id: 2,
    author: "Jason L.S",
    rating: 5,
    text: "Espaço muito bem localizado no Centro. Comprei meus acessórios e aparelhos aqui com ótimo atendimento e tudo certinho. Nota 10!",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba-2.webp"
  },
  {
    id: 3,
    author: "Noemi Germanio",
    rating: 5,
    text: "Eu e meu marido fomos muito bem atendidos na loja física e ficamos extremamente satisfeitos com o suporte prestado. Atendimento humano faz toda diferença!",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba-3.webp"
  },
  {
    id: 4,
    author: "Marcio Araujo",
    rating: 5,
    text: "Excelente atendimento e produtos de altíssima qualidade! Fui super bem recebido no Edifício Downtown e saí com meu celular novo no mesmo dia.",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba-4.webp"
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    icon: "MapPin",
    title: "2 Lojas no Mercado Goes",
    description: "Unidade Guaíra e Unidade Alto Boqueirão em Curitiba. Facilidade de acesso, segurança e estacionamento no Mercado Goes."
  },
  {
    icon: "CreditCard",
    title: "Até 12x no Cartão / Desconto no Pix",
    description: "Facilidade e flexibilidade no pagamento. Parcele em até 12x no cartão de crédito ou aproveite descontos especiais no Pix."
  },
  {
    icon: "ShieldCheck",
    title: "Garantia Local de 12 Meses",
    description: "Todos os celulares novos contam com 12 meses de garantia presencial com suporte técnico e assistência especializada SUNCELL em Curitiba."
  },
  {
    icon: "Star",
    title: "Excelência e Confiança",
    description: "Assistência técnica e venda de smartphones com atendimento transparente, peças de qualidade e respeito total ao cliente."
  },
  {
    icon: "Smartphone",
    title: "Produtos Originais e Lacrados",
    description: "Trabalhamos exclusivamente com aparelhos novos, 100% originais em caixas lacradas de fábrica com procedência garantida."
  },
  {
    icon: "MessageSquare",
    title: "Atendimento Especializado",
    description: "Consultoria completa antes e depois da compra via WhatsApp ou presencialmente em nossas unidades para você tirar todas as dúvidas."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os celulares são novos, originais e lacrados?",
    answer: "Sim! A SUNCELL trabalha exclusivamente com celulares 100% originais, novos em caixas lacradas. Abrimos e conferimos a integridade do produto junto com você na hora da compra ou na entrega."
  },
  {
    question: "Como funciona a garantia dos aparelhos?",
    answer: "Oferecemos 12 meses de garantia local direta em nossas lojas físicas no Mercado Goes em Curitiba. Isso garante suporte presencial ágil com equipe técnica própria, sem burocracia."
  },
  {
    question: "Como posso consultar aparelhos e preços disponíveis?",
    answer: "Você pode falar no WhatsApp da Unidade Guaíra pelo (41) 99917-6640 ou da Unidade Alto Boqueirão pelo (41) 99750-1961. Nossa equipe envia as opções disponíveis em estoque, fotos e orçamentos na hora!"
  },
  {
    question: "Como funciona o pagamento parcelado no cartão?",
    answer: "Parcelamos suas compras em até 12x no cartão de crédito diretamente em nossas lojas físicas no Mercado Goes ou na entrega presencial com motoboy."
  },
  {
    question: "Quais são os endereços das lojas SUNCELL em Curitiba?",
    answer: "Possuímos 2 unidades dentro do Mercado Goes em Curitiba: 1) SUNCELL Guaíra: Rua Maria Moscardi Fanini, 261 - Guaíra (Tel/Whats: 41 99917-6640); 2) SUNCELL Alto Boqueirão: R. Pastor Antônio Polito, 1805 - Alto Boqueirão (Tel/Whats: 41 99750-1961)."
  },
  {
    question: "Vocês entregam em Curitiba e Região Metropolitana?",
    answer: "Sim! Contamos com serviço de motoboy express para entregas no mesmo dia em todos os bairros de Curitiba e cidades da Região Metropolitana."
  },
  {
    question: "Qual o horário de funcionamento das lojas?",
    answer: "Atendemos de Segunda a Sábado em horário comercial dentro do Mercado Goes (das 09h às 19h)."
  },
  {
    question: "Qual o e-mail oficial e site da SUNCELL?",
    answer: "Nosso e-mail de atendimento é info@suncellassistencia.com.br e nosso site oficial com todas as lojas pode ser acessado em https://www.suncellassistencia.com.br/#lojas-section."
  }
];

export const CURITIBA_NEIGHBORHOODS = [
  "Centro", "Batel", "Água Verde", "Bigorrilho", "Portão", "Cabral", "Juvevê", "Cristo Rei", 
  "Jardim Social", "Seminário", "Campina do Siqueira", "Santa Felicidade", "Pinheirinho", 
  "Boqueirão", "Capão Raso", "Cajuru", "Hauer", "Uberaba", "CIC", "Rebouças", "Sítio Cercado"
];

export const RMC_CITIES = [
  "Curitiba", "São José dos Pinhais", "Araucária", "Pinhais", "Colombo", "Campo Largo", 
  "Piraquara", "Fazenda Rio Grande", "Campina Grande do Sul", "Almirante Tamandaré"
];

export interface StoreInfo {
  id: string;
  name: string;
  unitName: string;
  landmark: string;
  address: string;
  street: string;
  neighborhood: string;
  cep: string;
  city: string;
  phone: string;
  phoneClean: string;
  phoneLink: string;
  whatsapp: string;
  whatsappClean: string;
  whatsappLink: string;
  mapsQuery: string;
  mapsLink: string;
  hours: string;
  badge: string;
}

export const STORES: StoreInfo[] = [
  {
    id: "guaira",
    name: "SUNCELL Guaíra",
    unitName: "Unidade Guaíra",
    landmark: "Dentro do Mercado Goes",
    address: "Rua Maria Moscardi Fanini, 261 - Guaíra, Curitiba - PR, 80220-450",
    street: "Rua Maria Moscardi Fanini, 261",
    neighborhood: "Guaíra",
    cep: "80220-450",
    city: "Curitiba - PR",
    phone: "(41) 99917-6640",
    phoneClean: "41999176640",
    phoneLink: "tel:41999176640",
    whatsapp: "(41) 99917-6640",
    whatsappClean: "5541999176640",
    whatsappLink: "https://wa.me/5541999176640?text=Ol%C3%A1%21%20Gostaria%20de%20atendimento%20na%20SUNCELL%20Unidade%20Gua%C3%ADra%20%28Dentro%20do%20Mercado%20Goes%29.",
    mapsQuery: "Rua+Maria+Moscardi+Fanini,+261+-+Guaíra,+Curitiba+-+PR,+80220-450",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Rua+Maria+Moscardi+Fanini,+261+-+Guaíra,+Curitiba+-+PR,+80220-450",
    hours: "Seg–Sáb 09h–19h (Dentro do Mercado Goes)",
    badge: "Mercado Goes Guaíra"
  },
  {
    id: "alto-boqueirao",
    name: "SUNCELL Alto Boqueirão",
    unitName: "Unidade Alto Boqueirão",
    landmark: "Dentro do Mercado Goes",
    address: "R. Pastor Antônio Polito, 1805 - Alto Boqueirão, Curitiba - PR, 81770-260",
    street: "R. Pastor Antônio Polito, 1805",
    neighborhood: "Alto Boqueirão",
    cep: "81770-260",
    city: "Curitiba - PR",
    phone: "(41) 99750-1961",
    phoneClean: "41997501961",
    phoneLink: "tel:41997501961",
    whatsapp: "(41) 99750-1961",
    whatsappClean: "5541997501961",
    whatsappLink: "https://wa.me/5541997501961?text=Ol%C3%A1%21%20Gostaria%20de%20atendimento%20na%20SUNCELL%20Unidade%20Alto%20Boqueir%C3%A3o%20%28Dentro%20do%20Mercado%20Goes%29.",
    mapsQuery: "R.+Pastor+Antônio+Polito,+1805+-+Alto+Boqueirão,+Curitiba+-+PR,+81770-260",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=R.+Pastor+Antônio+Polito,+1805+-+Alto+Boqueirão,+Curitiba+-+PR,+81770-260",
    hours: "Seg–Sáb 09h–19h (Dentro do Mercado Goes)",
    badge: "Mercado Goes Alto Boqueirão"
  }
];

export const CONTACT_INFO = {
  brandName: "SUNCELL",
  brandSubtitle: "Assistência Técnica & Celulares em Curitiba",
  phone: "(41) 99917-6640",
  phoneLink: "tel:41999176640",
  phone2: "(41) 99750-1961",
  phoneLink2: "tel:41997501961",
  whatsapp: "(41) 99917-6640",
  whatsappLink: "https://wa.me/5541999176640?text=Ol%C3%A1%21%20Gostaria%20de%20atendimento%20na%20SUNCELL%20Unidade%20Gua%C3%ADra%20%28Mercado%20Goes%29.",
  whatsapp2: "(41) 99750-1961",
  whatsappLink2: "https://wa.me/5541997501961?text=Ol%C3%A1%21%20Gostaria%20de%20atendimento%20na%20SUNCELL%20Unidade%20Alto%20Boqueir%C3%A3o%20%28Mercado%20Goes%29.",
  email: "info@suncellassistencia.com.br",
  emailLink: "mailto:info@suncellassistencia.com.br",
  address: "SUNCELL Guaíra: Rua Maria Moscardi Fanini, 261 | SUNCELL Alto Boqueirão: R. Pastor Antônio Polito, 1805 (Ambas no Mercado Goes, Curitiba - PR)",
  addressGuaira: "Rua Maria Moscardi Fanini, 261 - Guaíra, Curitiba - PR, 80220-450 (Dentro do Mercado Goes)",
  addressBoqueirao: "R. Pastor Antônio Polito, 1805 - Alto Boqueirão, Curitiba - PR, 81770-260 (Dentro do Mercado Goes)",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Rua+Maria+Moscardi+Fanini,+261+-+Guaíra,+Curitiba+-+PR,+80220-450",
  mapsLinkBoqueirao: "https://www.google.com/maps/search/?api=1&query=R.+Pastor+Antônio+Polito,+1805+-+Alto+Boqueirão,+Curitiba+-+PR,+81770-260",
  officialSiteUrl: "https://www.suncellassistencia.com.br/#lojas-section",
  hours: "Segunda a Sábado: 09h às 19h (Dentro do Mercado Goes)",
  cnpj: "33.628.749/0001-58",
  stores: STORES,
  creditoName: "Suprema Sites Express",
  creditoUrl: "https://supremasite.com.br",
  creditoLogo: "https://img.supremamidia.com/suprema-img.png"
};

export function getProductSlug(product: Product): string {
  return "celulares";
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS[0];
}
