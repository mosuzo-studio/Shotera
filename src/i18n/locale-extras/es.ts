import type { LocaleExtras } from '../locale-extras-types';

/**
 * Spanish copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's es language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Captura con desplazamiento',

  home: {
    heroAlt:
      'Herramientas de Shotera en pantalla: captura, captura con desplazamiento, anotación, grabación de pantalla, recorte con IA, OCR sin conexión, lectura de códigos QR y de barras, traducción de imágenes y fijar en pantalla',
    cards: [
      {
        title: 'Captura con desplazamiento',
        description:
          'Una página más alta que la pantalla cabe igualmente en una sola imagen. Desplázate tú o deja que Shotera lo haga solo, y mira cómo se une la imagen larga mientras crece.',
      },
      {
        title: 'Lectura de códigos QR y de barras',
        description:
          'Lee el código que aparece en una captura — enlaces, Wi-Fi, contactos, códigos de barras — y copia su contenido. Todo sin conexión.',
      },
      {
        title: 'Visor de imágenes',
        description:
          'Abre una captura o cualquier archivo de imagen en su propia ventana: recorre la carpeta, amplía y retoca lo que necesites, sin necesidad de otra aplicación. Los formatos habituales se abren al instante.',
      },
    ],
    scrolling: {
      tagline: 'Captura con desplazamiento',
      title: 'Una página más alta que la pantalla, en una sola imagen',
      text: 'Páginas completas, chats largos y documentos enteros: capturados de arriba abajo en una sola imagen.',
      alt: 'Captura con desplazamiento uniendo una página larga en una sola imagen',
      items: [
        {
          title: 'Desplazamiento automático o manual',
          description:
            'Deja que Shotera recorra la página o desplázate a mano. En cualquier caso, cada fotograma se captura sobre la marcha.',
        },
        {
          title: 'Mira cómo se une mientras crece',
          description:
            'Una vista previa en vivo se coloca junto a la selección y crece con cada fotograma, para que pares justo cuando la página entera esté dentro.',
        },
        {
          title: 'Sin costuras visibles',
          description:
            'Los fotogramas contiguos se emparejan y se funden, así que la imagen larga final se lee como una página continua.',
        },
        {
          title: 'Cópiala o guárdala',
          description:
            'Envía la imagen larga directamente al portapapeles o guárdala en el disco: lista para documentación, chats e informes de errores.',
        },
      ],
    },
    stats: [
      { title: 'Idiomas', amount: '15' },
      { title: 'Valoración', amount: '4.9 / 5' },
      { title: 'IA sin conexión', amount: '100%' },
      { title: 'Apertura con atajo', amount: '<0.1s' },
    ],
    workflow: {
      title: 'De la pantalla a compartir en tres pasos.',
      alt: 'Flujo de trabajo de Shotera',
      steps: [
        {
          title: 'Pulsa el atajo',
          description:
            'Invoca Shotera en cualquier lugar y pasa el cursor: la ventana o el elemento que buscas ya está detectado.',
        },
        {
          title: 'Anota, extrae o edita',
          description: 'Marca lo importante, ejecuta OCR, recorta un sujeto, traduce: todo en la misma ventana.',
        },
        {
          title: 'Copia, guarda o fija',
          description:
            'Envíalo al portapapeles, guárdalo en local o fíjalo encima para consultarlo al instante.',
        },
      ],
    },
  },

  about: {
    statsTitle: 'Shotera en cifras',
    metaDescription:
      'Conoce al equipo detrás de Shotera y los principios que guían cada atajo, cada selección y cada captura.',
    hero: {
      tagline: 'Sobre nosotros',
      title: 'Haz capturas de pantalla',
      accent: 'tan buenas que desaparecen',
      subtitle:
        'Shotera nació de una frustración sencilla: las capturas que hacemos decenas de veces al día deberían ser más rápidas y fluidas. Somos un equipo pequeño de gente de producto e ingenieros que dependemos de las herramientas de captura como cualquiera, y llevamos esa obsesión a cada atajo, cada selección y cada fotograma.',
      alt: 'Herramientas de anotación de Shotera sobre un escritorio de Windows',
    },
    stats: [
      { title: 'Idiomas', amount: '15' },
      { title: 'Valoración', amount: '4.9 / 5' },
      { title: 'IA sin conexión', amount: '100%' },
      { title: 'Apertura con atajo', amount: '<0.1s' },
    ],
    stand: {
      title: 'Nuestros principios',
      subtitle:
        'Cuanto mejor se siente una herramienta, menos la notas: esa idea está detrás de cada decisión que tomamos.',
      items: [
        {
          title: 'La velocidad es lo primero',
          description:
            'Un atajo para invocarlo, detección automática de ventanas y elementos y exactamente el encuadre que buscabas. Menos de un segundo entre la intención y la captura.',
        },
        {
          title: 'Local primero, privado por defecto',
          description:
            'El OCR, el recorte y mucho más se ejecutan en tu dispositivo siempre que es posible. Tus capturas no salen a la nube salvo que tú lo decidas.',
        },
        {
          title: 'Contención por diseño',
          description:
            'Sin exceso de funciones ni interrupciones en tu flujo. Lo habitual está a un clic; lo avanzado aparece solo cuando lo necesitas.',
        },
      ],
    },
    toolbox: {
      title: '',
      subtitle: '',
      alt: 'Caja de herramientas de Shotera: captura, captura con desplazamiento, grabación, recorte con IA, OCR sin conexión, traducción de imágenes, fijar en pantalla y el visor de imágenes',
      items: [
        {
          title: 'Captura',
          description:
            'Detección inteligente de ventanas y elementos: el encuadre que quieres ya está elegido, así que casi nunca dibujas el recuadro a mano.',
        },
        {
          title: 'Captura con desplazamiento',
          description:
            'Desplázate por una página o un chat largo y deja que Shotera lo una en una sola imagen: desplazamiento automático o manual, con vista previa en vivo.',
        },
        {
          title: 'Grabación de pantalla y GIF',
          description:
            'Graba la pantalla y exporta a GIF ligero; los realces del cursor y las marcas de clic mantienen clara la demostración.',
        },
        {
          title: 'Recorte con IA',
          description:
            'Detecta el sujeto y quita el fondo con un clic, exportando PNG transparentes. Sin Photoshop.',
        },
        {
          title: 'OCR sin conexión',
          description:
            'Extrae texto de cualquier captura en tu dispositivo, en varios idiomas. Copia y pega, sin necesidad de internet.',
        },
        {
          title: 'Traducción de imágenes',
          description:
            'Reconoce y traduce el texto de cualquier imagen al instante: documentos, gráficos e interfaces en otro idioma se vuelven legibles.',
        },
        {
          title: 'Fijar en pantalla',
          description:
            'Mantén cualquier captura flotando encima como referencia, colocada al lado sin desorden.',
        },
        {
          title: 'Visor de imágenes',
          description:
            'Abre una captura o cualquier archivo de imagen en su propia ventana: recorre la carpeta, amplía y retoca lo que necesites.',
        },
      ],
    },
    values: {
      title: 'Nuestros valores',
      subtitle:
        'Crear una herramienta y usarla son lo mismo para nosotros. Trabajamos cada día con lo que hacemos.',
      items: [
        {
          title: 'Hecho para el trabajo real',
          description:
            'Cada función nace de un problema real: escribir documentación, anotar especificaciones de diseño, grabar reproducciones, leer material en otro idioma. Lo usamos primero y luego te lo damos.',
        },
        {
          title: 'Siempre refinando',
          description:
            'La sensación de los atajos, el ajuste a los bordes en las selecciones, tamaño frente a nitidez al grabar: seguimos afinando los detalles hasta que se sienten bien.',
        },
        {
          title: 'Respeto por el usuario',
          description:
            'Sin programas añadidos, sin ventanas emergentes molestas y sin subir tus datos a escondidas. Las funciones principales siguen siendo gratis: esa es nuestra promesa.',
        },
      ],
    },
    history: {
      title: 'Cómo llegamos hasta aquí',
      subtitle: 'De una herramienta que creamos para nosotros a una que la gente usa cada día.',
      cta: 'Descargar Shotera gratis',
      items: [
        {
          title: 'Empezó con una necesidad propia',
          description:
            'No encontrábamos una herramienta de captura lo bastante rápida y fluida, así que escribimos la nuestra.',
        },
        {
          title: 'Crecimos con nuestros usuarios',
          description:
            'Captura con desplazamiento, recorte con IA, OCR sin conexión, traducción de imágenes: muchas funciones salieron directamente de los comentarios de los usuarios.',
        },
        {
          title: 'Llegando a más personas',
          description:
            'Hoy Shotera habla 15 idiomas de interfaz y sigue creciendo, con el mismo objetivo: simplificar las capturas de pantalla.',
        },
      ],
    },
    contact: {
      title: 'Ponte en contacto',
      tagline: 'Escríbenos cuando quieras',
      items: [
        {
          title: 'Comunidad',
          description:
            'Únete a la comunidad de Shotera para enterarte de novedades y consejos, y contarnos directamente lo que piensas.',
        },
        {
          title: 'Soporte por correo',
          description:
            '¿Tienes un problema o una idea para una función? Escribe a mosuzo.studio@gmail.com: leemos y respondemos a todos.',
        },
      ],
    },
  },
};
