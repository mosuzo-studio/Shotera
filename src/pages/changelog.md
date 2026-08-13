---
title: 'Changelog'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: August 2, 2026

# Shotera v7.2.0

Shotera v7.2.0 focuses on faster capture, repeatable exact-size screenshots, broader language support, and more dependable interface-control detection.

## Highlights

### Much faster capture startup

- The capture and annotation path now reuses and prewarms the annotation window, avoids the previous image-decoding bottleneck, and presents the full-resolution desktop sooner.
- In project benchmarks on a dual-monitor Windows setup, the average shortcut-to-selection time was reduced by 68.2%.
- Capture exit is cleaner, with old selection flashes and the full-window afterimage removed. Copying and saving also move more work out of the visible path.

### New Custom Capture workflow

- Open Custom Capture with the default `Alt+F1` shortcut or from the tray menu.
- Define an exact X/Y position and width/height, lock an aspect ratio, swap orientation, or add a delay before capture.
- Save reusable size presets and restore the last-used values automatically.
- Multi-monitor coordinates, including negative positions, and sizes up to 40000 pixels are supported. Captures open directly in the annotator.
- Global shortcuts can be cleared individually or restored to defaults in one action.

### 15 interface languages

- **Added Traditional Chinese, Japanese, Brazilian Portuguese, Spanish, German, French, Italian, Korean, Russian, Arabic, Dutch, Polish, and Swedish. Together with English and Simplified Chinese, Shotera now supports 15 interface languages.**
- Language changes apply immediately across open app windows and the tray without restarting Shotera. Notifications also use the selected language.
- Interface font names and language choices are localized, and long language names are no longer truncated in the settings menu.
- Arabic includes a full right-to-left layout. Popovers and dropdowns stay correctly positioned, while technical text remains left-to-right.

## Improvements

### Window and control detection

- Faster, steadier nested-control recognition with fewer jumps from a precise child control back to its parent window.
- Taskbar controls, including secondary-monitor taskbars, and File Explorer navigation icons and text can now be targeted more precisely.
- Chromium and Electron accessibility trees are warmed and retried when needed, improving first-capture control detection, element highlighting, and magnifier initialization.

### Capture, clipboard, and annotation

- Clipboard image transfer uses a more direct RGBA path, reducing avoidable conversion and copy work.
- `Alt+T` for Pin and `Ctrl+S` for Save now work while a region is still selected.
- OCR task scheduling and progress feedback are smoother.
- AI model assets are restored, and Portable packages now include the required model files.

## Fixes

- Prevented a second capture from starting while another capture is already active, avoiding stacked overlays.
- Fixed stale selection outlines, the full-window residual frame after capture exits, and blue selection borders appearing in exported images.
- Fixed annotation toolbar events leaking into the canvas and restored the standalone OCR panel's border and corner resize handles.
- Fixed Custom Capture appearing in its own screenshot, improved first-open rendering, and corrected negative coordinates, 4K presets, and right-to-left technical numbers.
- Fixed single-instance handling across elevated and non-elevated launches.

[Download Shotera](https://github.com/mosuzo-studio/Shotera/releases)

---

# Shotera v7.1.0

Shotera v7.1.0 improves capture precision, annotation workflow, pin experience, and Windows integration.

## Highlights

### Capture

- Improved window and control detection with easier nested target selection.
- Refined capture magnifier with clearer borders, larger resize handles, and improved crosshair.

### Annotation

- Added refined support for shapes, arrows, text, stickers, markers, and local magnifier.
- Improved annotation editing with smoother resize, rotation, styling, undo, and redo.
- Updated toolbar layout and text-box controls for a more consistent experience.

### Pin & Clipboard

- Enhanced always-on-top pins with move, resize, rotate, flip, opacity, and click-through support.
- Added better clipboard compatibility and transparent background handling.

### AI & Features

- Restored AI tools entry and primary toolbar buttons.
- Restored feature guide entries for AI tools, screen recording, and GIF creation.
- Improved Presentation Mode for screenshots, meetings, and demos.

### Settings & Privacy

- Improved shortcut management, update channels, and settings window persistence.
- Added bilingual license support in MSI installer.
- Screenshots remain fully local. No account required, and captured content is never uploaded.

[Download Shotera](https://github.com/mosuzo-studio/Shotera/releases)

---

# 🎉🎉🎉 Shotera v7.0.0 Release

<img width="100%" alt="Shotera-V7 0 0_proc" src="https://github.com/user-attachments/assets/8e7901fe-1c09-4bc7-8ab1-b98531c89159" />

Capture what matters. Explain it clearly. Keep it where you can see it.

Shotera brings a fast, focused screenshot workflow to Windows. Press `F1`, point at a window or interface control, or drag the exact region you need. Window and control detection help the selection land cleanly, while the on-screen magnifier makes pixel-level adjustments easier.

## From capture to clear communication

A screenshot is often only the starting point. Shotera includes the tools needed to turn it into an explanation: rectangles and ellipses, lines and arrows, a freehand pen, highlighter, rich text, automatic step numbers, mosaic and blur, emoji stickers, and a local magnifier for emphasizing fine detail. Tools share a consistent editing workflow, with adjustable colors, line widths, fills, and styles where applicable.

## Pin references without breaking your flow

Press `F3` to place a screenshot or compatible clipboard content in an always-on-top pin. Keep a design, instruction, code sample, or comparison visible while working in another app. Pins can be moved, resized, rotated, flipped, and made transparent. Hide every pin when the desktop gets crowded, bring them back together, or restore a recently closed pin.

## Get the desktop ready to present

Presentation Mode helps prepare a cleaner desktop before a screenshot, meeting, or demonstration. It can hide desktop icons and apply your preferred Windows theme and wallpaper preset in one action. When you finish, Shotera restores the desktop state it saved beforehand.

## Make Shotera fit your routine

Customize capture, pin, hide, and Presentation Mode shortcuts. Choose output folders, filename templates, save behavior, interface language, UI typography, and tray icon style. Built-in update controls let you choose whether to include beta releases, while the settings window remembers its size and position.

## What v7.0.0 focuses on

This release gives the whole experience a more consistent finish: clearer selection feedback, more visible resize handles, a cleaner capture magnifier, aligned annotation toolbars, refined text editing controls, improved onboarding, more dependable settings behavior, and a smoother Windows installation experience.

Screenshots are saved locally, and Shotera does not upload your captured content. No account is required.

Ready for a quicker way to capture, explain, and reference what is on your screen?

[Download Shotera](https://github.com/mosuzo-studio/Shotera/releases)
