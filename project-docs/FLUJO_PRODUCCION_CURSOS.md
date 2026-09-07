# 🎓 Flujo Estructurado: Producción de Cursos End-to-End

> **Plantilla reutilizable** para transformar una idea de curso en un producto educativo completo — desde la definición del objetivo hasta la promoción y venta. **Aplicable a:** Licenciatura, Formación Continua, Bachillerato, Diplomados, Micro-credenciales **Áreas temáticas de referencia:** MKT Digital, Branding, IA Generativa, Tendencias 2026 **Fecha:** Septiembre 2026

---

## 📋 Visión General del Pipeline

```
┌─────────────┐   ┌──────────────┐   ┌──────────────┐   ┌─────────────┐
│  FASE 1     │──▶│  FASE 2      │──▶│  FASE 3      │──▶│  FASE 4     │
│  Definición │   │  Investigación│  │  Diseño      │   │  Curación   │
│  Estratégica│   │  & Fuentes   │   │  Curricular  │   │  de Contenido│
└─────────────┘   └──────────────┘   └──────────────┘   └─────────────┘
       │                                                        │
       ▼                                                        ▼
┌─────────────┐   ┌──────────────┐   ┌──────────────┐   ┌─────────────┐
│  FASE 5     │──▶│  FASE 6      │──▶│  FASE 7      │──▶│  FASE 8     │
│  Producción │   │  Construcción│   │  Ensamble &  │   │  Campaña    │
│  de Contenido│  │  de Assets   │   │  Publicación │   │  MKT & Venta│
└─────────────┘   └──────────────┘   └──────────────┘   └─────────────┘
                                                                │
                                                                ▼
                                                        ┌─────────────┐
                                                        │  FASE 9     │
                                                        │  Promoción  │
                                                        │  & Social   │
                                                        └─────────────┘

```

---

## 🔄 Fase 1: Definición Estratégica

**Agentes:** Product Manager + Trend Researcher **Input:** Idea o necesidad de curso **Output:** `brief_estrategico_{curso}.md`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Product Manager** | Definir el problema que resuelve el curso, audiencia target (persona), propuesta de valor, métricas de éxito (inscripciones, completamiento, NPS), formato (sincrónico/asincrónico/blended), duración y precio target |
| **Trend Researcher** | Validar demanda de mercado: Google Trends, análisis de cursos competidores (Coursera, Platzi, edX, Domestika), skills gap del sector, tendencias 2026 que fundamenten la relevancia |

### Entregables

```
brief_estrategico_{curso}/
├── product_brief.md          ← PM: problema, audiencia, propuesta, métricas
├── market_validation.md      ← Trend: demanda, competidores, diferenciación
├── persona_estudiante.md     ← PM + Psychologist: perfil psicográfico del alumno
└── decision_go_no_go.md      ← Criterios para proceder o pivotar

```

### Gate de salida

✅ Go/No-Go con evidencia de demanda. Sin validación de mercado no se avanza a Fase 2.

---

## 🔍 Fase 2: Investigación & Fuentes

**Agentes:** Research Synthesist + Trend Researcher + AI Literacy Coach (si aplica IA) **Input:** Brief estratégico aprobado **Output:** `base_conocimiento_{curso}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Research Synthesist** | Revisión sistemática de literatura: papers, libros, reports, frameworks relevantes al tema. Evaluar calidad de fuentes, mapear acuerdos/desacuerdos, identificar gaps. PRISMA-like para cursos académicos |
| **Trend Researcher** | Fuentes de industria: case studies, herramientas actuales, certificaciones existentes, white papers de vendors, benchmarks de mercado |
| **AI Literacy Coach** | (Si el curso involucra IA) Frameworks pedagógicos de AI literacy: UNESCO, Stanford, RAIL-Ed. Mapear competencias de IA al nivel del curso |

### Entregables

```
base_conocimiento_{curso}/
├── revision_literatura.md        ← Synthesist: fuentes evaluadas y ponderadas
├── fuentes_industria.md          ← Trend: case studies, tools, benchmarks
├── frameworks_aplicables.md      ← Marcos teóricos y pedagógicos que fundamentan
├── bibliografia_anotada.md       ← Todas las fuentes con calificación de calidad
└── gaps_identificados.md         ← Temas sin cobertura suficiente en literatura

```

### Regla crítica

⚠️ **TODAS las URLs se verifican con **`url_fetch`** o browser antes de incluirlas.** No se permite ninguna URL generada por LLM sin verificación.

---

## 📐 Fase 3: Diseño Curricular

**Agentes:** Curriculum Designer Universitario + Diseñador Instruccional DUA + Digital Skills Assessment Specialist **Input:** Base de conocimiento + Brief estratégico **Output:** `diseño_curricular_{curso}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Curriculum Designer** | Plan de estudios formal: competencias de egreso, mapa curricular, cartas descriptivas, créditos (SATCA/ECTS), alineamiento backward design. Si es formación continua: estructura modular con micro-credenciales apilables |
| **DI DUA** | Diseño instruccional detallado: secuencias didácticas por módulo/sesión, DUA (3 principios), progresión Bloom, productos integradores, rúbricas analíticas. Unificar mini-productos en entregables integradores |
| **Digital Skills Assessment** | Diseñar instrumentos de evaluación: rúbricas DigComp-aligned, assessment auténtico con tareas situadas, portfolio assessment, criterios de micro-credencialización Open Badges |

### Entregables

```
diseño_curricular_{curso}/
├── plan_estudios.md              ← Curriculum: competencias, mapa, créditos
├── cartas_descriptivas/          ← Curriculum: una por módulo/asignatura
├── secuencias_didacticas/        ← DI DUA: una por sesión, con DUA
├── productos_integradores.md     ← DI DUA: entregables por módulo con Bloom
├── rubricas/                     ← Assessment: rúbricas analíticas por producto
├── assessment_blueprint.md       ← Assessment: diseño de evaluación integral
└── micro_credenciales.md         ← Assessment: badges y stackable credentials

```

### Gate de salida

✅ Coherencia vertical (progresión Bloom) + horizontal (sin redundancias) validada. Taxonomía explícita en cada resultado de aprendizaje.

---

## 📚 Fase 4: Curación de Contenido

**Agentes:** Research Synthesist + Content Creator + Narratologist **Input:** Diseño curricular + Base de conocimiento **Output:** `contenido_curado_{curso}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Research Synthesist** | Seleccionar y curar fuentes por módulo/sesión: lecturas, videos, papers, herramientas. Verificar vigencia (2024-2026), calidad, accesibilidad y licencias. Priorizar fuentes abiertas |
| **Content Creator** | Crear calendario de contenido del curso: qué se produce internamente vs. qué se cura externamente. Definir formatos por tipo de contenido (lectura, video, infografía, ejercicio práctico, caso de estudio) |
| **Narratologist** | Diseñar arco narrativo del curso: cómo la experiencia de aprendizaje fluye como una historia con tension, progresión y transformación. Three-act structure adaptado a educación |

### Entregables

```
contenido_curado_{curso}/
├── mapa_fuentes_por_modulo.md    ← Synthesist: fuentes verificadas por sesión
├── calendario_contenido.md       ← Creator: qué se produce vs. qué se cura
├── arco_narrativo.md             ← Narratologist: storytelling del curso
├── lecturas/                     ← PDFs, links verificados, resúmenes
├── videos_referencia/            ← Links a videos externos verificados
└── herramientas_practicas.md     ← Tools y plataformas para ejercicios

```

---

## ✍️ Fase 5: Producción de Contenido

**Agentes:** Content Creator + Technical Writer + Prompt Engineer + Image Prompt Engineer + Video Editing Coach **Input:** Contenido curado + Diseño curricular + Arco narrativo **Output:** `contenido_producido_{curso}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Content Creator** | Producir contenido original: textos de módulos, scripts de video, guiones de podcast, copy de actividades. Voz y tono consistentes con audiencia target |
| **Technical Writer** | Documentación técnica: tutoriales paso a paso, guías de herramientas, README de proyectos prácticos. Claro, preciso y reproducible |
| **Prompt Engineer** | (Si curso incluye IA) Diseñar prompts de ejemplo, templates reutilizables, test cases para ejercicios. Cada prompt con expected output documentado |
| **Image Prompt Engineer** | Generar imágenes para el curso: ilustraciones, diagramas conceptuales, hero images. **SIN TEXTO EN LA IMAGEN** — todo texto vía overlays HTML |
| **Video Editing Coach** | Asesorar producción de video: estructura, ritmo, software recomendado, estándares de calidad por plataforma |

### Entregables

```
contenido_producido_{curso}/
├── modulos/
│   ├── modulo_01/
│   │   ├── contenido.md          ← Texto del módulo
│   │   ├── actividad.md          ← Instrucciones de actividad
│   │   ├── tutorial.md           ← Guía técnica paso a paso
│   │   └── prompts_ejercicio/    ← Templates de prompts (si aplica IA)
│   └── ...
├── scripts_video/                ← Guiones para videos
├── imagenes/                     ← Generadas sin texto embebido
└── assets_audio/                 ← Si hay podcast o narración

```

### Regla crítica

⚠️ **NUNCA incluir texto en imágenes generadas por IA.** Todo texto se agrega vía overlays HTML/CSS posicionados sobre la imagen.

---

## 🎨 Fase 6: Construcción de Assets

**Agentes:** Brand Guardian + UI Designer + Visual Storyteller + Whimsy Injector + EdTech LMS Specialist **Input:** Contenido producido + Brand Kit institucional **Output:** `assets_{curso}/`

### Tareas (paralelas)

| Agente | Tarea |
| --- | --- |
| **Brand Guardian** | Directrices de marca: paleta extendida, tipografía, variables CSS, do's & don'ts. Auditar consistencia visual |
| **UI Designer** | Componentes UI: layouts, cards, navegación, progress trackers, responsive. Design system del curso |
| **Visual Storyteller** | Concepto creativo: journey visual del estudiante, iconografía temática, transiciones entre módulos |
| **Whimsy Injector** | Microinteracciones: animaciones, easter eggs, gamificación, companion character, celebraciones de progreso |
| **EdTech LMS Specialist** | Templates LMS: estructura de módulos en Canvas/Moodle, configuración de actividades, rúbricas en plataforma, paquetes SCORM/xAPI si aplica |

### Entregables

```
assets_{curso}/
├── brand_guidelines.md           ← Brand: paleta, tipografía, CSS vars
├── ui_components.md              ← UI: layout, componentes, responsive
├── visual_narrative.md           ← Storyteller: concepto creativo
├── whimsy_elements.md            ← Whimsy: microinteracciones
├── design_system/                ← CSS, iconos, assets gráficos
├── lms_templates/                ← EdTech: templates para Canvas/Moodle
└── scorm_packages/               ← EdTech: paquetes interoperables

```

---

## 🔧 Fase 7: Ensamble & Publicación

**Agentes:** Frontend Developer + DevOps Automator + EdTech LMS Specialist + Code Reviewer **Input:** Contenido producido + Assets + Templates **Output:** Curso publicado en sitio independiente y/o LMS

### Ruta A: Sitio Independiente (GitHub Pages / Hosting propio)

| Agente | Tarea |
| --- | --- |
| **Frontend Developer** | Implementar mini sitio SPA: HTML/CSS/JS, responsive, WCAG AA, assets embebidos, hash routing |
| **DevOps Automator** | CI/CD: deploy automático a GitHub Pages, dominio custom, SSL, monitoring |
| **Code Reviewer** | Revisión de calidad: performance, accesibilidad, seguridad, SEO básico |

### Ruta B: Integración en LMS

| Agente | Tarea |
| --- | --- |
| **EdTech LMS Specialist** | Configurar curso en Canvas/Moodle/Blackboard: módulos, actividades, rúbricas, learning paths, analytics. Paquetes SCORM/xAPI. Integraciones LTI 1.3 |
| **Code Reviewer** | Verificar interoperabilidad, estándares y accesibilidad |

### Ruta C: Híbrida (ambas)

Sitio independiente como landing page + vitrina, LMS como plataforma de entrega y evaluación.

### Entregables

```
publicacion_{curso}/
├── sitio/                        ← Ruta A: mini sitio deployado
│   ├── index.html
│   ├── css/ js/ images/
│   └── deploy_url.txt
├── lms/                          ← Ruta B: curso en plataforma
│   ├── export_scorm.zip
│   ├── config_lms.md
│   └── analytics_setup.md
└── qa_checklist.md               ← Code Reviewer: validación final

```

### Gate de salida

✅ QA aprobado: responsive, accesible (WCAG AA), contenido verificado, links funcionales, rúbricas configuradas.

---

## 📢 Fase 8: Campaña de Marketing & Venta

**Agentes:** Growth Hacker + Email Marketing Strategist + Ad Creative Strategist + Proposal Strategist + Deal Strategist **Input:** Curso publicado + Brief estratégico (persona, pricing) **Output:** `campana_mkt_{curso}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Growth Hacker** | Estrategia de adquisición: funnel de conversión (awareness → interest → registration → enrollment), canales, viral loops, referral program, métricas (CAC, LTV, conversion rate) |
| **Email Marketing Strategist** | Secuencias de email: welcome, nurture, countdown, post-purchase. Segmentación por audiencia. Exit conditions. Deliverability setup (SPF/DKIM/DMARC) |
| **Ad Creative Strategist** | Creativos para paid media: RSA sets para Google Ads, assets para Meta Ads (carousels, video, single image), copy por plataforma. A/B testing plan |
| **Proposal Strategist** | (Si B2B/institucional) Propuesta de valor para empresas/universidades que quieran comprar licencias grupales. Win themes, executive summary, pricing tiers |
| **Deal Strategist** | (Si B2B) Pipeline de venta: MEDDPICC para deals institucionales, Challenger teaching pitch para decision makers académicos |

### Entregables

```
campana_mkt_{curso}/
├── funnel_strategy.md            ← Growth: funnel completo con métricas
├── email_sequences/              ← Email: secuencias por segmento
│   ├── welcome_series.md
│   ├── nurture_series.md
│   └── countdown_launch.md
├── paid_media/                   ← Ads: creativos por plataforma
│   ├── google_rsa_headlines.md
│   ├── meta_ad_sets.md
│   └── ab_test_plan.md
├── propuesta_b2b.md              ← Proposal: si venta institucional
└── pricing_tiers.md              ← Growth + PM: modelo de pricing

```

---

## 📱 Fase 9: Promoción en Social Media & PR

**Agentes:** Social Media Strategist + Content Creator + SEO Specialist + Brand Guardian **Input:** Campaña de MKT + Assets del curso **Output:** `social_media_{curso}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Social Media Strategist** | Estrategia de lanzamiento: calendario de publicaciones (pre-launch, launch day, post-launch), plataformas (LinkedIn, Instagram, TikTok, X), hashtags, influencer outreach, community engagement |
| **Content Creator** | Producir contenido social: carousels educativos, reels/shorts con snippets del curso, threads, blog posts de preview, testimoniales |
| **SEO Specialist** | Optimización orgánica: landing page SEO (title, meta, schema markup), blog posts keyword-targeted, content cluster strategy para posicionamiento de long tail |
| **Brand Guardian** | Auditar que toda comunicación externa cumpla con brand guidelines institucional. Consistencia visual y de tono |

### Entregables

```
social_media_{curso}/
├── calendario_social.md          ← Strategist: calendario 30 días
├── contenido_social/             ← Creator: posts, carousels, reels
│   ├── linkedin/
│   ├── instagram/
│   ├── tiktok/
│   └── blog/
├── seo_strategy.md               ← SEO: keywords, schema, content cluster
├── influencer_outreach.md        ← Strategist: lista de contactos
└── brand_audit.md                ← Brand: validación de consistencia

```

---

## 📊 Matriz de Agentes por Fase

| Fase | Agentes Involucrados | Modo |
| --- | --- | --- |
| 1. Definición Estratégica | Product Manager, Trend Researcher, Psychologist | Secuencial |
| 2. Investigación & Fuentes | Research Synthesist, Trend Researcher, AI Literacy Coach | Paralelo |
| 3. Diseño Curricular | Curriculum Designer, DI DUA, Digital Skills Assessment | Secuencial → Paralelo |
| 4. Curación de Contenido | Research Synthesist, Content Creator, Narratologist | Paralelo |
| 5. Producción de Contenido | Content Creator, Technical Writer, Prompt Engineer, Image Prompt Engineer, Video Coach | Paralelo |
| 6. Construcción de Assets | Brand Guardian, UI Designer, Visual Storyteller, Whimsy Injector, EdTech LMS | Paralelo |
| 7. Ensamble & Publicación | Frontend Developer, DevOps Automator, EdTech LMS, Code Reviewer | Secuencial |
| 8. Campaña MKT & Venta | Growth Hacker, Email Strategist, Ad Creative, Proposal, Deal Strategist | Paralelo |
| 9. Promoción Social | Social Media Strategist, Content Creator, SEO Specialist, Brand Guardian | Paralelo |

**Total: 24 agentes especializados a lo largo de 9 fases**

---

## ⚡ Reglas del Pipeline

1. **Gate de salida obligatorio** entre fases 1→2 (Go/No-Go) y 6→7 (QA)
2. **URLs verificadas** — toda URL generada por LLM se valida con `url_fetch` o browser
3. **Sin texto en imágenes IA** — overlays HTML/CSS para todo texto sobre imágenes generadas
4. **Fuentes con ponderación** — cada fuente incluida lleva calificación de calidad y vigencia
5. **Rúbricas antes del contenido** — las rúbricas se diseñan en Fase 3, ANTES de producir contenido en Fase 5
6. **Brand audit en cada salida visual** — Brand Guardian revisa antes de publicar
7. **Assessment auténtico** — ninguna evaluación es solo opción múltiple; incluir tareas situadas y portafolios

---

## 🔁 Ciclo de Mejora Continua (Post-Publicación)

```
Feedback estudiantes → Psychologist + Feedback Synthesizer
     ↓
Analytics de uso → EdTech LMS Specialist (learning analytics)
     ↓
Actualización de contenido → Research Synthesist + Content Creator
     ↓
Optimización de campaña → Growth Hacker + Email Strategist
     ↓
Siguiente iteración del curso (v2, v3...)

```

---

## 🚀 Quick Start

Para iniciar un nuevo curso, ejecuta:

```
1. @Product Manager → "Define el brief estratégico para un curso de [TEMA] dirigido a [AUDIENCIA]"
2. @Trend Researcher → "Valida la demanda de mercado para un curso de [TEMA] en [REGIÓN/NIVEL]"
3. Gate: Go/No-Go con evidencia
4. Lanzar pipeline completo Fases 2-9

```

