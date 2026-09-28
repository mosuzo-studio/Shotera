import type { FaqContent } from '../faq-types';

/**
 * Swedish FAQ copy. Structure mirrors the English page; wording follows the
 * app's sv language pack.
 */
export const content: FaqContent = {
  metaTitle: 'Vanliga frågor',
  metaDescription:
    'Korta svar om Shotera: vilka plattformar och gränssnittsspråk som stöds, vad som fungerar offline, vad som förblir gratis, hur export och prestanda fungerar, och detaljerna som teman och snabbtangenter.',
  title: 'Vanliga frågor',
  lead: 'Plattformar, språk, offline och integritet, versioner, export och detaljer — den korta versionen.',
  groups: [
    {
      id: 'platform',
      label: 'Plattform och språk',
      items: [
        {
          q: 'Vilka operativsystem stöder Shotera?',
          a: 'Shotera stöder i dag Windows för skrivbordet med ett litet installationsprogram som startar snabbt och fungerar offline — ladda ned och börja använda direkt. macOS, Linux och fler plattformar finns med i planerna.',
        },
        {
          q: 'Vilka gränssnittsspråk stöder Shotera?',
          a: 'Shotera stöder nu traditionell kinesiska, japanska, brasiliansk portugisiska, spanska, tyska, franska, italienska, koreanska, ryska, arabiska, nederländska, polska och svenska. Tillsammans med engelska och förenklad kinesiska stöder Shotera 15 gränssnittsspråk.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Offline och integritet',
      items: [
        {
          q: 'Kräver OCR och AI-frilägg en internetanslutning?',
          a: 'Nej. OCR, AI-frilägg och AI-radering körs helt offline på din enhet — inget laddas upp och dina data förblir privata. Bildöversättning använder moln-API:er och följer respektive molnleverantörs integritetspolicy.',
        },
        {
          q: 'Kan jag använda Shotera helt utan anslutning?',
          a: 'Ja. Skärmbild, anteckning, skärminspelning, OCR, AI-frilägg, AI-radering och bildvisaren fungerar alla offline, och inget du fångar lämnar datorn. Bildöversättning är den enda funktionen som använder ett moln-API, så den behöver en anslutning.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Versioner, export och prestanda',
      items: [
        {
          q: 'Är Shotera gratis?',
          a: 'Skärmbild, anteckningar och fäst på skrivbordet är gratis för alltid. Om du bara behöver vardagliga skärmbilder och anteckningar finns Shotera Lite som en mindre version — utan skärminspelning och AI. Skärminspelning, AI-frilägg, AI-radering och bildöversättning ingår i Shotera Standard — se versionjämförelsen för mer information.',
        },
        {
          q: 'Vilka upplösningar och bildfrekvenser kan inspelningar använda?',
          a: 'Inspelningskvaliteten sträcker sig från 720p upp till 1080p, 2K och 4K, i 30 eller 60 fps — utan tidsgräns. Exportera till MP4, eller till en GIF där du kan sänka bildfrekvensen för att hålla filen liten.',
        },
        {
          q: 'Kan inspelningar exporteras som GIF?',
          a: 'Ja. Exportera valfri inspelning till MP4 — från 720p upp till 4K, i 30 eller 60 fps — eller till en kompakt GIF för dokumentation, chatt och felrapporter. Ingen av dem begränsar hur länge du spelar in.',
        },
        {
          q: 'Gör Shotera datorn långsammare?',
          a: 'Nej. Shotera är byggt för att vara lättviktigt — minimalt minnesbruk och snabb start, knappt märkbart även när det kör i bakgrunden.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Detaljer och anpassning',
      items: [
        {
          q: 'Har Shotera ett mörkt läge?',
          a: 'Ja. Under Inställningar → Allmänt → Gränssnittstema växlar du mellan Följ system, Ljust och Mörkt; Följ system följer Windows ljusa och mörka läge automatiskt.',
        },
        {
          q: 'Fungerar Shotera med flera skärmar och skärmar med hög upplösning?',
          a: 'Ja. Flera skärmar behandlas som ett enda sammanhängande skrivbord, så en sekundär skärm till vänster om huvudskärmen markeras ändå korrekt — och både gränssnittet och skärmbilderna förblir skarpa på skärmar med hög DPI.',
        },
        {
          q: 'Kan jag ändra snabbtangenterna?',
          a: 'Ja. Skärmbild, anpassad skärmbild, fäst på skrivbordet och presentationsläge kan alla ändras under Inställningar → Snabbtangenter; om ett annat program redan använder en tangent säger Shotera till, och du kan återställa alla standardvärden med ett klick.',
        },
        {
          q: 'Hur uppdaterar jag till en ny version?',
          a: 'Shotera uppdaterar sig själv: det söker efter uppdateringar vid start som standard, kan hämta och installera dem i bakgrunden, eller så söker du manuellt under Inställningar → Uppdatering. Utgåvan från Microsoft Store hålls uppdaterad via Store.',
        },
      ],
    },
  ],
  footnoteBefore: 'Har du fortfarande en fråga? ',
  footnoteLink: 'Kontakta oss',
  footnoteAfter: ' — vi svarar oftast inom 24 arbetstimmar.',
};
