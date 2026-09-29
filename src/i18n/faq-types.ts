/**
 * Shape of a localized FAQ page (`src/i18n/faq/<locale>.ts`).
 *
 * The English page (`src/pages/faq.astro`) is the source of truth: same groups
 * in the same order, same questions, same claims. `id` values stay English
 * because they are anchors - `/ja/faq#offline` has to keep working.
 */
export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  items: FaqItem[];
}

export interface FaqContent {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  groups: FaqGroup[];
  /** The closing line, split around the link to the locale's contact page. */
  footnoteBefore: string;
  footnoteLink: string;
  footnoteAfter: string;
}
