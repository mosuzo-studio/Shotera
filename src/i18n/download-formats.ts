import type { LocalizedLocale } from './site-content';
import type { DownloadFormatsContent } from './download-formats-types';
import { zhTwFormats } from './download-formats/zh-tw';
import { jaFormats } from './download-formats/ja';
import { koFormats } from './download-formats/ko';
import { ptBrFormats } from './download-formats/pt-br';
import { esFormats } from './download-formats/es';
import { deFormats } from './download-formats/de';
import { frFormats } from './download-formats/fr';
import { itFormats } from './download-formats/it';
import { nlFormats } from './download-formats/nl';
import { plFormats } from './download-formats/pl';
import { ruFormats } from './download-formats/ru';
import { svFormats } from './download-formats/sv';
import { arFormats } from './download-formats/ar';

export const downloadFormatsContent: Record<LocalizedLocale, DownloadFormatsContent> = {
  'zh-tw': zhTwFormats,
  ja: jaFormats,
  ko: koFormats,
  'pt-br': ptBrFormats,
  es: esFormats,
  de: deFormats,
  fr: frFormats,
  it: itFormats,
  nl: nlFormats,
  pl: plFormats,
  ru: ruFormats,
  sv: svFormats,
  ar: arFormats,
};
