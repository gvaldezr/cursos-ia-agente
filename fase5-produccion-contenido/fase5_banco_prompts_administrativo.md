# 🏢 Banco de Prompts — Directivos ADMINISTRATIVOS
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

# SECCIÓN 1 — PRESUPUESTO Y FINANZAS (5 prompts)

---

### AD-01 · Análisis de variación presupuestal por centro de costos
**Caso de uso:** Comparar el presupuesto autorizado vs. el gasto real del periodo y explicar variaciones.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como analista financiero de una universidad privada
mexicana.

Input: Datos del presupuesto del área de [ÁREA/DEPARTAMENTO], periodo
[MES O TRIMESTRE] [AÑO]:

| Rubro | Presupuesto | Gasto real |
|-------|------------|------------|
| [RUBRO 1 — ej: Nómina] | $[MONTO] | $[MONTO] |
| [RUBRO 2 — ej: Servicios generales] | $[MONTO] | $[MONTO] |
| [RUBRO 3 — ej: Materiales] | $[MONTO] | $[MONTO] |
| [RUBRO 4 — ej: Viajes y representación] | $[MONTO] | $[MONTO] |
| [RUBRO 5 — ej: Tecnología] | $[MONTO] | $[MONTO] |
| [RUBRO 6 — ej: Mantenimiento] | $[MONTO] | $[MONTO] |
| TOTAL | $[MONTO] | $[MONTO] |

Contexto adicional: [EXPLICACIÓN BREVE DE VARIACIONES CONOCIDAS —
ej: se anticipó compra de equipo / hubo gasto extraordinario por
reparación / se retrasó una contratación]

Steps:
1. Calcule variación absoluta y porcentual por rubro
2. Asigne semáforo: 🟢 dentro del ±5% · 🟡 variación 5-15% ·
   🔴 variación >15%
3. Identifique los 2 rubros con mayor sobregasto y los 2 con
   mayor subejercicio
4. Para cada variación significativa, sugiera causa probable y
   acción correctiva
5. Genere recomendación de ajuste para el periodo restante

Expectation:
- Tabla de variación con semáforo por rubro
- Análisis de causas y acciones en máximo 1 cuartilla
- Párrafo ejecutivo de 80 palabras para el Vicerrector/Director
- Formato profesional, listo para presentar
```

**Output esperado:** Análisis presupuestal con tabla semáforo, variaciones calculadas, causas probables y recomendaciones de ajuste. Presentable a dirección.

---

### AD-02 · Justificación de partida presupuestal extraordinaria
**Caso de uso:** Redactar la justificación formal para solicitar un gasto no contemplado en el presupuesto original.
**Nivel:** 🟡 Intermedio · **Framework:** CO-STAR (Contexto-Objetivo-Estilo-Tono-Audiencia-Respuesta)

```
Contexto: El área de [ÁREA/DEPARTAMENTO] de la Universidad Anáhuac
Mayab necesita una partida extraordinaria de $[MONTO] MXN para
[CONCEPTO — ej: reparación urgente de equipo / contratación temporal /
adquisición de licencias / evento institucional no programado].
El presupuesto ordinario no contempla este gasto porque [RAZÓN].

Objetivo: Redactar una solicitud formal que justifique el gasto con
datos, demuestre su necesidad y proponga fuente de financiamiento o
compensación.

Estilo: Memo ejecutivo formal. Datos duros, sin rodeos.

Tono: Profesional, fundamentado, orientado a la solución (no solo
plantear el problema, sino proponer cómo resolverlo).

Audiencia: Vicerrector(a) Administrativo(a) o Comité de Finanzas
que aprueba gastos extraordinarios.

Respuesta:
- Memo de máximo 300 palabras
- Estructura: situación → justificación con datos → monto solicitado
  desglosado → impacto de NO autorizar → propuesta de compensación
  (ej: reasignación de otra partida, diferimiento) → fecha límite
  para la decisión
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Memo de justificación presupuestal con argumentación basada en datos, impacto y propuesta de compensación. Listo para presentar a comité.

---

### AD-03 · Reporte financiero trimestral del área
**Caso de uso:** Generar el reporte financiero trimestral que se presenta a la Vicerrectoría o Dirección General.
**Nivel:** 🔴 Avanzado · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como controller financiero de una institución educativa
privada.

Input: Datos financieros del área de [ÁREA/DEPARTAMENTO], trimestre
[Q1/Q2/Q3/Q4] [AÑO]:

Ingresos (si aplica):
- [CONCEPTO 1]: $[MONTO] (presupuestado: $[MONTO])
- [CONCEPTO 2]: $[MONTO] (presupuestado: $[MONTO])

Gastos por rubro:
- Nómina y prestaciones: $[MONTO] (presupuestado: $[MONTO])
- Gastos operativos: $[MONTO] (presupuestado: $[MONTO])
- Inversiones/CAPEX: $[MONTO] (presupuestado: $[MONTO])
- Otros: $[MONTO] (presupuestado: $[MONTO])

Datos del trimestre anterior (para comparativa):
- Total gastos Q anterior: $[MONTO]
- Principales variaciones: [DESCRIPCIÓN]

Compromisos pendientes (cuentas por pagar): $[MONTO ESTIMADO]

Steps:
1. Calcule ejecución presupuestal por rubro (% ejercido)
2. Compare gastos vs. trimestre anterior (variación)
3. Proyecte el cierre del año si la tendencia continúa
4. Identifique rubros con riesgo de sobregasto al cierre anual
5. Proponga 3 medidas de control para el trimestre siguiente

Expectation:
- Reporte de máximo 2 cuartillas con tablas
- Tabla 1: Ejecución presupuestal con % y semáforo
- Tabla 2: Comparativa trimestral
- Proyección de cierre anual en 1 párrafo
- Recomendaciones concretas
- Tono: ejecutivo, basado en datos, sin adjetivos innecesarios
```

**Output esperado:** Reporte financiero trimestral con ejecución presupuestal, comparativa, proyección de cierre y recomendaciones. Presentable a Vicerrectoría.

---

### AD-04 · Cotización comparativa de proveedores
**Caso de uso:** Estructurar la comparación de cotizaciones recibidas para tomar decisión de compra.
**Nivel:** 🟢 Básico · **Framework:** RTF (Rol-Tarea-Formato)

```
Rol: Eres un analista de compras institucionales.

Tarea: Compare las siguientes cotizaciones recibidas para la
adquisición de [CONCEPTO — ej: equipo de cómputo para laboratorio /
mobiliario para aulas / licencias de software / servicio de
mantenimiento de aires acondicionados]:

Proveedor 1: [NOMBRE]
- Precio total: $[MONTO]
- Incluye: [QUÉ INCLUYE]
- Tiempo de entrega: [DÍAS/SEMANAS]
- Garantía: [PERÍODO]
- Condiciones de pago: [DESCRIPCIÓN]

Proveedor 2: [NOMBRE]
- Precio total: $[MONTO]
- Incluye: [QUÉ INCLUYE]
- Tiempo de entrega: [DÍAS/SEMANAS]
- Garantía: [PERÍODO]
- Condiciones de pago: [DESCRIPCIÓN]

Proveedor 3: [NOMBRE]
- [MISMOS CAMPOS]

Criterios de decisión prioritarios: [ej: precio, tiempo de entrega,
garantía, experiencia previa, soporte post-venta]

Formato:
- Tabla comparativa con todos los criterios
- Columna de calificación 1-5 por criterio
- Recomendación fundamentada indicando proveedor sugerido
- Nota: si algún proveedor no cumple requisitos mínimos, señalarlo
- Máximo 1 cuartilla
```

**Output esperado:** Tabla comparativa de proveedores con calificación por criterio y recomendación fundamentada. Lista para adjuntar a orden de compra.

---

### AD-05 · Análisis costo-beneficio de proyecto
**Caso de uso:** Evaluar la viabilidad financiera de una iniciativa antes de solicitar aprobación.
**Nivel:** 🔴 Avanzado · **Framework:** Cadena de pensamiento (Chain-of-Thought)

```
Actúe como analista financiero de proyectos. Piense paso a paso
antes de dar su recomendación.

Proyecto: [NOMBRE DEL PROYECTO — ej: renovación del sistema de
cámaras de seguridad / implementación de software de gestión /
remodelación de área de servicio / contratación de servicio
outsourcing]

Datos del proyecto:
- Inversión inicial: $[MONTO] MXN
- Costos recurrentes anuales: $[MONTO] MXN
- Vida útil estimada: [AÑOS]
- Beneficio cuantificable: [DESCRIPCIÓN Y ESTIMACIÓN — ej: ahorro
  de $X en nómina / reducción de X% en costos de mantenimiento /
  incremento estimado de X en ingresos]
- Beneficio cualitativo: [DESCRIPCIÓN — ej: mejora en seguridad /
  cumplimiento normativo / satisfacción de usuarios]
- Alternativa de no hacer nada: [QUÉ PASA SI NO SE INVIERTE]

Piense paso a paso:
1. Primero, calcule el costo total de propiedad a [X] años
2. Luego, estime los beneficios cuantificables acumulados
3. Calcule el periodo de recuperación de la inversión (payback)
4. Evalúe los beneficios cualitativos y el costo de no actuar
5. Compare con la alternativa de no hacer nada
6. Finalmente, dé su recomendación: invertir / no invertir /
   invertir con ajustes

Formato:
- Tabla resumen: inversión, costos, beneficios, payback
- Análisis cualitativo en 1 párrafo
- Recomendación con justificación en 1 párrafo
- Máximo 1.5 cuartillas
```

**Output esperado:** Análisis costo-beneficio con cálculos, payback, evaluación cualitativa y recomendación fundamentada. Presentable a comité de inversiones.

---

# SECCIÓN 2 — RECURSOS HUMANOS Y NÓMINA (5 prompts)

---

### AD-06 · Descriptivo de puesto para nueva contratación
**Caso de uso:** Crear o actualizar la descripción de un puesto antes de lanzar la convocatoria.
**Nivel:** 🟢 Básico · **Framework:** RTF (Rol-Tarea-Formato)

```
Rol: Eres un especialista en recursos humanos de una universidad
privada mexicana.

Tarea: Elabore la descripción del puesto de [NOMBRE DEL PUESTO —
ej: Coordinador de Vinculación / Asistente Administrativo /
Analista de Sistemas / Jefe de Mantenimiento] para el área de
[ÁREA/DEPARTAMENTO] de la Universidad Anáhuac Mayab.

Datos:
- Reporta a: [CARGO DEL JEFE DIRECTO]
- Personal a cargo: [NÚMERO O "ninguno"]
- Tipo de contratación: [TIEMPO COMPLETO / MEDIO TIEMPO / TEMPORAL]
- Funciones principales: [FUNCIÓN 1], [FUNCIÓN 2], [FUNCIÓN 3],
  [FUNCIÓN 4], [FUNCIÓN 5]
- Requisitos mínimos de formación: [LICENCIATURA EN... / MAESTRÍA
  EN... / TÉCNICO EN...]
- Experiencia mínima: [AÑOS Y ÁREA]
- Competencias clave: [COMPETENCIA 1], [COMPETENCIA 2]
- Horario: [HORARIO]
- Rango salarial (si desea incluirlo): [RANGO O "no incluir"]

Formato:
- Estructura estándar RH: título → objetivo del puesto →
  funciones principales (numeradas) → requisitos → competencias →
  condiciones laborales
- Extensión: máximo 1.5 cuartillas
- Listo para publicar en bolsa de trabajo o compartir con RH
```

**Output esperado:** Descripción de puesto profesional con funciones, requisitos y competencias. Lista para convocatoria.

---

### AD-07 · Comunicado de cambio organizacional al equipo
**Caso de uso:** Comunicar al equipo un cambio estructural: nueva contratación, reorganización, cambio de procesos o políticas.
**Nivel:** 🟡 Intermedio · **Framework:** CO-STAR (Contexto-Objetivo-Estilo-Tono-Audiencia-Respuesta)

```
Contexto: En el área de [ÁREA/DEPARTAMENTO] de la Universidad
Anáhuac Mayab se realizará [TIPO DE CAMBIO — ej: incorporación de
un nuevo colaborador / reorganización de funciones / cambio de
horarios de servicio / implementación de nuevo sistema / fusión de
dos áreas / salida de un colaborador].

Detalle del cambio: [DESCRIPCIÓN ESPECÍFICA]
Fecha efectiva: [FECHA]
Razón principal: [POR QUÉ SE HACE ESTE CAMBIO]

Objetivo: Comunicar el cambio de manera clara, transparente y que
genere confianza en el equipo.

Estilo: Comunicación interna institucional. Directo, sin ambigüedades.

Tono: Profesional pero cercano. Que transmita que el cambio está
pensado y que el equipo es importante. Si hay incertidumbre
natural, reconocerla.

Audiencia: Colaboradores del área (entre [NÚMERO] personas), con
perfiles [DESCRIPCIÓN — ej: administrativos, operativos, mixto].

Respuesta:
- Comunicado de máximo 250 palabras
- Estructura: saludo → anuncio del cambio → razón → qué cambia
  para el equipo → qué NO cambia → espacio para preguntas →
  datos de contacto
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Comunicado de cambio organizacional que informa, genera confianza y deja espacio para preguntas. Listo para enviar.

---

### AD-08 · Evaluación de desempeño — formato de retroalimentación
**Caso de uso:** Preparar la retroalimentación estructurada para la evaluación semestral/anual de un colaborador.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como coach de liderazgo especializado en retroalimentación
constructiva.

Input: Necesito preparar la retroalimentación de desempeño de un
colaborador de mi equipo:

Datos del colaborador:
- Puesto: [PUESTO]
- Antigüedad: [TIEMPO]
- Periodo evaluado: [PERIODO]

Objetivos del periodo y cumplimiento:
1. [OBJETIVO 1]: cumplimiento [%] — [COMENTARIO BREVE]
2. [OBJETIVO 2]: cumplimiento [%] — [COMENTARIO BREVE]
3. [OBJETIVO 3]: cumplimiento [%] — [COMENTARIO BREVE]

Fortalezas observadas: [FORTALEZA 1], [FORTALEZA 2]
Áreas de mejora observadas: [ÁREA 1], [ÁREA 2]
Incidentes relevantes (positivos o negativos): [DESCRIPCIÓN]

Steps:
1. Redacte un párrafo de reconocimiento de logros específicos
2. Aborde cada área de mejora con ejemplo concreto y acción sugerida
3. Proponga 3 objetivos para el siguiente periodo (SMART)
4. Sugiera un plan de desarrollo (capacitación, mentoría, proyectos)
5. Cierre con mensaje de confianza y compromiso mutuo

Expectation:
- Formato de retroalimentación de máximo 1.5 cuartillas
- Tono: constructivo, basado en hechos, respetuoso
- Estructura: reconocimiento → áreas de mejora con acciones →
  nuevos objetivos → plan de desarrollo → cierre
- Listo para usar como guía en la reunión de evaluación
```

**Output esperado:** Formato de retroalimentación con reconocimiento, áreas de mejora con acciones, nuevos objetivos SMART y plan de desarrollo. Guía lista para reunión.

---

### AD-09 · Respuesta a solicitud de colaborador (RH)
**Caso de uso:** Responder formalmente a solicitudes de empleados: vacaciones, permisos, constancias, cambio de horario, plantear situación personal.
**Nivel:** 🟢 Básico · **Framework:** RTF (Rol-Tarea-Formato)

```
Rol: Eres el director/jefe de área de [ÁREA/DEPARTAMENTO] en la
Universidad Anáhuac Mayab.

Tarea: Redacte una respuesta a la solicitud de un colaborador que
pide [TIPO DE SOLICITUD — ej: días de vacaciones / permiso por
asunto personal / constancia laboral / cambio de horario / home
office parcial / licencia por maternidad-paternidad]:

Contexto:
- El colaborador argumenta: [RESUMEN DE LA SOLICITUD]
- Resolución: [PROCEDE / NO PROCEDE / PROCEDE CON CONDICIONES]
- Condiciones (si aplica): [DESCRIPCIÓN]
- Normatividad aplicable: [POLÍTICA INTERNA / LFT / REGLAMENTO]
- Próximo paso: [QUÉ DEBE HACER EL COLABORADOR]

Formato:
- Máximo 180 palabras
- Tono: profesional, respetuoso, claro
- Estructura: acuse de recibo → resolución → fundamentación breve
  → pasos a seguir → cierre cordial
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Respuesta formal, respetuosa y clara, con fundamentación y pasos a seguir. Lista para enviar al colaborador.

---

### AD-10 · Plan de inducción para nuevo colaborador
**Caso de uso:** Diseñar el programa de inducción de las primeras 2 semanas de un nuevo integrante del equipo.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como especialista en onboarding corporativo.

Input: Se incorporará un nuevo colaborador al área de
[ÁREA/DEPARTAMENTO]:
- Puesto: [PUESTO]
- Fecha de ingreso: [FECHA]
- Reporta a: [NOMBRE, CARGO]
- Funciones principales: [FUNCIÓN 1], [FUNCIÓN 2], [FUNCIÓN 3]
- Herramientas que usará: [SISTEMA 1], [SISTEMA 2]
- Personas clave que debe conocer: [NOMBRE 1 - ÁREA], [NOMBRE 2 - ÁREA]
- Documentos que debe leer: [DOCUMENTO 1], [DOCUMENTO 2]

Steps:
1. Diseñe la agenda de la primera semana (día por día)
2. Diseñe los objetivos de la segunda semana
3. Incluya sesiones con las personas clave
4. Incluya capacitación en herramientas y sistemas
5. Defina la primera entrega/tarea concreta del nuevo colaborador
6. Incluya un checklist de lo que el área debe tener listo antes
   del día 1 (equipo, accesos, credencial, etc.)

Expectation:
- Plan de inducción de máximo 2 cuartillas
- Tabla Semana 1: Día | Actividad | Responsable | Duración
- Semana 2: Objetivos de aprendizaje y primera entrega
- Checklist pre-ingreso
```

**Output esperado:** Plan de inducción de 2 semanas con agenda detallada, responsables, checklist pre-ingreso y primera entrega del nuevo colaborador.

---

# SECCIÓN 3 — OPERACIONES Y PROYECTOS (5 prompts)

---

### AD-11 · Reporte semanal operativo del área
**Caso de uso:** Generar el reporte semanal que envía a su jefe directo o a la dirección general.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como asistente ejecutivo de un director administrativo
universitario.

Input: Estas son mis notas de la semana del [FECHA INICIO] al
[FECHA FIN] en el área de [ÁREA/DEPARTAMENTO]:

Logros / avances:
- [LOGRO 1]
- [LOGRO 2]
- [LOGRO 3]

Proyectos en curso:
- [PROYECTO 1]: avance [%] — estatus [EN TIEMPO / RETRASADO]
- [PROYECTO 2]: avance [%] — estatus [EN TIEMPO / RETRASADO]

Incidencias o alertas:
- [INCIDENCIA 1]
- [INCIDENCIA 2 — si aplica]

KPIs del área esta semana:
- [KPI 1]: [VALOR] (meta: [VALOR])
- [KPI 2]: [VALOR] (meta: [VALOR])

Pendientes para la próxima semana:
- [PENDIENTE 1]
- [PENDIENTE 2]

Steps:
1. Organice en secciones claras con viñetas concisas
2. Asigne semáforo 🟢🟡🔴 a cada proyecto y KPI
3. Destaque la incidencia más urgente al inicio si la hay
4. Cierre con los 3 temas prioritarios de la próxima semana

Expectation:
- Reporte de máximo 1 cuartilla
- Formato: semáforo + viñetas
- Listo para enviar por correo a [DESTINATARIO]
```

**Output esperado:** Reporte semanal ejecutivo con semáforo, KPIs y prioridades. Listo para enviar sin edición adicional.

---

### AD-12 · Plan de proyecto institucional
**Caso de uso:** Estructurar un proyecto nuevo desde cero: objetivos, alcance, fases, responsables, riesgos y cronograma.
**Nivel:** 🔴 Avanzado · **Framework:** CRISPE (Capacity-Insight-Statement-Personality-Experiment)

```
Capacity & Role: Eres un project manager senior con 15 años de
experiencia gestionando proyectos de infraestructura y operaciones
en instituciones educativas privadas.

Insight: La Universidad Anáhuac Mayab necesita implementar
[PROYECTO — ej: renovación del sistema de gestión documental /
remodelación de edificio X / migración a nuevo sistema de nómina /
instalación de paneles solares / implementación de control de
acceso biométrico].

Datos clave:
- Presupuesto estimado: $[MONTO] MXN
- Plazo deseado de implementación: [MESES]
- Equipo disponible: [DESCRIPCIÓN]
- Restricciones: [RESTRICCIÓN 1], [RESTRICCIÓN 2]
- Stakeholders principales: [NOMBRE/CARGO 1], [NOMBRE/CARGO 2]

Statement: Necesito un plan de proyecto completo que pueda presentar
al Comité de Dirección para su aprobación.

Personality: Estructurado, realista, orientado a la ejecución. Sin
promesas exageradas; incluir colchón de tiempo en cada fase.

Experiment: Dame 2 versiones:
1. Plan con plazo agresivo (cumple el plazo deseado)
2. Plan conservador (con 25% más de tiempo y contingencias)
```

**Output esperado:** Dos versiones del plan de proyecto: agresiva y conservadora. Cada una con fases, responsables, cronograma, riesgos y presupuesto desglosado.

---

### AD-13 · Solicitud de mantenimiento o servicio correctivo
**Caso de uso:** Redactar la solicitud formal de servicio de mantenimiento (correctivo o preventivo) con todos los datos para que el proveedor o el área de mantenimiento actúe.
**Nivel:** 🟢 Básico · **Framework:** RTF (Rol-Tarea-Formato)

```
Rol: Eres el responsable administrativo del área de
[ÁREA/DEPARTAMENTO o EDIFICIO].

Tarea: Redacte una solicitud formal de servicio de mantenimiento
[CORRECTIVO / PREVENTIVO] con los siguientes datos:

- Tipo de servicio: [DESCRIPCIÓN — ej: reparación de aire
  acondicionado / fumigación / reparación de mobiliario / servicio
  a elevador / reparación eléctrica / plomería]
- Ubicación exacta: [EDIFICIO, PISO, AULA/OFICINA]
- Descripción del problema o necesidad: [DETALLE]
- Fecha de detección: [FECHA]
- Urgencia: [ALTA — afecta operación / MEDIA — puede esperar 48h /
  BAJA — programable]
- Impacto si no se atiende: [DESCRIPCIÓN — ej: aula sin clima en
  periodo de exámenes / riesgo de seguridad / incumplimiento de
  normatividad]
- Personas de contacto en sitio: [NOMBRE, TELÉFONO]

Formato:
- Orden de servicio formal de máximo 150 palabras
- Incluir campo de número de folio: [DEJAR EN BLANCO PARA ASIGNAR]
- Incluir campo de firma de recibido del proveedor/área
- Lista para imprimir o enviar al área de servicios generales
```

**Output esperado:** Orden de servicio de mantenimiento completa y formal, con todos los datos necesarios para ejecución inmediata.

---

### AD-14 · Proceso de compra — tabla de requisiciones
**Caso de uso:** Documentar una requisición de compra con justificación, especificaciones y prioridad.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como analista de compras institucionales.

Input: El área de [ÁREA/DEPARTAMENTO] necesita adquirir los
siguientes bienes/servicios:

Requisición 1:
- Concepto: [DESCRIPCIÓN]
- Cantidad: [NÚMERO]
- Especificaciones técnicas: [DETALLE]
- Presupuesto estimado: $[MONTO]
- Justificación: [POR QUÉ SE NECESITA]
- Urgencia: [ALTA / MEDIA / BAJA]

Requisición 2:
- [MISMOS CAMPOS]

Requisición 3:
- [MISMOS CAMPOS]

Partida presupuestal disponible: $[MONTO TOTAL DISPONIBLE]

Steps:
1. Valide que el total de requisiciones no exceda la partida
2. Priorice las requisiciones por urgencia e impacto
3. Identifique si alguna requiere proceso de licitación (>$[MONTO
   UMBRAL SI LO CONOCE])
4. Genere la tabla de requisiciones consolidada
5. Incluya recomendación de agrupamiento si hay economías de escala

Expectation:
- Tabla consolidada: # | Concepto | Cantidad | Estimado | Prioridad |
  Proceso de compra sugerido (directa / 3 cotizaciones / licitación)
- Resumen: total solicitado vs. disponible
- Recomendaciones de ahorro o agrupamiento
- Máximo 1.5 cuartillas
```

**Output esperado:** Tabla consolidada de requisiciones con priorización, proceso sugerido por monto y validación presupuestal.

---

### AD-15 · Reporte de avance de proyectos con semáforo
**Caso de uso:** Generar reporte mensual de avance de los proyectos bajo su responsabilidad para presentar a dirección.
**Nivel:** 🟡 Intermedio · **Framework:** RTF (Rol-Tarea-Formato)

```
Rol: Eres un project manager universitario.

Tarea: Genere el reporte mensual de avance de proyectos del área de
[ÁREA/DEPARTAMENTO] para [MES/AÑO].

Proyecto 1: [NOMBRE]
- Objetivo: [DESCRIPCIÓN]
- Avance: [%] — Meta del mes: [%]
- Estatus: [EN TIEMPO / RETRASADO / ADELANTADO / BLOQUEADO]
- Logros del mes: [DESCRIPCIÓN]
- Riesgos activos: [DESCRIPCIÓN]
- Próximo hito: [DESCRIPCIÓN] — Fecha: [FECHA]
- Decisión requerida (si aplica): [DESCRIPCIÓN]

Proyecto 2: [NOMBRE]
- [MISMOS CAMPOS]

Proyecto 3: [NOMBRE]
- [MISMOS CAMPOS]

Formato:
- Tabla resumen: Proyecto | Avance | Meta | Estatus 🟢🟡🔴 |
  Próximo hito
- Detalle por proyecto: 1 párrafo + riesgos
- Sección "Decisiones requeridas" al final (solo si aplica)
- Párrafo ejecutivo de apertura (60 palabras)
- Máximo 2 cuartillas
```

**Output esperado:** Reporte mensual de proyectos con tabla semáforo, detalle por proyecto y sección de decisiones requeridas. Ejecutivo y presentable.

---

# SECCIÓN 4 — COMPLIANCE Y NORMATIVIDAD (5 prompts)

---

### AD-16 · Revisión de política o procedimiento interno
**Caso de uso:** Revisar y mejorar un documento de política interna o procedimiento operativo.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como consultor de procesos y normatividad institucional.

Input: Necesito revisar y mejorar la siguiente política/procedimiento
del área de [ÁREA/DEPARTAMENTO]:

Título del documento: [NOMBRE DE LA POLÍTICA O PROCEDIMIENTO]
Versión actual: [NÚMERO O "primera versión"]
Última actualización: [FECHA O "nunca se ha actualizado"]

[PEGUE AQUÍ EL TEXTO COMPLETO DEL DOCUMENTO, O BIEN ADJUNTE EL
ARCHIVO EN AMAZON QUICK Y ESCRIBA: "Revisa el documento adjunto"]

Problemas detectados: [DESCRIPCIÓN — ej: lenguaje ambiguo / no
refleja el proceso actual / falta definir responsables / no tiene
indicadores de cumplimiento]

Steps:
1. Identifique ambigüedades, redundancias o vacíos en el texto
2. Verifique que cada paso tiene responsable y plazo definido
3. Asegure que la política incluye: objetivo, alcance, definiciones,
   procedimiento, responsables, indicadores y vigencia
4. Sugiera mejoras específicas señalando antes/después
5. Valide que el lenguaje sea formal pero comprensible

Expectation:
- Tabla de hallazgos: Sección | Problema encontrado | Mejora sugerida
- Versión mejorada del documento (o secciones clave)
- Checklist de completitud de política
- Máximo 3 cuartillas (tabla + versión mejorada)
```

**Output esperado:** Tabla de hallazgos con mejoras antes/después y versión mejorada del documento. Lista para presentar a revisión.

---

### AD-17 · Respuesta a hallazgo de auditoría
**Caso de uso:** Redactar la respuesta formal a una observación o hallazgo de auditoría interna o externa.
**Nivel:** 🔴 Avanzado · **Framework:** CRISPE (Capacity-Insight-Statement-Personality-Experiment)

```
Capacity & Role: Eres un director administrativo con experiencia en
responder a procesos de auditoría interna y externa en instituciones
educativas. Conoces las mejores prácticas de control interno y
normatividad mexicana.

Insight: En la auditoría [INTERNA / EXTERNA] de [TIPO — ej: auditoría
financiera / de procesos / de cumplimiento / fiscal], el área de
[ÁREA/DEPARTAMENTO] recibió los siguientes hallazgos:

Hallazgo 1: [DESCRIPCIÓN DEL HALLAZGO]
- Clasificación: [OBSERVACIÓN / NO CONFORMIDAD MENOR / NO
  CONFORMIDAD MAYOR]
- Evidencia citada por el auditor: [DESCRIPCIÓN]

Hallazgo 2: [DESCRIPCIÓN DEL HALLAZGO]
- Clasificación: [TIPO]
- Evidencia: [DESCRIPCIÓN]

Plazo para respuesta: [FECHA LÍMITE]

Statement: Necesito redactar la respuesta formal a cada hallazgo con
acción correctiva, evidencia de cumplimiento y compromiso de fecha.

Personality: Profesional, colaborativo con el auditor, orientado a
soluciones. No defensivo ni justificativo; reconoce el hallazgo y
presenta plan de acción.

Experiment: Para cada hallazgo, dame:
1. Respuesta aceptando el hallazgo con plan de acción
2. Respuesta si considero que el hallazgo tiene un error de
   interpretación (réplica fundamentada y respetuosa)
```

**Output esperado:** Para cada hallazgo, dos versiones de respuesta: aceptación con plan de acción, y réplica fundamentada. Ambas profesionales y con plazos.

---

### AD-18 · Comunicado sobre cambio de normatividad o política
**Caso de uso:** Informar al equipo o a la comunidad universitaria sobre un cambio en política, reglamento o procedimiento.
**Nivel:** 🟢 Básico · **Framework:** CO-STAR (Contexto-Objetivo-Estilo-Tono-Audiencia-Respuesta)

```
Contexto: La Universidad Anáhuac Mayab implementará un cambio en
[POLÍTICA/PROCEDIMIENTO/NORMATIVIDAD — ej: política de viáticos /
procedimiento de compras / horarios de servicio / reglamento de uso
de instalaciones / nueva política de seguridad informática].

Cambio específico: [DESCRIPCIÓN DE QUÉ CAMBIA]
Fecha efectiva: [FECHA]
Motivo del cambio: [RAZÓN — ej: nueva regulación / optimización /
resultado de auditoría / solicitud de la comunidad]
Qué sigue vigente sin cambios: [DESCRIPCIÓN]

Objetivo: Informar de manera clara para que todos entiendan qué
cambia, desde cuándo y qué deben hacer diferente.

Estilo: Comunicación institucional interna, directa, sin ambigüedades.

Tono: Informativo, respetuoso, con apertura para dudas.

Audiencia: [QUIÉN RECIBE: todo el personal / área específica /
proveedores / comunidad universitaria completa]

Respuesta:
- Comunicado de máximo 250 palabras
- Estructura: anuncio → qué cambia (viñetas) → qué no cambia →
  desde cuándo → cómo proceder → contacto para dudas
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Comunicado claro sobre cambio normativo con estructura qué-cambia / qué-no-cambia / cuándo / cómo. Listo para distribución.

---

### AD-19 · Checklist de cumplimiento regulatorio
**Caso de uso:** Generar un checklist de verificación para asegurar cumplimiento de normatividad aplicable al área.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como oficial de cumplimiento normativo de una institución
educativa privada en México.

Input: Necesito un checklist de cumplimiento para el área de
[ÁREA/DEPARTAMENTO] que cubra las siguientes normatividades:

1. [NORMATIVIDAD 1 — ej: Ley Federal del Trabajo / NOM-035 /
   Protección de datos personales / normatividad de Protección Civil /
   regulación SEP / normatividad fiscal]
2. [NORMATIVIDAD 2]
3. [NORMATIVIDAD 3]

Último periodo de revisión: [FECHA O "nunca se ha hecho formalmente"]
Área responsable del cumplimiento: [ÁREA]
Auditoría próxima (si aplica): [FECHA O "sin fecha"]

Steps:
1. Para cada normatividad, liste los requisitos de cumplimiento
   aplicables al área
2. Para cada requisito, defina: evidencia requerida, responsable y
   frecuencia de verificación
3. Clasifique cada requisito: 🟢 cumple / 🟡 parcial / 🔴 no cumple /
   ⬜ pendiente de verificar
4. Identifique los 3 riesgos de incumplimiento más graves
5. Priorice acciones correctivas para los elementos en rojo

Expectation:
- Checklist tabulado: Normatividad | Requisito | Evidencia |
  Responsable | Frecuencia | Estatus
- Sección de riesgos prioritarios
- Máximo 2 cuartillas
```

**Output esperado:** Checklist de cumplimiento regulatorio con semáforo, evidencias requeridas y riesgos priorizados. Herramienta de gestión permanente.

---

### AD-20 · Acta de comité o junta administrativa
**Caso de uso:** Convertir notas de reunión administrativa en acta formal para archivo y seguimiento.
**Nivel:** 🟢 Básico · **Framework:** RTF (Rol-Tarea-Formato)

```
Rol: Eres el secretario de actas de un comité administrativo
universitario.

Tarea: Redacte el acta formal de la reunión de [TIPO — ej: Comité
de Compras / Junta de Directores Administrativos / Comité de
Seguridad / Reunión de Coordinación Operativa]:

Datos generales:
- Fecha: [FECHA]
- Hora: [HORA INICIO] a [HORA FIN]
- Lugar: [SALA / ENLACE]
- Asistentes: [NOMBRES Y CARGOS]
- Ausentes: [NOMBRES]
- Preside: [NOMBRE, CARGO]

Notas de la reunión:
[PEGUE AQUÍ SUS NOTAS — pueden ser informales, la IA las
estructurará formalmente]

Acuerdos tomados:
- [ACUERDO 1] — Responsable: [NOMBRE] — Plazo: [FECHA]
- [ACUERDO 2] — Responsable: [NOMBRE] — Plazo: [FECHA]
- [ACUERDO 3] — Responsable: [NOMBRE] — Plazo: [FECHA]

Formato:
- Acta formal con numeración de acuerdos
- Tabla resumen de acuerdos: # | Acuerdo | Responsable | Plazo
- Campo para firmas de presidente y secretario
- Próxima reunión: [FECHA TENTATIVA]
- Lista para archivo institucional
```

**Output esperado:** Acta formal con secciones claras, tabla de acuerdos y campos de firma. Lista para impresión y archivo.

---

# SECCIÓN 5 — COMUNICACIÓN INTERNA Y GESTIÓN (5 prompts)

---

### AD-21 · Correo ejecutivo a la alta dirección
**Caso de uso:** Redactar un correo breve y de alto impacto para el Rector, Vicerrector o Consejo sobre un tema urgente o relevante.
**Nivel:** 🟡 Intermedio · **Framework:** CO-STAR (Contexto-Objetivo-Estilo-Tono-Audiencia-Respuesta)

```
Contexto: Necesito comunicar a [DESTINATARIO — ej: Rector / Vicerrector
Administrativo / Consejo de Dirección] sobre [TEMA — ej: riesgo
presupuestal identificado / oportunidad de ahorro / incidente
operativo / resultado de auditoría / propuesta de inversión].

Datos clave: [2-3 DATOS DUROS RELEVANTES]
Urgencia: [ALTA / MEDIA / INFORMATIVA]
Acción requerida del destinatario: [QUÉ NECESITA QUE DECIDA O APRUEBE]

Objetivo: Que el destinatario entienda la situación en 30 segundos
y sepa exactamente qué se le pide.

Estilo: Ultra-ejecutivo. Cada palabra cuenta. Sin preámbulos
innecesarios.

Tono: Respetuoso pero directo. Ejecutivo, no ceremonioso.

Audiencia: Alta dirección universitaria, personas con agenda
saturada que leen correos en el teléfono.

Respuesta:
- Correo de máximo 150 palabras (que quepa en 1 pantalla de celular)
- Estructura: asunto descriptivo → 1 línea de contexto → datos clave
  (viñetas) → solicitud clara → fecha límite para decisión
- Incluir línea de asunto sugerida
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Correo ejecutivo de alto impacto que cabe en 1 pantalla de celular, con asunto claro y solicitud concreta. Listo para enviar.

---

### AD-22 · Informe para Consejo de Administración o Dirección General
**Caso de uso:** Preparar el informe periódico del área administrativa para la reunión de consejo.
**Nivel:** 🔴 Avanzado · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como director administrativo que presenta ante el Consejo
de Administración de una universidad privada.

Input: Datos del área de [ÁREA/DEPARTAMENTO] para la reunión de
Consejo del [FECHA]:

1. Ejecución presupuestal:
   - Presupuesto anual: $[MONTO]
   - Ejercido al corte: $[MONTO] ([%])
   - Proyección de cierre: $[MONTO]
   - Variaciones significativas: [DESCRIPCIÓN]

2. Proyectos institucionales:
   - [PROYECTO 1]: avance [%], estatus [DESCRIPCIÓN]
   - [PROYECTO 2]: avance [%], estatus [DESCRIPCIÓN]

3. KPIs del área:
   - [KPI 1]: [VALOR] (meta: [VALOR])
   - [KPI 2]: [VALOR] (meta: [VALOR])
   - [KPI 3]: [VALOR] (meta: [VALOR])

4. Temas de atención:
   - [TEMA 1]
   - [TEMA 2]

5. Solicitudes al Consejo:
   - [SOLICITUD 1]
   - [SOLICITUD 2]

Steps:
1. Redacte resumen ejecutivo de 80 palabras al inicio
2. Desarrolle cada sección con los datos proporcionados
3. Incluya tabla de KPIs con semáforo
4. Formule las solicitudes de manera clara y accionable
5. Cierre con 3 prioridades del próximo periodo

Expectation:
- Informe de máximo 3 cuartillas
- Tablas de datos y semáforos
- Solicitudes claramente formuladas como resoluciones a aprobar
- Tono: ejecutivo, basado en datos, orientado a decisiones
```

**Output esperado:** Informe de consejo de 2-3 cuartillas con ejecución presupuestal, proyectos, KPIs y solicitudes formuladas como resoluciones.

---

### AD-23 · Respuesta formal a proveedor (reclamación, negociación o aclaración)
**Caso de uso:** Responder a un proveedor sobre reclamación de pago, solicitud de ajuste de precios, incumplimiento de contrato u otra comunicación que requiere respuesta formal.
**Nivel:** 🟡 Intermedio · **Framework:** RISE (Rol-Input-Steps-Expectation)

```
Rol: Actúe como director administrativo que maneja la relación con
proveedores de una universidad privada.

Input:
- Proveedor: [NOMBRE DE LA EMPRESA]
- Contacto: [NOMBRE DE LA PERSONA]
- Asunto: [TIPO — ej: reclamación de pago pendiente / solicitud
  de ajuste de precios / incumplimiento en tiempo de entrega /
  aclaración sobre facturación / negociación de contrato]
- Lo que solicita el proveedor: [DESCRIPCIÓN]
- Nuestra posición: [DESCRIPCIÓN — ej: el pago está en proceso /
  el incumplimiento fue del proveedor / estamos evaluando la
  solicitud / tenemos una contrapropuesta]
- Datos de soporte: [NÚMERO DE CONTRATO, FACTURAS, FECHAS]

Steps:
1. Acuse de recibo profesional
2. Presente nuestra posición con datos de soporte
3. Si hay acuerdo, confirme las condiciones
4. Si hay desacuerdo, exponga los argumentos con base documental
5. Proponga siguiente paso (reunión, revisión conjunta, plazo)

Expectation:
- Carta/correo de máximo 250 palabras
- Tono: firme pero profesional y colaborativo
- Nunca agresivo ni amenazante; siempre abierto al diálogo
- Firmante: [SU NOMBRE], [CARGO]
```

**Output esperado:** Respuesta profesional a proveedor con posición clara, argumentación documental y propuesta de siguiente paso. Lista para enviar.

---

### AD-24 · Plan de contingencia operativa
**Caso de uso:** Crear un plan de acción ante contingencia operativa (falla de sistema, emergencia, evento climático, etc.).
**Nivel:** 🔴 Avanzado · **Framework:** CRIT (Context-Role-Interview-Task)

```
Context: Soy el responsable del área de [ÁREA/DEPARTAMENTO] en la
Universidad Anáhuac Mayab. Necesito un plan de contingencia para
[ESCENARIO — ej: caída prolongada del sistema de gestión escolar /
falla del servicio eléctrico en periodo de exámenes / inundación
de instalaciones / huelga de proveedor crítico / brote de enfermedad
que afecte operación].

Datos que tengo:
- Áreas afectadas: [LISTA]
- Duración estimada del escenario: [TIEMPO]
- Recursos disponibles de emergencia: [DESCRIPCIÓN]
- Protocolo existente: [HAY UNO / NO EXISTE / ESTÁ DESACTUALIZADO]

Role: Actúa como consultor de continuidad de negocio con experiencia
en instituciones educativas.

Interview: Antes de diseñar el plan, hazme las preguntas que
necesites para entender:
- Nivel de criticidad de cada servicio afectado
- Recursos humanos y materiales disponibles
- Cadena de mando en emergencias
- Cualquier otro factor que un consultor de continuidad preguntaría

Espera mis respuestas antes de continuar.

Task: Después de la entrevista, genera:
1. Plan de contingencia en formato: Fase 1 (primeras 2 horas) →
   Fase 2 (2-24 horas) → Fase 3 (recuperación)
2. Árbol de decisiones: si pasa X → hacer Y
3. Lista de contactos de emergencia (campos a llenar)
4. Checklist de activación del plan
```

**Output esperado:** Plan de contingencia en 3 fases con árbol de decisiones, checklist de activación y formato de contactos. La IA primero pregunta para entender el contexto específico.

---

### AD-25 · Propuesta de mejora de proceso operativo
**Caso de uso:** Documentar una propuesta de mejora para un proceso ineficiente del área, con análisis antes/después.
**Nivel:** 🟡 Intermedio · **Framework:** BAB (Before-After-Bridge)

```
Before (Situación actual):
El proceso actual de [NOMBRE DEL PROCESO — ej: autorización de
compras / registro de facturas / asignación de espacios / solicitud
de servicios de TI / control de inventario] en el área de
[ÁREA/DEPARTAMENTO] funciona así:
- Pasos actuales: [PASO 1] → [PASO 2] → [PASO 3] → [PASO 4]
- Tiempo promedio del proceso: [TIEMPO]
- Puntos de dolor: [PROBLEMA 1], [PROBLEMA 2]
- Errores frecuentes: [ERROR 1], [ERROR 2]
- Personas involucradas: [NÚMERO]

After (Situación deseada):
Queremos que el proceso:
- Se complete en [TIEMPO DESEADO] (reducción del [%])
- Elimine [PUNTO DE DOLOR 1] y [PUNTO DE DOLOR 2]
- Reduzca errores en [PORCENTAJE O DESCRIPCIÓN]
- Sea más simple para el usuario final

Bridge (Cómo llegar):
Genera una propuesta de mejora que incluya:
1. Diagnóstico: mapa del proceso actual vs. proceso propuesto
   (tabla comparativa paso a paso)
2. Cambios específicos: qué se elimina, qué se automatiza, qué
   se simplifica
3. Recursos necesarios para la implementación
4. Cronograma de implementación en 3 fases
5. Métricas de éxito para medir si la mejora funcionó
6. Riesgos de la transición y cómo mitigarlos

Formato: propuesta ejecutiva de máximo 2 cuartillas para presentar
a dirección. Incluir tabla antes/después.
```

**Output esperado:** Propuesta de mejora de proceso con diagnóstico, comparativa antes/después, cronograma y métricas de éxito. Presentable a dirección.

---

# ÍNDICE RÁPIDO

| # | Prompt | Caso de uso | Nivel | Framework |
|---|---|---|---|---|
| **PRESUPUESTO Y FINANZAS** | | | | |
| AD-01 | Variación presupuestal | Comparar presupuesto vs. gasto real | 🟡 | RISE |
| AD-02 | Partida extraordinaria | Justificar gasto no programado | 🟡 | CO-STAR |
| AD-03 | Reporte financiero trimestral | Informe completo para Vicerrectoría | 🔴 | RISE |
| AD-04 | Cotización comparativa | Comparar proveedores para decisión de compra | 🟢 | RTF |
| AD-05 | Costo-beneficio de proyecto | Evaluar viabilidad financiera | 🔴 | CoT |
| **RECURSOS HUMANOS** | | | | |
| AD-06 | Descriptivo de puesto | Crear perfil para convocatoria | 🟢 | RTF |
| AD-07 | Cambio organizacional | Comunicar al equipo un cambio estructural | 🟡 | CO-STAR |
| AD-08 | Evaluación de desempeño | Retroalimentación constructiva a colaborador | 🟡 | RISE |
| AD-09 | Respuesta a colaborador (RH) | Atender solicitudes de personal | 🟢 | RTF |
| AD-10 | Plan de inducción | Programa de 2 semanas para nuevo integrante | 🟡 | RISE |
| **OPERACIONES Y PROYECTOS** | | | | |
| AD-11 | Reporte semanal operativo | Borrador para jefe directo | 🟡 | RISE |
| AD-12 | Plan de proyecto | Estructurar proyecto desde cero | 🔴 | CRISPE |
| AD-13 | Solicitud de mantenimiento | Orden de servicio correctivo/preventivo | 🟢 | RTF |
| AD-14 | Tabla de requisiciones | Documentar requisiciones de compra | 🟡 | RISE |
| AD-15 | Avance de proyectos | Reporte mensual con semáforo | 🟡 | RTF |
| **COMPLIANCE Y NORMATIVIDAD** | | | | |
| AD-16 | Revisión de política | Mejorar documento normativo interno | 🟡 | RISE |
| AD-17 | Respuesta a auditoría | Contestar hallazgos formalmente | 🔴 | CRISPE |
| AD-18 | Cambio de normatividad | Comunicar nueva política/procedimiento | 🟢 | CO-STAR |
| AD-19 | Checklist de cumplimiento | Verificación regulatoria del área | 🟡 | RISE |
| AD-20 | Acta de comité administrativo | Notas informales → acta formal | 🟢 | RTF |
| **COMUNICACIÓN Y GESTIÓN** | | | | |
| AD-21 | Correo a alta dirección | Comunicación ejecutiva de alto impacto | 🟡 | CO-STAR |
| AD-22 | Informe para Consejo | Informe periódico con KPIs y solicitudes | 🔴 | RISE |
| AD-23 | Respuesta a proveedor | Reclamación, negociación o aclaración | 🟡 | RISE |
| AD-24 | Plan de contingencia | Preparación ante escenario de emergencia | 🔴 | CRIT |
| AD-25 | Mejora de proceso operativo | Propuesta con análisis antes/después | 🟡 | BAB |

---

> **Nota importante:** Cada prompt produce un resultado útil, pero la **revisión humana es indispensable**. Verifique datos, cifras y nombres antes de enviar cualquier documento generado con IA. La responsabilidad del contenido final es siempre del directivo firmante.

---

*Banco de Prompts Administrativos — Fase 5*
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
*Septiembre 2026*
