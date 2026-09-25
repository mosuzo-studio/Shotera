import type { DownloadFormatsContent } from '../download-formats-types';

export const svFormats: DownloadFormatsContent = {
  tagline: 'Nedladdningsformat',
  title: 'Vilken fil ska du ladda ner?',
  subtitle: 'Samma Shotera i alla fyra formaten — det är bara installationen och uppdateringarna som skiljer.',
  headers: ['Format', 'Installation och uppdateringar', 'Bäst för'],
  recommendLabel: 'Rekommenderas',
  rows: [
    { format: 'Installationsprogram (.exe)', install: 'Installera med guiden; uppdaterar sig i appen', bestFor: 'De flesta användare' },
    { format: 'Portabel version (.7z)', install: 'Packa upp och kör; uppdaterar sig i appen', bestFor: 'Att ha med sig på ett USB-minne' },
    { format: 'MSI-installationspaket (.msi)', install: 'Dubbelklicka eller installera tyst; uppdaterar sig i appen', bestFor: 'Massutrullning på jobbet' },
    { format: 'Microsoft Store', install: 'Installeras och uppdateras via Microsoft Store', bestFor: 'Bekymmersfritt: systemet sköter allt' },
  ],
};
