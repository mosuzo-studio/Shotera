import type { DownloadFormatsContent } from '../download-formats-types';

export const jaFormats: DownloadFormatsContent = {
  tagline: 'ダウンロード形式',
  title: 'どのファイルをダウンロードすればいい？',
  subtitle: '4つの形式はいずれも同じ Shotera で、インストールと更新の方法だけが違います。',
  headers: ['形式', 'インストールと更新', '向いている人'],
  recommendLabel: 'おすすめ',
  rows: [
    { format: 'インストーラー（.exe）', install: 'ダブルクリックでインストール、アプリ内で自動更新', bestFor: 'ほとんどの人' },
    { format: 'ポータブル版（.7z）', install: '解凍してすぐ使える、アプリ内で自動更新', bestFor: 'USB メモリに入れて持ち歩きたい' },
    { format: 'MSI インストーラー（.msi）', install: 'ダブルクリックまたはサイレントインストール、アプリ内で自動更新', bestFor: '企業での一括展開' },
    { format: 'Microsoft Store 版', install: 'ストアからインストールと更新', bestFor: '管理はシステムにおまかせ' },
  ],
};
