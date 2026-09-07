# Nivel 2. Diseño de instrucciones efectivas
## *La diferencia entre un usuario básico y un experto no es la herramienta: es la instrucción.*

> **Fase:** I — ENTENDER  
> **Duración:** 45–50 minutos  
> **Herramienta:** Amazon Quick  
> **Producto integrador:** Tres *prompts* maestros para sus tareas más frecuentes, usando los frameworks aprendidos.

---

## 1. Concepto clave

Un *framework* (estructura o receta) de instrucciones es una plantilla probada que organiza lo que usted le pide a la IA. Sin estructura, la IA devuelve respuestas genéricas; con estructura, produce resultados específicos, útiles y consistentes.

En este nivel aprenderá tres marcos, de menor a mayor control:

- **RTF** (Rol + Tarea + Formato): la receta más rápida. Ideal para solicitudes directas donde no necesita controlar el proceso intermedio.
- **RISE** (Rol + *Input* + *Steps* + *Expectation*): cuando necesita que la IA siga un proceso paso a paso con datos específicos. Como darle a un analista junior un protocolo detallado.
- **CO-STAR** (*Context* + *Objective* + *Style* + *Tone* + *Audience* + *Response*): cuando la comunicación es lo que importa. Controla tono, audiencia y voz institucional con precisión.

La recomendación es directa: empiece con RTF para todo. Cuando necesite más control sobre el proceso, migre a RISE. Cuando el tono y la audiencia sean críticos, use CO-STAR. Los tres marcos se complementan; no compiten.

---

## 2. Demostración paso a paso

### Framework RTF — Análisis de retención estudiantil

**Contexto:** Dos coordinadores piden lo mismo a la IA: un análisis de retención. Uno obtiene un texto genérico; el otro obtiene un documento con datos reales, semáforo visual y acciones concretas. La diferencia es la instrucción.

**Prompt RTF (el que funciona):**

```
ROL: Actúe como analista de gestión académica universitaria.

TAREA: Necesito un análisis de retención estudiantil para presentar a rectoría
con los siguientes datos de la Licenciatura en Derecho:
- Matrícula inicio de ciclo Primavera 2026: 180 estudiantes
- Estudiantes que permanecen al cierre: 162 estudiantes
- Principales causas de baja: económicas, cambio de carrera, bajo rendimiento
- Tasa de retención del ciclo anterior: 92%

Genere:
1. Cálculo de la tasa de retención actual y comparativa
2. Identificación de 3 factores de riesgo
3. 3 acciones concretas de intervención temprana
4. Párrafo ejecutivo de máximo 80 palabras para informe a rectoría

FORMATO: Use encabezados claros y viñetas. Documento presentable en reunión
de consejo.
```

**Resultado esperado:** Documento de una cuartilla con tasa de retención calculada (90% vs. 92% anterior), tabla de factores de riesgo priorizados, tres acciones con responsable sugerido, y párrafo ejecutivo listo para copiar al informe.

### Framework RISE — Seguimiento de acreditación

```
ROLE: Actúe como asesor de aseguramiento de calidad educativa con experiencia
en acreditaciones COPAES en México.

INPUT: Estos son los indicadores actuales del programa de [LICENCIATURA]:
- Tasa de titulación: Meta 60% — Actual 52%
- Profesores con posgrado: Meta 80% — Actual 74%
- Satisfacción estudiantil: Meta 8.5/10 — Actual 7.9/10

STEPS:
1. Evalúe el estatus de cada indicador (cumple / en riesgo / no cumple)
2. Calcule la brecha entre meta y actual
3. Proponga acción correctiva para cada indicador en riesgo
4. Sugiera responsable y plazo

EXPECTATION: Tabla ejecutiva con semáforo visual (🟢🟡🔴) + resumen en un párrafo
para presentar a la Dirección de Escuela. Máximo 1 cuartilla.
```

**Resultado esperado:** Tabla con tres filas (una por indicador), semáforo visual, columna de acción correctiva con responsable y plazo, y párrafo de síntesis ejecutiva.

### Framework CO-STAR — Respuesta a padre de familia

```
CONTEXT: Un padre de familia ha escrito preguntando por qué su hijo reprobó
dos materias y si está en riesgo de baja académica. El estudiante es mayor
de edad.

OBJECTIVE: Responder con empatía, explicar los límites de la información que
podemos compartir (protección de datos del estudiante mayor de edad), y
ofrecer alternativas constructivas.

STYLE: Redacción institucional de la Universidad Anáhuac Mayab. Claro,
sin tecnicismos.

TONE: Empático pero institucionalmente correcto. Que el padre se sienta
escuchado pero entienda el marco normativo.

AUDIENCE: Padre/madre de familia, 45–55 años, preocupado, posiblemente
molesto. No familiarizado con normativa universitaria.

RESPONSE: Correo de máximo 200 palabras con: (1) agradecimiento,
(2) explicación de la normativa de privacidad, (3) alternativas (reunión
con el estudiante, tutoría), (4) datos de contacto. Firmado por el
coordinador del programa.
```

**Resultado esperado:** Correo equilibrado que reconoce la preocupación del padre, explica con claridad que el estudiante mayor de edad gestiona su información directamente, ofrece reunión y tutoría, y cierra con datos de contacto.

---

## 3. Ejercicio práctico

### 🎓 Versión académica

Cree tres instrucciones maestras para sus tareas más frecuentes. Use una para cada *framework*.

| # | Tarea frecuente | Framework | Instrucción completa |
|---|---|---|---|
| 1 | Su tarea más repetitiva (ej: comunicado a docentes, recordatorio de fechas) | RTF | Escriba aquí su instrucción con Rol + Tarea + Formato |
| 2 | Tarea que requiere análisis (ej: análisis de indicadores, evaluación de programa) | RISE | Escriba aquí con Rol + Input + Steps + Expectation |
| 3 | Tarea de comunicación sensible (ej: respuesta a padres, comunicado a rectoría) | CO-STAR | Escriba aquí con Context + Objective + Style + Tone + Audience + Response |

Ejecute cada instrucción en Amazon Quick y compare los resultados con lo que habría producido sin IA.

### 🏢 Versión administrativa

| # | Tarea frecuente | Framework | Instrucción completa |
|---|---|---|---|
| 1 | Su tarea más repetitiva (ej: reporte de gastos, solicitud de compra) | RTF | Escriba aquí su instrucción con Rol + Tarea + Formato |
| 2 | Tarea que requiere análisis (ej: variaciones presupuestales, avance de proyecto) | RISE | Escriba aquí con Rol + Input + Steps + Expectation |
| 3 | Tarea de comunicación sensible (ej: respuesta a proveedores, comunicado a Vicerrectoría) | CO-STAR | Escriba aquí con Context + Objective + Style + Tone + Audience + Response |

---

## 4. Output — Banco de prompts personal

Guarde sus tres instrucciones maestras en un documento accesible. Son la semilla de su banco de instrucciones personal. Al final del curso tendrá más de 20.

### Técnicas de iteración

El *prompt* perfecto no existe en el primer intento. Lo que distingue al usuario experto es que **refina**. Tres técnicas para mejorar cualquier resultado:

1. **Refinar:** «Ajusta el tono para que sea más directo y menos extenso.»
2. **Criticar:** «Revisa tu propia respuesta: ¿omitiste algo importante? ¿El tono es apropiado?»
3. **Variar:** «Dame dos versiones: una formal para rectoría y una más cercana para docentes.»

Tome una de sus instrucciones anteriores, aplique al menos dos refinamientos, y compare la evolución del resultado.

---

## 5. Tips y anti-patrones

| ✅ Haga esto | ❌ Evite esto |
|---|---|
| Empiece con RTF para todo; migre a RISE o CO-STAR cuando necesite más control | Intentar memorizar los tres marcos a la vez — empiece con RTF |
| Guarde sus mejores instrucciones en un documento reutilizable | Crear cada instrucción desde cero cada vez |
| Itere dos o tres veces antes de dar por bueno el resultado | Aceptar el primer resultado sin revisión |
| Indique siempre la audiencia y el formato de salida | Dejar que la IA decida el tono y la extensión |
| Use CO-STAR cuando el tono y la audiencia sean críticos | Usar RTF para correos sensibles que requieren control fino de tono |

> **Importante:** Los *frameworks* no compensan la incompetencia — **potencian** la experiencia. Sus 20 años de gestión son exactamente lo que hace que estas instrucciones funcionen. Sin su criterio, la IA produce texto genérico; con su criterio, produce documentos profesionales.

---

## 6. Momento ético

Si la IA le escribió un comunicado para rectoría con análisis de datos, ¿dónde está la línea entre comunicación «asistida por IA» y comunicación «hecha por IA»? No existe una respuesta universal, pero cada directivo debería tener la suya antes de enviar. La transparencia sobre el uso de herramientas de IA es una decisión profesional, no técnica.

---

## 7. Tarea de la semana y transición al Nivel 3

**Tarea:** Esta semana, use el *framework* RTF para al menos tres tareas reales de su trabajo. Guarde las instrucciones y los resultados en su banco de *prompts*.

**Transición narrativa:**

Ahora tiene las recetas. Sabe CÓMO pedir para obtener resultados consistentes. En el Nivel 3 va a usar estos marcos para atacar el dolor más grande de cualquier directivo: las dos o tres horas diarias que pasa escribiendo correos y comunicados. Nunca más empezará un correo mirando la pantalla en blanco.

---

*Nivel 2 — Diseño de instrucciones efectivas*  
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*  
*Septiembre 2026*
