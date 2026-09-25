import type { DownloadFormatsContent } from '../download-formats-types';

export const frFormats: DownloadFormatsContent = {
  tagline: 'Formats de téléchargement',
  title: 'Quel fichier télécharger ?',
  subtitle: "Le même Shotera dans tous les formats — seules l'installation et la mise à jour changent.",
  headers: ['Format', 'Installation et mises à jour', 'Pour qui'],
  recommendLabel: 'Recommandé',
  rows: [
    {
      format: "Programme d'installation (.exe)",
      install: "Installation par double-clic, mise à jour automatique dans l'app",
      bestFor: 'La plupart des utilisateurs',
    },
    {
      format: 'Version portable (.7z)',
      install: "Décompresser et lancer, mise à jour automatique dans l'app",
      bestFor: "Pour l'emporter sur une clé USB",
    },
    {
      format: 'Installateur MSI (.msi)',
      install: "Double-clic ou installation silencieuse, mise à jour automatique dans l'app",
      bestFor: 'Déploiement en masse en entreprise',
    },
    {
      format: 'Microsoft Store',
      install: 'Installation et mise à jour via le Store',
      bestFor: "Pour laisser le système s'en occuper",
    },
  ],
};
