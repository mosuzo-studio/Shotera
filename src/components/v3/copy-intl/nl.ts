import type { V3LocaleCopy } from './types';

/**
 * Dutch copy for the v3 pages. Terminology follows the Shotera app's nl
 * language pack.
 */
export default {
  home: 'Shotera — Snellere, slimmere schermafbeeldingen en schermopnames',
  nav: {
    features: 'Functies',
    versions: 'Versies',
    changelog: 'Updates',
    about: 'Over',
    faq: 'FAQ',
    menu: 'Menu',
    language: 'Taal',
    cta: 'Gratis downloaden',
  },
  hero: {
    badge: 'Nieuw',
    announce: 'Lite-versie: slechts ~17 MB om te installeren',
    modes: [
      {
        key: 'capture',
        label: 'Schermafbeelding',
        caption:
          'Vensters en interface-elementen worden herkend zodra je eroverheen gaat — het juiste gebied, in één keer.',
      },
      {
        key: 'long',
        label: 'Lange schermafbeelding',
        caption: 'Lange pagina’s en lange chats — automatisch of met de hand aan elkaar gezet tot één afbeelding.',
      },
      {
        key: 'pin',
        label: 'Vastpinnen',
        caption: 'Opnamen blijven bovenop je scherm staan — schalen, transparant maken, naast elkaar vergelijken.',
      },
      {
        key: 'record',
        label: 'Schermopname',
        caption: '720p tot 4K met hoge framesnelheid, cursor- en klikaccenten, export als MP4 of GIF.',
      },
      { key: 'ai', label: 'AI', caption: 'AI-uitsnede, AI-gum en offline OCR — alles op je apparaat verwerkt.' },
    ],
    h1: [
      [{ text: 'Schermafbeeldingen, schermopnames, ' }, { text: 'AI-magie', hl: true }],
      [{ text: 'allemaal met één sneltoets' }],
    ],
    sub: 'Shotera is een desktop-app voor vastleggen, gemaakt voor wie de hele dag schermafbeeldingen maakt: annoteren, lange pagina’s scrollend vastleggen, opnemen als GIF, onderwerpen uitsnijden met AI, offline OCR, afbeeldingen vertalen en referenties vastpinnen — zonder je te onderbreken.',
    primary: 'Gratis downloaden',
    secondary: 'Bekijk hoe het werkt',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Installatieprogramma / draagbaar / MSI',
    store: 'Ook verkrijgbaar in de Microsoft Store',
    shellMonitor: 'Aluminium monitorbehuizing',
    shellLaptop: 'Laptopbehuizing',
  },
  download: {
    more: 'Meer downloadopties',
    menu: 'Downloadopties',
    edition: 'Shotera Standard',
    setup: 'Installatieprogramma (.exe)',
    portable: 'Draagbare versie (.7z)',
    msi: 'MSI-installer',
    store: 'Microsoft Store',
    setupTip: 'Dubbelklik om te installeren. Voor de meeste mensen de juiste keuze.',
    portableTip: 'Uitpakken en draaien - hij kan zelfs op een usb-stick staan.',
    msiTip: 'Meestal door beheerders binnen een bedrijf, om de app op veel pc’s uit te rollen.',
    storeTip: 'De versie uit de Microsoft Store, voor wie apps liever daar vandaan haalt.',
    recommend: 'Aanbevolen',
    allVersions: 'Alle versies op GitHub',
  },
  trust: [
    { value: '15', label: 'Interfacetalen' },
    { value: '4.9 / 5', label: 'gebruikersbeoordeling' },
    { value: '100%', label: 'AI op je apparaat' },
    { value: '<0.1s', label: 'Oproepen via sneltoets' },
    {
      value: '{downloads}',
      label: 'downloads',
      badge: 'Live',
      tip: 'Live telling van GitHub Releases',
    },
  ],
  modesSection: {
    bestFor: 'IDEAAL VOOR',
    eyebrow: 'Drie dagelijkse taken',
    title: 'Eén sneltoets voor alles wat je vastlegt',
    lead: 'Vastleggen, vastpinnen, opnemen en GIF — de drie taken die je de hele dag door doet, achter één sneltoets.',
    cards: [
      {
        icon: 'capture',
        title: 'Schermafbeelding',
        one: 'Gebied, venster of volledig scherm met één toets — vensters en interface-elementen worden voor je herkend.',
        steps: ['Druk op de sneltoets', 'Beweeg de muis om de randen te pakken', 'Annoteer, kopieer of sla op'],
        bestFor: 'dagelijks delen en documentatie',
      },
      {
        icon: 'pin',
        title: 'Vastpinnen op bureaublad',
        one: 'Laat een opname zweven bovenop alles, zo lang als je wilt.',
        steps: [
          'Pin de opname meteen vast',
          'Schaal, maak transparanter, vergelijk',
          'Werk zonder gesleep met vensters',
        ],
        bestFor: 'referenties en werk naast elkaar',
      },
      {
        icon: 'record',
        title: 'Schermopname & GIF',
        one: 'Van 720p tot 4K bij 30 of 60 fps, zonder tijdslimiet.',
        steps: ['Kies een gebied en neem op', 'Toon cursor en klikken', 'Exporteer naar MP4 of GIF'],
        bestFor: 'tutorials en bugmeldingen',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Schermafbeelding',
      title: 'Eén toets, precies het juiste kader',
      lead: 'Roep het op met een sneltoets en leg vast, annoteer en kopieer in één vloeiende beweging.',
      rows: [
        'Beweeg de muis en Shotera klikt vast op het venster of interface-element onder de cursor',
        'Pijlen, kaders, tekst, nummering, emoji, loep — annoteer op het moment van vastleggen',
        'Twee manieren om af te ronden: direct naar het klembord kopiëren, of meteen annoteren (Strak en simpel / Direct annoteren)',
      ],
      items: [
        { title: 'Emoji-stickers', note: 'zeg meer met één klik' },
        { title: 'Loep', note: 'zoom in op het detail' },
        { title: 'Nummering', note: 'stuurt de leesvolgorde' },
        { title: 'Mozaïek & markeerstift', note: 'privacy en nadruk' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Lange schermafbeelding',
      title: 'Een pagina langer dan het scherm, in één opname',
      lead: 'Lange pagina’s, lange chats en complete documenten — van boven tot onder vastgelegd in één afbeelding.',
      rows: [
        'Laat automatisch scrollen of scroll zelf — elk beeld wordt onderweg vastgelegd',
        'Aangrenzende beelden worden op elkaar afgestemd en samengevoegd, zodat de lange opname geen zichtbare naden heeft',
      ],
      items: [
        { title: 'Live voorbeeld van het samenvoegen', note: 'stop zodra alles erin staat' },
        { title: 'Geen zichtbare naden', note: 'leest als één doorlopende pagina' },
        { title: 'Lange chats', note: 'het hele gesprek in één afbeelding' },
        { title: 'Kopiëren of opslaan', note: 'klaar voor documentatie en issues' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Vastpinnen',
      title: 'Referenties bovenop, werk ernaast verder',
      lead: 'Zet een opname bovenop alles — vergelijk, raadpleeg en blijf werken zonder van venster te wisselen.',
      rows: [
        'Zet een opname bovenop het scherm vast zonder je werk te onderbreken',
        'Formaat wijzigen vanaf elke rand of hoek, met vergrendelde beeldverhouding; dubbelklik schakelt tussen de oorspronkelijke grootte en de miniatuur',
      ],
      items: [
        { title: 'Meerdere opnamen tegelijk', note: 'vergelijk ze naast elkaar' },
        { title: 'Miniatuurmodus', note: 'dubbelklik om te verkleinen' },
        { title: 'Muis doorklikbaar', note: 'blokkeert nooit het venster eronder' },
        { title: 'Laatste opname herstellen', note: 'één toets brengt hem terug' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Schermopname',
      title: 'Neem op in 4K, zo lang als nodig is',
      lead: 'Maak van «moeilijk uit te leggen» een opname die iedereen kan volgen.',
      rows: [
        '720p / 1080p / 2K / 4K bij 30 of 60 fps, zonder tijdslimiet',
        'Zet een lichtgewicht GIF in documentatie, chats of issues — geen speler nodig',
      ],
      items: [
        { title: 'Cursor en klikken tonen', note: 'elke stap blijft duidelijk' },
        { title: 'MP4 of GIF', note: 'kwaliteit of bestandsgrootte, jij kiest' },
        { title: 'Klaar voor 4K', note: 'gemaakt voor HiDPI-schermen' },
        { title: 'Geschiedenis', note: 'vind je laatste opname terug' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'AI-mogelijkheden',
      title: 'AI die je schermafbeelding voor je afmaakt',
      lead: 'AI-uitsnede, AI-gum en OCR draaien allemaal lokaal: slim, zonder in te leveren op privacy.',
      rows: [
        'Personen, producten, logo’s: binnen enkele seconden een transparante PNG — geen upload, niet wachten op een server',
        'OCR draait op je apparaat en geeft bewerkbare, kopieerbare tekst terug met één klik',
      ],
      items: [
        { title: 'Onderwerp uitsnijden', note: 'transparante achtergrond met één klik' },
        { title: 'Wissen wat er niet hoort', note: 'AI herstelt wat erachter zat' },
        { title: 'Offline OCR', note: 'gemengde talen, code, tabellen' },
        { title: 'Beeldvertaling', note: 'lees buitenlandse schermafbeeldingen meteen' },
      ],
      image: 'ai',
    },
    {
      eyebrow: 'Twee afrondmodi',
      title: 'Direct kopiëren of meteen annoteren',
      lead: 'Strak en simpel kopieert zodra je loslaat; Direct annoteren opent de werkbalk meteen. Wissel wanneer je wilt via Instellingen → Schermafbeelding.',
      rows: [
        'Strak en simpel — direct gekopieerd, met een kaart rechtsonder die de editor opent',
        'Direct annoteren — de werkbalk verschijnt met de selectie; annoteer zonder van venster te wisselen',
      ],
      image: 'modes',
      reversed: true,
    },
  ],
  cta: {
    eyebrow: 'Gratis beginnen',
    title: 'Maak elke schermafbeelding sneller en slimmer',
    lead: 'Gratis download, binnen enkele seconden geïnstalleerd. Laat het dagelijkse «even een schermafbeelding maken» over aan een tool die het snapt.',
    primary: 'Gratis downloaden',
    secondary: 'Meer versies',
    note: 'Edities Standard en Lite; Windows 10/11+. Verkrijgbaar als installatieprogramma, draagbare versie of MSI.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Een vraag of een idee? Laat het ons weten.',
    lead: 'Loop je tegen een probleem aan, mis je een functie, of wil je gewoon hallo zeggen — kies het kanaal dat je past.',
    replyNote: 'E-mail en GitHub worden elke dag gelezen; meestal antwoorden we binnen 24 werkuren.',
    faqNote: 'Ergens vastgelopen? De meeste antwoorden staan al in de FAQ.',
    faqLink: 'Bekijk de FAQ',
    soon: 'Binnenkort beschikbaar',
    mail: {
      subject: 'Shotera-feedback — ',
      body: [
        'Hallo,',
        '',
        '(Beschrijf hier het probleem dat je tegenkwam, of de functie die je in gedachten hebt.)',
        '',
        '',
        'Deze gegevens helpen ons sneller op weg, als je ze bij de hand hebt:',
        '',
        '\u00b7 Shotera-editie (Lite / Standard):',
        '\u00b7 Windows-versie:',
        '\u00b7 Stappen om het te reproduceren:',
        '',
        'Bedankt!',
      ].join('\n'),
      copied: 'E-mailadres gekopieerd — je e-mailprogramma wordt geopend…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Praat met ons',
        note: 'We lezen elke vorm van feedback aandachtig.',
        channels: [
          {
            key: 'email',
            name: 'E-mail',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Ondersteuning, licenties en samenwerking.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Bugmeldingen, functievoorstellen en oudere versies.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Praat met andere Shotera-gebruikers.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Blijf op de hoogte',
        note: 'Versie-informatie, tips en een kijkje achter de schermen.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Versie-informatie en snelle tips.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Tutorials en uitleg van functies.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Aankondigingen van nieuwe versies.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Snellere, slimmere schermafbeeldingen en schermopnames — vastgepind, geannoteerd en herkend met één sneltoets.',
    cols: [
      {
        title: 'Product',
        links: [
          { text: 'Functies', path: '/', hash: 'features' },
          { text: 'Versies', path: '/versions' },
        ],
      },
      {
        title: 'Ondersteuning',
        links: [
          { text: 'FAQ', path: '/faq' },
          { text: 'Updates', path: '/changelog' },
        ],
      },
      {
        title: 'Over',
        links: [
          { text: 'Over ons', path: '/about' },
          { text: 'Neem contact op', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Voorwaarden', path: '/terms' },
      { text: 'Privacy', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 interfacetalen',
  },
} satisfies V3LocaleCopy;
