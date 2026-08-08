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
    title: "Loja no Centro de Curitiba",
    description: "Excelente localização com facilidade de acesso no Edifício Downtown, ao lado do Shopping Estação."
  },
  {
    icon: "CreditCard",
    title: "Até 12x no Cartão / Desconto no Pix",
    description: "Facilidade e flexibilidade no pagamento. Parcele em até 12x no cartão de crédito ou aproveite descontos especiais no Pix."
  },
  {
    icon: "ShieldCheck",
    title: "Garantia Local de 12 Meses",
    description: "Todos os celulares novos contam com 12 meses de garantia presencial com suporte técnico direto com a nossa equipe em Curitiba."
  },
  {
    icon: "Star",
    title: "Nota 5.0 no Google",
    description: "Empresa referência com avaliação máxima e mais de 3.800 clientes satisfeitos em Curitiba e Região Metropolitana."
  },
  {
    icon: "Smartphone",
    title: "Produtos Originais e Lacrados",
    description: "Trabalhamos exclusivamente com aparelhos novos, 100% originais em caixas lacradas de fábrica com procedência garantida."
  },
  {
    icon: "MessageSquare",
    title: "Atendimento Especializado",
    description: "Consultoria completa antes e depois da compra via WhatsApp ou presencialmente para ajudar você a escolher o melhor aparelho."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os celulares são novos, originais e lacrados?",
    answer: "Sim! A Shopcell trabalha exclusivamente com celulares 100% originais, novos em caixas lacradas. Abrimos e conferimos a integridade do produto junto com você na hora da compra ou na entrega."
  },
  {
    question: "Como funciona a garantia dos aparelhos?",
    answer: "Oferecemos 12 meses de garantia local direta em nossa loja física no Centro de Curitiba. Isso garante suporte presencial rápido, sem complicações ou necessidade de envio por correios."
  },
  {
    question: "Como posso consultar aparelhos e preços disponíveis?",
    answer: "Você pode clicar em qualquer botão de atendimento para falar no WhatsApp com nossos consultores. Nossa equipe envia as opções disponíveis em estoque, fotos, cores e orçamentos na hora!"
  },
  {
    question: "Como funciona o pagamento parcelado no cartão?",
    answer: "Parcelamos suas compras em até 12x no cartão de crédito diretamente na nossa loja física ou na entrega presencial com o motoboy."
  },
  {
    question: "Qual o endereço da loja física em Curitiba?",
    answer: "Estamos localizados na Rua Conselheiro Laurindo, 809 – Sala 402 (Edifício Downtown), no Centro de Curitiba – PR. Pertinho do Shopping Estação e Rodoferroviária."
  },
  {
    question: "Vocês entregam em Curitiba e Região Metropolitana?",
    answer: "Sim! Contamos com serviço de motoboy express para entregas no mesmo dia em todos os bairros de Curitiba (Sítio Cercado, Batel, Água Verde, Boqueirão, CIC, etc.) e cidades da Região Metropolitana."
  },
  {
    question: "Qual o horário de funcionamento da loja?",
    answer: "Atendemos de Segunda a Sexta-feira das 09h às 19h, e aos Sábados das 10h às 16h."
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

export const CONTACT_INFO = {
  phone: "(41) 3538-1822",
  phoneLink: "tel:4135381822",
  whatsapp: "(41) 3798-9918",
  whatsappLink: "https://api.whatsapp.com/send?phone=554137989918&text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20os%20celulares%20dispon%C3%ADveis%20na%20Shopcell%20Curitiba.",
  email: "contato@celularcuritibashopcell.com.br",
  address: "R. Conselheiro Laurindo, 809 – Sala 402, 4º Andar, Edifício Downtown, Centro, Curitiba – PR, CEP 80060-100",
  mapsLink: "https://maps.app.goo.gl/UdXVapfdEjvFVWEC8",
  hours: "Seg–Sex 09h–19h | Sábado 10h–16h | Domingo fechado",
  cnpj: "33.628.749/0001-58",
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
