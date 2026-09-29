import type { V3LocaleCopy } from './types';

/**
 * Brazilian Portuguese copy for the v3 pages. Terminology follows the Shotera
 * app's pt-BR language pack.
 */
export default {
  home: 'Shotera — Capturas de tela e gravação de tela mais rápidas e inteligentes',
  nav: {
    features: 'Recursos',
    versions: 'Versões',
    changelog: 'Novidades',
    about: 'Sobre',
    faq: 'Perguntas frequentes',
    menu: 'Menu',
    language: 'Idioma',
    cta: 'Baixar grátis',
  },
  hero: {
    badge: 'Novo',
    announce: 'Versão Lite: apenas ~17 MB para instalar',
    modes: [
      {
        key: 'capture',
        label: 'Captura',
        caption: 'Ao passar o mouse, janelas e elementos da interface são detectados — a região certa, de primeira.',
      },
      {
        key: 'long',
        label: 'Captura longa',
        caption: 'Páginas e conversas longas — unidas em uma única imagem, com rolagem automática ou manual.',
      },
      {
        key: 'pin',
        label: 'Fixar',
        caption: 'Fixe capturas por cima de tudo na tela — redimensione, deixe translúcida, compare lado a lado.',
      },
      {
        key: 'record',
        label: 'Gravar tela',
        caption: 'De 720p a 4K com alta taxa de quadros, cursor e cliques em destaque, exportação em MP4 ou GIF.',
      },
      {
        key: 'ai',
        label: 'AI',
        caption: 'Recorte com AI, apagamento com AI e OCR offline — tudo processado no seu dispositivo.',
      },
    ],
    h1: [
      [{ text: 'Capturas de tela, gravação de tela, ' }, { text: 'magia de AI', hl: true }],
      [{ text: 'tudo em um único atalho' }],
    ],
    sub: 'O Shotera é uma ferramenta de captura para desktop feita para quem passa o dia tirando capturas de tela: anote, capture páginas longas com rolagem, grave em GIF, recorte elementos com AI, use OCR offline, traduza imagens e fixe referências — sem sair do seu ritmo.',
    primary: 'Baixar grátis',
    secondary: 'Veja como funciona',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Instalador / versão portátil / MSI',
    store: 'Também disponível na Microsoft Store',
    shellMonitor: 'Carcaça de monitor em alumínio',
    shellLaptop: 'Carcaça de notebook',
  },
  download: {
    more: 'Mais opções de download',
    menu: 'Opções de download',
    edition: 'Shotera Standard',
    setup: 'Instalador (.exe)',
    portable: 'Versão portátil (.7z)',
    msi: 'Instalador MSI',
    store: 'Microsoft Store',
    setupTip: 'Dê um clique duplo para instalar. A escolha da maioria.',
    portableTip: 'Descompacte e use — pode ficar em um pendrive.',
    msiTip: 'Normalmente usado por administradores de TI para distribuir o app em vários computadores.',
    storeTip: 'A versão publicada na Microsoft Store, para quem prefere instalar apps por lá.',
    recommend: 'Recomendado',
    allVersions: 'Todas as versões no GitHub',
  },
  trust: [
    { value: '15', label: 'idiomas de interface' },
    { value: '4.9 / 5', label: 'avaliação dos usuários' },
    { value: '100%', label: 'AI no dispositivo' },
    { value: '<0.1s', label: 'para chamar' },
  ],
  modesSection: {
    bestFor: 'IDEAL PARA',
    eyebrow: 'Três fluxos do dia a dia',
    title: 'Um atalho para cada tarefa de captura',
    lead: 'Capturar, fixar, gravar e GIF — as três tarefas que você mais usa, em um único atalho.',
    cards: [
      {
        icon: 'capture',
        title: 'Captura',
        one: 'Região, janela ou tela cheia com uma única tecla — janelas e elementos da interface são detectados para você.',
        steps: ['Pressione o atalho', 'Passe o mouse e os limites se encaixam', 'Anote, copie ou salve'],
        bestFor: 'compartilhamento e documentação do dia a dia',
      },
      {
        icon: 'pin',
        title: 'Fixar na área de trabalho',
        one: 'Deixe uma captura flutuando por cima de tudo pelo tempo que precisar.',
        steps: [
          'Fixe logo após capturar',
          'Redimensione, deixe translúcida, compare',
          'Trabalhe sem alternar entre janelas',
        ],
        bestFor: 'consulta e comparação lado a lado',
      },
      {
        icon: 'record',
        title: 'Gravar tela & GIF',
        one: 'De 720p a 4K a 30 ou 60 fps, sem limite de duração da gravação.',
        steps: ['Escolha a região e grave', 'Mostre cursor e cliques', 'Exporte em MP4 ou GIF'],
        bestFor: 'tutoriais e relatos de bug',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Captura',
      title: 'Uma tecla para capturar, com o enquadramento exato',
      lead: 'Chame pelo atalho e capture, anote e copie em um movimento contínuo, sem interrupções.',
      rows: [
        'Passe o mouse e o Shotera detecta a janela ou o elemento sob o cursor',
        'Setas, retângulos, texto, numeração, emoji e lupa — anote no momento da captura',
        'Dois modos de conclusão: copiar direto para a área de transferência ou anotar na hora (Elegante / Anotação imediata)',
      ],
      items: [
        { title: 'Adesivos de emoji', note: 'diga mais com um clique' },
        { title: 'Lupa', note: 'amplie o detalhe que importa' },
        { title: 'Numeração', note: 'guie a ordem de leitura' },
        { title: 'Mosaico e marcador', note: 'privacidade e destaque' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Captura longa',
      title: 'Uma página maior que a tela, em uma só imagem',
      lead: 'Páginas longas, conversas longas e documentos inteiros — capturados de ponta a ponta em uma única imagem.',
      rows: [
        'Rolagem automática ou manual — cada quadro é capturado conforme você avança',
        'Quadros vizinhos são combinados e mesclados, então a imagem longa final fica sem emendas visíveis',
      ],
      items: [
        { title: 'Prévia da montagem ao vivo', note: 'pare quando a imagem estiver completa' },
        { title: 'Sem emendas visíveis', note: 'parece uma página contínua' },
        { title: 'Conversas longas', note: 'a conversa inteira em uma imagem' },
        { title: 'Copie ou salve', note: 'pronta para documentação e issues' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Fixar na área de trabalho',
      title: 'Fixe referências por cima e trabalhe ao lado delas',
      lead: 'Cole uma captura por cima de tudo — compare, consulte e continue trabalhando sem trocar de janela.',
      rows: [
        'Fixe uma captura no topo da tela sem interromper o que você está fazendo',
        'Redimensione por qualquer borda ou canto com a proporção travada; o clique duplo alterna entre o tamanho original e a miniatura',
      ],
      items: [
        { title: 'Várias capturas fixadas', note: 'compare lado a lado' },
        { title: 'Modo miniatura', note: 'clique duplo para encolher' },
        { title: 'Clique através da imagem', note: 'nunca bloqueia a janela atrás' },
        { title: 'Restaure a última imagem fixada', note: 'uma tecla traz de volta' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Gravar tela',
      title: 'Grave em 4K, pelo tempo que for preciso',
      lead: 'Transforme o “difícil de explicar” em um vídeo que qualquer pessoa acompanha.',
      rows: [
        '720p / 1080p / 2K / 4K a 30 ou 60 fps, sem limite de duração da gravação',
        'Coloque um GIF leve em documentação, conversas ou issues — não precisa de player',
      ],
      items: [
        { title: 'Cursor e cliques visíveis', note: 'cada passo fica claro' },
        { title: 'MP4 ou GIF', note: 'qualidade ou tamanho de arquivo, você decide' },
        { title: 'Pronto para 4K', note: 'feito para telas HiDPI' },
        { title: 'Histórico', note: 'encontre sua última gravação' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'Recursos de AI',
      title: 'AI que finaliza a captura para você',
      lead: 'Recorte com AI, apagamento com AI e OCR rodam localmente: inteligente, sem abrir mão da privacidade.',
      rows: [
        'Pessoas, produtos, logotipos: um PNG transparente em segundos — sem upload e sem esperar por um servidor',
        'O OCR roda no seu dispositivo e devolve texto editável e pronto para copiar com um clique',
      ],
      items: [
        { title: 'Recorte o assunto', note: 'fundo transparente com um clique' },
        { title: 'Apague o que não deveria estar ali', note: 'AI reconstrói o que estava atrás' },
        { title: 'OCR offline', note: 'idiomas misturados, código, tabelas' },
        { title: 'Tradução de imagens', note: 'leia capturas em outro idioma na hora' },
      ],
      image: 'ai',
    },
    {
      eyebrow: 'Dois modos de conclusão',
      title: 'Copie na hora ou anote na hora',
      lead: 'Elegante copia assim que você solta a seleção; Anotação imediata abre a barra na hora. Troque quando quiser em Configurações → Captura.',
      rows: [
        'Elegante — copiado na hora, com um cartão no canto inferior direito que abre o editor',
        'Anotação imediata — a barra aparece junto com a seleção; anote sem trocar de janela',
      ],
      image: 'modes',
      reversed: true,
    },
  ],
  cta: {
    eyebrow: 'Comece grátis',
    title: 'Deixe cada captura mais rápida e inteligente',
    lead: 'Download grátis, instalação em segundos. Passe o “tira um print aí” do dia a dia para uma ferramenta que entende do assunto.',
    primary: 'Baixar grátis',
    secondary: 'Mais versões',
    note: 'Versões Standard e Lite; Windows 10/11+. Disponível em instalador / versão portátil / MSI.',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Tem uma dúvida ou uma ideia? Fale com a gente.',
    lead: 'Encontrou um problema, quer um recurso novo ou só quer dar um oi — escolha o canal que preferir.',
    replyNote: 'Lemos o e-mail e o GitHub todos os dias; normalmente respondemos em até 24 horas úteis.',
    faqNote: 'Travou em alguma coisa? A maioria das respostas já está nas perguntas frequentes.',
    faqLink: 'Ver as perguntas frequentes',
    soon: 'Em breve',
    mail: {
      subject: 'Feedback do Shotera — ',
      body: [
        'Olá,',
        '',
        '(Descreva o problema que você encontrou ou o recurso que você tem em mente.)',
        '',
        '',
        'Se puder, estes detalhes nos ajudam a resolver mais rápido:',
        '',
        '\u00b7 Versão do Shotera (Lite / Standard):',
        '\u00b7 Versão do Windows:',
        '\u00b7 Passos para reproduzir:',
        '',
        'Obrigado!',
      ].join('\n'),
      copied: 'E-mail copiado — abrindo seu aplicativo de e-mail…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Fale com a gente',
        note: 'Lemos cada feedback com atenção.',
        channels: [
          {
            key: 'email',
            name: 'E-mail',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Suporte, licenciamento e parcerias.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Relatos de bug, sugestões de recursos e versões anteriores.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Converse com outros usuários do Shotera.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Siga a gente',
        note: 'Notas de versão, dicas e bastidores.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Notas de versão e dicas rápidas.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Tutoriais e demonstrações dos recursos.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Anúncios de lançamento.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Capturas de tela e gravação de tela mais rápidas e inteligentes — fixadas, anotadas e entendidas em um único atalho.',
    cols: [
      {
        title: 'Produto',
        links: [
          { text: 'Recursos', path: '/', hash: 'features' },
          { text: 'Versões', path: '/versions' },
        ],
      },
      {
        title: 'Suporte',
        links: [
          { text: 'Perguntas frequentes', path: '/faq' },
          { text: 'Novidades', path: '/changelog' },
        ],
      },
      {
        title: 'Sobre',
        links: [
          { text: 'Sobre nós', path: '/about' },
          { text: 'Contato', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Termos', path: '/terms' },
      { text: 'Privacidade', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 idiomas de interface',
  },
} satisfies V3LocaleCopy;
