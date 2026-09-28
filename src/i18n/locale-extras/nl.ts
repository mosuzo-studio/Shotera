import type { LocaleExtras } from '../locale-extras-types';

/**
 * Dutch copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's Dutch language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Scrollende schermafbeelding',

  home: {
    heroAlt:
      'Shotera-gereedschap op het scherm: vastleggen, scrollende schermafbeelding, annoteren, opnemen, AI-uitsnede, offline OCR, QR- en barcodes scannen, vertaling en vastpinnen',
    cards: [
      {
        title: 'Scrollende schermafbeelding',
        description:
          'Een pagina die langer is dan het scherm past toch in één opname. Scroll zelf of laat Shotera automatisch scrollen en zie de lange opname al groeiend aan elkaar worden gezet.',
      },
      {
        title: 'QR- en barcodes scannen',
        description:
          'Lees de code in een screenshot — links, Wi-Fi, contacten, barcodes — en kopieer wat erin zit. Volledig offline.',
      },
      {
        title: 'Beeldviewer',
        description:
          'Open een opname of een willekeurig afbeeldingsbestand in een eigen viewervenster: blader door de map, zoom in en verbeter wat nodig is — geen andere app nodig. Veelgebruikte formaten openen meteen.',
      },
    ],
    scrolling: {
      tagline: 'Scrollende schermafbeelding',
      title: 'Een pagina die langer is dan het scherm, in één opname',
      text: 'Hele pagina’s, lange chats en volledige documenten — van boven tot onder vastgelegd in één afbeelding.',
      alt: 'Scrollende schermafbeelding voegt een lange pagina samen tot één afbeelding',
      items: [
        {
          title: 'Automatisch scrollen of zelf scrollen',
          description:
            'Laat Shotera de pagina stap voor stap naar beneden gaan of scroll met de hand. Hoe dan ook wordt elk beeld onderweg vastgelegd.',
        },
        {
          title: 'Zie het groeien tijdens het samenvoegen',
          description:
            'Een live voorbeeld staat naast de selectie en groeit met elk beeld mee, zodat je kunt stoppen zodra de hele pagina erin staat.',
        },
        {
          title: 'Geen zichtbare naden',
          description:
            'Aangrenzende beelden worden op elkaar afgestemd en samengevoegd, zodat de lange opname als één doorlopende pagina leest.',
        },
        {
          title: 'Kopiëren of opslaan',
          description:
            'Stuur de lange opname direct naar het klembord of sla hem op schijf op — klaar voor documentatie, chat en bugmeldingen.',
        },
      ],
    },
    stats: [
      { title: 'Talen', amount: '15' },
      { title: 'Beoordeling', amount: '4.9 / 5' },
      { title: 'Offline AI', amount: '100%' },
      { title: 'Opstarten via sneltoets', amount: '<0.1s' },
    ],
    workflow: {
      title: 'Van scherm naar gedeeld in drie stappen.',
      alt: 'Shotera-workflow',
      steps: [
        {
          title: 'Druk op de sneltoets',
          description:
            'Roep Shotera overal op en zweef met de muis — het venster of element dat je wilt, is al gedetecteerd.',
        },
        {
          title: 'Annoteer, extraheer of bewerk',
          description:
            'Markeer de belangrijke delen, voer OCR uit, snijd een onderwerp uit, vertaal — in hetzelfde venster.',
        },
        {
          title: 'Kopieer, sla op of pin vast',
          description: 'Stuur het naar het klembord, sla het lokaal op of pin het bovenaan voor snelle referentie.',
        },
      ],
    },
  },

  about: {
    statsTitle: 'Shotera in één oogopslag',
    metaDescription: 'Over het team achter Shotera en waarom we snelle, eenvoudige en onopvallende screenshots bouwen.',
    hero: {
      tagline: 'Over ons',
      title: 'Maak screenshots',
      accent: 'goed genoeg om te verdwijnen',
      subtitle:
        'Shotera begon met een simpele frustratie: de opnamen die we dagelijks tientallen keren maken, zouden sneller en soepeler moeten voelen. We zijn een klein team van productmensen en engineers die net zo zwaar op vastleggereedschap leunen als iedereen — en die obsessie zit in elke sneltoets, elke selectie, elk beeld.',
      alt: 'Shotera-annotatietools over een Windows-bureaublad',
    },
    stats: [
      { title: 'Talen', amount: '15' },
      { title: 'Beoordeling', amount: '4.9 / 5' },
      { title: 'Offline AI', amount: '100%' },
      { title: 'Opstarten via sneltoets', amount: '<0.1s' },
    ],
    stand: {
      title: 'Waar we voor staan',
      subtitle:
        'Hoe beter een tool aanvoelt, hoe minder je hem opmerkt — dat idee zit achter elke beslissing die we nemen.',
      items: [
        {
          title: 'Snelheid staat voorop',
          description:
            'Eén sneltoets om het op te roepen, automatische detectie van vensters en elementen, en precies het beeld dat je bedoelde. Binnen een seconde van intentie naar opname.',
        },
        {
          title: 'Lokaal eerst, standaard privé',
          description:
            'OCR, uitsnede en meer draaien waar mogelijk op het apparaat. Je screenshots blijven buiten de cloud, tenzij je anders aangeeft.',
        },
        {
          title: 'Terughoudendheid als ontwerp',
          description:
            'Geen onnodige functies, geen onderbreking van je flow. Gewone dingen zijn één klik weg; geavanceerde komen alleen tevoorschijn wanneer je ze nodig hebt.',
        },
      ],
    },
    core: {
      title: 'Kernmogelijkheden',
      subtitle:
        'Schermafbeelding, lange schermafbeelding, vastpinnen, schermopname, offline OCR en AI op je apparaat — de zes dingen waar je de hele dag naar grijpt, op één sneltoets afstand.',
      alt: 'Shotera-annotatietools over een Windows-bureaublad: selectie, werkbalk en glazen tegels.',
      items: [
        {
          title: 'Schermafbeelding',
          description:
            'Slimme detectie van vensters en elementen — het gewenste kader is al gekozen, zodat je zelden handmatig een kader sleept. Rond af door direct te kopiëren of open de annotatiewerkbalk — twee manieren om af te ronden, jij kiest.',
        },
        {
          title: 'Lange schermafbeelding',
          description:
            'Scroll een pagina of een lange chat en laat Shotera er één lange opname van maken — automatisch of met de hand, met live voorbeeld.',
        },
        {
          title: 'Vastpinnen op bureaublad',
          description: 'Houd elke screenshot zwevend bovenop als referentie, naast elkaar gerangschikt zonder rommel.',
        },
        {
          title: 'Schermopname & GIF',
          description:
            'Neem je scherm op en exporteer naar een lichtgewicht GIF; cursoraccenten en kliksignalen houden demo’s duidelijk.',
        },
        {
          title: 'Offline OCR',
          description:
            'Haal tekst uit elke screenshot, op je apparaat en in meerdere talen. Kopieer en plak — volledig offline.',
        },
        {
          title: 'AI-uitsnede & AI-gum',
          description:
            'AI-uitsnede verwijdert de achtergrond met één klik en exporteert een transparante PNG; AI-gum wist rommel en watermerken weg. Beide draaien op lokale modellen — er wordt niets geüpload.',
        },
      ],
    },
    more: {
      title: 'Meer mogelijkheden',
      subtitle: 'Het zijn de details die beklijven — annotatie, herkenning, weergave en de instellingen eromheen.',
      items: [
        {
          title: 'Annotatietools',
          description:
            'Rechthoek/ellips, lijn/pijl, penseel, markeerstift, mozaïek/vervaging, tekst, nummering, emoji-stickers, loep en gum — annoteer op het moment van vastleggen.',
        },
        {
          title: 'Emoji-stickers',
          description:
            'Honderden emoji-stickers — duim omhoog, hartjes, lachjes, confetti — vrij te schalen en overal te plaatsen voor een luchtige noot.',
        },
        {
          title: 'Beeldviewer & editor',
          description:
            'Open een opname of een willekeurig afbeeldingsbestand in een eigen viewervenster — blader door een map, zoom in en verbeter wat je nodig hebt. Veelgebruikte formaten openen meteen.',
        },
        {
          title: 'Beeldvertaling',
          description:
            'Herken en vertaal tekst in elke afbeelding meteen — buitenlandse documenten, grafieken en interfaces worden leesbaar.',
        },
        {
          title: 'QR- en barcodes scannen',
          description:
            'Lees QR-codes en barcodes ter plekke: links, Wi-Fi, contacten, productcodes — het resultaat is met één klik gekopieerd, volledig offline.',
        },
        {
          title: 'Aangepaste schermafbeelding',
          description:
            'Vaste grootte, verhouding, vertraging en schermcoördinaten — handig voor assets en batchopnamen.',
        },
        {
          title: 'Meerdere monitoren',
          description:
            'Elk scherm in één coördinatensysteem, zodat ook secundaire en uitgebreide schermen correct worden geselecteerd — en opnamen scherp blijven op hoog-DPI-schermen.',
        },
        {
          title: 'Donkere modus',
          description: 'Volg het systeem, of schakel handmatig tussen licht en donker.',
        },
        {
          title: 'Presentatiemodus',
          description:
            'Ruim het bureaublad in één toets op — vensters, pictogrammen en achtergrond — en zet daarna alles weer terug.',
        },
      ],
    },
    values: {
      title: 'Onze waarden',
      subtitle: 'Een tool bouwen en er zelf mee werken is voor ons hetzelfde. We werken elke dag in wat we maken.',
      items: [
        {
          title: 'Gebouwd voor echt werk',
          description:
            'Elke functie komt voort uit een echte pijn: documentatie schrijven, designspecificaties annoteren, repro’s opnemen, buitenlands materiaal lezen. We gebruiken het eerst zelf en geven het dan aan jou.',
        },
        {
          title: 'Altijd verfijnen',
          description:
            'Het gevoel van sneltoetsen, het vastklikken van randen bij selecties, opnamegrootte tegenover helderheid — we blijven sleutelen aan de details tot ze goed voelen.',
        },
        {
          title: 'Respect voor gebruikers',
          description:
            'Geen bundelsoftware, geen opdringerige pop-ups, geen stille upload van je gegevens. Kernfuncties blijven gratis — dat is onze belofte.',
        },
      ],
    },
    history: {
      title: 'Hoe we hier kwamen',
      subtitle: 'Van een tool die we voor onszelf bouwden tot een waar mensen dagelijks op vertrouwen.',
      cta: 'Download Shotera gratis',
      items: [
        {
          title: 'Begon met onze eigen behoefte',
          description:
            'We konden geen vastleggereedschap vinden dat snel en soepel genoeg was, dus schreven we er zelf een.',
        },
        {
          title: 'Gegroeid door onze gebruikers',
          description:
            'Scrollende schermafbeelding, AI-uitsnede, offline OCR, beeldvertaling — heel wat functies kwamen rechtstreeks uit gebruikersfeedback.',
        },
        {
          title: 'Steeds meer mensen bereiken',
          description:
            'Vandaag spreekt Shotera 15 interfacetalen en het groeit door — met hetzelfde doel: screenshots eenvoudig maken.',
        },
      ],
    },
    contact: {
      title: 'Neem contact op',
      tagline: 'Bereik ons wanneer je wilt',
      items: [
        {
          title: 'Community',
          description:
            'Sluit je aan bij de Shotera-community voor nieuwe releases, tips en een directe lijn om te laten weten wat je ervan vindt.',
        },
        {
          title: 'E-mailsupport',
          description:
            'Loop je tegen een probleem aan of heb je een idee voor een functie? Mail naar mosuzo.studio@gmail.com — we lezen en beantwoorden elk bericht.',
        },
      ],
    },
  },
};
