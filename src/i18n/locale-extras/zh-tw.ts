import type { LocaleExtras } from '../locale-extras-types';

/**
 * Traditional Chinese (Taiwan) copy that brings the home and about pages to
 * parity with the English pages. Terminology follows the Shotera app's zh-TW
 * language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: '滾動截圖',

  home: {
    heroAlt:
      'Shotera 工具箱：螢幕擷取、滾動截圖、標註、螢幕錄製、AI 去背、離線 OCR、QR Code / 條碼辨識、圖片翻譯與釘選到螢幕',
    cards: [
      {
        title: '滾動截圖',
        description: '頁面再長也能一張裝下：自動滾或自己滾，邊滾邊拼，長圖即時可見。',
      },
      {
        title: 'QR Code / 條碼辨識',
        description: '截圖裡的 QR Code 與條碼就地辨識：連結、Wi-Fi、聯絡人、商品條碼，內容一鍵複製，全程離線。',
      },
      {
        title: '圖片查看',
        description: '截圖和圖片檔案都能在獨立查看視窗中開啟：同資料夾翻頁、縮放細看、順手修兩筆，常見格式直接就能開。',
      },
    ],
    scrolling: {
      tagline: '滾動截圖',
      title: '頁面再長，也一張裝下',
      text: '長網頁、長聊天記錄、整份文件——從上到下一張截全。',
      alt: '滾動截圖將長頁面拼接成一張長圖',
      items: [
        {
          title: '自動滾，或自己動手滾',
          description: '讓 Shotera 自動把頁面往下滾，或自己動手滾；兩種方式都會邊滾邊擷取每個畫面。',
        },
        {
          title: '拼接過程即時可見',
          description: '選取範圍旁會顯示即時預覽，隨每一幀一起變長；整頁都收進來的那一刻，就能馬上停手。',
        },
        {
          title: '拼接看不出接縫',
          description: '相鄰畫面會自動對齊、融合，拼出的長圖就像原本的一整頁。',
        },
        {
          title: '複製或存檔',
          description: '拼好的長圖直接複製到剪貼簿，或存成檔案——貼進文件、聊天、工單都沒問題。',
        },
      ],
    },
    stats: [
      { title: '介面語言', amount: '15' },
      { title: '好評率', amount: '4.9 / 5' },
      { title: '離線 AI 處理', amount: '100%' },
      { title: '快速鍵喚起', amount: '<0.1s' },
    ],
    workflow: {
      title: '從螢幕到分享，只要三步。',
      alt: 'Shotera 使用流程',
      steps: [
        {
          title: '按下快速鍵',
          description: '在任何畫面喚起 Shotera，滑鼠一停，要截的視窗或元素已經辨識好了。',
        },
        {
          title: '標註、擷取或編輯',
          description: '標出重點、執行 OCR、去背、翻譯，都在同一個視窗裡完成。',
        },
        {
          title: '複製、儲存或釘選',
          description: '複製到剪貼簿、存到本機，或釘在最上層隨時對照。',
        },
      ],
    },
  },

  about: {
    statsTitle: 'Shotera 數據一覽',
    metaDescription: 'Shotera 的故事：我們為什麼打造這款螢幕擷取工具，以及背後堅持的原則與價值。',
    hero: {
      tagline: '關於我們',
      title: '把截圖這件小事，',
      accent: '做到極致',
      subtitle:
        'Shotera 誕生於一個樸素的念頭：每天都要用上無數次的截圖，理應更快、更順手。我們是一群同樣重度依賴截圖工具的產品人與工程師，把對效率的堅持，做進每一個快速鍵、每一次框選、每一幀畫面裡。',
      alt: 'Windows 桌面上的 Shotera 標註工具',
    },
    stats: [
      { title: '介面語言', amount: '15' },
      { title: '好評率', amount: '4.9 / 5' },
      { title: '離線 AI 處理', amount: '100%' },
      { title: '快速鍵喚起', amount: '<0.1s' },
    ],
    stand: {
      title: '我們堅持的事',
      subtitle: '工具越順手，你越感覺不到它的存在。這是 Shotera 每一個設計決策背後的準則。',
      items: [
        {
          title: '快，是第一位的',
          description: '一個快速鍵就能喚起，視窗與元素自動辨識，框選即所得。從想截圖到截完圖，不超過一秒。',
        },
        {
          title: '本機優先，隱私安心',
          description: 'OCR、去背等能力盡可能在裝置上執行，你的截圖預設不會上傳雲端。敏感內容，留在你自己的電腦裡。',
        },
        {
          title: '克制的設計',
          description: '不堆砌功能，不打斷你的工作節奏。常用功能一鍵可達，進階功能需要時才出現。',
        },
      ],
    },
    core: {
      title: '核心能力',
      subtitle: '從截圖到螢幕錄製，從貼圖到離線 OCR 與 AI——六件天天用得上的能力，一個快速鍵全都在。',
      alt: 'Windows 桌面上的 Shotera 標註工具：選區、工具列與玻璃貼片',
      items: [
        {
          title: '截圖',
          description:
            '智慧辨識視窗與介面元素，要截的範圍已經自動選好。框選完成後可以直接複製，也能立刻開啟標註工具列——兩種完成模式隨你挑。',
        },
        {
          title: '長截圖',
          description: '網頁或長聊天記錄一次截全：自動滾或自己滾，邊滾邊拼成一張長圖，拼接過程即時可見。',
        },
        {
          title: '貼圖',
          description: '把任何截圖貼在最上層隨時對照，多張並排也不凌亂。',
        },
        {
          title: '螢幕錄製 & GIF',
          description: '錄製螢幕並匯出輕巧的 GIF，游標高亮與點擊提示讓示範一看就懂。',
        },
        {
          title: '離線 OCR',
          description: '在裝置上把截圖裡的文字擷取成可編輯內容，支援多種語言，複製貼上即用。',
        },
        {
          title: 'AI 去背與擦除',
          description: 'AI 去背一鍵去掉背景、匯出透明底圖；AI 擦除清掉畫面裡的雜物與浮水印。兩者都用本機模型，不上傳。',
        },
      ],
    },
    more: {
      title: '更多能力',
      subtitle: '工具的手感藏在細節裡：標註、辨識、查看，還有讓桌面更順手的那些設定。',
      items: [
        {
          title: '標註工具',
          description:
            '矩形/橢圓、直線/箭頭、畫筆、螢光筆、馬賽克/模糊、文字、編號、表情貼圖、放大鏡、橡皮擦——截完圖立刻就能標。',
        },
        {
          title: 'Emoji 貼紙',
          description: '數百種表情貼紙隨手貼上：按讚、比心、吐槽、慶祝，隨意縮放、任意擺放，替截圖添點趣味。',
        },
        {
          title: '圖片查看與編輯',
          description: '截圖和圖片檔案都能在獨立視窗中開啟：同資料夾翻頁、縮放細看、順手修兩筆，常見格式直接就能開。',
        },
        {
          title: '圖片翻譯',
          description: '截圖裡的外文就地翻成你的語言，譯文直接複製帶走。',
        },
        {
          title: 'QR Code 辨識',
          description: 'QR Code 與條碼就地辨識：連結、Wi-Fi、聯絡人、商品條碼，結果一鍵複製，全程離線。',
        },
        {
          title: '自訂截圖',
          description: '固定尺寸、比例、延遲與螢幕座標，做素材和批次截圖更省事。',
        },
        {
          title: '多螢幕',
          description: '所有螢幕共用同一組座標系，副螢幕與延伸螢幕都能正確框選；高 DPI 螢幕下介面與截圖依然清晰。',
        },
        {
          title: '深色模式',
          description: '跟隨系統自動切換，也可以在淺色與深色之間手動選擇。',
        },
        {
          title: '演示模式',
          description: '一鍵收起雜亂視窗、隱藏桌面圖示、換上乾淨桌布；結束後再原樣還原。',
        },
      ],
    },
    values: {
      title: '我們的價值觀',
      subtitle: '做一款工具，和用一款工具，對我們來說是同一件事。我們每天用的，就是自己做的東西。',
      items: [
        {
          title: '為真實場景而造',
          description:
            '每個功能都來自真實的使用痛點——寫文件、標註設計稿、錄製問題重現、閱讀外文資料。我們先自己用，再交到你手上。',
        },
        {
          title: '持續打磨',
          description: '快速鍵的手感、框選的邊緣吸附、錄製的檔案大小與清晰度——這些細節我們會一直調整，直到順手為止。',
        },
        {
          title: '尊重使用者',
          description: '不捆綁安裝、不彈窗騷擾、不偷偷上傳你的資料。核心功能長期免費，是我們對使用者的承諾。',
        },
      ],
    },
    history: {
      title: '一路走來',
      subtitle: '從一個自用的小工具，到越來越多人每天在用的截圖利器。',
      cta: '免費下載 Shotera',
      items: [
        {
          title: '始於自己的需求',
          description: '因為找不到一款夠快、夠順手的截圖工具，我們決定自己動手寫一個。',
        },
        {
          title: '被使用者推著長大',
          description: '滾動截圖、AI 去背、離線 OCR、圖片翻譯……許多功能，都是使用者在回饋裡「點」出來的。',
        },
        {
          title: '走向更多人',
          description: '如今 Shotera 支援 15 種介面語言，還在持續增加，但不變的是同一個目標：讓截圖更簡單。',
        },
      ],
    },
    contact: {
      title: '聯絡我們',
      tagline: '隨時與我們聯絡',
      items: [
        {
          title: '使用者社群',
          description: '加入 Shotera 社群，第一時間取得新版本與使用技巧，也能直接告訴我們你的想法。',
        },
        {
          title: '郵件支援',
          description: '遇到問題或有功能建議？寄信到 mosuzo.studio@gmail.com，我們會認真閱讀並回覆每一封。',
        },
      ],
    },
  },
};
