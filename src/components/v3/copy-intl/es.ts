import type { V3LocaleCopy } from './types';

/**
 * Spanish copy for the v3 pages. Terminology follows the Shotera app's es
 * language pack.
 */
export default {
  home: 'Shotera — Capturas y grabaciones de pantalla más rápidas e inteligentes',
  nav: {
    features: 'Funciones',
    versions: 'Versiones',
    changelog: 'Novedades',
    about: 'Acerca de',
    faq: 'Preguntas frecuentes',
    menu: 'Menú',
    language: 'Idioma',
    cta: 'Descargar gratis',
  },
  hero: {
    badge: 'Nuevo',
    announce: 'Edición Lite: solo ~17 MB para instalar',
    modes: [
      {
        key: 'capture',
        label: 'Captura',
        caption:
          'Las ventanas y los elementos de interfaz se detectan al pasar el cursor — la región correcta, a la primera.',
      },
      {
        key: 'long',
        label: 'Captura larga',
        caption: 'Páginas largas y chats largos — unidos en una sola imagen, con desplazamiento automático o manual.',
      },
      {
        key: 'pin',
        label: 'Fijar',
        caption: 'Fija capturas sobre la pantalla — escala, transparencia y comparación lado a lado.',
      },
      {
        key: 'record',
        label: 'Grabación',
        caption:
          'De 720p a 4K con alta frecuencia de fotogramas, realces del cursor y marcas de clic — exporta a MP4 o GIF.',
      },
      {
        key: 'ai',
        label: 'IA',
        caption: 'Recorte con IA, borrado con IA y OCR sin conexión — todo se procesa en tu dispositivo.',
      },
    ],
    h1: [
      [{ text: 'Capturas, grabación de pantalla y ' }, { text: 'magia de la IA', hl: true }],
      [{ text: 'todo con un solo atajo' }],
    ],
    sub: 'Shotera es una herramienta de captura de escritorio pensada para quienes hacen capturas todo el día: anota, captura páginas largas de arriba abajo, graba en GIF, recorta sujetos con IA, extrae texto con OCR sin conexión, traduce imágenes y fija referencias, todo sin salir de tu flujo de trabajo.',
    primary: 'Descargar gratis',
    secondary: 'Ver cómo funciona',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Instalador / portátil / MSI',
    store: 'También disponible en Microsoft Store',
    shellMonitor: 'Monitor con carcasa de aluminio',
    shellLaptop: 'Carcasa de portátil',
  },
  download: {
    more: 'Más opciones de descarga',
    menu: 'Opciones de descarga',
    edition: 'Shotera Estándar',
    setup: 'Instalador (.exe)',
    portable: 'Portátil (.7z)',
    msi: 'Instalador MSI',
    store: 'Microsoft Store',
    setupTip: 'Haz doble clic para instalar. Es lo que prefiere la mayoría.',
    portableTip: 'Descomprime y ejecuta: puedes llevarlo en un USB.',
    msiTip: 'Lo usan los administradores de sistemas para desplegar la aplicación en muchos equipos.',
    storeTip: 'La versión publicada en Microsoft Store, para quienes prefieren descargar las aplicaciones desde ahí.',
    recommend: 'Recomendado',
    allVersions: 'Todas las versiones en GitHub',
  },
  trust: [
    { value: '15', label: 'idiomas de interfaz' },
    { value: '4.9 / 5', label: 'valoración de usuarios' },
    { value: '100%', label: 'IA local' },
    { value: '<0.1s', label: 'para invocarlo' },
    {
      value: '{downloads}',
      label: 'descargas',
      badge: 'En vivo',
      tip: 'Recuento en vivo desde GitHub Releases; no incluye descargas de Microsoft Store',
    },
  ],
  modesSection: {
    bestFor: 'IDEAL PARA',
    eyebrow: 'Tres tareas cotidianas',
    title: 'Un atajo para cada tarea de captura',
    lead: 'Capturar, fijar, grabar y exportar GIF: las tres tareas a las que recurres todo el día, con un solo atajo.',
    cards: [
      {
        icon: 'capture',
        title: 'Captura',
        one: 'Región, ventana o pantalla completa con una sola tecla: la detección de ventanas y elementos de interfaz es automática.',
        steps: ['Pulsa el atajo', 'Pasa el cursor: los límites se ajustan solos', 'Anota, copia o guarda'],
        bestFor: 'compartir y documentar a diario',
      },
      {
        icon: 'pin',
        title: 'Fijar en el escritorio',
        one: 'Mantén una captura flotando por encima de todo lo demás durante el tiempo que necesites.',
        steps: ['Fija nada más capturar', 'Escala, transparencia y comparación', 'Trabaja sin saltar entre ventanas'],
        bestFor: 'consultar referencias y comparar lado a lado',
      },
      {
        icon: 'record',
        title: 'Grabación y GIF',
        one: 'De 720p a 4K a 30 o 60 fps, sin límite de duración.',
        steps: ['Elige una región y graba', 'Muestra el cursor y los clics', 'Exporta a MP4 o GIF'],
        bestFor: 'tutoriales e informes de errores',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Captura',
      title: 'Captura con una tecla, encuadre exacto',
      lead: 'Invócala con un atajo y captura, anota y copia en un solo movimiento, sin interrupciones.',
      rows: [
        'Pasa el cursor y Shotera se ajusta a la ventana o al elemento que hay debajo',
        'Flechas, recuadros, texto, numeración, emoji, lupa: anota en el momento de capturar',
        'Dos formas de terminar: copiar directamente al portapapeles o anotar al momento (Elegante / Anotación al momento)',
      ],
      items: [
        { title: 'Pegatinas emoji', note: 'expresa más con un clic' },
        { title: 'Lupa', note: 'amplía el detalle' },
        { title: 'Numeración', note: 'guía el orden de lectura' },
        { title: 'Mosaico y resaltador', note: 'privacidad y énfasis' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Captura larga',
      title: 'Una página más alta que la pantalla, en una sola imagen',
      lead: 'Páginas largas, chats largos y documentos enteros — capturados de arriba abajo en una sola imagen.',
      rows: [
        'Desplazamiento automático o manual: cada fotograma se captura sobre la marcha',
        'Los fotogramas contiguos se emparejan y se funden, así que la imagen larga final no tiene costuras visibles',
      ],
      items: [
        { title: 'Vista previa del ensamblaje en vivo', note: 'detén el desplazamiento cuando esté completa' },
        { title: 'Sin costuras visibles', note: 'se lee como una página continua' },
        { title: 'Chats largos', note: 'toda la conversación en una sola imagen' },
        { title: 'Copiar o guardar', note: 'listo para documentación e informes' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Fijar en el escritorio',
      title: 'Fija referencias encima y sigue trabajando a su lado',
      lead: 'Pon una captura encima de todo lo demás: compara, consúltala y sigue trabajando sin cambiar de ventana.',
      rows: [
        'Fija una captura en la parte superior de la pantalla sin interrumpir lo que haces',
        'Cambia el tamaño desde cualquier borde o esquina con la relación de aspecto bloqueada; el doble clic alterna entre el tamaño original y la miniatura',
      ],
      items: [
        { title: 'Varias imágenes fijadas', note: 'compáralas lado a lado' },
        { title: 'Modo miniatura', note: 'doble clic para reducirla' },
        { title: 'Clic a través', note: 'nunca bloquea la ventana de debajo' },
        { title: 'Recuperar la última fijada', note: 'una tecla la trae de vuelta' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Grabación',
      title: 'Graba en 4K todo el tiempo que haga falta',
      lead: 'Convierte lo “difícil de explicar” en un vídeo que cualquiera puede seguir.',
      rows: [
        '720p / 1080p / 2K / 4K a 30 o 60 fps, sin límite de duración',
        'Inserta un GIF ligero en documentos, chats o informes — no hace falta ningún reproductor',
      ],
      items: [
        { title: 'Muestra el cursor y los clics', note: 'cada paso queda claro' },
        { title: 'MP4 o GIF', note: 'calidad o tamaño de archivo, tú decides' },
        { title: 'Listo para 4K', note: 'pensado para pantallas HiDPI' },
        { title: 'Historial', note: 'encuentra tu última grabación' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'Capacidades de IA',
      title: 'La IA que termina la captura por ti',
      lead: 'El recorte con IA, el borrado con IA y el OCR sin conexión se ejecutan en tu dispositivo: inteligencia sin renunciar a la privacidad.',
      rows: [
        'Personas, productos, logotipos: un PNG transparente en segundos, sin subir nada ni esperar a un servidor',
        'El OCR se ejecuta en tu dispositivo y te devuelve texto editable y listo para copiar con un clic',
      ],
      items: [
        { title: 'Recorta un sujeto', note: 'fondo transparente con un clic' },
        { title: 'Borra lo que no debería estar ahí', note: 'la IA reconstruye lo que había detrás' },
        { title: 'OCR sin conexión', note: 'idiomas mezclados, código y tablas' },
        { title: 'Traducción de imágenes', note: 'lee al instante capturas en otro idioma' },
      ],
      image: 'ai',
    },
    {
      eyebrow: 'Dos modos de finalización',
      title: 'Copia al instante o anota en el momento',
      lead: 'Elegante copia en cuanto sueltas la selección; Anotación al momento abre la barra al instante. Cámbialo cuando quieras en Ajustes → Captura.',
      rows: [
        'Elegante — se copia al instante, con una tarjeta abajo a la derecha que abre el editor',
        'Anotación al momento — la barra aparece con la selección; anota sin cambiar de ventana',
      ],
      image: 'modes',
      reversed: true,
    },
  ],
  cta: {
    eyebrow: 'Gratis para empezar',
    title: 'Haz que cada captura sea más rápida e inteligente',
    lead: 'Descarga gratuita, instalación en unos segundos. Deja el “hazme una captura” de cada día en manos de una herramienta que lo entiende.',
    primary: 'Descargar gratis',
    secondary: 'Más versiones',
    note: 'Ediciones Estándar y Lite; Windows 10/11+. Instalador / portátil / MSI disponibles.',
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Tienes una pregunta o una idea? Cuéntanos.',
    lead: 'Si tienes un problema, quieres proponer una función o solo pasar a saludar, elige el canal que prefieras.',
    replyNote: 'Leemos el correo y GitHub todos los días; normalmente respondemos en un plazo de 24 horas laborables.',
    faqNote: '¿Te has atascado con algo? La mayoría de las respuestas ya están en las preguntas frecuentes.',
    faqLink: 'Ver las preguntas frecuentes',
    soon: 'Próximamente',
    mail: {
      subject: 'Comentarios sobre Shotera — ',
      body: [
        'Hola:',
        '',
        '(Describe el problema que has tenido o la función que te gustaría ver.)',
        '',
        '',
        'Si puedes, estos datos nos ayudan a resolverlo más rápido:',
        '',
        '\u00b7 Edición de Shotera (Lite / Estándar):',
        '\u00b7 Versión de Windows:',
        '\u00b7 Pasos para reproducir el problema:',
        '',
        'Gracias.',
      ].join('\n'),
      copied: 'Correo copiado — abriendo tu aplicación de correo…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Habla con nosotros',
        note: 'Leemos con atención cada comentario que recibimos.',
        channels: [
          {
            key: 'email',
            name: 'Correo',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Soporte, licencias y colaboraciones.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Informes de errores, sugerencias de funciones y versiones anteriores.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Habla con otros usuarios de Shotera.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Síguenos',
        note: 'Notas de la versión, consejos y un vistazo a lo que hay detrás.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Notas de la versión y consejos rápidos.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Tutoriales y demostraciones de funciones.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Anuncios de nuevas versiones.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Capturas y grabaciones de pantalla más rápidas e inteligentes: fíjalas, anótalas y entiéndelas con un solo atajo.',
    cols: [
      {
        title: 'Producto',
        links: [
          { text: 'Funciones', path: '/', hash: 'features' },
          { text: 'Versiones', path: '/versions' },
        ],
      },
      {
        title: 'Soporte',
        links: [
          { text: 'Preguntas frecuentes', path: '/faq' },
          { text: 'Novedades', path: '/changelog' },
        ],
      },
      {
        title: 'Acerca de',
        links: [
          { text: 'Sobre nosotros', path: '/about' },
          { text: 'Contacto', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Términos', path: '/terms' },
      { text: 'Privacidad', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 idiomas de interfaz',
  },
} satisfies V3LocaleCopy;
