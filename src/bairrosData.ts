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
    tituloSEO: "Loja de Celular no Centro de Curitiba | Loja Física & Pronta Entrega | Shopcell",
    metaDescription: "Procurando loja de celular no Centro de Curitiba? Compre seu smartphone novo e lacrado com 12 meses de garantia local no Edifício Downtown na Shopcell.",
    introducao: "Nossa loja física está estrategicamente localizada no coração do Centro de Curitiba, no Edifício Downtown. Se você mora, trabalha ou está de passagem pela região central, pode escolher seu novo celular com total segurança e contar com suporte presencial qualificado.",
    coordenadasContexto: "Próximo à Praça Carlos Gomes, ao Shopping Estação e à Rodoferroviária, com estacionamentos convenientes ao redor.",
    ctaText: "Retirar no Centro"
  },
  {
    slug: "sitio-cercado",
    nome: "Sítio Cercado",
    regiao: "Sul",
    tituloSEO: "Loja de Celular no Sítio Cercado Curitiba | Entrega Hoje e Garantia 12 Meses | Shopcell",
    metaDescription: "Procurando loja de celular no Sítio Cercado? Compre smartphones novos e lacrados com 12 meses de garantia local e entrega via motoboy express na Shopcell.",
    introducao: "Atendemos o bairro Sítio Cercado com entregas rápidas via motoboy no mesmo dia. Adquira seu novo smartphone com toda comodidade, recebendo no seu endereço no Sítio Cercado, Bairro Novo ou Ganchinho e pagando no ato do recebimento.",
    coordenadasContexto: "Rotas diárias de entrega cobrindo a Linha Verde, Bairro Novo e todo o Sítio Cercado.",
    ctaText: "Pedir no Sítio Cercado"
  },
  {
    slug: "batel",
    nome: "Batel",
    regiao: "Nobre",
    tituloSEO: "Loja de Celular no Batel Curitiba | Entrega Expressa Hoje | Shopcell",
    metaDescription: "Compre celular no Batel com entrega imediata via motoboy express ou retire com segurança no Centro. Parcelamento em até 12x e garantia local de 12 meses.",
    introducao: "Para os moradores do bairro Batel, oferecemos um serviço de entrega expressa via motoboy extremamente rápido e seguro. Adquira seu smartphone novo e receba em sua residência ou escritório com agilidade.",
    coordenadasContexto: "Atendimento expresso para condomínios residenciais e escritórios comerciais próximos à Av. do Batel e Praça da Espanha.",
    ctaText: "Receber no Batel"
  },
  {
    slug: "agua-verde",
    nome: "Água Verde",
    regiao: "Sul",
    tituloSEO: "Loja de Celular no Água Verde Curitiba | Compre com Segurança | Shopcell",
    metaDescription: "Adquira seu celular no Água Verde com a Shopcell. Receba seu aparelho lacrado em casa via motoboy ou visite nossa loja no Centro com garantia de 12 meses.",
    introducao: "Moradores do Água Verde contam com a facilidade de nossa entrega em poucos minutos. Sendo um dos bairros mais populosos e tradicionais de Curitiba, o Água Verde recebe entregas diárias de nossa loja.",
    coordenadasContexto: "A poucos minutos da Avenida República Argentina, Praça do Japão e imediações do Clube Curitibano.",
    ctaText: "Falar com Vendedor Água Verde"
  },
  {
    slug: "bigorrilho",
    nome: "Bigorrilho",
    regiao: "Oeste",
    tituloSEO: "Loja de Celular no Bigorrilho (Champagnat) Curitiba | Shopcell",
    metaDescription: "Sua loja de celulares para o Bigorrilho / Champagnat. Smartphones novos e lacrados com entrega expressa sob medida. 12 meses de garantia inclusos.",
    introducao: "Atendemos toda a região do Bigorrilho (Champagnat) com entregas rápidas via motoboy. Se você busca praticidade nos condomínios de edifícios da Padre Anchieta, nosso motoboy entrega seu celular lacrado na portaria ou recepção.",
    coordenadasContexto: "Serviço expresso para a região da Praça da Ucrânia, Avenida Padre Anchieta e arredores.",
    ctaText: "Comprar no Bigorrilho"
  },
  {
    slug: "portao",
    nome: "Portão",
    regiao: "Sul",
    tituloSEO: "Comprar Celular no Portão Curitiba | Aparelhos Originais em 12x | Shopcell",
    metaDescription: "Procurando loja de celular no Portão? Compre em até 12x parcelado com garantia de 12 meses. Entrega ultra-rápida via motoboy ou retirada presencial.",
    introducao: "O bairro Portão é um grande polo de Curitiba, e nós oferecemos atendimento prioritário para toda a região. Compre seu novo smartphone parcelado no cartão de crédito em até 12x e receba hoje mesmo.",
    coordenadasContexto: "Próximo aos Shoppings Palladium e Ventura, com rotas rápidas de entrega via via rápida Portão-Centro.",
    ctaText: "Garantir no Portão"
  },
  {
    slug: "cabral",
    nome: "Cabral",
    regiao: "Norte",
    tituloSEO: "Loja de Celular no Cabral Curitiba | Entrega no Mesmo Dia | Shopcell",
    metaDescription: "Adquira smartphones originais e novos no Cabral. Receba em casa hoje via motoboy com total comodidade. Garantia de 12 meses na Shopcell.",
    introducao: "Morar no Cabral une tranquilidade e excelente infraestrutura. Para combinar com esse estilo de vida prático, oferecemos entrega expressa de smartphones com garantia de 12 meses.",
    coordenadasContexto: "Atendimento diferenciado para a região da Avenida Paraná e imediações do Graciosa Country Club.",
    ctaText: "Solicitar no Cabral"
  },
  {
    slug: "juveve",
    nome: "Juvevê",
    regiao: "Norte",
    tituloSEO: "Loja de Celular no Juvevê Curitiba | Atendimento Especializado | Shopcell",
    metaDescription: "Sua melhor opção de celulares no Juvevê. Compre online e pague na entrega ou retire na nossa loja física no Centro de Curitiba.",
    introducao: "O charmoso bairro Juvevê está localizado a pouquíssimos minutos de nossa loja física no Centro. Você pode optar por retirar seu celular na nossa sala comercial no Edifício Downtown ou solicitar entrega por motoboy.",
    coordenadasContexto: "Fácil acesso pelas vias de ligação rápida e proximidade imediata com o Centro cívico e comercial.",
    ctaText: "Comprar no Juvevê"
  },
  {
    slug: "cristo-rei",
    nome: "Cristo Rei",
    regiao: "Leste",
    tituloSEO: "Loja de Celular no Cristo Rei Curitiba | Rapidez e Segurança Local | Shopcell",
    metaDescription: "Celulares lacrados com garantia de 12 meses no Cristo Rei. Compre com quem é referência em avaliações em Curitiba. Entrega imediata hoje.",
    introducao: "Localizado de forma contígua ao Centro, o Cristo Rei é atendido com tempo recorde de entrega. Se você reside próximo ao Jardim Botânico, seu novo celular pode ser entregue em minutos.",
    coordenadasContexto: "Atendimento imediato para a área residencial do Cristo Rei, próximo ao Jardim Botânico de Curitiba.",
    ctaText: "Pedir no Cristo Rei"
  },
  {
    slug: "boqueirao",
    nome: "Boqueirão",
    regiao: "Sul",
    tituloSEO: "Loja de Celular no Boqueirão Curitiba | Aparelhos Originais 12x | Shopcell",
    metaDescription: "Adquira celulares novos e lacrados no Boqueirão. Garantia de 12 meses e entrega via motoboy express. Compre parcelado em até 12x no cartão.",
    introducao: "O Boqueirão é um dos bairros mais ativos de Curitiba. Atendemos comerciantes e moradores do bairro com entregas diárias de aparelhos celulares com garantia presencial de 12 meses.",
    coordenadasContexto: "Região da Rua Marechal Floriano Peixoto e proximidades do terminal do Boqueirão.",
    ctaText: "Pedir no Boqueirão"
  },
  {
    slug: "pinheirinho",
    nome: "Pinheirinho",
    regiao: "Sul",
    tituloSEO: "Comprar Celular no Pinheirinho Curitiba | Loja Física no Centro | Shopcell",
    metaDescription: "Loja de celular no Pinheirinho Curitiba? Visite nossa loja física no Centro ou compre pelo WhatsApp com entrega expressa via motoboy hoje mesmo.",
    introducao: "Se você reside no Pinheirinho e busca um celular original com excelente preço e garantia real de 12 meses, nós somos a sua melhor opção com entrega rápida pela Linha Verde.",
    coordenadasContexto: "Próximo à Linha Verde Sul, Terminal do Pinheirinho e comércios da Winston Churchill.",
    ctaText: "Comprar no Pinheirinho"
  },
  {
    slug: "cic",
    nome: "CIC",
    regiao: "Oeste/Sul",
    tituloSEO: "Loja de Celular na CIC (Cidade Industrial) Curitiba | Shopcell",
    metaDescription: "Procurando loja de celular na Cidade Industrial de Curitiba (CIC)? Oferecemos entrega expressa segura para residências e empresas da região.",
    introducao: "Atendemos com total segurança e agilidade a área da Cidade Industrial de Curitiba (CIC). Entregamos seu novo smartphone com garantia de 12 meses no seu endereço.",
    coordenadasContexto: "Entrega expressa cobrindo toda a extensão industrial e residencial da CIC Curitiba.",
    ctaText: "Garantir na CIC"
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
  tituloSEO: `Loja de Celular no Bairro ${nome} Curitiba | Shopcell`,
  metaDescription: `Adquira seu celular novo no bairro ${nome} em Curitiba com a Shopcell. Entrega imediata via motoboy, pague na entrega e 12 meses de garantia local.`,
  introducao: `A Shopcell atende o bairro ${nome} de Curitiba com total prioridade! Garantimos a entrega expressa do seu celular novo e lacrado na caixa via motoboy. Você realiza o pagamento seguro no ato da entrega com suporte e garantia de 12 meses inclusos.`,
  coordenadasContexto: `Atendimento logístico otimizado com rotas rápidas via motoboy para o bairro ${nome}.`,
  ctaText: `Pedir no WhatsApp (${nome})`
}));

const generatedCities: BairroInfo[] = NEARBY_CITIES.map(nome => ({
  slug: toSlug(nome),
  nome,
  regiao: "Região Metropolitana",
  tituloSEO: `Loja de Celular para ${nome} | Envio Rápido e Garantia | Shopcell`,
  metaDescription: `Sua loja de celulares para ${nome}. Compre smartphones novos e lacrados com entrega expressa para a Região Metropolitana e 12 meses de garantia.`,
  introducao: `Moradores de ${nome} e região contam com o serviço diferenciado da Shopcell! Compre seu smartphone lacrado na caixa com frete rápido e pague na entrega para o motoboy. Todos os nossos produtos têm garantia local de 12 meses.`,
  coordenadasContexto: `Rota de entrega expressa cobrindo ${nome} e toda a Região Metropolitana a partir do Centro de Curitiba.`,
  ctaText: `Consultar Frete para ${nome}`
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
