import type { LocaleExtras } from '../locale-extras-types';

/**
 * Italian copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's Italian language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Screenshot lungo',

  home: {
    heroAlt:
      'Strumenti Shotera sullo schermo: cattura, screenshot lungo, annotazione, registrazione, scontorno AI, OCR offline, lettura di codici QR e a barre, traduzione e fissaggio',
    cards: [
      {
        title: 'Screenshot lungo',
        description:
          'Una pagina più alta dello schermo entra comunque in una sola cattura. Scorri manualmente o lascia che Shotera scorra da sola: lo screenshot lungo si compone mentre cresce.',
      },
      {
        title: 'Lettura di codici QR e a barre',
        description:
          'Leggi il codice dentro uno screenshot — link, Wi-Fi, contatti, codici a barre — e copia ciò che contiene. Tutto offline.',
      },
      {
        title: 'Visualizzatore di immagini',
        description:
          'Apri uno screenshot o qualsiasi file immagine in una finestra dedicata: sfoglia la cartella, ingrandisci e ritocca ciò che serve — senza altre app. I formati comuni si aprono subito.',
      },
    ],
    scrolling: {
      tagline: 'Screenshot lungo',
      title: 'Una pagina più alta dello schermo, in una sola cattura',
      text: 'Pagine intere, chat lunghe e documenti completi — catturati dall’alto verso il basso in un’unica immagine.',
      alt: 'Screenshot lungo che unisce una pagina lunga in un’unica immagine',
      items: [
        {
          title: 'In automatico o a mano',
          description:
            'Lascia che Shotera scorra la pagina o fallo a mano. In entrambi i casi ogni porzione viene catturata man mano.',
        },
        {
          title: 'Guarda la composizione in diretta',
          description:
            'Un’anteprima dal vivo affianca la selezione e cresce a ogni porzione: puoi fermarti appena la pagina è tutta dentro.',
        },
        {
          title: 'Nessuna cucitura visibile',
          description:
            'Le porzioni adiacenti vengono allineate e fuse, così lo screenshot lungo finale si legge come una pagina continua.',
        },
        {
          title: 'Copia o salva',
          description:
            'Manda lo screenshot lungo direttamente negli appunti o salvalo su disco — pronto per documenti, chat e segnalazioni di bug.',
        },
      ],
    },
    stats: [
      { title: 'Lingue', amount: '15' },
      { title: 'Valutazione', amount: '4.9 / 5' },
      { title: 'AI offline', amount: '100%' },
      { title: 'Avvio da scorciatoia', amount: '<0.1s' },
    ],
    workflow: {
      title: 'Dallo schermo alla condivisione in tre passi.',
      alt: 'Flusso di lavoro Shotera',
      steps: [
        {
          title: 'Premi la scorciatoia',
          description: 'Richiama Shotera ovunque e passa il mouse: la finestra o l’elemento che vuoi è già rilevato.',
        },
        {
          title: 'Annota, estrai o modifica',
          description:
            'Evidenzia i punti importanti, avvia l’OCR, scontorna un soggetto, traduci — nella stessa finestra.',
        },
        {
          title: 'Copia, salva o fissa',
          description:
            'Invia agli appunti, salva in locale o fissa in primo piano per averlo sempre a portata di mano.',
        },
      ],
    },
  },

  about: {
    statsTitle: 'Shotera in breve',
    metaDescription:
      'Chi è Shotera: perché abbiamo creato uno strumento di cattura rapido e discreto per Windows e cosa guida ogni nostra decisione.',
    hero: {
      tagline: 'Chi siamo',
      title: 'Fai screenshot che',
      accent: 'si fanno dimenticare',
      subtitle:
        'Shotera è nato da una frustrazione semplice: gli screenshot che facciamo decine di volte al giorno dovrebbero essere più rapidi e più fluidi. Siamo un piccolo team di profili prodotto e ingegneri che usano gli strumenti di cattura quanto chiunque altro — e questa dedizione è finita in ogni scorciatoia, ogni selezione, ogni fotogramma.',
      alt: 'Strumenti di annotazione di Shotera su un desktop Windows',
    },
    stats: [
      { title: 'Lingue', amount: '15' },
      { title: 'Valutazione', amount: '4.9 / 5' },
      { title: 'AI offline', amount: '100%' },
      { title: 'Avvio da scorciatoia', amount: '<0.1s' },
    ],
    stand: {
      title: 'Ciò in cui crediamo',
      subtitle: 'Più uno strumento è piacevole, meno lo si nota — questa idea sta dietro ogni nostra decisione.',
      items: [
        {
          title: 'La velocità prima di tutto',
          description:
            'Una scorciatoia per richiamarlo, rilevamento automatico di finestre ed elementi e esattamente l’inquadratura che intendevi. Meno di un secondo dall’intenzione alla cattura.',
        },
        {
          title: 'Prima il locale, privato per impostazione predefinita',
          description:
            'OCR, scontorno e altro girano sul dispositivo quando possibile. I tuoi screenshot restano fuori dal cloud, a meno che tu non dica il contrario.',
        },
        {
          title: 'Sobrietà per scelta',
          description:
            'Nessuna funzione superflua, nessuna interruzione del flusso. Le cose comuni sono a un clic; quelle avanzate compaiono solo quando servono.',
        },
      ],
    },
    core: {
      title: 'Capacità principali',
      subtitle:
        'Screenshot, screenshot lungo, fissaggio, registrazione, OCR offline e AI sul dispositivo: le sei cose a cui ricorri tutto il giorno, a una scorciatoia di distanza.',
      alt: 'Strumenti di annotazione di Shotera su un desktop Windows: selezione, barra degli strumenti e riquadri in vetro',
      items: [
        {
          title: 'Screenshot',
          description:
            'Rilevamento intelligente di finestre ed elementi: l’inquadratura che vuoi è già selezionata. Al termine copia subito oppure apri la barra degli strumenti di annotazione — due modalità di completamento, decidi tu.',
        },
        {
          title: 'Screenshot lungo',
          description:
            'Scorri una pagina o una chat lunga e lascia che Shotera la unisca in un unico screenshot lungo — in automatico o a mano, con anteprima dal vivo.',
        },
        {
          title: 'Fissa sul desktop',
          description:
            'Mantieni qualsiasi screenshot in primo piano come riferimento, disposto fianco a fianco senza confusione.',
        },
        {
          title: 'Registrazione schermo e GIF',
          description:
            'Registra lo schermo ed esporta in GIF leggeri; evidenziazione del cursore e segnali di clic rendono chiare le demo.',
        },
        {
          title: 'OCR offline',
          description:
            'Estrai testo da qualsiasi screenshot, sul tuo dispositivo, in più lingue: il risultato è pronto da copiare e incollare.',
        },
        {
          title: 'Scontorno e cancellazione AI',
          description:
            'Lo scontorno AI elimina lo sfondo con un clic ed esporta un PNG trasparente; la cancellazione AI toglie elementi di disturbo e filigrane. Entrambi girano su modelli locali: nulla viene caricato.',
        },
      ],
    },
    more: {
      title: 'Altre capacità',
      subtitle:
        'I dettagli che contano: annotazione, riconoscimento, visualizzazione e le impostazioni che rendono il desktop più comodo.',
      items: [
        {
          title: 'Strumenti di annotazione',
          description:
            'Rettangolo/ellisse, linea/freccia, pennello, evidenziatore, mosaico/sfocatura, testo, numerazione, adesivi emoji, lente d’ingrandimento e gomma: annota al momento della cattura.',
        },
        {
          title: 'Adesivi emoji',
          description:
            'Centinaia di adesivi emoji — pollice in su, cuori, risate, coriandoli — da ridimensionare e posizionare dove vuoi, per aggiungere un po’ di divertimento.',
        },
        {
          title: 'Visualizzatore e editor di immagini',
          description:
            'Apri uno screenshot o qualsiasi file immagine in una finestra dedicata: sfoglia la cartella, ingrandisci e ritocca ciò che serve — senza altre app. I formati comuni si aprono subito.',
        },
        {
          title: 'Traduzione immagini',
          description:
            'Riconosci e traduci il testo in qualsiasi immagine sul momento: documenti, grafici e interfacce straniere diventano leggibili.',
        },
        {
          title: 'Lettura di codici QR e a barre',
          description:
            'Leggi il codice dentro uno screenshot — link, Wi-Fi, contatti, codici a barre — e copia ciò che contiene. Tutto offline.',
        },
        {
          title: 'Screenshot personalizzato',
          description:
            'Dimensioni fisse, proporzioni, ritardo e coordinate dello schermo: pratico per creare asset e catture in serie.',
        },
        {
          title: 'Multi-monitor',
          description:
            'Ogni schermo in un unico sistema di coordinate, così anche gli schermi secondari ed estesi si selezionano correttamente — e le catture restano nitide sui pannelli ad alta densità di pixel.',
        },
        {
          title: 'Modalità scura',
          description: 'Segui il sistema, oppure passa manualmente dalla modalità chiara a quella scura.',
        },
        {
          title: 'Modalità presentazione',
          description:
            'Riordina il desktop con un solo tasto — finestre, icone e sfondo — e al termine rimetti tutto com’era.',
        },
      ],
    },
    values: {
      title: 'I nostri valori',
      subtitle:
        'Per noi costruire uno strumento e usarlo sono la stessa cosa. Lavoriamo ogni giorno con ciò che creiamo.',
      items: [
        {
          title: 'Costruito per il lavoro vero',
          description:
            'Ogni funzione nasce da un problema reale: scrivere documentazione, annotare specifiche di design, registrare riproduzioni di bug, leggere materiale straniero. La usiamo prima noi, poi la affidiamo a te.',
        },
        {
          title: 'Rifinitura continua',
          description:
            'Il feeling delle scorciatoie, l’aggancio ai bordi della selezione, dimensione contro nitidezza nelle registrazioni: continuiamo a rifinire i dettagli finché non sono giusti.',
        },
        {
          title: 'Rispetto per gli utenti',
          description:
            'Niente software imposti, niente popup invadenti, nessun caricamento silenzioso dei tuoi dati. Le funzioni principali restano gratuite: è la nostra promessa.',
        },
      ],
    },
    history: {
      title: 'Come siamo arrivati qui',
      subtitle: 'Da uno strumento creato per noi a uno su cui molti contano ogni giorno.',
      cta: 'Scarica Shotera gratis',
      items: [
        {
          title: 'Nato da un’esigenza nostra',
          description:
            'Non trovavamo uno strumento di cattura abbastanza rapido e fluido, così ne abbiamo scritto uno.',
        },
        {
          title: 'Cresciuto grazie agli utenti',
          description:
            'Screenshot lungo, scontorno AI, OCR offline, traduzione immagini: tante funzioni arrivano direttamente dal feedback degli utenti.',
        },
        {
          title: 'Verso sempre più persone',
          description:
            'Oggi Shotera parla 15 lingue dell’interfaccia e continua a crescere, con lo stesso obiettivo: rendere semplici gli screenshot.',
        },
      ],
    },
    contact: {
      title: 'Contattaci',
      tagline: 'Scrivici quando vuoi',
      items: [
        {
          title: 'Community',
          description:
            'Entra nella community di Shotera: nuove versioni, consigli e un canale diretto per dirci cosa pensi.',
        },
        {
          title: 'Supporto via e-mail',
          description:
            'Hai un problema o un’idea per una funzione? Scrivi a mosuzo.studio@gmail.com: leggiamo e rispondiamo a ogni messaggio.',
        },
      ],
    },
  },
};
