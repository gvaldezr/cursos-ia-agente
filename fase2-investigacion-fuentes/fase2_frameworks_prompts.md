# 🧠 Frameworks de Prompts para Directivos Universitarios

> **Investigación realizada:** septiembre 2026  
> **Módulo del curso:** Módulo 2 — Frameworks de Prompts  
> **Audiencia:** Directivos y líderes de gestión universitaria (no técnicos)  
> **Nota:** Cada framework incluye un ejemplo específico de gestión universitaria para Anáhuac Mayab

---

## Resumen de los 7 Frameworks

| # | Framework | Acrónimo | Mejor Para | Complejidad |
|---|---|---|---|---|
| 1 | **RISE** | Role, Input, Steps, Expectation | Tareas estructuradas paso a paso | ⭐⭐ Media |
| 2 | **CO-STAR** | Context, Objective, Style, Tone, Audience, Response | Comunicación profesional consistente | ⭐⭐ Media |
| 3 | **RTF** | Role, Task, Format | Solicitudes rápidas y directas | ⭐ Baja |
| 4 | **CRISPE** | Capacity/Role, Insight, Statement, Personality, Experiment | Análisis detallado con variaciones | ⭐⭐⭐ Alta |
| 5 | **Chain-of-Thought (CoT)** | "Piensa paso a paso" | Razonamiento complejo y análisis | ⭐⭐ Media |
| 6 | **BAB** | Before, After, Bridge | Narrativas de cambio y estrategia | ⭐ Baja |
| 7 | **CRIT** | Context, Role, Interview, Task | Decisiones ejecutivas complejas | ⭐⭐⭐ Alta |

---

## Framework 1: RISE — Role, Input, Steps, Expectation

### Origen y Fuente
Framework popularizado en la comunidad de prompt engineering desde 2023-2024. Documentado extensamente por Virtasant, juuzt.ai, y múltiples practioners. La variante **RISEN** (con Narrowing) fue desarrollada por Kyle Balmer (Prompt Entrepreneur). La variante **RISE-M** fue propuesta por SignalWire para agentes IA (julio 2026).

**Fuentes:**
- Virtasant: [virtasant.com](https://www.virtasant.com/ai-today/from-ideas-to-action-5-prompt-frameworks-for-business-leaders) — Verificado sep 2026
- juuzt.ai: [juuzt.ai](https://juuzt.ai/knowledge-base/prompt-frameworks/the-rise-framework/) — Verificado sep 2026
- RISE-M (SignalWire): [signalwire.com/blog](https://signalwire.com/blog/the-rise-m-framework) — Jul 2026

### Estructura

| Componente | Significado | Pregunta Clave |
|---|---|---|
| **R** — Role | ¿Quién debe ser la IA? | "Actúa como un..." |
| **I** — Input | ¿Qué información relevante tiene? | "Aquí están los datos/contexto..." |
| **S** — Steps | ¿Qué pasos debe seguir? | "Primero... luego... finalmente..." |
| **E** — Expectation | ¿Cómo debe verse el resultado? | "Entrega un... en formato..." |

### Ejemplo: Gestión Universitaria — Análisis de Deserción

```
ROLE: Actúa como un analista de retención estudiantil con experiencia 
en universidades privadas mexicanas del sistema Anáhuac.

INPUT: Estos son los datos de deserción del semestre Ene-Jun 2026:
- Carrera de Derecho: 12% deserción (vs. 8% semestre anterior)
- Carrera de Ingeniería Industrial: 15% (vs. 14%)
- Carrera de Medicina: 3% (vs. 3%)
- Promedio institucional: 9% (vs. 7%)
- Las principales causas reportadas en encuestas de salida son: 
  problemas económicos (45%), rendimiento académico (30%), 
  cambio de carrera (15%), motivos personales (10%)

STEPS:
1. Analiza las tendencias de deserción por carrera e identifica cuáles 
   requieren intervención prioritaria
2. Compara con benchmarks de universidades privadas en México 
   (ANUIES reporta 7-10% promedio)
3. Sugiere 3 acciones específicas para cada carrera de riesgo
4. Propón indicadores de alerta temprana que podríamos monitorear 
   mensualmente

EXPECTATION: Entrega un reporte ejecutivo de máximo 2 páginas con:
- Tabla de semáforo (verde/amarillo/rojo) por carrera
- Las 3 acciones prioritarias con responsable y timeline sugerido
- Dashboard de KPIs propuestos (descripción, no gráfico)
- Tono profesional apropiado para presentar ante Rectoría
```

### Cuándo Usar RISE
- Tareas con proceso claro paso a paso
- Cuando necesitas controlar la secuencia del análisis
- Reportes que requieren formato específico
- Ideal para: análisis de datos, generación de reportes, planificación de proyectos

---

## Framework 2: CO-STAR — Context, Objective, Style, Tone, Audience, Response

### Origen y Fuente
Desarrollado por la **Government Technology Agency of Singapore (GovTech)**. Ganó reconocimiento internacional cuando Sheila Teo lo utilizó para ganar la competencia de prompt engineering de GPT-4 en Singapur. Posteriormente adoptado por Adobe en su documentación oficial (Adobe Experience League, junio 2026). Validado académicamente por investigadores de Kennesaw State University con la variante COSTAR-A (arXiv, octubre 2025).

**Fuentes:**
- GovTech Singapore Playbook: [developer.tech.gov.sg](https://www.developer.tech.gov.sg/products/collections/data-science-and-artificial-intelligence/playbooks/prompt-engineering-playbook-beta-v3.pdf) — Verificado sep 2026
- GovTech Empower: [tech.gov.sg](https://www.tech.gov.sg/technews/mastering-the-art-of-prompt-engineering-with-empower/) — Verificado sep 2026
- Adobe Experience League: [experienceleague.adobe.com](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/generate-content/ai-assistant-prompting-guide) — Jun 2026
- COSTAR-A (arXiv): [arxiv.org](https://arxiv.org/abs/2510.12637v1) — Oct 2025

### Estructura

| Componente | Significado | Pregunta Clave |
|---|---|---|
| **C** — Context | ¿Cuál es la situación? | "Estamos en un contexto donde..." |
| **O** — Objective | ¿Qué quiero lograr? | "El objetivo es..." |
| **S** — Style | ¿En qué estilo de escritura? | "Escribe como..." |
| **T** — Tone | ¿Qué emoción/sentimiento transmitir? | "El tono debe ser..." |
| **A** — Audience | ¿Quién leerá esto? | "La audiencia es..." |
| **R** — Response | ¿En qué formato lo necesito? | "Entrega en formato de..." |

### Ejemplo: Gestión Universitaria — Comunicado a Padres de Familia

```
CONTEXT: Anáhuac Mayab implementará un nuevo programa de tutoría 
con inteligencia artificial a partir de enero 2027. El programa 
complementa (no reemplaza) la tutoría humana existente. Algunos 
padres han expresado preocupación por el uso de IA en la educación 
de sus hijos. El Rector ha aprobado el programa.

OBJECTIVE: Redactar un comunicado que informe a los padres sobre el 
programa, resuelva preocupaciones comunes, y genere entusiasmo por 
la innovación educativa.

STYLE: Redacción institucional profesional, similar a comunicados 
oficiales de universidades Anáhuac. Claro, directo, sin tecnicismos.

TONE: Tranquilizador pero entusiasta. Transmitir confianza en la 
decisión, empatía con las preocupaciones, y orgullo por la innovación.

AUDIENCE: Padres de familia de estudiantes de pregrado, edad 
promedio 45-55 años, nivel socioeconómico medio-alto, mayoría 
profesionistas. Algunos familiarizados con IA, muchos no.

RESPONSE: Comunicado de máximo 500 palabras con:
- Encabezado institucional
- Párrafo de contexto (por qué)
- Descripción del programa (qué)
- Sección de "Preguntas frecuentes" (3-4 preguntas)
- Datos de contacto para más información
- Cierre cálido
```

### Cuándo Usar CO-STAR
- Comunicación externa (padres, comunidad, medios)
- Cuando la audiencia y el tono son críticos
- Contenido que debe transmitir una marca/voz institucional
- Ideal para: comunicados, emails masivos, contenido web, discursos

---

## Framework 3: RTF — Role, Task, Format

### Origen y Fuente
Es el framework más simple y ampliamente enseñado. Documentado como estándar básico en múltiples guías, incluyendo KnowledgeHut, ChatGPT AI Hub, y Virtasant. La versión técnica avanzada (Read, Think, Formulate) es diferente y se usa en investigación de IA; aquí nos referimos a la versión ejecutiva.

**Fuentes:**
- KnowledgeHut: [knowledgehut.com](https://www.knowledgehut.com/blog/artificial-intelligence/prompt-engineering-frameworks-rtf-crispe-costar) — Jun 2026
- Virtasant: [virtasant.com](https://www.virtasant.com/ai-today/from-ideas-to-action-5-prompt-frameworks-for-business-leaders) — Verificado sep 2026
- ChatGPT AI Hub: [chatgptaihub.com](https://chatgptaihub.com/advanced-prompt-engineering-frameworks-2026-rtf-create-cot-react-dspy/) — May 2026

### Estructura

| Componente | Significado | Pregunta Clave |
|---|---|---|
| **R** — Role | ¿Qué experto necesito? | "Eres un..." |
| **T** — Task | ¿Qué tarea específica? | "Tu tarea es..." |
| **F** — Format | ¿En qué formato la salida? | "Preséntalo como..." |

### Ejemplo: Gestión Universitaria — Preparación de Junta Directiva

```
ROLE: Eres un consultor senior de educación superior especializado 
en gobernanza universitaria.

TASK: Revisa esta agenda de la próxima Junta de Gobierno de 
Anáhuac Mayab y genera 3 preguntas estratégicas que los consejeros 
podrían hacer sobre cada punto, más 2 datos de benchmarking que 
respalden la discusión.

FORMAT: Tabla con columnas: Punto de Agenda | Preguntas Estratégicas | 
Datos de Benchmark. Máximo 1 página.
```

### Cuándo Usar RTF
- Solicitudes rápidas y directas
- Cuando no necesitas controlar el proceso intermedio
- Tareas simples de una sola iteración
- Ideal para: borradores rápidos, resúmenes, traducciones, preguntas puntuales
- **Recomendación:** Es el framework "de entrada" perfecto para principiantes. Una vez dominado, migrar a RISE o CO-STAR.

---

## Framework 4: CRISPE — Capacity/Role, Insight, Statement, Personality, Experiment

### Origen y Fuente
Documentado inicialmente por Matt Nigh y popularizado en la comunidad de prompt engineering durante 2023. Referenciado extensamente en Prompt Builder (promptbuilder.cc), Taskade, y KnowledgeHut. Es uno de los frameworks más completos y detallados.

**Fuentes:**
- Prompt Builder: [promptbuilder.cc](https://promptbuilder.cc/blog/prompt-frameworks-2025/) — Ago 2025
- KnowledgeHut: [knowledgehut.com](https://www.knowledgehut.com/blog/artificial-intelligence/prompt-engineering-frameworks-rtf-crispe-costar) — Jun 2026
- Taskade: [taskade.com/wiki/ai/prompt-engineering](https://www.taskade.com/wiki/ai/prompt-engineering) — Jul 2026
- Medium (Denis): [sourcingdenis.medium.com](https://sourcingdenis.medium.com/crispe-prompt-engineering-framework-e47eaaf83611) — May 2023

### Estructura

| Componente | Significado | Pregunta Clave |
|---|---|---|
| **C** — Capacity & Role | ¿Qué expertise tiene la IA? | "Eres un experto con X años de experiencia en..." |
| **R** (incluido en C) | (Rol integrado en Capacity) | — |
| **I** — Insight | ¿Qué contexto necesita saber? | "Mi situación es... los datos son..." |
| **S** — Statement | ¿Qué tarea concreta? | "Necesito que..." |
| **P** — Personality | ¿Qué tono y estilo? | "Comunícalo de forma..." |
| **E** — Experiment | ¿Quiero variaciones? | "Dame X opciones distintas" |

### Ejemplo: Gestión Universitaria — Estrategia de Marketing para Nuevo Programa

```
CAPACITY & ROLE: Eres un estratega de marketing educativo con 
15 años de experiencia en universidades privadas premium de México. 
Has lanzado exitosamente 20+ programas nuevos y conoces el mercado 
de educación superior en Yucatán y la Península.

INSIGHT: Anáhuac Mayab lanzará una Maestría en Inteligencia 
Artificial Aplicada a los Negocios en agosto 2027. El mercado 
objetivo son profesionistas de 28-40 años en Mérida y la 
Península de Yucatán. Competidores directos: Tec de Monterrey 
campus Mérida (ya tiene programas IA), UADY (precio más bajo). 
Nuestro diferenciador: enfoque práctico + red empresarial Anáhuac. 
Presupuesto de marketing: $500,000 MXN para el lanzamiento.

STATEMENT: Diseña una estrategia de lanzamiento para los primeros 
6 meses que maximice inscripciones en la primera generación 
(meta: 25 alumnos).

PERSONALITY: Directo, orientado a resultados, con datos. Sin 
florituras. Como un consultor de McKinsey hablándole a un VP.

EXPERIMENT: Dame 3 enfoques distintos:
1. Enfoque digital-first (80% online)
2. Enfoque relacional-events (60% eventos presenciales)
3. Enfoque híbrido balanceado
Para cada uno incluye: canales, presupuesto desglosado, y KPIs 
a 3 y 6 meses.
```

### Cuándo Usar CRISPE
- Cuando necesitas análisis profundo con contexto de negocio específico
- Tareas de marketing, estrategia o consultoría
- Cuando quieres explorar múltiples opciones antes de decidir
- Ideal para: estrategia, campañas, propuestas de valor, análisis competitivo

---

## Framework 5: Chain-of-Thought (CoT) — "Piensa Paso a Paso"

### Origen y Fuente
Propuesto formalmente por investigadores de Google Brain: **Jason Wei, Xuezhi Wang, Dale Schuurmans et al.** en el paper "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (NeurIPS, 2022). Es el framework con mayor respaldo académico y ha demostrado mejoras significativas en benchmarks de razonamiento matemático (GSM8K) y sentido común (Big-Bench Hard).

**Fuentes:**
- Paper original: Wei et al. (2022), "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", NeurIPS 2022 — [arxiv.org/abs/2201.11903](https://arxiv.org/abs/2201.11903)
- IBM: [ibm.com/think/topics/chain-of-thoughts](https://www.ibm.com/think/topics/chain-of-thoughts/) — May 2026
- ChatGPT AI Hub: [chatgptaihub.com](https://chatgptaihub.com/advanced-prompt-engineering-frameworks-2026-rtf-create-cot-react-dspy/) — May 2026

### Estructura
No tiene acrónimo fijo. Es una **instrucción** que se agrega a cualquier prompt:

> "Piensa paso a paso antes de dar tu respuesta final."

O más sofisticado:

> "Antes de responder, descompone el problema en pasos. Muestra tu razonamiento para cada paso. Solo después de completar todos los pasos, da tu conclusión final."

### Ejemplo: Gestión Universitaria — Decisión Presupuestal Compleja

```
Soy el Vicerrector Administrativo de Anáhuac Mayab. Necesito decidir 
cómo asignar un excedente presupuestal de $2 millones MXN.

Las opciones son:
A) Renovar el laboratorio de cómputo (último upgrade: 2019)
B) Contratar 2 becarios de investigación para el programa de IA
C) Invertir en licencias de herramientas IA para toda la facultad
D) Crear un fondo de becas de emergencia para alumnos en riesgo

PIENSA PASO A PASO:

1. Primero, evalúa el impacto de cada opción en la matrícula 
   (retención y atracción de nuevos alumnos)
2. Luego, evalúa el impacto en el posicionamiento/marca de la 
   universidad
3. Después, analiza el costo-beneficio a 1, 3 y 5 años
4. Considera qué opciones podrían combinarse parcialmente
5. Finalmente, da tu recomendación fundamentada con una matriz 
   de decisión

Muestra tu razonamiento completo en cada paso antes de llegar 
a la conclusión.
```

### Cuándo Usar Chain-of-Thought
- Decisiones complejas con múltiples variables
- Análisis financiero o presupuestal
- Resolución de problemas donde quieres ver "el razonamiento"
- Cuando la respuesta directa podría estar equivocada o ser superficial
- **Dato clave:** Las investigaciones muestran que prompts con CoT pueden mejorar la precisión del modelo entre un **20-50%** en tareas de razonamiento (Taskade, 2026; Wei et al., 2022)

---

## Framework 6: BAB — Before, After, Bridge

### Origen y Fuente
Framework adaptado del copywriting clásico (método "Before-After-Bridge" de publicidad). Aplicado a prompt engineering por múltiples practioners, documentado por Virtasant y otras fuentes. Originalmente una técnica de persuasión, funciona excepcionalmente bien para comunicar cambio organizacional.

**Fuentes:**
- Virtasant: [virtasant.com](https://www.virtasant.com/ai-today/from-ideas-to-action-5-prompt-frameworks-for-business-leaders) — Verificado sep 2026

### Estructura

| Componente | Significado | Pregunta Clave |
|---|---|---|
| **B** — Before | ¿Cuál es la situación actual? (el problema) | "Actualmente enfrentamos..." |
| **A** — After | ¿Cómo se ve el futuro deseado? | "Queremos llegar a un punto donde..." |
| **B** — Bridge | ¿Qué acciones conectan el antes con el después? | "El camino para lograrlo incluye..." |

### Ejemplo: Gestión Universitaria — Presentación de Plan de Transformación Digital

```
BEFORE (Situación actual):
Anáhuac Mayab actualmente opera con procesos mayormente manuales 
en áreas clave: la inscripción requiere 5 pasos presenciales, los 
reportes de coordinadores se elaboran en Word cada semestre 
(tomando ~15 horas por reporte), las consultas de alumnos se 
atienden solo en horario de oficina (8am-5pm), y no existe un 
sistema unificado de seguimiento de casos de tutoría.

AFTER (Futuro deseado):
Para agosto 2028, queremos que: la inscripción sea 100% digital 
con asistente IA disponible 24/7, los reportes se generen 
automáticamente con datos en tiempo real, las consultas estudiantiles 
se resuelvan en menos de 2 minutos con chatbot + escalamiento 
humano, y cada tutor tenga un dashboard personalizado de sus 
tutorados con alertas de riesgo.

BRIDGE (Cómo llegar ahí):
Genera un plan de transformación en 3 fases (Quick Wins en 3 meses, 
Consolidación en 12 meses, Transformación Completa en 24 meses) 
que conecte el ANTES con el DESPUÉS. Para cada fase incluye: 
acciones concretas, presupuesto estimado, equipo necesario, 
y métricas de éxito. Formato: presentación ejecutiva para Consejo 
Directivo, máximo 10 slides narrativos.
```

### Cuándo Usar BAB
- Presentaciones de estrategia o transformación
- Comunicar visión de cambio a stakeholders
- Propuestas que necesitan "pintar" el contraste antes/después
- Ideal para: presentaciones a Rectoría, planes estratégicos, casos de negocio para inversión

---

## Framework 7: CRIT — Context, Role, Interview, Task

### Origen y Fuente
Desarrollado por **Geoff Woods**, autor del bestseller *"The AI-Driven Leader"*. Woods lo creó específicamente para ejecutivos, después de observar que los frameworks tradicionales trataban a la IA como asistente pasivo, cuando podía funcionar como **thought partner activo**. La innovación clave es el paso de "Interview" donde la IA hace preguntas antes de responder.

**Fuentes:**
- Virtasant (con citas directas de Woods): [virtasant.com](https://www.virtasant.com/ai-today/from-ideas-to-action-5-prompt-frameworks-for-business-leaders) — Verificado sep 2026
- Geoff Woods, *The AI-Driven Leader* (libro)

### Estructura

| Componente | Significado | Pregunta Clave |
|---|---|---|
| **C** — Context | Información profunda de fondo | "Mi contexto completo es..." |
| **R** — Role | Perspectiva que la IA debe adoptar | "Quiero que actúes como..." |
| **I** — Interview | La IA pregunta ANTES de responder | "Antes de responder, hazme las preguntas que necesites" |
| **T** — Task | El entregable final | "Cuando tengas toda la información, genera..." |

### Ejemplo: Gestión Universitaria — Decisión Estratégica sobre Oferta Académica

```
CONTEXT: Soy el Director de Planeación Académica de Anáhuac Mayab. 
Estamos evaluando abrir 2 nuevos programas de licenciatura para 
2028. El mercado de Mérida ha crecido con empresas tech (nearshoring), 
pero también hay saturación en carreras tradicionales. Nuestra 
matrícula total es de X alumnos, la competencia principal es Tec 
Mérida y UADY. Tenemos fuerte vinculación con el sector empresarial 
y salud. Nuestro punto débil es la percepción de costos altos.

ROLE: Actúa como un consultor senior de estrategia en educación 
superior, especializado en mercados emergentes de Latinoamérica y 
con conocimiento del fenómeno de nearshoring en la Península de 
Yucatán.

INTERVIEW: Antes de darme tu recomendación, hazme las preguntas 
que necesites para entender mejor mi situación. Pregunta sobre:
- Datos que te faltan para hacer un análisis robusto
- Restricciones que debo considerar
- Prioridades institucionales que influyan en la decisión
- Cualquier otro factor que un consultor senior preguntaría

Espera mis respuestas antes de continuar.

TASK: Después de la entrevista, genera un memo ejecutivo de 
recomendación con: análisis de 5 opciones de programa, matriz 
de evaluación con criterios ponderados, recomendación top-2 con 
justificación, y plan de validación de mercado en 90 días.
```

### Cuándo Usar CRIT
- Decisiones ejecutivas complejas donde faltan datos
- Cuando quieres que la IA sea tu "sparring partner"
- Sesiones de estrategia donde la IA te ayuda a pensar mejor
- Ideal para: decisiones de alta dirección, planificación estratégica, evaluación de opciones complejas
- **Insight de Woods:** "No se trata de pedirle respuestas a la IA, sino de que la IA te haga las preguntas correctas." (Virtasant)

---

## 📋 Guía Rápida: ¿Cuál Framework Uso?

| Situación | Framework Recomendado | Razón |
|---|---|---|
| Necesito algo rápido | **RTF** | 3 componentes, resultados inmediatos |
| Escribo un comunicado o email | **CO-STAR** | Controla audiencia, tono y formato |
| Analizo datos o reportes | **RISE** | Proceso paso a paso controlado |
| Necesito opciones de estrategia | **CRISPE** | Genera variaciones y explora opciones |
| Tomo una decisión compleja | **Chain-of-Thought** | Fuerza razonamiento transparente |
| Presento un plan de cambio | **BAB** | Narrativa antes/después poderosa |
| Necesito un "thought partner" | **CRIT** | La IA pregunta antes de responder |

---

## 🔄 Combinación Avanzada: Mega-Framework

Para tareas críticas, se pueden combinar frameworks. Ejemplo:

1. **Empieza con CRIT** → la IA te entrevista para entender bien
2. **Agrega Chain-of-Thought** → razonamiento paso a paso
3. **Cierra con CO-STAR** → el deliverable final con tono y formato preciso

```
[CRIT] Antes de empezar, hazme 5 preguntas para entender mejor 
mi contexto...

[Después de la entrevista]

[CoT] Ahora, piensa paso a paso:
1. Analiza los datos que te di
2. Identifica patrones
3. Genera opciones
4. Evalúa trade-offs

[CO-STAR] Finalmente, presenta tu recomendación:
- Context: [ya lo tienes de la entrevista]
- Objective: recomendación ejecutiva
- Style: consultor senior de McKinsey
- Tone: directo, basado en datos
- Audience: Rector y Consejo Directivo
- Response: memo de 2 páginas con tabla de recomendaciones
```

---

## 📊 Dato de Respaldo: Impacto de Prompts Estructurados

> **"Un buen prompt puede mejorar la precisión de las respuestas de IA entre un 20-50%"**  
> — Taskade Wiki, Prompt Engineering 2026 ([taskade.com](https://www.taskade.com/wiki/ai/prompt-engineering))

> **"AI tools like ChatGPT can boost workforce productivity by an average of 14%, with some companies reporting gains of up to 400%"**  
> — Virtasant, citando múltiples fuentes de investigación ([virtasant.com](https://www.virtasant.com/ai-today/from-ideas-to-action-5-prompt-frameworks-for-business-leaders))

> **"Using AI skillfully requires context. She used a framework to define that context."**  
> — Virtasant, historia de Jennifer vs. David — misma herramienta, resultados radicalmente diferentes ([virtasant.com](https://www.virtasant.com/ai-today/from-ideas-to-action-5-prompt-frameworks-for-business-leaders))

---

> **Nota metodológica:** Todos los frameworks fueron verificados en sus fuentes originales o documentación primaria. Los ejemplos de gestión universitaria fueron creados específicamente para el contexto de Anáhuac Mayab y pueden adaptarse según las necesidades del curso. Las URLs fueron consultadas en septiembre 2026.
