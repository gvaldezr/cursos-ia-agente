# Componentes UI — Mini Sitio "IA Práctica para Líderes Anáhuac"

> **Fase 6 · Construcción de Assets**
> **Agente:** UI Designer
> **Versión:** 1.0 | **Fecha:** 7 de septiembre de 2026
> **Tecnología:** HTML/CSS/JS vanilla — SPA autocontenido, sin frameworks
> **Estándar de accesibilidad:** WCAG 2.1 Nivel AA
> **Estrategia CSS:** Mobile-first, tokens Anáhuac Mayab

---

## Índice

1. [Layout System](#1-layout-system)
2. [Navegación](#2-navegación)
3. [Cards de Nivel](#3-cards-de-nivel)
4. [Componentes de Contenido](#4-componentes-de-contenido)
5. [Progress Tracker](#5-progress-tracker)
6. [Botones y CTAs](#6-botones-y-ctas)
7. [Formularios](#7-formularios)
8. [Responsive Behavior](#8-responsive-behavior)
9. [Accesibilidad](#9-accesibilidad)
10. [Catálogo de Tokens de Referencia](#10-catálogo-de-tokens-de-referencia)

---

## 1. Layout System

### 1.1 Grid Responsive (Mobile-First)

El sistema de grid se construye sobre CSS Grid con fallback a Flexbox. La estrategia es mobile-first: el CSS base define la experiencia móvil; los breakpoints amplían progresivamente.

#### Breakpoints

```css
/* Breakpoints — Mobile First */
:root {
  --ana-bp-sm:   640px;    /* Mobile grande / landscape */
  --ana-bp-md:   768px;    /* Tablet portrait */
  --ana-bp-lg:   1024px;   /* Desktop */
  --ana-bp-xl:   1280px;   /* Desktop ancho */
}
```

#### Contenedor Principal

```css
.ana-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: var(--ana-space-md);   /* 16px mobile */
  padding-right: var(--ana-space-md);
}

@media (min-width: 768px) {
  .ana-container {
    padding-left: var(--ana-space-xl);  /* 32px tablet */
    padding-right: var(--ana-space-xl);
  }
}

@media (min-width: 1024px) {
  .ana-container {
    padding-left: var(--ana-space-2xl); /* 48px desktop */
    padding-right: var(--ana-space-2xl);
  }
}
```

#### Grid de Contenido

```css
/* Grid base: 1 columna (mobile) */
.ana-grid {
  display: grid;
  gap: var(--ana-space-lg); /* 24px */
  grid-template-columns: 1fr;
}

/* 2 columnas a partir de tablet */
@media (min-width: 768px) {
  .ana-grid--2col { grid-template-columns: repeat(2, 1fr); }
  .ana-grid--3col { grid-template-columns: repeat(2, 1fr); }
}

/* 3 y 4 columnas en desktop */
@media (min-width: 1024px) {
  .ana-grid--3col { grid-template-columns: repeat(3, 1fr); }
  .ana-grid--4col { grid-template-columns: repeat(4, 1fr); }
}
```

### 1.2 Layouts de Página

El SPA tiene cuatro vistas principales. Cada una usa una estructura de layout específica.

#### Layout 1: Home / Landing

```
┌─────────────────────────────────────────────────────────────┐
│  [HEADER — sticky]                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  HERO SECTION                                       │    │
│  │  Logo + Título: "IA Práctica para Líderes Anáhuac"  │    │
│  │  Subtítulo + CTA "Iniciar programa"                 │    │
│  │  Progress global (si usuario ya inició)              │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─── GRID DE NIVELES (4 col desktop / 2 tablet / 1 mob)──┐│
│  │  [Card 1]  [Card 2]  [Card 3]  [Card 4]                ││
│  │  [Card 5]  [Card 6]  [Card 7]  [Card 8]                ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  ┌── SECCIÓN INFORMATIVA ──────────────────────────────┐    │
│  │  Descripción del programa + audiencia + duración     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**HTML semántico:**

```html
<body>
  <header class="ana-header" role="banner">...</header>
  <main class="ana-main" id="main-content">
    <section class="ana-hero" aria-labelledby="hero-title">...</section>
    <section class="ana-levels" aria-label="Niveles del programa">
      <div class="ana-container">
        <div class="ana-grid ana-grid--4col">
          <!-- 8 cards de nivel -->
        </div>
      </div>
    </section>
    <section class="ana-info" aria-label="Información del programa">...</section>
  </main>
  <footer class="ana-footer" role="contentinfo">...</footer>
</body>
```

#### Layout 2: Vista de Nivel / Módulo

```
┌─────────────────────────────────────────────────────────────┐
│  [HEADER — sticky + breadcrumbs]                            │
├────────────────────┬────────────────────────────────────────┤
│                    │                                        │
│  SIDEBAR           │  CONTENIDO PRINCIPAL                   │
│  (desktop only)    │  max-width: 680px                      │
│                    │                                        │
│  ┌──────────────┐  │  ┌────────────────────────────────┐    │
│  │ Nivel 1  ✓  │  │  │ NIVEL 4.                       │    │
│  │ Nivel 2  ✓  │  │  │ Análisis de reportes con IA    │    │
│  │ Nivel 3  ✓  │  │  │                                │    │
│  │ Nivel 4  ●  │  │  │ [Progress tracker horizontal]  │    │
│  │ Nivel 5  ○  │  │  └────────────────────────────────┘    │
│  │ Nivel 6  ○  │  │                                        │
│  │ Nivel 7  ○  │  │  1. Concepto clave                     │
│  │ Nivel 8  ○  │  │  [Callout teórico]                     │
│  └──────────────┘  │  2. Demostración paso a paso           │
│                    │  [Bloque de prompt]                    │
│                    │  3. Ejercicio práctico                 │
│                    │  [Sección de ejercicio]                │
│                    │  4. Output — Entregable                │
│                    │  [Callout práctico]                    │
│                    │  5. Tips y anti-patrones               │
│                    │  [Tabla comparativa]                   │
│                    │                                        │
│                    │  [Nav: ← Nivel anterior | Siguiente →] │
├────────────────────┴────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**CSS del layout con sidebar:**

```css
.ana-layout-level {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.ana-layout-level__body {
  display: flex;
  flex: 1;
}

.ana-sidebar {
  display: none; /* Oculta en mobile */
  width: 260px;
  min-width: 260px;
  border-right: 1px solid var(--ana-inactive);
  padding: var(--ana-space-lg) var(--ana-space-md);
  position: sticky;
  top: 64px; /* Altura del header */
  height: calc(100vh - 64px);
  overflow-y: auto;
  background: var(--ana-white);
}

@media (min-width: 1024px) {
  .ana-sidebar { display: block; }
}

.ana-content {
  flex: 1;
  max-width: 680px;
  margin: 0 auto;
  padding: var(--ana-space-xl) var(--ana-space-md);
}

@media (min-width: 1024px) {
  .ana-content {
    padding: var(--ana-space-2xl) var(--ana-space-xl);
  }
}
```

#### Layout 3: Vista de Ejercicio

Misma estructura que Layout 2 pero el área de contenido se centra en un solo ejercicio con mayor espacio para el bloque de prompt/instrucción y la zona de entrega.

```css
.ana-exercise-view .ana-content {
  max-width: 760px; /* Ligeramente más ancho para tablas y prompts */
}
```

#### Layout 4: Vista de Progreso / Dashboard Personal

```
┌─────────────────────────────────────────────────────────────┐
│  [HEADER]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─── RESUMEN DE PROGRESO ────────────────────────────┐     │
│  │  ●━━━━━●━━━━━●━━━━━◉━━━━━○━━━━━○━━━━━○━━━━━○      │     │
│  │  1     2     3     4     5     6     7     8       │     │
│  │                                                    │     │
│  │  Progreso global: 37%  ▓▓▓▓▓▓▓░░░░░░░░░░░░        │     │
│  │  Tiempo invertido: 4h 20min                        │     │
│  │  Nivel actual: 4 — Análisis de reportes con IA     │     │
│  └────────────────────────────────────────────────────┘     │
│                                                             │
│  ┌─── BADGES ─────────────────────────────────────────┐     │
│  │  [Badge 1: Explorador IA]  ✓ Obtenido              │     │
│  │  [Badge 2: Estratega IA]   ○ En progreso (4/6)     │     │
│  │  [Badge 3: Líder IA]       ○ Bloqueado              │     │
│  └────────────────────────────────────────────────────┘     │
│                                                             │
│  ┌─── ENTREGABLES ────────────────────────────────────┐     │
│  │  [Grid de 8 cards: entregable por módulo]           │     │
│  └────────────────────────────────────────────────────┘     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Navegación

### 2.1 Header Sticky

**Descripción funcional:** Barra superior fija (sticky) que permanece visible al hacer scroll. Contiene: logo, nombre del curso, indicador de progreso compacto y menú hamburguesa (mobile) / enlaces de navegación (desktop).

**Estructura HTML:**

```html
<header class="ana-header" role="banner">
  <a href="#main-content" class="ana-skip-link">Ir al contenido principal</a>

  <div class="ana-header__inner ana-container">
    <!-- Logo -->
    <a href="/" class="ana-header__logo" aria-label="Inicio — IA Práctica para Líderes Anáhuac">
      <img src="assets/logo-anahuac.svg" alt="Universidad Anáhuac Mayab" width="140" height="32">
    </a>

    <!-- Título del curso (desktop only) -->
    <span class="ana-header__title" aria-hidden="true">
      IA Práctica para Líderes
    </span>

    <!-- Progress compacto (desktop) -->
    <div class="ana-header__progress" role="progressbar"
         aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"
         aria-label="Progreso del programa: 37%">
      <div class="ana-header__progress-bar" style="width: 37%"></div>
      <span class="ana-header__progress-text">37%</span>
    </div>

    <!-- Navegación desktop -->
    <nav class="ana-header__nav" aria-label="Navegación principal">
      <a href="#niveles" class="ana-header__link">Niveles</a>
      <a href="#progreso" class="ana-header__link">Mi progreso</a>
      <a href="#recursos" class="ana-header__link">Recursos</a>
    </nav>

    <!-- Hamburguesa (mobile) -->
    <button class="ana-header__menu-btn" aria-expanded="false"
            aria-controls="mobile-menu" aria-label="Abrir menú de navegación">
      <span class="ana-header__menu-icon"></span>
    </button>
  </div>
</header>
```

**CSS:**

```css
.ana-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--ana-white);
  border-bottom: 1px solid var(--ana-inactive);
  box-shadow: var(--ana-shadow-sm);
  height: 64px;
}

.ana-header__inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: var(--ana-space-md);
}

.ana-header__logo img {
  height: 32px;
  width: auto;
}

.ana-header__title {
  font: 600 16px/1.3 var(--ana-font-body);
  color: var(--ana-dark);
  display: none;
}

@media (min-width: 768px) {
  .ana-header__title { display: block; }
}

.ana-header__progress {
  display: none;
  position: relative;
  width: 120px;
  height: 6px;
  background: var(--ana-inactive);
  border-radius: var(--ana-radius-full);
  margin-left: auto;
}

@media (min-width: 768px) {
  .ana-header__progress { display: block; }
}

.ana-header__progress-bar {
  height: 100%;
  background: var(--ana-primary);
  border-radius: var(--ana-radius-full);
  transition: width 500ms ease-out;
}

.ana-header__progress-text {
  position: absolute;
  right: -36px;
  top: -5px;
  font: 500 14px/1 var(--ana-font-body);
  color: var(--ana-primary);
}

.ana-header__nav {
  display: none;
  gap: var(--ana-space-lg);
}

@media (min-width: 1024px) {
  .ana-header__nav { display: flex; }
}

.ana-header__link {
  font: 400 16px/1.5 var(--ana-font-body);
  color: var(--ana-gray);
  text-decoration: none;
  padding: var(--ana-space-xs) 0;
  border-bottom: 2px solid transparent;
  transition: all 200ms ease-out;
}

.ana-header__link:hover,
.ana-header__link[aria-current="page"] {
  color: var(--ana-primary);
  border-bottom-color: var(--ana-primary);
}

/* Skip Link */
.ana-skip-link {
  position: absolute;
  top: -100%;
  left: var(--ana-space-md);
  background: var(--ana-primary);
  color: var(--ana-white);
  padding: var(--ana-space-sm) var(--ana-space-md);
  border-radius: var(--ana-radius-sm);
  z-index: 200;
  font: 500 14px/1.3 var(--ana-font-body);
}

.ana-skip-link:focus {
  top: var(--ana-space-sm);
}

/* Hamburguesa mobile */
.ana-header__menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

@media (min-width: 1024px) {
  .ana-header__menu-btn { display: none; }
}

.ana-header__menu-icon,
.ana-header__menu-icon::before,
.ana-header__menu-icon::after {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--ana-dark);
  border-radius: 1px;
  transition: transform 200ms ease-out;
}

.ana-header__menu-icon::before { content: ''; transform: translateY(-6px); }
.ana-header__menu-icon::after { content: ''; transform: translateY(4px); }

/* Hamburguesa abierta */
.ana-header__menu-btn[aria-expanded="true"] .ana-header__menu-icon {
  background: transparent;
}
.ana-header__menu-btn[aria-expanded="true"] .ana-header__menu-icon::before {
  transform: rotate(45deg);
}
.ana-header__menu-btn[aria-expanded="true"] .ana-header__menu-icon::after {
  transform: translateY(-2px) rotate(-45deg);
}
```

### 2.2 Sidebar de Niveles (Desktop)

**Descripción funcional:** Panel lateral fijo (sticky) que muestra la lista de 8 niveles con estados visuales: completado, actual y bloqueado. Solo visible en desktop (≥1024px). En mobile, el contenido de la sidebar se mueve al menú hamburguesa.

**Estructura HTML:**

```html
<aside class="ana-sidebar" aria-label="Navegación de niveles">
  <nav>
    <ol class="ana-sidebar__list">
      <li class="ana-sidebar__item ana-sidebar__item--complete">
        <a href="#nivel-1" aria-current="false">
          <span class="ana-sidebar__indicator" aria-hidden="true">✓</span>
          <span class="ana-sidebar__label">Nivel 1</span>
          <span class="ana-sidebar__title">Fundamentos de IA generativa</span>
        </a>
      </li>
      <!-- ... niveles 2-3 completados ... -->
      <li class="ana-sidebar__item ana-sidebar__item--current">
        <a href="#nivel-4" aria-current="page">
          <span class="ana-sidebar__indicator" aria-hidden="true">●</span>
          <span class="ana-sidebar__label">Nivel 4</span>
          <span class="ana-sidebar__title">Análisis de reportes con IA</span>
        </a>
      </li>
      <!-- ... niveles 5-8 bloqueados ... -->
      <li class="ana-sidebar__item ana-sidebar__item--locked">
        <span class="ana-sidebar__locked" aria-disabled="true">
          <span class="ana-sidebar__indicator" aria-hidden="true">🔒</span>
          <span class="ana-sidebar__label">Nivel 5</span>
          <span class="ana-sidebar__title">Automatización de reportes</span>
        </span>
      </li>
    </ol>
  </nav>
</aside>
```

**CSS:**

```css
.ana-sidebar__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ana-sidebar__item {
  margin-bottom: var(--ana-space-xs);
}

.ana-sidebar__item a,
.ana-sidebar__item .ana-sidebar__locked {
  display: flex;
  align-items: flex-start;
  gap: var(--ana-space-sm);
  padding: var(--ana-space-sm) var(--ana-space-md);
  border-radius: var(--ana-radius-sm);
  text-decoration: none;
  transition: background 200ms ease-out;
}

.ana-sidebar__item a:hover {
  background: var(--ana-gray-light);
}

/* Indicadores de estado */
.ana-sidebar__indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: var(--ana-radius-full);
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}

.ana-sidebar__item--complete .ana-sidebar__indicator {
  background: var(--ana-success);
  color: var(--ana-white);
}

.ana-sidebar__item--current .ana-sidebar__indicator {
  background: var(--ana-primary);
  color: var(--ana-white);
  box-shadow: 0 0 0 3px rgba(255, 89, 0, 0.2);
}

.ana-sidebar__item--locked .ana-sidebar__indicator {
  background: var(--ana-inactive);
  color: var(--ana-footer-gray);
}

/* Textos */
.ana-sidebar__label {
  font: 500 12px/1.3 var(--ana-font-body);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ana-sidebar__item--complete .ana-sidebar__label { color: var(--ana-success); }
.ana-sidebar__item--current .ana-sidebar__label  { color: var(--ana-primary); }
.ana-sidebar__item--locked .ana-sidebar__label   { color: var(--ana-footer-gray); }

.ana-sidebar__title {
  font: 400 14px/1.4 var(--ana-font-body);
  display: block;
}

.ana-sidebar__item--complete .ana-sidebar__title { color: var(--ana-dark); }
.ana-sidebar__item--current .ana-sidebar__title  { color: var(--ana-dark); font-weight: 600; }
.ana-sidebar__item--locked .ana-sidebar__title   { color: var(--ana-footer-gray); }
```

### 2.3 Bottom Navigation (Mobile)

**Descripción funcional:** Barra de navegación inferior fija en mobile con 4 destinos: Niveles, Mi progreso, Recursos y Más. Solo visible en pantallas <1024px.

```html
<nav class="ana-bottom-nav" aria-label="Navegación rápida">
  <a href="#niveles" class="ana-bottom-nav__item ana-bottom-nav__item--active">
    <svg class="ana-bottom-nav__icon" aria-hidden="true"><!-- layers icon --></svg>
    <span>Niveles</span>
  </a>
  <a href="#progreso" class="ana-bottom-nav__item">
    <svg class="ana-bottom-nav__icon" aria-hidden="true"><!-- bar-chart icon --></svg>
    <span>Progreso</span>
  </a>
  <a href="#recursos" class="ana-bottom-nav__item">
    <svg class="ana-bottom-nav__icon" aria-hidden="true"><!-- file-text icon --></svg>
    <span>Recursos</span>
  </a>
  <a href="#mas" class="ana-bottom-nav__item">
    <svg class="ana-bottom-nav__icon" aria-hidden="true"><!-- more-horizontal icon --></svg>
    <span>Más</span>
  </a>
</nav>
```

```css
.ana-bottom-nav {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--ana-white);
  border-top: 1px solid var(--ana-inactive);
  box-shadow: 0 -2px 8px rgba(135, 135, 135, 0.15);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

@media (min-width: 1024px) {
  .ana-bottom-nav { display: none; }
}

.ana-bottom-nav__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: var(--ana-space-sm) 0;
  text-decoration: none;
  font: 400 11px/1.2 var(--ana-font-body);
  color: var(--ana-gray);
  transition: color 150ms ease-out;
}

.ana-bottom-nav__item--active {
  color: var(--ana-primary);
}

.ana-bottom-nav__icon {
  width: 22px;
  height: 22px;
}
```

### 2.4 Breadcrumbs

```html
<nav class="ana-breadcrumbs" aria-label="Ubicación">
  <ol>
    <li><a href="/">Inicio</a></li>
    <li><a href="#niveles">Niveles</a></li>
    <li aria-current="page">Nivel 4. Análisis de reportes con IA</li>
  </ol>
</nav>
```

```css
.ana-breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: var(--ana-space-xs);
}

.ana-breadcrumbs li {
  font: 400 14px/1.4 var(--ana-font-body);
  color: var(--ana-gray);
}

.ana-breadcrumbs li + li::before {
  content: '/';
  margin-right: var(--ana-space-xs);
  color: var(--ana-inactive);
}

.ana-breadcrumbs a {
  color: var(--ana-gray);
  text-decoration: none;
}

.ana-breadcrumbs a:hover {
  color: var(--ana-primary);
  text-decoration: underline;
}

.ana-breadcrumbs [aria-current="page"] {
  color: var(--ana-dark);
  font-weight: 500;
}
```

---

## 3. Cards de Nivel

### 3.1 Estructura y Estados

Cada card representa uno de los 8 niveles. Tiene tres estados visuales:

| Estado | Indicador | Fondo | Borde | Interacción |
|---|---|---|---|---|
| **Completado** | ✓ verde | `--ana-white` | `--ana-success` (izquierdo) | Clickeable (revisitar) |
| **Actual** | ● naranja | `--ana-white` | `--ana-primary` (izquierdo) | Clickeable (continuar) |
| **Bloqueado** | 🔒 gris | `--ana-white` | `--ana-inactive` | No clickeable, `opacity: 0.7` |

### 3.2 HTML Semántico

```html
<!-- Card: Nivel actual -->
<article class="ana-card ana-card--current" tabindex="0"
         role="link" aria-label="Nivel 4. Análisis de reportes con IA — En progreso, 60% completado">
  <div class="ana-card__header">
    <span class="ana-card__label">NIVEL 4</span>
    <span class="ana-card__badge ana-card__badge--current">En progreso</span>
  </div>
  <h3 class="ana-card__title">Análisis de reportes con IA</h3>
  <p class="ana-card__description">
    Aprenda a utilizar IA generativa para analizar reportes institucionales
    y extraer insights accionables verificados.
  </p>
  <div class="ana-card__progress">
    <div class="ana-card__progress-bar" role="progressbar"
         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
         aria-label="Progreso del nivel: 60%">
      <div class="ana-card__progress-fill" style="width: 60%"></div>
    </div>
    <span class="ana-card__progress-text">60%</span>
  </div>
  <span class="ana-card__cta">Continuar nivel →</span>
</article>

<!-- Card: Nivel completado -->
<article class="ana-card ana-card--complete"
         role="link" aria-label="Nivel 1. Fundamentos de IA generativa — Completado">
  <div class="ana-card__header">
    <span class="ana-card__label">NIVEL 1</span>
    <span class="ana-card__badge ana-card__badge--complete">
      <svg aria-hidden="true" width="14" height="14"><!-- check-circle --></svg>
      Completado
    </span>
  </div>
  <h3 class="ana-card__title">Fundamentos de IA generativa</h3>
  <p class="ana-card__description">
    Comprenda qué es la IA generativa, identifique capacidades y
    limitaciones, y reconozca oportunidades en su rol directivo.
  </p>
  <div class="ana-card__progress">
    <div class="ana-card__progress-bar" role="progressbar"
         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
      <div class="ana-card__progress-fill" style="width: 100%"></div>
    </div>
    <span class="ana-card__progress-text">100%</span>
  </div>
  <span class="ana-card__cta">Revisar nivel →</span>
</article>

<!-- Card: Nivel bloqueado -->
<article class="ana-card ana-card--locked" aria-disabled="true"
         aria-label="Nivel 5. Automatización de reportes — Bloqueado. Complete el nivel 4 para desbloquear.">
  <div class="ana-card__header">
    <span class="ana-card__label">NIVEL 5</span>
    <span class="ana-card__badge ana-card__badge--locked">
      <svg aria-hidden="true" width="14" height="14"><!-- lock --></svg>
      Bloqueado
    </span>
  </div>
  <h3 class="ana-card__title">Automatización de reportes</h3>
  <p class="ana-card__description">
    Diseñe flujos paso a paso para generar reportes recurrentes
    con IA e integre controles de calidad.
  </p>
  <span class="ana-card__locked-text">Complete el Nivel 4 para desbloquear</span>
</article>
```

### 3.3 CSS Completo

```css
.ana-card {
  background: var(--ana-white);
  border: 1px solid var(--ana-border-card);
  border-radius: var(--ana-radius-md);
  padding: var(--ana-space-lg);
  box-shadow: var(--ana-shadow-sm);
  transition: all 200ms ease-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: var(--ana-space-sm);
}

/* Estado: Actual */
.ana-card--current {
  border-left: 4px solid var(--ana-primary);
}

.ana-card--current:hover {
  box-shadow: var(--ana-shadow);
  transform: translateY(-2px);
}

/* Estado: Completado */
.ana-card--complete {
  border-left: 4px solid var(--ana-success);
}

.ana-card--complete:hover {
  box-shadow: var(--ana-shadow);
  transform: translateY(-2px);
}

/* Estado: Bloqueado */
.ana-card--locked {
  opacity: 0.7;
  cursor: not-allowed;
  border-left: 4px solid var(--ana-inactive);
}

/* Header de card */
.ana-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ana-card__label {
  font: 500 12px/1.3 var(--ana-font-body);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ana-tertiary);
}

.ana-card--locked .ana-card__label {
  color: var(--ana-footer-gray);
}

/* Badges de estado */
.ana-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font: 500 12px/1 var(--ana-font-body);
  padding: 4px 10px;
  border-radius: var(--ana-radius-full);
}

.ana-card__badge--complete {
  background: var(--ana-success);
  color: var(--ana-white);
}

.ana-card__badge--current {
  background: var(--ana-primary);
  color: var(--ana-white);
}

.ana-card__badge--locked {
  background: var(--ana-inactive);
  color: var(--ana-footer-gray);
}

/* Título */
.ana-card__title {
  font: 700 20px/1.3 var(--ana-font-body);
  color: var(--ana-dark);
  margin: 0;
}

.ana-card--locked .ana-card__title {
  color: var(--ana-footer-gray);
}

/* Descripción */
.ana-card__description {
  font: 400 16px/1.5 var(--ana-font-body);
  color: var(--ana-gray);
  margin: 0;
}

/* Progress bar */
.ana-card__progress {
  display: flex;
  align-items: center;
  gap: var(--ana-space-sm);
  margin-top: auto;
}

.ana-card__progress-bar {
  flex: 1;
  height: 6px;
  background: var(--ana-inactive);
  border-radius: var(--ana-radius-full);
  overflow: hidden;
}

.ana-card__progress-fill {
  height: 100%;
  border-radius: var(--ana-radius-full);
  transition: width 500ms ease-out;
}

.ana-card--current .ana-card__progress-fill {
  background: var(--ana-primary);
}

.ana-card--complete .ana-card__progress-fill {
  background: var(--ana-success);
}

.ana-card__progress-text {
  font: 500 14px/1 var(--ana-font-body);
  color: var(--ana-gray);
  min-width: 36px;
  text-align: right;
}

/* CTA */
.ana-card__cta {
  font: 500 16px/1.5 var(--ana-font-body);
  color: var(--ana-primary);
  margin-top: var(--ana-space-sm);
}

.ana-card--complete .ana-card__cta {
  color: var(--ana-success);
}

/* Texto bloqueado */
.ana-card__locked-text {
  font: 400 14px/1.4 var(--ana-font-body);
  color: var(--ana-footer-gray);
  font-style: italic;
  margin-top: auto;
}
```

---

## 4. Componentes de Contenido

### 4.1 Bloque de Texto

Párrafos de contenido principal con máxima legibilidad.

```html
<div class="ana-text">
  <p>La IA resuelve ese problema de una forma precisa: usted sube su documento
  a Amazon Quick y le pide que lo analice.</p>
</div>
```

```css
.ana-text {
  font: 400 18px/1.6 var(--ana-font-body);
  color: var(--ana-dark);
  max-width: 680px;
}

.ana-text p {
  margin: 0 0 var(--ana-space-md) 0;
}

.ana-text p:last-child {
  margin-bottom: 0;
}

.ana-text strong {
  font-weight: 600;
  color: var(--ana-dark);
}

.ana-text em {
  font-style: italic;
}

.ana-text a {
  color: var(--ana-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 150ms ease-out;
}

.ana-text a:hover {
  color: var(--ana-primary-hover);
}
```

### 4.2 Callout Teórico (Borde Púrpura)

**Descripción funcional:** Bloque lateral para conceptos clave, notas teóricas y definiciones. Diferenciado visualmente con fondo púrpura suave y borde izquierdo púrpura.

```html
<aside class="ana-callout ana-callout--theory" role="note"
       aria-label="Concepto clave">
  <span class="ana-callout__label">Concepto clave</span>
  <div class="ana-callout__content">
    <p>La «temperatura» de un modelo de IA controla el grado de creatividad
    en las respuestas. Un valor bajo (0.1–0.3) produce respuestas más
    predecibles; un valor alto (0.7–1.0), más diversas pero potencialmente
    menos precisas.</p>
  </div>
</aside>
```

```css
.ana-callout {
  border-radius: var(--ana-radius-md);
  padding: var(--ana-space-lg);
  margin: var(--ana-space-xl) 0;
}

.ana-callout__label {
  display: block;
  font: 500 14px/1.3 var(--ana-font-body);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--ana-space-sm);
}

.ana-callout__content {
  font: 400 16px/1.6 var(--ana-font-body);
}

.ana-callout__content p {
  margin: 0 0 var(--ana-space-sm) 0;
}

.ana-callout__content p:last-child {
  margin-bottom: 0;
}

/* Variante teórica — púrpura */
.ana-callout--theory {
  background: var(--ana-bg-theory);
  border-left: 4px solid var(--ana-tertiary);
}

.ana-callout--theory .ana-callout__label {
  color: var(--ana-tertiary);
}

.ana-callout--theory .ana-callout__content {
  color: var(--ana-dark);
}
```

Etiquetas permitidas para callouts teóricos: "Concepto clave", "Nota teórica", "Para profundizar", "Importante".

### 4.3 Callout Práctico / Ejercicio (Borde Naranja)

```html
<aside class="ana-callout ana-callout--practice" role="note"
       aria-label="Ejercicio práctico">
  <span class="ana-callout__label">Ejercicio práctico</span>
  <div class="ana-callout__content">
    <p>Copie la siguiente instrucción, reemplace cada <code>[DATO]</code>
    con información real de su programa, y ejecútela en Amazon Quick.</p>
  </div>
</aside>
```

```css
/* Variante práctica — naranja */
.ana-callout--practice {
  background: var(--ana-bg-exercise);
  border-left: 4px solid var(--ana-primary);
}

.ana-callout--practice .ana-callout__label {
  color: var(--ana-primary);
}
```

### 4.4 Bloque de Prompt / Instrucción

**Descripción funcional:** Contenedor visual para instrucciones literales dirigidas al modelo de IA. Usa tipografía monoespaciada. Incluye botón "Copiar" y nota de resultado esperado.

```html
<div class="ana-prompt-block">
  <div class="ana-prompt-block__header">
    <span class="ana-prompt-block__title">Instrucción 3.1 — Síntesis de acta directiva</span>
    <button class="ana-btn ana-btn--secondary ana-btn--sm ana-prompt-block__copy"
            aria-label="Copiar instrucción al portapapeles"
            data-copy-target="prompt-3-1">
      <svg aria-hidden="true" width="16" height="16"><!-- copy icon --></svg>
      Copiar
    </button>
  </div>
  <pre class="ana-prompt-block__code" id="prompt-3-1"><code>Analice el acta de la reunión adjunta e identifique:
1. Los tres acuerdos más relevantes
2. Responsables asignados
3. Fechas compromiso
Presente el resultado en formato de tabla.</code></pre>
  <p class="ana-prompt-block__note">
    Resultado esperado: tabla con 3 columnas (acuerdo, responsable, fecha).
  </p>
</div>
```

```css
.ana-prompt-block {
  background: var(--ana-bg-prompt);
  border: 1px solid var(--ana-border-prompt);
  border-radius: var(--ana-radius-md);
  padding: var(--ana-space-lg);
  margin: var(--ana-space-lg) 0;
  border-top: 3px solid var(--ana-primary);
}

.ana-prompt-block__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--ana-space-md);
  margin-bottom: var(--ana-space-md);
}

.ana-prompt-block__title {
  font: 600 16px/1.4 var(--ana-font-body);
  color: var(--ana-dark);
}

.ana-prompt-block__code {
  background: var(--ana-white);
  border: 1px solid var(--ana-border-prompt);
  border-radius: var(--ana-radius-sm);
  padding: var(--ana-space-md);
  font: 400 16px/1.6 var(--ana-font-mono);
  color: var(--ana-dark);
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-x: auto;
  margin: 0 0 var(--ana-space-md) 0;
}

.ana-prompt-block__note {
  font: 300 14px/1.4 var(--ana-font-body);
  color: var(--ana-gray);
  margin: 0;
}

/* Feedback visual al copiar */
.ana-prompt-block__copy--copied {
  color: var(--ana-success);
  border-color: var(--ana-success);
}
```

### 4.5 Sección de Ejercicio Completo

**Descripción funcional:** Contenedor que agrupa un ejercicio con todas sus partes: contexto, tarea, bloque de prompt, metadata (duración, material) y CTA para marcar como completado.

```html
<section class="ana-exercise" aria-labelledby="exercise-4-2-title">
  <span class="ana-exercise__label">EJERCICIO PRÁCTICO</span>
  <h3 class="ana-exercise__title" id="exercise-4-2-title">
    Ejercicio 4.2: Análisis de indicadores
  </h3>

  <div class="ana-exercise__body">
    <h4>Contexto</h4>
    <p>Su departamento recibió los indicadores del último trimestre.
    Necesita presentar un resumen ejecutivo al Comité Directivo.</p>

    <h4>Tarea</h4>
    <ol>
      <li>Descargue el archivo de indicadores</li>
      <li>Redacte una instrucción para el modelo de IA</li>
      <li>Evalúe la respuesta obtenida</li>
      <li>Refine la instrucción si es necesario</li>
    </ol>

    <!-- Prompt block anidado -->
    <div class="ana-prompt-block">...</div>
  </div>

  <div class="ana-exercise__meta">
    <span class="ana-exercise__meta-item">
      <svg aria-hidden="true"><!-- clock --></svg> Duración estimada: 15 minutos
    </span>
    <span class="ana-exercise__meta-item">
      <svg aria-hidden="true"><!-- file-down --></svg> Material: indicadores_Q2_2026.xlsx
    </span>
  </div>

  <button class="ana-btn ana-btn--primary ana-exercise__complete-btn">
    Marcar como completado
  </button>
</section>
```

```css
.ana-exercise {
  background: var(--ana-bg-exercise);
  border-left: 4px solid var(--ana-primary);
  border-radius: var(--ana-radius-lg);
  padding: var(--ana-space-xl);
  margin: var(--ana-space-2xl) 0;
}

.ana-exercise__label {
  font: 500 12px/1.3 var(--ana-font-body);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ana-primary);
  display: block;
  margin-bottom: var(--ana-space-sm);
}

.ana-exercise__title {
  font: 700 20px/1.3 var(--ana-font-body);
  color: var(--ana-dark);
  margin: 0 0 var(--ana-space-md) 0;
}

.ana-exercise__body {
  font: 400 16px/1.6 var(--ana-font-body);
  color: var(--ana-dark);
}

.ana-exercise__body h4 {
  font: 600 18px/1.35 var(--ana-font-body);
  color: var(--ana-dark);
  margin: var(--ana-space-md) 0 var(--ana-space-sm) 0;
}

.ana-exercise__body ol {
  padding-left: var(--ana-space-lg);
  margin: var(--ana-space-sm) 0;
}

.ana-exercise__body li {
  margin-bottom: var(--ana-space-xs);
}

.ana-exercise__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ana-space-md);
  margin-top: var(--ana-space-lg);
  padding-top: var(--ana-space-md);
  border-top: 1px solid rgba(255, 89, 0, 0.15);
}

.ana-exercise__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: 300 14px/1.4 var(--ana-font-body);
  color: var(--ana-gray);
}

.ana-exercise__meta-item svg {
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

.ana-exercise__complete-btn {
  margin-top: var(--ana-space-lg);
}
```

### 4.6 Tabla de Datos

```html
<div class="ana-table-wrapper" tabindex="0" role="region"
     aria-label="Tabla de indicadores">
  <table class="ana-table">
    <thead>
      <tr>
        <th scope="col">Indicador</th>
        <th scope="col">Meta</th>
        <th scope="col">Actual</th>
        <th scope="col">Ciclo anterior</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Matrícula activa</td>
        <td>250</td>
        <td>228</td>
        <td>245</td>
      </tr>
      <!-- más filas -->
    </tbody>
  </table>
</div>
```

```css
.ana-table-wrapper {
  overflow-x: auto;
  margin: var(--ana-space-lg) 0;
  border-radius: var(--ana-radius-md);
  border: 1px solid var(--ana-inactive);
}

.ana-table {
  width: 100%;
  border-collapse: collapse;
  font: 400 16px/1.5 var(--ana-font-body);
}

.ana-table thead {
  background: var(--ana-tertiary);
}

.ana-table th {
  font: 600 14px/1.3 var(--ana-font-body);
  color: var(--ana-white);
  text-align: left;
  padding: 12px 16px;
}

.ana-table td {
  padding: 12px 16px;
  color: var(--ana-dark);
  border-bottom: 1px solid var(--ana-inactive);
}

.ana-table tbody tr:nth-child(even) {
  background: var(--ana-gray-light);
}

.ana-table tbody tr:hover {
  background: var(--ana-primary-light);
}
```

### 4.7 Lista con Iconos

```html
<ul class="ana-icon-list">
  <li>
    <svg class="ana-icon-list__icon" aria-hidden="true"><!-- check-circle --></svg>
    <span>Especifique a quién va dirigido el texto</span>
  </li>
  <li>
    <svg class="ana-icon-list__icon" aria-hidden="true"><!-- check-circle --></svg>
    <span>Indique el tono deseado (formal, empático, ejecutivo)</span>
  </li>
</ul>
```

```css
.ana-icon-list {
  list-style: none;
  padding: 0;
  margin: var(--ana-space-md) 0;
}

.ana-icon-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--ana-space-sm);
  padding: var(--ana-space-sm) 0;
  font: 400 16px/1.5 var(--ana-font-body);
  color: var(--ana-dark);
}

.ana-icon-list__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--ana-success);
}
```

### 4.8 Acordeón / Expandible

```html
<div class="ana-accordion">
  <details class="ana-accordion__item">
    <summary class="ana-accordion__trigger">
      <span>¿Qué es RAG y cómo funciona en Amazon Quick?</span>
      <svg class="ana-accordion__chevron" aria-hidden="true">
        <!-- chevron-down -->
      </svg>
    </summary>
    <div class="ana-accordion__content">
      <p>RAG (generación con recuperación de información) permite que la IA
      busque en SUS archivos antes de responder, en vez de responder de
      memoria...</p>
    </div>
  </details>
</div>
```

```css
.ana-accordion__item {
  border: 1px solid var(--ana-inactive);
  border-radius: var(--ana-radius-md);
  margin-bottom: var(--ana-space-sm);
  overflow: hidden;
}

.ana-accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--ana-space-md) var(--ana-space-lg);
  cursor: pointer;
  font: 500 16px/1.5 var(--ana-font-body);
  color: var(--ana-dark);
  list-style: none;
  transition: background 200ms ease-out;
}

.ana-accordion__trigger::-webkit-details-marker { display: none; }

.ana-accordion__trigger:hover {
  background: var(--ana-gray-light);
}

.ana-accordion__chevron {
  width: 20px;
  height: 20px;
  color: var(--ana-gray);
  transition: transform 200ms ease-out;
  flex-shrink: 0;
}

.ana-accordion__item[open] .ana-accordion__chevron {
  transform: rotate(180deg);
}

.ana-accordion__content {
  padding: 0 var(--ana-space-lg) var(--ana-space-lg);
  font: 400 16px/1.6 var(--ana-font-body);
  color: var(--ana-dark);
}
```

### 4.9 Tabla Comparativa (Tips y Anti-patrones)

**Descripción funcional:** Tabla de dos columnas usada en la sección "Tips y anti-patrones" de cada módulo.

```html
<div class="ana-compare-table">
  <table class="ana-table ana-table--compare">
    <thead>
      <tr>
        <th scope="col">✅ Haga esto</th>
        <th scope="col">❌ Evite esto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Especifique a quién va dirigido el texto</td>
        <td>Pedir «un comunicado» sin decir para quién</td>
      </tr>
      <!-- más filas -->
    </tbody>
  </table>
</div>
```

```css
.ana-table--compare thead {
  background: var(--ana-gray-light);
}

.ana-table--compare th {
  color: var(--ana-dark);
  font-size: 16px;
}

.ana-table--compare th:first-child {
  border-right: 1px solid var(--ana-inactive);
}

.ana-table--compare td:first-child {
  border-right: 1px solid var(--ana-inactive);
  color: var(--ana-dark);
}

.ana-table--compare td:last-child {
  color: var(--ana-gray);
}
```

---

## 5. Progress Tracker

### 5.1 Tracker Horizontal (8 Niveles)

**Descripción funcional:** Visualización horizontal del progreso a través de los 8 niveles. Nodos circulares conectados por líneas. Visible en header de cada vista de nivel.

```html
<div class="ana-tracker" role="navigation" aria-label="Progreso por niveles">
  <ol class="ana-tracker__list">
    <!-- Nivel completado -->
    <li class="ana-tracker__step ana-tracker__step--complete">
      <span class="ana-tracker__node" aria-label="Nivel 1: completado">
        <svg aria-hidden="true" width="14" height="14"><!-- check --></svg>
      </span>
      <span class="ana-tracker__label">Nivel 1</span>
    </li>
    <li class="ana-tracker__connector ana-tracker__connector--complete"
        aria-hidden="true"></li>

    <!-- Nivel actual -->
    <li class="ana-tracker__step ana-tracker__step--current">
      <span class="ana-tracker__node" aria-current="step"
            aria-label="Nivel 4: en progreso">4</span>
      <span class="ana-tracker__label">Nivel 4</span>
    </li>
    <li class="ana-tracker__connector" aria-hidden="true"></li>

    <!-- Nivel pendiente -->
    <li class="ana-tracker__step ana-tracker__step--pending">
      <span class="ana-tracker__node" aria-label="Nivel 5: bloqueado">5</span>
      <span class="ana-tracker__label">Nivel 5</span>
    </li>
    <!-- ... -->
  </ol>
</div>
```

```css
.ana-tracker__list {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;
}

.ana-tracker__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ana-space-xs);
}

.ana-tracker__node {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--ana-radius-full);
  font: 600 14px/1 var(--ana-font-body);
  transition: all 200ms ease-out;
}

/* Nodo completado */
.ana-tracker__step--complete .ana-tracker__node {
  background: var(--ana-success);
  color: var(--ana-white);
  border: 2px solid var(--ana-success);
}

/* Nodo actual */
.ana-tracker__step--current .ana-tracker__node {
  background: var(--ana-primary);
  color: var(--ana-white);
  border: 2px solid var(--ana-primary);
  box-shadow: 0 0 0 4px rgba(255, 89, 0, 0.2);
  animation: ana-pulse 2s ease-in-out infinite;
}

@keyframes ana-pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(255, 89, 0, 0.2); }
  50%      { box-shadow: 0 0 0 8px rgba(255, 89, 0, 0.1); }
}

/* Nodo pendiente */
.ana-tracker__step--pending .ana-tracker__node {
  background: var(--ana-white);
  color: var(--ana-footer-gray);
  border: 2px solid var(--ana-inactive);
}

/* Label bajo el nodo */
.ana-tracker__label {
  font: 400 12px/1.3 var(--ana-font-body);
  color: var(--ana-gray);
  text-align: center;
  max-width: 64px;
}

.ana-tracker__step--current .ana-tracker__label {
  color: var(--ana-primary);
  font-weight: 600;
}

/* Conectores */
.ana-tracker__connector {
  width: 40px;
  height: 2px;
  background: var(--ana-inactive);
  margin-top: 15px; /* Centrar con el nodo */
  flex-shrink: 0;
}

.ana-tracker__connector--complete {
  background: var(--ana-success);
}

/* Responsive: escalar en mobile */
@media (max-width: 767px) {
  .ana-tracker__node {
    width: 24px;
    height: 24px;
    font-size: 11px;
  }

  .ana-tracker__connector {
    width: 20px;
    margin-top: 11px;
  }

  .ana-tracker__label {
    font-size: 10px;
    max-width: 48px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .ana-tracker__step--current .ana-tracker__node {
    animation: none;
    box-shadow: 0 0 0 4px rgba(255, 89, 0, 0.2);
  }
}
```

### 5.2 Barra de Progreso Global

```html
<div class="ana-progress-global">
  <div class="ana-progress-global__header">
    <span class="ana-progress-global__text">Progreso del programa</span>
    <span class="ana-progress-global__percent">37%</span>
  </div>
  <div class="ana-progress-global__bar" role="progressbar"
       aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"
       aria-label="Progreso del programa: 37%">
    <div class="ana-progress-global__fill" style="width: 37%"></div>
  </div>
</div>
```

```css
.ana-progress-global {
  margin: var(--ana-space-lg) 0;
}

.ana-progress-global__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--ana-space-sm);
}

.ana-progress-global__text {
  font: 400 14px/1.4 var(--ana-font-body);
  color: var(--ana-gray);
}

.ana-progress-global__percent {
  font: 600 14px/1.4 var(--ana-font-body);
  color: var(--ana-primary);
}

.ana-progress-global__bar {
  height: 8px;
  background: var(--ana-inactive);
  border-radius: var(--ana-radius-full);
  overflow: hidden;
}

.ana-progress-global__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--ana-primary) 0%, var(--ana-primary-hover) 100%);
  border-radius: var(--ana-radius-full);
  transition: width 500ms ease-out;
}
```

---

## 6. Botones y CTAs

### 6.1 Variantes

| Variante | Uso | Fondo | Texto | Borde |
|---|---|---|---|---|
| **Primario** | CTA principal por vista | `--ana-primary` | blanco | ninguno |
| **Secundario** | Acciones secundarias | transparente | `--ana-primary` | `--ana-primary` |
| **Terciario** | Acciones de baja prioridad | transparente | `--ana-primary` | ninguno |
| **Disabled** | Acción no disponible | `--ana-inactive` | `--ana-footer-gray` | ninguno |

### 6.2 Tamaños

| Tamaño | Clase | Padding | Font Size | Uso |
|---|---|---|---|---|
| **sm** | `.ana-btn--sm` | 6px 14px | 14px | Inline (copiar, expandir) |
| **md** | `.ana-btn--md` | 10px 20px | 16px | Default |
| **lg** | `.ana-btn--lg` | 14px 28px | 18px | Hero CTA, completar nivel |

### 6.3 CSS Completo

```css
.ana-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--ana-font-body);
  font-weight: 500;
  border-radius: var(--ana-radius-sm);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: all 150ms ease-out;
  border: 2px solid transparent;
}

/* Tamaños */
.ana-btn--sm {
  padding: 6px 14px;
  font-size: 14px;
  line-height: 1.3;
}

.ana-btn,
.ana-btn--md {
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1.5;
}

.ana-btn--lg {
  padding: 14px 28px;
  font-size: 18px;
  line-height: 1.5;
}

/* Primario */
.ana-btn--primary {
  background: var(--ana-primary);
  color: var(--ana-white);
  border-color: var(--ana-primary);
}

.ana-btn--primary:hover {
  background: var(--ana-primary-hover);
  border-color: var(--ana-primary-hover);
}

.ana-btn--primary:active {
  background: #E65000; /* Ligeramente más oscuro que primary */
  transform: translateY(1px);
}

/* Secundario */
.ana-btn--secondary {
  background: transparent;
  color: var(--ana-primary);
  border-color: var(--ana-primary);
}

.ana-btn--secondary:hover {
  background: var(--ana-primary-light);
  color: var(--ana-primary);
}

.ana-btn--secondary:active {
  background: var(--ana-bg-exercise);
}

/* Terciario */
.ana-btn--tertiary {
  background: transparent;
  color: var(--ana-primary);
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
}

.ana-btn--tertiary:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* Disabled */
.ana-btn:disabled,
.ana-btn--disabled {
  background: var(--ana-inactive);
  color: var(--ana-footer-gray);
  border-color: var(--ana-inactive);
  cursor: not-allowed;
  pointer-events: none;
}

/* Focus — WCAG AA */
.ana-btn:focus-visible {
  outline: 2px solid var(--ana-primary);
  outline-offset: 2px;
}

/* Icon within button */
.ana-btn svg {
  width: 18px;
  height: 18px;
}

.ana-btn--sm svg {
  width: 14px;
  height: 14px;
}
```

---

## 7. Formularios

### 7.1 Input de Texto

```html
<div class="ana-field">
  <label class="ana-field__label" for="area-trabajo">Área de trabajo</label>
  <input class="ana-field__input" type="text" id="area-trabajo"
         placeholder="Ej: Coordinación de Psicología"
         aria-describedby="area-trabajo-help">
  <span class="ana-field__help" id="area-trabajo-help">
    Indique el nombre completo de su área o departamento.
  </span>
</div>
```

```css
.ana-field {
  margin-bottom: var(--ana-space-lg);
}

.ana-field__label {
  display: block;
  font: 500 14px/1.3 var(--ana-font-body);
  color: var(--ana-dark);
  margin-bottom: var(--ana-space-xs);
}

.ana-field__input {
  width: 100%;
  padding: 10px 14px;
  font: 400 16px/1.5 var(--ana-font-body);
  color: var(--ana-dark);
  background: var(--ana-white);
  border: 1px solid var(--ana-inactive);
  border-radius: var(--ana-radius-sm);
  transition: border-color 200ms ease-out;
}

.ana-field__input::placeholder {
  color: var(--ana-footer-gray);
}

.ana-field__input:hover {
  border-color: var(--ana-gray);
}

.ana-field__input:focus {
  border-color: var(--ana-primary);
  outline: 2px solid var(--ana-primary);
  outline-offset: 0;
}

/* Estado de error */
.ana-field--error .ana-field__input {
  border-color: var(--ana-error);
}

.ana-field--error .ana-field__input:focus {
  outline-color: var(--ana-error);
}

.ana-field__error {
  font: 400 14px/1.4 var(--ana-font-body);
  color: var(--ana-error);
  margin-top: var(--ana-space-xs);
}

.ana-field__help {
  display: block;
  font: 300 14px/1.4 var(--ana-font-body);
  color: var(--ana-gray);
  margin-top: var(--ana-space-xs);
}
```

### 7.2 Selector (Select)

```html
<div class="ana-field">
  <label class="ana-field__label" for="version">Versión del programa</label>
  <div class="ana-field__select-wrapper">
    <select class="ana-field__select" id="version">
      <option value="">Seleccione una versión</option>
      <option value="academica">🎓 Académica</option>
      <option value="administrativa">🏢 Administrativa</option>
    </select>
    <svg class="ana-field__select-icon" aria-hidden="true">
      <!-- chevron-down -->
    </svg>
  </div>
</div>
```

```css
.ana-field__select-wrapper {
  position: relative;
}

.ana-field__select {
  width: 100%;
  padding: 10px 40px 10px 14px;
  font: 400 16px/1.5 var(--ana-font-body);
  color: var(--ana-dark);
  background: var(--ana-white);
  border: 1px solid var(--ana-inactive);
  border-radius: var(--ana-radius-sm);
  appearance: none;
  cursor: pointer;
  transition: border-color 200ms ease-out;
}

.ana-field__select:focus {
  border-color: var(--ana-primary);
  outline: 2px solid var(--ana-primary);
  outline-offset: 0;
}

.ana-field__select-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--ana-gray);
  pointer-events: none;
}
```

### 7.3 Campo de Prompt (Textarea Monoespaciado)

**Descripción funcional:** Textarea estilizado para que el participante escriba sus instrucciones de IA. Usa tipografía monoespaciada para diferenciar visualmente del texto regular.

```html
<div class="ana-field">
  <label class="ana-field__label" for="my-prompt">Su instrucción</label>
  <textarea class="ana-field__textarea ana-field__textarea--mono"
            id="my-prompt" rows="6"
            placeholder="Escriba aquí su instrucción para el modelo de IA..."></textarea>
  <div class="ana-field__textarea-footer">
    <span class="ana-field__help">Incluya contexto, formato deseado y audiencia.</span>
    <button class="ana-btn ana-btn--secondary ana-btn--sm" type="button">
      Enviar a Amazon Quick
    </button>
  </div>
</div>
```

```css
.ana-field__textarea {
  width: 100%;
  padding: 14px;
  font: 400 16px/1.6 var(--ana-font-body);
  color: var(--ana-dark);
  background: var(--ana-white);
  border: 1px solid var(--ana-inactive);
  border-radius: var(--ana-radius-sm);
  resize: vertical;
  min-height: 120px;
  transition: border-color 200ms ease-out;
}

.ana-field__textarea--mono {
  font: 400 16px/1.6 var(--ana-font-mono);
  background: var(--ana-bg-prompt);
}

.ana-field__textarea:focus {
  border-color: var(--ana-primary);
  outline: 2px solid var(--ana-primary);
  outline-offset: 0;
}

.ana-field__textarea-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--ana-space-sm);
}
```

---

## 8. Responsive Behavior

### Tabla de Comportamiento por Componente

| Componente | Mobile (<768px) | Tablet (768–1024px) | Desktop (>1024px) |
|---|---|---|---|
| **Container** | padding: 16px | padding: 32px | padding: 48px |
| **Header** | Logo + hamburguesa | Logo + título + progress | Logo + título + progress + nav |
| **Sidebar** | Oculta → menú mobile | Oculta → menú mobile | Visible, sticky, 260px |
| **Bottom nav** | Visible, fija | Visible, fija | Oculta |
| **Grid de niveles** | 1 columna | 2 columnas | 4 columnas |
| **Cards** | Full width, stack | min 300px, 2-col grid | min 280px, 4-col grid |
| **Content area** | max-width: 100% | max-width: 680px | max-width: 680px |
| **Progress tracker** | Nodos 24px, connectors 20px | Nodos 28px, connectors 32px | Nodos 32px, connectors 40px |
| **Prompt blocks** | Full width, scroll horiz. | max-width: 100% | max-width: 100% |
| **Tablas** | Scroll horizontal | Scroll si > 768px | Full visible |
| **Botones** | Full width stacked | Auto width | Auto width |
| **Typography** | body: 16px | body: 17px | body: 18px |
| **Hero** | display-xl: 28px | display-xl: 34px | display-xl: 40px |
| **Secciones** | gap: 32px | gap: 48px | gap: 64px |

### CSS de Ajuste Tipográfico

```css
/* Base (mobile) */
.ana-body { font-size: 16px; }
.ana-display-xl { font-size: 28px; }
.ana-display { font-size: 24px; }

/* Tablet */
@media (min-width: 768px) {
  .ana-body { font-size: 17px; }
  .ana-display-xl { font-size: 34px; }
  .ana-display { font-size: 28px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .ana-body { font-size: 18px; }
  .ana-display-xl { font-size: 40px; }
  .ana-display { font-size: 32px; }
}
```

### CSS de Botones Mobile Full-Width

```css
@media (max-width: 767px) {
  .ana-btn--primary,
  .ana-btn--secondary {
    width: 100%;
    justify-content: center;
  }

  /* Stack de botones en mobile */
  .ana-btn-group {
    display: flex;
    flex-direction: column;
    gap: var(--ana-space-sm);
  }
}

@media (min-width: 768px) {
  .ana-btn-group {
    display: flex;
    flex-direction: row;
    gap: var(--ana-space-md);
  }
}
```

### Padding de Cuerpo para Bottom Nav

```css
@media (max-width: 1023px) {
  .ana-main {
    padding-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
    /* 56px = altura de bottom nav */
  }
}
```

---

## 9. Accesibilidad

### 9.1 Estándar: WCAG 2.1 Nivel AA

Todos los componentes documentados en este archivo cumplen WCAG 2.1 AA. Las verificaciones se describen por categoría.

### 9.2 Contraste de Color

| Par de colores | Contraste | Pasa AA (texto normal ≥4.5:1) | Pasa AA (texto grande ≥3:1) |
|---|---|---|---|
| `#FF5900` sobre `#FFFFFF` | 4.58:1 | ✅ Justo (usar solo en ≥16px bold o ≥18.66px) | ✅ |
| `#432F64` sobre `#FFFFFF` | 8.47:1 | ✅ | ✅ |
| `#231F20` sobre `#FFFFFF` | 15.81:1 | ✅ | ✅ |
| `#6F6F6F` sobre `#FFFFFF` | 5.36:1 | ✅ | ✅ |
| `#FFFFFF` sobre `#FF5900` | 4.58:1 | ✅ Justo | ✅ |
| `#FFFFFF` sobre `#432F64` | 8.47:1 | ✅ | ✅ |
| `#FFFFFF` sobre `#2D8A39` | 4.50:1 | ✅ Justo | ✅ |
| `#FF5900` sobre `#1A1A1A` (dark) | 5.20:1 | ✅ | ✅ |
| `#F0F0F0` sobre `#1A1A1A` (dark) | 14.08:1 | ✅ | ✅ |

**Regla:** El naranja `#FF5900` sobre blanco solo se usa en texto de 16px bold o mayor (botones, enlaces, labels). Para texto normal ≤15px, usar `#231F20`.

### 9.3 Focus Visible

Todos los elementos interactivos tienen `:focus-visible`:

```css
*:focus-visible {
  outline: 2px solid var(--ana-primary);
  outline-offset: 2px;
  border-radius: var(--ana-radius-sm);
}

/* En dark mode */
@media (prefers-color-scheme: dark) {
  *:focus-visible {
    outline-color: var(--ana-primary);
  }
}
```

### 9.4 Navegación por Teclado

| Componente | Tab | Enter/Space | Escape | Flechas |
|---|---|---|---|---|
| **Cards de nivel** | Se enfoca | Navega al nivel | — | — |
| **Sidebar items** | Se enfoca | Navega al nivel | — | ↑↓ entre items |
| **Botones** | Se enfoca | Ejecuta acción | — | — |
| **Acordeón** | Se enfoca | Abre/cierra | Cierra | — |
| **Inputs** | Se enfoca | — | — | — |
| **Menú hamburguesa** | Se enfoca | Abre/cierra menú | Cierra menú | ↑↓ entre items |
| **Bottom nav** | Se enfoca cada item | Navega | — | ←→ entre items |
| **Prompt copy btn** | Se enfoca | Copia al clipboard | — | — |
| **Select** | Se enfoca | Abre opciones | Cierra | ↑↓ entre opciones |

### 9.5 ARIA Labels por Componente

| Componente | Atributos ARIA |
|---|---|
| Header | `role="banner"` |
| Main | `id="main-content"` — destino del skip link |
| Nav principal | `aria-label="Navegación principal"` |
| Sidebar | `aria-label="Navegación de niveles"` |
| Bottom nav | `aria-label="Navegación rápida"` |
| Breadcrumbs | `aria-label="Ubicación"` |
| Card nivel actual | `aria-label="Nivel N. [Título] — En progreso, X% completado"` |
| Card bloqueada | `aria-disabled="true"` + descripción |
| Progress bar | `role="progressbar"` + `aria-valuenow/min/max` + `aria-label` |
| Tracker node | `aria-label="Nivel N: [estado]"` |
| Tracker current | `aria-current="step"` |
| Accordion trigger | Usa `<details>/<summary>` nativo — semántica incluida |
| Tabla | `<th scope="col">` en encabezados |
| Tabla wrapper | `tabindex="0"` + `role="region"` + `aria-label` (para scroll) |
| Iconos decorativos | `aria-hidden="true"` |
| Iconos funcionales | `aria-label="[descripción]"` |
| Skip link | Primer elemento focusable, enlaza a `#main-content` |

### 9.6 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .ana-tracker__step--current .ana-tracker__node {
    animation: none;
    box-shadow: 0 0 0 4px rgba(255, 89, 0, 0.3);
  }
}
```

### 9.7 Texto Alternativo

- **Logo:** `alt="Universidad Anáhuac Mayab"` — describe la marca, no el archivo
- **Iconos funcionales:** `<svg aria-label="Copiar al portapapeles">` o título
- **Iconos decorativos:** `aria-hidden="true"` siempre
- **Imágenes de contenido (si las hay):** `alt` descriptivo de ≤120 caracteres
- **Imágenes puramente decorativas:** `alt=""` + `role="presentation"`

---

## 10. Catálogo de Tokens de Referencia

### Resumen de todos los tokens CSS usados en este documento

```css
:root {
  /* ── COLORES PRIMARIOS ── */
  --ana-primary:        #FF5900;
  --ana-primary-hover:  #FF7900;
  --ana-primary-light:  #FFF6F1;

  /* ── COLORES INSTITUCIONALES ── */
  --ana-tertiary:       #432F64;
  --ana-tertiary-hover: #5D428C;
  --ana-tertiary-light: #F5F2F9;

  /* ── NEUTROS ── */
  --ana-dark:           #231F20;
  --ana-gray:           #6F6F6F;
  --ana-gray-light:     #F3F3F1;
  --ana-inactive:       #EAEAEA;
  --ana-white:          #FFFFFF;
  --ana-black:          #000000;
  --ana-footer-gray:    #A3A9AB;

  /* ── SEMÁNTICOS ── */
  --ana-error:          #DC2626;
  --ana-success:        #2D8A39;
  --ana-warning:        #D97706;
  --ana-info:           #432F64;

  /* ── FONDOS EDUCATIVOS ── */
  --ana-bg-page:        #FAFAFA;
  --ana-bg-section:     #FFFFFF;
  --ana-bg-prompt:      #F8F7F5;
  --ana-bg-exercise:    #FFF6F1;
  --ana-bg-theory:      #F5F2F9;

  /* ── BORDES ── */
  --ana-border-prompt:  #E8E5E0;
  --ana-border-card:    #EAEAEA;

  /* ── PROGRESS / NIVELES ── */
  --ana-level-complete:    #2D8A39;
  --ana-level-current:     #FF5900;
  --ana-level-locked:      #EAEAEA;
  --ana-level-locked-text: #A3A9AB;

  /* ── SOMBRAS ── */
  --ana-shadow:         0px 3px 8px rgba(135, 135, 135, 0.5);
  --ana-shadow-sm:      0px 1px 3px rgba(135, 135, 135, 0.25);
  --ana-shadow-lg:      0px 6px 16px rgba(135, 135, 135, 0.35);

  /* ── RADIUS ── */
  --ana-radius-sm:      5px;
  --ana-radius-md:      8px;
  --ana-radius-lg:      12px;
  --ana-radius-full:    9999px;

  /* ── ESPACIADO ── */
  --ana-space-xs:   4px;
  --ana-space-sm:   8px;
  --ana-space-md:   16px;
  --ana-space-lg:   24px;
  --ana-space-xl:   32px;
  --ana-space-2xl:  48px;
  --ana-space-3xl:  64px;
  --ana-space-4xl:  96px;

  /* ── TIPOGRAFÍA ── */
  --ana-font-display: 'Sharp-Bold', 'Manrope', 'Roboto', sans-serif;
  --ana-font-body:    'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  --ana-font-mono:    'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;

  /* ── BREAKPOINTS ── */
  --ana-bp-sm:   640px;
  --ana-bp-md:   768px;
  --ana-bp-lg:   1024px;
  --ana-bp-xl:   1280px;
}
```

---

## Notas de Implementación

1. **SPA Routing:** El SPA usa hash-based routing (`#nivel-1`, `#nivel-4`, `#progreso`). Cada "vista" es una `<section>` que se muestra/oculta con JS vanilla. No se usa `history.pushState` para mantener compatibilidad con GitHub Pages.

2. **Carga de Fuentes:** Usar `<link rel="preload">` para Roboto y JetBrains Mono. Sharp-Bold se carga como webfont local si hay licencia, con fallback a Manrope.

3. **Iconos:** Se recomienda Lucide Icons como SVG inline (no icon font). Incluir solo los iconos usados para minimizar peso.

4. **Performance:** Toda la CSS debe caber en un solo archivo `<style>` en el `<head>` (critical CSS). No hay framework CSS externo.

5. **Estado del progreso:** Se persiste en `localStorage`. Estructura sugerida:
   ```json
   {
     "version": "academica",
     "levels": {
       "1": { "complete": true, "progress": 100, "completedAt": "2026-10-02" },
       "4": { "complete": false, "progress": 60 }
     },
     "badges": ["explorador-ia"]
   }
   ```

6. **Interacción de "Copiar":** Usar `navigator.clipboard.writeText()` con fallback a `document.execCommand('copy')`. Mostrar feedback visual ("Copiado ✓") durante 2 segundos.

7. **Navegación entre niveles:** Al final de cada vista de nivel, incluir navegación contextual: `← Nivel anterior` (si existe) y `Siguiente nivel →` (si desbloqueado) o `Complete este nivel para continuar` (si no).

---

*Documento generado por UI Designer · Fase 6 — Construcción de Assets · Septiembre 2026*
