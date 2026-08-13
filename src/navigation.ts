import { getBlogPermalink, getAsset } from './utils/permalinks';
import { localizedPath, useTranslations, type Lang } from './i18n/utils';

export const getHeaderData = (lang: Lang) => {
  const t = useTranslations(lang);
  const l = (path: string) => localizedPath(lang, path);
  const blogHref = lang === 'en' || lang === 'zh-cn' ? getBlogPermalink() : l('/blog');

  return {
    links: [
      { text: t('nav.features'), href: l('/#features') },
      { text: t('nav.pricing'), href: l('/pricing') },
      { text: t('nav.blog'), href: blogHref },
      { text: t('nav.about'), href: l('/about') },
    ],
    actions: [{ text: t('nav.download'), href: 'https://github.com/mosuzo-studio/Shotera/releases', icon: 'tabler:download' }],
  };
};

export const getFooterData = (lang: Lang) => {
  const t = useTranslations(lang);
  const l = (path: string) => localizedPath(lang, path);
  const hasLocalizedLegalPages = lang === 'en' || lang === 'zh-cn';
  const legal = (path: '/terms' | '/privacy') => (hasLocalizedLegalPages ? l(path) : path);
  const blogHref = lang === 'en' || lang === 'zh-cn' ? getBlogPermalink() : l('/blog');

  return {
    links: [
      {
        title: t('footer.product'),
        links: [
          { text: t('footer.feat.screenshot'), href: l('/#features') },
          { text: t('footer.feat.record'), href: l('/#features') },
          { text: t('footer.feat.cutout'), href: l('/#features') },
          { text: t('footer.feat.ocr'), href: l('/#features') },
          { text: t('footer.feat.translate'), href: l('/#features') },
          { text: t('footer.feat.pin'), href: l('/#features') },
        ],
      },
      {
        title: t('footer.support'),
        links: [
          { text: t('footer.download'), href: 'https://github.com/mosuzo-studio/Shotera/releases' },
          { text: t('footer.faq'), href: l('/#faqs') },
          { text: t('footer.changelog'), href: l('/changelog') },
          { text: t('footer.feedback'), href: l('/contact') },
        ],
      },
      {
        title: t('footer.company'),
        links: [
          { text: t('footer.about'), href: l('/about') },
          { text: t('footer.blog'), href: blogHref },
          { text: t('footer.contact'), href: l('/contact') },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('footer.terms'), href: legal('/terms') },
      { text: t('footer.privacy'), href: legal('/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Bilibili', icon: 'tabler:brand-bilibili', href: '#' },
      { ariaLabel: 'WeChat', icon: 'tabler:brand-wechat', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mosuzo-studio/Shotera' },
    ],
    footNote: `
      <span class="font-semibold">Shotera</span> · ${t('footer.tagline')}
    `,
  };
};
