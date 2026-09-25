import type { DownloadFormatsContent } from '../download-formats-types';

export const ruFormats: DownloadFormatsContent = {
  tagline: 'Форматы загрузки',
  title: 'Какой файл скачать?',
  subtitle: 'Это один и тот же Shotera в четырёх форматах — различаются только установка и обновление.',
  headers: ['Формат', 'Установка и обновление', 'Кому подходит'],
  recommendLabel: 'Рекомендуется',
  rows: [
    { format: 'Установщик (.exe)', install: 'Установка с мастером; обновляется в приложении', bestFor: 'Большинству пользователей' },
    { format: 'Портативная версия (.7z)', install: 'Распакуйте и запустите; обновляется в приложении', bestFor: 'Тем, кто носит программу на флешке' },
    { format: 'Установщик MSI (.msi)', install: 'Двойной щелчок или тихая установка; обновляется в приложении', bestFor: 'Массовому развёртыванию в компаниях' },
    { format: 'Microsoft Store', install: 'Установка и обновление из Microsoft Store', bestFor: 'Тем, кто хочет, чтобы всё делала система' },
  ],
};
