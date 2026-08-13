export type LocaleDirection = 'ltr' | 'rtl';

export interface LocaleDefinition {
  label: string;
  direction: LocaleDirection;
  published: boolean;
}

/**
 * Registry for every interface language supported by Shotera.
 *
 * Published locales are enabled in Astro and shown in the language switcher.
 * Keeping route codes here provides one source of truth for URLs, labels,
 * language direction, and future localization maintenance.
 */
export const localeRegistry = {
  en: { label: 'English', direction: 'ltr', published: true },
  'zh-cn': { label: '简体中文', direction: 'ltr', published: true },
  'zh-tw': { label: '繁體中文', direction: 'ltr', published: true },
  ja: { label: '日本語', direction: 'ltr', published: true },
  'pt-br': { label: 'Português (Brasil)', direction: 'ltr', published: true },
  es: { label: 'Español', direction: 'ltr', published: true },
  de: { label: 'Deutsch', direction: 'ltr', published: true },
  fr: { label: 'Français', direction: 'ltr', published: true },
  it: { label: 'Italiano', direction: 'ltr', published: true },
  ko: { label: '한국어', direction: 'ltr', published: true },
  ru: { label: 'Русский', direction: 'ltr', published: true },
  ar: { label: 'العربية', direction: 'rtl', published: true },
  nl: { label: 'Nederlands', direction: 'ltr', published: true },
  pl: { label: 'Polski', direction: 'ltr', published: true },
  sv: { label: 'Svenska', direction: 'ltr', published: true },
} as const satisfies Record<string, LocaleDefinition>;

export type Locale = keyof typeof localeRegistry;

export const defaultLocale = 'en' as const satisfies Locale;
export const publishedLocales = [
  'en',
  'zh-cn',
  'zh-tw',
  'ja',
  'pt-br',
  'es',
  'de',
  'fr',
  'it',
  'ko',
  'ru',
  'ar',
  'nl',
  'pl',
  'sv',
] as const satisfies readonly Locale[];
export type PublishedLocale = (typeof publishedLocales)[number];

export const getLocaleDirection = (locale: string): LocaleDirection =>
  locale in localeRegistry ? localeRegistry[locale as Locale].direction : 'ltr';
