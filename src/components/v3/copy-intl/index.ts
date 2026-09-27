/// <reference types="vite/client" />
import { v3Copy, type V3Copy } from '../copy';
import type { V3LocaleCopy } from './types';

/**
 * Every locale file in this folder, keyed by its locale code. `import.meta.glob`
 * keeps the resolver honest: whatever files exist (and only those) get wired,
 * so a locale can land before the pages that render it.
 */
const localeModules = import.meta.glob<{ default: V3LocaleCopy }>('./*.ts', { eager: true });

const localeCopy: Record<string, V3LocaleCopy> = {};
for (const [path, module] of Object.entries(localeModules)) {
  const code = path.replace(/^\.\//, '').replace(/\.ts$/, '');
  if (code === 'index' || code === 'types') continue;
  if (module?.default) localeCopy[code] = module.default;
}

/** Locale codes that ship their own copy file (sorted, for diagnostics). */
export const translatedLocales = Object.keys(localeCopy).sort();

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/** Locale overrides win; anything a locale leaves out stays English. Arrays are
    replaced wholesale, which is what a translated list wants. */
const merge = (base: unknown, override: unknown): unknown => {
  if (override === undefined) return base;
  if (!isPlainObject(base) || !isPlainObject(override)) return override;
  const merged: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) merged[key] = merge(merged[key], value);
  return merged;
};

/**
 * Copy for any published locale: English and Simplified Chinese have their own
 * baselines, the other locales merge their file over English, and an unknown
 * code falls back to English.
 */
export function getV3Copy(lang: string): V3Copy {
  if (lang === 'en') return v3Copy.en;
  if (lang === 'zh-cn') return v3Copy['zh-cn'];
  const override = localeCopy[lang];
  return (override ? merge(v3Copy.en, override) : v3Copy.en) as V3Copy;
}
