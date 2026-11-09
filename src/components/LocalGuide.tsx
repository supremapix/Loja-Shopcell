import { type BairroInfo } from '../bairrosData';
import { STORES } from '../data';
import { isCity, localContext, localFaq, localPath, relatedLocations } from '../localGuideData';

export default function LocalGuide({ local }: { local: BairroInfo }) {
  const city = isCity(local);
  return <main className="sc-local-guide" id="guia-local">
    <header className="sc-local-hero">
      <div className="sc-local-container">
        <nav aria-label="Navegação estrutural"><a href="/">Início</a><span aria-hidden="true"> / </span><span>{local.nome}</span></nav>
        <p className="sc-local-eyebrow">SUNCELL · {city ? 'Orientações para quem vem da região metropolitana' : 'Atendimento a partir do seu bairro'}</p>
        <h1>Conserto de celular para quem está em <span>{local.nome}</span></h1>
        <p className="sc-local-intro">{local.introducao}</p>
        <p className="sc-local-location">{city ? `${local.nome} · Paraná` : `${local.nome} · Curitiba, PR`} | Lojas físicas: Guaíra e Alto Boqueirão</p>
        <a className="sc-local-button" href="#unidades-locais">Escolher uma unidade para avaliação</a>
      </div>
    </header>
    <div className="sc-local-container sc-local-body">
      <section className="sc-local-panel" aria-labelledby="contexto-local">
        <p className="sc-local-eyebrow">Planeje o atendimento</p>
        <h2 id="contexto-local">O que considerar saindo de {local.nome}</h2>
        <p>{localContext(local)}</p>
        <p>{city ? 'Como a visita envolve outro município, combine a forma de contato para receber o orçamento e confirmar a retirada. O envio de uma mensagem não reserva uma peça nem confirma o início do reparo.' : 'O endereço da loja é diferente da área de origem do cliente. Consulte a rota atual no mapa e confirme o horário com a unidade, sobretudo em feriados.'}</p>
      </section>
      <section aria-labelledby="sintomas">
        <p className="sc-local-eyebrow">Antes do diagnóstico</p>
        <h2 id="sintomas">Explique o sintoma, sem tentar adivinhar a peça</h2>
        <div className="sc-local-grid">
          <article><h3>Tela e imagem</h3><p>Relate se o vidro trincou, se surgiram manchas, se a imagem apagou ou se o toque falha. Vidro, display e resposta ao toque podem exigir análises diferentes. Informe se houve queda ou contato com líquido.</p></article>
          <article><h3>Bateria e carregamento</h3><p>Descreva se a carga acaba rápido, se o aparelho desliga ou se o cabo só funciona em certa posição. Esses sinais não confirmam sozinhos defeito na bateria ou no conector. Não force o encaixe nem abra o aparelho.</p></article>
          <article><h3>Câmera, áudio e conexão</h3><p>Explique em qual situação ocorre a falha: chamadas, gravações, câmera frontal ou traseira. Quando for seguro, anote uma sequência que permita reproduzir o problema durante a avaliação.</p></article>
          <article><h3>Travamentos e dados</h3><p>Informe se o problema começou após uma atualização e se o celular ainda inicia. Evite restaurar o sistema antes de conversar sobre seus arquivos. Diagnóstico de hardware e ajustes de software não são a mesma coisa.</p></article>
        </div>
        <aside className="sc-local-safety"><strong>Se houver bateria estufada, fumaça ou aquecimento incomum:</strong> interrompa o uso e a carga. Não perfure, pressione ou tente desmontar o aparelho. Peça orientação para encaminhá-lo com segurança.</aside>
      </section>
      <section className="sc-local-panel" aria-labelledby="preparo">
        <h2 id="preparo">Checklist para levar seu celular à SUNCELL</h2>
        <ol className="sc-local-steps">
          <li><strong>Identifique o aparelho.</strong> Separe marca e modelo exatos. Se não conseguir ligar o celular, verifique a caixa ou o comprovante de compra, quando disponíveis.</li>
          <li><strong>Registre o histórico.</strong> Anote quando a falha começou, o que já foi tentado e se houve queda, umidade ou reparo anterior.</li>
          <li><strong>Cuide dos arquivos.</strong> Faça backup se o aparelho permitir. Não envie senhas, códigos de autenticação ou documentos pessoais no primeiro contato.</li>
          <li><strong>Confirme o orçamento.</strong> Pergunte sobre peça, mão de obra, possíveis custos de avaliação, prazo e condições de garantia antes de autorizar o serviço.</li>
          <li><strong>Combine os próximos passos.</strong> Confirme onde entregar, como receber atualizações e como retirar o aparelho. Os detalhes dependem da avaliação da unidade.</li>
        </ol>
      </section>
      <section id="unidades-locais" aria-labelledby="unidades-heading">
        <p className="sc-local-eyebrow">Dois endereços em Curitiba</p>
        <h2 id="unidades-heading">Escolha a loja e confirme o atendimento</h2>
        <p>As duas unidades ficam dentro do Mercado Goes. O horário informado no site é de segunda a sábado, das 9h às 19h. Confirme exceções e disponibilidade de atendimento diretamente com a loja.</p>
        <div className="sc-local-grid sc-local-stores">{STORES.map(store => <article key={store.id}>
          <h3>{store.name}</h3><address>{store.address}<br />Dentro do Mercado Goes</address>
          <p><a href={`tel:+${store.whatsappClean}`}>{store.phone}</a></p>
          <a className="sc-local-button" href={`https://wa.me/${store.whatsappClean}?text=${encodeURIComponent(`Olá! Estou em ${local.nome}${city ? ' (PR)' : ', Curitiba'} e gostaria de consultar uma avaliação de celular na ${store.name}. Posso informar o modelo e o defeito?`)}`} target="_blank" rel="noopener noreferrer">WhatsApp {store.neighborhood}</a>
          <a className="sc-local-map" href={store.mapsLink} target="_blank" rel="noopener noreferrer">Ver endereço no mapa</a>
        </article>)}</div>
      </section>
      <section aria-labelledby="perguntas-locais"><h2 id="perguntas-locais">Perguntas de quem está em {local.nome}</h2><div className="sc-local-faq">{localFaq(local).map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="sc-local-panel" aria-labelledby="continuar"><h2 id="continuar">Continue sua consulta</h2><p>Se a avaliação indicar que você deve comparar reparo e substituição, consulte também o <a href="/celulares">catálogo de celulares</a> e os <a href="/acessorios">acessórios</a>. Preço, estoque e condições precisam ser confirmados no atendimento.</p><p><a href="/contato">Ver os contatos da SUNCELL</a> · <a href="/blog">Ler os guias sobre celulares</a></p></section>
      <details className="sc-local-directory"><summary>{city ? 'Outras cidades com orientações de atendimento' : 'Outros bairros de Curitiba'}</summary><nav aria-label="Outras localidades">{relatedLocations(local).map(item => <a key={item.slug} href={localPath(item)}>{item.nome}</a>)}</nav></details>
      <p className="sc-local-updated">Orientações revisadas em 9 de novembro de 2026. Informações sobre atendimento presencial e preparo do aparelho; diagnóstico, preço e prazo dependem da avaliação.</p>
    </div>
  </main>;
}
