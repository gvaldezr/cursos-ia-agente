# Diseño de Entregables del Participante

> **Versión:** 1.0 | **Fecha:** 4 de septiembre de 2026  
> **Filosofía:** El entregable NO es "tarea" — es una herramienta que el participante usará el lunes siguiente.  
> **Criterio de diseño:** Si el participante no lo reutiliza después del curso, el entregable falló.

---

## Entregable A: Banco de Prompts Personalizado

### Concepto

Un documento vivo con **mínimo 20 prompts** organizados por caso de uso, probados con datos reales del área del participante, listos para copiar-pegar-adaptar en cualquier momento.

No es un "cuadernillo de ejercicios". Es el **playbook operativo** del directivo con IA.

### Estructura del banco

```
BANCO DE PROMPTS — [Nombre] — [Área/Coordinación]
Fecha de creación: [fecha]
Herramienta principal: Amazon Quick
Última actualización: [fecha]

├── 📧 Comunicación (5 prompts mínimo)
├── 📊 Análisis de datos (4 prompts mínimo)
├── 📋 Reportes (3 prompts mínimo)
├── 🎯 Gestión de proyectos (3 prompts mínimo)
├── 👥 Atención a stakeholders (3 prompts mínimo)
└── 🤖 Agentes configurados (2 prompts mínimo)
```

---

### Categoría 1: Comunicación (mínimo 5 prompts)

#### 🎓 Versión Académica

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 1 | **Correo a alumno — tema académico** | Responder solicitudes de alumnos sobre trámites académicos | `Actúa como coordinador(a) académico(a) de la Universidad Anáhuac Mayab. Redacta un correo de respuesta a un alumno de [programa] que solicita [trámite]. El tono debe ser institucional, empático y claro. Incluye: saludo personalizado, respuesta directa, pasos a seguir, datos de contacto para dudas. Firma como [nombre], Coordinación de [programa].` |
| 2 | **Comunicado a padres de familia** | Informar a padres sobre situaciones académicas de sus hijos | `Actúa como coordinador(a) académico(a) de una universidad privada mexicana. Redacta un comunicado para padres de familia de alumnos de [programa] sobre [tema: cambio de horarios / situación académica / evento]. Tono: formal, tranquilizador, informativo. Incluye: contexto breve, qué implica para su hijo/a, qué acción deben tomar (si aplica), contacto para dudas.` |
| 3 | **Retroalimentación a docente** | Dar feedback a profesores después de evaluación o incidencia | `Actúa como coordinador(a) académico(a). Redacta un mensaje para un profesor de [materia] de [programa] para abordar [tema: resultados de evaluación docente / incidencia reportada / felicitación]. Tono: respetuoso, constructivo, orientado a mejora. Estructura: reconocimiento, observación específica, sugerencia/acción, ofrecimiento de apoyo.` |
| 4 | **Convocatoria institucional** | Invitar a evento, proceso o reunión | `Redacta una convocatoria institucional de la Universidad Anáhuac Mayab para [evento/proceso]. Audiencia: [alumnos/docentes/comunidad]. Incluye: qué es, cuándo, dónde, quién puede participar, fecha límite, contacto. Tono formal-motivador. Formato: listo para enviar por correo electrónico.` |
| 5 | **Respuesta a queja/inconformidad** | Manejar quejas de alumnos o padres de forma empática pero firme | `Actúa como coordinador(a) académico(a) de la Universidad Anáhuac Mayab. Un alumno/padre de familia ha expresado la siguiente inconformidad: "[pegar queja]". Redacta una respuesta que sea: (1) empática — reconocer la frustración, (2) informativa — explicar el proceso/normatividad aplicable, (3) resolutiva — ofrecer siguiente paso concreto, (4) institucional — mantener tono Anáhuac. No prometer lo que no se puede cumplir.` |

#### 🏢 Versión Administrativa

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 1 | **Correo a proveedor** | Comunicación con proveedores sobre contratos, pagos, servicios | `Actúa como director(a) de [área] de la Universidad Anáhuac Mayab. Redacta un correo al proveedor [nombre/empresa] respecto a [asunto: solicitud de cotización / seguimiento de pago / reclamación de servicio]. Tono: profesional, directo, cordial. Incluye: referencia al contrato/orden, solicitud específica, fecha límite, consecuencias de incumplimiento (si aplica).` |
| 2 | **Comunicado interno de nueva política** | Informar al personal sobre cambios en políticas o procedimientos | `Actúa como director(a) de [área] de una universidad privada mexicana. Redacta un comunicado interno para todo el personal sobre [nueva política/cambio de procedimiento]. Estructura: (1) Contexto — por qué se hace el cambio, (2) Qué cambia — en términos simples, (3) A partir de cuándo — fecha efectiva, (4) Qué deben hacer — acciones específicas, (5) Dudas — a quién contactar. Tono: claro, directo, sin ambigüedades.` |
| 3 | **Minuta ejecutiva** | Documentar acuerdos de reuniones de forma eficiente | `Convierte las siguientes notas de reunión en una minuta ejecutiva formal. Formato: (1) Datos generales: fecha, hora, asistentes, objetivo. (2) Temas tratados: resumen de 2-3 líneas por tema. (3) Acuerdos: tabla con columnas [Acuerdo | Responsable | Fecha compromiso | Estatus]. (4) Próxima reunión. Notas de la reunión: [pegar notas]` |
| 4 | **Solicitud a Rectoría/Vicerrectoría** | Escalar temas que requieren aprobación de nivel superior | `Actúa como director(a) de [área]. Redacta un memorándum/correo para [Rector/Vicerrector] solicitando [aprobación de presupuesto / autorización de proyecto / cambio organizacional]. Estructura: (1) Antecedentes — 2-3 líneas de contexto, (2) Solicitud — qué se pide específicamente, (3) Justificación — por qué es necesario con datos, (4) Impacto — qué pasa si se aprueba y si no, (5) Inversión requerida (si aplica). Tono: ejecutivo, conciso, con datos duros.` |
| 5 | **Respuesta a auditoría/observación** | Responder a hallazgos de auditoría interna o externa | `Actúa como director(a) de [área]. Redacta la respuesta oficial a la siguiente observación de auditoría: "[pegar observación]". Incluye: (1) Reconocimiento de la observación, (2) Acciones correctivas implementadas o en proceso, (3) Responsable y fecha de cumplimiento, (4) Evidencia que se adjuntará. Tono: formal, colaborativo, orientado a solución. No justificar ni minimizar — resolver.` |

---

### Categoría 2: Análisis de Datos (mínimo 4 prompts)

#### 🎓 Versión Académica

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 6 | **Análisis de matrícula** | Identificar tendencias de inscripción por programa | `Analiza los siguientes datos de matrícula de [programa/escuela]: [pegar datos o adjuntar archivo]. Genera: (1) Tendencia de los últimos [N] semestres (crecimiento/decrecimiento %), (2) Comparativa con período anterior, (3) Programas/cohortes con mayor variación, (4) Posibles causas de las variaciones (hipótesis), (5) Recomendaciones de acción. Formato: tabla resumen + narrativa de 1 párrafo por hallazgo.` |
| 7 | **Análisis de deserción** | Entender patrones de baja y proponer intervenciones | `Analiza estos datos de deserción/baja de [programa]: [datos]. Identifica: (1) Tasa de deserción por semestre, (2) Semestre con mayor deserción (¿hay un patrón?), (3) Motivos reportados (si están en los datos), (4) Perfil del alumno en riesgo, (5) 3 intervenciones recomendadas basadas en los patrones. Presenta en formato ejecutivo para presentar a Dirección de Escuela.` |
| 8 | **Dashboard de indicadores CIEES/COPAES** | Consolidar métricas de acreditación | `Tengo los siguientes indicadores de mi programa para la acreditación [CIEES/COPAES]: [datos]. Genera un dashboard textual que incluya: semáforo (verde/amarillo/rojo) por indicador, brecha vs. meta, tendencia (mejora/estable/deterioro), y las 3 acciones prioritarias para mejorar los indicadores en rojo. Formato de tabla.` |
| 9 | **Análisis de evaluaciones docentes** | Interpretar resultados de evaluación y priorizar acciones | `Analiza estos resultados de evaluación docente de [programa]: [datos]. Genera: (1) Ranking de profesores por evaluación global, (2) Dimensiones mejor y peor evaluadas, (3) Profesores que requieren intervención inmediata (< [umbral]), (4) Profesores destacados para reconocimiento, (5) Recomendaciones de capacitación docente por dimensión deficiente.` |

#### 🏢 Versión Administrativa

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 6 | **Análisis de presupuesto vs. real** | Identificar variaciones y sus causas | `Analiza la siguiente tabla de presupuesto vs. gasto real de [área/período]: [datos]. Genera: (1) Variación por partida (% y monto), (2) Top 5 partidas con mayor desviación, (3) Hipótesis de causas por desviación significativa, (4) Proyección al cierre del período si la tendencia continúa, (5) Recomendaciones de ajuste. Formato: tabla con semáforo + narrativa ejecutiva.` |
| 7 | **Análisis de KPIs operativos** | Monitorear desempeño del área | `Analiza estos KPIs de [área] correspondientes a [período]: [datos]. Para cada KPI genera: (1) Valor actual vs. meta, (2) Tendencia (últimos 3 períodos), (3) Semáforo: 🟢 en meta, 🟡 en riesgo (80-99%), 🔴 fuera de meta (<80%), (4) Causa raíz probable para KPIs en rojo, (5) Acción sugerida. Formato de tabla ejecutiva lista para presentar.` |
| 8 | **Comparativa de proveedores** | Evaluar opciones de proveedor objetivamente | `Tengo [N] cotizaciones de proveedores para [servicio/producto]: [datos de cada proveedor]. Genera una tabla comparativa con: precio, plazo de entrega, garantía, experiencia previa con la institución, fortalezas, debilidades, y una recomendación fundamentada. Criterios de evaluación: [listar criterios y pesos si aplica].` |
| 9 | **Análisis de productividad del equipo** | Evaluar carga de trabajo y distribución de tareas | `Analiza la siguiente información de actividades de mi equipo ([N] personas) durante [período]: [datos]. Genera: (1) Distribución de carga por persona, (2) Identificar sobrecargas y subutilización, (3) Tareas que podrían delegarse o automatizarse, (4) Recomendación de redistribución. Formato: tabla + 3 acciones prioritarias.` |

---

### Categoría 3: Reportes (mínimo 3 prompts)

#### 🎓 Versión Académica

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 10 | **Reporte semestral de programa** | Generar el reporte periódico para Dirección de Escuela | `Genera un reporte semestral del programa de [nombre] con los siguientes datos: [matrícula, deserción, titulación, satisfacción, evaluación docente, etc.]. Estructura: (1) Resumen ejecutivo (5 bullets), (2) Indicadores clave (tabla con semáforo), (3) Logros del semestre, (4) Áreas de oportunidad, (5) Plan de acción para siguiente semestre (tabla: acción-responsable-fecha). Extensión: máximo 3 páginas. Tono: objetivo, basado en datos.` |
| 11 | **Informe para acreditación** | Redactar secciones de autoestudio | `Actúa como experto en acreditación universitaria mexicana ([CIEES/COPAES/organismo]). Redacta la sección "[nombre de la categoría/criterio]" del autoestudio de [programa]. Datos disponibles: [pegar datos/evidencias]. Incluye: (1) Descripción del estado actual, (2) Evidencias que sustentan el cumplimiento, (3) Áreas de mejora identificadas, (4) Acciones implementadas o en proceso. Tono: formal-técnico, en tercera persona.` |
| 12 | **Resumen ejecutivo para Rectoría** | Condensar información compleja para tomadores de decisión | `Convierte el siguiente reporte/documento de [N] páginas en un resumen ejecutivo de 1 página para el Rector. Documento: [pegar o adjuntar]. El resumen debe incluir: (1) Situación en 2 líneas, (2) 3-5 hallazgos clave, (3) Recomendación principal, (4) Decisión requerida (si aplica), (5) Siguiente paso y fecha. Tono: directo, sin adornos, orientado a acción.` |

#### 🏢 Versión Administrativa

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 10 | **Reporte operativo mensual** | Generar el reporte periódico para Vicerrectoría | `Genera un reporte operativo mensual de [área] con los siguientes datos: [KPIs, presupuesto, proyectos, incidencias]. Estructura: (1) Resumen ejecutivo (5 bullets), (2) KPIs del mes (tabla con semáforo), (3) Avance de proyectos (tabla: proyecto-avance%-estatus-riesgo), (4) Ejecución presupuestal (resumen), (5) Temas que requieren decisión de nivel superior. Extensión: máximo 2 páginas.` |
| 11 | **Business case / justificación de inversión** | Justificar proyectos o compras ante autoridades | `Genera un business case para [proyecto/adquisición]. Datos: [costo, beneficio esperado, alternativas, riesgos]. Estructura: (1) Problema/oportunidad, (2) Solución propuesta, (3) Análisis costo-beneficio, (4) Alternativas evaluadas, (5) Riesgos y mitigaciones, (6) Recomendación, (7) Siguiente paso. Extensión: 1-2 páginas. Tono: ejecutivo, orientado a ROI.` |
| 12 | **Reporte de cierre de proyecto** | Documentar resultados y lecciones aprendidas | `Genera un reporte de cierre para el proyecto "[nombre]". Datos: [objetivos originales, resultados, presupuesto, calendario, incidencias]. Incluye: (1) Resumen del proyecto, (2) Objetivos vs. resultados (tabla), (3) Presupuesto planeado vs. ejecutado, (4) Calendario planeado vs. real, (5) Lecciones aprendidas (top 5), (6) Recomendaciones para proyectos futuros. Tono: objetivo, constructivo.` |

---

### Categoría 4: Gestión de Proyectos (mínimo 3 prompts)

#### Compartida (ambas versiones, adaptando contexto)

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 13 | **Plan de proyecto instantáneo** | Estructurar un proyecto desde cero | `Crea un plan de proyecto para: [descripción del proyecto]. Incluye: (1) Objetivo SMART, (2) Alcance (qué incluye y qué no), (3) Fases con entregables, (4) Calendario estimado (tabla: fase-duración-fecha inicio-fecha fin), (5) Recursos necesarios, (6) Top 5 riesgos con mitigación, (7) Criterios de éxito. Formato: documento estructurado listo para compartir con el equipo.` |
| 14 | **Generador de agenda de reunión** | Preparar juntas de seguimiento eficientes | `Genera la agenda para la reunión de seguimiento del proyecto "[nombre]". Contexto: [último avance, temas pendientes, decisiones necesarias]. Formato: (1) Objetivo de la reunión (1 línea), (2) Temas a tratar (tabla: tema-tiempo-responsable de presentar), (3) Decisiones esperadas, (4) Materiales previos a revisar. Duración total: [X] minutos.` |
| 15 | **Convertir notas en minuta** | Documentar reuniones en segundos | `Convierte estas notas de reunión en minuta ejecutiva. Notas: [pegar notas desordenadas]. Formato de salida: (1) Datos: fecha, asistentes, objetivo. (2) Resumen de discusión (máx 3 bullets por tema). (3) Tabla de acuerdos: [# | Acuerdo | Responsable | Fecha | Estatus]. (4) Próximos pasos. (5) Próxima reunión. Si en las notas no está claro algún dato, indica [PENDIENTE DE CONFIRMAR].` |

---

### Categoría 5: Atención a Stakeholders (mínimo 3 prompts)

#### 🎓 Versión Académica

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 16 | **Respuesta FAQ académica** | Responder preguntas frecuentes de alumnos rápidamente | `Actúa como coordinador(a) académico(a) de [programa] en la Universidad Anáhuac Mayab. Un alumno pregunta: "[pregunta del alumno]". Genera una respuesta que sea: clara, completa, con los pasos exactos que debe seguir, incluyendo fechas/plazos si aplican, y el contacto para dudas adicionales. Si la respuesta depende de información que no tengo, indica qué dato necesitas.` |
| 17 | **Carta de recomendación** | Apoyar a alumnos o exalumnos con cartas personalizadas | `Redacta una carta de recomendación académica para [nombre del alumno], egresado(a) de [programa] de la Universidad Anáhuac Mayab. Datos: [promedio, logros, habilidades destacadas, propósito de la carta: maestría/empleo/beca]. Tono: formal, entusiasta pero creíble. La carta debe destacar [2-3 cualidades específicas]. Extensión: 1 página. Firmará: [nombre y cargo del coordinador].` |
| 18 | **Orientación académica personalizada** | Guiar a alumnos en decisiones de trayectoria | `Un alumno de [semestre] de [programa] pide orientación sobre [tema: optativas, intercambio, doble titulación, servicio social, prácticas]. Con base en el plan de estudios y las opciones disponibles, genera una orientación personalizada que incluya: opciones disponibles, pros y contras de cada una, recomendación basada en el perfil del alumno, y siguiente paso concreto.` |

#### 🏢 Versión Administrativa

| # | Nombre del Prompt | Caso de Uso | Prompt |
|---|---|---|---|
| 16 | **Respuesta a solicitud interna** | Responder a solicitudes de otras áreas | `Actúa como director(a) de [área] de la Universidad Anáhuac Mayab. [Nombre/Área] solicita: "[solicitud]". Genera una respuesta que sea: (1) Clara sobre si es factible o no, (2) Si es factible: proceso, tiempo estimado, requisitos. (3) Si no es factible: razón, alternativa sugerida. (4) Siguiente paso. Tono: colaborativo, profesional, orientado a solución.` |
| 17 | **Redacción de política/procedimiento** | Crear documentos normativos nuevos o actualizar existentes | `Redacta [una política / un procedimiento] para [tema] de la Universidad Anáhuac Mayab. Contexto: [situación que motiva la política]. Estructura: (1) Objetivo, (2) Alcance (a quién aplica), (3) Definiciones (si aplica), (4) Política/lineamiento (puntos claros y numerados), (5) Procedimiento paso a paso, (6) Responsabilidades, (7) Excepciones, (8) Vigencia y revisión. Tono: normativo, sin ambigüedades.` |
| 18 | **Evaluación de desempeño — narrativa** | Redactar evaluaciones de colaboradores de forma objetiva | `Redacta la sección narrativa de la evaluación de desempeño de [nombre], [puesto], para el período [fechas]. Datos: [logros, áreas de mejora, incidentes, métricas]. La narrativa debe ser: objetiva (basada en hechos, no opiniones), balanceada (fortalezas y áreas de mejora), constructiva (orientada a desarrollo), y alineada con las competencias institucionales. Extensión: 1 párrafo de logros + 1 párrafo de desarrollo + 1 párrafo de recomendaciones.` |

---

### Categoría 6: Agentes Configurados (mínimo 2 prompts)

#### 🎓 Versión Académica

| # | Nombre del Prompt | Caso de Uso | Prompt (instrucciones del agente) |
|---|---|---|---|
| 19 | **Agente: Analista Académico** | Agente permanente para análisis de indicadores | `Eres el Analista Académico de la Coordinación de [programa] de la Universidad Anáhuac Mayab. Tu función es analizar datos académicos y generar insights accionables. Siempre respondes con: datos específicos, tendencias, comparativas, y recomendaciones concretas. Usas formato de tabla cuando hay datos numéricos. Alertas sobre anomalías. Conoces los indicadores CIEES/COPAES y su interpretación. Tono: profesional, directo, basado en evidencia.` |
| 20 | **Agente: Comunicador Académico** | Agente permanente para redacción de comunicación estudiantil | `Eres el Comunicador de la Coordinación de [programa] de la Universidad Anáhuac Mayab. Tu función es redactar toda la comunicación dirigida a alumnos, padres de familia y docentes. Siempre mantienes el tono institucional Anáhuac: formal pero cercano, respetuoso, claro. Incluyes saludo personalizado, información completa, siguiente paso claro, y datos de contacto. Adaptas el nivel de formalidad según la audiencia (más cercano con alumnos, más formal con padres).` |

#### 🏢 Versión Administrativa

| # | Nombre del Prompt | Caso de Uso | Prompt (instrucciones del agente) |
|---|---|---|---|
| 19 | **Agente: Analista de Gestión** | Agente permanente para análisis operativo y financiero | `Eres el Analista de Gestión de la Dirección de [área] de la Universidad Anáhuac Mayab. Tu función es analizar datos operativos, financieros y de gestión, y generar reportes ejecutivos. Siempre respondes con: métricas precisas, variaciones vs. meta/período anterior, semáforos (🟢🟡🔴), causas probables de desviaciones, y recomendaciones accionables. Formato preferido: tablas ejecutivas. Tono: directo, basado en datos, orientado a decisión.` |
| 20 | **Agente: Project Manager** | Agente permanente para gestión de proyectos | `Eres el Project Manager de la Dirección de [área] de la Universidad Anáhuac Mayab. Tu función es estructurar proyectos, dar seguimiento, documentar reuniones y generar reportes de avance. Siempre usas: objetivos SMART, WBS, cronogramas con fechas, asignación de responsables, identificación de riesgos, y formato de semáforo para estatus. Generas minutas estructuradas con acuerdos y fechas. Alertas cuando hay retrasos o riesgos. Tono: organizado, proactivo, orientado a entrega.` |

---

### Criterios de evaluación del banco

| Criterio | Peso | Descripción |
|---|---|---|
| **Completitud** | 25% | ≥ 20 prompts distribuidos en las 6 categorías |
| **Personalización** | 25% | Los prompts reflejan el área REAL del participante (no son genéricos) |
| **Calidad de estructura** | 20% | Los prompts usan los frameworks del Nivel 2 (RCTF, CoT, Few-shot) |
| **Funcionalidad probada** | 20% | El participante ha ejecutado cada prompt al menos una vez y ajustado según resultado |
| **Organización** | 10% | Formato claro, fácil de navegar, con nombres descriptivos |

---

## Entregable B: Flujo de Creación de Reportes

### Concepto

Un documento paso a paso que describe **exactamente cómo el participante genera su reporte más importante** usando IA. No es un diagrama teórico — es un manual de operación que cualquier persona de su equipo podría seguir.

El flujo debe ser **disparado manualmente** (no requiere automatización técnica), reproducible y verificable.

### Estructura del flujo

```
FLUJO DE REPORTE: [Nombre del reporte]
Área: [Área/Coordinación]
Frecuencia: [semanal/mensual/semestral]
Audiencia: [quién lo recibe]
Autor: [nombre del participante]
Herramienta: Amazon Quick
Tiempo estimado: [antes de IA] → [con IA]
```

---

### Paso 1: Recopilación de Datos

| Campo | Descripción |
|---|---|
| **Fuentes de datos** | Listar cada fuente: sistema, Excel, email, persona que envía datos |
| **Formato de entrada** | Excel, CSV, PDF, texto libre, datos del sistema |
| **Frecuencia de actualización** | ¿Cuándo están disponibles los datos? |
| **Acción del participante** | Describir exactamente qué hace: "Exporto de [sistema] el reporte X, descargo el archivo Y del email de [persona]" |
| **Checklist de datos** | Lista de verificación de que tiene todos los insumos antes de iniciar |

#### 🎓 Ejemplo Académico
> **Fuentes:** (1) Sistema escolar → exportar tabla de matrícula actual. (2) Email de Control Escolar → archivo de bajas del mes. (3) Encuesta de satisfacción → resultados en Google Sheets. (4) Evaluación docente → PDF del sistema de evaluación.

#### 🏢 Ejemplo Administrativo
> **Fuentes:** (1) SAP → reporte de ejecución presupuestal. (2) Excel compartido → avance de proyectos (actualizado por coordinadores). (3) Email de RRHH → incidencias del mes. (4) Sistema de tickets → métricas de atención.

---

### Paso 2: Carga de Datos en Amazon Quick

| Campo | Descripción |
|---|---|
| **Acción** | Subir archivos al workspace de Amazon Quick |
| **Instrucción específica** | "Abra Amazon Quick. Arrastre los archivos [X, Y, Z] al workspace. Verifique que se cargaron correctamente." |
| **Verificación** | Pedir a Quick: "Confirma qué archivos tengo cargados y el tamaño de cada uno" |
| **Troubleshooting** | Si un archivo no se carga: formato incorrecto, tamaño excesivo, formato alternativo |

---

### Paso 3: Análisis Automatizado

| Campo | Descripción |
|---|---|
| **Prompt de análisis** | El prompt EXACTO que el participante usa (copiado de su banco de prompts) |
| **Output esperado** | Descripción de lo que debe generar la IA (tabla, narrativa, semáforo) |
| **Verificación humana** | Checklist de qué revisar: ¿los totales cuadran? ¿Las tendencias tienen sentido? ¿Hay datos que parecen inventados? |
| **Iteración** | Prompts de refinamiento si el primer resultado no es satisfactorio |

#### 🎓 Prompt de análisis académico (ejemplo)
```
Analiza los archivos cargados que contienen datos de [programa] del semestre [X].
Genera un análisis que incluya:
1. Matrícula actual vs. semestre anterior (tabla comparativa)
2. Tasa de deserción con desglose por semestre/cohorte
3. Resultados de satisfacción estudiantil (promedios por dimensión)
4. Evaluación docente (ranking top 5 y bottom 5)
5. Semáforo general del programa: 🟢🟡🔴 por indicador
6. Top 3 alertas que requieren acción inmediata
7. Top 3 logros para destacar

Formato: tablas donde haya datos numéricos, bullets donde haya texto.
```

#### 🏢 Prompt de análisis administrativo (ejemplo)
```
Analiza los archivos cargados que contienen datos operativos de [área] del mes [X].
Genera un análisis que incluya:
1. Ejecución presupuestal: real vs. planeado por partida (tabla con variación %)
2. Avance de proyectos: estatus por proyecto (tabla con semáforo)
3. Incidencias del período: clasificadas por tipo y severidad
4. KPIs del área: valor actual vs. meta (tabla con semáforo)
5. Top 3 desviaciones que requieren atención de Vicerrectoría
6. Top 3 logros del período
7. Proyección al cierre del trimestre

Formato: tablas ejecutivas, máximo 2 páginas.
```

---

### Paso 4: Formateo del Reporte

| Campo | Descripción |
|---|---|
| **Prompt de formato** | Transformar el análisis en el formato requerido por la audiencia |
| **Template institucional** | Si existe formato obligatorio, indicar referencia |
| **Output** | Documento listo para revisión |

#### Prompt de formateo (compartido)
```
Toma el análisis anterior y conviértelo en un reporte formal con:
- Encabezado: Universidad Anáhuac Mayab | [Área] | Reporte [tipo] | [período]
- Resumen ejecutivo: máximo 5 bullets en la primera sección
- Cuerpo: tablas y narrativa según el análisis
- Conclusión: 3 recomendaciones prioritarias con responsable y fecha sugerida
- Extensión: máximo [N] páginas
- Tono: [ejecutivo/técnico/informativo]

Si algún dato del análisis parece inconsistente, señálalo con ⚠️.
```

---

### Paso 5: Revisión Humana

| Checklist de verificación | ✅ |
|---|---|
| Los datos numéricos coinciden con las fuentes originales | ☐ |
| Las tendencias reportadas tienen sentido lógico | ☐ |
| No hay datos que parezcan "inventados" por la IA | ☐ |
| El tono es apropiado para la audiencia | ☐ |
| Las recomendaciones son factibles y relevantes | ☐ |
| El formato cumple con los requerimientos institucionales | ☐ |
| No se incluye información confidencial que no debería estar | ☐ |
| La extensión es adecuada (ni muy largo ni muy corto) | ☐ |

> **Regla de oro:** Si usted no puede verificar un dato, no lo incluya en el reporte. La IA puede alucinar cifras con total confianza.

---

### Paso 6: Distribución

| Campo | Descripción |
|---|---|
| **Canal** | Email, presentación en junta, carga en sistema, etc. |
| **Audiencia** | Listar destinatarios con nivel de detalle esperado por cada uno |
| **Frecuencia** | Cuándo se envía y deadline |
| **Archivo** | Dónde se guarda la versión final para referencia futura |

---

### Métricas del Flujo

| Métrica | Antes de IA | Con IA (meta) |
|---|---|---|
| **Tiempo de producción** | [X] horas | [X/3] horas (reducción 60%+) |
| **Errores/correcciones** | [frecuencia] | Reducción 50%+ |
| **Satisfacción de la audiencia** | [referencia] | Mejorar legibilidad y oportunidad |

---

### Criterios de evaluación del flujo

| Criterio | Peso | Descripción |
|---|---|---|
| **Reproducibilidad** | 30% | Otra persona podría seguir el flujo y generar el mismo reporte |
| **Completitud** | 25% | Los 6 pasos están documentados con detalle suficiente |
| **Prompts funcionales** | 20% | Los prompts están probados y generan output útil |
| **Control de calidad** | 15% | Incluye checklist de verificación humana |
| **Eficiencia demostrada** | 10% | Muestra comparativa clara de tiempo antes/después de IA |

---

## Relación entre Entregables y Niveles del Curso

```
Nivel 1 → Semilla del diagnóstico (5 tareas identificadas)
Nivel 2 → Semilla del banco (3 prompts maestros)
Nivel 3 → +5 prompts de comunicación al banco
Nivel 4 → +4 prompts de análisis al banco + primer borrador del flujo (Paso 3)
Nivel 5 → Flujo completo documentado (Entregable B) ⭐
Nivel 6 → +3 prompts de atención al banco
Nivel 7 → +3 prompts de gestión de proyectos al banco
Nivel 8 → +2 agentes al banco + banco final consolidado (Entregable A) ⭐

Total: 20+ prompts construidos progresivamente + 1 flujo funcional
```

> **Principio PM:** Los entregables no se "hacen al final" — se construyen incrementalmente durante todo el curso. Esto reduce la carga percibida y aumenta la probabilidad de completamiento.
