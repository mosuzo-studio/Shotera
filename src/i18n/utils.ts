import { getRelativeLocaleUrl } from 'astro:i18n';

import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

export { languages, defaultLang, type Lang, type UIKey };

/**
 * Extract the active language from a URL. With `prefixDefaultLocale: false`,
 * English lives at the root (`/about`) and Chinese under `/zh/` (`/zh/about`).
 *
 * `Astro.url.pathname` includes the configured `base` (e.g. `/template`), so we
 * strip that first before reading the locale segment. Prefer `Astro.currentLocale`
 * in `.astro` files; this helper exists for utilities that only have the URL.
 */
export function getLangFromUrl(url: URL): Lang {
  let pathname = url.pathname;
  const normalizedBase = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (normalizedBase && pathname.startsWith(normalizedBase)) {
    pathname = pathname.slice(normalizedBase.length) || '/';
  }
  const [, seg] = pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/**
 * Returns a translator bound to `lang`, falling back to the default language
 * for any key missing in that locale.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a locale-aware, base-prefixed absolute path for an internal route.
 * Wraps Astro's `getRelativeLocaleUrl` so callers pass a plain path
 * (`/about`, `#features`, `/`) and get back e.g. `/template/zh/about`.
 *
 * External URLs, hash links and protocol-relative links pass through
 * untouched — those are never localized.
 */
export function localizedPath(lang: Lang, path = '/'): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('://') ||
    path.startsWith('#') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('javascript:')
  ) {
    return path;
  }

  // Pure-anchor targets like `/#features` should keep the hash but still be
  // rooted at the current locale's home.
  const [pathname, hash] = path.split('#');
  const localized = getRelativeLocaleUrl(lang, pathname === '' ? '/' : pathname);
  return hash ? `${localized.replace(/\/$/, '')}#${hash}` : localized;
}

/**
 * Given the current URL, return the equivalent path in `targetLang`, used by
 * the language switcher. Strips any existing locale prefix, then re-localizes.
 */
export function switchLocalePath(url: URL, targetLang: Lang): string {
  let pathname = url.pathname;

  // Remove the base prefix (e.g. `/template`) so we work with app-relative paths.
  const normalizedBase = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (normalizedBase && pathname.startsWith(normalizedBase)) {
    pathname = pathname.slice(normalizedBase.length) || '/';
  }

  // Strip a leading locale segment for any known non-default language.
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && segments[0] in ui && segments[0] !== defaultLang) {
    segments.shift();
  }

  const appPath = '/' + segments.join('/');
  return localizedPath(targetLang, appPath === '/' ? '/' : appPath);
}
