import type { DownloadFormatsContent } from '../download-formats-types';

export const nlFormats: DownloadFormatsContent = {
  tagline: 'Downloadformaten',
  title: 'Welk bestand moet je downloaden?',
  subtitle: 'Hetzelfde Shotera in alle vier de formaten: alleen de installatie en de updates verschillen.',
  headers: ['Formaat', 'Installatie en updates', 'Beste voor'],
  recommendLabel: 'Aanbevolen',
  rows: [
    { format: 'Installatieprogramma (.exe)', install: 'Installatie via wizard; werkt zichzelf bij in de app', bestFor: 'Voor de meeste mensen' },
    { format: 'Draagbare versie (.7z)', install: 'Uitpakken en draaien; werkt zichzelf bij in de app', bestFor: 'Voor op een usb-stick' },
    { format: 'MSI-installer (.msi)', install: 'Dubbelklikken of stille installatie; werkt zichzelf bij in de app', bestFor: 'Grootschalige uitrol op het werk' },
    { format: 'Microsoft Store', install: 'Installeert en werkt bij via de Store', bestFor: 'Zorgeloos: het systeem regelt het voor je' },
  ],
};
