# Guía de Agentes y Flujos de Trabajo con IA
## Curso: IA Práctica para Líderes Anáhuac Mayab
### Fase 5 · Tutorial Técnico Paso a Paso

> **Versión:** 1.0 | **Fecha:** 5 de septiembre de 2026
> **Audiencia:** Directivos no técnicos — Universidad Anáhuac Mayab
> **Prerrequisito:** Haber completado los Niveles 1–7 del curso (familiaridad con Amazon Quick e instrucciones estructuradas)
> **Tiempo estimado:** 30–35 minutos de lectura activa
> **Corresponde a:** Nivel 8 del curso — Flujos con agentes y trabajo en equipo

---

## 1. Qué es un agente de IA

### La analogía ejecutiva

Piense en un agente de IA como un asistente especializado que usted contrata, capacita y supervisa — pero que nunca se va de vacaciones, nunca olvida sus instrucciones, y puede trabajar a las 11 de la noche si usted lo necesita.

Cuando usted conversa directamente con Amazon Quick, es como pedirle ayuda a un colega generalista: puede hacer muchas cosas, pero cada vez necesita que le explique quién es usted, cuál es su programa, qué formato prefiere y qué tono debe usar. Eso funciona bien para tareas puntuales.

Un agente, en cambio, es una versión especializada de ese asistente que usted configura una sola vez con instrucciones permanentes, archivos de referencia y capacidades específicas. A partir de ese momento, el agente ya conoce su contexto, ya tiene los criterios de acreditación cargados, ya sabe el formato que usted necesita. Solo necesita decirle: «Analiza estos nuevos datos de matrícula» — y el resultado sale con el formato correcto, el tono institucional adecuado y los criterios de su programa incorporados.

### Diferencia entre chat general y agente

| Aspecto | Chat general | Agente especializado |
|---|---|---|
| Conoce su programa | No — debe explicar cada vez | Sí — tiene instrucciones permanentes |
| Tiene sus archivos cargados | No — debe subir cada vez | Sí — accede a documentos de referencia |
| Mantiene reglas de formato | No — debe especificar cada vez | Sí — sigue reglas predefinidas |
| Puede ejecutarse sin usted | No | Sí — puede operar con tareas programadas |
| Ideal para | Tareas puntuales y variadas | Tareas recurrentes de su área |

### Tres agentes tipo para un coordinador académico

En el contexto de gestión universitaria, estos son los tres agentes más útiles:

| Agente | Función principal | Ejemplo de uso |
|---|---|---|
| **Analista Académico** | Analiza indicadores, matrícula, retención | «Analiza los datos de retención del semestre y genera el reporte semáforo» |
| **Comunicador Institucional** | Redacta correos, comunicados, respuestas | «Redacta el comunicado de inicio de evaluaciones para docentes» |
| **Asistente de Acreditación** | Revisa evidencias, prepara autoevaluaciones | «Evalúa el avance de los indicadores CACEI contra la meta» |

---

## 2. Cómo crear un agente en Amazon Quick: paso a paso

### Paso 1 — Acceder al constructor de agentes

1. En Amazon Quick, localice **Agents & skills** en la barra lateral izquierda.
2. Seleccione la pestaña **Agents**.
3. Seleccione **«+ Create»** (el botón de crear nuevo agente).

> **Nota:** También puede iniciar el proceso escribiendo en el chat: «Crea un agente que...» y describiendo su objetivo. Amazon Quick le guiará a través de la configuración.

**Qué hacer si algo sale mal:**
- Si no encuentra la opción «Agents & skills», verifique que está en la barra lateral izquierda, debajo de las conversaciones recientes.
- Si el botón «+ Create» no aparece, confirme que su sesión está activa (puede necesitar iniciar sesión nuevamente).

### Paso 2 — Definir nombre y descripción

1. En el campo **Name** (Nombre), escriba un nombre descriptivo. Ejemplo: «Analista de Ing. Industrial»
2. En el campo **Description** (Descripción), escriba una línea que explique la función del agente. Ejemplo: «Analiza indicadores de calidad del programa de Ingeniería Industrial para reportes a rectoría y acreditadoras.»

> **Recomendación:** Use nombres que identifiquen claramente la función Y el programa. «Analista de Ing. Industrial» es más útil que «Mi Agente 1».

### Paso 3 — Escribir las instrucciones del agente

En el campo **Instructions** (Instrucciones), escriba las reglas permanentes que el agente debe seguir en todas las conversaciones. Este es el paso más importante de la configuración.

**Estructura recomendada para las instrucciones:**

```
[IDENTIDAD]
Quién es el agente y para qué programa.

[RESPONSABILIDADES]
Lista de tareas que puede realizar.

[FORMATO POR DEFECTO]
Estructura y extensión predeterminada de sus respuestas.

[REGLAS]
Restricciones, tono, tratamiento y advertencias.
```

### Paso 4 — Configurar capacidades

Seleccione la pestaña **Capabilities** (Capacidades) en el panel de configuración:

1. **Web search** (Búsqueda web): Active si el agente necesita consultar información de internet.
2. **Connections** (Conexiones): Seleccione las integraciones que el agente puede usar (Outlook, Gmail, etc.).
3. **Additional documents** (Documentos adicionales): Suba archivos de referencia que el agente debe consultar siempre (hasta 10 archivos: PDF, Word, CSV, etc.).

> **Recomendación:** Para un agente de análisis académico, suba los criterios de acreditación de su organismo (COPAES, CACEI, etc.) y los datos históricos de su programa.

### Paso 5 — Probar el agente

1. Seleccione **Save** (Guardar) para crear el agente.
2. Seleccione **Chat** para iniciar una conversación con su nuevo agente.
3. Escriba una instrucción de prueba: «Con los datos adjuntos, genera un reporte semáforo de indicadores.»
4. Evalúe si el resultado cumple con el formato, tono y nivel de detalle esperado.
5. Si necesita ajustes, seleccione **Edit** y modifique las instrucciones.

**Qué hacer si algo sale mal:**
- Si el agente no sigue las instrucciones, revise que estén claramente escritas y sin ambigüedades. Use frases directas como «Siempre...» y «Nunca...».
- Si el agente no encuentra los archivos de referencia, verifique que los subió correctamente en la pestaña Capabilities → Additional documents.
- Si las respuestas son genéricas a pesar de las instrucciones, refuerce con: «Recuerda que eres el analista del programa de [LICENCIATURA]. Usa los datos que te proporcioné, no respondas de memoria.»

---

## 3. Ejemplo completo: crear un agente para reportes de su área

A continuación, el ejemplo paso a paso para crear el agente «Analista Académico» — el agente más útil para cualquier coordinador de programa.

### Nombre del agente

```
Analista de [nombre de su licenciatura]
```

**Ejemplo concreto:** `Analista de Ingeniería Industrial`

### Descripción

```
Analiza indicadores de calidad del programa de Ingeniería Industrial
de la Universidad Anáhuac Mayab para generar reportes ejecutivos
dirigidos a la Dirección de Escuela y organismos acreditadores.
```

### Instrucciones completas

Copie el siguiente texto y adáptelo con los datos de su programa:

```
Eres el analista de indicadores del programa de Ingeniería Industrial
de la Universidad Anáhuac Mayab (Mérida, Yucatán).

RESPONSABILIDADES:
- Analizar datos de matrícula, retención, eficiencia terminal,
  titulación y satisfacción estudiantil
- Comparar indicadores con el ciclo anterior y con metas institucionales
- Generar reportes ejecutivos con formato semáforo (🟢🟡🔴)
- Identificar indicadores en riesgo y sugerir acciones correctivas
- Preparar resúmenes para diferentes audiencias (Dirección de Escuela,
  Rectoría, organismo acreditador CACEI)

FORMATO POR DEFECTO:
- Tabla de indicadores con semáforo + párrafo ejecutivo + recomendaciones
- Máximo 2 cuartillas salvo que se indique otro límite
- Usar viñetas numeradas para recomendaciones
- Incluir comparativa con ciclo anterior cuando haya datos disponibles

REGLAS:
- Siempre use tratamiento de «usted»
- Tono: formal, basado en datos, orientado a acciones
- Nunca invente datos: si no tiene la información, solicítela
- Si un indicador no tiene dato, indíquelo como «Sin dato disponible»
  en lugar de estimar
- Audiencia por defecto: Dirección de Escuela
- Señale si detecta inconsistencias en los datos proporcionados
- Siempre termine con: «Este análisis requiere verificación del
  coordinador antes de su distribución»
```

### Archivos de referencia sugeridos

Suba los siguientes documentos en Capabilities → Additional documents:

1. **Criterios de acreditación** de su organismo (CACEI, COPAES, etc.) — PDF
2. **Datos históricos** del programa (matrícula, retención, titulación de los últimos 3 ciclos) — Excel o CSV
3. **Formato institucional de reportes** de la Dirección de Escuela — Word (si existe un template oficial)

### Prueba del agente

Después de guardar, inicie un chat con su agente y escriba:

```
Analiza estos datos del ciclo Primavera 2026 y genera el reporte
semestral para la Dirección de Escuela:

- Matrícula inicio: 220 estudiantes
- Matrícula cierre: 198 estudiantes
- Titulados en el periodo: 35
- Profesores con posgrado: 18 de 24
- Satisfacción estudiantil: 7.8/10
- Eficiencia terminal cohorte 2022: 48%

Metas institucionales:
- Retención: 92%
- Titulación cohorte: 55%
- Satisfacción: 8.5/10
- Profesores con posgrado: 80%
```

**Resultado esperado:** Tabla semáforo con seis indicadores, cada uno con estatus (🟢🟡🔴), brecha respecto a la meta, y acción correctiva sugerida. Párrafo ejecutivo de apertura y recomendaciones numeradas. Cierre con nota de verificación.

---

## 4. Cómo diseñar un flujo de reportes paso a paso

Un flujo de trabajo es una secuencia de pasos predefinidos donde cada resultado alimenta al siguiente. Combinando agentes con instrucciones estructuradas, usted puede convertir un proceso de 6–8 horas en uno de 90 minutos.

### 4.1 Concepto del flujo

```
┌─────────────────────────────────────────────────────────┐
│ FLUJO DE REPORTE SEMESTRAL CON IA                       │
│                                                         │
│  PASO 1          PASO 2          PASO 3                 │
│ ┌──────────┐   ┌──────────┐   ┌──────────┐             │
│ │ Recopilar│──▶│ Analizar │──▶│ Formatear│             │
│ │  datos   │   │ con IA   │   │ para     │             │
│ │ (humano) │   │ (agente) │   │audiencia │             │
│ └──────────┘   └──────────┘   │ (agente) │             │
│                               └────┬─────┘             │
│                                    │                    │
│  PASO 4          PASO 5           ▼                     │
│ ┌──────────┐   ┌──────────┐   ┌──────────┐             │
│ │ Revisar  │──▶│Distribuir│   │ Resultado│             │
│ │ (humano) │   │ (humano) │   │ listo    │             │
│ └──────────┘   └──────────┘   └──────────┘             │
│                                                         │
│ 🧑 = tarea humana    🤖 = tarea del agente             │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Los cinco pasos del flujo detallados

#### Paso 1 — Recopilar datos (🧑 Humano · 10 minutos)

**Acción:** Exporte los datos necesarios de sus sistemas institucionales.

| Fuente | Dato | Formato de exportación |
|---|---|---|
| Banner (o sistema de gestión escolar) | Matrícula por programa, bajas, titulación | Excel o CSV |
| Encuestas de satisfacción | Resultados por programa y periodo | Excel |
| Reportes de acreditación anteriores | Indicadores históricos | PDF o Word |

**Instrucción:** Guarde todos los archivos en una carpeta de su computadora a la que Amazon Quick tenga acceso. Si aún no la ha configurado, vaya a Settings → My computer → Local folders → Agregar carpeta.

**Qué hacer si algo sale mal:**
- Si no puede exportar datos de Banner, solicite al área de sistemas un archivo Excel con los indicadores clave.
- Si los datos están en un PDF escaneado (imagen), Amazon Quick puede leerlo, pero los resultados serán menos precisos. Prefiera siempre archivos editables (Excel, CSV, Word).

#### Paso 2 — Analizar con el agente (🤖 IA · 15 minutos)

**Acción:** Abra una conversación con su agente «Analista de [Programa]» y suba los datos.

**Instrucción al agente:**

```
Analiza los datos del ciclo [PERIODO] que acabo de compartir.

Genera:
1. Tabla consolidada de indicadores con semáforo (🟢🟡🔴)
2. Comparativa con el ciclo anterior
3. Identificación de los 3 indicadores con mayor deterioro
4. 1 acción de intervención por cada indicador crítico
5. Resumen de hallazgos en máximo 100 palabras

Señala si encuentras inconsistencias en los datos.
```

**Resultado esperado:** Análisis estructurado con tabla semáforo, hallazgos priorizados y acciones sugeridas.

#### Paso 3 — Formatear para la audiencia (🤖 IA · 10 minutos)

**Acción:** Pida al agente que genere la versión final para su audiencia específica.

**Instrucción al agente:**

```
Con base en el análisis anterior, genera un resumen ejecutivo para
la Dirección de Escuela:

- Párrafo de apertura: 80 palabras máximo
- Tabla de indicadores con semáforo
- 3 recomendaciones prioritarias con responsable y plazo
- Solicitudes específicas al Consejo Académico (si aplica)

Firmado por: [SU NOMBRE], [CARGO] — Universidad Anáhuac Mayab
```

**Resultado esperado:** Documento de 1–2 páginas listo para presentar, con formato profesional y tono institucional.

#### Paso 4 — Revisar (🧑 Humano · 15 minutos)

**Acción:** Aplique el protocolo PAUS a cada sección del reporte.

| Verificación | Pregunta clave | ✅ / ❌ |
|---|---|---|
| **P** — Procedencia | ¿Cada dato proviene de mis archivos, no de la «memoria» de la IA? | |
| **A** — Actualidad | ¿Los datos corresponden al ciclo correcto? ¿No se mezclaron periodos? | |
| **U** — Unicidad | ¿El análisis es específico para mi programa o es genérico? | |
| **S** — Sesgo | ¿Falta alguna perspectiva? ¿El análisis presenta los datos de forma equilibrada? | |

**Verificaciones adicionales obligatorias:**
- [ ] Los porcentajes cuadran con las fuentes originales
- [ ] Los nombres y fechas son correctos
- [ ] No hay datos inventados por la IA
- [ ] El tono es apropiado para la audiencia
- [ ] La extensión cumple con lo solicitado

> **Importante:** Nunca distribuya un reporte generado por IA sin completar esta revisión. La responsabilidad sobre los datos presentados siempre es del directivo firmante.

**Qué hacer si algo sale mal:**
- Si encuentra datos incorrectos, señale el error al agente y pida corrección: «El dato de retención es 90%, no 92% como indicaste. Corrige y regenera la tabla.»
- Si el formato no es el esperado, proporcione un ejemplo del formato deseado.

#### Paso 5 — Distribuir (🧑 Humano · 5 minutos)

**Acción:** Envíe el reporte final por los canales institucionales.

**Opciones:**
- Copie el resultado desde Amazon Quick y péguelo en un documento de Word para ajustes finales de formato.
- Si conectó Outlook, pida al agente: «Envía este reporte como borrador de correo a [DESTINATARIO].»
- Guarde el reporte en la carpeta compartida de su área.

### 4.3 Tiempo total del flujo

| Paso | Responsable | Tiempo estimado |
|---|---|---|
| 1. Recopilar datos | 🧑 Humano | 10 minutos |
| 2. Analizar con agente | 🤖 IA | 15 minutos |
| 3. Formatear para audiencia | 🤖 IA | 10 minutos |
| 4. Revisar (PAUS + verificación) | 🧑 Humano | 15 minutos |
| 5. Distribuir | 🧑 Humano | 5 minutos |
| **TOTAL** | | **~55 minutos** |

**Comparativa:** Sin IA, este mismo proceso toma entre 6 y 8 horas. Con el flujo descrito, se reduce a menos de 1 hora.

---

## 5. Template del flujo: su entregable del Nivel 8

Este template es el formato que usted completará como entregable final del curso. Cópielo y llénelo con los datos de su área.

```
═══════════════════════════════════════════════════════════
MI FLUJO DE REPORTE CON IA
═══════════════════════════════════════════════════════════

DATOS GENERALES
───────────────
Nombre del directivo:     [SU NOMBRE]
Cargo:                    [SU CARGO]
Programa:                 [LICENCIATURA]
Fecha de creación:        [HOY]

REPORTE QUE AUTOMATIZO
──────────────────────
Nombre del reporte:       [Ej: Reporte semestral de indicadores]
Frecuencia:               [Mensual / Trimestral / Semestral]
Audiencia principal:      [Ej: Dirección de Escuela]
Tiempo actual (sin IA):   [Ej: 8 horas]
Tiempo estimado (con IA): [Ej: 55 minutos]

FUENTES DE DATOS
────────────────
1. [Sistema/archivo — Ej: Banner → exportación de matrícula en Excel]
2. [Sistema/archivo — Ej: Encuestas de satisfacción → Google Forms]
3. [Sistema/archivo — Ej: Datos de acreditación → PDF del organismo]

AGENTE CREADO
─────────────
Nombre del agente:        [Ej: Analista de Ing. Industrial]
Instrucciones:            [Pegue aquí las instrucciones completas]
Archivos de referencia:   [Liste los documentos cargados]

PASO 1 — TRIGGER (Manual)
──────────────────────────
Acción: [Ej: El coordinador exporta datos de Banner al inicio
de cada mes / Al cierre de cada semestre]
Responsable: [Su nombre o asistente]
Tiempo: [Ej: 10 minutos]

PASO 2 — INSTRUCCIÓN DE ANÁLISIS
─────────────────────────────────
[Pegue aquí el prompt exacto que usará para el análisis]

PASO 3 — INSTRUCCIÓN DE FORMATO
────────────────────────────────
[Pegue aquí el prompt exacto para formatear el resultado]

PASO 4 — FORMATO DE SALIDA
───────────────────────────
Tipo de documento:  [Tabla semáforo + resumen ejecutivo]
Extensión:          [Máximo 2 cuartillas]
Firmante:           [Su nombre y cargo]

PASO 5 — REVISIÓN HUMANA
─────────────────────────
Checklist de verificación:
[ ] Los números coinciden con las fuentes originales
[ ] Los porcentajes están calculados correctamente
[ ] No hay datos fabricados por la IA
[ ] El tono es apropiado para la audiencia
[ ] Los nombres y fechas son correctos
[ ] Se aplicó el protocolo PAUS

PASO 6 — DISTRIBUCIÓN
──────────────────────
Canal: [Ej: Correo a Dirección de Escuela + copia a Rectoría]
Formato final: [Ej: Documento Word con encabezado institucional]

═══════════════════════════════════════════════════════════
```

---

## 6. Programar un agente para ejecución automática (avanzado)

Una vez que su flujo esté probado y validado, puede programar el agente para que ejecute ciertos pasos de manera automática, sin que usted tenga que iniciar la conversación manualmente.

### Cómo programar una tarea

1. Abra **Mission Control** desde el icono en la barra superior derecha de Amazon Quick.
2. Seleccione la pestaña **Schedules** (Tareas programadas).
3. Seleccione **Create** → **Create with AI**.
4. Describa la tarea en lenguaje natural. Ejemplo:
   ```
   Todos los lunes a las 8:00 AM, el agente «Analista de Ing. Industrial»
   debe generar un resumen semanal de los indicadores del programa basándose
   en los archivos de la carpeta «Reportes Semestrales» y publicar el
   resultado en el feed de actividad.
   ```
5. Revise la configuración propuesta y confirme.

> **Importante:** Las tareas programadas se ejecutan localmente en su computadora. Amazon Quick debe estar abierto y su computadora encendida para que la tarea se ejecute en el horario configurado.

**Qué hacer si algo sale mal:**
- Si la tarea no se ejecutó, verifique que su computadora estaba encendida y Amazon Quick abierto al momento programado.
- Si la tarea se ejecutó pero el resultado no es correcto, revise las instrucciones del agente — puede necesitar ajustes.
- Si la tarea parece «trabada», vaya a Mission Control → Schedules y use el botón de ejecutar manualmente para probar.

---

## 7. Gobernanza básica: reglas para el uso de agentes en su área

Antes de implementar agentes en su equipo, establezca estas reglas mínimas:

| Elemento | Definición sugerida |
|---|---|
| **¿Quién puede usar los agentes?** | El coordinador del programa y los asistentes que hayan completado capacitación básica |
| **¿Qué datos se pueden subir?** | Datos institucionales no confidenciales. Datos personales de estudiantes: solo con las precauciones de privacidad institucionales |
| **¿Quién revisa los resultados?** | El coordinador SIEMPRE revisa antes de distribuir cualquier reporte o comunicado |
| **¿Qué NO se hace con IA?** | Decisiones individuales sobre estudiantes, evaluaciones docentes definitivas, comunicaciones legales, situaciones de crisis emocional |

---

## Resumen de referencia rápida

| Necesito... | Hago esto |
|---|---|
| Crear un agente nuevo | Agents & skills → Agents → «+ Create» |
| Chatear con un agente existente | Seleccionar el agente en el selector de chat, o escribir @ y su nombre |
| Editar las instrucciones de un agente | Agents & skills → Agents → seleccionar agente → Edit |
| Ejecutar un agente manualmente | En la tarjeta del agente → «Run now» |
| Programar ejecución automática | Mission Control → Schedules → Create |
| Ver resultados de tareas pasadas | Mission Control → Completed |
| Agregar archivos de referencia | Editar agente → Capabilities → Additional documents |

---

*Documento de Fase 5 — Guía de Agentes y Flujos de Trabajo con IA*
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
*Septiembre 2026*
