import type { DownloadFormatsContent } from '../download-formats-types';

export const deFormats: DownloadFormatsContent = {
  tagline: 'Download-Formate',
  title: 'Welche Datei sollten Sie herunterladen?',
  subtitle: 'In allen vier Formaten steckt dasselbe Shotera — nur Installation und Updates unterscheiden sich.',
  headers: ['Format', 'Installation & Updates', 'Für wen'],
  recommendLabel: 'Empfohlen',
  rows: [
    {
      format: 'Installer (.exe)',
      install: 'Installation per Doppelklick, automatische Updates in der App',
      bestFor: 'Die meisten Nutzer',
    },
    {
      format: 'Portable-Version (.7z)',
      install: 'Entpacken und starten, automatische Updates in der App',
      bestFor: 'Zum Mitnehmen auf dem USB-Stick',
    },
    {
      format: 'MSI-Installer (.msi)',
      install: 'Doppelklick oder Silent-Installation, automatische Updates in der App',
      bestFor: 'Für die Verteilung im Unternehmen',
    },
    {
      format: 'Microsoft Store',
      install: 'Installation und Updates über den Store',
      bestFor: 'Einrichten und vergessen',
    },
  ],
};
