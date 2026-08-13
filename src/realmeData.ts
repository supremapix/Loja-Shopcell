export interface RealmeSpec {
  label: string;
  value: string;
}

export interface RealmeProduct {
  slug: string;
  name: string;
  brand: 'Realme';
  price: number;
  priceFormatted: string;
  installments: string;
  image: string;
  color: string;
  shortDescription: string;
  fullDescription: string;
  specs: {
    tela: string;
    processador: string;
    memoria: string;
    cameras: string;
    bateria: string;
    sistema: string;
    recursos: string;
    dimensoes?: string;
    video?: string;
  };
  specList: RealmeSpec[];
  highlights: string[];
  altText: string;
  metaDescription: string;
  titleSEO: string;
  canonical: string;
  faqs: { question: string; answer: string }[];
}

export const REALME_PRODUCTS: RealmeProduct[] = [
  {
    slug: "realme-note-60x",
    name: "Realme Note 60X (Dual SIM, Anatel)",
    brand: "Realme",
    price: 849.99,
    priceFormatted: "R$ 849,99",
    installments: "12x de R$ 81,05",
    image: "https://resource.megaeletronicos.com/uploads/Product/new/1/4/7/1/0/5/147105/1755950606_1755950606.jpg",
    color: "Marble Black",
    shortDescription: "Equilíbrio entre autonomia e resistência com certificação IP54, bateria de 5.000mAh e tela de 90Hz para o uso diário.",
    fullDescription: "O smartphone Realme Note 60X (Dual SIM, homologado Anatel) foi projetado para oferecer a melhor experiência em confiabilidade, bateria duradoura e facilidade de navegação no dia a dia. Com corpo ultra-fino de 7,84mm, proteção IP54 contra respingos e poeira, tela imersiva de 6,74 polegadas com taxa de atualização suave de 90Hz e bateria de 5.000 mAh, ele é ideal para redes sociais, chamadas de vídeo e WhatsApp com total estabilidade. Acompanha 12 meses de garantia física e suporte presencial no Centro de Curitiba na Shopcell.",
    specs: {
      tela: "LCD 6,74\" HD+ 90Hz, brilho 560 nits",
      processador: "Unisoc Tiger T612 Octa Core",
      memoria: "4GB (+8GB RAM virtual) / Armazenamento: 128GB (suporta microSD)",
      cameras: "Traseira dupla 8MP + frontal 5MP",
      bateria: "5.000 mAh",
      sistema: "Android 14 + Realme UI",
      recursos: "Proteção IP54, impressão digital lateral, Dual SIM",
      dimensoes: "Peso: 187g, 7,84mm de espessura"
    },
    specList: [
      { label: "Tela", value: "LCD 6,74\" HD+ 90Hz, brilho 560 nits" },
      { label: "Processador", value: "Unisoc Tiger T612 Octa Core" },
      { label: "Memória RAM", value: "4GB (+8GB RAM virtual expansível)" },
      { label: "Armazenamento", value: "128GB (com suporte a cartão microSD)" },
      { label: "Câmeras", value: "Traseira dupla 8MP + Frontal 5MP para selfies" },
      { label: "Bateria", value: "5.000 mAh de longa duração" },
      { label: "Sistema Operacional", value: "Android 14 com interface Realme UI" },
      { label: "Proteção & Segurança", value: "Certificação IP54 e leitor de impressão digital lateral" },
      { label: "Cor & Dimensões", value: "Marble Black | Peso 187g e espessura de 7,84mm" },
      { label: "Homologação", value: "Versão Oficial Anatel Dual SIM" }
    ],
    highlights: [
      "Bateria gigante de 5.000 mAh para o dia todo",
      "Tela ampla de 6,74\" com 90Hz super fluida",
      "128GB de memória com suporte a cartão",
      "Resistência IP54 contra respingos e poeira",
      "12 Meses de Garantia Local no Centro de Curitiba"
    ],
    altText: "Smartphone Realme Note 60X Marble Black tela 6,74 polegadas bateria 5000mAh",
    metaDescription: "Compre o Realme Note 60X 128GB em Curitiba por R$ 849,99 à vista ou 12x de R$ 81,05. Bateria 5.000mAh, tela 90Hz e 12 meses de garantia na Shopcell.",
    titleSEO: "Realme Note 60X (Dual SIM, Anatel) — R$ 849,99 à vista | Shopcell Curitiba",
    canonical: "https://www.celularescuritibashopcell.com.br/celular/realme-note-60x",
    faqs: [
      {
        question: "O Realme Note 60X é resistente à água?",
        answer: "O Realme Note 60X possui certificação IP54, oferecendo proteção contra poeira e respingos acidentais de água para maior durabilidade no cotidiano."
      },
      {
        question: "O aparelho é original e possui garantia em Curitiba?",
        answer: "Sim! Trabalhamos exclusivamente com aparelhos novos, originais na caixa lacrada com selo de fábrica. Oferecemos 12 meses de garantia local com suporte presencial na nossa loja física no Centro de Curitiba."
      },
      {
        question: "Vocês fazem entrega em Curitiba e Região Metropolitana?",
        answer: "Sim! Entregamos no mesmo dia via motoboy em todos os bairros de Curitiba (Sítio Cercado, Batel, Portão, Água Verde, etc.) e cidades da Região Metropolitana com opção de pagamento no recebimento."
      },
      {
        question: "Como funciona o pagamento parcelado?",
        answer: "Você pode parcelar em até 12x de R$ 81,05 no cartão de crédito, tanto na loja física quanto na entrega com o motoboy."
      }
    ]
  },
  {
    slug: "realme-p4-lite",
    name: "Realme P4 Lite NFC (Dual SIM, Anatel)",
    brand: "Realme",
    price: 999.99,
    priceFormatted: "R$ 999,99",
    installments: "12x de R$ 94,23",
    image: "https://resource.megaeletronicos.com/uploads/Product/new/1/6/3/6/5/4/163654/1781967177_1781967177.webp",
    color: "Pulse Purple",
    shortDescription: "Bateria gigante de 6.600mAh, tela de 120Hz e NFC para pagamentos por aproximação, ideal para quem quer autonomia e praticidade.",
    fullDescription: "O smartphone Realme P4 Lite NFC (Dual SIM, homologado Anatel) destaca-se pela impressionante bateria de 6.600 mAh que garante dias de uso longe da tomada. Com tela fluida de 6,8 polegadas com taxa de 120Hz protegida por Panda Glass, processador Unisoc T7250 Octa Core, sistema Android 16 e conectividade NFC integrada para pagamentos rápidos por aproximação, ele une autonomia incomparável, design moderno em Pulse Purple e alta confiabilidade com garantia de 12 meses na Shopcell Curitiba.",
    specs: {
      tela: "LCD 6,8\" HD+ 120Hz, proteção Panda Glass",
      processador: "Unisoc T7250 Octa Core",
      memoria: "4GB (+8GB RAM virtual) / Armazenamento: 128GB (suporta microSD)",
      cameras: "Traseira 13MP f/2.2 + frontal 5MP",
      bateria: "6.600 mAh, carga até 15W",
      sistema: "Android 16 + Realme UI",
      recursos: "NFC para pagamentos, proteção IP54, impressão digital lateral"
    },
    specList: [
      { label: "Tela", value: "LCD 6,8\" HD+ 120Hz com proteção Panda Glass" },
      { label: "Processador", value: "Unisoc T7250 Octa Core de alta eficiência" },
      { label: "Memória RAM", value: "4GB (+8GB RAM virtual expansível)" },
      { label: "Armazenamento", value: "128GB (com expansão via microSD)" },
      { label: "Câmeras", value: "Traseira 13MP f/2.2 + Frontal 5MP" },
      { label: "Bateria", value: "6.600 mAh de altíssima autonomia (carga até 15W)" },
      { label: "Sistema Operacional", value: "Android 16 com interface Realme UI" },
      { label: "Conectividade", value: "NFC para pagamentos por aproximação, Dual SIM" },
      { label: "Segurança & Proteção", value: "Certificação IP54 e leitor biométrico lateral" },
      { label: "Cor", value: "Pulse Purple" }
    ],
    highlights: [
      "Bateria colossal de 6.600 mAh para dias de uso",
      "Tecnologia NFC para pagar por aproximação",
      "Tela ampla de 6,8\" com taxa fluida de 120Hz",
      "Proteção Panda Glass e certificação IP54",
      "12 Meses de Garantia Local no Centro de Curitiba"
    ],
    altText: "Smartphone Realme P4 Lite NFC Pulse Purple tela 6,8 polegadas bateria 6600mAh",
    metaDescription: "Compre o Realme P4 Lite NFC 128GB em Curitiba por R$ 999,99 à vista ou 12x de R$ 94,23. Bateria 6.600mAh, tela 120Hz, NFC e garantia de 12 meses na Shopcell.",
    titleSEO: "Realme P4 Lite NFC (Dual SIM, Anatel) — R$ 999,99 à vista | Shopcell Curitiba",
    canonical: "https://www.celularescuritibashopcell.com.br/celular/realme-p4-lite",
    faqs: [
      {
        question: "O Realme P4 Lite possui NFC para pagamento por aproximação?",
        answer: "Sim! Ele conta com tecnologia NFC integrada, permitindo cadastrar seus cartões de débito e crédito no Google Wallet e pagar compras por aproximação com total facilidade."
      },
      {
        question: "Quanto tempo dura a bateria de 6.600 mAh?",
        answer: "Com 6.600 mAh de capacidade, a bateria do Realme P4 Lite foi desenvolvida para durar de 2 a 3 dias de uso convencional sem precisar recarregar."
      },
      {
        question: "Como funciona a garantia na Shopcell Curitiba?",
        answer: "Todos os nossos smartphones possuem 12 meses de garantia local direta na nossa loja física no Centro de Curitiba (Edifício Downtown), sem depender de envio pelo correio."
      },
      {
        question: "Posso pagar somente quando o motoboy entregar?",
        answer: "Sim! Oferecemos o serviço de pague na entrega: você inspeciona a caixa lacrada do aparelho e realiza o pagamento via Pix, dinheiro ou cartão em até 12x."
      }
    ]
  },
  {
    slug: "realme-14-5g",
    name: "Realme 14 5G NFC (Dual SIM, Anatel)",
    brand: "Realme",
    price: 1949.99,
    priceFormatted: "R$ 1.949,99",
    installments: "12x de R$ 183,75",
    image: "https://resource.megaeletronicos.com/uploads/Product/new/1/5/0/9/0/7/150907/1756895392_1756895392.webp",
    color: "Storm Titanium",
    shortDescription: "Tela AMOLED, processador Snapdragon, 512GB, câmera de 50MP e resistência militar à água (IP69) — potência de sobra para trabalho e lazer.",
    fullDescription: "O smartphone Realme 14 5G NFC (Dual SIM, Anatel) redefine o padrão da categoria intermediária premium com seu potente processador Qualcomm Snapdragon 6 Gen 4 fabricado em litografia de 4nm, impressionantes 512GB de armazenamento interno e 12GB de RAM física (+14GB virtual). Sua tela AMOLED de 6,67\" Full HD+ de 120Hz oferece cores vivas e pretos profundos, acompanhada por câmera principal de 50MP com gravação em 4K a 60fps, bateria de 6.000 mAh com carregamento rápido de 45W e certificação de resistência IP66/IP68/IP69 contra água e poeira.",
    specs: {
      tela: "AMOLED 6,67\" Full HD+ 120Hz",
      processador: "Qualcomm Snapdragon 6 Gen 4 (4nm)",
      memoria: "12GB (+14GB virtual) / Armazenamento: 512GB (suporta microSD)",
      cameras: "Principal 50MP f/1.8 + 2MP + frontal 16MP",
      bateria: "6.000 mAh, carga rápida até 45W",
      sistema: "Android 15 + Realme UI 6.0",
      recursos: "5G, NFC, resistência IP66/IP68/IP69, áudio Hi-Res",
      video: "Vídeo 4K a 60fps"
    },
    specList: [
      { label: "Tela", value: "AMOLED 6,67\" Full HD+ 120Hz com cores vibrantes" },
      { label: "Processador", value: "Qualcomm Snapdragon 6 Gen 4 (litografia avançada de 4nm)" },
      { label: "Memória RAM", value: "12GB física (+14GB de RAM virtual expansível)" },
      { label: "Armazenamento", value: "512GB ultra espaçoso (com suporte a microSD)" },
      { label: "Câmera Traseira", value: "50MP f/1.8 + 2MP com vídeo em 4K a 60fps" },
      { label: "Câmera Frontal", value: "16MP de alta nitidez para selfies e chamadas" },
      { label: "Bateria & Carga", value: "6.000 mAh com carregamento rápido de 45W" },
      { label: "Sistema Operacional", value: "Android 15 com Realme UI 6.0" },
      { label: "Resistência", value: "Tripla certificação IP66 / IP68 / IP69 contra água e poeira" },
      { label: "Conectividade & Áudio", value: "5G Ultrarrápido, NFC, Áudio Hi-Res, Dual SIM" },
      { label: "Cor", value: "Storm Titanium" }
    ],
    highlights: [
      "Processador Snapdragon 6 Gen 4 (4nm) super potente",
      "512GB de espaço interno e 12GB de memória RAM",
      "Tela AMOLED 120Hz cinematográfica",
      "Resistência de padrão militar à água (IP69)",
      "Bateria de 6.000 mAh com carga rápida de 45W",
      "12 Meses de Garantia Local no Centro de Curitiba"
    ],
    altText: "Smartphone Realme 14 5G NFC Storm Titanium tela AMOLED 6,67 polegadas 512GB",
    metaDescription: "Compre o Realme 14 5G 512GB 12GB RAM em Curitiba por R$ 1.949,99 à vista ou 12x de R$ 183,75. Snapdragon, tela AMOLED, IP69 e 12 meses de garantia Shopcell.",
    titleSEO: "Realme 14 5G NFC (Dual SIM, Anatel) — R$ 1.949,99 à vista | Shopcell Curitiba",
    canonical: "https://www.celularescuritibashopcell.com.br/celular/realme-14-5g",
    faqs: [
      {
        question: "O Realme 14 5G é resistente à água?",
        answer: "Sim! Ele conta com certificações IP66, IP68 e IP69, oferecendo proteção avançada contra jatos de água em alta pressão, imersão e poeira intensa."
      },
      {
        question: "O Realme 14 5G grava vídeos em 4K?",
        answer: "Sim! Sua câmera principal de 50MP grava vídeos em resolução 4K a 60 quadros por segundo com excelente estabilização e nitidez."
      },
      {
        question: "Qual o prazo de garantia na Shopcell?",
        answer: "Oferecemos 12 meses de garantia local presencial assegurada pela nossa loja física no Centro de Curitiba com suporte técnico especializado."
      },
      {
        question: "Como funciona a entrega expressa em Curitiba?",
        answer: "Realizamos a entrega no mesmo dia via motoboy express com agilidade em toda Curitiba e RMC. Você pode conferir o produto lacrado antes de efetuar o pagamento."
      }
    ]
  },
  {
    slug: "realme-p4-power-5g",
    name: "Realme P4 Power 5G NFC (Dual SIM, Anatel)",
    brand: "Realme",
    price: 2999.99,
    priceFormatted: "R$ 2.999,99",
    installments: "12x de R$ 282,70",
    image: "https://resource.megaeletronicos.com/uploads/Product/new/1/6/3/6/5/7/163657/1783018063_1783018063.webp",
    color: "Power Silver",
    shortDescription: "Topo de linha da lista: bateria colossal de 10.001mAh, tela 144Hz curva, câmera Sony com OIS e carga de 80W. O smartphone mais completo da nossa seleção.",
    fullDescription: "O Realme P4 Power 5G NFC (Dual SIM, Anatel) é o topo de linha definitivo para quem busca máxima performance e autonomia sem precedentes. Equipado com uma inacreditável bateria de 10.001 mAh com suporte a carga rápida de 80W e carregamento reverso para alimentar outros dispositivos, ele traz processador MediaTek Dimensity 7400 Ultra de 4nm, 512GB de espaço interno e 12GB de RAM (+14GB virtual). Sua tela curvada AMOLED HyperGlow 4D Curve+ de 6,8\" atinge 144Hz com Gorilla Glass 7i, combinada com câmera Sony IMX882 de 50MP com estabilização óptica (OIS), sensor ultrawide de 8MP, IR Blaster e máxima proteção IP66/IP68/IP69.",
    specs: {
      tela: "AMOLED HyperGlow 4D Curve+ 6,8\" Full HD+ 144Hz, HDR10+, Gorilla Glass 7i",
      processador: "MediaTek Dimensity 7400 Ultra (4nm)",
      memoria: "12GB (+14GB virtual) / Armazenamento: 512GB",
      cameras: "Principal 50MP Sony IMX882 OIS f/1.8 + ultrawide 8MP + frontal 16MP",
      bateria: "10.001 mAh (com carga reversa), carga até 80W",
      sistema: "Android 16 + Realme UI 7",
      recursos: "5G, NFC, IR Blaster, IP66/IP68/IP69"
    },
    specList: [
      { label: "Tela", value: "AMOLED HyperGlow 4D Curve+ 6,8\" Full HD+ 144Hz, HDR10+, Gorilla Glass 7i" },
      { label: "Processador", value: "MediaTek Dimensity 7400 Ultra (litografia de 4nm)" },
      { label: "Memória RAM", value: "12GB de alta velocidade (+14GB virtual expansível)" },
      { label: "Armazenamento", value: "512GB UFS ultra rápido" },
      { label: "Câmera Principal", value: "50MP Sony IMX882 com Estabilização Óptica (OIS) f/1.8" },
      { label: "Câmeras Secundárias", value: "Ultrawide 8MP + Frontal 16MP" },
      { label: "Bateria & Carregamento", value: "10.001 mAh com carga rápida de 80W e carga reversa" },
      { label: "Sistema Operacional", value: "Android 16 com Realme UI 7" },
      { label: "Resistência", value: "Proteção máxima IP66 / IP68 / IP69 contra água e poeira" },
      { label: "Conectividade & Recursos", value: "5G, NFC, IR Blaster (Controle Remoto), Áudio Estéreo" },
      { label: "Cor", value: "Power Silver" }
    ],
    highlights: [
      "Bateria recorde de 10.001 mAh com carga rápida de 80W",
      "Sensor Sony IMX882 50MP com Estabilização Óptica OIS",
      "Tela curva AMOLED de 144Hz com Gorilla Glass 7i",
      "Processador Dimensity 7400 Ultra 4nm e 512GB",
      "Resistência máxima IP66 / IP68 / IP69",
      "12 Meses de Garantia Local no Centro de Curitiba"
    ],
    altText: "Smartphone Realme P4 Power 5G NFC Power Silver tela curva 144Hz bateria 10001mAh",
    metaDescription: "Compre o Realme P4 Power 5G 512GB 12GB RAM em Curitiba por R$ 2.999,99 à vista ou 12x de R$ 282,70. Bateria 10.001mAh, 80W, câmera Sony OIS e garantia Shopcell.",
    titleSEO: "Realme P4 Power 5G NFC (Dual SIM, Anatel) — R$ 2.999,99 à vista | Shopcell Curitiba",
    canonical: "https://www.celularescuritibashopcell.com.br/celular/realme-p4-power-5g",
    faqs: [
      {
        question: "A bateria de 10.001 mAh do Realme P4 Power pode carregar outros aparelhos?",
        answer: "Sim! Ele conta com tecnologia de carga reversa, podendo funcionar como uma bateria externa (powerbank) para recarregar fones de ouvido, smartwatches e outros celulares via cabo."
      },
      {
        question: "Qual a velocidade do carregamento de 80W?",
        answer: "O carregamento de 80W permite recarregar a bateria colossal de 10.001 mAh em tempo recorde com total segurança térmica e gerenciamento inteligente de energia."
      },
      {
        question: "A câmera possui estabilização óptica (OIS)?",
        answer: "Sim! O sensor Sony IMX882 de 50MP possui estabilização óptica de imagem (OIS), garantindo fotos nítidas e vídeos sem tremores mesmo em ambientes com pouca luz."
      },
      {
        question: "Qual a garantia oferecida pela Shopcell?",
        answer: "Garantimos 12 meses de cobertura presencial na nossa loja física no Centro de Curitiba, com atendimento direto, técnico e sem burocracias."
      }
    ]
  }
];

export function getRealmeProductBySlug(slug: string): RealmeProduct | undefined {
  return REALME_PRODUCTS.find(p => p.slug === slug);
}
