export type StudioLang = 'en' | 'zh-cn';

type Pair = Record<StudioLang, string>;

const pair = (en: string, zh: string): Pair => ({ en, 'zh-cn': zh });

export interface StudioProduct {
  slug: string;
  name: string;
  icon: string;
  purpose: Pair;
  status: Pair;
  siteUnavailable?: boolean;
  releases?: string;
}

export const studioHome = (lang: StudioLang) =>
  lang === 'zh-cn' ? 'https://mosuzo.com/' : 'https://mosuzo.com/en/';

export const studioProductsUrl = (lang: StudioLang) =>
  lang === 'zh-cn' ? 'https://mosuzo.com/products/' : 'https://mosuzo.com/en/products/';

export const studioContactUrl = (lang: StudioLang) =>
  lang === 'zh-cn' ? 'https://mosuzo.com/contact/' : 'https://mosuzo.com/en/contact/';

export const studioServicesUrl = (lang: StudioLang) =>
  lang === 'zh-cn' ? 'https://mosuzo.com/services/' : 'https://mosuzo.com/en/services/';

export const studioProducts: StudioProduct[] = [
  {
    slug: 'shotera',
    name: 'Shotera',
    icon: '/studio/shotera.svg',
    purpose: pair(
      'Screenshot, scrolling capture and screen recording, with clear annotations.',
      '截图、长截图与录屏，再把重点标清楚。'
    ),
    status: pair('Download available', '可下载'),
    releases: 'https://github.com/mosuzo-studio/Shotera/releases',
  },
  {
    slug: 'sniparc',
    name: 'SnipArc',
    icon: '/studio/sniparc.svg',
    purpose: pair('Capture the point, mark it, share it.', '截下重点，标清楚，马上分享。'),
    status: pair('Download available', '可下载'),
  },
  {
    slug: 'windowsift',
    name: 'WindowSift',
    icon: '/studio/windowsift.svg',
    purpose: pair(
      'Find the app behind a window; inspect the tree and properties.',
      '找到窗口背后的程序，查看窗口树与属性。'
    ),
    status: pair('Download available', '可下载'),
  },
  {
    slug: 'imageperch',
    name: 'ImagePerch',
    icon: '/studio/imageperch.svg',
    purpose: pair('Navigate, trim and edit long images.', '长图浏览、裁切与编辑。'),
    status: pair('Download available', '可下载'),
  },
  {
    slug: 'keysplera',
    name: 'KeySplera',
    icon: '/studio/keysplera.svg',
    purpose: pair('Let viewers see your keys and clicks.', '让观众看见按键和点击。'),
    status: pair('v0.1.0 available', 'v0.1.0 可下载'),
  },
];

export const productHome = (lang: StudioLang, product: StudioProduct) =>
  'https://' + product.slug + '.mosuzo.com/' + (lang === 'zh-cn' ? 'zh-cn/' : '');

export const productStatusUrl = (lang: StudioLang, product: StudioProduct) =>
  productHome(lang, product) + 'download/';

export const productMenuHref = (lang: StudioLang, product: StudioProduct) =>
  product.siteUnavailable && product.releases ? product.releases : productHome(lang, product);

export const recommendationHref = (lang: StudioLang, product: StudioProduct) => {
  if (product.siteUnavailable && product.releases) return product.releases;
  if (product.status.en === 'Check release status' || product.status.en === 'Standalone release pending')
    return productStatusUrl(lang, product);
  return productHome(lang, product);
};

export const recommendationLabel = (product: StudioProduct): Pair => {
  if (product.siteUnavailable && product.releases) return pair('Download on GitHub', '在 GitHub 下载');
  if (product.status.en === 'Check release status' || product.status.en === 'Standalone release pending')
    return pair('Check release status', '查看发布状态');
  return pair('Visit product site', '访问产品官网');
};

export const recommendations: Record<string, { slug: string; reason: Pair }[]> = {
  shotera: [
    {
      slug: 'keysplera',
      reason: pair(
        'Add keystroke and click feedback to a recorded tutorial. Check the recording preview to confirm the overlay is captured.',
        '给录屏教程补上键鼠操作提示。录制后先在预览里确认覆盖层是否被收录。'
      ),
    },
    {
      slug: 'imageperch',
      reason: pair(
        'Open a long capture in the viewer, browse the details and trim what you do not need.',
        '打开长截图，在查看器里浏览细节并裁去多余内容。'
      ),
    },
  ],
  sniparc: [
    {
      slug: 'imageperch',
      reason: pair(
        'Already have a long image? Use the viewer to find the details, trim the excess and keep annotating.',
        '手边已有长图时，用查看器找到细节、裁去多余内容并继续标注。'
      ),
    },
  ],
  windowsift: [
    {
      slug: 'sniparc',
      reason: pair(
        'Check which app owns the window, then capture and annotate it to explain the problem clearly.',
        '先核对窗口来自哪个程序，再用截图和标注把问题说明白。'
      ),
    },
  ],
  imageperch: [
    {
      slug: 'shotera',
      reason: pair(
        'Capture the full page with scrolling capture first, then open the saved image here to tidy it up.',
        '先用长截图获取完整页面，再把保存的图片在这里打开整理。'
      ),
    },
  ],
  keysplera: [
    {
      slug: 'shotera',
      reason: pair(
        'Combine input feedback with a screen recording for teaching and demos. Check the recording preview to confirm the overlay appears.',
        '将键鼠反馈和录屏组合起来，用于教学与演示。录制后先在预览里核对覆盖层是否出现。'
      ),
    },
  ],
};

export const productBySlug = (slug: string) => studioProducts.find((product) => product.slug === slug)!;
export const copy = (lang: StudioLang, value: Pair) => value[lang];
