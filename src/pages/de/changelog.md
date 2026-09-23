---
title: 'Versionshinweise'
layout: '~/layouts/MarkdownLayout.astro'
---

# Shotera-Versionshinweise – alle Versionen (Deutsch)

**📫 Feedback**

Einstellungen → Über → Feedback & Vorschläge

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

**Veröffentlicht:** 2026-09-24

Lite-Version, langer Screenshot, skalierbare Anheft-Fenster und schlankere Builds.

**🆚 Lite vs. Vollversion:** Die Funktionsunterschiede finden Sie im [Versionsvergleich](/de/versions).

**✨ Neue Funktionen**

- Neue Lite-Version: 17 MB großes Installationspaket mit den zentralen Funktionen für Screenshots und Anmerkungen. Ein Upgrade-Banner in den Einstellungen verlinkt auf die Vollversion der Website.
- Die [offizielle Website](https://shotera.mosuzo.com/) wurde inhaltlich und gestalterisch überarbeitet.
- Neuer langer Screenshot (Vorschau, Beta-Test): automatischer und manueller Scrollmodus mit Echtzeit-Vorschaufenster. Ein intelligenter Stitching-Algorithmus erkennt die obere Begrenzung und verarbeitet gemischte Layouts. Hinweise beim ersten Einsatz führen durch die Bedienung. Treten Sie der Beta-Gruppe bei, um mitzutesten.
- Erweiterte Anheft-Fenster: Ein Doppelklick wechselt zwischen Originalgröße und Miniaturansicht mit Schließen-Schaltfläche. Das Ziehen an Kanten oder Ecken ändert die Größe bei gesperrtem Seitenverhältnis. Das native Kontextmenü reicht über die Fenstergrenzen hinaus. Die Sichtbarkeit der Werkzeugleiste bleibt über Sitzungen hinweg erhalten ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- Das AI-Freistellungsmodell verwendet jetzt das integrierte u2netp und arbeitet dadurch sofort. rmbg-1.4 wird nun bei Bedarf heruntergeladen, mit Hinweis beim ersten Einsatz.
- Neuer Druckbefehl im Editor: Das Kontextmenü und das Dateimenü öffnen den Systemdruckdialog ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- Das Kontextmenü des Editors kann den enthaltenden Ordner öffnen und die aktuelle Datei hervorheben ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Verbesserungen**

- Build-Größe um 20 % reduziert: Installer-Komprimierung und Compiler-Einstellungen optimiert. Neues FastBuild-Profil für schnelleres Iterieren.
- Der Grundspeicherverbrauch wurde reduziert.
- Die Titelleiste des Editors zeigt den Dateinamen des aktuellen Bildes dynamisch an.
- Die Erfolgsmeldung für Updates wurde auf Logo + Text + Schaltfläche reduziert, ohne große Vorschau.
- Der Einstiegsablauf wurde verfeinert: Die 8-seitige Führung ist nun über die Einladungskarte unten rechts erreichbar. Das Fenster mit den neuen Funktionen erscheint nach dreimaligem Schließen nicht mehr. Beim ersten Einsatz des AI-Freistellens wird eine Anleitung angezeigt.
- Die AI-Bildübersetzung warnt, wenn die Ausgabe mit der Eingabe übereinstimmt, und verweist auf die Spracheinstellungen. Die Warnung lässt sich unter Einstellungen → AI-Funktionen deaktivieren.
- Der Standarddateiname für Screenshots, lange Screenshots und Editor-Ausgaben wurde auf `Shotera_YYYYMMDD_HHMMSS` vereinheitlicht.
- Die Miniaturansicht der Benachrichtigung für lange Screenshots zeigt den oberen Bildschirmausschnitt, statt das gesamte Bild zu stauchen.

**🐞 Fehlerbehebungen**

- Die Anfangsposition des Anmerkungsfensters bei Dual-Monitor-Setups wurde korrigiert.
- Fehler bei der Berechnung des Zieh-Verhältnisses und Rahmenflimmern beim Skalieren von Anheft-Fenstern wurden behoben.
- Das Doppelklick-Verhalten griff nach einer Auswahl nicht und kehrte nicht zur Originalgröße zurück – behoben.
- Der Dialog bei fehlgeschlagenem Zusammenfügen des langen Screenshots wurde von der Klick-durch-Regel blockiert – behoben.
- Geisterhafte Bildlaufleisten und eine Zoom-Anzeige von 0 % oder 1 % nach dem Laden von Bildern im Editor wurden behoben.
- Die Titelleiste des Editors zeigte Dateinamen doppelt – behoben.

**🙏 Danksagung**

Dank an die Community-Mitglieder, die Probleme gemeldet und Funktionen vorgeschlagen haben, die dieses Release geprägt haben. Der lange Screenshot und die Verbesserungen an den Anheft-Fenstern wurden durch Nutzerfeedback vorangetrieben.

---

## Shotera v7.6.0

**Veröffentlicht:** 2026-09-21

Ein Fenster mit Neuerungen, QR-Code-Erkennung, GIF-Wiedergabe und weitere Bildformate.

**✨ Neue Funktionen**

- Neues Fenster mit Neuerungen beim Start: Es vergleicht die beiden Fertig-Modi der Aufnahme, zeigt, wo die QR-Code-Erkennung zu finden ist, und lädt zur Bewertung von Shotera ein. Mit „Nicht mehr anzeigen“ oder nach dreimaligem Klick auf „Verstanden“ erscheint es nicht mehr.
- Neue QR-Code-Erkennung: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF und UPCA sowie GS1 Digital Link. Das Ergebnispanel lässt sich skalieren und verschieben, mit nummerierter Historie.
- Öffnet PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF und TIFF (tif/tiff). SVG, ICO, AVIF und TIFF sind in dieser Version neu. Öffnen über das Dateimenü oder durch Hineinziehen von Bildern.
- Neue GIF-Animation-Wiedergabe. Statusleiste und Bildinformationen zeigen die Anzahl der Einzelbilder und die Gesamtdauer.
- Neues Panel „Bildinformationen“: Abmessungen, Format, DPI, Farbmodus, Bittiefe, EXIF-Aufnahmedaten und eine Datenschutzprüfung für Autor- und GPS-Tags. Öffnen über das Dateimenü, den Rechtsklick auf die Arbeitsfläche, die Statusleiste oder Ctrl+I.
- Die Statusleiste zeigt Zoomstufe, Bildabmessungen, Dateigröße und Dateipfad. Der Pfad lässt sich in drei Modi anzeigen: Ausgeblendet, Breadcrumb und Vollständig.
- Die Titelleiste des Editors zeigt den aktuellen Bildnamen. Das Kontextmenü der Arbeitsfläche öffnet den enthaltenden Ordner und hebt die aktuelle Datei hervor ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Neuer Bestätigungsdialog vor dem Überschreiben einer Datei beim Speichern. Mit „Nicht mehr fragen“ lässt er sich künftig überspringen.
- Anheft-Fenster: Die Werkzeugleiste oben rechts lässt sich über das Kontextmenü ausblenden; die Einstellung wird gespeichert ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Verbesserungen**

- Die obere Modusleiste ist wieder sichtbar und bietet die Einträge Screenshot und QR-Code.
- Die Darstellung großer Bilder im Editor wurde überarbeitet – Laden und Zoomen laufen jetzt flüssig und geschmeidig.
- Der Ctrl+Rad-Zoom verankert nun am Cursor statt in der Mitte der Arbeitsfläche.
- Neue Zoom-Tastenkürzel: Ctrl+=, Ctrl+-, Ctrl+0.
- Nach dem Zoomen und Verschieben kann das Bild nicht mehr vollständig aus dem sichtbaren Bereich geraten.
- Editor-Bilder erhalten einen weichen Schatten; der helle Modus verwendet eine rein weiße Arbeitsfläche.
- Die Lupe der Farbauswahl wurde neu gestaltet: quadratischer Doppelrahmen, kompakterer Panel-Rand, quadratisches Farbfeld und eine überarbeitete Fadenkreuzfarbe.
- Das Hilfemenü öffnet direkt die Website.
- Die AI-Bildübersetzung weist darauf hin, wenn die Ausgabe mit dem Original übereinstimmt (meist ist die Zielsprache gleich der Ausgangssprache), und verweist auf die Spracheinstellung. Der Hinweis lässt sich unter Einstellungen → AI-Funktionen abschalten.
- Der Zeitpunkt der Bewertungsaufforderung wurde überarbeitet: Sie erscheint nun nach dem ersten Screenshot jeder Version und danach höchstens einmal im Monat.

**🐞 Fehlerbehebungen**

- Geisterhafte Bildlaufleisten und eine falsche Zoom-Anzeige von 0 % oder 1 % nach dem Laden eines Bildes wurden behoben.
- Das Dropdown „Datei“ des Editors wurde am Fensterrand abgeschnitten – behoben.
- Beim Start mit Windows wurden unerwartet Screenshots ausgelöst – behoben.
- Der Fertig-Modus in den Einstellungen wurde nicht aktualisiert, wenn er im Fenster mit den Neuerungen geändert wurde – behoben.

**🙏 Danksagung**

Dank an @korenevskiy und @NewJon27 für die Funktionsvorschläge, die dieses Release geprägt haben.

Die QR-Code-Erkennung wurde als Reaktion auf das Feedback von Horihons hinzugefügt.

---

## Shotera v7.5.1

**Veröffentlicht:** 2026-09-14

Eleganter Aufnahmemodus, sofortiges Anheften, Kopier-Tastenkürzel.

**✨ Neue Funktionen**

- Neuer Aufnahmemodus „Elegant“: Bereich auswählen, fertig. Das Bild wird kopiert und in einer Benachrichtigung angezeigt. Kein Overlay. Der Dunkelmodus wird unterstützt ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Neues F3-Tastenkürzel zum sofortigen Anheften während oder nach der Aufnahme. Anpassbar unter Einstellungen → Tastenkürzel ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Ctrl+C kopiert den Screenshot und schließt das Overlay in einem Schritt.
- Ein Doppelklick bestätigt die Aufnahme sofort.
- Ein Rechtsklick bricht die Aufnahme ab.
- Neue Option „Text nach der Aufnahme automatisch extrahieren“ unter Einstellungen → Screenshot.
- Die Titelleiste des Editorfensters folgt dem Systemthema.

**🚀 Verbesserungen**

- „Speichern unter“ im Editor verwendet dynamische Zeitstempel für Dateinamen.
- Ctrl+Shift+S als Tastenkürzel für „Speichern unter“.
- Tray-Menü und Titel des Editorfensters sind nun lokalisiert.

**🐞 Fehlerbehebungen**

- OCR schlug unter nicht englischen Installationspfaden fehl – behoben.
- Angeheftete Bilder hatten auf High-DPI-Displays eine verringerte Auflösung – behoben.
- F3 erzeugte doppelte Anheftungen aus Auswahl und Zwischenablage – behoben.
- Die Microsoft Store-Version zeigte im Modus „Elegant“ keine Benachrichtigung – behoben.
- In der Microsoft Store-Version löste ein Klick auf die Benachrichtigung einen zusätzlichen Screenshot aus – behoben.
- Der rote Punkt der Update-Schaltfläche blieb nach dem Upgrade sichtbar – behoben.

**🙏 Danksagung**

Dank an @Const-me, @LightQuanta und @wherewhere für die Funktionsvorschläge, die dieses Release geprägt haben.

---

## Shotera v7.5.0

**Veröffentlicht:** 2026-09-12

Vollwertiger Bildeditor, Aufnahmemodi, erweiterte CPU-Unterstützung.

**✨ Neue Funktionen**

- Neuer vollwertiger Bildeditor in einem eigenen Fenster, erreichbar über „Bild bearbeiten…“ im Tray. Unterstützt Öffnen/Speichern/Speichern unter, Drag-and-Drop, Ctrl+Rad-Zoom von 10 % bis 400 %, Anmerkungswerkzeuge, OCR, AI-Freistellen und AI-Radierer.
- Neuer Pfeilstil „Einfacher Pfeil“ (spitz zulaufend) in der Pfeil-Unterleiste.
- Neue Einstellung „Nach dem Auslösen“: Wählen Sie „Elegant“, um die Auswahl mit Benachrichtigungsvorschau zu kopieren (ein Klick öffnet den Editor), oder behalten Sie den Standardmodus „Direkt kommentieren“ bei.
- Neue Einstellungen „Text nach der Aufnahme automatisch extrahieren“ und „AI-Schaltflächen ausblenden“.
- Die Zielsprache der Übersetzung folgt der Oberflächensprache.

**🚀 Verbesserungen**

- Die CPU-Unterstützung wurde bis auf Intel der 3. Generation (Ivy Bridge) und älter ausgedehnt. Auf älteren CPUs sind die AI-Funktionen nicht verfügbar; ein Dialog erklärt dies.
- Selbst gezeichnetes Hinweisfenster unten rechts, wenn Windows-Benachrichtigungen deaktiviert sind.
- Der Radiergummi radiert nun Pfeile und Linien und zeigt einen Radiergummi-Cursor.
- Die primäre Werkzeugleiste ist in die Menüleiste eingebettet und immer sichtbar. Die sekundäre Leiste verschiebt das Bild nicht mehr.
- Das Kopieren im Editor schließt das Fenster nicht mehr und hebt die Auswahl nicht auf. Das rote ✕ leert das Bild.
- Die Seite „Screenshot“ in den Einstellungen markiert neue Funktionen mit einem roten Punkt.

**🐞 Fehlerbehebungen**

- Die App stürzte beim Start auf CPUs ohne AVX2-Unterstützung ab – behoben.
- OCR schlug bei chinesischen und nicht englischen Installationspfaden fehl – behoben.
- Bilder mit nicht-ASCII-Zeichen im Pfad ließen sich nicht per Drag-and-Drop laden – behoben.
- Das Editorfenster lud den Screenshot aus der Benachrichtigung mitunter nicht – behoben.
- AI-Freistellen und AI-Radierer hinterließen verschobene Bilder und nicht gelöschte Streifen – behoben.
- Die Statusleiste des Editors wurde nach dem Laden eines Bildes nicht aktualisiert – behoben.
- Die Hervorhebungen der Textextraktion waren im Editor versetzt – behoben.
- Zahlen- und Emoji-Sticker wanderten beim Skalieren nach unten – behoben.

**🗑️ Entfernt**

- Die Menüs „Bearbeiten“ und „Ansicht“ aus der Menüleiste des Editors.

---

## Shotera v7.4.2

**Veröffentlicht:** 2026-09-07

Feedback in der App, Installer mit 22 Sprachen, Leistungsverbesserungen.

**✨ Neue Funktionen**

- Neues Feedback-Formular in der App unter Einstellungen → Über für Bewertungen, Vorschläge und Umfragen.
- Die Sprachunterstützung des NSIS-Installers wurde von 2 auf 22 Sprachen erweitert.

**🚀 Verbesserungen**

- Die Anmerkungsleistung wurde verbessert – flüssigeres Zeichnen.
- Die Erkennungsgranularität ist standardmäßig „UI-Elemente erkennen“.
- Auswahlanker erscheinen nur, wenn die Auswahl groß genug ist.
- Der Feedback-Eintrag unter „Über“ verwendet ein anklickbares Symbol.
- Die Formulierungen wurden für einen klareren Ton überarbeitet.
- Der Ablauf beim Öffnen der Update-Seite aus einer Benachrichtigung wurde verbessert.

**🐞 Fehlerbehebungen**

- Anmerkungs-Overlays erschienen auf dem falschen Monitor – behoben.
- Die Elementerkennung setzte Hervorhebungsebenen beim Wechsel zwischen Elementen zurück – behoben.
- Der Autostart funktionierte nach dem Upgrade der Microsoft Store-Version nicht mehr – behoben.

**🗑️ Entfernt**

- Der Eintrag „Funktionsführung“ und der Hinweistext zum Modus.

---

## Shotera v7.4.1

**Veröffentlicht:** 2026-09-04

Modellvergleich, einheitliche Benennung, Inline-Hilfe.

**✨ Neue Funktionen**

- Neue Modellvergleichstabelle: Das Hilfesymbol neben „AI-Freistellungsmodell“ öffnet eine Tabelle, die alle vier Modelle nach Größe, Geschwindigkeit, Qualität und Einsatzzweck vergleicht.
- Einheitliche Modellbenennung im Format „Modell · Eigenschaft“, sortiert vom kleinsten zum größten.
- Inline-Hilfe für die Bildübersetzung: Die Beschreibung wurde in einen Tooltip am Hilfesymbol verschoben.

---

## Shotera v7.4.0

**Veröffentlicht:** 2026-09-03

Neues Update-Erlebnis, Microsoft Store-Unterstützung, AI-Korrekturen.

**✨ Neue Funktionen**

- Das Update-Erlebnis wurde neu gestaltet, mit optimierter Update-Logik und Einstellungsoberfläche. Automatische Installation im Leerlauf, vier Update-Modi, intelligentere Erinnerungsfrequenz.
- Die Kompatibilität der Microsoft Store-Version wurde verbessert und der Autostart beim Windows-Start korrigiert.

**🐞 Fehlerbehebungen**

- Das AI-Freistellungsmodell wurde bei jeder Prüfung erneut heruntergeladen – behoben.
- China-Spiegel-Beschleunigung (shotera-ai.pages.dev) mit automatischem Rückgriff auf Hugging Face hinzugefügt.

---

## Shotera v7.3.1

**Veröffentlicht:** 2026-08-29

Unterstützung für den Dunkelmodus.

**✨ Neue Funktionen**

- Neue Unterstützung für den Dunkelmodus: Wählen Sie in den Einstellungen Hell, Dunkel oder Systemeinstellung folgen. Alle Fenster aktualisieren sich sofort, ohne Neustart.

---

## Shotera v7.3.0

**Veröffentlicht:** 2026-08-23

Automatische OCR, teilweises Kopieren, verknüpfte Hervorhebung.

**✨ Neue Funktionen**

- Automatische OCR: Text wird extrahiert, sobald ein Bereich ausgewählt ist. Die Auswahl bleibt bearbeitbar, mit automatischer Neuextraktion.
- Teilweises Kopieren: Ziehen Sie über den erkannten Text und drücken Sie Ctrl+C, um nur diesen Teil zu kopieren. Er erscheint im Windows-Zwischenablageverlauf.
- Verknüpfte Hervorhebung: Bei der Textauswahl im Originalbild werden die passenden Zeichen im Ergebnispanel Zeichen für Zeichen hervorgehoben.
- Werkzeugbewusste Überlagerung: Die Textebene bleibt interaktiv, solange kein Anmerkungswerkzeug aktiv ist, und wird ausgeblendet, sobald ein Werkzeug gewählt wird.
- Lokalisierung: Traditionelles Chinesisch, Japanisch, Koreanisch, Portugiesisch (Brasilien), Spanisch, Deutsch, Französisch, Italienisch, Russisch, Arabisch, Niederländisch, Polnisch und Schwedisch decken nun die Einstellungen der Bildübersetzung ab.

**🐞 Fehlerbehebungen**

- „Text extrahieren“ öffnete nach der automatischen OCR direkt das Ergebnispanel – behoben.
- Das Abbrechen eines Anmerkungswerkzeugs sperrte gezeichnete Formen nicht – behoben.
- Die Schaltfläche „Überspringen“ war in der Ersteinführungs-Führung unsichtbar – behoben.

---

## Shotera v7.2.2

**Veröffentlicht:** 2026-08-20

Anbieter für Bildübersetzung, Schlüsseltest, High-DPI-Korrekturen.

**✨ Neue Funktionen**

- Jeder Dienst ist nun eine einklappbare Karte: Baidu Bildübersetzung (V2.0 Hochpräzise / V1 Klassisch) und Youdao Translate (99 Sprachen).
- Baidu funktioniert sofort mit integriertem Kontingent. Eine eigene APP-ID und ein eigenes Secret erhöhen das Limit.
- Die Sprachauswahl wird je Anbieter gespeichert.
- Neu „Schlüssel testen“, um Anmeldedaten mit einer echten Anfrage zu prüfen.

**🐞 Fehlerbehebungen**

- Die API-Dokumentationslinks der Anbieter öffneten nicht korrekt – behoben.
- Das Ziehen der Auswahl nutzte einen hochfrequenten Zeigereingabepfad – behoben.
- High-DPI-Auswahlkoordinaten wurden über das Bühnenkoordinatensystem umgerechnet – behoben.
- Bei gemischten DPI-Werten und mehreren Monitoren richtete sich das eingefrorene Aufnahme-Overlay an den nativen Koordinaten des virtuellen Desktops aus – behoben.

---

## Shotera v7.2.1

**Veröffentlicht:** 2026-08-18

Direkt in die Zwischenablage aufnehmen, verschiebbare Werkzeugleisten.

**✨ Neue Funktionen**

- Neue Aufnahme direkt in die Zwischenablage: Drücken Sie Alt+C oder wählen Sie „Screenshot und Kopieren“ im Tray-Menü, um die Kommentierung zu überspringen. Der Screenshot landet in der Zwischenablage.
- Der Sechspunkt-Ziehgriff an der primären und sekundären Anmerkungswerkzeugleiste ist wieder verfügbar. Die Sichtbarkeit ist in den Einstellungen konfigurierbar.

---

## Shotera v7.2.0

**Veröffentlicht:** 2026-08-02

Schnellerer Aufnahmestart, benutzerdefinierte Aufnahme, 15 Sprachen.

**✨ Neue Funktionen**

- Deutlich schnellerer Aufnahmestart: Der Aufnahme- und Anmerkungspfad verwendet das Anmerkungsfenster wieder und wärmt es vor, wodurch der Engpass beim Bilddekodieren entfällt. In Dual-Monitor-Benchmarks sank die durchschnittliche Zeit vom Tastenkürzel bis zur Auswahl um 68,2 %.
- Neuer Arbeitsablauf für benutzerdefinierte Aufnahmen: Öffnen über das standardmäßige Alt+F1-Tastenkürzel oder das Tray-Menü. Definieren Sie exakte X/Y-Position und Breite/Höhe, sperren Sie das Seitenverhältnis, tauschen Sie die Ausrichtung und fügen Sie eine Verzögerung hinzu. Speichern Sie wiederverwendbare Größen-Vorgaben mit automatischer Wiederherstellung des zuletzt verwendeten Werts. Koordinaten für mehrere Monitore (auch negative Positionen) und Größen bis 40000 Pixel werden unterstützt.
- 15 neue Oberflächensprachen: Traditionelles Chinesisch, Japanisch, brasilianisches Portugiesisch, Spanisch, Deutsch, Französisch, Italienisch, Koreanisch, Russisch, Arabisch, Niederländisch, Polnisch und Schwedisch. Sprachänderungen wirken sofort in allen geöffneten Fenstern und im Tray, ohne Neustart. Arabisch enthält ein vollständiges Layout von rechts nach links.

**🚀 Verbesserungen**

- Saubereres Beenden der Aufnahme; alte Auswahlblitze und Nachbilder über das ganze Fenster wurden entfernt.
- Schnellere Erkennung verschachtelter Steuerelemente mit weniger Sprüngen.
- Symbole und Texte der Taskleisten-Steuerelemente sowie der Datei-Explorer-Navigation lassen sich präziser anvisieren.
- Die Barrierefreiheitsbäume von Chromium und Electron werden vorgewärmt und bei Bedarf erneut durchlaufen.
- Die Bildübertragung in die Zwischenablage nutzt einen direkteren RGBA-Pfad.
- Alt+T zum Anheften und Ctrl+S zum Speichern funktionieren bei aktiver Bereichsauswahl.
- Die AI-Modellressourcen wurden wiederhergestellt. Portable Pakete enthalten die erforderlichen Modelldateien.

---

## Shotera v7.1.0

**Veröffentlicht:** 2026-07-29

Fenstererkennung, Anmerkungswerkzeuge, erweiterte Anheftungen.

**✨ Neue Funktionen**

- Verbesserte Fenster- und Steuerelementerkennung mit einfacherer Auswahl verschachtelter Ziele.
- Verfeinerte Aufnahmelupe mit klareren Rändern, größeren Größenanfassern und verbessertem Fadenkreuz.
- Unterstützung für Formen, Pfeile, Text, Sticker, Marker und lokale Lupe hinzugefügt.
- Verbessertes Bearbeiten mit flüssigerem Skalieren, Drehen, Formatieren und Rückgängig/Wiederholen.
- Aktualisiertes Layout der Werkzeugleiste.
- Erweiterte immer sichtbare Anheftungen mit Verschieben, Skalieren, Drehen, Spiegeln, Deckkraft und Klick-durch.
- Bessere Kompatibilität mit der Zwischenablage.
- Der AI-Werkzeugeintrag und die Werkzeugleisten-Schaltflächen wurden wiederhergestellt.
- Die Einträge der Funktionsführung wurden wiederhergestellt.
- Der Präsentationsmodus wurde verbessert.
- Verbesserte Verwaltung von Tastenkürzeln, Update-Kanälen und Einstellungspersistenz.
- Zweisprachige Lizenz im MSI-Installer.
- Screenshots bleiben vollständig lokal. Kein Konto erforderlich.

---

## Shotera v7.0.0

**Veröffentlicht:** 2026-07-23

Das Wesentliche festhalten. Klar erklären. Sichtbar lassen.

**✨ Neue Funktionen**

- Schneller Screenshot-Ablauf mit F1-Hotkey, Fenster- und Steuerelementerkennung sowie Bildschirmlupe.
- Anmerkungswerkzeuge: Rechtecke, Ellipsen, Linien, Pfeile, Freihandstift, Textmarker, Rich-Text, automatische Schrittnummern, Mosaik/Unschärfe, Emoji-Sticker und lokale Lupe.
- F3 erstellt immer sichtbare Anheftungen für Screenshots oder Zwischenablageinhalte. Anheftungen unterstützen Verschieben, Skalieren, Drehen, Spiegeln und Transparenz.
- Der Präsentationsmodus hilft, den Desktop vor Screenshots und Besprechungen aufzuräumen, indem er Symbole ausblendet und Theme- sowie Hintergrund-Vorgaben anwendet.

**🚀 Verbesserungen**

- Konsistenteres Erlebnis mit klarerem Auswahlfeedback.
- Sichtbare Größenanfasser.
- Sauberere Aufnahmelupe.
- Ausgerichtete Anmerkungswerkzeugleisten.
- Verfeinerte Textbearbeitung.
- Verbesserte Einführung.
- Zuverlässige Einstellungen.
- Reibungslosere Windows-Installation.
