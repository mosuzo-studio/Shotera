import type { DownloadFormatsContent } from '../download-formats-types';

export const itFormats: DownloadFormatsContent = {
  tagline: 'Formati di download',
  title: 'Quale file scaricare?',
  subtitle: 'Lo stesso Shotera in ogni formato: cambia solo il modo in cui si installa e si aggiorna.',
  headers: ['Formato', 'Installazione e aggiornamenti', 'Per chi'],
  recommendLabel: 'Consigliato',
  rows: [
    {
      format: 'Programma di installazione (.exe)',
      install: "Installazione con doppio clic, aggiornamento automatico nell'app",
      bestFor: 'La maggior parte degli utenti',
    },
    {
      format: 'Versione portatile (.7z)',
      install: "Scompatta e avvia, aggiornamento automatico nell'app",
      bestFor: 'Per portarla su una chiavetta USB',
    },
    {
      format: 'Installer MSI (.msi)',
      install: "Doppio clic o installazione silenziosa, aggiornamento automatico nell'app",
      bestFor: 'Per la distribuzione aziendale',
    },
    {
      format: 'Microsoft Store',
      install: 'Installazione e aggiornamenti tramite lo Store',
      bestFor: 'Per lasciare fare al sistema',
    },
  ],
};
