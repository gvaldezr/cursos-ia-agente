# Nivel 5. Automatización de Procesos Directivos
## «Del copy-paste mensual al flujo que se genera solo»

> **Fase:** III — ACELERAR  
> **Epígrafe:** *«La confianza no se regala. Se construye con verificación.»*  
> **Título narrativo:** *El dato que la IA inventó*  
> **Competencia:** Diseña y documenta un flujo paso a paso para generar su reporte recurrente más importante con asistencia de IA, integrando un agente básico, controles de calidad y verificación humana.  
> **Nivel Bloom:** Analizar / Crear  
> **Producto integrador:** ⭐ Flujo de reporte documentado (ENTREGABLE FINAL 1)

---

## 1. Concepto clave

Cada mes o cada semestre, usted produce el mismo reporte: recopila datos, los organiza, calcula indicadores, redacta el análisis y lo envía. El proceso le toma entre cuatro y ocho horas. La automatización con IA no elimina su participación; la reorganiza.

El principio es sencillo: todo reporte recurrente puede descomponerse en seis fases — recopilar datos, subirlos a la herramienta, solicitar el análisis, dar formato al resultado, revisar con criterio humano y distribuir. De esas seis fases, la IA puede encargarse de tres (análisis, formato y borrador) mientras usted conserva las que requieren juicio: la selección de datos, la verificación y la decisión de enviar.

La pieza nueva de este nivel es el *agente de IA* (un asistente con instrucciones permanentes y archivos de referencia). A diferencia de una conversación nueva, el agente ya «conoce» su área, su formato preferido y sus indicadores clave. Solo necesita los datos actualizados.

> **📌 Nota sobre agentes en este curso:** En este nivel utilizará un agente pre-configurado como parte de su flujo de reportes. Piense en él como un asistente que alguien más ya entrenó para usted. En el Nivel 8 aprenderá a crear y configurar sus propios agentes especializados desde cero — esa es la diferencia entre usar una herramienta y diseñar su ecosistema.

**Importante:** Un reporte automatizado sin revisión humana es más peligroso que uno manual. La IA puede fabricar datos con formato impecable. Su experiencia es el único filtro confiable.

---

## 2. Demostración paso a paso

**Contexto:** Generar el reporte semestral de indicadores de un programa académico (versión 🎓) o el dashboard operativo mensual (versión 🏢).

### Paso 1 — Mapear la anatomía del reporte

Complete esta plantilla con su reporte real:

| Elemento | Mi reporte |
|---|---|
| Nombre del reporte | |
| Frecuencia | Mensual / Trimestral / Semestral |
| Fuentes de datos | |
| Transformaciones necesarias | |
| Audiencia principal | |
| Formato de entrega | |
| Tiempo actual de producción | |

### Paso 2 — Escribir la instrucción de análisis (RISE)

```
ROL: Actúe como analista de gestión universitaria especializado
en indicadores de calidad para universidades privadas mexicanas.

ENTRADA: [Archivos subidos: tabla de matrícula, encuestas de
satisfacción, tasas de retención del semestre]

PASOS:
1. Consolide los datos en una tabla única por indicador
2. Compare cada indicador con el ciclo anterior
3. Identifique los 3 indicadores con mayor deterioro
4. Proponga 1 acción de intervención por cada indicador crítico

RESULTADO ESPERADO: Tabla semáforo (🟢🟡🔴) con análisis de
1 párrafo por indicador. Máximo 2 cuartillas.
```

### Paso 3 — Escribir la instrucción de formato

```
Con base en el análisis anterior, genere un resumen ejecutivo
para la Dirección de Escuela:
- Párrafo de apertura (80 palabras)
- Tabla de indicadores con semáforo
- 3 recomendaciones prioritarias
- Solicitudes al Consejo Académico
Firmado por: [NOMBRE], [CARGO]
```

**Resultado esperado:** Un resumen ejecutivo de una a dos cuartillas, presentable en reunión de consejo, con datos verificables y formato institucional.

### Paso 4 — Crear un agente básico en Amazon Quick

1. Crear nuevo agente → nombre: «Analista de [MI PROGRAMA]»
2. Instrucciones del agente:

```
Eres el analista de indicadores del programa de [LICENCIATURA]
de la Universidad Anáhuac Mayab.

Tu contexto permanente:
- Programa: [NOMBRE]
- Organismos de acreditación: [COPAES/CACEI/etc.]
- Indicadores clave: matrícula, retención, titulación,
  satisfacción, profesores con posgrado
- Formato de reportes: ejecutivo, máximo 2 cuartillas,
  con semáforo
- Audiencia: Dirección de Escuela y Rectoría
- Tono: formal, basado en datos, orientado a acciones

Siempre que analices datos, aplica el formato semáforo
y sugiere acciones correctivas para indicadores en riesgo.
```

3. Agregar archivos de referencia (criterios de acreditación, reportes previos)
4. Probar con una solicitud: «Analiza estos nuevos datos de matrícula»

---

## 3. Ejercicio práctico

### 🎓 Versión académica

Diseñe el flujo completo de su reporte de indicadores de programa (matrícula, deserción, titulación, satisfacción). Complete los seis pasos:

| Paso | Descripción | ¿Humano o IA? |
|---|---|---|
| 1. Recopilar datos | Exportar de Banner/Excel | 🧑 Humano |
| 2. Subir a Amazon Quick | Conectar archivos al espacio de trabajo | 🧑 Humano (1 min) |
| 3. Instrucción de análisis | Análisis prediseñado con RISE | 🤖 IA |
| 4. Instrucción de formato | Resumen ejecutivo para audiencia | 🤖 IA |
| 5. Revisión PAUS | Verificar datos, tono, completitud | 🧑 Humano |
| 6. Distribuir | Enviar por correo o presentar | 🧑 Humano |

**Entregable:** Documente el flujo con las instrucciones exactas de los pasos 3 y 4, nombre del agente creado y checklist de revisión.

### 🏢 Versión administrativa

Diseñe el flujo completo de su dashboard operativo mensual (presupuesto vs. real, avance de proyectos, incidencias). Use la misma tabla de seis pasos, reemplazando los datos académicos por indicadores de gestión: gastos por centro de costos, avance de proyectos y métricas de servicio.

---

## 4. Tips y anti-patrones

| ✅ Haga esto | ❌ Evite esto |
|---|---|
| Descomponga su reporte en las 6 fases antes de automatizar | Intentar automatizar todo de un golpe sin mapear el proceso |
| Cree un agente con instrucciones permanentes para tareas recurrentes | Escribir la misma instrucción larga cada vez que genera el reporte |
| Verifique CADA dato numérico contra la fuente original | Confiar en que «si el formato se ve bien, los datos son correctos» |
| Incluya en su checklist: ¿este dato está en mis archivos originales? | Enviar el reporte a rectoría sin revisar al menos las cifras clave |
| Documente su flujo para que sea reproducible el próximo ciclo | Depender de su memoria para recordar qué instrucciones usó |

---

## 5. Momento ético

Un reporte generado con IA lleva su firma. Si contiene un dato fabricado que usted no verificó, la responsabilidad es suya, no de la herramienta. Reflexione: ¿su checklist de revisión es lo suficientemente riguroso para que usted firme con confianza cada resultado?

---

## 6. Instrucción de tarea

Antes del siguiente nivel, ejecute su flujo completo con datos reales. Documente los ajustes que necesitó hacer. Guarde el flujo terminado: es su primer entregable evaluable.

```
Ejecute el flujo de 6 pasos que diseñó en este nivel con datos
reales de su reporte más reciente. Después, responda:
1. ¿Cuánto tiempo le tomó con IA vs. sin IA?
2. ¿La IA fabricó algún dato? Si sí, ¿cuál y cómo lo detectó?
3. ¿Qué ajustaría en su flujo para el próximo ciclo?
```

---

## 7. Transición narrativa

> *«Ahora tiene un flujo automatizado Y sabe verificar sus resultados. Domina la generación y el análisis. Pero hay una dimensión que aún no ha tocado: la IA interactuando con PERSONAS. Alumnos, padres, proveedores. En el siguiente nivel descubrirá cómo responder 40 consultas en 20 minutos — y, más importante aún, dónde trazar la línea entre eficiencia y humanidad.»*

---

*Nivel 5 — Automatización de reportes*  
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*  
*Septiembre 2026*
