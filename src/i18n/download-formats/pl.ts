import type { DownloadFormatsContent } from '../download-formats-types';

export const plFormats: DownloadFormatsContent = {
  tagline: 'Formaty pobierania',
  title: 'Który plik pobrać?',
  subtitle: 'Ten sam Shotera w czterech formatach — różnią się tylko sposobem instalacji i aktualizacji.',
  headers: ['Format', 'Instalacja i aktualizacje', 'Najlepsze dla'],
  recommendLabel: 'Zalecany',
  rows: [
    { format: 'Instalator (.exe)', install: 'Instalacja przez kreatora; aktualizuje się w aplikacji', bestFor: 'Większości użytkowników' },
    { format: 'Wersja przenośna (.7z)', install: 'Rozpakuj i uruchom; aktualizuje się w aplikacji', bestFor: 'Zabierania ze sobą na pendrive' },
    { format: 'Instalator MSI (.msi)', install: 'Podwójne kliknięcie lub instalacja w trybie cichym; aktualizuje się w aplikacji', bestFor: 'Masowego wdrożenia w firmie' },
    { format: 'Microsoft Store', install: 'Instalacja i aktualizacje z Microsoft Store', bestFor: 'Osób, które wolą oddać aktualizacje systemowi' },
  ],
};
