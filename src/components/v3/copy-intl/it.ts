import type { V3LocaleCopy } from './types';

/**
 * Italian copy for the v3 pages. Terminology follows the Shotera app's it
 * language pack.
 */
export default {
  home: 'Shotera — Screenshot e registrazioni schermo più rapidi e intelligenti',
  nav: {
    features: 'Funzioni',
    versions: 'Versioni',
    changelog: 'Aggiornamenti',
    about: 'Chi siamo',
    faq: 'FAQ',
    menu: 'Menu',
    language: 'Lingua',
    cta: 'Scarica gratis',
  },
  hero: {
    badge: 'Novità',
    announce: 'Edizione Lite: solo ~17 MB da installare',
    modes: [
      {
        key: 'capture',
        label: 'Screenshot',
        caption:
          'Finestre ed elementi dell’interfaccia vengono rilevati mentre passi il mouse — l’area giusta al primo colpo.',
      },
      {
        key: 'long',
        label: 'Screenshot lungo',
        caption: 'Pagine lunghe e chat lunghe — unite in un’unica immagine, in automatico o a mano.',
      },
      {
        key: 'pin',
        label: 'Fissa',
        caption: 'Le catture restano in primo piano — ridimensiona, regola la trasparenza, confronta fianco a fianco.',
      },
      {
        key: 'record',
        label: 'Registra schermo',
        caption: 'Da 720p a 4K ad alto frame rate, cursore e clic in evidenza, esportazione in MP4 o GIF.',
      },
      {
        key: 'ai',
        label: 'AI',
        caption: 'Scontorno AI, cancellazione AI e OCR offline — tutto elaborato sul tuo dispositivo.',
      },
    ],
    h1: [
      [{ text: 'Screenshot, registrazione schermo, ' }, { text: 'magia dell’AI', hl: true }],
      [{ text: 'tutto da una sola scorciatoia' }],
    ],
    sub: 'Shotera è uno strumento di cattura per desktop pensato per chi fa screenshot tutto il giorno: annota, cattura le pagine lunghe scorrendo, registra in GIF, scontorna i soggetti con l’AI, usa l’OCR offline, traduci le immagini e fissa i riferimenti — senza uscire dal tuo flusso.',
    primary: 'Scarica gratis',
    secondary: 'Guarda come funziona',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Programma di installazione / portatile / MSI',
    store: 'Disponibile anche su Microsoft Store',
    shellMonitor: 'Monitor in alluminio',
    shellLaptop: 'Portatile',
  },
  download: {
    more: 'Altre opzioni di download',
    menu: 'Opzioni di download',
    edition: 'Shotera Standard',
    setup: 'Programma di installazione (.exe)',
    portable: 'Versione portatile (.7z)',
    msi: 'Installer MSI',
    store: 'Microsoft Store',
    setupTip: 'Doppio clic per installare. La scelta della maggior parte degli utenti.',
    portableTip: 'Scompatta e avvia: può stare su una chiavetta USB.',
    msiTip: 'Di solito lo usano gli amministratori aziendali per distribuire l’app su molti PC.',
    storeTip: 'La versione pubblicata su Microsoft Store, per chi preferisce installare le app da lì.',
    recommend: 'Consigliato',
    allVersions: 'Tutte le versioni su GitHub',
  },
  trust: [
    { value: '15', label: 'lingue dell’interfaccia' },
    { value: '4.9 / 5', label: 'valutazione degli utenti' },
    { value: '100%', label: 'AI sul dispositivo' },
    { value: '<0.1s', label: 'per richiamarlo' },
    {
      value: '{downloads}',
      label: 'download',
      badge: 'In diretta',
      tip: 'Conteggio in tempo reale da GitHub Releases; non include i download da Microsoft Store',
    },
  ],
  modesSection: {
    bestFor: 'IDEALE PER',
    eyebrow: 'Tre gesti quotidiani',
    title: 'Una sola scorciatoia per ogni cattura',
    lead: 'Screenshot, fissa, registra e GIF — le tre attività che usi tutto il giorno, dietro una sola scorciatoia.',
    cards: [
      {
        icon: 'capture',
        title: 'Screenshot',
        one: 'Area, finestra o schermo intero con un tasto solo — finestre ed elementi dell’interfaccia vengono rilevati per te.',
        steps: ['Premi la scorciatoia', 'Passa il mouse per agganciare i bordi', 'Annota, copia o salva'],
        bestFor: 'condivisione e documentazione quotidiane',
      },
      {
        icon: 'pin',
        title: 'Fissa sul desktop',
        one: 'Una cattura resta sopra tutto il resto per tutto il tempo che ti serve.',
        steps: [
          'Fissa subito dopo la cattura',
          'Ridimensiona, trasparenza, confronta',
          'Lavora senza saltare tra le finestre',
        ],
        bestFor: 'riferimenti e lavoro fianco a fianco',
      },
      {
        icon: 'record',
        title: 'Registrazione schermo e GIF',
        one: 'Da 720p a 4K a 30 o 60 fps, senza limiti di durata.',
        steps: ['Scegli l’area e registra', 'Mostra cursore e clic', 'Esporta in MP4 o GIF'],
        bestFor: 'tutorial e segnalazioni di bug',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Screenshot',
      title: 'Un tasto, l’inquadratura esatta',
      lead: 'Richiamalo con una scorciatoia, poi cattura, annota e copia in un unico gesto continuo.',
      rows: [
        'Passa il mouse e Shotera si aggancia alla finestra o all’elemento sotto il cursore',
        'Frecce, rettangoli, testo, numerazione, emoji, lente d’ingrandimento — annota già al momento della cattura',
        'Due modi per concludere: copia subito negli appunti oppure annota sul momento (Elegante / Annotazione immediata)',
      ],
      items: [
        { title: 'Adesivi emoji', note: 'dire di più con un clic' },
        { title: 'Lente d’ingrandimento', note: 'ingrandire il dettaglio' },
        { title: 'Numerazione', note: 'guidare l’ordine di lettura' },
        { title: 'Mosaico ed evidenziatore', note: 'privacy ed enfasi' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Screenshot lungo',
      title: 'Una pagina più alta dello schermo, in una sola cattura',
      lead: 'Pagine lunghe, chat lunghe e documenti interi — catturati dall’alto verso il basso in un’unica immagine.',
      rows: [
        'Lascia scorrere Shotera o scorri tu: ogni fotogramma viene catturato man mano',
        'I fotogrammi adiacenti vengono allineati e fusi, così lo screenshot lungo finale non ha cuciture visibili',
      ],
      items: [
        { title: 'Anteprima della composizione', note: 'fermarti appena è completa' },
        { title: 'Nessuna cucitura visibile', note: 'si legge come una pagina continua' },
        { title: 'Chat lunghe', note: 'tutta la conversazione in un’immagine' },
        { title: 'Copia o salva', note: 'pronto per documenti e issue' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Fissa sul desktop',
      title: 'Fissa i riferimenti in primo piano e lavora accanto',
      lead: 'Incolla una cattura sopra tutto il resto: confronta, prendi spunto e continua a lavorare senza cambiare finestra.',
      rows: [
        'Fissa una cattura in primo piano senza interrompere il flusso',
        'Ridimensiona da qualsiasi bordo o angolo con le proporzioni bloccate; il doppio clic alterna dimensione originale e miniatura',
      ],
      items: [
        { title: 'Più immagini fissate insieme', note: 'confrontarle fianco a fianco' },
        { title: 'Modalità miniatura', note: 'doppio clic per rimpicciolire' },
        { title: 'Clic attraverso', note: 'non blocca mai la finestra sotto' },
        { title: 'Ripristina l’ultima immagine fissata', note: 'un tasto per riportarla a schermo' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Registrazione schermo',
      title: 'Registra in 4K, per tutto il tempo che serve',
      lead: 'Trasforma ciò che è “difficile da spiegare” in una clip che chiunque può seguire.',
      rows: [
        '720p / 1080p / 2K / 4K a 30 o 60 fps, senza limiti di durata',
        'Metti una GIF leggera in documenti, chat o issue — non serve alcun lettore',
      ],
      items: [
        { title: 'Cursore e clic in evidenza', note: 'ogni passaggio resta chiaro' },
        { title: 'MP4 o GIF', note: 'qualità o peso del file, a tua scelta' },
        { title: 'Pronto per il 4K', note: 'pensato per i display HiDPI' },
        { title: 'Cronologia', note: 'ritrova l’ultima registrazione' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'Capacità AI',
      title: 'L’AI che completa lo screenshot per te',
      lead: 'Scontorno AI, cancellazione AI e OCR lavorano in locale: intelligenti, senza rinunciare alla privacy.',
      rows: [
        'Persone, prodotti, loghi: un PNG trasparente in pochi secondi — nessun caricamento, nessuna attesa su un server',
        'L’OCR lavora sul tuo dispositivo e restituisce testo modificabile e copiabile con un clic',
      ],
      items: [
        { title: 'Scontorna il soggetto', note: 'sfondo trasparente in un clic' },
        { title: 'Cancella ciò che non dovrebbe esserci', note: 'l’AI ricostruisce quello che c’era dietro' },
        { title: 'OCR offline', note: 'lingue miste, codice, tabelle' },
        { title: 'Traduzione immagini', note: 'leggi al volo gli screenshot in lingua straniera' },
      ],
      image: 'ai',
    },
    {
      eyebrow: 'Due modalità di completamento',
      title: 'Copia subito o annota sul posto',
      lead: 'Elegante copia appena rilasci la selezione; Annotazione immediata apre la barra sul posto. Cambia quando vuoi in Impostazioni → Cattura.',
      rows: [
        'Elegante — copiato all’istante, con una scheda in basso a destra che apre l’editor',
        'Annotazione immediata — la barra compare con la selezione; annota senza cambiare finestra',
      ],
      image: 'modes',
      reversed: true,
    },
  ],
  cta: {
    eyebrow: 'Inizia gratis',
    title: 'Rendi ogni screenshot più rapido e più intelligente',
    lead: 'Download gratuito, installazione in pochi secondi. Affida il “fammi uno screenshot” di ogni giorno a uno strumento che lo sa fare.',
    primary: 'Scarica gratis',
    secondary: 'Altre versioni',
    note: 'Edizioni Standard e Lite; Windows 10/11+. Formati disponibili: programma di installazione / versione portatile / MSI.',
  },
  contact: {
    eyebrow: 'Contatti',
    title: 'Hai una domanda o un’idea? Raccontacela.',
    lead: 'Un problema, un’idea per una funzione o solo un saluto: scegli il canale che preferisci.',
    replyNote: 'Email e GitHub li leggiamo ogni giorno; di solito rispondiamo entro 24 ore lavorative.',
    faqNote: 'Qualcosa ti blocca? La maggior parte delle risposte è già nelle FAQ.',
    faqLink: 'Leggi le FAQ',
    soon: 'In arrivo',
    mail: {
      subject: 'Feedback su Shotera — ',
      body: [
        'Ciao,',
        '',
        '(Descrivi il problema che hai incontrato o la funzione che hai in mente.)',
        '',
        '',
        'Se puoi, questi dettagli ci aiutano a risolvere prima:',
        '',
        '· Edizione di Shotera (Lite / Standard):',
        '· Versione di Windows:',
        '· Passaggi per riprodurre il problema:',
        '',
        'Grazie!',
      ].join('\n'),
      copied: 'Email copiata — apertura del client di posta…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Parlaci',
        note: 'Leggiamo ogni feedback con attenzione.',
        channels: [
          {
            key: 'email',
            name: 'Email',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Supporto, licenze, partnership.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Segnalazioni di bug, richieste di funzioni, versioni precedenti.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Per parlare con altri utenti di Shotera.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Segui il progetto',
        note: 'Novità delle versioni, consigli e dietro le quinte.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Novità delle versioni e consigli rapidi.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Tutorial e panoramiche sulle funzioni.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Annunci delle nuove versioni.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Screenshot e registrazioni schermo più rapidi e intelligenti — fissati, annotati e riconosciuti con una sola scorciatoia.',
    cols: [
      {
        title: 'Prodotto',
        links: [
          { text: 'Funzioni', path: '/', hash: 'features' },
          { text: 'Versioni', path: '/versions' },
        ],
      },
      {
        title: 'Supporto',
        links: [
          { text: 'FAQ', path: '/faq' },
          { text: 'Aggiornamenti', path: '/changelog' },
        ],
      },
      {
        title: 'Azienda',
        links: [
          { text: 'Chi siamo', path: '/about' },
          { text: 'Contattaci', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Termini', path: '/terms' },
      { text: 'Privacy', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 lingue dell’interfaccia',
  },
} satisfies V3LocaleCopy;
