import type { FaqContent } from '../faq-types';

/**
 * Italian FAQ copy. Structure mirrors the English page; wording follows the
 * app's it language pack.
 */
export const content: FaqContent = {
  metaTitle: 'Domande frequenti',
  metaDescription:
    'Risposte brevi su Shotera: quali piattaforme e lingue dell’interfaccia supporta, cosa funziona offline, cosa resta gratuito, come funzionano esportazione e prestazioni, e i dettagli come temi e scorciatoie.',
  title: 'Domande frequenti',
  lead: 'Piattaforme, lingue, privacy offline, edizioni, esportazione e dettagli — la versione breve.',
  groups: [
    {
      id: 'platform',
      label: 'Piattaforme e lingue',
      items: [
        {
          q: 'Quali sistemi operativi supporta Shotera?',
          a: 'Shotera supporta attualmente Windows desktop con un installer piccolo che si avvia rapidamente e funziona offline — scarica e inizia subito. macOS, Linux e altre piattaforme sono in programma.',
        },
        {
          q: 'Quali lingue dell’interfaccia supporta Shotera?',
          a: 'Shotera ora supporta cinese tradizionale, giapponese, portoghese brasiliano, spagnolo, tedesco, francese, italiano, coreano, russo, arabo, olandese, polacco e svedese. Insieme a inglese e cinese semplificato, Shotera supporta 15 lingue dell’interfaccia.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Offline e privacy',
      items: [
        {
          q: 'OCR e scontorno AI richiedono una connessione a internet?',
          a: 'No. Il riconoscimento testo OCR, lo scontorno AI e la cancellazione AI funzionano interamente offline sul tuo dispositivo — nulla viene caricato, i tuoi dati restano privati. La traduzione immagini usa API cloud e rispetta le informative sulla privacy dei rispettivi fornitori cloud.',
        },
        {
          q: 'Posso usare Shotera senza alcuna connessione?',
          a: 'Sì. Cattura, annotazione, registrazione, OCR, scontorno AI, cancellazione AI e visualizzatore di immagini funzionano tutti offline, e nulla di ciò che catturi lascia il tuo PC. La traduzione immagini è l’unica funzione che chiama un’API cloud, quindi richiede una connessione.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Edizioni, esportazione e prestazioni',
      items: [
        {
          q: 'Shotera è gratuito?',
          a: 'Cattura, annotazione e fissaggio di base sono gratuiti per sempre. Se ti serve solo la cattura e l’annotazione di ogni giorno, Shotera Lite è la versione più leggera — senza registrazione schermo e AI. Registrazione, scontorno AI, cancellazione AI e traduzione immagini sono incluse nella versione Standard — vedi il confronto tra le versioni per i dettagli.',
        },
        {
          q: 'Quali risoluzioni e frame rate supporta la registrazione?',
          a: 'La qualità di registrazione va da 720p fino a 1080p, 2K e 4K, a 30 fps o 60 fps — senza limiti di durata. Esporta in MP4 oppure in una GIF il cui frame rate puoi ridurre per contenere il peso del file.',
        },
        {
          q: 'Le registrazioni si possono esportare in GIF?',
          a: 'Sì. Puoi esportare qualsiasi registrazione in MP4 — da 720p fino a 4K, a 30 o 60 fps — oppure in una GIF compatta per documenti, chat e segnalazioni di bug. Nessuna delle due opzioni limita la durata della registrazione.',
        },
        {
          q: 'Rallenterà il mio computer?',
          a: 'No. Shotera è pensato per restare leggero — memoria minima e avvio istantaneo, impercettibile anche quando resta in background.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Dettagli e personalizzazione',
      items: [
        {
          q: 'Shotera ha la modalità scura?',
          a: 'Sì. Impostazioni → Generali → Tema dell’interfaccia permette di scegliere tra «Segui sistema», «Chiaro» e «Scuro»; «Segui sistema» segue automaticamente l’impostazione chiara/scura di Windows.',
        },
        {
          q: 'Funziona con più monitor e schermi ad alta risoluzione?',
          a: 'Sì. I monitor multipli vengono trattati come un unico desktop continuo, quindi anche uno schermo secondario a sinistra di quello principale si seleziona correttamente — e l’interfaccia e le catture restano nitide sui display ad alta densità di pixel.',
        },
        {
          q: 'Posso cambiare le scorciatoie da tastiera?',
          a: 'Sì. Cattura, Screenshot personalizzato, Fissa sul desktop e Modalità presentazione si possono riassegnare in Impostazioni → Scorciatoie; se un tasto è già occupato da un’altra app, Shotera te lo segnala, e puoi ripristinare tutti i valori predefiniti con un clic.',
        },
        {
          q: 'Come aggiorno all’ultima versione?',
          a: 'Shotera si aggiorna da solo: per impostazione predefinita controlla all’avvio, può scaricare e installare in background, oppure puoi controllare manualmente in Impostazioni → Aggiornamenti. La versione di Microsoft Store resta aggiornata tramite lo Store.',
        },
      ],
    },
  ],
  footnoteBefore: 'Altre domande? ',
  footnoteLink: 'Scrivici',
  footnoteAfter: ' — di solito rispondiamo entro 24 ore lavorative.',
};
