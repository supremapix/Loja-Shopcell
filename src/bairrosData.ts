export interface BairroInfo {
  slug: string;
  nome: string;
  regiao: string;
  tituloSEO: string;
  metaDescription: string;
  introducao: string;
  coordenadasContexto: string; // Used for unique maps context or descriptors
  ctaText: string;
}

const baseBairrosData: BairroInfo[] = [
  {
    slug: "centro",
    nome: "Centro",
    regiao: "Central",
    tituloSEO: "Xiaomi no Centro de Curitiba | Loja Física & Pronta Entrega",
    metaDescription: "Procurando Xiaomi no Centro de Curitiba? Compre seu smartphone Redmi, POCO ou Xiaomi lacrado com 6 meses de garantia local no Edifício Downtown.",
    introducao: "Nossa loja física está estrategicamente localizada no coração do Centro de Curitiba, no Edifício Downtown. Se você mora, trabalha ou está de passagem pela região central, pode retirar seu novo celular Xiaomi, POCO ou Redmi com total segurança, testando o aparelho na hora com nossos especialistas e contando com suporte presencial qualificado.",
    coordenadasContexto: "Próximo à Praça Carlos Gomes, ao Shopping Estação e à Rodoferroviária, com estacionamentos convenientes ao redor.",
    ctaText: "Retirar no Centro"
  },
  {
    slug: "batel",
    nome: "Batel",
    regiao: "Nobre",
    tituloSEO: "Celular Xiaomi no Batel Curitiba | Entrega Expressa Hoje",
    metaDescription: "Compre Xiaomi no Batel com entrega imediata via motoboy express ou retire com segurança no Centro. Parcelamento em até 12x e garantia local de 6 meses.",
    introducao: "Para os moradores do sofisticado bairro Batel, oferecemos um serviço de entrega expressa via motoboy extremamente rápido e seguro. Adquira seu smartphone Xiaomi topo de linha, como a linha Xiaomi 15T Pro ou POCO F8 Ultra, e receba em sua residência ou escritório com frete grátis ou taxas reduzidas, tudo no mesmo dia.",
    coordenadasContexto: "Atendimento expresso para condomínios residenciais e escritórios comerciais próximos à Av. do Batel e Praça da Espanha.",
    ctaText: "Receber no Batel"
  },
  {
    slug: "agua-verde",
    nome: "Água Verde",
    regiao: "Sul",
    tituloSEO: "Loja Xiaomi no Água Verde Curitiba | Compre com Segurança",
    metaDescription: "Adquira seu Xiaomi, POCO ou Redmi no Água Verde. Receba seu celular lacrado em casa via motoboy ou visite nossa loja no Centro com garantia de 6 meses.",
    introducao: "Moradores do Água Verde contam com a facilidade de nossa entrega em poucos minutos. Sendo um dos bairros mais populosos e tradicionais de Curitiba, o Água Verde recebe entregas diárias de nossa loja. Garanta seu smartphone com película e capinha inclusas sem precisar sair de casa.",
    coordenadasContexto: "A poucos minutos da Avenida República Argentina, Praça do Japão e imediações do Clube Curitibano.",
    ctaText: "Falar com Vendedor Água Verde"
  },
  {
    slug: "bigorrilho",
    nome: "Bigorrilho",
    regiao: "Oeste",
    tituloSEO: "Xiaomi no Bigorrilho (Champagnat) Curitiba | Compre Celular Lacrado",
    metaDescription: "Sua revenda autorizada Xiaomi para o Bigorrilho / Champagnat. Modelos Redmi e POCO com entrega expressa sob medida. 6 meses de garantia inclusos.",
    introducao: "Atendemos toda a região do Bigorrilho (Champagnat) com entregas rápidas via motoboy. Se você busca praticidade nos condomínios de edifícios da Padre Anchieta, nosso motoboy entrega seu celular lacrado na portaria ou recepção com total segurança e agilidade.",
    coordenadasContexto: "Serviço expresso para a região da Praça da Ucrânia, Avenida Padre Anchieta e arredores.",
    ctaText: "Comprar no Bigorrilho"
  },
  {
    slug: "portao",
    nome: "Portão",
    regiao: "Sul",
    tituloSEO: "Comprar Xiaomi no Portão Curitiba | Celulares Originais 12x",
    metaDescription: "Procurando Xiaomi no Portão? Compre em até 12x parcelado com garantia de 6 meses. Entrega ultra-rápida via motoboy ou retirada presencial rápida.",
    introducao: "O bairro Portão é um grande polo comercial de Curitiba, e nós oferecemos atendimento prioritário para toda a região. Compre seu novo Redmi Note 14 ou POCO X8 Pro parcelado no cartão de crédito em até 12x e receba-o hoje mesmo com segurança absoluta.",
    coordenadasContexto: "Próximo aos Shoppings Palladium e Ventura, com rotas rápidas de entrega via via rápida Portão-Centro.",
    ctaText: "Garantir Xiaomi no Portão"
  },
  {
    slug: "cabral",
    nome: "Cabral",
    regiao: "Norte",
    tituloSEO: "Celular Xiaomi no Cabral Curitiba | Entrega no Mesmo Dia",
    metaDescription: "Adquira smartphones Xiaomi, Redmi e POCO originais no Cabral. Receba em casa hoje via motoboy com película e capinha grátis. Garantia de 6 meses.",
    introducao: "Morar no Cabral une tranquilidade e excelente infraestrutura. Para combinar com esse estilo de vida prático, oferecemos entrega expressa de smartphones Xiaomi. Todos os aparelhos acompanham capinha e película de vidro de brinde para que seu aparelho chegue pronto para o uso.",
    coordenadasContexto: "Atendimento diferenciado para a região da Avenida Paraná, Justiça Federal e imediações do Graciosa Country Club.",
    ctaText: "Solicitar no Cabral"
  },
  {
    slug: "juveve",
    nome: "Juvevê",
    regiao: "Norte",
    tituloSEO: "Xiaomi no Juvevê Curitiba | Loja Especializada em Xiaomi",
    metaDescription: "Sua melhor opção de celulares Xiaomi, Redmi e POCO no Juvevê. Compre online e pague na entrega ou retire na nossa loja física no Centro de Curitiba.",
    introducao: "O charmoso bairro Juvevê está localizado a pouquíssimos minutos de nossa loja física no Centro. Você pode optar por fazer uma caminhada rápida ou pegar um expresso para retirar seu Xiaomi na nossa sala comercial no Edifício Downtown, ou ainda solicitar que nosso motoboy entregue em seu endereço.",
    coordenadasContexto: "Fácil acesso pelas vias de ligação rápida e proximidade imediata com o Centro cívico e comercial.",
    ctaText: "Comprar Xiaomi Juvevê"
  },
  {
    slug: "cristo-rei",
    nome: "Cristo Rei",
    regiao: "Leste",
    tituloSEO: "Xiaomi no Cristo Rei Curitiba | Rapidez e Segurança Local",
    metaDescription: "Celulares Xiaomi lacrados com garantia de 6 meses no Cristo Rei. Compre com quem é líder em avaliações em Curitiba. Entrega imediata hoje.",
    introducao: "Localizado de forma contígua ao Centro, o Cristo Rei é atendido com taxas de entrega simbólicas e tempo recorde. Se você reside próximo ao Jardim Botânico ou ao Hospital Cajuru, seu novo Xiaomi pode ser entregue em menos de 30 minutos a partir da confirmação do pedido.",
    coordenadasContexto: "Atendimento imediato para a área residencial do Cristo Rei, próximo ao Jardim Botânico de Curitiba.",
    ctaText: "Pedir no Cristo Rei"
  },
  {
    slug: "jardim-social",
    nome: "Jardim Social",
    regiao: "Norte",
    tituloSEO: "Smartphones Xiaomi no Jardim Social Curitiba | Atendimento Premium",
    metaDescription: "Compre Xiaomi de forma segura no Jardim Social. Modelos POCO e Redmi lacrados com entrega expressa dedicada e 6 meses de garantia oficial local.",
    introducao: "Para os moradores do Jardim Social, garantimos uma entrega altamente segura e agendada. Se você procura um atendimento de alto padrão para adquirir aparelhos premium como o Xiaomi 15T Pro, nós levamos o aparelho até você com total discrição e rapidez.",
    coordenadasContexto: "Região de mansões e condomínios nobres próxima ao Bosque de Portugal e Avenida Nossa Senhora da Luz.",
    ctaText: "Atendimento Jardim Social"
  },
  {
    slug: "seminario",
    nome: "Seminário",
    regiao: "Oeste",
    tituloSEO: "Xiaomi no Seminário Curitiba | Garantia Local de 6 Meses",
    metaDescription: "Garanta seu Redmi, POCO ou Xiaomi no Seminário Curitiba. Entrega residencial rápida via motoboy ou atendimento personalizado de retirada no Centro.",
    introducao: "Morar no Seminário é sinônimo de comodidade. Facilite sua rotina comprando seu novo celular Xiaomi conosco. Nós enviamos o smartphone original, lacrado, direto para seu endereço no Seminário, acompanhado de todos os brindes e da nossa renomada garantia de 6 meses.",
    coordenadasContexto: "Atendimento expresso para as áreas vizinhas à Avenida Sete de Setembro e Avenida Arthur Bernardes.",
    ctaText: "Garantir no Seminário"
  },
  {
    slug: "campina-do-siqueira",
    nome: "Campina do Siqueira",
    regiao: "Oeste",
    tituloSEO: "Celular Xiaomi na Campina do Siqueira | Entrega Rápida Hoje",
    metaDescription: "Smartphones Xiaomi originais com frete rápido para a Campina do Siqueira. Retire no Centro de Curitiba ou receba em casa com segurança.",
    introducao: "A Campina do Siqueira, vizinha do Seminário e do Bigorrilho, é uma das regiões que mais atendemos com nossa entrega rápida. Se você está próximo ao Terminal de Ônibus ou ParkShoppingBarigüi, nosso serviço de motoboy garante que o seu aparelho chegue até você rapidamente.",
    coordenadasContexto: "Fácil escoamento de entregas a partir do Centro pela via rápida e proximidade com o Parque Barigüi.",
    ctaText: "Comprar Campina do Siqueira"
  },
  {
    slug: "santa-felicidade",
    nome: "Santa Felicidade",
    regiao: "Oeste",
    tituloSEO: "Xiaomi em Santa Felicidade Curitiba | Entrega Grátis / Expressa",
    metaDescription: "Seu celular Xiaomi, POCO ou Redmi em Santa Felicidade. Compre com 6 meses de garantia e receba no seu endereço com segurança e rapidez.",
    introducao: "Famoso por sua gastronomia e tradição, o bairro Santa Felicidade também conta com o melhor da tecnologia Xiaomi. Não há necessidade de se deslocar até o Centro: nosso motoboy leva o celular até a sua casa ou comércio com segurança, aceitando pagamento em dinheiro ou cartão na entrega.",
    coordenadasContexto: "Região gastronômica da Avenida Manoel Ribas, Via Vêneto e proximidades dos tradicionais restaurantes italianos.",
    ctaText: "Pedir em Santa Felicidade"
  },
  {
    slug: "pinheirinho",
    nome: "Pinheirinho",
    regiao: "Sul",
    tituloSEO: "Comprar Xiaomi no Pinheirinho Curitiba | Loja Física no Centro",
    metaDescription: "Xiaomi no Pinheirinho Curitiba? Visite nossa loja física no Centro ou compre pelo WhatsApp com entrega expressa via motoboy segura hoje mesmo.",
    introducao: "Se você reside no Pinheirinho e busca um Xiaomi original com excelente preço e garantia real de 6 meses, nós somos a sua melhor opção. Oferecemos entrega motoboy que percorre a Linha Verde rapidamente para deixar o aparelho na sua mão de forma ágil e segura.",
    coordenadasContexto: "Próximo à Linha Verde Sul, Terminal do Pinheirinho e comércios da Winston Churchill.",
    ctaText: "Comprar no Pinheirinho"
  },
  {
    slug: "boqueirao",
    nome: "Boqueirão",
    regiao: "Sul",
    tituloSEO: "Xiaomi no Boqueirão Curitiba | Celulares Originais em 12x",
    metaDescription: "Adquira Xiaomi, Redmi e POCO lacrados no Boqueirão. Garantia de 6 meses e entrega via motoboy express. Compre parcelado em até 12x no cartão.",
    introducao: "O Boqueirão é um dos bairros mais ativos e empreendedores de Curitiba. Atendemos comerciantes, estudantes e moradores do bairro com entregas diárias de aparelhos Xiaomi. Receba seu smartphone com película de vidro de alta resistência e capinha anti-impacto grátis.",
    coordenadasContexto: "Região do quartel do Boqueirão, Rua Marechal Floriano Peixoto e proximidades do terminal.",
    ctaText: "Pedir no Boqueirão"
  },
  {
    slug: "capao-raso",
    nome: "Capão Raso",
    regiao: "Sul",
    tituloSEO: "Celular Xiaomi no Capão Raso Curitiba | Compre Parcelado",
    metaDescription: "Xiaomi no Capão Raso Curitiba. 6 meses de garantia local, parcelamento em 12x e entrega expressa para sua total segurança. Peça no WhatsApp.",
    introducao: "Buscando Xiaomi no Capão Raso? Conecte-se conosco no WhatsApp para conferir nossa tabela de preços atualizada diariamente. Compre com a segurança de uma empresa com mais de 8 anos de atuação e nota máxima no Google, retirando no Centro ou recebendo via motoboy.",
    coordenadasContexto: "Próximo à Avenida Brasília, via rápida Centro-Bairro e Terminal do Capão Raso.",
    ctaText: "Chamar Atendente Capão Raso"
  },
  {
    slug: "cajuru",
    nome: "Cajuru",
    regiao: "Leste",
    tituloSEO: "Xiaomi no Cajuru Curitiba | Entrega via Motoboy Express",
    metaDescription: "Sua revenda de celulares Xiaomi no Cajuru. Compre aparelhos POCO e Redmi originais na caixa com entrega rápida na sua residência hoje.",
    introducao: "Atendemos o tradicional bairro Cajuru com rapidez excepcional. Oferecemos smartphones novos com bateria gigante, câmeras incríveis de até 200MP e excelente desempenho para jogos e aplicativos, tudo entregue na porta da sua casa com a segurança que você merece.",
    coordenadasContexto: "Atendimento rápido próximo à Avenida Maurício Fruet, BR-277 e proximidades da UTFPR Cajuru.",
    ctaText: "Garantir Xiaomi no Cajuru"
  },
  {
    slug: "hauer",
    nome: "Hauer",
    regiao: "Sul",
    tituloSEO: "Xiaomi no Hauer Curitiba | Entrega Residencial Segura",
    metaDescription: "Celulares Xiaomi, Redmi e POCO no Hauer com 6 meses de garantia e brinde de película + capinha. Compre parcelado no cartão hoje mesmo.",
    introducao: "Para quem está no Hauer, oferecemos um serviço de entrega dinâmica e ágil. Você escolhe o modelo desejado pelo nosso catálogo virtual, conversa com um vendedor especializado no WhatsApp e recebe o celular lacrado pouquíssimo tempo depois, direto no seu endereço residencial ou comercial.",
    coordenadasContexto: "Região do Terminal do Hauer e polo comercial da Marechal Floriano Peixoto.",
    ctaText: "Comprar no Hauer"
  },
  {
    slug: "uberaba",
    nome: "Uberaba",
    regiao: "Leste",
    tituloSEO: "Xiaomi no Uberaba Curitiba | Melhores Preços de Curitiba",
    metaDescription: "Compre seu Xiaomi original no Uberaba Curitiba. Frete via motoboy direto para sua casa. 6 meses de garantia local presencial.",
    introducao: "O bairro Uberaba está em constante expansão e nós acompanhamos esse ritmo oferecendo entregas eficientes de tecnologia Xiaomi de ponta. Se você busca um celular robusto, com carregamento rápido e preço justo, nossa equipe está pronta para atendê-lo e enviar seu celular lacrado.",
    coordenadasContexto: "Próximo à Avenida Senador Salgado Filho, Linha Verde Leste e BR-277.",
    ctaText: "Pedir no Uberaba"
  },
  {
    slug: "cic",
    nome: "CIC",
    regiao: "Oeste/Sul",
    tituloSEO: "Xiaomi na CIC (Cidade Industrial) Curitiba | Compre Online Seguro",
    metaDescription: "Procurando celular Xiaomi na Cidade Industrial de Curitiba (CIC)? Oferecemos entrega expressa segura para residências e indústrias da região.",
    introducao: "Atendemos com total segurança e agilidade a imensa área da Cidade Industrial de Curitiba (CIC). Seja para colaboradores das indústrias ou moradores da região, entregamos seu novo smartphone Xiaomi, Redmi ou POCO com garantia de 6 meses e brindes prontos para uso em seu endereço.",
    coordenadasContexto: "Entrega expressa cobrindo toda a extensão industrial e residencial da CIC Curitiba.",
    ctaText: "Garantir Xiaomi na CIC"
  },
  {
    slug: "reboucas",
    nome: "Rebouças",
    regiao: "Central",
    tituloSEO: "Xiaomi no Rebouças Curitiba | Loja Física no Centro Próxima",
    metaDescription: "Xiaomi no Rebouças Curitiba. Compre em até 12x com garantia de 6 meses. Retire no Edifício Downtown ou receba via motoboy hoje.",
    introducao: "O Rebouças é vizinho direto do Centro, o que torna a retirada em nossa loja física extremamente prática para quem estuda na PUCPR, UTFPR ou trabalha na região. Você também pode usufruir de nossa entrega via motoboy express com taxa zero ou extremamente acessível para receber seu Xiaomi lacrado.",
    coordenadasContexto: "Região universitária e empresarial próxima à Avenida Silva Jardim e Avenida Getúlio Vargas.",
    ctaText: "Retirar / Comprar Rebouças"
  }
];

const OFFICIAL_BAIRROS = [
  "Abranches", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da Rua XV", "Atuba", "Augusta", 
  "Bacacheri", "Bairro Alto", "Barreirinha", "Boa Vista", "Bom Retiro", "Butiatuvinha", "Cachoeira", 
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Cascatinha", "Caximba", "Centro Cívico", 
  "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hugo Lange", "Jardim Botânico", 
  "Jardim das Américas", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", 
  "Orleans", "Parolin", "Pilarzinho", "Prado Velho", "Riviera", "Santa Cândida", "Santa Quitéria", 
  "Santo Inácio", "Sítio Cercado", "São Braz", "São Francisco", "São João", "São Lourenço", 
  "São Miguel", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim"
];

const UNOFFICIAL_BAIRROS = [
  "Vila Sandra", "CIC Central", "Neoville", "Vitória Régia", "Caiuá", "Sabará", "Vila Verde", 
  "Nossa Senhora da Luz", "Barigui", "Conquista", "Augusta (região)", "Riviera (região)", 
  "São Miguel (região)", "Gabineto", "Itatiaia", "Santa Helena", "Atenas", "Osvaldo Cruz", 
  "Vila Pantanal", "Vila Torres", "Vila das Torres", "Vila Parolin", "Vila Hauer", "Vila Guaíra", 
  "Vila Oficinas", "Vila Osternack", "Vila São Pedro", "Vila Audi", "Pinheirinho Velho", 
  "Portão Velho", "Capão Raso Velho", "Sítio Cercado Velho", "Umbará de Baixo", "Umbará de Cima", 
  "Carmo", "Hauer Velho", "Xaxim Velho", "Boqueirão Alto", "Boqueirão Velho", "Cajuru Alto", 
  "Uberaba Velho", "Uberaba de Cima", "Jardim das Torres", "Vila Prado", "Bairro Alto Norte", 
  "Bairro Alto Velho", "Tingui Velho", "Boa Vista Norte", "Orleans Velho", "São Braz Alto", 
  "Santa Felicidade Norte", "Jardim Gabineto", "Jardim Itatiaia", "Jardim Kosmos", "Jardim da Ordem", 
  "Jardim Alvorada"
];

const NEARBY_CITIES = [
  "São José dos Pinhais", "Pinhais", "Colombo", "Araucária", "Almirante Tamandaré", "Campo Largo", 
  "Campo Magro", "Fazenda Rio Grande", "Quatro Barras", "Campina Grande do Sul", "Mandirituba", 
  "Balsa Nova", "Rio Branco do Sul", "Itaperuçu", "Tijucas do Sul"
];

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

// Generate dynamic listings
const generatedOfficial: BairroInfo[] = OFFICIAL_BAIRROS.map(nome => ({
  slug: toSlug(nome),
  nome,
  regiao: "Curitiba (IPPUC)",
  tituloSEO: `Celular Xiaomi no Bairro ${nome} Curitiba | Envio Rápido Motoboy`,
  metaDescription: `Adquira seu celular Xiaomi original no bairro ${nome} em Curitiba. Entrega imediata via motoboy express, pague na entrega ao receber, 6 meses de garantia local.`,
  introducao: `A Xiaomi Shopcell atende o bairro ${nome} de Curitiba com total prioridade! Garantimos a entrega expressa do seu celular original, novo e lacrado na caixa via motoboy. O melhor de tudo: você realiza o pagamento seguro apenas no ato da entrega (pague na chegada do nosso motoboy), com suporte e garantia Shopcell de 6 meses inclusos de fábrica.`,
  coordenadasContexto: `Atendimento logístico otimizado com rotas rápidas via motoboy para as principais ruas e condomínios do bairro ${nome}.`,
  ctaText: `Pedir no WhatsApp (${nome})`
}));

const generatedUnofficial: BairroInfo[] = UNOFFICIAL_BAIRROS.map(nome => ({
  slug: toSlug(nome),
  nome,
  regiao: "Curitiba (Região Popular)",
  tituloSEO: `Xiaomi na Região ${nome} Curitiba | Original com Garantia`,
  metaDescription: `Compre celular Xiaomi original na região popular ${nome} de Curitiba. Entrega via motoboy rápida, pague na chegada e tenha 6 meses de garantia.`,
  introducao: `Se você mora na região do ${nome} em Curitiba e procura um Xiaomi original, nós levamos até você. Nosso serviço de motoboy express entrega seu aparelho com rapidez, segurança e a garantia local Shopcell de 6 meses. Com a Shopcell, você tem a facilidade do "peça e pague na chegada" para total segurança e transparência!`,
  coordenadasContexto: `Entrega expressa e segura para moradores, vilas e comércios na área do ${nome} em Curitiba.`,
  ctaText: `Solicitar no ${nome}`
}));

const generatedCities: BairroInfo[] = NEARBY_CITIES.map(nome => ({
  slug: toSlug(nome),
  nome,
  regiao: "Região Metropolitana",
  tituloSEO: `Loja Xiaomi em ${nome} | Celulares Originais com Envio Hoje`,
  metaDescription: `Sua loja Xiaomi para ${nome}. Compre Redmi ou POCO lacrados com entrega expressa para a Região Metropolitana e 6 meses de garantia.`,
  introducao: `Moradores de ${nome} e região contam com o serviço diferenciado da Shopcell! Compre seu smartphone Xiaomi, Redmi ou POCO lacrado na caixa com frete rápido e pague na entrega para o motoboy após inspecionar o aparelho em mãos. Todos os nossos produtos têm garantia local de 6 meses e brindes especiais.`,
  coordenadasContexto: `Rota de entrega expressa de fácil acesso cobrindo ${nome} e toda a Região Metropolitana a partir de nossa base em Curitiba.`,
  ctaText: `Consultar Frete para ${nome}`
}));

// Combine and export, filtering duplicates
const allBairrosMap = new Map<string, BairroInfo>();

// Add base pre-written ones first so they have higher precedence
baseBairrosData.forEach(b => {
  allBairrosMap.set(b.slug, b);
});

// Add generated ones if slug doesn't exist
[...generatedOfficial, ...generatedUnofficial, ...generatedCities].forEach(b => {
  if (!allBairrosMap.has(b.slug)) {
    allBairrosMap.set(b.slug, b);
  }
});

export const bairrosData: BairroInfo[] = Array.from(allBairrosMap.values());
