import type { LocaleExtras } from '../locale-extras-types';

/**
 * French copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's French language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Capture avec défilement',

  home: {
    heroAlt:
      'Outils Shotera à l’écran : capture, capture avec défilement, annotation, enregistrement, détourage IA, OCR hors ligne, lecture de QR Code et de codes-barres, traduction et épinglage',
    cards: [
      {
        title: 'Capture avec défilement',
        description:
          'Une page plus haute que l’écran tient quand même en une seule capture. Faites défiler vous-même ou laissez Shotera défiler automatiquement : la longue capture s’assemble au fil du défilement.',
      },
      {
        title: 'Lecture de QR Code et de codes-barres',
        description:
          'Lisez le code contenu dans une capture — liens, Wi-Fi, contacts, codes-barres — et copiez ce qu’il renferme. Entièrement hors ligne.',
      },
      {
        title: 'Visionneuse d’images',
        description:
          'Ouvrez une capture ou n’importe quel fichier image dans sa propre fenêtre de visionneuse : parcourez le dossier, zoomez et retouchez ce qu’il faut — sans aucune autre application. Les formats courants s’ouvrent immédiatement.',
      },
    ],
    scrolling: {
      tagline: 'Capture avec défilement',
      title: 'Une page plus haute que l’écran, en une seule capture',
      text: 'Pages entières, longues discussions et documents complets — capturés de haut en bas en une seule image.',
      alt: 'Capture avec défilement assemblant une longue page en une seule image',
      items: [
        {
          title: 'Défilement automatique ou à la main',
          description:
            'Laissez Shotera parcourir la page ou faites défiler à la main. Dans les deux cas, chaque portion est capturée au fil du défilement.',
        },
        {
          title: 'Regardez l’assemblage en direct',
          description:
            'Un aperçu en direct s’affiche à côté de la sélection et grandit à chaque portion : vous pouvez vous arrêter dès que toute la page est capturée.',
        },
        {
          title: 'Aucune couture visible',
          description:
            'Les portions adjacentes sont alignées et fondues : la longue capture finale se lit comme une page continue.',
        },
        {
          title: 'Copier ou enregistrer',
          description:
            'Envoyez la longue capture directement dans le presse-papiers ou enregistrez-la sur le disque — prête pour les documents, les discussions et les tickets de bug.',
        },
      ],
    },
    stats: [
      { title: 'Langues', amount: '15' },
      { title: 'Note', amount: '4.9 / 5' },
      { title: 'IA hors ligne', amount: '100%' },
      { title: 'Lancement par raccourci', amount: '<0.1s' },
    ],
    workflow: {
      title: 'De l’écran au partage en trois étapes.',
      alt: 'Flux de travail Shotera',
      steps: [
        {
          title: 'Appuyez sur le raccourci',
          description: 'Appelez Shotera n’importe où et survolez : la fenêtre ou l’élément voulu est déjà détecté.',
        },
        {
          title: 'Annotez, extrayez ou modifiez',
          description:
            'Marquez les points importants, lancez l’OCR, détourez un sujet, traduisez — dans la même fenêtre.',
        },
        {
          title: 'Copiez, enregistrez ou épinglez',
          description:
            'Envoyez vers le presse-papiers, enregistrez en local ou épinglez au-dessus pour l’avoir sous la main.',
        },
      ],
    },
  },

  about: {
    statsTitle: 'Shotera en un coup d’œil',
    metaDescription:
      'À propos de Shotera : pourquoi nous avons créé un outil de capture rapide et discret pour Windows, et ce qui guide chacune de nos décisions.',
    hero: {
      tagline: 'À propos',
      title: 'Faites des captures',
      accent: 'qui se font oublier',
      subtitle:
        'Shotera est né d’une frustration simple : les captures que l’on fait des dizaines de fois par jour devraient être plus rapides et plus fluides. Nous sommes une petite équipe de profils produit et d’ingénieurs qui s’appuient sur les outils de capture aussi intensivement que n’importe qui — et cette obsession se retrouve dans chaque raccourci, chaque sélection, chaque image.',
      alt: 'Outils d’annotation Shotera sur un bureau Windows',
    },
    stats: [
      { title: 'Langues', amount: '15' },
      { title: 'Note', amount: '4.9 / 5' },
      { title: 'IA hors ligne', amount: '100%' },
      { title: 'Lancement par raccourci', amount: '<0.1s' },
    ],
    stand: {
      title: 'Ce à quoi nous tenons',
      subtitle: 'Plus un outil est agréable, moins on le remarque — cette idée guide chacune de nos décisions.',
      items: [
        {
          title: 'La vitesse avant tout',
          description:
            'Un raccourci pour l’appeler, la détection automatique des fenêtres et des éléments, et exactement le cadrage voulu. Moins d’une seconde entre l’intention et la capture.',
        },
        {
          title: 'Local d’abord, privé avant tout',
          description:
            'L’OCR, le détourage et le reste tournent sur l’appareil quand c’est possible. Vos captures ne partent pas dans le cloud, sauf si vous en décidez autrement.',
        },
        {
          title: 'La retenue comme principe',
          description:
            'Pas de fonctions superflues, pas d’interruption de votre flux. L’essentiel est à un clic ; le reste n’apparaît que lorsque vous en avez besoin.',
        },
      ],
    },
    toolbox: {
      title: '',
      subtitle: '',
      alt:
        'Boîte à outils Shotera : capture, capture avec défilement, enregistrement, détourage IA, OCR hors ligne, traduction d’images, épinglage et visionneuse d’images',
      items: [
        {
          title: 'Capture',
          description:
            'Détection intelligente des fenêtres et des éléments — le cadrage voulu est déjà choisi, vous ne tracez presque jamais de cadre à la main.',
        },
        {
          title: 'Capture avec défilement',
          description:
            'Faites défiler une page ou une longue discussion et laissez Shotera l’assembler en une longue capture — automatiquement ou à la main, avec un aperçu en direct.',
        },
        {
          title: 'Enregistrement d’écran et GIF',
          description:
            'Enregistrez votre écran et exportez un GIF léger ; surbrillance du curseur et indices de clic gardent les démos claires.',
        },
        {
          title: 'Détourage IA',
          description:
            'Détectez le sujet et supprimez l’arrière-plan en un clic, avec export en PNG transparent. Sans Photoshop.',
        },
        {
          title: 'OCR hors ligne',
          description:
            'Extrayez le texte de n’importe quelle capture, sur votre appareil, en plusieurs langues. Copiez-collez — sans internet.',
        },
        {
          title: 'Traduction d’images',
          description:
            'Reconnaissez et traduisez le texte de n’importe quelle image sur-le-champ — documents, graphiques et interfaces étrangers deviennent lisibles.',
        },
        {
          title: 'Épingler à l’écran',
          description:
            'Gardez n’importe quelle capture flottant au-dessus comme référence, disposée côte à côte sans désordre.',
        },
        {
          title: 'Visionneuse d’images',
          description:
            'Ouvrez une capture ou n’importe quel fichier image dans sa propre fenêtre : parcourez un dossier, zoomez et retouchez ce qu’il faut.',
        },
      ],
    },
    values: {
      title: 'Nos valeurs',
      subtitle:
        'Concevoir un outil et l’utiliser, c’est la même chose pour nous. Nous travaillons chaque jour avec ce que nous créons.',
      items: [
        {
          title: 'Conçu pour le vrai travail',
          description:
            'Chaque fonction vient d’un vrai problème — rédiger de la documentation, annoter des maquettes, enregistrer des reproductions de bugs, lire des documents étrangers. Nous l’utilisons d’abord, puis nous vous la confions.',
        },
        {
          title: 'Peaufiné sans relâche',
          description:
            'Le ressenti des raccourcis, l’accroche des bords sur les sélections, la taille d’enregistrement face à la netteté — nous peaufinons les détails jusqu’à ce qu’ils soient justes.',
        },
        {
          title: 'Le respect des utilisateurs',
          description:
            'Pas de logiciels imposés, pas de pop-ups harcelantes, pas d’envoi discret de vos données. Les fonctions essentielles restent gratuites — c’est notre promesse.',
        },
      ],
    },
    history: {
      title: 'Notre parcours',
      subtitle: 'D’un outil que nous avons créé pour nous à un outil sur lequel on compte chaque jour.',
      cta: 'Télécharger Shotera gratuitement',
      items: [
        {
          title: 'Né de notre propre besoin',
          description: 'Nous ne trouvions aucun outil de capture assez rapide et fluide, alors nous en avons écrit un.',
        },
        {
          title: 'Grandi grâce à nos utilisateurs',
          description:
            'Capture avec défilement, détourage IA, OCR hors ligne, traduction d’images — tant de fonctions viennent directement des retours des utilisateurs.',
        },
        {
          title: 'Toucher plus de monde',
          description:
            'Aujourd’hui, Shotera parle 15 langues d’interface et continue de grandir — avec le même objectif : simplifier les captures.',
        },
      ],
    },
    contact: {
      title: 'Nous contacter',
      tagline: 'Écrivez-nous quand vous voulez',
      items: [
        {
          title: 'Communauté',
          description:
            'Rejoignez la communauté Shotera : nouvelles versions, astuces et un canal direct pour nous dire ce que vous en pensez.',
        },
        {
          title: 'Assistance par e-mail',
          description:
            'Un problème ou une idée de fonctionnalité ? Écrivez à mosuzo.studio@gmail.com — nous lisons et répondons à chaque message.',
        },
      ],
    },
  },
};
