import type { FaqContent } from '../faq-types';

/**
 * Dutch FAQ copy. Structure mirrors the English page; wording follows the
 * app's nl language pack.
 */
export const content: FaqContent = {
  metaTitle: 'Veelgestelde vragen',
  metaDescription:
    'Korte antwoorden over Shotera: welke platforms en interfacetalen het ondersteunt, wat offline werkt, wat gratis blijft, hoe export en prestaties werken, en de details zoals thema’s en sneltoetsen.',
  title: 'Veelgestelde vragen',
  lead: 'Platforms, talen, offline privacy, edities, export en details — de korte versie.',
  groups: [
    {
      id: 'platform',
      label: 'Platform en talen',
      items: [
        {
          q: 'Welke besturingssystemen ondersteunt Shotera?',
          a: 'Shotera ondersteunt op dit moment Windows-desktop met een klein installatieprogramma dat snel start en offline werkt — downloaden en direct aan de slag. macOS, Linux en meer platforms staan op de roadmap.',
        },
        {
          q: 'Welke interfacetalen ondersteunt Shotera?',
          a: 'Shotera ondersteunt nu Traditioneel Chinees, Japans, Braziliaans Portugees, Spaans, Duits, Frans, Italiaans, Koreaans, Russisch, Arabisch, Nederlands, Pools en Zweeds. Samen met Engels en Vereenvoudigd Chinees ondersteunt Shotera 15 interfacetalen.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Offline en privacy',
      items: [
        {
          q: 'Hebben OCR en AI-uitsnede een internetverbinding nodig?',
          a: 'Nee. Offline OCR, AI-uitsnede en AI-gum draaien volledig offline op je apparaat — er wordt niets geüpload, je gegevens blijven privé. Beeldvertaling gebruikt cloud-API’s en volgt het privacybeleid van de betreffende cloudaanbieders.',
        },
        {
          q: 'Kan ik Shotera helemaal zonder verbinding gebruiken?',
          a: 'Ja. Vastleggen, annoteren, schermopname, OCR, uitsnede, de gum en de beeldviewer werken allemaal offline, en niets wat je vastlegt verlaat je pc. Beeldvertaling is de enige functie die een cloud-API aanroept, dus die heeft een verbinding nodig.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Edities, export en prestaties',
      items: [
        {
          q: 'Is Shotera gratis?',
          a: 'Vastleggen, annoteren en vastpinnen zijn voor altijd gratis. Als je alleen alledaagse opnamen en annotaties nodig hebt, is Shotera Lite de lichtere versie — die laat schermopname en AI weg. Schermopname, AI-uitsnede, AI-gum en beeldvertaling zitten in Shotera Standard — zie de versievergelijking voor de details.',
        },
        {
          q: 'Welke resoluties en framesnelheden zijn mogelijk bij schermopnames?',
          a: 'De opnamekwaliteit loopt van 720p tot 1080p, 2K en 4K, bij 30 fps of 60 fps — zonder tijdslimiet. Exporteer naar MP4 of naar een GIF waarvan je de framesnelheid kunt verlagen om het bestand klein te houden.',
        },
        {
          q: 'Kunnen schermopnames als GIF worden geëxporteerd?',
          a: 'Ja. Exporteer elke opname naar MP4 — van 720p tot 4K, bij 30 of 60 fps — of naar een compacte GIF voor documentatie, chat en bugmeldingen. Geen van beide opties beperkt de opnameduur.',
        },
        {
          q: 'Wordt mijn computer er langzamer van?',
          a: 'Nee. Shotera is gebouwd om licht te blijven — minimaal geheugengebruik en direct opstarten, zelfs op de achtergrond nauwelijks merkbaar.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Details en aanpassing',
      items: [
        {
          q: 'Heeft Shotera een donkere modus?',
          a: 'Ja. Via Instellingen → Algemeen → Interfacethema wissel je tussen Volg systeem, Licht en Donker; Volg systeem neemt de licht/donker-instelling van Windows automatisch over.',
        },
        {
          q: 'Werkt het met meerdere monitoren en schermen met een hoge resolutie?',
          a: 'Ja. Meerdere monitoren worden als één doorlopend bureaublad behandeld, zodat een tweede scherm links van het hoofdscherm ook correct wordt geselecteerd — en de interface en opnamen blijven scherp op hoog-DPI-schermen.',
        },
        {
          q: 'Kan ik de sneltoetsen aanpassen?',
          a: 'Ja. Schermafbeelding, aangepaste schermafbeelding, vastpinnen en presentatiemodus kun je opnieuw toewijzen via Instellingen → Sneltoetsen; is een toets al in gebruik bij een andere app, dan laat Shotera dat weten, en met één klik zet je alle standaardwaarden terug.',
        },
        {
          q: 'Hoe update ik naar een nieuwe versie?',
          a: 'Shotera werkt zichzelf bij: standaard wordt bij het opstarten gecontroleerd op updates, updates kunnen op de achtergrond worden gedownload en geïnstalleerd, of je controleert handmatig via Instellingen → Updates. De Microsoft Store-versie blijft actueel via de Store.',
        },
      ],
    },
  ],
  footnoteBefore: 'Nog een vraag? ',
  footnoteLink: 'Neem contact op',
  footnoteAfter: ' — we reageren meestal binnen 24 werkuren.',
};
