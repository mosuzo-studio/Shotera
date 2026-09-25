import type { HomeFeaturesContent } from '~/i18n/home-features-types';

/**
 * Traditional Chinese (Taiwan) copy for the homepage feature blocks.
 * Mirrors the English homepage in `src/pages/index.astro`, the source of truth;
 * terminology follows the Shotera app's zh-TW language pack.
 */
export const content: HomeFeaturesContent = {
  features: {
    tagline: '核心功能',
    title: '一款工具，涵蓋你所有的截圖情境',
    subtitle: '從隨手一截到專業創作，Shotera 把日常最常用的擷取、錄製、OCR 與標註需求，全都整合進一款輕巧的應用程式。',
    items: [
      {
        title: '智慧擷取',
        description: '按一次快速鍵就能框選區域、視窗或全螢幕。Shotera 自動偵測視窗與介面元素，精準對齊到像素。',
      },
      {
        title: '螢幕錄製與 GIF',
        description:
          '支援最高 4K 超高畫質與高影格率錄製，並可匯出 MP4 或輕巧的 GIF。沒有錄製時長限制，想錄多久就錄多久。',
      },
      {
        title: 'AI 去背',
        description:
          '一鍵分離主體、去掉背景，人像、商品、Logo 都能立刻去背直接使用。全程在裝置上處理，不需要 Photoshop。',
      },
      {
        title: 'AI 擦除',
        description: '智慧移除圖片中多餘的物件、浮水印或瑕疵，AI 會自然補上背景。全程離線、隱私無虞。',
      },
      {
        title: '離線 OCR',
        description: '從任何截圖中擷取文字，全程在你的裝置上處理，不上傳任何內容。中英混排、程式碼與表格都能乾淨辨識。',
      },
      {
        title: '圖片翻譯',
        description: '即時辨識並翻譯任何圖片裡的文字。外文文件、截圖、菜單一看就懂，譯文還能直接複製帶走。',
      },
      {
        title: '釘選到螢幕',
        description: '把任何截圖釘在螢幕最上層，工作時隨時對照。可縮放、排列、並排參考，不必切換視窗。',
      },
    ],
  },
  capture: {
    tagline: '螢幕擷取',
    title: '截得快，更要截得準',
    heading: '為高頻使用而設計',
    text: '快速鍵隨手喚起，擷取、標註、複製一氣呵成，不中斷你的工作節奏。',
    items: [
      {
        title: '智慧視窗 / 元素偵測',
        description: '滑鼠移過去就自動吸附視窗或介面元素，不必手動拖曳，一秒鎖定想擷取的範圍。',
      },
      {
        title: '完整的標註工具組',
        description: '表情貼圖、放大鏡、編號、箭頭、方框、文字、螢光標示與模糊一應俱全，截完立刻標註，重點馬上到位。',
      },
      {
        title: '模糊與重點標示',
        description: '一鍵模糊敏感資訊或標示重點區域，隱私保護與視覺強調一次到位。',
      },
    ],
  },
  recording: {
    tagline: '螢幕錄製',
    title: '錄影與 GIF，超高畫質、不限時長',
    text: '把「說不清楚」的操作，變成一段誰都能看懂的短片。',
    items: [
      {
        title: '超高畫質，不限時長',
        description: '支援 1080p、2K、4K 超高畫質與高影格率錄製，且沒有錄製時長限制，想錄多久就錄多久。',
      },
      {
        title: '匯出輕巧的 GIF',
        description: '放進文件、聊天室或 Issue 都輕鬆自如。不需要播放器，載入後立刻就能播放。',
      },
      {
        title: '錄製游標與點擊',
        description: '突顯滑鼠游標與點擊動作，讓示範的每一步都清楚好讀。',
      },
      {
        title: '彈性的輸出格式',
        description: '可自選解析度的 MP4 或 GIF，在畫質與檔案大小之間取得平衡，依用途自由選擇。',
      },
    ],
  },
  ai: {
    tagline: 'AI 能力',
    title: 'AI 加持，讓截圖不再只是截圖',
    text: 'AI 去背、擦除與 OCR 全程在本機執行——智慧不打折，隱私不妥協。',
    items: [
      {
        title: 'AI 去背',
        description: '自動偵測主體並一鍵去掉背景，人像與商品照幾秒內變成透明 PNG。全程在裝置上執行。',
      },
      {
        title: 'AI 擦除',
        description: '智慧移除多餘物件、浮水印或瑕疵，AI 會自然補上背景。同樣在本機執行，不上傳、不上雲。',
      },
      {
        title: '離線文字擷取',
        description: 'OCR 在本機執行，完全不碰雲端。一鍵把截圖中的文字變成可編輯、可複製的內容。',
      },
      {
        title: '模型彈性切換',
        description: 'AI 去背與擦除支援自訂切換模型，隨時使用當前最佳模型，始終領先一步。',
      },
    ],
  },
  more: {
    tagline: '更多功能',
    title: '那些你會慢慢離不開的小細節',
    subtitle: '藏在細節裡的小巧思，正是 Shotera 讓人一用就放不下的原因。',
    items: [
      {
        title: '表情貼圖',
        description: '一鍵為截圖加上表情貼圖與趣味標註，讓你的截圖更有表情。',
      },
      {
        title: '放大鏡',
        description: '把關鍵細節放大，讓觀眾一眼看到你想強調的地方。',
      },
      {
        title: '編號標註',
        description: '用編號一步步引導閱讀順序，最適合教學與操作說明。',
      },
      {
        title: '釘選到螢幕',
        description: '把參考圖片釘在最上層，邊看邊做，不必再跟視窗玩捉迷藏。',
      },
      {
        title: '自訂快速鍵',
        description: '把每個常用操作綁到你順手的快速鍵，進階使用者的最愛。',
      },
      {
        title: '歷史紀錄',
        description: '每次截圖與錄影都會自動儲存，手滑也不怕心血白費。',
      },
      {
        title: '多螢幕支援',
        description: '完美支援多螢幕與高 DPI 顯示器，每個畫面都能精準擷取。',
      },
      {
        title: '本機優先，隱私安心',
        description: 'OCR、AI 去背與 AI 擦除都在你的裝置上執行，不上傳任何內容，截圖只屬於你。',
      },
      {
        title: '輕量不佔資源',
        description: '啟動瞬間完成、記憶體佔用極小，隨時待命也不拖慢電腦。',
      },
      {
        title: '深色模式',
        description: '自動跟隨系統主題切換，白天夜晚都護眼。',
      },
    ],
  },
};
