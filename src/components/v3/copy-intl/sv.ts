import type { V3LocaleCopy } from './types';

/**
 * Swedish copy for the v3 pages. Terminology follows the Shotera app's sv
 * language pack.
 */
export default {
  home: 'Shotera — Snabbare och smartare skärmbilder och skärminspelning',
  nav: {
    features: 'Funktioner',
    versions: 'Versioner',
    changelog: 'Uppdateringar',
    about: 'Om',
    faq: 'Vanliga frågor',
    menu: 'Meny',
    language: 'Språk',
    cta: 'Ladda ned gratis',
  },
  hero: {
    badge: 'Nytt',
    announce: 'Lite-versionen: bara ~17 MB att installera',
    modes: [
      {
        key: 'capture',
        label: 'Skärmbild',
        caption: 'Fönster och gränssnittselement identifieras medan du hovrar — rätt område redan på första försöket.',
      },
      {
        key: 'long',
        label: 'Rullande skärmbild',
        caption: 'Långa sidor och långa chattar — fogas samman till en enda bild, automatiskt eller för hand.',
      },
      {
        key: 'pin',
        label: 'Fäst på skrivbordet',
        caption: 'Fäst skärmbilder ovanpå allt annat — skala, tona, jämför sida vid sida.',
      },
      {
        key: 'record',
        label: 'Skärminspelning',
        caption: '720p till 4K i hög bildfrekvens, markeringar av pekare och klick, exportera MP4 eller GIF.',
      },
      {
        key: 'ai',
        label: 'AI',
        caption: 'AI-frilägg, AI-radering och offline-OCR — allt bearbetas på din enhet.',
      },
    ],
    h1: [
      [{ text: 'Skärmbilder, skärminspelning, ' }, { text: 'AI-magi', hl: true }],
      [{ text: 'allt med en enda snabbtangent' }],
    ],
    sub: 'Shotera är ett fångstverktyg för skrivbordet, byggt för dig som tar skärmbilder hela dagen: anteckna, rulla långa sidor, spela in till GIF, frilägg motiv med AI, kör offline-OCR, översätt bilder och fäst referenser — utan att lämna flödet.',
    primary: 'Ladda ned gratis',
    secondary: 'Se hur det fungerar',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Installationsprogram / portabel / MSI',
    store: 'Finns även i Microsoft Store',
    shellMonitor: 'Bildskärm i aluminium',
    shellLaptop: 'Bärbar dator',
  },
  download: {
    more: 'Fler nedladdningsalternativ',
    menu: 'Nedladdningsalternativ',
    edition: 'Shotera Standard',
    setup: 'Installationsprogram (.exe)',
    portable: 'Portabel version (.7z)',
    msi: 'MSI-installationspaket',
    store: 'Microsoft Store',
    setupTip: 'Dubbelklicka för att installera. Det de flesta vill ha.',
    portableTip: 'Packa upp och kör — den kan ligga på ett USB-minne.',
    msiTip: 'Körs oftast av IT-ansvariga för att rulla ut appen på många datorer.',
    storeTip: 'Versionen som finns i Microsoft Store, för dig som helst hämtar appar därifrån.',
    recommend: 'Rekommenderas',
    allVersions: 'Alla versioner på GitHub',
  },
  trust: [
    { value: '15', label: 'gränssnittsspråk' },
    { value: '4.9 / 5', label: 'användarbetyg' },
    { value: '100%', label: 'AI på enheten' },
    { value: '<0.1s', label: 'start via snabbtangent' },
  ],
  modesSection: {
    bestFor: 'BÄST FÖR',
    eyebrow: 'Tre vardagsflöden',
    title: 'En snabbtangent för varje fångst',
    lead: 'Skärmbild, fäst bild, skärminspelning och GIF — de tre jobben du gör varje dag, med en och samma snabbtangent.',
    cards: [
      {
        icon: 'capture',
        title: 'Skärmbild',
        one: 'Område, fönster eller hela skärmen med ett enda tangenttryck — fönster och gränssnittselement identifieras åt dig.',
        steps: ['Tryck på snabbtangenten', 'Hovra så fångas gränserna', 'Anteckna, kopiera eller spara'],
        bestFor: 'vardaglig delning och dokumentation',
      },
      {
        icon: 'pin',
        title: 'Fäst på skrivbordet',
        one: 'Låt en skärmbild flyta ovanpå allt annat så länge du behöver den.',
        steps: ['Fäst direkt efter fångsten', 'Skala, tona, jämför', 'Slipp jonglera med fönster'],
        bestFor: 'referenser och arbete sida vid sida',
      },
      {
        icon: 'record',
        title: 'Skärminspelning & GIF',
        one: '720p upp till 4K i 30 eller 60 fps, utan tidsgräns för inspelningen.',
        steps: ['Välj område och spela in', 'Visa pekare och klick', 'Exportera MP4 eller GIF'],
        bestFor: 'guider och felrapporter',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Skärmbild',
      title: 'Fånga med ett tryck, rama in exakt',
      lead: 'Växla fram den med en snabbtangent och fånga, anteckna och kopiera i en obruten rörelse.',
      rows: [
        'Hovra, så låser Shotera in fönstret eller elementet under muspekaren',
        'Pilar, rutor, text, numrering, emoji, förstoringsglas — anteckna i samma stund som du fångar',
        'Två sätt att avsluta: kopiera direkt till urklipp, eller anteckna på en gång (Elegant / Direktanteckna)',
      ],
      items: [
        { title: 'Emoji-klistermärken', note: 'säg mer med ett klick' },
        { title: 'Förstoringsglas', note: 'zooma in i detaljen' },
        { title: 'Numrering', note: 'visa läsordningen' },
        { title: 'Mosaik & överstrykningspenna', note: 'integritet och betoning' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Rullande skärmbild',
      title: 'En sida högre än skärmen, i en enda bild',
      lead: 'Hela sidor, långa chattar och fullständiga dokument — fångade uppifrån och ned i en enda bild.',
      rows: [
        'Låt Shotera rulla automatiskt, eller rulla själv — varje bildruta fångas på vägen',
        'Intilliggande bildrutor matchas och blandas, så den färdiga långa bilden har inga synliga skarvar',
      ],
      items: [
        { title: 'Förhandsvisning i realtid', note: 'stoppa när hela sidan är med' },
        { title: 'Inga synliga skarvar', note: 'läses som en sammanhängande sida' },
        { title: 'Långa chattar', note: 'hela tråden i en bild' },
        { title: 'Kopiera eller spara', note: 'redo för dokument och ärenden' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Fäst på skrivbordet',
      title: 'Fäst referenser ovanpå och arbeta bredvid dem',
      lead: 'Klistra in en skärmbild ovanpå allt annat — jämför, ha den som referens och arbeta vidare utan att växla fönster.',
      rows: [
        'Fäst en skärmbild högst upp på skärmen utan att tappa flödet',
        'Ändra storlek från vilken kant eller hörn som helst med låst bildförhållande; dubbelklicka för att växla mellan originalstorlek och miniatyr',
      ],
      items: [
        { title: 'Flera fästa bilder samtidigt', note: 'jämför sida vid sida' },
        { title: 'Miniatyrläge', note: 'dubbelklicka för att förminska' },
        { title: 'Musgenomsläpp', note: 'blockerar aldrig fönstret under' },
        { title: 'Återställ senaste fästa bild', note: 'en tangent hämtar tillbaka den' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Skärminspelning',
      title: 'Spela in i 4K, så länge du behöver',
      lead: 'Förvandla ”svårt att förklara” till ett klipp som alla kan följa.',
      rows: [
        '720p / 1080p / 2K / 4K i 30 eller 60 fps, utan tidsgräns för inspelningen',
        'Klistra in en lättviktig GIF i dokument, chattar eller ärenden — ingen spelare behövs',
      ],
      items: [
        { title: 'Visa pekare och klick', note: 'varje steg förblir tydligt' },
        { title: 'MP4 eller GIF', note: 'kvalitet eller filstorlek, du väljer' },
        { title: 'Redo för 4K', note: 'byggd för HiDPI-skärmar' },
        { title: 'Historik', note: 'hitta din senaste inspelning' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'AI-funktioner',
      title: 'AI som gör klart skärmbilden åt dig',
      lead: 'AI-frilägg, AI-radering och OCR körs alla lokalt: intelligens utan att offra integriteten.',
      rows: [
        'Personer, produkter, logotyper: en genomskinlig PNG på några sekunder — ingen uppladdning, ingen väntan på en server',
        'OCR körs på din enhet och ger dig redigerbar, kopierbar text med ett klick',
      ],
      items: [
        { title: 'Frilägg ett motiv', note: 'genomskinlig bakgrund med ett klick' },
        { title: 'Radera det som inte hör dit', note: 'AI återskapar bakgrunden' },
        { title: 'Offline-OCR', note: 'blandade språk, kod, tabeller' },
        { title: 'Bildöversättning', note: 'läs utländska skärmbilder direkt' },
      ],
      image: 'ai',
    },
  ],
  cta: {
    eyebrow: 'Gratis att börja',
    title: 'Gör varje skärmbild snabbare och smartare',
    lead: 'Gratis nedladdning, installerad på några sekunder. Ge vardagens ”ta bara en skärmbild” till ett verktyg som förstår uppgiften.',
    primary: 'Ladda ned gratis',
    secondary: 'Fler versioner',
    note: 'Utgåvorna Standard och Lite; Windows 10/11+. Installationsprogram / portabel / MSI.',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Har du en fråga eller en idé? Hör av dig.',
    lead: 'Stötte du på ett problem, vill du ha en ny funktion eller vill du bara säga hej? Välj den kanal som passar dig.',
    replyNote: 'Vi läser e-post och GitHub varje dag och svarar oftast inom 24 arbetstimmar.',
    faqNote: 'Fastnat på något? De flesta svaren finns redan under vanliga frågor.',
    faqLink: 'Läs vanliga frågor',
    soon: 'Kommer snart',
    mail: {
      subject: 'Shotera-feedback — ',
      body: [
        'Hej,',
        '',
        '(Beskriv problemet du stötte på, eller funktionen du har i tankarna.)',
        '',
        '',
        'Om du kan, hjälper de här uppgifterna oss att svara snabbare:',
        '',
        '\u00b7 Shotera-utgåva (Lite / Standard):',
        '\u00b7 Windows-version:',
        '\u00b7 Steg för att återskapa:',
        '',
        'Tack!',
      ].join('\n'),
      copied: 'E-postadressen har kopierats — öppnar din e-postapp…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Prata med oss',
        note: 'Vi läser all feedback noga.',
        channels: [
          {
            key: 'email',
            name: 'E-post',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Support, licensiering, partnerskap.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Felrapporter, funktionsönskemål, äldre versioner.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Chatta med andra Shotera-användare.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Följ oss',
        note: 'Versionsnyheter, tips och en titt bakom kulisserna.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Versionsnyheter och snabba tips.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Guider och genomgångar av funktioner.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Meddelanden om nya versioner.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Snabbare och smartare skärmbilder och skärminspelning — fästa, antecknade och tolkade med en enda snabbtangent.',
    cols: [
      {
        title: 'Produkt',
        links: [
          { text: 'Funktioner', path: '/', hash: 'features' },
          { text: 'Versioner', path: '/versions' },
        ],
      },
      {
        title: 'Support',
        links: [
          { text: 'Vanliga frågor', path: '/faq' },
          { text: 'Uppdateringar', path: '/changelog' },
        ],
      },
      {
        title: 'Om',
        links: [
          { text: 'Om oss', path: '/about' },
          { text: 'Kontakta oss', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Villkor', path: '/terms' },
      { text: 'Integritet', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 gränssnittsspråk',
  },
} satisfies V3LocaleCopy;
