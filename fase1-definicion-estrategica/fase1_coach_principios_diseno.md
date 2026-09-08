# Principios de Diseño Instruccional para Directivos
## Curso "IA Práctica para Líderes" — Universidad Anáhuac Mayab

---

## El Problema Central de Diseño

> **¿Cómo enseñar IA a personas que tienen poco tiempo, mucha responsabilidad, cero paciencia para teoría, y que además necesitan sentir que obtienen valor INMEDIATO?**

Los directivos universitarios no son estudiantes. Son profesionales con agendas saturadas que evalúan cada minuto invertido contra su costo de oportunidad. Si en los primeros 10 minutos no sienten que están produciendo algo útil, el curso se convierte en "otra capacitación más que me obligaron a tomar".

Este documento establece los principios inviolables del diseño del curso.

---

## PRINCIPIO 1: Output Usable en los Primeros 10 Minutos

### La Regla de los 10 Minutos

> **Cada nivel debe producir un output que el directivo pueda usar HOY en su trabajo real antes de que hayan pasado 10 minutos desde que empezó.**

No 10 minutos de teoría y luego práctica. No "primero entiende cómo funciona y luego practica". PRIMERO PRODUCE, después entiende por qué funcionó.

### Implementación por nivel:

| Nivel | Output usable en < 10 min |
|--------|---------------------------|
| 1 | La IA le genera un resumen ejecutivo de un tema de su área — algo que puede reenviar |
| 2 | Tiene un borrador de comunicado/memo que estaba pendiente en su lista |
| 3 | Tiene 3 prompts-plantilla listos para usar mañana |
| 4 | Un resumen de un documento real que tardaba 30 min en leer |
| 5 | Identificó un error que habría cometido si confiara ciegamente (eureka moment) |
| 6 | Un mapa de su proceso donde sabe EXACTAMENTE dónde IA le ahorra tiempo |
| 7 | Un agente funcional que su equipo puede usar esta semana |
| 8 | Un plan de 1 página que puede presentar a su jefe esta semana |

### Estructura interna de cada nivel:

```
MINUTOS 0-2:    Provocación (pregunta o escenario que engancha)
MINUTOS 2-10:   Hands-on guiado (PRODUCE algo útil)
MINUTOS 10-15:  Concepto explicado (ahora entiende POR QUÉ funcionó)
MINUTOS 15-25:  Ejercicio profundo (aplica con más criterio)
MINUTOS 25-30:  Reflexión + ética + evaluación
```

**NO** esta estructura (error clásico):
```
❌ MINUTOS 0-15:  Explicación teórica de conceptos
❌ MINUTOS 15-25: Ejemplo demostrativo
❌ MINUTOS 25-30: "Ahora inténtalo tú" (ya se perdió la atención)
```

---

## PRINCIPIO 2: Cero Tecnicismos, Solo Analogías de Gestión

### La Regla del Almuerzo

> **Si no puede explicar el concepto durante un almuerzo con un colega no-técnico, no lo explique así en el curso.**

### Vocabulario prohibido vs. permitido:

| ❌ NUNCA diga | ✅ SÍ puede decir |
|---|---|
| "Large Language Model" | "Una herramienta que genera texto basándose en patrones que aprendió de millones de documentos" |
| "Transformer architecture" | *(No lo menciones. No es necesario.)* |
| "Neural network" | "Un sistema que encuentra patrones, como un analista que lee miles de reportes y después puede generar uno similar" |
| "Training data" | "Todo lo que la IA leyó para aprender — imagina que leyó gran parte de internet" |
| "Inference" | "Cuando la IA genera una respuesta" |
| "Fine-tuning" | "Entrenamiento especializado — como cuando capacita a alguien para su área específica" |
| "API" | "La conexión que permite que dos herramientas se hablen entre sí" |
| "Embeddings" | *(No lo menciones. No es necesario para el directivo.)* |
| "Vector database" | *(No lo menciones.)* |
| "Hyperparameters" | "Configuraciones que ajustan cómo responde la IA" |
| "Latent space" | *(No lo menciones.)* |
| "Backpropagation" | *(No lo menciones. Nunca.)* |
| "Token limit" | "El límite de cuánto puede leer o escribir la IA en una sola conversación" |
| "Hallucination" | "Cuando la IA inventa información que suena real pero es falsa" |
| "Retrieval-Augmented Generation" | "Cuando la IA busca en SUS documentos antes de responder, en vez de responder de memoria" |
| "Prompt engineering" | "El arte de dar instrucciones claras a la IA" |
| "Agentic AI" | "IA que puede ejecutar pasos por sí sola, como un asistente que no solo redacta sino también envía, busca y organiza" |

### Regla de la primera mención:
Cuando un concepto aparece por PRIMERA VEZ, siempre sigue este patrón:
1. **Analogía primero**: "Es como cuando le da una carpeta a su asistente..."
2. **Nombre coloquial**: "...a eso se le llama 'IA con sus documentos'"
3. **Nombre técnico solo como referencia**: "...(técnicamente se llama RAG, por si lo ves en algún artículo)"

Nunca al revés. Nunca nombre técnico primero.

---

## PRINCIPIO 3: Solo Ejemplos de Gestión Real

### Anti-patrón: El Ejemplo Trivial

> **PROHIBIDO usar estos ejemplos:**
> - "Pídele que escriba un poema" ❌
> - "Pídele una receta de cocina" ❌  
> - "Pídele que explique la relatividad para un niño de 5 años" ❌
> - "Escribe una historia sobre un dragón" ❌
> - "Hazme un plan de viaje a París" ❌

¿Por qué? Porque el directivo piensa: *"Esto es un juguete. No tiene nada que ver con mi trabajo."* Y tiene razón. Si el primer contacto con IA es un poema, ya perdiste al 80% de la sala.

### Patrón correcto: El Ejemplo que Duele

Cada ejemplo debe activar un dolor REAL del directivo:

| Dolor real del directivo | Ejemplo del curso |
|---|---|
| "Paso 2 horas escribiendo el informe mensual para rectoría" | "Suba su reporte de datos y pídale un resumen ejecutivo de 1 página" |
| "Tengo que responder 40 emails similares de docentes cada inicio de semestre" | "Crea un agente que responda preguntas frecuentes basándose en el reglamento" |
| "Me pidieron un benchmarking y no tengo tiempo de investigar" | "Pídale un análisis comparativo de su programa vs. competidores en la región" |
| "Necesito un comunicado urgente y no tengo al diseñador" | "Genera el borrador en 2 minutos y solo ajusta el tono" |
| "La junta es en 2 horas y no tengo la presentación lista" | "Suba sus notas y pídale una estructura de presentación con puntos clave" |

### Test de relevancia para cada ejemplo:
Antes de incluir un ejemplo, preguntar:
1. ¿Un directivo de la Anáhuac haría esto en su trabajo? → Si no, descartarlo
2. ¿Resuelve algo que le quita tiempo o le causa estrés? → Si no, descartarlo
3. ¿El output es algo que puede usar hoy, no "algún día"? → Si no, descartarlo

---

## PRINCIPIO 4: Metacognición — Enseñar a Desconfiar con Método

### El Problema de la Confianza Excesiva

El mayor riesgo de enseñar IA a directivos NO es que no la usen. Es que la usen **sin cuestionar**. Un directivo que confía ciegamente en IA es más peligroso que uno que no la usa, porque:

- Tomará decisiones basadas en datos inventados
- Enviará comunicados con información falsa
- Presentará análisis con sesgos que no detectó
- Perderá gradualmente su propia capacidad de análisis

### Framework de Metacognición para Directivos: "PAUS"

Enseñar en cada nivel el hábito **PAUS** (Pregunta Antes de Usar la Salida):

| Paso | Pregunta | Ejemplo |
|------|----------|---------|
| **P** — Procedencia | ¿De dónde sacó esto la IA? ¿De mis documentos o de "su memoria"? | "Este dato de matrícula, ¿está en el reporte que le subí o lo inventó?" |
| **A** — Actualidad | ¿Esta información puede estar desactualizada? | "Dice que la matrícula nacional creció 3%... ¿de qué año es ese dato?" |
| **U** — Unicidad | ¿Esta respuesta es genérica o es específica para MI contexto? | "Este plan de mejora, ¿aplica para una universidad en Yucatán o es un template genérico?" |
| **S** — Sesgo | ¿Hay algún sesgo evidente? ¿Qué perspectiva falta? | "¿Por qué recomienda solo recortar gastos y no menciona invertir en ciertas áreas?" |

### Implementación en el curso:

**Cada nivel a partir del 4 incluye un "Momento PAUS":**
- Un ejercicio donde la IA deliberadamente produce algo incorrecto o sesgado
- El participante debe identificar el problema ANTES de que se lo señalemos
- Reflexión: "¿Lo habría detectado si no le hubiéramos pedido que revisara?"

**El objetivo no es que desconfíen siempre. Es que verifiquen siempre.** La confianza se gana con evidencia, no con elocuencia — y la IA es muy elocuente.

---

## PRINCIPIO 5: Progresión "Yo Primero, Luego Mi Equipo"

### Error común en cursos de IA para directivos:
Empezar hablando de "transformación digital", "estrategia de IA", "casos de éxito de Google". El directivo piensa: *"Muy bonito, pero ¿qué hago yo mañana a las 9?"*

### Progresión correcta:

```
FASE 1 (Niveles 1-3): "YO puedo usar esto"
→ El directivo experimenta valor personal directo
→ Produce outputs que usa en su trabajo esta semana
→ Motivación: eficiencia personal

FASE 2 (Niveles 4-6): "YO puedo confiar en esto (con cuidado)"
→ El directivo desarrolla criterio
→ Sabe cuándo la IA ayuda y cuándo engaña
→ Motivación: seguridad y confianza en la herramienta

FASE 3 (Niveles 7-8): "MI EQUIPO puede usar esto"
→ El directivo escala el conocimiento
→ Crea herramientas para su área y define políticas
→ Motivación: liderazgo e impacto organizacional
```

> **Nadie lidera una transformación que no ha vivido primero.** Por eso los niveles de "estrategia" son los ÚLTIMOS, no los primeros.

---

## PRINCIPIO 6: Diseño para la Persona Más Lejana de la Tecnología

### El Perfil "Peor Caso"

Diseñar cada nivel asumiendo este participante:

- **Edad**: 55 años
- **Experiencia con IA**: Cero. Nunca ha usado ChatGPT
- **Experiencia con tecnología**: Usa Excel básico, Word, email, WhatsApp. Nada más.
- **Actitud**: Escéptico pero obligado a asistir. Piensa que "esto es una moda" o que "la IA es para los jóvenes"
- **Miedo**: Quedar en ridículo frente a colegas más jóvenes. Que la tecnología lo rebase.
- **Tiempo**: Tiene 30 minutos de atención antes de que suene su teléfono
- **Motivación real**: Si esto no le ahorra tiempo tangible, no regresa al nivel 2

### Implicaciones de diseño:

| Aspecto | Diseño para el "peor caso" |
|---------|---------------------------|
| **Onboarding** | Paso 0 visual: "Abre esta página. Haz clic aquí. Escribe esto." Con capturas de pantalla |
| **Lenguaje** | Cero anglicismos innecesarios. Si usas uno, explícalo inmediatamente |
| **Ritmo** | Bloques de 5 minutos máximo antes de un cambio de actividad |
| **Errores** | Anticipar CADA punto donde puede trabarse y dar solución visual |
| **Feedback** | Cada acción produce un resultado visible inmediato (la IA responde, algo se genera) |
| **Escape** | Siempre hay un "si esto no le funcionó, pruebe esto otro" |
| **Victoria temprana** | En los primeros 3 minutos, el participante VE que la IA le respondió algo útil |
| **Normalización** | "Es normal que las primeras veces el resultado no sea perfecto. Ajustar es parte del proceso." |

### Test de accesibilidad:
Antes de publicar cada nivel, preguntar:
> "¿Mi mamá/papá/tío de 55 años que solo usa WhatsApp podría completar este ejercicio sin llamarme?" Si la respuesta es no, hay que simplificar.

---

## PRINCIPIO 7: Cada Nivel es Autocontenido pero Acumulativo

### Problema real:
No todos los directivos completarán los 8 niveles en orden. Algunos empezarán por el que les parece más útil. Otros abandonarán después del tercero. Otros harán solo el 1 y el 7.

### Solución de diseño:

**Autocontenido**: Cada nivel tiene sentido por sí mismo. Si alguien solo hace el Nivel 4, obtiene valor real.

**Acumulativo**: Cada nivel incluye un mini-recordatorio de lo que se aprendió antes:
- "En niveles anteriores aprendiste a dar instrucciones claras. Ahora vamos a..."
- "Si no hiciste el nivel anterior, aquí tiene lo mínimo que necesita saber: [recuadro resumen de 3 líneas]"

**Enganche hacia adelante**: Cada nivel termina con un adelanto del siguiente:
- "Ahora sabe pedir bien. Pero, ¿qué pasa cuando la IA le responde con información falsa? Eso lo veremos en el siguiente nivel..."

### Mapa de dependencias:

```
Nivel 1 ──→ Nivel 2 ──→ Nivel 3     (secuencia recomendada)
                              │
                              ▼
              Nivel 4 ──→ Nivel 5     (secuencia fuerte)
                              │
                              ▼
                         Nivel 6       (integración)
                              │
                              ▼
              Nivel 7 ──→ Nivel 8     (secuencia fuerte)

Dependencias FUERTES (no saltar):
  • Nivel 5 requiere haber hecho 3 o 4
  • Nivel 7 requiere haber hecho al menos 3
  • Nivel 8 requiere haber hecho 6 o 7

Dependencias SUAVES (recomendadas pero no obligatorias):
  • Nivel 4 sin haber hecho 3 = posible pero menos profundo
  • Nivel 6 sin haber hecho 5 = posible pero sin pensamiento crítico
```

---

## PRINCIPIO 8: Ética Integrada, No Segregada

### Anti-patrón:
Tener un "Nivel de Ética" separado al final que nadie ve, o una diapositiva de "consideraciones éticas" que se salta.

### Patrón correcto:
**La ética es una pregunta que aparece DENTRO de cada ejercicio práctico, no después.**

### Implementación — "El Momento Incómodo":

Cada nivel incluye un punto donde el participante se enfrenta a una decisión ética en el ejercicio mismo:

| Nivel | "Momento Incómodo" |
|--------|---------------------|
| 1 | "La IA le acaba de generar un análisis brillante. ¿Lo presenta como suyo o menciona que lo hizo la IA?" |
| 2 | "Necesita un comunicado urgente. ¿Copia y pega lo que generó la IA sin leerlo completo?" |
| 3 | "Su prompt incluye los nombres reales de 3 docentes con bajo desempeño. ¿Está bien poner esos nombres en una herramienta en la nube?" |
| 4 | "Subiste el reporte financiero confidencial a la IA. ¿Qué implicaciones tiene? ¿En qué herramienta es seguro y en cuál no?" |
| 5 | "La IA recomienda cancelar un programa con matrícula baja. El programa sirve a una comunidad vulnerable. ¿Qué pesa más?" |
| 6 | "Su equipo dice que la IA puede hacer el trabajo de la persona que contesta llamadas. ¿Es ético automatizar ese puesto?" |
| 7 | "Creaste un agente que responde a alumnos. Un alumno en crisis emocional habla con el agente. ¿Qué protocolo necesita?" |
| 8 | "Presenta su plan de IA al rector. Un colega pregunta: ¿y si esto elimina puestos de trabajo? ¿Qué responde?" |

No hay respuesta correcta única. El objetivo es que el directivo **pause, piense y decida conscientemente**, no que aplique una regla automática.

---

## PRINCIPIO 9: Formato de Mini Sitio — Diseño de Experiencia

### Principios de UX para el mini sitio:

1. **Una acción por pantalla**. No saturar. Una instrucción clara → un resultado esperado.

2. **Progreso visible**. Barra de avance del nivel Y del curso completo. El directivo debe saber en todo momento dónde está y cuánto le falta.

3. **Mobile-first en concepto**. Aunque se use en computadora, el diseño debe funcionar con atención parcial (el directivo tiene 3 ventanas abiertas y WhatsApp sonando).

4. **Interactividad cada 2 minutos máximo**. No más de 2 minutos de texto pasivo antes de que el participante tenga que HACER algo (clic, escribir, probar en Amazon Quick, responder una pregunta).

5. **Feedback inmediato**. Cada vez que el participante completa algo, recibe confirmación visual (checkmark, mensaje de "bien hecho", progreso que avanza).

6. **Modo "hazlo conmigo"**. Para cada ejercicio, opción de ver una demo paso a paso (capturas o GIF) mientras lo hace en otra ventana. No videos largos — instrucciones visuales breves.

7. **Checkpoint de "¿lo lograste?"**. Al final de cada ejercicio práctico, una pregunta honesta: "¿Obtuviste un resultado útil? Sí / No / Más o menos" con rutas alternativas según la respuesta.

---

## PRINCIPIO 10: Evaluación por Evidencia de Uso, No por Examen

### Lo que NO evaluamos:
- ❌ "¿Qué es un LLM?" (memorización)
- ❌ "Menciona 3 riesgos de la IA" (recitación)  
- ❌ Examen de opción múltiple (no mide competencia real)
- ❌ Asistencia (estar sentado no es aprender)

### Lo que SÍ evaluamos:
- ✅ **Outputs producidos**: ¿Generó un comunicado, un análisis, un plan usable?
- ✅ **Criterio demostrado**: ¿Identificó errores en el output de IA? ¿Justificó sus correcciones?
- ✅ **Agencia mostrada**: ¿Creó un agente? ¿Diseñó un flujo? ¿Escribió una política?
- ✅ **Reflexión articulada**: ¿Puede explicar cuándo usar y cuándo NO usar IA en su área?

### Sistema de evidencia — Portafolio del curso:

Cada participante acumula un **portafolio digital** con:

| Nivel | Evidencia |
|--------|-----------|
| 1 | Mini-reflexión: capacidades vs. mitos de IA |
| 2 | Output real usado en su trabajo + nota de iteraciones |
| 3 | Biblioteca de 3 prompts RCTF con outputs |
| 4 | Reporte de verificación (✅/❌) de un análisis con documentos propios |
| 5 | Dictamen de confiabilidad con semáforo verde/amarillo/rojo |
| 6 | Mapa de proceso IA-asistido de su área |
| 7 | Ficha técnica de agente creado |
| 8 | Plan de adopción de IA para su área (entregable final, 2 páginas) |

### Certificación:
- **Participante**: Completa niveles 1-5 con evidencias
- **Practitioner**: Completa niveles 1-7 con evidencias
- **Leader**: Completa los 8 niveles. Presenta su plan de adopción. Es capaz de capacitar a otros.

---

## Resumen: Los 10 Mandamientos del Diseño

| # | Principio | Test rápido |
|---|-----------|------------|
| 1 | Output usable en 10 minutos | ¿El directivo produce algo útil antes del minuto 10? |
| 2 | Cero tecnicismos | ¿Mi colega de 55 años entiende cada palabra? |
| 3 | Solo ejemplos de gestión real | ¿Este ejemplo resuelve un dolor real del directivo? |
| 4 | Metacognición (PAUS) | ¿El directivo sabe verificar ANTES de confiar? |
| 5 | Yo primero, luego mi equipo | ¿El valor personal viene antes que la estrategia? |
| 6 | Diseño para el peor caso | ¿La persona más lejana de la tecnología puede completar esto? |
| 7 | Autocontenido + acumulativo | ¿Cada nivel da valor solo y también en secuencia? |
| 8 | Ética integrada | ¿Hay un dilema ético DENTRO de cada ejercicio práctico? |
| 9 | UX de mini sitio | ¿Hay interacción cada 2 minutos y feedback inmediato? |
| 10 | Evaluación por evidencia | ¿Evaluamos lo que el directivo PRODUCE, no lo que memoriza? |

---

*Documento generado como parte de la Fase 1 — Principios de diseño instruccional del curso "IA Práctica para Líderes", Universidad Anáhuac Mayab.*
