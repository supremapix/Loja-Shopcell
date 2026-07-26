export interface IntentPageInfo {
  slug: string;
  title: string;
  subtitle: string;
  h1: string;
  metaDescription: string;
  keywords: string;
  badge: string;
  introText: string;
  benefits: { title: string; desc: string; icon: string }[];
  faqs: { question: string; answer: string }[];
  brandFocus?: 'xiaomi' | 'poco' | 'redmi' | 'iphone' | 'samsung' | 'todas';
  bairroFocus?: string;
  ctaText: string;
}

export const INTENT_PAGES: Record<string, IntentPageInfo> = {
  "sitio-cercado": {
    slug: "sitio-cercado",
    title: "Loja de Celular no Sítio Cercado Curitiba | Xiaomi com Entrega Hoje e Garantia",
    subtitle: "A melhor e mais confiável loja de celulares Xiaomi, POCO e Redmi para o bairro Sítio Cercado e região.",
    h1: "Loja de Celular no Sítio Cercado Curitiba - Xiaomi, POCO & Redmi Originais",
    metaDescription: "Procurando loja de celular no Sítio Cercado? Compre Xiaomi, POCO e Redmi originais com 6 meses de garantia local e entrega expressa via motoboy hoje mesmo no Sítio Cercado, Bairro Novo e região.",
    keywords: "loja de celular sítio cercado, loja xiaomi sítio cercado, comprar celular sítio cercado, xiaomi sítio cercado curitiba, celular no sítio cercado, loja de celular bairro novo",
    badge: "DESTAQUE SÍTIO CERCADO & ZONA SUL",
    introText: "Se você mora no Sítio Cercado, Bairro Novo, Osternack, Ganchinho ou Umbará e procura um smartphone original com garantia real e atendimento de confiança, a Xiaomi Shop Cell é a sua escolha número #1 em Curitiba. Entregamos seu celular novo e lacrado na porta da sua casa no Sítio Cercado com taxa de entrega reduzida via motoboy express, permitindo que você inspecione o aparelho em mãos antes de realizar o pagamento seguro via Pix, dinheiro ou cartão em até 12x.",
    bairroFocus: "Sítio Cercado",
    brandFocus: "todas",
    ctaText: "Pedir no WhatsApp para Sítio Cercado",
    benefits: [
      {
        title: "Entrega Rápida no Sítio Cercado",
        desc: "Nosso motoboy percorre a Linha Verde e chega ao Sítio Cercado no mesmo dia para deixar o celular na sua mão.",
        icon: "truck"
      },
      {
        title: "Pague Apenas na Entrega",
        desc: "Total segurança: receba o aparelho lacrado na sua casa ou trabalho no Sítio Cercado e pague só após conferir.",
        icon: "shield"
      },
      {
        title: "6 Meses de Garantia Local",
        desc: "Garantia física presencial com suporte técnico de especialistas direto no Centro de Curitiba.",
        icon: "check"
      },
      {
        title: "Brinde Exclusivo em Cada Aparelho",
        desc: "Todos os celulares acompanham capinha anti-impacto e película de vidro de alta proteção grátis.",
        icon: "gift"
      }
    ],
    faqs: [
      {
        question: "A loja entrega no Sítio Cercado no mesmo dia?",
        answer: "Sim! Fazemos entregas diárias via motoboy express para o Sítio Cercado, Bairro Novo, Ganchinho, Umbará, Boqueirão e Xaxim. Comprando até o meio da tarde, você recebe seu celular no mesmo dia!"
      },
      {
        question: "Posso pagar ao receber no Sítio Cercado?",
        answer: "Com certeza! Você pode optar pelo pagamento na entrega com nosso motoboy. Ele leva a máquina de cartão ou você realiza o Pix / dinheiro na hora após verificar a caixa lacrada do aparelho."
      },
      {
        question: "Qual o prazo de garantia dos celulares no Sítio Cercado?",
        answer: "Todos os nossos smartphones Xiaomi, Redmi, POCO, iPhone e Samsung acompanham 6 meses de garantia local presencial assegurados pela nossa loja física em Curitiba."
      },
      {
        question: "Qual a vantagem de comprar na Shopcell em relação a lojas informais do bairro?",
        answer: "A Shopcell tem mais de 8 anos de mercado, CNPJ ativo, loja física com sala comercial estruturada no Edifício Downtown no Centro, nota 5.0 com mais de 3.800 avaliações no Google e garantia real sem complicações."
      }
    ]
  },
  "loja-de-celular-sitio-cercado": {
    slug: "loja-de-celular-sitio-cercado",
    title: "Loja de Celulares Sítio Cercado Curitiba | Smartphones Xiaomi com Garantia",
    subtitle: "A sua loja de tecnologia e celulares de referência no Sítio Cercado.",
    h1: "Sua Loja de Celular no Sítio Cercado Curitiba",
    metaDescription: "Compre seu celular no Sítio Cercado com a Shopcell. Garantia de 6 meses, produtos originais e lacrados com entrega motoboy no mesmo dia.",
    keywords: "loja de celular no sítio cercado, celular barato sítio cercado, comprar xiaomi sítio cercado, loja de celular perto de mim sítio cercado",
    badge: "SÍTIO CERCADO & REGIÃO",
    introText: "Buscando uma loja de celular perto de você no Sítio Cercado? A Xiaomi Shop Cell oferece a maior variedade de modelos das marcas Xiaomi, Redmi, POCO, iPhone e Samsung. Esqueça aparelhos recondicionados ou sem procedência: garantimos celulares 100% originais, novos em caixa lacrada, com película e capinha inclusas.",
    bairroFocus: "Sítio Cercado",
    brandFocus: "todas",
    ctaText: "Consultar Celulares no Sítio Cercado",
    benefits: [
      { title: "Atendimento Humanizado", desc: "Equipe especializada pronta para ajudar a escolher o melhor modelo no WhatsApp.", icon: "phone" },
      { title: "Facilidade de Pagamento", desc: "Parcelamos em até 12x no cartão de crédito ou concedemos super desconto no Pix.", icon: "credit-card" },
      { title: "Smartphones Lacrados", desc: "Aparelhos com selo de fábrica e carregador original na versão global.", icon: "box" },
      { title: "Suporte Pós-Venda", desc: "Canais abertos para dúvidas e suporte técnico durante todo o período de garantia.", icon: "headphones" }
    ],
    faqs: [
      { question: "Onde fica a loja física?", answer: "Nossa loja física e estoque principal ficam na Rua Conselheiro Laurindo, 809 - Sala 402 (Edifício Downtown) no Centro de Curitiba, com entregas rápidas para todo o Sítio Cercado." },
      { question: "Como consultar o valor do celular no Sítio Cercado?", answer: "Você pode clicar em qualquer botão do site para falar diretamente com nosso vendedor no WhatsApp. Passamos o orçamento em segundos!" }
    ]
  },
  "loja-xiaomi-sitio-cercado": {
    slug: "loja-xiaomi-sitio-cercado",
    title: "Loja Xiaomi Sítio Cercado Curitiba | Redmi e POCO Originais 6 Meses Garantia",
    subtitle: "Especializada Xiaomi para moradores do Sítio Cercado, Pinheirinho e Boqueirão.",
    h1: "Loja Xiaomi no Sítio Cercado - Celulares Redmi & POCO Lacrados",
    metaDescription: "As melhores ofertas Xiaomi no Sítio Cercado em Curitiba. Compre Redmi Note 15, POCO X8 Pro, Xiaomi 17T Pro com entrega hoje e 6 meses de garantia local.",
    keywords: "loja xiaomi sítio cercado, celular xiaomi sítio cercado, redmi note 15 sítio cercado, poco x8 pro sítio cercado",
    badge: "LOJA ESPECIALIZADA XIAOMI SÍTIO CERCADO",
    introText: "A febre Xiaomi chegou forte ao Sítio Cercado! Se você quer desempenho de topo de linha pagando um preço justo, os celulares Xiaomi, Redmi e POCO são imbatíveis. Na Shopcell, fornecemos toda a linha atualizada da Xiaomi para os moradores do Sítio Cercado com suporte e garantia presencial.",
    bairroFocus: "Sítio Cercado",
    brandFocus: "xiaomi",
    ctaText: "Orçamento Xiaomi Sítio Cercado",
    benefits: [
      { title: "Modelos Lançamentos 2026", desc: "Temos em estoque Redmi Note 15 5G, POCO X8 Pro, Xiaomi 17T Pro e muito mais.", icon: "zap" },
      { title: "Garantia Local 6 Meses", desc: "Tranquilidade total para usar seu Xiaomi sem preocupações com defeitos de fabricação.", icon: "shield" }
    ],
    faqs: [
      { question: "Os celulares Xiaomi são versão global?", answer: "Sim! Todos os nossos aparelhos Xiaomi são 100% Versão Global com idioma Português (Brasil), carregador no padrão brasileiro, suporte a 5G e atualizações oficiais de fábrica." }
    ]
  },
  "loja-xiaomi-curitiba": {
    slug: "loja-xiaomi-curitiba",
    title: "Loja Xiaomi Curitiba | A Maior Revenda Especializada com Pronta Entrega",
    subtitle: "Sua loja física e online número 1 de Xiaomi em Curitiba e Região Metropolitana.",
    h1: "Loja Xiaomi em Curitiba - Smartphones Originais & Entrega Rápida",
    metaDescription: "A melhor Loja Xiaomi em Curitiba! Compre celulares Redmi, POCO e Xiaomi com 6 meses de garantia local, loja física no Centro e entrega expressa para todos os bairros.",
    keywords: "loja xiaomi curitiba, xiaomi curitiba, comprar xiaomi curitiba, redmi curitiba, poco curitiba, xiaomi centro curitiba",
    badge: "LOJA NÚMERO 1 EM CURITIBA",
    introText: "A Xiaomi Shop Cell Curitiba é referência absoluta quando o assunto é Xiaomi na capital paranaense. Localizada no Edifício Downtown no Centro de Curitiba, atendemos clientes de todos os bairros e cidades vizinhas com a maior variedade de celulares Xiaomi, POCO e Redmi, todos lacrados, originais e com garantia de 6 meses.",
    brandFocus: "xiaomi",
    ctaText: "Falar com Atendente Xiaomi Curitiba",
    benefits: [
      { title: "Estoque a Pronta Entrega", desc: "Não espere semanas para importar. Seu Xiaomi está pronto para retirada ou entrega hoje.", icon: "package" },
      { title: "Loja Física no Centro", desc: "Espaço comercial aconchegante e seguro no Edifício Downtown para testar e comprar seu celular.", icon: "map-pin" },
      { title: "Motoboy Express", desc: "Receba em casa no Sítio Cercado, Batel, Água Verde, CIC, Pinheirinho ou São José dos Pinhais.", icon: "truck" }
    ],
    faqs: [
      { question: "Onde fica a loja física da Xiaomi Shopcell em Curitiba?", answer: "Nossa loja fica na Rua Conselheiro Laurindo, 809 - Sala 402, Edifício Downtown, Centro de Curitiba. Atendimento presencial com fácil estacionamento." },
      { question: "Por que comprar na Xiaomi Shop Cell Curitiba?", answer: "Oferecemos garantia presencial de 6 meses, mais de 8 anos de tradição, nota 5.0 no Google e atendimento transparente no WhatsApp." }
    ]
  },
  "iphone-curitiba": {
    slug: "iphone-curitiba",
    title: "iPhone em Curitiba | Comprar iPhone Lacrado com Garantia Local",
    subtitle: "Encontre os modelos mais procurados da Apple com segurança absoluta em Curitiba.",
    h1: "iPhone em Curitiba - Aparelhos Novos & Lacrados",
    metaDescription: "Compre seu iPhone em Curitiba com quem entende do assunto! Aparelhos novos, lacrados na caixa, com garantia e entrega rápida no Sítio Cercado e toda Curitiba.",
    keywords: "iphone curitiba, comprar iphone curitiba, loja iphone curitiba, iphone lacrado curitiba, iphone sitio cercado",
    badge: "APPLE EM CURITIBA",
    introText: "Procurando iPhone em Curitiba? Na Shopcell você encontra aparelhos Apple 100% originais e novos. Seja para upgrade de modelo ou sua primeira experiência iOS, oferecemos suporte completo, facilidades no parcelamento em até 12x e entrega imediata no Sítio Cercado, Centro e toda a cidade.",
    brandFocus: "iphone",
    ctaText: "Consultar iPhones em Curitiba",
    benefits: [
      { title: "Procedência Garantida", desc: "Smartphones novos, com homologação e garantia oficial.", icon: "shield-check" },
      { title: "Entrega Expressa", desc: "Receba seu iPhone lacrado hoje mesmo no seu bairro em Curitiba.", icon: "truck" }
    ],
    faqs: [
      { question: "Os iPhones acompanham garantia?", answer: "Sim! Todos os modelos Apple comercializados acompanham garantia completa para sua total tranquilidade." }
    ]
  },
  "samsung-curitiba": {
    slug: "samsung-curitiba",
    title: "Samsung em Curitiba | Comprar Smartphones Samsung Galaxy Originais",
    subtitle: "Toda a linha Samsung Galaxy em Curitiba com pronta entrega.",
    h1: "Samsung Galaxy em Curitiba - Modelos Originais com Garantia",
    metaDescription: "Compre seu smartphone Samsung Galaxy em Curitiba com quem oferece os melhores preços e atendimento especializado. Entrega rápida no Sítio Cercado e RMC.",
    keywords: "samsung curitiba, comprar samsung curitiba, galaxy curitiba, celular samsung sitio cercado",
    badge: "SAMSUNG GALAXY CURITIBA",
    introText: "A linha Samsung Galaxy traz telas impressionantes, câmeras avançadas e alta durabilidade. Na Xiaomi Shop Cell Curitiba, disponibilizamos modelos selecionados da linha Galaxy com garantia de 6 meses e entrega via motoboy para Curitiba e Região Metropolitana.",
    brandFocus: "samsung",
    ctaText: "Consultar Samsung em Curitiba",
    benefits: [
      { title: "Pronta Entrega", desc: "Retire na loja física no Centro ou receba em casa no Sítio Cercado e região.", icon: "check-circle" }
    ],
    faqs: [
      { question: "Quais os prazos para entregar um Samsung em Curitiba?", answer: "Em poucas horas após a confirmação no WhatsApp nosso motoboy entrega no seu endereço em Curitiba e RMC." }
    ]
  },
  "redmi-curitiba": {
    slug: "redmi-curitiba",
    title: "Redmi em Curitiba | Celulares Redmi Note 15 e Redmi 15 Originais",
    subtitle: "A linha mais vendida e amada de smartphones custo-benefício em Curitiba.",
    h1: "Redmi em Curitiba - O Melhor Custo-Benefício do Mercado",
    metaDescription: "Procurando celulares Redmi em Curitiba? Confira Redmi Note 15, Redmi Note 14, Redmi 15 com os melhores preços do dia, garantia de 6 meses e entrega hoje.",
    keywords: "redmi curitiba, redmi note 15 curitiba, comprar redmi curitiba, redmi sitio cercado",
    badge: "LINHA REDMI CURITIBA",
    introText: "A linha Redmi da Xiaomi é reconhecida mundialmente como a campeã em custo-benefício. Com telas AMOLED fluidas, baterias de longa duração e câmeras de alta resolução, o Redmi é a escolha inteligente de milhares de curitibanos. Na Shopcell, temos toda a linha Redmi a pronta entrega com brinde inclusos.",
    brandFocus: "redmi",
    ctaText: "Orçamento Linha Redmi",
    benefits: [
      { title: "Baterias Gigantes", desc: "Baterias de até 5.520mAh com carregamento super rápido para o dia todo.", icon: "battery" },
      { title: "Película e Capa Grátis", desc: "Seu Redmi já sai pronto da loja com capinha e película instaladas.", icon: "gift" }
    ],
    faqs: [
      { question: "Qual a diferença entre o Redmi e o POCO?", answer: "O Redmi foca no equilíbrio total (design, bateria e câmeras otimizadas), enquanto o POCO é focado em desempenho bruto de processador para jogos e multitarefa pesada." }
    ]
  },
  "poco-curitiba": {
    slug: "poco-curitiba",
    title: "POCO em Curitiba | POCO X8 Pro, POCO F8 Ultra e POCO C85 5G",
    subtitle: "A linha gamer e de alta performance da Xiaomi à sua disposição em Curitiba.",
    h1: "POCO em Curitiba - Máximo Desempenho e Velocidade",
    metaDescription: "Compre POCO em Curitiba na Shopcell! Modelos POCO X8 Pro, POCO F8 Ultra, POCO X7 Pro a pronta entrega com 6 meses de garantia local e suporte presencial.",
    keywords: "poco curitiba, poco x8 pro curitiba, poco f8 ultra curitiba, comprar poco curitiba, poco sitio cercado",
    badge: "LINHA POCO PERFORMANCE",
    introText: "Se você é gamer, criador de conteúdo ou precisa de um smartphone ultrarrápido que nunca trava, a linha POCO é a resposta perfeita. Na Shopcell Curitiba, você encontra os mais recentes lançamentos POCO com processadores topo de linha Snapdragon e MediaTek Dimensity, resfriamento líquido e telas de 120Hz.",
    brandFocus: "poco",
    ctaText: "Consultar Linha POCO em Curitiba",
    benefits: [
      { title: "Processadores Potentes", desc: "Performance extrema para rodar qualquer jogo pesado no gráfico máximo sem engasgos.", icon: "cpu" }
    ],
    faqs: [
      { question: "O POCO tem garantia na loja de Curitiba?", answer: "Sim! Todos os smartphones POCO acompanham 6 meses de garantia local com suporte prestado diretamente pela nossa equipe no Centro de Curitiba." }
    ]
  },
  "comprar-celular-curitiba": {
    slug: "comprar-celular-curitiba",
    title: "Comprar Celular em Curitiba | As Melhores Ofertas de Smartphones Originais",
    subtitle: "Onde comprar celular em Curitiba com total segurança, garantia e facilidade de pagamento.",
    h1: "Comprar Celular em Curitiba com Garantia & Segurança",
    metaDescription: "Saiba onde comprar celular em Curitiba sem sustos. Aparelhos lacrados com garantia de 6 meses, loja física no Centro, entrega expressa no Sítio Cercado e RMC.",
    keywords: "comprar celular em curitiba, onde comprar celular em curitiba, loja de celular curitiba, celular com garantia curitiba",
    badge: "GUIA DE COMPRAS CURITIBA",
    introText: "Decidiu comprar um celular novo em Curitiba e quer ter a certeza de fazer um excelente negócio? A Xiaomi Shop Cell combina mais de 8 anos de reputação com loja física no Centro de Curitiba e atendimento direto via WhatsApp. Esqueça riscos com vendedores anônimos na internet e compre com garantia de 6 meses e brinde de capinha e película.",
    brandFocus: "todas",
    ctaText: "Comprar Celular Agora no WhatsApp",
    benefits: [
      { title: "Procedência Garantida", desc: "Aparelhos 100% originais com selo de verificação de fábrica.", icon: "shield-check" },
      { title: "Atendimento Rápido", desc: "Receba orçamento e tire dúvidas em menos de 2 minutos no WhatsApp.", icon: "message-square" }
    ],
    faqs: [
      { question: "Como funciona a compra pelo WhatsApp?", answer: "É super simples: você escolhe o modelo pelo nosso site ou indica qual aparelho precisa, o atendente envia as opções de cores disponíveis, confirma o endereço no Sítio Cercado ou seu bairro, e agendamos a entrega ou separação para retirada na loja física." }
    ]
  },
  "celular-barato-curitiba": {
    slug: "celular-barato-curitiba",
    title: "Celular Barato em Curitiba | Smartphones Bons e Baratos com Garantia",
    subtitle: "Os melhores celulares econômicos e de alto desempenho para o seu orçamento.",
    h1: "Celulares Bons e Baratos em Curitiba com Garantia",
    metaDescription: "Encontre celulares baratos e de excelente qualidade em Curitiba. Modelos Xiaomi, Redmi e POCO com os menores valores do mercado e entrega rápida.",
    keywords: "celular barato curitiba, celular bom e barato curitiba, xiaomi barato curitiba, celular promocao curitiba",
    badge: "OFERTAS E ECONOMIA CURITIBA",
    introText: "Quer economizar de verdade sem abrir mão de um celular moderno com excelente câmera, bateria duradoura e tela grande? A linha de celulares de entrada e intermediários da Xiaomi é famosa por oferecer o dobro de especificações por um preço justo. Na Shopcell, você compra celular barato em Curitiba com 6 meses de garantia local.",
    brandFocus: "todas",
    ctaText: "Consultar Celulares Baratos no WhatsApp",
    benefits: [
      { title: "Menor Valor Garantido", desc: "Consulte nosso vendedor e garanta a cotação especial do dia para pagamentos no Pix.", icon: "dollar-sign" }
    ],
    faqs: [
      { question: "Quais os modelos de celulares mais baratos disponíveis?", answer: "Temos modelos de entrada como Redmi 14C e POCO C85 com armazenamento de 128GB/256GB e excelente custo-benefício!" }
    ]
  },
  "assistencia-xiaomi-curitiba": {
    slug: "assistencia-xiaomi-curitiba",
    title: "Assistência e Suporte Xiaomi em Curitiba | Atendimento Especializado",
    subtitle: "Suporte técnico e consultoria presencial para smartphones Xiaomi em Curitiba.",
    h1: "Assistência e Suporte Especializado Xiaomi em Curitiba",
    metaDescription: "Precisa de suporte ou garantia para seu Xiaomi em Curitiba? Conheça o atendimento especializado da Xiaomi Shop Cell no Edifício Downtown no Centro.",
    keywords: "assistencia xiaomi curitiba, suporte xiaomi curitiba, garantia xiaomi curitiba, conserto xiaomi curitiba",
    badge: "SUPORTE TÉCNICO ESPECIALIZADO",
    introText: "Comprar um smartphone exige a certeza de contar com respaldo técnico caso surja qualquer dúvida ou necessidade de suporte. Todos os nossos clientes contam com atendimento dedicado e garantia física de 6 meses na nossa loja no Centro de Curitiba.",
    brandFocus: "xiaomi",
    ctaText: "Falar com Suporte Xiaomi",
    benefits: [
      { title: "Equipe Especializada", desc: "Atendentes treinados e familiarizados com o sistema HyperOS, MIUI e hardware Xiaomi.", icon: "wrench" }
    ],
    faqs: [
      { question: "A garantia cobre defeitos de fabricação?", answer: "Sim! Durante os 6 meses de garantia local, cobrimos quaisquer falhas de fabricação em hardware ou sistema original." }
    ]
  },
  "troca-de-celular-curitiba": {
    slug: "troca-de-celular-curitiba",
    title: "Troca e Upgrade de Celular em Curitiba | Renove Seu Smartphone Hoje",
    subtitle: "Renove seu celular em Curitiba com facilidade, agilidade e segurança.",
    h1: "Upgrade de Celular em Curitiba - Mude para Xiaomi com Vantagem",
    metaDescription: "Quer fazer upgrade de celular em Curitiba? Conheça os lançamentos Xiaomi e compre seu novo modelo com entregas rápidas no Sítio Cercado e RMC.",
    keywords: "troca de celular curitiba, upgrade de celular curitiba, mudar de celular curitiba, trocar por xiaomi curitiba",
    badge: "UPGRADE & RENOVAÇÃO",
    introText: "Seu celular antigo já não segura carga na bateria, está travando ou tem espaço insuficiente de armazenamento? Mudar para um Xiaomi de última geração com 256GB ou 512GB é o passo ideal. Na Shopcell, facilitamos o parcelamento em até 12x no cartão de crédito.",
    brandFocus: "todas",
    ctaText: "Fazer Upgrade de Celular Agora",
    benefits: [
      { title: "Parcelamento em 12x", desc: "Divida a compra do seu novo smartphone no cartão sem complicação.", icon: "credit-card" }
    ],
    faqs: [
      { question: "Vocês parcelam no cartão de crédito?", answer: "Sim, parcelamos em até 12x no cartão de crédito presencialmente na loja ou na entrega para o motoboy!" }
    ]
  },
  "celular-com-garantia-curitiba": {
    slug: "celular-com-garantia-curitiba",
    title: "Celular com Garantia em Curitiba | 6 Meses de Proteção Presencial Local",
    subtitle: "Sua compra 100% protegida com garantia física de 6 meses no Centro de Curitiba.",
    h1: "Celular com Garantia Local de 6 Meses em Curitiba",
    metaDescription: "Compre celular com garantia real em Curitiba. 6 meses de cobertura física no Edifício Downtown Centro. Celulares lacrados Xiaomi, POCO e Redmi.",
    keywords: "celular com garantia curitiba, xiaomi com garantia curitiba, celular lacrado com garantia curitiba",
    badge: "GARANTIA LOCAL ASSEGURADA",
    introText: "Em um mercado repleto de ofertas sem procedência, ter a garantia de 6 meses assegurada por uma loja física com CNPJ e endereço fixo no Centro de Curitiba faz toda a diferença. Na Xiaomi Shop Cell, entregamos documento de garantia assinado e carimbado em todos os pedidos.",
    brandFocus: "todas",
    ctaText: "Comprar Celular com Garantia",
    benefits: [
      { title: "Proteção Real", desc: "Cobertura presencial direta no Centro de Curitiba durante 6 meses inteiros.", icon: "shield" }
    ],
    faqs: [
      { question: "Como acionar a garantia se precisar?", answer: "Basta entrar em contato pelo nosso WhatsApp ou ir diretamente até nossa loja física no Centro de Curitiba com seu comprovante de compra." }
    ]
  },
  "loja-de-celulares-perto-de-mim": {
    slug: "loja-de-celulares-perto-de-mim",
    title: "Loja de Celulares Perto de Mim em Curitiba | Entrega Rápida e Loja Física",
    subtitle: "A loja de celulares mais próxima de você no Sítio Cercado, Centro e toda Curitiba.",
    h1: "Loja de Celulares Perto de Você em Curitiba e RMC",
    metaDescription: "Procurando 'loja de celulares perto de mim' em Curitiba ou no Sítio Cercado? A Shopcell entrega via motoboy em minutos ou atende na loja física no Centro.",
    keywords: "loja de celulares perto de mim, loja xiaomi perto de mim, loja de celular aberta hoje curitiba, loja de celular sitio cercado perto de mim",
    badge: "ATENDIMENTO DE PROXIMIDADE",
    introText: "Quando você pesquisa por 'loja de celulares perto de mim', precisa de uma solução rápida, confiável e com estoque a pronta entrega. Quer você esteja no Sítio Cercado, Boqueirão, Pinheirinho, Batel ou São José dos Pinhais, a Shopcell leva o smartphone até você em tempo recorde ou recebe você na nossa loja física no Centro.",
    brandFocus: "todas",
    ctaText: "Localizar Loja / Pedir no WhatsApp",
    benefits: [
      { title: "Proximidade Absoluta", desc: "Entrega expressa que vai até o seu endereço ou loja física no coração do Centro.", icon: "map-pin" }
    ],
    faqs: [
      { question: "Qual o horário de funcionamento da loja?", answer: "Atendemos presencialmente e online de Segunda a Sexta das 09:00 às 19:00 e Sábados das 10:00 às 16:00!" }
    ]
  }
};
