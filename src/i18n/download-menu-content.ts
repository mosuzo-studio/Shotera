import type { LocalizedLocale } from './site-content';

/**
 * Labels for the homepage download menu (`DownloadButtons`), which lists the
 * Standard and Lite editions with their three formats.
 *
 * Edition names follow the versions page (`versions-content.ts`); installer
 * wording follows the localized changelogs, where the same formats are named.
 */

export interface DownloadMenuLabels {
  setup: string;
  msi: string;
  portable: string;
  allVersions: string;
  standard: string;
  lite: string;
}

export const downloadMenuContent: Record<LocalizedLocale, DownloadMenuLabels> = {
  'zh-tw': {
    setup: '安裝版（.exe）',
    msi: 'MSI 安裝程式',
    portable: '免安裝版（.7z）',
    allVersions: '在 GitHub 查看全部版本',
    standard: '完整版',
    lite: 'Lite 版',
  },
  ja: {
    setup: 'インストーラー（.exe）',
    msi: 'MSI インストーラー',
    portable: 'ポータブル版（.7z）',
    allVersions: 'GitHub で全バージョンを見る',
    standard: 'フル版',
    lite: 'Lite版',
  },
  ko: {
    setup: '설치 버전(.exe)',
    msi: 'MSI 설치 프로그램',
    portable: '포터블 버전(.7z)',
    allVersions: 'GitHub에서 모든 버전 보기',
    standard: '전체 버전',
    lite: 'Lite 버전',
  },
  'pt-br': {
    setup: 'Instalador (.exe)',
    msi: 'Instalador MSI',
    portable: 'Versão portátil (.7z)',
    allVersions: 'Ver todas as versões no GitHub',
    standard: 'Versão completa',
    lite: 'Lite',
  },
  es: {
    setup: 'Instalador (.exe)',
    msi: 'Instalador MSI',
    portable: 'Versión portátil (.7z)',
    allVersions: 'Ver todas las versiones en GitHub',
    standard: 'Versión completa',
    lite: 'Lite',
  },
  de: {
    setup: 'Installer (.exe)',
    msi: 'MSI-Installer',
    portable: 'Portable-Version (.7z)',
    allVersions: 'Alle Versionen auf GitHub',
    standard: 'Vollversion',
    lite: 'Lite',
  },
  fr: {
    setup: "Programme d'installation (.exe)",
    msi: 'Installateur MSI',
    portable: 'Version portable (.7z)',
    allVersions: 'Toutes les versions sur GitHub',
    standard: 'Version complète',
    lite: 'Lite',
  },
  it: {
    setup: 'Programma di installazione (.exe)',
    msi: 'Installer MSI',
    portable: 'Versione portatile (.7z)',
    allVersions: 'Tutte le versioni su GitHub',
    standard: 'Versione completa',
    lite: 'Lite',
  },
  nl: {
    setup: 'Installatieprogramma (.exe)',
    msi: 'MSI-installer',
    portable: 'Draagbare versie (.7z)',
    allVersions: 'Alle versies op GitHub',
    standard: 'Volledige versie',
    lite: 'Lite',
  },
  pl: {
    setup: 'Instalator (.exe)',
    msi: 'Instalator MSI',
    portable: 'Wersja przenośna (.7z)',
    allVersions: 'Wszystkie wersje na GitHubie',
    standard: 'Pełna wersja',
    lite: 'Lite',
  },
  ru: {
    setup: 'Установщик (.exe)',
    msi: 'Установщик MSI',
    portable: 'Портативная версия (.7z)',
    allVersions: 'Все версии на GitHub',
    standard: 'Полная версия',
    lite: 'Lite',
  },
  sv: {
    setup: 'Installationsprogram (.exe)',
    msi: 'MSI-installationspaket',
    portable: 'Portabel version (.7z)',
    allVersions: 'Alla versioner på GitHub',
    standard: 'Fullversion',
    lite: 'Lite',
  },
  ar: {
    setup: 'مثبّت (.exe)',
    msi: 'مثبّت MSI',
    portable: 'النسخة المحمولة (.7z)',
    allVersions: 'كل الإصدارات على GitHub',
    standard: 'النسخة الكاملة',
    lite: 'Lite',
  },
};
