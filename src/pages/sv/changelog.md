---
title: 'Uppdateringar'
layout: '~/layouts/MarkdownLayout.astro'
---

# Shoteras versionsnyheter – alla versioner (svenska)

**📫 Feedback**

Inställningar → Om → Feedback & förslag

**🔗 Versionsindex**

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

**Släppt:** 2026-09-24

Lite-version, rullande skärmbild, skalbara fästa bilder och lättare byggen.

**🆚 Lite vs. fullversion:** funktionsskillnaderna finns i [versionsjämförelsen](/sv/versions).

**✨ Nya funktioner**

- Ny Lite-version: installationspaket på 17 MB med de viktigaste funktionerna för skärmbild och annotering. En uppgraderingsbanner i Inställningar länkar till fullversionen på webbplatsen.
- Den [officiella webbplatsen](https://shotera.mosuzo.com/) har uppdaterats i innehåll och form.
- Ny rullande skärmbild (förhandsversion, betatest): automatiskt och manuellt rullningsläge med fönster för förhandsvisning i realtid. En intelligent sammanfogningsalgoritm hittar överkanten och hanterar blandade layouter. Vägledning visas vid första användningen. Gå med i betagruppen för att testa.
- Förbättrade fästa fönster: dubbelklick växlar mellan originalstorlek och miniatyrläge med stängningsknapp. Dra i kanter eller hörn för att ändra storlek med låsta proportioner. Den inbyggda snabbmenyn går utanför fönstrets gränser. Verktygsfältets synlighet sparas mellan sessioner ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- AI-friläggningsmodellen använder nu inbyggda u2netp för omedelbar prestanda. rmbg-1.4 laddas ner vid behov, med vägledning vid första användningen.
- Nytt utskriftskommando i redigeraren: snabbmenyn och Arkiv-menyn öppnar systemets utskriftsdialog ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- Redigerarens snabbmeny kan öppna mappen som innehåller filen och markera den ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Förbättringar**

- Byggstorleken minskad med 20 %: komprimering av installationspaketet och kompilatorinställningar optimerade. Ny FastBuild-profil för snabbare iterationer.
- Den grundläggande minnesanvändningen har minskat.
- Redigerarens titelrad visar filnamnet för den aktuella bilden dynamiskt.
- Aviseringen vid lyckad uppdatering har förenklats till logotyp + text + knapp, utan stor förhandsvisning.
- Introduktionen har förfinats: guiden på 8 sidor har flyttats till inbjudningskortet längst ner till höger. Fönstret med nya funktioner visas inte längre efter 3 stängningar. AI-frilägg visar vägledning vid första användningen.
- AI-bildöversättning varnar när resultatet är identiskt med originalet och hänvisar till språkinställningarna. Varningen kan stängas av i Inställningar → AI-funktioner.
- Standardfilnamnet för skärmbilder, rullande skärmbilder och redigerarens utdata har enhetligt satts till `Shotera_YYYYMMDD_HHMMSS`.
- Miniatyrbilden i aviseringen för rullande skärmbild visar den övre skärmdelen i stället för att pressa ihop hela bilden.

**🐞 Buggfixar**

- Annoteringsfönstrets startposition på dubbla skärmar har korrigerats.
- Fel i proportionsberäkningen och flimmer i ramen vid storleksändring av fästa fönster har åtgärdats.
- Dubbelklick fungerade inte efter en markering och återställde inte originalstorleken – åtgärdat.
- Dialogrutan vid misslyckad sammanfogning av rullande skärmbild blockerades av klickigenom-reglerna – åtgärdat.
- Spökrullningslister och visning av 0 % eller 1 % zoom efter inläsning av bilder i redigeraren har åtgärdats.
- Redigerarens titelrad visade dubblerade filnamn – åtgärdat.

**🙏 Tack**

Tack till communitymedlemmarna som rapporterade problem och föreslog funktioner som formade den här versionen. Den rullande skärmbilden och förbättringarna av fästa fönster drevs av användarfeedback.

---

## Shotera v7.6.0

**Släppt:** 2026-09-21

Ett fönster med nyheter, QR-kodsläsning, GIF-uppspelning och fler bildformat.

**✨ Nya funktioner**

- Nytt fönster med nyheter vid start: det jämför de två avslutningslägena för skärmdumpen, visar var QR-kodsläsningen finns och bjuder in till att betygsätta Shotera. Markera ”Visa inte igen”, eller klicka på ”Uppfattat” tre gånger, för att stänga av det.
- Ny QR-kodsläsning: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF och UPCA, plus GS1 Digital Link. Resultatpanelen kan storleksändras och flyttas, med numrerad historik.
- Öppnar PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF och TIFF (tif/tiff). SVG, ICO, AVIF och TIFF är nya i den här versionen. Öppna från Arkiv-menyn eller dra in bilder.
- Ny uppspelning av GIF-animeringar. Statusfältet och panelen Bildinformation visar antal bildrutor och total längd.
- Ny panelen ”Bildinformation”: mått, format, DPI, färgläge, bitdjup, EXIF-data från fototillfället och en sekretesskontroll för författar- och GPS-taggar. Öppna via Arkiv-menyn, högerklick på arbetsytan, statusfältet eller Ctrl+I.
- Statusfältet visar zoomnivå, bildmått, filstorlek och filsökväg. Sökvägen har tre lägen: Dold, Brödsmulor och Fullständig.
- Redigerarens titelrad visar namnet på den aktuella bilden. Arbetsytans snabbmeny öppnar mappen som innehåller filen och markerar den ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Ny bekräftelsedialog innan en fil skrivs över vid sparande. Markera ”Fråga inte igen” för att hoppa över den framöver.
- Fästa fönster: verktygsfältet uppe till höger kan döljas via snabbmenyn; inställningen sparas ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Förbättringar**

- Det övre lägesfältet visas igen, med ingångarna Skärmbild och QR-kod.
- Visningen av stora bilder i redigeraren har gjorts om – inläsning och zoomning är nu mjuka och flytande.
- Zoomning med Ctrl+rullhjulet förankras nu vid markören i stället för mitten av arbetsytan.
- Nya zoomgenvägar: Ctrl+=, Ctrl+-, Ctrl+0.
- Efter zoomning och panorering kan bilden inte längre hamna helt utanför det synliga området.
- Bilder i redigeraren får en mjuk skugga och ljust läge använder en helt vit arbetsyta.
- Färgväljarens förstoringsglas har gjorts om: fyrkantig dubbel ram, tightare panelkant, fyrkantig färgruta och förfinad färg på hårkorset.
- Hjälp-menyn öppnar webbplatsen direkt.
- AI-bildöversättning varnar när resultatet är identiskt med originalet (oftast är målspråket samma som källspråket) och hänvisar till språkinställningen. Tipset stängs av i Inställningar → AI-funktioner.
- Tidpunkten för betygsättningen har gjorts om: den visas nu efter din första skärmbild i varje version och därefter högst en gång i månaden.

**🐞 Buggfixar**

- Spökrullningslister och felaktig visning av 0 % eller 1 % zoom efter inläsning av en bild har åtgärdats.
- Redigerarens rullgardinsmeny ”Arkiv” klipptes vid fönsterkanten – åtgärdat.
- Skärmbilder utlöstes oväntat vid start tillsammans med Windows – åtgärdat.
- Avslutningsläget i Inställningar uppdaterades inte när det ändrades i fönstret med nyheter – åtgärdat.

**🙏 Tack**

Tack till @korenevskiy och @NewJon27 för funktionsförslag som formade den här versionen.

QR-kodsläsning lades till efter feedback från Horihons.

---

## Shotera v7.5.1

**Släppt:** 2026-09-14

Elegant fångstläge, omedelbar fästning, kopieringsgenvägar.

**✨ Nya funktioner**

- Nytt fångstläge ”Elegant”: markera området, klart. Bilden kopieras med förhandsvisning i aviseringen. Ingen overlay. Mörkt läge stöds ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Ny snabbtangent F3 för omedelbar fästning under eller efter fångsten. Anpassas i Inställningar → Snabbtangenter ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Ctrl+C kopierar skärmbilden och stänger overlayen i ett steg.
- Dubbelklick bekräftar fångsten direkt.
- Högerklick avbryter fångsten.
- Ny inställning ”Extrahera text automatiskt efter skärmdump” i Inställningar → Skärmbild.
- Redigerarfönstrets titelrad följer systemtemat.

**🚀 Förbättringar**

- ”Spara som” i redigeraren använder dynamiska tidsstämplar för filnamn.
- Snabbtangenten Ctrl+Shift+S för ”Spara som”.
- Systemfältets meny och redigerarfönstrets titel är nu lokaliserade.

**🐞 Buggfixar**

- OCR misslyckades vid installationssökvägar som inte är på engelska – åtgärdat.
- Fästa bilder fick lägre upplösning på skärmar med hög DPI – åtgärdat.
- F3 skapade dubbla fästningar från markeringen och urklippet – åtgärdat.
- Microsoft Store-versionen visade ingen avisering i läget ”Elegant” – åtgärdat.
- I Microsoft Store-versionen utlöste ett klick på aviseringen en extra skärmbild – åtgärdat.
- Den röda pricken på uppdateringsknappen låg kvar efter uppgraderingen – åtgärdat.

**🙏 Tack**

Tack till @Const-me, @LightQuanta och @wherewhere för funktionsförslag som formade den här versionen.

---

## Shotera v7.5.0

**Släppt:** 2026-09-12

Fullständig bildredigerare, fångstlägen, utökat CPU-stöd.

**✨ Nya funktioner**

- Ny fullständig bildredigerare i ett eget fönster, nås via ”Redigera bild…” i systemfältet. Stöder öppna/spara/spara som, dra och släpp, Ctrl+rullhjulet zoom 10–400 %, annoteringsverktyg, OCR, AI-frilägg och AI-suddgummi.
- Ny pilstil ”Enkel pil” (avsmalnande) i pilens underverktygsfält.
- Ny inställning ”Efter skärmdumpen”: välj ”Elegant” för att kopiera markeringen med förhandsvisning i aviseringen (klick öppnar redigeraren), eller behåll standardläget ”Direktanteckna”.
- Nya inställningarna ”Extrahera text automatiskt efter skärmdump” och ”Dölj AI-knapparna”.
- Översättningens målspråk följer gränssnittets språk.

**🚀 Förbättringar**

- CPU-stödet har utökats till Intel 3:e generationen (Ivy Bridge) och äldre. På äldre processorer är AI-funktionerna otillgängliga, med en förklarande dialog.
- Egenritat vägledningsfönster längst ner till höger när Windows-aviseringar är avstängda.
- Suddgummit suddar nu pilar och linjer och visar en suddgummismarkör.
- Det primära verktygsfältet är inbäddat i menyraden och alltid synligt. Det sekundära fältet knuffar inte längre bilden.
- Kopiering i redigeraren stänger inte längre fönstret eller rensar markeringen. Det röda ✕ tömmer bilden.
- Sidan Skärmbild i Inställningar markerar nya funktioner med en röd prick.

**🐞 Buggfixar**

- Appen kraschade vid start på processorer utan AVX2-stöd – åtgärdat.
- OCR misslyckades vid kinesiska och icke-engelska installationssökvägar – åtgärdat.
- Bilder med icke-ASCII-tecken i sökvägen kunde inte läsas in via dra och släpp – åtgärdat.
- Redigerarfönstret laddade ibland inte skärmbilden från aviseringen – åtgärdat.
- AI-frilägg och AI-suddgummi lämnade förskjutna bilder och ostädade remsor – åtgärdat.
- Redigerarens statusfält uppdaterades inte efter inläsning av en bild – åtgärdat.
- Markeringarna för textextrahering hamnade snett i redigeraren – åtgärdat.
- Siffer- och emojiklistermärken drev nedåt vid storleksändring – åtgärdat.

**🗑️ Borttaget**

- Menyerna Redigera och Visa från redigerarens menyrad.

---

## Shotera v7.4.2

**Släppt:** 2026-09-07

Feedback i appen, installationspaket på 22 språk, prestandaförbättringar.

**✨ Nya funktioner**

- Nytt feedbackformulär i appen under Inställningar → Om för betyg, förslag och enkäter.
- NSIS-installationspaketets språkstöd har utökats från 2 till 22 språk.

**🚀 Förbättringar**

- Förbättrad annoteringsprestanda för mjukare ritning.
- Detekteringsdetaljen är som standard ”Identifiera gränssnittselement”.
- Urvalsankare visas bara när markeringen är tillräckligt stor.
- Feedbackposten under Om använder en klickbar ikon.
- Formuleringar har förfinats för en renare ton.
- Flödet för att öppna uppdateringssidan från en avisering har förbättrats.

**🐞 Buggfixar**

- Annoteringens overlay dök upp på fel skärm – åtgärdat.
- Elementidentifieringen återställde markeringslager när man rörde sig mellan element – åtgärdat.
- Autostart slutade fungera efter uppgradering av Microsoft Store-versionen – åtgärdat.

**🗑️ Borttaget**

- Posten ”Funktionsguide” och lägestipstexten.

---

## Shotera v7.4.1

**Släppt:** 2026-09-04

Modelljämförelse, enhetlig namngivning, hjälp i raden.

**✨ Nya funktioner**

- Ny jämförelsetabell för modeller: hjälpikonen bredvid ”AI-frilägningsmodell” öppnar en tabell som jämför alla fyra modellerna efter storlek, hastighet, kvalitet och användningsområde.
- Enhetlig namngivning av modeller i formatet ”Modell · Egenskap”, sorterade från minst till störst.
- Hjälp i raden för bildöversättning: beskrivningen har flyttats till en verktygstips på hjälpikonen.

---

## Shotera v7.4.0

**Släppt:** 2026-09-03

Ny upplevelse för uppdateringar, Microsoft Store-stöd, AI-åtgärder.

**✨ Nya funktioner**

- Upplevelsen för uppdateringar har gjorts om, med optimerad uppdateringslogik och inställningsgränssnitt. Automatisk installation vid inaktivitet, fyra uppdateringslägen och smartare påminnelsefrekvens.
- Kompatibiliteten för Microsoft Store-versionen har förbättrats och autostart vid Windows-start har åtgärdats.

**🐞 Buggfixar**

- AI-friläggningsmodellen laddades ner på nytt vid varje kontroll – åtgärdat.
- Acceleration via spegel i Kina (shotera-ai.pages.dev) har lagts till, med automatisk återgång till Hugging Face.

---

## Shotera v7.3.1

**Släppt:** 2026-08-29

Stöd för mörkt läge.

**✨ Nya funktioner**

- Nytt stöd för mörkt läge: välj Ljust, Mörkt eller Följ system i Inställningar. Alla fönster uppdateras direkt, utan omstart.

---

## Shotera v7.3.0

**Släppt:** 2026-08-23

Automatisk OCR, delvis kopiering, länkad markering.

**✨ Nya funktioner**

- Automatisk OCR: texten extraheras så snart ett område har markerats. Markeringen förblir redigerbar med automatisk ny extrahering.
- Delvis kopiering: dra över den identifierade texten och tryck Ctrl+C för att kopiera bara den delen. Den visas i Windows urklippshistorik.
- Länkad markering: när du markerar text på originalbilden markeras matchande tecken i resultatpanelen, tecken för tecken.
- Verktygsmedveten overlay: textlagret förblir interaktivt när inget annoteringsverktyg är aktivt och döljs när ett verktyg väljs.
- Lokalisering: traditionell kinesiska, japanska, koreanska, portugisiska (Brasilien), spanska, tyska, franska, italienska, ryska, arabiska, nederländska, polska och svenska täcker nu inställningarna för bildöversättning.

**🐞 Buggfixar**

- ”Extrahera text” öppnade resultatpanelen direkt efter automatisk OCR – åtgärdat.
- Att avbryta ett annoteringsverktyg låste inte ritade former – åtgärdat.
- Knappen ”Hoppa över” var osynlig i guiden vid första starten – åtgärdat.

---

## Shotera v7.2.2

**Släppt:** 2026-08-20

Tjänster för bildöversättning, testa nyckel, åtgärder för hög DPI.

**✨ Nya funktioner**

- Varje tjänst är nu ett ihopfällbart kort: Baidu Image Translation (V2.0 hög precision / V1 klassisk) och Youdao Translate (99 språk).
- Baidu fungerar direkt med inbyggd kvot. Ett eget APP-ID och Secret höjer gränsen.
- Språkminnet sparas per tjänst.
- Nytt ”Testa nyckel” för att verifiera uppgifterna med en riktig förfrågan.

**🐞 Buggfixar**

- Tjänsternas länkar till API-dokumentationen öppnades felaktigt – åtgärdat.
- Att dra markeringen använde en högfrekvent indataväg för pekaren – åtgärdat.
- Markeringskoordinater för hög DPI konverterades via scenens koordinatsystem – åtgärdat.
- Vid blandad DPI och flera skärmar anpassades den frysta fångstoverlayen till den virtuella skrivbordets inbyggda koordinater – åtgärdat.

---

## Shotera v7.2.1

**Släppt:** 2026-08-18

Direkt till urklippet, flyttbara verktygsfält.

**✨ Nya funktioner**

- Ny fångst direkt till urklippet: tryck Alt+C eller välj ”Ta skärmbild och kopiera” i systemfältets meny för att hoppa över annoteringen. Skärmbilden hamnar i urklippet.
- Det sexpunktsiga draghandtaget på det primära och sekundära annoteringsverktygsfältet är tillbaka. Synligheten kan ställas in i Inställningar.

---

## Shotera v7.2.0

**Släppt:** 2026-08-02

Snabbare start av fångst, anpassad fångst, 15 språk.

**✨ Nya funktioner**

- Mycket snabbare start av fångsten: fångst- och annoteringsvägen återanvänder och förvärmer annoteringsfönstret och undviker flaskhalsen vid avkodning av bilder. I benchmark med dubbla skärmar minskade den genomsnittliga tiden från snabbtangent till markering med 68,2 %.
- Nytt arbetsflöde för anpassad fångst: öppna med standardgenvägen Alt+F1 eller via systemfältets meny. Ange exakt X/Y-position och bredd/höjd, lås proportionerna, byt orientering och lägg till en fördröjning. Spara återanvändbara storleksförinställningar med automatisk återställning av senast använda värde. Koordinater för flera skärmar (även negativa positioner) och storlekar upp till 40000 pixlar stöds.
- 15 nya gränssnittsspråk: traditionell kinesiska, japanska, brasiliansk portugisiska, spanska, tyska, franska, italienska, koreanska, ryska, arabiska, nederländska, polska och svenska. Språkbyten tillämpas direkt i alla öppna fönster och i systemfältet, utan omstart. Arabiska har en fullständig layout från höger till vänster.

**🚀 Förbättringar**

- Renare avslutning av fångsten: gamla urvalsblixtar och efterbilder över hela fönstret har tagits bort.
- Snabbare igenkänning av nästlade kontroller med färre hopp.
- Ikoner och texter för aktivitetsfältets kontroller och Utforskarens navigering kan träffas mer exakt.
- Tillgänglighetsträden för Chromium och Electron förvärms och görs om vid behov.
- Överföring av bilder till urklippet använder en mer direkt RGBA-väg.
- Alt+T för att fästa och Ctrl+S för att spara fungerar medan ett område är markerat.
- AI-modellens filer har återställts. Portabla paket innehåller de modellfiler som krävs.

---

## Shotera v7.1.0

**Släppt:** 2026-07-29

Fönsterigenkänning, annoteringsverktyg, förbättrade fästningar.

**✨ Nya funktioner**

- Förbättrad igenkänning av fönster och kontroller med enklare val av nästlade mål.
- Förfinat fångstförstoringsglas med tydligare kanter, större storlekshandtag och förbättrat hårkors.
- Stöd för former, pilar, text, klistermärken, markeringar och lokalt förstoringsglas har lagts till.
- Förbättrad redigering med mjukare storleksändring, rotation, formatering och ångra/gör om.
- Uppdaterad layout för verktygsfältet.
- Förbättrade fästningar som alltid ligger överst, med flytt, storleksändring, rotation, spegling, opacitet och klickigenom.
- Bättre kompatibilitet med urklipp.
- Posten för AI-verktyg och knapparna i verktygsfältet har återställts.
- Posterna i funktionsguiden har återställts.
- Presentationsläget har förbättrats.
- Förbättrad hantering av snabbtangenter, uppdateringskanaler och sparade inställningar.
- Tvåspråkig licens i MSI-installationspaketet.
- Skärmbilder förblir helt lokala. Inget konto krävs.

---

## Shotera v7.0.0

**Släppt:** 2026-07-23

Fånga det som är viktigt. Förklara det tydligt. Håll det synligt.

**✨ Nya funktioner**

- Snabbt skärmbildsflöde med F1-snabbtangent, igenkänning av fönster och kontroller och förstoringsglas på skärmen.
- Annoteringsverktyg: rektanglar, ellipser, linjer, pilar, frihandspenna, överstrykningspenna, formaterad text, automatisk stegnumrering, mosaik/oskärpa, emojiklistermärken och lokalt förstoringsglas.
- F3 skapar fästningar som alltid ligger överst för skärmbilder eller urklippsinnehåll. Fästningar stöder flytt, storleksändring, rotation, spegling och transparens.
- Presentationsläget hjälper dig att städa skrivbordet före skärmbilder och möten genom att dölja ikoner och tillämpa förinställningar för tema och bakgrund.

**🚀 Förbättringar**

- Mer konsekvent upplevelse med tydligare återkoppling vid markering.
- Synliga storlekshandtag.
- Renare fångstförstoringsglas.
- Justerade annoteringsverktygsfält.
- Förfinad textredigering.
- Förbättrad introduktion.
- Tillförlitliga inställningar.
- Smidigare Windows-installation.
