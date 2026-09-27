import type { V3LocaleCopy } from './types';

/**
 * French copy for the v3 pages. Terminology follows the Shotera app's fr
 * language pack.
 */
export default {
  home: 'Shotera — Des captures et enregistrements plus rapides et plus intelligents',
  nav: {
    features: 'Fonctions',
    versions: 'Versions',
    changelog: 'Notes de version',
    about: 'À propos',
    faq: 'FAQ',
    menu: 'Menu',
    language: 'Langue',
    cta: 'Télécharger gratuitement',
  },
  hero: {
    badge: 'Nouveau',
    announce: 'Édition Lite\u00A0: ~17 MB à installer',
    modes: [
      {
        key: 'capture',
        label: 'Capture',
        caption: 'Fenêtres et éléments d’interface détectés au survol — la bonne zone, du premier coup.',
      },
      {
        key: 'long',
        label: 'Longue capture',
        caption: 'Longues pages et longues discussions — assemblées en une seule image, automatiquement ou à la main.',
      },
      {
        key: 'pin',
        label: 'Épingle',
        caption:
          'Épinglez vos captures au-dessus de tout le reste — redimensionnez, ajustez l’opacité, comparez côte à côte.',
      },
      {
        key: 'record',
        label: 'Enregistrement',
        caption: 'De 720p à 4K à haute fréquence d’images, curseur et clics mis en évidence, export en MP4 ou GIF.',
      },
      {
        key: 'ai',
        label: 'IA',
        caption: 'Détourage AI, effacement AI et OCR hors ligne — le tout traité sur votre appareil.',
      },
    ],
    h1: [
      [{ text: 'Captures, enregistrement d’écran, ' }, { text: 'magie de l’IA', hl: true }],
      [{ text: 'le tout en un seul raccourci' }],
    ],
    sub: 'Shotera est un outil de capture d’écran conçu pour celles et ceux qui capturent toute la journée\u00A0: annoter, assembler des pages entières en une longue capture, enregistrer en GIF, détourer un sujet avec l’IA, lancer l’OCR hors ligne, traduire des images et épingler des références — sans interrompre votre travail.',
    primary: 'Télécharger gratuitement',
    secondary: 'Voir comment ça marche',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Programme d’installation / version portable / MSI',
    store: 'Également disponible sur le Microsoft Store',
    shellMonitor: 'Coque de moniteur en aluminium',
    shellLaptop: 'Coque d’ordinateur portable',
  },
  download: {
    more: 'Plus d’options de téléchargement',
    menu: 'Options de téléchargement',
    edition: 'Shotera Standard',
    setup: 'Programme d’installation (.exe)',
    portable: 'Version portable (.7z)',
    msi: 'Installateur MSI',
    store: 'Microsoft Store',
    setupTip: 'Double-cliquez pour installer. Le choix de la plupart des utilisateurs.',
    portableTip: 'Décompressez et lancez\u00A0: la version portable tient sur une clé USB.',
    msiTip: 'Souvent utilisé par les administrateurs d’entreprise, pour déployer l’application sur de nombreux PC.',
    storeTip: 'La version publiée sur le Microsoft Store, pour ceux qui préfèrent y récupérer leurs applications.',
    recommend: 'Recommandé',
    allVersions: 'Toutes les versions sur GitHub',
  },
  trust: [
    { value: '15', label: 'langues d’interface' },
    { value: '4.9 / 5', label: 'note des utilisateurs' },
    { value: '100%', label: 'IA sur l’appareil' },
    { value: '<0.1s', label: 'lancement par raccourci' },
  ],
  modesSection: {
    eyebrow: 'Trois gestes du quotidien',
    title: 'Un raccourci pour chaque tâche de capture',
    lead: 'Capture, épingle, enregistrement et GIF — les trois gestes que vous répétez toute la journée, derrière un seul raccourci.',
    cards: [
      {
        icon: 'capture',
        title: 'Capture',
        one: 'Zone, fenêtre ou plein écran en une pression\u00A0: les fenêtres et les éléments d’interface sont détectés pour vous.',
        steps: ['Appuyez sur le raccourci', 'Survolez pour accrocher les limites', 'Annotez, copiez ou enregistrez'],
        bestFor: 'partage quotidien et documentation',
      },
      {
        icon: 'pin',
        title: 'Épingler au bureau',
        one: 'Gardez une capture flottante au-dessus de tout le reste, aussi longtemps que vous en avez besoin.',
        steps: [
          'Épinglez juste après la capture',
          'Redimensionnez, ajustez l’opacité, comparez',
          'Travaillez sans jongler entre les fenêtres',
        ],
        bestFor: 'références et comparaison côte à côte',
      },
      {
        icon: 'record',
        title: 'Enregistrement & GIF',
        one: 'De 720p à 4K à 30 ou 60 images par seconde, sans limite de durée d’enregistrement.',
        steps: ['Choisissez une zone et enregistrez', 'Affichez le curseur et les clics', 'Exportez en MP4 ou GIF'],
        bestFor: 'tutoriels et signalements de bug',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Capture',
      title: 'Une seule pression, un cadrage exact',
      lead: 'Déclenchez-le par un raccourci, puis capturez, annotez et copiez d’un seul geste, sans interruption.',
      rows: [
        'Survolez\u00A0: Shotera s’accroche à la fenêtre ou à l’élément situé juste en dessous',
        'Flèches, rectangles, texte, numéros d’étape, emoji, loupe — annotez au moment même de la capture',
        'Deux façons de terminer\u00A0: copie directe dans le presse-papiers, ou annotation immédiate (Élégant / Annotation directe)',
      ],
      items: [
        { title: 'Autocollants emoji', note: 'en dire plus en un clic' },
        { title: 'Loupe', note: 'pour examiner le détail de près' },
        { title: 'Numérotation', note: 'pour guider l’ordre de lecture' },
        { title: 'Mosaïque et surligneur', note: 'confidentialité et mise en avant' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Longue capture',
      title: 'Une page plus haute que l’écran, en une seule capture',
      lead: 'Longues pages, longues discussions et documents entiers — capturés de haut en bas en une seule image.',
      rows: [
        'Défilement automatique ou à la main — chaque portion est capturée au fil du défilement',
        'Les portions adjacentes sont alignées et fondues\u00A0: la longue capture finale ne présente aucune couture visible',
      ],
      items: [
        { title: 'Aperçu d’assemblage en direct', note: 'arrêtez dès que la page est entière' },
        { title: 'Aucune couture visible', note: 'se lit comme une page continue' },
        { title: 'Longues discussions', note: 'toute la conversation en une image' },
        { title: 'Copier ou enregistrer', note: 'prêt pour vos documents et vos tickets' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Épingle',
      title: 'Épinglez vos références au premier plan, travaillez à côté',
      lead: 'Posez une capture par-dessus le reste\u00A0: comparez, consultez et continuez à travailler sans changer de fenêtre.',
      rows: [
        'Épinglez une capture au premier plan sans interrompre votre travail',
        'Redimensionnez par n’importe quel bord ou coin, proportions verrouillées\u00A0; un double-clic alterne entre taille d’origine et miniature',
      ],
      items: [
        { title: 'Plusieurs épingles à la fois', note: 'comparez-les côte à côte' },
        { title: 'Mode miniature', note: 'double-cliquez pour la réduire' },
        { title: 'Passage de la souris', note: 'ne bloque jamais la fenêtre en dessous' },
        { title: 'Restaurer la dernière épingle', note: 'une touche la fait revenir' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Enregistrement',
      title: 'Enregistrez en 4K, aussi longtemps qu’il le faut',
      lead: 'Transformez ce qui est «\u00A0difficile à expliquer\u00A0» en une vidéo que tout le monde peut suivre.',
      rows: [
        '720p / 1080p / 2K / 4K à 30 ou 60 images par seconde, sans limite de durée d’enregistrement',
        'Un GIF léger à déposer dans vos documents, vos discussions ou vos tickets — aucun lecteur nécessaire',
      ],
      items: [
        { title: 'Afficher le curseur et les clics', note: 'chaque étape reste claire' },
        { title: 'MP4 ou GIF', note: 'la qualité ou le poids, à vous de choisir' },
        { title: 'Compatible 4K', note: 'conçu pour les écrans HiDPI' },
        { title: 'Historique', note: 'retrouvez votre dernier enregistrement' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'Capacités AI',
      title: 'L’IA qui termine la capture à votre place',
      lead: 'Détourage AI, effacement AI et OCR s’exécutent en local\u00A0: de l’intelligence sans renoncer à la confidentialité.',
      rows: [
        'Personnes, produits, logos\u00A0: un PNG transparent en quelques secondes — sans envoi, sans attente d’un serveur',
        'L’OCR s’exécute sur votre appareil et vous rend un texte modifiable et copiable en un clic',
      ],
      items: [
        { title: 'Détourer un sujet', note: 'un arrière-plan transparent en un clic' },
        { title: 'Effacer ce qui ne devrait pas être là', note: 'l’IA reconstitue ce qui se trouvait derrière' },
        { title: 'OCR hors ligne', note: 'langues mélangées, code, tableaux' },
        { title: 'Traduction d’images', note: 'comprenez les captures en langue étrangère d’un coup d’œil' },
      ],
      image: 'ai',
    },
  ],
  cta: {
    eyebrow: 'Gratuit pour commencer',
    title: 'Rendez chaque capture plus rapide et plus intelligente',
    lead: 'Téléchargement gratuit, installation en quelques secondes. Confiez le traditionnel «\u00A0prends une capture\u00A0» du quotidien à un outil conçu pour ça.',
    primary: 'Télécharger gratuitement',
    secondary: 'Autres versions',
    note: 'Éditions Standard et Lite\u00A0; Windows 10/11+. Disponible en programme d’installation / version portable / MSI.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Une question ou une idée\u00A0? Dites-le-nous.',
    lead: 'Un problème, une fonctionnalité qui vous manque, ou simplement envie de nous dire bonjour — choisissez le canal qui vous convient.',
    replyNote:
      'L’e-mail et GitHub sont consultés chaque jour\u00A0; nous répondons généralement sous 24 heures ouvrées.',
    faqNote: 'Bloqué sur un point\u00A0? La plupart des réponses sont déjà dans la FAQ.',
    faqLink: 'Consulter la FAQ',
    soon: 'Bientôt disponible',
    mail: {
      subject: 'Retour sur Shotera — ',
      body: [
        'Bonjour,',
        '',
        '(Décrivez le problème rencontré, ou la fonctionnalité que vous avez en tête.)',
        '',
        '',
        'Si possible, ces précisions nous aideront à aller plus vite\u00A0:',
        '',
        '\u00b7 Édition de Shotera (Lite / Standard)\u00A0:',
        '\u00b7 Version de Windows\u00A0:',
        '\u00b7 Étapes pour reproduire\u00A0:',
        '',
        'Merci\u00A0!',
      ].join('\n'),
      copied: 'Adresse e-mail copiée — ouverture de votre messagerie…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Parlez-nous',
        note: 'Nous lisons attentivement chaque retour.',
        channels: [
          {
            key: 'email',
            name: 'E-mail',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Assistance, licences, partenariats.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Signalements de bugs, demandes de fonctionnalités, anciennes versions.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Échangez avec les autres utilisateurs de Shotera.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Suivez-nous',
        note: 'Notes de version, astuces et coulisses.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Notes de version et astuces rapides.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Tutoriels et présentations des fonctionnalités.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Annonces de version.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Des captures et des enregistrements d’écran plus rapides et plus intelligents — épinglés, annotés et compris en un seul raccourci.',
    cols: [
      {
        title: 'Produit',
        links: [
          { text: 'Fonctions', path: '/', hash: 'features' },
          { text: 'Versions', path: '/versions' },
        ],
      },
      {
        title: 'Assistance',
        links: [
          { text: 'FAQ', path: '/faq' },
          { text: 'Notes de version', path: '/changelog' },
        ],
      },
      {
        title: 'À propos',
        links: [
          { text: 'Qui sommes-nous', path: '/about' },
          { text: 'Nous contacter', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Conditions', path: '/terms' },
      { text: 'Confidentialité', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 langues d’interface',
  },
} satisfies V3LocaleCopy;
