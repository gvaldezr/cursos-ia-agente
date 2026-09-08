# Templates y Configuraciones LMS — Fase 6
## Curso: IA Práctica para Líderes Anáhuac Mayab
### EdTech LMS Specialist · Construcción de Assets

> **Versión:** 1.0 | **Fecha:** 7 de septiembre de 2026
> **Plataforma de referencia:** Canvas LMS (Instructure)
> **Plataforma alternativa:** Moodle 4.x (notas de adaptación al final de cada sección)
> **Estándares cubiertos:** SCORM 2004 4th Ed., xAPI (cmi5), LTI 1.3 Advantage, Open Badges 3.0, QTI 3.0
> **Formato del curso:** Mini sitio HTML autocontenido (SPA) con integración opcional vía LTI 1.3

---

## Tabla de Contenidos

1. [Estructura del Curso en LMS](#1-estructura-del-curso-en-lms)
2. [Templates de Actividad](#2-templates-de-actividad)
3. [Configuración de Rúbricas en Plataforma](#3-configuración-de-rúbricas-en-plataforma)
4. [Learning Paths](#4-learning-paths)
5. [Paquete SCORM/xAPI](#5-paquete-scormxapi)
6. [Learning Analytics](#6-learning-analytics)
7. [Micro-credenciales (Open Badges)](#7-micro-credenciales-open-badges)
8. [Anexos Técnicos](#8-anexos-técnicos)

---

## 1. Estructura del Curso en LMS

### 1.1 Configuración General del Curso en Canvas

```yaml
Curso:
  nombre: "IA Práctica para Líderes Anáhuac Mayab"
  código: "FC-IA-2026"
  formato: Niveles (no semanas)
  navegación:
    - Inicio
    - Niveles
    - Tareas
    - Calificaciones
    - Archivos
    - Personas
    - Discusiones
    - Badges
    - Anuncios
  idioma: es-MX
  zona_horaria: America/Merida
  licencia: Privada (uso institucional)
  visibilidad: Solo participantes inscritos
  calificación:
    esquema: Porcentual (0-100)
    política_entrega_tardía: -10% por día, máximo 7 días
    reenvío: 1 reenvío por entregable, plazo 7 días adicionales
  secciones:
    - "Versión Académica"
    - "Versión Administrativa"
```

### 1.2 Página de Inicio (Home)

```
Elementos de la página de inicio:

1. Banner del curso (imagen hero con branding Anáhuac)
   - Logo Universidad Anáhuac Mayab
   - Título: "IA Práctica para Líderes Anáhuac"
   - Subtítulo: "Programa de formación en IA generativa para directivos"

2. Barra de progreso global (8 niveles)
   - Indicador visual de avance del participante

3. Mapa de badges (4 insignias)
   - 🟢 Explorador IA (Niveles 1-3)
   - 🔵 Estratega IA (Niveles 4-6)
   - 🟣 Líder IA (Niveles 7-8)
   - 🏆 Líder Digital Anáhuac (Integrador)

4. Enlace al mini sitio HTML (LTI 1.3)

5. Recursos transversales:
   - Guía de inicio rápido de Amazon Quick
   - Glosario de términos de IA
   - Protocolo ético de uso de IA (descargable)
   - Contacto del facilitador
```

### 1.3 Mapa de Niveles Detallado

---

#### Nivel 1 — Fundamentos de IA Generativa

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 1. Fundamentos de IA Generativa |
| **Descripción** | Comprenda qué es la IA generativa, identifique sus capacidades y limitaciones, y reconozca oportunidades concretas de aplicación en su gestión directiva. |
| **Prerequisito** | Ninguno |
| **Horas estimadas** | 9 h (3 contacto + 6 independiente) |
| **Competencia** | CE-1: Comprende fundamentos, capacidades y limitaciones de IA generativa |
| **Nivel Bloom** | Recordar / Comprender |
| **Fecha de disponibilidad** | Día 1 del programa |
| **Criterio de completamiento** | Completar todos los items del nivel |

**Contenido del nivel (items en Canvas):**

| # | Tipo | Nombre del item | Descripción |
|---|------|-----------------|-------------|
| 1.1 | Página | Bienvenida al Nivel 1 | Hook narrativo: "El lunes del directivo". Objetivos del nivel. |
| 1.2 | Página | ¿Qué es la IA generativa? | Concepto con analogía del asistente de recién ingreso. Infografía "IA en 60 segundos". |
| 1.3 | Página | Demostración guiada | Video/screencast: prompt vago vs. prompt estructurado en Amazon Quick. |
| 1.4 | Tarea | Ejercicio: Mi primer comunicado con IA | Práctica guiada con datos reales. Entrega: captura del prompt y output. |
| 1.5 | Página | Tips y anti-patrones | Tabla de do's & don'ts del Nivel 1. |
| 1.6 | Tarea | **Producto integrador: Mini-diagnóstico personal** | Lista de 5 tareas + reflexión escrita (3 oraciones). **Evaluable (5%).** |
| 1.7 | Página | Momento ético | Reflexión: ¿Presenta el comunicado como suyo o menciona que usó IA? |
| 1.8 | Página | Conexión con el siguiente nivel | Puente narrativo al Nivel 2. |
| 1.9 | Quiz | Autodiagnóstico M1 (no calificable) | 5 preguntas de autorreflexión (no opción múltiple). |

**Archivos del nivel:**
- `infografia_ia_60_segundos.pdf`
- `plantilla_mini_diagnostico.docx`
- `guia_rapida_amazon_quick.pdf`

---

#### Nivel 2 — Frameworks de Prompts

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 2. Diseño de Instrucciones Efectivas |
| **Descripción** | Domine 3 frameworks de prompting (RCTF, RISE, CO-STAR) para obtener resultados consistentes y de alta calidad con IA. |
| **Prerequisito** | Nivel 1 completado |
| **Horas estimadas** | 15 h (5 contacto + 10 independiente) |
| **Competencia** | CE-2: Estructura instrucciones efectivas usando frameworks probados |
| **Nivel Bloom** | Comprender / Aplicar |

**Contenido del nivel:**

| # | Tipo | Nombre del item |
|---|------|-----------------|
| 2.1 | Página | Bienvenida al Nivel 2 |
| 2.2 | Página | Framework RCTF: Rol + Contexto + Tarea + Formato |
| 2.3 | Tarea | Ejercicio: Prompt RCTF para mi tarea más frecuente |
| 2.4 | Página | Framework RISE: Rol + Input + Steps + Expectation |
| 2.5 | Tarea | Ejercicio: Prompt RISE para análisis |
| 2.6 | Página | Framework CO-STAR: Context + Objective + Style + Tone + Audience + Response |
| 2.7 | Tarea | Ejercicio: Prompt CO-STAR para comunicación |
| 2.8 | Página | Técnicas de iteración (Refina, Critica, Varía) |
| 2.9 | Tarea | **Producto integrador: 3 prompts maestros** — *Evaluable (5%)* |
| 2.10 | Página | Conexión con el siguiente nivel |

---

#### Nivel 3 — Email y Comunicados Institucionales

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 3. IA para la Comunicación Institucional |
| **Prerequisito** | Nivel 2 completado |
| **Horas estimadas** | 15 h (5 contacto + 10 independiente) |
| **Competencia** | CE-3: Produce comunicación institucional profesional con asistencia de IA |
| **Nivel Bloom** | Aplicar |

**Contenido del nivel:**

| # | Tipo | Nombre del item |
|---|------|-----------------|
| 3.1 | Página | Bienvenida al Nivel 3 |
| 3.2 | Página | Redacción desde cero con tono institucional |
| 3.3 | Tarea | Ejercicio: 3 correos en 6 minutos |
| 3.4 | Página | Revisión y mejora de borradores existentes |
| 3.5 | Tarea | Ejercicio: Comunicados por audiencia (mismo tema, 2 versiones) |
| 3.6 | Página | Respuestas a correos difíciles |
| 3.7 | Tarea | Ejercicio: Caso sensible (🎓 impugnación / 🏢 reclamo proveedor) |
| 3.8 | Foro | Discusión: Mi correo más difícil |
| 3.9 | Tarea | **Producto integrador: Kit de 5 templates** — *Evaluable OF (15%), Badge 1* |
| 3.10 | Página | Conexión con el siguiente nivel |

> **📌 Badge trigger:** Al completar M3 con ≥70% → emitir Badge 🟢 Explorador IA.

---

#### Nivel 4 — Análisis de Reportes con IA

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 4. IA para el Análisis y la Síntesis |
| **Prerequisito** | Nivel 3 completado |
| **Horas estimadas** | 15 h (5 contacto + 10 independiente) |
| **Competencia** | CE-4: Analiza reportes extrayendo insights y generando resúmenes ejecutivos verificados |
| **Nivel Bloom** | Analizar |

**Contenido del nivel:**

| # | Tipo | Nombre del item |
|---|------|-----------------|
| 4.1 | Página | Bienvenida al Nivel 4 |
| 4.2 | Página | Subir y analizar documentos en Amazon Quick |
| 4.3 | Tarea | Ejercicio: Resumen de reporte con IA |
| 4.4 | Página | Análisis de datos tabulares |
| 4.5 | Tarea | Ejercicio: Tabla semáforo de indicadores |
| 4.6 | Página | Verificación crítica: el Momento PAUS |
| 4.7 | Tarea | Ejercicio: Auditoría de análisis (detectar alucinaciones) |
| 4.8 | Tarea | **Producto integrador: Análisis ejecutivo real (1 página)** — *Evaluable FOR (10%)* |
| 4.9 | Página | Conexión con el siguiente nivel |

---

#### Nivel 5 — Automatización de Reportes

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 5. Automatización de Procesos Directivos |
| **Prerequisito** | Nivel 4 completado |
| **Horas estimadas** | 18 h (6 contacto + 12 independiente) |
| **Competencia** | CE-5: Diseña flujos de automatización para procesos recurrentes |
| **Nivel Bloom** | Analizar / Evaluar |

**Contenido del nivel:**

| # | Tipo | Nombre del item |
|---|------|-----------------|
| 5.1 | Página | Bienvenida al Nivel 5 |
| 5.2 | Página | Anatomía de un reporte recurrente |
| 5.3 | Tarea | Ejercicio: Mapeo de mi reporte |
| 5.4 | Página | Los 6 pasos del flujo IA-asistido |
| 5.5 | Tarea | Ejercicio: Diseñar prompts de análisis y formato |
| 5.6 | Página | Introducción a agentes de Amazon Quick |
| 5.7 | Tarea | Ejercicio: Crear agente "Analista de mi área" |
| 5.8 | Página | Semáforo ético: 10 escenarios |
| 5.9 | Tarea | Ejercicio: Clasificación ética con justificación |
| 5.10 | Tarea | **⭐ Entregable final #1: Flujo de reporte documentado** — *Evaluable OF (15%), Badge 2* |
| 5.11 | Página | Conexión con el siguiente nivel |

---

#### Nivel 6 — Atención a Stakeholders con IA

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 6. Comunicación Estratégica con Stakeholders |
| **Prerequisito** | Nivel 5 completado |
| **Horas estimadas** | 15 h (5 contacto + 10 independiente) |
| **Competencia** | CE-6 (parcial): Evalúa críticamente respuestas de IA |
| **Nivel Bloom** | Aplicar / Evaluar |

**Contenido del nivel:**

| # | Tipo | Nombre del item |
|---|------|-----------------|
| 6.1 | Página | Bienvenida al Nivel 6 |
| 6.2 | Página | El embudo de atención: mis 10 preguntas más frecuentes |
| 6.3 | Tarea | Ejercicio: Generar 5 respuestas maestras |
| 6.4 | Página | Manejo de casos sensibles |
| 6.5 | Tarea | Ejercicio: Caso alumno en riesgo / empleado reporta irregularidad |
| 6.6 | Página | Límites éticos: cuándo NO usar IA |
| 6.7 | Tarea | Ejercicio: Clasificación inteligente de solicitudes |
| 6.8 | Foro | Discusión: Mi límite ético más difícil |
| 6.9 | Tarea | **Producto integrador: Kit de atención (10 respuestas + protocolo)** — *Evaluable OF (15%), Badge 2* |
| 6.10 | Página | Conexión con el siguiente nivel |

> **📌 Badge trigger:** Al completar M6 con ≥70% en Bloque 2 + flujo de reporte ⭐ "Competente" → emitir Badge 🔵 Estratega IA.

---

#### Nivel 7 — Gestión de Proyectos con IA

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 7. Gestión de Proyectos con IA |
| **Prerequisito** | Nivel 6 completado |
| **Horas estimadas** | 15 h (5 contacto + 10 independiente) |
| **Competencia** | CE-7: Gestiona proyectos con asistencia de IA |
| **Nivel Bloom** | Evaluar / Crear |

**Contenido del nivel:**

| # | Tipo | Nombre del item |
|---|------|-----------------|
| 7.1 | Página | Bienvenida al Nivel 7 |
| 7.2 | Página | De la idea al plan estructurado |
| 7.3 | Tarea | Ejercicio: Plan de proyecto instantáneo |
| 7.4 | Página | Desglose de tareas (WBS) |
| 7.5 | Tarea | Ejercicio: WBS con ruta crítica |
| 7.6 | Página | Minutas inteligentes y seguimiento |
| 7.7 | Tarea | Ejercicio: De notas a minuta formal |
| 7.8 | Tarea | Ejercicio: Reporte de avance semáforo |
| 7.9 | Tarea | **Producto integrador: Plan de proyecto real** — *Evaluable FOR+OF (10%)* |
| 7.10 | Página | Conexión con el siguiente nivel |

---

#### Nivel 8 — Agentes y Trabajo en Equipo Local

| Campo | Detalle |
|-------|---------|
| **Nombre en Canvas** | Nivel 8. Su Ecosistema de IA Personal |
| **Prerequisito** | Nivel 7 completado |
| **Horas estimadas** | 18 h (6 contacto + 12 independiente) |
| **Competencia** | CE-8: Crea ecosistema personalizado de agentes y lidera adopción |
| **Nivel Bloom** | Crear |

**Contenido del nivel:**

| # | Tipo | Nombre del item |
|---|------|-----------------|
| 8.1 | Página | Bienvenida al Nivel 8 |
| 8.2 | Página | Diseño de 3 agentes complementarios |
| 8.3 | Tarea | Ejercicio: Configurar agente #1 |
| 8.4 | Tarea | Ejercicio: Configurar agente #2 |
| 8.5 | Tarea | Ejercicio: Configurar agente #3 |
| 8.6 | Página | Flujos multi-paso con agentes |
| 8.7 | Tarea | Ejercicio: Flujo de 3 pasos ejecutado |
| 8.8 | Página | Gobernanza y plan de adopción |
| 8.9 | Tarea | Ejercicio: Plan de adopción personal |
| 8.10 | Foro | Discusión de cierre: Mi compromiso con IA |
| 8.11 | Tarea | **⭐ Entregable final #2: Ecosistema de IA personal** — *Evaluable OF (25%), Badge 3 + Badge Final* |
| 8.12 | Página | Cierre del curso y reflexión final |

> **📌 Badge trigger:** Al completar M8 con ≥70% en Bloque 3 + ecosistema ⭐ "Competente" → emitir Badge 🟣 Líder IA.
> **📌 Badge integrador:** Al tener los 3 badges + ambos ⭐ "Competente" + ≥70% global → emitir Badge 🏆 Líder Digital Anáhuac.

---

### 1.4 Adaptación para Moodle 4.x

| Canvas | Moodle 4.x equivalente |
|--------|------------------------|
| Niveles | Secciones con restricciones de acceso |
| Páginas | Etiquetas o recursos Página |
| Tareas | Actividad Tarea con rúbrica |
| Foros de discusión | Actividad Foro |
| Quizzes | Actividad Cuestionario |
| Requisitos de completamiento | Restricciones de acceso + Rastreo de finalización |
| Secciones (Versiones) | Grupos separados (Académica / Administrativa) |
| Rúbricas | Guías de evaluación avanzada |
| Badges | Insignias nativas de Moodle (compatible Open Badges) |
| LTI 1.3 | Herramienta externa (LTI Advantage) |

---

## 2. Templates de Actividad

### 2.1 Template: Ejercicio Práctico con Prompt

```markdown
# [NOMBRE DEL EJERCICIO]
## Nivel [N] · [Título del nivel]

### 🎯 Objetivo
[Descripción breve de qué competencia se practica]

### ⏱ Tiempo estimado
[10-20 minutos]

### 📋 Instrucciones

1. Abra Amazon Quick en su navegador.
2. [Paso específico del ejercicio]
3. Copie el siguiente prompt y reemplace los valores entre corchetes
   con datos REALES de su área:

[PROMPT COMPLETO CON VARIABLES]

4. Ejecute el prompt y revise el resultado.
5. Si el resultado no es satisfactorio, itere: ajuste [elemento específico].
6. Guarde el prompt final y el output generado.

### 📊 Datos de práctica (si no tiene los propios)
- [Dato de ejemplo 1]
- [Dato de ejemplo 2]
- [Dato de ejemplo 3]

### 📎 Formato de entrega
- Archivo Word, PDF o Markdown con:
  - El prompt utilizado (versión final)
  - El output generado por la IA
  - Nota breve: ¿Qué ajustaría del resultado? (2-3 líneas)

### 📐 Rúbrica inline

| Criterio | Básico | Competente | Destacado |
|----------|--------|------------|-----------|
| Estructura del prompt | Falta contexto o especificaciones | RCTF completo, variables personalizadas | RCTF + iteración documentada + anti-hallucination cues |
| Calidad del output | Genérico, requiere edición mayor | Funcional, edición menor | Profesional, listo para usar |
| Reflexión | Sin reflexión o genérica | Identifica 1 ajuste específico | Documenta proceso de iteración completo |

### ⚠️ Notas importantes
- Use datos reales siempre que sea posible.
- NUNCA envíe un output de IA sin revisarlo.
- Guarde sus mejores prompts — los reutilizará en niveles posteriores.

### 🔗 Diferencia por versión
- 🎓 **Académica:** [Contexto académico del ejercicio]
- 🏢 **Administrativa:** [Contexto administrativo del ejercicio]
```

---

### 2.2 Template: Foro de Discusión

```markdown
# [TÍTULO DEL FORO]
## Nivel [N] · Discusión

### 📌 Prompt de apertura

> [Pregunta o escenario que invita a la reflexión. Debe ser situado
> en el contexto del directivo universitario.]

### 📋 Criterios de participación

1. **Publicación inicial** (obligatoria):
   - Extensión: 150-300 palabras
   - Debe incluir un ejemplo REAL de su experiencia
   - Plazo: dentro de los primeros 7 días del nivel

2. **Respuesta a un compañero** (obligatoria):
   - Extensión: 75-150 palabras
   - Debe aportar una perspectiva diferente o complementaria
   - Plazo: dentro de los primeros 10 días del nivel

3. **Tono:** formal (usted), respetuoso, constructivo
4. **Confidencialidad:** NO incluir nombres reales de alumnos, docentes o colaboradores

### 📐 Criterios de evaluación (formativa)

| Aspecto | No cumple | Cumple | Destaca |
|---------|-----------|--------|---------|
| Relevancia | Ejemplo genérico | Ejemplo real de su gestión | Ejemplo real + análisis de implicaciones |
| Profundidad | Observación superficial | Reflexión con matiz | Reflexión conectada con principios éticos |
| Interacción | No responde a nadie | Responde con aportación | Genera diálogo significativo con ≥2 participantes |
```

---

### 2.3 Template: Tarea Integradora

```markdown
# [NOMBRE DEL PRODUCTO INTEGRADOR]
## Nivel [N] · Entregable [formativo/evaluable]

### 🎯 Descripción
[Párrafo que describe el producto, su propósito y cómo se conecta
con la competencia del nivel]

### 📋 Brief del entregable

| Elemento | Detalle |
|----------|---------|
| **Qué entregar** | [Descripción concisa] |
| **Formato** | Word, PDF o Markdown |
| **Extensión** | [Especificar] |
| **Plazo** | [N] días desde la liberación del nivel |
| **Reenvío** | 1 reenvío dentro de 7 días adicionales |
| **Peso** | [N]% de la calificación final |

### 📐 Rúbrica de evaluación
[Rúbrica completa del nivel correspondiente — ver Sección 3]

### 📎 Componentes del entregable
1. [Componente 1 con instrucciones específicas]
2. [Componente 2]
3. [Componente 3]
4. Prompts utilizados (obligatorio)
5. Reflexión breve (si aplica)

### 🔄 Variación DUA (Diseño Universal)
El participante puede entregar en cualquiera de estos formatos:
- 📝 Documento escrito (Word/PDF/Markdown)
- 🎨 Presentación visual (PPT de máximo N slides)
- 🎙 Audio-nota explicativa (máximo N minutos) + documento complementario

### ✅ Checklist antes de entregar
- [ ] ¿Usé datos reales de mi área (o los datos de práctica)?
- [ ] ¿Incluí los prompts que utilicé?
- [ ] ¿Revisé el output de IA antes de incluirlo?
- [ ] ¿El entregable es usable en mi trabajo real?
- [ ] ¿Respeté la confidencialidad de datos sensibles?

### 🎓/🏢 Diferencia por versión
- **Académica:** [Contexto diferenciado]
- **Administrativa:** [Contexto diferenciado]
```

---

### 2.4 Template: Quiz de Autodiagnóstico

```markdown
# Autodiagnóstico · Nivel [N]
## (No calificable — Assessment AS Learning)

### 📌 Propósito
Este autodiagnóstico le ayuda a identificar qué tan preparado se siente para
avanzar al siguiente nivel. No tiene calificación ni afecta su nota.

### Formato: Escala Likert (1-5) + pregunta abierta | 5 minutos | Ilimitados intentos

### Preguntas modelo

P1. Después de completar este nivel, ¿qué tan confiado se siente para
[COMPETENCIA DEL MÓDULO] sin ayuda adicional? (1-5)

P2. ¿Podría explicar a un colega [CONCEPTO CLAVE] en sus propias palabras? (1-5)

P3. ¿Ha aplicado lo aprendido en una tarea REAL de su trabajo esta semana?
- Sí, con buen resultado / Sí, con resultado parcial / No, sin oportunidad / No, no preparado

P4-P5. [Preguntas específicas del nivel]

P6 (abierta). ¿Qué le gustaría entender mejor antes de avanzar? (máx. 100 palabras)

### Retroalimentación automática

| Puntaje | Mensaje |
|---------|---------|
| 4.0-5.0 | "Excelente. Está listo para avanzar al siguiente nivel." |
| 3.0-3.9 | "Buen progreso. Considere repasar [sección específica]." |
| 1.0-2.9 | "Le sugerimos revisar el nivel nuevamente. Contacte al facilitador." |
```

> **Nota Moodle:** Configurar como Cuestionario con calificación oculta, retroalimentación inmediata, intentos ilimitados.

---

## 3. Configuración de Rúbricas en Plataforma

### 3.1 Formato de Importación Canvas

Canvas permite importar rúbricas vía API o manualmente. Escala: 3 niveles — Básico (50 pts) / Competente (80 pts) / Destacado (100 pts).

---

### Rúbrica M1 — Mini-diagnóstico personal (5%)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| **Identificación de oportunidades** | 40% | 5 tareas genéricas sin conexión con su rol | 5 tareas específicas de su cargo, ≥3 viables con IA | 5 tareas priorizadas por impacto + estimación de tiempo |
| **Comprensión capacidades/limitaciones** | 35% | Menciona capacidades pero no limitaciones concretas | Distingue claramente con riesgo específico de su área | Matiz: capacidades con condiciones + consecuencia institucional |
| **Calidad de la reflexión** | 25% | 3 oraciones vagas o repetitivas | 3 oraciones específicas con comprensión aplicada | Pensamiento crítico más allá del nivel; insight original |

---

### Rúbrica M2 — 3 Prompts Maestros (5%)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| ⚡ **Estructura RCTF** | 35% | Sin estructura; faltan 2+ elementos | Los 3 incluyen 4 elementos RCTF; tarea clara | Refinamiento avanzado: restricciones, anti-hallucination, few-shot |
| **Relevancia contextual** | 30% | Genéricos, de cualquier persona | Específicos del cargo y área con datos reales | Listos para producción; explica cuándo/con quién usar |
| **Calidad del output** | 20% | Genéricos; sin edición posterior | Funcionales con edición menor; identifica qué cambiaría | Directamente usables; iteraciones documentadas (mín. 2) |
| **Autocrítica** | 15% | Calificación inconsistente con calidad real | Razonable, justificada; 1 aspecto a mejorar por prompt | Coincide con evaluador (±1); plan de mejora específico |

---

### Rúbrica M3 — Kit de 5 Templates + Caso Difícil (15%, Badge 🟢)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| ⚡ **Calidad del prompt** | 25% | Mínimos sin estructura | Documentados con contexto, audiencia, tono, formato | Técnicas avanzadas: condiciones, variables, adaptación |
| ⚡ **Pertinencia del output** | 25% | Genéricos, no reflejan Anáhuac | Específicos del contexto institucional; tono correcto | Producción sin edición; variables claramente marcadas |
| **Caso difícil** | 30% | Genérico o evasivo | Equilibra empatía + firmeza; identifica lo sensible | Juicio directivo maduro; incorpora lo que IA no sabe |
| **Diversidad** | 20% | Escenarios similares | ≥3 tipos de comunicación + ≥2 audiencias | Kit completo del cargo; variaciones urgencia/formalidad |

---

### Rúbrica M4 — Dictamen + Análisis Ejecutivo (10%)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| ⚡ **Detección de errores** | 35% | No identificó errores o todo marcado 🟢 | ≥2 errores verificables con justificación específica | 3+ errores, clasificación >80% precisa, explicó patrón |
| ⚡ **Pensamiento crítico** | 30% | Justificaciones genéricas | Específicas con fuente de verificación; decisión coherente | Sistema de verificación propio; protocolo reutilizable |
| **Calidad del análisis** | 20% | Copia literal del output | Integra datos reales verificados; conclusiones coherentes | Superior al output crudo; presentable a su jefe |
| **Reflexión sobre confianza** | 15% | Genérica ("hay que tener cuidado") | Regla personal concreta sobre cuándo confiar/desconfiar | Framework personal de verificación aplicado a su trabajo |

---

### Rúbrica M5 — Semáforo Ético + Flujo de Reporte ⭐ (15%, Badge 🔵)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| **Juicio ético** | 25% | Inconsistente o sin justificación | Coherente; difiere de IA en ≥2 escenarios con argumento | Criterio institucional maduro; zonas grises con matiz |
| ⚡ **Diseño del flujo** | 35% | <3 pasos o vagos | 5-6 pasos claros; prompts exactos; checklist humano | Replicable por tercero; diagrama visual; manejo excepciones |
| **Prompts del flujo** | 20% | Genéricos, sin frameworks | RCTF secuenciados; output alimenta siguiente paso | Cadena optimizada; prompts de verificación incluidos |
| **Checklist** | 20% | Genérico ("revisar") | ≥5 puntos específicos al contexto del reporte | Calibrado con errores reales encontrados; preventivo |

---

### Rúbrica M6 — Kit de Atención + Flujo Integrado (15%, Badge 🔵)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| ⚡ **Calidad del kit** | 30% | Genéricas; <8 respuestas; sin variables | 10 específicas del área con variables marcadas | Sistema completo: variaciones tono, protocolo ético realista |
| **Encadenamiento multi-paso** | 35% | Tareas aisladas sin conexión | ≥3 pasos encadenados; output→input; resultado completo | 4+ pasos con decisión humana; documenta tiempo ahorrado |
| **Protocolo de escalamiento** | 20% | Sin protocolo o vago | ≥3 categorías (IA / IA+reviso / humano) con criterios | Árbol de decisión con urgencia, sensibilidad, precedente |
| **Sensibilidad en casos** | 15% | Respuestas robóticas | Edición significativa del output; ajuste tono/contexto | Artesanía directiva: combina IA con juicio + precedentes |

---

### Rúbrica M7 — Agente + Ficha + Plan de Proyecto (10%)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| ⚡ **Agente funcional** | 30% | Instrucciones genéricas; sin documentos; no probado | Nombre descriptivo, RCTF, ≥1 documento, probado con 3 consultas | Optimizado tras iteración; limitaciones documentadas |
| **Ficha técnica** | 25% | Sin ficha o párrafo vago | Nombre, propósito, instrucciones, docs, ≥3 limitaciones, protocolo | Manual completo: ejemplos que funcionan/no, mantenimiento |
| **Plan de proyecto** | 25% | Genérico sin fechas ni responsables | SMART, WBS ≥3 fases, responsables, calendario, ≥3 riesgos | Ejecutable; dependencias; template minuta; probado en reunión |
| **Contexto institucional** | 20% | Sin perfil o copia sin personalizar | Cargo, área, poblaciones, estilo, prioridades; con/sin demo | Refinado y probado: múltiples contextos situacionales |

---

### Rúbrica M8 — Ecosistema IA ⭐ + Plan Adopción (25%, Badge 🟣 + 🏆)

| Criterio | Peso | Básico (50) | Competente (80) | Destacado (100) |
|----------|------|-------------|-----------------|-----------------|
| ⚡ **3 agentes** | 25% | <3 o redundantes; sin documentar | 3 diferenciados por función; instrucciones + docs + ficha | Sistema cohesivo: output de uno → input de otro |
| ⚡ **Flujo multi-paso** | 25% | Conceptual o <2 pasos | 3+ pasos ejecutados; outputs documentados; intervención humana | Ejecutado Y refinado; comparativa calidad; usado en trabajo real |
| ⚡ **Banco de prompts (20+)** | 25% | <15 prompts o sin organización | 20+ organizados por categoría; ≥10 personalizados | 25+ como manual operativo; índice por frecuencia; lecciones aprendidas |
| **Plan de adopción** | 25% | Genérico sin acciones concretas | 4 semanas detalladas; tareas; criterios; ≥1 restricción ética | Presentable a director; cronograma 90 días; métricas; capacitación equipo |

### 3.2 Regla de Dimensiones Críticas (⚡)

- Si CUALQUIER dimensión ⚡ queda en "Básico" → el entregable **NO aprueba** independientemente del puntaje total.
- **Canvas:** Usar "Use this criterion for scoring" + nota manual del evaluador.
- **Moodle:** Usar "Guía de evaluación avanzada" con niveles mínimos.

### 3.3 Escala de Conversión

| Nivel | Puntos | Porcentaje de la dimensión |
|-------|--------|----------------------------|
| Básico | 1 | 50% |
| Competente | 2 | 80% |
| Destacado | 3 | 100% |

---

## 4. Learning Paths

### 4.1 Seriación Obligatoria (Ambas Versiones)

```yaml
Seriación: Obligatoria y lineal

Nivel 1: disponible Día 1, prerequisito: ninguno
Nivel 2: prerequisito: M1 completado al 100%
Nivel 3: prerequisito: M2 completado al 100%
Nivel 4: prerequisito: M3 completado al 100%
Nivel 5: prerequisito: M4 completado al 100% [Entregable final #1]
Nivel 6: prerequisito: M5 completado al 100%
Nivel 7: prerequisito: M6 completado al 100%
Nivel 8: prerequisito: M7 completado al 100% [Entregable final #2]
```

### 4.2 Diferenciación Académica / Administrativa

- **Canvas:** Secciones (Sections). Ejercicios diferenciados con "Assign to" → sección.
- **Moodle:** Grupos con restricciones de acceso basadas en grupo.

### 4.3 Criterios de Completamiento del Curso

```yaml
Completamiento:
  - Todos los niveles (1-8) completados
  - Calificación global ≥ 70%
  - Entregable final #1 (flujo): "Competente" o superior
  - Entregable final #2 (ecosistema): "Competente" o superior

Acreditación:
  - Constancia de Formación Continua con valor curricular
  - Universidad Anáhuac Mayab
  - 6.5 créditos SATCA | 120 horas

Niveles de logro:
  - Destacado: ≥ 90%
  - Competente: 70% - 89% (ACREDITA)
  - En desarrollo: 60% - 69% (NO acredita)
  - No acreditado: < 60%
```

### 4.4 Implementación Canvas

```
Para cada nivel:
1. Niveles → "..." → Edit
2. Prerequisites: seleccionar nivel anterior
3. Requirement: "Complete all requirements"
4. Marcar: "Students must complete all requirements before unlock"
```

### 4.5 Implementación Moodle

```
1. Activar "Rastreo de finalización" a nivel de curso
2. En cada actividad: Finalización → "Debe ver/completar esta actividad"
3. En cada sección: Restricciones de acceso →
   "Finalización de actividad" → actividades de sección anterior
```

---

## 5. Paquete SCORM/xAPI

### 5.1 Escenario A: Mini Sitio como SCORM 2004

Si el mini sitio se distribuye como paquete SCORM 2004 (4th Edition) dentro del LMS:

**Datos a reportar:**

```javascript
// Estado de completamiento
cmi.completion_status = "completed" | "incomplete" | "not attempted"

// Puntuación
cmi.score.raw = 85
cmi.score.min = 0
cmi.score.max = 100
cmi.score.scaled = 0.85

// Tiempo
cmi.session_time = "PT45M30S"  // ISO 8601
cmi.total_time = "PT3H15M"

// Progreso
cmi.progress_measure = 0.375  // 3 de 8 niveles

// Objetivos por nivel
cmi.objectives.0.id = "modulo_1"
cmi.objectives.0.completion_status = "completed"
cmi.objectives.0.score.scaled = 0.85
```

**Estructura del paquete:**

```
imsmanifest.xml
├── content/
│   ├── index.html          ← SPA principal
│   ├── css/
│   ├── js/
│   │   ├── app.js
│   │   └── scorm_api.js    ← Wrapper SCORM 2004
│   └── assets/
└── schema/
```

### 5.2 Escenario B: Mini Sitio con xAPI (Recomendado)

xAPI es la opción **recomendada** por su mayor granularidad. El mini sitio envía statements directamente al LRS.

**Statements xAPI principales:**

```json
// 1. Inició nivel
{
  "actor": { "mbox": "mailto:participante@anahuac.mx" },
  "verb": { "id": "http://adlnet.gov/expapi/verbs/launched", "display": {"es": "inició"} },
  "object": { "id": "https://anahuacmayab.mx/cursos/ia-lideres/modulo/1" }
}

// 2. Progresó
{
  "verb": { "id": "http://adlnet.gov/expapi/verbs/progressed" },
  "result": { "extensions": { "progress": 62 } }
}

// 3. Completó nivel
{
  "verb": { "id": "http://adlnet.gov/expapi/verbs/completed" },
  "result": { "completion": true, "duration": "PT45M", "score": {"scaled": 0.85} }
}

// 4. Obtuvo badge
{
  "verb": { "id": "http://adlnet.gov/expapi/verbs/earned" },
  "object": { "id": "urn:uuid:anahuac-mayab:ia-lideres:fundamentos-v1" }
}

// 5. Ejecutó prompt (engagement con IA)
{
  "verb": { "id": "https://w3id.org/xapi/acrossx/verbs/composed", "display": {"es": "compuso instrucción"} },
  "result": { "duration": "PT8M30S", "extensions": { "framework_used": "RCTF", "iteration_count": 2 } }
}
```

**LRS recomendado:**

| Opción | Tipo | Notas |
|--------|------|-------|
| **Learning Locker** | Open source | Gratuito; requiere mantenimiento |
| **Watershed** (Rustici) | SaaS | Integración nativa con Canvas |
| **Yet Analytics** | SaaS | Buenos dashboards |

### 5.3 Integración LTI 1.3

Si el mini sitio se embebe en el LMS vía LTI 1.3 Advantage:

```yaml
Configuración LTI 1.3:
  nombre: "IA Práctica para Líderes — Mini Sitio"
  servicios:
    - Assignment and Grade Services (AGS): calificaciones → gradebook
    - Names and Role Provisioning (NRPS): identificar participante y sección
    - Deep Linking: insertar niveles específicos como tareas
  
  parámetros_custom:
    custom_version: "academica" | "administrativa"
    custom_modulo: "1" ... "8"
  
  seguridad:
    método: RS256
    issuer: "https://canvas.anahuacmayab.mx"
```

---

## 6. Learning Analytics

### 6.1 KPIs del Curso

| KPI | Definición | Meta | Fuente |
|-----|-----------|------|--------|
| **Completion rate** | % que completa los 8 niveles | ≥ 70% | Canvas |
| **Time-on-task** | Tiempo promedio por nivel | Rango por nivel | xAPI |
| **Engagement con prompts** | # de prompts ejecutados | ≥ 30 acumulados | xAPI |
| **Tasa de iteración** | Promedio intentos por ejercicio | 2-3 | xAPI |
| **Calificación promedio** | Puntaje medio de entregables | ≥ 70% | Canvas |
| **Tasa de reenvío** | % entregables reenviados | < 20% | Canvas |
| **NPS** | Net Promoter Score | ≥ 50 | Encuesta |
| **Adopción real (30d)** | % usa IA ≥ 3x/semana | ≥ 60% | Encuesta |
| **Horas ahorradas** | Horas/semana ahorradas | ≥ 3 hrs | Encuesta |
| **Badge completion** | % que obtiene cada badge | 🟢≥80% 🔵≥70% 🟣≥65% 🏆≥60% | Badges |

### 6.2 Alertas Tempranas

| Alerta | Condición | Acción |
|--------|-----------|--------|
| 🔴 **Inactivo** | Sin acceso ≥7 días | Email + contacto facilitador |
| 🟡 **Rezagado** | ≥2 niveles de retraso | Notificación + email motivación |
| 🟡 **Bajo engagement** | <5 prompts en M1-M3 | Tutoría individual sugerida |
| 🔴 **Sin entrega** | Plazo vencido | Recordatorio + extensión 48h |
| 🟡 **En Básico** | Dimensión ⚡ "Básico" | Retroalimentación + invitar reenvío |
| 🟢 **Destacado** | ≥3 niveles "Destacado" | Candidato a mentor peer |

### 6.3 Dashboard del Administrador

**Vista 1 — Progreso Global (funnel de completamiento por nivel)**
**Vista 2 — Badges Emitidos (conteo y % por cada insignia)**
**Vista 3 — Comparativa por Versión (Académica vs. Administrativa)**
**Vista 4 — Alertas activas (participantes que requieren intervención)**

### 6.4 Implementación

- **Canvas:** Canvas Analytics nativo + Canvas Data 2 para BI avanzado
- **Moodle:** Plugin Analytics nativo + IntelliBoard/Edwiser Reports
- **xAPI:** Logstore xAPI (Moodle) o Watershed (Canvas) → dashboards Tableau/Power BI

---

## 7. Micro-credenciales (Open Badges)

### 7.1 Sistema de 4 Badges

| Badge | Nombre | Niveles | Prerequisito | Vigencia |
|-------|--------|---------|--------------|----------|
| 🟢 | Explorador IA | 1-3 | Ninguno | 3 años |
| 🔵 | Estratega IA | 4-6 | Badge 🟢 | 3 años |
| 🟣 | Líder IA | 7-8 | Badge 🔵 | 3 años |
| 🏆 | Líder Digital Anáhuac | 1-8 | 3 badges anteriores | 3 años |

### 7.2 Metadatos Open Badges v3 (JSON-LD)

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "id": "urn:uuid:anahuac-mayab:ia-lideres:fundamentos-v1:2026-001",
  "type": ["VerifiableCredential", "OpenBadgeCredential"],
  "name": "Explorador IA",
  "issuer": {
    "id": "https://anahuacmayab.mx/credentials/issuer",
    "type": "Profile",
    "name": "Universidad Anáhuac Mayab — Centro de Educación Continua",
    "url": "https://www.anahuacmayab.mx",
    "image": "https://anahuacmayab.mx/assets/logo-ec.png",
    "email": "educacion.continua@anahuac.mx"
  },
  "validFrom": "2026-10-15T00:00:00-06:00",
  "validUntil": "2029-10-15T00:00:00-06:00",
  "credentialSubject": {
    "type": "AchievementSubject",
    "achievement": {
      "id": "urn:uuid:anahuac-mayab:ia-lideres:fundamentos-v1",
      "type": "Achievement",
      "name": "Explorador IA",
      "description": "El titular demuestra competencia en comprensión de IA generativa, prompting estructurado (RCTF), producción de comunicación institucional con IA, y conciencia de limitaciones. Programa de 9 horas con evaluación por desempeño auténtico.",
      "criteria": {
        "id": "https://anahuacmayab.mx/credentials/criteria/fundamentos-ia",
        "narrative": "Completar niveles 1-3 con ≥70% y entregables 'Competente' o superior en todas las dimensiones críticas."
      },
      "alignment": [
        {
          "type": "Alignment",
          "targetName": "DigComp 2.2 — 1.1: Navegación, búsqueda y filtrado",
          "targetUrl": "https://publications.jrc.ec.europa.eu/repository/handle/JRC128415",
          "targetFramework": "DigComp 2.2"
        },
        {
          "type": "Alignment",
          "targetName": "DigComp 2.2 — 2.1: Interacción a través de tecnologías",
          "targetUrl": "https://publications.jrc.ec.europa.eu/repository/handle/JRC128415",
          "targetFramework": "DigComp 2.2"
        },
        {
          "type": "Alignment",
          "targetName": "DigComp 2.2 — 3.1: Desarrollo de contenidos digitales",
          "targetUrl": "https://publications.jrc.ec.europa.eu/repository/handle/JRC128415",
          "targetFramework": "DigComp 2.2"
        },
        {
          "type": "Alignment",
          "targetName": "SFIA 9 — AUTY Level 3",
          "targetUrl": "https://sfia-online.org/en/sfia-9",
          "targetFramework": "SFIA 9"
        },
        {
          "type": "Alignment",
          "targetName": "UNESCO ICT-CFT v3 — Adquisición / Aplicación",
          "targetUrl": "https://unesdoc.unesco.org/ark:/48223/pf0000265721",
          "targetFramework": "UNESCO ICT Competency Framework for Teachers v3"
        }
      ],
      "tag": ["IA-generativa", "prompting", "comunicacion-institucional", "gestion-universitaria", "anahuac-mayab"]
    }
  },
  "evidence": [
    {
      "id": "urn:uuid:evidence:portfolio-bloque1",
      "type": "Evidence",
      "name": "Portafolio Bloque 1 — Explorador IA",
      "description": "Mini-diagnóstico, 3 prompts maestros, 5 templates de comunicación, caso difícil resuelto."
    }
  ]
}
```

### 7.3 Plataforma de Emisión

| Opción | Pros | Contras | Recomendación |
|--------|------|---------|---------------|
| **Canvas Badges** | Integrado; sin costo | No OB 3.0 completo | ✅ Piloto |
| **Badgr** | OB 3.0; integración Canvas; gratuito base | Pro es pago | ✅ **Recomendado** |
| **Credly** | Verificación robusta; LinkedIn | Costo por badge | Escala institucional |
| **Moodle Badges** | Gratuito; integrado; OB 2.0 | No OB 3.0 | ✅ Para Moodle |

### 7.4 Stackability

```
               🏆 LÍDER DIGITAL ANÁHUAC
               Constancia de Formación Continua
               6.5 créditos SATCA | 120 horas
               = 🟢 + 🔵 + 🟣 + 2 entregables ⭐
                          │
            ┌──────────────┼──────────────┐
            │              │              │
     🟢 FUNDAMENTOS   🔵 IA APLICADA   🟣 LÍDER IA
     Niveles 1-3      Niveles 4-6      Niveles 7-8
     DigComp 1-3      DigComp 1-4      DigComp 5
     SFIA Level 3     SFIA Level 4     SFIA Level 5
     
     Cada badge tiene valor independiente.
     Para 🏆 se requieren los 3 + ambos ⭐.
```

### 7.5 Vigencia y Renovación

| Badge | Vigencia | Renovación |
|-------|----------|------------|
| 🟢 | 3 años | 5 prompts nuevos documentados |
| 🔵 | 3 años | Flujo actualizado + 1 nuevo flujo |
| 🟣 | 3 años | Ecosistema actualizado + capacitación a 1+ persona |
| 🏆 | 3 años | Renovación de los 3 badges componentes |

---

## 8. Anexos Técnicos

### 8.1 Exportación de Rúbricas CSV (para importación Canvas)

```csv
"Criterio","Básico (50)","Competente (80)","Destacado (100)"
"Identificación de oportunidades (40%)","5 tareas genéricas","5 tareas específicas, ≥3 viables con IA","5 priorizadas + estimación tiempo"
"Comprensión capacidades/limitaciones (35%)","Menciona capacidades, no limitaciones","Distingue con riesgo específico","Matiz + consecuencia institucional"
"Calidad reflexión (25%)","Vagas o repetitivas","Específicas con comprensión aplicada","Insight original más allá del nivel"
```

### 8.2 Checklist de Implementación

**Configuración del LMS:**
- [ ] Curso creado con nombre y código correctos
- [ ] 2 secciones configuradas (Académica / Administrativa)
- [ ] 8 niveles creados con prerequisitos de seriación
- [ ] Página de inicio con banner, mapa de badges y enlace al mini sitio
- [ ] Navegación configurada

**Contenido:**
- [ ] Todas las páginas cargadas (8 niveles × ~10 items)
- [ ] Archivos descargables subidos
- [ ] Imágenes hero con branding Anáhuac

**Actividades:**
- [ ] Tareas creadas con rúbricas vinculadas
- [ ] Foros configurados con prompts de apertura
- [ ] Quizzes de autodiagnóstico (no calificables)
- [ ] Entregables finales (⭐) marcados

**Evaluación:**
- [ ] Rúbricas importadas y vinculadas
- [ ] Categorías: Bloque 1 (25%), Bloque 2 (40%), Bloque 3 (35%)
- [ ] Política tardía: -10%/día, máx. 7 días
- [ ] Política reenvío: 1 reenvío, 7 días

**Badges:**
- [ ] 4 badges diseñados (PNG 600×600px, branding Anáhuac)
- [ ] Configurados en Badgr/Moodle con criterios de emisión
- [ ] Reglas automáticas probadas

**Integración:**
- [ ] Mini sitio como LTI 1.3 (si aplica)
- [ ] LRS configurado para xAPI (si aplica)
- [ ] Encuesta de satisfacción vinculada al cierre

**Pruebas:**
- [ ] Recorrido completo como estudiante de prueba
- [ ] Seriación verificada (M2 bloqueado sin M1)
- [ ] Diferenciación por sección verificada
- [ ] Rúbricas visibles para el estudiante
- [ ] Badges emitidos al cumplir criterios
- [ ] Responsivo: funcional en tablet y móvil

---

*Documento generado como parte de la Fase 6 — Construcción de Assets del curso "IA Práctica para Líderes Anáhuac Mayab".*
*Plataforma de referencia: Canvas LMS. Estándares: SCORM 2004, xAPI/cmi5, LTI 1.3 Advantage, Open Badges 3.0.*
*Universidad Anáhuac Mayab — Septiembre 2026*