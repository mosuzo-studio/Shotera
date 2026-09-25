import type { LocalizedLocale } from './site-content';

/**
 * Localized copy for the versions comparison page (`/xx/versions`).
 *
 * Feature names mirror the Shotera app's own UI catalogs (modebar / toolbar /
 * settings), so the table reads the same as the app in every language.
 * The English and Simplified Chinese pages live in `src/pages` and are the
 * source of truth for this content.
 */

export interface VersionsGroup {
  title: string;
  /** Support flags for [Lite, full edition]. */
  support: [boolean, boolean];
  rows: string[];
}

export interface VersionsPageContent {
  metaTitle: string;
  metaDescription: string;
  hero: { tagline: string; title: string; subtitle: string };
  section: { title: string; subtitle: string };
  cards: {
    lite: { title: string; tagline: string; badge: string; description: string; cta: string };
    standard: { title: string; tagline: string; description: string; cta: string };
  };
  table: {
    featureHeader: string;
    includedLabel: string;
    excludedLabel: string;
    groups: VersionsGroup[];
  };
  note: string;
  footnote: string;
}

export const versionsContent: Record<LocalizedLocale, VersionsPageContent> = {
  'zh-tw': {
    metaTitle: '版本對比',
    metaDescription: '對比 Shotera Lite 版與完整版的功能差異與定位，幫你選到合適的版本。',
    hero: {
      tagline: '版本對比',
      title: 'Lite 還是完整版？選最適合你的那一款',
      subtitle:
        '兩個版本共享同一套截圖與繪圖標註體驗：Lite 版更輕量，完整版補齊 AI、圖片翻譯、錄製螢幕、GIF 錄製、QR Code 辨識與長截圖等能力。',
    },
    section: {
      title: '兩個版本，各有所長',
      subtitle: 'Lite 與完整版的所有差異，一眼看清。',
    },
    cards: {
      lite: {
        title: 'Shotera Lite 版',
        tagline: '輕量精簡版',
        badge: '新',
        description: '輕量精簡版本，專注截圖與基礎繪圖標註，不含 AI、錄製螢幕與長截圖等進階能力。',
        cta: '下載 Lite 版',
      },
      standard: {
        title: 'Shotera 完整版',
        tagline: '完整能力版本',
        description: '完整能力版本：AI 去背、擦除、離線 OCR、圖片翻譯，以及錄製螢幕、GIF 錄製、QR Code 辨識與長截圖。',
        cta: '下載完整版',
      },
    },
    table: {
      featureHeader: '功能',
      includedLabel: '包含',
      excludedLabel: '不包含',
      groups: [
        {
          title: '基礎功能 · 兩版都有',
          support: [true, true],
          rows: ['截圖（區域 / 視窗 / 全螢幕）', '釘在桌面', '獨立編輯視窗'],
        },
        {
          title: '標註工具 · 兩版都有',
          support: [true, true],
          rows: [
            '矩形 / 橢圓',
            '直線 / 箭頭',
            '畫筆',
            '螢光筆',
            '馬賽克 / 模糊',
            '文字',
            '編號',
            '表情貼圖',
            '放大鏡',
            '橡皮擦',
          ],
        },
        {
          title: 'AI 能力 · 僅完整版',
          support: [false, true],
          rows: ['AI 去背', 'AI 擦除', '圖片翻譯（線上）', '離線 OCR（擷取文字）', 'AI 能力設定（模型切換、翻譯服務）'],
        },
        {
          title: '進階能力 · 僅完整版',
          support: [false, true],
          rows: ['錄製螢幕', 'GIF 錄製', 'QR Code 辨識', '長截圖（捲動截圖）'],
        },
      ],
    },
    note: '註：Lite 版安裝檔僅約 17 MB。',
    footnote: '目前仍處於預發布階段，兩者差異請以最終正式發佈為準。',
  },
  ja: {
    metaTitle: 'バージョン比較',
    metaDescription: 'Shotera Lite版とフル版の機能差と位置づけを比較して、あなたに合うバージョンを選べます。',
    hero: {
      tagline: 'バージョン比較',
      title: 'Lite版とフル版、あなたに合うのはどっち？',
      subtitle:
        '両バージョンは同じスクリーンショットと注釈の操作感を共有します。Lite版はより軽量で、フル版は AI、画像翻訳、画面録画、GIF 録画、QR コード認識、長尺キャプチャなどを追加します。',
    },
    section: {
      title: '2つのバージョン、それぞれの強み',
      subtitle: 'Lite版とフル版の違いがひと目でわかります。',
    },
    cards: {
      lite: {
        title: 'Shotera Lite版',
        tagline: '軽量エディション',
        badge: '新',
        description:
          '軽量なエディション。スクリーンショットと基本的な注釈に絞り、AI や画面録画、長尺キャプチャなどの高度な機能は含みません。',
        cta: 'Lite版をダウンロード',
      },
      standard: {
        title: 'Shotera フル版',
        tagline: 'フル機能エディション',
        description:
          'フル機能エディション：AI 切り抜き、AI 消去、オフライン OCR、画像翻訳に加え、画面録画、GIF 録画、QR コード認識、長尺キャプチャを搭載。',
        cta: 'フル版をダウンロード',
      },
    },
    table: {
      featureHeader: '機能',
      includedLabel: '対応',
      excludedLabel: '未対応',
      groups: [
        {
          title: '基本機能 · 両バージョン共通',
          support: [true, true],
          rows: ['スクリーンショット（範囲 / ウインドウ / 全画面）', '画面に固定', '独立エディターウインドウ'],
        },
        {
          title: '注釈ツール · 両バージョン共通',
          support: [true, true],
          rows: [
            '四角形 / 楕円',
            '直線 / 矢印',
            'ペン',
            '蛍光ペン',
            'モザイク / ぼかし',
            'テキスト',
            '連番',
            '絵文字ステッカー',
            'ルーペ',
            '消しゴム',
          ],
        },
        {
          title: 'AI 機能 · フル版のみ',
          support: [false, true],
          rows: [
            'AI 切り抜き',
            'AI 消去',
            '画像翻訳（オンライン）',
            'オフライン OCR（テキスト抽出）',
            'AI 設定（モデル切り替え、翻訳サービス）',
          ],
        },
        {
          title: '高度な機能 · フル版のみ',
          support: [false, true],
          rows: ['画面録画', 'GIF 録画', 'QR コード認識', '長尺キャプチャ（スクロールキャプチャ）'],
        },
      ],
    },
    note: '注：Lite版のインストーラーは約 17 MB です。',
    footnote: '現在はプレリリース段階です。両バージョンの違いは最終リリースを基準にしてください。',
  },
  'pt-br': {
    metaTitle: 'Versões',
    metaDescription: 'Compare o Shotera Lite e a versão completa: o que cada edição inclui e qual combina com você.',
    hero: {
      tagline: 'Versões',
      title: 'Lite ou versão completa? Escolha a que combina com você',
      subtitle:
        'As duas versões compartilham a mesma experiência de captura e anotação. A Lite é mais leve; a versão completa adiciona AI, tradução de imagens, gravação de tela, GIF, leitura de QR Code e captura longa.',
    },
    section: {
      title: 'Duas versões, cada uma com seus pontos fortes',
      subtitle: 'Todas as diferenças entre a Lite e a versão completa, num relance.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Edição leve',
        badge: 'Novo',
        description: 'Versão leve, focada em captura e anotação básica — sem AI, gravação de tela e captura longa.',
        cta: 'Baixar Lite',
      },
      standard: {
        title: 'Shotera Versão completa',
        tagline: 'Edição completa',
        description:
          'Edição completa: recorte e apagamento com AI, OCR offline, tradução de imagens, além de gravação de tela, GIF, leitura de QR Code e captura longa.',
        cta: 'Baixar versão completa',
      },
    },
    table: {
      featureHeader: 'Recurso',
      includedLabel: 'Incluído',
      excludedLabel: 'Não incluído',
      groups: [
        {
          title: 'Recursos básicos · Nas duas versões',
          support: [true, true],
          rows: [
            'Captura (região / janela / tela inteira)',
            'Fixar na área de trabalho',
            'Janela de edição independente',
          ],
        },
        {
          title: 'Ferramentas de anotação · Nas duas versões',
          support: [true, true],
          rows: [
            'Retângulo / Elipse',
            'Linha / Seta',
            'Pincel',
            'Marcador',
            'Mosaico / Desfoque',
            'Texto',
            'Numeração',
            'Adesivos de emoji',
            'Lupa',
            'Borracha',
          ],
        },
        {
          title: 'Recursos de AI · Somente versão completa',
          support: [false, true],
          rows: [
            'Recorte com AI',
            'Apagar com AI',
            'Tradução de imagens (online)',
            'OCR offline (extrair texto)',
            'Configurações de AI (troca de modelo, serviço de tradução)',
          ],
        },
        {
          title: 'Recursos avançados · Somente versão completa',
          support: [false, true],
          rows: ['Gravar tela', 'Gravar GIF', 'Ler QR Code', 'Captura longa (rolagem)'],
        },
      ],
    },
    note: 'Nota: o instalador da Lite tem apenas cerca de 17 MB.',
    footnote: 'Ainda em pré-lançamento — as diferenças entre as versões estão sujeitas ao lançamento final.',
  },
  es: {
    metaTitle: 'Versiones',
    metaDescription: 'Compara Shotera Lite y la versión completa: qué incluye cada edición y cuál encaja contigo.',
    hero: {
      tagline: 'Versiones',
      title: '¿Lite o versión completa? Elige la que mejor te encaje',
      subtitle:
        'Ambas versiones comparten la misma experiencia de captura y anotación. La Lite es más ligera; la versión completa añade IA, traducción de imágenes, grabación de pantalla, GIF, lectura de código QR y captura larga.',
    },
    section: {
      title: 'Dos versiones, cada una con sus ventajas',
      subtitle: 'Todas las diferencias entre Lite y la versión completa, de un vistazo.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Edición ligera',
        badge: 'Nuevo',
        description:
          'Versión ligera centrada en la captura y la anotación básica, sin IA, grabación de pantalla ni captura larga.',
        cta: 'Descargar Lite',
      },
      standard: {
        title: 'Shotera Versión completa',
        tagline: 'Edición completa',
        description:
          'Edición completa: recorte y borrado con IA, OCR sin conexión, traducción de imágenes, además de grabación de pantalla, GIF, lectura de código QR y captura larga.',
        cta: 'Descargar versión completa',
      },
    },
    table: {
      featureHeader: 'Función',
      includedLabel: 'Incluido',
      excludedLabel: 'No incluido',
      groups: [
        {
          title: 'Funciones básicas · En ambas versiones',
          support: [true, true],
          rows: [
            'Captura (región / ventana / pantalla completa)',
            'Fijar en el escritorio',
            'Ventana de edición independiente',
          ],
        },
        {
          title: 'Herramientas de anotación · En ambas versiones',
          support: [true, true],
          rows: [
            'Rectángulo / elipse',
            'Línea / flecha',
            'Pincel',
            'Resaltador',
            'Mosaico / desenfoque',
            'Texto',
            'Numeración',
            'Pegatinas emoji',
            'Lupa',
            'Borrador',
          ],
        },
        {
          title: 'Funciones de IA · Solo versión completa',
          support: [false, true],
          rows: [
            'Recorte con IA',
            'Borrado con IA',
            'Traducción de imágenes (en línea)',
            'OCR sin conexión (extraer texto)',
            'Ajustes de IA (cambio de modelo, servicio de traducción)',
          ],
        },
        {
          title: 'Funciones avanzadas · Solo versión completa',
          support: [false, true],
          rows: ['Grabar pantalla', 'Grabar GIF', 'Leer código QR', 'Captura larga (desplazamiento)'],
        },
      ],
    },
    note: 'Nota: el instalador de Lite pesa solo unos 17 MB.',
    footnote: 'Aún en fase de prelanzamiento: las diferencias entre versiones están sujetas al lanzamiento final.',
  },
  de: {
    metaTitle: 'Versionen',
    metaDescription: 'Vergleiche Shotera Lite und die Vollversion: Was jede Edition bietet und welche zu dir passt.',
    hero: {
      tagline: 'Versionen',
      title: 'Lite oder Vollversion? Wähle die passende Edition',
      subtitle:
        'Beide Versionen teilen dieselbe Aufnahme- und Anmerkungserfahrung. Lite ist schlanker; die Vollversion ergänzt AI, Bildübersetzung, Bildschirmaufnahme, GIF, QR-Code-Erkennung und lange Screenshots.',
    },
    section: {
      title: 'Zwei Versionen, jede mit ihren Stärken',
      subtitle: 'Alle Unterschiede zwischen Lite und Vollversion auf einen Blick.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Leichte Edition',
        badge: 'Neu',
        description:
          'Schlanke Version für Screenshots und grundlegende Anmerkungen — ohne AI, Bildschirmaufnahme und lange Screenshots.',
        cta: 'Lite herunterladen',
      },
      standard: {
        title: 'Shotera Vollversion',
        tagline: 'Voll ausgestattete Edition',
        description:
          'Voll ausgestattete Edition: AI-Freistellen, AI-Radierer, Offline-OCR, Bildübersetzung sowie Bildschirmaufnahme, GIF, QR-Code-Erkennung und lange Screenshots.',
        cta: 'Vollversion herunterladen',
      },
    },
    table: {
      featureHeader: 'Funktion',
      includedLabel: 'Enthalten',
      excludedLabel: 'Nicht enthalten',
      groups: [
        {
          title: 'Basisfunktionen · In beiden Versionen',
          support: [true, true],
          rows: ['Screenshot (Bereich / Fenster / Vollbild)', 'Auf Desktop anheften', 'Eigenes Editor-Fenster'],
        },
        {
          title: 'Anmerkungswerkzeuge · In beiden Versionen',
          support: [true, true],
          rows: [
            'Rechteck / Ellipse',
            'Linie / Pfeil',
            'Pinsel',
            'Textmarker',
            'Mosaik / Unschärfe',
            'Text',
            'Nummerierung',
            'Emoji-Sticker',
            'Lupe',
            'Radiergummi',
          ],
        },
        {
          title: 'AI-Funktionen · Nur Vollversion',
          support: [false, true],
          rows: [
            'AI-Freistellen',
            'AI-Radierer',
            'Bildübersetzung (online)',
            'Offline-OCR (Text extrahieren)',
            'AI-Einstellungen (Modellwechsel, Übersetzungsdienst)',
          ],
        },
        {
          title: 'Erweiterte Funktionen · Nur Vollversion',
          support: [false, true],
          rows: ['Bildschirmaufnahme', 'GIF-Aufnahme', 'QR-Code-Erkennung', 'Langer Screenshot (Scrollen)'],
        },
      ],
    },
    note: 'Hinweis: Der Lite-Installer ist nur etwa 17 MB groß.',
    footnote:
      'Noch in der Vorabphase — die Unterschiede zwischen den Versionen richten sich nach der finalen Veröffentlichung.',
  },
  fr: {
    metaTitle: 'Versions',
    metaDescription:
      'Comparez Shotera Lite et la version complète : ce que chaque édition propose et laquelle vous convient.',
    hero: {
      tagline: 'Versions',
      title: 'Lite ou version complète ? Choisissez celle qui vous convient',
      subtitle:
        "Les deux versions partagent la même expérience de capture et d'annotation. Lite est plus légère ; la version complète ajoute AI, la traduction d'images, l'enregistrement d'écran, le GIF, la lecture de QR Code et la longue capture.",
    },
    section: {
      title: 'Deux versions, chacune ses atouts',
      subtitle: "Toutes les différences entre Lite et la version complète, en un coup d'œil.",
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Édition légère',
        badge: 'Nouveau',
        description:
          "Version légère dédiée à la capture et à l'annotation de base — sans AI, enregistrement d'écran ni longue capture.",
        cta: 'Télécharger Lite',
      },
      standard: {
        title: 'Shotera Version complète',
        tagline: 'Édition complète',
        description:
          "Édition complète : détourage et effacement AI, OCR hors ligne, traduction d'images, plus enregistrement d'écran, GIF, lecture de QR Code et longue capture.",
        cta: 'Télécharger la version complète',
      },
    },
    table: {
      featureHeader: 'Fonctionnalité',
      includedLabel: 'Inclus',
      excludedLabel: 'Non inclus',
      groups: [
        {
          title: 'Fonctions de base · Dans les deux versions',
          support: [true, true],
          rows: ['Capture (région / fenêtre / plein écran)', 'Épingler au bureau', "Fenêtre d'édition autonome"],
        },
        {
          title: "Outils d'annotation · Dans les deux versions",
          support: [true, true],
          rows: [
            'Rectangle / Ellipse',
            'Ligne / Flèche',
            'Pinceau',
            'Surligneur',
            'Mosaïque / Flou',
            'Texte',
            'Numérotation',
            'Autocollants emoji',
            'Loupe',
            'Gomme',
          ],
        },
        {
          title: 'Fonctions AI · Version complète uniquement',
          support: [false, true],
          rows: [
            'Détourage AI',
            'Effacement AI',
            "Traduction d'images (en ligne)",
            'OCR hors ligne (extraire le texte)',
            'Réglages AI (changement de modèle, service de traduction)',
          ],
        },
        {
          title: 'Fonctions avancées · Version complète uniquement',
          support: [false, true],
          rows: ["Enregistrement d'écran", 'Enregistrement GIF', 'Lecture de QR Code', 'Longue capture (défilement)'],
        },
      ],
    },
    note: "Remarque : l'installateur Lite ne pèse qu'environ 17 Mo.",
    footnote: 'Encore en pré-lancement — les différences entre versions dépendent de la version finale.',
  },
  it: {
    metaTitle: 'Versioni',
    metaDescription: 'Confronta Shotera Lite e la versione completa: cosa include ogni edizione e quale fa per te.',
    hero: {
      tagline: 'Versioni',
      title: 'Lite o versione completa? Scegli quella giusta per te',
      subtitle:
        'Entrambe le versioni condividono la stessa esperienza di cattura e annotazione. Lite è più leggera; la versione completa aggiunge AI, traduzione immagini, registrazione schermo, GIF, lettura codice QR e screenshot lungo.',
    },
    section: {
      title: 'Due versioni, ognuna con i suoi punti di forza',
      subtitle: "Tutte le differenze tra Lite e versione completa, a colpo d'occhio.",
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Edizione leggera',
        badge: 'Nuovo',
        description:
          'Versione leggera dedicata a cattura e annotazione di base — senza AI, registrazione schermo e screenshot lungo.',
        cta: 'Scarica Lite',
      },
      standard: {
        title: 'Shotera Versione completa',
        tagline: 'Edizione completa',
        description:
          'Edizione completa: scontorno e cancellazione AI, OCR offline, traduzione immagini, oltre a registrazione schermo, GIF, lettura codice QR e screenshot lungo.',
        cta: 'Scarica versione completa',
      },
    },
    table: {
      featureHeader: 'Funzione',
      includedLabel: 'Incluso',
      excludedLabel: 'Non incluso',
      groups: [
        {
          title: 'Funzioni di base · In entrambe le versioni',
          support: [true, true],
          rows: [
            'Screenshot (regione / finestra / schermo intero)',
            'Fissa sul desktop',
            'Finestra di modifica separata',
          ],
        },
        {
          title: 'Strumenti di annotazione · In entrambe le versioni',
          support: [true, true],
          rows: [
            'Rettangolo / Ellisse',
            'Linea / Freccia',
            'Pennello',
            'Evidenziatore',
            'Mosaico / Sfocatura',
            'Testo',
            'Numerazione',
            'Adesivi emoji',
            "Lente d'ingrandimento",
            'Gomma',
          ],
        },
        {
          title: 'Funzioni AI · Solo versione completa',
          support: [false, true],
          rows: [
            'Scontorno AI',
            'Cancellazione AI',
            'Traduzione immagini (online)',
            'OCR offline (estrai testo)',
            'Impostazioni AI (cambio modello, servizio di traduzione)',
          ],
        },
        {
          title: 'Funzioni avanzate · Solo versione completa',
          support: [false, true],
          rows: ['Registra schermo', 'Registrazione GIF', 'Lettura codice QR', 'Screenshot lungo (scorrimento)'],
        },
      ],
    },
    note: "Nota: l'installer di Lite pesa solo circa 17 MB.",
    footnote: 'Ancora in pre-release — le differenze tra le versioni sono soggette alla release finale.',
  },
  ko: {
    metaTitle: '버전 비교',
    metaDescription: 'Shotera Lite 버전과 전체 버전의 기능 차이를 비교하고 나에게 맞는 버전을 선택하세요.',
    hero: {
      tagline: '버전 비교',
      title: 'Lite 버전과 전체 버전, 어떤 걸 선택할까요?',
      subtitle:
        '두 버전은 동일한 캡처·주석 경험을 공유합니다. Lite 버전은 더 가볍고, 전체 버전은 AI, 이미지 번역, 화면 녹화, GIF, QR 코드 인식, 스크롤 캡처를 추가로 제공합니다.',
    },
    section: {
      title: '두 버전, 각자의 강점',
      subtitle: 'Lite 버전과 전체 버전의 모든 차이를 한눈에 확인하세요.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite 버전',
        tagline: '경량 에디션',
        badge: '신규',
        description:
          '캡처와 기본 주석에 집중한 경량 버전으로, AI·화면 녹화·스크롤 캡처 등의 고급 기능은 포함하지 않습니다.',
        cta: 'Lite 버전 다운로드',
      },
      standard: {
        title: 'Shotera 전체 버전',
        tagline: '전체 기능 에디션',
        description:
          '전체 기능 에디션: AI 배경 제거·지우기, 오프라인 OCR, 이미지 번역은 물론 화면 녹화, GIF, QR 코드 인식, 스크롤 캡처까지 제공합니다.',
        cta: '전체 버전 다운로드',
      },
    },
    table: {
      featureHeader: '기능',
      includedLabel: '지원',
      excludedLabel: '미지원',
      groups: [
        {
          title: '기본 기능 · 두 버전 모두 포함',
          support: [true, true],
          rows: ['스크린샷(영역 / 창 / 전체 화면)', '바탕 화면에 고정', '독립 편집 창'],
        },
        {
          title: '주석 도구 · 두 버전 모두 포함',
          support: [true, true],
          rows: [
            '사각형 / 타원',
            '직선 / 화살표',
            '펜',
            '형광펜',
            '모자이크 / 블러',
            '텍스트',
            '번호',
            '이모지 스티커',
            '돋보기',
            '지우개',
          ],
        },
        {
          title: 'AI 기능 · 전체 버전 전용',
          support: [false, true],
          rows: [
            'AI 배경 제거',
            'AI 지우기',
            '이미지 번역(온라인)',
            '오프라인 OCR(텍스트 추출)',
            'AI 설정(모델 전환, 번역 서비스)',
          ],
        },
        {
          title: '고급 기능 · 전체 버전 전용',
          support: [false, true],
          rows: ['화면 녹화', 'GIF 녹화', 'QR 코드 인식', '스크롤 캡처(긴 이미지)'],
        },
      ],
    },
    note: '참고: Lite 버전 설치 파일은 약 17MB에 불과합니다.',
    footnote: '아직 사전 출시 단계이며, 두 버전의 차이는 최종 정식 출시를 기준으로 합니다.',
  },
  ru: {
    metaTitle: 'Версии',
    metaDescription: 'Сравните Shotera Lite и полную версию: что входит в каждую и какая подходит вам.',
    hero: {
      tagline: 'Версии',
      title: 'Lite или полная версия? Выберите подходящую',
      subtitle:
        'Обе версии используют один и тот же набор инструментов захвата и аннотаций. Lite легче; полная версия добавляет AI, перевод изображений, запись экрана, GIF, распознавание QR-кодов и длинные снимки.',
    },
    section: {
      title: 'Две версии — у каждой свои сильные стороны',
      subtitle: 'Все различия между Lite и полной версией — с первого взгляда.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Лёгкая версия',
        badge: 'Новинка',
        description: 'Лёгкая версия для захвата и базовых аннотаций — без AI, записи экрана и длинных снимков.',
        cta: 'Скачать Lite',
      },
      standard: {
        title: 'Shotera Полная версия',
        tagline: 'Полнофункциональная версия',
        description:
          'Полнофункциональная версия: AI-удаление фона, AI-стирание, офлайн-OCR, перевод изображений, а также запись экрана, GIF, распознавание QR-кодов и длинные снимки.',
        cta: 'Скачать полную версию',
      },
    },
    table: {
      featureHeader: 'Возможность',
      includedLabel: 'Есть',
      excludedLabel: 'Нет',
      groups: [
        {
          title: 'Базовые функции · В обеих версиях',
          support: [true, true],
          rows: ['Снимок (область / окно / весь экран)', 'Закрепить на рабочем столе', 'Отдельное окно редактора'],
        },
        {
          title: 'Инструменты аннотаций · В обеих версиях',
          support: [true, true],
          rows: [
            'Прямоугольник / эллипс',
            'Линия / стрелка',
            'Кисть',
            'Маркер',
            'Мозаика / размытие',
            'Текст',
            'Нумерация',
            'Наклейки-эмодзи',
            'Лупа',
            'Ластик',
          ],
        },
        {
          title: 'AI-функции · Только полная версия',
          support: [false, true],
          rows: [
            'AI-удаление фона',
            'AI-стирание',
            'Перевод изображений (онлайн)',
            'Офлайн-OCR (извлечь текст)',
            'Настройки AI (смена модели, служба перевода)',
          ],
        },
        {
          title: 'Дополнительные функции · Только полная версия',
          support: [false, true],
          rows: ['Запись экрана', 'Запись GIF', 'Распознавание QR-кода', 'Длинный снимок (прокрутка)'],
        },
      ],
    },
    note: 'Примечание: установщик Lite занимает всего около 17 МБ.',
    footnote: 'Пока идёт предрелизная стадия — различия между версиями могут измениться к финальному релизу.',
  },
  ar: {
    metaTitle: 'الإصدارات',
    metaDescription: 'قارن بين نسخة Shotera Lite والنسخة الكاملة: ما تتضمنه كل نسخة وأيها يناسبك.',
    hero: {
      tagline: 'الإصدارات',
      title: 'نسخة Lite أم النسخة الكاملة؟ اختر ما يناسبك',
      subtitle:
        'تشترك النسختان في تجربة الالتقاط والتعليق نفسها. نسخة Lite أخف، بينما تضيف النسخة الكاملة ميزات الذكاء الاصطناعي وترجمة الصور وتسجيل الشاشة وGIF وقراءة رمز QR واللقطة الطويلة.',
    },
    section: {
      title: 'نسختان، ولكل منهما مزاياها',
      subtitle: 'كل الفروق بين نسخة Lite والنسخة الكاملة في لمحة.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'نسخة خفيفة',
        badge: 'جديد',
        description:
          'نسخة خفيفة تركز على الالتقاط والتعليق الأساسي، دون ميزات الذكاء الاصطناعي أو تسجيل الشاشة أو اللقطة الطويلة.',
        cta: 'تنزيل Lite',
      },
      standard: {
        title: 'Shotera النسخة الكاملة',
        tagline: 'نسخة كاملة الميزات',
        description:
          'نسخة كاملة الميزات: إزالة الخلفية ومحو بالذكاء الاصطناعي، وOCR دون اتصال، وترجمة الصور، إضافة إلى تسجيل الشاشة وGIF وقراءة رمز QR واللقطة الطويلة.',
        cta: 'تنزيل النسخة الكاملة',
      },
    },
    table: {
      featureHeader: 'الميزة',
      includedLabel: 'متوفر',
      excludedLabel: 'غير متوفر',
      groups: [
        {
          title: 'ميزات أساسية · في كلا النسختين',
          support: [true, true],
          rows: ['لقطة شاشة (منطقة / نافذة / الشاشة كاملة)', 'تثبيت على سطح المكتب', 'نافذة تحرير مستقلة'],
        },
        {
          title: 'أدوات التعليق · في كلا النسختين',
          support: [true, true],
          rows: [
            'مستطيل / بيضاوي',
            'خط / سهم',
            'قلم',
            'قلم تحديد',
            'فسيفساء / تمويه',
            'نص',
            'ترقيم',
            'ملصقات إيموجي',
            'مكبّر',
            'ممحاة',
          ],
        },
        {
          title: 'ميزات الذكاء الاصطناعي · في النسخة الكاملة فقط',
          support: [false, true],
          rows: [
            'إزالة الخلفية بالذكاء الاصطناعي',
            'محو بالذكاء الاصطناعي',
            'ترجمة الصور (عبر الإنترنت)',
            'OCR دون اتصال (استخراج النص)',
            'إعدادات الذكاء الاصطناعي (تبديل الطراز، خدمة الترجمة)',
          ],
        },
        {
          title: 'ميزات متقدمة · في النسخة الكاملة فقط',
          support: [false, true],
          rows: ['تسجيل الشاشة', 'تسجيل GIF', 'قراءة رمز QR', 'لقطة طويلة (تمرير)'],
        },
      ],
    },
    note: 'ملاحظة: حجم مثبِّت نسخة Lite نحو 17 ميجابايت فقط.',
    footnote: 'لا تزال المرحلة تجريبية — تخضع الفروق بين النسختين للإصدار النهائي.',
  },
  nl: {
    metaTitle: 'Versies',
    metaDescription: 'Vergelijk Shotera Lite en de volledige versie: wat elke editie biedt en welke bij je past.',
    hero: {
      tagline: 'Versies',
      title: 'Lite of volledige versie? Kies wat bij je past',
      subtitle:
        'Beide versies delen dezelfde capture- en annotatie-ervaring. Lite is lichter; de volledige versie voegt AI, beeldvertaling, schermopname, GIF, QR-code scannen en lange schermafbeelding toe.',
    },
    section: {
      title: 'Twee versies, elk met eigen sterke punten',
      subtitle: 'Alle verschillen tussen Lite en de volledige versie in één oogopslag.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Lichte editie',
        badge: 'Nieuw',
        description:
          'Lichte versie voor capture en basisannotatie — zonder AI, schermopname en lange schermafbeelding.',
        cta: 'Lite downloaden',
      },
      standard: {
        title: 'Shotera Volledige versie',
        tagline: 'Volledige editie',
        description:
          'Volledige editie: AI-uitsnede, AI-gum, offline OCR, beeldvertaling, plus schermopname, GIF, QR-code scannen en lange schermafbeelding.',
        cta: 'Volledige versie downloaden',
      },
    },
    table: {
      featureHeader: 'Functie',
      includedLabel: 'Inbegrepen',
      excludedLabel: 'Niet inbegrepen',
      groups: [
        {
          title: 'Basisfuncties · In beide versies',
          support: [true, true],
          rows: [
            'Schermafbeelding (gebied / venster / volledig scherm)',
            'Vastpinnen op bureaublad',
            'Losstaand editorvenster',
          ],
        },
        {
          title: 'Annotatietools · In beide versies',
          support: [true, true],
          rows: [
            'Rechthoek / ellips',
            'Lijn / pijl',
            'Penseel',
            'Markeerstift',
            'Mozaïek / vervaging',
            'Tekst',
            'Nummering',
            'Emoji-stickers',
            'Loep',
            'Gum',
          ],
        },
        {
          title: 'AI-functies · Alleen volledige versie',
          support: [false, true],
          rows: [
            'AI-uitsnede',
            'AI-gum',
            'Beeldvertaling (online)',
            'Offline OCR (tekst extraheren)',
            'AI-instellingen (modelwissel, vertaaldienst)',
          ],
        },
        {
          title: 'Geavanceerde functies · Alleen volledige versie',
          support: [false, true],
          rows: ['Schermopname', 'GIF-opname', 'QR-code scannen', 'Lange schermafbeelding (scrollen)'],
        },
      ],
    },
    note: 'Let op: de Lite-installer is slechts ongeveer 17 MB.',
    footnote:
      'Nog in de pre-releasefase — verschillen tussen versies zijn onder voorbehoud van de definitieve release.',
  },
  pl: {
    metaTitle: 'Wersje',
    metaDescription: 'Porównaj Shotera Lite i pełną wersję: co zawiera każda edycja i która jest dla Ciebie.',
    hero: {
      tagline: 'Wersje',
      title: 'Lite czy pełna wersja? Wybierz tę, która Ci odpowiada',
      subtitle:
        'Obie wersje mają ten sam zestaw narzędzi do przechwytywania i adnotacji. Lite jest lżejsza; pełna wersja dodaje AI, tłumaczenie obrazów, nagrywanie ekranu, GIF, rozpoznawanie kodów QR i długie zrzuty.',
    },
    section: {
      title: 'Dwie wersje, każda z własnymi atutami',
      subtitle: 'Wszystkie różnice między Lite a pełną wersją na pierwszy rzut oka.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Lekka edycja',
        badge: 'Nowość',
        description:
          'Lekka wersja skupiona na przechwytywaniu i podstawowych adnotacjach — bez AI, nagrywania ekranu i długich zrzutów.',
        cta: 'Pobierz Lite',
      },
      standard: {
        title: 'Shotera Pełna wersja',
        tagline: 'Pełna wersja',
        description:
          'Pełna wersja: wycinanie i wymazywanie AI, OCR offline, tłumaczenie obrazów oraz nagrywanie ekranu, GIF, rozpoznawanie kodów QR i długie zrzuty.',
        cta: 'Pobierz pełną wersję',
      },
    },
    table: {
      featureHeader: 'Funkcja',
      includedLabel: 'Dostępne',
      excludedLabel: 'Niedostępne',
      groups: [
        {
          title: 'Funkcje podstawowe · W obu wersjach',
          support: [true, true],
          rows: ['Zrzut ekranu (obszar / okno / pełny ekran)', 'Przypnij do pulpitu', 'Osobne okno edytora'],
        },
        {
          title: 'Narzędzia adnotacji · W obu wersjach',
          support: [true, true],
          rows: [
            'Prostokąt / Elipsa',
            'Linia / Strzałka',
            'Pędzel',
            'Zakreślacz',
            'Mozaika / Rozmycie',
            'Tekst',
            'Numeracja',
            'Naklejki emoji',
            'Lupa',
            'Gumka',
          ],
        },
        {
          title: 'Funkcje AI · Tylko pełna wersja',
          support: [false, true],
          rows: [
            'Wycinanie AI',
            'Wymazywanie AI',
            'Tłumaczenie obrazów (online)',
            'OCR offline (wyodrębnij tekst)',
            'Ustawienia AI (zmiana modelu, usługa tłumaczenia)',
          ],
        },
        {
          title: 'Funkcje zaawansowane · Tylko pełna wersja',
          support: [false, true],
          rows: ['Nagrywanie ekranu', 'Nagrywanie GIF', 'Rozpoznawanie QR', 'Długi zrzut (przewijanie)'],
        },
      ],
    },
    note: 'Uwaga: instalator Lite waży tylko około 17 MB.',
    footnote: 'Wciąż na etapie przedpremierowym — różnice między wersjami mogą się zmienić do finalnego wydania.',
  },
  sv: {
    metaTitle: 'Versioner',
    metaDescription: 'Jämför Shotera Lite och fullversionen: vad varje version innehåller och vilken som passar dig.',
    hero: {
      tagline: 'Versioner',
      title: 'Lite eller fullversion? Välj den som passar dig',
      subtitle:
        'Båda versionerna delar samma upplevelse för skärmbilder och anteckningar. Lite är lättare; fullversionen lägger till AI, bildöversättning, skärminspelning, GIF, QR-kodsläsning och rullande skärmbild.',
    },
    section: {
      title: 'Två versioner, var och en med sina styrkor',
      subtitle: 'Alla skillnader mellan Lite och fullversionen i ett ögonkast.',
    },
    cards: {
      lite: {
        title: 'Shotera Lite',
        tagline: 'Lättviktig version',
        badge: 'Ny',
        description:
          'Lättviktig version för skärmbilder och grundläggande anteckningar — utan AI, skärminspelning och rullande skärmbild.',
        cta: 'Ladda ner Lite',
      },
      standard: {
        title: 'Shotera Fullversion',
        tagline: 'Fullutrustad version',
        description:
          'Fullutrustad version: AI-frilägg, AI-radering, offline-OCR, bildöversättning samt skärminspelning, GIF, QR-kodsläsning och rullande skärmbild.',
        cta: 'Ladda ner fullversionen',
      },
    },
    table: {
      featureHeader: 'Funktion',
      includedLabel: 'Ingår',
      excludedLabel: 'Ingår inte',
      groups: [
        {
          title: 'Basfunktioner · I båda versionerna',
          support: [true, true],
          rows: ['Skärmbild (område / fönster / helskärm)', 'Fäst på skrivbordet', 'Fristående redigeringsfönster'],
        },
        {
          title: 'Anteckningsverktyg · I båda versionerna',
          support: [true, true],
          rows: [
            'Rektangel / ellips',
            'Linje / pil',
            'Pensel',
            'Överstrykningspenna',
            'Mosaik / oskärpa',
            'Text',
            'Numrering',
            'Emoji-klistermärken',
            'Förstoringsglas',
            'Suddgummi',
          ],
        },
        {
          title: 'AI-funktioner · Endast fullversion',
          support: [false, true],
          rows: [
            'AI-frilägg',
            'AI-radering',
            'Bildöversättning (online)',
            'Offline-OCR (extrahera text)',
            'AI-inställningar (modellbyte, översättningstjänst)',
          ],
        },
        {
          title: 'Avancerade funktioner · Endast fullversion',
          support: [false, true],
          rows: ['Skärminspelning', 'GIF-inspelning', 'QR-kodsläsning', 'Rullande skärmbild (skrollning)'],
        },
      ],
    },
    note: 'Obs: Lite-installationsprogrammet är bara cirka 17 MB.',
    footnote:
      'Fortfarande i förhandsversion — skillnaderna mellan versionerna gäller med reservation för den slutliga utgåvan.',
  },
};
