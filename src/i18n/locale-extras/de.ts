import type { LocaleExtras } from '../locale-extras-types';

/**
 * German copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's German language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Scrolling-Capture',

  home: {
    heroAlt:
      'Shotera-Werkzeuge auf dem Bildschirm: Aufnahme, Scrolling-Capture, Anmerkungen, Bildschirmaufnahme, KI-Freistellung, Offline-OCR, QR- und Barcode-Erkennung, Übersetzung und Anheften',
    cards: [
      {
        title: 'Scrolling-Capture',
        description:
          'Eine Seite, die höher ist als der Bildschirm, passt trotzdem in eine Aufnahme. Scrollen Sie selbst oder lassen Sie Shotera automatisch scrollen – der lange Screenshot wird dabei Stück für Stück zusammengesetzt.',
      },
      {
        title: 'QR- und Barcode-Erkennung',
        description:
          'Lesen Sie den Code in einem Screenshot aus – Links, WLAN, Kontakte, Barcodes – und kopieren Sie, was er enthält. Alles offline.',
      },
      {
        title: 'Bildbetrachter',
        description:
          'Öffnen Sie einen Screenshot oder eine beliebige Bilddatei im eigenen Betrachterfenster: im Ordner blättern, hineinzoomen und bei Bedarf nachbessern – ganz ohne weitere App. Gängige Formate öffnen sich sofort.',
      },
    ],
    scrolling: {
      tagline: 'Scrolling-Capture',
      title: 'Eine Seite, höher als der Bildschirm – in einer Aufnahme',
      text: 'Ganze Webseiten, lange Chats und komplette Dokumente – von oben bis unten in einem Bild festgehalten.',
      alt: 'Scrolling-Capture fügt eine lange Seite zu einem einzigen Bild zusammen',
      items: [
        {
          title: 'Automatisch oder selbst scrollen',
          description:
            'Lassen Sie Shotera die Seite abfahren oder scrollen Sie von Hand. Jeder Abschnitt wird dabei sofort erfasst.',
        },
        {
          title: 'Beim Zusammensetzen zusehen',
          description:
            'Neben der Auswahl läuft eine Live-Vorschau mit und wächst mit jedem Abschnitt – Sie können genau dann stoppen, wenn die ganze Seite drin ist.',
        },
        {
          title: 'Keine sichtbaren Übergänge',
          description:
            'Benachbarte Abschnitte werden abgeglichen und weich überblendet – der fertige lange Screenshot liest sich wie eine durchgehende Seite.',
        },
        {
          title: 'Kopieren oder speichern',
          description:
            'Den langen Screenshot direkt in die Zwischenablage kopieren oder auf der Festplatte speichern – bereit für Dokumentation, Chat und Fehlerberichte.',
        },
      ],
    },
    stats: [
      { title: 'Sprachen', amount: '15' },
      { title: 'Bewertung', amount: '4.9 / 5' },
      { title: 'Offline-KI', amount: '100%' },
      { title: 'Start per Tastenkürzel', amount: '<0.1s' },
    ],
    workflow: {
      title: 'In drei Schritten vom Bildschirm zum Teilen.',
      alt: 'Shotera-Workflow',
      steps: [
        {
          title: 'Tastenkürzel drücken',
          description:
            'Shotera überall aufrufen und den Zeiger über das Ziel bewegen – das gewünschte Fenster oder Element ist bereits erkannt.',
        },
        {
          title: 'Annotieren, extrahieren oder bearbeiten',
          description:
            'Wichtige Stellen markieren, OCR laufen lassen, ein Motiv freistellen, übersetzen – alles im selben Fenster.',
        },
        {
          title: 'Kopieren, speichern oder anheften',
          description:
            'In die Zwischenablage kopieren, lokal speichern oder oben anheften, um es schnell zur Hand zu haben.',
        },
      ],
    },
  },

  about: {
    statsTitle: 'Shotera auf einen Blick',
    metaDescription:
      'Über Shotera: warum wir ein schnelles, unaufdringliches Screenshot-Tool für Windows entwickelt haben – und was uns dabei leitet.',
    hero: {
      tagline: 'Über uns',
      title: 'Screenshots machen,',
      accent: 'die einfach verschwinden',
      subtitle:
        'Shotera entstand aus einem einfachen Frust: Screenshots, die man dutzendfach pro Tag macht, sollten sich schneller und flüssiger anfühlen. Wir sind ein kleines Team aus Produktleuten und Entwicklern, die täglich genauso intensiv mit Screenshot-Tools arbeiten wie Sie – und diese Hingabe steckt in jedem Tastenkürzel, jeder Auswahl, jedem Frame.',
      alt: 'Shotera-Werkzeuge für Anmerkungen auf einem Windows-Desktop',
    },
    stats: [
      { title: 'Sprachen', amount: '15' },
      { title: 'Bewertung', amount: '4.9 / 5' },
      { title: 'Offline-KI', amount: '100%' },
      { title: 'Start per Tastenkürzel', amount: '<0.1s' },
    ],
    stand: {
      title: 'Wofür wir stehen',
      subtitle:
        'Je besser sich ein Werkzeug anfühlt, desto weniger fällt es auf – diese Idee steht hinter jeder Entscheidung, die wir treffen.',
      items: [
        {
          title: 'Geschwindigkeit zuerst',
          description:
            'Ein Tastenkürzel zum Aufrufen, automatische Fenster- und Elementerkennung und genau der Ausschnitt, den Sie meinen. Unter einer Sekunde von der Absicht zur Aufnahme.',
        },
        {
          title: 'Lokal zuerst & privat',
          description:
            'OCR, Freistellung und mehr laufen, wo immer möglich, auf Ihrem Gerät. Ihre Screenshots bleiben aus der Cloud, es sei denn, Sie möchten es anders.',
        },
        {
          title: 'Bewusst zurückhaltend',
          description:
            'Keine überladenen Funktionen, keine Unterbrechungen im Arbeitsfluss. Häufiges ist einen Klick entfernt, Fortgeschrittenes taucht nur auf, wenn Sie es brauchen.',
        },
      ],
    },
    core: {
      title: 'Kernfunktionen',
      subtitle:
        'Screenshot, Langer Screenshot, Anheften, Bildschirmaufnahme, Offline-OCR und KI auf dem Gerät – die sechs Dinge für den Alltag, nur ein Tastenkürzel entfernt.',
      alt: 'Shotera-Anmerkungswerkzeuge auf einem Windows-Desktop: Auswahl, Werkzeugleiste und schwebende Kacheln',
      items: [
        {
          title: 'Screenshot',
          description:
            'Intelligente Fenster- und Elementerkennung – der gewünschte Ausschnitt ist bereits ausgewählt, manuelles Ziehen ist nur selten nötig. Nach der Auswahl sofort kopieren oder die Anmerkungsleiste öffnen – zwei Abschlussmodi, ganz wie Sie möchten.',
        },
        {
          title: 'Langer Screenshot',
          description:
            'Eine Seite oder einen langen Chat scrollen und von Shotera zu einem langen Screenshot zusammensetzen lassen – automatisch oder von Hand, mit Live-Vorschau.',
        },
        {
          title: 'Auf Desktop anheften',
          description:
            'Jeden Screenshot als Referenz oben schweben lassen und mehrere Bilder nebeneinander anordnen – ohne Durcheinander.',
        },
        {
          title: 'Bildschirmaufnahme & GIF',
          description:
            'Den Bildschirm aufnehmen und als leichtes GIF exportieren; Cursor-Hervorhebungen und Klick-Hinweise halten Demos verständlich.',
        },
        {
          title: 'Offline-OCR',
          description:
            'Text aus jedem Screenshot extrahieren – auf Ihrem Gerät, in mehreren Sprachen. Einfach kopieren und einfügen.',
        },
        {
          title: 'AI-Freistellen & AI-Radierer',
          description:
            'AI-Freistellen entfernt den Hintergrund mit einem Klick und exportiert ein transparentes PNG; der AI-Radierer beseitigt Störendes und Wasserzeichen. Beide laufen auf lokalen Modellen – nichts wird hochgeladen.',
        },
      ],
    },
    more: {
      title: 'Weitere Funktionen',
      subtitle:
        'Die Details, die den Unterschied machen: Anmerkungen, Erkennung, Bildbetrachtung und die passenden Einstellungen dazu.',
      items: [
        {
          title: 'Anmerkungswerkzeuge',
          description:
            'Rechteck/Ellipse, Linie/Pfeil, Pinsel, Textmarker, Mosaik/Unschärfe, Text, Nummerierung, Emoji-Sticker, Lupe und Radiergummi – direkt beim Aufnehmen annotieren.',
        },
        {
          title: 'Emoji-Sticker',
          description:
            'Hunderte Emoji-Sticker – Daumen hoch, Herzen, Lachen, Konfetti – frei skalierbar und beliebig platzierbar, für ein bisschen Spaß am Screenshot.',
        },
        {
          title: 'Bildbetrachter & Bildeditor',
          description:
            'Einen Screenshot oder eine beliebige Bilddatei im eigenen Betrachterfenster öffnen – im Ordner blättern, hineinzoomen und bei Bedarf nachbessern. Gängige Formate öffnen sich sofort.',
        },
        {
          title: 'Bildübersetzung',
          description:
            'Text in jedem Bild direkt erkennen und übersetzen – fremde Dokumente, Diagramme und Oberflächen werden lesbar.',
        },
        {
          title: 'QR- und Barcode-Erkennung',
          description:
            'QR-Codes und Barcodes direkt im Screenshot auslesen: Links, WLAN, Kontakte, Produktcodes – das Ergebnis mit einem Klick kopieren. Alles offline.',
        },
        {
          title: 'Benutzerdefinierter Screenshot',
          description:
            'Feste Größe, Seitenverhältnis, Verzögerung und Bildschirmkoordinaten – praktisch für Bildmaterial und Serienaufnahmen.',
        },
        {
          title: 'Multi-Monitor',
          description:
            'Alle Bildschirme arbeiten in einem gemeinsamen Koordinatensystem – auch sekundäre und erweiterte Displays lassen sich korrekt auswählen, und Aufnahmen bleiben auf High-DPI-Panels scharf.',
        },
        {
          title: 'Dunkler Modus',
          description: 'Folgen Sie dem System, oder wechseln Sie manuell zwischen hell und dunkel.',
        },
        {
          title: 'Präsentationsmodus',
          description:
            'Räumen Sie den Desktop mit einem Tastendruck auf – Fenster, Symbole und Hintergrundbild – und stellen Sie danach alles wieder her.',
        },
      ],
    },
    values: {
      title: 'Unsere Werte',
      subtitle:
        'Für uns sind Bauen und Benutzen eines Werkzeugs dasselbe. Wir arbeiten täglich mit dem, was wir entwickeln.',
      items: [
        {
          title: 'Für die echte Arbeit gebaut',
          description:
            'Jede Funktion entsteht aus einem echten Problem – Dokumentation schreiben, Design-Specs kommentieren, Fehler reproduzieren, fremdsprachiges Material lesen. Wir nutzen sie zuerst selbst und geben sie dann an Sie weiter.',
        },
        {
          title: 'Ständig verfeinert',
          description:
            'Das Gefühl der Tastenkürzel, das Einrasten an Kanten, Dateigröße gegen Klarheit bei Aufnahmen – wir feilen so lange an den Details, bis sie sich richtig anfühlen.',
        },
        {
          title: 'Respekt für Nutzer',
          description:
            'Keine Bündelsoftware, keine nervigen Pop-ups, kein heimliches Hochladen Ihrer Daten. Kernfunktionen bleiben kostenlos – das ist unser Versprechen.',
        },
      ],
    },
    history: {
      title: 'Wie wir hierher kamen',
      subtitle: 'Von einem Werkzeug für uns selbst zu einem, auf das sich täglich viele verlassen.',
      cta: 'Shotera kostenlos herunterladen',
      items: [
        {
          title: 'Begann mit unserem eigenen Bedarf',
          description:
            'Wir fanden kein Aufnahmewerkzeug, das schnell und flüssig genug war – also schrieben wir selbst eines.',
        },
        {
          title: 'Von Nutzern vorangebracht',
          description:
            'Scrolling-Capture, KI-Freistellung, Offline-OCR, Bildübersetzung – viele Funktionen stammen direkt aus Nutzerfeedback.',
        },
        {
          title: 'Mehr Menschen erreichen',
          description:
            'Heute spricht Shotera 15 Oberflächensprachen und es werden stetig mehr – mit demselben Ziel: Screenshots einfach zu machen.',
        },
      ],
    },
    contact: {
      title: 'Kontakt aufnehmen',
      tagline: 'Jederzeit erreichbar',
      items: [
        {
          title: 'Community',
          description:
            'Werden Sie Teil der Shotera-Community: neue Versionen, Tipps und ein direkter Draht für Ihr Feedback.',
        },
        {
          title: 'E-Mail-Support',
          description:
            'Ein Problem oder eine Idee für eine Funktion? Schreiben Sie an mosuzo.studio@gmail.com – wir lesen und beantworten jede Nachricht.',
        },
      ],
    },
  },
};
