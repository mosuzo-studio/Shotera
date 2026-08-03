# 页面图片替换参考表

| # | 文件名 | 显示页面 | 所属组件 | 渲染宽度 | 推荐尺寸 | 格式 | 说明 |
|---|--------|----------|----------|----------|----------|------|------|
| 1 | `hero-image.png` | 首页 Hero | Hero | 1024px | **1024×576** (16:9) | PNG/WebP | 封面大图，第一眼印象 |
| 2 | `capture-demo.png` | 首页 截图区块 | Content | 500px | **800×500** | PNG/WebP | 截图功能展示 |
| 3 | `recording-demo.png` | 首页 录屏区块 | Content | 500px | **800×500** | PNG/WebP | 录屏功能展示 |
| 4 | `ai-demo.png` | 首页 AI 区块 | Content | 500px | **800×500** | PNG/WebP | AI 功能展示 |
| 5 | `workflow.png` | 首页 Steps / 价格页 Steps | Steps | 432px | **864×576** (3:2) | PNG/WebP | 使用流程示意图（两页复用） |
| 6 | `about-hero.png` | 关于页 Hero | Hero | 1024px | **1024×576** (16:9) | PNG/WebP | 关于页封面（暂用 Unsplash） |
| 7 | `about-features.png` | 关于页 功能一览 | Features3 | 768px | **1024×768** (4:3) | PNG/WebP | 功能一览配图（暂用 Unsplash） |
| 8 | `default.png` | 全站 SEO / OG 分享图 | `config.yaml` | 1200px | **1200×628** | PNG | 社交媒体分享卡片图 |

## 替换状态

| 文件 | 状态 |
|------|------|
| `hero-image.png` | ✅ 本地 |
| `capture-demo.png` | ✅ 本地 |
| `recording-demo.png` | ✅ 本地 |
| `ai-demo.png` | ✅ 本地 |
| `workflow.png` | ✅ 本地 |
| `about-hero.png` | ❌ Unsplash 远程 |
| `about-features.png` | ❌ Unsplash 远程 |
| `default.png` | ❌ 旧图未换 |

## 替换方式

将新图片放入当前目录，保持文件名一致即可，无需修改任何代码。

## 建议优先级

| 优先级 | 文件 | 原因 |
|--------|------|------|
| 🔴 最高 | `hero-image.png` | 首页首屏第一眼，最大面积 |
| 🟠 高 | `capture-demo.png` | 首页截图区块，用户最关心 |
| 🟡 高 | `about-hero.png` | 关于页首屏 |
| 🟢 中 | `recording-demo.png`、`ai-demo.png` | 首页后续滚动区块 |
| 🔵 中 | `about-features.png` | 关于页中部 |
| ⚪ 一般 | `workflow.png` | 较小尺寸展示 |
| 🟣 独立 | `default.png` | 仅社交分享，不显示在页面中 |
