import { bairrosData, type BairroInfo } from './bairrosData';
import { STORES } from './data';

export const LOCAL_SITE = 'https://www.xiaomishopcell.com';
export const LOCAL_UPDATED = '2026-11-09';
export const isCity = (local: BairroInfo) => local.regiao === 'Região Metropolitana';
export const localPath = (local: BairroInfo) => `/bairro/${local.slug}`;

// Local context is limited to established locality and store information. No estimated
// travel times, unverified landmarks, local branches or simulated reviews are generated.
const contexts: Record<string, string> = {
  guaira: 'A unidade Guaíra fica na Rua Maria Moscardi Fanini, 261, dentro do Mercado Goes. Ao falar com a equipe, informe que deseja atendimento nessa loja para não confundir o endereço com a unidade Alto Boqueirão.',
  'alto-boqueirao': 'A unidade Alto Boqueirão fica na R. Pastor Antônio Polito, 1805, dentro do Mercado Goes. Use o WhatsApp desta unidade para combinar a avaliação e confirme o endereço no mapa antes da visita.',
  centro: 'Se o aparelho apresentou defeito enquanto você estava no Centro, organize o que aconteceu antes de procurar a avaliação. A SUNCELL atende presencialmente no Guaíra e no Alto Boqueirão, não em uma unidade no Centro.',
  'sitio-cercado': 'Para sair do Sítio Cercado com o atendimento encaminhado, informe o modelo e o defeito pelo WhatsApp. A unidade Alto Boqueirão é uma das opções de loja, mas a escolha deve considerar seu ponto de partida e a confirmação da equipe.',
  batel: 'Quem está no Batel pode consultar as duas lojas antes de levar o aparelho. Solicite a confirmação da unidade que receberá o celular e guarde a conversa com o relato do defeito para acompanhar o diagnóstico.',
  'agua-verde': 'Para uma avaliação a partir do Água Verde, confira o endereço completo da unidade Guaíra, na Rua Maria Moscardi Fanini, 261. A localização indicada é a da loja no Guaíra; esta página não anuncia uma filial no Água Verde.',
  bigorrilho: 'Bigorrilho e Champagnat aparecem com frequência na mesma busca local. Ao pedir atendimento, informe seu bairro e confirme o destino em Curitiba: SUNCELL Guaíra ou Alto Boqueirão. O orçamento depende do aparelho e da avaliação.',
  portao: 'Se você está no Portão, escolha a unidade antes de se deslocar. Levar carregador e cabo usados com o aparelho pode ajudar a relatar falhas de carga, mas confirme com a equipe quais acessórios são necessários.',
  cabral: 'Para quem parte do Cabral, conversar com a loja antes da visita ajuda a evitar um deslocamento sem confirmação do modelo e da peça. Um relato pelo WhatsApp inicia o atendimento, mas não substitui a análise presencial.',
  juveve: 'Se você usa o celular para trabalho ou estudo no Juvevê, pergunte quando será possível receber uma previsão após o diagnóstico. Não conte com reparo imediato ou no mesmo dia antes da confirmação da equipe.',
  'cristo-rei': 'Para atendimento a partir do Cristo Rei, anote se o problema começou após uma queda, contato com líquido ou atualização. Essa informação ajuda a explicar o histórico à loja escolhida, sem antecipar a causa do defeito.',
  boqueirao: 'Boqueirão e Alto Boqueirão são nomes distintos. A loja SUNCELL desta região está no Alto Boqueirão, na R. Pastor Antônio Polito, 1805. Confirme esse endereço ao traçar a rota e ao combinar a avaliação.',
  pinheirinho: 'Antes de sair do Pinheirinho, confirme se a unidade escolhida pode avaliar seu modelo e se há necessidade de deixar o aparelho. Combine como receber o orçamento caso o celular seja seu principal meio de contato.',
  cic: 'A página da CIC se refere à Cidade Industrial de Curitiba. Como o ponto de partida dentro do bairro pode variar, use os dois endereços de loja para comparar o trajeto, sem presumir qual unidade é a mais próxima.',
  'sao-jose-dos-pinhais': 'São José dos Pinhais é um município separado de Curitiba. Antes de fazer o deslocamento entre as cidades, confirme a unidade e pergunte se a avaliação e a retirada podem exigir visitas diferentes. A SUNCELL não anuncia filial em São José dos Pinhais nesta página.',
  pinhais: 'Pinhais é um município próprio, não um bairro de Curitiba. Ao consultar a SUNCELL, informe que partirá de Pinhais e combine a recepção do aparelho em uma das lojas de Curitiba. Não há promessa automática de coleta ou entrega.',
  colombo: 'Para quem vem de Colombo, vale reunir modelo, sintomas e histórico do defeito antes de organizar a ida a Curitiba. Pergunte como o orçamento será comunicado e quais condições precisam ser aprovadas para iniciar o serviço.',
  araucaria: 'Quem sai de Araucária deve confirmar o destino em Curitiba antes de levar o celular. Caso precise deixar o aparelho, registre como será informado sobre diagnóstico, disponibilidade de peça e retirada; não há prazo único para todos os reparos.',
  'almirante-tamandare': 'Ao solicitar atendimento a partir de Almirante Tamandaré, identifique o aparelho e a loja desejada. Confirme o horário de recebimento e planeje uma eventual segunda visita para retirada, conforme a avaliação técnica.',
  'campo-largo': 'Para uma visita a partir de Campo Largo, confirme o atendimento ao modelo antes de sair. Se o aparelho ainda funciona, faça uma cópia dos arquivos importantes e verifique se você consegue acessar suas contas por outro dispositivo.',
  'campo-magro': 'Quem está em Campo Magro pode iniciar a conversa pelo WhatsApp e escolher uma das unidades de Curitiba. Explique se a falha é contínua ou intermitente e pergunte como apresentar o problema durante a avaliação.',
  'fazenda-rio-grande': 'Antes de organizar uma ida de Fazenda Rio Grande a Curitiba, confira qual loja receberá o aparelho. Se o defeito envolve carga ou bateria, relate quando acontece e interrompa o uso se houver estufamento ou aquecimento incomum.',
  'quatro-barras': 'Para atendimento a partir de Quatro Barras, confirme se a avaliação exige que o celular permaneça na loja. Orçamento por mensagem, prazo do reparo e retirada são etapas diferentes e devem ser combinadas com a equipe.',
  'campina-grande-do-sul': 'Se você partir de Campina Grande do Sul, prepare uma descrição curta do defeito antes de consultar as unidades. Peça a confirmação do endereço e do horário, especialmente quando a visita depende de outra pessoa ou de transporte combinado.',
  mandirituba: 'Para quem vem de Mandirituba, confirmar o modelo, o destino e o procedimento de recebimento evita uma viagem sem as informações necessárias. Consulte condições de orçamento e retirada; esta página não afirma atendimento domiciliar no município.',
};

export function localContext(local: BairroInfo): string {
  return contexts[local.slug] ?? `A busca por conserto de celular em ${local.nome} deve separar a sua localização do endereço da assistência. O atendimento presencial da SUNCELL acontece no Guaíra e no Alto Boqueirão. Informe que você está em ${local.nome}, escolha o destino no mapa e confirme o recebimento do modelo antes da visita.`;
}

export function localFaq(local: BairroInfo) {
  const city = isCity(local);
  const store = STORES.find(s => s.id === local.slug);
  return [
    { question: `A SUNCELL tem loja em ${local.nome}?`, answer: store
      ? `Sim. A ${store.name} fica na ${store.address}, dentro do Mercado Goes. A outra unidade está em ${store.id === 'guaira' ? 'Alto Boqueirão' : 'Guaíra'}, também em Curitiba.`
      : `As unidades informadas pela SUNCELL ficam no Guaíra e no Alto Boqueirão, em Curitiba. Esta página orienta quem está em ${local.nome}${city ? ', no Paraná' : ''}, sem indicar uma filial nessa localidade.` },
    { question: `Como pedir uma avaliação saindo de ${local.nome}?`, answer: `Escolha uma das duas lojas e envie pelo WhatsApp a marca, o modelo e uma descrição do problema. Informe que está em ${local.nome} e confirme o endereço e o horário antes de levar o aparelho. Não envie senhas nem códigos de verificação.` },
    { question: 'É possível saber o preço só pela descrição do defeito?', answer: 'A descrição ajuda no primeiro contato. O valor final depende do diagnóstico, da peça adequada e do serviço aprovado. Pergunte o que o orçamento inclui e solicite as condições antes de autorizar o reparo.' },
    { question: city ? `A SUNCELL busca ou entrega o aparelho em ${local.nome}?` : `Qual loja escolher a partir de ${local.nome}?`, answer: city
      ? 'Coleta, envio e entrega não são garantidos por esta página. Consulte diretamente a unidade sobre a possibilidade, o custo e as condições para o seu endereço. O atendimento presencial informado é em Curitiba.'
      : 'Compare a unidade Guaíra, na Rua Maria Moscardi Fanini, 261, e a unidade Alto Boqueirão, na R. Pastor Antônio Polito, 1805. A melhor rota depende do seu ponto de partida. Confirme também qual unidade pode receber seu modelo.' },
    { question: 'Meus arquivos serão mantidos depois do reparo?', answer: 'Não é possível garantir a preservação dos dados em todos os defeitos. Quando o aparelho permitir, faça backup antes da avaliação e pergunte se o procedimento pode exigir restauração. Converse sobre testes e privacidade antes de autorizar o serviço.' },
    { question: 'Qual é o prazo e a garantia do serviço?', answer: 'Peça a previsão após o diagnóstico. O prazo depende do defeito e da disponibilidade de componentes. Confirme por escrito o serviço, as condições de garantia e as orientações de uso e retirada; não há um prazo único válido para todo aparelho.' },
  ];
}

export function localSchemas(local: BairroInfo) {
  const url = `${LOCAL_SITE}${localPath(local)}`;
  const stores = STORES.map(store => ({
    '@type': 'MobilePhoneStore', '@id': `${LOCAL_SITE}/#loja-${store.id}`, name: store.name,
    url: `${LOCAL_SITE}/contato`, telephone: `+${store.whatsappClean}`,
    address: { '@type': 'PostalAddress', streetAddress: `${store.street} - Mercado Goes`, addressLocality: 'Curitiba', addressRegion: 'PR', postalCode: store.cep, addressCountry: 'BR' },
    hasMap: store.mapsLink,
  }));
  return [
    { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, url, name: local.tituloSEO, description: local.metaDescription, inLanguage: 'pt-BR', dateModified: LOCAL_UPDATED, about: { '@type': isCity(local) ? 'City' : 'Place', name: isCity(local) ? `${local.nome}, Paraná` : `${local.nome}, Curitiba, Paraná` }, publisher: { '@id': `${LOCAL_SITE}/#organization` } },
    { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${LOCAL_SITE}/#organization`, name: 'SUNCELL', url: LOCAL_SITE, location: stores },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: LOCAL_SITE }, { '@type': 'ListItem', position: 2, name: local.nome, item: url }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: localFaq(local).map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
  ];
}

export function relatedLocations(local: BairroInfo) {
  return bairrosData.filter(item => item.slug !== local.slug && isCity(item) === isCity(local));
}
