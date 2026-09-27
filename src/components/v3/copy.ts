/**
 * Copy for the v3 (Cap-flavoured) homepage.
 *
 * Only EN and zh-CN are wired up for now; the 13 other locales keep the
 * previous homepage. Wording mirrors the existing pages so the terminology
 * stays consistent across the site.
 */

export type V3Lang = 'en' | 'zh-cn';

export type V3ShotKey = 'capture' | 'long' | 'pin' | 'record' | 'ai';

export interface V3Segment {
  text: string;
  hl?: boolean;
}

export interface V3ModeCard {
  icon: 'capture' | 'pin' | 'record';
  title: string;
  one: string;
  steps: string[];
  bestFor: string;
}

export interface V3FeatureSection {
  eyebrow: string;
  title: string;
  lead: string;
  rows: string[];
  items: { title: string; note: string }[];
  image: 'capture' | 'longshot' | 'pin' | 'recording' | 'ai';
  reversed?: boolean;
}

export interface V3Channel {
  key: string;
  name: string;
  /** Shown under the name once the channel is live. */
  handle?: string;
  note: string;
  icon: string;
  /** No href yet = the channel is not open, and the card renders as a placeholder. */
  href?: string;
  tint: string;
}

export interface V3ChannelGroup {
  key: string;
  title: string;
  note: string;
  channels: V3Channel[];
}

export interface V3MailTemplate {
  subject: string;
  /** Plain text, \n separated; the component turns it into a mailto body. */
  body: string;
  copied: string;
}

export interface V3Copy {
  home: string;
  nav: {
    features: string;
    versions: string;
    changelog: string;
    about: string;
    faq: string;
    menu: string;
    language: string;
    cta: string;
  };
  hero: {
    badge: string;
    announce: string;
    modes: { key: V3ShotKey; label: string; caption: string }[];
    h1: V3Segment[][];
    sub: string;
    primary: string;
    secondary: string;
    metaStrong: string;
    metaRest: string;
    store: string;
    shellMonitor: string;
    shellLaptop: string;
  };
  download: {
    more: string;
    menu: string;
    edition: string;
    setup: string;
    portable: string;
    msi: string;
    store: string;
    setupTip: string;
    portableTip: string;
    msiTip: string;
    storeTip: string;
    recommend: string;
    allVersions: string;
  };
  trust: { value: string; label: string }[];
  modesSection: { eyebrow: string; title: string; lead: string; cards: V3ModeCard[] };
  features: V3FeatureSection[];
  cta: { eyebrow: string; title: string; lead: string; primary: string; secondary: string; note: string };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    replyNote: string;
    faqNote: string;
    faqLink: string;
    soon: string;
    mail: V3MailTemplate;
    groups: V3ChannelGroup[];
  };
  footer: {
    blurb: string;
    cols: { title: string; links: { text: string; path: string; hash?: string }[] }[];
    legal: { text: string; path: string }[];
    rights: string;
    system: string;
  };
}

export const v3Copy: Record<V3Lang, V3Copy> = {
  en: {
    home: 'Shotera — Faster, smarter screenshots and screen recording',
    nav: {
      features: 'Features',
      versions: 'Versions',
      changelog: 'Changelog',
      about: 'About',
      faq: 'FAQ',
      menu: 'Menu',
      language: 'Language',
      cta: 'Download free',
    },
    hero: {
      badge: 'New',
      announce: 'Lite edition: just ~17 MB to install',
      modes: [
        {
          key: 'capture',
          label: 'Capture',
          caption: 'Windows and UI elements are detected as you hover — the right region, first try.',
        },
        {
          key: 'long',
          label: 'Scrolling',
          caption: 'Long pages and long chats — stitched into one image, automatically or by hand.',
        },
        {
          key: 'pin',
          label: 'Pin',
          caption: 'Pin captures on top of your screen — scale, fade, compare side by side.',
        },
        {
          key: 'record',
          label: 'Record',
          caption: '720p to 4K at high frame rate, cursor and click highlights, export MP4 or GIF.',
        },
        { key: 'ai', label: 'AI', caption: 'AI cutout, eraser and offline OCR — all processed on your device.' },
      ],
      h1: [
        [{ text: 'Screenshots, screen recording, ' }, { text: 'AI magic', hl: true }],
        [{ text: 'all from a single shortcut' }],
      ],
      sub: 'Shotera is a desktop capture tool built for people who screenshot all day: annotate, scroll-capture long pages, record to GIF, cut out subjects with AI, run offline OCR, translate images, and pin references — without leaving your flow.',
      primary: 'Download free',
      secondary: 'See how it works',
      metaStrong: 'Windows 10/11+',
      metaRest: 'Installer / portable / MSI',
      store: 'Also available on the Microsoft Store',
      shellMonitor: 'Aluminium monitor shell',
      shellLaptop: 'Laptop shell',
    },
    download: {
      more: 'More download options',
      menu: 'Download options',
      edition: 'Shotera Standard',
      setup: 'Installer (.exe)',
      portable: 'Portable (.7z)',
      msi: 'MSI installer',
      store: 'Microsoft Store',
      setupTip: 'Double-click to install. What most people want.',
      portableTip: 'Unzip and run - it can live on a USB stick.',
      msiTip: 'Usually run by company admins, to roll the app out across many PCs.',
      storeTip: 'The build listed on the Microsoft Store, for people who prefer getting apps from there.',
      recommend: 'Recommended',
      allVersions: 'All versions on GitHub',
    },
    trust: [
      { value: '15', label: 'UI languages' },
      { value: '4.9 / 5', label: 'user rating' },
      { value: '100%', label: 'on-device AI' },
      { value: '<0.1s', label: 'to summon' },
    ],
    modesSection: {
      eyebrow: 'Three everyday flows',
      title: 'One shortcut for every capture task',
      lead: 'Capture, pin, record and GIF — the three jobs you reach for all day, behind one shortcut.',
      cards: [
        {
          icon: 'capture',
          title: 'Capture',
          one: 'Region, window or full screen in one keystroke — windows and UI elements are detected for you.',
          steps: ['Press the shortcut', 'Hover to snap the bounds', 'Annotate, copy or save'],
          bestFor: 'everyday sharing and docs',
        },
        {
          icon: 'pin',
          title: 'Pin to Desktop',
          one: 'Float a capture on top of everything else for as long as you need it.',
          steps: ['Pin right after capturing', 'Scale, fade, compare', 'Work without window juggling'],
          bestFor: 'reference and side-by-side work',
        },
        {
          icon: 'record',
          title: 'Recording & GIF',
          one: '720p through 4K at 30 or 60 fps, with no recording time limit.',
          steps: ['Pick a region and record', 'Show cursor and clicks', 'Export MP4 or GIF'],
          bestFor: 'tutorials and bug reports',
        },
      ],
    },
    features: [
      {
        eyebrow: 'Capture',
        title: 'Grab it in one press, frame it exactly',
        lead: 'Trigger it with a shortcut, then capture, annotate and copy in one uninterrupted motion.',
        rows: [
          'Hover, and Shotera locks onto the window or element underneath',
          'Arrows, boxes, text, step numbers, emoji, magnifier — annotate the moment you capture',
          'Two ways to finish: copy straight to the clipboard, or annotate right away (Elegant / Live annotate)',
        ],
        items: [
          { title: 'Emoji stickers', note: 'say more in one click' },
          { title: 'Magnifier', note: 'zoom into the detail' },
          { title: 'Step numbers', note: 'guide the reading order' },
          { title: 'Mosaic & highlighter', note: 'privacy and emphasis' },
        ],
        image: 'capture',
      },
      {
        eyebrow: 'Scrolling capture',
        title: 'A page taller than the screen, in one shot',
        lead: 'Long pages, long chats and whole documents — captured top to bottom as a single image.',
        rows: [
          'Auto-scroll, or scroll it yourself — every frame is captured as you go',
          'Adjacent frames are matched and blended, so the finished long shot has no visible seams',
        ],
        items: [
          { title: 'Live stitching preview', note: 'stop the moment it is whole' },
          { title: 'No visible seams', note: 'reads as one continuous page' },
          { title: 'Long chats', note: 'the whole thread in one image' },
          { title: 'Copy or save', note: 'ready for docs and issues' },
        ],
        image: 'longshot',
        reversed: true,
      },
      {
        eyebrow: 'Pin',
        title: 'Pin references on top, work beside them',
        lead: 'Paste a capture on top of everything else — compare, reference and keep working without switching windows.',
        rows: [
          'Pin a capture to the top of the screen without breaking your flow',
          'Resize from any edge or corner with the aspect ratio locked; double-click toggles the original size and the thumbnail',
        ],
        items: [
          { title: 'Several pins at once', note: 'compare side by side' },
          { title: 'Thumbnail mode', note: 'double-click to shrink it' },
          { title: 'Click-through', note: 'never blocks the window below' },
          { title: 'Restore the last pin', note: 'one key brings it back' },
        ],
        image: 'pin',
      },
      {
        eyebrow: 'Recording',
        title: 'Record in 4K, for as long as it takes',
        lead: 'Turn “hard to explain” into a clip anyone can follow.',
        rows: [
          '720p / 1080p / 2K / 4K at 30 or 60 fps, no recording time limit',
          'Drop a lightweight GIF into docs, chats or issues — no player needed',
        ],
        items: [
          { title: 'Show cursor and clicks', note: 'every step stays obvious' },
          { title: 'MP4 or GIF', note: 'quality or file size, your call' },
          { title: '4K ready', note: 'made for HiDPI displays' },
          { title: 'History', note: 'find your last take' },
        ],
        image: 'recording',
        reversed: true,
      },
      {
        eyebrow: 'AI features',
        title: 'AI that finishes the screenshot for you',
        lead: 'AI cutout, eraser and OCR all run locally: smart, without giving up privacy.',
        rows: [
          'People, products, logos: a transparent PNG in seconds — no upload, no waiting on a server',
          'OCR runs on your device and hands back editable, copyable text in one click',
        ],
        items: [
          { title: 'Cut out a subject', note: 'transparent background in a click' },
          { title: 'Erase what shouldn’t be there', note: 'AI rebuilds what was behind it' },
          { title: 'Offline OCR', note: 'mixed languages, code, tables' },
          { title: 'Image translation', note: 'read foreign screenshots instantly' },
        ],
        image: 'ai',
      },
    ],
    cta: {
      eyebrow: 'Free to start',
      title: 'Make every screenshot faster and smarter',
      lead: 'Free download, a few seconds to install. Hand the daily “just grab a screenshot” to a tool that gets it.',
      primary: 'Download free',
      secondary: 'More versions',
      note: 'Standard and Lite editions; Windows 10/11+. Installer / portable / MSI available.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Got a question or an idea? Tell us.',
      lead: 'Hit a problem, want a feature, or just want to say hi — pick whichever channel suits you.',
      replyNote: 'Email and GitHub are read every day; we usually reply within 24 business hours.',
      faqNote: 'Stuck on something? Most answers are already in the FAQ.',
      faqLink: 'Read the FAQ',
      soon: 'Coming soon',
      mail: {
        subject: 'Shotera feedback — ',
        body: [
          'Hi,',
          '',
          '(Describe the problem you ran into, or the feature you have in mind.)',
          '',
          '',
          'If you can, these details help us get there faster:',
          '',
          '\u00b7 Shotera edition (Lite / Standard):',
          '\u00b7 Windows version:',
          '\u00b7 Steps to reproduce:',
          '',
          'Thanks!',
        ].join('\n'),
        copied: 'Email copied — opening your mail app…',
      },
      groups: [
        {
          key: 'talk',
          title: 'Talk to us',
          note: 'We read every piece of feedback carefully.',
          channels: [
            {
              key: 'email',
              name: 'Email',
              handle: 'mosuzo.studio@gmail.com',
              note: 'Support, licensing, partnerships.',
              icon: 'tabler:mail',
              href: 'mailto:mosuzo.studio@gmail.com',
              tint: '#0a7cff',
            },
            {
              key: 'github',
              name: 'GitHub',
              handle: 'mosuzo-studio/Shotera',
              note: 'Bug reports, feature requests, older releases.',
              icon: 'tabler:brand-github',
              href: 'https://github.com/mosuzo-studio/Shotera',
              tint: '#24292f',
            },
            {
              key: 'discord',
              name: 'Discord',
              note: 'Chat with other Shotera users.',
              icon: 'tabler:brand-discord',
              tint: '#5865f2',
            },
          ],
        },
        {
          key: 'follow',
          title: 'Follow along',
          note: 'Release notes, tips and behind-the-scenes.',
          channels: [
            {
              key: 'x',
              name: 'X',
              note: 'Release notes and quick tips.',
              icon: 'tabler:brand-x',
              tint: '#111111',
            },
            {
              key: 'bilibili',
              name: 'Bilibili',
              note: 'Tutorials and feature walkthroughs.',
              icon: 'tabler:brand-bilibili',
              tint: '#00a1d6',
            },
            {
              key: 'telegram',
              name: 'Telegram',
              note: 'Release announcements.',
              icon: 'tabler:brand-telegram',
              tint: '#229ed9',
            },
          ],
        },
      ],
    },
    footer: {
      blurb: 'Faster, smarter screenshots and screen recording — pinned, annotated and understood in one shortcut.',
      cols: [
        {
          title: 'Product',
          links: [
            { text: 'Features', path: '/', hash: 'features' },
            { text: 'Versions', path: '/versions' },
          ],
        },
        {
          title: 'Support',
          links: [
            { text: 'FAQ', path: '/faq' },
            { text: 'Changelog', path: '/changelog' },
          ],
        },
        {
          title: 'About',
          links: [
            { text: 'About us', path: '/about' },
            { text: 'Contact us', path: '/contact' },
          ],
        },
      ],
      legal: [
        { text: 'Terms', path: '/terms' },
        { text: 'Privacy', path: '/privacy' },
      ],
      rights: '© 2026 Mosuzo Studio',
      system: 'Windows 10/11+ · 15 UI languages',
    },
  },

  'zh-cn': {
    home: 'Shotera — 更快、更聪明的截图与录屏工具',
    nav: {
      features: '功能',
      versions: '版本对比',
      changelog: '更新日志',
      about: '关于',
      faq: '常见问题',
      menu: '菜单',
      language: '语言',
      cta: '免费下载',
    },
    hero: {
      badge: '新增',
      announce: 'Lite 版：安装包仅约 17 MB',
      modes: [
        { key: 'capture', label: '截图', caption: '鼠标划过即自动识别窗口与界面元素，秒锁要截的内容。' },
        { key: 'long', label: '长截图', caption: '长网页、长聊天记录——自动滚动拼接，一张装下。' },
        { key: 'pin', label: '贴图', caption: '截图钉在屏幕最上层，缩放、半透明、多图并排对照。' },
        { key: 'record', label: '录屏', caption: '720p–4K 高帧率录制，光标点击高亮，一键导出 MP4 或 GIF。' },
        { key: 'ai', label: 'AI 能力', caption: 'AI 抠图、擦图、离线 OCR —— 全程本地处理。' },
      ],
      h1: [[{ text: '截图、录屏、' }, { text: 'AI 能力', hl: true }], [{ text: '一个快捷键全搞定' }]],
      sub: '为效率而生的桌面截图与录屏工具：截图标注、长截图、录屏导出 GIF、AI 抠图、AI 擦图、离线 OCR、图片翻译、贴图——不用离开手头的事。',
      primary: '免费下载',
      secondary: '看看怎么用',
      metaStrong: 'Windows 10/11+',
      metaRest: '安装版 / 便携版 / MSI',
      store: '也可从 Microsoft Store 获取',
      shellMonitor: '铝壳显示器',
      shellLaptop: '笔记本外壳',
    },
    download: {
      more: '更多下载选项',
      menu: '下载选项',
      edition: 'Shotera 标准版',
      setup: '安装版（.exe）',
      portable: '免安装版（.7z）',
      msi: 'MSI 安装包',
      store: 'Microsoft Store 版',
      setupTip: '双击进行安装，适合大多数人的选择。',
      portableTip: '解压就能用，可以放进 U 盘随身带。',
      msiTip: '常常为企业管理员操作，给多台电脑批量部署时用。',
      storeTip: '在微软商店上架的版本，方便习惯的用户下载。',
      recommend: '推荐',
      allVersions: '全部版本（GitHub）',
    },
    trust: [
      { value: '15 种', label: '界面语言' },
      { value: '4.9 / 5', label: '好评率' },
      { value: '100%', label: '离线 AI 处理' },
      { value: '<0.1s', label: '快捷键唤起' },
    ],
    modesSection: {
      eyebrow: '日常三件事',
      title: '一个快捷键，搞定所有截图任务',
      lead: '截图、贴图、录屏与 GIF——每天用得最多的三件事，一个快捷键全都在。',
      cards: [
        {
          icon: 'capture',
          title: '截图',
          one: '一键区域、窗口、全屏截图，自动检测窗口与界面元素。',
          steps: ['按下快捷键唤起', '鼠标划过自动识别边界', '标注、复制或保存'],
          bestFor: '日常沟通与文档配图',
        },
        {
          icon: 'pin',
          title: '贴图',
          one: '把截图钉在屏幕最上层，随时对照参考，多图并排。',
          steps: ['截图后一键钉屏', '缩放、半透明对照', '边看边做，不切窗口'],
          bestFor: '对照参考与多图并排',
        },
        {
          icon: 'record',
          title: '录屏 & GIF',
          one: '720p 到 4K 超清录制、30 / 60 帧，且无录制时长限制。',
          steps: ['选区域开始录制', '光标与点击高亮', '导出 MP4 或 GIF'],
          bestFor: '教程演示与 Bug 复现',
        },
      ],
    },
    features: [
      {
        eyebrow: '截图',
        title: '一按就到手，边界刚刚好',
        lead: '快捷键随手唤起，截图、标注、复制一气呵成，把打断思路的操作降到最低。',
        rows: [
          '鼠标划过即吸附窗口与元素边界，无需手动框选',
          '箭头 / 方框 / 序号 / 文字 / 荧光笔 / 马赛克，截完即标',
          '两种完成模式：优雅简洁（截完即复制）或所见即所得（立即打开标注工具栏）',
        ],
        items: [
          { title: 'Emoji 贴纸', note: '让截图更生动' },
          { title: '放大镜', note: '局部放大关键细节' },
          { title: '序号标注', note: '引导阅读顺序' },
          { title: '马赛克与荧光笔', note: '隐私与重点两不误' },
        ],
        image: 'capture',
      },
      {
        eyebrow: '长截图',
        title: '页面再长，也一张装下',
        lead: '长网页、长聊天记录、整份文档——从上到下一张截全。',
        rows: ['自动滚动，或自己手动滚，每一帧都被捕捉', '相邻帧自动匹配与融合，成品长图看不出接缝'],
        items: [
          { title: '拼接实时可见', note: '凑齐整页就停手' },
          { title: '拼接看不出接缝', note: '像一页连续的长图' },
          { title: '长聊天记录', note: '整段对话一张装下' },
          { title: '复制或存盘', note: '直接进文档与 Issue' },
        ],
        image: 'longshot',
        reversed: true,
      },
      {
        eyebrow: '贴图',
        title: '参考贴在屏幕最上层，边看边做',
        lead: '把截图贴到屏幕最上层，随时对照参考，多图并排也不乱。',
        rows: [
          '截图后一键贴到屏幕最上层，不打断手上的操作',
          '拖拽边缘或四角缩放并锁定宽高比；双击在原尺寸与缩略图之间切换',
        ],
        items: [
          { title: '多图并排', note: '几张参考同时对照' },
          { title: '缩略图模式', note: '双击收起，不挡视线' },
          { title: '点击穿透', note: '不挡住下面的窗口' },
          { title: '一键找回', note: '恢复上一次关闭的贴图' },
        ],
        image: 'pin',
      },
      {
        eyebrow: '录屏',
        title: '4K 录屏，想录多久录多久',
        lead: '把「说不清」的操作，变成一段一看就懂的演示。',
        rows: ['720p / 1080p / 2K / 4K，30 或 60 帧，无录制时长限制', '压成体积小巧的 GIF，贴进文档与 Issue 即看'],
        items: [
          { title: '记录光标与点击', note: '每步演示都清晰' },
          { title: 'MP4 还是 GIF', note: '按需兼顾画质与体积' },
          { title: '4K 超清', note: '高分辨率屏也够用' },
          { title: '历史记录', note: '随时翻回上一次录制' },
        ],
        image: 'recording',
        reversed: true,
      },
      {
        eyebrow: 'AI 能力',
        title: 'AI 帮你把截图收尾',
        lead: 'AI 抠图、擦图、OCR 全程本地运行，隐私与智能兼得。',
        rows: ['人像、商品、Logo：几秒钟拿到透明底，不上传、不等待', '离线 OCR 把截图里的字变成可复制的文本'],
        items: [
          { title: '一键抠出主体', note: '点击即得透明背景' },
          { title: '擦掉不该有的东西', note: 'AI 自动补全背景' },
          { title: '离线 OCR', note: '中英混排、代码、表格' },
          { title: '图片翻译', note: '外文截图一看就懂' },
        ],
        image: 'ai',
      },
    ],
    cta: {
      eyebrow: '免费开始',
      title: '现在就让截图变得又快又聪明',
      lead: '免费下载，几秒安装，立刻上手。把每天都要做的「截个图」，交给更懂你的工具。',
      primary: '免费下载',
      secondary: '更多版本',
      note: '提供标准版与 Lite 版；支持 Windows 10/11 及以上。安装版 / 便携版 / MSI 可选。',
    },
    contact: {
      eyebrow: '联系我们',
      title: '有问题或建议？告诉我们。',
      lead: '遇到问题、想要新功能，或者只是想聊聊——用你觉得顺手的方式找我们。',
      replyNote: '邮箱和 GitHub 每天都看，通常 24 个工作小时内回复。',
      faqNote: '卡在某个问题上？大部分答案已经在常见问题里了。',
      faqLink: '看看常见问题',
      soon: '即将开放',
      mail: {
        subject: 'Shotera 反馈 — ',
        body: [
          '你好，',
          '',
          '（在这里描述你遇到的问题，或者你想要的功能）',
          '',
          '',
          '如果方便，补充下面这些信息会帮我们更快定位：',
          '',
          '· Shotera 版本（Lite 版 / 标准版）：',
          '· Windows 版本：',
          '· 复现步骤：',
          '',
          '谢谢！',
        ].join('\n'),
        copied: '邮箱已复制，正在打开邮件客户端…',
      },
      groups: [
        {
          key: 'talk',
          title: '直接找我们',
          note: '您的每一条反馈我们都会认真读。',
          channels: [
            {
              key: 'email',
              name: '邮箱',
              handle: 'mosuzo.studio@gmail.com',
              note: '使用问题、授权、商务合作。',
              icon: 'tabler:mail',
              href: 'mailto:mosuzo.studio@gmail.com',
              tint: '#0a7cff',
            },
            {
              key: 'github',
              name: 'GitHub',
              handle: 'mosuzo-studio/Shotera',
              note: '提交问题、功能建议、历史版本。',
              icon: 'tabler:brand-github',
              href: 'https://github.com/mosuzo-studio/Shotera',
              tint: '#24292f',
            },
            {
              key: 'wechat',
              name: '微信群',
              note: '和其他用户一起交流。',
              icon: 'tabler:brand-wechat',
              tint: '#07c160',
            },
          ],
        },
        {
          key: 'follow',
          title: '关注我们',
          note: '更新日志、使用技巧和幕后花絮。',
          channels: [
            {
              key: 'xiaohongshu',
              name: '小红书',
              note: '使用技巧与更新速览。',
              icon: 'tabler:book-2',
              tint: '#ff2442',
            },
            {
              key: 'weibo',
              name: '微博',
              note: '版本发布与日常动态。',
              icon: 'tabler:brand-weibo',
              tint: '#e6162d',
            },
            {
              key: 'x',
              name: 'X',
              note: '版本发布与使用技巧。',
              icon: 'tabler:brand-x',
              tint: '#111111',
            },
          ],
        },
      ],
    },
    footer: {
      blurb: '更快、更聪明的截图与录屏工具——截图、贴图、识别，一个快捷键全搞定。',
      cols: [
        {
          title: '产品',
          links: [
            { text: '功能', path: '/', hash: 'features' },
            { text: '版本对比', path: '/versions' },
          ],
        },
        {
          title: '支持',
          links: [
            { text: '常见问题', path: '/faq' },
            { text: '更新日志', path: '/changelog' },
          ],
        },
        {
          title: '关于',
          links: [
            { text: '关于我们', path: '/about' },
            { text: '联系我们', path: '/contact' },
          ],
        },
      ],
      legal: [
        { text: '服务条款', path: '/terms' },
        { text: '隐私政策', path: '/privacy' },
      ],
      rights: '© 2026 Mosuzo Studio',
      system: 'Windows 10/11+ · 15 种界面语言',
    },
  },
};
