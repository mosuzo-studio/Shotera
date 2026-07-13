import { getBlogPermalink, getAsset } from './utils/permalinks';
import { localizedPath, useTranslations, type Lang } from './i18n/utils';

export const getHeaderData = (lang: Lang) => {
  const t = useTranslations(lang);
  const l = (path: string) => localizedPath(lang, path);

  return {
    links: [
      { text: t('nav.features'), href: l('/#features') },
      { text: t('nav.pricing'), href: l('/pricing') },
      { text: t('nav.blog'), href: getBlogPermalink() },
      { text: t('nav.about'), href: l('/about') },
    ],
    actions: [{ text: t('nav.download'), href: l('/#download'), icon: 'tabler:download' }],
  };
};

export const getFooterData = (lang: Lang) => {
  const t = useTranslations(lang);
  const l = (path: string) => localizedPath(lang, path);

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
          { text: t('footer.download'), href: l('/#download') },
          { text: t('footer.docs'), href: '#' },
          { text: t('footer.faq'), href: l('/#faqs') },
          { text: t('footer.changelog'), href: '#' },
          { text: t('footer.feedback'), href: l('/contact') },
        ],
      },
      {
        title: t('footer.company'),
        links: [
          { text: t('footer.about'), href: l('/about') },
          { text: t('footer.blog'), href: getBlogPermalink() },
          { text: t('footer.contact'), href: l('/contact') },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('footer.terms'), href: l('/terms') },
      { text: t('footer.privacy'), href: l('/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Bilibili', icon: 'tabler:brand-bilibili', href: '#' },
      { ariaLabel: 'WeChat', icon: 'tabler:brand-wechat', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
    ],
    footNote: `
      <span class="font-semibold">Shotera</span> · 让每一次截图与录屏都更高效。
    `,
  };
};
