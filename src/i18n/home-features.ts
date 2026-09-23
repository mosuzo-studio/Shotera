import type { HomeFeaturesContent } from './home-features-types';
import type { LocalizedLocale } from './site-content';

import { content as ar } from './home-features/ar';
import { content as de } from './home-features/de';
import { content as es } from './home-features/es';
import { content as fr } from './home-features/fr';
import { content as it } from './home-features/it';
import { content as ja } from './home-features/ja';
import { content as ko } from './home-features/ko';
import { content as nl } from './home-features/nl';
import { content as pl } from './home-features/pl';
import { content as ptBr } from './home-features/pt-br';
import { content as ru } from './home-features/ru';
import { content as sv } from './home-features/sv';
import { content as zhTw } from './home-features/zh-tw';

export const homeFeaturesContent: Record<LocalizedLocale, HomeFeaturesContent> = {
  'zh-tw': zhTw,
  ja,
  ko,
  'pt-br': ptBr,
  es,
  fr,
  de,
  it,
  nl,
  sv,
  ru,
  ar,
  pl,
};
