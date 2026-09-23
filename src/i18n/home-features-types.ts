/**
 * Shape of the localized homepage feature blocks (Core features / Capture /
 * Recording / AI features / More features). Copy mirrors the English homepage
 * in `src/pages/index.astro`, which is the source of truth; icons and images
 * live in the component, not here.
 */

export interface HomeFeatureItem {
  title: string;
  description: string;
}

export interface HomeFeaturesContent {
  /** "Core features" block — 7 items. */
  features: { tagline: string; title: string; subtitle: string; items: HomeFeatureItem[] };
  /** Capture block — 3 items plus a heading paragraph. */
  capture: { tagline: string; title: string; heading: string; text: string; items: HomeFeatureItem[] };
  /** Recording block — 4 items. */
  recording: { tagline: string; title: string; text: string; items: HomeFeatureItem[] };
  /** AI features block — 4 items. */
  ai: { tagline: string; title: string; text: string; items: HomeFeatureItem[] };
  /** "More features" block — 10 items. */
  more: { tagline: string; title: string; subtitle: string; items: HomeFeatureItem[] };
}
