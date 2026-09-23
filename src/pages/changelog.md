---
title: 'Changelog'
layout: '~/layouts/MarkdownLayout.astro'
---

# Shotera Release Notes - All Versions (English)

**📫 Feedback**

Settings → About → Feedback

**🔗 Version index**

<ul class="version-index">
  <li><a href="#shotera-v770">v7.7.0</a></li>
  <li><a href="#shotera-v760">v7.6.0</a></li>
  <li><a href="#shotera-v751">v7.5.1</a></li>
  <li><a href="#shotera-v750">v7.5.0</a></li>
  <li><a href="#shotera-v742">v7.4.2</a></li>
  <li><a href="#shotera-v741">v7.4.1</a></li>
  <li><a href="#shotera-v740">v7.4.0</a></li>
  <li><a href="#shotera-v731">v7.3.1</a></li>
  <li><a href="#shotera-v730">v7.3.0</a></li>
  <li><a href="#shotera-v722">v7.2.2</a></li>
  <li><a href="#shotera-v721">v7.2.1</a></li>
  <li><a href="#shotera-v720">v7.2.0</a></li>
  <li><a href="#shotera-v710">v7.1.0</a></li>
  <li><a href="#shotera-v700">v7.0.0</a></li>
</ul>

---

## Shotera v7.7.0

**Released:** 2026-09-24

Lite edition, long screenshot, resizable pins, and lighter builds.

**🆚 Lite edition vs. Standard edition:** see the [version comparison](/versions) for feature differences.

**✨ Features**

- Added Lite edition: 17MB installer with core screenshot and annotation features. Upgrade banner in Settings links to the full version on the website.
- Updated the [official website](https://shotera.mosuzo.com/) with refreshed content and styling.
- Added long screenshot (preview, beta testing): automatic and manual scrolling modes with real-time preview window. Intelligent stitching algorithm detects top boundaries and handles mixed layouts. Teaching prompts guide first-time use. Join the beta group to test.
- Pin window enhancements: double-click toggles between original size and thumbnail+close mode. Drag edges or corners to resize while locking aspect ratio. Native context menu extends beyond window bounds. Toolbar visibility persists across sessions ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- AI cutout model switched to built-in u2netp for instant performance. rmbg-1.4 now downloads on demand with first-use guidance.
- Added print command to editor: right-click menu and File menu open the system print dialog ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- Editor context menu can open the containing folder with the current file highlighted ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Improvements**

- Reduced build size by 20%: installer compression and compiler settings optimized. FastBuild profile added for faster iteration.
- Baseline memory usage reduced.
- Editor title bar shows the current image filename dynamically.
- Update success notification simplified to logo + text + button without large preview.
- Onboarding flow refined: 8-page guide moved to bottom-right invite card. Feature intro window stops after closing 3 times. AI cutout shows guidance on first use.
- AI image translation warns when output matches input and points to language settings. Warning can be disabled in Settings → AI.
- Default filename for screenshots, long screenshots, and editor output unified to `Shotera_YYYYMMDD_HHMMSS`.
- Long screenshot notification thumbnail crops the top viewport instead of squashing the full image.

**🐞 Bug Fixes**

- Fixed annotation window initial positioning on dual-monitor setups.
- Fixed pin window drag-resize ratio calculation errors and frame jitter.
- Fixed double-click behavior not applying after selection and failing to return to original size.
- Fixed long screenshot stitch-failure dialog blocked by click-through rules.
- Fixed phantom scrollbars and 0%/1% zoom display after loading images in editor.
- Fixed editor title bar showing duplicate filenames.

**🙏 Acknowledgements**

Thanks to the community members who reported issues and suggested features that shaped this release. Long screenshot and pin window enhancements were driven by user feedback.

---

## Shotera v7.6.0

**Released:** 2026-09-21

A What's New window, QR code scanning, GIF playback, and more image formats.

**✨ Features**

- Added a What's New window on startup: it compares the two capture completion modes, shows where QR code scanning lives, and invites you to rate Shotera. Tick "Don't show this again", or click "Got it" three times, to stop it.
- Added QR code scanning: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF, and UPCA, plus GS1 Digital Link. The result panel is resizable and draggable, with numbered history.
- Opens PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF, and TIFF (tif/tiff). SVG, ICO, AVIF, and TIFF are new in this release. Open from the File menu or drag images in.
- Added GIF animation playback. Status bar and Image Info panel show frame count and total duration.
- Added Image Info panel: dimensions, format, DPI, color mode, bit depth, EXIF shooting data, and a privacy check for author and GPS tags. Open via File menu, canvas right-click, status bar, or Ctrl+I.
- Status bar shows zoom level, image dimensions, file size, and file path. Path display has three modes: Hidden, Breadcrumb, and Full.
- Editor title bar shows the current image name. The canvas right-click menu opens the containing folder with the current file highlighted ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Added a confirmation dialog before overwriting a file on save. Check "Don't ask again" to skip it later.
- Pin windows: hide the top-right toolbar from the right-click menu; the setting is remembered ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Improvements**

- Top mode bar is shown again, offering Screenshot and QR code entries.
- Large-image rendering in the editor has been reworked — loading and zooming are now smooth and fluid.
- Ctrl+wheel zoom now anchors at the cursor instead of the canvas center.
- Added zoom shortcuts: Ctrl+=, Ctrl+-, Ctrl+0.
- Zoom and pan no longer push the image completely out of view.
- Editor images get a soft shadow, and light mode uses a pure white canvas.
- Color picker magnifier redesigned: square double-stroke frame, tighter panel border, square swatch, and a refined crosshair color.
- Help menu opens the website directly.
- AI image translation warns you when the output matches the original (usually the target language equals the source) and points you to the language setting. Turn the hint off in Settings → AI.
- Rating prompt timing reworked: it now appears after your first capture in each version, then at most once a month.

**🐞 Bug Fixes**

- Fixed phantom scrollbars and a wrong 0% or 1% zoom reading after loading an image.
- Fixed the editor "File" dropdown being clipped at the window edge.
- Fixed screenshots being triggered unexpectedly when the app starts with Windows.
- Fixed the capture completion mode in Settings not updating when it was changed from the What's New window.

**🙏 Acknowledgements**

Thanks to @korenevskiy and @NewJon27 for feature suggestions that shaped this release.

QR code scanning was added in response to feedback from Horihons.

---

## Shotera v7.5.1

**Released:** 2026-09-14

Elegant capture mode, instant pin, copy shortcuts.

**✨ Features**

- Added "Elegant & Simple" capture mode: select region, done. Image copied with notification preview. No overlay. Dark mode supported ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Added F3 instant pin shortcut during or after capture. Customizable in Settings → Hotkeys ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Added Ctrl+C to copy screenshot and close overlay in one step.
- Added double-click to confirm capture immediately.
- Added right-click to cancel capture.
- Added "Extract text automatically after capture" toggle in Settings → Capture.
- Editor window title bar follows system theme.

**🚀 Improvements**

- Editor "Save As" uses dynamic timestamps for filenames.
- Ctrl+Shift+S shortcut for "Save As".
- Tray menu and editor window title now localized.

**🐞 Bug Fixes**

- Fixed OCR failing under non-English installation paths.
- Fixed pinned images reduced resolution on high-DPI displays.
- Fixed F3 creating duplicate pins from selection and clipboard.
- Fixed Microsoft Store version not showing notification in "Elegant & Simple" mode.
- Fixed Microsoft Store version clicking notification triggering extra screenshot.
- Fixed update button red dot persisting after upgrade.

**🙏 Acknowledgements**

Thanks to @Const-me, @LightQuanta, and @wherewhere for feature suggestions that shaped this release.

---

## Shotera v7.5.0

**Released:** 2026-09-12

Full image editor, capture modes, extended CPU support.

**✨ Features**

- Added full image editor in separate window from tray "Edit Image…". Supports open/save/save-as, drag-and-drop, Ctrl+scroll zoom 10%-400%, annotation tools, OCR, AI cutout, AI eraser.
- Added "Plain Arrow" tapered arrow style to arrow sub-toolbar.
- Added "Capture complete mode" setting: choose "Elegant & Simple" to copy selection with notification preview (clicking opens editor), or keep "What You See Is What You Get" default.
- Added "Extract text automatically after capture" and "Hide AI entries" settings.
- Translation target language follows interface language.

**🚀 Improvements**

- Extended CPU support to Intel 3rd gen (Ivy Bridge) and earlier. AI features unavailable on older CPUs with explanatory dialog.
- Self-drawn guide window in bottom-right when Windows notifications disabled.
- Eraser now erases arrows/lines and shows eraser cursor.
- Primary toolbar embedded in menu bar, always visible. Secondary bar doesn't nudge image.
- Copying in editor no longer closes window or clears selection. Red ✕ clears image.
- Capture page in Settings flags new features with red dot.

**🐞 Bug Fixes**

- Fixed app crash on launch for CPUs without AVX2 support.
- Fixed OCR failing with Chinese/non-English installation paths.
- Fixed images with non-ASCII path characters failing to load via drag.
- Fixed editor window sometimes not loading screenshot from notification.
- Fixed AI cutout/eraser leaving shifted images and uncleared strips.
- Fixed editor status bar not updating after image load.
- Fixed text extraction highlights offset in editor.
- Fixed number/emoji stamps drifting downward when resized.

**🗑️ Removed**

- Edit and View menus from editor menu bar.

---

## Shotera v7.4.2

**Released:** 2026-09-07

In-app feedback, 22-language installer, performance improvements.

**✨ Features**

- Added in-app feedback form under Settings → About for ratings, suggestions, surveys.
- NSIS installer language support expanded from 2 to 22 languages.

**🚀 Improvements**

- Improved annotation performance for smoother drawing.
- Detection granularity defaults to "Detect UI Elements".
- Selection anchors only appear when selection is large enough.
- Feedback entry in About uses clickable icon.
- Refined wording for cleaner tone.
- Improved interaction flow opening Update page from notification.

**🐞 Bug Fixes**

- Fixed annotation overlays appearing on wrong monitor.
- Fixed element detection resetting highlight layers when moving across elements.
- Fixed autostart breaking after upgrading Microsoft Store version.

**🗑️ Removed**

- "Review onboarding guide" entry and mode hint text.

---

## Shotera v7.4.1

**Released:** 2026-09-04

Model comparison, consistent naming, inline help.

**✨ Features**

- Added model comparison table: Help icon next to "AI Cutout Model" opens table comparing all four models by size, speed, quality, use case.
- Consistent model naming using "Model · Trait" format, sorted smallest to largest.
- Inline help for image translation: Description moved to hover tooltip on help icon.

---

## Shotera v7.4.0

**Released:** 2026-09-03

Update experience redesign, Microsoft Store support, AI fixes.

**✨ Features**

- Redesigned update experience with optimized update logic and settings UI. Automatic idle installation, four update modes, smarter reminder frequency.
- Improved Microsoft Store version compatibility and fixed autostart on Windows startup.

**🐞 Bug Fixes**

- Fixed AI cutout model re-downloading on every check.
- Added China mirror acceleration (shotera-ai.pages.dev) with automatic fallback to Hugging Face.

---

## Shotera v7.3.1

**Released:** 2026-08-29

Dark mode support.

**✨ Features**

- Added dark mode support: choose Light, Dark, or Follow System in Settings. All windows update instantly with no restart.

---

## Shotera v7.3.0

**Released:** 2026-08-23

Automatic OCR, partial copy, linked highlighting.

**✨ Features**

- Automatic OCR: text extracted as soon as region selected. Selection stays editable with automatic re-extraction.
- Partial copy: drag across recognized text and Ctrl+C to copy only that part. Appears in Windows clipboard history.
- Linked highlighting: selecting text on original image highlights matching characters in result panel, character for character.
- Tool-aware overlay: text layer stays interactive with no annotation tool active, hides when tool picked.
- Localization: Traditional Chinese, Japanese, Korean, Portuguese (Brazil), Spanish, German, French, Italian, Russian, Arabic, Dutch, Polish, Swedish now cover image translation settings.

**🐞 Bug Fixes**

- Fixed "Extract Text" opening result panel directly after automatic OCR.
- Fixed canceling annotation tool not locking drawn shapes.
- Fixed "Skip" button invisible in first-run guide.

---

## Shotera v7.2.2

**Released:** 2026-08-20

Image translation providers, test key, high-DPI fixes.

**✨ Features**

- Each service now a collapsible card: Baidu Image Translation (V2.0 High-Precision / V1 Classic) and Youdao Translate (99 languages).
- Baidu works out of box with built-in quota. Custom APP ID/Secret raises limit.
- Language memory stored per provider.
- Added "Test Key" to verify credential with one real request.

**🐞 Bug Fixes**

- Fixed provider API documentation links opening correctly.
- Fixed dragging selection using high-frequency pointer input path.
- Fixed high-DPI selection coordinates converted through stage coordinate system.
- Fixed mixed-DPI multi-monitor frozen capture overlay aligning to native virtual-desktop coordinates.

---

## Shotera v7.2.1

**Released:** 2026-08-18

Capture to clipboard, movable toolbars.

**✨ Features**

- Added capture straight to clipboard: Press Alt+C or choose "Capture & Copy" from tray menu to skip annotation. Screenshot lands in clipboard.
- Restored six-dot drag handle on primary and secondary annotation toolbars. Visibility configurable in Settings.

---

## Shotera v7.2.0

**Released:** 2026-08-02

Faster capture startup, custom capture, 15 languages.

**✨ Features**

- Much faster capture startup: Capture/annotation path reuses and prewarms annotation window, avoids image-decoding bottleneck. Average shortcut-to-selection time reduced by 68.2% in dual-monitor benchmarks.
- Added Custom Capture workflow: Open with default Alt+F1 shortcut or tray menu. Define exact X/Y position and width/height, lock aspect ratio, swap orientation, add delay. Save reusable size presets with automatic last-used value restoration. Multi-monitor coordinates (including negative positions) and sizes up to 40000 pixels supported.
- Added 15 interface languages: Traditional Chinese, Japanese, Brazilian Portuguese, Spanish, German, French, Italian, Korean, Russian, Arabic, Dutch, Polish, Swedish. Language changes apply immediately across open windows and tray without restart. Arabic includes full right-to-left layout.

**🚀 Improvements**

- Cleaner capture exit with old selection flashes and full-window afterimage removed.
- Faster nested-control recognition with fewer jumps.
- Taskbar controls and File Explorer navigation icons/text more precisely targetable.
- Chromium and Electron accessibility trees warmed and retried when needed.
- Clipboard image transfer uses more direct RGBA path.
- Alt+T for Pin and Ctrl+S for Save work while region selected.
- AI model assets restored. Portable packages include required model files.

---

## Shotera v7.1.0

**Released:** 2026-07-29

Window detection, annotation tools, enhanced pins.

**✨ Features**

- Improved window and control detection with easier nested target selection.
- Refined capture magnifier with clearer borders, larger resize handles, improved crosshair.
- Added support for shapes, arrows, text, stickers, markers, local magnifier.
- Improved editing with smoother resize, rotation, styling, undo/redo.
- Updated toolbar layout.
- Enhanced always-on-top pins with move, resize, rotate, flip, opacity, click-through support.
- Better clipboard compatibility.
- Restored AI tools entry and toolbar buttons.
- Restored feature guide entries.
- Improved Presentation Mode.
- Improved shortcut management, update channels, settings persistence.
- Bilingual license in MSI installer.
- Screenshots remain fully local. No account required.

---

## Shotera v7.0.0

**Released:** 2026-07-23

Capture what matters. Explain it clearly. Keep it where you can see it.

**✨ Features**

- Fast screenshot workflow with F1 hotkey, window/control detection, on-screen magnifier.
- Annotation tools: rectangles, ellipses, lines, arrows, freehand pen, highlighter, rich text, automatic step numbers, mosaic/blur, emoji stickers, local magnifier.
- F3 creates always-on-top pins for screenshots or clipboard content. Pins support move, resize, rotate, flip, transparency.
- Presentation Mode helps prepare cleaner desktop before screenshots/meetings by hiding icons and applying theme/wallpaper presets.

**🚀 Improvements**

- More consistent experience with clearer selection feedback.
- Visible resize handles.
- Cleaner capture magnifier.
- Aligned annotation toolbars.
- Refined text editing.
- Improved onboarding.
- Dependable settings.
- Smoother Windows installation.
