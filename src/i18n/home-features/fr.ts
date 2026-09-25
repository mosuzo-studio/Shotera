import type { HomeFeaturesContent } from '~/i18n/home-features-types';

export const content: HomeFeaturesContent = {
  features: {
    tagline: 'Fonctions principales',
    title: 'Une seule application pour toutes vos captures',
    subtitle:
      'De la capture rapide au travail créatif, Shotera réunit vos besoins les plus fréquents de capture, d’enregistrement, d’OCR et d’annotation dans une application légère.',
    items: [
      {
        title: 'Capture intelligente',
        description:
          'Capturez une zone, une fenêtre ou l’écran entier d’une seule touche. Shotera détecte automatiquement les fenêtres et les éléments d’interface au pixel près.',
      },
      {
        title: 'Enregistrement d’écran et GIF',
        description:
          'Enregistrez en ultra-HD jusqu’en 4K avec une fréquence d’images élevée, puis exportez en MP4 ou en GIF léger. Aucune limite de durée — enregistrez aussi longtemps que nécessaire.',
      },
      {
        title: 'Détourage IA',
        description:
          'Isolez le sujet et supprimez l’arrière-plan en un clic. Personnes, produits, logos : détourés et prêts à l’emploi, traités entièrement en local. Pas besoin de Photoshop.',
      },
      {
        title: 'Effacement IA',
        description:
          'Supprimez intelligemment les objets indésirables, les filigranes ou les imperfections d’une image. L’IA reconstitue l’arrière-plan naturellement. Entièrement hors ligne, entièrement privé.',
      },
      {
        title: 'OCR hors ligne',
        description:
          'Extrayez le texte de n’importe quelle capture, traité entièrement sur votre appareil. Rien n’est envoyé. Gère proprement les langues mixtes, le code et les tableaux.',
      },
      {
        title: 'Traduction d’images',
        description:
          'Reconnaissez et traduisez le texte de n’importe quelle image à la volée. Lisez documents, captures et menus en langue étrangère, puis copiez la traduction directement.',
      },
      {
        title: 'Épingler à l’écran',
        description:
          'Gardez n’importe quelle capture flottant au-dessus pendant que vous travaillez. Redimensionnez, organisez et consultez côte à côte sans changer de fenêtre.',
      },
    ],
  },
  capture: {
    tagline: 'Capture',
    title: 'Capture rapide, cadrage précis',
    heading: 'Conçu pour un usage constant',
    text: 'Déclenchez-le par un raccourci, puis capturez, annotez et copiez d’un seul geste, sans interruption.',
    items: [
      {
        title: 'Détection intelligente des fenêtres et éléments',
        description:
          'Survolez pour vous accrocher à n’importe quelle fenêtre ou élément d’interface — sans glisser manuellement. Verrouillez exactement ce que vous voulez en une seconde.',
      },
      {
        title: 'Une panoplie d’annotation complète',
        description:
          'Autocollants emoji, loupe, numérotation des étapes, flèches, cadres, texte, surlignage et flou — annotez au moment de la capture pour que le message soit immédiatement clair.',
      },
      {
        title: 'Flou et surlignage',
        description:
          'Floutez les informations sensibles ou mettez en évidence les zones clés en un clic. Confidentialité et accent visuel, les deux à la fois.',
      },
    ],
  },
  recording: {
    tagline: 'Enregistrement',
    title: 'Enregistrements et GIF en ultra-HD, sans limite de durée',
    text: 'Transformez ce qui est difficile à expliquer en une vidéo que tout le monde peut suivre.',
    items: [
      {
        title: 'Ultra-HD, enregistrement illimité',
        description:
          'Enregistrez en 1080p, 2K ou 4K ultra-HD avec une fréquence d’images élevée. Aucune limite de durée — enregistrez aussi longtemps que nécessaire.',
      },
      {
        title: 'Exportez en GIF léger',
        description:
          'Intégrez-les dans des documents, des discussions ou des tickets. Aucun lecteur requis — la lecture démarre dès le chargement.',
      },
      {
        title: 'Capturez le curseur et les clics',
        description:
          'Mettez en évidence le pointeur et les clics pour que chaque étape de votre démonstration reste limpide.',
      },
      {
        title: 'Sortie flexible',
        description:
          'MP4 ou GIF dans la résolution de votre choix, pour équilibrer qualité et poids de fichier selon le besoin.',
      },
    ],
  },
  ai: {
    tagline: 'Fonctions IA',
    title: 'Une IA qui va au-delà de la capture',
    text: 'Détourage, effacement et OCR IA tournent en local — l’intelligence sans sacrifier la confidentialité.',
    items: [
      {
        title: 'Suppression d’arrière-plan par IA',
        description:
          'Détectez le sujet et supprimez l’arrière-plan en un clic — des PNG transparents de personnes et de produits en quelques secondes. Tourne entièrement sur votre appareil.',
      },
      {
        title: 'Effacement IA',
        description:
          'Supprimez intelligemment objets indésirables, filigranes ou imperfections. L’IA reconstitue l’arrière-plan naturellement. Fonctionne aussi en local — aucun envoi, aucun cloud.',
      },
      {
        title: 'Extraction de texte hors ligne',
        description:
          'L’OCR tourne en local et n’atteint jamais le cloud. Transformez le texte d’une capture en texte modifiable et copiable en un clic.',
      },
      {
        title: 'Changement de modèle flexible',
        description:
          'Le détourage et l’effacement IA acceptent le changement de modèle personnalisé. Utilisez le meilleur modèle du moment à tout instant et gardez une longueur d’avance.',
      },
    ],
  },
  more: {
    tagline: 'Plus de fonctions',
    title: 'Ces petits détails sur lesquels vous allez compter',
    subtitle: 'Les petites attentions cachées dans les détails sont ce qui rend Shotera difficile à quitter.',
    items: [
      {
        title: 'Autocollants emoji',
        description:
          'Ajoutez des autocollants emoji et des annotations amusantes à vos captures en un clic. Rendez vos images plus expressives.',
      },
      {
        title: 'Loupe',
        description:
          'Zoomez sur les détails clés pour que votre audience voie exactement ce que vous voulez souligner.',
      },
      {
        title: 'Numérotation des étapes',
        description:
          'Guidez la lecture de vos captures grâce à des annotations numérotées — parfait pour les tutoriels et les guides pas à pas.',
      },
      {
        title: 'Épingler à l’écran',
        description:
          'Gardez vos images de référence flottant au-dessus pour travailler à côté, sans jongler entre les fenêtres.',
      },
      {
        title: 'Raccourcis personnalisés',
        description:
          'Associez chaque action fréquente au raccourci qui vous convient. Le favori des utilisateurs avancés.',
      },
      {
        title: 'Historique',
        description:
          'Chaque capture et chaque enregistrement est sauvegardé automatiquement : un faux geste ne fait plus perdre votre travail.',
      },
      {
        title: 'Prise en charge des écrans multiples',
        description:
          'Fonctionne parfaitement sur plusieurs écrans et affichages à DPI élevé, avec une capture précise sur chacun.',
      },
      {
        title: 'Local d’abord, privé avant tout',
        description:
          'OCR, détourage et effacement IA s’exécutent sur votre appareil — rien n’est envoyé. Vos captures n’appartiennent qu’à vous.',
      },
      {
        title: 'Léger en ressources',
        description:
          'Démarre instantanément avec une empreinte mémoire minimale, toujours en veille sans ralentir votre machine.',
      },
      {
        title: 'Mode sombre',
        description: 'Suit automatiquement le thème de votre système — reposant pour les yeux, de jour comme de nuit.',
      },
    ],
  },
};
