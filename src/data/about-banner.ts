import cat1 from '~/assets/images/about-cat-1.webp';
import cat2 from '~/assets/images/about-cat-2.webp';
import cat3 from '~/assets/images/about-cat-3.webp';
import cat4 from '~/assets/images/about-cat-4.webp';
import cat5 from '~/assets/images/about-cat-5.webp';
import cat6 from '~/assets/images/about-cat-6.webp';

/* Weighted pool for the About capability banner: 1 / 2 / 3 / 5 carry 20 % each,
   4 and 6 carry 10 % each. */
export const aboutBannerPool = [
  { src: cat1, weight: 20 },
  { src: cat2, weight: 20 },
  { src: cat3, weight: 20 },
  { src: cat4, weight: 10 },
  { src: cat5, weight: 20 },
  { src: cat6, weight: 10 },
];
