# 📋 Flujo de Reportes con IA — Template del Entregable Final
## IA Práctica para Líderes Anáhuac Mayab · Módulo 5

> **¿Qué es este documento?**
> Este es el template para construir su **flujo de reporte automatizado con IA** — el entregable principal del Módulo 5. Usted completará cada paso con la información de su reporte recurrente más importante. Al terminarlo, tendrá un proceso documentado y reutilizable que reduce el tiempo de elaboración de su reporte en al menos 60%.
>
> **Instrucciones:**
> 1. Lea cada paso completo antes de empezar a escribir
> 2. Reemplace cada `[DATO]` con su información real
> 3. Copie los prompts, péguelos en Amazon Quick y guarde los resultados
> 4. Al final, tendrá un flujo listo para usar cada vez que genere este reporte

---

## Paso 0 — Elija su reporte

Antes de comenzar, seleccione **el reporte recurrente que más tiempo le consume**. Debe cumplir estos criterios:

- [ ] Lo genera al menos 1 vez al mes (o más frecuente)
- [ ] Le toma más de 1 hora elaborarlo actualmente
- [ ] Tiene una audiencia clara (alguien lo lee y toma decisiones con él)
- [ ] Requiere datos que usted recopila de fuentes conocidas
- [ ] El formato se repite cada vez (aunque los datos cambien)

**Mi reporte elegido:** ______________________________________

---

## Paso 1 — Definir el reporte

Complete esta ficha técnica de su reporte:

| Campo | Su información |
|-------|---------------|
| **Nombre del reporte** | [NOMBRE — ej: "Reporte mensual de indicadores académicos" / "Informe trimestral de ejecución presupuestal"] |
| **Frecuencia** | [SEMANAL / QUINCENAL / MENSUAL / TRIMESTRAL] |
| **Destinatario principal** | [CARGO — ej: Director de Escuela / Vicerrector / Comité de Dirección] |
| **Para qué se usa** | [DESCRIPCIÓN EN 1 ORACIÓN — ej: "Para que rectoría monitoree el cumplimiento de indicadores del programa y tome decisiones de intervención"] |
| **Tiempo actual de elaboración** | [HORAS — ej: 4 horas] |
| **Tiempo objetivo con IA** | [META — ej: 1.5 horas o menos] |
| **Formato de entrega** | [CORREO / DOCUMENTO WORD / PRESENTACIÓN / EXCEL] |
| **Extensión típica** | [NÚMERO DE PÁGINAS O CUARTILLAS] |

### Fuentes de datos

Liste las fuentes de donde obtiene la información para este reporte:

| # | Fuente de datos | Formato | Quién la proporciona | Frecuencia de actualización |
|---|-----------------|---------|---------------------|---------------------------|
| 1 | [ej: Sistema de gestión escolar] | [ej: Excel / PDF / pantalla] | [ej: Servicios Escolares] | [ej: diario] |
| 2 | [ej: Encuestas de satisfacción] | [ej: Excel con resultados] | [ej: Calidad Educativa] | [ej: semestral] |
| 3 | [ej: Notas propias de reuniones] | [ej: Word / notas sueltas] | [ej: yo mismo] | [ej: semanal] |
| 4 | [FUENTE] | [FORMATO] | [QUIÉN] | [FRECUENCIA] |
| 5 | [FUENTE] | [FORMATO] | [QUIÉN] | [FRECUENCIA] |

### Secciones del reporte

Liste las secciones que tiene su reporte:

| # | Sección | Qué contiene | Dato principal |
|---|---------|-------------|---------------|
| 1 | [ej: Resumen ejecutivo] | [ej: Párrafo de 80 palabras con lo más relevante] | [ej: tendencia general] |
| 2 | [ej: Indicadores clave] | [ej: Tabla con 5-8 KPIs y semáforo] | [ej: datos numéricos] |
| 3 | [ej: Análisis de variaciones] | [ej: Explicación de cambios significativos] | [ej: comparativa vs. periodo anterior] |
| 4 | [ej: Acciones y recomendaciones] | [ej: 3-5 acciones propuestas] | [ej: plan de intervención] |
| 5 | [ej: Solicitudes a dirección] | [ej: Lo que necesito que aprueben] | [ej: recursos o decisiones] |

---

## Paso 2 — Prompt maestro del reporte

Este es el prompt central que generará su reporte cada vez que lo necesite. Está diseñado para que solo cambie los datos, no la instrucción.

### Prompt maestro — versión reutilizable

Copie este prompt, adáptelo una vez con los detalles de su reporte, y reutilícelo en cada ciclo:

```
Rol: Actúe como [ROL — ej: analista de gestión académica / controller
financiero / analista de operaciones] de una universidad privada
mexicana.

Contexto: Soy [SU CARGO] del área de [SU ÁREA/PROGRAMA] de la
Universidad Anáhuac Mayab. Genero un [NOMBRE DEL REPORTE] con
frecuencia [FRECUENCIA] para [DESTINATARIO].

Datos del periodo [PERIODO ACTUAL — cambiar cada vez]:

[SECCIÓN 1 — DATOS]:
- [INDICADOR 1]: [VALOR ACTUAL] (periodo anterior: [VALOR]) (meta: [VALOR])
- [INDICADOR 2]: [VALOR ACTUAL] (periodo anterior: [VALOR]) (meta: [VALOR])
- [INDICADOR 3]: [VALOR ACTUAL] (periodo anterior: [VALOR]) (meta: [VALOR])
- [INDICADOR 4]: [VALOR ACTUAL] (periodo anterior: [VALOR]) (meta: [VALOR])
- [INDICADOR 5]: [VALOR ACTUAL] (periodo anterior: [VALOR]) (meta: [VALOR])

[SECCIÓN 2 — CONTEXTO CUALITATIVO]:
- Logros del periodo: [LOGRO 1], [LOGRO 2]
- Incidencias relevantes: [INCIDENCIA 1], [INCIDENCIA 2]
- Temas pendientes: [PENDIENTE 1], [PENDIENTE 2]

[SECCIÓN 3 — SOLICITUDES O NECESIDADES]:
- [SOLICITUD 1]
- [SOLICITUD 2]

Genera el reporte con la siguiente estructura:
1. Resumen ejecutivo (máximo 80 palabras) con la conclusión más
   importante al inicio
2. Tabla de indicadores con columnas: Indicador | Actual | Anterior |
   Meta | Variación | Semáforo 🟢🟡🔴
3. Análisis de los indicadores que requieren atención (solo los que
   están en 🟡 o 🔴)
4. Logros y avances del periodo
5. [NÚMERO] recomendaciones concretas y accionables
6. Solicitudes a [DESTINATARIO] formuladas de manera clara

Reglas:
- Máximo [NÚMERO] cuartillas
- Tono: ejecutivo, basado en datos, orientado a decisiones
- Semáforo: 🟢 cumple meta o mejora · 🟡 variación <5% vs. meta ·
  🔴 variación >5% vs. meta o retroceso significativo
- No inventar datos; si falta información, indicarlo
- Firmante: [SU NOMBRE], [CARGO]
```

### Cómo personalizarlo la primera vez

1. Reemplace `[ROL]`, `[SU CARGO]`, `[SU ÁREA]`, `[NOMBRE DEL REPORTE]`, `[FRECUENCIA]`, `[DESTINATARIO]` con datos permanentes
2. Defina los indicadores fijos de su reporte (los que siempre aparecen)
3. Ajuste la estructura de secciones a su formato habitual
4. Guarde este prompt personalizado como **su prompt maestro** — no lo modifique en cada uso, solo actualice los valores entre corchetes

---

## Paso 3 — Datos de entrada

### Cómo preparar sus datos para la IA

La calidad del reporte depende directamente de la calidad de los datos que proporcione. Siga este checklist:

**Opción A — Datos escritos directamente en el prompt:**
- [ ] Recopile todos los datos numéricos del periodo
- [ ] Incluya siempre el dato del periodo anterior para comparación
- [ ] Incluya la meta si existe
- [ ] Agregue notas cualitativas (logros, incidencias, contexto)
- [ ] Verifique que los números sean correctos ANTES de pegarlos

**Opción B — Datos en archivo adjunto (recomendado para reportes con muchos datos):**
- [ ] Prepare un archivo Excel o CSV con los datos del periodo
- [ ] Suba el archivo a Amazon Quick (workspace o archivo adjunto)
- [ ] Agregue al inicio del prompt: "Analiza los datos del archivo adjunto"
- [ ] Mantenga el resto del prompt maestro igual

**Opción C — Datos en múltiples archivos:**
- [ ] Suba todos los archivos de fuente a Amazon Quick
- [ ] Agregue: "Fuentes: [nombre del archivo 1] contiene [qué datos],
  [nombre del archivo 2] contiene [qué datos]"
- [ ] La IA cruzará la información de múltiples fuentes

### Tabla de preparación de datos

Complete esta tabla antes de cada elaboración del reporte:

| Fuente | Dato necesario | Obtenido (✓/✗) | Valor | Notas |
|--------|---------------|-----------------|-------|-------|
| [FUENTE 1] | [DATO] | ☐ | | |
| [FUENTE 2] | [DATO] | ☐ | | |
| [FUENTE 3] | [DATO] | ☐ | | |
| [FUENTE 4] | [DATO] | ☐ | | |
| [FUENTE 5] | [DATO] | ☐ | | |

---

## Paso 4 — Generación y revisión

### 4.1 Generar el reporte

1. Abra Amazon Quick
2. Pegue su prompt maestro con los datos actualizados del periodo
3. Envíe y espere el resultado (típicamente 30-90 segundos)
4. Lea el resultado completo antes de hacer cualquier cambio

### 4.2 Checklist de verificación humana

**Este paso es OBLIGATORIO.** Nunca envíe un reporte generado por IA sin verificarlo.

| # | Verificación | ✓/✗ | Notas |
|---|-------------|------|-------|
| 1 | **Datos numéricos:** ¿Los números del reporte coinciden con mis datos de entrada? | ☐ | |
| 2 | **Cálculos:** ¿Las variaciones porcentuales están correctamente calculadas? | ☐ | |
| 3 | **Semáforo:** ¿Los colores del semáforo reflejan correctamente el estatus? | ☐ | |
| 4 | **Nombres y fechas:** ¿Son correctos todos los nombres, periodos y fechas? | ☐ | |
| 5 | **Afirmaciones:** ¿La IA afirma algo que no está en mis datos? (fabricaciones) | ☐ | |
| 6 | **Recomendaciones:** ¿Las acciones propuestas son realistas y pertinentes? | ☐ | |
| 7 | **Tono:** ¿El tono es apropiado para el destinatario? | ☐ | |
| 8 | **Extensión:** ¿Cumple con el límite de cuartillas? | ☐ | |
| 9 | **Formato:** ¿Las tablas, viñetas y secciones se ven correctas? | ☐ | |
| 10 | **Firma:** ¿Está mi nombre y cargo correctos? | ☐ | |

**Regla de oro:** Si falla alguno de los puntos 1-5 (datos), corrija antes de continuar. Si falla alguno de los puntos 6-10 (formato), solicite correcciones en el Paso 5.

---

## Paso 5 — Iteración (pedir correcciones)

Si el resultado necesita ajustes, use estos prompts de refinamiento. No reescriba todo; pida cambios específicos:

### Prompt de corrección de datos
```
En el reporte anterior, corrige lo siguiente:
- [INDICADOR]: el valor correcto es [VALOR], no [VALOR INCORRECTO]
- [SECCIÓN]: la información correcta es [DATO CORRECTO]
Mantén todo lo demás igual y regenera solo las secciones afectadas.
```

### Prompt de ajuste de tono o formato
```
El reporte está bien en contenido. Haz estos ajustes de formato:
- [CAMBIO 1 — ej: "Reduce el resumen ejecutivo a 60 palabras"]
- [CAMBIO 2 — ej: "Cambia el tono de las recomendaciones a más directo"]
- [CAMBIO 3 — ej: "Agrega una fila más a la tabla de indicadores con [DATO]"]
No cambies los datos ni el análisis.
```

### Prompt de profundización
```
El reporte general está listo. Ahora necesito que profundices en la
sección de [SECCIÓN — ej: análisis de indicadores en rojo].

Para el indicador [INDICADOR]:
- Contexto adicional: [DATOS QUE NO INCLUÍ ANTES]
- Quiero que propongas 3 acciones más detalladas con responsable
  y plazo
- Extensión de esta sección: máximo 1 cuartilla adicional
```

### Prompt de adaptación de audiencia
```
Tengo el reporte completo para [DESTINATARIO ORIGINAL]. Ahora genera
una versión adaptada para [NUEVO DESTINATARIO — ej: el equipo
operativo / un comité diferente / una presentación de 5 minutos].

Ajusta:
- Nivel de detalle: [MÁS / MENOS]
- Tono: [MÁS EJECUTIVO / MÁS TÉCNICO / MÁS ACCESIBLE]
- Extensión: [NUEVA EXTENSIÓN]
- Enfoque: [QUÉ DESTACAR PARA ESTA AUDIENCIA]
```

---

## Paso 6 — Guardar como flujo reutilizable

### 6.1 Archivar su flujo

Una vez que su reporte salió bien por primera vez, guarde estos elementos como su "kit de reporte":

| Elemento | Dónde guardarlo | Nombre sugerido |
|----------|----------------|-----------------|
| Prompt maestro (personalizado) | Documento en su computadora o agente en Amazon Quick | `Prompt_[NombreReporte]_v1.txt` |
| Checklist de verificación | Impreso o digital junto al prompt | `Checklist_[NombreReporte].docx` |
| Tabla de preparación de datos | Archivo que actualiza cada periodo | `Datos_[NombreReporte]_[Periodo].xlsx` |
| Último reporte generado | Carpeta de reportes | `Reporte_[Periodo].docx` |

### 6.2 Crear un agente en Amazon Quick (opcional, nivel avanzado)

Si desea que su flujo esté siempre listo en Amazon Quick, cree un agente:

1. En Amazon Quick, vaya a "Crear agente" (o "Agent Builder")
2. **Nombre:** `Generador de [Nombre del Reporte]`
3. **Instrucciones:** pegue su prompt maestro como instrucción base del agente
4. **Archivos de referencia:** suba reportes anteriores como ejemplo del formato esperado
5. **Uso:** cada vez que necesite generar el reporte, abra este agente y solo proporcione los datos nuevos del periodo

### 6.3 Calendario de uso

| Frecuencia del reporte | Cuándo preparar datos | Cuándo generar con IA | Cuándo enviar |
|------------------------|----------------------|----------------------|--------------|
| Semanal | Viernes por la tarde | Lunes temprano | Lunes antes de las 10am |
| Mensual | Últimos 2 días del mes | Primer día hábil del mes siguiente | Máximo día 3 |
| Trimestral | Última semana del trimestre | Primera semana del siguiente | Según agenda de comité |

---

# VERSIÓN ACADÉMICA — Reporte de indicadores académicos del área

## Ejemplo completo aplicado

### Ficha del reporte

| Campo | Detalle |
|-------|---------|
| **Nombre** | Reporte mensual de indicadores del programa de [LICENCIATURA] |
| **Frecuencia** | Mensual |
| **Destinatario** | Director(a) de Escuela |
| **Propósito** | Monitorear indicadores clave y tomar decisiones de intervención oportuna |
| **Tiempo anterior** | 5 horas |
| **Tiempo objetivo** | 1.5 horas |

### Prompt maestro — versión académica

```
Rol: Actúe como analista de gestión académica de una universidad
privada mexicana.

Contexto: Soy el coordinador del programa de [LICENCIATURA] de la
Universidad Anáhuac Mayab. Genero un reporte mensual de indicadores
para la Dirección de Escuela.

Datos del mes de [MES] [AÑO]:

MATRÍCULA:
- Matrícula total: [NÚMERO] (mes anterior: [NÚMERO]) (meta semestral: [NÚMERO])
- Nuevo ingreso acumulado del ciclo: [NÚMERO] (meta: [NÚMERO])
- Bajas del mes: [NÚMERO] (motivo principal: [DESCRIPCIÓN])

RETENCIÓN:
- Tasa de retención de cohorte [AÑO]: [%] (meta: [%])
- Alumnos en riesgo académico identificados: [NÚMERO]
- Alumnos atendidos por tutoría este mes: [NÚMERO]

DESEMPEÑO DOCENTE:
- Promedio de evaluación docente del ciclo: [CALIFICACIÓN]/10
- Docentes con evaluación <7: [NÚMERO]
- Capacitaciones docentes realizadas este mes: [NÚMERO]

ACREDITACIÓN (si aplica):
- Estatus general: [EN TIEMPO / CON RETRASO]
- Indicadores en riesgo: [LISTA O "ninguno"]
- Próxima entrega de evidencias: [FECHA]

ACTIVIDADES DEL MES:
- Reuniones de academia realizadas: [NÚMERO]
- Eventos del programa: [DESCRIPCIÓN]
- Logros destacados: [LOGRO]

ALERTAS:
- [ALERTA 1 — ej: grupo de 5° semestre con alto índice de reprobación
  en materia X]
- [ALERTA 2 — si aplica]

SOLICITUDES A DIRECCIÓN:
- [SOLICITUD 1]
- [SOLICITUD 2]

Genera el reporte con esta estructura:
1. Resumen ejecutivo (80 palabras): arranca con la conclusión más
   importante
2. Tabla de indicadores: Indicador | Actual | Anterior | Meta |
   Variación | Semáforo 🟢🟡🔴
3. Análisis de indicadores en amarillo y rojo (máximo 1 párrafo
   por indicador)
4. Logros y actividades del mes
5. 3 acciones recomendadas para el mes siguiente
6. Solicitudes a Dirección

Reglas:
- Máximo 2 cuartillas
- Semáforo: 🟢 cumple o mejora · 🟡 desvío <5% · 🔴 desvío >5%
- Tono ejecutivo, basado en datos
- No inventar información
- Firmante: [SU NOMBRE], Coordinador(a) del programa de [LICENCIATURA]
```

### Checklist de verificación — versión académica

| # | Verificación específica | ✓/✗ |
|---|------------------------|------|
| 1 | ¿Los datos de matrícula coinciden con el sistema de gestión escolar? | ☐ |
| 2 | ¿La tasa de retención está correctamente calculada? | ☐ |
| 3 | ¿Los nombres de docentes o alumnos NO aparecen en el reporte? (confidencialidad) | ☐ |
| 4 | ¿Las evaluaciones docentes reflejan el promedio oficial? | ☐ |
| 5 | ¿Los indicadores de acreditación coinciden con el tablero oficial? | ☐ |
| 6 | ¿Las acciones recomendadas son factibles con mis recursos? | ☐ |
| 7 | ¿Las solicitudes a Dirección son específicas y accionables? | ☐ |

---

# VERSIÓN ADMINISTRATIVA — Reporte financiero/operativo del área

## Ejemplo completo aplicado

### Ficha del reporte

| Campo | Detalle |
|-------|---------|
| **Nombre** | Reporte mensual financiero y operativo del área de [ÁREA/DEPARTAMENTO] |
| **Frecuencia** | Mensual |
| **Destinatario** | Vicerrector(a) Administrativo(a) o Director(a) General |
| **Propósito** | Monitorear ejecución presupuestal, avance de proyectos y KPIs operativos |
| **Tiempo anterior** | 6 horas |
| **Tiempo objetivo** | 2 horas |

### Prompt maestro — versión administrativa

```
Rol: Actúe como controller financiero y analista de operaciones de
una universidad privada mexicana.

Contexto: Soy el director(a) del área de [ÁREA/DEPARTAMENTO] de la
Universidad Anáhuac Mayab. Genero un reporte mensual financiero y
operativo para la Vicerrectoría Administrativa.

Datos del mes de [MES] [AÑO]:

EJECUCIÓN PRESUPUESTAL:
| Rubro | Presupuesto mensual | Gasto real | Acumulado anual | Presupuesto anual |
|-------|-------------------|------------|-----------------|------------------|
| Nómina | $[MONTO] | $[MONTO] | $[MONTO] | $[MONTO] |
| Gastos operativos | $[MONTO] | $[MONTO] | $[MONTO] | $[MONTO] |
| Servicios | $[MONTO] | $[MONTO] | $[MONTO] | $[MONTO] |
| Inversiones | $[MONTO] | $[MONTO] | $[MONTO] | $[MONTO] |
| Otros | $[MONTO] | $[MONTO] | $[MONTO] | $[MONTO] |

Variaciones significativas del mes: [EXPLICACIÓN]

PROYECTOS EN CURSO:
- [PROYECTO 1]: avance [%], estatus [EN TIEMPO / RETRASADO /
  BLOQUEADO], próximo hito: [DESCRIPCIÓN, FECHA]
- [PROYECTO 2]: avance [%], estatus [ESTATUS], próximo hito:
  [DESCRIPCIÓN, FECHA]

KPIs OPERATIVOS:
- [KPI 1 — ej: Tiempo promedio de atención de órdenes de servicio]:
  [VALOR] (meta: [VALOR])
- [KPI 2 — ej: Satisfacción de usuarios internos]: [VALOR]/10
  (meta: [VALOR])
- [KPI 3 — ej: Cumplimiento de mantenimiento preventivo]: [%]
  (meta: [%])
- [KPI 4 — ej: Ocupación de espacios]: [%] (meta: [%])

INCIDENCIAS DEL MES:
- [INCIDENCIA 1]
- [INCIDENCIA 2]

TEMAS DE ATENCIÓN:
- [TEMA 1]
- [TEMA 2]

SOLICITUDES A VICERRECTORÍA:
- [SOLICITUD 1]
- [SOLICITUD 2]

Genera el reporte con esta estructura:
1. Resumen ejecutivo (80 palabras): arranca con la conclusión
   financiera más relevante
2. Tabla de ejecución presupuestal: Rubro | Presupuesto | Real |
   Variación | % Ejecución acumulada anual | Semáforo
3. Proyección de cierre anual si la tendencia continúa
4. Tabla de proyectos con semáforo
5. Tabla de KPIs con semáforo
6. Incidencias y acciones tomadas
7. 3 recomendaciones para el mes siguiente
8. Solicitudes a Vicerrectoría

Reglas:
- Máximo 3 cuartillas
- Montos en formato $X,XXX,XXX MXN
- Semáforo financiero: 🟢 ejecución 90-105% · 🟡 ejecución 80-89%
  o 106-115% · 🔴 ejecución <80% o >115%
- Semáforo de proyectos: 🟢 en tiempo · 🟡 retraso <2 semanas ·
  🔴 retraso >2 semanas o bloqueado
- Tono ejecutivo, basado en datos
- No inventar información
- Firmante: [SU NOMBRE], Director(a) de [ÁREA/DEPARTAMENTO]
```

### Checklist de verificación — versión administrativa

| # | Verificación específica | ✓/✗ |
|---|------------------------|------|
| 1 | ¿Los montos coinciden con el sistema contable / ERP? | ☐ |
| 2 | ¿Las variaciones porcentuales están correctamente calculadas? | ☐ |
| 3 | ¿La proyección de cierre anual es matemáticamente correcta? | ☐ |
| 4 | ¿Los estatus de proyectos reflejan la última reunión de seguimiento? | ☐ |
| 5 | ¿Los KPIs operativos provienen de la fuente oficial (no de estimaciones)? | ☐ |
| 6 | ¿Las solicitudes a Vicerrectoría incluyen monto si requieren presupuesto? | ☐ |
| 7 | ¿No hay información confidencial de nómina o datos personales? | ☐ |

---

## Registro de uso del flujo

Lleve un registro de cada vez que use este flujo para medir su mejora de productividad:

| # | Fecha | Periodo del reporte | Tiempo de preparación de datos | Tiempo de generación con IA | Tiempo de revisión | Tiempo total | Iteraciones | Notas |
|---|-------|--------------------|-----------------------------|---------------------------|-------------------|-------------|-------------|-------|
| 1 | | | | | | | | |
| 2 | | | | | | | | |
| 3 | | | | | | | | |
| 4 | | | | | | | | |
| 5 | | | | | | | | |

**Meta:** Que el Tiempo total del uso #3 sea ≤40% del Tiempo actual declarado en el Paso 1.

---

> **Reflexión ética:** Usted es el autor y responsable de cada reporte que firma. La IA es una herramienta que le ayuda a estructurar y redactar, pero la verificación de datos, la pertinencia de las recomendaciones y la decisión de enviar el reporte son siempre suyas. Nunca envíe un reporte sin completar el checklist de verificación.

---

*Template de Flujo de Reportes — Fase 5*
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
*Septiembre 2026*
