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
  bairroFocus?: string;
  ctaText: string;
}

export const INTENT_PAGES: Record<string, IntentPageInfo> = {
  "sitio-cercado": {
    slug: "sitio-cercado",
    title: "Loja de Celular no Sítio Cercado Curitiba | Entrega Hoje e Garantia 12 Meses | Shopcell",
    subtitle: "A melhor e mais confiável opção em celulares e atendimento especializado para o bairro Sítio Cercado e região.",
    h1: "Loja de Celular no Sítio Cercado Curitiba - Atendimento Especializado",
    metaDescription: "Procurando loja de celular no Sítio Cercado? Compre smartphones novos com 12 meses de garantia local e entrega expressa via motoboy no Sítio Cercado, Bairro Novo e região.",
    keywords: "loja de celular sítio cercado, comprar celular sítio cercado, celulares sítio cercado curitiba, celular no sítio cercado, loja de celular bairro novo",
    badge: "DESTAQUE SÍTIO CERCADO & ZONA SUL",
    introText: "Se você mora no Sítio Cercado, Bairro Novo, Osternack, Ganchinho ou Umbará e procura um smartphone original com garantia de 12 meses e atendimento de confiança, a Shopcell é a sua escolha número #1 em Curitiba. Entregamos seu celular novo e lacrado na porta da sua casa no Sítio Cercado com taxa de entrega reduzida via motoboy express, permitindo que você inspecione o aparelho em mãos antes de realizar o pagamento seguro via Pix, dinheiro ou cartão em até 12x.",
    bairroFocus: "Sítio Cercado",
    ctaText: "Pedir no WhatsApp para Sítio Cercado",
    benefits: [
      {
        title: "Entrega Rápida no Sítio Cercado",
        desc: "Nosso motoboy percorre a Linha Verde e chega ao Sítio Cercado no mesmo dia para deixar seu aparelho na sua mão.",
        icon: "truck"
      },
      {
        title: "Pague Apenas na Entrega",
        desc: "Total segurança: receba o aparelho lacrado na sua casa ou trabalho no Sítio Cercado e pague só após conferir.",
        icon: "shield"
      },
      {
        title: "12 Meses de Garantia Local",
        desc: "Garantia física presencial com suporte técnico de especialistas direto na loja no Centro de Curitiba.",
        icon: "check"
      },
      {
        title: "Atendimento Humanizado e Rápido",
        desc: "Consultoria completa via WhatsApp para indicar o celular ideal com base no seu orçamento.",
        icon: "phone"
      }
    ],
    faqs: [
      {
        question: "A loja entrega no Sítio Cercado no mesmo dia?",
        answer: "Sim! Fazemos entregas diárias via motoboy express para o Sítio Cercado, Bairro Novo, Ganchinho, Umbará, Boqueirão e Xaxim. Comprando até o meio da tarde, você recebe seu celular no mesmo dia!"
      },
      {
        question: "Posso pagar ao receber no Sítio Cercado?",
        answer: "Com certeza! Você pode optar pelo pagamento na entrega com nosso motoboy. Ele leva a máquina de cartão ou você realiza o Pix/dinheiro na hora após verificar a caixa lacrada do aparelho."
      },
      {
        question: "Qual o prazo de garantia dos celulares no Sítio Cercado?",
        answer: "Todos os nossos smartphones acompanham 12 meses de garantia local presencial assegurados pela nossa loja física no Centro de Curitiba."
      },
      {
        question: "Qual a vantagem de comprar na Shopcell em relação a vendedores informais?",
        answer: "A Shopcell tem mais de 8 anos de mercado, CNPJ ativo, loja física com sala comercial estruturada no Edifício Downtown no Centro, nota 5.0 com mais de 3.800 avaliações no Google e garantia real sem complicações."
      }
    ]
  },
  "loja-de-celular-sitio-cercado": {
    slug: "loja-de-celular-sitio-cercado",
    title: "Loja de Celular Sítio Cercado Curitiba | Smartphones com Garantia | Shopcell",
    subtitle: "A sua referência em celulares e suporte técnico comercial para o Sítio Cercado.",
    h1: "Sua Loja de Celular no Sítio Cercado Curitiba",
    metaDescription: "Compre seu celular no Sítio Cercado com a Shopcell. Garantia de 12 meses, produtos originais e lacrados com entrega motoboy no mesmo dia.",
    keywords: "loja de celular no sítio cercado, celular barato sítio cercado, comprar celular sítio cercado, loja de celular perto de mim sítio cercado",
    badge: "SÍTIO CERCADO & REGIÃO",
    introText: "Buscando uma loja de celular perto de você no Sítio Cercado? A Shopcell oferece aparelhos originais, novos em caixa lacrada, com procedência garantida e suporte presencial no Centro de Curitiba.",
    bairroFocus: "Sítio Cercado",
    ctaText: "Consultar Celulares no Sítio Cercado",
    benefits: [
      { title: "Atendimento Humanizado", desc: "Equipe especializada pronta para ajudar a escolher o melhor modelo no WhatsApp.", icon: "phone" },
      { title: "Facilidade de Pagamento", desc: "Parcelamos em até 12x no cartão de crédito ou concedemos super desconto no Pix.", icon: "credit-card" },
      { title: "Smartphones Lacrados", desc: "Aparelhos novos, lacrados na caixa de fábrica com procedência garantida.", icon: "box" },
      { title: "Suporte Pós-Venda", desc: "Canais abertos para dúvidas e suporte técnico durante todo o período de garantia.", icon: "headphones" }
    ],
    faqs: [
      { question: "Onde fica a loja física?", answer: "Nossa loja física e estoque principal ficam na Rua Conselheiro Laurindo, 809 - Sala 402 (Edifício Downtown) no Centro de Curitiba, com entregas rápidas para todo o Sítio Cercado." },
      { question: "Como consultar os celulares disponíveis para o Sítio Cercado?", answer: "Você pode clicar em qualquer botão do site para falar diretamente com nosso vendedor no WhatsApp. Passamos as opções disponíveis em segundos!" }
    ]
  },
  "comprar-celular-curitiba": {
    slug: "comprar-celular-curitiba",
    title: "Comprar Celular em Curitiba | Ofertas e Atendimento Especializado | Shopcell",
    subtitle: "Onde comprar celular em Curitiba com total segurança, garantia e facilidade de pagamento.",
    h1: "Comprar Celular em Curitiba com Garantia & Segurança",
    metaDescription: "Saiba onde comprar celular em Curitiba sem sustos. Aparelhos lacrados com garantia de 12 meses, loja física no Centro, entrega expressa no Sítio Cercado e RMC.",
    keywords: "comprar celular em curitiba, onde comprar celular em curitiba, loja de celular curitiba, celular com garantia curitiba",
    badge: "GUIA DE COMPRAS CURITIBA",
    introText: "Decidiu comprar um celular novo em Curitiba e quer ter a certeza de fazer um excelente negócio? A Shopcell combina mais de 8 anos de reputação com loja física no Centro de Curitiba e atendimento direto via WhatsApp. Compre com garantia de 12 meses e suporte completo.",
    ctaText: "Comprar Celular Agora no WhatsApp",
    benefits: [
      { title: "Procedência Garantida", desc: "Aparelhos 100% originais e novos na caixa lacrada de fábrica.", icon: "shield-check" },
      { title: "Atendimento Rápido", desc: "Receba orçamento e tire dúvidas com nossos especialistas no WhatsApp.", icon: "message-square" }
    ],
    faqs: [
      { question: "Como funciona a consulta pelo WhatsApp?", answer: "É super simples: você entra em contato, nosso atendente informa as opções e cores disponíveis em estoque, confirma seu endereço em Curitiba e agendamos a entrega ou retirada na loja." }
    ]
  },
  "celular-barato-curitiba": {
    slug: "celular-barato-curitiba",
    title: "Celular Barato em Curitiba | Smartphones de Qualidade com Garantia | Shopcell",
    subtitle: "Os melhores celulares econômicos e de alto desempenho para o seu orçamento.",
    h1: "Celulares de Excelente Custo-Benefício em Curitiba",
    metaDescription: "Encontre celulares de excelente qualidade e ótimo custo-benefício em Curitiba. Opções econômicas com 12 meses de garantia e entrega rápida.",
    keywords: "celular barato curitiba, celular bom e barato curitiba, celular em promocao curitiba",
    badge: "OFERTAS E ECONOMIA CURITIBA",
    introText: "Quer economizar de verdade sem abrir mão de um celular moderno com excelente câmera, bateria duradoura e tela grande? A Shopcell disponibiliza opções de smartphones de entrada e intermediários em Curitiba com 12 meses de garantia local.",
    ctaText: "Consultar Celulares no WhatsApp",
    benefits: [
      { title: "Ótimas Condições no Pix", desc: "Consulte nossos atendentes e garanta a cotação com desconto especial no Pix.", icon: "dollar-sign" }
    ],
    faqs: [
      { question: "Quais as opções de celulares mais acessíveis?", answer: "Temos modelos de entrada ideais para o dia a dia, com armazenamento amplo de 128GB/256GB e bateria de longa duração!" }
    ]
  },
  "troca-de-celular-curitiba": {
    slug: "troca-de-celular-curitiba",
    title: "Troca e Upgrade de Celular em Curitiba | Renove Seu Celular na Shopcell",
    subtitle: "Renove seu celular em Curitiba com facilidade, agilidade e segurança.",
    h1: "Upgrade de Celular em Curitiba - Renove Seu Aparelho",
    metaDescription: "Quer fazer upgrade de celular em Curitiba? Conheça as melhores opções e compre seu novo modelo com entregas rápidas no Sítio Cercado e RMC.",
    keywords: "troca de celular curitiba, upgrade de celular curitiba, renovar celular curitiba",
    badge: "UPGRADE & RENOVAÇÃO",
    introText: "Seu celular antigo já não segura carga na bateria, está travando ou tem espaço insuficiente de armazenamento? Fazer um upgrade para um smartphone moderno de 256GB ou 512GB é o passo ideal. Na Shopcell, facilitamos o parcelamento em até 12x no cartão de crédito.",
    ctaText: "Fazer Upgrade de Celular Agora",
    benefits: [
      { title: "Parcelamento em 12x", desc: "Divida a compra do seu novo smartphone no cartão sem complicação.", icon: "credit-card" }
    ],
    faqs: [
      { question: "Vocês parcelam no cartão de crédito?", answer: "Sim, parcelamos em até 12x no cartão de crédito presencialmente na loja física ou na entrega para o motoboy!" }
    ]
  },
  "celular-com-garantia-curitiba": {
    slug: "celular-com-garantia-curitiba",
    title: "Celular com Garantia em Curitiba | 12 Meses de Proteção Presencial | Shopcell",
    subtitle: "Sua compra 100% protegida com garantia física de 12 meses no Centro de Curitiba.",
    h1: "Celular com Garantia Local de 12 Meses em Curitiba",
    metaDescription: "Compre celular com garantia real em Curitiba. 12 meses de cobertura física no Edifício Downtown Centro. Celulares novos e lacrados na Shopcell.",
    keywords: "celular com garantia curitiba, celular lacrado com garantia curitiba, loja de celular garantia curitiba",
    badge: "GARANTIA LOCAL ASSEGURADA",
    introText: "Ter a garantia de 12 meses assegurada por uma loja física com CNPJ e endereço fixo no Centro de Curitiba faz toda a diferença. Na Shopcell, você conta com suporte técnico presencial e documento de garantia em todos os seus pedidos.",
    ctaText: "Comprar Celular com Garantia",
    benefits: [
      { title: "Proteção Real", desc: "Cobertura presencial direta no Centro de Curitiba durante 12 meses inteiros.", icon: "shield" }
    ],
    faqs: [
      { question: "Como acionar a garantia se precisar?", answer: "Basta entrar em contato pelo nosso WhatsApp ou ir diretamente até nossa loja física no Centro de Curitiba com seu comprovante de compra." }
    ]
  },
  "loja-de-celulares-perto-de-mim": {
    slug: "loja-de-celulares-perto-de-mim",
    title: "Loja de Celulares Perto de Mim em Curitiba | Entrega Rápida e Loja Física | Shopcell",
    subtitle: "A loja de celulares mais próxima de você no Sítio Cercado, Centro e toda Curitiba.",
    h1: "Loja de Celulares Perto de Você em Curitiba e RMC",
    metaDescription: "Procurando 'loja de celulares perto de mim' em Curitiba ou no Sítio Cercado? A Shopcell entrega via motoboy no mesmo dia ou atende na loja física no Centro.",
    keywords: "loja de celulares perto de mim, loja de celular aberta hoje curitiba, loja de celular sitio cercado perto de mim",
    badge: "ATENDIMENTO DE PROXIMIDADE",
    introText: "Quando você pesquisa por 'loja de celulares perto de mim', precisa de uma solução rápida, confiável e com pronta entrega. Quer você esteja no Sítio Cercado, Boqueirão, Pinheirinho, Batel ou São José dos Pinhais, a Shopcell leva o smartphone até você em tempo recorde ou recebe você na nossa loja física no Centro.",
    ctaText: "Localizar Loja / Pedir no WhatsApp",
    benefits: [
      { title: "Proximidade Absoluta", desc: "Entrega expressa que vai até o seu endereço ou loja física no coração do Centro de Curitiba.", icon: "map-pin" }
    ],
    faqs: [
      { question: "Qual o horário de funcionamento da loja?", answer: "Atendemos presencialmente e online de Segunda a Sexta das 09:00 às 19:00 e Sábados das 10:00 às 16:00!" }
    ]
  }
};
