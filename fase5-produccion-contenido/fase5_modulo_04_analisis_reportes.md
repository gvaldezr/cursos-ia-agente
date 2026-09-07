# Nivel 4. Análisis de reportes con IA
## *Un directivo no necesita leer más. Necesita entender mejor lo que ya tiene.*

> **Fase:** II — USAR  
> **Duración:** 45–50 minutos  
> **Herramienta:** Amazon Quick (workspace local / archivos conectados)  
> **Producto integrador:** Resumen ejecutivo de una página de un reporte real de su área, generado con IA, verificado con protocolo PAUS. Incluye el *prompt* utilizado.

---

## 1. Concepto clave

Los directivos reciben entre cinco y diez reportes por semana. Seamos directos: la mayoría lee el 20% de cada uno. El otro 80% se archiva «para después» — pero después nunca llega. Las decisiones terminan basándose en los datos que se alcanzan a leer, no en los que se deberían leer.

La IA resuelve ese problema de una forma precisa: usted sube su documento a Amazon Quick y le pide que lo analice. Esto se llama *RAG* (IA con sus documentos): la IA busca en SUS archivos antes de responder, en vez de responder de memoria. Es como darle una carpeta a su asistente y decirle: «léete esto y dime qué es lo más importante».

La diferencia crítica frente a los niveles anteriores: aquí la IA no solo redacta — **analiza**. Puede identificar tendencias, señalar anomalías, comparar periodos y generar resúmenes ejecutivos. Pero esa potencia trae un riesgo proporcional: si la IA inventa un dato y usted no lo verifica, ese dato llega a rectoría con su firma. Por eso, este nivel introduce el protocolo PAUS de verificación obligatoria.

---

## 2. Demostración paso a paso

### Subir documento y generar resumen ejecutivo

**Paso 1 — Subir el documento a Amazon Quick:**
Conecte un archivo local (PDF, Word o Excel) al workspace de Amazon Quick.

**Paso 2 — Prompt de resumen en cinco puntos:**

```
Resume este documento en 5 puntos clave para un coordinador académico
que debe presentarlo en reunión de consejo. Indica qué datos requieren
acción inmediata.
```

**Resultado esperado:** Lista priorizada de cinco hallazgos, con señalamiento explícito de los que requieren atención urgente.

**Paso 3 — Prompt de hallazgos preocupantes:**

```
Identifica los 3 datos más preocupantes de este reporte. Para cada uno,
explica por qué es preocupante y qué acción sugiere.
```

**Resultado esperado:** Tres observaciones críticas con justificación y recomendación de acción. La IA señala específicamente qué páginas o secciones del documento fundamentan cada hallazgo.

**Paso 4 — Prompt de resumen ejecutivo completo:**

```
Genera un resumen ejecutivo de 1 página para presentar a la Dirección
de Escuela, basado en el documento que acabo de compartir.

Formato solicitado:
- Párrafo ejecutivo de apertura (80 palabras máximo)
- 5 hallazgos clave en viñetas
- 3 indicadores que requieren atención inmediata
- 2 recomendaciones accionables
- Nota: señale si algún dato del documento parece inconsistente o incompleto
```

**Resultado esperado:** Documento de una página, estructurado, con tono formal, datos extraídos del archivo subido. Listo para presentar — después de verificación.

### Análisis de datos tabulares

```
De la siguiente tabla de matrícula por programa, identifique:
1. ¿Qué programas perdieron más del 10% de alumnos respecto al ciclo anterior?
2. ¿Qué programas crecieron por encima de la meta institucional?
3. ¿Cuál es la tendencia general: crecimiento, estancamiento o contracción?

[PEGAR TABLA O SUBIR ARCHIVO CSV/EXCEL]

Presente los resultados en formato de tabla semáforo (🟢🟡🔴) con un
párrafo ejecutivo de máximo 100 palabras.
```

**Resultado esperado:** Tabla con semáforo visual por programa, identificación de outliers positivos y negativos, y párrafo de síntesis que integra la tendencia general.

---

## 3. Ejercicio práctico

### 🎓 Versión académica

Suba un reporte real de su programa a Amazon Quick (indicadores CIEES/COPAES, estadísticas de matrícula, evaluaciones docentes o encuestas de satisfacción) y genere un resumen ejecutivo con la instrucción del paso 4.

Si no tiene un reporte a la mano, use los siguientes datos de práctica:

**Datos de ejemplo — Indicadores del programa de Ingeniería Industrial:**

| Indicador | Meta | Actual | Ciclo anterior |
|---|---|---|---|
| Matrícula activa | 250 | 228 | 245 |
| Tasa de retención | 90% | 86% | 91% |
| Tasa de titulación | 60% | 48% | 55% |
| Profesores con posgrado | 80% | 76% | 73% |
| Satisfacción estudiantil | 8.5/10 | 7.6/10 | 8.1/10 |

Suba estos datos (o péguelos directamente) y solicite el análisis.

### 🏢 Versión administrativa

Suba un reporte operativo real (estados financieros, KPIs operativos, avance de proyectos, resultados de auditoría) y genere el resumen ejecutivo.

**Datos de ejemplo — KPIs operativos Q2 2026:**

| Indicador | Meta | Actual | Q1 2026 |
|---|---|---|---|
| Ejecución presupuestal | 95% | 87% | 92% |
| Proyectos en tiempo | 80% | 65% | 72% |
| Satisfacción de servicio | 8.0/10 | 7.2/10 | 7.8/10 |
| Rotación de personal | <5% | 8% | 6% |
| Cumplimiento de auditoría | 100% | 94% | 97% |

---

## 4. Output — Análisis ejecutivo verificado

### Verificación crítica: el protocolo PAUS

**Antes de confiar en cualquier resumen generado por IA, aplique esta verificación obligatoria:**

| Paso | Pregunta | Aplique a su resumen |
|---|---|---|
| **P** — Procedencia | ¿De dónde sacó esto la IA? ¿De mi documento o de «su memoria»? | |
| **A** — Actualidad | ¿Estos datos son del ciclo correcto? ¿No mezcló periodos? | |
| **U** — Unicidad | ¿Este análisis es específico para MI programa o es genérico? | |
| **S** — Sesgo | ¿Hay algún sesgo? ¿Qué perspectiva falta? | |

> **Ejemplo:** Si la IA dice «la matrícula nacional creció 3%», pregunte: ¿de qué año es ese dato? ¿Está en mi documento? Si no, lo inventó.

### Su entregable completo

- Resumen ejecutivo de una página de un reporte de su área
- Instrucción utilizada (para reutilizar el próximo ciclo)
- Checklist PAUS completado (verificación de datos)
- Tabla semáforo de indicadores (si aplica)

---

## 5. Tips y anti-patrones

| ✅ Haga esto | ❌ Evite esto |
|---|---|
| Suba el documento a Amazon Quick para que la IA use SUS datos | Pedirle análisis «de memoria» sin subir archivos |
| Verifique cada dato numérico contra el documento original | Confiar en porcentajes y cifras sin verificar |
| Aplique el protocolo PAUS en cada resumen antes de presentarlo | Enviar un resumen a rectoría sin revisión humana |
| Pida que la IA señale inconsistencias en los datos | Asumir que la IA nunca se equivoca con datos |
| Incluya en su instrucción la audiencia del resumen | Generar un resumen genérico sin especificar quién lo leerá |

> **Importante:** La IA es especialmente propensa a *fabricar* (inventar) datos estadísticos que suenan plausibles. Un porcentaje inventado con formato impecable es más peligroso que un dato obviamente erróneo. Verifique SIEMPRE las cifras contra el documento fuente.

---

## 6. Momento ético

¿Qué documentos nunca deben subirse a una herramienta de IA en la nube pública? Expedientes disciplinarios, datos de salud de alumnos, información financiera confidencial sujeta a auditoría. Amazon Quick procesa información de forma local en su espacio de trabajo, pero cada directivo debe conocer la diferencia entre procesamiento local y nube pública, y establecer sus propios criterios de confidencialidad.

---

## 7. Tarea de la semana y transición al Nivel 5

**Tarea:** Genere un resumen ejecutivo de un reporte pendiente esta semana. Guarde la instrucción, el resultado y el checklist PAUS completado. Ese trío — instrucción + resultado + verificación — es su nuevo flujo estándar de análisis.

**Transición narrativa:**

Acaba de convertir un reporte de 50 páginas en un resumen ejecutivo de una página. Pero lo hizo manualmente: subió el archivo, escribió la instrucción, revisó el resultado. ¿Y si pudiera AUTOMATIZAR ese proceso para que su reporte mensual se genere en 15 minutos en vez de seis horas? En el Nivel 5, va a diseñar un flujo completo — desde los datos hasta el documento final — y a crear su primer agente de IA que ya conozca su programa, sus indicadores y su formato. Nunca volverá a empezar de cero.

---

*Nivel 4 — Análisis de reportes con IA*  
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*  
*Septiembre 2026*
