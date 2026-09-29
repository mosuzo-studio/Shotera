import type { V3Copy } from '../copy';

/**
 * Shape of a per-locale copy file under `copy-intl/`.
 *
 * Each locale translates what it can and leaves the rest out; the resolver in
 * `index.ts` fills the gaps from the English baseline, so a half-finished
 * locale still renders a complete page. Arrays are replaced wholesale - never
 * merged element by element - so a translated list always keeps its own order
 * and length.
 */
export type DeepPartial<T> = T extends readonly (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export type V3LocaleCopy = DeepPartial<V3Copy>;
