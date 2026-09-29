import type { FaqContent } from '../faq-types';

/**
 * Spanish FAQ copy. Structure mirrors the English page; wording follows the
 * app's es language pack.
 */
export const content: FaqContent = {
  metaTitle: 'Preguntas frecuentes',
  metaDescription:
    'Respuestas breves sobre Shotera: qué plataformas e idiomas de interfaz admite, qué funciona sin conexión, qué sigue siendo gratis, cómo funcionan la exportación y el rendimiento, y detalles como los temas y los atajos.',
  title: 'Preguntas frecuentes',
  lead: 'Plataformas, idiomas, privacidad sin conexión, versiones, exportación y detalles: la versión corta.',
  groups: [
    {
      id: 'platform',
      label: 'Plataforma e idiomas',
      items: [
        {
          q: '¿Qué sistemas operativos admite Shotera?',
          a: 'Actualmente, Shotera admite Windows de escritorio: un instalador pequeño que se inicia rápido y funciona sin conexión — descárgalo y empieza de inmediato. macOS, Linux y más plataformas están en la hoja de ruta.',
        },
        {
          q: '¿Qué idiomas de interfaz admite Shotera?',
          a: 'Shotera ahora admite chino tradicional, japonés, portugués de Brasil, español, alemán, francés, italiano, coreano, ruso, árabe, neerlandés, polaco y sueco. Junto con el inglés y el chino simplificado, Shotera admite 15 idiomas de interfaz.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Sin conexión y privacidad',
      items: [
        {
          q: '¿El OCR y el recorte con IA necesitan conexión a internet?',
          a: 'No. El reconocimiento de texto OCR, el recorte con IA y el borrado con IA se ejecutan por completo sin conexión en tu dispositivo — no se sube nada y tus datos quedan protegidos. La traducción de imágenes usa API en la nube y cumple las políticas de privacidad de los proveedores correspondientes.',
        },
        {
          q: '¿Puedo usar Shotera sin ninguna conexión?',
          a: 'Sí. La captura, la anotación, la grabación de pantalla, el OCR sin conexión, el recorte con IA, el borrado con IA y el visor de imágenes funcionan sin conexión, y nada de lo que capturas sale de tu PC. La traducción de imágenes es la única función que llama a una API en la nube, así que necesita conexión.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Versiones, exportación y rendimiento',
      items: [
        {
          q: '¿Shotera es gratis?',
          a: 'La captura, la anotación y la fijación en el escritorio son gratis para siempre. Si lo único que necesitas es capturar y anotar a diario, la versión Lite está disponible como una opción más ligera: deja fuera la grabación de pantalla y la IA. La grabación de pantalla, el recorte con IA, el borrado con IA y la traducción de imágenes vienen con la versión Estándar; consulta la comparación de versiones para más detalles.',
        },
        {
          q: '¿Qué resoluciones y frecuencias de fotogramas admiten las grabaciones?',
          a: 'La calidad de grabación va de 720p a 1080p, 2K y 4K, a 30 fps o 60 fps, sin límite de duración. Exporta a MP4 o a un GIF cuya frecuencia de fotogramas puedes reducir para que el archivo ocupe menos.',
        },
        {
          q: '¿Se pueden exportar las grabaciones como GIF?',
          a: 'Sí. Exporta cualquier grabación a MP4 —de 720p a 4K, a 30 o 60 fps— o a un GIF compacto para documentación, chats e informes de errores. Ninguna de las dos opciones limita la duración de la grabación.',
        },
        {
          q: '¿Va a ralentizar mi PC?',
          a: 'No. Shotera está pensado para mantenerse ligero: consumo mínimo de memoria y arranque instantáneo, imperceptible incluso en segundo plano.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Detalles y personalización',
      items: [
        {
          q: '¿Shotera tiene modo oscuro?',
          a: 'Sí. En Configuración → General → Tema de la interfaz puedes elegir entre «Seguir al sistema», «Claro» y «Oscuro»; «Seguir al sistema» adopta automáticamente el ajuste claro/oscuro de Windows.',
        },
        {
          q: '¿Funciona con varios monitores y pantallas de alta resolución?',
          a: 'Sí. Los varios monitores se tratan como un único escritorio continuo, así que una pantalla secundaria situada a la izquierda de la principal se selecciona correctamente; además, la interfaz y las capturas se mantienen nítidas en pantallas de alto DPI.',
        },
        {
          q: '¿Puedo cambiar los atajos de teclado?',
          a: 'Sí. La captura, la captura personalizada, fijar en el escritorio y el Modo presentación se pueden reasignar en Configuración → Atajos; si otra aplicación ya usa una tecla, Shotera te lo indica, y puedes restaurar todos los valores predeterminados con un clic.',
        },
        {
          q: '¿Cómo actualizo a una nueva versión?',
          a: 'Shotera se actualiza solo: por defecto busca actualizaciones al iniciar, puede descargar e instalar en segundo plano, o puedes buscarlas manualmente en Configuración → Actualización. La edición de Microsoft Store se mantiene al día a través de la Store.',
        },
      ],
    },
  ],
  footnoteBefore: '¿Todavía tienes alguna pregunta? ',
  footnoteLink: 'Contáctanos',
  footnoteAfter: ' — normalmente respondemos en un plazo de 24 horas laborables.',
};
