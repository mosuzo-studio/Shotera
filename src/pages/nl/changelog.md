---
title: 'Updates'
layout: '~/layouts/MarkdownLayout.astro'
---

# Shotera-versie-informatie – alle versies (Nederlands)

**📫 Feedback**

Instellingen → Over → Feedback en suggesties

**🔗 Versie-index**

<ul class="version-index">
  <li><a href="#shotera-v770">v7.7.0</a></li>
  <li><a href="#shotera-v760">v7.6.0</a></li>
  <li><a href="#shotera-v751">v7.5.1</a></li>
  <li><a href="#shotera-v750">v7.5.0</a></li>
  <li><a href="#shotera-v742">v7.4.2</a></li>
  <li><a href="#shotera-v741">v7.4.1</a></li>
  <li><a href="#shotera-v740">v7.4.0</a></li>
  <li><a href="#shotera-v731">v7.3.1</a></li>
  <li><a href="#shotera-v730">v7.3.0</a></li>
  <li><a href="#shotera-v722">v7.2.2</a></li>
  <li><a href="#shotera-v721">v7.2.1</a></li>
  <li><a href="#shotera-v720">v7.2.0</a></li>
  <li><a href="#shotera-v710">v7.1.0</a></li>
  <li><a href="#shotera-v700">v7.0.0</a></li>
</ul>

---

## Shotera v7.7.0

**Uitgebracht:** 2026-09-24

Lite-versie, lange schermafbeelding, schaalbare vastgepinde vensters en lichtere builds.

**🆚 Lite vs. volledige versie:** de functieverschillen staan in de [versievergelijking](/nl/versions).

**✨ Nieuwe functies**

- Nieuwe Lite-versie: installer van 17 MB met de belangrijkste functies voor schermafbeelding en annotatie. Een upgradebanner in Instellingen verwijst naar de volledige versie op de website.
- De [officiële website](https://shotera.mosuzo.com/) is vernieuwd in inhoud en vormgeving.
- Nieuwe lange schermafbeelding (preview, bètatest): automatische en handmatige scrollmodus met een realtime voorbeeldvenster. Een slim stitch-algoritme herkent de bovenrand en verwerkt gemengde lay-outs. Aanwijzingen helpen je bij het eerste gebruik. Sluit je bij de bètagroep aan om mee te testen.
- Verbeteringen aan vastgepinde vensters: dubbelklikken schakelt tussen de oorspronkelijke grootte en de miniatuurmodus met sluitknop. Sleep randen of hoeken om te schalen met behoud van de verhouding. Het native contextmenu reikt buiten de venstergrenzen. De zichtbaarheid van de werkbalk blijft bewaard tussen sessies ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- Het AI-uitsnijmodel gebruikt nu het ingebouwde u2netp en werkt daardoor direct. rmbg-1.4 wordt nu op verzoek gedownload, met uitleg bij het eerste gebruik.
- Nieuwe afdrukopdracht in de editor: het rechtermuisknopmenu en het menu Bestand openen het systeemafdrukvenster ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- Het contextmenu van de editor kan de map met het bestand openen en het bestand markeren ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Verbeteringen**

- Buildgrootte met 20% verkleind: installercompressie en compilerinstellingen geoptimaliseerd. Nieuw FastBuild-profiel voor snellere iteraties.
- Het basale geheugengebruik is verlaagd.
- De titelbalk van de editor toont dynamisch de bestandsnaam van de huidige afbeelding.
- De melding bij een geslaagde update is vereenvoudigd tot logo + tekst + knop, zonder grote voorvertoning.
- De onboarding is verfijnd: de gids van 8 pagina's is verplaatst naar de uitnodigingskaart rechtsonder. Het venster met nieuwe functies stopt na 3 keer sluiten. AI-uitsnijden toont uitleg bij het eerste gebruik.
- AI-afbeeldingsvertaling waarschuwt wanneer de uitvoer gelijk is aan de invoer en verwijst naar de taalinstellingen. De waarschuwing is uit te zetten in Instellingen → AI-mogelijkheden.
- De standaardbestandsnaam voor schermafbeeldingen, lange schermafbeeldingen en editoruitvoer is gelijkgetrokken naar `Shotera_YYYYMMDD_HHMMSS`.
- De miniatuur in de melding van de lange schermafbeelding toont het bovenste schermdeel in plaats van de hele afbeelding plat te drukken.

**🐞 Bugfixes**

- De beginpositie van het annotatievenster op dualmonitoropstellingen is gecorrigeerd.
- Rekenfouten in de verhouding en trillende randen bij het schalen van vastgepinde vensters zijn opgelost.
- Dubbelklikken werkte niet na een selectie en keerde niet terug naar de oorspronkelijke grootte: opgelost.
- Het dialoogvenster bij een mislukte samenvoeging van de lange schermafbeelding werd geblokkeerd door de doorklikregels: opgelost.
- Spookscrollbalken en een zoomweergave van 0% of 1% na het laden van afbeeldingen in de editor zijn opgelost.
- De titelbalk van de editor toonde dubbele bestandsnamen: opgelost.

**🙏 Dankbetuiging**

Dank aan de communityleden die problemen meldden en functies voorstelden die deze release hebben gevormd. De lange schermafbeelding en de verbeteringen aan vastgepinde vensters kwamen voort uit gebruikersfeedback.

---

## Shotera v7.6.0

**Uitgebracht:** 2026-09-21

Een venster met nieuwigheden, QR-codes scannen, GIF-afspelen en meer afbeeldingsformaten.

**✨ Nieuwe functies**

- Nieuw venster met nieuwigheden bij het opstarten: het vergelijkt de twee afrondmodi van de opname, laat zien waar QR-codes scannen zit en nodigt uit om Shotera te beoordelen. Vink 'Niet meer tonen' aan, of klik drie keer op 'Begrepen' om het te stoppen.
- Nieuw: QR-codes scannen: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF en UPCA, plus GS1 Digital Link. Het resultatenpaneel is schaalbaar en versleepbaar, met een genummerde geschiedenis.
- Opent PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF en TIFF (tif/tiff). SVG, ICO, AVIF en TIFF zijn nieuw in deze versie. Open via het menu Bestand of sleep afbeeldingen naar binnen.
- Nieuw: GIF-animaties afspelen. De statusbalk en het paneel Afbeeldingsinformatie tonen het aantal frames en de totale duur.
- Nieuw paneel 'Afbeeldingsinformatie': afmetingen, formaat, DPI, kleurmodus, bitdiepte, EXIF-opnamegegevens en een privacycontrole voor auteur- en GPS-tags. Open via het menu Bestand, rechtsklikken op het canvas, de statusbalk of Ctrl+I.
- De statusbalk toont zoomniveau, afbeeldingsafmetingen, bestandsgrootte en bestandspad. Het pad heeft drie modi: Verborgen, Kruimelpad en Volledig.
- De titelbalk van de editor toont de naam van de huidige afbeelding. Het rechtermuisknopmenu van het canvas opent de map met het bestand en markeert het ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Nieuw bevestigingsvenster voordat een bestand bij het opslaan wordt overschreven. Vink 'Niet meer vragen' aan om het voortaan over te slaan.
- Vastgepinde vensters: verberg de werkbalk rechtsboven via het contextmenu; de instelling wordt onthouden ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Verbeteringen**

- De modusbalk boven aan het scherm is weer zichtbaar, met de ingangen Schermafbeelding en QR-code.
- De weergave van grote afbeeldingen in de editor is herwerkt: laden en zoomen verlopen nu soepel en vloeiend.
- Zoomen met Ctrl+scrollwiel ankert nu op de cursor in plaats van op het midden van het canvas.
- Nieuwe zoomsneltoetsen: Ctrl+=, Ctrl+-, Ctrl+0.
- Na zoomen en verschuiven kan de afbeelding niet meer volledig uit beeld raken.
- Afbeeldingen in de editor krijgen een zachte schaduw en de lichte modus gebruikt een zuiverwit canvas.
- De loep van de kleurenkiezer is opnieuw ontworpen: vierkant dubbel kader, strakkere paneelrand, vierkant kleurvlak en een verfijnde kleur voor het kruisdraad.
- Het menu Help opent direct de website.
- AI-afbeeldingsvertaling waarschuwt wanneer de uitvoer gelijk is aan het origineel (meestal is de doeltaal gelijk aan de brontaal) en verwijst naar de taalinstelling. De hint is uit te zetten in Instellingen → AI-mogelijkheden.
- De timing van de beoordelingsvraag is herwerkt: die verschijnt nu na je eerste schermafbeelding in elke versie en daarna hoogstens één keer per maand.

**🐞 Bugfixes**

- Spookscrollbalken en een verkeerde zoomweergave van 0% of 1% na het laden van een afbeelding zijn opgelost.
- Het vervolgkeuzemenu 'Bestand' van de editor werd afgesneden bij de vensterrand: opgelost.
- Bij het opstarten met Windows werden onverwacht schermafbeeldingen gemaakt: opgelost.
- De afrondmodus in Instellingen werd niet bijgewerkt wanneer die in het venster met nieuwigheden werd gewijzigd: opgelost.

**🙏 Dankbetuiging**

Dank aan @korenevskiy en @NewJon27 voor de functiesuggesties die deze release hebben gevormd.

QR-codes scannen is toegevoegd naar aanleiding van feedback van Horihons.

---

## Shotera v7.5.1

**Uitgebracht:** 2026-09-14

Elegante opnamemodus, direct vastpinnen, kopieersneltoetsen.

**✨ Nieuwe functies**

- Nieuwe opnamemodus 'Strak en simpel': selecteer een gebied, klaar. De afbeelding wordt gekopieerd met een voorvertoning in de melding. Geen overlay. De donkere modus wordt ondersteund ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Nieuwe F3-sneltoets om direct vast te pinnen tijdens of na de opname. Aanpasbaar in Instellingen → Sneltoetsen ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Ctrl+C kopieert de schermafbeelding en sluit de overlay in één stap.
- Dubbelklikken bevestigt de opname onmiddellijk.
- Rechtsklikken annuleert de opname.
- Nieuwe optie 'Na de opname automatisch tekst extraheren' in Instellingen → Schermafbeelding.
- De titelbalk van het editorvenster volgt het systeemthema.

**🚀 Verbeteringen**

- 'Opslaan als' in de editor gebruikt dynamische tijdstempels voor bestandsnamen.
- Sneltoets Ctrl+Shift+S voor 'Opslaan als'.
- Het systeemvakmenu en de titel van het editorvenster zijn nu gelokaliseerd.

**🐞 Bugfixes**

- OCR mislukte bij niet-Engelse installatiepaden: opgelost.
- Vastgepinde afbeeldingen verloren resolutie op high-DPI-schermen: opgelost.
- F3 maakte dubbele pins vanuit de selectie en het klembord: opgelost.
- De Microsoft Store-versie toonde geen melding in de modus 'Strak en simpel': opgelost.
- In de Microsoft Store-versie startte een klik op de melding een extra schermafbeelding: opgelost.
- De rode stip op de updateknop bleef zichtbaar na de upgrade: opgelost.

**🙏 Dankbetuiging**

Dank aan @Const-me, @LightQuanta en @wherewhere voor de functiesuggesties die deze release hebben gevormd.

---

## Shotera v7.5.0

**Uitgebracht:** 2026-09-12

Volledige afbeeldingseditor, opnamemodi, uitgebreide CPU-ondersteuning.

**✨ Nieuwe functies**

- Nieuwe volledige afbeeldingseditor in een apart venster, te openen via 'Afbeelding bewerken…' in het systeemvak. Ondersteunt openen/opslaan/opslaan als, slepen en neerzetten, zoomen met Ctrl+scrollwiel van 10% tot 400%, annotatietools, OCR, AI-uitsnijden en AI-gum.
- Nieuwe pijlstijl 'Eenvoudige pijl' (toelopend) in de subwerkbalk van de pijl.
- Nieuwe instelling 'Na de opname': kies 'Strak en simpel' om de selectie te kopiëren met een voorvertoning in de melding (klik opent de editor), of houd de standaardmodus 'Direct annoteren' aan.
- Nieuwe instellingen 'Na de opname automatisch tekst extraheren' en 'AI-knoppen verbergen'.
- De doeltaal van de vertaling volgt de interfacetaal.

**🚀 Verbeteringen**

- CPU-ondersteuning uitgebreid naar Intel 3e generatie (Ivy Bridge) en ouder. Op oudere CPU's zijn AI-functies niet beschikbaar, met een uitlegvenster.
- Zelfgetekend hulpvenster rechtsonder wanneer Windows-meldingen zijn uitgeschakeld.
- De gum wist nu pijlen en lijnen en toont een gumcursor.
- De primaire werkbalk is opgenomen in de menubalk en altijd zichtbaar. De secundaire balk duwt de afbeelding niet meer opzij.
- Kopiëren in de editor sluit het venster niet meer en wist de selectie niet. De rode ✕ maakt de afbeelding leeg.
- De pagina Schermafbeelding in Instellingen markeert nieuwe functies met een rode stip.

**🐞 Bugfixes**

- De app crashte bij het opstarten op CPU's zonder AVX2-ondersteuning: opgelost.
- OCR mislukte bij Chinese en niet-Engelse installatiepaden: opgelost.
- Afbeeldingen met niet-ASCII-tekens in het pad konden niet via slepen en neerzetten worden geladen: opgelost.
- Het editorvenster laadde de schermafbeelding uit de melding soms niet: opgelost.
- AI-uitsnijden en AI-gum lieten verschoven afbeeldingen en niet-gewiste stroken achter: opgelost.
- De statusbalk van de editor werkte niet bij na het laden van een afbeelding: opgelost.
- De markeringen van tekstextractie stonden verschoven in de editor: opgelost.
- Cijfer- en emojistickers zakten naar beneden bij het schalen: opgelost.

**🗑️ Verwijderd**

- De menu's Bewerken en Beeld uit de menubalk van de editor.

---

## Shotera v7.4.2

**Uitgebracht:** 2026-09-07

Feedback in de app, installer met 22 talen, prestatieverbeteringen.

**✨ Nieuwe functies**

- Nieuw feedbackformulier in de app onder Instellingen → Over voor beoordelingen, suggesties en enquêtes.
- De taalondersteuning van de NSIS-installer is uitgebreid van 2 naar 22 talen.

**🚀 Verbeteringen**

- Annotatieprestaties verbeterd voor vloeiender tekenen.
- De detectiegranulariteit staat standaard op 'UI-elementen detecteren'.
- Selectieankers verschijnen alleen wanneer de selectie groot genoeg is.
- Het feedbackitem onder Over gebruikt een aanklikbaar pictogram.
- Formuleringen verfijnd voor een schonere toon.
- De interactie bij het openen van de updatepagina vanuit een melding is verbeterd.

**🐞 Bugfixes**

- Annotatieoverlays verschenen op de verkeerde monitor: opgelost.
- Elementdetectie reset de markeringslagen bij het bewegen tussen elementen: opgelost.
- Automatisch starten werkte niet meer na een upgrade van de Microsoft Store-versie: opgelost.

**🗑️ Verwijderd**

- Het item 'Functierondleiding' en de modushint.

---

## Shotera v7.4.1

**Uitgebracht:** 2026-09-04

Modelvergelijking, eenduidige naamgeving, inline hulp.

**✨ Nieuwe functies**

- Nieuwe modelvergelijkingstabel: het hulppictogram naast 'AI-uitsnijmodel' opent een tabel die alle vier modellen vergelijkt op grootte, snelheid, kwaliteit en gebruiksscenario.
- Eenduidige modelnamen in het formaat 'Model · Eigenschap', gesorteerd van klein naar groot.
- Inline hulp voor afbeeldingsvertaling: de beschrijving is verplaatst naar een tooltip op het hulppictogram.

---

## Shotera v7.4.0

**Uitgebracht:** 2026-09-03

Nieuw updateproces, Microsoft Store-ondersteuning, AI-fixes.

**✨ Nieuwe functies**

- Het updateproces is opnieuw ontworpen, met geoptimaliseerde updatelogica en instellingeninterface. Automatische installatie bij inactiviteit, vier updatemodi, een slimmere herinneringsfrequentie.
- De compatibiliteit van de Microsoft Store-versie is verbeterd en automatisch starten bij het opstarten van Windows is gerepareerd.

**🐞 Bugfixes**

- Het AI-uitsnijmodel werd bij elke controle opnieuw gedownload: opgelost.
- Versnelling via een Chinese mirror (shotera-ai.pages.dev) toegevoegd, met automatische terugval naar Hugging Face.

---

## Shotera v7.3.1

**Uitgebracht:** 2026-08-29

Ondersteuning voor de donkere modus.

**✨ Nieuwe functies**

- Nieuwe ondersteuning voor de donkere modus: kies Licht, Donker of Volg systeem in Instellingen. Alle vensters worden direct bijgewerkt, zonder herstart.

---

## Shotera v7.3.0

**Uitgebracht:** 2026-08-23

Automatische OCR, gedeeltelijk kopiëren, gekoppelde markering.

**✨ Nieuwe functies**

- Automatische OCR: tekst wordt geëxtraheerd zodra een gebied is geselecteerd. De selectie blijft bewerkbaar, met automatische herextractie.
- Gedeeltelijk kopiëren: sleep over de herkende tekst en druk op Ctrl+C om alleen dat deel te kopiëren. Het verschijnt in de Windows-klembordgeschiedenis.
- Gekoppelde markering: bij het selecteren van tekst op de originele afbeelding worden de overeenkomende tekens in het resultatenpaneel teken voor teken gemarkeerd.
- Toolbewuste overlay: de tekstlaag blijft interactief zolang geen annotatietool actief is en verdwijnt zodra een tool wordt gekozen.
- Lokalisatie: Traditioneel Chinees, Japans, Koreaans, Portugees (Brazilië), Spaans, Duits, Frans, Italiaans, Russisch, Arabisch, Nederlands, Pools en Zweeds dekken nu de instellingen voor afbeeldingsvertaling.

**🐞 Bugfixes**

- 'Tekst extraheren' opende na automatische OCR direct het resultatenpaneel: opgelost.
- Het annuleren van een annotatietool vergrendelde getekende vormen niet: opgelost.
- De knop 'Overslaan' was onzichtbaar in de gids bij de eerste start: opgelost.

---

## Shotera v7.2.2

**Uitgebracht:** 2026-08-20

Providers voor afbeeldingsvertaling, sleutel testen, high-DPI-fixes.

**✨ Nieuwe functies**

- Elke dienst is nu een inklapbare kaart: Baidu Image Translate (V2.0 hoge precisie / V1 klassiek) en Youdao Translate (99 talen).
- Baidu werkt direct met een ingebouwd quotum. Een eigen APP ID en Secret verhogen de limiet.
- Taalgeheugen wordt per provider opgeslagen.
- Nieuw: 'Sleutel testen' om inloggegevens met één echte aanvraag te controleren.

**🐞 Bugfixes**

- De links naar de API-documentatie van providers openden niet goed: opgelost.
- Het slepen van de selectie gebruikte een hoogfrequent aanwijzer-invoerpad: opgelost.
- High-DPI-selectiecoördinaten werden via het stage-coördinatenstelsel omgerekend: opgelost.
- Bij gemengde DPI en meerdere monitoren lijnde de bevroren opname-overlay uit op de native coördinaten van de virtuele desktop: opgelost.

---

## Shotera v7.2.1

**Uitgebracht:** 2026-08-18

Rechtstreeks naar het klembord, verplaatsbare werkbalken.

**✨ Nieuwe functies**

- Nieuw: rechtstreeks naar het klembord: druk op Alt+C of kies 'Schermafbeelding maken en kopiëren' in het systeemvakmenu om annotatie over te slaan. De schermafbeelding belandt op het klembord.
- De zes-puntssleepgreep op de primaire en secundaire annotatiewerkbalk is terug. De zichtbaarheid is instelbaar in Instellingen.

---

## Shotera v7.2.0

**Uitgebracht:** 2026-08-02

Snellere opstart van de opname, aangepaste opname, 15 talen.

**✨ Nieuwe functies**

- Veel snellere opstart van de opname: het opname- en annotatiepad hergebruikt en verwarmt het annotatievenster voor, waardoor de bottleneck bij het decoderen van afbeeldingen verdwijnt. In dualmonitorbenchmarks daalde de gemiddelde tijd van sneltoets tot selectie met 68,2%.
- Nieuwe werkwijze voor aangepaste opname: open met de standaardsneltoets Alt+F1 of via het systeemvakmenu. Stel een exacte X/Y-positie en breedte/hoogte in, vergrendel de verhouding, wissel de richting om en voeg een vertraging toe. Sla herbruikbare voorinstellingen voor afmetingen op met automatisch herstel van de laatst gebruikte waarde. Coördinaten voor meerdere monitoren (ook negatieve posities) en afmetingen tot 40000 pixels worden ondersteund.
- 15 nieuwe interfacetalen: Traditioneel Chinees, Japans, Braziliaans Portugees, Spaans, Duits, Frans, Italiaans, Koreaans, Russisch, Arabisch, Nederlands, Pools en Zweeds. Taalwijzigingen gelden direct in alle open vensters en in het systeemvak, zonder herstart. Arabisch bevat een volledige lay-out van rechts naar links.

**🚀 Verbeteringen**

- Schonere afsluiting van de opname: flitsen van de oude selectie en nabeelden over het hele venster zijn verwijderd.
- Snellere herkenning van geneste bedieningselementen met minder sprongen.
- Pictogrammen en tekst van taakbalkbediening en Verkenner-navigatie zijn nauwkeuriger te richten.
- De toegankelijkheidsbomen van Chromium en Electron worden voorverwarmd en zo nodig opnieuw geprobeerd.
- Afbeeldingsoverdracht naar het klembord gebruikt een directer RGBA-pad.
- Alt+T voor vastpinnen en Ctrl+S voor opslaan werken terwijl een gebied is geselecteerd.
- AI-modelbestanden zijn hersteld. Draagbare pakketten bevatten de vereiste modelbestanden.

---

## Shotera v7.1.0

**Uitgebracht:** 2026-07-29

Vensterdetectie, annotatietools, verbeterde pins.

**✨ Nieuwe functies**

- Verbeterde detectie van vensters en bedieningselementen, met eenvoudigere selectie van geneste doelen.
- Verfijnde opnameloep met duidelijkere randen, grotere schaalhandgrepen en een verbeterd kruisdraad.
- Ondersteuning toegevoegd voor vormen, pijlen, tekst, stickers, markeerstiften en lokale loep.
- Verbeterd bewerken met vloeiender schalen, roteren, opmaken en ongedaan maken/opnieuw.
- Bijgewerkte indeling van de werkbalk.
- Verbeterde pins die altijd bovenop blijven, met verplaatsen, schalen, roteren, spiegelen, transparantie en doorklikken.
- Betere klembordcompatibiliteit.
- De AI-toolsingang en de werkbalkknoppen zijn hersteld.
- De items van de functierondleiding zijn hersteld.
- De presentatiemodus is verbeterd.
- Verbeterd beheer van sneltoetsen, updatekanalen en instellingenopslag.
- Tweetalige licentie in de MSI-installer.
- Schermafbeeldingen blijven volledig lokaal. Geen account nodig.

---

## Shotera v7.0.0

**Uitgebracht:** 2026-07-23

Leg vast wat belangrijk is. Leg het duidelijk uit. Houd het in zicht.

**✨ Nieuwe functies**

- Snelle schermafbeelding met F1-hotkey, detectie van vensters en bedieningselementen en een loep op het scherm.
- Annotatietools: rechthoeken, ellipsen, lijnen, pijlen, vrije pen, markeerstift, rich text, automatische stapnummers, mozaïek/vervaging, emojistickers en lokale loep.
- F3 maakt pins die altijd bovenop blijven voor schermafbeeldingen of klembordinhoud. Pins ondersteunen verplaatsen, schalen, roteren, spiegelen en transparantie.
- De presentatiemodus helpt om het bureaublad op te schonen voor schermafbeeldingen en vergaderingen door pictogrammen te verbergen en thema- en achtergrondvoorinstellingen toe te passen.

**🚀 Verbeteringen**

- Consistentere ervaring met duidelijkere selectiefeedback.
- Zichtbare schaalhandgrepen.
- Schonere opnameloep.
- Uitgelijnde annotatiewerkbalken.
- Verfijnde tekstbewerking.
- Verbeterde onboarding.
- Betrouwbare instellingen.
- Vlottere Windows-installatie.
