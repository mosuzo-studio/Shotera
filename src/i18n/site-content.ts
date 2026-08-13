import type { Locale } from './locales';

export type LocalizedLocale = Exclude<Locale, 'en' | 'zh-cn'>;

export interface LocalizedSiteContent {
  storeLanguage: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroAccent: string;
  heroSubtitle: string;
  philosophy: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: Array<{ title: string; description: string }>;
  workflowTitle: string;
  workflow: string[];
  privacyTitle: string;
  privacyText: string;
  privacyLink: string;
  faqTitle: string;
  faqs: Array<{ title: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  moreVersions: string;
  storeAria: string;
  pages: {
    about: [string, string];
    contact: [string, string];
    pricing: [string, string];
    services: [string, string];
    changelog: [string, string];
    notFound: [string, string];
  };
  scenarios: Record<string, [string, string]>;
  labels: {
    learnMore: string;
    backHome: string;
    free: string;
    pro: string;
    freeText: string;
    proText: string;
    contactText: string;
    releaseText: string;
    features: string;
    pricing: string;
    blog: string;
    about: string;
    product: string;
    support: string;
    company: string;
    terms: string;
    privacy: string;
    screenshot: string;
    recording: string;
    cutout: string;
    ocr: string;
    translation: string;
    pin: string;
    download: string;
    faq: string;
    changelog: string;
    feedback: string;
    tagline: string;
    newLabel: string;
    announcement: string;
  };
}

const scenarioKeys = [
  'homes/mobile-app',
  'homes/personal',
  'homes/saas',
  'homes/startup',
  'landing/click-through',
  'landing/lead-generation',
  'landing/pre-launch',
  'landing/product',
  'landing/sales',
  'landing/subscription',
] as const;

const scenarios = (titles: string[], descriptions: string[]): Record<string, [string, string]> =>
  Object.fromEntries(scenarioKeys.map((key, index) => [key, [titles[index], descriptions[index]]])) as Record<
    string,
    [string, string]
  >;

export const localizedSiteContent: Record<LocalizedLocale, LocalizedSiteContent> = {
  'zh-tw': {
    storeLanguage: 'zh-tw',
    metaTitle: 'Shotera — 更快、更聰明的螢幕擷取與錄製工具',
    metaDescription: '為 Windows 打造的智慧截圖、螢幕錄製、AI 影像處理、離線 OCR、圖片翻譯與桌面釘選工具。',
    heroTitle: '截圖、錄影，',
    heroAccent: 'AI 影像處理',
    heroSubtitle:
      'Shotera 把日常需要的擷取、標註、GIF 錄製、離線 OCR、圖片翻譯與桌面釘選整合在一個流暢的 Windows 工作流程中。',
    philosophy: '快速、精準、不打斷思緒——讓每一次擷取都恰到好處。',
    featuresTitle: '一套工具，完成每種螢幕擷取工作',
    featuresSubtitle: '從快速截圖到清楚說明問題，常用工具都在手邊。',
    features: [
      { title: '智慧精準擷取', description: '自動辨識視窗與介面元素，並以像素級控制微調範圍。' },
      { title: '專業標註', description: '使用箭頭、文字、步驟編號、放大細節與模糊效果清楚表達。' },
      { title: 'AI 影像編輯', description: '快速去背或移除不需要的內容，減少來回切換工具。' },
      { title: '離線 OCR', description: '直接在裝置上擷取可複製文字，不必上傳截圖。' },
      { title: '圖片翻譯', description: '在擷取流程中辨識並翻譯圖片裡的文字。' },
      { title: '桌面釘選與簡報模式', description: '將參考資料保持在最上層，簡報前也能快速清理桌面。' },
    ],
    workflowTitle: '專注且順手的 Windows 工作流程',
    workflow: [
      '按 F1 開始擷取區域、視窗、介面元素或全螢幕。',
      '用智慧偵測與放大鏡精準調整邊界。',
      '直接標註、遮蔽、辨識、翻譯或使用 AI 工具。',
      '儲存、分享，或按 F3 將內容釘在桌面參考。',
    ],
    privacyTitle: '隱私與掌控',
    privacyText: '截圖儲存在本機，離線 OCR 直接在裝置上執行。法律文件目前以英文正式版本為準。',
    privacyLink: '閱讀英文隱私權政策',
    faqTitle: '常見問題',
    faqs: [
      { title: 'Shotera 支援哪些 Windows 版本？', answer: '目前以實際發布頁面列出的 Windows 版本與系統需求為準。' },
      { title: '基本功能需要付費嗎？', answer: '基本版本功能可永久免費使用；部分進階能力需要升級 Pro。' },
      { title: 'OCR 會上傳截圖嗎？', answer: '離線 OCR 在裝置上處理文字擷取，不需要上傳截圖。' },
    ],
    ctaTitle: '讓下一張截圖更快完成',
    ctaText: '從 Microsoft Store 安裝 Shotera，或前往 GitHub 取得更多版本。',
    moreVersions: '更多版本',
    storeAria: '從 Microsoft Store 取得 Shotera',
    pages: {
      about: ['關於 Shotera', '我們專注於把高頻的螢幕擷取工作做得更快、更精準，也更不打擾你的思緒。'],
      contact: ['聯絡與意見回饋', '有建議、問題或錯誤回報嗎？歡迎透過 GitHub Issues 或電子郵件與 Mosuzo Studio 聯絡。'],
      pricing: ['版本與價格', '基本版本功能永久免費；需要更進階工作流程時，可依正式發布內容升級 Pro。'],
      services: ['Shotera 能為你做什麼', '從擷取、錄製到辨識與分享，Shotera 將常用視覺溝通工具整合在一起。'],
      changelog: ['更新紀錄', '查看 Shotera 的最新功能、改善內容與修正項目。'],
      notFound: ['找不到這個頁面', '網址可能已變更，請返回首頁繼續瀏覽。'],
    },
    scenarios: scenarios(
      [
        '行動應用展示',
        '個人工作流程',
        'SaaS 團隊',
        '新創團隊',
        '快速了解 Shotera',
        '提高回饋效率',
        '即將推出',
        '產品功能詳情',
        '清楚呈現價值',
        '版本與訂閱',
      ],
      Array(10).fill('探索 Shotera 如何讓擷取、說明與分享工作更順暢。')
    ),
    labels: {
      learnMore: '進一步了解',
      backHome: '返回首頁',
      free: '基本版',
      pro: 'Pro 版',
      freeText: '核心截圖、標註與桌面釘選功能可永久免費使用。',
      proText: '解鎖更多進階能力；實際內容以正式發布版本為準。',
      contactText: '歡迎提出建議、回報問題，或與我們分享你的使用情境。',
      releaseText: '最新版本帶來 AI 影像工具、離線 OCR、圖片翻譯與更多體驗改善。',
      features: '功能',
      pricing: '價格',
      blog: '部落格',
      about: '關於',
      product: '產品',
      support: '支援',
      company: '團隊',
      terms: '使用條款',
      privacy: '隱私權政策',
      screenshot: '螢幕擷取',
      recording: '螢幕與 GIF 錄製',
      cutout: 'AI 去背',
      ocr: '離線 OCR',
      translation: '圖片翻譯',
      pin: '桌面釘選',
      download: '下載',
      faq: '常見問題',
      changelog: '更新紀錄',
      feedback: '意見回饋',
      tagline: '讓每一次截圖與錄影都更有效率。',
      newLabel: '新功能',
      announcement: 'Shotera v7.2.0+：AI 影像工具、離線 OCR 與圖片翻譯現已推出。',
    },
  },
  ja: {
    storeLanguage: 'ja-jp',
    metaTitle: 'Shotera — スクリーンショットと録画を、もっと速くスマートに',
    metaDescription: 'Windows向けの高精度キャプチャ、画面録画、AI画像編集、オフラインOCR、画像翻訳、ピン留めツール。',
    heroTitle: 'キャプチャも録画も、',
    heroAccent: 'AI編集もひとつに',
    heroSubtitle:
      'Shoteraは、スクリーンショット、注釈、GIF録画、AI切り抜き、オフラインOCR、画像翻訳、デスクトップへのピン留めを、軽快なWindowsワークフローにまとめます。',
    philosophy: '速く、正確に、作業を邪魔しない。それがShoteraの基本です。',
    featuresTitle: 'スクリーンショット後の作業まで、これひとつ',
    featuresSubtitle: '撮るだけで終わらせず、伝わる形に整えてすぐ共有できます。',
    features: [
      {
        title: 'スマートキャプチャ',
        description: 'ウィンドウやUI要素を自動検出し、ピクセル単位で範囲を調整できます。',
      },
      { title: 'わかりやすい注釈', description: '矢印、テキスト、手順番号、拡大表示、ぼかしで意図を明確に伝えます。' },
      { title: 'AI画像編集', description: 'AI切り抜きや不要部分の除去を、別アプリを開かずに行えます。' },
      { title: 'オフラインOCR', description: '画像をアップロードせず、端末上で文字を抽出してコピーできます。' },
      { title: '画像翻訳', description: 'スクリーンショット内の文字を認識し、そのまま翻訳できます。' },
      {
        title: 'ピン留めとプレゼンモード',
        description: '資料を最前面に置き、会議前にはデスクトップをすばやく整理できます。',
      },
    ],
    workflowTitle: '集中を途切れさせないWindowsワークフロー',
    workflow: [
      'F1で範囲、ウィンドウ、UI要素、全画面をキャプチャ。',
      'スマート検出と拡大鏡で境界を細かく調整。',
      '注釈、墨消し、OCR、翻訳、AI編集をその場で実行。',
      '保存・共有するか、F3で画面上にピン留め。',
    ],
    privacyTitle: 'プライバシーと管理',
    privacyText:
      'キャプチャはローカルに保存され、オフラインOCRは端末上で動作します。法的文書は現在、英語版が正式版です。',
    privacyLink: '英語のプライバシーポリシーを読む',
    faqTitle: 'よくある質問',
    faqs: [
      {
        title: '対応しているWindowsバージョンは？',
        answer: '最新の対応OSと要件は、正式な配布ページをご確認ください。',
      },
      { title: '無料で使えますか？', answer: '基本機能はずっと無料です。一部の高度な機能はProで利用できます。' },
      {
        title: 'OCRで画像はアップロードされますか？',
        answer: 'オフラインOCRは端末上で処理するため、文字抽出に画像のアップロードは不要です。',
      },
    ],
    ctaTitle: '次のスクリーンショットを、もっとスムーズに',
    ctaText: 'Microsoft Storeからインストールするか、GitHubでその他のバージョンを入手できます。',
    moreVersions: 'その他のバージョン',
    storeAria: 'Microsoft StoreからShoteraを入手',
    pages: {
      about: [
        'Shoteraについて',
        '頻繁に行うキャプチャ作業を、速く、正確に、気持ちよく進められる製品を目指しています。',
      ],
      contact: [
        'お問い合わせ・フィードバック',
        'ご意見や不具合報告は、GitHub IssuesまたはメールでMosuzo Studioまでお寄せください。',
      ],
      pricing: ['エディションと価格', '基本機能はずっと無料。さらに高度な機能が必要な場合はProを選べます。'],
      services: [
        'Shoteraでできること',
        'キャプチャから録画、文字認識、共有まで、視覚的なコミュニケーションをひとつにまとめます。',
      ],
      changelog: ['更新履歴', 'Shoteraの新機能、改善、修正内容をご確認いただけます。'],
      notFound: ['ページが見つかりません', 'URLが変更された可能性があります。ホームへ戻ってお探しください。'],
    },
    scenarios: scenarios(
      [
        'モバイルアプリ紹介',
        '個人の作業効率化',
        'SaaSチーム向け',
        'スタートアップ向け',
        'Shoteraをすぐ理解',
        'フィードバックを効率化',
        '近日公開',
        '製品機能の詳細',
        '価値をわかりやすく',
        'エディションとプラン',
      ],
      Array(10).fill('Shoteraでキャプチャ、説明、共有がどう変わるかをご紹介します。')
    ),
    labels: {
      learnMore: '詳しく見る',
      backHome: 'ホームへ戻る',
      free: 'ベーシック',
      pro: 'Pro',
      freeText: '主要なキャプチャ、注釈、ピン留め機能はずっと無料です。',
      proText: '高度な機能を追加。内容は正式リリース時の情報をご確認ください。',
      contactText: 'ご要望、不具合、活用方法など、ぜひお聞かせください。',
      releaseText: 'AI画像ツール、オフラインOCR、画像翻訳などの新機能と改善を追加しました。',
      features: '機能',
      pricing: '価格',
      blog: 'ブログ',
      about: '概要',
      product: '製品',
      support: 'サポート',
      company: '運営',
      terms: '利用規約',
      privacy: 'プライバシー',
      screenshot: 'スクリーンショット',
      recording: '画面・GIF録画',
      cutout: 'AI切り抜き',
      ocr: 'オフラインOCR',
      translation: '画像翻訳',
      pin: '画面にピン留め',
      download: 'ダウンロード',
      faq: 'よくある質問',
      changelog: '更新履歴',
      feedback: 'フィードバック',
      tagline: 'キャプチャと録画を、もっと効率よく。',
      newLabel: '新着',
      announcement: 'Shotera v7.2.0+：AI画像ツール、オフラインOCR、画像翻訳が登場。',
    },
  },
  'pt-br': {
    storeLanguage: 'pt-br',
    metaTitle: 'Shotera — Capturas de tela e gravações mais rápidas e inteligentes',
    metaDescription:
      'Captura precisa, gravação de tela, edição de imagens com IA, OCR offline, tradução de imagens e fixação na área de trabalho para Windows.',
    heroTitle: 'Capture, grave e edite com',
    heroAccent: 'IA em um só lugar',
    heroSubtitle:
      'O Shotera reúne captura de tela, anotações, gravação em GIF, recorte com IA, OCR offline, tradução de imagens e referências fixadas em um fluxo leve para Windows.',
    philosophy: 'Rápido, preciso e sem interromper seu ritmo de trabalho.',
    featuresTitle: 'Tudo o que acontece depois da captura',
    featuresSubtitle: 'Capture, explique e compartilhe sem alternar entre vários aplicativos.',
    features: [
      {
        title: 'Captura inteligente',
        description: 'Detecte janelas e elementos da interface e ajuste a seleção com precisão de pixel.',
      },
      {
        title: 'Anotações claras',
        description: 'Use setas, textos, passos numerados, ampliação e desfoque para comunicar melhor.',
      },
      { title: 'Edição com IA', description: 'Recorte objetos e remova elementos indesejados sem sair do Shotera.' },
      { title: 'OCR offline', description: 'Extraia texto no próprio dispositivo, sem enviar suas capturas.' },
      {
        title: 'Tradução de imagens',
        description: 'Reconheça e traduza textos dentro de imagens durante o fluxo de captura.',
      },
      {
        title: 'Fixação e modo apresentação',
        description: 'Mantenha referências visíveis e organize a área de trabalho antes de apresentar.',
      },
    ],
    workflowTitle: 'Um fluxo de trabalho direto no Windows',
    workflow: [
      'Pressione F1 para capturar uma área, janela, elemento ou a tela inteira.',
      'Ajuste os limites com detecção inteligente e lupa.',
      'Anote, oculte dados, extraia texto, traduza ou use ferramentas de IA.',
      'Salve, compartilhe ou pressione F3 para fixar a imagem na tela.',
    ],
    privacyTitle: 'Privacidade e controle',
    privacyText:
      'As capturas ficam salvas localmente e o OCR offline funciona no dispositivo. Por enquanto, os documentos legais oficiais estão disponíveis em inglês.',
    privacyLink: 'Ler a Política de Privacidade em inglês',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        title: 'Quais versões do Windows são compatíveis?',
        answer:
          'Consulte a página oficial da versão para verificar os requisitos e sistemas compatíveis mais recentes.',
      },
      {
        title: 'O Shotera é gratuito?',
        answer: 'Os recursos da versão básica são gratuitos para sempre; alguns recursos avançados fazem parte do Pro.',
      },
      {
        title: 'O OCR envia minhas capturas?',
        answer: 'Não. O OCR offline processa a extração de texto diretamente no seu dispositivo.',
      },
    ],
    ctaTitle: 'Deixe sua próxima captura pronta em menos tempo',
    ctaText: 'Instale pela Microsoft Store ou acesse o GitHub para baixar outras versões.',
    moreVersions: 'Mais versões',
    storeAria: 'Baixar Shotera na Microsoft Store',
    pages: {
      about: [
        'Sobre o Shotera',
        'Criamos uma experiência de captura mais rápida, precisa e discreta para quem trabalha com imagens todos os dias.',
      ],
      contact: [
        'Contato e feedback',
        'Envie sugestões e relatos de problemas pelo GitHub Issues ou fale com o Mosuzo Studio por e-mail.',
      ],
      pricing: [
        'Versões e preços',
        'A versão básica é gratuita para sempre. Para fluxos mais avançados, você poderá optar pelo Pro.',
      ],
      services: [
        'O que o Shotera faz por você',
        'Da captura à gravação, reconhecimento e compartilhamento, suas ferramentas visuais ficam reunidas em um só lugar.',
      ],
      changelog: ['Novidades e atualizações', 'Acompanhe os novos recursos, melhorias e correções do Shotera.'],
      notFound: ['Página não encontrada', 'O endereço pode ter mudado. Volte à página inicial para continuar.'],
    },
    scenarios: scenarios(
      [
        'Apresentação para apps',
        'Fluxo de trabalho pessoal',
        'Para equipes SaaS',
        'Para startups',
        'Conheça o Shotera',
        'Feedback mais eficiente',
        'Em breve',
        'Detalhes do produto',
        'Valor com clareza',
        'Versões e planos',
      ],
      Array(10).fill('Veja como o Shotera simplifica capturas, explicações e compartilhamentos.')
    ),
    labels: {
      learnMore: 'Saiba mais',
      backHome: 'Voltar ao início',
      free: 'Básico',
      pro: 'Pro',
      freeText: 'Os principais recursos de captura, anotação e fixação são gratuitos para sempre.',
      proText: 'Tenha acesso a recursos avançados; consulte os detalhes da versão publicada.',
      contactText: 'Sugestões, problemas e histórias de uso são sempre bem-vindos.',
      releaseText: 'A versão mais recente traz ferramentas de IA, OCR offline, tradução de imagens e outras melhorias.',
      features: 'Recursos',
      pricing: 'Preços',
      blog: 'Blog',
      about: 'Sobre',
      product: 'Produto',
      support: 'Suporte',
      company: 'Empresa',
      terms: 'Termos de Uso',
      privacy: 'Privacidade',
      screenshot: 'Captura de tela',
      recording: 'Gravação de tela e GIF',
      cutout: 'Recorte com IA',
      ocr: 'OCR offline',
      translation: 'Tradução de imagens',
      pin: 'Fixar na tela',
      download: 'Baixar',
      faq: 'Dúvidas frequentes',
      changelog: 'Atualizações',
      feedback: 'Feedback',
      tagline: 'Mais eficiência em cada captura e gravação.',
      newLabel: 'NOVO',
      announcement: 'Shotera v7.2.0+: ferramentas de IA, OCR offline e tradução de imagens.',
    },
  },
  es: {
    storeLanguage: 'es-es',
    metaTitle: 'Shotera — Capturas y grabaciones más rápidas e inteligentes',
    metaDescription:
      'Captura precisa, grabación de pantalla, edición con IA, OCR sin conexión, traducción de imágenes y fijación en el escritorio para Windows.',
    heroTitle: 'Captura, graba y edita con',
    heroAccent: 'IA en un solo lugar',
    heroSubtitle:
      'Shotera reúne capturas, anotaciones, grabación GIF, recorte con IA, OCR sin conexión, traducción de imágenes y referencias fijadas en un flujo ágil para Windows.',
    philosophy: 'Rápido, preciso y sin interrumpir tu concentración.',
    featuresTitle: 'Todo lo que necesitas después de capturar',
    featuresSubtitle: 'Captura, explica y comparte sin saltar entre varias aplicaciones.',
    features: [
      {
        title: 'Captura inteligente',
        description: 'Detecta ventanas y elementos de interfaz y ajusta la selección píxel a píxel.',
      },
      {
        title: 'Anotaciones claras',
        description: 'Utiliza flechas, texto, pasos numerados, ampliación y desenfoque para comunicar mejor.',
      },
      { title: 'Edición con IA', description: 'Aísla sujetos y elimina elementos no deseados sin salir de Shotera.' },
      { title: 'OCR sin conexión', description: 'Extrae texto en tu dispositivo sin subir las capturas.' },
      {
        title: 'Traducción de imágenes',
        description: 'Reconoce y traduce texto dentro de imágenes durante el proceso de captura.',
      },
      {
        title: 'Fijación y modo presentación',
        description: 'Mantén referencias visibles y despeja el escritorio antes de presentar.',
      },
    ],
    workflowTitle: 'Un flujo de trabajo ágil en Windows',
    workflow: [
      'Pulsa F1 para capturar un área, ventana, elemento o toda la pantalla.',
      'Ajusta los límites con detección inteligente y lupa.',
      'Anota, oculta datos, extrae texto, traduce o aplica herramientas de IA.',
      'Guarda, comparte o pulsa F3 para fijar la imagen en pantalla.',
    ],
    privacyTitle: 'Privacidad y control',
    privacyText:
      'Las capturas se guardan localmente y el OCR sin conexión funciona en tu dispositivo. Por ahora, los documentos legales oficiales están disponibles en inglés.',
    privacyLink: 'Leer la Política de Privacidad en inglés',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        title: '¿Qué versiones de Windows son compatibles?',
        answer: 'Consulta la página oficial de la versión para conocer los requisitos y sistemas compatibles actuales.',
      },
      {
        title: '¿Shotera es gratis?',
        answer: 'Las funciones básicas son gratuitas para siempre; algunas funciones avanzadas requieren Pro.',
      },
      {
        title: '¿El OCR sube mis capturas?',
        answer: 'No. El OCR sin conexión procesa la extracción de texto directamente en tu dispositivo.',
      },
    ],
    ctaTitle: 'Termina tu próxima captura en menos tiempo',
    ctaText: 'Instala Shotera desde Microsoft Store o visita GitHub para obtener más versiones.',
    moreVersions: 'Más versiones',
    storeAria: 'Obtener Shotera en Microsoft Store',
    pages: {
      about: [
        'Acerca de Shotera',
        'Creamos una experiencia de captura rápida, precisa y discreta para quienes trabajan con imágenes cada día.',
      ],
      contact: [
        'Contacto y comentarios',
        'Comparte sugerencias o errores mediante GitHub Issues, o escribe a Mosuzo Studio por correo.',
      ],
      pricing: [
        'Ediciones y precios',
        'La edición básica es gratuita para siempre. Si necesitas flujos avanzados, puedes elegir Pro.',
      ],
      services: [
        'Qué puede hacer Shotera por ti',
        'Desde capturar y grabar hasta reconocer texto y compartir, tus herramientas visuales están reunidas en un solo lugar.',
      ],
      changelog: ['Novedades', 'Consulta las nuevas funciones, mejoras y correcciones de Shotera.'],
      notFound: ['Página no encontrada', 'Es posible que la dirección haya cambiado. Vuelve al inicio para continuar.'],
    },
    scenarios: scenarios(
      [
        'Presentación de aplicaciones',
        'Flujo personal',
        'Para equipos SaaS',
        'Para startups',
        'Descubre Shotera',
        'Comentarios más ágiles',
        'Próximamente',
        'Detalles del producto',
        'Comunica mejor el valor',
        'Ediciones y planes',
      ],
      Array(10).fill('Descubre cómo Shotera simplifica la captura, la explicación y el intercambio de información.')
    ),
    labels: {
      learnMore: 'Más información',
      backHome: 'Volver al inicio',
      free: 'Básico',
      pro: 'Pro',
      freeText: 'Las principales funciones de captura, anotación y fijación son gratuitas para siempre.',
      proText: 'Accede a funciones avanzadas; consulta los detalles de la versión publicada.',
      contactText: 'Tus sugerencias, incidencias y formas de uso nos ayudan a mejorar.',
      releaseText:
        'La última versión incorpora herramientas de IA, OCR sin conexión, traducción de imágenes y más mejoras.',
      features: 'Funciones',
      pricing: 'Precios',
      blog: 'Blog',
      about: 'Acerca de',
      product: 'Producto',
      support: 'Ayuda',
      company: 'Empresa',
      terms: 'Términos',
      privacy: 'Privacidad',
      screenshot: 'Capturas',
      recording: 'Grabación de pantalla y GIF',
      cutout: 'Recorte con IA',
      ocr: 'OCR sin conexión',
      translation: 'Traducción de imágenes',
      pin: 'Fijar en pantalla',
      download: 'Descargar',
      faq: 'Preguntas frecuentes',
      changelog: 'Novedades',
      feedback: 'Comentarios',
      tagline: 'Más eficiencia en cada captura y grabación.',
      newLabel: 'NUEVO',
      announcement: 'Shotera v7.2.0+: herramientas de IA, OCR sin conexión y traducción de imágenes.',
    },
  },
  de: {
    storeLanguage: 'de-de',
    metaTitle: 'Shotera — Schnellere, intelligentere Screenshots und Aufnahmen',
    metaDescription:
      'Präzise Bildschirmaufnahmen, KI-Bildbearbeitung, Offline-OCR, Bildübersetzung und Desktop-Pins für Windows.',
    heroTitle: 'Aufnehmen, erklären und mit',
    heroAccent: 'KI bearbeiten',
    heroSubtitle:
      'Shotera verbindet Screenshots, Anmerkungen, GIF-Aufnahmen, KI-Freistellung, Offline-OCR, Bildübersetzung und Desktop-Pins in einem schlanken Windows-Workflow.',
    philosophy: 'Schnell, präzise und unaufdringlich – damit Sie im Arbeitsfluss bleiben.',
    featuresTitle: 'Alles für die Arbeit nach dem Screenshot',
    featuresSubtitle: 'Aufnehmen, verständlich erklären und direkt weitergeben – ohne ständigen App-Wechsel.',
    features: [
      {
        title: 'Intelligente Aufnahme',
        description: 'Fenster und UI-Elemente automatisch erkennen und die Auswahl pixelgenau anpassen.',
      },
      {
        title: 'Klare Anmerkungen',
        description: 'Pfeile, Text, Schrittnummern, Vergrößerung und Unschärfe sorgen für eindeutige Aussagen.',
      },
      {
        title: 'KI-Bildbearbeitung',
        description: 'Motive freistellen und störende Inhalte entfernen, ohne Shotera zu verlassen.',
      },
      { title: 'Offline-OCR', description: 'Text lokal auf dem Gerät extrahieren, ohne Screenshots hochzuladen.' },
      { title: 'Bildübersetzung', description: 'Text in Bildern direkt im Aufnahmeablauf erkennen und übersetzen.' },
      {
        title: 'Desktop-Pins und Präsentationsmodus',
        description: 'Referenzen sichtbar halten und den Desktop vor Präsentationen aufräumen.',
      },
    ],
    workflowTitle: 'Ein fokussierter Windows-Workflow',
    workflow: [
      'Mit F1 Bereich, Fenster, UI-Element oder gesamten Bildschirm aufnehmen.',
      'Grenzen mit intelligenter Erkennung und Lupe verfeinern.',
      'Kommentieren, ausblenden, Text erkennen, übersetzen oder KI-Werkzeuge nutzen.',
      'Speichern, teilen oder mit F3 als Referenz anheften.',
    ],
    privacyTitle: 'Datenschutz und Kontrolle',
    privacyText:
      'Aufnahmen werden lokal gespeichert; Offline-OCR läuft direkt auf Ihrem Gerät. Verbindliche Rechtstexte sind derzeit auf Englisch verfügbar.',
    privacyLink: 'Englische Datenschutzerklärung lesen',
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        title: 'Welche Windows-Versionen werden unterstützt?',
        answer: 'Aktuelle Systemanforderungen und unterstützte Versionen finden Sie auf der offiziellen Downloadseite.',
      },
      {
        title: 'Ist Shotera kostenlos?',
        answer:
          'Die Funktionen der Basisversion bleiben dauerhaft kostenlos; einige erweiterte Funktionen gehören zu Pro.',
      },
      {
        title: 'Werden Bilder für OCR hochgeladen?',
        answer: 'Nein. Offline-OCR verarbeitet die Texterkennung direkt auf Ihrem Gerät.',
      },
    ],
    ctaTitle: 'Den nächsten Screenshot schneller fertigstellen',
    ctaText: 'Shotera im Microsoft Store installieren oder weitere Versionen auf GitHub herunterladen.',
    moreVersions: 'Weitere Versionen',
    storeAria: 'Shotera aus dem Microsoft Store beziehen',
    pages: {
      about: [
        'Über Shotera',
        'Wir entwickeln eine schnelle, präzise und unaufdringliche Aufnahme-Erfahrung für Menschen, die täglich mit Screenshots arbeiten.',
      ],
      contact: [
        'Kontakt und Feedback',
        'Vorschläge und Fehlerberichte können Sie über GitHub Issues oder per E-Mail an Mosuzo Studio senden.',
      ],
      pricing: [
        'Editionen und Preise',
        'Die Basisversion bleibt dauerhaft kostenlos. Für anspruchsvollere Abläufe steht Pro zur Verfügung.',
      ],
      services: [
        'Was Shotera für Sie leistet',
        'Von Aufnahme und Bildschirmvideo bis Texterkennung und Freigabe sind alle visuellen Werkzeuge an einem Ort.',
      ],
      changelog: [
        'Versionshinweise',
        'Informieren Sie sich über neue Funktionen, Verbesserungen und Fehlerbehebungen.',
      ],
      notFound: [
        'Seite nicht gefunden',
        'Die Adresse wurde möglicherweise geändert. Kehren Sie zur Startseite zurück.',
      ],
    },
    scenarios: scenarios(
      [
        'App-Präsentation',
        'Persönlicher Workflow',
        'Für SaaS-Teams',
        'Für Start-ups',
        'Shotera kennenlernen',
        'Feedback beschleunigen',
        'Demnächst verfügbar',
        'Produktdetails',
        'Mehr Klarheit im Vertrieb',
        'Editionen und Pläne',
      ],
      Array(10).fill('Erfahren Sie, wie Shotera Aufnahme, Erklärung und Weitergabe vereinfacht.')
    ),
    labels: {
      learnMore: 'Mehr erfahren',
      backHome: 'Zur Startseite',
      free: 'Basis',
      pro: 'Pro',
      freeText: 'Zentrale Aufnahme-, Anmerkungs- und Pin-Funktionen bleiben dauerhaft kostenlos.',
      proText: 'Erweiterte Funktionen freischalten; maßgeblich sind die Angaben der veröffentlichten Version.',
      contactText: 'Wir freuen uns über Vorschläge, Fehlerberichte und Einblicke in Ihren Arbeitsalltag.',
      releaseText:
        'Die aktuelle Version ergänzt KI-Bildwerkzeuge, Offline-OCR, Bildübersetzung und weitere Verbesserungen.',
      features: 'Funktionen',
      pricing: 'Preise',
      blog: 'Blog',
      about: 'Über uns',
      product: 'Produkt',
      support: 'Support',
      company: 'Unternehmen',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz',
      screenshot: 'Screenshot',
      recording: 'Bildschirm- und GIF-Aufnahme',
      cutout: 'KI-Freistellung',
      ocr: 'Offline-OCR',
      translation: 'Bildübersetzung',
      pin: 'An Bildschirm anheften',
      download: 'Herunterladen',
      faq: 'FAQ',
      changelog: 'Versionshinweise',
      feedback: 'Feedback',
      tagline: 'Effizienter bei jedem Screenshot und jeder Aufnahme.',
      newLabel: 'NEU',
      announcement: 'Shotera v7.2.0+: KI-Bildwerkzeuge, Offline-OCR und Bildübersetzung.',
    },
  },
  fr: {
    storeLanguage: 'fr-fr',
    metaTitle: 'Shotera — Des captures et enregistrements plus rapides et plus intelligents',
    metaDescription:
      'Capture précise, enregistrement d’écran, retouche IA, OCR hors ligne, traduction d’images et épinglage sur Windows.',
    heroTitle: 'Capturez, enregistrez et retouchez avec',
    heroAccent: 'l’IA au même endroit',
    heroSubtitle:
      'Shotera réunit captures, annotations, enregistrement GIF, détourage IA, OCR hors ligne, traduction d’images et références épinglées dans un flux Windows fluide.',
    philosophy: 'Rapide, précis et discret, pour préserver votre concentration.',
    featuresTitle: 'Tout ce qu’il faut après la capture',
    featuresSubtitle: 'Capturez, expliquez et partagez sans multiplier les applications.',
    features: [
      {
        title: 'Capture intelligente',
        description: 'Détectez les fenêtres et éléments d’interface, puis ajustez la sélection au pixel près.',
      },
      {
        title: 'Annotations claires',
        description: 'Flèches, texte, étapes numérotées, zoom et flou rendent chaque explication plus lisible.',
      },
      {
        title: 'Retouche par IA',
        description: 'Détourez un sujet ou effacez un élément indésirable sans quitter Shotera.',
      },
      { title: 'OCR hors ligne', description: 'Extrayez du texte sur votre appareil, sans téléverser vos captures.' },
      {
        title: 'Traduction d’images',
        description: 'Reconnaissez et traduisez le texte d’une image dans le même flux.',
      },
      {
        title: 'Épinglage et mode Présentation',
        description: 'Gardez vos références visibles et préparez un bureau net avant une présentation.',
      },
    ],
    workflowTitle: 'Un flux Windows simple et concentré',
    workflow: [
      'Appuyez sur F1 pour capturer une zone, une fenêtre, un élément ou l’écran entier.',
      'Affinez les limites grâce à la détection intelligente et à la loupe.',
      'Annotez, masquez, extrayez, traduisez ou appliquez les outils IA.',
      'Enregistrez, partagez ou appuyez sur F3 pour épingler la capture.',
    ],
    privacyTitle: 'Confidentialité et maîtrise',
    privacyText:
      'Les captures restent en local et l’OCR hors ligne fonctionne sur votre appareil. Les documents juridiques de référence sont actuellement disponibles en anglais.',
    privacyLink: 'Lire la politique de confidentialité en anglais',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        title: 'Quelles versions de Windows sont prises en charge ?',
        answer:
          'Consultez la page de téléchargement officielle pour les prérequis et versions actuellement compatibles.',
      },
      {
        title: 'Shotera est-il gratuit ?',
        answer: 'Les fonctions de base restent gratuites ; certaines fonctions avancées nécessitent Pro.',
      },
      {
        title: 'L’OCR envoie-t-il mes captures ?',
        answer: 'Non. L’OCR hors ligne extrait le texte directement sur votre appareil.',
      },
    ],
    ctaTitle: 'Finalisez votre prochaine capture plus vite',
    ctaText: 'Installez Shotera depuis le Microsoft Store ou retrouvez d’autres versions sur GitHub.',
    moreVersions: 'Autres versions',
    storeAria: 'Obtenir Shotera sur le Microsoft Store',
    pages: {
      about: [
        'À propos de Shotera',
        'Nous concevons une expérience de capture rapide, précise et discrète pour celles et ceux qui utilisent des images au quotidien.',
      ],
      contact: [
        'Contact et retours',
        'Partagez vos idées ou signalez un problème sur GitHub Issues, ou contactez Mosuzo Studio par e-mail.',
      ],
      pricing: [
        'Éditions et tarifs',
        'L’édition de base reste gratuite. Pour les besoins avancés, vous pourrez choisir Pro.',
      ],
      services: [
        'Ce que Shotera vous apporte',
        'De la capture à l’enregistrement, en passant par la reconnaissance et le partage, vos outils visuels sont réunis.',
      ],
      changelog: ['Notes de version', 'Découvrez les nouvelles fonctions, améliorations et corrections de Shotera.'],
      notFound: ['Page introuvable', 'L’adresse a peut-être changé. Revenez à l’accueil pour poursuivre.'],
    },
    scenarios: scenarios(
      [
        'Présentation d’application',
        'Flux de travail personnel',
        'Pour les équipes SaaS',
        'Pour les start-up',
        'Découvrir Shotera',
        'Accélérer les retours',
        'Bientôt disponible',
        'Détails du produit',
        'Présenter la valeur clairement',
        'Éditions et formules',
      ],
      Array(10).fill('Découvrez comment Shotera simplifie la capture, l’explication et le partage.')
    ),
    labels: {
      learnMore: 'En savoir plus',
      backHome: 'Retour à l’accueil',
      free: 'Essentiel',
      pro: 'Pro',
      freeText: 'Les principales fonctions de capture, annotation et épinglage restent gratuites.',
      proText: 'Accédez aux fonctions avancées ; référez-vous aux informations de la version publiée.',
      contactText: 'Vos idées, signalements et usages nous aident à améliorer Shotera.',
      releaseText:
        'La dernière version apporte des outils IA, l’OCR hors ligne, la traduction d’images et diverses améliorations.',
      features: 'Fonctions',
      pricing: 'Tarifs',
      blog: 'Blog',
      about: 'À propos',
      product: 'Produit',
      support: 'Assistance',
      company: 'Entreprise',
      terms: 'Conditions',
      privacy: 'Confidentialité',
      screenshot: 'Capture d’écran',
      recording: 'Enregistrement écran et GIF',
      cutout: 'Détourage IA',
      ocr: 'OCR hors ligne',
      translation: 'Traduction d’images',
      pin: 'Épingler à l’écran',
      download: 'Télécharger',
      faq: 'FAQ',
      changelog: 'Versions',
      feedback: 'Retours',
      tagline: 'Plus d’efficacité à chaque capture et enregistrement.',
      newLabel: 'NOUVEAU',
      announcement: 'Shotera v7.2.0+ : outils IA, OCR hors ligne et traduction d’images.',
    },
  },
  it: {
    storeLanguage: 'it-it',
    metaTitle: 'Shotera — Screenshot e registrazioni più rapidi e intelligenti',
    metaDescription:
      'Cattura precisa, registrazione schermo, editing IA, OCR offline, traduzione immagini e pin sul desktop per Windows.',
    heroTitle: 'Cattura, registra e modifica con',
    heroAccent: 'l’IA in un solo posto',
    heroSubtitle:
      'Shotera riunisce screenshot, annotazioni, registrazione GIF, scontorno IA, OCR offline, traduzione immagini e riferimenti fissati in un flusso Windows leggero.',
    philosophy: 'Veloce, preciso e discreto, per non interrompere la concentrazione.',
    featuresTitle: 'Tutto ciò che serve dopo uno screenshot',
    featuresSubtitle: 'Cattura, spiega e condividi senza passare continuamente da un’app all’altra.',
    features: [
      {
        title: 'Cattura intelligente',
        description: 'Rileva finestre ed elementi dell’interfaccia e regola la selezione al pixel.',
      },
      {
        title: 'Annotazioni chiare',
        description:
          'Frecce, testo, passaggi numerati, ingrandimenti e sfocatura rendono ogni indicazione comprensibile.',
      },
      {
        title: 'Editing con IA',
        description: 'Isola soggetti e rimuovi elementi indesiderati senza uscire da Shotera.',
      },
      { title: 'OCR offline', description: 'Estrai testo direttamente sul dispositivo senza caricare gli screenshot.' },
      { title: 'Traduzione immagini', description: 'Riconosci e traduci il testo nelle immagini durante la cattura.' },
      {
        title: 'Pin e modalità Presentazione',
        description: 'Mantieni visibili i riferimenti e prepara un desktop ordinato prima di presentare.',
      },
    ],
    workflowTitle: 'Un flusso Windows semplice e concentrato',
    workflow: [
      'Premi F1 per catturare un’area, una finestra, un elemento o l’intero schermo.',
      'Rifinisci i bordi con rilevamento intelligente e lente.',
      'Annota, oscura, estrai testo, traduci o usa gli strumenti IA.',
      'Salva, condividi oppure premi F3 per fissare la cattura sullo schermo.',
    ],
    privacyTitle: 'Privacy e controllo',
    privacyText:
      'Le catture restano in locale e l’OCR offline funziona sul dispositivo. Per ora i documenti legali ufficiali sono disponibili in inglese.',
    privacyLink: 'Leggi l’Informativa sulla privacy in inglese',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        title: 'Quali versioni di Windows sono supportate?',
        answer: 'Consulta la pagina ufficiale del download per requisiti e versioni attualmente compatibili.',
      },
      {
        title: 'Shotera è gratuito?',
        answer: 'Le funzioni di base sono gratuite per sempre; alcune funzioni avanzate richiedono Pro.',
      },
      {
        title: 'L’OCR carica i miei screenshot?',
        answer: 'No. L’OCR offline estrae il testo direttamente sul dispositivo.',
      },
    ],
    ctaTitle: 'Completa il prossimo screenshot in meno tempo',
    ctaText: 'Installa Shotera dal Microsoft Store o visita GitHub per altre versioni.',
    moreVersions: 'Altre versioni',
    storeAria: 'Scarica Shotera dal Microsoft Store',
    pages: {
      about: [
        'Informazioni su Shotera',
        'Creiamo un’esperienza di cattura rapida, precisa e discreta per chi lavora ogni giorno con le immagini.',
      ],
      contact: [
        'Contatti e feedback',
        'Condividi suggerimenti o segnala problemi su GitHub Issues, oppure scrivi a Mosuzo Studio.',
      ],
      pricing: [
        'Edizioni e prezzi',
        'L’edizione base è gratuita per sempre. Per flussi più avanzati puoi scegliere Pro.',
      ],
      services: [
        'Cosa può fare Shotera',
        'Dalla cattura alla registrazione, dal riconoscimento alla condivisione: tutti gli strumenti visivi in un unico posto.',
      ],
      changelog: ['Novità e aggiornamenti', 'Scopri nuove funzioni, miglioramenti e correzioni di Shotera.'],
      notFound: ['Pagina non trovata', 'L’indirizzo potrebbe essere cambiato. Torna alla pagina iniziale.'],
    },
    scenarios: scenarios(
      [
        'Presentazione app',
        'Flusso personale',
        'Per team SaaS',
        'Per startup',
        'Scopri Shotera',
        'Feedback più rapido',
        'In arrivo',
        'Dettagli del prodotto',
        'Valore più chiaro',
        'Edizioni e piani',
      ],
      Array(10).fill('Scopri come Shotera semplifica cattura, spiegazione e condivisione.')
    ),
    labels: {
      learnMore: 'Scopri di più',
      backHome: 'Torna all’inizio',
      free: 'Base',
      pro: 'Pro',
      freeText: 'Le principali funzioni di cattura, annotazione e pin sono gratuite per sempre.',
      proText: 'Sblocca funzioni avanzate; fanno fede i dettagli della versione pubblicata.',
      contactText: 'Suggerimenti, segnalazioni e casi d’uso sono sempre benvenuti.',
      releaseText: 'L’ultima versione aggiunge strumenti IA, OCR offline, traduzione immagini e altri miglioramenti.',
      features: 'Funzioni',
      pricing: 'Prezzi',
      blog: 'Blog',
      about: 'Chi siamo',
      product: 'Prodotto',
      support: 'Supporto',
      company: 'Azienda',
      terms: 'Termini',
      privacy: 'Privacy',
      screenshot: 'Screenshot',
      recording: 'Registrazione schermo e GIF',
      cutout: 'Scontorno IA',
      ocr: 'OCR offline',
      translation: 'Traduzione immagini',
      pin: 'Fissa sullo schermo',
      download: 'Scarica',
      faq: 'FAQ',
      changelog: 'Aggiornamenti',
      feedback: 'Feedback',
      tagline: 'Più efficienza in ogni cattura e registrazione.',
      newLabel: 'NOVITÀ',
      announcement: 'Shotera v7.2.0+: strumenti IA, OCR offline e traduzione immagini.',
    },
  },
  ko: {
    storeLanguage: 'ko-kr',
    metaTitle: 'Shotera — 더 빠르고 스마트한 캡처와 화면 녹화',
    metaDescription:
      'Windows용 정밀 캡처, 화면 녹화, AI 이미지 편집, 오프라인 OCR, 이미지 번역 및 화면 고정 도구입니다.',
    heroTitle: '캡처와 녹화,',
    heroAccent: 'AI 편집까지 한곳에서',
    heroSubtitle:
      'Shotera는 스크린샷, 주석, GIF 녹화, AI 누끼 따기, 오프라인 OCR, 이미지 번역, 화면 고정을 하나의 매끄러운 Windows 작업 흐름으로 연결합니다.',
    philosophy: '빠르고 정확하게, 작업 흐름은 방해하지 않도록.',
    featuresTitle: '캡처 이후의 작업까지 한 번에',
    featuresSubtitle: '여러 앱을 오가지 않고 캡처하고 설명하고 공유하세요.',
    features: [
      { title: '스마트 캡처', description: '창과 UI 요소를 자동 감지하고 픽셀 단위로 영역을 다듬습니다.' },
      { title: '명확한 주석', description: '화살표, 텍스트, 단계 번호, 확대 및 흐림 효과로 핵심을 쉽게 전달합니다.' },
      { title: 'AI 이미지 편집', description: 'Shotera 안에서 피사체를 분리하고 불필요한 요소를 지웁니다.' },
      { title: '오프라인 OCR', description: '스크린샷을 업로드하지 않고 기기에서 바로 텍스트를 추출합니다.' },
      { title: '이미지 번역', description: '캡처 흐름 안에서 이미지 속 문자를 인식하고 번역합니다.' },
      {
        title: '화면 고정과 프레젠테이션 모드',
        description: '참고 자료를 위에 띄우고 발표 전 바탕 화면을 빠르게 정리합니다.',
      },
    ],
    workflowTitle: '집중을 이어 주는 Windows 작업 흐름',
    workflow: [
      'F1을 눌러 영역, 창, UI 요소 또는 전체 화면을 캡처합니다.',
      '스마트 감지와 돋보기로 경계를 정밀하게 조정합니다.',
      '주석, 가림, OCR, 번역 또는 AI 편집을 바로 적용합니다.',
      '저장·공유하거나 F3으로 화면에 고정합니다.',
    ],
    privacyTitle: '개인정보 보호와 제어',
    privacyText:
      '캡처는 로컬에 저장되고 오프라인 OCR은 기기에서 작동합니다. 법적 문서는 현재 영문 공식 버전을 기준으로 합니다.',
    privacyLink: '영문 개인정보 처리방침 보기',
    faqTitle: '자주 묻는 질문',
    faqs: [
      {
        title: '어떤 Windows 버전을 지원하나요?',
        answer: '최신 지원 운영체제와 요구 사항은 공식 배포 페이지에서 확인해 주세요.',
      },
      {
        title: '무료로 사용할 수 있나요?',
        answer: '기본 버전 기능은 영구 무료이며 일부 고급 기능은 Pro에서 제공됩니다.',
      },
      {
        title: 'OCR 사용 시 이미지가 업로드되나요?',
        answer: '아니요. 오프라인 OCR은 텍스트 추출을 기기에서 직접 처리합니다.',
      },
    ],
    ctaTitle: '다음 캡처를 더 빠르게 완성하세요',
    ctaText: 'Microsoft Store에서 설치하거나 GitHub에서 다른 버전을 받을 수 있습니다.',
    moreVersions: '다른 버전',
    storeAria: 'Microsoft Store에서 Shotera 받기',
    pages: {
      about: [
        'Shotera 소개',
        '매일 이미지를 다루는 사용자를 위해 빠르고 정확하며 흐름을 방해하지 않는 캡처 경험을 만듭니다.',
      ],
      contact: ['문의 및 피드백', '제안이나 오류는 GitHub Issues에 남기거나 Mosuzo Studio로 이메일을 보내 주세요.'],
      pricing: ['버전 및 가격', '기본 버전은 영구 무료입니다. 더 고급 작업이 필요할 때 Pro를 선택할 수 있습니다.'],
      services: [
        'Shotera로 할 수 있는 일',
        '캡처와 녹화부터 문자 인식과 공유까지 필요한 시각 도구를 한곳에 모았습니다.',
      ],
      changelog: ['업데이트 내역', 'Shotera의 새로운 기능, 개선 사항 및 오류 수정을 확인하세요.'],
      notFound: ['페이지를 찾을 수 없습니다', '주소가 변경되었을 수 있습니다. 홈으로 돌아가 주세요.'],
    },
    scenarios: scenarios(
      [
        '앱 소개',
        '개인 작업 흐름',
        'SaaS 팀용',
        '스타트업용',
        'Shotera 빠르게 보기',
        '피드백 효율 높이기',
        '출시 예정',
        '제품 기능 상세',
        '가치를 명확하게 전달',
        '버전과 플랜',
      ],
      Array(10).fill('Shotera가 캡처, 설명, 공유를 어떻게 간단하게 만드는지 살펴보세요.')
    ),
    labels: {
      learnMore: '자세히 보기',
      backHome: '홈으로',
      free: '기본',
      pro: 'Pro',
      freeText: '핵심 캡처, 주석 및 화면 고정 기능은 영구 무료입니다.',
      proText: '고급 기능을 이용하세요. 자세한 내용은 정식 배포 버전을 기준으로 합니다.',
      contactText: '제안, 오류 보고, 활용 사례를 언제든 들려주세요.',
      releaseText: '최신 버전에 AI 이미지 도구, 오프라인 OCR, 이미지 번역과 여러 개선 사항이 추가되었습니다.',
      features: '기능',
      pricing: '가격',
      blog: '블로그',
      about: '소개',
      product: '제품',
      support: '지원',
      company: '회사',
      terms: '이용약관',
      privacy: '개인정보',
      screenshot: '스크린샷',
      recording: '화면 및 GIF 녹화',
      cutout: 'AI 누끼 따기',
      ocr: '오프라인 OCR',
      translation: '이미지 번역',
      pin: '화면 고정',
      download: '다운로드',
      faq: 'FAQ',
      changelog: '업데이트',
      feedback: '피드백',
      tagline: '모든 캡처와 녹화를 더 효율적으로.',
      newLabel: '새 기능',
      announcement: 'Shotera v7.2.0+: AI 이미지 도구, 오프라인 OCR, 이미지 번역을 만나보세요.',
    },
  },
  ru: {
    storeLanguage: 'ru-ru',
    metaTitle: 'Shotera — Быстрые и умные снимки экрана и запись',
    metaDescription:
      'Точный захват экрана, запись, ИИ-редактирование, автономное OCR, перевод изображений и закрепление на рабочем столе Windows.',
    heroTitle: 'Снимки, запись и',
    heroAccent: 'ИИ-редактирование в одном месте',
    heroSubtitle:
      'Shotera объединяет снимки экрана, аннотации, запись GIF, ИИ-вырезание, автономное OCR, перевод изображений и закрепление материалов в удобном процессе Windows.',
    philosophy: 'Быстро, точно и без лишних отвлечений.',
    featuresTitle: 'Всё для работы после снимка экрана',
    featuresSubtitle: 'Захватывайте, объясняйте и делитесь результатом без переключения между приложениями.',
    features: [
      {
        title: 'Умный захват',
        description: 'Автоматически определяйте окна и элементы интерфейса и точно настраивайте область.',
      },
      {
        title: 'Понятные аннотации',
        description: 'Стрелки, текст, нумерация шагов, увеличение и размытие помогают ясно донести мысль.',
      },
      { title: 'ИИ-редактирование', description: 'Отделяйте объекты и удаляйте лишние детали, не выходя из Shotera.' },
      { title: 'Автономное OCR', description: 'Извлекайте текст непосредственно на устройстве без загрузки снимков.' },
      {
        title: 'Перевод изображений',
        description: 'Распознавайте и переводите текст на изображениях прямо в процессе захвата.',
      },
      {
        title: 'Закрепление и режим презентации',
        description: 'Оставляйте материалы поверх окон и быстро очищайте рабочий стол перед показом.',
      },
    ],
    workflowTitle: 'Сосредоточенный рабочий процесс Windows',
    workflow: [
      'Нажмите F1, чтобы захватить область, окно, элемент или весь экран.',
      'Уточните границы с помощью умного определения и лупы.',
      'Добавьте аннотации, скройте данные, распознайте или переведите текст, примените ИИ.',
      'Сохраните, поделитесь или нажмите F3, чтобы закрепить изображение.',
    ],
    privacyTitle: 'Конфиденциальность и контроль',
    privacyText:
      'Снимки хранятся локально, а автономное OCR работает на устройстве. Официальные юридические документы пока доступны на английском языке.',
    privacyLink: 'Открыть политику конфиденциальности на английском',
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        title: 'Какие версии Windows поддерживаются?',
        answer: 'Актуальные требования и поддерживаемые версии указаны на официальной странице загрузки.',
      },
      {
        title: 'Shotera бесплатна?',
        answer: 'Возможности базовой версии бесплатны навсегда; отдельные расширенные функции доступны в Pro.',
      },
      {
        title: 'OCR загружает снимки в сеть?',
        answer: 'Нет. Автономное OCR обрабатывает текст непосредственно на устройстве.',
      },
    ],
    ctaTitle: 'Подготовьте следующий снимок быстрее',
    ctaText: 'Установите Shotera из Microsoft Store или загрузите другие версии на GitHub.',
    moreVersions: 'Другие версии',
    storeAria: 'Скачать Shotera из Microsoft Store',
    pages: {
      about: [
        'О Shotera',
        'Мы создаём быстрый, точный и ненавязчивый инструмент для тех, кто ежедневно работает со снимками экрана.',
      ],
      contact: [
        'Связь и обратная связь',
        'Предложения и сообщения об ошибках можно отправить через GitHub Issues или по электронной почте Mosuzo Studio.',
      ],
      pricing: ['Версии и цены', 'Базовая версия бесплатна навсегда. Для более сложных задач можно выбрать Pro.'],
      services: [
        'Возможности Shotera',
        'Захват, запись, распознавание и обмен материалами — все визуальные инструменты собраны вместе.',
      ],
      changelog: ['История обновлений', 'Узнайте о новых функциях, улучшениях и исправлениях Shotera.'],
      notFound: ['Страница не найдена', 'Возможно, адрес изменился. Вернитесь на главную страницу.'],
    },
    scenarios: scenarios(
      [
        'Презентация приложения',
        'Личный рабочий процесс',
        'Для SaaS-команд',
        'Для стартапов',
        'Знакомство с Shotera',
        'Ускорение обратной связи',
        'Скоро',
        'Подробности о продукте',
        'Наглядная ценность',
        'Версии и планы',
      ],
      Array(10).fill('Узнайте, как Shotera упрощает захват, объяснение и обмен материалами.')
    ),
    labels: {
      learnMore: 'Подробнее',
      backHome: 'На главную',
      free: 'Базовая',
      pro: 'Pro',
      freeText: 'Основные функции захвата, аннотаций и закрепления бесплатны навсегда.',
      proText: 'Откройте расширенные функции; точный состав указан в опубликованной версии.',
      contactText: 'Мы рады предложениям, сообщениям об ошибках и вашим сценариям использования.',
      releaseText:
        'В последней версии появились ИИ-инструменты, автономное OCR, перевод изображений и другие улучшения.',
      features: 'Возможности',
      pricing: 'Цены',
      blog: 'Блог',
      about: 'О продукте',
      product: 'Продукт',
      support: 'Поддержка',
      company: 'Компания',
      terms: 'Условия',
      privacy: 'Конфиденциальность',
      screenshot: 'Снимки экрана',
      recording: 'Запись экрана и GIF',
      cutout: 'ИИ-вырезание',
      ocr: 'Автономное OCR',
      translation: 'Перевод изображений',
      pin: 'Закрепление на экране',
      download: 'Скачать',
      faq: 'Вопросы',
      changelog: 'Обновления',
      feedback: 'Обратная связь',
      tagline: 'Больше эффективности в каждом снимке и записи.',
      newLabel: 'НОВОЕ',
      announcement: 'Shotera v7.2.0+: ИИ-инструменты, автономное OCR и перевод изображений.',
    },
  },
  ar: {
    storeLanguage: 'ar-sa',
    metaTitle: 'Shotera — لقطات شاشة وتسجيل أسرع وأكثر ذكاءً',
    metaDescription:
      'التقاط دقيق وتسجيل للشاشة وتحرير بالذكاء الاصطناعي وOCR دون اتصال وترجمة للصور وتثبيت على سطح مكتب Windows.',
    heroTitle: 'التقط وسجّل وحرّر باستخدام',
    heroAccent: 'الذكاء الاصطناعي في مكان واحد',
    heroSubtitle:
      'يجمع Shotera لقطات الشاشة والتعليقات وتسجيل GIF والقص بالذكاء الاصطناعي وOCR دون اتصال وترجمة الصور وتثبيت المراجع ضمن سير عمل سلس على Windows.',
    philosophy: 'سريع ودقيق ويحافظ على تركيزك.',
    featuresTitle: 'كل ما تحتاجه بعد التقاط الشاشة',
    featuresSubtitle: 'التقط واشرح وشارك من دون التنقل المستمر بين التطبيقات.',
    features: [
      { title: 'التقاط ذكي', description: 'اكتشف النوافذ وعناصر الواجهة تلقائياً واضبط التحديد بدقة البكسل.' },
      { title: 'تعليقات واضحة', description: 'استخدم الأسهم والنص وترقيم الخطوات والتكبير والتمويه لتوضيح الفكرة.' },
      {
        title: 'تحرير الصور بالذكاء الاصطناعي',
        description: 'اعزل العناصر واحذف الأجزاء غير المرغوبة من داخل Shotera.',
      },
      { title: 'OCR دون اتصال', description: 'استخرج النص على جهازك من دون رفع لقطات الشاشة.' },
      { title: 'ترجمة الصور', description: 'تعرّف على النص داخل الصور وترجمه ضمن مسار الالتقاط.' },
      { title: 'التثبيت ووضع العرض', description: 'أبقِ المراجع ظاهرة ونظّف سطح المكتب بسرعة قبل العرض.' },
    ],
    workflowTitle: 'سير عمل واضح على Windows',
    workflow: [
      'اضغط F1 لالتقاط منطقة أو نافذة أو عنصر واجهة أو الشاشة كاملة.',
      'حسّن الحدود باستخدام الاكتشاف الذكي والعدسة المكبرة.',
      'أضف التعليقات أو أخفِ البيانات أو استخرج النص وترجمه أو استخدم أدوات الذكاء الاصطناعي.',
      'احفظ أو شارك، أو اضغط F3 لتثبيت الصورة على الشاشة.',
    ],
    privacyTitle: 'الخصوصية والتحكم',
    privacyText:
      'تُحفظ اللقطات محلياً ويعمل OCR دون اتصال على جهازك. تتوفر المستندات القانونية الرسمية حالياً باللغة الإنجليزية.',
    privacyLink: 'قراءة سياسة الخصوصية بالإنجليزية',
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        title: 'ما إصدارات Windows المدعومة؟',
        answer: 'راجع صفحة التنزيل الرسمية لمعرفة المتطلبات والإصدارات المدعومة حالياً.',
      },
      { title: 'هل Shotera مجاني؟', answer: 'ميزات الإصدار الأساسي مجانية دائماً، وبعض الميزات المتقدمة تتطلب Pro.' },
      { title: 'هل يرفع OCR لقطات الشاشة؟', answer: 'لا. يعالج OCR دون اتصال استخراج النص مباشرة على جهازك.' },
    ],
    ctaTitle: 'أنجز لقطة الشاشة التالية بوقت أقل',
    ctaText: 'ثبّت Shotera من Microsoft Store أو احصل على إصدارات أخرى من GitHub.',
    moreVersions: 'إصدارات أخرى',
    storeAria: 'تنزيل Shotera من Microsoft Store',
    pages: {
      about: ['حول Shotera', 'نطوّر تجربة التقاط سريعة ودقيقة وغير مشتتة لمن يعتمدون على لقطات الشاشة يومياً.'],
      contact: [
        'التواصل والملاحظات',
        'شارك اقتراحاتك أو بلّغ عن مشكلة عبر GitHub Issues، أو راسل Mosuzo Studio بالبريد الإلكتروني.',
      ],
      pricing: [
        'الإصدارات والأسعار',
        'الإصدار الأساسي مجاني دائماً، ويمكن اختيار Pro عند الحاجة إلى قدرات أكثر تقدماً.',
      ],
      services: [
        'ما الذي يقدمه Shotera',
        'من الالتقاط والتسجيل إلى التعرّف والمشاركة، أدوات التواصل المرئي في مكان واحد.',
      ],
      changelog: ['سجل التحديثات', 'اطّلع على الميزات الجديدة والتحسينات والإصلاحات في Shotera.'],
      notFound: ['الصفحة غير موجودة', 'ربما تغيّر العنوان. ارجع إلى الصفحة الرئيسية للمتابعة.'],
    },
    scenarios: scenarios(
      [
        'عرض تطبيق',
        'سير عمل شخصي',
        'لفرق SaaS',
        'للشركات الناشئة',
        'تعرّف على Shotera',
        'ملاحظات أسرع',
        'قريباً',
        'تفاصيل المنتج',
        'وضّح القيمة',
        'الإصدارات والخطط',
      ],
      Array(10).fill('اكتشف كيف يبسّط Shotera الالتقاط والشرح والمشاركة.')
    ),
    labels: {
      learnMore: 'اعرف المزيد',
      backHome: 'العودة للرئيسية',
      free: 'الأساسي',
      pro: 'Pro',
      freeText: 'ميزات الالتقاط والتعليق والتثبيت الأساسية مجانية دائماً.',
      proText: 'افتح الميزات المتقدمة؛ التفاصيل النهائية وفق الإصدار المنشور.',
      contactText: 'نرحب بالاقتراحات وتقارير الأخطاء وتجارب الاستخدام.',
      releaseText: 'يضيف الإصدار الأحدث أدوات صور بالذكاء الاصطناعي وOCR دون اتصال وترجمة الصور وتحسينات أخرى.',
      features: 'الميزات',
      pricing: 'الأسعار',
      blog: 'المدونة',
      about: 'حول',
      product: 'المنتج',
      support: 'الدعم',
      company: 'الشركة',
      terms: 'الشروط',
      privacy: 'الخصوصية',
      screenshot: 'لقطة الشاشة',
      recording: 'تسجيل الشاشة وGIF',
      cutout: 'قص بالذكاء الاصطناعي',
      ocr: 'OCR دون اتصال',
      translation: 'ترجمة الصور',
      pin: 'تثبيت على الشاشة',
      download: 'تنزيل',
      faq: 'الأسئلة الشائعة',
      changelog: 'التحديثات',
      feedback: 'الملاحظات',
      tagline: 'كفاءة أكبر في كل لقطة وتسجيل.',
      newLabel: 'جديد',
      announcement: 'Shotera v7.2.0+: أدوات صور بالذكاء الاصطناعي وOCR دون اتصال وترجمة الصور.',
    },
  },
  nl: {
    storeLanguage: 'nl-nl',
    metaTitle: 'Shotera — Snellere, slimmere screenshots en opnamen',
    metaDescription:
      'Nauwkeurige schermopname, AI-beeldbewerking, offline OCR, beeldvertaling en vastmaken op het Windows-bureaublad.',
    heroTitle: 'Leg vast, neem op en bewerk met',
    heroAccent: 'AI op één plek',
    heroSubtitle:
      'Shotera brengt screenshots, annotaties, GIF-opname, AI-uitknippen, offline OCR, beeldvertaling en vastgepinde referenties samen in één vlotte Windows-workflow.',
    philosophy: 'Snel, nauwkeurig en zonder je concentratie te onderbreken.',
    featuresTitle: 'Alles voor het werk na een screenshot',
    featuresSubtitle: 'Leg vast, leg uit en deel zonder steeds van app te wisselen.',
    features: [
      {
        title: 'Slim vastleggen',
        description: 'Detecteer vensters en interface-elementen en verfijn de selectie tot op de pixel.',
      },
      {
        title: 'Heldere annotaties',
        description: 'Gebruik pijlen, tekst, stapnummers, vergroting en vervaging om duidelijk te communiceren.',
      },
      {
        title: 'AI-beeldbewerking',
        description: 'Maak onderwerpen vrijstaand en verwijder ongewenste details binnen Shotera.',
      },
      { title: 'Offline OCR', description: 'Haal tekst lokaal uit beelden zonder screenshots te uploaden.' },
      { title: 'Beeldvertaling', description: 'Herken en vertaal tekst in afbeeldingen tijdens je vastlegworkflow.' },
      {
        title: 'Vastmaken en presentatiemodus',
        description: 'Houd referenties zichtbaar en ruim je bureaublad op voor een presentatie.',
      },
    ],
    workflowTitle: 'Een gerichte Windows-workflow',
    workflow: [
      'Druk op F1 voor een gebied, venster, interface-element of volledig scherm.',
      'Verfijn de grenzen met slimme detectie en het vergrootglas.',
      'Annoteer, verberg gegevens, lees tekst, vertaal of gebruik AI-gereedschap.',
      'Sla op, deel of druk op F3 om het beeld vast te maken.',
    ],
    privacyTitle: 'Privacy en controle',
    privacyText:
      'Opnamen worden lokaal bewaard en offline OCR werkt op je apparaat. De officiële juridische documenten zijn voorlopig in het Engels beschikbaar.',
    privacyLink: 'Lees het privacybeleid in het Engels',
    faqTitle: 'Veelgestelde vragen',
    faqs: [
      {
        title: 'Welke Windows-versies worden ondersteund?',
        answer: 'Bekijk de officiële downloadpagina voor de actuele systeemvereisten en ondersteunde versies.',
      },
      {
        title: 'Is Shotera gratis?',
        answer: 'De basisfuncties blijven altijd gratis; sommige geavanceerde functies vereisen Pro.',
      },
      {
        title: 'Uploadt OCR mijn screenshots?',
        answer: 'Nee. Offline OCR verwerkt de tekstherkenning rechtstreeks op je apparaat.',
      },
    ],
    ctaTitle: 'Maak je volgende screenshot sneller af',
    ctaText: 'Installeer Shotera via de Microsoft Store of download andere versies op GitHub.',
    moreVersions: 'Andere versies',
    storeAria: 'Shotera downloaden uit de Microsoft Store',
    pages: {
      about: [
        'Over Shotera',
        'We bouwen een snelle, nauwkeurige en rustige vastlegervaring voor iedereen die dagelijks met screenshots werkt.',
      ],
      contact: ['Contact en feedback', 'Deel suggesties of meld problemen via GitHub Issues, of mail Mosuzo Studio.'],
      pricing: [
        'Edities en prijzen',
        'De basiseditie blijft altijd gratis. Voor geavanceerdere workflows kun je Pro kiezen.',
      ],
      services: [
        'Wat Shotera voor je doet',
        'Van vastleggen en opnemen tot herkennen en delen: al je visuele gereedschap op één plek.',
      ],
      changelog: ['Versie-informatie', 'Bekijk nieuwe functies, verbeteringen en oplossingen in Shotera.'],
      notFound: ['Pagina niet gevonden', 'Het adres is mogelijk gewijzigd. Ga terug naar de startpagina.'],
    },
    scenarios: scenarios(
      [
        'App-presentatie',
        'Persoonlijke workflow',
        'Voor SaaS-teams',
        'Voor startups',
        'Ontdek Shotera',
        'Snellere feedback',
        'Binnenkort',
        'Productdetails',
        'Waarde helder tonen',
        'Edities en abonnementen',
      ],
      Array(10).fill('Ontdek hoe Shotera vastleggen, uitleggen en delen eenvoudiger maakt.')
    ),
    labels: {
      learnMore: 'Meer informatie',
      backHome: 'Terug naar home',
      free: 'Basis',
      pro: 'Pro',
      freeText: 'De belangrijkste functies voor vastleggen, annoteren en vastmaken blijven altijd gratis.',
      proText: 'Ontgrendel geavanceerde mogelijkheden; de gepubliceerde versie is leidend.',
      contactText: 'Suggesties, foutmeldingen en praktijkvoorbeelden zijn van harte welkom.',
      releaseText:
        'De nieuwste versie voegt AI-beeldgereedschap, offline OCR, beeldvertaling en andere verbeteringen toe.',
      features: 'Functies',
      pricing: 'Prijzen',
      blog: 'Blog',
      about: 'Over',
      product: 'Product',
      support: 'Ondersteuning',
      company: 'Bedrijf',
      terms: 'Voorwaarden',
      privacy: 'Privacy',
      screenshot: 'Screenshot',
      recording: 'Scherm- en GIF-opname',
      cutout: 'AI-uitknippen',
      ocr: 'Offline OCR',
      translation: 'Beeldvertaling',
      pin: 'Vastmaken op scherm',
      download: 'Downloaden',
      faq: 'FAQ',
      changelog: 'Updates',
      feedback: 'Feedback',
      tagline: 'Efficiënter bij elke screenshot en opname.',
      newLabel: 'NIEUW',
      announcement: 'Shotera v7.2.0+: AI-beeldgereedschap, offline OCR en beeldvertaling.',
    },
  },
  pl: {
    storeLanguage: 'pl-pl',
    metaTitle: 'Shotera — Szybsze i inteligentniejsze zrzuty oraz nagrania',
    metaDescription:
      'Precyzyjne przechwytywanie, nagrywanie ekranu, edycja AI, OCR offline, tłumaczenie obrazów i przypinanie w Windows.',
    heroTitle: 'Przechwytuj, nagrywaj i edytuj z',
    heroAccent: 'AI w jednym miejscu',
    heroSubtitle:
      'Shotera łączy zrzuty ekranu, adnotacje, nagrywanie GIF, wycinanie AI, OCR offline, tłumaczenie obrazów i przypięte materiały w płynnym środowisku Windows.',
    philosophy: 'Szybko, precyzyjnie i bez wybijania z rytmu pracy.',
    featuresTitle: 'Wszystko, czego potrzebujesz po zrobieniu zrzutu',
    featuresSubtitle: 'Przechwytuj, objaśniaj i udostępniaj bez ciągłego przełączania aplikacji.',
    features: [
      {
        title: 'Inteligentne przechwytywanie',
        description: 'Wykrywaj okna i elementy interfejsu oraz dopracuj zaznaczenie co do piksela.',
      },
      {
        title: 'Czytelne adnotacje',
        description: 'Strzałki, tekst, numeracja kroków, powiększenie i rozmycie pomagają jasno przekazać informacje.',
      },
      {
        title: 'Edycja obrazów AI',
        description: 'Wycinaj obiekty i usuwaj niechciane elementy bez opuszczania Shotera.',
      },
      { title: 'OCR offline', description: 'Wyodrębniaj tekst lokalnie, bez przesyłania zrzutów.' },
      { title: 'Tłumaczenie obrazów', description: 'Rozpoznawaj i tłumacz tekst na obrazach w tym samym procesie.' },
      {
        title: 'Przypinanie i tryb prezentacji',
        description: 'Miej materiały zawsze pod ręką i szybko uporządkuj pulpit przed prezentacją.',
      },
    ],
    workflowTitle: 'Skupiony proces pracy w Windows',
    workflow: [
      'Naciśnij F1, aby przechwycić obszar, okno, element lub cały ekran.',
      'Dopasuj granice dzięki inteligentnemu wykrywaniu i lupie.',
      'Dodaj adnotacje, ukryj dane, rozpoznaj tekst, przetłumacz lub użyj AI.',
      'Zapisz, udostępnij albo naciśnij F3, aby przypiąć obraz.',
    ],
    privacyTitle: 'Prywatność i kontrola',
    privacyText:
      'Zrzuty są zapisywane lokalnie, a OCR offline działa na urządzeniu. Oficjalne dokumenty prawne są obecnie dostępne w języku angielskim.',
    privacyLink: 'Przeczytaj politykę prywatności po angielsku',
    faqTitle: 'Częste pytania',
    faqs: [
      {
        title: 'Jakie wersje Windows są obsługiwane?',
        answer: 'Aktualne wymagania i wspierane wersje znajdziesz na oficjalnej stronie pobierania.',
      },
      {
        title: 'Czy Shotera jest bezpłatna?',
        answer: 'Funkcje wersji podstawowej są bezpłatne na zawsze; część zaawansowanych opcji wymaga Pro.',
      },
      { title: 'Czy OCR przesyła zrzuty?', answer: 'Nie. OCR offline przetwarza tekst bezpośrednio na urządzeniu.' },
    ],
    ctaTitle: 'Szybciej przygotuj kolejny zrzut',
    ctaText: 'Zainstaluj Shotera z Microsoft Store lub pobierz inne wersje z GitHub.',
    moreVersions: 'Inne wersje',
    storeAria: 'Pobierz Shotera z Microsoft Store',
    pages: {
      about: [
        'O Shotera',
        'Tworzymy szybkie, precyzyjne i dyskretne narzędzie dla osób, które codziennie pracują ze zrzutami ekranu.',
      ],
      contact: ['Kontakt i opinie', 'Sugestie i błędy zgłaszaj przez GitHub Issues lub napisz do Mosuzo Studio.'],
      pricing: [
        'Wersje i ceny',
        'Wersja podstawowa pozostaje bezpłatna. Dla bardziej zaawansowanych potrzeb dostępna będzie wersja Pro.',
      ],
      services: [
        'Co oferuje Shotera',
        'Od przechwytywania i nagrywania po rozpoznawanie i udostępnianie — wszystkie narzędzia wizualne w jednym miejscu.',
      ],
      changelog: ['Historia zmian', 'Poznaj nowe funkcje, ulepszenia i poprawki w Shotera.'],
      notFound: ['Nie znaleziono strony', 'Adres mógł się zmienić. Wróć na stronę główną.'],
    },
    scenarios: scenarios(
      [
        'Prezentacja aplikacji',
        'Osobisty proces pracy',
        'Dla zespołów SaaS',
        'Dla startupów',
        'Poznaj Shotera',
        'Sprawniejsze opinie',
        'Już wkrótce',
        'Szczegóły produktu',
        'Jasno pokaż wartość',
        'Wersje i plany',
      ],
      Array(10).fill('Zobacz, jak Shotera upraszcza przechwytywanie, objaśnianie i udostępnianie.')
    ),
    labels: {
      learnMore: 'Dowiedz się więcej',
      backHome: 'Wróć na stronę główną',
      free: 'Podstawowa',
      pro: 'Pro',
      freeText: 'Najważniejsze funkcje przechwytywania, adnotacji i przypinania są bezpłatne na zawsze.',
      proText: 'Odblokuj funkcje zaawansowane; obowiązują szczegóły opublikowanej wersji.',
      contactText: 'Czekamy na sugestie, zgłoszenia błędów i przykłady zastosowań.',
      releaseText: 'Najnowsza wersja dodaje narzędzia AI, OCR offline, tłumaczenie obrazów i inne ulepszenia.',
      features: 'Funkcje',
      pricing: 'Ceny',
      blog: 'Blog',
      about: 'O nas',
      product: 'Produkt',
      support: 'Wsparcie',
      company: 'Firma',
      terms: 'Warunki',
      privacy: 'Prywatność',
      screenshot: 'Zrzut ekranu',
      recording: 'Nagrywanie ekranu i GIF',
      cutout: 'Wycinanie AI',
      ocr: 'OCR offline',
      translation: 'Tłumaczenie obrazów',
      pin: 'Przypnij na ekranie',
      download: 'Pobierz',
      faq: 'FAQ',
      changelog: 'Aktualizacje',
      feedback: 'Opinie',
      tagline: 'Większa wydajność każdego zrzutu i nagrania.',
      newLabel: 'NOWOŚĆ',
      announcement: 'Shotera v7.2.0+: narzędzia AI, OCR offline i tłumaczenie obrazów.',
    },
  },
  sv: {
    storeLanguage: 'sv-se',
    metaTitle: 'Shotera — Snabbare och smartare skärmbilder och inspelningar',
    metaDescription:
      'Exakt skärmfångst, inspelning, AI-bildredigering, offline-OCR, bildöversättning och fästning på Windows-skrivbordet.',
    heroTitle: 'Fånga, spela in och redigera med',
    heroAccent: 'AI på samma plats',
    heroSubtitle:
      'Shotera samlar skärmbilder, anteckningar, GIF-inspelning, AI-friläggning, offline-OCR, bildöversättning och fästa referenser i ett smidigt Windows-flöde.',
    philosophy: 'Snabbt, exakt och utan att störa koncentrationen.',
    featuresTitle: 'Allt du behöver efter en skärmbild',
    featuresSubtitle: 'Fånga, förklara och dela utan att växla mellan flera appar.',
    features: [
      {
        title: 'Smart fångst',
        description: 'Upptäck fönster och gränssnittselement och finjustera markeringen på pixelnivå.',
      },
      {
        title: 'Tydliga anteckningar',
        description: 'Pilar, text, stegnummer, förstoring och oskärpa gör budskapet enkelt att förstå.',
      },
      {
        title: 'AI-bildredigering',
        description: 'Frilägg motiv och ta bort oönskade detaljer utan att lämna Shotera.',
      },
      { title: 'Offline-OCR', description: 'Extrahera text lokalt på enheten utan att ladda upp skärmbilder.' },
      { title: 'Bildöversättning', description: 'Identifiera och översätt text i bilder direkt i fångstflödet.' },
      {
        title: 'Fästning och presentationsläge',
        description: 'Håll referenser synliga och rensa skrivbordet snabbt inför en presentation.',
      },
    ],
    workflowTitle: 'Ett fokuserat arbetsflöde i Windows',
    workflow: [
      'Tryck F1 för att fånga ett område, fönster, gränssnittselement eller hela skärmen.',
      'Finjustera gränserna med smart upptäckt och förstoringsglas.',
      'Kommentera, dölj, läs av text, översätt eller använd AI-verktyg.',
      'Spara, dela eller tryck F3 för att fästa bilden på skärmen.',
    ],
    privacyTitle: 'Integritet och kontroll',
    privacyText:
      'Skärmbilder sparas lokalt och offline-OCR körs på din enhet. Officiella juridiska dokument finns tills vidare på engelska.',
    privacyLink: 'Läs integritetspolicyn på engelska',
    faqTitle: 'Vanliga frågor',
    faqs: [
      {
        title: 'Vilka Windows-versioner stöds?',
        answer: 'Se den officiella nedladdningssidan för aktuella systemkrav och versioner.',
      },
      {
        title: 'Är Shotera gratis?',
        answer: 'Basfunktionerna är kostnadsfria för alltid; vissa avancerade funktioner kräver Pro.',
      },
      { title: 'Laddar OCR upp mina skärmbilder?', answer: 'Nej. Offline-OCR behandlar texten direkt på din enhet.' },
    ],
    ctaTitle: 'Gör nästa skärmbild klar snabbare',
    ctaText: 'Installera Shotera från Microsoft Store eller hämta andra versioner på GitHub.',
    moreVersions: 'Andra versioner',
    storeAria: 'Hämta Shotera från Microsoft Store',
    pages: {
      about: [
        'Om Shotera',
        'Vi bygger en snabb, exakt och diskret fångstupplevelse för alla som arbetar med skärmbilder varje dag.',
      ],
      contact: [
        'Kontakt och feedback',
        'Dela förslag eller rapportera problem via GitHub Issues, eller mejla Mosuzo Studio.',
      ],
      pricing: [
        'Utgåvor och priser',
        'Basutgåvan är kostnadsfri för alltid. För mer avancerade arbetsflöden kan du välja Pro.',
      ],
      services: [
        'Vad Shotera kan göra',
        'Från fångst och inspelning till igenkänning och delning — alla visuella verktyg samlade.',
      ],
      changelog: ['Versionsnyheter', 'Se nya funktioner, förbättringar och rättningar i Shotera.'],
      notFound: ['Sidan hittades inte', 'Adressen kan ha ändrats. Gå tillbaka till startsidan.'],
    },
    scenarios: scenarios(
      [
        'App-presentation',
        'Personligt arbetsflöde',
        'För SaaS-team',
        'För startups',
        'Upptäck Shotera',
        'Snabbare feedback',
        'Kommer snart',
        'Produktinformation',
        'Visa värdet tydligt',
        'Utgåvor och planer',
      ],
      Array(10).fill('Upptäck hur Shotera förenklar fångst, förklaring och delning.')
    ),
    labels: {
      learnMore: 'Läs mer',
      backHome: 'Till startsidan',
      free: 'Bas',
      pro: 'Pro',
      freeText: 'De viktigaste funktionerna för fångst, anteckning och fästning är kostnadsfria för alltid.',
      proText: 'Lås upp avancerade funktioner; publicerad versionsinformation gäller.',
      contactText: 'Förslag, felrapporter och användningsfall är alltid välkomna.',
      releaseText:
        'Den senaste versionen innehåller AI-bildverktyg, offline-OCR, bildöversättning och fler förbättringar.',
      features: 'Funktioner',
      pricing: 'Priser',
      blog: 'Blogg',
      about: 'Om',
      product: 'Produkt',
      support: 'Support',
      company: 'Företag',
      terms: 'Villkor',
      privacy: 'Integritet',
      screenshot: 'Skärmbild',
      recording: 'Skärm- och GIF-inspelning',
      cutout: 'AI-friläggning',
      ocr: 'Offline-OCR',
      translation: 'Bildöversättning',
      pin: 'Fäst på skärmen',
      download: 'Ladda ned',
      faq: 'Vanliga frågor',
      changelog: 'Uppdateringar',
      feedback: 'Feedback',
      tagline: 'Effektivare vid varje skärmbild och inspelning.',
      newLabel: 'NYTT',
      announcement: 'Shotera v7.2.0+: AI-bildverktyg, offline-OCR och bildöversättning.',
    },
  },
};
