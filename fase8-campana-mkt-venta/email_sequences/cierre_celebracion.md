# Email de Cierre y Celebración — Post-Curso

> **Tipo:** Email de celebración, cierre y siguiente paso  
> **Fase:** Post-curso (3-5 días después del cierre del programa)  
> **Objetivo:** Celebrar el logro, entregar badges, solicitar retroalimentación y activar rol de embajador  
> **Versión:** 1.0 | **Fecha:** septiembre 2026

---

## Datos del Email

| Campo | Valor |
|---|---|
| **Asunto** | 🏆 Felicidades, {{NOMBRE}} — Usted es Líder Digital Anáhuac |
| **Asunto alternativo** | Ha completado «IA Práctica para Líderes» — Sus badges, su constancia y su siguiente paso |
| **Pre-header** | 3 badges obtenidos, 8 niveles completados, y un ecosistema de IA listo para usar. |
| **Remitente** | Dr. {{NOMBRE_RECTOR}} — Rector de la Universidad Anáhuac Mayab |
| **Reply-to** | educacioncontinua@anahuac.mx |
| **Audiencia** | Participantes que completaron los 8 niveles del programa |
| **CTA principal** | Comparta su logro en LinkedIn |
| **CTA secundario** | Complete la encuesta de satisfacción |
| **Timing** | 3-5 días hábiles después de la fecha de cierre del programa |

---

## Cuerpo del Email

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Quiero felicitarle personalmente.

Ha completado el programa **«IA Práctica para Líderes Anáhuac»** y
con ello se convierte en parte del primer grupo de directivos de
nuestra Universidad capacitados formalmente en el uso estratégico
de la inteligencia artificial generativa.

Esto no es menor. Usted dedicó tiempo de su agenda — que sé bien
lo valiosa que es — a transformar la forma en que trabaja. Y lo
logró.

---

### 🏅 Sus credenciales obtenidas

<div style="background: linear-gradient(135deg, #f5f0fa, #fff5f0);
            padding: 24px; border-radius: 12px; margin: 24px 0;">

  <div style="display: flex; align-items: center; margin-bottom: 16px;
              padding-bottom: 16px; border-bottom: 1px solid #e0d5eb;">
    <span style="font-size: 32px; margin-right: 16px;">🟢</span>
    <div>
      <strong style="color: #432F64;">Explorador IA</strong><br>
      <small style="color: #666;">Niveles 1-3 · Comprensión, prompting y comunicación con IA</small>
    </div>
  </div>

  <div style="display: flex; align-items: center; margin-bottom: 16px;
              padding-bottom: 16px; border-bottom: 1px solid #e0d5eb;">
    <span style="font-size: 32px; margin-right: 16px;">🔵</span>
    <div>
      <strong style="color: #432F64;">Estratega IA</strong><br>
      <small style="color: #666;">Niveles 4-6 · Análisis, automatización y ética</small>
    </div>
  </div>

  <div style="display: flex; align-items: center; margin-bottom: 16px;
              padding-bottom: 16px; border-bottom: 1px solid #e0d5eb;">
    <span style="font-size: 32px; margin-right: 16px;">🟣</span>
    <div>
      <strong style="color: #432F64;">Líder IA</strong><br>
      <small style="color: #666;">Niveles 7-8 · Agentes, proyectos y plan de adopción</small>
    </div>
  </div>

  <div style="display: flex; align-items: center; background-color: #432F64;
              padding: 16px; border-radius: 8px; color: white;">
    <span style="font-size: 32px; margin-right: 16px;">🏆</span>
    <div>
      <strong>Líder Digital Anáhuac — IA para Gestión Universitaria</strong><br>
      <small style="opacity: 0.85;">Badge integrador · 8 niveles · 6.5 créditos SATCA · 12-16 horas de contenido</small>
    </div>
  </div>

</div>

**Acreditación:**
- **Constancia de Formación Continua** con valor curricular emitida por
  la Universidad Anáhuac Mayab
- **6.5 créditos SATCA** registrados en su expediente institucional
- **4 Open Badges** verificables bajo estándar 3.0 (W3C Verifiable Credentials)
- **Vigencia:** 3 años desde la fecha de emisión

### Descargue sus credenciales

<div style="text-align: center; margin: 24px 0;">
  <a href="{{URL_DESCARGA_BADGES}}"
     style="background-color: #432F64; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    DESCARGAR MIS BADGES Y CONSTANCIA →
  </a>
</div>

<p style="text-align: center; font-size: 13px; color: #666;">
  Recibirá un email adicional con instrucciones detalladas para
  agregar sus badges a LinkedIn y Badgr.
</p>

---

### 📊 Su impacto en números

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px;"><strong>Niveles completados</strong></td>
    <td style="padding: 12px; text-align: right; color: #FF5900; font-weight: bold;">
      8 de 8 ✓
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px;"><strong>Entregables producidos</strong></td>
    <td style="padding: 12px; text-align: right; color: #FF5900; font-weight: bold;">
      {{TOTAL_ENTREGABLES}}
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px;"><strong>Prompts en su banco personal</strong></td>
    <td style="padding: 12px; text-align: right; color: #FF5900; font-weight: bold;">
      {{TOTAL_PROMPTS}}+
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px;"><strong>Agentes configurados</strong></td>
    <td style="padding: 12px; text-align: right; color: #FF5900; font-weight: bold;">
      {{TOTAL_AGENTES}}
    </td>
  </tr>
  <tr style="border-bottom: 1px solid #eee;">
    <td style="padding: 12px;"><strong>Flujos automatizados</strong></td>
    <td style="padding: 12px; text-align: right; color: #FF5900; font-weight: bold;">
      {{TOTAL_FLUJOS}}
    </td>
  </tr>
  <tr>
    <td style="padding: 12px;"><strong>Horas potenciales recuperadas por semana</strong></td>
    <td style="padding: 12px; text-align: right; color: #FF5900; font-weight: bold; font-size: 18px;">
      5+ horas
    </td>
  </tr>
</table>

---

### 📝 Su retroalimentación es fundamental

Para seguir mejorando este programa, necesitamos su opinión honesta.
Le pedimos 5 minutos para completar la **encuesta de satisfacción**:

<div style="text-align: center; margin: 24px 0;">
  <a href="{{URL_ENCUESTA_NPS}}"
     style="background-color: #FF5900; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    COMPLETAR ENCUESTA (5 MIN) →
  </a>
</div>

La encuesta es **anónima** e incluye:
- Evaluación general del programa (NPS)
- Nivel más útil y nivel a mejorar
- Impacto percibido en su gestión diaria
- Sugerencias para futuras cohortes
- ¿Recomendaría el programa a un colega?

---

### 🚀 Su siguiente paso: Sea embajador de IA en la Anáhuac

Completar el programa es el inicio, no el final. Le invito a dar
el siguiente paso:

**1. Use su ecosistema — todos los días.**  
Sus 3 agentes, su flujo automatizado y su banco de prompts están
listos. El lunes a las 9 AM, actívelos. No los deje «para después».

**2. Comparta lo que aprendió con su equipo.**  
Usted diseñó un plan de adopción de IA para su área en el Nivel 8.
Es momento de ejecutarlo. Empiece con los quick wins y vaya escalando.

**3. Sea parte de la comunidad de Líderes Digitales Anáhuac.**  
Estamos creando un espacio para que los egresados del programa
compartan experiencias, prompts, flujos y mejores prácticas.

{{#IF_COMUNIDAD_ACTIVA}}
<div style="text-align: center; margin: 16px 0;">
  <a href="{{URL_COMUNIDAD}}"
     style="background-color: #432F64; color: #ffffff; padding: 12px 32px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 600; font-size: 14px; display: inline-block;">
    UNIRSE A LA COMUNIDAD →
  </a>
</div>
{{/IF_COMUNIDAD_ACTIVA}}

**4. Comparta su logro.**  
Sus badges son verificables y compartibles. Publique su logro
en LinkedIn — es una señal profesional poderosa.

<div style="text-align: center; margin: 16px 0;">
  <a href="{{URL_COMPARTIR_LINKEDIN}}"
     style="background-color: #0077B5; color: #ffffff; padding: 12px 32px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 600; font-size: 14px; display: inline-block;">
    🔗 COMPARTIR EN LINKEDIN →
  </a>
</div>

---

### 📅 Encuesta de seguimiento a 30 días

En 30 días recibirá una **encuesta breve de seguimiento** para medir
el impacto real del programa en su gestión diaria:

- ¿Cuántas veces por semana usa IA?
- ¿Cuántas horas estima que ahorra?
- ¿Ha implementado su plan de adopción con su equipo?
- ¿Qué herramienta del programa usa más?

Esta encuesta es fundamental para medir el ROI del programa y para
que la Universidad pueda escalar esta formación a más áreas.

---

### Una reflexión final

Hace 8 semanas, muchos de ustedes entraron a este programa pensando
que la IA era «para técnicos» o «una moda más». Hoy salen con 3
agentes configurados, un flujo automatizado, 20+ instrucciones listas,
y — lo más importante — un nuevo modelo mental de lo que significa
liderar en la era de la IA.

> *«No aprendió tecnología. Aprendió a liderar de una forma nueva —
> una en la que su experiencia, su criterio y su visión tienen un
> amplificador que antes no existía.»*

La Universidad Anáhuac Mayab les necesita en este nuevo rol. Sus
equipos les necesitan como guías. Y sus colegas les necesitan como
ejemplo de que sí se puede.

Felicidades. Es un orgullo contar con líderes como usted.

Atentamente,

**{{NOMBRE_RECTOR}}**  
*Rector*  
*Universidad Anáhuac Mayab*

---

<small style="color: #666;">
Ha recibido este email como egresado(a) del programa «IA Práctica
para Líderes Anáhuac», cohorte {{NUMERO_COHORTE}}. Sus credenciales
digitales estarán disponibles en {{URL_DESCARGA_BADGES}} durante 3 años.
Para cualquier consulta: educacioncontinua@anahuac.mx.
</small>
```

---

## Email Complementario: Instrucciones de Badges para LinkedIn

Enviar 2 días después del email de cierre.

| Campo | Valor |
|---|---|
| **Asunto** | Cómo agregar su badge «Líder Digital Anáhuac» a LinkedIn — Paso a paso |
| **Remitente** | Coordinación del Programa |

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Sus Open Badges ya están emitidos. Aquí le explico cómo agregarlos
a su perfil de LinkedIn en 3 pasos:

### Paso 1: Descargue sus badges
Ingrese a {{URL_DESCARGA_BADGES}} y descargue los archivos
.json y .png de cada badge.

### Paso 2: Agregue la credencial en LinkedIn
1. Abra su perfil de LinkedIn
2. Vaya a la sección «Licencias y certificaciones»
3. Haga clic en «+» para agregar
4. Complete los campos:
   - **Nombre:** Líder Digital Anáhuac — IA para Gestión Universitaria
   - **Organización emisora:** Universidad Anáhuac Mayab
   - **Fecha de emisión:** {{FECHA_EMISION}}
   - **Fecha de expiración:** {{FECHA_EXPIRACION}}
   - **ID de la credencial:** {{CREDENTIAL_ID}}
   - **URL de la credencial:** {{URL_VERIFICACION_BADGE}}

### Paso 3: Comparta como publicación (opcional)
Puede publicar su logro con un texto como:

> *«Acabo de completar el programa "IA Práctica para Líderes" de la
> @UniversidadAnáhuacMayab. 8 niveles, 3 agentes de IA configurados
> para mi área, y un nuevo enfoque de liderazgo donde la experiencia
> humana y la inteligencia artificial se potencian mutuamente.
> #IAGenerativa #LiderazgoDigital #AnáhuacMayab»*

---

Si necesita ayuda con el proceso, escriba a educacioncontinua@anahuac.mx.

Atentamente,
Coordinación del Programa
```

---

## Email de Seguimiento: Encuesta a 30 Días

Enviar exactamente 30 días después de la fecha de cierre del curso.

| Campo | Valor |
|---|---|
| **Asunto** | 30 días después: ¿cómo ha cambiado su gestión con IA? (Encuesta de 3 min) |
| **Remitente** | Coordinación del Programa |

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

Han pasado 30 días desde que completó el programa «IA Práctica
para Líderes Anáhuac». Su experiencia real es la medida más
importante del éxito de este programa.

Le pedimos **3 minutos** para responder estas preguntas:

<div style="text-align: center; margin: 24px 0;">
  <a href="{{URL_ENCUESTA_30DIAS}}"
     style="background-color: #FF5900; color: #ffffff; padding: 14px 36px;
            text-decoration: none; border-radius: 8px; font-family: 'Manrope', sans-serif;
            font-weight: 700; font-size: 15px; display: inline-block;">
    RESPONDER ENCUESTA (3 MIN) →
  </a>
</div>

**Lo que medimos:**
- ¿Cuántas veces por semana usa IA en su trabajo?
- ¿Cuántas horas estima que ahorra por semana?
- ¿Ha compartido lo aprendido con su equipo?
- ¿Qué herramienta del programa usa más?
- ¿Qué mejoraría?

Sus respuestas nos ayudan a:
1. Demostrar el ROI del programa ante Rectoría
2. Mejorar el contenido para futuras cohortes
3. Decidir si escalamos la formación a más áreas

Gracias por su tiempo y su compromiso continuo.

Atentamente,
Coordinación del Programa
IA Práctica para Líderes Anáhuac
Universidad Anáhuac Mayab
```

---

## Notas de Implementación

1. **Remitente del email principal:** El email de cierre debe venir firmado por el Rector (como la invitación inicial), cerrando el arco de comunicación institucional. Es una señal de que el programa tiene visibilidad al más alto nivel.
2. **Condicional de completamiento:** Este email SOLO se envía a participantes que completaron los 8 niveles. Para participantes que completaron parcialmente, usar una variante (ver abajo).
3. **Timing de badges:** Los badges deben estar emitidos y descargables ANTES de enviar este email. No prometer algo que aún no está listo.
4. **Encuesta NPS:** Incluir la pregunta NPS estándar: «En una escala del 0 al 10, ¿qué tan probable es que recomiende este programa a un colega?» + pregunta abierta de por qué.
5. **Tracking:** UTM: `?utm_source=email&utm_medium=cierre_celebracion&utm_campaign=ia_lideres_cohorte1`.
6. **Encuesta a 30 días:** Programar como envío automático a fecha fija (30 días calendario desde el cierre).

### Variante: Participante que No Completó el Programa

Para participantes que completaron 1-7 niveles:

| Campo | Valor |
|---|---|
| **Asunto** | {{NOMBRE}}, su progreso en el programa de IA — ¿Le ayudamos a completar? |
| **Timing** | 5 días después del cierre oficial |

```html
Estimado(a) {{NOMBRE_COMPLETO}}:

El periodo estándar del programa «IA Práctica para Líderes Anáhuac»
ha concluido. Vemos que completó **{{MODULOS_COMPLETADOS}} de 8 niveles**
— lo cual ya representa un avance significativo.

**Lo que ha logrado:**
{{#IF_BADGE_1}} ✅ Badge «Explorador IA» 🟢 — obtenido {{/IF_BADGE_1}}
{{#IF_NO_BADGE_1}} ⬜ Badge «Explorador IA» 🟢 — pendiente {{/IF_NO_BADGE_1}}
{{#IF_BADGE_2}} ✅ Badge «Estratega IA» 🔵 — obtenido {{/IF_BADGE_2}}
{{#IF_NO_BADGE_2}} ⬜ Badge «Estratega IA» 🔵 — pendiente {{/IF_NO_BADGE_2}}
{{#IF_BADGE_3}} ✅ Badge «Líder IA» 🟣 — obtenido {{/IF_BADGE_3}}
{{#IF_NO_BADGE_3}} ⬜ Badge «Líder IA» 🟣 — pendiente {{/IF_NO_BADGE_3}}

**Le quedan {{MODULOS_RESTANTES}} niveles** para completar el programa
y obtener la credencial completa de **Líder Digital Anáhuac 🏆**.

Hemos extendido su acceso hasta el **{{FECHA_EXTENSION}}** para que
pueda completar a su ritmo.

Le invitamos a retomar donde lo dejó:
https://cursos.memovaldez.com

Si hay algo que podamos hacer para ayudarle a completar, no dude
en escribirnos. Cada nivel que complete tiene valor propio — y
los badges parciales también son compartibles en LinkedIn.

Atentamente,
Coordinación del Programa
```

---

*Documento de Fase 8 — Secuencias de Comunicación Interna*  
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*
