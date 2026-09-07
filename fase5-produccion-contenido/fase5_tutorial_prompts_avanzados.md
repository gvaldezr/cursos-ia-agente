# Guía de Instrucciones Avanzadas para Directivos
## Curso: IA Práctica para Líderes Anáhuac Mayab
### Fase 5 · Tutorial Técnico Paso a Paso

> **Versión:** 1.0 | **Fecha:** 5 de septiembre de 2026
> **Audiencia:** Directivos no técnicos — Universidad Anáhuac Mayab
> **Prerrequisito:** Haber completado el Nivel 1 del curso (familiaridad básica con Amazon Quick)
> **Tiempo estimado:** 35–40 minutos de lectura activa

---

## Introducción

La diferencia entre un directivo que «usa IA» y uno que obtiene resultados consistentes de alta calidad no es la herramienta — es la instrucción. Este tutorial le presenta cinco marcos de trabajo (*frameworks*) probados para estructurar sus instrucciones, más técnicas avanzadas para los casos donde el resultado inicial no es suficiente.

Cada marco incluye: cuándo usarlo, la estructura exacta, un ejemplo real de gestión universitaria en Anáhuac Mayab, y el resultado que debe esperar. Al terminar esta guía, usted tendrá un repertorio completo de técnicas para resolver cualquier tarea con IA.

---

## Parte 1 — Cinco marcos de trabajo con ejemplos reales

### Marco 1: RCTF — Rol, Contexto, Tarea, Formato

**Cuándo usarlo:** Para cualquier solicitud directa y rápida. Es el marco «de entrada» — el más simple y versátil. Si solo aprende uno, que sea este.

**Estructura:**

| Componente | Pregunta que responde | Ejemplo |
|---|---|---|
| **R** — Rol | ¿Quién debe ser la IA? | «Actúe como analista académico...» |
| **C** — Contexto | ¿Cuál es la situación? | «El programa tiene X alumnos, Y indicadores...» |
| **T** — Tarea | ¿Qué necesita que haga? | «Genere un análisis de retención...» |
| **F** — Formato | ¿Cómo debe verse el resultado? | «En tabla semáforo con párrafo ejecutivo...» |

**Ejemplo real — Análisis de retención para rectoría:**

```
ROL: Actúe como analista de gestión académica universitaria.

CONTEXTO: La Licenciatura en Derecho de la Universidad Anáhuac Mayab
registra los siguientes datos del ciclo Primavera 2026:
- Matrícula inicio de ciclo: 180 estudiantes
- Estudiantes que permanecen al cierre: 162 estudiantes
- Principales causas de baja: económicas, cambio de carrera, bajo rendimiento
- Tasa de retención del ciclo anterior: 92%

TAREA: Genere un análisis de retención estudiantil para presentar
a rectoría que incluya:
1. Cálculo de la tasa de retención actual y comparativa
2. Identificación de 3 factores de riesgo
3. 3 acciones concretas de intervención temprana
4. Párrafo ejecutivo de máximo 80 palabras

FORMATO: Use encabezados claros y viñetas. Incluya tabla semáforo
(🟢🟡🔴). Documento presentable en reunión de consejo. Máximo 2 cuartillas.
```

**Resultado esperado:** Documento de 1–2 páginas con tasa de retención calculada (90%), tabla semáforo, tres riesgos identificados con acciones de intervención, y un párrafo ejecutivo listo para incluir en informe a rectoría.

**Qué hacer si algo sale mal:**
- Si el análisis es demasiado genérico, agregue más datos en la sección de Contexto.
- Si los cálculos son incorrectos, verifique las cifras y pida a la IA que muestre el procedimiento paso a paso.

---

### Marco 2: RISE — Rol, Input, Steps, Expectation

**Cuándo usarlo:** Cuando necesita controlar el *proceso*, no solo el resultado. Ideal para tareas analíticas donde importa el orden de los pasos y la verificación es crítica.

**Estructura:**

| Componente | Pregunta que responde |
|---|---|
| **R** — Role (Rol) | ¿Qué experto necesita? |
| **I** — Input (Datos de entrada) | ¿Qué información debe considerar la IA? |
| **S** — Steps (Pasos) | ¿Qué secuencia de análisis debe seguir? |
| **E** — Expectation (Resultado esperado) | ¿Cómo debe verse el entregable? |

**Ejemplo real — Seguimiento de indicadores de acreditación COPAES:**

```
ROLE: Actúe como asesor de aseguramiento de calidad educativa con
experiencia en acreditaciones COPAES en México.

INPUT: Estos son los indicadores actuales del programa de Ingeniería
Industrial de la Universidad Anáhuac Mayab:
- Tasa de titulación: Meta 60% — Actual 52%
- Profesores con posgrado: Meta 80% — Actual 74%
- Satisfacción estudiantil: Meta 8.5/10 — Actual 7.9/10
- Eficiencia terminal: Meta 50% — Actual 43%
- Tasa de empleabilidad al primer año: Meta 75% — Actual 71%

STEPS:
1. Evalúe el estatus de cada indicador (cumple / en riesgo / no cumple)
2. Calcule la brecha numérica entre meta y valor actual
3. Proponga una acción correctiva concreta para cada indicador en riesgo
4. Sugiera responsable y plazo realista para cada acción
5. Priorice las acciones por impacto en la acreditación

EXPECTATION: Tabla ejecutiva con semáforo visual (🟢🟡🔴) por indicador,
acciones priorizadas con responsable y plazo, y resumen en un párrafo
para presentar a la Dirección de Escuela. Máximo 1 cuartilla.
```

**Resultado esperado:** Tabla de cinco indicadores con semáforo (tres en amarillo, dos en rojo), acciones numeradas con responsable y plazo (ejemplo: «Tasa de titulación → implementar programa de asesoría de tesis → Coordinación del programa → enero–junio 2027»), y párrafo ejecutivo de síntesis.

**Qué hacer si algo sale mal:**
- Si la IA omite algún paso, señálelo explícitamente: «En el paso 4 no incluiste al responsable. Complétalo.»
- Si los plazos sugeridos son irreales, ajuste con: «Los plazos deben considerar el calendario institucional de Anáhuac Mayab, con cierre de semestre en diciembre.»

---

### Marco 3: CO-STAR — Context, Objective, Style, Tone, Audience, Response

**Cuándo usarlo:** Cuando la *comunicación* es lo que importa: el tono, la audiencia, la voz institucional. No es lo mismo escribirle a un padre de familia preocupado que a rectoría pidiendo presupuesto.

**Estructura:**

| Componente | Pregunta que responde |
|---|---|
| **C** — Context (Contexto) | ¿Cuál es la situación completa? |
| **O** — Objective (Objetivo) | ¿Qué quiere lograr con esta comunicación? |
| **S** — Style (Estilo) | ¿En qué estilo de redacción? |
| **T** — Tone (Tono) | ¿Qué emoción o actitud debe transmitir? |
| **A** — Audience (Audiencia) | ¿Quién leerá esto? |
| **R** — Response (Formato de respuesta) | ¿En qué formato lo necesita? |

**Ejemplo real — Comunicado a padres de familia sobre nuevo programa de tutoría con IA:**

```
CONTEXT: La Universidad Anáhuac Mayab implementará un programa de tutoría
asistida con inteligencia artificial a partir de enero 2027. El programa
complementa (no reemplaza) la tutoría humana existente. Algunos padres
han expresado preocupación por el uso de IA en la educación de sus hijos.
El Rector ha aprobado el programa.

OBJECTIVE: Informar a los padres sobre el programa, resolver preocupaciones
comunes y generar confianza en la innovación educativa.

STYLE: Redacción institucional de la Universidad Anáhuac Mayab. Claro,
directo, sin tecnicismos. Tratamiento de «usted».

TONE: Tranquilizador pero entusiasta. Transmitir confianza en la decisión,
empatía con las preocupaciones, y orgullo por la innovación.

AUDIENCE: Padres de familia de estudiantes de pregrado, edad promedio
45–55 años, nivel socioeconómico medio-alto. Algunos familiarizados
con IA, la mayoría no.

RESPONSE: Comunicado de máximo 400 palabras con:
- Encabezado institucional
- Párrafo de contexto (por qué se implementa)
- Descripción del programa (qué es)
- Sección de «Preguntas frecuentes» (3 preguntas)
- Datos de contacto
- Cierre cálido
```

**Resultado esperado:** Comunicado profesional con encabezado formal, cuatro secciones bien diferenciadas, preguntas frecuentes que abordan las preocupaciones más comunes (privacidad de datos, reemplazo de tutores humanos, costo adicional), y cierre con invitación a sesión informativa.

**Qué hacer si algo sale mal:**
- Si el tono es demasiado técnico, refine con: «Simplifique el lenguaje. Un padre de familia sin formación tecnológica debe entender cada párrafo.»
- Si el comunicado es demasiado extenso, indique el número exacto de palabras.

---

### Marco 4: BAB — Before, After, Bridge

**Cuándo usarlo:** Para presentaciones de estrategia, planes de transformación o cualquier narrativa que necesite «pintar el contraste» entre la situación actual y el futuro deseado. Especialmente poderoso para presentaciones ante rectoría o consejo directivo.

**Estructura:**

| Componente | Pregunta que responde |
|---|---|
| **B** — Before (Antes) | ¿Cuál es la situación actual? ¿Cuál es el problema? |
| **A** — After (Después) | ¿Cómo se ve el futuro deseado? |
| **B** — Bridge (Puente) | ¿Qué acciones conectan el antes con el después? |

**Ejemplo real — Plan de transformación digital para la Dirección de Escuela:**

```
BEFORE (Situación actual):
La coordinación del programa de Medicina de Anáhuac Mayab opera con
procesos mayormente manuales:
- Los reportes de indicadores se elaboran en Word cada semestre
  (tomando 12–15 horas por reporte)
- Las consultas de alumnos se atienden solo en horario de oficina
- No existe un sistema unificado de seguimiento de tutorados
- El coordinador revisa 5–10 reportes por semana sin herramientas
  de síntesis

AFTER (Futuro deseado):
Para agosto 2027, la coordinación opera con IA integrada:
- Los reportes se generan en 90 minutos con asistencia de IA
- Las consultas frecuentes de alumnos se resuelven con un agente
  disponible fuera de horario, con escalamiento humano cuando
  sea necesario
- Cada tutor tiene un panel con alertas de riesgo por tutorado
- El coordinador recibe un resumen ejecutivo semanal automatizado

BRIDGE (Cómo llegar ahí):
Genere un plan de transformación en 3 fases:
- Fase 1 (Quick Wins — 3 meses): acciones inmediatas de alto impacto
- Fase 2 (Consolidación — 6 meses): integración de herramientas
- Fase 3 (Transformación — 12 meses): automatización completa

Para cada fase incluya: acciones concretas, responsable, inversión
estimada y métricas de éxito. Formato: documento ejecutivo de máximo
3 cuartillas para presentar a la Dirección de Escuela.
```

**Resultado esperado:** Plan de tres fases con acciones priorizadas, tabla de inversión, y métricas de éxito medibles. La Fase 1 incluye «quick wins» como la creación de plantillas de reporte con IA y un banco de respuestas para preguntas frecuentes.

**Qué hacer si algo sale mal:**
- Si el plan es demasiado ambicioso, agregue restricciones: «Presupuesto máximo: $200,000 MXN. Equipo disponible: 1 coordinador + 2 asistentes.»
- Si las fases no son realistas, indique el calendario institucional.

---

### Marco 5: CRIT — Context, Role, Interview, Task

**Cuándo usarlo:** Para decisiones ejecutivas complejas donde usted quiere que la IA le ayude a *pensar mejor* — no solo a ejecutar. La innovación clave es que la IA le hace preguntas antes de responder, como lo haría un consultor senior.

**Estructura:**

| Componente | Pregunta que responde |
|---|---|
| **C** — Context (Contexto) | Información de fondo completa |
| **R** — Role (Rol) | Perspectiva que la IA debe adoptar |
| **I** — Interview (Entrevista) | La IA pregunta ANTES de responder |
| **T** — Task (Tarea) | El entregable final, después de la entrevista |

**Ejemplo real — Decisión estratégica sobre apertura de nuevos programas:**

```
CONTEXT: Soy el Director de Planeación Académica de Anáhuac Mayab.
Estamos evaluando abrir 2 nuevos programas de licenciatura para 2028.
El mercado de Mérida ha crecido con empresas tecnológicas (nearshoring),
pero también hay saturación en carreras tradicionales. Nuestra matrícula
total es de 4,500 alumnos. La competencia principal es Tec de Monterrey
campus Mérida y UADY. Tenemos fuerte vinculación con el sector
empresarial y salud. Nuestro punto débil es la percepción de costos altos.

ROLE: Actúe como consultor senior de estrategia en educación superior,
especializado en mercados de la Península de Yucatán y con conocimiento
del fenómeno de nearshoring.

INTERVIEW: Antes de darme su recomendación, hágame las preguntas que
necesite para entender mejor mi situación. Pregunte sobre:
- Datos que le faltan para hacer un análisis robusto
- Restricciones que debo considerar (presupuesto, infraestructura, planta docente)
- Prioridades institucionales que influyan en la decisión
- Cualquier otro factor que un consultor senior preguntaría

Espere mis respuestas antes de continuar.

TASK: Después de la entrevista, genere un memo ejecutivo con:
- Análisis de 5 opciones de programa con viabilidad estimada
- Matriz de evaluación con criterios ponderados
- Recomendación de los 2 programas prioritarios con justificación
- Plan de validación de mercado en 90 días
```

**Resultado esperado:** La IA responde primero con 5–8 preguntas estratégicas (sobre presupuesto disponible, planta docente, infraestructura existente, programas de la competencia, tendencias del mercado laboral local). Después de que usted responda, genera el memo ejecutivo completo.

> **Recomendación:** Este marco convierte a la IA en un *interlocutor estratégico*. Use CRIT para las decisiones más importantes de su gestión.

**Qué hacer si algo sale mal:**
- Si la IA no hace preguntas y responde directamente, refuerce: «ALTO. Primero necesito que me haga las preguntas. NO responda hasta que yo le proporcione la información adicional.»
- Si las preguntas son superficiales, indique: «Haga preguntas más profundas, como las que haría un consultor de McKinsey en una primera reunión con el cliente.»

---

## Parte 2 — Técnicas avanzadas

### Técnica 1: Cadena de pensamiento (*Chain-of-Thought*)

**Cuándo usarla:** Para decisiones complejas con múltiples variables, donde necesita ver el razonamiento de la IA antes de aceptar una conclusión.

**Cómo funciona:** Agregue a cualquier instrucción la frase: «Piense paso a paso antes de dar su respuesta final.» Esto obliga a la IA a descomponer el problema y mostrar su razonamiento.

**Instrucción exacta:**

```
Soy el Vicerrector Académico de Anáhuac Mayab. Necesito decidir cómo
asignar un excedente presupuestal de $2 millones MXN entre estas opciones:

A) Renovar el laboratorio de cómputo (último upgrade: 2019)
B) Contratar 2 becarios de investigación para el programa de IA
C) Invertir en licencias de herramientas de IA para toda la facultad
D) Crear un fondo de becas de emergencia para alumnos en riesgo

PIENSE PASO A PASO:
1. Evalúe el impacto de cada opción en la retención y atracción de alumnos
2. Evalúe el impacto en el posicionamiento de la universidad
3. Analice el costo-beneficio a 1, 3 y 5 años
4. Considere qué opciones podrían combinarse parcialmente
5. Dé su recomendación con una matriz de decisión ponderada

Muestre su razonamiento completo en cada paso.
```

**Resultado esperado:** Análisis de cinco pasos visibles, con razonamiento explícito en cada uno. Matriz de decisión con criterios ponderados y recomendación fundamentada (posiblemente una combinación parcial de opciones C y D).

> **Nota:** Active el modo **Thinking** en el selector de modelo (Balanced o Smart) para reforzar el razonamiento paso a paso.

### Técnica 2: Enseñar con ejemplos (*Few-shot*)

**Cuándo usarla:** Cuando necesita que la IA replique un formato, estilo o estructura muy específica. En lugar de describir lo que quiere, le muestra 2–3 ejemplos del resultado deseado.

**Cómo funciona:** Incluya ejemplos concretos en su instrucción antes de pedir el resultado.

**Instrucción exacta:**

```
Necesito generar evaluaciones breves de desempeño docente para mi
informe semestral. Siga exactamente este formato:

EJEMPLO 1:
Docente: Mtro. Carlos Rivero — Estadística Aplicada
Evaluación: 8.7/10 | Fortalezas: dominio del tema, puntualidad.
Área de mejora: incorporar casos prácticos locales. Recomendación:
capacitación en aprendizaje basado en problemas.

EJEMPLO 2:
Docente: Dra. Ana Cetina — Derecho Constitucional
Evaluación: 9.2/10 | Fortalezas: metodología activa, retroalimentación
oportuna. Área de mejora: gestión del tiempo en clase. Recomendación:
sesión de coaching con coordinación de innovación educativa.

Ahora genere evaluaciones con el mismo formato para estos docentes:
- Mtro. Roberto Pech — Administración Financiera — Evaluación: 7.4/10
- Dra. María López — Psicología Organizacional — Evaluación: 8.9/10
- Ing. Fernando Canto — Programación I — Evaluación: 6.8/10
```

**Resultado esperado:** Tres evaluaciones que replican exactamente la estructura de los ejemplos: nombre, materia, calificación, fortalezas, área de mejora y recomendación, todo en formato compacto.

### Técnica 3: Instrucciones permanentes (*System prompts* en agentes)

**Cuándo usarla:** Cuando tiene un conjunto de reglas que deben aplicarse en *todas* las conversaciones con un agente, sin necesidad de repetirlas cada vez.

**Cómo funciona:** Al crear un agente en Amazon Quick, las instrucciones que usted escribe funcionan como reglas permanentes que el agente siempre sigue.

**Instrucción exacta (para configurar un agente):**

```
Eres el Comunicador Institucional del programa de Psicología de la
Universidad Anáhuac Mayab (Mérida, Yucatán).

REGLAS PERMANENTES:
1. Siempre use tratamiento de «usted» — nunca tutee
2. Todo comunicado debe incluir encabezado con nombre de la universidad
3. El tono es institucional-respetuoso, nunca coloquial
4. Extensión máxima por defecto: 200 palabras (salvo que se indique otro)
5. Siempre cierre con datos de contacto de la coordinación
6. Nunca invente datos: si no tiene información, pregunte
7. Firmante por defecto: Dra. Laura Méndez, Coordinadora de Psicología

CAPACIDADES:
- Redactar comunicados para docentes, estudiantes y padres de familia
- Revisar y mejorar borradores existentes
- Adaptar el mismo mensaje a diferentes audiencias
- Generar respuestas a correos de padres con temas sensibles
```

**Resultado esperado:** El agente genera comunicados consistentes en tono, formato y extensión, sin que usted tenga que repetir estas reglas en cada conversación.

> **Para configurar:** Vaya a Agents & skills → Agents → «+ Create». Pegue las instrucciones anteriores en el campo «Instructions». Guarde el agente.

### Técnica 4: Iteración y refinamiento

**Cuándo usarla:** Siempre. El resultado perfecto en el primer intento es la excepción, no la regla. La iteración es la práctica que distingue al usuario experto.

**Tres comandos de refinamiento:**

| Comando | Cuándo usarlo | Ejemplo |
|---|---|---|
| **Refinar** | Cuando el contenido es correcto pero el estilo no | «Ajuste el tono para que sea más directo y menos extenso.» |
| **Criticar** | Cuando necesita verificación del propio resultado | «Revise su respuesta: ¿omitió algo importante? ¿El tono es apropiado para rectoría?» |
| **Variar** | Cuando necesita opciones para elegir | «Genere 2 versiones: una formal para rectoría y una más cercana para docentes.» |

**Instrucciones exactas de iteración:**

```
[Después de recibir un resultado insatisfactorio]

REFINAR:
«El comunicado anterior es correcto en contenido, pero demasiado
extenso. Redúzcalo a 150 palabras sin perder los puntos clave.»

CRITICAR:
«Revise el análisis que acaba de generar. ¿Los porcentajes están
calculados correctamente? ¿Hay algún dato que pueda ser una
fabricación? Señale cualquier debilidad.»

VARIAR:
«Con base en el mismo análisis, genere:
Versión A: resumen ejecutivo de 1 párrafo para la directora de escuela
Versión B: tabla detallada con semáforo para el comité de acreditación
Versión C: 3 viñetas para incluir en presentación ante rectoría»
```

---

## Parte 3 — Debugging de instrucciones: qué hacer cuando la IA da una respuesta mala

Una respuesta insatisfactoria de la IA no es un fallo de la herramienta — es una señal de que su instrucción necesita ajuste. A continuación, un protocolo paso a paso para diagnosticar y corregir.

### Paso 1 — Diagnostique el problema

| Síntoma | Causa probable | Solución |
|---|---|---|
| Respuesta genérica, sin datos específicos | Falta de contexto en la instrucción | Agregue datos concretos: cifras, nombres, fechas, programa |
| Tono inadecuado (demasiado casual o demasiado técnico) | No especificó audiencia ni tono | Use CO-STAR: defina audiencia y tono explícitamente |
| Respuesta demasiado extensa | No indicó límite de extensión | Agregue: «Máximo X palabras» o «Máximo 1 cuartilla» |
| Datos inventados o cifras sospechosas | La IA «fabrica» información cuando no tiene datos reales | Suba el documento original y pida que cite sus fuentes |
| Formato incorrecto (texto corrido en lugar de tabla) | No especificó formato de salida | Agregue la sección de Formato (F en RCTF) con estructura exacta |
| Respuesta en idioma incorrecto | Amazon Quick puede responder en el idioma detectado | Agregue al inicio: «Responda en español» |

### Paso 2 — Aplique el correctivo

Si la respuesta fue mala, no empiece de cero. Use estas instrucciones de corrección:

**Si faltó contexto:**
```
El análisis anterior es demasiado genérico. Aquí tiene el contexto
específico que necesita: [AGREGAR DATOS]. Regenere el análisis
usando únicamente estos datos.
```

**Si el formato es incorrecto:**
```
El contenido es correcto, pero necesito que lo reorganice así:
1. Tabla con columnas: [COLUMNA 1] | [COLUMNA 2] | [COLUMNA 3]
2. Párrafo ejecutivo de máximo 80 palabras debajo de la tabla
3. 3 recomendaciones en formato de viñetas numeradas
```

**Si sospecha de datos fabricados:**
```
Antes de continuar, verifique: ¿los porcentajes que mencionó provienen
del documento que le compartí, o los generó por su cuenta? Señale
cuáles datos son del documento y cuáles son estimaciones suyas.
```

### Paso 3 — Cambie de marco si es necesario

Si después de dos refinamientos el resultado sigue siendo insatisfactorio, el problema puede ser que está usando el marco incorrecto.

| Si usó... | Y el resultado fue... | Cambie a... |
|---|---|---|
| RCTF | Demasiado superficial | RISE (agregue pasos explícitos) |
| RISE | El tono no es apropiado | CO-STAR (controle audiencia y tono) |
| CO-STAR | Falta profundidad analítica | RISE + Cadena de pensamiento |
| Cualquiera | Necesita explorar opciones | CRIT (deje que la IA pregunte primero) |

### Paso 4 — Última recurso: empiece con un ejemplo

Si nada funciona, proporcione un ejemplo del resultado que espera (técnica *few-shot*) y pida a la IA que lo replique con sus datos:

```
El resultado que necesito se ve EXACTAMENTE así:

[PEGUE AQUÍ UN EJEMPLO DEL FORMATO DESEADO]

Ahora genere el mismo tipo de documento pero con estos datos:
[SUS DATOS]
```

---

## Guía de referencia rápida — ¿Cuál marco uso?

| Situación | Marco recomendado |
|---|---|
| Necesito algo rápido y directo | **RCTF** |
| Escribo un comunicado o email | **CO-STAR** |
| Analizo datos o reportes con verificación | **RISE** |
| Presento un plan de cambio a rectoría | **BAB** |
| Tomo una decisión estratégica compleja | **CRIT** |
| La decisión tiene múltiples variables numéricas | **Cadena de pensamiento** (agregar a cualquier marco) |
| Necesito replicar un formato muy específico | **Enseñar con ejemplos** (*few-shot*) |
| Quiero reglas permanentes en un asistente | **Instrucciones permanentes** (agente en Amazon Quick) |

---

## Tips finales y anti-patrones

| ✅ Haga esto | ❌ Evite esto |
|---|---|
| Empiece con RCTF para todo; migre a otros marcos cuando necesite más control | Memorizar los cinco marcos a la vez; domine primero RCTF |
| Guarde sus mejores instrucciones en un documento para reutilizarlas | Crear cada instrucción desde cero cada vez |
| Itere 2–3 veces antes de dar por bueno un resultado | Aceptar el primer resultado sin revisión |
| Indique siempre la audiencia, el tono y la extensión máxima | Dejar que la IA decida el tono y la longitud del texto |
| Suba sus documentos antes de pedir análisis | Pedir análisis «de memoria» sin datos reales |
| Use «piense paso a paso» para decisiones complejas | Confiar en una respuesta directa para decisiones multivariable |

---

*Documento de Fase 5 — Guía de Instrucciones Avanzadas para Directivos*
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
*Septiembre 2026*
