# Elementos de Microinteracción y Deleite
## "IA Práctica para Líderes Anáhuac Mayab"
### Fase 6 · Whimsy Injector

> **Versión:** 1.0 | **Fecha:** 7 de septiembre de 2026
> **Principio rector:** Deleite elegante — cada microinteracción sirve un propósito funcional o emocional. Nada es gratuito, nada es infantil. La personalidad del mini sitio es la de un colega senior que tiene un destello de calidez en la mirada.
> **Audiencia:** Directivos universitarios de 40-55 años. Tono formal (usted). Sin emojis en contenido principal.

---

## I. PRINCIPIOS DE DISEÑO DE DELEITE

Antes de especificar componentes, estas son las reglas de contención que gobiernan todo lo que sigue:

### 1.1 Los cinco mandamientos del deleite ejecutivo

1. **Propósito primero.** Si una animación no comunica estado, guía la mirada o reduce ansiedad de espera, se elimina.
2. **Elegancia sobre diversión.** La audiencia no busca entretenimiento — busca eficiencia con dignidad. El deleite aquí es el de un reloj suizo: preciso, sutil, con detalles que solo nota quien observa.
3. **Tono formal siempre.** Todos los textos de feedback usan registro de "usted". Sin exclamaciones excesivas, sin emojis, sin coloquialismos.
4. **Performance no negociable.** Ninguna animación excede 500ms. Ningún efecto bloquea la interacción. El presupuesto total de JavaScript para whimsy: < 5 KB gzipped.
5. **Accesibilidad universal.** `prefers-reduced-motion: reduce` desactiva TODAS las animaciones no esenciales. Ningún feedback depende exclusivamente del movimiento — siempre hay un equivalente estático (color, icono, texto).

### 1.2 Espectro de intensidad

No toda interacción merece la misma intensidad de deleite. El espectro va de lo cotidiano a lo excepcional:

| Nivel | Contexto | Intensidad | Ejemplo |
|---|---|---|---|
| **Susurro** | Acciones cotidianas (hover, clic, scroll) | Casi imperceptible — 100-200ms, solo propiedades CSS | Elevación de card, cambio de color |
| **Nota** | Completar una actividad, copiar un prompt | Perceptible pero no intrusiva — 200-300ms | Checkmark animado, mensaje breve |
| **Acorde** | Completar un nivel, alcanzar un milestone | Clara y satisfactoria — 300-500ms | Barra de progreso que se completa, badge que aparece |
| **Fanfarria** | Completar un acto narrativo, obtener un badge | Memorable y celebratoria — 500-800ms (excepción justificada) | Transición de acto, badge con resplandor |

### 1.3 Presupuesto de animación por pantalla

- **Máximo de elementos animados simultáneos:** 3
- **Máximo de animaciones looping (continuous):** 1 por vista (reservada para el indicador de nivel actual en el progress tracker)
- **Duración máxima de cualquier secuencia:** 800ms (solo para celebraciones de acto)
- **Frame rate objetivo:** 60fps en todos los dispositivos (usar `transform` y `opacity` exclusivamente para animaciones — nunca `width`, `height`, `top`, `left`)

---

## II. MICROINTERACCIONES — CATÁLOGO DE 15 ELEMENTOS

### MI-01 · Elevación de Card de Nivel

| Propiedad | Valor |
|---|---|
| **Trigger** | Hover sobre card de nivel (desktop) / touch-start (mobile) |
| **Acción** | La card se eleva 2px, la sombra se expande, el borde cambia a naranja sutil |
| **Feedback visual** | Elevación + borde naranja = "este elemento es interactivo" |
| **Duración** | 200ms ease-out (entrada) / 150ms ease-in (salida) |
| **Nivel de intensidad** | Susurro |

```css
.ana-card-level {
  transition: transform 200ms ease-out,
              box-shadow 200ms ease-out,
              border-color 200ms ease-out;
}

.ana-card-level:hover {
  transform: translateY(-2px);
  box-shadow: var(--ana-shadow);
  border-color: var(--ana-primary);
}

/* Salida más rápida que entrada — se siente "natural" */
.ana-card-level:not(:hover) {
  transition-duration: 150ms;
  transition-timing-function: ease-in;
}
```

**Nota de accesibilidad:** Con `prefers-reduced-motion`, se mantiene el cambio de `border-color` pero se elimina el `transform`.

---

### MI-02 · Botón con Respuesta Táctil

| Propiedad | Valor |
|---|---|
| **Trigger** | Hover + click en cualquier botón primario o secundario |
| **Acción** | Hover: fondo aclara (--ana-primary-hover). Click: micro-depresión de 1px + brillo interno |
| **Feedback visual** | Confirmación háptica visual — "su clic fue registrado" |
| **Duración** | Hover: 150ms. Active: 80ms. Release: 120ms |
| **Nivel de intensidad** | Susurro |

```css
.ana-btn-primary {
  transition: background-color 150ms ease-out,
              transform 80ms ease-out,
              box-shadow 150ms ease-out;
}

.ana-btn-primary:hover {
  background-color: var(--ana-primary-hover);
}

.ana-btn-primary:active {
  transform: translateY(1px);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
}
```

---

### MI-03 · Copiar Prompt — Confirmación Instantánea

| Propiedad | Valor |
|---|---|
| **Trigger** | Clic en botón "Copiar" de un bloque de prompt/instrucción |
| **Acción** | Icono de copiar → checkmark animado. Texto del botón cambia brevemente a "Copiado". |
| **Feedback visual** | Checkmark verde (--ana-success) que aparece con scale-in. Revierte después de 2 segundos. |
| **Duración** | Scale-in del checkmark: 200ms. Permanencia: 2000ms. Fade-out: 200ms. |
| **Nivel de intensidad** | Nota |

```css
.copy-btn .icon-check {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
  color: var(--ana-success);
}

.copy-btn.copied .icon-copy { opacity: 0; }
.copy-btn.copied .icon-check {
  opacity: 1;
  transform: scale(1);
}

.copy-btn.copied .label {
  /* Texto cambia de "Copiar" a "Copiado" via JS */
}
```

```javascript
// Conceptual — JavaScript mínimo
function handleCopy(btn, text) {
  navigator.clipboard.writeText(text);
  btn.classList.add('copied');
  setTimeout(() => btn.classList.remove('copied'), 2200);
}
```

---

### MI-04 · Scroll Reveal — Entrada de Secciones

| Propiedad | Valor |
|---|---|
| **Trigger** | Sección de contenido entra en viewport (Intersection Observer) |
| **Acción** | Fade-in + slide-up sutil (12px) |
| **Feedback visual** | El contenido "aparece" de forma orgánica al hacer scroll, evitando la sensación de "muro de texto" |
| **Duración** | 300ms ease-out. Stagger de 80ms entre elementos hermanos (máximo 4 elementos). |
| **Nivel de intensidad** | Susurro |

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger: cada hermano espera 80ms más */
.scroll-reveal:nth-child(2) { transition-delay: 80ms; }
.scroll-reveal:nth-child(3) { transition-delay: 160ms; }
.scroll-reveal:nth-child(4) { transition-delay: 240ms; }

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

```javascript
// Intersection Observer — una sola instancia para performance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Una sola animación
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
```

---

### MI-05 · Progress Bar — Llenado Fluido

| Propiedad | Valor |
|---|---|
| **Trigger** | Cambio en el porcentaje de avance del nivel o del curso |
| **Acción** | La barra se llena de forma fluida desde el valor anterior al nuevo |
| **Feedback visual** | Naranja (--ana-primary) que avanza suavemente. Porcentaje numérico se actualiza con counting animation. |
| **Duración** | Barra: 500ms ease-out. Contador numérico: sincronizado con la barra. |
| **Nivel de intensidad** | Nota |

```css
.ana-progress-fill {
  background-color: var(--ana-primary);
  height: 100%;
  border-radius: var(--ana-radius-full);
  transition: width 500ms ease-out;
}

/* Reflejo sutil que recorre la barra al completarse */
.ana-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 300ms ease-out;
}

.ana-progress-fill.just-updated::after {
  animation: shimmer 600ms ease-out forwards;
}

@keyframes shimmer {
  0%   { opacity: 1; transform: translateX(-100%); }
  100% { opacity: 0; transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .ana-progress-fill { transition: none; }
  .ana-progress-fill::after { display: none; }
}
```

---

### MI-06 · Tooltip Informativo con Fade

| Propiedad | Valor |
|---|---|
| **Trigger** | Hover en iconos informativos (ⓘ) o términos técnicos subrayados |
| **Acción** | Tooltip aparece con fade-in + scale desde 95% a 100% |
| **Feedback visual** | Card flotante con fondo blanco, sombra, flecha apuntando al elemento. Texto en --ana-body-sm. |
| **Duración** | Aparición: 150ms ease-out (con delay de 200ms para evitar triggers accidentales). Desaparición: 100ms. |
| **Nivel de intensidad** | Susurro |

```css
.tooltip {
  opacity: 0;
  transform: scale(0.95) translateY(4px);
  transition: opacity 150ms ease-out, transform 150ms ease-out;
  pointer-events: none;
  /* Delay de aparición — evita flicker en movimientos rápidos del cursor */
  transition-delay: 200ms;
}

.tooltip-trigger:hover + .tooltip,
.tooltip-trigger:focus + .tooltip {
  opacity: 1;
  transform: scale(1) translateY(0);
  pointer-events: auto;
}
```

---

### MI-07 · Acordeón con Rotación de Flecha

| Propiedad | Valor |
|---|---|
| **Trigger** | Clic en encabezado de sección expandible (FAQ, contenido adicional) |
| **Acción** | Flecha rota 90° → 0° (o viceversa). Contenido se expande/colapsa con max-height animado. |
| **Feedback visual** | Rotación de flecha indica estado (abierto/cerrado). Expansión suave sin saltos. |
| **Duración** | Rotación: 200ms. Expansión: 250ms ease-out. |
| **Nivel de intensidad** | Susurro |

```css
.accordion-arrow {
  transition: transform 200ms ease-out;
}

.accordion-header[aria-expanded="true"] .accordion-arrow {
  transform: rotate(90deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 250ms ease-out, opacity 250ms ease-out;
  opacity: 0;
}

.accordion-content.open {
  /* max-height se establece vía JS al height real del contenido */
  opacity: 1;
}
```

---

### MI-08 · Cambio de Pestaña (Académica / Administrativa)

| Propiedad | Valor |
|---|---|
| **Trigger** | Clic en selector de versión (Académica / Administrativa) |
| **Acción** | Indicador activo se desliza suavemente a la pestaña seleccionada. Contenido hace cross-fade. |
| **Feedback visual** | Línea inferior naranja que se desliza lateralmente. El contenido anterior hace fade-out y el nuevo fade-in. |
| **Duración** | Deslizamiento del indicador: 250ms ease-out. Cross-fade del contenido: 200ms. |
| **Nivel de intensidad** | Nota |

```css
.version-indicator {
  position: absolute;
  bottom: 0;
  height: 3px;
  background: var(--ana-primary);
  border-radius: var(--ana-radius-full);
  transition: left 250ms ease-out, width 250ms ease-out;
}

.version-content {
  transition: opacity 200ms ease-out;
}

.version-content.exiting { opacity: 0; }
.version-content.entering { opacity: 0; animation: fadeIn 200ms ease-out forwards; }

@keyframes fadeIn {
  to { opacity: 1; }
}
```

---

### MI-09 · Checkmark de Actividad Completada

| Propiedad | Valor |
|---|---|
| **Trigger** | El participante marca una actividad como completada |
| **Acción** | Ícono cambia de círculo vacío a checkmark con stroke animation (SVG). Color transiciona a --ana-success. |
| **Feedback visual** | El checkmark se "dibuja" de forma orgánica, como si alguien lo trazara. Color verde confirma el estado. |
| **Duración** | Stroke animation: 300ms ease-out. Color transition: 200ms. |
| **Nivel de intensidad** | Nota |

```css
.check-circle svg path {
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  transition: stroke-dashoffset 300ms ease-out, stroke 200ms ease-out;
}

.check-circle.completed svg path {
  stroke-dashoffset: 0;
  stroke: var(--ana-success);
}

@media (prefers-reduced-motion: reduce) {
  .check-circle svg path {
    transition: none;
  }
  .check-circle.completed svg path {
    stroke-dashoffset: 0; /* Aparece inmediatamente */
  }
}
```

---

### MI-10 · Nodo de Nivel Actual — Pulso Respiratorio

| Propiedad | Valor |
|---|---|
| **Trigger** | Automático — siempre activo en el nodo del nivel actual del progress tracker |
| **Acción** | Ring naranja externo que "respira" (scale sutil + opacity) indicando el nivel activo |
| **Feedback visual** | Atrae suavemente la mirada al nivel actual sin ser intrusivo. Como un punto de GPS en un mapa. |
| **Duración** | Ciclo completo: 2000ms. Easing: ease-in-out. |
| **Nivel de intensidad** | Susurro (es la única animación looping permitida) |

```css
.level-node.current::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--ana-primary);
  animation: breathe 2000ms ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%      { opacity: 0.8; transform: scale(1.08); }
}

@media (prefers-reduced-motion: reduce) {
  .level-node.current::after {
    animation: none;
    opacity: 0.6; /* Estado estático visible */
  }
}
```

---

### MI-11 · Focus Ring con Personalidad

| Propiedad | Valor |
|---|---|
| **Trigger** | Navegación por teclado (Tab) hacia cualquier elemento interactivo |
| **Acción** | Ring naranja con animación de aparición (scale desde 0.9 a 1.0 + fade-in) |
| **Feedback visual** | Focus visible, accesible y con el color de marca — no el ring genérico azul del navegador |
| **Duración** | 150ms ease-out |
| **Nivel de intensidad** | Susurro |

```css
*:focus-visible {
  outline: 2px solid var(--ana-primary);
  outline-offset: 2px;
  border-radius: var(--ana-radius-sm);
  animation: focusAppear 150ms ease-out;
}

@keyframes focusAppear {
  from { outline-color: transparent; outline-offset: 4px; }
  to   { outline-color: var(--ana-primary); outline-offset: 2px; }
}

@media (prefers-reduced-motion: reduce) {
  *:focus-visible { animation: none; }
}
```

---

### MI-12 · Loading Skeleton — Mientras Carga el Contenido

| Propiedad | Valor |
|---|---|
| **Trigger** | Contenido de nivel en proceso de carga |
| **Acción** | Placeholders con gradiente que se desplaza suavemente de izquierda a derecha |
| **Feedback visual** | Indica que hay contenido por llegar — reduce ansiedad de espera. Forma de los placeholders refleja la estructura real. |
| **Duración** | Ciclo del gradiente: 1500ms linear infinite. Desaparición al cargar: 200ms fade-out. |
| **Nivel de intensidad** | Susurro |

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--ana-gray-light) 25%,
    #E8E8E8 50%,
    var(--ana-gray-light) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-wave 1500ms linear infinite;
  border-radius: var(--ana-radius-sm);
}

@keyframes skeleton-wave {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: var(--ana-gray-light); /* Estático */
  }
}
```

---

### MI-13 · Enlace de Texto — Subrayado Animado

| Propiedad | Valor |
|---|---|
| **Trigger** | Hover sobre enlaces de texto (no botones) |
| **Acción** | Subrayado se expande de izquierda a derecha (no aparece de golpe). Color transiciona a --ana-primary-hover. |
| **Feedback visual** | Refuerza que el texto es un enlace interactivo, con un movimiento que guía de izquierda a derecha (dirección de lectura). |
| **Duración** | 200ms ease-out |
| **Nivel de intensidad** | Susurro |

```css
.ana-link {
  color: var(--ana-primary);
  text-decoration: none;
  background-image: linear-gradient(var(--ana-primary-hover), var(--ana-primary-hover));
  background-size: 0% 2px;
  background-position: left bottom;
  background-repeat: no-repeat;
  transition: background-size 200ms ease-out, color 150ms ease-out;
}

.ana-link:hover {
  color: var(--ana-primary-hover);
  background-size: 100% 2px;
}
```

---

### MI-14 · Badge de Nivel — Revelación al Desbloquear

| Propiedad | Valor |
|---|---|
| **Trigger** | Nivel cambia de estado "bloqueado" a "disponible" |
| **Acción** | Ícono de candado hace un "unlock" animado: gira ligeramente, se desvanece, y el número/ícono del nivel aparece |
| **Feedback visual** | Transición de bloqueado a disponible que comunica progreso sin interrumpir |
| **Duración** | Total: 400ms. Unlock: 200ms. Aparición de ícono nuevo: 200ms. |
| **Nivel de intensidad** | Nota |

```css
.level-badge .icon-lock {
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}

.level-badge.unlocking .icon-lock {
  opacity: 0;
  transform: rotate(-15deg) scale(0.8);
}

.level-badge .icon-level {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 200ms ease-out 200ms, transform 200ms ease-out 200ms;
}

.level-badge.unlocking .icon-level {
  opacity: 1;
  transform: scale(1);
}
```

---

### MI-15 · Número de Progreso — Counting Animation

| Propiedad | Valor |
|---|---|
| **Trigger** | Primer render o actualización del contador de progreso (ej: "3 de 8 niveles") |
| **Acción** | El número cuenta de 0 al valor real (o del valor anterior al nuevo) |
| **Feedback visual** | Movimiento numérico que atrae la atención al progreso sin gritar |
| **Duración** | 400ms ease-out (para incrementos de 1-2). 600ms para incrementos mayores. |
| **Nivel de intensidad** | Nota |

```javascript
function animateCount(element, from, to, duration = 400) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = to;
    return;
  }
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Easing: ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(from + (to - from) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```

---

## III. CELEBRACIONES DE PROGRESO

### 3.1 Filosofía de celebración

Las celebraciones siguen la curva de tensión narrativa del arco Three-Act. No son uniformes — escalan en intensidad conforme el participante avanza:

```
Intensidad de celebración:

  ▲
  │                                         ★ Acto III Badge
  │                                        ╱  (Líder IA)
  │                                       ╱
  │                      ★ Acto II Badge ╱
  │                     ╱ (Estratega IA)╱
  │                    ╱               ╱
  │    ★ Acto I Badge ╱     ★ M5     ╱  ★ M7
  │   ╱(Explorador)  ╱     (crisis) ╱   (síntesis)
  │  ╱              ╱              ╱
  │ ╱   ★ M2      ╱   ★ M4      ╱   ★ M8
  │╱    (dominio) ╱   (midpoint)╱   (CLIMAX)
  ★ M1──────────╱──────────────╱───────────────→ Niveles
  (sorpresa)
```

### 3.2 Celebraciones por nivel

#### Niveles 1-2 (Acto I: Descubrimiento) — Intensidad: Sutil

| Elemento | Nivel 1 | Nivel 2 |
|---|---|---|
| **Animación** | Checkmark verde que se dibuja (stroke). Barra de progreso se llena al 12.5%. | Checkmark + barra al 25%. Primer "acorde" visual. |
| **Duración** | 300ms | 400ms |
| **Mensaje** | "Ha completado el Nivel 1. Los fundamentos están firmes." | "Ha completado el Nivel 2. Ahora cuenta con un método." |
| **Visual extra** | Ninguno | Línea sutil que conecta M1 y M2 en el tracker cambia a verde |
| **Sonido** | Ninguno | Ninguno |

#### Badge de Acto I: "Explorador IA" (al completar Nivel 2)

| Propiedad | Detalle |
|---|---|
| **Trigger** | Completar Nivel 2 |
| **Animación** | El badge aparece con scale desde 0.5 → 1.0 + sutil glow púrpura (--ana-tertiary) que se desvanece |
| **Duración total** | 600ms |
| **Mensaje** | "Ha obtenido la credencial **Explorador IA**. Demuestra comprensión de los fundamentos y dominio del diseño de instrucciones." |
| **Persistencia** | El badge queda visible permanentemente en el header del perfil del participante |

```css
@keyframes badgeReveal {
  0%   { opacity: 0; transform: scale(0.5); filter: drop-shadow(0 0 0px var(--ana-tertiary)); }
  60%  { opacity: 1; transform: scale(1.05); filter: drop-shadow(0 0 12px var(--ana-tertiary)); }
  100% { opacity: 1; transform: scale(1);    filter: drop-shadow(0 0 0px var(--ana-tertiary)); }
}

.badge-reveal {
  animation: badgeReveal 600ms ease-out forwards;
}
```

#### Niveles 3-4 (Acto II primera mitad) — Intensidad: Moderada

| Elemento | Nivel 3 | Nivel 4 (Midpoint) |
|---|---|---|
| **Animación** | Checkmark + shimmer en la barra de progreso | Checkmark + barra al 50% con pulso especial: la barra entera hace un brillo naranja una vez |
| **Duración** | 400ms | 500ms |
| **Mensaje** | "Ha completado el Nivel 3. La pantalla en blanco ya no es un problema." | "Ha completado el Nivel 4. A mitad de camino — y la IA ya trabaja diferente para usted." |
| **Visual extra** | Ninguno | Indicador "50%" aparece brevemente centrado sobre la barra con fade-in/out |

#### Niveles 5-6 (Acto II segunda mitad) — Intensidad: Significativa

| Elemento | Nivel 5 (Crisis) | Nivel 6 |
|---|---|---|
| **Animación** | Checkmark con color verde que transiciona lentamente (reflejando que la confianza se reconstruye) | Checkmark + barra al 75% |
| **Duración** | 500ms (más lento que los anteriores — intencional, refleja la gravedad del nivel) | 400ms |
| **Mensaje** | "Ha completado el Nivel 5. La confianza calibrada es más valiosa que la confianza ciega." | "Ha completado el Nivel 6. Sabe cuándo usar la IA — y cuándo la respuesta debe ser humana." |

#### Badge de Acto II: "Estratega IA" (al completar Nivel 6)

| Propiedad | Detalle |
|---|---|
| **Trigger** | Completar Nivel 6 |
| **Animación** | Scale-in + glow más intenso que el badge anterior (naranja esta vez: --ana-primary). Los dos badges (Explorador + Estratega) parpadean brevemente juntos — stack visual. |
| **Duración total** | 700ms |
| **Mensaje** | "Ha obtenido la credencial **Estratega IA**. Demuestra capacidad para automatizar, verificar y establecer límites éticos en el uso de IA." |

#### Niveles 7-8 (Acto III: Liderazgo) — Intensidad: Memorable

| Elemento | Nivel 7 | Nivel 8 (Climax) |
|---|---|---|
| **Animación** | Checkmark + progress bar al 87.5% con shimmer | **Celebración máxima** (ver detalle abajo) |
| **Duración** | 500ms | 800ms (excepción justificada — es el climax del curso) |
| **Mensaje** | "Ha completado el Nivel 7. Pasó de ejecutar tareas a planear sistemas." | "Ha completado los 8 niveles. No aprendió tecnología. Aprendió a liderar de una forma nueva." |

#### Celebración del Nivel 8 — Secuencia Climax

Esta es la secuencia de celebración más elaborada del curso. Se justifica porque es la **única vez** que ocurre:

```
Secuencia (800ms total):
  
  0ms   → Progress bar llega a 100%. Shimmer recorre toda la barra.
  200ms → Los 8 nodos del progress tracker hacen un "wave" sutil 
          (cada uno escala a 1.1 y vuelve, con stagger de 50ms).
  400ms → Badge "Líder IA" aparece con la animación más elaborada:
          scale desde 0.3, con glow que alterna naranja → púrpura → naranja.
  600ms → Los tres badges se alinean horizontalmente con un slide-in.
  800ms → Todo se estabiliza. Mensaje final aparece con fade-in.
```

```css
@keyframes climaxBadge {
  0%   { opacity: 0; transform: scale(0.3); 
         filter: drop-shadow(0 0 0px var(--ana-primary)); }
  30%  { opacity: 1; transform: scale(1.08); 
         filter: drop-shadow(0 0 16px var(--ana-primary)); }
  60%  { transform: scale(1.02); 
         filter: drop-shadow(0 0 12px var(--ana-tertiary)); }
  100% { transform: scale(1); 
         filter: drop-shadow(0 0 0px transparent); }
}

.badge-climax {
  animation: climaxBadge 800ms ease-out forwards;
}

@media (prefers-reduced-motion: reduce) {
  .badge-climax {
    animation: none;
    opacity: 1;
    transform: scale(1);
  }
}
```

**Mensaje final de cierre:**

> "Ha completado los 8 niveles de **IA Práctica para Líderes Anáhuac**. Cuenta ahora con un ecosistema de agentes, un flujo automatizado y un banco de instrucciones diseñados por usted, para su gestión. El lunes a las 9 AM, su equipo invisible estará listo. Y usted, al frente."

---

### 3.3 Tabla resumen de celebraciones

| Momento | Intensidad | Duración | Elementos | Mensaje (extracto) |
|---|---|---|---|---|
| Nivel 1 completado | Sutil | 300ms | Checkmark | "Los fundamentos están firmes." |
| Nivel 2 + Badge Explorador | Moderada | 600ms | Checkmark + Badge scale-in | Credencial Explorador IA |
| Nivel 3 completado | Sutil | 400ms | Checkmark + shimmer | "La pantalla en blanco ya no es un problema." |
| Nivel 4 (Midpoint) | Moderada | 500ms | Checkmark + 50% highlight | "A mitad de camino." |
| Nivel 5 (Crisis) | Significativa | 500ms (lento) | Checkmark transición lenta | "La confianza calibrada es más valiosa." |
| Nivel 6 + Badge Estratega | Significativa | 700ms | Checkmark + Badge + stack | Credencial Estratega IA |
| Nivel 7 completado | Significativa | 500ms | Checkmark + shimmer | "Pasó de ejecutar a planear." |
| Nivel 8 + Badge Líder (Climax) | Memorable | 800ms | Secuencia completa | "Su equipo invisible estará listo." |

---

## IV. EASTER EGGS EDUCATIVOS

Cinco sorpresas ocultas que recompensan la curiosidad. Cada una es relevante al contenido de IA, aporta un dato genuinamente interesante, y está calibrada para el tono ejecutivo.

### EE-01 · "El primer prompt de la historia"

| Propiedad | Detalle |
|---|---|
| **Ubicación** | Nivel 1, en el bloque de texto que menciona "la primera instrucción" |
| **Trigger** | Hacer clic 3 veces en la palabra "instrucción" en el epígrafe del nivel |
| **Revelación** | Aparece una card con fondo púrpura suave que contiene un dato histórico: |
| **Contenido** | *"En 1966, Joseph Weizenbaum creó ELIZA — el primer programa que simuló una conversación. Su 'prompt' era simplemente escribir como usted le habla a un terapeuta. 60 años después, la diferencia es que ahora la máquina sí entiende lo que usted dice."* |
| **Cierre** | Botón "Entendido" para cerrar la card. |
| **Persistencia** | Se muestra solo la primera vez. Se guarda en localStorage. |

### EE-02 · "Konami Code del Directivo"

| Propiedad | Detalle |
|---|---|
| **Ubicación** | Cualquier página del curso |
| **Trigger** | Teclear la secuencia: I-A (las letras I y A en el teclado) |
| **Revelación** | Aparece brevemente un mensaje centrado en pantalla con fade-in/out: |
| **Contenido** | *"Dato: El 73% de los directivos que usan IA reportan que su mayor ganancia no es la velocidad — es la claridad que obtienen al tener que explicarle a la máquina exactamente qué necesitan. (Fuente: McKinsey, 2025)"* |
| **Duración** | Aparece 5 segundos, desaparece con fade-out. |
| **Persistencia** | Se puede activar una vez por sesión. |

### EE-03 · "El prompt perfecto"

| Propiedad | Detalle |
|---|---|
| **Ubicación** | Nivel 2, dentro del banco de prompts base |
| **Trigger** | Copiar exactamente 5 prompts del banco (el botón "Copiar" lleva un contador interno) |
| **Revelación** | Al copiar el quinto, aparece una notificación discreta en la esquina inferior: |
| **Contenido** | *"Cinco instrucciones copiadas. ¿Sabía que las organizaciones con bancos de instrucciones estandarizados reportan un 40% menos de variabilidad en los resultados de IA? Usted está construyendo el suyo."* |
| **Cierre** | Se desvanece solo después de 6 segundos o al hacer clic. |

### EE-04 · "El reporte invisible"

| Propiedad | Detalle |
|---|---|
| **Ubicación** | Nivel 5, en la sección de automatización de reportes |
| **Trigger** | Hover prolongado (3 segundos) sobre la ilustración o diagrama del flujo de reportes |
| **Revelación** | El diagrama muestra brevemente un "nodo fantasma" con línea punteada que dice: |
| **Contenido** | *"Paso secreto: Validación humana. El 100% de los flujos exitosos de IA en organizaciones serias incluyen este paso. Los que no lo tienen... ya no son organizaciones serias."* |
| **Cierre** | Desaparece al mover el cursor. |

### EE-05 · "La firma digital"

| Propiedad | Detalle |
|---|---|
| **Ubicación** | Footer del mini sitio |
| **Trigger** | Hacer clic en el año "2026" del footer |
| **Revelación** | Aparece un mensaje debajo del footer con fade-in sutil: |
| **Contenido** | *"Este curso fue diseñado con un pipeline de 24 agentes de IA especializados, coordinados por un humano con criterio. La misma filosofía que usted aprendió en el Nivel 8: la IA produce, el líder dirige."* |
| **Cierre** | Se desvanece después de 8 segundos. |

### Implementación técnica de Easter Eggs

```javascript
// Sistema unificado de Easter Eggs — almacenamiento en localStorage
const EASTER_EGGS = {
  'ee-01': { found: false, maxTriggers: 1 },
  'ee-02': { found: false, maxTriggers: Infinity, cooldown: 'session' },
  'ee-03': { found: false, maxTriggers: 1 },
  'ee-04': { found: false, maxTriggers: Infinity },
  'ee-05': { found: false, maxTriggers: 1 },
};

function triggerEasterEgg(id, content, duration = 5000) {
  const state = JSON.parse(localStorage.getItem('ana-easter-eggs') || '{}');
  if (state[id]?.found && EASTER_EGGS[id].maxTriggers === 1) return;
  
  showNotification(content, duration);
  state[id] = { found: true, timestamp: Date.now() };
  localStorage.setItem('ana-easter-eggs', JSON.stringify(state));
}
```

---

## V. COMPANION CHARACTER — EVALUACIÓN Y DECISIÓN

### 5.1 Análisis para la audiencia

El arquetipo de la "Directora Martínez" ya funciona como hilo conductor narrativo en los textos del curso (su voz interna abre cada nivel). La pregunta es: ¿debe tener presencia VISUAL en la interfaz?

### 5.2 Evaluación

| Factor | A favor | En contra |
|---|---|---|
| **Reconocimiento narrativo** | Refuerza el arco de transformación | Puede sentirse forzado si la ejecución visual no es impecable |
| **Audiencia** | Directivos de 40-55 — valoran guía, no asistentes animados | Riesgo de parecer condescendiente ("me están acompañando con un muñequito") |
| **Tono** | Puede funcionar si es ultra-sutil | Un avatar visible rompe el tono institucional |
| **Implementación** | Simple si es solo texto | Costoso si requiere ilustración/animación |

### 5.3 Decisión: Presencia textual, no visual

**No se recomienda un companion character visual.** En su lugar, la Directora Martínez mantiene presencia como **voz narrativa integrada** en el contenido, sin elemento visual en la interfaz.

**Alternativa implementada: "La voz de la experiencia"**

Cada nivel incluye un callout especial con borde izquierdo púrpura y fondo `--ana-bg-theory` que contiene la reflexión de la Directora Martínez. Este elemento:

- **Tiene un estilo visual distintivo** (diferente de los callouts teóricos normales — usa comillas tipográficas y formato de cita)
- **No tiene avatar ni ilustración** — solo texto con tipografía cuidada
- **Usa primera persona** (la única excepción al registro impersonal del curso — porque es la voz de un personaje)

```html
<blockquote class="ana-voice" aria-label="Reflexión del participante">
  <p>«Tengo 47 correos sin leer, el informe para rectoría a medio hacer,
  y ahora me piden que tome un curso de IA. Perfecto. Justo lo que me faltaba.»</p>
</blockquote>
```

```css
.ana-voice {
  border-left: 4px solid var(--ana-tertiary);
  background: var(--ana-bg-theory);
  padding: 24px 28px;
  border-radius: 0 var(--ana-radius-md) var(--ana-radius-md) 0;
  font-style: italic;
  color: var(--ana-dark);
  position: relative;
}

.ana-voice::before {
  content: '«';
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 32px;
  color: var(--ana-tertiary);
  opacity: 0.3;
  font-family: var(--ana-font-display);
}
```

---

## VI. GAMIFICACIÓN SUTIL

### 6.1 Principio rector

La gamificación en este curso NO es un sistema de puntos, rankings o recompensas extrínsecas. Es un conjunto de **indicadores de progreso que respetan la inteligencia del participante** y refuerzan la motivación intrínseca (autonomía, competencia, propósito — Self-Determination Theory, Ryan & Deci, 2000).

### 6.2 Elementos implementados

#### GS-01 · Progress Dashboard Personal

Un panel en la vista principal que muestra de forma clara y sin ruido:

| Indicador | Formato | Ubicación |
|---|---|---|
| **Niveles completados** | "3 de 8 niveles" con barra horizontal | Header del dashboard |
| **Porcentaje global** | "37%" con número grande (counting animation MI-15) | Centro del dashboard |
| **Tiempo invertido** | "4h 20min de práctica" | Debajo del porcentaje |
| **Actividades completadas** | "12 de 32 actividades" con mini-barra | Secundario |
| **Badges obtenidos** | Iconos de badges (grises los pendientes, con color los obtenidos) | Pie del dashboard |

**Diseño:** Card con fondo blanco, sin bordes coloridos. Los números son el protagonista. Tipografía `.ana-display` para el porcentaje central.

#### GS-02 · Indicador de Tiempo Estimado vs Real

Cada actividad muestra un estimado de duración. Al completarla, se registra el tiempo real.

| Estado | Formato |
|---|---|
| **Antes de iniciar** | "Duración estimada: 15 minutos" (--ana-caption) |
| **En progreso** | Cronómetro discreto en la esquina (solo si el participante quiere verlo — toggle opcional) |
| **Al completar** | "Completado en 12 minutos" (si fue más rápido: sin comentario adicional. Si fue más lento: tampoco — NO juzgar). |

**Regla crítica:** NUNCA comparar el tiempo del participante con un promedio o con otros. Esto no es una competencia. El tiempo es informativo, no evaluativo.

#### GS-03 · Racha de Actividad (Streak) — Muy Sutil

| Propiedad | Detalle |
|---|---|
| **Lógica** | Si el participante completa al menos 1 actividad en días consecutivos, se lleva un registro |
| **Visualización** | Solo una línea discreta en el dashboard: "5 días consecutivos de práctica" |
| **Tono** | Informativo. Sin "celebración" por mantener la racha. Sin "castigo" por romperla. |
| **Ausencia** | Si el participante no entra en 3+ días, el indicador simplemente desaparece. NO se muestra "Racha rota" ni ningún mensaje negativo. |

**Justificación:** Los directivos de 40-55 años no necesitan (ni desean) que un curso les diga cuántos días seguidos han entrado. Pero un dato sutil puede reforzar el hábito sin presionar.

#### GS-04 · Mini-achievements por Nivel

Cada nivel tiene 1 "logro" desbloqueado al completar el entregable del nivel. No son "trofeos" — son reconocimientos funcionales:

| Nivel | Logro | Formato visual |
|---|---|---|
| M1 | "5 tareas identificadas" | Texto + ícono check |
| M2 | "3 instrucciones maestras creadas" | Texto + ícono check |
| M3 | "5 templates de comunicación listos" | Texto + ícono check |
| M4 | "1 resumen ejecutivo verificado" | Texto + ícono check |
| M5 | "1 flujo de reporte documentado" | Texto + ícono check (con nota: "incluye verificación humana") |
| M6 | "10 respuestas maestras + protocolo ético" | Texto + ícono check |
| M7 | "1 plan de proyecto estructurado" | Texto + ícono check |
| M8 | "3 agentes + 1 flujo + 20 instrucciones" | Texto + ícono check (con badge) |

**Visualización:** Lista simple en el dashboard, sin fanfarria. Los ítems completados tienen ícono verde; los pendientes, gris con candado. Es un inventario de trabajo hecho, no un muro de trofeos.

#### GS-05 · Resumen Semanal por Correo (Opcional)

Si el participante opta por recibir notificaciones por correo, un email semanal incluye:

| Sección | Contenido | Tono |
|---|---|---|
| **Progreso** | "Esta semana completó 2 niveles. Lleva 5 de 8." | Factual |
| **Próximo paso** | "El Nivel 6 trata sobre la atención a stakeholders con IA." | Orientación |
| **Dato de la semana** | Un micro-insight de IA relevante para directivos | Valor agregado |

**Tono del correo:** Institucional, breve (< 150 palabras), sin emojis. Asunto: "Su progreso en IA Práctica para Líderes — Semana 3".

---

## VII. CATÁLOGO DE TRANSICIONES Y ANIMACIONES

### 7.1 Animaciones base reutilizables

| Nombre | Propiedades | Duración | Easing | Uso |
|---|---|---|---|---|
| `fade-in` | `opacity: 0 → 1` | 200ms | ease-out | Aparición de contenido, tooltips, notificaciones |
| `fade-out` | `opacity: 1 → 0` | 150ms | ease-in | Desaparición de elementos temporales |
| `slide-up` | `transform: translateY(12px) → 0; opacity: 0 → 1` | 300ms | ease-out | Scroll reveal, aparición de secciones |
| `slide-down` | `transform: translateY(-12px) → 0; opacity: 0 → 1` | 300ms | ease-out | Dropdown, menú desplegable |
| `scale-in` | `transform: scale(0.5) → 1; opacity: 0 → 1` | 200ms | ease-out | Badges, checkmarks, iconos |
| `scale-out` | `transform: scale(1) → 0.8; opacity: 1 → 0` | 150ms | ease-in | Cierre de modals, notificaciones |

### 7.2 Implementación CSS

```css
/* ═══════════════════════════════════════════════ */
/* CATÁLOGO DE ANIMACIONES — IA PRÁCTICA ANÁHUAC  */
/* ═══════════════════════════════════════════════ */

/* — Fade — */
@keyframes anaFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes anaFadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}

/* — Slide — */
@keyframes anaSlideUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes anaSlideDown {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* — Scale — */
@keyframes anaScaleIn {
  from { opacity: 0; transform: scale(0.5); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes anaScaleOut {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.8); }
}

/* — Stagger helper — */
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 80ms; }
.stagger-3 { animation-delay: 160ms; }
.stagger-4 { animation-delay: 240ms; }

/* — Clases de utilidad — */
.ana-animate-fade-in   { animation: anaFadeIn 200ms ease-out forwards; }
.ana-animate-slide-up  { animation: anaSlideUp 300ms ease-out forwards; }
.ana-animate-slide-down { animation: anaSlideDown 300ms ease-out forwards; }
.ana-animate-scale-in  { animation: anaScaleIn 200ms ease-out forwards; }

/* ═══════════════════════════════════════════════ */
/* REDUCCIÓN DE MOVIMIENTO                         */
/* ═══════════════════════════════════════════════ */
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

### 7.3 Cuándo usar cada animación

| Contexto | Animación | Justificación |
|---|---|---|
| Contenido que entra en viewport por scroll | `slide-up` | Guía la mirada de arriba a abajo (dirección de lectura) |
| Menú o dropdown que se abre | `slide-down` | Indica origen del contenido (sale del trigger) |
| Tooltip o notificación temporal | `fade-in` / `fade-out` | Aparición/desaparición sin distracción |
| Badge, checkmark, icono de estado | `scale-in` | Atrae la atención a un punto específico sin movimiento lateral |
| Modal que se cierra | `scale-out` | Contracción visual = "este elemento se va" |
| Grupo de cards o lista | `slide-up` + `stagger` | Progresión ordenada, no aparición simultánea |
| Progress bar que se llena | `transition: width` (no keyframe) | Movimiento continuo y predecible |
| Transición entre páginas/vistas | `fade-out` (saliente) → `fade-in` (entrante) | Cross-fade limpio, sin movimiento lateral |

### 7.4 Animaciones PROHIBIDAS en este proyecto

| Animación | Razón de exclusión |
|---|---|
| Parallax scrolling | Desorientación visual. No aporta valor educativo. |
| Bounce / elastic | Tono infantil, incompatible con audiencia ejecutiva. |
| Shake / wiggle | Asociado a errores o alarmas en otros contextos. Genera ansiedad. |
| Typing animation (letra por letra) | Lento, no respeta el tiempo del directivo. |
| Confetti / partículas | Gamificación excesiva. Inapropiado para el tono institucional. |
| Rotación 360° de elementos | Sin propósito funcional. Distrae. |
| Animaciones > 800ms | Exceden el umbral de atención para interacciones micro. Excepción: solo la celebración del Nivel 8. |
| Animaciones que bloqueen scroll o interacción | Rompen la sensación de control del participante. |

---

## VIII. PRINCIPIOS DE CONTENCIÓN — LA LÍNEA QUE NO SE CRUZA

### 8.1 Regla del "Director Escéptico"

Antes de implementar cualquier elemento de deleite, aplicar este filtro mental:

> *"Si el directivo más escéptico del grupo — aquel que piensa 'esto es una pérdida de tiempo' — ve esta animación o este mensaje, ¿va a rodar los ojos o va a notar (quizá inconscientemente) que este sitio está bien hecho?"*

Si la respuesta es "rodar los ojos", se elimina. Si es "notar que está bien hecho", se implementa.

### 8.2 Checklist de contención (para cada elemento nuevo)

Antes de agregar cualquier microinteracción, verificar:

- [ ] ¿Tiene propósito funcional (comunicar estado, guiar, confirmar) O propósito emocional justificado (celebrar un logro real)?
- [ ] ¿Dura menos de 500ms? (excepción: celebración de acto, max 800ms)
- [ ] ¿Funciona sin JavaScript? (los estados CSS deben ser el fallback)
- [ ] ¿Respeta `prefers-reduced-motion`?
- [ ] ¿Se ve bien en los 3 breakpoints (mobile, tablet, desktop)?
- [ ] ¿Tiene equivalente estático para accesibilidad (cambio de color, ícono)?
- [ ] ¿No usa emojis en contenido principal?
- [ ] ¿Los textos de feedback usan registro de "usted"?
- [ ] ¿El tono es institucional, no coloquial?
- [ ] ¿Pasa el "filtro del Director Escéptico"?

### 8.3 Límites cuantitativos

| Dimensión | Límite |
|---|---|
| Animaciones simultáneas por vista | 3 máximo |
| Animaciones looping por vista | 1 máximo (reservada para nodo actual del tracker) |
| Easter Eggs en todo el curso | 5 (los definidos en la sección IV) |
| Mensajes de celebración | 8 (uno por nivel) + 3 (uno por badge) = 11 total |
| JavaScript total para whimsy | < 5 KB gzipped |
| Tiempo máximo de cualquier secuencia | 800ms (solo celebración Nivel 8) |
| Sonidos | 0 (decisión: sin audio para evitar disrupciones en contexto laboral) |

### 8.4 Decisión sobre sonido: NO

| Factor | Análisis |
|---|---|
| **Contexto de uso** | El directivo probablemente usa el curso en su oficina, potencialmente con colegas cerca |
| **Riesgo** | Un sonido inesperado puede ser embarazoso o disruptivo |
| **Beneficio** | Marginal — las confirmaciones visuales son suficientes |
| **Decisión** | Sin sonido en ningún elemento. Cero audio. Si en el futuro se decide agregar, debe ser opt-in con toggle visible. |

### 8.5 Dark mode y whimsy

Todas las animaciones y microinteracciones deben funcionar correctamente en dark mode. Verificaciones específicas:

- Los glows de badges usan colores que contrastan en ambos modos (naranja y púrpura mantienen buen contraste en oscuro)
- Los shimmer de progress bars usan `rgba(255, 255, 255, 0.2)` que funciona en ambos fondos
- Los skeleton loaders adaptan sus colores a los tokens de dark mode
- Los focus rings mantienen el naranja que tiene buen contraste en ambos modos

---

## IX. MAPA DE IMPLEMENTACIÓN

### 9.1 Prioridades de implementación

| Prioridad | Elementos | Razón |
|---|---|---|
| **P0 — Imprescindibles** | MI-01 (hover cards), MI-02 (botones), MI-03 (copiar), MI-05 (progress bar), MI-09 (checkmark), MI-11 (focus ring) | Son la base de la interactividad. Sin ellos, el sitio se siente "muerto". |
| **P1 — Importantes** | MI-04 (scroll reveal), MI-10 (pulso nodo actual), MI-13 (enlace subrayado), MI-15 (counting), Celebraciones de nivel | Añaden personalidad significativa. Diferencia entre "funcional" y "profesional". |
| **P2 — Deseables** | MI-06 (tooltips), MI-07 (acordeón), MI-08 (tabs versión), MI-12 (skeleton), MI-14 (unlock badge), Easter Eggs | Refinan la experiencia. Se pueden agregar después del lanzamiento. |
| **P3 — Opcionales** | GS-02 (tiempo), GS-03 (streak), GS-05 (email semanal) | Dependen de la infraestructura de tracking. No bloquean el lanzamiento. |

### 9.2 Dependencias técnicas

| Elemento | Dependencia |
|---|---|
| Scroll reveal (MI-04) | Intersection Observer API (soporte: 95%+) |
| Copiar (MI-03) | Clipboard API (soporte: 93%+, fallback: `document.execCommand`) |
| Counting animation (MI-15) | `requestAnimationFrame` (universal) |
| Easter Eggs | `localStorage` (universal) |
| Streak / tiempo (GS-02, GS-03) | Sistema de tracking de progreso del mini sitio |
| Email semanal (GS-05) | Backend de notificaciones (fuera del scope del mini sitio SPA) |

---

## X. GLOSARIO DE TÉRMINOS DE WHIMSY

Para evitar ambigüedad en la comunicación entre equipos:

| Término | Significado en este documento |
|---|---|
| **Microinteracción** | Respuesta visual a una acción del usuario — hover, clic, scroll, completar |
| **Celebración** | Secuencia visual que marca un logro significativo (completar nivel, obtener badge) |
| **Easter Egg** | Contenido oculto que se revela con una acción no obvia — recompensa la exploración |
| **Shimmer** | Destello que recorre un elemento de izquierda a derecha — indica actualización |
| **Glow** | Resplandor suave alrededor de un elemento — indica importancia o logro |
| **Stagger** | Delay progresivo entre animaciones de elementos hermanos — evita aparición simultánea |
| **Skeleton** | Placeholder de forma que indica contenido en carga — reduce ansiedad de espera |
| **Susurro / Nota / Acorde / Fanfarria** | Los 4 niveles de intensidad de deleite (ver sección I) |

---

*Documento generado por Whimsy Injector · Fase 6 · Curso "IA Práctica para Líderes Anáhuac Mayab" · Universidad Anáhuac Mayab · Septiembre 2026*
