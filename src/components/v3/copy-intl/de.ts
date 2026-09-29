import type { V3LocaleCopy } from './types';

/**
 * German copy for the v3 pages. Terminology follows the Shotera app's de
 * language pack.
 */
export default {
  home: 'Shotera — Schnellere, intelligentere Screenshots und Bildschirmaufnahmen',
  nav: {
    features: 'Funktionen',
    versions: 'Versionen',
    changelog: 'Versionshinweise',
    about: 'Über uns',
    faq: 'FAQ',
    menu: 'Menü',
    language: 'Sprache',
    cta: 'Kostenlos herunterladen',
  },
  hero: {
    badge: 'Neu',
    announce: 'Lite-Edition: nur ~17 MB zu installieren',
    modes: [
      {
        key: 'capture',
        label: 'Screenshot',
        caption:
          'Fenster und UI-Elemente werden beim Überfahren erkannt — der richtige Bereich, gleich beim ersten Versuch.',
      },
      {
        key: 'long',
        label: 'Langer Screenshot',
        caption: 'Lange Seiten und lange Chats — in einem Bild zusammengefügt, automatisch oder von Hand.',
      },
      {
        key: 'pin',
        label: 'Anheften',
        caption:
          'Aufnahmen oben auf dem Bildschirm anheften — skalieren, Transparenz einstellen, nebeneinander vergleichen.',
      },
      {
        key: 'record',
        label: 'Bildschirmaufnahme',
        caption: '720p bis 4K mit hoher Bildrate, Cursor- und Klick-Hervorhebungen, Export als MP4 oder GIF.',
      },
      {
        key: 'ai',
        label: 'AI',
        caption: 'AI-Freistellen, AI-Radierer und Offline-OCR — alles auf Ihrem Gerät verarbeitet.',
      },
    ],
    h1: [
      [{ text: 'Screenshots, Bildschirmaufnahmen, ' }, { text: 'AI-Magie', hl: true }],
      [{ text: 'alles mit einem einzigen Tastenkürzel' }],
    ],
    sub: 'Shotera ist ein Aufnahmewerkzeug für den Desktop, gemacht für alle, die den ganzen Tag Screenshots erstellen: annotieren, lange Seiten durchgehend festhalten, als GIF aufnehmen, Motive mit AI freistellen, Offline-OCR laufen lassen, Bilder übersetzen und Referenzen anheften — ohne den Arbeitsfluss zu verlassen.',
    primary: 'Kostenlos herunterladen',
    secondary: 'So funktioniert es',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Installer / Portable-Version / MSI',
    store: 'Auch im Microsoft Store erhältlich',
    shellMonitor: 'Aluminium-Monitorgehäuse',
    shellLaptop: 'Laptopgehäuse',
  },
  download: {
    more: 'Weitere Download-Optionen',
    menu: 'Download-Optionen',
    edition: 'Shotera Standard',
    setup: 'Installer (.exe)',
    portable: 'Portable-Version (.7z)',
    msi: 'MSI-Installer',
    store: 'Microsoft Store',
    setupTip: 'Per Doppelklick installieren. Für die meisten Nutzer die richtige Wahl.',
    portableTip: 'Entpacken und starten — kann auf einem USB-Stick liegen.',
    msiTip: 'Meist von IT-Administratoren genutzt, um die App im Unternehmen auf vielen PCs zu verteilen.',
    storeTip: 'Die im Microsoft Store angebotene Variante, für alle, die Apps lieber von dort beziehen.',
    recommend: 'Empfohlen',
    allVersions: 'Alle Versionen auf GitHub',
  },
  trust: [
    { value: '15', label: 'Oberflächensprachen' },
    { value: '4.9 / 5', label: 'Nutzerbewertung' },
    { value: '100%', label: 'AI auf dem Gerät' },
    { value: '<0.1s', label: 'Start per Tastenkürzel' },
  ],
  modesSection: {
    eyebrow: 'Drei Abläufe für den Alltag',
    title: 'Ein Tastenkürzel für jede Aufnahme',
    lead: 'Screenshot, Anheften, Bildschirmaufnahme und GIF — die drei Aufgaben des Alltags, hinter einem einzigen Tastenkürzel.',
    bestFor: 'IDEAL FÜR',
    cards: [
      {
        icon: 'capture',
        title: 'Screenshot',
        one: 'Bereich, Fenster oder Vollbild mit einem Tastendruck — Fenster und UI-Elemente werden für Sie erkannt.',
        steps: ['Tastenkürzel drücken', 'Überfahren, bis die Auswahl andockt', 'Annotieren, kopieren oder speichern'],
        bestFor: 'tägliches Teilen und Dokumentation',
      },
      {
        icon: 'pin',
        title: 'Auf Desktop anheften',
        one: 'Lassen Sie eine Aufnahme oben auf allem anderen schweben — so lange Sie sie brauchen.',
        steps: [
          'Direkt nach der Aufnahme anheften',
          'Skalieren, Transparenz, vergleichen',
          'Arbeiten ohne ständiges Fensterwechseln',
        ],
        bestFor: 'Referenzen und Arbeit nebeneinander',
      },
      {
        icon: 'record',
        title: 'Bildschirmaufnahme & GIF',
        one: '720p bis 4K bei 30 oder 60 fps, ohne Zeitlimit für die Aufnahme.',
        steps: ['Bereich wählen und aufnehmen', 'Cursor und Klicks anzeigen', 'Als MP4 oder GIF exportieren'],
        bestFor: 'Anleitungen und Fehlerberichte',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Screenshot',
      title: 'Aufnehmen mit einem Tastendruck, exakt im Rahmen',
      lead: 'Per Tastenkürzel aufrufen und in einem Zug aufnehmen, annotieren und kopieren.',
      rows: [
        'Beim Überfahren dockt Shotera automatisch an das Fenster oder Element unter dem Zeiger an',
        'Pfeile, Rechtecke, Text, Nummerierung, Emoji-Sticker, Lupe — annotieren direkt beim Aufnehmen',
        'Zwei Wege zum Abschluss: direkt in die Zwischenablage kopieren oder sofort annotieren (Elegant / Direkt kommentieren)',
      ],
      items: [
        { title: 'Emoji-Sticker', note: 'mit einem Klick mehr sagen' },
        { title: 'Lupe', note: 'das Detail vergrößern' },
        { title: 'Nummerierung', note: 'die Leserichtung vorgeben' },
        { title: 'Mosaik & Textmarker', note: 'Datenschutz und Betonung' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Langer Screenshot',
      title: 'Eine Seite höher als der Bildschirm, in einer Aufnahme',
      lead: 'Lange Seiten, lange Chats und komplette Dokumente — von oben bis unten in einem einzigen Bild festgehalten.',
      rows: [
        'Automatisch scrollen lassen oder selbst scrollen — jeder Frame wird dabei erfasst',
        'Benachbarte Frames werden abgeglichen und überblendet — der fertige lange Screenshot zeigt keine sichtbaren Nähte',
      ],
      items: [
        { title: 'Live-Vorschau beim Zusammenfügen', note: 'stoppen, sobald alles erfasst ist' },
        { title: 'Keine sichtbaren Nähte', note: 'liest sich wie eine durchgehende Seite' },
        { title: 'Lange Chats', note: 'der ganze Chatverlauf in einem Bild' },
        { title: 'Kopieren oder speichern', note: 'bereit für Dokumentation und Issues' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Anheften',
      title: 'Referenzen oben anheften und daneben weiterarbeiten',
      lead: 'Eine Aufnahme über alles andere legen — vergleichen, nachschlagen und weiterarbeiten, ohne Fenster zu wechseln.',
      rows: [
        'Eine Aufnahme oben am Bildschirm anheften, ohne den Arbeitsfluss zu unterbrechen',
        'Größe von jeder Kante oder Ecke aus ändern, Seitenverhältnis fixiert; Doppelklick wechselt zwischen Originalgröße und Miniaturansicht',
      ],
      items: [
        { title: 'Mehrere Bilder gleichzeitig', note: 'nebeneinander vergleichen' },
        { title: 'Miniaturansicht', note: 'per Doppelklick verkleinern' },
        { title: 'Maus-Durchgriff', note: 'blockiert nie das Fenster darunter' },
        { title: 'Letztes Bild wiederherstellen', note: 'eine Taste holt es zurück' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Bildschirmaufnahme',
      title: 'In 4K aufnehmen, so lange wie nötig',
      lead: 'Aus „schwer zu erklären“ wird ein Video, dem jeder folgen kann.',
      rows: [
        '720p / 1080p / 2K / 4K bei 30 oder 60 fps, ohne Zeitlimit für die Aufnahme',
        'Ein leichtes GIF in Dokumentation, Chats oder Issues einfügen — ganz ohne Player',
      ],
      items: [
        { title: 'Cursor und Klicks anzeigen', note: 'jeder Schritt bleibt sichtbar' },
        { title: 'MP4 oder GIF', note: 'Qualität oder Dateigröße — Sie entscheiden' },
        { title: 'Bereit für 4K', note: 'gemacht für HiDPI-Displays' },
        { title: 'Verlauf', note: 'die letzte Aufnahme wiederfinden' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'AI-Funktionen',
      title: 'AI, die den Screenshot für Sie fertigstellt',
      lead: 'AI-Freistellen, AI-Radierer und Offline-OCR laufen lokal: intelligent, ohne Abstriche beim Datenschutz.',
      rows: [
        'Personen, Produkte, Logos: ein transparentes PNG in Sekunden — kein Hochladen, kein Warten auf einen Server',
        'Offline-OCR läuft auf Ihrem Gerät und liefert mit einem Klick bearbeitbaren, kopierbaren Text',
      ],
      items: [
        { title: 'Motiv freistellen', note: 'transparenter Hintergrund mit einem Klick' },
        { title: 'Störendes entfernen', note: 'AI rekonstruiert den Hintergrund' },
        { title: 'Offline-OCR', note: 'gemischte Sprachen, Code, Tabellen' },
        { title: 'Bildübersetzung', note: 'fremdsprachige Screenshots sofort lesen' },
      ],
      image: 'ai',
    },
  ],
  cta: {
    eyebrow: 'Kostenlos starten',
    title: 'Machen Sie jeden Screenshot schneller und intelligenter',
    lead: 'Kostenloser Download, Installation in wenigen Sekunden. Überlassen Sie das tägliche „mal eben einen Screenshot machen“ einem Werkzeug, das genau dafür gemacht ist.',
    primary: 'Kostenlos herunterladen',
    secondary: 'Weitere Versionen',
    note: 'Standard- und Lite-Edition; Windows 10/11+. Erhältlich als Installer, Portable-Version oder MSI.',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Eine Frage oder eine Idee? Schreiben Sie uns.',
    lead: 'Sie haben ein Problem entdeckt, wünschen sich eine Funktion oder möchten einfach Hallo sagen — wählen Sie den Kanal, der Ihnen passt.',
    replyNote: 'E-Mail und GitHub lesen wir täglich; in der Regel antworten wir innerhalb von 24 Geschäftsstunden.',
    faqNote: 'Sie kommen bei einem Problem nicht weiter? Die meisten Antworten stehen schon in den FAQ.',
    faqLink: 'Häufige Fragen lesen',
    soon: 'Demnächst verfügbar',
    mail: {
      subject: 'Shotera-Feedback — ',
      body: [
        'Guten Tag,',
        '',
        '(Beschreiben Sie das Problem, auf das Sie gestoßen sind, oder die Funktion, die Sie sich wünschen.)',
        '',
        '',
        'Wenn möglich, helfen uns diese Angaben, das Problem schneller einzugrenzen:',
        '',
        '\u00b7 Shotera-Edition (Lite / Standard):',
        '\u00b7 Windows-Version:',
        '\u00b7 Schritte zum Nachvollziehen:',
        '',
        'Vielen Dank',
      ].join('\n'),
      copied: 'E-Mail-Adresse kopiert — Ihr E-Mail-Programm wird geöffnet…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Sprechen Sie mit uns',
        note: 'Wir lesen jedes Feedback aufmerksam.',
        channels: [
          {
            key: 'email',
            name: 'E-Mail',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Support, Lizenzierung, Partnerschaften.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Fehlerberichte, Funktionswünsche, ältere Versionen.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Austausch mit anderen Shotera-Nutzern.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Folgen Sie uns',
        note: 'Versionshinweise, Tipps und ein Blick hinter die Kulissen.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Versionshinweise und kurze Tipps.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Anleitungen und Funktionsüberblicke.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Ankündigungen neuer Versionen.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Schnellere, intelligentere Screenshots und Bildschirmaufnahmen — angeheftet, annotiert und verstanden mit einem einzigen Tastenkürzel.',
    cols: [
      {
        title: 'Produkt',
        links: [
          { text: 'Funktionen', path: '/', hash: 'features' },
          { text: 'Versionen', path: '/versions' },
        ],
      },
      {
        title: 'Support',
        links: [
          { text: 'FAQ', path: '/faq' },
          { text: 'Versionshinweise', path: '/changelog' },
        ],
      },
      {
        title: 'Unternehmen',
        links: [
          { text: 'Über uns', path: '/about' },
          { text: 'Kontakt', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Nutzungsbedingungen', path: '/terms' },
      { text: 'Datenschutz', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 Oberflächensprachen',
  },
} satisfies V3LocaleCopy;
