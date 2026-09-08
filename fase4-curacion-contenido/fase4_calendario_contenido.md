# Calendario de Producción de Contenido
## Curso: IA Práctica para Líderes Anáhuac Mayab
### Fase 4 · Plan de Producción por Nivel

> **Versión:** 1.0 | **Fecha:** 5 de septiembre de 2026
> **Formato de entrega:** Mini sitio HTML autocontenido
> **Herramienta principal:** Amazon Quick
> **Tono:** Formal (tratamiento de «usted»)
> **Convención:** 🏭 = se PRODUCE internamente | 🔗 = se CURA externamente

---

## Resumen Ejecutivo de Producción

| Nivel | Piezas a producir | Piezas a curar | Prioridad | Dependencias |
|---|---|---|---|---|
| 1 · Conceptos de IA | 8 | 4 | 🔴 Crítica (Sprint 1) | Ninguna |
| 2 · Frameworks de prompts | 10 | 3 | 🔴 Crítica (Sprint 1) | Nivel 1 |
| 3 · Email y comunicados | 9 | 3 | 🟡 Alta (Sprint 2) | Nivel 2 |
| 4 · Análisis de reportes | 9 | 4 | 🟡 Alta (Sprint 2) | Nivel 3 |
| 5 · Automatización de reportes | 11 | 3 | 🟡 Alta (Sprint 3) | Nivel 4 |
| 6 · Atención a stakeholders | 10 | 3 | 🟢 Media (Sprint 3) | Nivel 5 |
| 7 · Gestión de proyectos | 10 | 4 | 🟢 Media (Sprint 4) | Nivel 6 |
| 8 · Agentes y equipo local | 12 | 4 | 🟢 Media (Sprint 4) | Nivel 7 |

**Total estimado:** 79 piezas internas + 28 piezas curadas = **107 piezas de contenido**

---

## Calendario de Sprints de Producción

```
Sprint 1 (Semanas 1–2) ──── Niveles 1 y 2 ──── Fundamentos + Frameworks
Sprint 2 (Semanas 3–4) ──── Niveles 3 y 4 ──── Comunicación + Análisis
Sprint 3 (Semanas 5–6) ──── Niveles 5 y 6 ──── Automatización + Stakeholders
Sprint 4 (Semanas 7–8) ──── Niveles 7 y 8 ──── Proyectos + Ecosistema
Sprint 5 (Semana 9)    ──── QA, integración final en mini sitio, pruebas de usuario
```

**Dependencia transversal:** El glosario visual de IA para directivos (Nivel 1) se reutiliza como tooltip system en todos los niveles. Debe completarse en Sprint 1.

---

## Nivel 1 · Conceptos de IA Generativa
### Fase I — ENTENDER | Duración en sitio: 40–45 min | Prioridad: 🔴 Sprint 1

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 1.1 | **Concepto clave: ¿Qué es la IA generativa?** | Texto + analogía | 180 palabras | Analogía del «asistente recién contratado con memoria fotográfica». Sin tecnicismos. |
| 1.2 | **Infografía: IA Generativa en 5 minutos** | Infografía estática (SVG/PNG) | 1 panel, 6 conceptos | Qué es / qué no es / qué puede / qué no puede / alucinación / verificación. Paleta Anáhuac. |
| 1.3 | **Demo paso a paso: prompt vago vs. prompt estructurado** | Texto con capturas simuladas | 300 palabras + 2 capturas | Lado a lado: «Hazme un comunicado» vs. prompt RCTF completo. Mostrar diferencia dramática. |
| 1.4 | **Ejercicio guiado: su primer prompt útil** | Prompt template interactivo | 150 palabras + plantilla con variables `[DATO]` | Template de comunicado con campos reemplazables. Datos de práctica incluidos. |
| 1.5 | **Template: Mini-diagnóstico personal** | Formulario/tabla descargable | Tabla de 5 filas + instrucciones (100 palabras) | Columnas: tarea, tipo (comunicación/análisis/organización), prioridad. |
| 1.6 | **Reflexión ética: 3 oraciones** | Formulario estructurado | 80 palabras de instrucción + 3 campos | «La IA puede ayudarme en ___. No debo confiar en ella para ___. El riesgo más grande sería ___.» |
| 1.7 | **Tabla comparativa de herramientas** | Tabla HTML responsiva | 4 columnas × 6 filas (200 palabras) | Amazon Quick, ChatGPT, Gemini, Claude. Criterios: costo, privacidad, idioma, archivos. |
| 1.8 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 5 items por columna (120 palabras) | «Haga esto / Evite esto» con ejemplos del contexto universitario. |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 1.A | **Video introductorio: ¿Qué es la IA?** | Video (<3 min) | IBM Technology / Dot CSV en español | Verificar que no use jerga excesiva. Subtitular si es en inglés. |
| 1.B | **Lectura: «State of AI 2026» — dato de impacto** | Extracto con enlace | McKinsey / Stanford HAI | Solo el dato «85% de directivos no usa IA en su flujo diario» o equivalente actualizado. |
| 1.C | **Diccionario de analogías para directivos** | Documento de referencia | Adaptación propia de recursos UNESCO AI Literacy | Base para el tooltip system transversal. Se produce a partir de fuentes curadas. |
| 1.D | **Recurso complementario: artículo sobre IA en educación superior** | Lectura opcional (10 min) | EDUCAUSE Review / UNESCO | Contexto latinoamericano preferido. |

---

## Nivel 2 · Frameworks de Prompts
### Fase I — ENTENDER | Duración en sitio: 45–50 min | Prioridad: 🔴 Sprint 1

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 2.1 | **Concepto clave: Por qué los prompts genéricos fallan** | Texto con comparativa lado a lado | 200 palabras + 2 outputs ejemplo | Resultado genérico vs. resultado RCTF. Caso: análisis de retención. |
| 2.2 | **Infografía: Framework RCTF (Rol-Contexto-Tarea-Formato)** | Infografía con 4 componentes | 1 panel, 4 bloques | Cada bloque con icono, definición (15 palabras) y ejemplo. Paleta Anáhuac. |
| 2.3 | **Prompt template RCTF** | Plantilla interactiva con campos | 120 palabras + 4 campos rellenables | Template reutilizable con instrucciones por campo. |
| 2.4 | **Prompt template RISE (Rol-Input-Steps-Expectation)** | Plantilla interactiva con campos | 120 palabras + 4 campos rellenables | Ejemplo pre-cargado: seguimiento de acreditación. |
| 2.5 | **Prompt template CO-STAR (Context-Objective-Style-Tone-Audience-Response)** | Plantilla interactiva con campos | 150 palabras + 6 campos rellenables | Ejemplo pre-cargado: comunicado a padres de familia. |
| 2.6 | **Demo comparativa: 3 frameworks en acción** | Texto con 3 outputs anotados | 450 palabras (150 por framework) | Misma tarea resuelta con RCTF, RISE y CO-STAR. Anotaciones sobre cuándo usar cada uno. |
| 2.7 | **Ejercicio: «Del memo vago al memo preciso»** | Ejercicio paso a paso | 200 palabras + 3 prompts antes/después | El participante mejora 3 prompts reales usando RCTF. |
| 2.8 | **Guía: Técnicas de iteración (refina, critica, varía)** | Texto con ejemplos | 200 palabras + 3 mini-ejemplos | Cada técnica con frase exacta que usar en Amazon Quick. |
| 2.9 | **Template: Banco de prompts maestros** | Tabla descargable | 3 filas × 4 columnas (80 palabras de instrucción) | Columnas: tarea, framework, prompt completo, output. |
| 2.10 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 4 items por columna (100 palabras) | Énfasis: «Empiece con RCTF; guarde sus prompts; itere siempre.» |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 2.A | **Lectura: guía de prompt engineering para no-técnicos** | Artículo (10 min lectura) | Anthropic / OpenAI prompt guide | Verificar que el nivel sea accesible para directivos. |
| 2.B | **Video: prompt engineering explicado** | Video (<3 min) | Fireship / Dot CSV | Que muestre la diferencia prompt genérico vs. estructurado. |
| 2.C | **Banco de ejemplos pre-cargados para gestión universitaria** | Documento de referencia | Producción propia basada en casos reales Anáhuac | 10 prompts RCTF listos para copiar y adaptar. |

---

## Nivel 3 · Email y Comunicados Institucionales
### Fase II — USAR | Duración en sitio: 45–50 min | Prioridad: 🟡 Sprint 2

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 3.1 | **Concepto clave: El costo oculto del email** | Texto con dato de impacto | 150 palabras | «40-60 correos/día × 3-5 min = 2-5 horas diarias.» Calculadora mental. |
| 3.2 | **Prompt base para redacción desde cero** | Prompt template con variables | 180 palabras + 7 variables | Audiencia, tono, acción, extensión, firmante. Tratamiento «usted». |
| 3.3 | **Prompt de revisión y mejora de borradores** | Prompt template | 130 palabras + 5 criterios de revisión | Checklist automático: claridad, tono, acción, extensión, errores. |
| 3.4 | **Demo: mismo mensaje, 2 audiencias** | Texto con 2 outputs comparados | 400 palabras (200 por versión) | Tema: cambio de horarios. Versión docentes (formal) vs. versión estudiantes (cercano). |
| 3.5 | **Case study card: respuesta a correo difícil** | Caso práctico estructurado | 300 palabras (contexto + prompt + output + reflexión) | Versión académica: padre que impugna calificación. Versión administrativa: proveedor con amenaza legal. |
| 3.6 | **Guía de tono institucional Anáhuac** | Tabla de 3 niveles de tono | 200 palabras + tabla 3×4 | Formal / semi-formal / cercano-institucional con ejemplos de saludo, cuerpo y cierre. |
| 3.7 | **Checklist de calidad de comunicación** | Lista verificable | 8 items (100 palabras) | Antes de enviar: ¿mensaje claro en 2 líneas? ¿Tono correcto? ¿Acción explícita? ¿Extensión adecuada? |
| 3.8 | **Template: Kit de 5 comunicados** | 5 plantillas con variables | 500 palabras total (100 por template) | a docentes, a estudiantes, a padres, a rectoría, de emergencia. |
| 3.9 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 4 items por columna (100 palabras) | Énfasis: «Genere con IA, edite con criterio; no envíe sin leer.» |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 3.A | **Lectura: principios de comunicación institucional** | Artículo (8 min) | Harvard Business Review / comunicación corporativa | Adaptado a contexto universitario. |
| 3.B | **Herramienta: detector de tono (opcional)** | Recurso web | Grammarly Business / LanguageTool | Como referencia para verificación de tono en español. |
| 3.C | **Guía ética: privacidad de datos en comunicación asistida por IA** | Documento breve (5 min) | UNESCO / normativa mexicana LFPDPPP | Qué datos de alumnos/empleados nunca poner en IA pública. |

---

## Nivel 4 · Análisis de Reportes con IA
### Fase II — USAR | Duración en sitio: 45–50 min | Prioridad: 🟡 Sprint 2

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 4.1 | **Concepto clave: El problema del reporte no leído** | Texto con dato de impacto | 150 palabras | «5-10 reportes/semana, ≤20% leído de cada uno.» |
| 4.2 | **Concepto clave: RAG explicado para directivos** | Texto con analogía | 180 palabras | «Darle una carpeta al asistente antes de que redacte.» Sin mencionar «RAG» como acrónimo hasta el final. |
| 4.3 | **Demo paso a paso: subir documento → resumen → verificación** | Texto con capturas simuladas | 350 palabras + 3 capturas | Flujo: subir doc → prompt de resumen → output → verificación contra fuente. |
| 4.4 | **Prompt template: resumen ejecutivo de 1 página** | Prompt template con formato RISE | 200 palabras + formatos (bullets, narrativo, FODA) | Audiencia configurable. Incluye «señale inconsistencias». |
| 4.5 | **Prompt template: análisis de datos tabulares** | Prompt template | 150 palabras | Para Excel/CSV: tendencias, anomalías, comparativas, rankings. |
| 4.6 | **Infografía: Protocolo PAUS de verificación** | Infografía (SVG/PNG) | 1 panel, 4 pasos | P=Procedencia, A=Actualidad, U=Unicidad, S=Sesgo. Con preguntas guía por paso. |
| 4.7 | **Ejercicio: tabla semáforo de verificación** | Template de ejercicio | Tabla 5 filas × 3 columnas (100 palabras instrucción) | 5 afirmaciones de IA → veredicto (✅ correcto / ⚠️ parcial / 🔴 inventado) + evidencia. |
| 4.8 | **Template: resumen ejecutivo con prompt documentado** | Template descargable | 1 página + sección de prompt | Formato: párrafo ejecutivo + hallazgos + recomendaciones + prompt usado. |
| 4.9 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 4 items por columna (100 palabras) | Énfasis: «Suba el documento; verifique cada dato; use PAUS.» |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 4.A | **Reporte demo (versión académica)** | PDF/Excel de ejemplo | Producción propia con datos ficticios | Indicadores de matrícula, retención, titulación. Datos verosímiles pero no reales. |
| 4.B | **Reporte demo (versión administrativa)** | PDF/Excel de ejemplo | Producción propia con datos ficticios | KPIs operativos, presupuesto vs. real. |
| 4.C | **Guía de confidencialidad de documentos** | Documento breve (3 min) | Política institucional Anáhuac + normativa | Qué documentos nunca subir a IA pública. Ventaja de procesamiento local. |
| 4.D | **Lectura: sesgos en análisis automatizado** | Artículo (8 min) | MIT Technology Review / AI Now Institute | Contexto de toma de decisiones con datos. |

---

## Nivel 5 · Automatización de Reportes
### Fase III — ACELERAR | Duración en sitio: 50–55 min | Prioridad: 🟡 Sprint 3 | ⭐ ENTREGABLE FINAL 1

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 5.1 | **Concepto clave: Anatomía de un reporte recurrente** | Texto + diagrama de flujo | 200 palabras + diagrama SVG | Datos → transformaciones → audiencia → formato. |
| 5.2 | **Infografía: Flujo de 6 pasos IA-asistido** | Infografía con iconos | 1 panel, 6 pasos | Recopilar → Subir → Analizar → Formatear → Revisar → Distribuir. Iconos humano/IA. |
| 5.3 | **Template de mapeo de reporte (anatomía)** | Formulario/tabla | 7 campos (80 palabras instrucción) | Nombre, frecuencia, fuentes, transformaciones, audiencia, formato, tiempo actual. |
| 5.4 | **Prompt template: análisis pre-diseñado (paso 3)** | Prompt template RISE | 200 palabras | Para consolidación y análisis con datos subidos. |
| 5.5 | **Prompt template: formato ejecutivo (paso 4)** | Prompt template | 150 palabras | Resumen ejecutivo adaptado a audiencia configurable. |
| 5.6 | **Guía paso a paso: crear su primer agente en Amazon Quick** | Tutorial con capturas simuladas | 400 palabras + 5 capturas paso a paso | 1. Crear agente → 2. Nombre → 3. Instrucciones → 4. Archivos → 5. Probar. |
| 5.7 | **Template de instrucciones para agente «Analista»** | Prompt de instrucciones listo | 200 palabras | Con variables de programa, organismos, indicadores, formato, audiencia, tono. |
| 5.8 | **Checklist de control de calidad para reportes** | Lista verificable | 8 items + campo «qué hacer si falla» (150 palabras) | Números cuadran, porcentajes suman, no hay datos inventados, formato correcto, etc. |
| 5.9 | **Template de flujo de reporte documentado (Entregable Final 1)** | Template estructurado de 2-3 páginas | 6 secciones (300 palabras de instrucción) | Ficha del reporte + 6 pasos + prompts + agente + checklist + comparativa tiempo. |
| 5.10 | **Case study card: flujo completo ejecutado** | Caso práctico demostrado | 400 palabras | Ejemplo completo: datos → análisis → formato → revisión → output final. |
| 5.11 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 5 items por columna (120 palabras) | Énfasis: «Nunca enviar reporte sin revisión humana.» |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 5.A | **Video: concepto de agentes de IA** | Video (<3 min) | Amazon / canal tech educativo | Explicación no-técnica de qué es un agente. |
| 5.B | **Lectura: gobernanza de datos en IA institucional** | Artículo (10 min) | Deloitte / EDUCAUSE | Responsabilidad sobre outputs automatizados. |
| 5.C | **Datos de ejemplo para reportes** | Excel con datos ficticios | Producción propia | Versión académica: matrícula, satisfacción. Versión administrativa: gastos, proyectos. |

---

## Nivel 6 · Atención a Stakeholders con IA
### Fase III — ACELERAR | Duración en sitio: 45–50 min | Prioridad: 🟢 Sprint 3

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 6.1 | **Concepto clave: El embudo de atención** | Texto + infografía de embudo | 150 palabras + gráfico SVG | «80% de consultas = 20 preguntas repetidas.» FAQ vs. caso individual. |
| 6.2 | **Prompt template: generar respuesta maestra** | Prompt template con variables | 180 palabras + 5 variables de personalización | Pregunta, pasos, documentos, contacto, tono. Variables: `[NOMBRE]`, `[MATERIA]`, etc. |
| 6.3 | **Demo: 1 respuesta maestra → 3 versiones personalizadas** | Texto con 3 outputs | 350 palabras | Misma respuesta base adaptada a 3 stakeholders distintos. |
| 6.4 | **Case study card: caso sensible (versión académica)** | Caso práctico | 300 palabras | Alumno en riesgo de baja por reprobación. Empático, normativo, canalizador. |
| 6.5 | **Case study card: caso sensible (versión administrativa)** | Caso práctico | 300 palabras | Empleado que reporta irregularidad. Confidencial, normativo, escalable. |
| 6.6 | **Infografía: Protocolo semáforo de uso ético** | Infografía (SVG/PNG) | 1 panel, 3 zonas | 🟢 Usar IA / 🟡 IA con supervisión / 🔴 Solo atención humana. 5 ejemplos por zona. |
| 6.7 | **Ejercicio: clasificación de solicitudes (resuelvo/delego/escalo)** | Ejercicio con 10 casos | 10 mini-casos × 30 palabras + tabla de clasificación | El participante clasifica y justifica. |
| 6.8 | **Template: Kit de 10 respuestas maestras** | Tabla con campos | 10 filas × 5 columnas (200 palabras instrucción) | Pregunta, respuesta base, variables, cuándo usar, cuándo NO usar. |
| 6.9 | **Template: Protocolo de uso IA en atención** | Documento estructurado | 1 página (250 palabras) | Cuándo sí, cuándo con precaución, cuándo nunca. Con 3 casos límite. |
| 6.10 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 4 items por columna (100 palabras) | Énfasis: «La IA no responde crisis emocionales.» |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 6.A | **Lectura: ética de IA en atención al público** | Artículo (8 min) | UNESCO / AI Ethics Guidelines | Énfasis en cuándo la intervención humana es irrenunciable. |
| 6.B | **Guía de límites éticos para comunicación asistida** | Documento (5 min) | Adaptación de normativa Anáhuac | Situaciones de crisis, salud mental, legales. |
| 6.C | **Ejemplo de banco de FAQ institucional** | Referencia | Adaptación de FAQ reales Anáhuac | 20 preguntas frecuentes como punto de partida. |

---

## Nivel 7 · Gestión de Proyectos con IA
### Fase IV — INTEGRAR | Duración en sitio: 45–50 min | Prioridad: 🟢 Sprint 4

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 7.1 | **Concepto clave: De la idea al plan en 15 minutos** | Texto motivador | 150 palabras | Escenario: visita de acreditación sin plan formal tras 4 juntas. |
| 7.2 | **Prompt template: plan de proyecto instantáneo** | Prompt template RISE | 250 palabras con 6 secciones de output | Objetivo, alcance, entregables, cronograma, riesgos, stakeholders. |
| 7.3 | **Prompt template: desglose de tareas (WBS)** | Prompt template | 150 palabras + formato tabla | Fases → tareas → subtareas → responsable → duración → dependencias. |
| 7.4 | **Prompt template: agenda pre-reunión** | Prompt template | 120 palabras | Basado en avance anterior: revisión de acuerdos, decisiones pendientes, riesgos. |
| 7.5 | **Prompt template: de notas a minuta ejecutiva** | Prompt template | 150 palabras | Notas informales → minuta formal con acuerdos, responsables, fechas. |
| 7.6 | **Template: reporte de avance tipo semáforo** | Tabla con formato 🟢🟡🔴 | 5 entregables × 4 columnas (100 palabras instrucción) | Entregable, estatus, avance %, próximos pasos. |
| 7.7 | **Demo: proyecto completo generado con IA** | Caso completo con outputs | 500 palabras | Plan + WBS + riesgos + minuta + reporte. Todo encadenado. |
| 7.8 | **Ejercicio: análisis de riesgos validado** | Ejercicio con tabla | 5 riesgos × 4 columnas + validación humana (150 palabras) | IA propone → participante valida → agrega riesgo que IA no identificó. |
| 7.9 | **Template: plan de proyecto real (Producto Integrador 7)** | Template de 3-4 páginas | 6 secciones (350 palabras instrucción) | Objetivos SMART, WBS, cronograma, riesgos, template minuta, template avance. |
| 7.10 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 4 items por columna (100 palabras) | Énfasis: «IA propone, humano dispone. Siempre valide riesgos con su experiencia.» |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 7.A | **Lectura: gestión de proyectos ágil en educación superior** | Artículo (10 min) | PMI / EDUCAUSE | Contexto universitario, no corporativo genérico. |
| 7.B | **Video: WBS explicado en 3 minutos** | Video (<3 min) | Project Management Simplified | Concepto visual de desglose de tareas. |
| 7.C | **Guía de gestión del cambio con IA** | Documento (5 min) | McKinsey / Deloitte adaptado | «¿La IA reemplaza a mi equipo?» Empatía en la transición. |
| 7.D | **Plantilla Gantt simplificada** | Template Excel/tabla | Recurso genérico adaptado | Para quienes prefieran formato visual de cronograma. |

---

## Nivel 8 · Agentes y Trabajo en Equipo Local
### Fase IV — INTEGRAR | Duración en sitio: 50–55 min | Prioridad: 🟢 Sprint 4 | ⭐ ENTREGABLE FINAL 2

### 🏭 Contenido a PRODUCIR internamente

| # | Pieza | Formato | Extensión estimada | Notas de producción |
|---|---|---|---|---|
| 8.1 | **Concepto clave: Arquitectura de agentes (1 agente = 1 función)** | Texto con diagrama | 200 palabras + diagrama SVG | Analogía: «No contrate un asistente que haga todo; contrate 3 especialistas.» |
| 8.2 | **Infografía: ecosistema de 3 agentes** | Infografía (SVG/PNG) | 1 panel, 3 agentes interconectados | Agente Analista → Agente Comunicador → Agente PM. Flujo visual. |
| 8.3 | **Guía paso a paso: configurar agente especializado** | Tutorial con capturas | 500 palabras + 6 capturas | Nombre → instrucciones RCTF → archivos de referencia → limitaciones → pruebas. |
| 8.4 | **Template de ficha técnica de agente** | Ficha por agente | 150 palabras × 3 fichas | Nombre, función, instrucciones exactas, archivos, limitaciones, output ejemplo. |
| 8.5 | **Demo: flujo multi-paso (Agente A → Agente B → Agente C)** | Caso completo documentado | 500 palabras | Datos → Análisis (Agente 1) → Formato (Agente 2) → Comunicado (Agente 3). |
| 8.6 | **Prompt template: instrucciones para 3 agentes modelo** | 3 prompts de instrucciones | 200 palabras cada uno (600 total) | Versión académica: Analista Académico, Comunicador, Asistente de Acreditación. Versión administrativa: Analista de Gestión, Comunicador Institucional, Project Manager. |
| 8.7 | **Template: flujo multi-paso documentado** | Template con diagrama | Diagrama + 3 secciones × 120 palabras | Paso → prompt exacto → output esperado → punto de intervención humana. |
| 8.8 | **Checklist de consolidación del banco de prompts** | Lista de verificación | 20 categorías × criterios (150 palabras) | Organizado por nivel y por tipo de tarea. Marco de referencia para los 20+ prompts acumulados. |
| 8.9 | **Template: Plan de adopción de IA a 90 días** | Documento ejecutivo de 2 páginas | 4 semanas × 3 columnas + secciones (400 palabras) | Quick wins, política de uso, riesgos, capacitación, métricas, gobernanza. |
| 8.10 | **Guía de gobernanza de IA para áreas universitarias** | Documento de referencia | 350 palabras | Política de uso, responsabilidades, auditoría, escalamiento. |
| 8.11 | **Reflexión final del curso** | Formulario estructurado | 150 palabras + 4 campos | «Lo más valioso fue ___. Lo aplicaré en ___. Mi primer compromiso es ___. Necesito apoyo en ___.» |
| 8.12 | **Tips y anti-patrones del nivel** | Tabla ✅/❌ | 5 items por columna (120 palabras) | Énfasis: «La IA se adopta por valor, no por decreto.» |

### 🔗 Contenido a CURAR externamente

| # | Pieza | Formato | Fuente sugerida | Notas |
|---|---|---|---|---|
| 8.A | **Video: concepto de ecosistema de agentes** | Video (<3 min) | Amazon / canal tech educativo | Qué es un agente, qué es un flujo multi-paso. No-técnico. |
| 8.B | **Lectura: política de IA institucional — casos de éxito** | Artículo (10 min) | Stanford HAI / universidades que han implementado | Ejemplos reales de adopción de IA en universidades. |
| 8.C | **Template de política de uso ético de IA** | Documento de referencia | UNESCO AI Ethics / adaptación Anáhuac | Marco para que el participante adapte a su área. |
| 8.D | **Recurso: directorio de herramientas de IA para directivos** | Lista curada | Compilación propia | Amazon Quick + 5-8 herramientas complementarias con caso de uso. |

---

## Piezas Transversales (producir en Sprint 1, usar en todos los niveles)

| # | Pieza | Formato | Extensión | Sprint |
|---|---|---|---|---|
| T.1 | **Glosario visual de IA para directivos** | Tooltip system + glosario descargable | 25 términos × 20 palabras | Sprint 1 |
| T.2 | **Barra de progreso del curso** | Componente HTML | N/A (diseño UI) | Sprint 1 |
| T.3 | **Template estándar del banco de prompts** | Tabla reutilizable | Formato unificado para los 8 niveles | Sprint 1 |
| T.4 | **Momento ético (cierre de cada nivel)** | Microcopy de reflexión | 8 reflexiones × 50 palabras | Sprints 1–4 |
| T.5 | **Transiciones entre niveles** | Microcopy de conexión | 7 transiciones × 80 palabras | Sprints 1–4 |
| T.6 | **Datos de práctica por nivel (versión académica + administrativa)** | Archivos de ejemplo | Variable por nivel | Sprints 1–4 |

---

## Matriz de Estimación de Producción

| Tipo de pieza | Cantidad total | Tiempo estimado por pieza | Tiempo total estimado |
|---|---|---|---|
| Texto conceptual (concepto clave) | 10 | 1.5 horas | 15 horas |
| Prompt templates | 18 | 1 hora | 18 horas |
| Infografías (SVG/PNG) | 7 | 3 horas | 21 horas |
| Demos con capturas simuladas | 6 | 2 horas | 12 horas |
| Case study cards | 5 | 2 horas | 10 horas |
| Ejercicios interactivos | 8 | 1.5 horas | 12 horas |
| Templates descargables | 12 | 1.5 horas | 18 horas |
| Tablas tips/anti-patrones | 8 | 0.5 horas | 4 horas |
| Tutoriales paso a paso | 3 | 3 horas | 9 horas |
| Microcopy transversal | 6 | 1 hora | 6 horas |
| **Producción interna total** | **83** | — | **≈125 horas** |
| Curación externa | 28 | 0.5 horas (búsqueda + validación) | 14 horas |
| **GRAN TOTAL** | **111** | — | **≈139 horas** |

---

*Documento de Fase 4 — Calendario de Producción de Contenido*
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
*Septiembre 2026*
