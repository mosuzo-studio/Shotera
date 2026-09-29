import type { LocalizedLocale } from '../site-content';
import type { FaqContent } from '../faq-types';

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

/** FAQ copy for the 13 published locales; EN and zh-CN live in their pages. */
export const faqContent: Record<LocalizedLocale, FaqContent> = {
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
