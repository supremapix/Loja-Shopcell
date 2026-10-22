export interface BairroInfo {
  slug: string;
  nome: string;
  regiao: string;
  tituloSEO: string;
  metaDescription: string;
  introducao: string;
  coordenadasContexto: string;
  ctaText: string;
}

const baseBairrosData: BairroInfo[] = [
  {
    slug: "centro",
    nome: "Centro",
    regiao: "Central",
    tituloSEO: "Assistência Técnica de Celular no Centro de Curitiba | SUNCELL Guaíra",
    metaDescription: "Conserto de celular no Centro de Curitiba com diagnóstico gratuito e garantia. A SUNCELL Guaíra fica a poucos minutos, no Mercado Goes, com troca de tela, bateria e placa.",
    introducao: "Quem mora, trabalha ou passa pelo Centro de Curitiba está a poucos minutos da SUNCELL Guaíra, dentro do Mercado Goes. Aqui você resolve tela quebrada, bateria viciada, conector de carga e outros reparos com atendimento presencial e orçamento na hora.",
    coordenadasContexto: "A unidade Guaíra fica na Rua Maria Moscardi Fanini, 261, dentro do Mercado Goes, com acesso rápido pelas vias centrais e estacionamento no local.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "sitio-cercado",
    nome: "Sítio Cercado",
    regiao: "Sul",
    tituloSEO: "Assistência Técnica de Celular no Sítio Cercado | SUNCELL Curitiba",
    metaDescription: "Assistência técnica de celular para o Sítio Cercado, Bairro Novo e Ganchinho. Diagnóstico gratuito, troca de tela e bateria na SUNCELL Alto Boqueirão, no Mercado Goes.",
    introducao: "Moradores do Sítio Cercado, Bairro Novo e Ganchinho contam com a SUNCELL Alto Boqueirão como referência próxima para conserto de celular. Tela, bateria, câmera e conector de carga com peças de qualidade e garantia no serviço.",
    coordenadasContexto: "A unidade Alto Boqueirão fica na R. Pastor Antônio Polito, 1805, dentro do Mercado Goes, com rota rápida pela Linha Verde e região sul.",
    ctaText: "Falar com a SUNCELL Alto Boqueirão"
  },
  {
    slug: "batel",
    nome: "Batel",
    regiao: "Nobre",
    tituloSEO: "Assistência Técnica de Celular no Batel Curitiba | SUNCELL",
    metaDescription: "Precisa de conserto de celular no Batel? A SUNCELL Guaíra fica a poucos minutos, no Mercado Goes, com diagnóstico gratuito, peças de qualidade e garantia no serviço.",
    introducao: "Para quem está no Batel, a unidade SUNCELL Guaíra é a opção mais próxima para assistência técnica de celular. Atendemos troca de tela, bateria, alto-falante, câmera e reparos de placa com transparência e orçamento sem compromisso.",
    coordenadasContexto: "A loja Guaíra está na Rua Maria Moscardi Fanini, 261, dentro do Mercado Goes, com acesso fácil pela Av. do Batel e região central.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "agua-verde",
    nome: "Água Verde",
    regiao: "Sul",
    tituloSEO: "Assistência Técnica de Celular no Água Verde | SUNCELL Curitiba",
    metaDescription: "Conserto de celular no Água Verde com diagnóstico gratuito na SUNCELL Guaíra. Troca de tela, bateria e placa com garantia no serviço, dentro do Mercado Goes.",
    introducao: "O Água Verde fica ao lado da SUNCELL Guaíra, no Mercado Goes. Moradores do bairro podem trazer o celular para uma avaliação gratuita e sair com o orçamento na hora, sem precisar ir até o centro da cidade.",
    coordenadasContexto: "A unidade Guaíra está na Rua Maria Moscardi Fanini, 261, com acesso rápido pela Av. República Argentina e ruas do Água Verde.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "bigorrilho",
    nome: "Bigorrilho",
    regiao: "Oeste",
    tituloSEO: "Assistência Técnica de Celular no Bigorrilho (Champagnat) | SUNCELL",
    metaDescription: "Assistência técnica de celular para o Bigorrilho e Champagnat. A SUNCELL Guaíra fica no Mercado Goes, com diagnóstico gratuito e garantia no serviço.",
    introducao: "Moradores do Bigorrilho e Champagnat encontram na SUNCELL Guaíra uma assistência técnica próxima e confiável. Fazemos troca de tela, bateria, conector de carga e reparos avançados com atendimento presencial.",
    coordenadasContexto: "A loja Guaíra fica na Rua Maria Moscardi Fanini, 261, no Mercado Goes, com acesso rápido pela Av. Padre Anchieta e Praça da Ucrânia.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "portao",
    nome: "Portão",
    regiao: "Sul",
    tituloSEO: "Assistência Técnica de Celular no Portão Curitiba | SUNCELL",
    metaDescription: "Conserto de celular no Portão com diagnóstico gratuito na SUNCELL Guaíra, dentro do Mercado Goes. Troca de tela, bateria e placa com garantia.",
    introducao: "O Portão está a poucos minutos da SUNCELL Guaíra. Traga seu celular para diagnóstico gratuito e resolva tela, bateria, câmera ou conector de carga com quem entende de assistência técnica em Curitiba.",
    coordenadasContexto: "A unidade Guaíra fica na Rua Maria Moscardi Fanini, 261, dentro do Mercado Goes, próxima aos shoppings Palladium e Ventura.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "cabral",
    nome: "Cabral",
    regiao: "Norte",
    tituloSEO: "Assistência Técnica de Celular no Cabral Curitiba | SUNCELL",
    metaDescription: "Assistência técnica de celular no Cabral com atendimento SUNCELL. Diagnóstico gratuito, troca de tela e bateria com garantia no serviço em Curitiba.",
    introducao: "Para os moradores do Cabral, a SUNCELL Guaíra é uma opção próxima para conserto de celular. Atendemos iPhone, Samsung, Xiaomi, Motorola e outras marcas com orçamento gratuito e peças de qualidade.",
    coordenadasContexto: "A unidade Guaíra fica na Rua Maria Moscardi Fanini, 261, no Mercado Goes, com acesso rápido pela Av. Paraná e região norte.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "juveve",
    nome: "Juvevê",
    regiao: "Norte",
    tituloSEO: "Assistência Técnica de Celular no Juvevê Curitiba | SUNCELL",
    metaDescription: "Conserto de celular no Juvevê com diagnóstico gratuito. A SUNCELL Guaíra fica no Mercado Goes e atende troca de tela, bateria e placa com garantia.",
    introducao: "O Juvevê está a poucos minutos da SUNCELL Guaíra. Moradores do bairro podem contar com atendimento presencial para troca de tela, bateria, conector de carga, câmera e reparos de placa.",
    coordenadasContexto: "A unidade Guaíra fica na Rua Maria Moscardi Fanini, 261, dentro do Mercado Goes, com acesso fácil pelas vias de ligação com o Centro Cívico.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "cristo-rei",
    nome: "Cristo Rei",
    regiao: "Leste",
    tituloSEO: "Assistência Técnica de Celular no Cristo Rei Curitiba | SUNCELL",
    metaDescription: "Assistência técnica de celular no Cristo Rei. A SUNCELL Guaíra fica no Mercado Goes, com diagnóstico gratuito, troca de tela e bateria com garantia.",
    introducao: "Localizado ao lado do Centro, o Cristo Rei está muito próximo da SUNCELL Guaíra. Traga seu celular para uma avaliação gratuita e resolva tela, bateria, câmera ou conector de carga no mesmo dia.",
    coordenadasContexto: "A unidade Guaíra fica na Rua Maria Moscardi Fanini, 261, no Mercado Goes, com acesso rápido pela região do Jardim Botânico e Centro.",
    ctaText: "Falar com a SUNCELL Guaíra"
  },
  {
    slug: "boqueirao",
    nome: "Boqueirão",
    regiao: "Sul",
    tituloSEO: "Assistência Técnica de Celular no Boqueirão Curitiba | SUNCELL",
    metaDescription: "Conserto de celular no Boqueirão com diagnóstico gratuito na SUNCELL Alto Boqueirão, dentro do Mercado Goes. Troca de tela, bateria e placa com garantia.",
    introducao: "O Boqueirão é atendido pela SUNCELL Alto Boqueirão, a unidade mais próxima do bairro. Aqui você encontra troca de tela, bateria, conector de carga e reparos de placa com atendimento presencial e garantia no serviço.",
    coordenadasContexto: "A unidade Alto Boqueirão fica na R. Pastor Antônio Polito, 1805, dentro do Mercado Goes, com acesso rápido pelo terminal e pela Linha Verde.",
    ctaText: "Falar com a SUNCELL Alto Boqueirão"
  },
  {
    slug: "pinheirinho",
    nome: "Pinheirinho",
    regiao: "Sul",
    tituloSEO: "Assistência Técnica de Celular no Pinheirinho Curitiba | SUNCELL",
    metaDescription: "Assistência técnica de celular no Pinheirinho com diagnóstico gratuito. A SUNCELL Alto Boqueirão fica no Mercado Goes, com troca de tela e bateria com garantia.",
    introducao: "Moradores do Pinheirinho contam com a SUNCELL Alto Boqueirão para conserto de celular. Atendemos troca de tela, bateria, câmera, alto-falante e reparos avançados com peças de qualidade.",
    coordenadasContexto: "A unidade Alto Boqueirão fica na R. Pastor Antônio Polito, 1805, no Mercado Goes, com rota rápida pela Linha Verde Sul e Terminal do Pinheirinho.",
    ctaText: "Falar com a SUNCELL Alto Boqueirão"
  },
  {
    slug: "cic",
    nome: "CIC",
    regiao: "Oeste/Sul",
    tituloSEO: "Assistência Técnica de Celular na CIC Curitiba | SUNCELL",
    metaDescription: "Conserto de celular na CIC com atendimento SUNCELL. Diagnóstico gratuito, troca de tela, bateria e placa com garantia no serviço em Curitiba.",
    introducao: "Atendemos a Cidade Industrial de Curitiba com a estrutura da SUNCELL Alto Boqueirão. Se você trabalha ou mora na CIC, pode contar com diagnóstico gratuito e reparos de tela, bateria, câmera e placa.",
    coordenadasContexto: "A unidade Alto Boqueirão fica na R. Pastor Antônio Polito, 1805, dentro do Mercado Goes, com acesso rápido pela região sul e oeste de Curitiba.",
    ctaText: "Falar com a SUNCELL Alto Boqueirão"
  }
];

const OFFICIAL_BAIRROS = [
  "Abranches", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da Rua XV", "Atuba", "Augusta", 
  "Bacacheri", "Bairro Alto", "Barreirinha", "Boa Vista", "Bom Retiro", "Butiatuvinha", "Cachoeira", 
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Cascatinha", "Caximba", "Centro Cívico", 
  "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hugo Lange", "Jardim Botânico", 
  "Jardim das Américas", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", 
  "Orleans", "Parolin", "Pilarzinho", "Prado Velho", "Riviera", "Santa Cândida", "Santa Quitéria", 
  "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", 
  "São Miguel", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim"
];

const NEARBY_CITIES = [
  "São José dos Pinhais", "Pinhais", "Colombo", "Araucária", "Almirante Tamandaré", "Campo Largo", 
  "Campo Magro", "Fazenda Rio Grande", "Quatro Barras", "Campina Grande do Sul", "Mandirituba"
];

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

const generatedOfficial: BairroInfo[] = OFFICIAL_BAIRROS.map(nome => ({
  slug: toSlug(nome),
  nome,
  regiao: "Curitiba",
  tituloSEO: `Assistência Técnica de Celular no Bairro ${nome} | SUNCELL Curitiba`,
  metaDescription: `Conserto de celular no bairro ${nome}, em Curitiba, com diagnóstico gratuito e garantia no serviço. Atendimento nas lojas SUNCELL Guaíra e Alto Boqueirão, dentro do Mercado Goes.`,
  introducao: `A SUNCELL atende o bairro ${nome} com duas lojas físicas dentro do Mercado Goes, em Guaíra e no Alto Boqueirão. Traga seu celular para diagnóstico gratuito e resolva troca de tela, bateria, conector de carga, câmera ou reparo de placa com peças de qualidade e garantia no serviço.`,
  coordenadasContexto: `Atendimento presencial nas unidades Guaíra e Alto Boqueirão, com acesso rápido a partir do Mercado Goes e das principais vias de Curitiba.`,
  ctaText: `Falar no WhatsApp (${nome})`
}));

const generatedCities: BairroInfo[] = NEARBY_CITIES.map(nome => ({
  slug: toSlug(nome),
  nome,
  regiao: "Região Metropolitana",
  tituloSEO: `Assistência Técnica de Celular para ${nome} | SUNCELL Curitiba`,
  metaDescription: `Assistência técnica de celular para ${nome} e região. As lojas SUNCELL ficam no Mercado Goes, em Curitiba, com diagnóstico gratuito, troca de tela e bateria com garantia.`,
  introducao: `Moradores de ${nome} e região podem contar com as duas lojas SUNCELL no Mercado Goes, em Curitiba. Atendemos troca de tela, bateria, conector de carga, câmera e reparos de placa com orçamento gratuito e garantia no serviço.`,
  coordenadasContexto: `Duas lojas físicas no Mercado Goes (Guaíra e Alto Boqueirão), com acesso pelas principais vias de Curitiba e Região Metropolitana.`,
  ctaText: `Consultar atendimento em ${nome}`
}));

const allBairrosMap = new Map<string, BairroInfo>();

baseBairrosData.forEach(b => {
  allBairrosMap.set(b.slug, b);
});

[...generatedOfficial, ...generatedCities].forEach(b => {
  if (!allBairrosMap.has(b.slug)) {
    allBairrosMap.set(b.slug, b);
  }
});

export const bairrosData: BairroInfo[] = Array.from(allBairrosMap.values());
