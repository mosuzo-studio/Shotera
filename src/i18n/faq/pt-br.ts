import type { FaqContent } from '../faq-types';

/**
 * Brazilian Portuguese FAQ copy. Structure mirrors the English page; wording
 * follows the app's pt-BR language pack.
 */
export const content: FaqContent = {
  metaTitle: 'Perguntas frequentes',
  metaDescription:
    'Respostas curtas sobre o Shotera: quais plataformas e idiomas de interface ele suporta, o que funciona offline, o que continua gratuito, como funcionam exportação e desempenho, e os detalhes como temas e atalhos.',
  title: 'Perguntas frequentes',
  lead: 'Plataformas, idiomas, privacidade offline, versões, exportação e detalhes — a resposta curta.',
  groups: [
    {
      id: 'platform',
      label: 'Plataforma e idiomas',
      items: [
        {
          q: 'Quais sistemas operacionais o Shotera suporta?',
          a: 'No momento, o Shotera é compatível com o Windows para desktop: o instalador é pequeno e abre rápido, e funciona offline — baixe e comece a usar na hora. macOS, Linux e outras plataformas estão no roteiro.',
        },
        {
          q: 'Quais idiomas de interface o Shotera suporta?',
          a: 'O Shotera agora oferece suporte a chinês tradicional, japonês, português (Brasil), espanhol, alemão, francês, italiano, coreano, russo, árabe, holandês, polonês e sueco. Com o inglês e o chinês simplificado, são 15 idiomas de interface.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Offline e privacidade',
      items: [
        {
          q: 'O OCR e o recorte com AI precisam de conexão com a internet?',
          a: 'Não. O reconhecimento de texto (OCR), o recorte com AI e o apagamento com AI rodam totalmente offline no seu dispositivo — nada é enviado, e seus dados ficam privados. A tradução de imagens usa APIs na nuvem e segue as políticas de privacidade dos respectivos provedores de nuvem.',
        },
        {
          q: 'Consigo usar o Shotera sem nenhuma conexão?',
          a: 'Sim. Captura, anotação, gravação de tela, OCR, recorte com AI, apagamento com AI e o visualizador de imagens funcionam offline, e nada do que você captura sai do seu computador. A tradução de imagens é o único recurso que chama uma API na nuvem, então precisa de conexão.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Versões, exportação e desempenho',
      items: [
        {
          q: 'O Shotera é gratuito?',
          a: 'Captura, anotação e fixação na área de trabalho são gratuitas para sempre. Se você só precisa de captura e anotação no dia a dia, o Shotera Lite é uma opção mais leve — ele deixa de fora a gravação de tela e os recursos de AI. Gravação de tela, recorte com AI, apagamento com AI e tradução de imagens fazem parte da versão Standard — veja a comparação de versões para mais detalhes.',
        },
        {
          q: 'Quais resoluções e taxas de quadros as gravações podem usar?',
          a: 'A qualidade da gravação vai de 720p a 1080p, 2K e 4K, a 30 fps ou 60 fps — sem limite de duração. Exporte para MP4 ou para um GIF cuja taxa de quadros você pode reduzir para manter o arquivo pequeno.',
        },
        {
          q: 'As gravações podem ser exportadas como GIF?',
          a: 'Sim. Exporte qualquer gravação para MP4 — de 720p a 4K, a 30 ou 60 fps — ou para um GIF compacto, ideal para documentação, chat e relatos de bug. Nenhuma das opções limita a duração da gravação.',
        },
        {
          q: 'O Shotera deixa meu computador lento?',
          a: 'Não. O Shotera foi feito para se manter leve: uso mínimo de memória e inicialização instantânea, imperceptível mesmo rodando em segundo plano.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Detalhes e personalização',
      items: [
        {
          q: 'O Shotera tem modo escuro?',
          a: 'Sim. Em Configurações → Geral → Tema da interface, você alterna entre Seguir o sistema, Claro e Escuro; a opção Seguir o sistema acompanha automaticamente o modo claro/escuro do Windows.',
        },
        {
          q: 'Ele funciona com vários monitores e telas de alta resolução?',
          a: 'Sim. Vários monitores são tratados como uma única área de trabalho contínua, então uma tela secundária posicionada à esquerda da principal continua sendo selecionada corretamente — e a interface e as capturas permanecem nítidas em telas de alto DPI.',
        },
        {
          q: 'Posso alterar os atalhos de teclado?',
          a: 'Sim. Captura, captura personalizada, fixação e modo de apresentação podem ser alterados em Configurações → Atalhos; se outro programa já estiver usando uma tecla, o Shotera avisa, e você pode restaurar todos os padrões com um clique.',
        },
        {
          q: 'Como faço para atualizar para uma nova versão?',
          a: 'O Shotera se atualiza sozinho: por padrão, verifica atualizações ao iniciar, pode baixar e instalar em segundo plano, ou você pode verificar manualmente em Configurações → Atualização. A versão da Microsoft Store se mantém atualizada pela própria loja.',
        },
      ],
    },
  ],
  footnoteBefore: 'Ainda tem dúvidas?',
  footnoteLink: 'Fale com a gente',
  footnoteAfter: ' — normalmente respondemos em até 24 horas úteis.',
};
