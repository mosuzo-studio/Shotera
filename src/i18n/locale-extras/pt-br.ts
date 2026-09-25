import type { LocaleExtras } from '../locale-extras-types';

/**
 * Brazilian Portuguese copy that brings the home and about pages to parity
 * with the English pages. Terminology follows the Shotera app's pt-BR
 * language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Captura com rolagem',

  home: {
    heroAlt:
      'Ferramentas do Shotera na tela: captura, captura com rolagem, anotação, gravação de tela, recorte com IA, OCR offline, leitura de QR Code e código de barras, tradução de imagens e fixação na tela',
    cards: [
      {
        title: 'Captura com rolagem',
        description:
          'Uma página mais alta que a tela ainda cabe em uma única imagem. Role você mesmo ou deixe o Shotera rolar sozinho e veja a imagem longa se montar enquanto cresce.',
      },
      {
        title: 'Leitura de QR Code e código de barras',
        description:
          'Leia o código dentro da captura — links, Wi-Fi, contatos, códigos de barras — e copie o que ele contém. Tudo offline.',
      },
      {
        title: 'Visualizador de imagens',
        description:
          'Abra uma captura ou qualquer arquivo de imagem na própria janela do visualizador: navegue pela pasta, amplie e ajuste o que precisar — sem precisar de outro app. Os formatos comuns abrem na hora.',
      },
    ],
    scrolling: {
      tagline: 'Captura com rolagem',
      title: 'Uma página mais alta que a tela, em uma só imagem',
      text: 'Páginas inteiras, conversas longas e documentos completos — capturados de ponta a ponta em uma única imagem.',
      alt: 'Captura com rolagem montando uma página longa em uma única imagem',
      items: [
        {
          title: 'Rolagem automática ou manual',
          description:
            'Deixe o Shotera percorrer a página ou role com as próprias mãos. De qualquer forma, cada quadro é capturado durante o processo.',
        },
        {
          title: 'Veja a montagem enquanto ela cresce',
          description:
            'Uma prévia ao vivo fica ao lado da seleção e cresce a cada quadro, para você parar no momento em que a página inteira estiver ali.',
        },
        {
          title: 'Sem emendas visíveis',
          description:
            'Os quadros vizinhos são combinados e mesclados, então a imagem longa final lê como uma página contínua.',
        },
        {
          title: 'Copie ou salve',
          description:
            'Envie a imagem longa direto para a área de transferência ou salve no disco — pronta para documentação, chat e relatos de bug.',
        },
      ],
    },
    stats: [
      { title: 'Idiomas', amount: '15' },
      { title: 'Avaliação', amount: '4.9 / 5' },
      { title: 'IA offline', amount: '100%' },
      { title: 'Abertura por atalho', amount: '<0.1s' },
    ],
    workflow: {
      title: 'Da tela ao compartilhamento em três passos.',
      alt: 'Fluxo de trabalho do Shotera',
      steps: [
        {
          title: 'Pressione o atalho',
          description:
            'Chame o Shotera em qualquer lugar e passe o mouse: a janela ou o elemento que você quer já está detectado.',
        },
        {
          title: 'Anote, extraia ou edite',
          description: 'Marque o que importa, rode OCR, recorte um assunto, traduza — na mesma janela.',
        },
        {
          title: 'Copie, salve ou fixe',
          description:
            'Envie para a área de transferência, salve no computador ou fixe na tela para consultar rapidamente.',
        },
      ],
    },
  },

  about: {
    metaDescription:
      'Conheça a equipe por trás do Shotera e os princípios que guiam cada atalho, cada seleção e cada captura.',
    hero: {
      tagline: 'Sobre nós',
      title: 'Capturas de tela',
      accent: 'tão boas que desaparecem',
      subtitle:
        'O Shotera começou com uma frustração simples: as capturas que fazemos dezenas de vezes por dia deveriam ser mais rápidas e fluidas. Somos uma equipe pequena de profissionais de produto e engenheiros que dependem de ferramentas de captura tanto quanto qualquer pessoa — e colocamos essa obsessão em cada atalho, cada seleção, cada quadro.',
      alt: 'Ferramentas de anotação do Shotera sobre uma área de trabalho do Windows',
    },
    stats: [
      { title: 'Idiomas', amount: '15' },
      { title: 'Avaliação', amount: '4.9 / 5' },
      { title: 'IA offline', amount: '100%' },
      { title: 'Abertura por atalho', amount: '<0.1s' },
    ],
    stand: {
      title: 'Nossos princípios',
      subtitle:
        'Quanto melhor a ferramenta, menos você a nota — essa ideia está por trás de cada decisão que tomamos.',
      items: [
        {
          title: 'Velocidade em primeiro lugar',
          description:
            'Um atalho para chamar, detecção automática de janelas e elementos e exatamente o enquadramento que você queria. Menos de um segundo entre a intenção e a captura.',
        },
        {
          title: 'Local em primeiro lugar, privado por padrão',
          description:
            'OCR, recorte e muito mais rodam no dispositivo sempre que possível. Suas capturas ficam fora da nuvem a menos que você permita.',
        },
        {
          title: 'Contenção por princípio',
          description:
            'Sem excesso de recursos e sem interromper seu fluxo. O que é comum está a um clique; o avançado aparece só quando você precisa.',
        },
      ],
    },
    toolbox: {
      title: '',
      subtitle: '',
      alt: 'Caixa de ferramentas do Shotera: captura, captura com rolagem, gravação, recorte com IA, OCR offline, tradução de imagens, fixação na tela e o visualizador de imagens',
      items: [
        {
          title: 'Captura',
          description:
            'Detecção inteligente de janelas e elementos: o enquadramento que você quer já vem selecionado, então quase nunca é preciso desenhar a caixa à mão.',
        },
        {
          title: 'Captura com rolagem',
          description:
            'Role uma página ou uma conversa longa e deixe o Shotera montar uma única imagem — rolagem automática ou manual, com prévia ao vivo.',
        },
        {
          title: 'Gravação de tela e GIF',
          description:
            'Grave a tela e exporte em GIF leve; os realces do cursor e as indicações de clique mantêm a demonstração clara.',
        },
        {
          title: 'Recorte com IA',
          description:
            'Detecte o assunto e remova o fundo com um clique, exportando PNGs transparentes. Sem Photoshop.',
        },
        {
          title: 'OCR offline',
          description:
            'Extraia texto de qualquer captura no seu dispositivo, em vários idiomas. Copie e cole — sem internet.',
        },
        {
          title: 'Tradução de imagens',
          description:
            'Reconheça e traduza textos dentro de qualquer imagem na hora — documentos, gráficos e interfaces em outro idioma ficam legíveis.',
        },
        {
          title: 'Fixar na tela',
          description:
            'Mantenha qualquer captura flutuando por cima para consulta, organizada lado a lado sem bagunça.',
        },
        {
          title: 'Visualizador de imagens',
          description:
            'Abra uma captura ou qualquer arquivo de imagem na própria janela do visualizador — navegue pela pasta, amplie e ajuste o que precisar.',
        },
      ],
    },
    values: {
      title: 'Nossos valores',
      subtitle:
        'Construir uma ferramenta e usá-la são a mesma coisa para nós. Trabalhamos todos os dias com o que criamos.',
      items: [
        {
          title: 'Feito para trabalho de verdade',
          description:
            'Cada recurso nasce de um problema real: escrever documentação, anotar especificações de design, gravar reproduções, ler material em outro idioma. Usamos primeiro e depois entregamos a você.',
        },
        {
          title: 'Sempre refinando',
          description:
            'A sensação dos atalhos, o encaixe nas bordas das seleções, tamanho versus nitidez na gravação — seguimos ajustando os detalhes até que fiquem certos.',
        },
        {
          title: 'Respeito pelo usuário',
          description:
            'Sem programas indesejados, sem pop-ups irritantes e sem enviar seus dados às escondidas. Os recursos principais continuam gratuitos — essa é a nossa promessa.',
        },
      ],
    },
    history: {
      title: 'Como chegamos até aqui',
      subtitle: 'De uma ferramenta que criamos para nós a uma que as pessoas usam todos os dias.',
      cta: 'Baixar o Shotera grátis',
      items: [
        {
          title: 'Começou de uma necessidade nossa',
          description:
            'Não encontrávamos uma ferramenta de captura rápida e fluida o bastante, então escrevemos a nossa.',
        },
        {
          title: 'Crescemos com nossos usuários',
          description:
            'Captura com rolagem, recorte com IA, OCR offline, tradução de imagens — muitos recursos vieram direto do feedback dos usuários.',
        },
        {
          title: 'Alcançando mais pessoas',
          description:
            'Hoje o Shotera fala 15 idiomas de interface e continua crescendo — com o mesmo objetivo: simplificar as capturas de tela.',
        },
      ],
    },
    contact: {
      title: 'Fale com a gente',
      tagline: 'Estamos sempre disponíveis',
      items: [
        {
          title: 'Comunidade',
          description:
            'Entre na comunidade do Shotera para acompanhar lançamentos e dicas, e falar diretamente com a gente.',
        },
        {
          title: 'Suporte por e-mail',
          description:
            'Encontrou um problema ou tem uma ideia de recurso? Escreva para mosuzo.studio@gmail.com — lemos e respondemos a todos.',
        },
      ],
    },
  },
};
