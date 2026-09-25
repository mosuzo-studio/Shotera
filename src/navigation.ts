import { getBlogPermalink, getAsset } from './utils/permalinks';
import { localizedPath, useTranslations, type Lang } from './i18n/utils';
import { getSetupDownloadUrl } from './utils/download';

export const getHeaderData = async (lang: Lang) => {
  const t = useTranslations(lang);
  const l = (path: string) => localizedPath(lang, path);
  const blogHref = lang === 'en' || lang === 'zh-cn' ? getBlogPermalink() : l('/blog');
  const setupUrl = await getSetupDownloadUrl();

  return {
    links: [
      { text: t('nav.features'), href: l('/#features') },
      // { text: t('nav.pricing'), href: l('/pricing') },  // 临时屏蔽价格链接
      { text: t('nav.versions'), href: l('/versions') },
      { text: t('nav.changelog'), href: l('/changelog') },
      // { text: t('nav.blog'), href: blogHref },  // 临时屏蔽博客链接
      { text: t('nav.about'), href: l('/about') },
    ],
    actions: [{ text: t('action.download'), href: setupUrl, icon: 'tabler:download' }],
  };
};

export const getFooterData = async (lang: Lang) => {
  const t = useTranslations(lang);
  const l = (path: string) => localizedPath(lang, path);
  const hasLocalizedLegalPages = lang === 'en' || lang === 'zh-cn';
  const legal = (path: '/terms' | '/privacy') => (hasLocalizedLegalPages ? l(path) : path);
  // The 13 locales have no FAQ page of their own, so they fall back to the
  // English one, the same way their legal pages do.
  const faqHref = hasLocalizedLegalPages ? l('/faq') : '/faq';
  const blogHref = lang === 'en' || lang === 'zh-cn' ? getBlogPermalink() : l('/blog');
  const setupUrl = await getSetupDownloadUrl();

  return {
    links: [
      {
        title: t('footer.product'),
        links: [
          { text: t('footer.feat.screenshot'), href: l('/#features') },
          { text: t('footer.feat.scrolling'), href: l('/#features') },
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
          { text: t('footer.download'), href: setupUrl },
          { text: t('footer.faq'), href: faqHref },
          { text: t('footer.changelog'), href: l('/changelog') },
          { text: t('footer.feedback'), href: l('/contact') },
        ],
      },
      {
        title: t('footer.company'),
        links: [
          { text: t('footer.about'), href: l('/about') },
          // { text: t('footer.blog'), href: blogHref },  // 临时屏蔽博客链接
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
