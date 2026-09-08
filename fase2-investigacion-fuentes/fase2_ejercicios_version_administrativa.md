# IA Práctica para Líderes Anáhuac Mayab
## Ejercicios Prácticos — Versión ADMINISTRATIVA

> **Instrucciones generales para el facilitador:**  
> Cada ejercicio está diseñado para que el participante obtenga un output usable en los primeros 10 minutos. Los prompts incluyen placeholders `[DATO]` que el directivo reemplaza con información real de su área. Se recomienda que cada participante tenga Amazon Quick abierto desde el inicio de la sesión.

---

## Nivel 1 · Fundamentos de IA Generativa
### "De la curiosidad al primer resultado útil"

**Objetivo pedagógico:** Romper la barrera del primer uso. El participante descubre que puede obtener un borrador profesional en menos de 2 minutos sin conocimiento técnico.

---

### Ejercicio 1.1 — Mi primer borrador con IA: Comunicado interno al equipo administrativo
**Duración:** 15 minutos  
**Competencia:** Interacción básica · Nivel consciencia

**Contexto:** Usted necesita enviar un comunicado a su equipo sobre un cambio operativo (nuevo horario, nuevo procedimiento, fecha límite). Normalmente revisa borradores previos, los adapta y pierde 30+ minutos. Hoy lo hará en 2.

**Instrucciones paso a paso:**

1. Abra Amazon Quick en su navegador
2. Copie el siguiente prompt y péguelo en el chat
3. Antes de enviar, reemplace cada `[DATO]` con la información real de su área
4. Envíe y lea el resultado completo antes de editarlo
5. Identifique: ¿qué cambiaría? ¿qué le sorprendió? ¿qué falta?

**Prompt de ejemplo:**
```
Redacte un comunicado interno dirigido al equipo del departamento de [NOMBRE DEL DEPARTAMENTO] de la Universidad Anáhuac Mayab.

Asunto: [TEMA DEL COMUNICADO — ej: Nuevo procedimiento para solicitud de compras / Cambio de horario de atención / Fecha límite para entrega de reportes mensuales]

Incluya:
- Descripción clara del cambio o información: [DETALLE DEL CAMBIO]
- Fecha de entrada en vigor: [FECHA]
- Acciones que el equipo debe realizar: [ACCIÓN 1], [ACCIÓN 2]
- A quién contactar para dudas: [NOMBRE Y MEDIO DE CONTACTO]
- Tono institucional, claro y directo

Firmante: [SU NOMBRE Y CARGO]
```

**Output esperado:**  
Un comunicado de 150-250 palabras con estructura profesional (saludo, contexto, instrucciones, cierre), listo para revisar y distribuir por correo o Teams. El tono debe ser formal pero accesible.

**Variación simplificada:**  
Si alguien no tiene datos a la mano, use estos valores de ejemplo:
- Departamento: Recursos Humanos
- Tema: Nuevo formato para solicitud de vacaciones
- Cambio: A partir del próximo mes, todas las solicitudes se harán por el sistema [nombre del sistema] en lugar de formato impreso
- Fecha: 1 de noviembre de 2026
- Contacto: María López, ext. 1234

**🔍 Momento de reflexión (5 min):**  
Compare su comunicado habitual con el generado. Pregunte al grupo:
- *¿El resultado es usable tal cual o necesita edición?*
- *¿Cuánto tiempo le hubiera tomado escribirlo desde cero?*
- *¿Detectó algún dato inventado o incorrecto?*

---

## Nivel 2 · Anatomía de una Instrucción Efectiva
### "La diferencia entre un resultado mediocre y uno excelente"

**Objetivo pedagógico:** El participante experimenta directamente cómo la estructura del prompt determina la calidad del resultado. Aprende el patrón Contexto + Rol + Tarea + Formato + Restricciones.

---

### Ejercicio 2.1 — De vago a preciso: Mejorando un reporte presupuestal
**Duración:** 20 minutos  
**Competencia:** Interacción avanzada · Nivel competencia

**Contexto:** Finanzas le solicita un reporte del ejercicio presupuestal de su departamento. Usted va a experimentar cómo el mismo pedido, formulado de dos maneras diferentes, produce resultados radicalmente distintos.

**Instrucciones paso a paso:**

**Fase A — El prompt vago (3 min):**
1. Pegue este prompt en Amazon Quick:
```
Hazme un reporte de presupuesto.
```
2. Lea el resultado. Anote mentalmente: ¿es útil para enviar a Finanzas?

**Fase B — El prompt estructurado (5 min):**
1. Ahora pegue este prompt mejorado:
```
Actúe como analista financiero administrativo de una universidad privada.

Necesito un reporte del ejercicio presupuestal del departamento de [NOMBRE DEL DEPARTAMENTO] para presentar a la Dirección de Finanzas.

Datos del periodo [MES/TRIMESTRE] [AÑO]:
- Presupuesto autorizado: $[MONTO]
- Presupuesto ejercido a la fecha: $[MONTO]
- Porcentaje de avance: [PORCENTAJE]%
- Partidas con sobre-ejercicio: [PARTIDA 1: monto], [PARTIDA 2: monto]
- Partidas sub-ejercidas: [PARTIDA 1: monto], [PARTIDA 2: monto]
- Compromisos pendientes de pago: $[MONTO]

Genere:
1. Resumen ejecutivo del estado presupuestal (máximo 80 palabras)
2. Tabla comparativa presupuesto autorizado vs. ejercido por partida
3. Análisis de desviaciones significativas (>10% de diferencia)
4. 3 recomendaciones para optimizar el ejercicio en el trimestre restante
5. Proyección de cierre de año con base en tendencia actual

Formato: profesional, con tablas y viñetas, listo para presentar.
```

**Fase C — Comparación y diagnóstico (7 min):**
1. Coloque ambos resultados lado a lado
2. Complete esta tabla en su cuaderno:

| Criterio | Prompt vago | Prompt estructurado |
|---|---|---|
| ¿Usa los datos de mi departamento? | | |
| ¿Puedo enviarlo a Finanzas tal cual? | | |
| ¿Incluye análisis, no solo datos? | | |
| ¿El formato es presentable? | | |

**Output esperado:**  
El prompt vago producirá un texto genérico sobre cómo hacer reportes de presupuesto. El prompt estructurado producirá un documento con los datos reales del participante, tablas comparativas, análisis de desviaciones y recomendaciones específicas. La diferencia debe ser dramática.

**Variación simplificada:**  
Use estos datos de práctica:
- Departamento: Servicios Generales
- Periodo: Enero-Junio 2026
- Presupuesto autorizado: $2,400,000 / Ejercido: $1,580,000
- Sobre-ejercicio: Mantenimiento correctivo ($180,000 sobre lo planeado)
- Sub-ejercicio: Capacitación ($45,000 sin ejercer)
- Pendientes: $320,000

**🔍 Momento de reflexión:**  
*"La IA no lee su mente. La calidad de lo que usted recibe es proporcional a la claridad de lo que usted pide. Esto aplica también a cómo damos instrucciones a nuestros equipos — si la instrucción es vaga, el resultado es vago."*

---

## Nivel 3 · Casos de Uso en Gestión Administrativa
### "Tres problemas reales, tres soluciones en 30 minutos"

**Objetivo pedagógico:** El participante aplica IA a tres escenarios de su realidad laboral diaria y sale con tres outputs directamente usables.

---

### Ejercicio 3.1 — Evaluación de desempeño: Retroalimentación constructiva
**Duración:** 20 minutos  
**Competencia:** Gestión de RH · Nivel competencia

**Contexto:** Se acerca el periodo de evaluación del desempeño y usted necesita redactar retroalimentación individual para los miembros de su equipo. Es una de las tareas más delicadas y que más tiempo consume. Con IA, genera el borrador para luego personalizarlo con su conocimiento directo de cada persona.

**Instrucciones paso a paso:**

1. Piense en un miembro de su equipo cuya evaluación sea próxima
2. Copie y personalice el siguiente prompt (NO incluya el nombre real del colaborador en esta práctica)
3. Envíelo a Amazon Quick
4. Revise: ¿el tono es constructivo? ¿las sugerencias son accionables?

**Prompt de ejemplo:**
```
Actúe como especialista en gestión de talento humano en una universidad privada.

Necesito redactar la retroalimentación de evaluación de desempeño para un colaborador del departamento de [DEPARTAMENTO] con el puesto de [PUESTO].

Periodo evaluado: [MES INICIO] a [MES FIN] [AÑO]

Desempeño observado:
- Fortalezas: [FORTALEZA 1 — ej: puntualidad excepcional], [FORTALEZA 2 — ej: buena atención a usuarios], [FORTALEZA 3]
- Áreas de mejora: [ÁREA 1 — ej: cumplimiento de fechas de entrega], [ÁREA 2 — ej: comunicación con otros departamentos]
- Logro destacado del periodo: [DESCRIPCIÓN]
- Incidencia relevante (si aplica): [DESCRIPCIÓN o "Ninguna"]

Genere:
1. Párrafo de reconocimiento por fortalezas (específico, no genérico)
2. Retroalimentación constructiva sobre áreas de mejora (con ejemplos de cómo mejorar, no solo señalar el problema)
3. 2 objetivos SMART para el próximo periodo
4. Cierre motivacional alineado a valores institucionales

Tono: profesional, respetuoso, constructivo. Nunca punitivo. El objetivo es el desarrollo del colaborador.
Extensión: máximo 400 palabras.
```

**Output esperado:**  
Una retroalimentación equilibrada que reconoce logros sin ser condescendiente y señala áreas de mejora sin ser punitiva. Los objetivos SMART deben ser específicos al puesto. El cierre debe conectar con el desarrollo profesional.

**Variación simplificada:**  
Use este caso predeterminado:
- Departamento: Servicios Escolares
- Puesto: Asistente administrativo
- Fortalezas: buena actitud de servicio, dominio del sistema de inscripción
- Áreas de mejora: documentación de procesos, proactividad ante cambios
- Logro: atendió exitosamente el proceso de reinscripción con cero quejas

---

### Ejercicio 3.2 — Correo a proveedor: Seguimiento a entrega pendiente
**Duración:** 15 minutos  
**Competencia:** Comunicación con externos · Nivel competencia

**Prompt de ejemplo:**
```
Redacte un correo formal de seguimiento a un proveedor que tiene una entrega pendiente con la Universidad Anáhuac Mayab.

Datos:
- Proveedor: [NOMBRE DE LA EMPRESA]
- Contacto: [NOMBRE DEL CONTACTO]
- Concepto: [DESCRIPCIÓN DEL BIEN O SERVICIO — ej: mobiliario para aulas / equipos de cómputo / material de oficina]
- Orden de compra/contrato: [NÚMERO O REFERENCIA]
- Fecha comprometida de entrega: [FECHA]
- Días de retraso: [NÚMERO] días
- Impacto del retraso: [DESCRIPCIÓN — ej: "las aulas del nuevo edificio no pueden habilitarse para el inicio de clases"]

El correo debe:
1. Recordar el compromiso de entrega con datos específicos
2. Señalar el retraso sin ser agresivo pero sí firme
3. Solicitar una fecha actualizada de entrega
4. Mencionar que se escalará al área de Compras si no hay respuesta en [NÚMERO] días hábiles
5. Mantener la relación profesional — no queremos perder al proveedor, queremos la entrega

Firmante: [SU NOMBRE], [CARGO], Universidad Anáhuac Mayab
Extensión: máximo 200 palabras.
```

**Output esperado:**  
Un correo que sea firme pero profesional, con datos específicos que demuestran seguimiento y una solicitud clara con plazo. El tono debe equilibrar la urgencia con la diplomacia.

**Variación simplificada:**  
Use como concepto: "Entrega de 50 sillas para aulas del edificio B, con 15 días de retraso respecto al contrato UNAM-2026-0847."

---

## Nivel 4 · Evaluación Crítica de Resultados
### "No todo lo que la IA genera es correcto — y usted debe saber distinguirlo"

**Objetivo pedagógico:** El participante desarrolla criterio para evaluar, cuestionar y verificar lo que la IA produce. Este es el nivel más importante del curso: transforma usuarios pasivos en usuarios críticos.

---

### Ejercicio 4.1 — Auditoría de un análisis financiero: Encontrar los errores
**Duración:** 20 minutos  
**Competencia:** Evaluación crítica · Nivel agencia

**Contexto:** La IA va a generar un análisis con datos numéricos. Algunos cálculos serán plausibles pero inconsistentes. Su trabajo es encontrar las fallas como lo haría con el trabajo de un analista nuevo.

**Instrucciones paso a paso:**

1. Pegue el siguiente prompt en Amazon Quick:
```
Genere un análisis comparativo del gasto operativo de una universidad privada mediana en México, desglosado por estas categorías:

1. Nómina y prestaciones (personal administrativo y académico)
2. Servicios (luz, agua, telecomunicaciones, internet)
3. Mantenimiento de infraestructura
4. Tecnología y equipamiento
5. Servicios contratados (limpieza, seguridad, jardinería)

Para cada categoría incluya:
- Porcentaje típico del presupuesto total
- Monto estimado para un presupuesto anual de $150 millones de pesos
- Comparativa con el promedio del sector educativo privado
- Una recomendación de optimización

Presente en formato de tabla ejecutiva con totales.
```

2. **ANTES de leer el resultado**, anote en su cuaderno:
   - ¿Cuánto gasta aproximadamente su departamento en nómina?
   - ¿Los porcentajes que conoce de su presupuesto real?
   - ¿Los montos le parecen razonables para Anáhuac?

3. **Ahora lea el resultado y verifique:**
   - 🟢 ¿Los porcentajes suman 100% (o al menos son coherentes)?
   - 🟡 ¿Los montos en pesos coinciden con los porcentajes declarados?
   - 🔴 ¿Hay recomendaciones que contradigan la realidad de una universidad? (ej: "reducir nómina docente 20%")
   - 🔴 ¿Cita fuentes o estadísticas específicas? ¿Son verificables?

4. Comparta con su mesa: ¿cuántas inconsistencias encontró?

**Output esperado:**  
La IA producirá una tabla que se ve profesional y convincente. Es muy probable que:
- Los porcentajes no sumen correctamente
- Los montos calculados no correspondan a los porcentajes
- "Promedios del sector" sean inventados o imprecisos
- Las recomendaciones sean genéricas o poco realistas para el contexto

Esto es **intencional y es el punto del ejercicio**.

**Variación simplificada:**  
Concéntrese solo en verificar que los porcentajes sumen 100% y que los montos en pesos sean consistentes con esos porcentajes. Eso ya revelará errores.

**🔍 Momento de reflexión crítica:**  
*"Si usted hubiera incluido estas cifras en un reporte al Comité de Finanzas sin verificarlas, ¿qué consecuencias tendría? La IA es buena para estructurar y redactar, pero los números los verifica usted."*

**Regla de oro que se lleva el participante:**  
> **Toda cifra, porcentaje, fecha y referencia generada por IA debe verificarse contra sus fuentes reales. Si la IA dice "según datos del INEGI" o "el promedio del sector es X%", verifique antes de citarlo.**

---

## Nivel 5 · Ética y Uso Responsable
### "Lo que puede hacer vs. lo que debe hacer"

**Objetivo pedagógico:** El participante experimenta dilemas éticos reales de la gestión administrativa donde el uso de IA requiere juicio, no solo competencia técnica.

---

### Ejercicio 5.1 — El semáforo ético: ¿Cuándo SÍ, cuándo NO, cuándo con cuidado?
**Duración:** 20 minutos  
**Competencia:** Juicio ético · Nivel agencia

**Contexto:** Se le presentan 10 escenarios reales de gestión administrativa. Para cada uno, usted debe decidir si usar IA es apropiado (🟢), inapropiado (🔴) o requiere precauciones especiales (🟡).

**Instrucciones paso a paso:**

1. Pegue el siguiente prompt en Amazon Quick:
```
Soy director/jefe de un departamento administrativo en una universidad privada. Evalúe los siguientes 10 escenarios y para cada uno indique:
- 🟢 APROPIADO usar IA (explique por qué y qué precauciones tomar)
- 🟡 USAR CON PRECAUCIÓN (explique los riesgos y qué salvaguardas aplicar)
- 🔴 INAPROPIADO usar IA (explique por qué y qué alternativa sugiere)

Escenarios:
1. Redactar un comunicado interno sobre el nuevo horario de la cafetería
2. Generar la carta de despido de un colaborador que tiene bajo desempeño
3. Analizar tendencias de gasto en servicios generales de los últimos 3 años
4. Redactar el acta administrativa de un incidente de un empleado
5. Crear el borrador de la licitación para renovar el contrato de limpieza
6. Evaluar candidatos para una vacante usando sus CVs como insumo
7. Preparar la respuesta a una auditoría interna sobre procesos de compra
8. Generar un resumen de la minuta de la junta directiva para los ausentes
9. Decidir a quién otorgar el bono de desempeño del trimestre
10. Preparar una presentación sobre el avance de obra del nuevo edificio

Para cada uno, considere: datos personales de empleados, implicaciones laborales/legales, responsabilidad fiduciaria, y si la decisión requiere juicio humano irremplazable.
```

2. **ANTES de ver la respuesta de la IA, clasifique usted mismo los 10 escenarios**
3. Compare su clasificación con la de la IA
4. Discuta en mesa las diferencias

**Output esperado:**  
Un análisis detallado de cada escenario con justificación ética:
- Los escenarios 1, 3, 5, 8, 10 deberían ser 🟢 o 🟡
- Los escenarios 2, 4, 6, 9 deberían ser 🟡 o 🔴
- El escenario 7 es deliberadamente ambiguo

Lo importante no es la respuesta "correcta" sino el razonamiento.

**Variación simplificada:**  
Trabaje solo con los escenarios 1, 4, 5, 9 (los más contrastantes).

**🔍 Momento de reflexión ética:**  
*"La IA no tiene criterio ético — usted sí. Cuando la IA toca datos de empleados, contratos, auditorías o decisiones que afectan personas, la responsabilidad es de quien la usa."*

**Principio para llevar:**  
> **Tres preguntas antes de usar IA en cualquier proceso administrativo:**  
> 1. ¿Involucra datos personales, laborales o financieros sensibles?  
> 2. ¿La decisión tiene implicaciones legales o contractuales?  
> 3. ¿Puedo explicar y defender ante una auditoría cómo llegué a este resultado?

---

## Nivel 6 · Flujos de Trabajo Integrados
### "De la tarea suelta al proceso completo"

**Objetivo pedagógico:** El participante aprende a encadenar múltiples interacciones con la IA para resolver un proceso administrativo completo, no solo tareas aisladas.

---

### Ejercicio 6.1 — Flujo completo: Propuesta de proyecto institucional
**Duración:** 20 minutos  
**Competencia:** Pensamiento estratégico · Nivel agencia

**Contexto:** Usted necesita presentar una propuesta de mejora o proyecto a su director/vicerrector. Normalmente esto le toma días de recopilar información, estructurar y redactar. Hoy lo hará en 4 pasos encadenados.

**Instrucciones paso a paso:**

**Paso 1 — Estructura de la propuesta (3 min):**
```
Actúe como consultor de gestión de proyectos institucionales para una universidad privada.

Necesito elaborar una propuesta para [DESCRIPCIÓN DEL PROYECTO — ej: renovación del sistema de control de acceso a campus / implementación de sistema de tickets para solicitudes internas / remodelación del área de servicio al estudiante].

Genere la estructura de una propuesta ejecutiva que incluya:
- Justificación y problemática actual
- Objetivo general y objetivos específicos
- Alcance del proyecto
- Inversión estimada y retorno
- Cronograma de implementación
- Riesgos y mitigación
- Métricas de éxito

No debe exceder 4 cuartillas. Proponga la estructura con encabezados y extensión por sección.
```

**Paso 2 — Justificación con datos (5 min):**
*(En la misma conversación):*
```
Desarrolle la sección de Justificación y Problemática con estos datos reales:

- Situación actual: [DESCRIPCIÓN DEL PROBLEMA]
- Impacto: [A QUIÉN AFECTA Y CÓMO — ej: "Los colaboradores pierden en promedio 45 min al día buscando aprobaciones por correo"]
- Intentos previos de solución: [QUÉ SE HA HECHO ANTES]
- Referentes: [ALGUNA UNIVERSIDAD O EMPRESA QUE YA LO IMPLEMENTÓ, si conoce alguna]

Redacte con datos concretos, no teoría. Máximo media cuartilla.
```

**Paso 3 — Inversión y cronograma (5 min):**
```
Ahora la sección financiera y de implementación:

Inversión estimada:
- [RUBRO 1]: $[MONTO] — [DESCRIPCIÓN]
- [RUBRO 2]: $[MONTO] — [DESCRIPCIÓN]
- [RUBRO 3]: $[MONTO] — [DESCRIPCIÓN]
- Total: $[MONTO TOTAL]

Fuente de financiamiento propuesta: [PRESUPUESTO DEPARTAMENTAL / INVERSIÓN EXTRAORDINARIA / FONDO DE MEJORA]

Genere:
1. Tabla de inversión por rubro con justificación
2. Cronograma de implementación en 3 fases (preparación, ejecución, estabilización) con duración estimada
3. Análisis costo-beneficio en un párrafo ejecutivo
```

**Paso 4 — Resumen ejecutivo y cierre (5 min):**
```
Para cerrar la propuesta, genere:

1. Resumen ejecutivo de toda la propuesta (máximo 100 palabras) para abrir el documento
2. Sección de "Solicitud de Autorización" indicando qué se necesita: [APROBACIÓN DE PRESUPUESTO / ASIGNACIÓN DE EQUIPO / VISTO BUENO PARA CONTRATAR]
3. Cierre institucional

Compile toda la propuesta integrada con la estructura que definimos al inicio.

Firmante: [SU NOMBRE], [CARGO], Universidad Anáhuac Mayab
```

**Output esperado:**  
Una propuesta de proyecto de 3-4 cuartillas, completa, con estructura profesional, datos del participante integrados y formato presentable para la dirección. El participante sale con un documento que puede afinar y presentar.

**Variación simplificada:**  
Haga solo los Pasos 1 y 2. El facilitador provee un caso de ejemplo: "Implementación de un sistema de tickets para solicitudes de mantenimiento".

**🔍 Momento de reflexión:**  
*"¿Notó cómo cada paso alimenta al siguiente? Usted no le pidió 4 cosas sueltas — dirigió un proceso. Eso es gestionar con IA, no solo usarla."*

---

## Nivel 7 · Personalización y Contexto Institucional
### "Hacer que la IA hable como Anáhuac"

**Objetivo pedagógico:** El participante aprende a inyectar contexto institucional para que los resultados sean consistentes con la identidad y procesos de la Universidad Anáhuac Mayab.

---

### Ejercicio 7.1 — Creando su perfil de contexto institucional
**Duración:** 20 minutos  
**Competencia:** Personalización estratégica · Nivel agencia

**Contexto:** Cada vez que le pide algo a la IA, tiene que explicar quién es y dónde trabaja. ¿Y si pudiera darle esa información una sola vez y que la recuerde en la conversación?

**Instrucciones paso a paso:**

**Paso 1 — Construir su contexto base (8 min):**
1. Complete esta plantilla con su información real:
```
A partir de ahora, tenga en cuenta el siguiente contexto para todas mis solicitudes:

PERFIL INSTITUCIONAL:
- Institución: Universidad Anáhuac Mayab (Mérida, Yucatán, México)
- Naturaleza: Universidad privada, identidad católica, formación integral
- Mi cargo: [SU CARGO COMPLETO]
- Mi departamento: [DEPARTAMENTO]
- Mi área funcional: [FINANZAS / RH / SERVICIOS GENERALES / TECNOLOGÍA / COMPRAS / etc.]
- Reporto a: [CARGO DE SU JEFE DIRECTO]
- Mi equipo: [NÚMERO] personas a mi cargo

ESTILO DE COMUNICACIÓN:
- Documentos internos: formal, conciso, orientado a datos
- Comunicación con proveedores: profesional, firme, institucional
- Comunicación con colaboradores: respetuosa, clara, directa
- Tratamiento: de "usted" siempre
- Firma: [SU NOMBRE], [CARGO] — Universidad Anáhuac Mayab

CONTEXTO OPERATIVO:
- Ciclo presupuestal: [ANUAL / SEMESTRAL]
- Periodo actual: [MES/PERIODO ACTUAL]
- Sistemas que usa: [SAP / Banner / TOTVS / Excel / el que aplique]
- Procesos en curso: [CIERRE TRIMESTRAL / AUDITORÍA / LICITACIÓN / etc.]
- Prioridades actuales: [2-3 PRIORIDADES]

Use este contexto en todas las respuestas. Si necesita información adicional, pregunte antes de asumir.
```

2. Péguelo en una nueva conversación de Amazon Quick
3. La IA confirmará que lo registró

**Paso 2 — Probar el contexto (5 min):**
En la MISMA conversación, escriba algo breve:
```
Redacte un correo para mi equipo recordando la fecha de entrega del reporte mensual.
```

Observe cómo el resultado ya incluye su nombre, departamento, tono correcto y firma institucional.

**Paso 3 — Comparar (5 min):**
Abra una conversación NUEVA (sin contexto) y pegue la misma solicitud:
```
Redacte un correo para mi equipo recordando la fecha de entrega del reporte mensual.
```

Compare ambos resultados.

**Output esperado:**  
- Con contexto: correo personalizado con su nombre, departamento, tono institucional y firma correcta
- Sin contexto: correo genérico, posiblemente con tuteo o sin identidad institucional

**Variación simplificada:**  
El facilitador proyecta un contexto pre-llenado. Los participantes solo cambian nombre, cargo y departamento.

**🔍 Momento de reflexión:**  
*"Este contexto es como la configuración de su teléfono: lo hace una vez y mejora todo lo demás. Es la inversión de 5 minutos que le ahorra horas."*

---

## Nivel 8 · Plan de Implementación Personal
### "De aquí a 30 días: su hoja de ruta personal"

**Objetivo pedagógico:** El participante sale del curso con un plan concreto, personalizado y realista de implementación. No es un ejercicio teórico — es el entregable final que compromete acciones específicas.

---

### Ejercicio 8.1 — Mi plan de adopción de IA: 30 días
**Duración:** 20 minutos  
**Competencia:** Metacognición y planificación · Nivel agencia

**Contexto:** El curso termina, pero la implementación comienza. Este ejercicio le ayuda a identificar exactamente dónde integrar IA en su operación diaria.

**Instrucciones paso a paso:**

**Paso 1 — Diagnóstico de sus tareas (5 min):**
```
Actúe como consultor de productividad especializado en gestión administrativa universitaria.

Estas son las tareas que más tiempo me consumen cada semana como [SU CARGO] del departamento de [DEPARTAMENTO]:

1. [TAREA 1 — ej: Elaborar reportes de avance presupuestal]
2. [TAREA 2 — ej: Redactar correos de seguimiento a proveedores]
3. [TAREA 3 — ej: Preparar documentación para auditorías]
4. [TAREA 4 — ej: Generar minutas de reuniones de equipo]
5. [TAREA 5 — ej: Crear presentaciones para juntas directivas]

Para cada tarea, analice:
- Potencial de asistencia con IA (alto/medio/bajo)
- Tiempo estimado de ahorro por semana
- Nivel de riesgo si la IA comete un error (alto/medio/bajo)
- Recomendación: empezar ahora / empezar en 2 semanas / no recomendado con IA

Ordene de mayor a menor impacto para crear mi ruta de implementación.
```

**Paso 2 — Plan de 30 días (8 min):**
*(En la misma conversación):*
```
Con base en su análisis, diseñe un plan de implementación de 30 días:

Semana 1 (días 1-7): "Quick wins" — comunicados, correos, formatos recurrentes
Semana 2 (días 8-14): Tareas de análisis — reportes, comparativos, resúmenes
Semana 3 (días 15-21): Flujos completos — propuestas, proyectos, documentos multipartes
Semana 4 (días 22-30): Evaluación — qué funcionó, qué ajustar, qué eliminar

Para cada semana:
- 2 tareas específicas para hacer con IA
- El prompt base para cada una
- Criterio de éxito: ¿cómo sé si funcionó?
- Plan B: ¿qué hago si el resultado no sirve?

Formato: tabla por semana, accionable, sin teoría.
```

**Paso 3 — Compromiso personal (5 min):**
```
Resuma mi plan en un "contrato conmigo mismo":

COMPROMISO DE IMPLEMENTACIÓN DE IA
Nombre: [MI NOMBRE]
Cargo: [MI CARGO]
Departamento: [MI DEPARTAMENTO]
Fecha: [HOY]

Mi primera acción esta semana: _________
Mi meta al cierre del mes: _________
Tres cosas que la IA NO hará por mí: _________
Lo que haré cuando la IA dé un resultado incorrecto: _________
Mi criterio para evaluar si la IA me ayuda: _________

Formato: una sola página, imprimible.
```

**Output esperado:**  
- Paso 1: Análisis priorizado de 5 tareas
- Paso 2: Plan de 4 semanas con 8 tareas, prompts y criterios de éxito
- Paso 3: "Contrato personal" de una página imprimible

**Variación simplificada:**  
Solo complete Paso 1 con 3 tareas. El facilitador provee ejemplos de tareas comunes administrativas.

**🔍 Momento de cierre:**  
*"No se trata de usar IA en todo — se trata de usarla bien donde más le sirve. Su plan es su brújula para los próximos 30 días."*

---

## Resumen de ejercicios — Versión Administrativa

| Nivel | Ejercicio | Output del participante | Tiempo |
|--------|-----------|------------------------|--------|
| 1 | Comunicado interno al equipo | Borrador de comunicado listo para distribuir | 15 min |
| 2 | Prompt vago vs. estructurado (presupuesto) | Reporte presupuestal con datos propios | 20 min |
| 3 | Evaluación desempeño + Correo a proveedor | Retroalimentación + seguimiento profesional | 20 min |
| 4 | Auditoría de análisis financiero | Tabla revisada con inconsistencias marcadas | 20 min |
| 5 | Semáforo ético (10 escenarios admin) | Criterio personal para 10 escenarios | 20 min |
| 6 | Propuesta de proyecto institucional | Propuesta completa de 4 cuartillas | 20 min |
| 7 | Contexto institucional administrativo | Prompt de contexto personalizado reutilizable | 20 min |
| 8 | Plan de 30 días | Plan de implementación personal imprimible | 20 min |

---

*Documento diseñado para el curso "IA Práctica para Líderes Anáhuac Mayab" — Versión Administrativa*  
*Septiembre 2026*
