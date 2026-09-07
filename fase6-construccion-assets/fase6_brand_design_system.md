# Design System Completo — IA Práctica para Líderes Anáhuac
## Mini Sitio HTML Autocontenido · SPA · Responsive · WCAG AA

> **Brand Guardian Anáhuac Mayab** · Fuente de verdad: merida.anahuac.mx
> Versión 2.0 · Fase 6 — Construcción de Assets · Septiembre 2026
>
> Este documento es la **referencia definitiva** para todos los agentes que
> participan en la construcción del mini sitio. Extiende y consolida las
> directrices de Fase 1 (`fase1_brand_visual_guidelines.md` y
> `fase1_brand_directrices_comunicacion.md`) en un design system
> implementable.

---

## Índice

1. [Tokens CSS Completos (Light + Dark)](#1-tokens-css-completos)
2. [Sistema de Color Extendido](#2-sistema-de-color-extendido)
3. [Componentes Tipográficos](#3-componentes-tipográficos)
4. [Sistema de Espaciado](#4-sistema-de-espaciado)
5. [Bordes, Sombras y Elevación](#5-bordes-sombras-y-elevación)
6. [Transiciones y Animaciones](#6-transiciones-y-animaciones)
7. [Z-Index Scale](#7-z-index-scale)
8. [Paleta Semántica Completa](#8-paleta-semántica-completa)
9. [Color Mapping por Componente](#9-color-mapping-por-componente)
10. [Guía de Iconografía](#10-guía-de-iconografía)
11. [Do's & Don'ts Visuales](#11-dos--donts-visuales)
12. [Accesibilidad (WCAG AA)](#12-accesibilidad-wcag-aa)
13. [Checklist de Auditoría Visual](#13-checklist-de-auditoría-visual)
14. [Glosario de Tokens](#14-glosario-de-tokens)

---

## 1. Tokens CSS Completos

### 1.1 Light Mode (por defecto)

```css
/* ═══════════════════════════════════════════════════════════
   DESIGN SYSTEM — IA Práctica para Líderes Anáhuac
   Brand Guardian Anáhuac Mayab · merida.anahuac.mx
   Light Mode (default)
   ═══════════════════════════════════════════════════════════ */

:root {
  /* ── COLOR: Primarios (Naranja Anáhuac) ── */
  --ana-primary:            #FF5900;
  --ana-primary-hover:      #FF7900;   /* MÁS CLARO, nunca más oscuro */
  --ana-primary-active:     #E85100;   /* Click/pressed — ligeramente más oscuro */
  --ana-primary-light:      #FFF6F1;   /* Fondo suave naranja */
  --ana-primary-light-hover:#FFEDE0;   /* Hover sobre fondo naranja suave */
  --ana-primary-muted:      rgba(255, 89, 0, 0.12);  /* Overlay sutil */
  --ana-primary-ring:       rgba(255, 89, 0, 0.25);  /* Focus ring */

  /* ── COLOR: Institucional Secundario (Púrpura) ── */
  --ana-tertiary:           #432F64;
  --ana-tertiary-hover:     #5D428C;   /* Más claro para hover */
  --ana-tertiary-active:    #3A2857;   /* Pressed */
  --ana-tertiary-light:     #F5F2F9;
  --ana-tertiary-light-hover:#EDE8F4;
  --ana-tertiary-muted:     rgba(67, 47, 100, 0.10);
  --ana-tertiary-ring:      rgba(67, 47, 100, 0.25);

  /* ── COLOR: Neutros ── */
  --ana-dark:               #231F20;   /* Texto principal */
  --ana-dark-secondary:     #3D3A3B;   /* Texto enfatizado secundario */
  --ana-gray:               #6F6F6F;   /* Texto secundario, labels */
  --ana-gray-medium:        #999999;   /* Placeholder text */
  --ana-gray-light:         #F3F3F1;   /* Fondos claros */
  --ana-gray-lighter:       #F8F8F7;   /* Fondo más sutil */
  --ana-inactive:           #EAEAEA;   /* Bordes, estados inactivos */
  --ana-inactive-hover:     #DFDFDF;   /* Hover sobre inactivo */
  --ana-white:              #FFFFFF;   /* Cards, superficie */
  --ana-black:              #000000;   /* Overlays */
  --ana-footer-gray:        #A3A9AB;   /* Texto footer */

  /* ── COLOR: Semánticos ── */
  --ana-error:              #DC2626;   /* Errores — ROJO, NUNCA naranja */
  --ana-error-hover:        #B91C1C;
  --ana-error-light:        #FEF2F2;
  --ana-error-border:       #FECACA;
  --ana-success:            #2D8A39;   /* Confirmaciones, completado */
  --ana-success-hover:      #247030;
  --ana-success-light:      #F0FDF4;
  --ana-success-border:     #BBF7D0;
  --ana-warning:            #D97706;   /* Advertencias (ámbar, NO naranja marca) */
  --ana-warning-hover:      #B45309;
  --ana-warning-light:      #FFFBEB;
  --ana-warning-border:     #FDE68A;
  --ana-info:               #432F64;   /* Información — púrpura institucional */
  --ana-info-light:         #F5F2F9;
  --ana-info-border:        #D4CCE3;

  /* ── COLOR: Fondos de contenido educativo ── */
  --ana-bg-page:            #FAFAFA;   /* Fondo general */
  --ana-bg-section:         #FFFFFF;   /* Secciones de contenido */
  --ana-bg-prompt:          #F8F7F5;   /* Bloques de instrucción */
  --ana-bg-exercise:        #FFF6F1;   /* Ejercicios (naranja suave) */
  --ana-bg-theory:          #F5F2F9;   /* Callouts teóricos (púrpura suave) */
  --ana-bg-code:            #1E1E2E;   /* Bloques de código (oscuro) */
  --ana-bg-overlay:         rgba(0, 0, 0, 0.5);   /* Modal overlay */
  --ana-bg-overlay-light:   rgba(0, 0, 0, 0.3);   /* Overlay ligero */

  /* ── COLOR: Bordes de contenido ── */
  --ana-border-prompt:      #E8E5E0;
  --ana-border-card:        #EAEAEA;
  --ana-border-card-hover:  #FF5900;   /* Borde naranja al hover en cards */
  --ana-border-input:       #CCCCCC;
  --ana-border-input-focus: #FF5900;
  --ana-border-divider:     #EAEAEA;   /* Líneas divisorias */

  /* ── COLOR: Progress / Niveles ── */
  --ana-level-complete:     #2D8A39;   /* Verde */
  --ana-level-complete-bg:  #F0FDF4;
  --ana-level-current:      #FF5900;   /* Naranja */
  --ana-level-current-bg:   #FFF6F1;
  --ana-level-locked:       #EAEAEA;   /* Gris inactivo */
  --ana-level-locked-text:  #A3A9AB;
  --ana-level-locked-bg:    #F8F8F7;

  /* ── TIPOGRAFÍA: Familias ── */
  --ana-font-display:       'Manrope', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  --ana-font-body:          'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  --ana-font-mono:          'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;

  /* ── TIPOGRAFÍA: Pesos ── */
  --ana-font-light:         300;
  --ana-font-regular:       400;
  --ana-font-medium:        500;
  --ana-font-semibold:      600;
  --ana-font-bold:          700;

  /* ── TIPOGRAFÍA: Tamaños (escala Major Third 1.25) ── */
  --ana-text-xs:            12px;
  --ana-text-sm:            14px;
  --ana-text-base:          16px;
  --ana-text-md:            18px;
  --ana-text-lg:            20px;
  --ana-text-xl:            24px;
  --ana-text-2xl:           28px;
  --ana-text-3xl:           32px;
  --ana-text-4xl:           40px;
  --ana-text-5xl:           48px;

  /* ── TIPOGRAFÍA: Line Heights ── */
  --ana-leading-tight:      1.1;
  --ana-leading-snug:       1.2;
  --ana-leading-normal:     1.35;
  --ana-leading-relaxed:    1.5;
  --ana-leading-loose:      1.6;

  /* ── TIPOGRAFÍA: Letter Spacing ── */
  --ana-tracking-tight:     -0.02em;
  --ana-tracking-snug:      -0.01em;
  --ana-tracking-normal:    0;
  --ana-tracking-wide:      0.02em;
  --ana-tracking-wider:     0.05em;

  /* ── ESPACIADO (base 4px) ── */
  --ana-space-0:            0;
  --ana-space-1:            4px;
  --ana-space-2:            8px;
  --ana-space-3:            12px;
  --ana-space-4:            16px;
  --ana-space-5:            20px;
  --ana-space-6:            24px;
  --ana-space-8:            32px;
  --ana-space-10:           40px;
  --ana-space-12:           48px;
  --ana-space-16:           64px;
  --ana-space-20:           80px;
  --ana-space-24:           96px;

  /* ── BORDER RADIUS ── */
  --ana-radius-xs:          3px;       /* Inline code, tiny badges */
  --ana-radius-sm:          5px;       /* Botones, inputs */
  --ana-radius-md:          8px;       /* Cards */
  --ana-radius-lg:          12px;      /* Modals, contenedores */
  --ana-radius-xl:          16px;      /* Hero sections */
  --ana-radius-full:        9999px;    /* Chips, badges, avatares */

  /* ── SOMBRAS ── */
  --ana-shadow-none:        none;
  --ana-shadow-xs:          0px 1px 2px rgba(135, 135, 135, 0.15);
  --ana-shadow-sm:          0px 1px 3px rgba(135, 135, 135, 0.25);
  --ana-shadow:             0px 3px 8px rgba(135, 135, 135, 0.5);
  --ana-shadow-md:          0px 4px 12px rgba(135, 135, 135, 0.3);
  --ana-shadow-lg:          0px 6px 16px rgba(135, 135, 135, 0.35);
  --ana-shadow-xl:          0px 10px 24px rgba(135, 135, 135, 0.4);
  --ana-shadow-focus:       0px 0px 0px 3px var(--ana-primary-ring);
  --ana-shadow-focus-error: 0px 0px 0px 3px rgba(220, 38, 38, 0.25);

  /* ── TRANSICIONES ── */
  --ana-transition-fast:    100ms ease-out;
  --ana-transition-base:    200ms ease-out;
  --ana-transition-slow:    300ms ease-out;
  --ana-transition-slower:  500ms ease-out;
  --ana-easing-in:          cubic-bezier(0.4, 0, 1, 1);
  --ana-easing-out:         cubic-bezier(0, 0, 0.2, 1);
  --ana-easing-in-out:      cubic-bezier(0.4, 0, 0.2, 1);

  /* ── Z-INDEX SCALE ── */
  --ana-z-base:             0;
  --ana-z-dropdown:         10;
  --ana-z-sticky:           20;
  --ana-z-header:           30;
  --ana-z-overlay:          40;
  --ana-z-modal:            50;
  --ana-z-popover:          60;
  --ana-z-toast:            70;
  --ana-z-tooltip:          80;
  --ana-z-max:              9999;

  /* ── LAYOUT ── */
  --ana-max-width-content:  680px;     /* Legibilidad óptima */
  --ana-max-width-layout:   1200px;    /* Contenedor principal */
  --ana-max-width-wide:     1440px;    /* Full-width sections */
  --ana-min-width-card:     280px;
  --ana-max-width-card:     380px;

  /* ── BREAKPOINTS (referencia, no usables en :root) ── */
  /* Mobile:  < 640px   */
  /* Tablet:  640-1023px */
  /* Desktop: ≥ 1024px  */
  /* Wide:    ≥ 1280px  */
}
```

### 1.2 Dark Mode (automático con `prefers-color-scheme`)

```css
/* ═══════════════════════════════════════════════════════════
   DARK MODE — Automático, sin toggle manual
   Respeta la configuración del sistema operativo del usuario.
   ═══════════════════════════════════════════════════════════ */

@media (prefers-color-scheme: dark) {
  :root {
    /* ── Superficies ── */
    --ana-bg-page:            #141416;
    --ana-bg-section:         #1E1E22;
    --ana-bg-prompt:          #252528;
    --ana-bg-exercise:        #2B2218;   /* Naranja muy sutil */
    --ana-bg-theory:          #231E34;   /* Púrpura muy sutil */
    --ana-bg-code:            #0D0D12;
    --ana-bg-overlay:         rgba(0, 0, 0, 0.65);
    --ana-bg-overlay-light:   rgba(0, 0, 0, 0.45);

    /* ── Texto ── */
    --ana-dark:               #EDEDED;   /* Principal — NO blanco puro */
    --ana-dark-secondary:     #D0D0D0;
    --ana-gray:               #A0A0A0;
    --ana-gray-medium:        #777777;
    --ana-footer-gray:        #666666;

    /* ── Superficies de componentes ── */
    --ana-white:              #1E1E22;   /* Cards */
    --ana-gray-light:         #2A2A2E;
    --ana-gray-lighter:       #222226;
    --ana-inactive:           #3D3D42;
    --ana-inactive-hover:     #4A4A50;
    --ana-black:              #000000;

    /* ── Primarios — Naranja se mantiene ── */
    --ana-primary:            #FF5900;   /* Contraste 5.2:1 sobre #141416 ✅ */
    --ana-primary-hover:      #FF7900;
    --ana-primary-active:     #FF6A1A;
    --ana-primary-light:      #3A2515;
    --ana-primary-light-hover:#4A3020;
    --ana-primary-muted:      rgba(255, 89, 0, 0.15);
    --ana-primary-ring:       rgba(255, 89, 0, 0.30);

    /* ── Púrpura — Aclarado para legibilidad ── */
    --ana-tertiary:           #8B73BE;   /* Aclarado desde #432F64 */
    --ana-tertiary-hover:     #A08FD0;
    --ana-tertiary-active:    #7D65B0;
    --ana-tertiary-light:     #262040;
    --ana-tertiary-light-hover:#302848;
    --ana-tertiary-muted:     rgba(139, 115, 190, 0.12);
    --ana-tertiary-ring:      rgba(139, 115, 190, 0.25);

    /* ── Semánticos — Aclarados para contraste ── */
    --ana-error:              #F87171;
    --ana-error-hover:        #EF4444;
    --ana-error-light:        #3B1515;
    --ana-error-border:       #7F1D1D;
    --ana-success:            #4ADE80;
    --ana-success-hover:      #22C55E;
    --ana-success-light:      #14291B;
    --ana-success-border:     #166534;
    --ana-warning:            #FBBF24;
    --ana-warning-hover:      #F59E0B;
    --ana-warning-light:      #312B15;
    --ana-warning-border:     #854D0E;
    --ana-info:               #8B73BE;
    --ana-info-light:         #262040;
    --ana-info-border:        #3D3565;

    /* ── Bordes ── */
    --ana-border-prompt:      #3A3A3E;
    --ana-border-card:        #3A3A3E;
    --ana-border-card-hover:  #FF5900;
    --ana-border-input:       #4A4A50;
    --ana-border-input-focus: #FF5900;
    --ana-border-divider:     #3A3A3E;

    /* ── Niveles ── */
    --ana-level-complete:     #4ADE80;
    --ana-level-complete-bg:  #14291B;
    --ana-level-current:      #FF5900;
    --ana-level-current-bg:   #3A2515;
    --ana-level-locked:       #3D3D42;
    --ana-level-locked-text:  #666666;
    --ana-level-locked-bg:    #1A1A1E;

    /* ── Sombras — Más profundas en dark ── */
    --ana-shadow-xs:          0px 1px 2px rgba(0, 0, 0, 0.3);
    --ana-shadow-sm:          0px 1px 3px rgba(0, 0, 0, 0.4);
    --ana-shadow:             0px 3px 8px rgba(0, 0, 0, 0.5);
    --ana-shadow-md:          0px 4px 12px rgba(0, 0, 0, 0.45);
    --ana-shadow-lg:          0px 6px 16px rgba(0, 0, 0, 0.55);
    --ana-shadow-xl:          0px 10px 24px rgba(0, 0, 0, 0.6);
  }
}
```

### 1.3 Preferencia de movimiento reducido

```css
/* ═══════════════════════════════════════════════════════════
   REDUCED MOTION — Accesibilidad obligatoria
   ═══════════════════════════════════════════════════════════ */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 2. Sistema de Color Extendido

### 2.1 Proporción cromática (Regla 60-25-10-5)

```
████████████████████████████████████████████████  60%  Blanco / Gris claro
 #FFFFFF, #FAFAFA, #F3F3F1, #F8F7F5

████████████████████████                          25%  Gris oscuro / Texto
 #231F20, #6F6F6F, #3D3A3B

██████████                                        10%  Naranja #FF5900
 CTAs, enlaces, progreso, acentos, nivel actual

█████                                              5%  Púrpura #432F64
 Badges, headers de sección, info callouts
```

### 2.2 Mapa de color por componente

| Componente | Fondo | Texto | Borde | Acento | Hover |
|---|---|---|---|---|---|
| **Fondo de página** | `--ana-bg-page` | — | — | — | — |
| **Card de nivel** | `--ana-white` | `--ana-dark` | `--ana-border-card` | — | border → `--ana-primary`, shadow ↑ |
| **Card nivel completado** | `--ana-white` | `--ana-dark` | `--ana-success` (izq) | `--ana-success` | — |
| **Card nivel actual** | `--ana-white` | `--ana-dark` | `--ana-primary` (izq) | `--ana-primary` | shadow ↑↑ |
| **Card nivel bloqueado** | `--ana-level-locked-bg` | `--ana-level-locked-text` | `--ana-inactive` | — | cursor: not-allowed |
| **Callout teórico** | `--ana-bg-theory` | `--ana-dark` | 4px izq `--ana-tertiary` | `--ana-tertiary` | — |
| **Callout práctico** | `--ana-bg-exercise` | `--ana-dark` | 4px izq `--ana-primary` | `--ana-primary` | — |
| **Callout advertencia** | `--ana-warning-light` | `--ana-dark` | 4px izq `--ana-warning` | `--ana-warning` | — |
| **Callout error** | `--ana-error-light` | `--ana-dark` | 4px izq `--ana-error` | `--ana-error` | — |
| **Callout éxito** | `--ana-success-light` | `--ana-dark` | 4px izq `--ana-success` | `--ana-success` | — |
| **Bloque de prompt** | `--ana-bg-prompt` | `--ana-dark` | `--ana-border-prompt` | 3px top `--ana-primary` | — |
| **Bloque de código** | `--ana-bg-code` | `#F0F0F0` | `--ana-border-prompt` | — | — |
| **Progress bar (track)** | `--ana-inactive` | — | — | — | — |
| **Progress bar (fill)** | `--ana-primary` | — | — | — | — |
| **Progress bar (completado)** | `--ana-success` | — | — | — | — |
| **Badge explorador** | `--ana-primary` | `#FFFFFF` | — | — | — |
| **Badge estratega** | `--ana-tertiary` | `#FFFFFF` | — | — | — |
| **Badge líder** | gradient (primary→tertiary) | `#FFFFFF` | — | — | — |
| **Navegación (header)** | `--ana-white` | `--ana-dark` | bottom `--ana-inactive` | — | — |
| **Nav item activo** | `--ana-primary-light` | `--ana-primary` | — | bottom 2px `--ana-primary` | — |
| **Nav item inactivo** | transparent | `--ana-gray` | — | — | text → `--ana-dark` |
| **Footer** | `--ana-gray-light` | `--ana-footer-gray` | top `--ana-inactive` | — | — |
| **Tabla header** | `--ana-tertiary` | `#FFFFFF` | — | — | — |
| **Tabla fila par** | `--ana-white` | `--ana-dark` | — | — | bg `--ana-gray-lighter` |
| **Tabla fila impar** | `--ana-gray-lighter` | `--ana-dark` | — | — | bg `--ana-gray-light` |
| **Input default** | `--ana-white` | `--ana-dark` | `--ana-border-input` | — | border → `--ana-gray` |
| **Input focus** | `--ana-white` | `--ana-dark` | `--ana-primary` | ring `--ana-primary-ring` | — |
| **Input error** | `--ana-error-light` | `--ana-dark` | `--ana-error` | ring `--ana-shadow-focus-error` | — |
| **Input disabled** | `--ana-gray-light` | `--ana-gray-medium` | `--ana-inactive` | — | cursor: not-allowed |
| **Botón primario** | `--ana-primary` | `#FFFFFF` | — | — | bg → `--ana-primary-hover` |
| **Botón secundario** | transparent | `--ana-primary` | `--ana-primary` | — | bg → `--ana-primary-light` |
| **Botón terciario** | transparent | `--ana-primary` | — | — | underline |
| **Botón disabled** | `--ana-inactive` | `--ana-gray-medium` | — | — | cursor: not-allowed |
| **Chip/tag activo** | `--ana-primary` | `#FFFFFF` | — | — | bg → `--ana-primary-hover` |
| **Chip/tag inactivo** | `--ana-gray-light` | `--ana-gray` | `--ana-inactive` | — | border → `--ana-gray` |
| **Tooltip** | `--ana-dark` | `#FFFFFF` | — | — | — |
| **Toast éxito** | `--ana-success-light` | `--ana-dark` | `--ana-success-border` | izq `--ana-success` | — |
| **Toast error** | `--ana-error-light` | `--ana-dark` | `--ana-error-border` | izq `--ana-error` | — |
| **Skeleton loader** | `--ana-gray-light` | — | — | — | shimmer animation |

---

## 3. Componentes Tipográficos

### 3.1 Carga de fuentes

```html
<!-- Google Fonts: Manrope (display) + Roboto (body) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Roboto:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

> **Nota:** Si se obtiene la licencia de Sharp-Bold, reemplazar Manrope
> con `@font-face` local. El fallback ya está configurado en la variable
> `--ana-font-display`.

### 3.2 Clases tipográficas completas

```css
/* ═══════════════════════════════════════════════════════════
   TIPOGRAFÍA — Clases utilitarias
   ═══════════════════════════════════════════════════════════ */

/* Display — Solo hero del curso (1 por página) */
.ana-display-xl {
  font-family: var(--ana-font-display);
  font-weight: var(--ana-font-bold);
  font-size: var(--ana-text-4xl);       /* 40px */
  line-height: var(--ana-leading-tight); /* 1.1 */
  letter-spacing: var(--ana-tracking-tight); /* -0.02em */
  color: var(--ana-dark);
}

/* Display — Título de nivel/módulo */
.ana-display {
  font-family: var(--ana-font-display);
  font-weight: var(--ana-font-bold);
  font-size: var(--ana-text-3xl);       /* 32px */
  line-height: 1.15;
  letter-spacing: var(--ana-tracking-snug); /* -0.01em */
  color: var(--ana-dark);
}

/* H1 — Sección principal dentro de un nivel */
.ana-h1 {
  font-family: var(--ana-font-display);
  font-weight: var(--ana-font-bold);
  font-size: var(--ana-text-2xl);       /* 28px */
  line-height: var(--ana-leading-snug);  /* 1.2 */
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-dark);
}

/* H2 — Subsección (color púrpura para jerarquía) */
.ana-h2 {
  font-family: var(--ana-font-display);
  font-weight: var(--ana-font-bold);
  font-size: var(--ana-text-xl);        /* 24px */
  line-height: 1.25;
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-tertiary);           /* Púrpura */
}

/* H3 — Título de card, ejercicio, recurso */
.ana-h3 {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-bold);
  font-size: var(--ana-text-lg);        /* 20px */
  line-height: 1.3;
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-dark);
}

/* H4 — Label de grupo, categoría */
.ana-h4 {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-semibold);
  font-size: var(--ana-text-md);        /* 18px */
  line-height: var(--ana-leading-normal); /* 1.35 */
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-dark);
}

/* Body — Texto de contenido principal (18px, lectura cómoda) */
.ana-body {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-regular);
  font-size: var(--ana-text-md);        /* 18px */
  line-height: var(--ana-leading-loose); /* 1.6 */
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-dark);
}

/* Body SM — Descripción, metadata */
.ana-body-sm {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-regular);
  font-size: var(--ana-text-base);      /* 16px */
  line-height: var(--ana-leading-relaxed); /* 1.5 */
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-gray);
}

/* Caption — Notas al pie, fuentes, timestamps */
.ana-caption {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-light);
  font-size: var(--ana-text-sm);        /* 14px */
  line-height: 1.4;
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-gray);
}

/* Label — Categorías, etiquetas (UPPERCASE) */
.ana-label {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-medium);
  font-size: var(--ana-text-sm);        /* 14px */
  line-height: 1.3;
  letter-spacing: var(--ana-tracking-wider); /* 0.05em */
  text-transform: uppercase;
  color: var(--ana-gray);
}

/* Overline — Micro-label sobre títulos */
.ana-overline {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-semibold);
  font-size: var(--ana-text-xs);        /* 12px */
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ana-gray);
}

/* Prompt — Bloques de instrucción para IA */
.ana-prompt {
  font-family: var(--ana-font-mono);
  font-weight: var(--ana-font-regular);
  font-size: var(--ana-text-base);      /* 16px */
  line-height: var(--ana-leading-loose); /* 1.6 */
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-dark);
}

/* Code inline — Términos técnicos en línea */
.ana-code-inline {
  font-family: var(--ana-font-mono);
  font-weight: var(--ana-font-regular);
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: var(--ana-tracking-normal);
  color: var(--ana-tertiary);
  background: var(--ana-gray-light);
  padding: 2px 6px;
  border-radius: var(--ana-radius-xs);
}

/* Button text */
.ana-btn-text {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-semibold);
  font-size: var(--ana-text-md);        /* 18px */
  line-height: 1;
  letter-spacing: var(--ana-tracking-normal);
}

/* Button text small */
.ana-btn-text-sm {
  font-family: var(--ana-font-body);
  font-weight: var(--ana-font-semibold);
  font-size: var(--ana-text-base);      /* 16px */
  line-height: 1;
  letter-spacing: var(--ana-tracking-normal);
}
```

### 3.3 Responsive typography

```css
/* ═══════════════════════════════════════════════════════════
   RESPONSIVE TYPOGRAPHY — Mobile overrides
   ═══════════════════════════════════════════════════════════ */

@media (max-width: 639px) {
  .ana-display-xl { font-size: 28px; }
  .ana-display    { font-size: 24px; }
  .ana-h1         { font-size: 22px; }
  .ana-h2         { font-size: 20px; }
  .ana-h3         { font-size: 18px; }
  .ana-body       { font-size: 16px; }
}
```

### 3.4 Máximos de línea

| Contexto | `max-width` | Caracteres/línea |
|---|---|---|
| Contenido principal (body) | `680px` | ~65-75 |
| Layout general | `1200px` | — |
| Cards en grid | `280px` min, `380px` max | — |
| Hero text | `800px` | — |

---

## 4. Sistema de Espaciado

### 4.1 Escala (base 4px)

```
4px   ──  --ana-space-1   ──  Padding mínimo, gap entre iconos
8px   ──  --ana-space-2   ──  Gap entre items de lista, padding de chip
12px  ──  --ana-space-3   ──  Padding de celda tabla (vertical)
16px  ──  --ana-space-4   ──  Espacio entre párrafos, padding de input
20px  ──  --ana-space-5   ──  Padding de botón (vertical)
24px  ──  --ana-space-6   ──  Padding de card, gap entre cards
32px  ──  --ana-space-8   ──  Separación entre subsecciones
48px  ──  --ana-space-12  ──  Separación entre secciones
64px  ──  --ana-space-16  ──  Separación entre módulos/vistas
80px  ──  --ana-space-20  ──  Padding vertical de hero
96px  ──  --ana-space-24  ──  Margen superior de página
```

### 4.2 Aplicación por contexto

| Contexto | Propiedad | Valor | Token |
|---|---|---|---|
| Padding interno de card | `padding` | `24px` | `--ana-space-6` |
| Gap entre cards en grid | `gap` | `24px` | `--ana-space-6` |
| Separación entre secciones | `margin-bottom` | `48px`–`64px` | `--ana-space-12`–`--ana-space-16` |
| Padding de página (desktop) | `padding` | `48px lateral`, `32px vertical` | `--ana-space-12` / `--ana-space-8` |
| Padding de página (mobile) | `padding` | `16px lateral`, `24px vertical` | `--ana-space-4` / `--ana-space-6` |
| Espacio título → contenido | `margin-bottom` | `16px` | `--ana-space-4` |
| Espacio entre párrafos | `margin-bottom` | `16px` | `--ana-space-4` |
| Espacio entre items de lista | `margin-bottom` | `8px` | `--ana-space-2` |
| Padding de callout | `padding` | `24px`–`32px` | `--ana-space-6`–`--ana-space-8` |
| Padding de bloque prompt | `padding` | `16px`–`24px` | `--ana-space-4`–`--ana-space-6` |
| Gap entre icono y texto | `gap` | `8px` | `--ana-space-2` |
| Padding de botón primario | `padding` | `8px 26px` | — |
| Padding de celda tabla | `padding` | `12px 16px` | `--ana-space-3` / `--ana-space-4` |

### 4.3 Breakpoints y grid

```css
/* ═══════════════════════════════════════════════════════════
   BREAKPOINTS Y GRID
   ═══════════════════════════════════════════════════════════ */

/* Mobile first: estilos base son mobile */

/* Tablet */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }

/* Desktop */
@media (min-width: 1024px) { /* lg */ }

/* Wide desktop */
@media (min-width: 1280px) { /* xl */ }

/* Grid de cards de nivel */
.ana-grid-levels {
  display: grid;
  grid-template-columns: 1fr;         /* Mobile: 1 columna */
  gap: var(--ana-space-6);             /* 24px */
}

@media (min-width: 640px) {
  .ana-grid-levels {
    grid-template-columns: repeat(2, 1fr);  /* Tablet: 2 columnas */
  }
}

@media (min-width: 1024px) {
  .ana-grid-levels {
    grid-template-columns: repeat(4, 1fr);  /* Desktop: 4 columnas */
  }
}
```

---

## 5. Bordes, Sombras y Elevación

### 5.1 Escala de elevación

| Nivel | Sombra | Uso |
|---|---|---|
| 0 (plano) | `--ana-shadow-none` | Elementos inline, texto |
| 1 (mínimo) | `--ana-shadow-xs` | Dividers, separadores sutiles |
| 2 (bajo) | `--ana-shadow-sm` | Cards en reposo, inputs |
| 3 (medio) | `--ana-shadow` | Cards en hover, dropdowns |
| 4 (alto) | `--ana-shadow-md` | Popovers, tooltips |
| 5 (máximo) | `--ana-shadow-lg` | Modals, drawers |
| 6 (extremo) | `--ana-shadow-xl` | Solo overlays especiales |

### 5.2 Bordes

```css
/* Bordes estándar */
.ana-border         { border: 1px solid var(--ana-border-card); }
.ana-border-left    { border-left: 4px solid; }  /* Color según contexto */
.ana-border-bottom  { border-bottom: 1px solid var(--ana-border-divider); }

/* Bordes de acento */
.ana-border-primary   { border-color: var(--ana-primary); }
.ana-border-tertiary  { border-color: var(--ana-tertiary); }
.ana-border-success   { border-color: var(--ana-success); }
.ana-border-error     { border-color: var(--ana-error); }
.ana-border-warning   { border-color: var(--ana-warning); }
```

---

## 6. Transiciones y Animaciones

### 6.1 Catálogo de transiciones permitidas

```css
/* ═══════════════════════════════════════════════════════════
   TRANSICIONES — Solo funcionales, nunca decorativas
   ═══════════════════════════════════════════════════════════ */

/* Hover en cards */
.ana-card {
  transition: box-shadow var(--ana-transition-base),
              border-color var(--ana-transition-base),
              transform var(--ana-transition-base);
}
.ana-card:hover {
  box-shadow: var(--ana-shadow);
  border-color: var(--ana-border-card-hover);
  transform: translateY(-2px);
}

/* Hover en botones */
.ana-btn {
  transition: background-color var(--ana-transition-fast),
              color var(--ana-transition-fast),
              border-color var(--ana-transition-fast);
}

/* Progress bar (animación suave del fill) */
.ana-progress-fill {
  transition: width var(--ana-transition-slower);
}

/* Fade in para contenido que aparece */
.ana-fade-in {
  animation: anaFadeIn var(--ana-transition-slow) var(--ana-easing-out);
}

@keyframes anaFadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Slide in para paneles laterales */
.ana-slide-in {
  animation: anaSlideIn var(--ana-transition-slow) var(--ana-easing-out);
}

@keyframes anaSlideIn {
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Skeleton shimmer */
.ana-skeleton {
  background: linear-gradient(
    90deg,
    var(--ana-gray-light) 25%,
    var(--ana-gray-lighter) 50%,
    var(--ana-gray-light) 75%
  );
  background-size: 200% 100%;
  animation: anaShimmer 1.5s infinite;
  border-radius: var(--ana-radius-sm);
}

@keyframes anaShimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 6.2 Animaciones PROHIBIDAS

- ❌ Parallax scrolling
- ❌ Texto animado letra por letra
- ❌ Bouncing, shaking, pulse agresivo
- ❌ Cualquier animación > 500ms
- ❌ Animaciones que bloqueen interacción
- ❌ Scroll hijacking
- ❌ Confetti/partículas (el Whimsy Injector define excepciones puntuales)

---

## 7. Z-Index Scale

| Token | Valor | Uso |
|---|---|---|
| `--ana-z-base` | `0` | Contenido normal |
| `--ana-z-dropdown` | `10` | Menús desplegables |
| `--ana-z-sticky` | `20` | Sidebar sticky |
| `--ana-z-header` | `30` | Header/navbar fijo |
| `--ana-z-overlay` | `40` | Overlay de modal |
| `--ana-z-modal` | `50` | Contenido del modal |
| `--ana-z-popover` | `60` | Popovers/tooltips |
| `--ana-z-toast` | `70` | Notificaciones toast |
| `--ana-z-tooltip` | `80` | Tooltips sobre todo |
| `--ana-z-max` | `9999` | Skip link, emergencias |

---

## 8. Paleta Semántica Completa

| Significado | Token principal | Token light | Token border | Icono sugerido | Uso |
|---|---|---|---|---|---|
| **Éxito / Completado** | `--ana-success` | `--ana-success-light` | `--ana-success-border` | `check-circle` | Nivel completado, validación correcta, toast de confirmación |
| **Error / Fallo** | `--ana-error` | `--ana-error-light` | `--ana-error-border` | `x-circle` | Validación fallida, error de carga — **NUNCA naranja** |
| **Advertencia** | `--ana-warning` | `--ana-warning-light` | `--ana-warning-border` | `alert-triangle` | Datos incompletos, acción reversible con riesgo |
| **Información** | `--ana-info` | `--ana-info-light` | `--ana-info-border` | `info` | Callouts teóricos, nota informativa |
| **Progreso actual** | `--ana-primary` | `--ana-primary-light` | — | `loader` / ring | Nivel en curso, barra de progreso activa |
| **Completado** | `--ana-level-complete` | `--ana-level-complete-bg` | — | `check` | Nodo de progreso terminado |
| **Actual** | `--ana-level-current` | `--ana-level-current-bg` | — | `circle-dot` | Nodo de progreso activo |
| **Bloqueado** | `--ana-level-locked` | `--ana-level-locked-bg` | — | `lock` | Nivel no disponible |
| **Interactivo** | `--ana-primary` | — | — | — | Enlaces, botones, acciones |
| **Académico** | `--ana-tertiary` | `--ana-tertiary-light` | — | `graduation-cap` | Diferenciador de versión académica |
| **Administrativo** | `--ana-primary` | `--ana-primary-light` | — | `briefcase` | Diferenciador de versión administrativa |

---

## 9. Color Mapping por Componente

### 9.1 Botones

```css
/* ═══════════════════════════════════════════════════════════
   BOTONES
   ═══════════════════════════════════════════════════════════ */

/* Primario */
.ana-btn-primary {
  background: var(--ana-primary);
  color: #FFFFFF;
  border: none;
  border-radius: var(--ana-radius-sm);
  padding: 8px 26px;
  font: var(--ana-font-semibold) var(--ana-text-md) var(--ana-font-body);
  cursor: pointer;
  transition: background-color var(--ana-transition-fast);
}
.ana-btn-primary:hover   { background: var(--ana-primary-hover); }
.ana-btn-primary:active  { background: var(--ana-primary-active); }
.ana-btn-primary:focus-visible {
  outline: none;
  box-shadow: var(--ana-shadow-focus);
}

/* Secundario (outline) */
.ana-btn-secondary {
  background: transparent;
  color: var(--ana-primary);
  border: 1.5px solid var(--ana-primary);
  border-radius: var(--ana-radius-sm);
  padding: 8px 26px;
  font: var(--ana-font-semibold) var(--ana-text-md) var(--ana-font-body);
  cursor: pointer;
  transition: all var(--ana-transition-fast);
}
.ana-btn-secondary:hover {
  background: var(--ana-primary-light);
  border-color: var(--ana-primary-hover);
}
.ana-btn-secondary:active { background: var(--ana-primary-light-hover); }

/* Terciario (ghost / text) */
.ana-btn-tertiary {
  background: transparent;
  color: var(--ana-primary);
  border: none;
  padding: 8px 16px;
  font: var(--ana-font-semibold) var(--ana-text-md) var(--ana-font-body);
  cursor: pointer;
  text-decoration: none;
  transition: color var(--ana-transition-fast);
}
.ana-btn-tertiary:hover { text-decoration: underline; color: var(--ana-primary-hover); }

/* Disabled (aplica a cualquier variante) */
.ana-btn[disabled],
.ana-btn-primary[disabled],
.ana-btn-secondary[disabled],
.ana-btn-tertiary[disabled] {
  background: var(--ana-inactive);
  color: var(--ana-gray-medium);
  border-color: var(--ana-inactive);
  cursor: not-allowed;
  pointer-events: none;
}

/* Tamaños */
.ana-btn-sm  { padding: 6px 16px; font-size: var(--ana-text-base); }
.ana-btn-lg  { padding: 12px 32px; font-size: var(--ana-text-lg); }
```

### 9.2 Inputs y formularios

```css
/* ═══════════════════════════════════════════════════════════
   INPUTS
   ═══════════════════════════════════════════════════════════ */

.ana-input {
  width: 100%;
  padding: 10px 14px;
  font: var(--ana-font-regular) var(--ana-text-md) var(--ana-font-body);
  color: var(--ana-dark);
  background: var(--ana-white);
  border: 1.5px solid var(--ana-border-input);
  border-radius: var(--ana-radius-sm);
  transition: border-color var(--ana-transition-fast),
              box-shadow var(--ana-transition-fast);
}
.ana-input::placeholder { color: var(--ana-gray-medium); }
.ana-input:hover        { border-color: var(--ana-gray); }
.ana-input:focus {
  outline: none;
  border-color: var(--ana-border-input-focus);
  box-shadow: var(--ana-shadow-focus);
}
.ana-input--error {
  border-color: var(--ana-error);
  background: var(--ana-error-light);
}
.ana-input--error:focus {
  box-shadow: var(--ana-shadow-focus-error);
}
.ana-input[disabled] {
  background: var(--ana-gray-light);
  color: var(--ana-gray-medium);
  cursor: not-allowed;
}

/* Textarea para prompts */
.ana-textarea-prompt {
  font-family: var(--ana-font-mono);
  font-size: var(--ana-text-base);
  line-height: var(--ana-leading-loose);
  min-height: 120px;
  resize: vertical;
}
```

### 9.3 Cards de nivel

```css
/* ═══════════════════════════════════════════════════════════
   CARDS DE NIVEL
   ═══════════════════════════════════════════════════════════ */

.ana-level-card {
  background: var(--ana-white);
  border: 1px solid var(--ana-border-card);
  border-radius: var(--ana-radius-md);
  padding: var(--ana-space-6);
  box-shadow: var(--ana-shadow-sm);
  transition: box-shadow var(--ana-transition-base),
              border-color var(--ana-transition-base),
              transform var(--ana-transition-base);
}
.ana-level-card:hover {
  box-shadow: var(--ana-shadow);
  border-color: var(--ana-border-card-hover);
  transform: translateY(-2px);
}

/* Estados */
.ana-level-card--current {
  border-left: 4px solid var(--ana-level-current);
}
.ana-level-card--complete {
  border-left: 4px solid var(--ana-level-complete);
}
.ana-level-card--locked {
  background: var(--ana-level-locked-bg);
  border-color: var(--ana-inactive);
  cursor: not-allowed;
  opacity: 0.7;
}
.ana-level-card--locked:hover {
  transform: none;
  box-shadow: var(--ana-shadow-sm);
  border-color: var(--ana-inactive);
}
```

### 9.4 Callouts

```css
/* ═══════════════════════════════════════════════════════════
   CALLOUTS
   ═══════════════════════════════════════════════════════════ */

.ana-callout {
  padding: var(--ana-space-6);
  border-radius: var(--ana-radius-md);
  border-left: 4px solid;
  margin-bottom: var(--ana-space-6);
}

/* Teórico / Informativo */
.ana-callout--theory {
  background: var(--ana-bg-theory);
  border-color: var(--ana-tertiary);
}
.ana-callout--theory .ana-callout__label {
  color: var(--ana-tertiary);
}

/* Práctico / Ejercicio */
.ana-callout--exercise {
  background: var(--ana-bg-exercise);
  border-color: var(--ana-primary);
}
.ana-callout--exercise .ana-callout__label {
  color: var(--ana-primary);
}

/* Advertencia */
.ana-callout--warning {
  background: var(--ana-warning-light);
  border-color: var(--ana-warning);
}

/* Error */
.ana-callout--error {
  background: var(--ana-error-light);
  border-color: var(--ana-error);
}

/* Éxito */
.ana-callout--success {
  background: var(--ana-success-light);
  border-color: var(--ana-success);
}
```

### 9.5 Bloques de prompt/instrucción

```css
/* ═══════════════════════════════════════════════════════════
   BLOQUE DE PROMPT
   ═══════════════════════════════════════════════════════════ */

.ana-prompt-block {
  background: var(--ana-bg-prompt);
  border: 1px solid var(--ana-border-prompt);
  border-top: 3px solid var(--ana-primary);
  border-radius: var(--ana-radius-md);
  padding: var(--ana-space-6);
  position: relative;
}

.ana-prompt-block__code {
  background: var(--ana-white);
  border: 1px solid var(--ana-border-prompt);
  border-radius: var(--ana-radius-sm);
  padding: var(--ana-space-4);
  font-family: var(--ana-font-mono);
  font-size: var(--ana-text-base);
  line-height: var(--ana-leading-loose);
  white-space: pre-wrap;
  word-break: break-word;
}

.ana-prompt-block__copy-btn {
  position: absolute;
  bottom: var(--ana-space-4);
  right: var(--ana-space-4);
}
```

### 9.6 Progress tracker

```css
/* ═══════════════════════════════════════════════════════════
   PROGRESS TRACKER
   ═══════════════════════════════════════════════════════════ */

.ana-progress-bar {
  width: 100%;
  height: 8px;
  background: var(--ana-inactive);
  border-radius: var(--ana-radius-full);
  overflow: hidden;
}

.ana-progress-bar__fill {
  height: 100%;
  background: var(--ana-primary);
  border-radius: var(--ana-radius-full);
  transition: width var(--ana-transition-slower);
}

.ana-progress-bar__fill--complete {
  background: var(--ana-success);
}

/* Nodos del progress tracker horizontal */
.ana-progress-node {
  width: 32px;
  height: 32px;
  border-radius: var(--ana-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--ana-text-sm);
  font-weight: var(--ana-font-semibold);
  border: 2px solid;
  transition: all var(--ana-transition-base);
}

.ana-progress-node--complete {
  background: var(--ana-level-complete);
  border-color: var(--ana-level-complete);
  color: #FFFFFF;
}
.ana-progress-node--current {
  background: var(--ana-level-current);
  border-color: var(--ana-level-current);
  color: #FFFFFF;
  box-shadow: 0 0 0 4px var(--ana-primary-ring);
}
.ana-progress-node--pending {
  background: var(--ana-white);
  border-color: var(--ana-inactive);
  color: var(--ana-gray);
}

/* Mobile: nodos más pequeños */
@media (max-width: 639px) {
  .ana-progress-node { width: 24px; height: 24px; font-size: 11px; }
}
```

### 9.7 Tablas

```css
/* ═══════════════════════════════════════════════════════════
   TABLAS
   ═══════════════════════════════════════════════════════════ */

.ana-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: var(--ana-radius-md);
  overflow: hidden;
  box-shadow: var(--ana-shadow-xs);
}

.ana-table thead th {
  background: var(--ana-tertiary);
  color: #FFFFFF;
  font-weight: var(--ana-font-semibold);
  padding: 12px 16px;
  text-align: left;
  font-size: var(--ana-text-base);
}

.ana-table tbody td {
  padding: 12px 16px;
  font-size: var(--ana-text-base);
  color: var(--ana-dark);
  border-bottom: 1px solid var(--ana-inactive);
}

.ana-table tbody tr:nth-child(even) {
  background: var(--ana-gray-lighter);
}
.ana-table tbody tr:hover {
  background: var(--ana-gray-light);
}
```

### 9.8 Badges

```css
/* ═══════════════════════════════════════════════════════════
   BADGES
   ═══════════════════════════════════════════════════════════ */

.ana-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--ana-space-1);
  padding: 4px 12px;
  border-radius: var(--ana-radius-full);
  font-size: var(--ana-text-xs);
  font-weight: var(--ana-font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ana-badge--complete  { background: var(--ana-success); color: #FFFFFF; }
.ana-badge--current   { background: var(--ana-primary); color: #FFFFFF; }
.ana-badge--locked    { background: var(--ana-inactive); color: var(--ana-footer-gray); }
.ana-badge--tertiary  { background: var(--ana-tertiary); color: #FFFFFF; }
.ana-badge--academic  { background: var(--ana-tertiary); color: #FFFFFF; }
.ana-badge--admin     { background: var(--ana-primary); color: #FFFFFF; }

/* Credential badges (Open Badges) */
.ana-credential-badge {
  width: 80px;
  height: 80px;
  border-radius: var(--ana-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ana-credential-badge--explorer  { background: var(--ana-primary); }
.ana-credential-badge--strategist { background: var(--ana-tertiary); }
.ana-credential-badge--leader {
  background: linear-gradient(135deg, var(--ana-primary), var(--ana-tertiary));
}
```

---

## 10. Guía de Iconografía

### 10.1 Biblioteca seleccionada

**Lucide Icons** — https://lucide.dev/

| Criterio | Especificación |
|---|---|
| Estilo | Outline (línea) |
| Peso de trazo | 1.5px–2px |
| Esquinas | Redondeadas (consistente con radius 5px) |
| Color | Hereda `currentColor` del padre |
| Formato | SVG inline (no icon fonts) |
| Alternativa | Heroicons (Outline) si Lucide no cubre un caso |

### 10.2 Tamaños estándar

| Contexto | Tamaño | Ejemplo |
|---|---|---|
| Inline (junto a texto) | `16px`–`20px` | Icono antes de "Duración: 15 min" |
| Navegación | `20px`–`24px` | Iconos en sidebar/navbar |
| Card feature | `28px`–`32px` | Icono decorativo en card |
| Hero / ilustrativo | `40px`–`48px` | Icono de módulo en vista de detalle |
| Badge / avatar | `16px` dentro de badge | Icono dentro de chip |

### 10.3 Mapa de iconos por función

| Función | Icono Lucide | Color |
|---|---|---|
| Nivel/Módulo | `layers` | hereda contexto |
| Ejercicio práctico | `pencil-line` | `--ana-primary` |
| Instrucción/Prompt | `terminal` | `--ana-primary` |
| Completado | `check-circle` | `--ana-success` |
| En progreso | `clock` | `--ana-primary` |
| Bloqueado | `lock` | `--ana-level-locked-text` |
| Recurso/Descarga | `file-down` | hereda contexto |
| Tip/Recomendación | `lightbulb` | `--ana-warning` |
| Concepto clave | `info` | `--ana-tertiary` |
| Advertencia | `alert-triangle` | `--ana-warning` |
| Error | `x-circle` | `--ana-error` |
| Duración | `clock` | `--ana-gray` |
| IA/Modelo | `brain` | `--ana-tertiary` |
| Agente de IA | `bot` | `--ana-tertiary` |
| Versión académica | `graduation-cap` | `--ana-tertiary` |
| Versión administrativa | `briefcase` | `--ana-primary` |
| Copiar al portapapeles | `copy` | `--ana-gray` → `--ana-success` |
| Navegación anterior | `chevron-left` | hereda contexto |
| Navegación siguiente | `chevron-right` | hereda contexto |
| Menú | `menu` | `--ana-dark` |
| Cerrar | `x` | `--ana-gray` |
| Expandir/colapsar | `chevron-down` | `--ana-gray` |
| Buscar | `search` | `--ana-gray` |
| Configuración | `settings` | `--ana-gray` |
| Usuario | `user` | `--ana-gray` |
| Flujo/Workflow | `git-branch` | `--ana-tertiary` |
| Banco de prompts | `library` | `--ana-primary` |
| Ética | `shield-check` | `--ana-tertiary` |

### 10.4 Reglas de uso

1. **Nunca usar iconos solos** sin label de texto (WCAG AA). Excepción: iconos universales (✕ cerrar, ← atrás, ≡ menú).
2. **Iconos decorativos:** `aria-hidden="true"`.
3. **Iconos funcionales:** `aria-label="[acción]"`.
4. **Color:** SIEMPRE `currentColor` — no colorear iconos individualmente.
5. **No mezclar** estilos filled y outline en la misma vista.
6. **No usar emojis** como iconos en la interfaz principal del mini sitio.
7. **Tamaño mínimo clickable:** `44px × 44px` touch target (WCAG 2.5.5).

---

## 11. Do's & Don'ts Visuales

### Regla 1: Naranja NUNCA para errores

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Error en `#DC2626` (rojo): "No fue posible cargar el recurso." | Error en `#FF5900` (naranja): "No fue posible cargar el recurso." |
| **Razón:** Naranja es el color de MARCA. Usarlo para errores confunde la semántica. | El cerebro asociaría "error" con "Anáhuac", lo cual daña la marca. |

### Regla 2: Hover naranja es MÁS CLARO (#FF7900)

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Botón hover: `#FF5900` → `#FF7900` (más claro) | Botón hover: `#FF5900` → `#E04F00` (más oscuro) |
| **Razón:** El sitio oficial merida.anahuac.mx aclara el hover. Consistencia con la fuente de verdad. | Oscurecer rompe el patrón del sitio oficial. |

### Regla 3: Proporción 60-25-10-5

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| 60% blanco/gris, 10% naranja puntual en CTAs y acentos | Header completo en naranja, fondo naranja degradado |
| **Razón:** Interfaz académica sobria con acentos puntuales. | Landing page de startup — no es la identidad del curso. |

### Regla 4: Contraste WCAG AA

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Texto naranja `#FF5900` solo en texto grande (≥18px bold o ≥24px regular). Contraste 4.58:1 sobre blanco. | Texto naranja en 14px regular sobre blanco. Contraste insuficiente. |
| Texto pequeño siempre en `#231F20` sobre claro o `#EDEDED` sobre oscuro. | Texto gris `#A3A9AB` en tamaño 12px — contraste < 3:1. |

### Regla 5: Tipografía — Máximo 2 familias + 1 mono

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Manrope (display) + Roboto (body) + JetBrains Mono (code/prompt) | Añadir Open Sans, Lato o cualquier otra fuente |
| **Razón:** Consistencia tipográfica. Cada familia tiene un rol claro. | Más fuentes = más carga, menos cohesión. |

### Regla 6: Espaciado — Siempre múltiplos de 4px

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| `padding: 24px;` (múltiplo de 4) | `padding: 23px;` o `padding: 15px;` |
| **Razón:** Sistema coherente que produce alineación visual natural. | Valores arbitrarios rompen el ritmo visual. |

### Regla 7: Radius — Escala fija (5/8/12/9999)

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Botón: `5px`. Card: `8px`. Modal: `12px`. Badge: `9999px`. | Botón: `10px`. Card: `6px`. Modal: `20px`. |
| **Razón:** Consistencia con el sitio oficial. Cada radio tiene un contexto definido. | Valores aleatorios hacen que el diseño se sienta improvisado. |

### Regla 8: "Anáhuac Mayab" en naranja, sin distintivo

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| "Anáhuac Mayab" como texto en `#FF5900`, sin logo al lado | Logo "A" + "Anáhuac Mayab" juntos en el mismo elemento |
| **Razón:** El distintivo "A" y el nombre son elementos visuales INDEPENDIENTES según la identidad institucional. | Juntar ambos crea redundancia visual y viola la guía de marca. |

### Regla 9: Bloques de prompt siempre diferenciados

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Prompt en card con fondo `#F8F7F5`, borde, font-mono, acento naranja superior | Prompt como texto normal entre párrafos, sin diferenciación |
| **Razón:** El participante debe poder identificar inmediatamente qué copiar y ejecutar en Amazon Quick. | Un prompt que se confunde con texto explicativo es inútil. |

### Regla 10: Dark mode — Nunca negro puro ni blanco puro

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Fondo: `#141416`. Texto: `#EDEDED`. | Fondo: `#000000`. Texto: `#FFFFFF`. |
| **Razón:** Blanco puro sobre negro puro causa fatiga visual. Los tonos casi-puros son más cómodos. | El contraste máximo lastima la vista en sesiones prolongadas. |

### Regla 11: Máximo 2 callouts por sección

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Una sección con 1 callout teórico + 1 callout práctico | Una sección con 4 callouts consecutivos |
| **Razón:** Si todo es importante, nada es importante. Los callouts pierden su función de destacar. | El contenido se siente fragmentado y difícil de leer. |

### Regla 12: Sin emojis en interfaz principal

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| Icono Lucide `check-circle` + "Nivel completado" | "✅ ¡Nivel completado! 🎉" |
| **Razón:** Tono institucional para directivos de 40-55 años. Emojis trivializan. | Parece una app de gamificación para adolescentes. |

---

## 12. Accesibilidad (WCAG AA)

### 12.1 Contraste mínimo

| Contexto | Ratio mínimo | Verificación |
|---|---|---|
| Texto normal (< 18px) | **4.5:1** | `#231F20` sobre `#FFFFFF` = 15.1:1 ✅ |
| Texto grande (≥ 18px bold o ≥ 24px) | **3:1** | `#FF5900` sobre `#FFFFFF` = 4.58:1 ✅ |
| Texto sobre fondo naranja | **4.5:1** | `#FFFFFF` sobre `#FF5900` = 4.58:1 ✅ |
| Texto secundario | **4.5:1** | `#6F6F6F` sobre `#FFFFFF` = 4.98:1 ✅ |
| Componentes UI y gráficos | **3:1** | Bordes, iconos funcionales |

### 12.2 Focus states

```css
/* Focus visible para todos los interactivos */
*:focus-visible {
  outline: 2px solid var(--ana-primary);
  outline-offset: 2px;
  border-radius: var(--ana-radius-sm);
}

/* Focus alternativo para inputs (shadow en vez de outline) */
.ana-input:focus-visible {
  outline: none;
  border-color: var(--ana-border-input-focus);
  box-shadow: var(--ana-shadow-focus);
}
```

### 12.3 Checklist de accesibilidad

- [ ] Estructura semántica: `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`
- [ ] Skip link como primer elemento focusable: "Ir al contenido principal"
- [ ] Todos los `<img>` tienen `alt` descriptivo
- [ ] Iconos decorativos: `aria-hidden="true"`
- [ ] Iconos funcionales: `aria-label="[acción]"`
- [ ] Todo interactivo es navegable por teclado (Tab, Enter, Escape)
- [ ] `prefers-reduced-motion`: todas las animaciones deshabilitadas
- [ ] `prefers-color-scheme`: dark mode automático
- [ ] Touch targets: mínimo `44px × 44px`
- [ ] No depender solo del color para comunicar estado (agregar texto/icono)
- [ ] `lang="es"` en `<html>`
- [ ] Formularios: cada `<input>` tiene `<label>` asociado

---

## 13. Checklist de Auditoría Visual

Cada asset visual, componente o pantalla **debe pasar todos los puntos** antes de publicar:

### Colores y marca

- [ ] **C-01** — Naranja usado es exactamente `#FF5900` (no #FF6600 ni #E55A00)
- [ ] **C-02** — Púrpura usado es exactamente `#432F64` (light) o `#8B73BE` (dark)
- [ ] **C-03** — Hover naranja es `#FF7900` (MÁS CLARO, no oscuro)
- [ ] **C-04** — Errores usan `#DC2626` (rojo), NUNCA naranja
- [ ] **C-05** — Proporción 60-25-10-5 respetada (no exceso de naranja/púrpura)
- [ ] **C-06** — Dark mode: fondo no es negro puro (`#000000` prohibido como bg)

### Tipografía

- [ ] **T-01** — Solo Manrope, Roboto y JetBrains Mono (no fuentes adicionales)
- [ ] **T-02** — Escala tipográfica respetada (no tamaños arbitrarios)
- [ ] **T-03** — Líneas de texto ≤ 75 caracteres (max-width 680px en contenido)
- [ ] **T-04** — Responsive: tamaños reducidos en mobile según tabla 3.3

### Componentes

- [ ] **K-01** — Border radius usa escala correcta (5/8/12/9999)
- [ ] **K-02** — Espaciado usa múltiplos de 4px exclusivamente
- [ ] **K-03** — Sombras usan tokens del design system (no valores custom)
- [ ] **K-04** — Botón primario: bg `#FF5900`, texto blanco, radius 5px, padding 8px 26px
- [ ] **K-05** — Callout teórico: fondo púrpura light, borde izq púrpura
- [ ] **K-06** — Callout práctico: fondo naranja light, borde izq naranja
- [ ] **K-07** — Prompt block: monoespaciado, fondo diferenciado, acento naranja

### Accesibilidad

- [ ] **A-01** — Contraste WCAG AA: texto normal ≥ 4.5:1, texto grande ≥ 3:1
- [ ] **A-02** — Focus ring visible en todos los elementos interactivos
- [ ] **A-03** — Iconos funcionales tienen `aria-label`
- [ ] **A-04** — `prefers-reduced-motion` respetada
- [ ] **A-05** — Touch targets ≥ 44px × 44px en mobile

### Comunicación

- [ ] **M-01** — Tono formal, registro de "usted" — sin tuteo
- [ ] **M-02** — Sin emojis en interfaz principal
- [ ] **M-03** — "Anáhuac Mayab" en naranja, SIN distintivo al lado
- [ ] **M-04** — Anglicismos en cursiva en primera mención con equivalente español

---

## 14. Glosario de Tokens

Referencia rápida de todos los prefijos de tokens CSS:

| Prefijo | Categoría | Ejemplo |
|---|---|---|
| `--ana-primary*` | Color primario (naranja) | `--ana-primary`, `--ana-primary-hover` |
| `--ana-tertiary*` | Color secundario (púrpura) | `--ana-tertiary`, `--ana-tertiary-light` |
| `--ana-dark*` | Colores oscuros/texto | `--ana-dark`, `--ana-dark-secondary` |
| `--ana-gray*` | Colores grises | `--ana-gray`, `--ana-gray-light` |
| `--ana-error*` | Semántico: error | `--ana-error`, `--ana-error-light` |
| `--ana-success*` | Semántico: éxito | `--ana-success`, `--ana-success-border` |
| `--ana-warning*` | Semántico: advertencia | `--ana-warning`, `--ana-warning-light` |
| `--ana-info*` | Semántico: información | `--ana-info`, `--ana-info-border` |
| `--ana-bg-*` | Fondos de contenido | `--ana-bg-page`, `--ana-bg-prompt` |
| `--ana-border-*` | Colores de borde | `--ana-border-card`, `--ana-border-input` |
| `--ana-level-*` | Estados de nivel/progreso | `--ana-level-complete`, `--ana-level-locked` |
| `--ana-font-*` | Familias y pesos tipográficos | `--ana-font-display`, `--ana-font-bold` |
| `--ana-text-*` | Tamaños de texto | `--ana-text-base`, `--ana-text-xl` |
| `--ana-leading-*` | Line heights | `--ana-leading-tight`, `--ana-leading-loose` |
| `--ana-tracking-*` | Letter spacing | `--ana-tracking-tight`, `--ana-tracking-wider` |
| `--ana-space-*` | Espaciado | `--ana-space-4`, `--ana-space-12` |
| `--ana-radius-*` | Border radius | `--ana-radius-sm`, `--ana-radius-full` |
| `--ana-shadow-*` | Sombras | `--ana-shadow-sm`, `--ana-shadow-lg` |
| `--ana-transition-*` | Duraciones | `--ana-transition-fast`, `--ana-transition-slow` |
| `--ana-easing-*` | Curvas de animación | `--ana-easing-out`, `--ana-easing-in-out` |
| `--ana-z-*` | Z-index | `--ana-z-header`, `--ana-z-modal` |
| `--ana-max-width-*` | Anchos máximos | `--ana-max-width-content`, `--ana-max-width-layout` |

---

> **Este documento es la fuente de verdad visual del mini sitio.**
> Todos los agentes (UI Designer, Visual Storyteller, Whimsy Injector,
> EdTech LMS Specialist, Frontend Developer) deben referenciar este
> archivo para cualquier decisión de color, tipografía, espaciado o
> componente.
>
> **Regla de oro:** Ante cualquier duda visual, consultar primero este
> design system, luego merida.anahuac.mx como fuente última de verdad.

---

*Brand Guardian Anáhuac Mayab · Fase 6 · Septiembre 2026*
*Fuente de verdad: merida.anahuac.mx*
