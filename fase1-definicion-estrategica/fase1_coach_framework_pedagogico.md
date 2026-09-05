# Framework Pedagógico: IA Práctica para Líderes
## Universidad Anáhuac Mayab — Diseño Instruccional

---

## 1. Modelo de AI Literacy Aplicado a Directivos No-Técnicos

### Síntesis de Frameworks

Este modelo integra tres marcos de referencia internacionales, adaptados para **líderes universitarios sin formación técnica**:

| Framework | Aportación al curso | Adaptación para directivos |
|-----------|---------------------|---------------------------|
| **UNESCO AI Competency Framework (2024)** | Estructura por niveles de competencia: mentalidad humana, ética, fundamentos, aplicación | Eliminamos la dimensión técnica-ingenieril. Priorizamos *uso con criterio* y *gobernanza institucional* |
| **Stanford AI Literacy (HAI)** | Énfasis en comprensión conceptual antes que habilidad técnica; pensamiento crítico ante outputs de IA | Traducimos a decisiones reales de gestión: "¿confío en este dato?", "¿apruebo este comunicado generado?" |
| **RAIL-Ed (2026)** | Responsabilidad, Agencia, Integridad y Literacidad como ejes transversales | Aplicamos al rol del directivo como *regulador informal*: quien define políticas de uso en su área |

### Principio Rector

> **"No formamos ingenieros de IA. Formamos líderes que saben cuándo usar IA, cuándo desconfiar de ella y cuándo prohibirla."**

El directivo no necesita saber *cómo* funciona un transformer. Necesita saber:
- Qué puede pedir y qué NO puede pedir a una IA
- Cómo evaluar si el resultado es confiable
- Qué riesgos institucionales genera el uso irresponsable
- Cómo orquestar IA para que su equipo sea más productivo

---

## 2. Tres Niveles de Competencia → 8 Módulos

### Mapa de Progresión

```
NIVEL 1: CONSCIENCIA (Módulos 1-3)
"Entiendo qué es esto y por qué me importa"
├── Módulo 1: Qué es IA generativa (y qué NO es)
├── Módulo 2: Tu primera conversación útil con IA
└── Módulo 3: El arte de pedir bien (prompt como instrucción directiva)

NIVEL 2: COMPETENCIA (Módulos 4-6)
"Puedo usarla de forma productiva y segura"
├── Módulo 4: IA con tus propios documentos (RAG / knowledge)
├── Módulo 5: Pensamiento crítico: detectar errores y sesgos
└── Módulo 6: Flujos de trabajo reales con IA

NIVEL 3: AGENCIA (Módulos 7-8)
"Lidero la adopción de IA en mi área"
├── Módulo 7: Agentes y automatización para directivos
└── Módulo 8: Estrategia de IA para tu área — plan de adopción
```

---

## 3. Detalle por Módulo

---

### NIVEL 1: CONSCIENCIA — "Entiendo qué es esto y por qué me importa"

---

#### MÓDULO 1: Qué es IA Generativa (y Qué NO Es)

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **distinguir** (Comprender) qué puede y qué no puede hacer la IA generativa, identificando al menos 3 capacidades reales y 3 mitos comunes, usando lenguaje propio de su contexto directivo.

**Concepto central:** La IA generativa es una herramienta de predicción de texto, no un cerebro. Genera lo *más probable*, no lo *más verdadero*.

**Analogía clave:**
> 🔑 **La IA es como un asistente recién contratado con memoria fotográfica pero cero criterio.** Leyó todo internet, puede redactar casi cualquier cosa, pero no sabe si lo que escribe es verdad. No tiene experiencia en TU universidad, no conoce TUS políticas, y si le preguntas algo que no sabe, inventará una respuesta convincente en lugar de decir "no sé". Tu trabajo como directivo es ser el supervisor de este asistente.

**Actividad práctica (10 min):**
- Abrir Amazon Quick
- Pedirle algo que SÍ sabe hacer bien: "Resúmeme las 3 tendencias principales en educación superior para 2026 en México"
- Pedirle algo que NO puede saber: "¿Cuántos alumnos tiene la Anáhuac Mayab en el programa de Derecho?"
- Comparar ambas respuestas. Reflexión: ¿cómo distinguiste cuál era confiable?

**Evaluación/Evidencia:**
- Mini-reflexión escrita (3 oraciones): "La IA generativa puede ayudarme en ___. No debo confiar en ella para ___. El riesgo más grande para mi área sería ___."

---

#### MÓDULO 2: Tu Primera Conversación Útil con IA

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **generar** (Aplicar) al menos un producto útil para su trabajo real — un borrador de comunicado, un resumen ejecutivo o un análisis preliminar — usando una conversación guiada con IA.

**Concepto central:** La IA no es un buscador. Es un interlocutor. La calidad de lo que recibes depende de la calidad de lo que comunicas.

**Analogía clave:**
> 🔑 **Hablarle a la IA es como darle instrucciones a alguien por teléfono que no puede verte.** Si dices "hazme un reporte", obtendrás algo genérico. Si dices "hazme un reporte ejecutivo de 1 página para el rector sobre la tasa de retención del primer semestre, con tono formal, destacando las 3 principales causas de deserción y recomendaciones accionables", obtendrás algo que puedes usar. No es magia — es comunicación precisa.

**Actividad práctica (10 min):**
- Tomar un problema REAL de su semana actual
- Escribir la instrucción en Amazon Quick como si fuera un memo para un subordinado
- Iterar: si el resultado no es útil, agregar contexto ("mi audiencia es...", "el tono debe ser...", "lo necesito para...")
- Guardar el mejor resultado como evidencia

**Evaluación/Evidencia:**
- Captura de pantalla del output final + anotación de cuántas iteraciones necesitó y qué cambió entre la primera instrucción y la última.

---

#### MÓDULO 3: El Arte de Pedir Bien — Prompt como Instrucción Directiva

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **estructurar** (Analizar) instrucciones efectivas para IA usando el marco ROL-CONTEXTO-TAREA-FORMATO, adaptándolo a necesidades reales de gestión universitaria.

**Concepto central:** Un prompt no es una búsqueda de Google. Es una instrucción de trabajo. Los mismos principios que usas para delegar bien aplican para instruir IA.

**Analogía clave:**
> 🔑 **Escribir un buen prompt es como escribir un buen memo de encargo.** ¿Le dirías a tu equipo "haz algo de marketing"? No. Le dirías: "Necesito una propuesta de campaña para el programa de Maestría en Educación, dirigida a egresados de licenciatura menores de 30 años, para redes sociales, con presupuesto máximo de $50,000, entregable el viernes." Con la IA aplica exactamente lo mismo.

**Estructura enseñada — Marco RCTE:**

| Elemento | Qué es | Ejemplo directivo |
|----------|--------|--------------------|
| **R**ol | Quién quieres que sea la IA | "Actúa como analista de planeación académica" |
| **C**ontexto | La situación específica | "Nuestra universidad tiene 12,000 alumnos y 3 campus" |
| **T**area | Qué necesitas exactamente | "Redacta un diagnóstico de las causas de baja matrícula en Ingeniería" |
| **E**specificaciones | Formato, tono, extensión, restricciones | "Máximo 1 página, tono ejecutivo, con datos y recomendaciones" |

**Actividad práctica (15 min):**
- Ejercicio "Del memo vago al memo preciso": reciben 3 prompts mal escritos y deben mejorarlos usando el marco RCTE
- Después, ejecutar su mejor prompt en Amazon Quick y evaluar el resultado
- Comparar en parejas: ¿quién obtuvo mejor resultado? ¿Por qué?

**Evaluación/Evidencia:**
- "Biblioteca de 3 prompts": el participante entrega 3 instrucciones RCTE listas para usar en su trabajo real, con el output generado y una calificación propia (1-5) de utilidad.

---

### NIVEL 2: COMPETENCIA — "Puedo usarla de forma productiva y segura"

---

#### MÓDULO 4: IA con Tus Propios Documentos

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **utilizar** (Aplicar) IA para analizar, resumir y extraer información de sus propios documentos institucionales (reportes, minutas, políticas), identificando cuándo el resultado es fiel al documento y cuándo la IA está "inventando".

**Concepto central:** La IA es más útil cuando trabaja con TUS datos, no con internet. Pero incluso con tus documentos, puede malinterpretar o inventar. Debes verificar.

**Analogía clave:**
> 🔑 **RAG (Retrieval-Augmented Generation) es como darle a tu asistente una carpeta con documentos ANTES de que redacte.** Sin la carpeta, el asistente escribe de memoria (y a veces inventa). Con la carpeta, busca primero en tus documentos y luego redacta basándose en ellos. No es perfecto — a veces lee mal, a veces mezcla información de dos documentos — pero es MUCHO mejor que dejarlo escribir de memoria. En Amazon Quick, subir archivos o conectar carpetas es "darle la carpeta".

**Analogía complementaria — Tokens:**
> 🔑 **Los tokens son las "unidades de lectura" de la IA.** Imagina que la IA lee con una ventana de cierto tamaño. Si tu documento es más largo que esa ventana, la IA no puede ver todo al mismo tiempo. Es como pedirle a alguien que lea un libro de 500 páginas pero solo puede tener abiertas 20 páginas a la vez. Por eso, a veces "olvida" información que está al principio de un documento largo.

**Actividad práctica (15 min):**
- Subir un documento REAL de trabajo a Amazon Quick (reporte, minuta, política)
- Pedir: "Resume los 5 puntos más importantes de este documento"
- Verificar: ¿Los 5 puntos realmente están en el documento? ¿Alguno fue inventado?
- Pedir algo más específico: "¿Qué dice este documento sobre [tema específico]?"
- Marcar con ✅ lo correcto y ❌ lo inventado

**Evaluación/Evidencia:**
- Reporte de verificación: tabla de 5 afirmaciones de la IA con veredicto (correcto/incorrecto/parcial) y evidencia del documento original que lo respalde.

---

#### MÓDULO 5: Pensamiento Crítico — Detectar Errores y Sesgos

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **evaluar** (Evaluar) críticamente los outputs de IA generativa, identificando alucinaciones, sesgos, omisiones y limitaciones, y tomando decisiones informadas sobre qué usar, qué corregir y qué descartar.

**Concepto central:** El módulo más importante del curso. La competencia #1 de un directivo que usa IA no es saber pedir — es saber desconfiar con método.

**Analogía clave — Alucinaciones:**
> 🔑 **Una alucinación de IA es como un subordinado que, en vez de decir "no tengo ese dato", inventa una cifra con total confianza.** La IA nunca dice "no sé". Siempre genera una respuesta, aunque sea falsa. Y lo peor: las respuestas falsas suenan EXACTAMENTE igual que las verdaderas. No tartamudea, no duda, no pone asteriscos. Por eso, el directivo que confía ciegamente en IA es más peligroso que el que no la usa.

**Analogía clave — Sesgo:**
> 🔑 **La IA tiene los prejuicios de todo lo que leyó.** Si internet dice más cosas positivas de universidades privadas que públicas, la IA reflejará ese sesgo. Si hay más textos en inglés sobre un tema, la IA "pensará" desde esa perspectiva. No es neutral. Nunca lo es. Es un espejo de los datos con los que fue entrenada, con todos sus sesgos amplificados.

**Analogía clave — Temperatura:**
> 🔑 **La temperatura es el "nivel de creatividad" de la IA.** Temperatura baja = respuestas más predecibles y conservadoras (bueno para datos, reportes, análisis). Temperatura alta = respuestas más creativas y variadas (bueno para lluvia de ideas, naming, textos creativos). Es como el dial entre "contrador formal" y "director creativo".

**Actividad práctica (20 min) — "El Juicio del Director":**
- La IA genera un análisis sobre un tema de su área (ej: "tendencias de matrícula en universidades del sureste")
- El participante debe actuar como JUEZ:
  - Subrayar en verde: afirmaciones verificables y probablemente correctas
  - Subrayar en amarillo: afirmaciones plausibles pero no verificadas
  - Subrayar en rojo: afirmaciones sospechosas o verificablemente falsas
- Buscar al menos una afirmación falsa (siempre hay alguna)
- Reflexión: "Si hubiera enviado este texto sin revisarlo al rector, ¿qué consecuencia tendría?"

**Evaluación/Evidencia:**
- "Dictamen de confiabilidad": documento donde el participante evalúa un output de IA con el sistema de semáforo (verde/amarillo/rojo), justificando cada clasificación. Incluye decisión final: usar / corregir y usar / descartar.

---

#### MÓDULO 6: Flujos de Trabajo Reales con IA

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **diseñar** (Crear) un flujo de trabajo completo que integre IA en un proceso real de su área, identificando las fases donde IA agrega valor, las fases donde el humano es insustituible y los puntos de verificación necesarios.

**Concepto central:** La IA no reemplaza un proceso — se inserta en fases específicas. El directivo decide DÓNDE y con qué supervisión.

**Analogía clave:**
> 🔑 **Integrar IA en tu trabajo es como tener un copiloto, no un piloto automático.** El copiloto puede encargarse de tareas rutinarias (borradores, resúmenes, análisis preliminares), pero el piloto (tú) decide el rumbo, verifica los instrumentos y toma las decisiones críticas. La pregunta no es "¿puede la IA hacer esto?" sino "¿en qué parte de MI proceso la IA me ahorra más tiempo sin comprometer la calidad?"

**Mapa de integración enseñado:**

```
PROCESO TÍPICO DE UN DIRECTIVO:
                                                          
1. Recibir información  →  IA resume, extrae datos clave
2. Analizar             →  IA genera análisis preliminar; TÚ validas
3. Decidir              →  TÚ decides (IA puede mostrar escenarios)
4. Comunicar            →  IA redacta borrador; TÚ apruebas tono y contenido
5. Dar seguimiento      →  IA organiza pendientes, genera recordatorios
```

**Actividad práctica (20 min):**
- Mapear un proceso REAL de su área (ej: "preparar el informe mensual para rectoría")
- Identificar en cada fase: ¿la IA ayuda aquí? ¿Cómo? ¿Qué riesgo hay?
- Ejecutar al menos 2 fases con Amazon Quick
- Documentar el tiempo ahorrado vs. el tiempo invertido en verificar

**Evaluación/Evidencia:**
- "Mapa de proceso IA-asistido": diagrama simple (puede ser tabla) mostrando su proceso actual, dónde se inserta IA, qué verifica el humano y el ahorro estimado. Incluye 1 output real generado con IA.

---

### NIVEL 3: AGENCIA — "Lidero la adopción de IA en mi área"

---

#### MÓDULO 7: Agentes y Automatización para Directivos

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **configurar** (Crear) un agente especializado en Amazon Quick para una tarea recurrente de su área, y **explicar** a su equipo cómo usarlo de forma segura y efectiva.

**Concepto central:** Un agente es una IA con instrucciones permanentes y acceso a tus documentos. No es un chat genérico — es una herramienta diseñada para UNA función específica de tu área.

**Analogía clave — Agentes:**
> 🔑 **Un agente de IA es como tener un puesto especializado que nunca se va de vacaciones.** Imagina que pudieras clonar a tu mejor analista, darle acceso solo a los documentos que necesita, instruirlo exactamente sobre cómo quieres los reportes, y que estuviera disponible 24/7. Eso es un agente. No reemplaza personas — reemplaza las tareas repetitivas que consumen el tiempo de tus personas.

**Actividad práctica (25 min):**
- Identificar UNA tarea recurrente en su área (ej: "responder preguntas frecuentes sobre el proceso de inscripción", "generar borradores de minutas de reunión", "analizar reportes mensuales de indicadores")
- Crear un agente en Amazon Quick con:
  - Nombre descriptivo
  - Instrucciones específicas (basadas en el marco RCTE del Módulo 3)
  - Documentos de referencia subidos
- Probar el agente con 3 preguntas reales
- Evaluar: ¿responde bien? ¿Qué le falta? Iterar instrucciones.

**Evaluación/Evidencia:**
- Agente funcional creado en Amazon Quick + documento de "ficha técnica del agente": nombre, propósito, instrucciones, documentos que usa, limitaciones conocidas y protocolo de uso para el equipo.

---

#### MÓDULO 8: Estrategia de IA para Tu Área — Plan de Adopción

**Objetivo de aprendizaje (Bloom adaptado a IA):**
> El participante será capaz de **diseñar** (Crear) un plan de adopción de IA para su área que incluya casos de uso priorizados, política de uso responsable, gestión del cambio con su equipo y métricas de impacto.

**Concepto central:** La IA no se adopta por decreto. Se adopta por valor demostrado, reglas claras y acompañamiento. El directivo es el catalizador.

**Analogía clave:**
> 🔑 **Adoptar IA en tu área es como implementar un nuevo sistema: si no capacitas, no regulas y no mides, fracasa.** La diferencia es que la IA es más fácil de usar... y por eso es más fácil de usar MAL. Tu rol como directivo no es solo usar IA — es definir las reglas del juego para tu equipo.

**Actividad práctica (30 min) — "Plan de 90 días":**
- Usando una plantilla guiada, diseñar:

| Elemento | Contenido |
|----------|-----------|
| **3 Quick Wins** | Tareas de su área que IA resuelve en < 5 min (identificadas en módulos anteriores) |
| **Política de uso** | Qué SÍ se puede hacer con IA, qué NO, qué requiere supervisión |
| **Riesgos** | Top 3 riesgos específicos de usar IA en su área + mitigación |
| **Capacitación** | Cómo enseñará a su equipo (puede reusar el curso) |
| **Métricas** | ¿Cómo medirá si la IA está ayudando? (tiempo ahorrado, calidad, satisfacción) |
| **Gobernanza** | ¿Quién revisa outputs de IA? ¿Quién decide qué se automatiza? |

**Evaluación/Evidencia:**
- "Plan de adopción de IA para [nombre del área]": documento ejecutivo de 2 páginas que el directivo puede presentar a su superior. Es el entregable final del curso y la evidencia de que pasó de consciencia a agencia.

---

## 4. Progresión Pedagógica — El Viaje Completo

### De "nunca he usado IA" a "orquesto agentes en mi área"

```
SEMANA/MÓDULO    MENTALIDAD DEL DIRECTIVO              CAPACIDAD ADQUIRIDA
─────────────    ──────────────────────────────         ──────────────────────────
Módulo 1         "¿Esto no es ciencia ficción?"    →   Sabe qué es y qué NO es IA
Módulo 2         "OK, déjame intentarlo..."        →   Puede generar un output útil
Módulo 3         "Ahora sí me salió bien"          →   Sabe pedir con estructura
Módulo 4         "¡Analizó MI reporte!"            →   Usa IA con sus documentos
Módulo 5         "Momento... esto está mal"        →   Detecta errores y sesgos
Módulo 6         "Esto me ahorra 2 horas"          →   Integra IA en su flujo real
Módulo 7         "Mi equipo ya lo está usando"     →   Crea agentes para su área
Módulo 8         "Tengo un plan completo"          →   Lidera adopción institucional
```

### Principio de Andamiaje (Scaffolding)

Cada módulo construye sobre el anterior. No hay saltos:
- **Módulos 1-2**: La IA trabaja para ti (tú pides, ella genera)
- **Módulo 3**: Tú aprendes a pedir mejor (mejora la calidad)
- **Módulos 4-5**: Introduces TUS datos y aprendes a VERIFICAR (profundidad + criterio)
- **Módulo 6**: Integras en tu flujo REAL (aplicación contextualizada)
- **Módulos 7-8**: Tú diseñas y lideras (agencia plena)

### Curva de Autonomía

```
Dependencia ──────────────────────────────────── Autonomía

Mod 1-2:  [████░░░░░░]  Guiado paso a paso
Mod 3:    [██████░░░░]  Guiado con estructura
Mod 4-5:  [████████░░]  Semi-autónomo (verifica)
Mod 6:    [█████████░]  Autónomo supervisado
Mod 7-8:  [██████████]  Autónomo + líder
```

---

## 5. Diccionario de Analogías para Directivos

| Concepto técnico | Analogía para directivos | Cuándo usarla |
|-----------------|--------------------------|---------------|
| **LLM (Large Language Model)** | "Un becario que leyó toda la biblioteca pero no tiene experiencia laboral" | Módulo 1 — para explicar capacidades y limitaciones |
| **Tokens** | "Las unidades de lectura de la IA — como cuántas páginas puede tener abiertas al mismo tiempo" | Módulo 4 — cuando suben documentos largos |
| **Prompt** | "Un memo de encargo: entre más preciso, mejor resultado" | Módulo 2-3 — toda la sección de prompts |
| **Temperatura** | "El dial entre contador (conservador) y creativo (arriesgado)" | Módulo 5 — cuando eligen tipo de tarea |
| **Alucinación** | "El subordinado que inventa datos en vez de decir 'no sé'" | Módulo 5 — pensamiento crítico |
| **RAG** | "Darle una carpeta de documentos al asistente ANTES de que redacte" | Módulo 4 — trabajo con documentos propios |
| **Agente** | "Un puesto especializado que nunca se va de vacaciones" | Módulo 7 — creación de agentes |
| **Sesgo / Bias** | "La IA tiene los prejuicios de todo lo que leyó en internet" | Módulo 5 — evaluación crítica |
| **Fine-tuning** | "Entrenar al becario específicamente para tu departamento" | Módulo 7 — para diferenciar de agentes |
| **Contexto / Context window** | "La memoria de corto plazo de la IA — solo recuerda lo de ESTA conversación" | Módulo 2 — cuando la IA "olvida" algo |
| **Grounding** | "Anclar la IA a hechos verificables, no a su imaginación" | Módulo 4-5 — verificación de outputs |
| **Iteración** | "Revisar y corregir el borrador — igual que con cualquier subordinado" | Módulo 2-3 — ciclo de mejora del output |

---

## 6. Ética Transversal — Presente en CADA Módulo

La ética no es un módulo aparte. Es una capa que atraviesa todo el curso:

| Módulo | Dimensión ética integrada |
|--------|--------------------------|
| 1 | **Mitos y responsabilidad**: La IA no piensa, no decide, no tiene opinión. La responsabilidad SIEMPRE es del directivo que firma |
| 2 | **Privacidad desde el primer uso**: ¿Qué datos puedo poner en la IA? ¿Datos de alumnos? ¿Información financiera? Regla: si no lo pondrías en un email a un desconocido, no lo pongas en ChatGPT público |
| 3 | **Integridad en la comunicación**: Si la IA escribió el comunicado, ¿debo decirlo? ¿Dónde está el límite entre "asistida" y "hecha por IA"? |
| 4 | **Confidencialidad de documentos**: Diferencia entre herramientas que procesan datos localmente (Amazon Quick) vs que los envían a la nube pública. Qué documentos NUNCA deben subirse |
| 5 | **Sesgo y equidad**: La IA puede discriminar sin intención. ¿Qué pasa si un análisis de "alumnos en riesgo" tiene sesgos socioeconómicos? El directivo debe auditar |
| 6 | **Impacto laboral**: ¿La IA reemplaza a mi equipo? No — pero cambia lo que se espera de cada puesto. El directivo gestiona esa transición con empatía |
| 7 | **Gobernanza de agentes**: ¿Quién es responsable si un agente genera información incorrecta que se envía a un alumno? Protocolos de supervisión |
| 8 | **Política institucional**: El plan de adopción DEBE incluir una política de uso ético. No es opcional — es el eje central |

---

*Documento generado como parte de la Fase 1 — Diseño instruccional del curso "IA Práctica para Líderes", Universidad Anáhuac Mayab.*
*Framework: UNESCO AI Competency (2024) + Stanford HAI AI Literacy + RAIL-Ed (2026), adaptados para directivos no técnicos.*
