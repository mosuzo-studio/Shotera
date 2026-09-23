---
title: 'Novedades'
layout: '~/layouts/MarkdownLayout.astro'
---

# Notas de la versión de Shotera: todas las versiones (español)

**📫 Comentarios**

Ajustes → Acerca de → Comentarios y sugerencias

**🔗 Índice de versiones**

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

**Publicado:** 2026-09-24

Versión Lite, captura larga, fijaciones redimensionables y compilaciones más ligeras.

**🆚 Lite vs. versión completa:** consulta la [comparación de versiones](/es/versions) para ver las diferencias entre funciones.

**✨ Novedades**

- Versión Lite añadida: instalador de 17MB con las funciones esenciales de captura y anotación. El banner de mejora de la configuración enlaza con la versión completa en el sitio web.
- [Sitio web oficial](https://shotera.mosuzo.com/) actualizado, con contenido y estilo renovados.
- Captura larga añadida (vista previa, pruebas beta): modos de desplazamiento automático y manual, con ventana de vista previa en tiempo real. El algoritmo inteligente de unión detecta los límites superiores y maneja diseños mixtos. Los consejos guían el primer uso. Únete al grupo beta para probarla.
- Mejoras en la ventana de fijación: el doble clic alterna entre el tamaño original y el modo miniatura + cerrar. Arrastra los bordes o las esquinas para redimensionar con la proporción bloqueada. El menú contextual nativo se extiende más allá de los límites de la ventana. La visibilidad de la barra de herramientas se mantiene entre sesiones ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- El modelo de recorte con IA pasa a ser el u2netp integrado, con rendimiento instantáneo. rmbg-1.4 ahora se descarga a petición, con una guía en el primer uso.
- Comando de impresión añadido al editor: el menú contextual y el menú Archivo abren el cuadro de diálogo de impresión del sistema ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- El menú contextual del editor puede abrir la carpeta que contiene el archivo con el archivo actual resaltado ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Mejoras**

- Tamaño de compilación reducido un 20%: compresión del instalador y ajustes del compilador optimizados. Perfil FastBuild añadido para iterar más rápido.
- Consumo de memoria base reducido.
- La barra de título del editor muestra dinámicamente el nombre del archivo de imagen actual.
- Aviso de actualización completada simplificado a logo + texto + botón, sin vista previa grande.
- Flujo de incorporación refinado: la guía de 8 páginas pasa a estar en la tarjeta de invitación de la esquina inferior derecha. La ventana de presentación de funciones se detiene tras cerrarla 3 veces. El recorte con IA muestra una guía en el primer uso.
- La traducción de imágenes con IA avisa cuando el resultado coincide con la entrada y remite a la configuración de idioma. El aviso puede desactivarse en Ajustes → Capacidades de IA.
- Nombre de archivo predeterminado de capturas, capturas largas y salida del editor unificado en `Shotera_YYYYMMDD_HHMMSS`.
- La miniatura del aviso de captura larga recorta la parte superior de la vista en lugar de aplastar la imagen completa.

**🐞 Corrección de errores**

- Corregido el posicionamiento inicial de la ventana de anotación en configuraciones de dos monitores.
- Corregidos los errores de cálculo de proporción y el temblor del marco al arrastrar para redimensionar la ventana fijada.
- Corregido el comportamiento del doble clic, que no se aplicaba tras la selección y no volvía al tamaño original.
- Corregido el cuadro de diálogo de error de unión de la captura larga, que quedaba bloqueado por las reglas de clic a través.
- Corregidas las barras de desplazamiento fantasma y la lectura de zoom del 0% o 1% tras cargar imágenes en el editor.
- Corregido el nombre de archivo duplicado en la barra de título del editor.

**🙏 Agradecimientos**

Gracias a los miembros de la comunidad que informaron de problemas y sugirieron funciones que dieron forma a esta versión. Las mejoras de la captura larga y de la ventana de fijación nacieron de los comentarios de los usuarios.

---

## Shotera v7.6.0

**Publicado:** 2026-09-21

Una ventana de novedades, lectura de código QR, reproducción de GIF y más formatos de imagen.

**✨ Novedades**

- Ventana de novedades añadida al iniciar: compara los dos modos de finalización de captura, muestra dónde está la lectura de código QR y te invita a valorar Shotera. Marca «No volver a mostrar» o pulsa «Entendido» tres veces para que deje de aparecer.
- Lectura de código QR añadida: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF y UPCA, además de GS1 Digital Link. El panel de resultados se puede redimensionar y arrastrar, con historial numerado.
- Abre PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF y TIFF (tif/tiff). SVG, ICO, AVIF y TIFF son nuevos en esta versión. Ábrelos desde el menú Archivo o arrastra las imágenes.
- Reproducción de animaciones GIF añadida. La barra de estado y el panel de información de la imagen muestran el número de fotogramas y la duración total.
- Panel de información de la imagen añadido: dimensiones, formato, DPI, modo de color, profundidad de bits, datos EXIF de disparo y comprobación de privacidad de etiquetas de autor y GPS. Ábrelo desde el menú Archivo, el clic derecho en el lienzo, la barra de estado o Ctrl+I.
- La barra de estado muestra el nivel de zoom, las dimensiones de la imagen, el tamaño del archivo y la ruta. La ruta tiene tres modos: Oculta, Ruta de navegación y Ruta completa.
- La barra de título del editor muestra el nombre de la imagen actual. El menú contextual del lienzo abre la carpeta que contiene el archivo con la imagen actual resaltada ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Cuadro de diálogo de confirmación antes de sobrescribir un archivo al guardar. Marca «No volver a preguntar» para omitirlo más adelante.
- Ventanas de fijación: oculta la barra de herramientas de la esquina superior derecha desde el menú contextual; el ajuste se recuerda ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Mejoras**

- La barra de modos superior vuelve a mostrarse, con las entradas Captura y Código QR.
- Se ha rehecho la representación de imágenes grandes en el editor: cargar y ampliar ahora es suave y fluido.
- El zoom con Ctrl + rueda ahora se ancla en el cursor en lugar del centro del lienzo.
- Atajos de zoom añadidos: Ctrl+=, Ctrl+- y Ctrl+0.
- El zoom y el desplazamiento ya no sacan la imagen por completo de la vista.
- Las imágenes del editor tienen una sombra suave, y el modo claro usa un lienzo blanco puro.
- Lupa del selector de color rediseñada: marco cuadrado de doble trazo, borde del panel más ajustado, muestra cuadrada y color de la cruz refinado.
- El menú Ayuda abre el sitio web directamente.
- La traducción de imágenes con IA avisa cuando el resultado coincide con el original (normalmente cuando el idioma de destino es igual al de origen) y remite al ajuste de idioma. Desactiva el aviso en Ajustes → Capacidades de IA.
- El momento del aviso de valoración se ha reformulado: ahora aparece tras la primera captura de cada versión y, después, como máximo una vez al mes.

**🐞 Corrección de errores**

- Corregidas las barras de desplazamiento fantasma y la lectura errónea de zoom del 0% o 1% tras cargar una imagen.
- Corregido el desplegable «Archivo» del editor, que quedaba cortado en el borde de la ventana.
- Corregidas las capturas que se activaban sin querer al iniciar la app con Windows.
- Corregido el modo de finalización de captura de la configuración, que no se actualizaba al cambiarlo desde la ventana de novedades.

**🙏 Agradecimientos**

Gracias a @korenevskiy y @NewJon27 por las sugerencias de funciones que dieron forma a esta versión.

La lectura de código QR se añadió en respuesta a los comentarios de Horihons.

---

## Shotera v7.5.1

**Publicado:** 2026-09-14

Modo de captura elegante, fijado instantáneo y atajos de copia.

**✨ Novedades**

- Modo de captura «Elegante» añadido: selecciona la región y listo. Imagen copiada con vista previa en el aviso. Sin superposición. Compatible con el modo oscuro ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Atajo F3 de fijación instantánea añadido durante o después de la captura. Personalizable en Ajustes → Atajos ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Ctrl+C añadido para copiar la captura y cerrar la superposición en un solo paso.
- Doble clic añadido para confirmar la captura al instante.
- Clic derecho añadido para cancelar la captura.
- Opción «Extraer el texto automáticamente tras la captura» añadida en Ajustes → Captura.
- La barra de título de la ventana del editor sigue el tema del sistema.

**🚀 Mejoras**

- «Guardar como» del editor usa marcas de tiempo dinámicas en los nombres de archivo.
- Atajo Ctrl+Shift+S para «Guardar como».
- El menú de la bandeja y el título de la ventana del editor ahora están localizados.

**🐞 Corrección de errores**

- Corregido el fallo del OCR en rutas de instalación que no están en inglés.
- Corregida la pérdida de resolución de las fijaciones en pantallas de alto DPI.
- Corregido el F3 creando fijaciones duplicadas desde la selección y el portapapeles.
- Corregida la versión de Microsoft Store, que no mostraba el aviso en el modo «Elegante».
- Corregido el clic en el aviso de la versión de Microsoft Store, que activaba una captura adicional.
- Corregido el punto rojo del botón de actualización, que permanecía tras actualizar.

**🙏 Agradecimientos**

Gracias a @Const-me, @LightQuanta y @wherewhere por las sugerencias de funciones que dieron forma a esta versión.

---

## Shotera v7.5.0

**Publicado:** 2026-09-12

Editor de imágenes completo, modos de captura y compatibilidad ampliada con CPU.

**✨ Novedades**

- Editor de imágenes completo añadido en una ventana independiente, desde «Editar Imagen…» en la bandeja. Compatible con abrir/guardar/guardar como, arrastrar y soltar, zoom del 10% al 400% con Ctrl + rueda, herramientas de anotación, OCR, recorte con IA y borrado con IA.
- Estilo de flecha afilada «Flecha normal» añadido a la subbarra de flechas.
- Ajuste «Modo de finalización de captura» añadido: elige «Elegante» para copiar la selección con vista previa en el aviso (al pulsarlo se abre el editor) o mantén el valor predeterminado «Anotación al momento».
- Ajustes «Extraer el texto automáticamente tras la captura» y «Ocultar botones de IA» añadidos.
- El idioma de destino de la traducción sigue el idioma de la interfaz.

**🚀 Mejoras**

- Compatibilidad de CPU ampliada a Intel de 3.ª generación (Ivy Bridge) y anteriores. Funciones de IA no disponibles en CPU antiguas, con cuadro de diálogo explicativo.
- Ventana de guía dibujada por la propia app en la esquina inferior derecha cuando las notificaciones de Windows están desactivadas.
- El borrador ahora borra flechas/líneas y muestra el cursor de borrador.
- Barra de herramientas principal integrada en la barra de menús, siempre visible. La barra secundaria ya no empuja la imagen.
- Copiar en el editor ya no cierra la ventana ni borra la selección. La ✕ roja borra la imagen.
- La página Captura de la configuración marca las funciones nuevas con un punto rojo.

**🐞 Corrección de errores**

- Corregido el cierre inesperado de la app al iniciar en CPU sin compatibilidad con AVX2.
- Corregido el fallo del OCR con rutas de instalación en chino u otros idiomas que no son el inglés.
- Corregidas las imágenes con caracteres no ASCII en la ruta que no se cargaban al arrastrarlas.
- Corregida la ventana del editor, que a veces no cargaba la captura desde el aviso.
- Corregido el recorte/borrado con IA, que dejaba imágenes desplazadas y franjas sin limpiar.
- Corregida la barra de estado del editor, que no se actualizaba tras cargar la imagen.
- Corregido el desplazamiento de los resaltados de extracción de texto en el editor.
- Corregido el deslizamiento hacia abajo de los sellos de número/emoji al redimensionarlos.

**🗑️ Eliminado**

- Los menús Edición y Ver de la barra de menús del editor.

---

## Shotera v7.4.2

**Publicado:** 2026-09-07

Comentarios en la app, instalador en 22 idiomas y mejoras de rendimiento.

**✨ Novedades**

- Formulario de comentarios en la app añadido en Ajustes → Acerca de, para valoraciones, sugerencias y encuestas.
- Compatibilidad de idiomas del instalador NSIS ampliada de 2 a 22 idiomas.

**🚀 Mejoras**

- Rendimiento de anotación mejorado, con un dibujo más fluido.
- La granularidad de detección ahora usa «Detectar elementos de interfaz» de forma predeterminada.
- Las asas de selección solo aparecen cuando la selección es lo bastante grande.
- La entrada de comentarios en Acerca de usa un icono en el que se puede hacer clic.
- Textos revisados para un tono más limpio.
- Flujo de interacción mejorado al abrir la página de actualización desde el aviso.

**🐞 Corrección de errores**

- Corregidas las superposiciones de anotación que aparecían en el monitor equivocado.
- Corregida la detección de elementos, que restablecía las capas de resaltado al moverse entre elementos.
- Corregido el inicio automático, que dejaba de funcionar tras actualizar la versión de Microsoft Store.

**🗑️ Eliminado**

- La entrada «Guía de funciones» y el texto de sugerencia de modo.

---

## Shotera v7.4.1

**Publicado:** 2026-09-04

Comparación de modelos, nomenclatura coherente y ayuda integrada.

**✨ Novedades**

- Tabla de comparación de modelos añadida: el icono de ayuda junto a «Modelo de recorte con IA» abre una tabla que compara los cuatro modelos por tamaño, velocidad, calidad y caso de uso.
- Nomenclatura de modelos coherente con el formato «Modelo · Característica», ordenada de menor a mayor.
- Ayuda integrada para la traducción de imágenes: la descripción pasa a la sugerencia al pasar el cursor por el icono de ayuda.

---

## Shotera v7.4.0

**Publicado:** 2026-09-03

Rediseño de la experiencia de actualización, compatibilidad con Microsoft Store y correcciones de IA.

**✨ Novedades**

- Experiencia de actualización rediseñada, con lógica de actualización e interfaz de configuración optimizadas. Instalación automática en reposo, cuatro modos de actualización y frecuencia de recordatorios más inteligente.
- Compatibilidad de la versión de Microsoft Store mejorada y corregido el inicio automático con Windows.

**🐞 Corrección de errores**

- Corregido el modelo de recorte con IA, que se volvía a descargar en cada comprobación.
- Aceleración mediante espejo en China añadida (shotera-ai.pages.dev), con vuelta automática a Hugging Face.

---

## Shotera v7.3.1

**Publicado:** 2026-08-29

Compatibilidad con el modo oscuro.

**✨ Novedades**

- Compatibilidad con el modo oscuro añadida: elige Claro, Oscuro o Seguir al sistema en la configuración. Todas las ventanas se actualizan al instante, sin reiniciar.

---

## Shotera v7.3.0

**Publicado:** 2026-08-23

OCR automático, copia parcial y resaltado vinculado.

**✨ Novedades**

- OCR automático: el texto se extrae en cuanto se selecciona la región. La selección sigue siendo editable, con reextracción automática.
- Copia parcial: arrastra sobre el texto reconocido y pulsa Ctrl+C para copiar solo esa parte. Aparece en el historial del portapapeles de Windows.
- Resaltado vinculado: al seleccionar texto en la imagen original, los caracteres coincidentes se resaltan en el panel de resultados, carácter por carácter.
- Superposición sensible a la herramienta: la capa de texto sigue siendo interactiva cuando no hay ninguna herramienta de anotación activa y se oculta al elegir una.
- Localización: chino tradicional, japonés, coreano, portugués (Brasil), español, alemán, francés, italiano, ruso, árabe, neerlandés, polaco y sueco ya cubren la configuración de traducción de imágenes.

**🐞 Corrección de errores**

- Corregido «Extraer texto», que abría el panel de resultados directamente tras el OCR automático.
- Corregida la cancelación de la herramienta de anotación, que no bloqueaba las formas dibujadas.
- Corregido el botón «Omitir» invisible en la guía de primera ejecución.

---

## Shotera v7.2.2

**Publicado:** 2026-08-20

Proveedores de traducción de imágenes, prueba de clave y correcciones de alto DPI.

**✨ Novedades**

- Cada servicio es ahora una tarjeta plegable: Traducción de imágenes Baidu (V2.0 alta precisión / V1 clásico) y Youdao (99 idiomas).
- Baidu funciona desde el primer momento con cuota integrada. Un APP ID/Secret personalizados amplían el límite.
- La memoria de idioma se guarda por proveedor.
- «Probar clave» añadido para verificar la credencial con una solicitud real.

**🐞 Corrección de errores**

- Corregidos los enlaces a la documentación de la API de los proveedores, que ahora se abren correctamente.
- Corregido el arrastre de la selección usando la ruta de entrada de puntero de alta frecuencia.
- Corregidas las coordenadas de selección en alto DPI, convertidas mediante el sistema de coordenadas del escenario.
- Corregida la superposición de captura congelada en varios monitores con DPI mixto, alineada a las coordenadas nativas del escritorio virtual.

---

## Shotera v7.2.1

**Publicado:** 2026-08-18

Captura al portapapeles y barras de herramientas móviles.

**✨ Novedades**

- Captura directa al portapapeles añadida: pulsa Alt+C o elige «Capturar y copiar» en el menú de la bandeja para omitir la anotación. La captura va al portapapeles.
- Asa de arrastre de seis puntos restaurada en las barras de herramientas de anotación principal y secundaria. Visibilidad configurable en la configuración.

---

## Shotera v7.2.0

**Publicado:** 2026-08-02

Inicio de captura más rápido, captura personalizada y 15 idiomas.

**✨ Novedades**

- Inicio de captura mucho más rápido: la ruta de captura/anotación reutiliza y precalienta la ventana de anotación, evitando el cuello de botella de la decodificación de imagen. El tiempo medio del atajo a la selección se redujo un 68,2% en pruebas con dos monitores.
- Flujo de captura personalizada añadido: ábrelo con el atajo predeterminado Alt+F1 o desde el menú de la bandeja. Define la posición X/Y exacta y la anchura/altura, bloquea la proporción, cambia la orientación y añade retardo. Guarda preajustes de tamaño reutilizables, con restauración automática del último valor usado. Compatible con coordenadas de varios monitores (incluidas posiciones negativas) y tamaños de hasta 40000 píxeles.
- 15 idiomas de interfaz añadidos: chino tradicional, japonés, portugués (Brasil), español, alemán, francés, italiano, coreano, ruso, árabe, neerlandés, polaco y sueco. Los cambios de idioma se aplican al instante en las ventanas abiertas y la bandeja, sin reiniciar. El árabe incluye diseño completo de derecha a izquierda.

**🚀 Mejoras**

- Salida de captura más limpia, sin los destellos de la selección anterior ni la imagen residual de toda la ventana.
- Reconocimiento más rápido de controles anidados, con menos saltos.
- Los controles de la barra de tareas y los iconos/textos de navegación del Explorador de archivos se pueden apuntar con más precisión.
- Árboles de accesibilidad de Chromium y Electron precalentados y reintentados cuando es necesario.
- La transferencia de imágenes al portapapeles usa una ruta RGBA más directa.
- Alt+T para fijar y Ctrl+S para guardar funcionan con la región seleccionada.
- Recursos de los modelos de IA restaurados. Los paquetes portátiles incluyen los archivos de modelo necesarios.

---

## Shotera v7.1.0

**Publicado:** 2026-07-29

Detección de ventanas, herramientas de anotación y fijaciones mejoradas.

**✨ Novedades**

- Detección de ventanas y controles mejorada, con selección más fácil de destinos anidados.
- Lupa de captura refinada, con bordes más nítidos, asas de redimensionado más grandes y cruz mejorada.
- Compatibilidad añadida con formas, flechas, texto, pegatinas, marcadores y lupa local.
- Edición mejorada, con redimensionado, rotación, estilo y deshacer/rehacer más fluidos.
- Diseño de la barra de herramientas actualizado.
- Fijaciones siempre visibles mejoradas, con soporte para mover, redimensionar, girar, voltear, opacidad y clic a través.
- Mejor compatibilidad con el portapapeles.
- Entrada de herramientas de IA y botones de la barra de herramientas restaurados.
- Entradas de la guía de funciones restauradas.
- Modo de presentación mejorado.
- Gestión de atajos, canales de actualización y persistencia de la configuración mejorados.
- Licencia bilingüe en el instalador MSI.
- Las capturas siguen siendo totalmente locales. No se necesita cuenta.

---

## Shotera v7.0.0

**Publicado:** 2026-07-23

Captura lo importante. Explícalo con claridad. Mantenlo a la vista.

**✨ Novedades**

- Flujo rápido de captura con la tecla F1, detección de ventanas/controles y lupa en pantalla.
- Herramientas de anotación: rectángulos, elipses, líneas, flechas, pincel libre, resaltador, texto enriquecido, numeración automática de pasos, mosaico/desenfoque, pegatinas emoji y lupa local.
- F3 crea fijaciones siempre visibles a partir de capturas o del contenido del portapapeles. Las fijaciones admiten mover, redimensionar, girar, voltear y transparencia.
- El modo de presentación ayuda a preparar un escritorio más limpio antes de capturas/reuniones, ocultando iconos y aplicando preajustes de tema/fondo de pantalla.

**🚀 Mejoras**

- Experiencia más coherente, con una respuesta de selección más clara.
- Asas de redimensionado visibles.
- Lupa de captura más limpia.
- Barras de herramientas de anotación alineadas.
- Edición de texto refinada.
- Incorporación mejorada.
- Ajustes fiables.
- Instalación más fluida en Windows.
