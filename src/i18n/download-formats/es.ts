import type { DownloadFormatsContent } from '../download-formats-types';

export const esFormats: DownloadFormatsContent = {
  tagline: 'Formatos de descarga',
  title: '¿Qué archivo debo descargar?',
  subtitle: 'El mismo Shotera en los cuatro formatos: solo cambian la instalación y las actualizaciones.',
  headers: ['Formato', 'Instalación y actualizaciones', 'Ideal para'],
  recommendLabel: 'Recomendado',
  rows: [
    { format: 'Instalador (.exe)', install: 'Instalación con asistente; se actualiza solo desde la app', bestFor: 'La mayoría de los usuarios' },
    { format: 'Versión portátil (.7z)', install: 'Descomprime y ejecuta; se actualiza solo desde la app', bestFor: 'Para llevarlo en un USB' },
    { format: 'Instalador MSI (.msi)', install: 'Doble clic o instalación silenciosa; se actualiza solo desde la app', bestFor: 'Despliegue masivo en empresas' },
    { format: 'Microsoft Store', install: 'Se instala y se actualiza desde la Store', bestFor: 'Sin complicaciones: del resto se encarga el sistema' },
  ],
};
