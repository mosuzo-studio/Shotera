import type { LocalizedLocale } from '../site-content';
import type { LocaleExtras } from '../locale-extras-types';

import { content as ar } from './ar';
import { content as de } from './de';
import { content as es } from './es';
import { content as fr } from './fr';
import { content as it } from './it';
import { content as ja } from './ja';
import { content as ko } from './ko';
import { content as nl } from './nl';
import { content as pl } from './pl';
import { content as ptBr } from './pt-br';
import { content as ru } from './ru';
import { content as sv } from './sv';
import { content as zhTw } from './zh-tw';

/**
 * Home + about copy that brings the 13 published locales to parity with the
 * English and Simplified-Chinese pages (see `locale-extras-types.ts`).
 */
export const localeExtras: Record<LocalizedLocale, LocaleExtras> = {
  'zh-tw': zhTw,
  ja,
  ko,
  'pt-br': ptBr,
  es,
  de,
  fr,
  it,
  nl,
  pl,
  ru,
  sv,
  ar,
};
