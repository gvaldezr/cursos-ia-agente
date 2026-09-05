# Directrices Visuales para el Mini Sitio — IA Práctica para Líderes Anáhuac

> **Brand Guardian Anáhuac Mayab** · Fuente de verdad: merida.anahuac.mx
> Versión 1.0 · Septiembre 2026

---

## 1. Paleta de Colores — Contexto Educativo Ejecutivo

### 1.1 Tokens CSS base (del sitio oficial)

```css
:root {
  /* Primarios */
  --ana-primary:        #FF5900;   /* Naranja marca — CTAs, acentos, enlaces activos */
  --ana-primary-hover:  #FF7900;   /* Hover naranja — MÁS CLARO, nunca más oscuro */
  --ana-primary-light:  #FFF6F1;   /* Fondo suave naranja — callouts, highlights */

  /* Institucional secundario */
  --ana-tertiary:       #432F64;   /* Púrpura institucional — acentos, badges, headers */
  --ana-tertiary-hover: #5D428C;   /* Hover púrpura */
  --ana-tertiary-light: #F5F2F9;   /* Fondo suave púrpura (derivado) */

  /* Neutros */
  --ana-dark:           #231F20;   /* Texto principal */
  --ana-gray:           #6F6F6F;   /* Texto secundario, labels, captions */
  --ana-gray-light:     #F3F3F1;   /* Fondos claros, separadores */
  --ana-inactive:       #EAEAEA;   /* Bordes, estados inactivos */
  --ana-white:          #FFFFFF;   /* Superficie de cards, fondo principal */
  --ana-black:          #000000;   /* Overlays */
  --ana-footer-gray:    #A3A9AB;   /* Texto footer, metadata */

  /* Semánticos */
  --ana-error:          #DC2626;   /* Errores — ROJO, nunca naranja */
  --ana-success:        #2D8A39;   /* Confirmaciones, completado */
  --ana-warning:        #D97706;   /* Advertencias (ámbar, no naranja marca) */
  --ana-info:           #432F64;   /* Información — usar púrpura institucional */

  /* Sombra */
  --ana-shadow:         0px 3px 8px rgba(135, 135, 135, 0.5);
  --ana-shadow-sm:      0px 1px 3px rgba(135, 135, 135, 0.25);
  --ana-shadow-lg:      0px 6px 16px rgba(135, 135, 135, 0.35);

  /* Radius */
  --ana-radius-sm:      5px;      /* Botones, inputs */
  --ana-radius-md:      8px;      /* Cards */
  --ana-radius-lg:      12px;     /* Modals, contenedores grandes */
  --ana-radius-full:    9999px;   /* Chips, badges, avatares */
}
```

### 1.2 Paleta extendida para contenido educativo

Tokens adicionales derivados de la paleta base, específicos para el curso:

```css
:root {
  /* Fondos de contenido educativo */
  --ana-bg-page:        #FAFAFA;   /* Fondo general de página (no blanco puro) */
  --ana-bg-section:     #FFFFFF;   /* Fondo de secciones de contenido */
  --ana-bg-prompt:      #F8F7F5;   /* Fondo de bloques de instrucción/prompt */
  --ana-bg-exercise:    #FFF6F1;   /* Fondo de ejercicios (naranja suave) */
  --ana-bg-theory:      #F5F2F9;   /* Fondo de callouts teóricos (púrpura suave) */

  /* Bordes de contenido */
  --ana-border-prompt:  #E8E5E0;   /* Borde de bloques de prompt */
  --ana-border-card:    #EAEAEA;   /* Borde de cards */

  /* Progress / Niveles */
  --ana-level-complete:    #2D8A39;   /* Nivel completado — verde */
  --ana-level-current:     #FF5900;   /* Nivel actual — naranja */
  --ana-level-locked:      #EAEAEA;   /* Nivel bloqueado — gris inactivo */
  --ana-level-locked-text: #A3A9AB;   /* Texto de nivel bloqueado */
}
```

### 1.3 Proporción de uso cromático

**Regla 60-25-10-5 para el mini sitio:**

```
████████████████████████████████████████████████  60%  Blanco / Gris claro
                                                       (#FFFFFF, #FAFAFA, #F3F3F1)

████████████████████████                          25%  Gris oscuro / Texto
                                                       (#231F20, #6F6F6F)

██████████                                        10%  Naranja #FF5900
                                                       (CTAs, enlaces, progreso, acentos)

█████                                              5%  Púrpura #432F64
                                                       (badges, headers de sección, info)
```

**Aplicación concreta:**

| Elemento | Color | Razón |
|---|---|---|
| Fondo de página | #FAFAFA | Base neutra, no compite con contenido |
| Cards de nivel | #FFFFFF con borde #EAEAEA | Superficie limpia, elevación con sombra |
| Títulos H1 | #231F20 | Peso visual máximo |
| Títulos H2 de sección | #432F64 (púrpura) | Diferencia jerarquía sin usar naranja |
| Número de nivel en card | #FF5900 | Acento naranja que guía el ojo |
| Barra de progreso (fill) | #FF5900 | Motivacional, consistente con marca |
| Barra de progreso (track) | #EAEAEA | Fondo neutro |
| Botones primarios | bg #FF5900, texto #FFFFFF | CTA principal |
| Botones secundarios | borde #FF5900, texto #FF5900, bg transparente | Acción secundaria |
| Enlaces en texto | #FF5900, hover #FF7900 | Consistente con sitio oficial |
| Badges de nivel | bg #432F64, texto #FFFFFF | Elegancia, diferenciación |
| Callout teórico | Borde izquierdo #432F64, fondo #F5F2F9 | Identifica contenido conceptual |
| Callout práctico | Borde izquierdo #FF5900, fondo #FFF6F1 | Identifica ejercicios |
| Indicador completado | #2D8A39 (verde) | Semántica universal de éxito |
| Error / alerta | #DC2626 (rojo) | NUNCA naranja para errores |

### 1.4 Lo que este diseño NO debe parecer

| ❌ Evitar | ✅ En su lugar |
|---|---|
| Landing page de startup (fondos degradado naranja completo, CTAs gigantes) | Interfaz académica sobria con acentos naranja puntuales |
| Dashboard corporativo frío (todo gris, sin personalidad) | Calidez institucional con naranja y púrpura estratégicos |
| Plataforma gamificada (colores brillantes, animaciones excesivas) | Progresión visual seria con indicadores claros |
| Diseño genérico sin marca (plantilla Bootstrap sin customizar) | Identidad Anáhuac Mayab reconocible en cada elemento |

---

## 2. Tipografía

### 2.1 Familias tipográficas

```css
:root {
  /* Fuente de display/títulos */
  --ana-font-display: 'Sharp-Bold', 'Manrope', 'Roboto', sans-serif;

  /* Fuente de cuerpo */
  --ana-font-body: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Fuente monoespaciada (para bloques de prompt/instrucción) */
  --ana-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;
}
```

**Notas de implementación:**
- **Sharp-Bold** es propietaria de HubSpot/Anáhuac. Para el mini sitio interno, cargarla como webfont local si se cuenta con la licencia.
- **Fallback primario:** Manrope (Google Fonts, gratuita) — es la alternativa del brandbook de Anáhuac Online.
- **Fallback secundario:** Roboto Bold para títulos si ninguna de las anteriores está disponible.
- **Para bloques de prompt:** JetBrains Mono (gratuita, legible) o Fira Code.

### 2.2 Escala tipográfica

Sistema modular basado en ratio 1.25 (Major Third), optimizado para lectura en pantalla:

```css
/* Escala tipográfica */
.ana-display-xl  { font: 700 40px/1.1 var(--ana-font-display); letter-spacing: -0.02em; }
.ana-display     { font: 700 32px/1.15 var(--ana-font-display); letter-spacing: -0.01em; }
.ana-h1          { font: 700 28px/1.2 var(--ana-font-display); }
.ana-h2          { font: 700 24px/1.25 var(--ana-font-display); }
.ana-h3          { font: 700 20px/1.3 var(--ana-font-body); }
.ana-h4          { font: 600 18px/1.35 var(--ana-font-body); }
.ana-body        { font: 400 18px/1.6 var(--ana-font-body); color: var(--ana-dark); }
.ana-body-sm     { font: 400 16px/1.5 var(--ana-font-body); color: var(--ana-gray); }
.ana-caption     { font: 300 14px/1.4 var(--ana-font-body); color: var(--ana-gray); }
.ana-label       { font: 500 14px/1.3 var(--ana-font-body); color: var(--ana-gray);
                   text-transform: uppercase; letter-spacing: 0.05em; }
.ana-prompt      { font: 400 16px/1.6 var(--ana-font-mono); color: var(--ana-dark); }
.ana-code-inline { font: 400 15px/1.4 var(--ana-font-mono); color: var(--ana-tertiary);
                   background: var(--ana-gray-light); padding: 2px 6px;
                   border-radius: 3px; }
```

### 2.3 Jerarquía de aplicación en el curso

| Nivel | Clase | Uso | Ejemplo |
|---|---|---|---|
| Display XL | `.ana-display-xl` | Hero del curso (solo 1 por página) | "IA Práctica para Líderes Anáhuac" |
| Display | `.ana-display` | Título de nivel/módulo | "Nivel 3. IA para el Análisis y la Síntesis" |
| H1 | `.ana-h1` | Título de sección principal dentro de un nivel | "Diseño de instrucciones para análisis de datos" |
| H2 | `.ana-h2` | Subsección | "Estructura de una instrucción analítica" |
| H3 | `.ana-h3` | Título de card, ejercicio, recurso | "Ejercicio 3.2: Análisis de indicadores" |
| H4 | `.ana-h4` | Label de grupo, categoría | "Recursos complementarios" |
| Body | `.ana-body` | Texto de contenido principal | Párrafos de explicación |
| Body SM | `.ana-body-sm` | Descripción breve, metadata | "Duración estimada: 15 minutos" |
| Caption | `.ana-caption` | Notas al pie, fuentes, timestamps | "Fuente: McKinsey, 2025" |
| Label | `.ana-label` | Categorías, etiquetas | "NIVEL 3" · "EJERCICIO PRÁCTICO" |
| Prompt | `.ana-prompt` | Bloques de instrucción para el modelo de IA | "Analice los siguientes datos..." |
| Code inline | `.ana-code-inline` | Términos técnicos en línea | "Utilice el parámetro `temperatura`" |

### 2.4 Máximos de línea

- **Contenido principal:** max-width 680px (ideal para legibilidad de párrafos largos)
- **Layout general:** max-width 1200px (contenedor)
- **Cards en grid:** min 300px, max 380px
- **Línea de texto:** No más de 75 caracteres por línea para body text

---

## 3. Componentes Sugeridos

### 3.1 Card de Nivel/Módulo

```
┌─────────────────────────────────────────┐
│  NIVEL 3                    ✓ Completado │  ← Label (.ana-label) + badge
│                                          │
│  IA para el Análisis                     │  ← Título (.ana-h3)
│  y la Síntesis                           │
│                                          │
│  Aprenda a utilizar IA generativa para   │  ← Descripción (.ana-body-sm)
│  sintetizar información compleja y       │
│  extraer insights accionables.           │
│                                          │
│  ████████████░░░░░░░░  60%               │  ← Progress bar
│                                          │
│  [ Continuar nivel → ]                   │  ← CTA button
└─────────────────────────────────────────┘
```

**Especificaciones:**
- Fondo: `--ana-white`
- Borde: `1px solid --ana-inactive`
- Radius: `--ana-radius-md` (8px)
- Sombra: `--ana-shadow-sm` → `--ana-shadow` en hover
- Padding: 24px
- Label "NIVEL N": `--ana-label` en `--ana-tertiary` (púrpura)
- Badge completado: bg `--ana-success`, texto blanco, radius full
- Badge actual: bg `--ana-primary`, texto blanco, radius full
- Badge bloqueado: bg `--ana-inactive`, texto `--ana-footer-gray`, radius full
- Progress bar track: `--ana-inactive`
- Progress bar fill: `--ana-primary` (naranja)
- Transición hover: elevar sombra + border-color `--ana-primary` (sutil, 200ms)

### 3.2 Progress Tracker (horizontal)

```
  ●━━━━━●━━━━━●━━━━━◉━━━━━○━━━━━○━━━━━○━━━━━○━━━━━○
  1     2     3     4     5     6     7     8
  ✓     ✓     ✓   Actual
```

**Especificaciones:**
- Nodo completado (●): bg `--ana-success`, borde `--ana-success`
- Nodo actual (◉): bg `--ana-primary`, borde `--ana-primary`, ring animado sutil
- Nodo pendiente (○): bg `--ana-white`, borde `--ana-inactive`
- Línea completada (━): `--ana-success`
- Línea pendiente (━): `--ana-inactive`
- Tamaño de nodo: 32px × 32px en desktop, 24px × 24px en mobile
- Número dentro del nodo: `.ana-caption` en blanco (completado/actual) o `--ana-gray` (pendiente)
- Label debajo: nombre corto del nivel, `.ana-caption`

### 3.3 Bloque de Instrucción (Prompt Bank)

```
┌── 🔶 ──────────────────────────────────────────┐
│  Instrucción 3.1 — Síntesis de acta directiva   │  ← Título del prompt
│                                                   │
│  ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  │
│  │ Analice el acta de la reunión adjunta e     │  │  ← Bloque mono
│  │ identifique:                                │  │     (.ana-prompt)
│  │ 1. Los tres acuerdos más relevantes         │  │
│  │ 2. Responsables asignados                   │  │
│  │ 3. Fechas compromiso                        │  │
│  │ Presente el resultado en formato de tabla.  │  │
│  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘  │
│                                                   │
│  Resultado esperado: tabla con 3 columnas.        │  ← Nota (.ana-caption)
│                                          [Copiar] │  ← Botón secundario
└───────────────────────────────────────────────────┘
```

**Especificaciones:**
- Contenedor: bg `--ana-bg-prompt` (#F8F7F5), radius `--ana-radius-md`, borde `--ana-border-prompt`
- Acento superior o izquierdo: línea de 3px en `--ana-primary`
- Bloque de texto del prompt: bg `--ana-white`, borde `--ana-border-prompt`, radius `--ana-radius-sm`, padding 16px
- Fuente del prompt: `--ana-font-mono`, 16px
- Botón "Copiar": botón secundario outline, esquina inferior derecha
- Nota de resultado esperado: `.ana-caption`

### 3.4 Sección de Ejercicio Práctico

```
┌─ EJERCICIO PRÁCTICO ────────────────────────────┐
│                                                   │
│  Ejercicio 3.2: Análisis de indicadores           │  ← .ana-h3
│                                                   │
│  Contexto:                                        │  ← .ana-h4
│  Su departamento recibió los indicadores del      │  ← .ana-body
│  último trimestre. Necesita presentar un resumen  │
│  ejecutivo al Comité Directivo.                   │
│                                                   │
│  Tarea:                                           │  ← .ana-h4
│  1. Descargue el archivo de indicadores           │
│  2. Redacte una instrucción para el modelo de IA  │
│  3. Evalúe la respuesta obtenida                  │
│  4. Refine la instrucción si es necesario         │
│                                                   │
│  ┌ Instrucción sugerida ─────────────────────┐    │  ← Prompt block (nested)
│  │ [Bloque de prompt]                         │   │
│  └────────────────────────────────────────────┘   │
│                                                   │
│  ⏱ Duración estimada: 15 minutos                  │  ← .ana-caption
│  📎 Material: indicadores_Q2_2026.xlsx             │
│                                                   │
│  [ Marcar como completado ]                       │  ← CTA
└───────────────────────────────────────────────────┘
```

**Especificaciones:**
- Contenedor: bg `--ana-bg-exercise` (#FFF6F1), radius `--ana-radius-lg`, borde izquierdo 4px `--ana-primary`
- Label superior: `.ana-label` en `--ana-primary`
- Padding: 32px
- Elementos internos siguen las mismas reglas de tipografía

### 3.5 Callout Teórico / Informativo

```
┌─ 🟣 ─────────────────────────────────────────────┐
│  Concepto clave                                    │
│                                                    │
│  La «temperatura» de un modelo de IA controla      │
│  el grado de creatividad en las respuestas.        │
│  Un valor bajo (0.1-0.3) produce respuestas más    │
│  predecibles; un valor alto (0.7-1.0), más         │
│  diversas pero potencialmente menos precisas.      │
└───────────────────────────────────────────────────┘
```

**Especificaciones:**
- Fondo: `--ana-bg-theory` (#F5F2F9)
- Borde izquierdo: 4px `--ana-tertiary` (púrpura)
- Radius: `--ana-radius-md`
- Label: "Concepto clave", "Nota teórica", "Para profundizar" — en `.ana-label`, color `--ana-tertiary`

### 3.6 Tabla de referencia

- Header: bg `--ana-tertiary` (#432F64), texto blanco, font-weight 600
- Filas alternas: `--ana-white` y `--ana-gray-light`
- Bordes: `--ana-inactive`
- Radius del contenedor: `--ana-radius-md`
- Padding de celda: 12px 16px
- Texto: `.ana-body-sm`

---

## 4. Iconografía

### 4.1 Estilo recomendado

**Outline (línea) con peso de 1.5-2px**, consistente con la sobriedad institucional.

| Criterio | Decisión | Razón |
|---|---|---|
| Estilo | Outline (línea) | Profesional, limpio, no compite con el contenido |
| Peso | 1.5px - 2px | Legible en tamaños pequeños (16-24px) |
| Esquinas | Redondeadas (matching radius 5px) | Consistencia con border-radius del sistema |
| Color | Monocromático, hereda color del contexto | No introduce colores nuevos |
| Tamaño base | 20px (inline), 24px (navegación), 32px (feature) | Escala coherente |

### 4.2 Biblioteca recomendada

**Opción principal:** [Lucide Icons](https://lucide.dev/) — set open source, outline consistente, amplio catálogo.
- Peso visual cercano al estilo del sitio oficial de Anáhuac
- Personalizable via stroke-width
- Disponible como SVG inline, React components, o sprite

**Opción alternativa:** [Heroicons](https://heroicons.com/) (Outline variant) — de Tailwind/Vercel, excelente calidad.

### 4.3 Iconos sugeridos por función

| Función | Icono sugerido | Contexto |
|---|---|---|
| Nivel/Módulo | `layers` o `book-open` | Card de nivel |
| Ejercicio | `pencil-line` o `edit-3` | Sección práctica |
| Instrucción/Prompt | `message-square-code` o `terminal` | Bloque de prompt |
| Completado | `check-circle` | Estado de progreso |
| En progreso | `clock` o `loader` | Estado de progreso |
| Bloqueado | `lock` | Nivel no disponible |
| Recurso/Descarga | `file-down` o `download` | Material complementario |
| Tip/Recomendación | `lightbulb` | Callout |
| Concepto clave | `info` (dentro de círculo) | Callout teórico |
| Advertencia | `alert-triangle` | Callout de precaución |
| Duración | `clock` | Metadata de ejercicio |
| IA/Modelo | `brain` o `sparkles` | Referencias a IA |
| Versión académica | `graduation-cap` | Diferenciador |
| Versión administrativa | `briefcase` | Diferenciador |
| Copiar | `copy` | Botón de copiar prompt |
| Navegación anterior | `chevron-left` | Breadcrumb, paginación |
| Navegación siguiente | `chevron-right` | Breadcrumb, paginación |

### 4.4 Reglas de uso

- **Nunca usar iconos solos** sin label de texto (accesibilidad)
- **Excepción:** Iconos universales en UI (✕ cerrar, ← atrás, ☰ menú) pueden ir sin label
- **Color de iconos:** Hereda `currentColor` del padre; no colorear iconos individualmente
- **No mezclar** estilos filled y outline en la misma vista
- **No usar emojis** como sustituto de iconos en la interfaz principal

---

## 5. Espaciado y Layout

### 5.1 Sistema de espaciado

Base: 4px. Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96.

```css
:root {
  --ana-space-xs:   4px;
  --ana-space-sm:   8px;
  --ana-space-md:   16px;
  --ana-space-lg:   24px;
  --ana-space-xl:   32px;
  --ana-space-2xl:  48px;
  --ana-space-3xl:  64px;
  --ana-space-4xl:  96px;
}
```

### 5.2 Aplicación de espaciado

| Contexto | Espaciado |
|---|---|
| Padding interno de card | 24px |
| Gap entre cards en grid | 24px |
| Separación entre secciones | 48-64px |
| Padding de página (desktop) | 48px lateral, 32px vertical |
| Padding de página (mobile) | 16px lateral, 24px vertical |
| Espacio entre título y contenido | 16px |
| Espacio entre párrafos | 16px (margin-bottom) |
| Espacio entre items de lista | 8px |

### 5.3 Breakpoints

```css
/* Mobile first */
--ana-bp-sm:   640px;    /* Mobile grande */
--ana-bp-md:   768px;    /* Tablet */
--ana-bp-lg:   1024px;   /* Desktop */
--ana-bp-xl:   1280px;   /* Desktop ancho */
```

### 5.4 Grid de cards de nivel

- **Desktop (≥1024px):** 4 columnas (2 filas × 4 cards)
- **Tablet (768-1023px):** 2 columnas
- **Mobile (<768px):** 1 columna, stack vertical
- Gap: 24px
- Card min-width: 280px

---

## 6. Dark Mode

### 6.1 Decisión: Sí implementar, con `prefers-color-scheme`

**Razón:** El público directivo usa dispositivos en horarios extendidos. Respetar la preferencia del sistema operativo del usuario es una señal de calidad técnica y consideración. No se ofrece un toggle manual — se adapta automáticamente.

### 6.2 Tokens Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Superficies */
    --ana-bg-page:        #1A1A1A;
    --ana-bg-section:     #242424;
    --ana-bg-prompt:      #2A2A2A;
    --ana-bg-exercise:    #2E2218;   /* Naranja muy sutil sobre oscuro */
    --ana-bg-theory:      #262036;   /* Púrpura muy sutil sobre oscuro */

    /* Texto */
    --ana-dark:           #F0F0F0;   /* Texto principal invertido */
    --ana-gray:           #A0A0A0;   /* Texto secundario */
    --ana-footer-gray:    #707070;

    /* Superficies de componentes */
    --ana-white:          #2A2A2A;   /* Cards, superficie */
    --ana-gray-light:     #333333;   /* Fondos secundarios */
    --ana-inactive:       #444444;   /* Bordes */

    /* Primarios — se mantienen */
    --ana-primary:        #FF5900;   /* Se mantiene — buen contraste sobre oscuro */
    --ana-primary-hover:  #FF7900;   /* Se mantiene */
    --ana-primary-light:  #3D2A1A;   /* Adaptado: naranja sutil sobre oscuro */

    /* Púrpura — ligeramente más claro para contraste */
    --ana-tertiary:       #6B5A9E;   /* Más claro para legibilidad sobre oscuro */
    --ana-tertiary-hover: #7D6DB3;
    --ana-tertiary-light: #2A2340;

    /* Semánticos — se mantienen con leve ajuste */
    --ana-error:          #EF4444;
    --ana-success:        #34D058;
    --ana-warning:        #F59E0B;

    /* Sombras — más sutiles en dark */
    --ana-shadow:         0px 3px 8px rgba(0, 0, 0, 0.4);
    --ana-shadow-sm:      0px 1px 3px rgba(0, 0, 0, 0.3);
    --ana-shadow-lg:      0px 6px 16px rgba(0, 0, 0, 0.5);

    /* Bordes de contenido */
    --ana-border-prompt:  #3D3D3D;
    --ana-border-card:    #3D3D3D;
  }
}
```

### 6.3 Reglas de Dark Mode

1. **Naranja se mantiene idéntico** — #FF5900 tiene buen contraste tanto en claro como en oscuro
2. **Púrpura se aclara ligeramente** — #432F64 → #6B5A9E para legibilidad sobre fondos oscuros
3. **Texto nunca es blanco puro** — usar #F0F0F0 para reducir fatiga visual
4. **Fondo nunca es negro puro** — usar #1A1A1A como base
5. **Imágenes/logos:** Verificar que el logo SVG tenga versión blanca o usar `filter: brightness(0) invert(1)` si es monocromático
6. **Gráficos y diagramas:** Asegurar que funcionen en ambos modos o proporcionar versiones alternas
7. **No toggle manual:** Solo `prefers-color-scheme`. La experiencia sigue la configuración del sistema del usuario.
8. **Probar contraste:** Todos los textos deben cumplir **WCAG AA** (4.5:1 para texto normal, 3:1 para texto grande) en ambos modos

---

## 7. Accesibilidad

### 7.1 Estándares

- **WCAG 2.1 Nivel AA** mínimo
- Contraste naranja #FF5900 sobre blanco: **4.58:1** ✅ (pasa AA para texto grande)
- Contraste naranja sobre oscuro (#1A1A1A): **5.2:1** ✅
- Para texto pequeño sobre blanco donde naranja no pasa AA: usar `--ana-dark` (#231F20) y reservar naranja para elementos grandes o decorativos

### 7.2 Focus states

```css
*:focus-visible {
  outline: 2px solid var(--ana-primary);
  outline-offset: 2px;
  border-radius: var(--ana-radius-sm);
}
```

### 7.3 Reglas adicionales

- Todo elemento interactivo debe ser navegable por teclado
- Imágenes con `alt` descriptivo
- Iconos decorativos con `aria-hidden="true"`
- Iconos funcionales con `aria-label`
- Estructura semántica: `<main>`, `<nav>`, `<section>`, `<article>`
- Skip link: "Ir al contenido principal" como primer elemento focusable

---

## 8. Animaciones y Transiciones

### 8.1 Principios

- **Sutiles y funcionales**, no decorativas
- Duración: 150-300ms
- Easing: `ease-out` para entradas, `ease-in` para salidas
- **No usar animaciones de carga excesivas** — la audiencia es ejecutiva, valora la velocidad

### 8.2 Transiciones permitidas

```css
/* Transición estándar para hovers */
.ana-transition {
  transition: all 200ms ease-out;
}

/* Cards: elevar en hover */
.ana-card:hover {
  box-shadow: var(--ana-shadow);
  border-color: var(--ana-primary);
  transform: translateY(-2px);
  transition: all 200ms ease-out;
}

/* Botones: cambio de fondo */
.ana-btn:hover {
  background: var(--ana-primary-hover);
  transition: background 150ms ease-out;
}

/* Progress bar: llenado suave */
.ana-progress-fill {
  transition: width 500ms ease-out;
}
```

### 8.3 Animaciones prohibidas

- ❌ Parallax scrolling
- ❌ Animaciones de entrada de texto letra por letra
- ❌ Bouncing, shaking, o efectos "playful"
- ❌ Transiciones de más de 500ms
- ❌ Animaciones que bloqueen la interacción
- ❌ `prefers-reduced-motion` debe deshabilitar todas las animaciones no esenciales

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

*Documento generado por Brand Guardian Anáhuac Mayab · Fuente de verdad: merida.anahuac.mx*
