/**
 * Per-locale copy that brings the 13 published locales to parity with the
 * English/Simplified-Chinese home and about pages: the three extra feature
 * cards, the scrolling-capture block, the stats bars, the workflow steps and
 * the whole about page.
 *
 * One file per locale in `src/i18n/locale-extras/<locale>.ts` so the shared
 * modules stay untouched. Icons and layout live in the components; this module
 * is text only.
 */

export interface LocaleExtrasItem {
  title: string;
  description: string;
}

export interface LocaleExtrasStat {
  title: string;
  amount: string;
}

export interface LocaleExtras {
  /** Footer "Product" column item, short label, e.g. "Scrolling capture". */
  footerScrolling: string;

  home: {
    /** Alt text for the hero product render. */
    heroAlt: string;
    /** The three cards the English grid has and the locales were missing. */
    cards: [LocaleExtrasItem, LocaleExtrasItem, LocaleExtrasItem];
    scrolling: {
      tagline: string;
      title: string;
      text: string;
      alt: string;
      items: [LocaleExtrasItem, LocaleExtrasItem, LocaleExtrasItem, LocaleExtrasItem];
    };
    stats: [LocaleExtrasStat, LocaleExtrasStat, LocaleExtrasStat, LocaleExtrasStat];
    workflow: {
      title: string;
      alt: string;
      steps: [LocaleExtrasItem, LocaleExtrasItem, LocaleExtrasItem];
    };
  };

  about: {
    metaDescription: string;
    hero: {
      tagline: string;
      title: string;
      accent: string;
      subtitle: string;
      alt: string;
    };
    stats: [LocaleExtrasStat, LocaleExtrasStat, LocaleExtrasStat, LocaleExtrasStat];
    stand: {
      title: string;
      subtitle: string;
      items: [LocaleExtrasItem, LocaleExtrasItem, LocaleExtrasItem];
    };
    toolbox: {
      title: string;
      subtitle: string;
      alt: string;
      items: [
        LocaleExtrasItem,
        LocaleExtrasItem,
        LocaleExtrasItem,
        LocaleExtrasItem,
        LocaleExtrasItem,
        LocaleExtrasItem,
        LocaleExtrasItem,
        LocaleExtrasItem,
      ];
    };
    values: {
      title: string;
      subtitle: string;
      items: [LocaleExtrasItem, LocaleExtrasItem, LocaleExtrasItem];
    };
    history: {
      title: string;
      subtitle: string;
      cta: string;
      items: [LocaleExtrasItem, LocaleExtrasItem, LocaleExtrasItem];
    };
    contact: {
      title: string;
      tagline: string;
      items: [LocaleExtrasItem, LocaleExtrasItem];
    };
  };
}
