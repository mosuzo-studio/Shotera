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
  pricing: {
    tagline: string;
    heroTitle: string;
    heroSubtitle: string;
    plansTitle: string;
    plansSubtitle: string;
    popularRibbon: string;
    freePlan: { subtitle: string; period: string; items: string[]; cta: string };
    proPlan: { subtitle: string; period: string; items: string[]; cta: string };
    teamPlan: { title: string; subtitle: string; period: string; items: string[]; cta: string };
    whyTitle: string;
    whySubtitle: string;
    why: Array<{ title: string; description: string }>;
    stepsTitle: string;
    stepsTagline: string;
    steps: string[];
    faqTitle: string;
    faqSubtitle: string;
    faqs: Array<{ title: string; answer: string }>;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
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
      announcement:
        'Shotera v7.3.0+ 發布 —— 新增 AI 去背、插圖、離線 OCR 與圖片翻譯！（官網建置中，目前為預覽，以正式發布為準）»',
    },
    pricing: {
      tagline: '價格方案',
      heroTitle: '免費開始，需要時再升級',
      heroSubtitle: '日常截圖與標註永久免費。需要錄影、AI 去背、圖片翻譯等進階能力時，再升級到 Pro 或團隊版。',
      plansTitle: '選擇適合你的方案',
      plansSubtitle: '一次買斷，沒有隱藏費用',
      popularRibbon: '推薦',
      freePlan: {
        subtitle: '滿足每天的截圖需求',
        period: '永久免費',
        items: [
          '區域 / 視窗 / 全螢幕擷取',
          '智慧視窗與元素偵測',
          '完整標註工具（箭頭、方框、文字、highlight、模糊）',
          'Emoji 貼圖、放大鏡、步驟編號',
          '桌面釘選',
          '基本離線 OCR（每日限量）',
          '持續維護與版本更新',
        ],
        cta: '免費下載',
      },
      proPlan: {
        subtitle: '進階擷取與 AI 能力',
        period: '一次買斷',
        items: [
          '包含基本版全部功能',
          '高畫質錄影與 GIF 匯出',
          'AI 去背無限使用',
          'AI 消除 / 修圖無限使用',
          '離線 OCR 無限使用',
          '圖片翻譯',
          '擷取紀錄雲端同步',
          '一次買斷、終身使用、免費更新',
        ],
        cta: '立即購買',
      },
      teamPlan: {
        title: '團隊版',
        subtitle: '企業級服務與專屬支援',
        period: '/ 每人',
        items: [
          '包含 Pro 版全部功能',
          '可在公司與商業環境合法使用',
          '團隊統一授權與管理',
          '集中計費與開立發票',
          '專屬問題回報與需求通道',
          '最高等級技術支援與售後服務',
          '大量採購享優惠價格',
        ],
        cta: '聯絡我們',
      },
      whyTitle: '為什麼值得升級',
      whySubtitle: 'Pro 版讓你每天都在用的擷取、錄影與 AI 功能更快、更穩定。',
      why: [
        {
          title: '一次買斷，終身使用',
          description: 'Pro 版 $29 一次付清，沒有年費、沒有訂閱，後續版本更新也免費。',
        },
        {
          title: '本機優先，隱私安心',
          description: 'AI 去背、消除與 OCR 都在你的裝置上執行，不上傳任何內容，截圖只屬於你。',
        },
        {
          title: '多台裝置授權',
          description: '一組授權可在你自己的多台電腦上啟用，工作與家用之間自由切換。',
        },
        {
          title: '幾秒就能開始用',
          description: '安裝只要幾秒，開箱即用，不需要複雜設定。',
        },
        {
          title: '持續進化',
          description: '授權期間的所有新功能與版本升級都免費提供。',
        },
        {
          title: '優先支援',
          description: 'Pro 與團隊版使用者遇到問題時可獲得更快的回應。',
        },
      ],
      stepsTitle: '三步升級 Pro',
      stepsTagline: '簡單快速',
      steps: ['下載並安裝 Shotera', '選擇 Pro 方案並完成購買', '啟用授權，解鎖全部功能', '開始更快地擷取與錄影'],
      faqTitle: '價格常見問題',
      faqSubtitle: '關於付款與授權，你可能想先了解這些。',
      faqs: [
        {
          title: '基本版真的永久免費嗎？',
          answer:
            '是的。擷取、標註、桌面釘選與基本離線 OCR 永久免費，沒有使用期限，也不會強迫升級。免費使用者同樣能獲得後續的維護與版本更新。',
        },
        {
          title: 'Pro 版是買斷還是訂閱？',
          answer:
            'Pro 版是 $29 一次買斷，終身使用，不需要每年續約。付款後你將永久擁有該授權，並可免費取得後續版本更新。Pro 版僅限個人使用。',
        },
        {
          title: 'Pro 版和團隊版差在哪裡？',
          answer:
            '團隊版（每人 $39）是為公司與商業團隊設計的，可在商業環境中合法使用，並提供統一授權管理、集中計費與發票、專屬問題回報與需求通道，以及最高等級的技術支援與售後服務。大量採購另有優惠價格。',
        },
        {
          title: '一組授權可以用在幾台裝置上？',
          answer: 'Pro 授權可在你個人的多台裝置上使用。團隊版則以每人為單位授權，方便集中管理與計費。',
        },
        {
          title: '支援哪些付款方式？',
          answer: '我們支援主流信用卡與 PayPal，結帳流程安全便利。',
        },
        {
          title: '可以退款嗎？',
          answer: '團隊版授權提供 7 天退款保障。有任何問題歡迎隨時與我們聯絡。',
        },
      ],
      ctaTitle: '今天就讓截圖工作更有效率',
      ctaSubtitle: '免費下載，幾秒安裝，想升級時再升級。',
      ctaButton: '免費下載 Shotera',
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
      announcement:
        'Shotera v7.3.0+ 公開 —— AI切り抜き、イラスト、オフラインOCR、画像翻訳を新搭載！（本サイトは制作中のプレビューです。正式リリース内容が優先されます）»',
    },
    pricing: {
      tagline: '料金プラン',
      heroTitle: '無料で始めて、必要になったらアップグレード',
      heroSubtitle:
        '日々のキャプチャと注釈はずっと無料です。録画、AI切り抜き、画像翻訳が必要になったら、Proまたはチーム版をご検討ください。',
      plansTitle: '用途に合うプランをお選びください',
      plansSubtitle: '買い切り、追加料金はありません',
      popularRibbon: 'おすすめ',
      freePlan: {
        subtitle: '毎日の作業に必要な機能をひと通り',
        period: 'ずっと無料',
        items: [
          '範囲・ウィンドウ・全画面のキャプチャ',
          'ウィンドウとUI要素の自動検出',
          '充実した注釈ツール（矢印、囲み、テキスト、蛍光ペン、ぼかし）',
          '絵文字スタンプ、拡大鏡、手順番号',
          '画面へのピン留め',
          'オフラインOCRの基本利用（1日の上限あり）',
          '継続的なメンテナンスとアップデート',
        ],
        cta: '無料ダウンロード',
      },
      proPlan: {
        subtitle: '高度なキャプチャとAI機能',
        period: '買い切り',
        items: [
          'ベーシックのすべての機能',
          '高画質録画とGIF書き出し',
          'AI切り抜きが無制限',
          'AI消しゴム・修復が無制限',
          'オフラインOCRが無制限',
          '画像翻訳',
          'キャプチャ履歴のクラウド同期',
          '買い切りで永続利用、アップデートも無料',
        ],
        cta: '購入する',
      },
      teamPlan: {
        title: 'チーム',
        subtitle: '法人向けサービスと専任サポート',
        period: '/ 1人',
        items: [
          'Proのすべての機能',
          '社内および商用環境での利用が可能',
          'ライセンスの一元管理',
          '請求書の一括発行と支払いのまとめ',
          '不具合報告・機能要望の専用窓口',
          '最上位の技術サポートとアフターサービス',
          'まとめ買いのボリューム割引',
        ],
        cta: 'お問い合わせ',
      },
      whyTitle: 'アップグレードする価値',
      whySubtitle: 'Proなら、毎日使うキャプチャ、録画、AI機能がさらに速く、安定して使えます。',
      why: [
        {
          title: '買い切りで永続利用',
          description:
            'Proは$29の一度のお支払いのみ。年額費用やサブスクリプションはなく、今後のアップデートも無料です。',
        },
        {
          title: 'ローカル処理でプライバシーを確保',
          description:
            'AI切り抜き、消しゴム、OCRはすべて端末上で動作します。アップロードは行わず、画像はあなたのものです。',
        },
        {
          title: '複数の端末で利用可能',
          description: '1つのライセンスをご自身の複数のPCで有効化できます。仕事用と自宅用をそのまま行き来できます。',
        },
        {
          title: '数秒で使い始められる',
          description: 'インストールは数秒で完了し、そのまま使えます。面倒な初期設定は不要です。',
        },
        {
          title: '進化を続けます',
          description: 'ライセンス期間中の新機能とバージョンアップは、すべて無料でご利用いただけます。',
        },
        {
          title: '優先サポート',
          description: 'Proとチーム版のご利用者には、必要なときにより早く対応します。',
        },
      ],
      stepsTitle: '3ステップでProへ',
      stepsTagline: 'かんたん・すぐ完了',
      steps: [
        'Shoteraをダウンロードしてインストール',
        'Proプランを選んで購入',
        'ライセンスを認証してすべての機能を解放',
        'キャプチャと録画がもっと速くなります',
      ],
      faqTitle: '料金に関するよくある質問',
      faqSubtitle: 'お支払いとライセンスについて、よくいただく質問をまとめました。',
      faqs: [
        {
          title: 'ベーシックは本当にずっと無料ですか？',
          answer:
            'はい。キャプチャ、注釈、ピン留め、オフラインOCRの基本機能は無期限で無料です。期限やアップグレードの強制はありません。無料でお使いの方にも、継続的なメンテナンスとアップデートを提供します。',
        },
        {
          title: 'Proは買い切りですか、サブスクリプションですか？',
          answer:
            'Proは$29の買い切りで、ずっとお使いいただけます。毎年の更新は必要ありません。ご購入後はライセンスが永続的に有効で、今後のバージョンアップも無料です。Proは個人利用に限られます。',
        },
        {
          title: 'Proとチーム版の違いは何ですか？',
          answer:
            'チーム版（1人あたり$39）は企業や商用チーム向けのプランで、社内および商用環境での利用が認められています。ライセンスの一元管理、請求書の一括発行、不具合・要望の専用窓口、最上位の技術サポートとアフターサービスが含まれます。まとめ買いにはボリューム割引もご用意しています。',
        },
        {
          title: '1つのライセンスで何台まで使えますか？',
          answer:
            'Proライセンスはご自身の複数の端末でお使いいただけます。チーム版は1人単位のライセンスで、管理と請求をまとめやすくなっています。',
        },
        {
          title: '利用できる支払い方法は？',
          answer: '主要なクレジットカードとPayPalに対応しており、安全かつ簡単にお支払いいただけます。',
        },
        {
          title: '返金はできますか？',
          answer: 'チーム版ライセンスには7日間の返金保証が付いています。ご不明な点はお気軽にお問い合わせください。',
        },
      ],
      ctaTitle: '今日から、スクリーンショットをもっと生産的に',
      ctaSubtitle: '無料でダウンロードして数秒でインストール。アップグレードはいつでもできます。',
      ctaButton: 'Shoteraを無料でダウンロード',
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
      announcement:
        'Shotera v7.3.0+ chegou — recorte com IA, ilustração, OCR offline e tradução de imagens! (Site em construção; esta é apenas uma prévia, vale a versão final) »',
    },
    pricing: {
      tagline: 'Planos e preços',
      heroTitle: 'Comece de graça e evolua quando precisar',
      heroSubtitle:
        'Capturar e anotar no dia a dia é gratuito para sempre. Quando precisar de gravação, recorte com IA e tradução de imagens, escolha o Pro ou o plano Equipe.',
      plansTitle: 'Escolha o plano ideal para você',
      plansSubtitle: 'Pagamento único, sem taxas escondidas',
      popularRibbon: 'Mais escolhido',
      freePlan: {
        subtitle: 'Tudo o que você usa no dia a dia',
        period: 'Grátis para sempre',
        items: [
          'Captura de área, janela ou tela inteira',
          'Detecção inteligente de janelas e elementos',
          'Kit completo de anotações (setas, caixas, texto, destaque, desfoque)',
          'Figurinhas de emoji, lupa e passos numerados',
          'Fixar na tela',
          'OCR offline básico (limite diário)',
          'Manutenção e atualizações contínuas',
        ],
        cta: 'Baixar grátis',
      },
      proPlan: {
        subtitle: 'Captura avançada e recursos de IA',
        period: 'Pagamento único',
        items: [
          'Tudo do plano Básico',
          'Gravação em alta definição e exportação em GIF',
          'Remoção de fundo com IA ilimitada',
          'Borracha e retoque com IA ilimitados',
          'OCR offline ilimitado',
          'Tradução de imagens',
          'Sincronização do histórico na nuvem',
          'Pague uma vez, use para sempre, com atualizações gratuitas',
        ],
        cta: 'Comprar agora',
      },
      teamPlan: {
        title: 'Equipe',
        subtitle: 'Serviço corporativo e suporte dedicado',
        period: '/ por usuário',
        items: [
          'Tudo do plano Pro',
          'Uso comercial autorizado dentro da empresa',
          'Licenciamento centralizado e gestão de usuários',
          'Faturamento consolidado com emissão de nota fiscal',
          'Canal exclusivo para bugs e solicitações',
          'Suporte técnico e pós-venda de nível máximo',
          'Descontos progressivos em compras por volume',
        ],
        cta: 'Fale com a gente',
      },
      whyTitle: 'Por que vale a pena migrar para o Pro',
      whySubtitle:
        'O Pro deixa mais rápidos e confiáveis os recursos de captura, gravação e IA que você já usa todos os dias.',
      why: [
        {
          title: 'Pague uma vez, use para sempre',
          description:
            'O Pro é um pagamento único de $29, sem mensalidade nem assinatura. As atualizações futuras são gratuitas.',
        },
        {
          title: 'Processamento local e privado',
          description:
            'Recorte com IA, borracha e OCR rodam no seu dispositivo. Nada é enviado para a nuvem e suas capturas continuam suas.',
        },
        {
          title: 'Licença para vários dispositivos',
          description:
            'Uma licença ativa em todos os seus computadores. Alterne entre trabalho e casa sem complicação.',
        },
        {
          title: 'Pronto em segundos',
          description: 'A instalação leva segundos e já funciona de primeira, sem configuração complicada.',
        },
        {
          title: 'Sempre evoluindo',
          description: 'Todos os novos recursos e versões lançados durante a sua licença estão inclusos.',
        },
        {
          title: 'Atendimento prioritário',
          description: 'Quem usa Pro ou Equipe recebe respostas mais rápidas quando realmente precisa.',
        },
      ],
      stepsTitle: 'Três passos para usar o Pro',
      stepsTagline: 'Rápido e sem complicação',
      steps: [
        'Baixe e instale o Shotera',
        'Escolha o plano Pro e finalize a compra',
        'Ative a licença e libere todos os recursos',
        'Capture e grave com mais agilidade',
      ],
      faqTitle: 'Dúvidas sobre preços',
      faqSubtitle: 'O que costumam perguntar sobre pagamento e licenciamento.',
      faqs: [
        {
          title: 'O plano gratuito é realmente grátis?',
          answer:
            'Sim. Captura, anotações, fixar na tela e o OCR offline básico são gratuitos para sempre, sem prazo de validade e sem upgrade obrigatório. Quem usa a versão gratuita também recebe manutenção e atualizações.',
        },
        {
          title: 'O Pro é compra única ou assinatura?',
          answer:
            'O Pro é uma compra única de $29 e é seu para sempre, sem renovação anual. Você tem acesso permanente à licença e recebe as atualizações futuras sem custo. O Pro é para uso pessoal.',
        },
        {
          title: 'Qual a diferença entre Pro e Equipe?',
          answer:
            'O plano Equipe ($39 por usuário) foi feito para empresas e equipes comerciais e autoriza o uso profissional dentro da organização. Inclui licenciamento centralizado, faturamento consolidado com nota fiscal, canal exclusivo para bugs e solicitações, além de suporte técnico e pós-venda de nível máximo. Compras por volume têm desconto.',
        },
        {
          title: 'Em quantos dispositivos posso usar uma licença?',
          answer:
            'A licença Pro funciona nos seus dispositivos pessoais. O plano Equipe é licenciado por usuário, o que facilita a gestão e o faturamento centralizados.',
        },
        {
          title: 'Quais formas de pagamento vocês aceitam?',
          answer: 'Aceitamos os principais cartões de crédito e PayPal, em um checkout seguro e prático.',
        },
        {
          title: 'É possível pedir reembolso?',
          answer: 'As licenças do plano Equipe têm política de reembolso de 7 dias. Fale com a gente se tiver dúvidas.',
        },
      ],
      ctaTitle: 'Deixe suas capturas mais produtivas hoje',
      ctaSubtitle: 'Baixe de graça, instale em segundos e evolua quando quiser.',
      ctaButton: 'Baixar o Shotera grátis',
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
      announcement:
        'Shotera v7.3.0+ ya está aquí: recorte con IA, ilustración, OCR sin conexión y traducción de imágenes. (Sitio en construcción; solo una vista previa, prevalece la versión final) »',
    },
    pricing: {
      tagline: 'Planes y precios',
      heroTitle: 'Empieza gratis y mejora cuando lo necesites',
      heroSubtitle:
        'Capturar y anotar a diario es gratis para siempre. Cuando necesites grabación, recorte con IA o traducción de imágenes, pasa a Pro o al plan Equipo.',
      plansTitle: 'Elige el plan que mejor te encaje',
      plansSubtitle: 'Pago único, sin cargos ocultos',
      popularRibbon: 'El más elegido',
      freePlan: {
        subtitle: 'Todo lo que usas en el día a día',
        period: 'Gratis para siempre',
        items: [
          'Captura de área, ventana o pantalla completa',
          'Detección inteligente de ventanas y elementos',
          'Kit completo de anotación (flechas, cajas, texto, resaltado, desenfoque)',
          'Stickers de emoji, lupa y pasos numerados',
          'Fijar en pantalla',
          'OCR sin conexión básico (límite diario)',
          'Mantenimiento y actualizaciones continuas',
        ],
        cta: 'Descargar gratis',
      },
      proPlan: {
        subtitle: 'Captura avanzada y funciones de IA',
        period: 'Pago único',
        items: [
          'Todo lo del plan Básico',
          'Grabación en alta definición y exportación a GIF',
          'Recorte de fondo con IA sin límite',
          'Borrador y retoque con IA sin límite',
          'OCR sin conexión ilimitado',
          'Traducción de imágenes',
          'Sincronización del historial en la nube',
          'Pago único, uso de por vida y actualizaciones gratuitas',
        ],
        cta: 'Comprar ahora',
      },
      teamPlan: {
        title: 'Equipo',
        subtitle: 'Servicio para empresas y soporte dedicado',
        period: '/ por usuario',
        items: [
          'Todo lo del plan Pro',
          'Uso comercial autorizado dentro de la empresa',
          'Licencias centralizadas y gestión de usuarios',
          'Facturación unificada con emisión de factura',
          'Canal exclusivo para incidencias y peticiones',
          'Soporte técnico y posventa de máximo nivel',
          'Descuentos por volumen en compras grandes',
        ],
        cta: 'Habla con nosotros',
      },
      whyTitle: 'Por qué merece la pena pasar a Pro',
      whySubtitle: 'Pro hace más rápidas y fiables las funciones de captura, grabación e IA que ya utilizas cada día.',
      why: [
        {
          title: 'Pago único, uso de por vida',
          description:
            'Pro es un pago único de $29: sin cuotas anuales ni suscripciones. Las futuras actualizaciones están incluidas.',
        },
        {
          title: 'Procesamiento local y privado',
          description:
            'El recorte con IA, el borrador y el OCR funcionan en tu dispositivo. Nada se sube a la nube y tus capturas siguen siendo tuyas.',
        },
        {
          title: 'Licencia para varios dispositivos',
          description: 'Una licencia se activa en todos tus equipos. Pasa del trabajo a casa sin fricciones.',
        },
        {
          title: 'Listo en segundos',
          description: 'Se instala en segundos y funciona desde el primer momento, sin configuraciones complicadas.',
        },
        {
          title: 'Siempre mejorando',
          description: 'Todas las funciones y versiones que se publiquen durante tu licencia están incluidas.',
        },
        {
          title: 'Soporte prioritario',
          description: 'Los usuarios de Pro y Equipo reciben respuestas más rápidas cuando de verdad hace falta.',
        },
      ],
      stepsTitle: 'Tres pasos para tener Pro',
      stepsTagline: 'Rápido y sencillo',
      steps: [
        'Descarga e instala Shotera',
        'Elige el plan Pro y completa la compra',
        'Activa la licencia y desbloquea todo',
        'Captura y graba con más agilidad',
      ],
      faqTitle: 'Preguntas sobre precios',
      faqSubtitle: 'Lo que suele preguntarse sobre pagos y licencias.',
      faqs: [
        {
          title: '¿El plan gratuito es realmente gratis?',
          answer:
            'Sí. La captura, las anotaciones, fijar en pantalla y el OCR sin conexión básico son gratis para siempre, sin límite de tiempo ni mejoras obligatorias. Quien usa la versión gratuita también recibe mantenimiento y actualizaciones.',
        },
        {
          title: '¿Pro es pago único o suscripción?',
          answer:
            'Pro es un pago único de $29 y es tuyo de por vida, sin renovaciones anuales. Tienes acceso permanente a tu licencia y las actualizaciones futuras son gratuitas. Pro es solo para uso personal.',
        },
        {
          title: '¿Qué diferencia hay entre Pro y Equipo?',
          answer:
            'El plan Equipo ($39 por usuario) está pensado para empresas y equipos comerciales, y autoriza el uso profesional dentro de la organización. Incluye licencias centralizadas, facturación unificada con factura, un canal exclusivo para incidencias y peticiones, y soporte técnico y posventa de máximo nivel. Las compras por volumen tienen descuento.',
        },
        {
          title: '¿En cuántos dispositivos puedo usar una licencia?',
          answer:
            'La licencia Pro funciona en tus dispositivos personales. El plan Equipo se licencia por usuario, lo que facilita la gestión y la facturación centralizadas.',
        },
        {
          title: '¿Qué métodos de pago aceptáis?',
          answer: 'Aceptamos las principales tarjetas de crédito y PayPal, con un proceso de pago seguro y cómodo.',
        },
        {
          title: '¿Puedo pedir un reembolso?',
          answer:
            'Las licencias del plan Equipo tienen una política de reembolso de 7 días. Escríbenos si tienes dudas.',
        },
      ],
      ctaTitle: 'Haz que tus capturas rindan más desde hoy',
      ctaSubtitle: 'Descárgalo gratis, instálalo en segundos y mejora cuando quieras.',
      ctaButton: 'Descargar Shotera gratis',
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
      announcement:
        'Shotera v7.3.0+ ist da — KI-Freistellung, Illustration, Offline-OCR und Bildübersetzung! (Website im Aufbau; derzeit nur eine Vorschau, maßgeblich ist die finale Veröffentlichung) »',
    },
    pricing: {
      tagline: 'Preise',
      heroTitle: 'Kostenlos starten, bei Bedarf erweitern',
      heroSubtitle:
        'Aufnehmen und Kommentieren im Alltag bleibt dauerhaft kostenlos. Wenn Sie Bildschirmaufnahmen, KI-Freistellung oder Bildübersetzung brauchen, wechseln Sie zu Pro oder Team.',
      plansTitle: 'Wählen Sie die passende Edition',
      plansSubtitle: 'Einmalzahlung, keine versteckten Kosten',
      popularRibbon: 'Beliebt',
      freePlan: {
        subtitle: 'Alles für die tägliche Arbeit',
        period: 'Dauerhaft kostenlos',
        items: [
          'Bereich, Fenster oder ganzen Bildschirm aufnehmen',
          'Intelligente Fenster- und Elementerkennung',
          'Vollständige Anmerkungswerkzeuge (Pfeile, Rahmen, Text, Hervorhebung, Unschärfe)',
          'Emoji-Sticker, Lupe und Schrittnummern',
          'An Bildschirm anheften',
          'Offline-OCR in der Basisversion (Tageslimit)',
          'Laufende Pflege und Updates',
        ],
        cta: 'Kostenlos herunterladen',
      },
      proPlan: {
        subtitle: 'Erweiterte Aufnahme und KI-Funktionen',
        period: 'Einmalzahlung',
        items: [
          'Alle Funktionen der Basisversion',
          'HD-Bildschirmaufnahme und GIF-Export',
          'Unbegrenzte KI-Freistellung',
          'Unbegrenzter KI-Radierer zum Entfernen von Objekten',
          'Unbegrenzte Offline-OCR',
          'Bildübersetzung',
          'Cloud-Synchronisierung des Aufnahmeverlaufs',
          'Einmal zahlen, dauerhaft nutzen, Updates inklusive',
        ],
        cta: 'Jetzt kaufen',
      },
      teamPlan: {
        title: 'Team',
        subtitle: 'Unternehmenslösung mit persönlichem Support',
        period: '/ Platz',
        items: [
          'Alle Funktionen von Pro',
          'Kommerzielle Nutzung im Unternehmen ausdrücklich erlaubt',
          'Zentrale Lizenzverwaltung',
          'Gesammelte Abrechnung und Rechnungsstellung',
          'Direkter Kanal für Fehlermeldungen und Wünsche',
          'Technischer Support und Kundendienst auf höchster Stufe',
          'Mengenrabatte bei größeren Bestellungen',
        ],
        cta: 'Kontakt aufnehmen',
      },
      whyTitle: 'Warum sich Pro lohnt',
      whySubtitle:
        'Pro macht die Aufnahme-, Aufzeichnungs- und KI-Funktionen, die Sie täglich nutzen, schneller und verlässlicher.',
      why: [
        {
          title: 'Einmal zahlen, dauerhaft nutzen',
          description:
            'Pro kostet einmalig $29 – keine Jahresgebühr, kein Abo. Alle künftigen Updates sind inbegriffen.',
        },
        {
          title: 'Lokal und datenschutzfreundlich',
          description:
            'KI-Freistellung, Radierer und OCR laufen auf Ihrem Gerät. Es wird nichts hochgeladen, Ihre Aufnahmen bleiben bei Ihnen.',
        },
        {
          title: 'Lizenz für mehrere Geräte',
          description:
            'Eine Lizenz lässt sich auf allen Ihren Rechnern aktivieren – zwischen Büro und Zuhause ohne Umstände.',
        },
        {
          title: 'In Sekunden einsatzbereit',
          description: 'Die Installation dauert Sekunden und läuft sofort, ohne aufwendige Einrichtung.',
        },
        {
          title: 'Wird ständig besser',
          description: 'Alle neuen Funktionen und Versionen während Ihrer Lizenz sind kostenlos enthalten.',
        },
        {
          title: 'Vorrangiger Support',
          description: 'Nutzer von Pro und Team erhalten schnellere Antworten, wenn es darauf ankommt.',
        },
      ],
      stepsTitle: 'In drei Schritten zu Pro',
      stepsTagline: 'Schnell und unkompliziert',
      steps: [
        'Shotera herunterladen und installieren',
        'Pro-Edition auswählen und kaufen',
        'Lizenz aktivieren und alle Funktionen freischalten',
        'Schneller aufnehmen und aufzeichnen',
      ],
      faqTitle: 'Häufige Fragen zu Preisen',
      faqSubtitle: 'Was Sie zu Zahlung und Lizenzierung wissen sollten.',
      faqs: [
        {
          title: 'Ist die kostenlose Version wirklich kostenlos?',
          answer:
            'Ja. Aufnahme, Anmerkungen, Anheften und die Offline-OCR in der Basisversion bleiben dauerhaft kostenlos – ohne Zeitlimit und ohne Upgrade-Zwang. Auch kostenlose Nutzer erhalten weiterhin Pflege und Updates.',
        },
        {
          title: 'Ist Pro eine Einmalzahlung oder ein Abo?',
          answer:
            'Pro ist eine Einmalzahlung von $29 und gehört Ihnen dauerhaft. Eine jährliche Verlängerung ist nicht nötig. Sie behalten Ihre Lizenz unbefristet und erhalten künftige Versionen kostenlos. Pro ist ausschließlich für die private Nutzung vorgesehen.',
        },
        {
          title: 'Worin unterscheiden sich Pro und Team?',
          answer:
            'Team ($39 pro Platz) ist für Unternehmen und gewerbliche Teams gedacht und erlaubt die kommerzielle Nutzung im Unternehmen. Enthalten sind zentrale Lizenzverwaltung, gesammelte Abrechnung mit Rechnungsstellung, ein direkter Kanal für Fehlermeldungen und Wünsche sowie technischer Support und Kundendienst auf höchster Stufe. Bei größeren Bestellungen gibt es Mengenrabatte.',
        },
        {
          title: 'Für wie viele Geräte gilt eine Lizenz?',
          answer:
            'Eine Pro-Lizenz gilt für Ihre persönlichen Geräte. Team wird pro Platz lizenziert, was die zentrale Verwaltung und Abrechnung erleichtert.',
        },
        {
          title: 'Welche Zahlungsmethoden werden akzeptiert?',
          answer: 'Wir akzeptieren die gängigen Kreditkarten und PayPal – sicher und bequem im Bezahlvorgang.',
        },
        {
          title: 'Ist eine Rückerstattung möglich?',
          answer:
            'Für Team-Lizenzen gilt eine Rückerstattung innerhalb von 7 Tagen. Bei Fragen können Sie sich jederzeit an uns wenden.',
        },
      ],
      ctaTitle: 'Machen Sie Ihre Screenshots ab heute produktiver',
      ctaSubtitle: 'Kostenlos herunterladen, in Sekunden installieren und aufrüsten, wann Sie möchten.',
      ctaButton: 'Shotera kostenlos herunterladen',
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
      announcement:
        'Shotera v7.3.0+ est disponible — détourage IA, illustration, OCR hors ligne et traduction d’images ! (Site en construction, simple aperçu pour l’instant : la version finale prévaut) »',
    },
    pricing: {
      tagline: 'Tarifs',
      heroTitle: 'Gratuit pour commencer, évolutif si besoin',
      heroSubtitle:
        'Capturer et annoter au quotidien reste gratuit à vie. Lorsque vous avez besoin d’enregistrement, de détourage IA ou de traduction d’images, passez à Pro ou au forfait Équipe.',
      plansTitle: 'Choisissez le forfait qui vous convient',
      plansSubtitle: 'Paiement unique, aucun frais caché',
      popularRibbon: 'Le plus choisi',
      freePlan: {
        subtitle: 'Tout l’essentiel au quotidien',
        period: 'Gratuit à vie',
        items: [
          'Capture de zone, fenêtre ou écran complet',
          'Détection intelligente des fenêtres et éléments',
          'Outils d’annotation complets (flèches, cadres, texte, surlignage, flou)',
          'Autocollants emoji, loupe et numéros d’étape',
          'Épinglage à l’écran',
          'OCR hors ligne de base (limite quotidienne)',
          'Maintenance et mises à jour continues',
        ],
        cta: 'Télécharger gratuitement',
      },
      proPlan: {
        subtitle: 'Capture avancée et fonctions IA',
        period: 'Paiement unique',
        items: [
          'Tout du forfait Essentiel',
          'Enregistrement HD et export GIF',
          'Détourage IA illimité',
          'Gomme et retouche IA illimitées',
          'OCR hors ligne illimité',
          'Traduction d’images',
          'Synchronisation de l’historique dans le cloud',
          'Payez une fois, utilisez à vie, mises à jour incluses',
        ],
        cta: 'Acheter maintenant',
      },
      teamPlan: {
        title: 'Équipe',
        subtitle: 'Service entreprise et assistance dédiée',
        period: '/ par utilisateur',
        items: [
          'Tout du forfait Pro',
          'Usage commercial autorisé en entreprise',
          'Gestion centralisée des licences',
          'Facturation unifiée avec émission de factures',
          'Canal exclusif pour incidents et demandes',
          'Assistance technique et service après-vente de niveau maximum',
          'Remises sur volume pour achats groupés',
        ],
        cta: 'Nous contacter',
      },
      whyTitle: 'Pourquoi passer à Pro',
      whySubtitle:
        'Pro rend plus rapides et fiables les fonctions de capture, enregistrement et IA que vous utilisez chaque jour.',
      why: [
        {
          title: 'Payez une fois, utilisez à vie',
          description:
            'Pro est un paiement unique de $29, sans frais annuels ni abonnement. Les mises à jour futures sont incluses.',
        },
        {
          title: 'Traitement local et privé',
          description:
            'Le détourage IA, la gomme et l’OCR fonctionnent sur votre appareil. Rien n’est téléversé, vos captures restent vôtres.',
        },
        {
          title: 'Licence multi-appareils',
          description:
            'Une licence s’active sur tous vos ordinateurs. Alternez entre bureau et domicile sans contrainte.',
        },
        {
          title: 'Prêt en quelques secondes',
          description:
            'L’installation prend quelques secondes et fonctionne immédiatement, sans configuration complexe.',
        },
        {
          title: 'Toujours en évolution',
          description: 'Toutes les nouvelles fonctions et versions publiées pendant votre licence sont incluses.',
        },
        {
          title: 'Assistance prioritaire',
          description: 'Les utilisateurs Pro et Équipe reçoivent des réponses plus rapides quand c’est nécessaire.',
        },
      ],
      stepsTitle: 'Trois étapes vers Pro',
      stepsTagline: 'Rapide et simple',
      steps: [
        'Téléchargez et installez Shotera',
        'Choisissez le forfait Pro et finalisez l’achat',
        'Activez la licence et débloquez tout',
        'Capturez et enregistrez avec plus d’agilité',
      ],
      faqTitle: 'Questions sur les tarifs',
      faqSubtitle: 'Ce qu’on nous demande souvent sur les paiements et les licences.',
      faqs: [
        {
          title: 'Le forfait gratuit est-il vraiment gratuit ?',
          answer:
            'Oui. La capture, les annotations, l’épinglage et l’OCR hors ligne de base restent gratuits à vie, sans limite de temps ni upgrade forcé. Les utilisateurs gratuits bénéficient aussi de la maintenance et des mises à jour.',
        },
        {
          title: 'Pro est-il un paiement unique ou un abonnement ?',
          answer:
            'Pro est un paiement unique de $29 et vous appartient à vie, sans renouvellement annuel. Vous conservez votre licence en permanence et recevez les mises à jour futures gratuitement. Pro est réservé à un usage personnel.',
        },
        {
          title: 'Quelle est la différence entre Pro et Équipe ?',
          answer:
            'Le forfait Équipe ($39 par utilisateur) est conçu pour les entreprises et les équipes commerciales et autorise l’usage professionnel en entreprise. Il inclut la gestion centralisée des licences, la facturation unifiée avec émission de factures, un canal exclusif pour incidents et demandes, ainsi qu’une assistance technique et un service après-vente de niveau maximum. Les achats groupés bénéficient de remises.',
        },
        {
          title: 'Sur combien d’appareils puis-je utiliser une licence ?',
          answer:
            'La licence Pro fonctionne sur vos appareils personnels. Le forfait Équipe est licencié par utilisateur, ce qui simplifie la gestion et la facturation centralisées.',
        },
        {
          title: 'Quels modes de paiement acceptez-vous ?',
          answer:
            'Nous acceptons les principales cartes bancaires et PayPal, dans un processus de paiement sécurisé et pratique.',
        },
        {
          title: 'Puis-je demander un remboursement ?',
          answer:
            'Les licences du forfait Équipe bénéficient d’une politique de remboursement de 7 jours. Contactez-nous si vous avez des questions.',
        },
      ],
      ctaTitle: 'Rendez vos captures plus productives dès aujourd’hui',
      ctaSubtitle: 'Téléchargez gratuitement, installez en secondes et passez à l’offre supérieure quand vous voulez.',
      ctaButton: 'Télécharger Shotera gratuitement',
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
      announcement:
        'Shotera v7.3.0+ è disponibile — ritaglio con IA, illustrazione, OCR offline e traduzione immagini! (Sito in costruzione, per ora solo un’anteprima: fa fede la versione finale) »',
    },
    pricing: {
      tagline: 'Prezzi',
      heroTitle: 'Inizia gratis e passa al livello superiore quando serve',
      heroSubtitle:
        'Catturare e annotare ogni giorno rimane gratis per sempre. Quando ti servono registrazione, scontorno IA o traduzione immagini, passa a Pro o al piano Team.',
      plansTitle: 'Scegli il piano più adatto',
      plansSubtitle: 'Acquisto unico, nessun costo nascosto',
      popularRibbon: 'Il più scelto',
      freePlan: {
        subtitle: 'Tutto ciò che serve ogni giorno',
        period: 'Gratis per sempre',
        items: [
          'Cattura di area, finestra o schermo intero',
          'Rilevamento intelligente di finestre ed elementi',
          'Kit completo di annotazione (frecce, riquadri, testo, evidenziazioni, sfocatura)',
          'Adesivi emoji, lente di ingrandimento e numeri di passo',
          'Fissaggio sullo schermo',
          'OCR offline di base (limite giornaliero)',
          'Manutenzione e aggiornamenti continui',
        ],
        cta: 'Scarica gratis',
      },
      proPlan: {
        subtitle: 'Cattura avanzata e funzioni IA',
        period: 'Acquisto unico',
        items: [
          'Tutto del piano Base',
          'Registrazione HD ed esportazione GIF',
          'Scontorno IA illimitato',
          'Gomma e ritocco IA illimitati',
          'OCR offline illimitato',
          'Traduzione immagini',
          'Sincronizzazione cronologia su cloud',
          'Paga una volta, usa per sempre, aggiornamenti inclusi',
        ],
        cta: 'Acquista ora',
      },
      teamPlan: {
        title: 'Team',
        subtitle: 'Servizio per aziende e supporto dedicato',
        period: '/ per utente',
        items: [
          'Tutto del piano Pro',
          'Uso commerciale autorizzato in azienda',
          'Gestione centralizzata delle licenze',
          'Fatturazione unificata con emissione fatture',
          'Canale esclusivo per segnalazioni e richieste',
          'Supporto tecnico e assistenza post-vendita di livello massimo',
          'Sconti su volumi per acquisti di gruppo',
        ],
        cta: 'Contattaci',
      },
      whyTitle: 'Perché conviene passare a Pro',
      whySubtitle: 'Pro rende più veloci e affidabili le funzioni di cattura, registrazione e IA che usi ogni giorno.',
      why: [
        {
          title: 'Paga una volta, usa per sempre',
          description:
            'Pro è un acquisto unico di $29, senza costi annuali né abbonamento. I futuri aggiornamenti sono inclusi.',
        },
        {
          title: 'Elaborazione locale e privata',
          description:
            'Scontorno IA, gomma e OCR funzionano sul tuo dispositivo. Nulla viene caricato, le tue catture restano tue.',
        },
        {
          title: 'Licenza per più dispositivi',
          description: 'Una licenza si attiva su tutti i tuoi computer. Passa dal lavoro a casa senza vincoli.',
        },
        {
          title: 'Pronto in pochi secondi',
          description: 'L’installazione richiede pochi secondi e funziona subito, senza configurazioni complicate.',
        },
        {
          title: 'Sempre in evoluzione',
          description: 'Tutte le nuove funzioni e versioni pubblicate durante la tua licenza sono incluse.',
        },
        {
          title: 'Supporto prioritario',
          description: 'Gli utenti Pro e Team ricevono risposte più rapide quando ne hanno bisogno.',
        },
      ],
      stepsTitle: 'Tre passi verso Pro',
      stepsTagline: 'Veloce e semplice',
      steps: [
        'Scarica e installa Shotera',
        'Scegli il piano Pro e completa l’acquisto',
        'Attiva la licenza e sblocca tutto',
        'Cattura e registra con maggiore agilità',
      ],
      faqTitle: 'Domande sui prezzi',
      faqSubtitle: 'Quello che ci viene chiesto su pagamenti e licenze.',
      faqs: [
        {
          title: 'Il piano gratuito è davvero gratis?',
          answer:
            'Sì. Cattura, annotazioni, fissaggio e OCR offline di base rimangono gratis per sempre, senza limiti di tempo né aggiornamenti forzati. Anche gli utenti gratuiti ricevono manutenzione e aggiornamenti.',
        },
        {
          title: 'Pro è un acquisto unico o un abbonamento?',
          answer:
            'Pro è un acquisto unico di $29 ed è tuo per sempre, senza rinnovo annuale. Mantieni la licenza in modo permanente e ricevi gli aggiornamenti futuri gratuitamente. Pro è riservato all’uso personale.',
        },
        {
          title: 'Qual è la differenza tra Pro e Team?',
          answer:
            'Il piano Team ($39 per utente) è pensato per aziende e team commerciali e autorizza l’uso professionale in azienda. Include gestione centralizzata delle licenze, fatturazione unificata con emissione fatture, un canale esclusivo per segnalazioni e richieste, oltre a supporto tecnico e assistenza post-vendita di livello massimo. Gli acquisti di gruppo hanno sconti.',
        },
        {
          title: 'Su quanti dispositivi posso usare una licenza?',
          answer:
            'La licenza Pro funziona sui tuoi dispositivi personali. Il piano Team è licenziato per utente, il che semplifica la gestione e la fatturazione centralizzate.',
        },
        {
          title: 'Quali metodi di pagamento accettate?',
          answer: 'Accettiamo le principali carte di credito e PayPal, con un processo di pagamento sicuro e pratico.',
        },
        {
          title: 'Posso richiedere un rimborso?',
          answer:
            'Le licenze del piano Team hanno una politica di rimborso di 7 giorni. Contattaci per qualsiasi domanda.',
        },
      ],
      ctaTitle: 'Rendi le tue catture più produttive oggi',
      ctaSubtitle: 'Scarica gratis, installa in secondi e passa al livello superiore quando vuoi.',
      ctaButton: 'Scarica Shotera gratis',
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
      announcement:
        'Shotera v7.3.0+ 출시 — AI 배경 제거, 일러스트, 오프라인 OCR, 이미지 번역 추가! (사이트 준비 중이라 현재는 미리보기이며, 최종 출시 내용이 기준입니다) »',
    },
    pricing: {
      tagline: '요금제',
      heroTitle: '무료로 시작하고, 필요할 때 업그레이드',
      heroSubtitle:
        '일상적인 캡처와 주석 기능은 영구 무료입니다. 녹화, AI 누끼 따기, 이미지 번역이 필요할 때 Pro나 팀 플랜으로 전환하세요.',
      plansTitle: '적합한 플랜을 선택하세요',
      plansSubtitle: '평생 라이선스, 숨겨진 비용 없음',
      popularRibbon: '추천',
      freePlan: {
        subtitle: '매일 필요한 모든 기능',
        period: '영구 무료',
        items: [
          '영역 / 창 / 전체 화면 캡처',
          '창과 UI 요소 자동 감지',
          '완벽한 주석 도구(화살표, 박스, 텍스트, 하이라이트, 흐림)',
          '이모지 스티커, 돋보기, 단계 번호',
          '화면 고정',
          '기본 오프라인 OCR(일일 제한)',
          '지속적인 유지보수와 업데이트',
        ],
        cta: '무료 다운로드',
      },
      proPlan: {
        subtitle: '고급 캡처 및 AI 기능',
        period: '평생 라이선스',
        items: [
          '기본 플랜의 모든 기능',
          'HD 녹화 및 GIF 내보내기',
          'AI 배경 제거 무제한',
          'AI 지우개 / 복원 무제한',
          '오프라인 OCR 무제한',
          '이미지 번역',
          '캡처 기록 클라우드 동기화',
          '한 번 구매로 평생 사용, 무료 업데이트',
        ],
        cta: '지금 구매',
      },
      teamPlan: {
        title: '팀',
        subtitle: '기업용 서비스 및 전용 지원',
        period: '/ 1인당',
        items: [
          'Pro 플랜의 모든 기능',
          '회사 및 상업적 환경에서 사용 가능',
          '중앙 집중식 라이선스 관리',
          '통합 청구 및 세금계산서 발행',
          '버그 및 기능 요청 전용 채널',
          '최상급 기술 지원 및 A/S',
          '대량 구매 시 할인',
        ],
        cta: '문의하기',
      },
      whyTitle: '업그레이드할 가치',
      whySubtitle: 'Pro는 매일 사용하는 캡처, 녹화, AI 기능을 더 빠르고 안정적으로 만듭니다.',
      why: [
        {
          title: '한 번 구매로 평생 사용',
          description:
            'Pro는 $29 단 한 번의 결제로 평생 사용할 수 있습니다. 연회비나 구독 없이 향후 업데이트도 무료입니다.',
        },
        {
          title: '로컬 우선 및 프라이버시 보호',
          description: 'AI 누끼 따기, 지우개, OCR은 모두 기기에서 실행됩니다. 업로드 없이 캡처는 오직 당신의 것입니다.',
        },
        {
          title: '여러 기기에서 사용 가능',
          description: '하나의 라이선스로 모든 PC에서 활성화할 수 있습니다. 업무용과 가정용 간 원활하게 전환하세요.',
        },
        {
          title: '몇 초 만에 사용 가능',
          description: '설치는 몇 초면 완료되며 복잡한 설정 없이 바로 사용할 수 있습니다.',
        },
        {
          title: '지속적인 진화',
          description: '라이선스 기간 중 출시되는 모든 신기능과 버전 업데이트가 무료로 제공됩니다.',
        },
        {
          title: '우선 지원',
          description: 'Pro와 팀 플랜 사용자는 필요할 때 더 빠른 응답을 받습니다.',
        },
      ],
      stepsTitle: 'Pro로 가는 3단계',
      stepsTagline: '빠르고 간단하게',
      steps: [
        'Shotera 다운로드 및 설치',
        'Pro 플랜 선택 및 구매',
        '라이선스 활성화로 모든 기능 해제',
        '더 빠른 캡처와 녹화 시작',
      ],
      faqTitle: '가격 관련 자주 묻는 질문',
      faqSubtitle: '결제와 라이선스에 대해 자주 묻는 질문입니다.',
      faqs: [
        {
          title: '무료 플랜은 정말 무료인가요?',
          answer:
            '네. 캡처, 주석, 화면 고정, 기본 오프라인 OCR은 기한 없이 영구 무료이며 강제 업그레이드도 없습니다. 무료 사용자도 지속적인 유지보수와 업데이트를 받습니다.',
        },
        {
          title: 'Pro는 평생 라이선스인가요, 아니면 구독인가요?',
          answer:
            'Pro는 $29의 평생 라이선스로 연간 갱신이 필요 없습니다. 구매 후 라이선스를 영구적으로 소유하며 향후 버전 업데이트도 무료로 받습니다. Pro는 개인 사용에만 해당됩니다.',
        },
        {
          title: 'Pro와 팀 플랜의 차이는 무엇인가요?',
          answer:
            '팀 플랜($39/인)은 기업 및 상업 팀을 위한 것으로 회사 내 상업적 사용이 허용됩니다. 중앙 집중식 라이선스 관리, 통합 청구 및 세금계산서 발행, 전용 버그/기능 요청 채널, 최상급 기술 지원 및 A/S가 포함됩니다. 대량 구매 시 할인이 적용됩니다.',
        },
        {
          title: '하나의 라이선스로 몇 대의 기기에서 사용할 수 있나요?',
          answer:
            'Pro 라이선스는 개인 소유의 여러 기기에서 사용할 수 있습니다. 팀 플랜은 1인당 라이선스로 중앙 관리와 청구가 용이합니다.',
        },
        {
          title: '어떤 결제 수단을 지원하나요?',
          answer: '주요 신용카드와 PayPal을 지원하며 안전하고 편리한 결제 과정을 제공합니다.',
        },
        {
          title: '환불이 가능한가요?',
          answer: '팀 플랜 라이선스는 7일 환불 정책이 적용됩니다. 궁금한 점이 있으면 언제든지 문의하세요.',
        },
      ],
      ctaTitle: '오늘부터 스크린샷을 더 생산적으로 만드세요',
      ctaSubtitle: '무료로 다운로드하고 몇 초 만에 설치하며 원할 때 업그레이드하세요.',
      ctaButton: 'Shotera 무료 다운로드',
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
      announcement:
        'Shotera v7.3.0+ уже доступен — ИИ-удаление фона, иллюстрации, автономное OCR и перевод изображений! (Сайт в разработке, сейчас это лишь предпросмотр: приоритет за финальным релизом) »',
    },
    pricing: {
      tagline: 'Тарифы',
      heroTitle: 'Начните бесплатно и переходите на платную версию по необходимости',
      heroSubtitle:
        'Ежедневный захват и аннотации бесплатны навсегда. Когда понадобится запись экрана, ИИ-вырезание или перевод изображений, выберите Pro или тариф для команды.',
      plansTitle: 'Выберите подходящий тариф',
      plansSubtitle: 'Разовый платёж, без скрытых списаний',
      popularRibbon: 'Популярный',
      freePlan: {
        subtitle: 'Всё нужное для ежедневной работы',
        period: 'Бесплатно навсегда',
        items: [
          'Захват области, окна или всего экрана',
          'Умное определение окон и элементов интерфейса',
          'Полный набор аннотаций (стрелки, рамки, текст, выделение, размытие)',
          'Эмодзи-стикеры, лупа и нумерация шагов',
          'Закрепление на экране',
          'Базовое автономное OCR (суточный лимит)',
          'Постоянная поддержка и обновления',
        ],
        cta: 'Скачать бесплатно',
      },
      proPlan: {
        subtitle: 'Расширенный захват и функции ИИ',
        period: 'Разовый платёж',
        items: [
          'Всё из базовой версии',
          'Запись в высоком качестве и экспорт в GIF',
          'Неограниченное ИИ-вырезание фона',
          'Неограниченный ИИ-ластик и восстановление',
          'Неограниченное автономное OCR',
          'Перевод изображений',
          'Синхронизация истории захвата с облаком',
          'Оплата один раз, использование навсегда, обновления бесплатны',
        ],
        cta: 'Купить',
      },
      teamPlan: {
        title: 'Команда',
        subtitle: 'Корпоративное обслуживание и выделенная поддержка',
        period: '/ за пользователя',
        items: [
          'Всё из тарифа Pro',
          'Коммерческое использование в компании разрешено',
          'Централизованное управление лицензиями',
          'Единый счёт и оформление документов',
          'Отдельный канал для сообщений об ошибках и пожеланий',
          'Техническая поддержка и обслуживание высшего уровня',
          'Скидки при закупке нескольких лицензий',
        ],
        cta: 'Связаться с нами',
      },
      whyTitle: 'Почему стоит перейти на Pro',
      whySubtitle:
        'Pro делает быстрее и надёжнее те функции захвата, записи и ИИ, которыми вы пользуетесь каждый день.',
      why: [
        {
          title: 'Оплата один раз, использование навсегда',
          description:
            'Pro — это разовый платёж $29 без ежегодных взносов и подписки. Все будущие обновления входят в стоимость.',
        },
        {
          title: 'Локальная обработка и конфиденциальность',
          description:
            'ИИ-вырезание, ластик и OCR работают на вашем устройстве. Ничего не загружается в сеть, ваши снимки остаются вашими.',
        },
        {
          title: 'Лицензия для нескольких устройств',
          description:
            'Одну лицензию можно активировать на всех ваших компьютерах и свободно переключаться между работой и домом.',
        },
        {
          title: 'Готово за несколько секунд',
          description: 'Установка занимает секунды, программа работает сразу и не требует сложной настройки.',
        },
        {
          title: 'Постоянное развитие',
          description: 'Все новые функции и версии, выпущенные в период действия лицензии, предоставляются бесплатно.',
        },
        {
          title: 'Приоритетная поддержка',
          description: 'Пользователи Pro и тарифа для команды получают ответы быстрее, когда это действительно важно.',
        },
      ],
      stepsTitle: 'Три шага до Pro',
      stepsTagline: 'Быстро и просто',
      steps: [
        'Скачайте и установите Shotera',
        'Выберите тариф Pro и оплатите',
        'Активируйте лицензию и откройте все функции',
        'Захватывайте и записывайте быстрее',
      ],
      faqTitle: 'Вопросы о тарифах',
      faqSubtitle: 'Что чаще всего спрашивают об оплате и лицензировании.',
      faqs: [
        {
          title: 'Бесплатная версия действительно бесплатна?',
          answer:
            'Да. Захват, аннотации, закрепление и базовое автономное OCR бесплатны навсегда — без ограничения по времени и без принудительного перехода на платный тариф. Пользователи бесплатной версии также получают поддержку и обновления.',
        },
        {
          title: 'Pro — это разовая покупка или подписка?',
          answer:
            'Pro — это разовая покупка за $29, лицензия остаётся у вас навсегда, ежегодное продление не требуется. Вы получаете бессрочный доступ и бесплатные обновления будущих версий. Pro предназначен только для личного использования.',
        },
        {
          title: 'Чем Pro отличается от тарифа для команды?',
          answer:
            'Тариф для команды ($39 за пользователя) предназначен для компаний и коммерческих коллективов и разрешает использование в рабочих целях внутри организации. В него входят централизованное управление лицензиями, единый счёт с оформлением документов, отдельный канал для сообщений об ошибках и пожеланий, а также техническая поддержка и обслуживание высшего уровня. При закупке нескольких лицензий действуют скидки.',
        },
        {
          title: 'На сколько устройств распространяется одна лицензия?',
          answer:
            'Лицензия Pro действует на ваших личных устройствах. Тариф для команды лицензируется на пользователя, что упрощает централизованное управление и оплату.',
        },
        {
          title: 'Какие способы оплаты вы принимаете?',
          answer: 'Мы принимаем основные банковские карты и PayPal — оплата проходит безопасно и удобно.',
        },
        {
          title: 'Можно ли вернуть деньги?',
          answer:
            'Для лицензий тарифа для команды действует возврат в течение 7 дней. Если возникнут вопросы, напишите нам.',
        },
      ],
      ctaTitle: 'Сделайте работу со снимками экрана продуктивнее уже сегодня',
      ctaSubtitle: 'Скачайте бесплатно, установите за секунды и переходите на Pro, когда будете готовы.',
      ctaButton: 'Скачать Shotera бесплатно',
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
      announcement:
        'Shotera v7.3.0+ متوفّر الآن — إزالة الخلفية بالذكاء الاصطناعي والرسوم التوضيحية وOCR دون اتصال وترجمة الصور! (الموقع قيد الإنشاء، وهذه معاينة فقط، والإصدار النهائي هو المرجع) «',
    },
    pricing: {
      tagline: 'الأسعار',
      heroTitle: 'ابدأ مجاناً وارتقِ عند الحاجة',
      heroSubtitle:
        'الالتقاط والتعليق اليومي مجاني دائماً. وعندما تحتاج إلى تسجيل الشاشة أو القص بالذكاء الاصطناعي أو ترجمة الصور، انتقل إلى Pro أو خطة الفريق.',
      plansTitle: 'اختر الخطة المناسبة لك',
      plansSubtitle: 'دفعة واحدة، بدون رسوم خفية',
      popularRibbon: 'الأكثر اختياراً',
      freePlan: {
        subtitle: 'كل ما تحتاجه في عملك اليومي',
        period: 'مجاني دائماً',
        items: [
          'التقاط منطقة أو نافذة أو الشاشة كاملة',
          'اكتشاف ذكي للنوافذ وعناصر الواجهة',
          'مجموعة تعليقات كاملة (أسهم، مستطيلات، نص، تظليل، تمويه)',
          'ملصقات إيموجي وعدسة مكبرة وترقيم الخطوات',
          'التثبيت على الشاشة',
          'OCR أساسي دون اتصال (حد يومي)',
          'صيانة وتحديثات مستمرة',
        ],
        cta: 'تنزيل مجاني',
      },
      proPlan: {
        subtitle: 'التقاط متقدم وقدرات الذكاء الاصطناعي',
        period: 'دفعة واحدة',
        items: [
          'كل ميزات الإصدار الأساسي',
          'تسجيل بجودة عالية وتصدير GIF',
          'إزالة الخلفية بالذكاء الاصطناعي بلا حدود',
          'ممحاة وترميم بالذكاء الاصطناعي بلا حدود',
          'OCR دون اتصال بلا حدود',
          'ترجمة الصور',
          'مزامنة سجل الالتقاط عبر السحابة',
          'ادفع مرة واحدة واستخدم دائماً مع تحديثات مجانية',
        ],
        cta: 'اشترِ الآن',
      },
      teamPlan: {
        title: 'الفريق',
        subtitle: 'خدمة للمؤسسات ودعم مخصص',
        period: '/ لكل مستخدم',
        items: [
          'كل ميزات خطة Pro',
          'الاستخدام التجاري داخل الشركة مسموح',
          'إدارة مركزية للتراخيص',
          'فوترة موحدة وإصدار الفواتير',
          'قناة مخصصة للإبلاغ عن الأخطاء والطلبات',
          'دعم فني وخدمة بعد البيع بأعلى مستوى',
          'خصومات على الشراء بالكميات',
        ],
        cta: 'تواصل معنا',
      },
      whyTitle: 'لماذا يستحق الترقية',
      whySubtitle: 'يجعل Pro ميزات الالتقاط والتسجيل والذكاء الاصطناعي التي تستخدمها يومياً أسرع وأكثر موثوقية.',
      why: [
        {
          title: 'ادفع مرة واحدة واستخدم دائماً',
          description: 'خطة Pro بدفعة واحدة قيمتها $29 دون رسوم سنوية أو اشتراك، وجميع التحديثات القادمة مشمولة.',
        },
        {
          title: 'معالجة محلية تحفظ خصوصيتك',
          description:
            'القص بالذكاء الاصطناعي والممحاة وOCR تعمل جميعها على جهازك. لا يُرفع أي شيء، ولقطاتك تبقى ملكك وحدك.',
        },
        {
          title: 'ترخيص لعدة أجهزة',
          description: 'ترخيص واحد يمكن تنشيطه على جميع أجهزتك، للتنقل بين العمل والمنزل بسهولة.',
        },
        {
          title: 'جاهز في ثوانٍ',
          description: 'التثبيت يستغرق ثوانٍ ويعمل فوراً دون إعدادات معقدة.',
        },
        {
          title: 'تطوير مستمر',
          description: 'جميع الميزات والإصدارات الجديدة الصادرة خلال فترة ترخيصك مشمولة مجاناً.',
        },
        {
          title: 'دعم ذو أولوية',
          description: 'يحصل مستخدمو Pro وخطة الفريق على ردود أسرع عند الحاجة.',
        },
      ],
      stepsTitle: 'ثلاث خطوات إلى Pro',
      stepsTagline: 'سريع وبسيط',
      steps: [
        'نزّل Shotera وثبّته',
        'اختر خطة Pro وأكمل الشراء',
        'نشّط الترخيص لتفتح كل الميزات',
        'ابدأ الالتقاط والتسجيل بسرعة أكبر',
      ],
      faqTitle: 'أسئلة عن الأسعار',
      faqSubtitle: 'أكثر ما يُسأل عنه بخصوص الدفع والترخيص.',
      faqs: [
        {
          title: 'هل الخطة المجانية مجانية فعلاً؟',
          answer:
            'نعم. الالتقاط والتعليق والتثبيت وOCR الأساسي دون اتصال مجانية دائماً، بلا حد زمني وبلا ترقية إلزامية. ويحصل مستخدمو الإصدار المجاني كذلك على الصيانة والتحديثات.',
        },
        {
          title: 'هل Pro دفعة واحدة أم اشتراك؟',
          answer:
            'خطة Pro دفعة واحدة قيمتها $29 وتبقى ملكك دائماً دون تجديد سنوي. تحصل على ترخيص دائم وتحديثات مجانية للإصدارات القادمة. وخطة Pro مخصصة للاستخدام الشخصي فقط.',
        },
        {
          title: 'ما الفرق بين Pro وخطة الفريق؟',
          answer:
            'خطة الفريق ($39 لكل مستخدم) مصممة للشركات والفرق التجارية وتسمح بالاستخدام التجاري داخل المؤسسة. وتشمل إدارة مركزية للتراخيص وفوترة موحدة مع إصدار الفواتير وقناة مخصصة للأخطاء والطلبات، إضافة إلى دعم فني وخدمة بعد البيع بأعلى مستوى. وتتوفر خصومات على الشراء بالكميات.',
        },
        {
          title: 'على كم جهاز يمكن استخدام الترخيص الواحد؟',
          answer:
            'يعمل ترخيص Pro على أجهزتك الشخصية. أما خطة الفريق فترخيصها لكل مستخدم، ما يسهّل الإدارة والفوترة المركزية.',
        },
        {
          title: 'ما طرق الدفع المتاحة؟',
          answer: 'نقبل بطاقات الائتمان الرئيسية وPayPal، بعملية دفع آمنة وسهلة.',
        },
        {
          title: 'هل يمكن استرداد المبلغ؟',
          answer: 'تراخيص خطة الفريق تشملها سياسة استرداد خلال 7 أيام. تواصل معنا إن كان لديك أي استفسار.',
        },
      ],
      ctaTitle: 'اجعل لقطات شاشتك أكثر إنتاجية من اليوم',
      ctaSubtitle: 'نزّله مجاناً وثبّته في ثوانٍ وارتقِ للخطة الأعلى وقتما تشاء.',
      ctaButton: 'تنزيل Shotera مجاناً',
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
      announcement:
        'Shotera v7.3.0+ is hier — AI-uitsnijden, illustratie, offline OCR en beeldvertaling! (Site in opbouw, dit is slechts een preview: definitieve release is leidend) »',
    },
    pricing: {
      tagline: 'Prijzen',
      heroTitle: 'Begin gratis en breid uit wanneer u dat nodig hebt',
      heroSubtitle:
        'Dagelijks vastleggen en annoteren blijft altijd gratis. Hebt u schermopname, AI-uitknippen of beeldvertaling nodig? Stap dan over op Pro of het teamplan.',
      plansTitle: 'Kies het plan dat bij u past',
      plansSubtitle: 'Eenmalige aankoop, geen verborgen kosten',
      popularRibbon: 'Populair',
      freePlan: {
        subtitle: 'Alles wat u dagelijks gebruikt',
        period: 'Altijd gratis',
        items: [
          'Gebied, venster of volledig scherm vastleggen',
          'Slimme detectie van vensters en interface-elementen',
          'Volledige annotatieset (pijlen, kaders, tekst, markeren, vervagen)',
          'Emoji-stickers, vergrootglas en stapnummers',
          'Vastmaken op het scherm',
          'Basis offline OCR (daglimiet)',
          'Doorlopend onderhoud en updates',
        ],
        cta: 'Gratis downloaden',
      },
      proPlan: {
        subtitle: 'Geavanceerd vastleggen en AI-functies',
        period: 'Eenmalige aankoop',
        items: [
          'Alles uit het basisplan',
          'HD-schermopname en GIF-export',
          'Onbeperkt AI-achtergrond verwijderen',
          'Onbeperkte AI-gum en retouche',
          'Onbeperkte offline OCR',
          'Beeldvertaling',
          'Cloudsynchronisatie van de opnamegeschiedenis',
          'Eenmalig betalen, altijd gebruiken, gratis updates',
        ],
        cta: 'Nu kopen',
      },
      teamPlan: {
        title: 'Team',
        subtitle: 'Zakelijke dienstverlening en toegewijde ondersteuning',
        period: '/ per gebruiker',
        items: [
          'Alles uit het Pro-plan',
          'Commercieel gebruik binnen het bedrijf toegestaan',
          'Centraal licentiebeheer',
          'Gebundelde facturatie met factuuruitgifte',
          'Exclusief kanaal voor bugmeldingen en verzoeken',
          'Technische ondersteuning en service op het hoogste niveau',
          'Volumekorting bij grotere afnames',
        ],
        cta: 'Neem contact op',
      },
      whyTitle: 'Waarom upgraden de moeite waard is',
      whySubtitle:
        'Pro maakt de functies voor vastleggen, opnemen en AI die u dagelijks gebruikt sneller en betrouwbaarder.',
      why: [
        {
          title: 'Eenmalig betalen, altijd gebruiken',
          description:
            'Pro is een eenmalige aankoop van $29, zonder jaarlijkse kosten of abonnement. Toekomstige updates zijn inbegrepen.',
        },
        {
          title: 'Lokaal en privacyvriendelijk',
          description:
            'AI-uitknippen, de gum en OCR werken op uw apparaat. Er wordt niets geüpload en uw schermafbeeldingen blijven van u.',
        },
        {
          title: 'Licentie voor meerdere apparaten',
          description: 'Eén licentie activeert u op al uw computers, zodat u vlot wisselt tussen werk en thuis.',
        },
        {
          title: 'Binnen enkele seconden klaar',
          description: 'De installatie duurt seconden en werkt direct, zonder ingewikkelde configuratie.',
        },
        {
          title: 'Blijft verbeteren',
          description: 'Alle nieuwe functies en versies die tijdens uw licentie uitkomen, zijn gratis inbegrepen.',
        },
        {
          title: 'Ondersteuning met prioriteit',
          description: 'Gebruikers van Pro en Team krijgen sneller antwoord wanneer dat echt nodig is.',
        },
      ],
      stepsTitle: 'In drie stappen naar Pro',
      stepsTagline: 'Snel en eenvoudig',
      steps: [
        'Download en installeer Shotera',
        'Kies het Pro-plan en rond de aankoop af',
        'Activeer de licentie en ontgrendel alles',
        'Leg sneller vast en neem sneller op',
      ],
      faqTitle: 'Veelgestelde vragen over prijzen',
      faqSubtitle: 'Wat u wilt weten over betaling en licenties.',
      faqs: [
        {
          title: 'Is het gratis plan echt gratis?',
          answer:
            'Ja. Vastleggen, annoteren, vastmaken en de basis offline OCR blijven altijd gratis, zonder tijdslimiet en zonder verplichte upgrade. Ook gratis gebruikers ontvangen onderhoud en updates.',
        },
        {
          title: 'Is Pro een eenmalige aankoop of een abonnement?',
          answer:
            'Pro is een eenmalige aankoop van $29 en blijft voorgoed van u, zonder jaarlijkse verlenging. U houdt permanent toegang tot uw licentie en ontvangt toekomstige versies gratis. Pro is uitsluitend bedoeld voor persoonlijk gebruik.',
        },
        {
          title: 'Wat is het verschil tussen Pro en Team?',
          answer:
            'Team ($39 per gebruiker) is bedoeld voor bedrijven en commerciële teams en staat zakelijk gebruik binnen de organisatie toe. Het omvat centraal licentiebeheer, gebundelde facturatie met factuuruitgifte, een exclusief kanaal voor bugmeldingen en verzoeken, en technische ondersteuning en service op het hoogste niveau. Bij grotere afnames geldt volumekorting.',
        },
        {
          title: 'Voor hoeveel apparaten geldt één licentie?',
          answer:
            'Een Pro-licentie werkt op uw persoonlijke apparaten. Team wordt per gebruiker gelicentieerd, wat centraal beheer en facturatie eenvoudiger maakt.',
        },
        {
          title: 'Welke betaalmethoden accepteert u?',
          answer: 'Wij accepteren de bekende creditcards en PayPal, met een veilig en gemakkelijk afrekenproces.',
        },
        {
          title: 'Kan ik geld terugvragen?',
          answer: 'Voor Team-licenties geldt een terugbetalingstermijn van 7 dagen. Neem gerust contact op bij vragen.',
        },
      ],
      ctaTitle: 'Maak uw schermafbeeldingen vanaf vandaag productiever',
      ctaSubtitle: 'Gratis downloaden, in seconden installeren en upgraden wanneer u wilt.',
      ctaButton: 'Shotera gratis downloaden',
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
      announcement:
        'Shotera v7.3.0+ już dostępna — wycinanie AI, ilustracje, OCR offline i tłumaczenie obrazów! (Strona w budowie, to tylko podgląd: liczy się wersja finalna) »',
    },
    pricing: {
      tagline: 'Cennik',
      heroTitle: 'Zacznij bezpłatnie, rozszerz gdy zajdzie potrzeba',
      heroSubtitle:
        'Codzienne przechwytywanie i adnotacje pozostają bezpłatne na zawsze. Gdy potrzebujesz nagrywania ekranu, wycinania AI lub tłumaczenia obrazów, wybierz Pro albo plan zespołowy.',
      plansTitle: 'Wybierz plan dopasowany do siebie',
      plansSubtitle: 'Jednorazowa płatność, bez ukrytych opłat',
      popularRibbon: 'Najczęściej wybierany',
      freePlan: {
        subtitle: 'Wszystko, czego używasz codziennie',
        period: 'Bezpłatnie na zawsze',
        items: [
          'Przechwytywanie obszaru, okna lub całego ekranu',
          'Inteligentne wykrywanie okien i elementów interfejsu',
          'Pełny zestaw adnotacji (strzałki, ramki, tekst, zakreślanie, rozmycie)',
          'Naklejki emoji, lupa i numery kroków',
          'Przypinanie na ekranie',
          'Podstawowy OCR offline (limit dzienny)',
          'Bieżąca opieka i aktualizacje',
        ],
        cta: 'Pobierz bezpłatnie',
      },
      proPlan: {
        subtitle: 'Zaawansowane przechwytywanie i funkcje AI',
        period: 'Jednorazowa płatność',
        items: [
          'Wszystko z planu podstawowego',
          'Nagrywanie w jakości HD i eksport do GIF',
          'Nieograniczone usuwanie tła przez AI',
          'Nieograniczona gumka i retusz AI',
          'Nieograniczony OCR offline',
          'Tłumaczenie obrazów',
          'Synchronizacja historii przechwytywania w chmurze',
          'Płacisz raz, korzystasz zawsze, aktualizacje bezpłatne',
        ],
        cta: 'Kup teraz',
      },
      teamPlan: {
        title: 'Zespół',
        subtitle: 'Obsługa dla firm i dedykowane wsparcie',
        period: '/ za stanowisko',
        items: [
          'Wszystko z planu Pro',
          'Użytek komercyjny w firmie jest dozwolony',
          'Centralne zarządzanie licencjami',
          'Zbiorcze rozliczenia i wystawianie faktur',
          'Dedykowany kanał zgłaszania błędów i potrzeb',
          'Wsparcie techniczne i obsługa posprzedażowa najwyższego poziomu',
          'Rabaty przy zakupie większej liczby stanowisk',
        ],
        cta: 'Skontaktuj się z nami',
      },
      whyTitle: 'Dlaczego warto przejść na Pro',
      whySubtitle:
        'Pro sprawia, że funkcje przechwytywania, nagrywania i AI, z których korzystasz codziennie, działają szybciej i pewniej.',
      why: [
        {
          title: 'Płacisz raz, korzystasz zawsze',
          description:
            'Pro to jednorazowa płatność $29 — bez opłat rocznych i bez subskrypcji. Przyszłe aktualizacje są w cenie.',
        },
        {
          title: 'Działa lokalnie, dba o prywatność',
          description:
            'Wycinanie AI, gumka i OCR działają na Twoim urządzeniu. Nic nie jest przesyłane, a Twoje zrzuty pozostają tylko Twoje.',
        },
        {
          title: 'Licencja na wiele urządzeń',
          description:
            'Jedną licencję aktywujesz na wszystkich swoich komputerach i swobodnie przechodzisz między pracą a domem.',
        },
        {
          title: 'Gotowe w kilka sekund',
          description: 'Instalacja trwa kilka sekund i działa od razu, bez skomplikowanej konfiguracji.',
        },
        {
          title: 'Stale się rozwija',
          description:
            'Wszystkie nowe funkcje i wersje wydane w okresie obowiązywania licencji otrzymujesz bezpłatnie.',
        },
        {
          title: 'Wsparcie priorytetowe',
          description: 'Użytkownicy planów Pro i Zespół otrzymują szybsze odpowiedzi, gdy naprawdę tego potrzebują.',
        },
      ],
      stepsTitle: 'Trzy kroki do Pro',
      stepsTagline: 'Szybko i prosto',
      steps: [
        'Pobierz i zainstaluj Shotera',
        'Wybierz plan Pro i dokonaj zakupu',
        'Aktywuj licencję i odblokuj wszystko',
        'Przechwytuj i nagrywaj sprawniej',
      ],
      faqTitle: 'Pytania o cennik',
      faqSubtitle: 'O co najczęściej pytacie w sprawie płatności i licencji.',
      faqs: [
        {
          title: 'Czy plan bezpłatny naprawdę jest darmowy?',
          answer:
            'Tak. Przechwytywanie, adnotacje, przypinanie i podstawowy OCR offline są bezpłatne na zawsze — bez limitu czasu i bez wymuszanej aktualizacji. Użytkownicy wersji bezpłatnej również otrzymują opiekę i aktualizacje.',
        },
        {
          title: 'Czy Pro to zakup jednorazowy czy subskrypcja?',
          answer:
            'Pro to jednorazowy zakup za $29 i pozostaje Twój na zawsze — bez corocznego odnawiania. Zachowujesz bezterminowy dostęp do licencji i otrzymujesz przyszłe wersje bezpłatnie. Plan Pro jest przeznaczony wyłącznie do użytku osobistego.',
        },
        {
          title: 'Czym różnią się plany Pro i Zespół?',
          answer:
            'Plan Zespół ($39 za stanowisko) jest przeznaczony dla firm i zespołów komercyjnych oraz zezwala na użytek służbowy w organizacji. Obejmuje centralne zarządzanie licencjami, zbiorcze rozliczenia z wystawianiem faktur, dedykowany kanał zgłaszania błędów i potrzeb, a także wsparcie techniczne i obsługę posprzedażową najwyższego poziomu. Przy większych zakupach obowiązują rabaty.',
        },
        {
          title: 'Na ilu urządzeniach obowiązuje jedna licencja?',
          answer:
            'Licencja Pro działa na Twoich urządzeniach osobistych. Plan Zespół jest licencjonowany na stanowisko, co upraszcza centralne zarządzanie i rozliczenia.',
        },
        {
          title: 'Jakie metody płatności są dostępne?',
          answer:
            'Przyjmujemy najpopularniejsze karty płatnicze oraz PayPal — płatność przebiega bezpiecznie i wygodnie.',
        },
        {
          title: 'Czy mogę otrzymać zwrot pieniędzy?',
          answer:
            'Licencje planu Zespół objęte są zwrotem w ciągu 7 dni. W razie pytań chętnie pomożemy — napisz do nas.',
        },
      ],
      ctaTitle: 'Spraw, by Twoje zrzuty ekranu pracowały wydajniej już dziś',
      ctaSubtitle: 'Pobierz bezpłatnie, zainstaluj w kilka sekund i przejdź na wyższy plan, kiedy zechcesz.',
      ctaButton: 'Pobierz Shotera bezpłatnie',
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
      announcement:
        'Shotera v7.3.0+ är här — AI-utklipp, illustration, offline-OCR och bildöversättning! (Webbplatsen byggs, detta är bara förhandsgranskning: slutgiltig version gäller) »',
    },
    pricing: {
      tagline: 'Priser',
      heroTitle: 'Börja gratis och uppgradera när du behöver',
      heroSubtitle:
        'Att fånga och kommentera i vardagen är gratis för alltid. När du behöver skärminspelning, AI-friläggning eller bildöversättning väljer du Pro eller teamplanen.',
      plansTitle: 'Välj den plan som passar dig',
      plansSubtitle: 'Engångsköp, inga dolda avgifter',
      popularRibbon: 'Populärast',
      freePlan: {
        subtitle: 'Allt du använder varje dag',
        period: 'Gratis för alltid',
        items: [
          'Fånga område, fönster eller hela skärmen',
          'Smart identifiering av fönster och gränssnittselement',
          'Komplett verktygslåda för anteckningar (pilar, ramar, text, överstrykning, oskärpa)',
          'Emoji-dekaler, förstoringsglas och stegnummer',
          'Fäst på skärmen',
          'Grundläggande offline-OCR (daglig gräns)',
          'Löpande underhåll och uppdateringar',
        ],
        cta: 'Ladda ned gratis',
      },
      proPlan: {
        subtitle: 'Avancerad fångst och AI-funktioner',
        period: 'Engångsköp',
        items: [
          'Allt i basplanen',
          'HD-inspelning och GIF-export',
          'Obegränsad AI-borttagning av bakgrund',
          'Obegränsat AI-suddgummi och retusch',
          'Obegränsad offline-OCR',
          'Bildöversättning',
          'Molnsynkronisering av fångsthistoriken',
          'Betala en gång, använd för alltid, uppdateringar utan kostnad',
        ],
        cta: 'Köp nu',
      },
      teamPlan: {
        title: 'Team',
        subtitle: 'Företagstjänst och dedikerad support',
        period: '/ per licens',
        items: [
          'Allt i Pro-planen',
          'Kommersiell användning inom företaget är tillåten',
          'Central licenshantering',
          'Samlad fakturering med fakturaunderlag',
          'Egen kanal för felrapporter och önskemål',
          'Teknisk support och eftermarknadsservice på högsta nivå',
          'Volymrabatt vid köp av flera licenser',
        ],
        cta: 'Kontakta oss',
      },
      whyTitle: 'Därför är det värt att uppgradera',
      whySubtitle:
        'Pro gör de funktioner för fångst, inspelning och AI som du använder varje dag snabbare och mer tillförlitliga.',
      why: [
        {
          title: 'Betala en gång, använd för alltid',
          description:
            'Pro är ett engångsköp på $29 — inga årsavgifter och ingen prenumeration. Kommande uppdateringar ingår.',
        },
        {
          title: 'Lokalt och integritetsvänligt',
          description:
            'AI-friläggning, suddgummi och OCR körs på din enhet. Ingenting laddas upp och dina skärmbilder förblir dina.',
        },
        {
          title: 'Licens för flera enheter',
          description: 'En licens aktiverar du på alla dina datorer och växlar smidigt mellan arbete och hemma.',
        },
        {
          title: 'Klart på några sekunder',
          description: 'Installationen tar sekunder och fungerar direkt, utan krånglig konfiguration.',
        },
        {
          title: 'Blir hela tiden bättre',
          description: 'Alla nya funktioner och versioner som släpps under din licens ingår utan kostnad.',
        },
        {
          title: 'Prioriterad support',
          description: 'Användare av Pro och Team får snabbare svar när det verkligen behövs.',
        },
      ],
      stepsTitle: 'Tre steg till Pro',
      stepsTagline: 'Snabbt och enkelt',
      steps: [
        'Ladda ned och installera Shotera',
        'Välj Pro-planen och slutför köpet',
        'Aktivera licensen och lås upp allt',
        'Fånga och spela in snabbare',
      ],
      faqTitle: 'Vanliga frågor om priser',
      faqSubtitle: 'Det som brukar dyka upp kring betalning och licenser.',
      faqs: [
        {
          title: 'Är gratisplanen verkligen gratis?',
          answer:
            'Ja. Fångst, anteckningar, fästning och grundläggande offline-OCR är gratis för alltid, utan tidsgräns och utan tvingande uppgradering. Även den som använder gratisversionen får underhåll och uppdateringar.',
        },
        {
          title: 'Är Pro ett engångsköp eller en prenumeration?',
          answer:
            'Pro är ett engångsköp på $29 och är ditt för alltid, utan årlig förnyelse. Du behåller licensen permanent och får kommande versioner utan kostnad. Pro gäller endast för personligt bruk.',
        },
        {
          title: 'Vad skiljer Pro från Team?',
          answer:
            'Team ($39 per licens) är avsedd för företag och kommersiella team och tillåter yrkesmässig användning inom organisationen. Den innehåller central licenshantering, samlad fakturering med fakturaunderlag, en egen kanal för felrapporter och önskemål samt teknisk support och eftermarknadsservice på högsta nivå. Vid köp av flera licenser gäller volymrabatt.',
        },
        {
          title: 'Hur många enheter gäller en licens för?',
          answer:
            'En Pro-licens fungerar på dina personliga enheter. Team licensieras per licens, vilket förenklar central hantering och fakturering.',
        },
        {
          title: 'Vilka betalsätt tar ni emot?',
          answer: 'Vi tar emot de vanligaste kreditkorten och PayPal, med en säker och smidig kassa.',
        },
        {
          title: 'Kan jag få pengarna tillbaka?',
          answer: 'Team-licenser omfattas av 7 dagars återbetalningsrätt. Hör av dig om du har frågor.',
        },
      ],
      ctaTitle: 'Gör dina skärmbilder mer produktiva redan i dag',
      ctaSubtitle: 'Ladda ned gratis, installera på några sekunder och uppgradera när du vill.',
      ctaButton: 'Ladda ned Shotera gratis',
    },
  },
};
