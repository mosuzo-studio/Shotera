---
title: 'Versions'
layout: '~/layouts/MarkdownLayout.astro'
---

# Notes de version Shotera – toutes les versions (français)

**📫 Retours**

Paramètres → À propos → Retours et suggestions

**🔗 Index des versions**

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

**Sortie:** 2026-09-24

Édition Lite, longue capture, épingles redimensionnables et compilations plus légères.

**🆚 Lite vs version complète :** consultez la [comparaison des versions](/fr/versions) pour connaître les différences entre les fonctions.

**✨ Nouveautés**

- Édition Lite ajoutée : installateur de 17MB comprenant l'essentiel de la capture et de l'annotation. La bannière de mise à niveau dans les paramètres renvoie à la version complète sur le site.
- [Site officiel](https://shotera.mosuzo.com/) actualisé, avec un contenu et un style rafraîchis.
- Longue capture ajoutée (aperçu, tests bêta) : modes de défilement automatique et manuel, avec fenêtre d'aperçu en temps réel. L'algorithme d'assemblage intelligent détecte les limites supérieures et gère les mises en page mixtes. Des conseils guident la première utilisation. Rejoignez le groupe bêta pour l'essayer.
- Améliorations de la fenêtre d'image épinglée : le double-clic bascule entre la taille d'origine et le mode miniature + fermer. Faites glisser les bords ou les coins pour redimensionner en gardant le rapport verrouillé. Le menu contextuel natif dépasse les limites de la fenêtre. La visibilité de la barre d'outils est conservée d'une session à l'autre ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- Le modèle de détourage AI passe à u2netp intégré, pour des performances instantanées. rmbg-1.4 se télécharge désormais à la demande, avec des conseils à la première utilisation.
- Commande d'impression ajoutée à l'éditeur : le menu contextuel et le menu Fichier ouvrent la boîte de dialogue d'impression du système ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- Le menu contextuel de l'éditeur peut ouvrir le dossier contenant le fichier avec le fichier actuel mis en évidence ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Améliorations**

- Taille de compilation réduite de 20 % : compression de l'installateur et réglages du compilateur optimisés. Profil FastBuild ajouté pour itérer plus vite.
- Consommation de mémoire de base réduite.
- La barre de titre de l'éditeur affiche dynamiquement le nom du fichier image actuel.
- Notification de mise à jour réussie simplifiée en logo + texte + bouton, sans grand aperçu.
- Parcours d'accueil affiné : le guide de 8 pages passe sur la carte d'invitation en bas à droite. La fenêtre de présentation des fonctions s'arrête après 3 fermetures. Le détourage AI affiche des conseils à la première utilisation.
- La traduction d'images par AI prévient lorsque le résultat est identique à l'entrée et renvoie aux paramètres de langue. L'avertissement peut être désactivé dans Paramètres → Capacités AI.
- Nom de fichier par défaut des captures, des longues captures et des sorties de l'éditeur unifié en `Shotera_YYYYMMDD_HHMMSS`.
- La miniature de notification de la longue capture recadre le haut de la vue au lieu d'aplatir toute l'image.

**🐞 Corrections de bugs**

- Correction du positionnement initial de la fenêtre d'annotation sur les configurations à deux écrans.
- Correction des erreurs de calcul du rapport et des tremblements du cadre lors du redimensionnement de la fenêtre épinglée par glissement.
- Correction du double-clic, qui ne s'appliquait pas après la sélection et ne revenait pas à la taille d'origine.
- Correction de la boîte d'échec d'assemblage de la longue capture, bloquée par les règles de clic traversant.
- Correction des barres de défilement fantômes et de l'affichage du zoom à 0 % ou 1 % après le chargement d'images dans l'éditeur.
- Correction du nom de fichier en double dans la barre de titre de l'éditeur.

**🙏 Remerciements**

Merci aux membres de la communauté qui ont signalé des problèmes et suggéré des fonctions qui ont façonné cette version. Les améliorations de la longue capture et de la fenêtre d'image épinglée sont issues des retours des utilisateurs.

---

## Shotera v7.6.0

**Sortie:** 2026-09-21

Une fenêtre de nouveautés, la lecture de QR codes, la lecture des GIF et davantage de formats d'image.

**✨ Nouveautés**

- Fenêtre de nouveautés ajoutée au démarrage : elle compare les deux modes de fin de capture, indique où se trouve la lecture de QR codes et vous invite à noter Shotera. Cochez « Ne plus afficher », ou cliquez trois fois sur « Compris », pour l'arrêter.
- Lecture de QR codes ajoutée : Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF et UPCA, plus GS1 Digital Link. Le panneau de résultats est redimensionnable et déplaçable, avec un historique numéroté.
- Ouvre les PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF et TIFF (tif/tiff). SVG, ICO, AVIF et TIFF sont nouveaux dans cette version. Ouvrez depuis le menu Fichier ou glissez les images dans la fenêtre.
- Lecture des animations GIF ajoutée. La barre d'état et le panneau d'informations sur l'image affichent le nombre d'images et la durée totale.
- Panneau d'informations sur l'image ajouté : dimensions, format, DPI, mode de couleur, profondeur de bits, données EXIF de prise de vue et contrôle de confidentialité des balises auteur et GPS. Ouvrez-le par le menu Fichier, le clic droit sur le canevas, la barre d'état ou Ctrl+I.
- La barre d'état affiche le niveau de zoom, les dimensions de l'image, la taille du fichier et le chemin du fichier. L'affichage du chemin propose trois modes : Masqué, Fil d'Ariane et Chemin complet.
- La barre de titre de l'éditeur affiche le nom de l'image actuelle. Le menu contextuel du canevas ouvre le dossier contenant le fichier avec l'image actuelle mise en évidence ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Boîte de confirmation avant d'écraser un fichier à l'enregistrement. Cochez « Ne plus demander » pour l'ignorer ensuite.
- Fenêtres épinglées : masquez la barre d'outils en haut à droite depuis le menu contextuel ; le réglage est mémorisé ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Améliorations**

- La barre de modes du haut réapparaît, avec les entrées Capture et QR Code.
- Le rendu des grandes images dans l'éditeur a été revu : le chargement et le zoom sont désormais fluides.
- Le zoom Ctrl + molette s'ancre maintenant sur le curseur au lieu du centre du canevas.
- Raccourcis de zoom ajoutés : Ctrl+=, Ctrl+- et Ctrl+0.
- Le zoom et le déplacement ne font plus sortir complètement l'image de la vue.
- Les images de l'éditeur bénéficient d'une ombre douce, et le mode clair utilise un canevas blanc pur.
- Loupe du sélecteur de couleur redessinée : cadre carré à double trait, bordure de panneau resserrée, échantillon carré et couleur du réticule affinée.
- Le menu Aide ouvre directement le site web.
- La traduction d'images par AI vous prévient lorsque le résultat est identique à l'original (en général, la langue cible est la même que la source) et vous renvoie au réglage de langue. Désactivez l'indication dans Paramètres → Capacités AI.
- Le moment de la demande de notation a été revu : elle apparaît désormais après votre première capture dans chaque version, puis au maximum une fois par mois.

**🐞 Corrections de bugs**

- Correction des barres de défilement fantômes et d'un affichage erroné du zoom à 0 % ou 1 % après le chargement d'une image.
- Correction du menu déroulant « Fichier » de l'éditeur, coupé au bord de la fenêtre.
- Correction des captures déclenchées de façon inattendue au démarrage de l'application avec Windows.
- Correction du mode de fin de capture dans les paramètres, qui ne se mettait pas à jour lorsqu'il était modifié depuis la fenêtre de nouveautés.

**🙏 Remerciements**

Merci à @korenevskiy et @NewJon27 pour leurs suggestions de fonctions qui ont façonné cette version.

La lecture de QR codes a été ajoutée en réponse aux retours de Horihons.

---

## Shotera v7.5.1

**Sortie:** 2026-09-14

Mode de capture élégant, épinglage instantané et raccourcis de copie.

**✨ Nouveautés**

- Mode de capture « Élégant » ajouté : sélectionnez une zone, c'est terminé. Image copiée avec aperçu dans la notification. Pas de superposition. Mode sombre pris en charge ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Raccourci F3 d'épinglage instantané ajouté pendant ou après la capture. Personnalisable dans Paramètres → Raccourcis ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Ctrl+C ajouté pour copier la capture et fermer la superposition en une seule étape.
- Double-clic ajouté pour confirmer immédiatement la capture.
- Clic droit ajouté pour annuler la capture.
- Option « Extraire le texte automatiquement après la capture » ajoutée dans Paramètres → Capture.
- La barre de titre de la fenêtre de l'éditeur suit le thème du système.

**🚀 Améliorations**

- « Enregistrer sous » de l'éditeur utilise des horodatages dynamiques pour les noms de fichier.
- Raccourci Ctrl+Shift+S pour « Enregistrer sous ».
- Le menu de la barre d'état et le titre de la fenêtre de l'éditeur sont désormais localisés.

**🐞 Corrections de bugs**

- Correction de l'échec de l'OCR dans les chemins d'installation non anglophones.
- Correction de la perte de résolution des images épinglées sur les écrans à haut DPI.
- Correction de F3 qui créait des épingles en double à partir de la sélection et du presse-papiers.
- Correction de la version Microsoft Store qui n'affichait pas de notification en mode « Élégant ».
- Correction du clic sur la notification de la version Microsoft Store, qui déclenchait une capture supplémentaire.
- Correction du point rouge du bouton de mise à jour qui persistait après la mise à niveau.

**🙏 Remerciements**

Merci à @Const-me, @LightQuanta et @wherewhere pour leurs suggestions de fonctions qui ont façonné cette version.

---

## Shotera v7.5.0

**Sortie:** 2026-09-12

Éditeur d'images complet, modes de capture et prise en charge étendue des processeurs.

**✨ Nouveautés**

- Éditeur d'images complet ajouté dans une fenêtre séparée, depuis « Éditer l’Image… » dans la barre d'état. Prise en charge de l'ouverture/l'enregistrement/l'enregistrement sous, du glisser-déposer, du zoom Ctrl + molette de 10 % à 400 %, des outils d'annotation, de l'OCR, du détourage AI et de l'effacement AI.
- Style de flèche effilée « Flèche pleine » ajouté à la sous-barre d'outils des flèches.
- Réglage « Mode de fin de capture » ajouté : choisissez « Élégant » pour copier la sélection avec aperçu dans la notification (un clic ouvre l'éditeur), ou gardez le mode par défaut « Annotation directe ».
- Réglages « Extraire le texte automatiquement après la capture » et « Masquer les boutons AI » ajoutés.
- La langue cible de la traduction suit la langue de l'interface.

**🚀 Améliorations**

- Prise en charge des processeurs étendue aux Intel de 3e génération (Ivy Bridge) et antérieurs. Fonctions AI indisponibles sur les processeurs plus anciens, avec une boîte de dialogue explicative.
- Fenêtre de guide dessinée par l'application en bas à droite lorsque les notifications Windows sont désactivées.
- La gomme efface désormais les flèches/lignes et affiche le curseur de gomme.
- Barre d'outils principale intégrée à la barre de menus, toujours visible. La barre secondaire ne décale plus l'image.
- Copier dans l'éditeur ne ferme plus la fenêtre et n'efface plus la sélection. Le ✕ rouge efface l'image.
- La page Capture des paramètres signale les nouvelles fonctions par un point rouge.

**🐞 Corrections de bugs**

- Correction du plantage de l'application au lancement sur les processeurs sans prise en charge d'AVX2.
- Correction de l'échec de l'OCR avec des chemins d'installation en chinois ou dans d'autres langues que l'anglais.
- Correction des images dont le chemin contient des caractères non ASCII, qui ne se chargeaient pas par glisser-déposer.
- Correction de la fenêtre de l'éditeur qui ne chargeait parfois pas la capture depuis la notification.
- Correction du détourage/effacement AI qui laissait des images décalées et des bandes non nettoyées.
- Correction de la barre d'état de l'éditeur qui ne se mettait pas à jour après le chargement de l'image.
- Correction du décalage des surlignages d'extraction de texte dans l'éditeur.
- Correction de la dérive vers le bas des tampons de numéro/emoji lors du redimensionnement.

**🗑️ Supprimé**

- Les menus Édition et Affichage de la barre de menus de l'éditeur.

---

## Shotera v7.4.2

**Sortie:** 2026-09-07

Retours intégrés à l'application, installateur en 22 langues et améliorations de performance.

**✨ Nouveautés**

- Formulaire de retours intégré à l'application, sous Paramètres → À propos, pour les notes, les suggestions et les enquêtes.
- Prise en charge des langues de l'installateur NSIS étendue de 2 à 22 langues.

**🚀 Améliorations**

- Performances d'annotation améliorées, pour un dessin plus fluide.
- La granularité de détection utilise désormais « Détecter les éléments d'interface » par défaut.
- Les poignées de sélection n'apparaissent que lorsque la sélection est suffisamment grande.
- L'entrée de retours dans À propos utilise une icône cliquable.
- Formulations revues pour un ton plus clair.
- Flux d'interaction amélioré lors de l'ouverture de la page de mise à jour depuis la notification.

**🐞 Corrections de bugs**

- Correction des superpositions d'annotation qui apparaissaient sur le mauvais écran.
- Correction de la détection d'éléments qui réinitialisait les calques de surbrillance lors du passage d'un élément à l'autre.
- Correction du démarrage automatique qui ne fonctionnait plus après la mise à niveau de la version Microsoft Store.

**🗑️ Supprimé**

- L'entrée « Guide des fonctionnalités » et le texte d'indication de mode.

---

## Shotera v7.4.1

**Sortie:** 2026-09-04

Comparaison des modèles, nomenclature cohérente et aide intégrée.

**✨ Nouveautés**

- Tableau de comparaison des modèles ajouté : l'icône d'aide à côté de « Modèle de détourage AI » ouvre un tableau comparant les quatre modèles par taille, vitesse, qualité et cas d'usage.
- Nomenclature des modèles cohérente au format « Modèle · Caractéristique », triée du plus petit au plus grand.
- Aide intégrée pour la traduction d'images : la description passe dans l'infobulle de l'icône d'aide.

---

## Shotera v7.4.0

**Sortie:** 2026-09-03

Refonte de l'expérience de mise à jour, prise en charge du Microsoft Store et corrections AI.

**✨ Nouveautés**

- Expérience de mise à jour repensée, avec une logique de mise à jour et une interface de paramètres optimisées. Installation automatique en période d'inactivité, quatre modes de mise à jour et fréquence de rappel plus intelligente.
- Compatibilité de la version Microsoft Store améliorée et correction du démarrage automatique avec Windows.

**🐞 Corrections de bugs**

- Correction du modèle de détourage AI qui se retéléchargeait à chaque vérification.
- Accélération par miroir en Chine ajoutée (shotera-ai.pages.dev), avec repli automatique vers Hugging Face.

---

## Shotera v7.3.1

**Sortie:** 2026-08-29

Prise en charge du mode sombre.

**✨ Nouveautés**

- Prise en charge du mode sombre ajoutée : choisissez Clair, Sombre ou Suivre le système dans les paramètres. Toutes les fenêtres se mettent à jour instantanément, sans redémarrage.

---

## Shotera v7.3.0

**Sortie:** 2026-08-23

OCR automatique, copie partielle et surbrillance liée.

**✨ Nouveautés**

- OCR automatique : le texte est extrait dès que la zone est sélectionnée. La sélection reste modifiable, avec réextraction automatique.
- Copie partielle : faites glisser sur le texte reconnu et appuyez sur Ctrl+C pour ne copier que cette partie. Apparaît dans l'historique du presse-papiers Windows.
- Surbrillance liée : en sélectionnant du texte sur l'image d'origine, les caractères correspondants sont mis en surbrillance dans le panneau de résultats, caractère par caractère.
- Superposition sensible à l'outil : la couche de texte reste interactive lorsqu'aucun outil d'annotation n'est actif et se masque dès qu'un outil est choisi.
- Localisation : le chinois traditionnel, le japonais, le coréen, le portugais (Brésil), l'espagnol, l'allemand, le français, l'italien, le russe, l'arabe, le néerlandais, le polonais et le suédois couvrent désormais les paramètres de traduction d'images.

**🐞 Corrections de bugs**

- Correction de « Extraire le texte » qui ouvrait directement le panneau de résultats après l'OCR automatique.
- Correction de l'annulation de l'outil d'annotation qui ne verrouillait pas les formes dessinées.
- Correction du bouton « Passer » invisible dans le guide de première utilisation.

---

## Shotera v7.2.2

**Sortie:** 2026-08-20

Fournisseurs de traduction d'images, test de clé et corrections haut DPI.

**✨ Nouveautés**

- Chaque service est désormais une carte repliable : Traduction d'images Baidu (V2.0 haute précision / V1 classique) et Youdao (99 langues).
- Baidu fonctionne immédiatement avec un quota intégré. Un APP ID/Secret personnalisé augmente la limite.
- La mémoire de langue est stockée par fournisseur.
- « Tester la clé » ajouté pour vérifier les identifiants avec une vraie requête.

**🐞 Corrections de bugs**

- Correction des liens de documentation de l'API des fournisseurs, qui s'ouvrent maintenant correctement.
- Correction du glissement de la sélection utilisant le chemin d'entrée pointeur à haute fréquence.
- Correction des coordonnées de sélection en haut DPI, converties via le système de coordonnées de la scène.
- Correction de la superposition de capture figée sur plusieurs écrans à DPI mixte, alignée sur les coordonnées natives du bureau virtuel.

---

## Shotera v7.2.1

**Sortie:** 2026-08-18

Capture vers le presse-papiers et barres d'outils déplaçables.

**✨ Nouveautés**

- Capture directe vers le presse-papiers ajoutée : appuyez sur Alt+C ou choisissez « Capturer et copier » dans le menu de la barre d'état pour sauter l'annotation. La capture part dans le presse-papiers.
- Poignée de glissement à six points restaurée sur les barres d'outils d'annotation principale et secondaire. Visibilité configurable dans les paramètres.

---

## Shotera v7.2.0

**Sortie:** 2026-08-02

Démarrage de capture plus rapide, capture personnalisée et 15 langues.

**✨ Nouveautés**

- Démarrage de capture bien plus rapide : le chemin de capture/annotation réutilise et préchauffe la fenêtre d'annotation, évitant le goulot d'étranglement du décodage d'image. Le temps moyen entre le raccourci et la sélection a baissé de 68,2 % lors des tests sur deux écrans.
- Flux de capture personnalisée ajouté : ouvrez-le avec le raccourci par défaut Alt+F1 ou depuis le menu de la barre d'état. Définissez la position X/Y exacte et la largeur/hauteur, verrouillez le rapport, inversez l'orientation, ajoutez un délai. Enregistrez des préréglages de taille réutilisables, avec restauration automatique de la dernière valeur utilisée. Coordonnées multi-écrans (y compris positions négatives) et tailles jusqu'à 40000 pixels prises en charge.
- 15 langues d'interface ajoutées : chinois traditionnel, japonais, portugais (Brésil), espagnol, allemand, français, italien, coréen, russe, arabe, néerlandais, polonais et suédois. Les changements de langue s'appliquent immédiatement aux fenêtres ouvertes et à la barre d'état, sans redémarrage. L'arabe inclut une mise en page complète de droite à gauche.

**🚀 Améliorations**

- Sortie de capture plus propre, avec les scintillements de l'ancienne sélection et l'image rémanente de la fenêtre entière supprimés.
- Reconnaissance plus rapide des contrôles imbriqués, avec moins de sauts.
- Contrôles de la barre des tâches et icônes/textes de navigation de l'Explorateur de fichiers plus précisément ciblables.
- Arborescences d'accessibilité de Chromium et Electron préchauffées et réessayées si nécessaire.
- Le transfert d'images vers le presse-papiers utilise un chemin RGBA plus direct.
- Alt+T pour épingler et Ctrl+S pour enregistrer fonctionnent quand une zone est sélectionnée.
- Ressources des modèles AI restaurées. Les paquets portables incluent les fichiers de modèle nécessaires.

---

## Shotera v7.1.0

**Sortie:** 2026-07-29

Détection de fenêtres, outils d'annotation et épingles améliorés.

**✨ Nouveautés**

- Détection des fenêtres et des contrôles améliorée, avec une sélection plus facile des cibles imbriquées.
- Loupe de capture affinée : bordures plus nettes, poignées de redimensionnement plus grandes, réticule amélioré.
- Prise en charge ajoutée des formes, flèches, texte, autocollants, surligneurs et loupe locale.
- Édition améliorée : redimensionnement, rotation, styles, annuler/rétablir plus fluides.
- Disposition de la barre d'outils mise à jour.
- Épingles toujours au premier plan améliorées : déplacement, redimensionnement, rotation, retournement, opacité et clic traversant pris en charge.
- Meilleure compatibilité avec le presse-papiers.
- Entrée des outils AI et boutons de la barre d'outils restaurés.
- Entrées du guide des fonctionnalités restaurées.
- Mode présentation amélioré.
- Gestion des raccourcis, canaux de mise à jour et persistance des paramètres améliorés.
- Licence bilingue dans l'installateur MSI.
- Les captures restent entièrement locales. Aucun compte requis.

---

## Shotera v7.0.0

**Sortie:** 2026-07-23

Capturez l'essentiel. Expliquez clairement. Gardez-le à portée de vue.

**✨ Nouveautés**

- Flux de capture rapide avec le raccourci F1, détection des fenêtres/contrôles et loupe à l'écran.
- Outils d'annotation : rectangles, ellipses, lignes, flèches, pinceau libre, surligneur, texte enrichi, numérotation automatique des étapes, mosaïque/flou, autocollants emoji et loupe locale.
- F3 crée des épingles toujours au premier plan à partir de captures ou du contenu du presse-papiers. Les épingles prennent en charge le déplacement, le redimensionnement, la rotation, le retournement et la transparence.
- Le mode présentation aide à préparer un bureau plus propre avant les captures/réunions, en masquant les icônes et en appliquant des préréglages de thème/fond d'écran.

**🚀 Améliorations**

- Expérience plus cohérente, avec un retour de sélection plus clair.
- Poignées de redimensionnement visibles.
- Loupe de capture plus propre.
- Barres d'outils d'annotation alignées.
- Édition de texte affinée.
- Accueil amélioré.
- Paramètres fiables.
- Installation Windows plus fluide.
