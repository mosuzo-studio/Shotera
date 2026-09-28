import type { FaqContent } from '../faq-types';

/**
 * German FAQ copy. Structure mirrors the English page; wording follows the
 * app's de language pack.
 */
export const content: FaqContent = {
  metaTitle: 'Häufige Fragen',
  metaDescription:
    'Kurze Antworten zu Shotera: unterstützte Plattformen und Oberflächensprachen, was offline läuft, was kostenlos bleibt, wie Export und Leistung funktionieren – und Details wie Oberflächenthema und Tastenkürzel.',
  title: 'Häufig gestellte Fragen',
  lead: 'Plattformen, Sprachen, Offline-Datenschutz, Editionen, Export und Details – die Kurzfassung.',
  groups: [
    {
      id: 'platform',
      label: 'Plattform und Sprachen',
      items: [
        {
          q: 'Welche Betriebssysteme unterstützt Shotera?',
          a: 'Shotera unterstützt derzeit Windows-Desktop mit einem kleinen Installer, der schnell startet und offline funktioniert – herunterladen und sofort loslegen. macOS, Linux und weitere Plattformen stehen auf der Roadmap.',
        },
        {
          q: 'Welche Oberflächensprachen unterstützt Shotera?',
          a: 'Shotera unterstützt jetzt Traditionelles Chinesisch, Japanisch, Brasilianisches Portugiesisch, Spanisch, Deutsch, Französisch, Italienisch, Koreanisch, Russisch, Arabisch, Niederländisch, Polnisch und Schwedisch. Zusammen mit Englisch und vereinfachtem Chinesisch unterstützt Shotera damit 15 Oberflächensprachen.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Offline und Datenschutz',
      items: [
        {
          q: 'Brauchen Offline-OCR und AI-Freistellen eine Internetverbindung?',
          a: 'Nein. Offline-OCR, AI-Freistellen und AI-Radierer laufen vollständig offline auf Ihrem Gerät – nichts wird hochgeladen, Ihre Daten bleiben geschützt. Die Bildübersetzung nutzt Cloud-APIs und folgt den Datenschutzrichtlinien der jeweiligen Cloud-Anbieter.',
        },
        {
          q: 'Kann ich Shotera auch ganz ohne Verbindung nutzen?',
          a: 'Ja. Screenshot, Anmerkungen, Bildschirmaufnahme, Offline-OCR, AI-Freistellen, AI-Radierer und der Bildbetrachter funktionieren offline, und nichts, was Sie aufnehmen, verlässt Ihren PC. Die Bildübersetzung ist die einzige Funktion, die eine Cloud-API aufruft, und braucht deshalb eine Verbindung.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Editionen, Export und Leistung',
      items: [
        {
          q: 'Ist Shotera kostenlos?',
          a: 'Die Kernfunktionen Screenshot, Anmerkungen und Anheften sind dauerhaft kostenlos. Wenn Sie nur alltägliche Aufnahmen und Anmerkungen brauchen, ist Shotera Lite die schlankere Variante – sie lässt Bildschirmaufnahme und AI weg. Bildschirmaufnahme, AI-Freistellen, AI-Radierer und Bildübersetzung gibt es in der Shotera Standard-Edition – Details finden Sie im Versionsvergleich.',
        },
        {
          q: 'Welche Auflösungen und Bildraten sind bei Bildschirmaufnahmen möglich?',
          a: 'Die Aufnahmequalität reicht von 720p über 1080p und 2K bis 4K, bei 30 fps oder 60 fps – ohne Zeitlimit. Der Export ist als MP4 möglich oder als GIF, dessen Bildrate sich senken lässt, um die Datei klein zu halten.',
        },
        {
          q: 'Lassen sich Bildschirmaufnahmen als GIF exportieren?',
          a: 'Ja. Jede Bildschirmaufnahme lässt sich als MP4 exportieren – von 720p bis 4K, mit 30 oder 60 fps – oder als kompaktes GIF für Dokumentation, Chat und Fehlerberichte. Beide Optionen begrenzen die Aufnahmedauer nicht.',
        },
        {
          q: 'Wird mein Computer dadurch langsamer?',
          a: 'Nein. Shotera ist auf Leichtigkeit ausgelegt – minimaler Speicherverbrauch und sofortiger Start, auch im Hintergrund kaum bemerkbar.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Details und Anpassung',
      items: [
        {
          q: 'Gibt es einen dunklen Modus?',
          a: 'Ja. Unter Einstellungen → Allgemein → Oberflächenthema wechseln Sie zwischen „Systemeinstellung folgen“, Hell und Dunkel; „Systemeinstellung folgen“ übernimmt die Hell-/Dunkel-Einstellung von Windows automatisch.',
        },
        {
          q: 'Funktioniert Shotera mit mehreren Monitoren und hochauflösenden Bildschirmen?',
          a: 'Ja. Mehrere Monitore werden als ein durchgehender Desktop behandelt – auch ein sekundärer Bildschirm links vom Hauptbildschirm lässt sich korrekt auswählen, und auf High-DPI-Displays bleiben Oberfläche und Aufnahmen scharf.',
        },
        {
          q: 'Kann ich die Tastenkürzel ändern?',
          a: 'Ja. Screenshot, benutzerdefinierter Screenshot, Anheften und Präsentationsmodus lassen sich unter Einstellungen → Tastenkürzel neu belegen. Ist eine Taste bereits von einer anderen Anwendung belegt, weist Shotera darauf hin; alle Standardbelegungen stellen Sie mit einem Klick wieder her.',
        },
        {
          q: 'Wie aktualisiere ich auf eine neue Version?',
          a: 'Shotera aktualisiert sich selbst: Standardmäßig prüft es beim Start auf Updates, kann Updates im Hintergrund herunterladen und installieren, oder Sie prüfen manuell unter Einstellungen → Updates. Die Microsoft-Store-Edition bleibt über den Store aktuell.',
        },
      ],
    },
  ],
  footnoteBefore: 'Haben Sie noch eine Frage? ',
  footnoteLink: 'Kontaktieren Sie uns',
  footnoteAfter: ' – wir antworten in der Regel innerhalb von 24 Geschäftsstunden.',
};
