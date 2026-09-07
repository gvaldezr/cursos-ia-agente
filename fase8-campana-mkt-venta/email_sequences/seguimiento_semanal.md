# Template de Seguimiento Semanal Durante el Curso

> **Tipo:** Email recurrente semanal de acompañamiento  
> **Fase:** Durante el curso (8 envíos, uno por semana)  
> **Objetivo:** Resumir avance, dar un tip práctico, motivar y orientar hacia lo siguiente  
> **Versión:** 1.0 | **Fecha:** septiembre 2026

---

## Datos del Template

| Campo | Valor |
|---|---|
| **Asunto (patrón)** | Semana {{N}}: {{TITULO_MODULO_ACTUAL}} — Su resumen + tip de la semana |
| **Remitente** | Coordinación del Programa «IA Práctica para Líderes Anáhuac» |
| **Reply-to** | educacioncontinua@anahuac.mx |
| **Frecuencia** | Todos los lunes a las 7:30 AM |
| **Duración** | 8 semanas (de la semana 1 a la 8 del curso) |

---

## Template General (Estructura Base)

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Semana {{N}} del programa **«IA Práctica para Líderes Anáhuac»**.
Aquí va su resumen semanal.

---

### 📊 Su progreso

<div style="background-color: #f5f0fa; padding: 20px; border-radius: 8px;
            margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
    <span><strong>Módulos completados:</strong></span>
    <span style="color: #FF5900; font-weight: bold;">{{MODULOS_COMPLETADOS}} de 8</span>
  </div>
  <div style="background-color: #e0d5eb; border-radius: 4px; height: 12px; overflow: hidden;">
    <div style="background-color: #432F64; height: 100%; width: {{PORCENTAJE_AVANCE}}%;
                border-radius: 4px;"></div>
  </div>
  <div style="display: flex; justify-content: space-between; margin-top: 12px;
              font-size: 13px; color: #666;">
    <span>🟢 Fundamentos {{BADGE_1_STATUS}}</span>
    <span>🔵 IA Aplicada {{BADGE_2_STATUS}}</span>
    <span>🟣 Líder IA {{BADGE_3_STATUS}}</span>
  </div>
</div>

---

### 📝 Resumen de la semana: {{TITULO_MODULO_ACTUAL}}

{{RESUMEN_MODULO}}

---

### 💡 Tip de la semana

{{TIP_SEMANAL}}

---

### 🔜 Lo que viene

{{PREVIEW_SIGUIENTE}}

<div style="text-align: center; margin: 32px 0;">
  <a href="https://cursos.memovaldez.com/modulo/{{SIGUIENTE_MODULO}}"
     style="background-color: #FF5900; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    {{CTA_TEXTO}} →
  </a>
</div>

---

### 💬 ¿Alguna duda o comentario?

Responda directamente a este email o escriba a
educacioncontinua@anahuac.mx. Estamos aquí para ayudarle.

Atentamente,

**Coordinación del Programa**  
*IA Práctica para Líderes Anáhuac*  
*Universidad Anáhuac Mayab*
```

---

## Contenido Específico por Semana

### Semana 1 — Módulo 1: «El lunes a las 8 AM»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 1: «El lunes a las 8 AM» — Su primer output con IA ✅ |
| **RESUMEN_MODULO** | Esta semana descubrió qué es la IA generativa, qué puede hacer y — más importante — qué NO puede hacer. Pero lo más valioso: generó su primer comunicado profesional con IA en menos de 10 minutos. Ese momento en que vio un texto listo para enviar en su pantalla, escrito con sus datos reales, es exactamente el punto de partida de este programa. |
| **TIP_SEMANAL** | **Pruebe la «regla de los 2 minutos» esta semana:** cada vez que tenga que redactar algo (correo, comunicado, nota), antes de escribir, dedique 2 minutos a pedírselo a Amazon Quick con una instrucción clara. No necesita un prompt perfecto todavía — eso lo aprenderá en el Módulo 2. Solo practique el hábito de *preguntar antes de escribir*. En una semana, va a notar la diferencia. |
| **PREVIEW_SIGUIENTE** | En el **Módulo 2: «Las tres recetas»** va a aprender los frameworks que convierten instrucciones vagas en resultados consistentes. Va a entender POR QUÉ su primer prompt funcionó bien (o no tan bien) y va a crear 3 prompts maestros que le servirán todos los días. |
| **CTA_TEXTO** | CONTINUAR CON EL MÓDULO 2 |

---

### Semana 2 — Módulo 2: «Las tres recetas»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 2: «Las tres recetas» — Ya tiene método, no suerte 🎯 |
| **RESUMEN_MODULO** | Esta semana dio un paso fundamental: pasó de «pedirle cosas a la IA y ver qué sale» a tener un **método probado**. Los frameworks RCTF, Chain of Thought y Few-shot son sus nuevas herramientas de comunicación con la IA. Ya tiene 3 prompts maestros para sus tareas más frecuentes. Eso significa que nunca más dependerá de la «suerte» al interactuar con IA. |
| **TIP_SEMANAL** | **Guarde sus mejores prompts en un documento.** Abra un archivo de texto o nota y empiece a copiar ahí cada prompt que le dé un buen resultado. No tiene que ser perfecto ni organizado todavía (eso lo haremos en el Módulo 8). Solo empiece el hábito. En unas semanas, tendrá un banco de instrucciones que vale su peso en oro. |
| **PREVIEW_SIGUIENTE** | Ahora que tiene las recetas, va a usarlas para atacar su dolor más grande: las **horas diarias escribiendo correos y comunicados**. El **Módulo 3: «Nunca más la pantalla en blanco»** le va a dar 5 templates de comunicación institucional listos para usar — uno para cada tipo de mensaje que envía recurrentemente. |
| **CTA_TEXTO** | IR AL MÓDULO 3 |

---

### Semana 3 — Módulo 3: «Nunca más la pantalla en blanco»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 3: Nunca más la pantalla en blanco — Sus 5 templates están listos 📧 |
| **RESUMEN_MODULO** | Esta semana transformó su relación con la comunicación institucional. Ya tiene **5 templates** adaptados a su rol, listos para personalizar y enviar. Aprendió a manejar correos difíciles con IA (ese padre furioso, esa queja complicada) manteniendo el tono institucional y su criterio profesional. El descubrimiento clave: la IA no le quita el trabajo de escribir — le quita el trabajo de *empezar* a escribir. Su valor está en la edición y el juicio, no en la página en blanco. |
| **TIP_SEMANAL** | **Esta semana, use sus templates EN SERIO.** No los guarde «para después». La próxima vez que tenga que enviar un comunicado, abra su template, ajuste los datos, revise el tono, y envíe. Mida cuánto tiempo le tomó vs. hacerlo desde cero. Esa diferencia es su primer ROI medible del programa. |
| **PREVIEW_SIGUIENTE** | Ya domina la comunicación con IA. Pero su bandeja no solo tiene correos — tiene **reportes**. Documentos de 50 páginas que lee a medias porque no tiene tiempo. El **Módulo 4: «Las 50 páginas que nadie lee»** va a cambiar eso: va a convertir un reporte real de su área en un resumen ejecutivo de 1 página. |
| **CTA_TEXTO** | AVANZAR AL MÓDULO 4 |

**Nota especial Semana 3:** Si el participante completó los módulos 1-3, incluir:

```html
<div style="background-color: #e8f5e9; padding: 16px; border-radius: 8px;
            text-align: center; margin: 16px 0;">
  🟢 <strong>¡Felicidades!</strong> Ha desbloqueado el badge
  <strong>«Fundamentos IA»</strong>.<br>
  Revise su badge en el mini sitio y compártalo en LinkedIn.
</div>
```

---

### Semana 4 — Módulo 4: «Las 50 páginas que nadie lee»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 4: De 50 páginas a 1 resumen ejecutivo — Esto cambia todo 📊 |
| **RESUMEN_MODULO** | Esta semana ocurrió algo importante: la IA dejó de ser su «asistente de redacción» para convertirse en su **analista**. Subió un reporte real a Amazon Quick, le pidió un resumen ejecutivo, y obtuvo algo que podría presentar en su junta del viernes. Descubrió que la IA puede leer sus documentos, encontrar lo que importa, y generar el análisis que usted habría tardado una tarde entera en escribir. Las apuestas subieron — y con ellas, la importancia de verificar. |
| **TIP_SEMANAL** | **Aplique la «regla PAUS» a todo lo que la IA le entregue esta semana:** **P**lausible (¿suena razonable?), **A**ncla (¿puedo verificar contra la fuente?), **U**niforme (¿es consistente con lo que sé?), **S**ensible (¿el contexto cuadra?). No confíe en un output solo porque «se ve profesional». Verifique. Este hábito le va a ahorrar problemas serios. |
| **PREVIEW_SIGUIENTE** | Acaba de convertir un reporte de 50 páginas en un resumen de 1 página. Pero lo hizo manualmente. ¿Y si pudiera **automatizar** ese proceso para que su reporte mensual se genere en 15 minutos? El **Módulo 5: «El dato que la IA inventó»** le enseña cómo — y también le enseña por qué la verificación no es opcional. |
| **CTA_TEXTO** | CONTINUAR AL MÓDULO 5 |

---

### Semana 5 — Módulo 5: «El dato que la IA inventó»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 5: El dato que la IA inventó — La lección más importante del programa ⚠️ |
| **RESUMEN_MODULO** | Esta fue la semana más importante del programa. Diseñó su flujo de reportes automatizado — su primer **entregable final** ⭐. Pero también vivió el momento que todo usuario de IA necesita experimentar: descubrió que la IA puede inventar un dato con formato impecable, con total confianza, y que si usted no lo verifica, ese dato llega a Rectoría con su firma. No abandonó. Construyó un protocolo de verificación. Y descubrió algo poderoso: sus 20 años de experiencia son EXACTAMENTE lo que la IA necesita para funcionar bien. Sin su criterio, la IA es un riesgo. Con su criterio, es un amplificador. |
| **TIP_SEMANAL** | **Ponga a prueba su flujo automatizado ESTA SEMANA con datos reales.** No espere al próximo mes. Ejecute el flujo con información actual de su área y verifique cada output contra la fuente. Ajuste las instrucciones donde haga falta. La segunda ejecución siempre es mejor que la primera — pero solo si la hace. |
| **PREVIEW_SIGUIENTE** | Ya sabe automatizar Y verificar. Ahora viene una dimensión que aún no ha tocado: la IA interactuando con **personas**. Alumnos, padres, proveedores, colaboradores. ¿Hasta dónde es ético que la IA responda por usted? El **Módulo 6: «La línea que no se cruza»** le da las herramientas para decidir. |
| **CTA_TEXTO** | IR AL MÓDULO 6 |

---

### Semana 6 — Módulo 6: «La línea que no se cruza»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 6: La línea que no se cruza — Eficiencia con criterio ético 🛡️ |
| **RESUMEN_MODULO** | Esta semana integró dos capacidades que pocas formaciones combinan: **eficiencia** y **ética**. Creó un kit de 10 respuestas maestras para sus stakeholders más frecuentes y, al mismo tiempo, definió su protocolo semáforo: qué se puede automatizar (🟢), qué requiere precaución (🟡), y qué NUNCA se delega a la IA (🔴). Ese alumno en crisis, esa irregularidad sensible — esas situaciones necesitan un ser humano al frente. Su capacidad de trazar esa línea es lo que lo hace insustituible. |
| **TIP_SEMANAL** | **Comparta su protocolo semáforo con un colega esta semana.** No para que lo copie — para que le dé retroalimentación. Dos criterios son mejores que uno. Pregúntele: «¿Agregarías algo al rojo? ¿Algo que yo tenga en verde debería estar en amarillo?». Esta conversación es más valiosa que cualquier ejercicio. |
| **PREVIEW_SIGUIENTE** | Ya sabe usar IA para comunicar, analizar, automatizar y atender personas. Sabe cuándo confiar, cuándo verificar y cuándo decir «esto lo hago yo». Ahora viene la pregunta que cambia todo: ¿y si pudiera usar la IA no solo para EJECUTAR tareas, sino para **PLANEAR y DIRIGIR proyectos enteros**? |
| **CTA_TEXTO** | AVANZAR AL MÓDULO 7 |

**Nota especial Semana 6:** Si el participante completó los módulos 4-6, incluir:

```html
<div style="background-color: #e3f2fd; padding: 16px; border-radius: 8px;
            text-align: center; margin: 16px 0;">
  🔵 <strong>¡Segundo badge desbloqueado!</strong> Ha obtenido
  <strong>«IA Aplicada»</strong>.<br>
  Ya cuenta con 2 de 3 badges. Un módulo más y completa la trilogía.
</div>
```

---

### Semana 7 — Módulo 7: «De la junta al tablero en 15 minutos»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 7: De la junta al tablero en 15 minutos — Gestión de proyectos con IA 📋 |
| **RESUMEN_MODULO** | Esta semana dio un salto cualitativo: pasó de usar IA para tareas individuales a usarla para **dirigir proyectos completos**. Estructuró un proyecto real de su área con objetivos SMART, desglose de tareas, análisis de riesgos y templates de seguimiento. Y lo hizo en 30 minutos, no en 3 días. Lo más revelador: la IA le propuso riesgos genéricos, pero usted agregó los que solo alguien con su experiencia en Anáhuac conoce. Eso confirma la verdad central del programa: la IA necesita SU criterio para ser verdaderamente útil. |
| **TIP_SEMANAL** | **Use su plan de proyecto como herramienta REAL esta semana.** Llévelo a su próxima junta. Comparta el desglose de tareas con su equipo. Agende el seguimiento. No es un «ejercicio del curso» — es un plan funcional para un proyecto real de su área. Trátelo como tal. |
| **PREVIEW_SIGUIENTE** | Llegó el momento más importante del programa. En el **Módulo 8: «Su equipo invisible»** va a dejar de ser USUARIO de la IA para convertirse en **ARQUITECTO**. Va a configurar 3 agentes especializados para su área, crear un flujo multi-paso, completar su banco de 20+ prompts, y diseñar un plan de adopción de IA para su equipo. Este es su entregable final. Su ecosistema completo. |
| **CTA_TEXTO** | IR AL MÓDULO FINAL |

---

### Semana 8 — Módulo 8: «Su equipo invisible»

| Campo | Contenido |
|---|---|
| **Asunto** | Semana 8: Módulo final — Su ecosistema de IA está completo 🏆 |
| **RESUMEN_MODULO** | Lo logró. Esta semana completó el módulo más ambicioso del programa: configuró **3 agentes especializados** para su área, los encadenó en un **flujo multi-paso funcional**, completó su **banco de 20+ prompts**, y diseñó un **plan de adopción de IA** para su equipo. Hace 8 semanas, pensaba que la IA era «para técnicos». Hoy tiene un ecosistema de inteligencia artificial trabajando para su gestión. No se convirtió en ingeniero de sistemas. Se convirtió en un líder que sabe orquestar inteligencia — humana y artificial. |
| **TIP_SEMANAL** | **Su tip final no es un tip — es una invitación.** El lunes a las 9 AM, use su ecosistema. Abra Amazon Quick, active su agente analista, pásele los datos de la semana, genere su reporte, y envíelo. Haga lo que aprendió a hacer. No «algún día». Lunes. 9 AM. Su equipo invisible estará listo. Y usted, al frente. |
| **PREVIEW_SIGUIENTE** | No hay módulo siguiente. Pero hay un paso muy importante: en los próximos días recibirá un email con su **encuesta de satisfacción**, los detalles sobre la **emisión de sus badges**, y una invitación especial. Esté pendiente. |
| **CTA_TEXTO** | COMPLETAR MI ENTREGABLE FINAL |

**Nota especial Semana 8:** Incluir SIEMPRE:

```html
<div style="background: linear-gradient(135deg, #432F64, #FF5900);
            padding: 24px; border-radius: 12px; text-align: center;
            margin: 24px 0; color: white;">
  <p style="font-size: 24px; margin: 0 0 8px 0;">🟣 🏆</p>
  <p style="font-size: 18px; font-weight: bold; margin: 0 0 8px 0;">
    ¡Ha completado el programa!
  </p>
  <p style="font-size: 14px; margin: 0 0 16px 0; opacity: 0.9;">
    Sus badges «Líder IA» y «Líder Digital Anáhuac» están en proceso de emisión.
  </p>
  <p style="font-size: 13px; margin: 0; opacity: 0.8;">
    Recibirá un email con los detalles de sus credenciales en los próximos días.
  </p>
</div>
```

---

## Variante: Email de Re-Engagement

Para participantes que no han avanzado en 2+ semanas:

| Campo | Valor |
|---|---|
| **Asunto** | {{NOMBRE}}, su programa de IA le está esperando — ¿le ayudo a retomar? |
| **Trigger** | No ha completado un módulo en 14+ días |

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Notamos que no ha avanzado en el programa en las últimas semanas.
Sabemos que las agendas directivas son impredecibles — no es un
reproche, es una mano extendida.

**Donde lo dejó:**
- Último módulo completado: {{ULTIMO_MODULO}}
- Siguiente módulo: {{SIGUIENTE_MODULO}} — «{{TITULO_SIGUIENTE}}»
- Tiempo estimado para completarlo: 25-35 minutos

**¿Qué le está frenando?**

Si es **tiempo:** el siguiente módulo toma solo 30 minutos. Puede
hacerlo entre una junta y otra.

Si es **un problema técnico:** escríbanos a {{EMAIL_SOPORTE_TECNICO}}
y lo resolvemos hoy mismo.

Si es **que el contenido no le está sirviendo:** responda a este
email y díganos. Su retroalimentación nos ayuda a mejorar.

Le esperamos de vuelta:
https://cursos.memovaldez.com

Atentamente,
Coordinación del Programa
```

---

## Notas de Implementación

1. **Automatización:** Configurar en el ESP la secuencia semanal con los contenidos específicos de cada semana. Los placeholders de progreso (`{{MODULOS_COMPLETADOS}}`, `{{PORCENTAJE_AVANCE}}`) deben extraerse de la plataforma de tracking del mini sitio.
2. **Segmentación por velocidad:** Si un participante va adelantado (completó 2 módulos en 1 semana), ajustar el email para reflejar su progreso real, no el calendario estándar.
3. **Re-engagement:** Activar la variante de re-engagement automáticamente cuando el participante no completa un módulo en 14 días. Máximo 2 re-engagements durante el programa.
4. **Badges condicionales:** Las notas de badges (semanas 3, 6, 8) solo se muestran si el participante efectivamente cumplió los criterios de emisión. No mostrar el badge si no se ha ganado.
5. **Tracking UTM:** `?utm_source=email&utm_medium=seguimiento_semana{{N}}&utm_campaign=ia_lideres_cohorte1`.

---

*Documento de Fase 8 — Secuencias de Comunicación Interna*  
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
