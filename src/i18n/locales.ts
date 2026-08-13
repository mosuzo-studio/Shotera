export type LocaleDirection = 'ltr' | 'rtl';

export interface LocaleDefinition {
  label: string;
  direction: LocaleDirection;
  published: boolean;
}

/**
 * Registry for every interface language supported by Shotera.
 *
 * Only published locales are enabled in Astro and shown in the language
 * switcher. Reserved locales can be translated and enabled one at a time
 * without changing their future URL prefixes.
 */
export const localeRegistry = {
  en: { label: 'English', direction: 'ltr', published: true },
  'zh-cn': { label: '简体中文', direction: 'ltr', published: true },
  'zh-tw': { label: '繁體中文', direction: 'ltr', published: false },
  ja: { label: '日本語', direction: 'ltr', published: false },
  'pt-br': { label: 'Português (Brasil)', direction: 'ltr', published: false },
  es: { label: 'Español', direction: 'ltr', published: false },
  de: { label: 'Deutsch', direction: 'ltr', published: false },
  fr: { label: 'Français', direction: 'ltr', published: false },
  it: { label: 'Italiano', direction: 'ltr', published: false },
  ko: { label: '한국어', direction: 'ltr', published: false },
  ru: { label: 'Русский', direction: 'ltr', published: false },
  ar: { label: 'العربية', direction: 'rtl', published: false },
  nl: { label: 'Nederlands', direction: 'ltr', published: false },
  pl: { label: 'Polski', direction: 'ltr', published: false },
  sv: { label: 'Svenska', direction: 'ltr', published: false },
} as const satisfies Record<string, LocaleDefinition>;

export type Locale = keyof typeof localeRegistry;

export const defaultLocale = 'en' as const satisfies Locale;
export const publishedLocales = ['en', 'zh-cn'] as const satisfies readonly Locale[];
export type PublishedLocale = (typeof publishedLocales)[number];

export const getLocaleDirection = (locale: string): LocaleDirection =>
  locale in localeRegistry ? localeRegistry[locale as Locale].direction : 'ltr';
