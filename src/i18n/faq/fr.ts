import type { FaqContent } from '../faq-types';

/**
 * French FAQ copy. Structure mirrors the English page; wording follows the
 * app's fr language pack.
 */
export const content: FaqContent = {
  metaTitle: 'Questions fréquentes',
  metaDescription:
    'Réponses courtes sur Shotera\u00a0: plateformes et langues d’interface prises en charge, ce qui fonctionne hors ligne, ce qui reste gratuit, le fonctionnement des exports et des performances, et les détails comme les thèmes et les raccourcis.',
  title: 'Questions fréquentes',
  lead: 'Plateformes, langues, confidentialité hors ligne, versions, export et détails\u00a0: l’essentiel en bref.',
  groups: [
    {
      id: 'platform',
      label: 'Plateforme et langues',
      items: [
        {
          q: 'Quels systèmes d’exploitation Shotera prend-il en charge\u00a0?',
          a: 'Shotera prend actuellement en charge Windows sur ordinateur de bureau, avec un installateur léger qui se lance rapidement et fonctionne hors ligne — téléchargez-le et commencez tout de suite. macOS, Linux et d’autres plateformes sont prévus dans la feuille de route.',
        },
        {
          q: 'Quelles langues d’interface Shotera prend-il en charge\u00a0?',
          a: 'Shotera prend désormais en charge le chinois traditionnel, le japonais, le portugais du Brésil, l’espagnol, l’allemand, le français, l’italien, le coréen, le russe, l’arabe, le néerlandais, le polonais et le suédois. Avec l’anglais et le chinois simplifié, Shotera prend en charge 15 langues d’interface.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Hors ligne et confidentialité',
      items: [
        {
          q: 'L’OCR et le détourage AI ont-ils besoin d’une connexion internet\u00a0?',
          a: 'Non. L’OCR hors ligne, le détourage AI et l’effacement AI fonctionnent entièrement hors ligne sur votre appareil — rien n’est téléversé et vos données restent protégées. La traduction d’images passe par des API cloud et respecte les politiques de confidentialité des fournisseurs concernés.',
        },
        {
          q: 'Puis-je utiliser Shotera sans aucune connexion\u00a0?',
          a: 'Oui. La capture, l’annotation, l’enregistrement d’écran, l’OCR hors ligne, le détourage AI, l’effacement AI et la visionneuse d’images fonctionnent hors ligne, et rien de ce que vous capturez ne quitte votre PC. La traduction d’images est la seule fonction qui fait appel à une API cloud\u00a0: elle nécessite donc une connexion.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Versions, export et performances',
      items: [
        {
          q: 'Shotera est-il gratuit\u00a0?',
          a: 'La capture, l’annotation et l’épinglage au bureau sont gratuits à vie. Si vous n’avez besoin que de captures et d’annotations au quotidien, Shotera Lite est une version plus légère — sans enregistrement d’écran ni IA. L’enregistrement d’écran, le détourage AI, l’effacement AI et la traduction d’images sont inclus dans la version Standard — voir la comparaison des versions pour plus de détails.',
        },
        {
          q: 'Quelles résolutions et fréquences d’images sont disponibles pour l’enregistrement\u00a0?',
          a: 'La qualité d’enregistrement va de 720p à 1080p, 2K et 4K, à 30 fps ou 60 fps — sans limite de durée. L’export se fait en MP4 ou en GIF, dont vous pouvez baisser la fréquence d’images pour garder un fichier léger.',
        },
        {
          q: 'Les enregistrements peuvent-ils être exportés en GIF\u00a0?',
          a: 'Oui. Chaque enregistrement peut être exporté en MP4 — de 720p à 4K, à 30 ou 60 fps — ou en GIF compact pour la documentation, les discussions et les signalements de bugs. Aucune des deux options ne limite la durée d’enregistrement.',
        },
        {
          q: 'Shotera ralentit-il mon ordinateur\u00a0?',
          a: 'Non. Shotera est conçu pour rester léger — consommation de mémoire minimale et démarrage instantané, quasi imperceptible même en arrière-plan.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Détails et personnalisation',
      items: [
        {
          q: 'Shotera propose-t-il un mode sombre\u00a0?',
          a: 'Oui. Paramètres → Général → Thème de l’interface permet de choisir entre «\u00a0Suivre le système\u00a0», «\u00a0Clair\u00a0» et «\u00a0Sombre\u00a0»\u00a0; «\u00a0Suivre le système\u00a0» reprend automatiquement le réglage clair/sombre de Windows.',
        },
        {
          q: 'Fonctionne-t-il avec plusieurs écrans et des écrans à haute résolution\u00a0?',
          a: 'Oui. Les écrans multiples sont traités comme un seul bureau continu\u00a0: un écran secondaire placé à gauche de l’écran principal se sélectionne correctement, et l’interface comme les captures restent nettes sur les écrans à DPI élevé.',
        },
        {
          q: 'Puis-je modifier les raccourcis clavier\u00a0?',
          a: 'Oui. La capture, la capture personnalisée, l’épinglage au bureau et le mode présentation peuvent être redéfinis dans Paramètres → Raccourcis\u00a0; si une touche est déjà utilisée par une autre application, Shotera vous le signale, et vous pouvez restaurer toutes les valeurs par défaut en un clic.',
        },
        {
          q: 'Comment mettre à jour vers une nouvelle version\u00a0?',
          a: 'Shotera se met à jour lui-même\u00a0: par défaut, il vérifie les mises à jour au démarrage, peut les télécharger et les installer en arrière-plan, ou vous pouvez lancer une vérification manuelle dans Paramètres → Mises à jour. La version Microsoft Store reste à jour via le Store.',
        },
      ],
    },
  ],
  footnoteBefore: 'Vous avez encore une question\u00a0? ',
  footnoteLink: 'Nous contacter',
  footnoteAfter: ' — nous répondons généralement sous 24 heures ouvrées.',
};
