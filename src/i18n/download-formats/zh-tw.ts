import type { DownloadFormatsContent } from '../download-formats-types';

export const zhTwFormats: DownloadFormatsContent = {
  tagline: '下載格式',
  title: '該下載哪個檔案？',
  subtitle: '四種格式都是同一個 Shotera，只是安裝與更新方式不同。',
  headers: ['格式', '安裝與更新', '適合誰'],
  recommendLabel: '推薦',
  rows: [
    { format: '安裝版（.exe）', install: '雙擊安裝，應用內自動更新', bestFor: '大多數人的選擇' },
    { format: '免安裝版（.7z）', install: '解壓即用，應用內自動更新', bestFor: '想放 U 盤隨身帶' },
    { format: 'MSI 安裝程式（.msi）', install: '雙擊或靜默安裝，應用內自動更新', bestFor: '企業批次部署' },
    { format: '微軟商店版', install: '從商店安裝並更新', bestFor: '想省心交給系統' },
  ],
};
