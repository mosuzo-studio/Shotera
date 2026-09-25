import type { LocalizedLocale } from './site-content';

/**
 * Labels for the homepage download area (`DownloadButtons`): the format menu
 * and the small line pointing at that locale's versions page.
 *
 * Format wording follows the localized changelogs, where the same packages are
 * named; edition names stay in `versions-content.ts` for the versions page.
 */

export interface DownloadMenuLabels {
  setup: string;
  msi: string;
  portable: string;
  allVersions: string;
  recommended: string;
  /** Small line under the buttons, linking to the versions page. */
  footnote: string;
}

export const downloadMenuContent: Record<LocalizedLocale, DownloadMenuLabels> = {
  'zh-tw': {
    setup: '安裝版（.exe）',
    msi: 'MSI 安裝程式',
    portable: '免安裝版（.7z）',
    allVersions: '在 GitHub 查看全部版本',
    recommended: '推薦',
    footnote: '想要更輕量？了解 Shotera Lite（約 17 MB）→',
  },
  ja: {
    setup: 'インストーラー（.exe）',
    msi: 'MSI インストーラー',
    portable: 'ポータブル版（.7z）',
    allVersions: 'GitHub で全バージョンを見る',
    recommended: 'おすすめ',
    footnote: 'もっと軽量なものが欲しい？Shotera Lite を見る（約 17 MB）→',
  },
  ko: {
    setup: '설치 버전(.exe)',
    msi: 'MSI 설치 프로그램',
    portable: '포터블 버전(.7z)',
    allVersions: 'GitHub에서 모든 버전 보기',
    recommended: '추천',
    footnote: '더 가벼운 버전을 찾으시나요? Shotera Lite 알아보기(약 17 MB) →',
  },
  'pt-br': {
    setup: 'Instalador (.exe)',
    msi: 'Instalador MSI',
    portable: 'Versão portátil (.7z)',
    allVersions: 'Ver todas as versões no GitHub',
    recommended: 'Recomendado',
    footnote: 'Prefere algo mais leve? Conheça o Shotera Lite (~17 MB) →',
  },
  es: {
    setup: 'Instalador (.exe)',
    msi: 'Instalador MSI',
    portable: 'Versión portátil (.7z)',
    allVersions: 'Ver todas las versiones en GitHub',
    recommended: 'Recomendado',
    footnote: '¿Prefieres algo más ligero? Descubre Shotera Lite (~17 MB) →',
  },
  de: {
    setup: 'Installer (.exe)',
    msi: 'MSI-Installer',
    portable: 'Portable-Version (.7z)',
    allVersions: 'Alle Versionen auf GitHub',
    recommended: 'Empfohlen',
    footnote: 'Lieber leichter? Shotera Lite entdecken (~17 MB) →',
  },
  fr: {
    setup: "Programme d'installation (.exe)",
    msi: 'Installateur MSI',
    portable: 'Version portable (.7z)',
    allVersions: 'Toutes les versions sur GitHub',
    recommended: 'Recommandé',
    footnote: 'Envie de plus léger ? Découvrez Shotera Lite (~17 MB) →',
  },
  it: {
    setup: 'Programma di installazione (.exe)',
    msi: 'Installer MSI',
    portable: 'Versione portatile (.7z)',
    allVersions: 'Tutte le versioni su GitHub',
    recommended: 'Consigliato',
    footnote: 'Preferisci qualcosa di più leggero? Scopri Shotera Lite (~17 MB) →',
  },
  nl: {
    setup: 'Installatieprogramma (.exe)',
    msi: 'MSI-installer',
    portable: 'Draagbare versie (.7z)',
    allVersions: 'Alle versies op GitHub',
    recommended: 'Aanbevolen',
    footnote: 'Liever lichter? Ontdek Shotera Lite (~17 MB) →',
  },
  pl: {
    setup: 'Instalator (.exe)',
    msi: 'Instalator MSI',
    portable: 'Wersja przenośna (.7z)',
    allVersions: 'Wszystkie wersje na GitHubie',
    recommended: 'Zalecany',
    footnote: 'Wolisz coś lżejszego? Poznaj Shotera Lite (~17 MB) →',
  },
  ru: {
    setup: 'Установщик (.exe)',
    msi: 'Установщик MSI',
    portable: 'Портативная версия (.7z)',
    allVersions: 'Все версии на GitHub',
    recommended: 'Рекомендуется',
    footnote: 'Нужно легче? Посмотрите Shotera Lite (~17 MB) →',
  },
  sv: {
    setup: 'Installationsprogram (.exe)',
    msi: 'MSI-installationspaket',
    portable: 'Portabel version (.7z)',
    allVersions: 'Alla versioner på GitHub',
    recommended: 'Rekommenderas',
    footnote: 'Vill du ha något lättare? Upptäck Shotera Lite (~17 MB) →',
  },
  ar: {
    setup: 'مثبّت (.exe)',
    msi: 'مثبّت MSI',
    portable: 'النسخة المحمولة (.7z)',
    allVersions: 'كل الإصدارات على GitHub',
    recommended: 'موصى به',
    footnote: 'تريد نسخة أخف؟ تعرّف على Shotera Lite ‏(~17 MB) ←',
  },
};
