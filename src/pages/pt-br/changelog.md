---
title: 'Atualizações'
layout: '~/layouts/MarkdownLayout.astro'
---

# Notas de versão do Shotera – todas as versões (português do Brasil)

**📫 Feedback**

Configurações → Sobre → Feedback e sugestões

**🔗 Índice de versões**

<ul class="version-index">
  <li><a href="#shotera-v770">v7.7.0</a></li>
  <li><a href="#shotera-v760">v7.6.0</a></li>
  <li><a href="#shotera-v751">v7.5.1</a></li>
  <li><a href="#shotera-v750">v7.5.0</a></li>
  <li><a href="#shotera-v742">v7.4.2</a></li>
  <li><a href="#shotera-v741">v7.4.1</a></li>
  <li><a href="#shotera-v740">v7.4.0</a></li>
  <li><a href="#shotera-v731">v7.3.1</a></li>
  <li><a href="#shotera-v730">v7.3.0</a></li>
  <li><a href="#shotera-v722">v7.2.2</a></li>
  <li><a href="#shotera-v721">v7.2.1</a></li>
  <li><a href="#shotera-v720">v7.2.0</a></li>
  <li><a href="#shotera-v710">v7.1.0</a></li>
  <li><a href="#shotera-v700">v7.0.0</a></li>
</ul>

---

## Shotera v7.7.0

**Lançamento:** 2026-09-24

Versão Lite, captura longa, fixações redimensionáveis e builds mais leves.

**🆚 Lite vs. versão completa:** veja a [comparação de versões](/pt-br/versions) para as diferenças de recursos.

**✨ Novidades**

- Versão Lite adicionada: instalador de 17MB com os recursos essenciais de captura e anotação. O banner de atualização nas configurações leva à versão completa no site.
- [Site oficial](https://shotera.mosuzo.com/) atualizado, com conteúdo e estilo renovados.
- Captura longa adicionada (prévia, testes beta): modos de rolagem automática e manual, com janela de pré-visualização em tempo real. O algoritmo inteligente de costura detecta os limites superiores e lida com layouts mistos. Dicas de orientação guiam o primeiro uso. Entre no grupo de testes para experimentar.
- Melhorias na janela de fixação: o duplo clique alterna entre o tamanho original e o modo miniatura + fechar. Arraste as bordas ou os cantos para redimensionar mantendo a proporção travada. O menu de contexto nativo ultrapassa os limites da janela. A visibilidade da barra de ferramentas é mantida entre sessões ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- O modelo de recorte com AI passou a ser o u2netp integrado, com desempenho instantâneo. O rmbg-1.4 agora é baixado sob demanda, com orientação no primeiro uso.
- Comando de impressão adicionado ao editor: o menu de contexto e o menu Arquivo abrem a caixa de diálogo de impressão do sistema ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- O menu de contexto do editor pode abrir a pasta que contém o arquivo com o arquivo atual destacado ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Melhorias**

- Tamanho do build reduzido em 20%: compactação do instalador e configurações do compilador otimizadas. Perfil FastBuild adicionado para iterações mais rápidas.
- Consumo de memória de base reduzido.
- A barra de título do editor mostra dinamicamente o nome do arquivo da imagem atual.
- Notificação de atualização concluída simplificada para logo + texto + botão, sem prévia grande.
- Fluxo de integração refinado: o guia de 8 páginas passou a ser acessado pelo cartão de convite no canto inferior direito. A janela de apresentação de recursos para depois de ser fechada 3 vezes. O recorte com AI mostra orientação no primeiro uso.
- A tradução de imagens com AI avisa quando o resultado é igual à entrada e indica as configurações de idioma. O aviso pode ser desativado em Configurações → Recursos de AI.
- Nome de arquivo padrão de capturas, capturas longas e saída do editor unificado em `Shotera_YYYYMMDD_HHMMSS`.
- A miniatura da notificação de captura longa recorta a parte superior da tela em vez de espremer a imagem inteira.

**🐞 Correções de bugs**

- Corrigido o posicionamento inicial da janela de anotação em configurações com dois monitores.
- Corrigidos erros de cálculo da proporção e tremores na moldura ao arrastar para redimensionar a janela fixada.
- Corrigido o comportamento de duplo clique, que não era aplicado após a seleção e não voltava ao tamanho original.
- Corrigida a caixa de diálogo de falha na costura da captura longa, que era bloqueada pelas regras de clique através da janela.
- Corrigidas barras de rolagem fantasma e a exibição de zoom em 0% ou 1% após carregar imagens no editor.
- Corrigido o nome de arquivo duplicado exibido na barra de título do editor.

**🙏 Agradecimentos**

Obrigado aos membros da comunidade que relataram problemas e sugeriram recursos que moldaram esta versão. As melhorias da captura longa e da janela de fixação foram motivadas pelo retorno dos usuários.

---

## Shotera v7.6.0

**Lançamento:** 2026-09-21

Janela de novidades, leitura de QR Code, reprodução de GIF e mais formatos de imagem.

**✨ Novidades**

- Janela de novidades adicionada na inicialização: ela compara os dois modos de conclusão de captura, mostra onde fica a leitura de QR Code e convida você a avaliar o Shotera. Marque «Não mostrar novamente» ou clique em «Entendi» três vezes para que ela pare de aparecer.
- Leitura de QR Code adicionada: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF e UPCA, além do GS1 Digital Link. O painel de resultados é redimensionável e arrastável, com histórico numerado.
- Abre PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF e TIFF (tif/tiff). SVG, ICO, AVIF e TIFF são novos nesta versão. Abra pelo menu Arquivo ou arraste imagens para dentro.
- Reprodução de animação GIF adicionada. A barra de status e o painel de informações da imagem mostram a contagem de quadros e a duração total.
- Painel de informações da imagem adicionado: dimensões, formato, DPI, modo de cor, profundidade de bits, dados EXIF de captura e verificação de privacidade de tags de autor e GPS. Abra pelo menu Arquivo, pelo clique com o botão direito na tela, pela barra de status ou por Ctrl+I.
- A barra de status mostra o nível de zoom, as dimensões da imagem, o tamanho do arquivo e o caminho do arquivo. A exibição do caminho tem três modos: Oculto, Navegação estrutural e Caminho completo.
- A barra de título do editor mostra o nome da imagem atual. O menu de contexto da tela abre a pasta que contém o arquivo com a imagem atual destacada ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Diálogo de confirmação antes de sobrescrever um arquivo ao salvar. Marque «Não perguntar novamente» para ignorá-lo depois.
- Janelas de fixação: oculte a barra de ferramentas do canto superior direito pelo menu de contexto; a configuração é lembrada ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Melhorias**

- A barra de modos superior voltou a ser exibida, com as entradas Captura e QR Code.
- A renderização de imagens grandes no editor foi refeita — carregar e ampliar agora é suave e fluido.
- O zoom com Ctrl + roda do mouse agora é ancorado no cursor, e não no centro da tela.
- Atalhos de zoom adicionados: Ctrl+=, Ctrl+- e Ctrl+0.
- O zoom e a movimentação não empurram mais a imagem completamente para fora da área visível.
- As imagens do editor ganham uma sombra suave, e o modo claro usa uma tela branca pura.
- Lupa do seletor de cores redesenhada: moldura quadrada de traço duplo, borda do painel mais justa, amostra quadrada e cor do retículo refinada.
- O menu Ajuda abre o site diretamente.
- A tradução de imagens com AI avisa quando o resultado é igual ao original (normalmente quando o idioma de destino é igual ao de origem) e indica a configuração de idioma. Desative o aviso em Configurações → Recursos de AI.
- O momento do pedido de avaliação foi reformulado: agora ele aparece após a primeira captura em cada versão e, depois, no máximo uma vez por mês.

**🐞 Correções de bugs**

- Corrigidas barras de rolagem fantasma e a leitura errada de 0% ou 1% de zoom após carregar uma imagem.
- Corrigido o menu suspenso «Arquivo» do editor, que era cortado na borda da janela.
- Corrigidas capturas acionadas inesperadamente quando o app inicia com o Windows.
- Corrigido o modo de conclusão de captura nas configurações, que não era atualizado quando alterado na janela de novidades.

**🙏 Agradecimentos**

Obrigado a @korenevskiy e @NewJon27 pelas sugestões de recursos que moldaram esta versão.

A leitura de QR Code foi adicionada em resposta ao retorno de Horihons.

---

## Shotera v7.5.1

**Lançamento:** 2026-09-14

Modo de captura elegante, fixação instantânea e atalhos de cópia.

**✨ Novidades**

- Modo de captura «Elegante» adicionado: selecione a região, pronto. Imagem copiada com prévia na notificação. Sem sobreposição. Compatível com o modo escuro ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Atalho F3 de fixação instantânea adicionado durante ou após a captura. Personalizável em Configurações → Atalhos ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Ctrl+C adicionado para copiar a captura e fechar a sobreposição em uma única etapa.
- Duplo clique adicionado para confirmar a captura imediatamente.
- Clique com o botão direito adicionado para cancelar a captura.
- Opção «Extrair texto automaticamente após a captura» adicionada em Configurações → Captura.
- A barra de título da janela do editor segue o tema do sistema.

**🚀 Melhorias**

- «Salvar como» do editor usa carimbos de data e hora dinâmicos nos nomes de arquivo.
- Atalho Ctrl+Shift+S para «Salvar como».
- O menu da bandeja e o título da janela do editor agora são localizados.

**🐞 Correções de bugs**

- Corrigida a falha do OCR em caminhos de instalação que não estão em inglês.
- Corrigida a redução de resolução das fixações em telas de alto DPI.
- Corrigido o F3 criando fixações duplicadas a partir da seleção e da área de transferência.
- Corrigida a versão da Microsoft Store que não mostrava a notificação no modo «Elegante».
- Corrigido o clique na notificação da versão da Microsoft Store disparando uma captura extra.
- Corrigido o ponto vermelho do botão de atualização que persistia após a atualização.

**🙏 Agradecimentos**

Obrigado a @Const-me, @LightQuanta e @wherewhere pelas sugestões de recursos que moldaram esta versão.

---

## Shotera v7.5.0

**Lançamento:** 2026-09-12

Editor de imagens completo, modos de captura e suporte estendido de CPU.

**✨ Novidades**

- Editor de imagens completo adicionado em uma janela separada, pelo item «Editar Imagem…» da bandeja. Compatível com abrir/salvar/salvar como, arrastar e soltar, zoom de 10% a 400% com Ctrl + roda do mouse, ferramentas de anotação, OCR, recorte com AI e borracha com AI.
- Estilo de seta afilada «Seta normal» adicionado à sub-barra de ferramentas de setas.
- Configuração «Modo de conclusão da captura» adicionada: escolha «Elegante» para copiar a seleção com prévia na notificação (clicar abre o editor) ou mantenha o padrão «Anotação imediata».
- Configurações «Extrair texto automaticamente após a captura» e «Ocultar entradas de AI» adicionadas.
- O idioma de destino da tradução segue o idioma da interface.

**🚀 Melhorias**

- Suporte de CPU estendido para Intel de 3ª geração (Ivy Bridge) e anteriores. Recursos de AI indisponíveis em CPUs mais antigas, com diálogo explicativo.
- Janela de orientação autodesenhada no canto inferior direito quando as notificações do Windows estão desativadas.
- A borracha agora apaga setas/linhas e mostra o cursor de borracha.
- Barra de ferramentas principal incorporada à barra de menus, sempre visível. A barra secundária não empurra mais a imagem.
- Copiar no editor não fecha mais a janela nem limpa a seleção. O ✕ vermelho limpa a imagem.
- A página Captura nas configurações sinaliza novos recursos com um ponto vermelho.

**🐞 Correções de bugs**

- Corrigido o travamento do app na inicialização em CPUs sem suporte a AVX2.
- Corrigida a falha do OCR com caminhos de instalação em chinês ou em outros idiomas que não o inglês.
- Corrigidas imagens com caracteres não ASCII no caminho que não carregavam ao serem arrastadas.
- Corrigida a janela do editor que às vezes não carregava a captura a partir da notificação.
- Corrigido o recorte/borracha com AI deixando imagens deslocadas e faixas não limpas.
- Corrigida a barra de status do editor que não era atualizada após carregar a imagem.
- Corrigido o deslocamento dos destaques da extração de texto no editor.
- Corrigido o desvio para baixo dos carimbos de número/emoji ao redimensionar.

**🗑️ Removido**

- Menus Editar e Exibir da barra de menus do editor.

---

## Shotera v7.4.2

**Lançamento:** 2026-09-07

Feedback no app, instalador em 22 idiomas e melhorias de desempenho.

**✨ Novidades**

- Formulário de feedback no app adicionado em Configurações → Sobre, para avaliações, sugestões e pesquisas.
- Suporte de idiomas do instalador NSIS ampliado de 2 para 22 idiomas.

**🚀 Melhorias**

- Desempenho de anotação melhorado, com desenho mais fluido.
- A granularidade de detecção agora usa «Detectar elemento da interface» por padrão.
- As alças de seleção só aparecem quando a seleção é grande o suficiente.
- A entrada de feedback em Sobre usa um ícone clicável.
- Texto revisado para um tom mais limpo.
- Fluxo de interação melhorado ao abrir a página de atualização a partir da notificação.

**🐞 Correções de bugs**

- Corrigidas sobreposições de anotação aparecendo no monitor errado.
- Corrigida a detecção de elementos que redefinia as camadas de destaque ao mover entre elementos.
- Corrigido o início automático que parava de funcionar após atualizar a versão da Microsoft Store.

**🗑️ Removido**

- Entrada «Guia de recursos» e o texto de dica de modo.

---

## Shotera v7.4.1

**Lançamento:** 2026-09-04

Comparação de modelos, nomenclatura consistente e ajuda embutida.

**✨ Novidades**

- Tabela de comparação de modelos adicionada: o ícone de ajuda ao lado de «Modelo de recorte com AI» abre uma tabela que compara os quatro modelos por tamanho, velocidade, qualidade e caso de uso.
- Nomenclatura de modelos consistente no formato «Modelo · Característica», ordenada do menor para o maior.
- Ajuda embutida para a tradução de imagens: a descrição passou para a dica ao passar o mouse no ícone de ajuda.

---

## Shotera v7.4.0

**Lançamento:** 2026-09-03

Redesign da experiência de atualização, suporte à Microsoft Store e correções de AI.

**✨ Novidades**

- Experiência de atualização redesenhada, com lógica de atualização e interface de configurações otimizadas. Instalação automática em ociosidade, quatro modos de atualização e frequência de lembretes mais inteligente.
- Compatibilidade da versão da Microsoft Store melhorada e início automático com o Windows corrigido.

**🐞 Correções de bugs**

- Corrigido o modelo de recorte com AI que era baixado novamente a cada verificação.
- Aceleração por espelho na China adicionada (shotera-ai.pages.dev), com retorno automático para o Hugging Face.

---

## Shotera v7.3.1

**Lançamento:** 2026-08-29

Suporte ao modo escuro.

**✨ Novidades**

- Suporte ao modo escuro adicionado: escolha Claro, Escuro ou Seguir o sistema nas configurações. Todas as janelas são atualizadas instantaneamente, sem reiniciar.

---

## Shotera v7.3.0

**Lançamento:** 2026-08-23

OCR automático, cópia parcial e destaque vinculado.

**✨ Novidades**

- OCR automático: o texto é extraído assim que a região é selecionada. A seleção continua editável, com reextração automática.
- Cópia parcial: arraste sobre o texto reconhecido e pressione Ctrl+C para copiar apenas essa parte. Aparece no histórico da área de transferência do Windows.
- Destaque vinculado: ao selecionar texto na imagem original, os caracteres correspondentes são destacados no painel de resultados, caractere por caractere.
- Sobreposição sensível à ferramenta: a camada de texto permanece interativa quando nenhuma ferramenta de anotação está ativa e é ocultada quando uma ferramenta é selecionada.
- Localização: chinês tradicional, japonês, coreano, português (Brasil), espanhol, alemão, francês, italiano, russo, árabe, holandês, polonês e sueco agora cobrem as configurações de tradução de imagens.

**🐞 Correções de bugs**

- Corrigido «Extrair texto» abrindo o painel de resultados diretamente após o OCR automático.
- Corrigido o cancelamento da ferramenta de anotação, que não bloqueava as formas desenhadas.
- Corrigido o botão «Pular» invisível no guia de primeira execução.

---

## Shotera v7.2.2

**Lançamento:** 2026-08-20

Provedores de tradução de imagens, teste de chave e correções de alto DPI.

**✨ Novidades**

- Cada serviço agora é um cartão recolhível: Tradução de Imagens Baidu (V2.0 alta precisão / V1 clássico) e Youdao Translate (99 idiomas).
- O Baidu funciona pronto para uso, com cota integrada. APP ID/Secret personalizados aumentam o limite.
- Memória de idioma armazenada por provedor.
- «Testar chave» adicionado para verificar a credencial com uma solicitação real.

**🐞 Correções de bugs**

- Corrigidos os links da documentação da API dos provedores, que agora abrem corretamente.
- Corrigido o arraste da seleção usando o caminho de entrada de ponteiro de alta frequência.
- Corrigidas as coordenadas de seleção em alto DPI, convertidas pelo sistema de coordenadas da cena.
- Corrigida a sobreposição de captura congelada em vários monitores com DPI misto, alinhada às coordenadas nativas da área de trabalho virtual.

---

## Shotera v7.2.1

**Lançamento:** 2026-08-18

Captura para a área de transferência e barras de ferramentas móveis.

**✨ Novidades**

- Captura direta para a área de transferência adicionada: pressione Alt+C ou escolha «Capturar e copiar» no menu da bandeja para pular a anotação. A captura vai para a área de transferência.
- Alça de arraste de seis pontos restaurada nas barras de ferramentas de anotação principal e secundária. Visibilidade configurável nas configurações.

---

## Shotera v7.2.0

**Lançamento:** 2026-08-02

Início de captura mais rápido, captura personalizada e 15 idiomas.

**✨ Novidades**

- Início de captura muito mais rápido: o caminho de captura/anotação reutiliza e pré-aquece a janela de anotação, evitando o gargalo de decodificação da imagem. O tempo médio do atalho até a seleção caiu 68,2% nos testes com dois monitores.
- Fluxo de captura personalizada adicionado: abra com o atalho padrão Alt+F1 ou pelo menu da bandeja. Defina a posição X/Y exata e a largura/altura, trave a proporção, troque a orientação e adicione atraso. Salve predefinições de tamanho reutilizáveis, com restauração automática do último valor usado. Coordenadas de vários monitores (incluindo posições negativas) e tamanhos de até 40000 pixels são compatíveis.
- 15 idiomas de interface adicionados: chinês tradicional, japonês, português (Brasil), espanhol, alemão, francês, italiano, coreano, russo, árabe, holandês, polonês e sueco. As mudanças de idioma são aplicadas imediatamente em janelas abertas e na bandeja, sem reiniciar. O árabe inclui layout completo da direita para a esquerda.

**🚀 Melhorias**

- Saída da captura mais limpa, com os flashes da seleção antiga e a imagem residual da janela inteira removidos.
- Reconhecimento mais rápido de controles aninhados, com menos saltos.
- Controles da barra de tarefas e ícones/textos de navegação do Explorador de Arquivos miráveis com mais precisão.
- Árvores de acessibilidade do Chromium e do Electron pré-aquecidas e repetidas quando necessário.
- A transferência de imagens pela área de transferência usa um caminho RGBA mais direto.
- Alt+T para fixar e Ctrl+S para salvar funcionam com a região selecionada.
- Ativos dos modelos de AI restaurados. Os pacotes portáteis incluem os arquivos de modelo necessários.

---

## Shotera v7.1.0

**Lançamento:** 2026-07-29

Detecção de janelas, ferramentas de anotação e fixações aprimoradas.

**✨ Novidades**

- Detecção de janelas e controles melhorada, com seleção mais fácil de alvos aninhados.
- Lupa de captura refinada, com bordas mais nítidas, alças de redimensionamento maiores e retículo melhorado.
- Suporte adicionado para formas, setas, texto, adesivos, marcadores e lupa local.
- Edição melhorada, com redimensionamento, rotação, estilo e desfazer/refazer mais fluidos.
- Layout da barra de ferramentas atualizado.
- Fixações sempre no topo aprimoradas, com suporte a mover, redimensionar, girar, virar, opacidade e clique através.
- Melhor compatibilidade com a área de transferência.
- Entrada das ferramentas de AI e botões da barra de ferramentas restaurados.
- Entradas do guia de recursos restauradas.
- Modo de apresentação melhorado.
- Gerenciamento de atalhos, canais de atualização e persistência de configurações melhorados.
- Licença bilíngue no instalador MSI.
- As capturas permanecem totalmente locais. Não é necessária conta.

---

## Shotera v7.0.0

**Lançamento:** 2026-07-23

Capture o que importa. Explique com clareza. Mantenha à vista.

**✨ Novidades**

- Fluxo rápido de captura com a tecla F1, detecção de janelas/controles e lupa na tela.
- Ferramentas de anotação: retângulos, elipses, linhas, setas, caneta livre, marcador, texto formatado, numeração automática de etapas, mosaico/desfoque, adesivos de emoji e lupa local.
- F3 cria fixações sempre no topo a partir de capturas ou do conteúdo da área de transferência. As fixações suportam mover, redimensionar, girar, virar e transparência.
- O modo de apresentação ajuda a preparar uma área de trabalho mais limpa antes de capturas/reuniões, ocultando ícones e aplicando predefinições de tema/papel de parede.

**🚀 Melhorias**

- Experiência mais consistente, com retorno de seleção mais claro.
- Alças de redimensionamento visíveis.
- Lupa de captura mais limpa.
- Barras de ferramentas de anotação alinhadas.
- Edição de texto refinada.
- Integração inicial melhorada.
- Configurações confiáveis.
- Instalação mais fluida no Windows.
