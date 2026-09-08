# Rúbricas Analíticas: IA Práctica para Líderes Anáhuac Mayab
## 8 Niveles + 2 Entregables Finales — Fase 3

> **Versión:** 1.0 | **Fecha:** 4 de septiembre de 2026  
> **Principio:** Descriptores conductuales observables — cada celda describe lo que el evaluador VE, no lo que el participante "sabe".  
> **Escala:** 3 niveles — Básico (1) / Competente (2) / Destacado (3)  
> **Umbral de aprobación:** Todas las dimensiones deben alcanzar mínimo "Competente" para emitir badge.  
> **Aplica a:** Versión Académica (🎓) y Versión Administrativa (🏢) — diferencias indicadas donde corresponde.

---

## Convenciones de Lectura

| Símbolo | Significado |
|---------|-------------|
| ⚡ | Dimensión crítica — si queda en "Básico", el entregable completo no aprueba |
| 🎓/🏢 | Indicador diferenciado por versión |
| **Negritas** en descriptor | Comportamiento clave observable |

---

## Nivel 1 — Fundamentos de IA Generativa
### Entregable: Mini-diagnóstico personal + reflexión escrita

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| **Identificación de oportunidades** | Lista 5 tareas pero son **genéricas** (ej: "escribir correos", "hacer reportes") sin conexión explícita con su rol específico | Lista 5 tareas **específicas de su cargo y área** (ej: "consolidar calificaciones parciales de 8 grupos para el informe a Dirección de Escuela") con al menos 3 viables con IA | Lista 5 tareas **priorizadas por impacto**, explicando brevemente **por qué** cada una se beneficiaría de IA y **estimando tiempo ahorrado** | 40% |
| **Comprensión de capacidades/limitaciones** | La reflexión menciona capacidades de IA pero **no identifica limitaciones concretas** o el riesgo está redactado de forma abstracta | La reflexión **distingue claramente** lo que IA puede hacer vs. lo que no, con un riesgo **específico de su área** (ej: "podría inventar datos de matrícula si no le doy los reales") | La reflexión demuestra **matiz**: capacidades con condiciones, limitaciones con soluciones parciales, y el riesgo incluye **consecuencia institucional concreta** | 35% |
| **Calidad de la reflexión escrita** | Las 3 oraciones son **vagas o repetitivas**; no se evidencia pensamiento propio | Las 3 oraciones son **específicas, diferentes entre sí**, y reflejan comprensión aplicada al contexto | Las 3 oraciones demuestran **pensamiento crítico propio** que va más allá de lo presentado en el nivel; incluye una insight original | 25% |

---

## Nivel 2 — Frameworks de Prompts
### Entregable: 3 prompts maestros con outputs

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Estructura del prompt (RCTF)** | Los prompts **no siguen estructura** identificable; faltan 2+ elementos de RCTF; instrucciones vagas o incompletas | Los 3 prompts **incluyen los 4 elementos RCTF** (Rol, Contexto, Tarea, Formato); la tarea es clara y el formato está definido | Los 3 prompts incluyen RCTF con **refinamiento avanzado**: restricciones de extensión, tono definido, anti-hallucination cues ("basándote solo en los datos proporcionados"), o ejemplos few-shot integrados | 35% |
| **Relevancia contextual** | Los prompts son **genéricos** y podrían ser de cualquier persona en cualquier organización; no incluyen datos reales | Los prompts son **específicos del cargo y área** del participante; incluyen placeholders con datos reales o reales de práctica proporcionados | Los prompts están **listos para producción**: datos reales integrados, formatos institucionales correctos, y el participante explica **cuándo y con quién** usará cada uno | 30% |
| **Calidad del output generado** | Los outputs son genéricos; el participante **no los editó ni evaluó** después de generarlos | Los outputs son **funcionales**: podrían usarse con edición menor; el participante **identifica qué cambiaría** | Los outputs son **directamente usables** con mínima edición; el participante **documentó las iteraciones** (mínimo 2 intentos) y explica qué mejoró en cada ciclo | 20% |
| **Autocrítica (autoevaluación 1-5)** | La calificación propia es **inconsistente con la calidad real** (se pone 5/5 cuando el output es mediocre, o 1/5 sin justificación) | La calificación propia es **razonable y justificada**; identifica al menos 1 aspecto a mejorar por prompt | La calificación propia **coincide con la evaluación del facilitador** (±1 punto); incluye plan de mejora específico para cada prompt | 15% |

---

## Nivel 3 — Email y Comunicados / Casos de Uso
### Entregable: 5 templates + caso difícil resuelto

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Calidad del prompt subyacente** | Los templates fueron generados con **prompts mínimos** (ej: "hazme un correo para docentes"); no se evidencia estructura ni especificaciones | Los templates incluyen **prompts documentados** con contexto, audiencia definida, tono especificado y formato solicitado; cada template tiene su prompt visible | Los prompts demuestran **técnicas avanzadas**: adaptación de tono por audiencia en el mismo prompt, condiciones ("si la solicitud procede… si no procede…"), y personalización vía variables | 25% |
| ⚡ **Pertinencia del output** | Los templates son **genéricos**: podrían ser de cualquier universidad o cualquier empresa; no reflejan el contexto Anáhuac | Los templates son **específicos del contexto institucional**: mencionan procesos reales (🎓 Banner, CIEES, ciclo escolar / 🏢 SAP, KPIs institucionales), usan tono Anáhuac, firma correcta | Los templates son **listos para producción sin edición**: tono perfectamente institucional, variables claramente marcadas para personalización rápida, y cubren los 5 escenarios más frecuentes del participante | 25% |
| **Resolución de caso difícil** | El caso difícil se resolvió de forma **genérica** o evasiva; la respuesta no equilibra empatía con normatividad; o se limitó a pegar el output sin revisión | La respuesta al caso difícil **equilibra empatía con firmeza institucional**; identifica los elementos sensibles; y el participante **anotó qué editaría** del output de IA | La respuesta demuestra **juicio directivo maduro**: edición significativa del output de IA, incorporación de elementos que la IA no puede saber (contexto político, precedentes, relaciones), y reflexión sobre por qué la IA sola no basta para este tipo de caso | 30% |
| **Diversidad y completitud** | Los 5 templates **cubren escenarios similares** (ej: 5 correos de aviso); falta variedad en tipo de comunicación y audiencia | Los 5 templates **cubren al menos 3 tipos diferentes** de comunicación (informativo, respuesta a solicitud, convocatoria, caso sensible, reporte) y **al menos 2 audiencias** diferentes | Los 5 templates forman un **kit completo de comunicación del cargo**: cubren todo el espectro de audiencias del participante, incluyen variaciones por nivel de urgencia/formalidad, y están organizados como una "biblioteca reutilizable" | 20% |

---

## Nivel 4 — Análisis de Reportes / Evaluación Crítica
### Entregable: Dictamen de confiabilidad + análisis ejecutivo

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Detección de errores (alucinaciones)** | El participante **no identificó ningún error** o marcó todo como 🟢 sin verificación; o identificó errores pero **no los justificó** | El participante identificó **al menos 2 errores verificables** (🔴) con justificación específica: "Dice X pero el dato real es Y, según [fuente]" | El participante identificó **3+ errores**, clasificó correctamente 🟢/🟡/🔴 con tasa de precisión >80%, y **explicó el patrón** (ej: "la IA es confiable en estructura pero inventa datos numéricos específicos") | 35% |
| ⚡ **Pensamiento crítico** | Las justificaciones son **genéricas** ("esto parece incorrecto") o no están presentes; no hay referencia a fuentes de verificación | Las justificaciones son **específicas y fundamentadas**: citan fuente de verificación (documento real, dato conocido, normativa); la decisión final (usar/corregir/descartar) es **coherente con el diagnóstico** | Las justificaciones demuestran **sistema de verificación propio**: el participante describe su método de verificación, distingue entre "no puedo confirmar" y "es falso", y propone **protocolo reutilizable** para futuras verificaciones | 30% |
| **Calidad del análisis ejecutivo** | El análisis ejecutivo (1 página) es **una copia literal** del output de IA sin edición ni validación visible | El análisis ejecutivo **integra datos reales verificados** del participante; las conclusiones son coherentes con los datos; el prompt utilizado está documentado | El análisis ejecutivo es **superior al output crudo de IA**: el participante editó, añadió datos que la IA no tenía, corrigió interpretaciones, y el resultado es **presentable a su jefe directo** | 20% |
| **Reflexión sobre confianza en IA** | No hay reflexión, o es genérica ("hay que tener cuidado") | La reflexión incluye **regla personal concreta** sobre cuándo confiar/desconfiar de IA en su contexto específico | La reflexión articula un **framework personal de verificación** con criterios claros y lo aplica a su trabajo real | 15% |

---

## Nivel 5 — Ética + Automatización de Reportes
### Entregable: Semáforo ético + flujo de reporte documentado ⭐

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| **Juicio ético (semáforo)** | Las clasificaciones 🟢/🟡/🔴 son **inconsistentes o no justificadas**; el participante acepta la clasificación de la IA sin cuestionarla | Las clasificaciones son **coherentes y justificadas**; el participante **difiere de la IA** en al menos 2 escenarios con argumento propio; identifica riesgos de privacidad y responsabilidad | Las clasificaciones demuestran **criterio institucional maduro**: aplica principios de la normativa real de su institución, identifica zonas grises con matiz, y propone salvaguardas específicas para los escenarios 🟡 | 25% |
| ⚡ **Diseño del flujo de reporte** | El flujo tiene **menos de 3 pasos** o los pasos son vagos ("usar IA para hacer el reporte"); no incluye prompts específicos | El flujo tiene **5-6 pasos claros** con: fuentes de datos identificadas, prompts exactos para cada paso, formato de salida definido, y checklist de verificación humana | El flujo es **replicable por un tercero sin guía adicional**: incluye diagrama visual, tiempos estimados por paso, puntos de decisión ("si el dato no cuadra, hacer X"), variantes por escenario, y el participante lo **probó con datos reales** | 35% |
| **Prompts del flujo** | Los prompts del flujo son **genéricos** y no aprovechan los frameworks aprendidos | Los prompts del flujo usan **estructura RCTF**, están secuenciados lógicamente, y el output de cada paso alimenta al siguiente | Los prompts forman una **cadena optimizada**: incluyen instrucciones de formato específico para que el output de un paso sea input directo del siguiente; hay prompts de verificación ("revisa si los totales cuadran") | 20% |
| **Checklist de verificación** | No hay checklist o es genérico ("revisar que esté bien") | El checklist tiene **al menos 5 puntos específicos**: números cuadran, fuentes correctas, formato adecuado, tono apropiado, no hay alucinaciones | El checklist está **calibrado con errores reales encontrados**: el participante muestra ejemplos de errores que IA cometió en su flujo y el checklist los previene específicamente | 20% |

---

## Nivel 6 — Atención a Stakeholders / Flujos Integrados
### Entregable: Kit de atención + flujo integrado

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Calidad del kit de atención** | Las 10 respuestas son **genéricas** y no reflejan la realidad del área; o hay menos de 8 respuestas; no incluyen variables de personalización | Las 10 respuestas son **específicas del área**, cubren las preguntas más frecuentes reales, e incluyen **variables claramente marcadas** para personalizar (nombre, programa, fecha, situación) | Las 10 respuestas forman un **sistema completo**: incluyen variaciones por tono (urgente/normal/sensible), el protocolo de cuándo NO usar IA (crisis, salud mental, legal) es **específico y realista**, y el participante probó personalización en al menos 3 respuestas | 30% |
| **Encadenamiento de flujo multi-paso** | El "flujo" son **tareas aisladas** sin conexión entre sí; no hay cadena de prompts | El flujo **encadena mínimo 3 pasos** donde el output de cada paso alimenta el input del siguiente; el resultado final es un documento/proceso completo | El flujo **encadena 4+ pasos** con puntos de decisión humana intercalados; el participante **documenta el tiempo ahorrado** vs. hacer el proceso sin IA; el resultado final es **superior al proceso manual** | 35% |
| **Protocolo de escalamiento** | No hay protocolo de cuándo usar IA vs. atender personalmente; o el protocolo es vago | El protocolo define **al menos 3 categorías** (resuelvo con IA, asisto con IA + reviso, atiendo 100% humano) con criterios claros para cada categoría | El protocolo incluye **árbol de decisión funcional** con criterios de urgencia, sensibilidad, complejidad y precedente institucional; incluye ejemplos reales de cada categoría | 20% |
| **Sensibilidad en casos complejos** | Las respuestas para casos sensibles (🎓 queja de alumno / 🏢 reclamo de proveedor) son **demasiado robóticas** o no demuestran edición humana | Las respuestas sensibles muestran **edición significativa** del output de IA: se ajustó tono, se añadieron elementos contextuales, se verificó cumplimiento normativo | Las respuestas sensibles demuestran **artesanía directiva**: combinan output de IA con juicio personal, incluyen elementos que la IA no puede generar (conocimiento de la relación, precedentes, implicaciones políticas) | 15% |

---

## Nivel 7 — Gestión de Proyectos / Personalización y Agentes
### Entregable: Agente funcional + ficha técnica + plan de proyecto

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Agente funcional** | El agente tiene **nombre e instrucciones genéricas**; no incluye documentos de referencia; no fue probado con consultas reales | El agente tiene **nombre descriptivo, instrucciones específicas (RCTF), al menos 1 documento de referencia**, y fue probado con **3 consultas reales** con resultados aceptables | El agente está **optimizado**: instrucciones refinadas tras iteración, múltiples documentos de referencia, responde correctamente al 80%+ de consultas; la ficha técnica incluye **limitaciones conocidas** y protocolo de uso para el equipo | 30% |
| **Ficha técnica del agente** | No hay ficha técnica o es un párrafo vago; no documenta limitaciones | La ficha incluye: nombre, propósito, instrucciones resumidas, documentos de referencia listados, **al menos 3 limitaciones** identificadas, y protocolo de uso para terceros | La ficha es un **manual de usuario completo**: incluye ejemplos de consultas que funcionan y que no funcionan, instrucciones de mantenimiento (cuándo actualizar documentos), y escenarios de uso recomendados vs. contraindicados | 25% |
| **Plan de proyecto real** | El plan de proyecto es **genérico** (objetivos vagos, sin fechas, sin responsables) o fue copiado del output de IA sin adaptación | El plan incluye **objetivos SMART, WBS con al menos 3 fases, responsables asignados, calendario realista, y al menos 3 riesgos identificados** con mitigación | El plan es **ejecutable a partir del lunes**: incluye WBS detallado, dependencias, template de minuta, formato de reporte de avance tipo semáforo, y el participante **validó la factibilidad** con su conocimiento del contexto | 25% |
| **Contexto institucional (Nivel 7)** | No creó perfil de contexto institucional o es una copia sin personalización | El perfil incluye **cargo, área, poblaciones atendidas, estilo de comunicación, prioridades actuales**; demostró la diferencia con/sin contexto | El perfil está **refinado y probado**: incluye múltiples contextos situacionales (reunión formal vs. comunicado rápido), y el participante lo integró como base para todos sus agentes | 20% |

---

## Nivel 8 — Ecosistema de IA Personal + Plan de Adopción
### Entregable: Ecosistema completo ⭐ + plan de adopción

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Ecosistema de agentes (3)** | Menos de 3 agentes o los agentes son **redundantes** (hacen esencialmente lo mismo); no están documentados | **3 agentes diferenciados** por función (ej: 🎓 Analista Académico + Comunicador + Asistente de Acreditación / 🏢 Analista de Gestión + Comunicador Institucional + Project Manager); cada uno con instrucciones, documentos y ficha técnica | Los 3 agentes forman un **sistema cohesivo**: están diseñados para trabajar en secuencia (output de uno → input de otro), cubren las funciones principales del cargo, y el participante **demuestra cuándo usar cuál** | 25% |
| ⚡ **Flujo multi-paso funcional** | El flujo es **conceptual** (descripción sin ejecución) o tiene menos de 2 pasos | El flujo tiene **3+ pasos ejecutados realmente**: datos reales → Agente A analiza → Agente B redacta → output final; incluye **outputs intermedios y final** como evidencia | El flujo **produce un resultado superior** al proceso manual: el participante documenta comparativa de tiempo y calidad, el output final es **utilizado realmente** en su trabajo (no es solo ejercicio) | 25% |
| ⚡ **Banco de prompts completo (20+)** | Menos de 15 prompts, o los prompts son **copias literales** del banco base sin personalización; sin organización | **20+ prompts organizados por categoría** (comunicación, análisis, gestión, ética); al menos 10 están personalizados con datos reales del participante; incluyen output esperado | **25+ prompts** organizados como **manual operativo de IA del cargo**: indexados por frecuencia de uso, con versiones para diferentes audiencias/escenarios, y con notas de "lecciones aprendidas" por prompt | 25% |
| **Plan de adopción (2 páginas)** | El plan es **genérico** o solo lista intenciones sin acciones concretas; no incluye política de uso ni métricas | El plan incluye los 6 elementos requeridos: **3 quick wins, política de uso (sí/no/con supervisión), top 3 riesgos con mitigación, plan de capacitación del equipo, métricas de impacto, modelo de gobernanza** | El plan es **presentable a un superior sin edición**: incluye cronograma de implementación a 90 días, métricas específicas y medibles, y una reflexión que demuestra que el participante **pasó de consciencia a agencia** a lo largo del curso | 25% |

---

## Rúbricas Especiales para Entregables Finales

### Entregable Final #1: Banco de Prompts Completo

> Esta rúbrica se aplica al banco de prompts como producto integrado final (no a los prompts individuales de cada nivel).

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Completitud** | Menos de 15 prompts; faltan categorías completas (ej: no hay prompts de análisis o de ética); varios prompts son duplicados funcionales | **20+ prompts que cubren las 5 categorías** principales: comunicación institucional, análisis y reportes, diseño y planeación, gestión y coordinación, ética y gobernanza; sin duplicados funcionales | **25+ prompts** con cobertura exhaustiva del rol; incluye prompts para situaciones excepcionales (crisis, auditoría, caso legal); cada categoría tiene 4+ prompts; índice navegable | 30% |
| ⚡ **Relevancia y personalización** | Los prompts son **copias del banco base** proporcionado en el curso, sin adaptación al rol/área del participante | Al menos **50% de los prompts están personalizados** con: nombre del cargo, área, institución, datos reales o realistas, procesos específicos del participante | **80%+ de los prompts están personalizados**; incluyen datos reales del área; cada prompt tiene nota de "cuándo usarlo" y "con quién/para qué"; el banco refleja **una semana real de trabajo** del participante | 30% |
| **Calidad técnica de los prompts** | Los prompts **no usan frameworks** enseñados; faltan elementos RCTF; instrucciones ambiguas | Los prompts usan **estructura RCTF consistente**; especificaciones de formato y tono claras; incluyen restricciones de extensión donde corresponde | Los prompts demuestran **dominio avanzado**: uso de chain of thought donde aplica, few-shot con ejemplos, anti-hallucination cues, instrucciones condicionales ("si X entonces Y"), y variables claramente marcadas para reuso rápido | 20% |
| **Organización y usabilidad** | Los prompts están en una **lista desordenada** sin categorías ni índice; difícil encontrar el prompt necesario | Los prompts están **organizados por categoría** con títulos descriptivos; cada prompt tiene: caso de uso, variables a reemplazar, y output esperado | El banco funciona como **manual de referencia del cargo**: índice clicable, etiquetas de frecuencia (diario/semanal/mensual/eventual), y notas de mejora continua basadas en la experiencia del participante | 20% |

---

### Entregable Final #2: Flujo de Reportes Automatizado

> Esta rúbrica se aplica al flujo de reporte como sistema integrado (no a los prompts individuales del flujo).

| Dimensión | Básico (1) | Competente (2) | Destacado (3) | Peso |
|-----------|-----------|----------------|---------------|------|
| ⚡ **Funcionalidad end-to-end** | El flujo está **incompleto**: faltan pasos, no cubre desde datos crudos hasta output final, o hay pasos que "se asumen" sin documentar | El flujo cubre **el ciclo completo**: identificación de fuentes de datos → ingesta/upload → análisis con IA → formato de salida → checklist de verificación → distribución; **cada paso es ejecutable** | El flujo **fue ejecutado exitosamente** con datos reales al menos 1 vez; el output final es **el reporte real del participante** (no simulación); incluye manejo de excepciones ("si los datos llegan tarde", "si falta un campo") | 30% |
| ⚡ **Nivel de automatización** | El flujo **no reduce trabajo significativamente**: la mayoría de los pasos siguen siendo manuales; la IA solo se usa para un paso | El flujo **automatiza al menos 3 pasos** con IA: consolidación, análisis y formateo; el participante **estima reducción de tiempo ≥50%** vs. proceso manual | El flujo demuestra **automatización inteligente**: distingue claramente pasos IA-automáticos de puntos de control humano; incluye agente preconfigurado para el análisis; y el participante **mide reducción de tiempo real** (no estimada) con evidencia | 25% |
| **Claridad de documentación** | La documentación es **vaga** o incompleta: no se podría replicar el flujo leyendo solo el documento | La documentación permite que **otro directivo del mismo área replique el flujo** sin ayuda adicional: pasos numerados, prompts completos, formatos de ejemplo, y checklist | La documentación incluye **diagrama visual del flujo**, tiempos por paso, alternativas si algo falla, y un **"quick start"** de 5 pasos para la primera ejecución; es un mini-manual de operación | 25% |
| **Control de calidad integrado** | No hay mecanismo de verificación; o es genérico ("revisar antes de enviar") | El checklist de verificación tiene **≥5 puntos específicos** al contexto del reporte: validación de totales, consistencia de periodos, formato requerido por la audiencia, verificación de fuentes | El control de calidad es **un sistema**: incluye verificación cruzada de datos, punto de "second look" por un colega, registro de errores históricos que la IA cometió, y criterio de "matar" el output y empezar de cero | 20% |

---

## Guía de Aplicación para Evaluadores

### Proceso de Evaluación con Rúbricas

```
1. ANTES de evaluar:
   ├── Confirmar que el participante tiene acceso a la rúbrica (transparencia)
   ├── Verificar que el entregable está completo (todos los componentes)
   └── Revisar la autoevaluación del participante (si la completó)

2. DURANTE la evaluación:
   ├── Evaluar CADA dimensión independientemente
   ├── Marcar el nivel que MEJOR describe la evidencia observada
   ├── Si está "entre" dos niveles, asignar el inferior
   ├── Las dimensiones ⚡ (críticas) se evalúan primero
   └── Anotar evidencia específica que sustenta cada nivel asignado

3. DESPUÉS de evaluar:
   ├── Calcular puntaje ponderado del entregable
   ├── Verificar: ¿Alguna dimensión ⚡ quedó en "Básico"?
   │   └── Si SÍ → El entregable NO aprueba independientemente del puntaje
   ├── Redactar retroalimentación: 1 fortaleza + 1 área de mejora por dimensión
   └── Si el entregable no aprueba → indicar específicamente qué mejorar para reenvío
```

### Conversión de Puntajes

| Nivel | Puntos | Equivalencia porcentual |
|-------|--------|------------------------|
| Básico | 1 | 50% de la dimensión |
| Competente | 2 | 80% de la dimensión |
| Destacado | 3 | 100% de la dimensión |

**Ejemplo de cálculo — Nivel 3 (peso total: 15% del curso):**

| Dimensión | Peso dimensión | Nivel obtenido | Puntos | Ponderado |
|-----------|---------------|----------------|--------|-----------|
| Calidad del prompt | 25% | Competente (2) | 80% | 20.0 |
| Pertinencia del output | 25% | Destacado (3) | 100% | 25.0 |
| Resolución caso difícil | 30% | Competente (2) | 80% | 24.0 |
| Diversidad y completitud | 20% | Competente (2) | 80% | 16.0 |
| **TOTAL NIVEL 3** | 100% | | | **85.0%** |
| **Contribución al curso** | | | | **85% × 15% = 12.75%** |

---

## Notas sobre Equidad y Accesibilidad (WCAG 2.2)

1. **Formatos alternativos:** Los entregables se aceptan en Word, PDF, Markdown, o capturas de pantalla anotadas. No se penaliza por formato.
2. **Tiempo adicional:** Participantes con necesidades específicas reciben 50% adicional de tiempo para entregables.
3. **Lenguaje:** Se aceptan entregables en español o inglés. No se evalúa calidad gramatical sino funcionalidad del contenido.
4. **Acceso tecnológico:** Si un participante no tiene acceso a Amazon Quick, puede usar ChatGPT, Gemini o Claude con las mismas rúbricas.
5. **Sesgo en evaluación:** Las rúbricas se aplican igual a versión académica y administrativa; las diferencias son solo de CONTEXTO, no de exigencia.

---

*Documento generado como parte de la Fase 3 — Sistema de Evaluación del curso "IA Práctica para Líderes", Universidad Anáhuac Mayab.*  
*Rúbricas diseñadas bajo principios de assessment auténtico: descriptores conductuales observables, transparencia y alineación constructiva (Biggs).*
