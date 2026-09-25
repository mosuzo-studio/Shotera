import type { LocaleExtras } from '../locale-extras-types';

/**
 * Swedish copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's Swedish language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Rullande skärmbild',

  home: {
    heroAlt:
      'Shoteras verktyg på skärmen: fångst, rullande skärmbild, anteckningar, inspelning, AI-frilägg, offline-OCR, QR- och streckkodsläsning, översättning och fästning',
    cards: [
      {
        title: 'Rullande skärmbild',
        description:
          'En sida som är högre än skärmen får plats i en enda bild. Rulla själv eller låt Shotera rulla automatiskt — och se den långa bilden fogas samman allt eftersom.',
      },
      {
        title: 'QR- och streckkodsläsning',
        description:
          'Läs koden i en skärmbild — länkar, Wi-Fi, kontakter, streckkoder — och kopiera innehållet. Helt offline.',
      },
      {
        title: 'Bildvisare',
        description:
          'Öppna en skärmbild eller vilken bildfil som helst i ett eget visningsfönster: bläddra i mappen, zooma in och fixa det du behöver — ingen annan app krävs. Vanliga format öppnas direkt.',
      },
    ],
    scrolling: {
      tagline: 'Rullande skärmbild',
      title: 'En sida högre än skärmen, i en enda bild',
      text: 'Hela sidor, långa chattar och fullständiga dokument — fångade uppifrån och ned i en enda bild.',
      alt: 'Rullande skärmbild fogar samman en lång sida till en bild',
      items: [
        {
          title: 'Rulla automatiskt eller själv',
          description:
            'Låt Shotera vandra nedåt på sidan eller rulla för hand. Hur du än gör fångas varje bildruta på vägen.',
        },
        {
          title: 'Se den fogas samman medan den växer',
          description:
            'En förhandsvisning i realtid ligger bredvid markeringen och växer med varje bildruta, så du kan stoppa i samma stund som hela sidan är med.',
        },
        {
          title: 'Inga synliga skarvar',
          description:
            'Intilliggande bildrutor matchas och blandas, så den färdiga långa bilden läses som en sammanhängande sida.',
        },
        {
          title: 'Kopiera eller spara',
          description:
            'Skicka den långa bilden direkt till urklipp eller spara den på disken — redo för dokument, chatt och felrapporter.',
        },
      ],
    },
    stats: [
      { title: 'Språk', amount: '15' },
      { title: 'Betyg', amount: '4.9 / 5' },
      { title: 'Offline-AI', amount: '100%' },
      { title: 'Start via snabbtangent', amount: '<0.1s' },
    ],
    workflow: {
      title: 'Från skärm till delat i tre steg.',
      alt: 'Shoteras arbetsflöde',
      steps: [
        {
          title: 'Tryck på snabbtangenten',
          description:
            'Växla fram Shotera var som helst och håll muspekaren över — fönstret eller elementet du vill ha är redan identifierat.',
        },
        {
          title: 'Anteckna, extrahera eller redigera',
          description:
            'Markera det viktiga, kör OCR, frilägg ett motiv, översätt — i samma fönster.',
        },
        {
          title: 'Kopiera, spara eller fäst',
          description:
            'Skicka till urklipp, spara lokalt eller fäst ovanpå för snabb referens.',
        },
      ],
    },
  },

  about: {
    metaDescription:
      'Om teamet bakom Shotera och varför vi bygger snabba, enkla och diskreta skärmbilder.',
    hero: {
      tagline: 'Om oss',
      title: 'Gör skärmbilder',
      accent: 'så bra att de försvinner',
      subtitle:
        'Shotera började med en enkel frustration: skärmbilderna vi tar dussintals gånger om dagen borde kännas snabbare och smidigare. Vi är ett litet team av produktmänniskor och ingenjörer som lutar oss mot fångstverktyg lika mycket som någon annan — och den besattheten byggde vi in i varje snabbtangent, varje markering, varje bildruta.',
      alt: 'Shoteras anteckningsverktyg över ett Windows-skrivbord',
    },
    stats: [
      { title: 'Språk', amount: '15' },
      { title: 'Betyg', amount: '4.9 / 5' },
      { title: 'Offline-AI', amount: '100%' },
      { title: 'Start via snabbtangent', amount: '<0.1s' },
    ],
    stand: {
      title: 'Det vi står för',
      subtitle:
        'Ju bättre ett verktyg känns, desto mindre lägger man märke till det — den tanken ligger bakom varje beslut vi tar.',
      items: [
        {
          title: 'Snabbhet kommer först',
          description:
            'En snabbtangent räcker för att väcka den, fönster och element identifieras automatiskt och du får exakt den bildruta du menade. Under en sekund från avsikt till fångst.',
        },
        {
          title: 'Lokalt först och privat som standard',
          description:
            'OCR, frilägg och mer körs på enheten där det är möjligt. Dina skärmbilder stannar utanför molnet om du inte säger annat.',
        },
        {
          title: 'Återhållsamhet i designen',
          description:
            'Inga överflödiga funktioner, inget som avbryter flödet. Vanliga saker ligger ett klick bort; avancerade dyker upp bara när du behöver dem.',
        },
      ],
    },
    toolbox: {
      title: '',
      subtitle: '',
      alt: 'Shoteras verktygslåda: fångst, rullande skärmbild, inspelning, AI-frilägg, offline-OCR, bildöversättning, fästning och bildvisaren',
      items: [
        {
          title: 'Fångst',
          description:
            'Smart identifiering av fönster och element — rätt bildruta är redan vald, så du drar sällan en ruta för hand.',
        },
        {
          title: 'Rullande skärmbild',
          description:
            'Rulla en sida eller en lång chatt och låt Shotera sy ihop den till en enda lång bild — automatiskt eller för hand, med förhandsvisning i realtid.',
        },
        {
          title: 'Skärminspelning och GIF',
          description:
            'Spela in skärmen och exportera till en lättviktig GIF; markeringar av pekare och klick håller demon tydlig.',
        },
        {
          title: 'AI-frilägg',
          description:
            'Identifiera motivet och ta bort bakgrunden med ett klick och exportera genomskinliga PNG:er. Ingen Photoshop.',
        },
        {
          title: 'Offline-OCR',
          description:
            'Extrahera text ur vilken skärmbild som helst, på din enhet, på flera språk. Kopiera och klistra in — helt offline.',
        },
        {
          title: 'Bildöversättning',
          description:
            'Känn igen och översätt text i vilken bild som helst direkt — utländska dokument, diagram och gränssnitt blir läsbara.',
        },
        {
          title: 'Fäst på skärmen',
          description:
            'Håll vilken skärmbild som helst flytande ovanpå som referens, ordnad sida vid sida utan röra.',
        },
        {
          title: 'Bildvisare',
          description:
            'Öppna en skärmbild eller vilken bildfil som helst i ett eget fönster — bläddra i en mapp, zooma in och fixa det du behöver.',
        },
      ],
    },
    values: {
      title: 'Våra värderingar',
      subtitle:
        'Att bygga ett verktyg och att använda ett är samma sak för oss. Vi arbetar i det vi skapar, varje dag.',
      items: [
        {
          title: 'Byggt för riktigt arbete',
          description:
            'Varje funktion kommer från en verklig smärtpunkt — skriva dokumentation, kommentera designspecifikationer, spela in repro-steg, läsa utländskt material. Vi använder den själva först och ger den sedan till dig.',
        },
        {
          title: 'Ständig förfining',
          description:
            'Känslan i snabbtangenter, kantfastning vid markeringar, inspelningens storlek mot skärpa — vi finjusterar detaljerna tills de känns rätt.',
        },
        {
          title: 'Respekt för användare',
          description:
            'Ingen medföljande programvara, inga tjatiga popup-fönster, ingen tyst uppladdning av dina data. Kärnfunktionerna förblir gratis — det är vårt löfte.',
        },
      ],
    },
    history: {
      title: 'Hur vi hamnade här',
      subtitle:
        'Från ett verktyg vi byggde för oss själva till ett som människor litar på varje dag.',
      cta: 'Ladda ner Shotera gratis',
      items: [
        {
          title: 'Började med vårt eget behov',
          description:
            'Vi hittade inget fångstverktyg som var snabbt och smidigt nog, så vi skrev ett eget.',
        },
        {
          title: 'Växt genom våra användare',
          description:
            'Rullande skärmbild, AI-frilägg, offline-OCR, bildöversättning — många funktioner kom direkt från användarfeedback.',
        },
        {
          title: 'Når fler människor',
          description:
            'I dag talar Shotera 15 gränssnittsspråk och växer vidare — med samma mål: att göra skärmbilder enkla.',
        },
      ],
    },
    contact: {
      title: 'Hör av dig',
      tagline: 'Kontakta oss när som helst',
      items: [
        {
          title: 'Community',
          description:
            'Gå med i Shoteras community för nya versioner, tips och en direkt kanal för att säga vad du tycker.',
        },
        {
          title: 'E-postsupport',
          description:
            'Stötte du på ett problem eller har du en idé till en funktion? Skicka e-post till mosuzo.studio@gmail.com — vi läser och svarar på varje meddelande.',
        },
      ],
    },
  },
};
