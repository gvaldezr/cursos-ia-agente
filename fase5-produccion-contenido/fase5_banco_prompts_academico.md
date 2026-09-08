# 🎓 Banco de Prompts — Directivos ACADÉMICOS
## IA Práctica para Líderes Anáhuac Mayab

> **Instrucciones para el participante:**
> 1. Localice el caso de uso que necesita resolver
> 2. Copie el prompt completo
> 3. Reemplace cada `[DATO]` con su información real
> 4. Péguelo en Amazon Quick
> 5. Obtenga un resultado usable en menos de 2 minutos
>
> **Convenciones:** 🟢 Básico (copiar y pegar) · 🟡 Intermedio (requiere datos específicos) · 🔴 Avanzado (encadena pasos o requiere archivos adjuntos)

---

# SECCIÓN 1 — COMUNICACIÓN (5 prompts)

---

### AC-01 · Comunicado formal a cuerpo docente
**Caso de uso:** Informar a profesores sobre fechas, procesos o cambios relevantes del ciclo.
**Nivel:** 🟢 Básico · **Framework:** RCTF (Rol-Contexto-Tarea-Formato)

```
Rol: Eres un redactor institucional de la Universidad Anáhuac Mayab.

Tarea: Redacte un comunicado formal dirigido al cuerpo docente del
programa de [LICENCIATURA] sobre [TEMA — ej: inicio del periodo de
evaluaciones parciales / fecha límite de captura de calificaciones /
cambio de horario de asesorías].

Datos a incluir:
- Información principal: [DETALLE DEL COMUNICADO]
- Fechas clave: [FECHA 1], [FECHA 2]
- Acciones requeridas del docente: [ACCIÓN 1], [ACCIÓN 2]
- Contacto para dudas: [NOMBRE, EXTENSIÓN O CORREO]
- Firmante: [SU NOMBRE], [CARGO]

Formato:
- Extensión: máximo 200 palabras
- Tono: institucional, respetuoso, directo
- Estructura: saludo → información → acciones requeridas → contacto → firma
- Listo para enviar por correo electrónico sin edición adicional
```

**Output esperado:** Comunicado de 1 página con estructura formal Anáhuac, listo para copiar al correo y enviar.

---

### AC-02 · Acta/minuta de reunión de academia
**Caso de uso:** Convertir notas informales de una reunión en minuta formal con acuerdos numerados.
**Nivel:** 🟢 Básico · **Framework:** RCTF (Rol-Contexto-Tarea-Formato)

```
Rol: Eres el secretario de actas de una reunión de academia
universitaria.

Tarea: Redacte la minuta formal de la reunión de academia del
programa de [LICENCIATURA] con estos datos:

Datos generales:
- Fecha: [FECHA]
- Hora: [HORA INICIO] a [HORA FIN]
- Lugar: [SALA / ENLACE DE VIDEOCONFERENCIA]
- Asistentes: [NOMBRES Y CARGOS, separados por coma]
- Ausentes con justificación: [NOMBRES]
- Preside: [NOMBRE]
- Secretario de actas: [NOMBRE]

Temas tratados (mis notas):
1. [TEMA 1]: [NOTAS — lo que se discutió y decidió]
2. [TEMA 2]: [NOTAS — lo que se discutió y decidió]
3. [TEMA 3]: [NOTAS — lo que se discutió y decidió]

Acuerdos tomados:
- [ACUERDO 1] — Responsable: [NOMBRE] — Plazo: [FECHA]
- [ACUERDO 2] — Responsable: [NOMBRE] — Plazo: [FECHA]
- [ACUERDO 3] — Responsable: [NOMBRE] — Plazo: [FECHA]

Próxima reunión: [FECHA Y HORA TENTATIVA]

Formato:
- Minuta formal con numeración de acuerdos
- Lista para firma y archivo institucional
- Incluir tabla resumen de acuerdos al final
```

**Output esperado:** Minuta formal con secciones claras, acuerdos numerados con responsable y fecha, lista para firma y distribución.

---

### AC-03 · Respuesta institucional a padres de familia
**Caso de uso:** Responder a un padre/madre que consulta sobre la situación académica de su hijo/a, respetando protección de datos.
**Nivel:** 🟡 Intermedio · **Framework:** CO-STAR (Contexto-Objetivo-Estilo-Tono-Audiencia-Respuesta)

```
Contexto: Un padre/madre de familia contactó la coordinación del
programa de [LICENCIATURA] de la Universidad Anáhuac Mayab. Su
consulta es sobre: [DESCRIPCIÓN — ej: bajo rendimiento de su hijo/a /
riesgo de baja por reprobación / solicitud de información sobre becas /
posible cambio de carrera]. El estudiante es mayor de edad.

Objetivo: Redactar una respuesta que atienda la preocupación del padre
con empatía, pero respete la normatividad de protección de datos del
estudiante mayor de edad.

Estilo: Redacción institucional universitaria. Oraciones claras, sin
tecnicismos legales innecesarios.

Tono: Empático y cercano, pero institucionalmente correcto. Que el
padre se sienta escuchado sin que se comprometa información
confidencial del alumno.

Audiencia: Padre/madre de familia, nivel socioeconómico medio-alto,
preocupado por la educación de su hijo/a.

Respuesta:
- Máximo 200 palabras
- Estructura: agradecimiento → explicación sobre consentimiento del
  alumno → alternativas (reunión conjunta, canalización a tutoría) →
  datos de contacto de [TUTORÍA/PSICOPEDAGOGÍA]: [CONTACTO]
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Respuesta empática que protege datos del estudiante, ofrece alternativas concretas y canaliza adecuadamente. Lista para enviar.

---

### AC-04 · Carta institucional a organismos externos
**Caso de uso:** Redactar carta formal para acreditadoras, instituciones aliadas, organismos de gobierno o empresas vinculadas al programa.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como redactor de correspondencia institucional de una
universidad privada mexicana con tono formal y ejecutivo.

Input:
- Destinatario: [NOMBRE Y CARGO DEL DESTINATARIO]
- Institución: [NOMBRE DE LA INSTITUCIÓN]
- Asunto de la carta: [TEMA — ej: solicitud de prórroga para entrega
  de evidencias de acreditación / propuesta de convenio de prácticas
  profesionales / invitación a participar como evaluador externo /
  respuesta a observaciones de auditoría académica]
- Contexto: [ANTECEDENTE O MOTIVO DE LA CARTA — 2-3 oraciones]
- Solicitud o acción concreta: [QUÉ SE PIDE O COMUNICA]
- Datos de soporte: [CIFRAS, FECHAS O DOCUMENTOS RELEVANTES]

Steps:
1. Encabezado formal con datos del destinatario
2. Párrafo de contexto y antecedente
3. Desarrollo del asunto con datos de soporte
4. Solicitud o propuesta concreta
5. Cierre con disposición a colaborar y datos de contacto

Expectation:
- Carta formal de máximo 1 cuartilla
- Tono institucional, respetuoso, profesional
- Firmante: [SU NOMBRE], [CARGO] — Universidad Anáhuac Mayab
- Lista para imprimir en papel membretado
```

**Output esperado:** Carta formal de 1 página con estructura epistolar correcta, argumentación sólida y solicitud clara. Lista para membrete.

---

### AC-05 · Minuta ejecutiva de comité o consejo
**Caso de uso:** Sintetizar una reunión de consejo académico, comité curricular o junta directiva en formato ejecutivo para distribución rápida.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como asistente ejecutivo especializado en gobernanza
universitaria.

Input: Estas son mis notas de la reunión de [TIPO DE COMITÉ — ej:
Consejo Académico / Comité Curricular / Junta de Directores]:

Datos generales:
- Fecha: [FECHA] · Hora: [HORA] · Lugar: [LUGAR]
- Participantes clave: [NOMBRES Y CARGOS]

Notas en bruto:
[PEGUE AQUÍ SUS NOTAS TAL CUAL LAS TOMÓ — pueden ser informales,
incompletas o desordenadas. La IA las estructurará]

Steps:
1. Identifique los temas principales tratados
2. Separe hechos/informes de decisiones/acuerdos
3. Liste los acuerdos con responsable y fecha límite
4. Identifique temas pendientes que requieren seguimiento
5. Redacte un resumen ejecutivo de apertura (máximo 60 palabras)

Expectation:
- Minuta ejecutiva de máximo 1.5 cuartillas
- Formato: resumen → temas tratados → tabla de acuerdos →
  pendientes → próxima reunión
- Tabla de acuerdos con columnas: #, Acuerdo, Responsable, Plazo
- Tono formal pero conciso
```

**Output esperado:** Minuta ejecutiva estructurada con tabla de acuerdos y pendientes, lista para distribuir a los participantes del comité.

---

# SECCIÓN 2 — ANÁLISIS (5 prompts)

---

### AC-06 · Análisis de matrícula con semáforo
**Caso de uso:** Generar análisis rápido de matrícula para reunión con rectoría o dirección de escuela.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como analista de gestión académica universitaria con
experiencia en universidades privadas mexicanas.

Input: Datos del programa de [LICENCIATURA], ciclo [CICLO ACTUAL]:
- Matrícula nuevo ingreso actual: [NÚMERO]
- Matrícula nuevo ingreso ciclo anterior: [NÚMERO]
- Matrícula total actual: [NÚMERO]
- Matrícula total ciclo anterior: [NÚMERO]
- Meta institucional de crecimiento: [PORCENTAJE]%
- Capacidad máxima del programa: [NÚMERO]
- Programas con desempeño similar en la institución: [PROGRAMA 1]
  tenía [NÚMERO], [PROGRAMA 2] tenía [NÚMERO]

Steps:
1. Calcule variación porcentual en nuevo ingreso y matrícula total
2. Evalúe cumplimiento vs. meta institucional
3. Calcule porcentaje de ocupación vs. capacidad
4. Asigne semáforo: 🟢 cumple meta · 🟡 dentro del 5% de la meta ·
   🔴 más de 5% por debajo
5. Proponga 3 factores que podrían explicar la tendencia
6. Recomiende 2 acciones concretas para el próximo ciclo de captación

Expectation:
- Análisis ejecutivo de máximo 1 cuartilla
- Tabla semáforo de indicadores
- Párrafo ejecutivo de máximo 80 palabras para informe a rectoría
- Formato: tablas y viñetas, profesional
```

**Output esperado:** Análisis de 1 cuartilla con tabla semáforo, comparativas calculadas y recomendaciones accionables para presentar a dirección.

---

### AC-07 · Análisis de retención y deserción por cohorte
**Caso de uso:** Preparar reporte de permanencia estudiantil con análisis causal y plan de intervención.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como especialista en retención estudiantil de educación
superior.

Input: Datos de retención del programa de [LICENCIATURA]:
- Cohorte [AÑO]: [NÚMERO] estudiantes al ingreso
- Estudiantes activos actualmente de esa cohorte: [NÚMERO]
- Tasa de retención actual: [PORCENTAJE]%
- Tasa de retención ciclo anterior: [PORCENTAJE]%
- Causas de baja más frecuentes: [CAUSA 1], [CAUSA 2], [CAUSA 3]
- Semestres con mayor deserción: [SEMESTRES]
- Benchmark ANUIES para universidades privadas: 85-90%

Steps:
1. Calcule tasa de retención y compare con ciclo anterior
2. Identifique los "semestres críticos" de mayor deserción
3. Para cada causa de baja, proponga una intervención específica
4. Diseñe un sistema de alertas tempranas con 3 indicadores
5. Genere resumen ejecutivo para dirección

Expectation:
- Reporte de máximo 2 cuartillas con subtítulos claros
- Tabla: Causa de baja → Intervención → Responsable → Plazo
- Semáforo vs. benchmark ANUIES
- 3 acciones implementables este semestre
```

**Output esperado:** Reporte de retención con análisis causal, sistema de alertas tempranas y plan de intervención por causa, presentable a dirección.

---

### AC-08 · Evaluación del desempeño docente — síntesis para retroalimentación
**Caso de uso:** Sintetizar resultados de evaluación docente de un profesor para dar retroalimentación constructiva.
**Nivel:** 🔴 Avanzado · **Framework:** CRISPE (Capacity-Insight-Statement-Personality-Experiment)

```
Capacity & Role: Eres un coordinador académico experimentado que
sabe dar retroalimentación constructiva a docentes, con 10 años de
experiencia en universidades privadas mexicanas.

Insight: Tengo los siguientes resultados de evaluación del docente
[NOMBRE O IDENTIFICADOR] del programa de [LICENCIATURA]:

Evaluación estudiantil (escala 1-10):
- Dominio del tema: [CALIFICACIÓN]
- Claridad al explicar: [CALIFICACIÓN]
- Puntualidad y cumplimiento: [CALIFICACIÓN]
- Retroalimentación oportuna: [CALIFICACIÓN]
- Promedio general: [CALIFICACIÓN]
- Número de evaluadores: [NÚMERO]

Observaciones frecuentes de estudiantes:
- Positivas: [COMENTARIO 1], [COMENTARIO 2]
- Negativas: [COMENTARIO 1], [COMENTARIO 2]

Datos adicionales: [EJ: es docente de asignatura / tiempo completo;
antigüedad: X semestres; evaluación del semestre anterior: X]

Statement: Necesito un documento de retroalimentación que pueda usar
como guía en mi conversación presencial con el docente.

Personality: Constructivo, respetuoso, orientado a la mejora.
Reconoce fortalezas antes de señalar áreas de oportunidad. Evita
juicios personales; se basa en datos.

Experiment: Dame 2 versiones:
1. Versión para docente con resultados positivos (reconocimiento)
2. Versión para docente con áreas de mejora (plan de acompañamiento)
```

**Output esperado:** Dos documentos de retroalimentación: uno de reconocimiento y otro con plan de mejora. Ambos con datos, tono constructivo y acciones concretas.

---

### AC-09 · Comparativa semestral de indicadores académicos
**Caso de uso:** Generar tabla comparativa de indicadores clave del programa entre dos semestres para consejo o informe de gestión.
**Nivel:** 🟡 Intermedio · **Framework:** RCTF (Rol-Contexto-Tarea-Formato)

```
Rol: Eres un analista de indicadores de gestión académica.

Tarea: Con los siguientes datos del programa de [LICENCIATURA],
genere una comparativa semestral:

Semestre anterior [CICLO 1] vs. Semestre actual [CICLO 2]:
- Matrícula total: [NÚMERO] → [NÚMERO]
- Nuevo ingreso: [NÚMERO] → [NÚMERO]
- Tasa de retención: [%] → [%]
- Tasa de titulación: [%] → [%]
- Satisfacción estudiantil (escala 1-10): [X] → [X]
- Docentes con posgrado: [%] → [%]
- [INDICADOR ADICIONAL]: [VALOR] → [VALOR]

Para cada indicador:
1. Calcule la variación porcentual o absoluta
2. Asigne tendencia: ↑ mejora · → estable · ↓ atención
3. Compare con la meta institucional si se conoce: [METAS]
4. Identifique los 2 indicadores que más mejoraron y los 2 que
   más retrocedieron
5. Proponga 1 acción prioritaria para cada indicador en retroceso

Formato:
- Tabla comparativa con columnas: Indicador | Anterior | Actual |
  Variación | Tendencia | Vs. Meta
- Párrafo ejecutivo de 80 palabras al inicio
- Máximo 1.5 cuartillas total
```

**Output esperado:** Tabla comparativa semestral con tendencias y variaciones calculadas, más priorización de acciones. Lista para incluir en informe de gestión.

---

### AC-10 · Análisis de indicadores de acreditación con brecha
**Caso de uso:** Preparar estatus de cumplimiento de indicadores para proceso de acreditación o reacreditación.
**Nivel:** 🔴 Avanzado · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como asesor de aseguramiento de calidad educativa con
experiencia en procesos CIEES y COPAES.

Input: Indicadores de acreditación del programa de [LICENCIATURA]
ante [ORGANISMO ACREDITADOR — ej: COPAES / CIEES / CACEI / CONAIC]:

1. [INDICADOR 1 — ej: Tasa de titulación]: Meta [X]% — Actual [X]%
2. [INDICADOR 2 — ej: Profesores con posgrado]: Meta [X]% — Actual [X]%
3. [INDICADOR 3 — ej: Satisfacción estudiantil]: Meta [X] — Actual [X]
4. [INDICADOR 4 — ej: Vinculación con sector productivo]: Meta [X] — Actual [X]
5. [INDICADOR 5 — ej: Producción académica docente]: Meta [X] — Actual [X]
6. [INDICADOR 6 — ej: Infraestructura]: Meta [X] — Actual [X]

Fecha de la próxima visita de evaluación: [FECHA O "por definir"]

Steps:
1. Calcule la brecha (diferencia meta vs. actual) para cada indicador
2. Asigne estatus: 🟢 Cumple · 🟡 En riesgo (brecha <10%) ·
   🔴 No cumple (brecha ≥10%)
3. Priorice los indicadores en rojo y amarillo
4. Para cada indicador con brecha, proponga acción correctiva,
   responsable sugerido, plazo y evidencia a generar
5. Estime si el plazo es viable antes de la visita de evaluación

Expectation:
- Tablero ejecutivo en formato tabla con semáforo visual
- Tabla de acciones correctivas: Indicador | Brecha | Acción |
  Responsable | Plazo | Evidencia | Viable antes de visita (Sí/No)
- Resumen de estatus general en 1 párrafo
- Máximo 2 cuartillas
```

**Output esperado:** Tablero de seguimiento de acreditación con semáforo, brechas calculadas, plan de acciones correctivas y evaluación de viabilidad temporal.

---

# SECCIÓN 3 — AUTOMATIZACIÓN (5 prompts)

---

### AC-11 · Reporte semanal del área académica
**Caso de uso:** Generar el borrador del reporte semanal que envía a su jefe directo o a rectoría.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como asistente ejecutivo de un coordinador/director
académico universitario.

Input: Estas son mis notas de la semana del [FECHA INICIO] al
[FECHA FIN] en el programa de [LICENCIATURA]:

Logros de la semana:
- [LOGRO 1]
- [LOGRO 2]
- [LOGRO 3]

Temas en proceso:
- [TEMA 1]: estatus [AVANCE/PENDIENTE/BLOQUEADO]
- [TEMA 2]: estatus [AVANCE/PENDIENTE/BLOQUEADO]

Incidencias o alertas:
- [INCIDENCIA 1 — si aplica]

Reuniones relevantes:
- [REUNIÓN 1]: [RESULTADO PRINCIPAL]

Pendientes para la próxima semana:
- [PENDIENTE 1]
- [PENDIENTE 2]

Steps:
1. Organice la información en secciones claras
2. Redacte cada sección en viñetas concisas (1 línea por punto)
3. Destaque con 🟢🟡🔴 los temas según su estatus
4. Cierre con los 3 puntos prioritarios de la próxima semana

Expectation:
- Reporte de máximo 1 cuartilla
- Formato: semáforo + viñetas
- Tono ejecutivo y conciso
- Listo para enviar por correo a [DESTINATARIO — ej: Director de
  Escuela / Vicerrector Académico]
```

**Output esperado:** Reporte semanal ejecutivo de 1 página con semáforo visual, listo para enviar sin edición.

---

### AC-12 · Dashboard narrativo de KPIs académicos
**Caso de uso:** Convertir datos crudos de indicadores en un resumen ejecutivo tipo dashboard narrativo para presentaciones.
**Nivel:** 🔴 Avanzado · **Framework:** CRISPE (Capacity-Insight-Statement-Personality-Experiment)

```
Capacity & Role: Eres un analista de datos educativos con experiencia
en presentar KPIs a comités directivos de universidades privadas.

Insight: Estos son los KPIs del programa de [LICENCIATURA], corte
[MES/AÑO]:
- Matrícula total: [NÚMERO] (meta: [NÚMERO])
- Nuevo ingreso: [NÚMERO] (meta: [NÚMERO])
- Retención: [%] (meta: [%])
- Eficiencia terminal: [%] (meta: [%])
- Satisfacción estudiantil: [CALIFICACIÓN]/10 (meta: [X]/10)
- Docentes con posgrado: [%] (meta: [%])
- Índice de empleabilidad de egresados: [%] (meta: [%])
- [KPI ADICIONAL]: [VALOR] (meta: [VALOR])

Statement: Necesito un dashboard narrativo que explique el estatus
de cada KPI en lenguaje ejecutivo, no solo números.

Personality: Analítico, directo, orientado a la toma de decisiones.
Presenta los datos con contexto: "este número significa que..."

Experiment: Genera 2 versiones:
1. Versión completa (1.5 cuartillas con análisis detallado)
2. Versión de 1 párrafo (resumen ejecutivo de 80 palabras para
   el Director de Escuela que tiene 30 segundos)
```

**Output esperado:** Dos versiones de dashboard narrativo: una completa con análisis por KPI y semáforo, y una ultra-ejecutiva de 80 palabras. Ambas con interpretación, no solo datos.

---

### AC-13 · Calendario académico semestral personalizado
**Caso de uso:** Generar el calendario de actividades clave del semestre para el programa, con fechas, responsables y entregables.
**Nivel:** 🟢 Básico · **Framework:** RCTF (Rol-Contexto-Tarea-Formato)

```
Rol: Eres un coordinador académico que planifica el semestre.

Tarea: Genere un calendario semestral de actividades clave para el
programa de [LICENCIATURA], semestre [CICLO — ej: Agosto-Diciembre 2026].

Fechas institucionales fijas:
- Inicio de clases: [FECHA]
- Periodo de evaluaciones parciales: [FECHAS]
- Periodo de evaluaciones finales: [FECHAS]
- Fin de semestre: [FECHA]
- Fecha límite de captura de calificaciones: [FECHA]

Actividades del programa a calendarizar:
- Reuniones de academia: [FRECUENCIA — ej: mensual]
- Entregas de avance de acreditación: [FECHAS SI APLICA]
- Eventos del programa: [EVENTO 1], [EVENTO 2]
- Inscripciones al siguiente ciclo: [FECHAS APROXIMADAS]
- [ACTIVIDAD ADICIONAL]: [FECHA]

Formato:
- Tabla con columnas: Semana | Fecha | Actividad | Responsable |
  Entregable
- Agrupado por mes
- Marque en negritas las fechas inamovibles
- Máximo 2 cuartillas
```

**Output esperado:** Calendario semestral tabulado con todas las actividades clave, responsables y entregables, listo para distribuir al equipo.

---

### AC-14 · Síntesis de evaluaciones docentes del programa
**Caso de uso:** Consolidar resultados de evaluación docente de todos los profesores del programa en un análisis ejecutivo.
**Nivel:** 🔴 Avanzado · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como analista de calidad docente en educación superior.

Input: Resultados de evaluación docente del programa de [LICENCIATURA],
ciclo [CICLO]. Escala 1-10.

[PEGUE AQUÍ LA TABLA DE RESULTADOS O DESCRÍBALOS:
ej: Profesor A: 8.5, Profesor B: 7.2, Profesor C: 9.1, etc.
O bien: "Adjunto el archivo con los resultados" si usa Amazon Quick
con archivos conectados]

Datos adicionales:
- Número total de docentes evaluados: [NÚMERO]
- Tasa de respuesta de estudiantes: [PORCENTAJE]%
- Promedio del programa ciclo anterior: [CALIFICACIÓN]

Steps:
1. Calcule promedio general del programa este ciclo
2. Compare con ciclo anterior e identifique tendencia
3. Identifique el top 3 de docentes mejor evaluados
4. Identifique los 3 docentes con evaluación más baja
5. Clasifique a los docentes en 3 grupos:
   - 🟢 Destacado (≥8.5): reconocimiento
   - 🟡 Satisfactorio (7.0-8.4): seguimiento estándar
   - 🔴 Requiere atención (<7.0): plan de acompañamiento
6. Proponga acciones para cada grupo

Expectation:
- Reporte de máximo 2 cuartillas
- Tabla clasificatoria con semáforo
- Resumen ejecutivo para presentar a dirección
- NO incluya nombres reales en el resumen general;
  use "Docente 1, Docente 2" (la tabla detallada es confidencial)
```

**Output esperado:** Análisis consolidado de evaluaciones docentes con clasificación semáforo, tendencia vs. ciclo anterior y plan de acción por grupo.

---

### AC-15 · Seguimiento mensual de acreditación
**Caso de uso:** Generar el reporte mensual de avance en cumplimiento de indicadores de acreditación.
**Nivel:** 🔴 Avanzado · **Framework:** Cadena de pensamiento (Chain-of-Thought)

```
Actúe como asesor de acreditación. Piense paso a paso antes de
generar el reporte.

Contexto: El programa de [LICENCIATURA] está en proceso de
[ACREDITACIÓN / REACREDITACIÓN] ante [ORGANISMO]. La visita de
evaluación está programada para [FECHA O "pendiente de confirmar"].

Avance de este mes ([MES/AÑO]):

Indicador 1 — [NOMBRE]: [ESTATUS Y AVANCE]
Indicador 2 — [NOMBRE]: [ESTATUS Y AVANCE]
Indicador 3 — [NOMBRE]: [ESTATUS Y AVANCE]
Indicador 4 — [NOMBRE]: [ESTATUS Y AVANCE]
Indicador 5 — [NOMBRE]: [ESTATUS Y AVANCE]

Evidencias recopiladas este mes: [LISTA]
Evidencias pendientes: [LISTA]
Obstáculos identificados: [OBSTÁCULO 1], [OBSTÁCULO 2]

Piense paso a paso:
1. Primero, evalúe el avance general (% de preparación estimado)
2. Luego, identifique qué indicadores van en tiempo y cuáles
   están retrasados
3. Después, calcule si el ritmo actual permite llegar preparados
   a la fecha de visita
4. Proponga ajustes al cronograma si detecta riesgo
5. Finalmente, genere el reporte con semáforo por indicador

Formato: reporte de 1 cuartilla con tabla semáforo + sección de
riesgos + próximos pasos del mes siguiente.
```

**Output esperado:** Reporte mensual de acreditación con semáforo, porcentaje estimado de preparación, análisis de riesgo temporal y próximos pasos priorizados.

---

# SECCIÓN 4 — ATENCIÓN (5 prompts)

---

### AC-16 · Respuesta a solicitud académica de estudiante
**Caso de uso:** Responder formalmente a solicitudes de cambio de grupo, baja, equivalencia, reconsideración de calificación.
**Nivel:** 🟢 Básico · **Framework:** RCTF (Rol-Contexto-Tarea-Formato)

```
Rol: Eres el coordinador del programa de [LICENCIATURA] de la
Universidad Anáhuac Mayab.

Tarea: Redacte una respuesta formal al estudiante que solicita:
[TIPO DE SOLICITUD — ej: cambio de grupo / baja extemporánea /
equivalencia de materias / reconsideración de calificación /
reinscripción extemporánea]

Contexto:
- El estudiante argumenta: [RESUMEN DE LO QUE SOLICITA Y POR QUÉ]
- Resolución: [PROCEDE / NO PROCEDE / PROCEDE CON CONDICIONES]
- Fundamento normativo: [ARTÍCULO O POLÍTICA QUE APLICA — si lo
  conoce, si no, omita este campo]
- Próximo paso requerido: [QUÉ DEBE HACER EL ESTUDIANTE]

Formato:
- Máximo 180 palabras
- Estructura: acuse de recibo empático → resolución clara y
  fundamentada → proceso a seguir o alternativas → cierre cordial
- Tono: institucional, respetuoso, empático pero firme
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Respuesta formal que equilibra normatividad con empatía, con pasos claros para el estudiante. Lista para enviar.

---

### AC-17 · Banco de FAQs del programa
**Caso de uso:** Crear respuestas maestras para las 10 preguntas más frecuentes del programa, personalizables por situación.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como especialista en atención estudiantil universitaria.

Input: Estas son las 10 preguntas más frecuentes que recibo como
coordinador del programa de [LICENCIATURA]:

1. [PREGUNTA 1 — ej: ¿Cuál es el proceso de baja de materias?]
2. [PREGUNTA 2 — ej: ¿Cómo solicito una equivalencia?]
3. [PREGUNTA 3 — ej: ¿Cuándo son las fechas de reinscripción?]
4. [PREGUNTA 4 — ej: ¿Qué requisitos necesito para titularme?]
5. [PREGUNTA 5 — ej: ¿Cómo aplico a una beca?]
6. [PREGUNTA 6]
7. [PREGUNTA 7]
8. [PREGUNTA 8]
9. [PREGUNTA 9]
10. [PREGUNTA 10]

Steps:
1. Para cada pregunta, redacte una respuesta maestra de máximo
   100 palabras
2. Incluya placeholders [NOMBRE DEL ESTUDIANTE], [PROGRAMA],
   [FECHA] donde corresponda para personalización rápida
3. Incluya el dato de contacto o link relevante si lo conozco:
   [DATOS DE CONTACTO RELEVANTES]
4. Clasifique cada FAQ: puede resolverse por correo / requiere cita /
   requiere escalamiento

Expectation:
- Banco de 10 respuestas maestras listas para copiar-pegar
- Formato: tabla con Pregunta | Respuesta maestra | Canal de
  resolución
- Tono: cercano-institucional, en "usted"
```

**Output esperado:** Banco de 10 FAQs con respuestas maestras personalizables, clasificadas por canal de resolución. Listas para reutilizar todo el semestre.

---

### AC-18 · Orientación académica personalizada para alumno en riesgo
**Caso de uso:** Preparar guión de orientación para un alumno que presenta señales de riesgo académico, emocional o económico.
**Nivel:** 🔴 Avanzado · **Framework:** CRIT (Context-Role-Interview-Task)

```
Context: Soy coordinador del programa de [LICENCIATURA] en Anáhuac
Mayab. Tengo una reunión programada con un estudiante que presenta
las siguientes señales de riesgo:
- Situación: [DESCRIPCIÓN — ej: reprobó 3 materias este semestre /
  ha faltado frecuentemente / su tutor reporta desmotivación /
  solicitó baja temporal por situación económica]
- Semestre: [NÚMERO]
- Historial breve: [DATOS RELEVANTES — ej: buen promedio hasta 4°
  semestre, bajó drásticamente en 5°; primera vez que reprueba;
  cambió de carrera previamente]

Role: Actúa como orientador educativo con experiencia en intervención
con estudiantes universitarios en riesgo de baja.

Interview: Antes de darme el guión de la reunión, hazme las preguntas
que necesites para entender mejor la situación y preparar una
intervención efectiva. Pregunta sobre:
- Información que te falta del contexto del estudiante
- Servicios de apoyo disponibles en la institución
- Límites de mi rol como coordinador
- Cualquier otra variable relevante

Espera mis respuestas antes de continuar.

Task: Después de la entrevista, genera:
1. Guión de la reunión: preguntas sugeridas, cómo abrir la
   conversación, qué escuchar, qué no decir
2. Mapa de canalización: según lo que el estudiante responda,
   a quién derivar (tutoría, psicopedagogía, becas, etc.)
3. Formato de registro de la sesión (campos a llenar después
   de la reunión)
```

**Output esperado:** Guión de intervención personalizado con preguntas, mapa de canalización por escenario y formato de registro. La IA primero pregunta antes de producir el entregable.

---

### AC-19 · Derivación de caso a departamento de apoyo
**Caso de uso:** Redactar la comunicación interna para derivar un caso estudiantil a tutoría, psicopedagogía, becas u otro departamento.
**Nivel:** 🟢 Básico · **Framework:** RCTF (Rol-Contexto-Tarea-Formato)

```
Rol: Eres un coordinador académico que canaliza un caso estudiantil.

Tarea: Redacte un memorándum interno para derivar el caso de un
estudiante al departamento de [DEPARTAMENTO — ej: Tutoría /
Psicopedagogía / Becas / Servicios Estudiantiles / Dirección de
Escuela].

Datos del caso (use código o iniciales, NO nombre completo):
- Identificador del estudiante: [CÓDIGO O INICIALES]
- Programa: [LICENCIATURA]
- Semestre: [NÚMERO]
- Motivo de la derivación: [DESCRIPCIÓN — ej: riesgo académico por
  reprobación múltiple / señales de problema emocional / solicitud
  de apoyo económico / situación familiar que afecta rendimiento]
- Acciones ya tomadas por la coordinación: [ACCIONES]
- Urgencia: [ALTA / MEDIA / BAJA]

Formato:
- Memorándum interno de máximo 150 palabras
- Estructura: contexto → motivo de derivación → acciones previas →
  solicitud concreta al departamento → datos de contacto para
  seguimiento
- Tono: profesional, conciso, con sentido de urgencia si aplica
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Memorándum interno de derivación, conciso y con toda la información necesaria para que el departamento receptor atienda el caso sin demora.

---

### AC-20 · Comunicación de becas y apoyos económicos a estudiantes
**Caso de uso:** Redactar comunicado dirigido a estudiantes sobre convocatorias de becas, requisitos y fechas límite.
**Nivel:** 🟢 Básico · **Framework:** CO-STAR (Contexto-Objetivo-Estilo-Tono-Audiencia-Respuesta)

```
Contexto: La Universidad Anáhuac Mayab abrió la convocatoria de
[TIPO DE BECA — ej: beca académica por promedio / beca deportiva /
apoyo económico por situación especial / beca de excelencia].
Los estudiantes del programa de [LICENCIATURA] necesitan conocer
requisitos, fechas y proceso.

Objetivo: Informar a los estudiantes del programa sobre la
convocatoria de manera clara, completa y motivadora para que
apliquen quienes sean elegibles.

Estilo: Comunicación institucional clara, sin tecnicismos
administrativos innecesarios.

Tono: Cercano pero formal (usted). Motivador sin ser publicitario.

Audiencia: Estudiantes universitarios de [SEMESTRES ELEGIBLES],
programa de [LICENCIATURA].

Respuesta:
- Máximo 250 palabras
- Estructura: apertura motivadora → tipo de beca y beneficio →
  requisitos (lista con viñetas) → fechas clave → proceso paso a
  paso → contacto para dudas: [CONTACTO DE BECAS]
- Incluir enlace o ubicación donde pueden consultar más información:
  [ENLACE O LUGAR]
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Comunicado de becas claro y completo con requisitos, fechas y proceso paso a paso. Listo para enviar por correo o publicar en plataforma del programa.

---

# SECCIÓN 5 — GESTIÓN (5 prompts)

---

### AC-21 · Plan de trabajo semestral del área
**Caso de uso:** Generar el plan de trabajo del semestre con objetivos, actividades, responsables y fechas.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como consultor de planeación en educación superior.

Input: Necesito el plan de trabajo semestral para el programa de
[LICENCIATURA], ciclo [CICLO]:

Objetivos del semestre:
1. [OBJETIVO 1 — ej: Incrementar retención en 3%]
2. [OBJETIVO 2 — ej: Completar evidencias para acreditación]
3. [OBJETIVO 3 — ej: Implementar programa de tutoría mejorado]
4. [OBJETIVO 4 — ej: Actualizar 2 planes de materia]

Recursos disponibles:
- Equipo: [NÚMERO DE PERSONAS Y ROLES]
- Presupuesto asignado: [MONTO O "sin presupuesto adicional"]
- Herramientas: [SISTEMAS/PLATAFORMAS DISPONIBLES]

Restricciones:
- [RESTRICCIÓN 1 — ej: solo 1 asistente de medio tiempo]
- [RESTRICCIÓN 2 — ej: no hay presupuesto para contrataciones]

Steps:
1. Desglose cada objetivo en 3-5 actividades concretas
2. Asigne responsable y fecha de entrega a cada actividad
3. Identifique dependencias entre actividades
4. Proponga indicadores de cumplimiento para cada objetivo
5. Genere un cronograma simplificado tipo Gantt por mes

Expectation:
- Plan de trabajo de máximo 3 cuartillas
- Tabla: Objetivo → Actividad → Responsable → Fecha → Indicador
- Cronograma visual por mes (tabla simplificada)
- Realista con los recursos declarados
```

**Output esperado:** Plan de trabajo semestral con desglose de actividades, responsables, indicadores y cronograma por mes. Realista y accionable.

---

### AC-22 · Seguimiento de proyectos del programa — reporte de avance
**Caso de uso:** Generar reporte de avance de los proyectos o iniciativas que gestiona la coordinación.
**Nivel:** 🟡 Intermedio · **Framework:** RCTF (Rol-Contexto-Tarea-Formato)

```
Rol: Eres un project manager universitario.

Tarea: Genere un reporte de avance de los proyectos del programa de
[LICENCIATURA] para presentar a [AUDIENCIA — ej: Director de Escuela /
Vicerrectoría Académica].

Proyectos en curso:

Proyecto 1: [NOMBRE]
- Objetivo: [DESCRIPCIÓN BREVE]
- Avance: [PORCENTAJE O DESCRIPCIÓN]
- Estatus: [EN TIEMPO / RETRASADO / BLOQUEADO]
- Próximo hito: [DESCRIPCIÓN] — Fecha: [FECHA]
- Riesgo principal: [DESCRIPCIÓN]

Proyecto 2: [NOMBRE]
- Objetivo: [DESCRIPCIÓN BREVE]
- Avance: [PORCENTAJE O DESCRIPCIÓN]
- Estatus: [EN TIEMPO / RETRASADO / BLOQUEADO]
- Próximo hito: [DESCRIPCIÓN] — Fecha: [FECHA]
- Riesgo principal: [DESCRIPCIÓN]

Proyecto 3: [NOMBRE]
- [MISMOS CAMPOS]

Formato:
- Tabla semáforo: Proyecto | Avance | Estatus 🟢🟡🔴 | Próximo hito |
  Riesgo
- Párrafo ejecutivo de 60 palabras al inicio
- Sección de "Decisiones requeridas" si algún proyecto está bloqueado
- Máximo 1.5 cuartillas
```

**Output esperado:** Reporte de avance con tabla semáforo, hitos próximos y sección de decisiones requeridas. Ejecutivo y presentable.

---

### AC-23 · Evaluación de programa académico — diagnóstico FODA
**Caso de uso:** Generar un análisis FODA del programa para planeación estratégica o presentación a rectoría.
**Nivel:** 🔴 Avanzado · **Framework:** Cadena de pensamiento (Chain-of-Thought)

```
Actúe como consultor de estrategia en educación superior. Piense
paso a paso antes de elaborar el diagnóstico.

Contexto: Programa de [LICENCIATURA] de la Universidad Anáhuac Mayab.

Datos disponibles:
- Matrícula actual: [NÚMERO] (tendencia: [CRECIENDO/ESTABLE/BAJANDO])
- Tasa de retención: [%]
- Tasa de empleabilidad de egresados: [% O "sin dato formal"]
- Estatus de acreditación: [ACREDITADO/EN PROCESO/PENDIENTE]
- Fortalezas conocidas: [F1], [F2]
- Debilidades conocidas: [D1], [D2]
- Oportunidades del entorno: [O1 — ej: nearshoring / nueva regulación /
  crecimiento del sector en Yucatán]
- Amenazas del entorno: [A1 — ej: nuevo programa en universidad
  competidora / saturación de mercado]

Piense paso a paso:
1. Primero, valide y amplíe las fortalezas con los datos proporcionados
2. Luego, analice si las debilidades son estructurales o coyunturales
3. Después, conecte oportunidades externas con fortalezas internas
   (estrategias FO)
4. Identifique las amenazas que explotan debilidades existentes
   (estrategias DA — urgentes)
5. Finalmente, proponga 3 líneas estratégicas priorizadas

Formato:
- Matriz FODA en tabla 2×2
- Tabla de estrategias cruzadas: FO, FA, DO, DA
- 3 líneas estratégicas con acción concreta para cada una
- Máximo 2 cuartillas
```

**Output esperado:** Diagnóstico FODA completo con estrategias cruzadas y 3 líneas estratégicas priorizadas. Presentable a rectoría o consejo.

---

### AC-24 · Propuesta de mejora para el programa
**Caso de uso:** Elaborar una propuesta de mejora estructurada a partir de recomendaciones de acreditadora, evaluación interna o rectoría.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como asesor de mejora continua en educación superior.

Input: El programa de [LICENCIATURA] recibió las siguientes
recomendaciones de [FUENTE — ej: organismo acreditador / evaluación
interna / rectoría / consejo académico]:

1. [RECOMENDACIÓN 1]
2. [RECOMENDACIÓN 2]
3. [RECOMENDACIÓN 3]
4. [RECOMENDACIÓN 4]

Recursos disponibles: [DESCRIPCIÓN GENERAL DE EQUIPO Y PRESUPUESTO]

Steps:
1. Para cada recomendación, formule una acción de mejora específica
   y medible
2. Asigne responsable sugerido
3. Identifique recursos necesarios
4. Defina indicador de cumplimiento
5. Clasifique el plazo: corto (0-3 meses), medio (3-6 meses),
   largo (6-12 meses)
6. Especifique la evidencia que se generará

Expectation:
- Tabla de plan de mejora: Recomendación | Acción | Responsable |
  Recurso | Indicador | Plazo | Evidencia
- Cronograma simplificado tipo Gantt por trimestre
- Párrafo de compromiso institucional (máximo 60 palabras) para
  carta de respuesta al organismo
- Máximo 2 cuartillas
```

**Output esperado:** Plan de mejora tabulado con indicadores, plazos y evidencias, más cronograma visual y párrafo de compromiso para respuesta formal.

---

### AC-25 · Coordinación inter-áreas — solicitud de colaboración
**Caso de uso:** Redactar solicitud formal a otra área de la universidad para colaborar en una iniciativa del programa.
**Nivel:** 🟡 Intermedio · **Framework:** CO-STAR (Contexto-Objetivo-Estilo-Tono-Audiencia-Respuesta)

```
Contexto: El programa de [LICENCIATURA] de Anáhuac Mayab necesita la
colaboración del área de [ÁREA — ej: Vinculación / Comunicación
Institucional / Tecnología / Admisiones / Vida Universitaria /
Servicios Escolares] para [INICIATIVA — ej: organizar evento de
vinculación con empresas / lanzar campaña de captación / implementar
nueva herramienta tecnológica / coordinar proceso de titulación].

Antecedente: [CONTEXTO BREVE — qué se ha hecho y por qué se necesita
la colaboración ahora]

Objetivo: Solicitar una reunión o colaboración específica, dejando
claro qué se necesita, para cuándo, y qué aporta el programa.

Estilo: Comunicación interna institucional. Clara, respetuosa del
tiempo del otro, concreta.

Tono: Colaborativo, no demandante. Que comunique "esto nos beneficia
a ambos" más que "necesito que me ayudes".

Audiencia: Director(a) o coordinador(a) de [ÁREA], par jerárquico
o área de servicio.

Respuesta:
- Correo/memorándum de máximo 200 palabras
- Estructura: saludo → contexto breve → solicitud concreta →
  propuesta de fecha/reunión → qué aporta el programa → cierre
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Solicitud de colaboración inter-áreas con tono colaborativo, propuesta concreta y fecha sugerida. Lista para enviar.

---

# ÍNDICE RÁPIDO

| # | Prompt | Caso de uso | Nivel | Framework |
|---|---|---|---|---|
| **COMUNICACIÓN** | | | | |
| AC-01 | Comunicado a docentes | Informar fechas/procesos al cuerpo docente | 🟢 | RCTF |
| AC-02 | Acta/minuta de reunión | Convertir notas en minuta formal | 🟢 | RCTF |
| AC-03 | Respuesta a padres de familia | Atender consultas respetando protección de datos | 🟡 | CO-STAR |
| AC-04 | Carta institucional externa | Correspondencia con acreditadoras/aliados/gobierno | 🟡 | RISE |
| AC-05 | Minuta ejecutiva de comité | Sintetizar reunión de consejo o comité | 🟡 | RISE |
| **ANÁLISIS** | | | | |
| AC-06 | Análisis de matrícula | Semáforo de matrícula para rectoría | 🟡 | RISE |
| AC-07 | Retención y deserción | Reporte de permanencia con plan de intervención | 🟡 | RISE |
| AC-08 | Desempeño docente | Síntesis para retroalimentación constructiva | 🔴 | CRISPE |
| AC-09 | Comparativa semestral | Tabla de indicadores entre dos ciclos | 🟡 | RCTF |
| AC-10 | Indicadores de acreditación | Tablero con brecha y acciones correctivas | 🔴 | RISE |
| **AUTOMATIZACIÓN** | | | | |
| AC-11 | Reporte semanal del área | Borrador de reporte a jefe directo | 🟡 | RISE |
| AC-12 | Dashboard narrativo de KPIs | Datos crudos → resumen ejecutivo con contexto | 🔴 | CRISPE |
| AC-13 | Calendario semestral | Tabla de actividades, responsables y entregables | 🟢 | RCTF |
| AC-14 | Síntesis de evaluaciones docentes | Consolidado con clasificación semáforo | 🔴 | RISE |
| AC-15 | Seguimiento de acreditación | Reporte mensual con semáforo y riesgos | 🔴 | CoT |
| **ATENCIÓN** | | | | |
| AC-16 | Respuesta a solicitud de alumno | Atender trámites con empatía y normatividad | 🟢 | RCTF |
| AC-17 | Banco de FAQs | 10 respuestas maestras personalizables | 🟡 | RISE |
| AC-18 | Orientación a alumno en riesgo | Guión de intervención + mapa de canalización | 🔴 | CRIT |
| AC-19 | Derivación de caso | Memorándum para canalizar a otro departamento | 🟢 | RCTF |
| AC-20 | Comunicación de becas | Convocatoria clara con requisitos y proceso | 🟢 | CO-STAR |
| **GESTIÓN** | | | | |
| AC-21 | Plan de trabajo semestral | Objetivos, actividades, responsables y cronograma | 🟡 | RISE |
| AC-22 | Seguimiento de proyectos | Reporte de avance con semáforo y decisiones | 🟡 | RCTF |
| AC-23 | Evaluación FODA del programa | Diagnóstico estratégico con acciones cruzadas | 🔴 | CoT |
| AC-24 | Propuesta de mejora | Plan tabulado con indicadores y evidencias | 🟡 | RISE |
| AC-25 | Coordinación inter-áreas | Solicitud de colaboración a otra área | 🟡 | CO-STAR |

---

> **Nota importante:** Cada prompt produce un resultado útil, pero la **revisión humana es indispensable**. Verifique datos, cifras y nombres antes de enviar cualquier documento generado con IA. La responsabilidad del contenido final es siempre del directivo firmante.

---

*Banco de Prompts Académicos — Fase 5*
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
*Septiembre 2026*
