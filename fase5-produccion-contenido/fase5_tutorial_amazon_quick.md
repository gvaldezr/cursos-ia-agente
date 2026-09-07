# Tutorial de Inicio Rápido con Amazon Quick
## Curso: IA Práctica para Líderes Anáhuac Mayab
### Fase 5 · Tutorial Técnico Paso a Paso

> **Versión:** 1.0 | **Fecha:** 5 de septiembre de 2026
> **Audiencia:** Directivos no técnicos — Universidad Anáhuac Mayab
> **Prerrequisito:** Ninguno. Este tutorial es autocontenido.
> **Tiempo estimado:** 25–30 minutos de lectura activa

---

## 1. Qué es Amazon Quick

Amazon Quick es una aplicación de escritorio que funciona como un asistente de inteligencia artificial personal. A diferencia de otras herramientas de IA que operan exclusivamente en la nube, Amazon Quick se instala en su computadora y combina la capacidad de conversar con un modelo de lenguaje avanzado con el acceso directo a sus archivos locales, su correo electrónico y sus herramientas de trabajo. Piense en ella como un colega digital que puede leer sus documentos, redactar comunicados, analizar reportes y organizar información — todo desde un solo espacio de trabajo.

Lo que distingue a Amazon Quick de herramientas como ChatGPT o Gemini es su enfoque integral. No se limita a responder preguntas: puede conectar con Outlook, Gmail y Slack para sintetizar su actividad; puede crear documentos de Word, presentaciones de PowerPoint y hojas de cálculo; y le permite construir *agentes* (asistentes especializados) que ya conocen el contexto de su área y pueden ejecutar tareas de manera recurrente sin intervención manual.

Para el contexto de este curso, Amazon Quick será su herramienta principal de trabajo. El plan gratuito (*Free*) incluye todo lo necesario para los primeros seis módulos: chat con el asistente de IA, creación de agentes personalizados, búsqueda en la web, análisis de archivos y generación de documentos. No requiere cuenta de Amazon Web Services para comenzar. Los módulos avanzados (7 y 8) aprovechan funciones del plan Plus ($20 USD/mes), como mayor capacidad de almacenamiento y automatización de flujos.

---

## 2. Cómo acceder y configurar por primera vez

### Paso 1 — Descargar e instalar la aplicación

1. Abra su navegador y visite **amazon.com/quick**.
2. Seleccione la versión correspondiente a su sistema operativo (macOS o Windows).
3. Descargue el instalador y ejecútelo. En macOS, arrastre el icono de Amazon Quick a la carpeta Aplicaciones. En Windows, siga el asistente de instalación.
4. Al finalizar, abra Amazon Quick desde su menú de aplicaciones.

> **Importante:** Amazon Quick se instala como aplicación de escritorio, no como extensión del navegador. Busque el icono en su barra de aplicaciones.

**Qué hacer si algo sale mal:**
- Si la descarga no inicia, verifique que su navegador no esté bloqueando las descargas.
- Si el instalador solicita permisos de administrador, contacte a su área de sistemas para autorización.
- Si la aplicación no abre después de instalarla, reinicie su computadora e intente nuevamente.

### Paso 2 — Iniciar sesión

1. Al abrir Amazon Quick por primera vez, aparece una pantalla de bienvenida.
2. Seleccione «Iniciar sesión» e ingrese sus credenciales corporativas o su cuenta personal.
3. Una vez autenticado, verá la pantalla principal con un saludo personalizado.

> **Nota:** El nombre que aparece en el saludo (por ejemplo, «Buenos días, Dra. Méndez») se toma de su identidad corporativa. No es configurable dentro de la aplicación.

### Paso 3 — Conceder acceso a sus carpetas de trabajo

Para que Amazon Quick pueda leer y analizar sus documentos, necesita indicarle cuáles carpetas puede consultar.

1. En la barra lateral izquierda, localice **Settings** (Configuración) en la parte inferior.
2. Abra la sección **My computer** (Mi computadora).
3. En «Local folders» (Carpetas locales), seleccione **Agregar carpeta**.
4. Navegue hasta la carpeta donde almacena sus reportes, comunicados o documentos de trabajo.
5. Confirme la selección.

> **Recomendación:** Comience con una sola carpeta que contenga documentos que usa frecuentemente (por ejemplo, «Reportes Semestrales» o «Comunicados»). Puede agregar más carpetas en cualquier momento.

**Qué hacer si algo sale mal:**
- Si no ve la opción «Agregar carpeta», verifique que está en la sección correcta: Settings → My computer → Local folders.
- Si su carpeta está en OneDrive o Dropbox, Amazon Quick la detecta automáticamente, pero deberá activar el acceso manualmente con el interruptor «Agent access».

### Paso 4 — Conectar su correo electrónico (opcional pero recomendado)

1. Vaya a **Settings → Capabilities → Connections**.
2. Localice la tarjeta de **Outlook** o **Gmail**, según su servicio de correo.
3. Seleccione «Conectar» y complete el proceso de autorización.
4. Una vez conectado, Amazon Quick podrá leer su correo, buscar mensajes y redactar borradores.

> **Nota:** La conexión de correo es opcional para los primeros módulos. Se vuelve especialmente útil a partir del Nivel 3 (Email y comunicados institucionales).

### Paso 5 — Activar la memoria del asistente

La memoria permite que Amazon Quick aprenda sus preferencias a lo largo del tiempo.

1. Vaya a **Settings → My context**.
2. En la esquina superior derecha, seleccione el icono de **engranaje** (⚙).
3. En la ventana que se abre, localice **Memory** y active el interruptor.
4. Cierre la ventana de configuración.

> **Recomendación:** Active la memoria desde el primer día. Conforme use la herramienta, Amazon Quick recordará su estilo de redacción preferido, los formatos que solicita con frecuencia y el contexto de su área.

---

## 3. Anatomía de la interfaz

Amazon Quick organiza su espacio de trabajo en cuatro zonas principales. A continuación se describe cada una para que pueda orientarse con facilidad.

### 3.1 Barra lateral izquierda — navegación principal

La barra lateral contiene los siguientes elementos, de arriba hacia abajo:

| Elemento | Función | Cuándo lo usará |
|---|---|---|
| **Nuevo chat** | Inicia una conversación nueva con el asistente | Cada vez que comience una tarea diferente |
| **Feed de actividad** | Muestra notificaciones, resultados de tareas programadas y resúmenes | Para revisar lo que ocurrió mientras estaba ausente |
| **Content** (Contenido) | Accede a los documentos generados (Word, Excel, PDF, presentaciones) y a sus Spaces | Para recuperar archivos que Amazon Quick creó para usted |
| **Historial de chats** | Lista de conversaciones recientes | Para retomar una conversación anterior |
| **Settings** | Configuración general: carpetas, conexiones, memoria, apariencia | Para ajustar la herramienta a sus necesidades |

### 3.2 Área central — el chat

Esta es la zona principal de trabajo. Aquí escribe sus instrucciones y recibe las respuestas del asistente. Las respuestas pueden incluir texto, tablas, código, documentos incrustados y visualizaciones interactivas.

### 3.3 Barra de entrada (parte inferior del chat)

En la parte inferior de la pantalla encontrará los controles de entrada:

| Control | Icono / Ubicación | Para qué sirve |
|---|---|---|
| **Adjuntar archivos** | Clip (📎) a la izquierda | Subir un documento para que la IA lo analice |
| **Elegir carpeta** | Icono de carpeta | Dar acceso a una carpeta completa |
| **Spaces** | Icono de Spaces | Conectar un espacio de datos de Quick Web |
| **Búsqueda web** | Icono de globo terráqueo | Activar búsqueda en internet para la siguiente consulta |
| **Selector de modelo** | Fast / Balanced / Smart | Elegir la velocidad y calidad de la respuesta |
| **Micrófono / Enviar** | Micrófono (🎙) o flecha (→) | Dictar por voz o enviar su mensaje |

### 3.4 Barra superior derecha — accesos rápidos

| Elemento | Función |
|---|---|
| **Feed** | Abre el panel de actividad sin salir de su conversación actual |
| **Mission Control** | Muestra el estado de sus agentes y tareas programadas |
| **All data and apps** | Gestiona conexiones y fuentes de datos |

### 3.5 Agentes y Skills — su centro de personalización

Accesible desde la barra lateral, la sección **Agents & skills** contiene:

- **Agents** (Agentes): donde crea, administra y ejecuta sus asistentes especializados.
- **Skills** (Habilidades): capacidades adicionales que puede activar o desactivar.
- **Schedules** (Tareas programadas): visibles desde Mission Control, permiten que un agente ejecute tareas de manera automática en horarios definidos.

---

## 4. Su primera conversación: ejemplo práctico paso a paso

Este ejercicio le tomará menos de cinco minutos y le permitirá experimentar directamente con Amazon Quick.

### Objetivo

Generar un comunicado institucional listo para enviar a su cuerpo docente.

### Instrucciones

**Paso 1.** Abra Amazon Quick y seleccione **Nuevo chat**.

**Paso 2.** Verifique que el selector de modelo (esquina inferior) esté en **Balanced**. Si no lo está, selecciónelo.

**Paso 3.** Escriba la siguiente instrucción en el área de chat. Reemplace los valores entre corchetes `[DATO]` con información real de su área. Si no tiene los datos a la mano, use los valores de ejemplo que aparecen debajo.

```
Redacte un comunicado formal dirigido al cuerpo docente de la
Licenciatura en [NOMBRE DE SU PROGRAMA] de la Universidad Anáhuac Mayab.

Asunto: [TEMA — ejemplo: Inicio del periodo de evaluaciones parciales
del ciclo Otoño 2026].

Incluya:
- Fechas relevantes: [FECHA 1], [FECHA 2]
- Acciones requeridas del docente: [ACCIÓN 1], [ACCIÓN 2]
- Contacto para dudas: [NOMBRE, EXT. O CORREO]
- Tono institucional, respetuoso y claro
- Extensión: máximo 200 palabras
- Tratamiento de «usted»

Firmante: [SU NOMBRE], [CARGO] — Universidad Anáhuac Mayab
```

**Datos de práctica (si no tiene los propios):**
- Programa: Licenciatura en Psicología
- Tema: Inicio del periodo de evaluaciones parciales del ciclo Otoño 2026
- Fechas: 15 al 22 de octubre de 2026; entrega de calificaciones antes del 25 de octubre
- Acciones: subir calificaciones al sistema Banner; reportar incidencias a coordinación
- Contacto: Dra. Laura Méndez, ext. 2230
- Firmante: Dra. Laura Méndez, Coordinadora de Psicología

**Paso 4.** Presione **Enter** (o el botón de enviar) y espere la respuesta.

**Paso 5.** Lea el comunicado generado. Verifique que:
- El tono sea apropiado para su contexto institucional.
- Los datos incluidos coincidan con lo que usted proporcionó.
- No haya información inventada por la IA.

**Paso 6.** Si desea ajustes, escriba una instrucción de refinamiento. Por ejemplo:
- «Reduzca la extensión a 150 palabras.»
- «Haga el tono más directo y menos protocolar.»
- «Agregue un recordatorio sobre el formato de entrega de actas.»

> **Importante:** Revise siempre el resultado antes de enviarlo. La IA genera borradores de alta calidad, pero la responsabilidad del contenido final es del directivo firmante.

**Qué hacer si algo sale mal:**
- Si la respuesta es genérica o no incluye sus datos, verifique que escribió la instrucción completa con los valores específicos.
- Si la IA responde en inglés, agregue al inicio de su instrucción: «Responda en español.»
- Si el comunicado es demasiado extenso, indique explícitamente el máximo de palabras.

---

## 5. Tips de productividad

### 5.1 Búsqueda en la web

Para que Amazon Quick consulte información actualizada de internet:

1. Antes de escribir su instrucción, active el icono de **búsqueda web** (globo terráqueo) en la barra de entrada.
2. Escriba su consulta normalmente.
3. La respuesta incluirá fuentes de internet con enlaces verificables.

> **Ejemplo de uso:** «Busque las fechas oficiales del calendario COPAES 2027 para acreditación de programas de Derecho.»

### 5.2 Adjuntar archivos para análisis

1. Seleccione el icono de clip (📎) en la barra de entrada.
2. Elija el archivo que desea analizar (PDF, Word, Excel, CSV).
3. Escriba su instrucción haciendo referencia al documento.

> **Ejemplo de uso:** «Resuma este reporte de matrícula en 5 puntos clave para presentar en consejo académico.»

### 5.3 Atajos de teclado útiles

| Acción | macOS | Windows |
|---|---|---|
| Enviar mensaje | Enter | Enter |
| Nueva línea sin enviar | Shift + Enter | Shift + Enter |
| Captura de pantalla para análisis | Option + Shift + Q | Control + Shift + Q |
| Iniciar dictado por voz | Cmd + T | Ctrl + T |

### 5.4 Dictado por voz

Si prefiere hablar en lugar de escribir:

1. Seleccione el icono de **micrófono** (🎙) en la barra de entrada.
2. Dicte su instrucción. La transcripción aparece en el campo de texto.
3. Revise la transcripción y presione **Enviar**.

> **Recomendación:** El dictado por voz es especialmente útil para instrucciones largas o cuando está en movimiento. Siempre revise la transcripción antes de enviar.

---

## 6. Cuándo usar Fast, Balanced o Smart

Amazon Quick ofrece tres modos de procesamiento. La elección del modo correcto le permitirá obtener el mejor resultado para cada tipo de tarea.

| Modo | Velocidad | Calidad | Mejor para | Ejemplo de tarea |
|---|---|---|---|---|
| **⚡ Fast** | Muy rápida | Buena | Preguntas rápidas, tareas simples, uso cotidiano | «¿Cuál es la fecha límite de acreditación CACEI?» |
| **⚖ Balanced** | Moderada | Alta | La mayoría de las tareas del curso | Redactar comunicados, analizar reportes, crear plantillas |
| **✦ Smart** | Más lenta | Máxima | Análisis complejos, redacción sofisticada, tareas de múltiples pasos | Análisis presupuestal con múltiples variables, plan estratégico de acreditación |

### Reglas prácticas para elegir

1. **Empiece siempre con Balanced.** Es el modo predeterminado recomendado y cubre el 80% de las tareas del curso.
2. **Use Fast** para consultas puntuales donde la velocidad importa más que la profundidad: definiciones, cálculos simples, traducciones rápidas.
3. **Use Smart** cuando la tarea sea crítica y compleja: análisis de decisión presupuestal, documentos para rectoría, planes estratégicos con múltiples escenarios.
4. **Active Thinking** (disponible en Balanced y Smart) cuando necesite que la IA razone paso a paso antes de responder. Ideal para análisis financieros o decisiones con múltiples variables.

### Cómo cambiar de modo

1. Localice el selector de modelo en la barra de entrada (parte inferior del chat).
2. Seleccione **Fast**, **Balanced** o **Smart**.
3. Para activar Thinking, busque el interruptor dentro del selector de modelo.

> **Recomendación:** Si no está seguro, seleccione **Auto** — Amazon Quick elegirá el modo más apropiado para cada consulta automáticamente.

**Qué hacer si algo sale mal:**
- Si la respuesta es superficial o incompleta, cambie de Fast a Balanced o Smart y repita la instrucción.
- Si la respuesta tarda demasiado, verifique que no esté en modo Smart para una tarea que no lo requiere.

---

## 7. Limitaciones honestas: qué NO puede hacer Amazon Quick

Es importante conocer los límites de cualquier herramienta de IA para usarla con criterio profesional. A continuación se presentan las limitaciones más relevantes para su trabajo como directivo.

### 7.1 La IA puede fabricar información

La IA genera texto basándose en patrones estadísticos, no en conocimiento verificado. Esto significa que puede inventar datos, cifras, nombres o referencias con total confianza. **Siempre verifique los datos numéricos y las fuentes citadas contra su documentación original.**

> **Ejemplo real de riesgo:** Si le pide «la tasa de retención promedio de universidades privadas en México», la IA puede generar un porcentaje que suene razonable pero que no corresponda a ninguna fuente verificable.

### 7.2 No tiene acceso a los sistemas internos de la universidad

Amazon Quick no puede consultar directamente sistemas como Banner, el portal académico o las bases de datos institucionales de Anáhuac Mayab. Para analizar datos de estos sistemas, usted debe exportar la información (en Excel, CSV o PDF) y subirla manualmente a Amazon Quick.

### 7.3 No opera en tiempo real de manera continua

Las tareas programadas (*scheduled tasks*) se ejecutan en intervalos (cada cierto número de minutos u horas), no de forma continua. Si necesita monitoreo en tiempo real, Amazon Quick no es la herramienta adecuada.

### 7.4 Su computadora debe estar encendida para tareas automáticas

Los agentes y tareas programadas se ejecutan localmente en su máquina. Si su computadora está apagada o Amazon Quick está cerrado, las tareas no se ejecutarán hasta que vuelva a iniciar la aplicación.

### 7.5 No reemplaza el juicio profesional

La IA es una herramienta de apoyo, no un sustituto de su experiencia y criterio. Las decisiones sobre estudiantes, evaluaciones docentes, asuntos legales y comunicaciones de alta sensibilidad siempre requieren revisión humana exhaustiva.

### 7.6 Tiene un límite de contexto por conversación

Las conversaciones muy largas pueden superar la capacidad de memoria del asistente. Cuando esto ocurra, Amazon Quick le sugerirá resumir el contexto. Para tareas extensas, es preferible iniciar conversaciones separadas por tema.

### 7.7 La generación de imágenes puede no estar disponible

La función de generación de imágenes depende de la región y la configuración de su cuenta. Si no aparece la opción, no es un error — simplemente no está habilitada en su configuración actual.

---

## Resumen de referencia rápida

| Necesito... | Hago esto en Amazon Quick |
|---|---|
| Escribir un comunicado | Nuevo chat → instrucción con RCTF → Balanced |
| Analizar un reporte | Adjuntar archivo (📎) → instrucción de análisis → Balanced o Smart |
| Buscar información actualizada | Activar búsqueda web (🌐) → escribir consulta |
| Crear un agente especializado | Agents & skills → Agents → «+ Create» |
| Ver resultados de tareas automáticas | Feed de actividad (barra lateral) |
| Ajustar configuración | Settings (parte inferior de la barra lateral) |
| Cambiar calidad de respuesta | Selector de modelo (parte inferior del chat) |

---

*Documento de Fase 5 — Tutorial de Inicio Rápido con Amazon Quick*
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
*Septiembre 2026*
