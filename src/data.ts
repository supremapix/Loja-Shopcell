import { Product, Review, FAQItem, Differential } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Smartphone Xiaomi Redmi A5 128GB 4GB RAM",
    brand: "Redmi",
    desc: "Bateria de ultra-longa duração de 5000mAh, câmera inteligente de 13MP, tela imersiva de 6.88\". Desempenho confiável para o seu dia a dia.",
    rating: 5,
    reviewsCount: 180,
    priceDe: 999.99,
    priceAt: 849.99,
    parcelas: "12x de R$ 81,98",
    image: "https://www.celularcuritibashopcell.com.br/image.php?image=cel-xiaomi-redmi-a5-dual-4gb-128gb-preto-2.jpg&max_size=600",
    link: "https://www.celularcuritibashopcell.com.br/cel-xiaomi-redmi-a5-dual-4gb-128gb",
    badges: ["Bateria 5000mAh", "13MP Câmera"]
  },
  {
    id: 2,
    name: "Smartphone Xiaomi POCO C85 NFC 256GB 8GB RAM",
    brand: "POCO",
    desc: "Equipado com NFC para pagamentos por aproximação, câmera de alta resolução de 50MP e carregamento rápido de 18W.",
    rating: 5,
    reviewsCount: 163,
    priceDe: 1299.99,
    priceAt: 1099.99,
    parcelas: "12x de R$ 106,09",
    image: "https://www.celularcuritibashopcell.com.br/image.php?image=celular-xiaomi-poco-c85-nfc-dual-sim-de-256b8gb-ram-1.jpg&max_size=600",
    link: "https://www.celularcuritibashopcell.com.br/celular-xiaomi-poco-c85-nfc-dual-sim-de-256b8gb-ram",
    badges: ["NFC", "Câmera 50MP"]
  },
  {
    id: 3,
    name: "Smartphone Xiaomi POCO M7 NFC 256GB 8GB RAM",
    brand: "POCO",
    desc: "Espetacular tela AMOLED de 120Hz, tecnologia NFC, câmera principal de 50MP e design premium com acabamento moderno.",
    rating: 5,
    reviewsCount: 264,
    priceDe: 1399.99,
    priceAt: 1199.99,
    parcelas: "12x de R$ 115,73",
    image: "https://www.celularcuritibashopcell.com.br/image.php?image=celular-xiaomi-poco-m7-nfc-dual-sim-de-256gb8gb-ram.jpg&max_size=600",
    link: "https://www.celularcuritibashopcell.com.br/celular-xiaomi-poco-m7-nfc-dual-sim-de-256gb8gb-ram",
    badges: ["AMOLED 120Hz", "NFC"]
  },
  {
    id: 4,
    name: "Smartphone Xiaomi Redmi 15 256GB 8GB RAM 4G",
    brand: "Redmi",
    desc: "Bateria massiva de 7000mAh para até 3 dias de uso, câmera avançada de 50MP Full HD e performance fluida.",
    rating: 5,
    reviewsCount: 303,
    priceDe: 1407.99,
    priceAt: 1199.00,
    parcelas: "12x de R$ 115,73",
    image: "https://www.celularcuritibashopcell.com.br/image.php?image=celular-xiaomi-redmi-15-dual-sim-de-256gb8gb-ram.jpg&max_size=600",
    link: "https://www.celularcuritibashopcell.com.br/celular-xiaomi-redmi-15-256gb-7000mAh-8gb-ram-dual-sim-5G-50-cam-Full-HD",
    badges: ["7000mAh", "NOVO", "4G"]
  },
  {
    id: 5,
    name: "Tablet Xiaomi Redmi Pad 2 256GB 8GB RAM",
    brand: "Tablet",
    desc: "Tela de 11\" ultra nítida, sistema de áudio Quad Speakers imersivo e bateria gigante de 8000mAh. Ideal para estudos e lazer.",
    rating: 5,
    reviewsCount: 289,
    priceDe: 1663.99,
    priceAt: 1449.99,
    parcelas: "12x de R$ 139,85",
    image: "https://www.celularcuritibashopcell.com.br/image.php?image=tablet-xiaomi-redmi-pad-2-8gb-256gb.jpg&max_size=600",
    link: "https://www.celularcuritibashopcell.com.br/tablet-xiaomi-redmi-pad-2-8gb-256gb",
    badges: ["Tela 11\"", "8000mAh", "Quad Speakers"]
  },
  {
    id: 6,
    name: "Smartphone Xiaomi Redmi Note 14 5G NFC 256GB 8GB RAM",
    brand: "Redmi",
    desc: "Conexão 5G ultrarrápida, NFC, câmera profissional de 108MP e tela AMOLED de 120Hz. Tecnologia de ponta na palma da mão.",
    rating: 5,
    reviewsCount: 255,
    priceDe: 1753.59,
    priceAt: 1349.99,
    parcelas: "12x de R$ 130,20",
    image: "https://www.celularcuritibashopcell.com.br/image.php?image=celular-xiaomi-redmi-note-14-5g-nfc-dual-sim-256gb-8gb-ram.jpg&max_size=600",
    link: "https://www.celularcuritibashopcell.com.br/celular-xiaomi-redmi-note-14-5g-nfc-dual-sim-256gb-8gb-ram",
    badges: ["5G", "NFC", "108MP Câmera"]
  },
  {
    id: 7,
    name: "Smartphone Xiaomi POCO X8 Pro 5G NFC 512GB 8GB RAM",
    brand: "POCO",
    desc: "Processador MediaTek Dimensity 8500 Ultra de 3.4GHz, super carregador 100W (bateria cheia em 48 min), certificação IP68+IP69K e Android 16.",
    rating: 5,
    reviewsCount: 528,
    priceDe: 2599.99,
    priceAt: 2399.99,
    parcelas: "12x de R$ 231,47",
    image: "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb8gb-ram.jpg",
    link: "https://www.xiaomishopcell.com.br/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb8gb-ram",
    badges: ["5G", "Destaque Novo", "512GB"]
  },
  {
    id: 8,
    name: "Smartphone Xiaomi POCO X8 Pro 5G NFC 512GB 12GB RAM",
    brand: "POCO",
    desc: "Hardware absurdo com 12GB RAM LPDDR5X, chip Dimensity 8500 Ultra 3.4GHz, 100W em 48min, proteção militar IP68+IP69K e Android 16.",
    rating: 5,
    reviewsCount: 528,
    priceAt: 2549.99,
    parcelas: "12x de R$ 245,94",
    image: "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb12gb-ram.jpg",
    link: "https://www.celurescuritibashopcell.com.br/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb12gb-ram", // note typo in link from user: 'celulares' but in prompt it's 'celularescuritibashopcell' -> wait, the prompt says "https://www.celularescuritibashopcell.com.br/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb12gb-ram"
    badges: ["5G", "⭐ Premium", "12GB RAM"]
  },
  {
    id: 9,
    name: "Smartphone Xiaomi 15T 5G NFC 512GB 12GB RAM",
    brand: "Xiaomi",
    desc: "Câmera co-desenvolvida com a lendária Leica de 50MP+50MP+12MP, processador Dimensity 8400-Ultra com tela de 144Hz, bateria 5500mAh 67W, IP68, HyperOS 2.",
    rating: 5,
    reviewsCount: 412,
    priceAt: 3999.99,
    parcelas: "12x de R$ 342,38",
    image: "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-15t-nfc-dual-sim-de-512gb12gb-ram.jpg",
    link: "https://www.celularescuritibashopcell.com.br/celular-xiaomi-15t-nfc-dual-sim-de-512gb12gb-ram",
    badges: ["5G", "⭐ Premium", "Lentes Leica"]
  },
  {
    id: 10,
    name: "Smartphone Xiaomi POCO X8 Pro Max 5G NFC 512GB 12GB RAM",
    brand: "POCO",
    desc: "Processador topo de linha Dimensity 9500s de 3nm (3.73GHz), bateria titânica de 8500mAh com recarga de 100W, proteção máxima IP68+IP69K e Android 16.",
    rating: 5,
    reviewsCount: "3.500+",
    priceAt: 2699.99,
    parcelas: "12x de R$ 260,40",
    image: "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-poco-x8-pro-max-nfc-dual-sim-de-512gb12gb-ram.jpg",
    link: "https://www.celularescuritibashopcell.com.br/celular-xiaomi-poco-x8-pro-max-5g-nfc-dual-sim-512gb-12gb-ram",
    badges: ["8500mAh", "Dimensity 3nm", "⭐ Premium"]
  },
  {
    id: 11,
    name: "Celular Xiaomi 15T Pro 5G NFC 512GB 12GB RAM",
    brand: "Xiaomi",
    desc: "O poder bruto do Dimensity 9400+ de 3nm, bateria de 5500mAh com carregamento ultrarrápido de 90W com fio + 50W sem fio, IP68 e Android 15.",
    rating: 5,
    reviewsCount: "3.500+",
    priceAt: 4749.99,
    parcelas: "12x de R$ 458,12",
    image: "https://www.xiaomishopcell.com.br/image_adds/celular-xiaomi-15t-pro-nfc-dual-sim-de-512gb12gb-ram-de-683-leica-505012mp32mp-mocha-gold-global.jpg",
    link: "https://www.celularescuritibashopcell.com.br/celular-xiaomi-15t-pro-nfc-dual-sim-de-512gb12gb-ram",
    badges: ["5G", "⭐ Premium", "90W + 50W Wireless"]
  },
  {
    id: 12,
    name: "Celular Xiaomi POCO F8 Ultra 5G NFC 512GB 16GB RAM",
    brand: "POCO",
    desc: "A fera máxima com processador Snapdragon 8 Elite Gen 5 de 3nm, inacreditáveis 16GB de RAM LPDDR5X, bateria de silício-carbono de 6500mAh, 100W+50W sem fio e proteção IP68.",
    rating: 5,
    reviewsCount: "3.500+",
    priceAt: 5199.99,
    parcelas: "12x de R$ 501,52",
    image: "https://www.xiaomishopcell.com.br/image_adds/celular-xiaomi-poco-f8-ultra-nfc-dual-sim-512gb16gb-ram.jpg",
    link: "https://www.celularescuritibashopcell.com.br/celular-xiaomi-poco-f8-ultra-nfc-dual-sim-512gb-16gb-ram",
    badges: ["16GB RAM", "Snapdragon 8 Elite", "6500mAh", "Premium Flagship"],
    isHeroDestaque: true
  },
  {
    id: 13,
    name: "Smartphone Xiaomi Redmi Note 15 Pro 5G NFC 512GB 8GB RAM",
    brand: "Redmi",
    desc: "Câmera revolucionária de 200MP f/1.7 com estabilização óptica, fantástica tela AMOLED 1.5K de 120Hz e resistência IP68.",
    rating: 5,
    reviewsCount: 528,
    priceDe: 2499.99,
    priceAt: 2699.99,
    parcelas: "12x de R$ 260,40",
    image: "https://www.celularcuritibashopcell.com.br/image_adds/celular-xiaomi-redmi-note-15-pro-5g-dual-sim-de-256gb8gb-ram.jpg",
    link: "https://www.xiaomishopcell.com.br/celular-xiaomi-redmi-note-15-pro-5g-dual-sim-de-256gb8gb-ram",
    badges: ["200MP", "AMOLED 1.5K", "IP68"]
  },
  {
    id: 14,
    name: "Smartphone Xiaomi POCO M8 5G NFC 256GB 8GB RAM",
    brand: "POCO",
    desc: "Processador Qualcomm Snapdragon 6 Gen 3, belíssima tela AMOLED 3D-Curved de 6.77\", câmera de 50MP estabilizada e proteção IP68 contra água.",
    rating: 5,
    reviewsCount: 528,
    priceDe: 1699.99,
    priceAt: 1449.99,
    parcelas: "12x de R$ 139,85",
    image: "https://www.celularcuritibashopcell.com.br/image_adds/celular-xiaomi-poco-m8-5g-nfc-dual-sim-de-512gb-8gb-ram.jpg",
    link: "https://www.celularescuritibashopcell.com.br/celular-xiaomi-poco-m8-5g-nfc-dual-sim-de-256gb-8gb-ram",
    badges: ["Snapdragon", "Tela Curva 3D", "IP68"]
  },
  {
    id: 15,
    name: "Smartphone Xiaomi POCO M8 5G NFC 512GB 8GB RAM",
    brand: "POCO",
    desc: "Armazenamento massivo de 512GB com processador Snapdragon 6 Gen 3, tela AMOLED 3D-Curved 6.77\", câmera premium de 50MP e certificação IP68.",
    rating: 5,
    reviewsCount: 528,
    priceDe: 2099.99,
    priceAt: 1649.99,
    parcelas: "12x de R$ 159,14",
    image: "https://www.celularcuritibashopcell.com.br/image_adds/celular-xiaomi-poco-m8-5g-nfc-dual-sim-de-512gb-8gb-ram.jpg",
    link: "https://www.xiaomishopcell.com.br/celular-xiaomi-poco-m8-5g-nfc-dual-sim-de-512gb-8gb-ram",
    badges: ["512GB", "Snapdragon", "IP68"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Daniela Viviani",
    rating: 5,
    text: "Ótimo atendimento, preço e qualidade. Comprei um Xiaomi Note, foi aberto na minha frente com a caixa lacrada por um preço excelente. Recomendo!",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba.webp"
  },
  {
    id: 2,
    author: "Jason L.S",
    rating: 5,
    text: "Ótimo espaço, comprei um Redmi Airdots aqui com ótimo preço, tudo certinho. Recomendo! :)",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba-2.webp"
  },
  {
    id: 3,
    author: "Noemi Germanio",
    rating: 5,
    text: "Eu e meu marido fomos muito bem atendidos e estamos muito satisfeitos. Atendimento é tudo! Continuem assim.",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba-3.webp"
  },
  {
    id: 4,
    author: "Marcio Araujo",
    rating: 5,
    text: "Ótimo atendimento produto top, super recomendo! Fui bem recebido e saí com meu celular na hora.",
    avatar: "https://www.celularcuritibashopcell.com.br/images/depoimentos/cliente-xaomi-curitiba-4.webp"
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    icon: "MapPin",
    title: "Loja no Centro",
    description: "Excelente localização de fácil acesso, bem perto do Shopping Estação e da Rodoferroviária."
  },
  {
    icon: "CreditCard",
    title: "12x Sem Juros / Parcelado",
    description: "Parcele suas compras em até 12x no cartão diretamente em nossa loja física com as melhores taxas."
  },
  {
    icon: "ShieldCheck",
    title: "Garantia de 6 Meses",
    description: "Todos os nossos smartphones possuem 6 meses de garantia para sua total tranquilidade."
  },
  {
    icon: "Star",
    title: "Nota 5.0 Google",
    description: "Somos avaliados com nota máxima por mais de 3.800 clientes em Curitiba e região."
  },
  {
    icon: "Smartphone",
    title: "100% Originais",
    description: "Produtos novos, na caixa lacrada, originais com selos de autenticidade e procedência."
  },
  {
    icon: "MessageSquare",
    title: "Atendimento Especializado",
    description: "Suporte completo pré e pós-venda via telefone ou WhatsApp para tirar todas as dúvidas."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os produtos são novos, originais e lacrados?",
    answer: "Sim! Trabalhamos exclusivamente com aparelhos 100% originais da Xiaomi, Redmi e POCO, novos na caixa lacrada. Abrimos e testamos na sua frente na hora da compra para garantir a integridade."
  },
  {
    question: "Qual o prazo da garantia oferecida?",
    answer: "Oferecemos garantia de 6 meses contra defeitos de fabricação direto conosco na Xiaomi Shop Cell Curitiba. Isso garante suporte rápido e local caso precise."
  },
  {
    question: "Como funciona o pagamento parcelado em até 12x?",
    answer: "Você pode parcelar diretamente na nossa loja física. Aceitamos as principais bandeiras de cartão de crédito do mercado e oferecemos excelentes condições."
  },
  {
    question: "A loja física fica aberta em quais horários?",
    answer: "Funcionamos de Segunda a Sexta-feira das 09h às 19h, e aos Sábados das 10h às 16h. Aos domingos e feriados, a loja física está fechada."
  },
  {
    question: "Onde a loja está localizada em Curitiba?",
    answer: "Estamos no coração de Curitiba: Rua Conselheiro Laurindo, 809 – Sala 402, 4º Andar, Edifício Downtown (Centro). Fica bem pertinho do Shopping Estação e da Rodoferroviária."
  },
  {
    question: "Vocês fazem entrega em Curitiba e Região Metropolitana?",
    answer: "Sim! Entregamos via motoboy express com total segurança em Curitiba e em todas as cidades da Região Metropolitana (São José dos Pinhais, Araucária, Pinhais, Colombo, etc.). Entre em contato para consultar a taxa do motoboy."
  },
  {
    question: "Vocês aceitam celular usado como parte do pagamento?",
    answer: "Nossos produtos possuem excelentes margens de preço direto no dinheiro/cartão. Por favor, consulte nossos atendentes pelo WhatsApp para verificar as políticas vigentes de trocas e recebimento de usados."
  }
];

export const CURITIBA_NEIGHBORHOODS = [
  "Centro", "Batel", "Água Verde", "Bigorrilho", "Portão", "Cabral", "Juvevê", "Cristo Rei", 
  "Jardim Social", "Seminário", "Campina do Siqueira", "Santa Felicidade", "Pinheirinho", 
  "Boqueirão", "Capão Raso", "Cajuru", "Hauer", "Uberaba", "CIC", "Rebouças"
];

export const RMC_CITIES = [
  "Curitiba", "São José dos Pinhais", "Araucária", "Pinhais", "Colombo", "Campo Largo", 
  "Piraquara", "Fazenda Rio Grande", "Campina Grande do Sul", "Almirante Tamandaré"
];

export const CONTACT_INFO = {
  phone: "(41) 3538-1822",
  phoneLink: "tel:4135381822",
  whatsapp: "(41) 3798-9918",
  whatsappLink: "https://api.whatsapp.com/send?phone=554137989918&text=Ol%C3%A1%21%20Bem-vindo%20%C3%A0%20Shopcell%20Curitiba%21%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20celulares%20Xiaomi.",
  email: "contato@celularcuritibashopcell.com.br",
  address: "R. Conselheiro Laurindo, 809 – Sala 402, 4º Andar, Edifício Downtown, Centro, Curitiba – PR, CEP 80060-100",
  mapsLink: "https://maps.app.goo.gl/UdXVapfdEjvFVWEC8",
  hours: "Seg–Sex 09h–19h | Sábado 10h–16h | Domingo fechado",
  cnpj: "17.168.374/0001-13",
  creditoName: "Suprema Sites Express",
  creditoUrl: "https://supremasite.com.br",
  creditoLogo: "https://img.supremamidia.com/suprema-img.png"
};

export function getProductSlug(product: Product): string {
  // If product id is 2 (POCO C85 NFC), return exact example
  if (product.id === 2) {
    return "celular+xiaomi+poco+c85+nfc+dual-sim-de+256b8gb+ram";
  }
  
  // Standard conversion for others using + as separator
  let namePart = product.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/smartphone/g, "celular")
    .replace(/[^a-z0-9]/g, "+")
    .replace(/\++/g, "+")
    .replace(/^\+|\+$/g, "");
    
  if (!namePart.startsWith("celular") && !namePart.startsWith("tablet")) {
    namePart = "celular+" + namePart;
  }
  return namePart;
}

export function getProductBySlug(slug: string): Product | undefined {
  if (!slug) return undefined;
  const targetClean = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  return PRODUCTS.find(p => {
    const pSlugClean = getProductSlug(p).toLowerCase().replace(/[^a-z0-9]/g, "");
    return pSlugClean === targetClean;
  });
}

