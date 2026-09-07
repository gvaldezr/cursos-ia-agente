# 📋 Estado del Proyecto — IA Práctica para Líderes Anáhuac
> **Última actualización:** 7 de septiembre de 2026, 2:30 PM CST
> **Repo:** `cursos-ia-agente` en GitHub (gvaldezr/cursos-ia-agente)
> **GitHub Pages:** https://gvaldezr.github.io/cursos-ia-agente/

---

## 🚦 Estado del Pipeline (9 Fases)

| Fase | Estado | Archivos | Carpeta |
|------|--------|----------|---------|
| ✅ Fase 1 — Definición Estratégica | **Completa** | 10 | `fase1-definicion-estrategica/` |
| ✅ Fase 2 — Investigación & Fuentes | **Completa** | 9 | `fase2-investigacion-fuentes/` |
| ✅ Fase 3 — Diseño Curricular | **Completa** | 9 | `fase3-diseno-curricular/` |
| ✅ Fase 4 — Curación de Contenido | **Completa** | 5 | `fase4-curacion-contenido/` |
| ✅ Fase 5 — Producción de Contenido | **Completa** | 14 | `fase5-produccion-contenido/` |
| ✅ Fase 6 — Construcción de Assets | **Completa** | 5 | `fase6-construccion-assets/` |
| ✅ Fase 7 — Ensamble & Publicación | **Completa** | 13 | `docs/` (mini sitio) |
| ⬜ Fase 8 — Campaña MKT & Venta | **SIGUIENTE** | — | `fase8-campana-mkt/` |
| ⬜ Fase 9 — Promoción Social | Pendiente | — | `fase9-promocion-social/` |

**Total producido: 65 archivos + README + .gitignore + docs auxiliares**

---

## 🆕 Avance del 7 de septiembre de 2026

### Fase 6 — Construcción de Assets (completada)
5 agentes trabajaron en paralelo:

| Agente | Entregable | Tamaño |
|--------|-----------|--------|
| Brand Guardian Anáhuac Mayab | `fase6_brand_design_system.md` — Tokens CSS, dark mode, paleta semántica, iconografía, checklist auditoría | 59 KB |
| UI Designer | `fase6_ui_components.md` — Layout system, cards, navegación, progress tracker, responsive, WCAG AA | 64 KB |
| Visual Storyteller | `fase6_visual_narrative.md` — Metáfora "El Observatorio", journey visual, 8 iconos, 3 badges | 36 KB |
| Whimsy Injector | `fase6_whimsy_elements.md` — 15 microinteracciones, celebraciones, easter eggs, gamificación sutil | 46 KB |
| EdTech LMS Specialist | `fase6_lms_templates.md` — Templates Canvas, SCORM/xAPI, Open Badges v3, learning analytics | 42 KB |

### Fase 7 — Mini Sitio SPA (completada)
Sitio web funcional en `docs/` para GitHub Pages:

```
docs/
├── index.html              (10.8 KB)  — Shell SPA
├── css/styles.css          (52+ KB)   — Design system completo Anáhuac Mayab
├── js/app.js               (41+ KB)   — Router SPA + interacciones
├── assets/
│   ├── logo-anahuac.svg    (0.3 KB)   — Logo placeholder
│   └── favicon.svg         (Sprint 4) — Favicon Anáhuac
└── contenido/
    ├── nivel-1.html        — Fundamentos de IA Generativa
    ├── nivel-2.html        — Frameworks de Prompts
    ├── nivel-3.html        — Email y Comunicados Institucionales
    ├── nivel-4.html        — Análisis de Reportes con IA
    ├── nivel-5.html        — Automatización de Procesos Directivos
    ├── nivel-6.html        — Atención a Stakeholders con IA
    ├── nivel-7.html        — Gestión de Proyectos con IA
    └── nivel-8.html        — Agentes y Equipo Local de IA
```

**Características del sitio:**
- SPA con hash routing (#home, #nivel-1 a #nivel-8, #progreso, #recursos)
- Carga dinámica de contenido vía fetch() con fallback
- Version picker Académica / Administrativa (persiste en localStorage)
- Progress tracker con 3 badges Open Badges
- 34 bloques de prompt con botón "Copiar"
- Dark mode automático (prefers-color-scheme)
- Responsive mobile-first (640/768/1024/1280)
- WCAG AA: skip link, focus rings, keyboard nav, ARIA labels
- Microinteracciones: tooltips, acordeones, skeleton loading, celebraciones de progreso, badge animations, easter egg

### Auditoría Integral (5 auditores especializados)
Se ejecutó una auditoría completa con 5 agentes:

| Auditor | Enfoque | Hallazgos |
|---------|---------|-----------|
| AI Literacy Coach | Contenido: precisión técnica, tono, progresión | 🔴 9 · 🟡 13 · 🟢 11 |
| Curriculum Designer | Curricular: Bloom, rúbricas, SATCA, backward design | 🔴 2 · 🟡 8 · 🟢 13 |
| UI Designer | UX/UI: consistencia visual, accesibilidad, branding | 🔴 4 · 🟡 12 · 🟢 9 |
| ArchitectUX | Frontend: router, fetch, seguridad, performance | 🔴 2 · 🟡 6 · 🟢 9 |
| Whimsy Injector | Deleite: microinteracciones implementadas vs diseñadas | 🔴 11 · 🟡 13 · 🟢 12 |

**Totales: 🔴 28 · 🟡 52 · 🟢 54 = 134 hallazgos**

### Plan de Remediación (4 Sprints ejecutados)

| Sprint | Enfoque | Tareas | Estado |
|--------|---------|:------:|:------:|
| ✅ Sprint 1 | Críticos inmediatos: WCAG AA, errores factuales, seguridad, SATCA | 8/8 | Completo |
| ✅ Sprint 2 | Estructurales: CSS faltante, Observer, dark mode, Bloom, pesos eval | 9/9 | Completo |
| ✅ Sprint 3 | Microinteracciones: tooltips, acordeones, skeleton, celebraciones, badges, easter egg | 7/7 | Completo |
| ⏳ Sprint 4 | Polish: tuteo en prompts, meta tags, favicon, print styles, dead code | 8 | En ejecución |

**Remediaciones aplicadas:**
- Contrastes WCAG AA corregidos (botón, footer, locked levels)
- "No busca en internet" actualizado para modelos 2025-2026
- Definición de RAG corregida con advertencia de fabricación
- Redundancia agentes N5/N8 clarificada
- innerHTML sanitizado con DOMParser
- initCopyButtons deduplicada
- Títulos de módulos unificados
- Créditos SATCA corregidos (6.5)
- 6 clases CSS faltantes agregadas
- IntersectionObserver con cleanup
- Focus management real
- Dark mode completado
- Tokens semánticos de spacing
- RCTF/RTF unificado
- Pesos de evaluación estandarizados (35/25/25/15)
- Tooltips, acordeones, skeleton, celebraciones, badges, easter egg implementados

---

## 📁 Inventario Completo de Archivos

### Fase 1 — Definición Estratégica (10 archivos)
- `fase1_pm_product_brief.md` — Brief del producto
- `fase1_pm_estructura_modular.md` — Estructura de 8 módulos
- `fase1_pm_entregables_participante.md` — Banco de prompts + flujo de reportes
- `fase1_trend_market_validation.md` — Validación de mercado
- `fase1_trend_skills_demand.md` — Skills en demanda
- `fase1_coach_framework_pedagogico.md` — Framework UNESCO/Stanford/RAIL-Ed
- `fase1_coach_diferenciacion_versiones.md` — Tabla acad vs admin
- `fase1_coach_principios_diseno.md` — Principios para directivos
- `fase1_brand_directrices_comunicacion.md` — Tono, vocabulario, naming
- `fase1_brand_visual_guidelines.md` — Paleta, tipografía, componentes

### Fase 2 — Investigación & Fuentes (9 archivos)
- `fase2_fuentes_modulo_1_4.md` — Fuentes verificadas módulos 1-4
- `fase2_fuentes_modulo_5_8.md` — Fuentes verificadas módulos 5-8
- `fase2_bibliografia_anotada.md` — Bibliografía con calificaciones
- `fase2_herramientas_por_modulo.md` — Herramientas comparadas
- `fase2_casos_exito.md` — Casos de universidades con IA
- `fase2_frameworks_prompts.md` — RISE, CRISPE, RCTF, etc.
- `fase2_ejercicios_version_academica.md` — Ejercicios versión académica
- `fase2_ejercicios_version_administrativa.md` — Ejercicios versión administrativa
- `fase2_banco_prompts_base.md` — 40 prompts base

### Fase 3 — Diseño Curricular (9 archivos)
- `fase3_plan_estudios.md` — Plan formal con competencias y créditos SATCA (6.5)
- `fase3_cartas_descriptivas.md` — 8 cartas descriptivas con Bloom
- `fase3_mapa_competencias.md` — Matriz PLO→CLO→evidencia→instrumento
- `fase3_secuencias_academica.md` — Secuencias didácticas versión académica
- `fase3_secuencias_administrativa.md` — Secuencias didácticas versión administrativa
- `fase3_productos_integradores.md` — Producto integrador por módulo
- `fase3_assessment_blueprint.md` — Blueprint de evaluación (35/25/25/15)
- `fase3_rubricas.md` — Rúbricas analíticas ×8 módulos
- `fase3_micro_credenciales.md` — Open Badges stackables

### Fase 4 — Curación de Contenido (5 archivos)
- `fase4_mapa_fuentes_curadas.md` — Fuentes definitivas verificadas
- `fase4_lecturas_resumen.md` — Resúmenes ejecutivos de lecturas
- `fase4_arco_narrativo.md` — Three-act structure (Descubrimiento→Dominio→Liderazgo)
- `fase4_calendario_contenido.md` — Plan de producción (~139h)
- `fase4_guia_estilo_contenido.md` — Guía de estilo + glosario

### Fase 5 — Producción de Contenido (14 archivos)
- `fase5_modulo_01_conceptos.md` a `fase5_modulo_08_agentes_equipo.md` — 8 módulos completos
- `fase5_tutorial_amazon_quick.md` — Tutorial de Amazon Quick
- `fase5_tutorial_prompts_avanzados.md` — Guía de prompts avanzados
- `fase5_tutorial_agentes_flujos.md` — Guía de agentes y flujos
- `fase5_banco_prompts_academico.md` — 25 prompts académicos
- `fase5_banco_prompts_administrativo.md` — 25 prompts administrativos
- `fase5_flujo_reportes_template.md` — Template del flujo de reportes

### Fase 6 — Construcción de Assets (5 archivos)
- `fase6_brand_design_system.md` — Design system completo (59 KB)
- `fase6_ui_components.md` — Componentes UI responsive (64 KB)
- `fase6_visual_narrative.md` — Narrativa visual "El Observatorio" (36 KB)
- `fase6_whimsy_elements.md` — Microinteracciones y deleite (46 KB)
- `fase6_lms_templates.md` — Templates LMS y Open Badges (42 KB)

### Fase 7 — Mini Sitio (docs/) (13 archivos)
- `index.html` — Shell SPA
- `css/styles.css` — Design system Anáhuac Mayab (~52 KB)
- `js/app.js` — Router + vistas + interacciones (~41 KB)
- `assets/logo-anahuac.svg` — Logo placeholder
- `assets/favicon.svg` — Favicon (Sprint 4)
- `contenido/nivel-1.html` a `contenido/nivel-8.html` — 8 módulos HTML

### Docs auxiliares
- `FLUJO_PRODUCCION_CURSOS.md` — Pipeline de 9 fases
- `ESTADO_PROYECTO.md` — Este archivo
- 4 perfiles de agentes (curriculum, AI literacy, digital skills, edtech)

---

## 🤖 Agentes Involucrados (~48 agentes en la cuenta)

### Usados en este proyecto:
**Fases 1-5:** Product Manager, Trend Researcher, AI Literacy Coach, Brand Guardian Anáhuac Mayab, Research Synthesist, Content Creator, Narratologist, Curriculum Designer Universitario, Diseñador Instruccional DUA, Digital Skills Assessment Specialist, Technical Writer, Prompt Engineer

**Fase 6:** Brand Guardian Anáhuac Mayab, UI Designer, Visual Storyteller, Whimsy Injector, EdTech LMS Specialist

**Fase 7:** Frontend Developer (ArchitectUX)

**Auditoría:** AI Literacy Coach, Curriculum Designer, UI Designer, ArchitectUX, Whimsy Injector

**Remediación:** Los mismos 5 auditores aplicando sus propias correcciones

### Nota importante:
Todos los agentes están como **borradores locales** (no publicados).

---

## 🔜 Siguiente Paso

**Fase 8: Campaña MKT & Venta** — Growth Hacker, Email Marketing Strategist, Ad Creative Strategist crean funnel de venta, secuencia de emails, y creativos para paid media.

---

## 📝 Decisiones clave tomadas

1. **Dos versiones**: académica y administrativa (mismos conceptos, diferentes ejercicios)
2. **Branding**: Anáhuac Mayab — #FF5900 naranja, #432F64 púrpura, Manrope + Roboto
3. **Tono**: formal (usted), ejecutivo, pragmático — sin tecnicismos innecesarios
4. **Herramienta principal**: Amazon Quick (con referencias a ChatGPT/Gemini)
5. **Entregables del participante**: banco de 25 prompts + flujo de reportes manual
6. **Formato**: Mini sitio HTML autocontenido (SPA, responsive, WCAG AA)
7. **Assessment**: auténtico (haciendo, no exámenes), 3 badges stackables Open Badges
8. **Arco narrativo**: Three-Act — Descubrimiento→Dominio→Liderazgo
9. **Metáfora visual**: "El Observatorio" — ascenso del directivo
10. **Créditos SATCA**: 6.5 (corregido de 7.5 tras auditoría)
11. **Pesos evaluación**: 35% entregables intermedios / 25% flujo / 25% banco / 15% participación
12. **Framework de prompting canónico**: RCTF (Rol-Contexto-Tarea-Formato)
13. **Deploy**: GitHub Pages desde carpeta `/docs`
