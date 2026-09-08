# Serie Nurture — 4 Emails Pre-Curso

> **Tipo:** Secuencia de nurturing semanal  
> **Fase:** Post-invitación, pre-inicio del curso  
> **Objetivo:** Mantener interés, reducir objeciones, generar urgencia y anticipación  
> **Audiencia:** Directivos que ya recibieron la invitación (confirmados y no confirmados)  
> **Versión:** 1.0 | **Fecha:** septiembre 2026

---

## Estrategia General de la Serie

| Parámetro | Valor |
|---|---|
| **Total de emails** | 4 (uno por semana) |
| **Remitente sugerido** | Coordinación del Programa «IA Práctica para Líderes Anáhuac» |
| **Reply-to** | educacioncontinua@anahuac.mx |
| **Frecuencia** | Semanal — envío en miércoles a las 8:30 AM |
| **Segmentación** | Enviar a TODOS los directivos invitados. Quienes ya confirmaron reciben la variante «Confirmados» del CTA. |
| **Lógica de salida** | Si el destinatario confirma su participación, mover a la lista «Inscritos» y cambiar el CTA en emails siguientes. |

### Progresión Emocional de la Serie

```
Semana 1: DATO + URGENCIA     → "El mundo ya cambió. Usted puede ponerse al día."
Semana 2: STORYTELLING         → "Un directivo como usted ya lo hizo. Así le fue."
Semana 3: PREVIEW DE CONTENIDO → "Esto es lo que va a aprender. Nivel por nivel."
Semana 4: RECORDATORIO + PROOF → "Empieza la próxima semana. Esto dicen quienes ya probaron."
```

---

## Email 1 de 4 — «El dato que cambia la conversación»

### Datos del Email

| Campo | Valor |
|---|---|
| **Asunto** | ¿Sabía que el 73% de universidades líderes ya usan IA en su gestión? |
| **Asunto alternativo** | Sus colegas en otras universidades ya están usando IA. Aquí van los datos. |
| **Pre-header** | Y los directivos que no la adoptan pierden 10+ horas por semana en tareas automatizables. |
| **Semana de envío** | Semana 1 (4 semanas antes del inicio) |

### Cuerpo del Email

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Un dato para reflexionar:

> **El 73% de las universidades que lideran rankings internacionales
> ya incorporaron herramientas de IA generativa en su gestión
> administrativa y académica.**
>
> — *Fuente: EDUCAUSE Horizon Report, 2026*

Mientras tanto, nuestro diagnóstico interno revela que el **85% de los
directivos de la Anáhuac Mayab** aún no ha incorporado la IA en su
flujo de trabajo diario.

No es una crítica. Es una oportunidad.

---

### Lo que significa en términos concretos

Cada semana, un directivo universitario promedio dedica:

| Tarea | Tiempo estimado | Con IA sería... |
|---|---|---|
| Redactar correos y comunicados | 8-10 horas | 2-3 horas |
| Analizar y resumir reportes | 4-6 horas | 1-2 horas |
| Preparar minutas y seguimientos | 3-4 horas | 30-45 min |
| Consolidar indicadores | 3-5 horas | 1 hora |
| **Total potencialmente recuperable** | | **10-15 horas/semana** |

Esas horas no desaparecen. Se **redistribuyen** hacia lo que realmente
requiere su experiencia y criterio: decisiones estratégicas, acompañamiento
a su equipo, y fortalecimiento de sus programas.

---

### El programa ya está diseñado para usted

**«IA Práctica para Líderes Anáhuac»** no es un webinar genérico sobre
«el futuro de la IA». Es un programa de 8 niveles donde usted va a
trabajar con **sus documentos reales**, en **su contexto específico**,
y va a salir con herramientas que usa **el lunes siguiente**.

{{#IF_NO_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0;">
  <a href="{{URL_FORMULARIO_INSCRIPCION}}"
     style="background-color: #FF5900; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    CONFIRME SU PARTICIPACIÓN →
  </a>
</div>
{{/IF_NO_CONFIRMADO}}

{{#IF_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0; padding: 16px;
            background-color: #f0f7f0; border-radius: 8px;">
  ✅ <strong>Su participación está confirmada.</strong><br>
  Recibirá los detalles de acceso una semana antes del inicio.
</div>
{{/IF_CONFIRMADO}}

En el próximo email le compartiré la experiencia de un directivo que ya
usó estas herramientas. Los resultados le van a sorprender.

Atentamente,

**Coordinación del Programa**  
*IA Práctica para Líderes Anáhuac*  
*Universidad Anáhuac Mayab*
```

---

## Email 2 de 4 — «La historia de un directivo como usted»

### Datos del Email

| Campo | Valor |
|---|---|
| **Asunto** | «Pasé de 6 horas a 45 minutos en mi reporte mensual» — Un directivo Anáhuac |
| **Asunto alternativo** | Cómo un coordinador recuperó una tarde completa cada semana gracias a la IA |
| **Pre-header** | No se volvió técnico. Aprendió a dar mejores instrucciones. |
| **Semana de envío** | Semana 2 (3 semanas antes del inicio) |

### Cuerpo del Email

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Quiero compartirle una experiencia real.

---

### La historia de {{NOMBRE_DIRECTIVO_PILOTO}}

{{NOMBRE_DIRECTIVO_PILOTO}}, {{CARGO_DIRECTIVO_PILOTO}} de la
Universidad Anáhuac Mayab, tenía un problema que probablemente le
suene familiar:

> *«Cada mes, dedicaba entre 5 y 6 horas a consolidar los indicadores
> de mi área para el reporte a {{INSTANCIA_SUPERIOR}}. Recopilaba
> datos de 4 fuentes distintas, los organizaba en Excel, redactaba
> el análisis narrativo y lo formateaba. Era mi viernes completo,
> todos los meses. Y al final, no estaba seguro de que alguien lo
> leyera completo.»*

Durante la prueba piloto del programa «IA Práctica para Líderes»,
{{NOMBRE_DIRECTIVO_PILOTO}} aprendió a:

1. **Subir sus archivos fuente a Amazon Quick** (procesamiento local,
   sin que los datos salgan de su equipo)
2. **Usar un prompt estructurado** para que la IA extrajera los
   indicadores clave de cada fuente
3. **Diseñar un flujo de 5 pasos** que convierte datos crudos en
   reporte ejecutivo con análisis
4. **Aplicar el checklist de verificación PAUS** para asegurar que
   cada dato fuera correcto

### El resultado

| Antes | Después |
|---|---|
| 5-6 horas por reporte | 45 minutos (incluyendo verificación) |
| Análisis narrativo escrito desde cero | Borrador generado por IA, editado por {{PRONOMBRE}} |
| Datos consolidados manualmente | Flujo semi-automatizado replicable |
| Formato inconsistente cada mes | Template estandarizado |

> *«Lo que más me sorprendió no fue la velocidad. Fue que el
> reporte quedó MEJOR que cuando lo hacía manual, porque la IA
> me obligó a ser más claro sobre qué quería analizar. Mi criterio
> sigue siendo lo que importa — pero ahora tengo un amplificador.»*

---

### Esto es lo que el programa le ofrece a usted

{{NOMBRE_DIRECTIVO_PILOTO}} no tenía experiencia previa con IA.
No es «de sistemas». No le gustan los cursos de tecnología.

Lo que sí tenía era **experiencia en su área y claridad sobre sus
problemas diarios**. Eso fue suficiente.

El programa está diseñado para que usted obtenga resultados
similares — con sus datos, en su contexto, para sus reportes.

{{#IF_NO_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0;">
  <a href="{{URL_FORMULARIO_INSCRIPCION}}"
     style="background-color: #FF5900; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    QUIERO PARTICIPAR →
  </a>
</div>
{{/IF_NO_CONFIRMADO}}

{{#IF_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0; padding: 16px;
            background-color: #f0f7f0; border-radius: 8px;">
  ✅ <strong>Su lugar está reservado.</strong><br>
  En el próximo email le mostraré exactamente qué cubrirá cada nivel.
</div>
{{/IF_CONFIRMADO}}

La próxima semana le enviaré el mapa completo del programa:
qué va a aprender en cada uno de los 8 niveles.

Atentamente,

**Coordinación del Programa**  
*IA Práctica para Líderes Anáhuac*  
*Universidad Anáhuac Mayab*
```

### Nota sobre el Caso de Éxito

Si aún no se tiene un participante real del piloto, usar un caso compuesto basado en las personas del brief:
- **Versión Académica:** Coordinadora de licenciatura que automatizó su reporte de indicadores de matrícula/retención
- **Versión Administrativa:** Director de planeación que automatizó su reporte semanal de KPIs al Rector

El caso debe ser **verificable** o declarado como «caso representativo basado en pruebas del programa».

---

## Email 3 de 4 — «Lo que aprenderá en 8 niveles»

### Datos del Email

| Campo | Valor |
|---|---|
| **Asunto** | Su mapa completo: qué aprenderá en cada nivel del programa de IA |
| **Asunto alternativo** | De «nunca he usado IA» a «tengo 3 agentes trabajando para mi área» — en 8 niveles |
| **Pre-header** | 8 niveles prácticos. Cada uno resuelve un problema real de su gestión diaria. |
| **Semana de envío** | Semana 3 (2 semanas antes del inicio) |

### Cuerpo del Email

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Esta semana quiero mostrarle exactamente qué va a aprender — y
más importante, qué va a PRODUCIR — en cada nivel del programa.

---

### Su recorrido en 8 niveles

<table style="width: 100%; border-collapse: collapse;">
  <tr style="background-color: #432F64; color: white;">
    <td colspan="3" style="padding: 12px; font-weight: bold;">
      FASE I — ENTENDER · «Qué es esto y cómo le hablo»
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 1
    </td>
    <td style="padding: 12px;">
      <strong>«El lunes a las 8 AM»</strong><br>
      Conceptos de IA Generativa
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      Produce su primer comunicado profesional con IA en menos de 10 min
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 2
    </td>
    <td style="padding: 12px;">
      <strong>«Las tres recetas»</strong><br>
      Frameworks de Prompts
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      Crea 3 prompts maestros para sus tareas más frecuentes
    </td>
  </tr>

  <tr style="background-color: #432F64; color: white;">
    <td colspan="3" style="padding: 12px; font-weight: bold;">
      FASE II — USAR · «Lo aplico a mis tareas diarias»
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 3
    </td>
    <td style="padding: 12px;">
      <strong>«Nunca más la pantalla en blanco»</strong><br>
      Email y Comunicados Institucionales
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      Entrega: 5 templates de comunicación listos para usar
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 4
    </td>
    <td style="padding: 12px;">
      <strong>«Las 50 páginas que nadie lee»</strong><br>
      Análisis de Reportes con IA
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      Convierte un reporte real de 50 páginas en resumen ejecutivo de 1 página
    </td>
  </tr>

  <tr style="background-color: #432F64; color: white;">
    <td colspan="3" style="padding: 12px; font-weight: bold;">
      FASE III — ACELERAR · «Automatizo lo repetitivo»
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 5
    </td>
    <td style="padding: 12px;">
      <strong>«El dato que la IA inventó»</strong><br>
      Automatización de Reportes
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      ⭐ Entregable final 1: Flujo de reportes automatizado
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 6
    </td>
    <td style="padding: 12px;">
      <strong>«La línea que no se cruza»</strong><br>
      Atención a Stakeholders con IA
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      Kit de atención: 10 respuestas maestras + protocolo ético
    </td>
  </tr>

  <tr style="background-color: #432F64; color: white;">
    <td colspan="3" style="padding: 12px; font-weight: bold;">
      FASE IV — INTEGRAR · «Lo incorporo a mi gestión y mi equipo»
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 7
    </td>
    <td style="padding: 12px;">
      <strong>«De la junta al tablero en 15 min»</strong><br>
      Gestión de Proyectos con IA
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      Plan de proyecto real: objetivos, WBS, riesgos, seguimiento
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px; font-weight: bold; color: #FF5900;">
      Nivel 8
    </td>
    <td style="padding: 12px;">
      <strong>«Su equipo invisible»</strong><br>
      Agentes y Trabajo en Equipo Local
    </td>
    <td style="padding: 12px; font-size: 14px; color: #555;">
      ⭐ Entregable final 2: 3 agentes + banco de 20+ prompts + plan de adopción
    </td>
  </tr>
</table>

---

### Lo que obtiene al completar

🟢 **Badge Explorador IA** — al completar niveles 1-3  
🔵 **Badge Estratega IA** — al completar niveles 4-6  
🟣 **Badge Líder IA** — al completar niveles 7-8  
🏆 **Badge Líder Digital Anáhuac** — al completar los 8 niveles  

Cada badge es una micro-credencial verificable bajo el estándar Open Badges 3.0,
compartible en LinkedIn y con valor curricular institucional.

**Créditos SATCA:** 6.5 | **Horas totales:** 120 (40 de contacto + 80 independientes)

---

### Formato diseñado para su agenda

- ⏱️ Niveles de 20-35 minutos de contenido + práctica
- 📱 Accesible desde cualquier dispositivo
- 🎯 Avance a su ritmo — sin horarios fijos
- 💬 Sesiones sincrónicas opcionales de resolución de dudas
- 🔒 Amazon Quick: procesamiento local de sus datos (privacidad total)

{{#IF_NO_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0;">
  <a href="{{URL_FORMULARIO_INSCRIPCION}}"
     style="background-color: #FF5900; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    CONFIRME SU LUGAR — QUEDAN {{LUGARES_DISPONIBLES}} ESPACIOS →
  </a>
</div>
{{/IF_NO_CONFIRMADO}}

{{#IF_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0; padding: 16px;
            background-color: #f0f7f0; border-radius: 8px;">
  ✅ <strong>¡Todo listo!</strong> Su lugar está confirmado.<br>
  La próxima semana recibirá los detalles de acceso al mini sitio.
</div>
{{/IF_CONFIRMADO}}

La próxima semana le envío el último email antes del inicio,
con un testimonio del piloto y los últimos detalles logísticos.

Atentamente,

**Coordinación del Programa**  
*IA Práctica para Líderes Anáhuac*  
*Universidad Anáhuac Mayab*
```

---

## Email 4 de 4 — «Empieza la próxima semana»

### Datos del Email

| Campo | Valor |
|---|---|
| **Asunto** | Iniciamos el {{FECHA_INICIO}} — Todo lo que necesita saber |
| **Asunto alternativo** | Esta es la semana: su programa de IA para directivos arranca en días |
| **Pre-header** | Acceso al sitio, calendario, y lo que dicen quienes ya probaron el programa. |
| **Semana de envío** | Semana 4 (1 semana antes del inicio) |

### Cuerpo del Email

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

El programa **«IA Práctica para Líderes Anáhuac»** inicia el
**{{FECHA_INICIO}}**. Este es su resumen de todo lo que necesita.

---

### 📋 Checklist para el inicio

- [ ] **Acceso confirmado** a su cuenta de Amazon Quick
  (si aún no la tiene, contacte a {{EMAIL_SOPORTE_TECNICO}})
- [ ] **Computadora con navegador** actualizado (Chrome, Edge o Firefox)
- [ ] **30-45 minutos disponibles** para completar el Nivel 1 en su
  primera sesión
- [ ] **Un documento real de su área** que quiera usar como primer
  ejercicio (comunicado, correo pendiente, o reporte)

> **💡 Tip:** Traiga al Nivel 1 ese correo que tiene pendiente de
> redactar. Al terminar la sesión, lo tendrá listo para enviar.

---

### 📅 Calendario del programa

| Semana | Niveles | Lo que produce |
|---|---|---|
| Semana 1-2 | Niveles 1 y 2 | Primer output + 3 prompts maestros |
| Semana 3-4 | Niveles 3 y 4 | 5 templates de comunicación + resumen ejecutivo |
| Semana 5-6 | Niveles 5 y 6 | ⭐ Flujo automatizado + kit de atención |
| Semana 7-8 | Niveles 7 y 8 | Plan de proyecto + ⭐ Ecosistema completo |

---

### 🗣️ Lo que dicen quienes ya probaron el programa

> *«Entré pensando que iba a ser otro curso de tecnología que no
> iba a terminar. Al final del Nivel 2 ya estaba usando lo aprendido
> para mis correos del día. Eso nunca me había pasado con una
> capacitación.»*  
> — **Participante del piloto, {{CARGO_PILOTO_1}}**

> *«Lo más valioso no fue aprender a usar la herramienta. Fue
> descubrir que mi experiencia de 15 años es exactamente lo que
> la IA necesita para funcionar bien. Sin mi criterio, el resultado
> es mediocre. Con mi criterio, es excepcional.»*  
> — **Participante del piloto, {{CARGO_PILOTO_2}}**

---

### 🔗 Su acceso

El mini sitio del programa estará disponible a partir del
**{{FECHA_APERTURA_SITIO}}** en:

<div style="text-align: center; margin: 24px 0; padding: 16px;
            background-color: #f5f0fa; border-radius: 8px;
            border: 2px solid #432F64;">
  <strong style="color: #432F64; font-size: 18px;">
    https://cursos.memovaldez.com
  </strong><br>
  <small>Sus credenciales de acceso le llegarán el {{FECHA_ENVIO_CREDENCIALES}}</small>
</div>

---

### ¿Preguntas? Estamos para ayudarle

| Canal | Contacto |
|---|---|
| Dudas sobre el programa | educacioncontinua@anahuac.mx |
| Soporte técnico (Amazon Quick) | {{EMAIL_SOPORTE_TECNICO}} |
| Coordinación directa | {{NOMBRE_COORDINADOR}} — {{EMAIL_COORDINADOR}} |

{{#IF_NO_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0;">
  <a href="{{URL_FORMULARIO_INSCRIPCION}}"
     style="background-color: #FF5900; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    AÚN PUEDE INSCRIBIRSE — ÚLTIMOS LUGARES →
  </a>
</div>
<p style="text-align: center; color: #999; font-size: 13px;">
  El programa inicia en {{DIAS_PARA_INICIO}} días. Los lugares son limitados.
</p>
{{/IF_NO_CONFIRMADO}}

{{#IF_CONFIRMADO}}
<div style="text-align: center; margin: 32px 0;">
  <a href="https://cursos.memovaldez.com"
     style="background-color: #432F64; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    NOS VEMOS EL {{FECHA_INICIO}} →
  </a>
</div>
{{/IF_CONFIRMADO}}

Nos vemos en el Nivel 1.

Atentamente,

**Coordinación del Programa**  
*IA Práctica para Líderes Anáhuac*  
*Universidad Anáhuac Mayab*
```

---

## Notas de Implementación para la Serie Completa

1. **Lógica condicional:** Cada email tiene dos variantes de CTA (`IF_NO_CONFIRMADO` / `IF_CONFIRMADO`). Configurar en el ESP (email service provider) según el status de inscripción.
2. **Urgencia progresiva:** Los asuntos escalan en urgencia de la semana 1 (dato) a la semana 4 (última oportunidad).
3. **Tracking UTM:** Cada email debe incluir `utm_source=email&utm_medium=nurture_semana{{N}}&utm_campaign=ia_lideres_cohorte1`.
4. **No saturar:** Si el destinatario confirmó en la semana 1, los emails 2-4 cambian el CTA pero NO eliminan al contacto de la lista — el contenido educativo sigue siendo valioso para engagement.
5. **Personalización por versión:** El email 2 (storytelling) debe usar un caso de la versión correspondiente (académica o administrativa) según el perfil del destinatario.
6. **Opt-out:** Todos los emails deben incluir opción de baja de la serie (no confundir con baja de comunicaciones institucionales generales).

---

*Documento de Fase 8 — Secuencias de Comunicación Interna*  
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
