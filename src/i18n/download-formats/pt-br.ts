import type { DownloadFormatsContent } from '../download-formats-types';

export const ptBrFormats: DownloadFormatsContent = {
  tagline: 'Formatos de download',
  title: 'Qual arquivo devo baixar?',
  subtitle: 'O mesmo Shotera nos quatro formatos: só muda a forma de instalar e atualizar.',
  headers: ['Formato', 'Instalação e atualizações', 'Ideal para'],
  recommendLabel: 'Recomendado',
  rows: [
    { format: 'Instalador (.exe)', install: 'Instalação com assistente; atualiza-se pelo próprio app', bestFor: 'A escolha da maioria' },
    { format: 'Versão portátil (.7z)', install: 'Descompacte e use; atualiza-se pelo próprio app', bestFor: 'Para levar em um pendrive' },
    { format: 'Instalador MSI (.msi)', install: 'Clique duplo ou instalação silenciosa; atualiza-se pelo próprio app', bestFor: 'Implantação em massa na empresa' },
    { format: 'Microsoft Store', install: 'Instala e atualiza pela Store', bestFor: 'Sem preocupações: o sistema cuida disso' },
  ],
};
