/* ═══════════════════════════════════════════════════════════════════════════════
   APP.JS — IA Práctica para Líderes Anáhuac
   SPA Router + Vistas + Interacciones
   Universidad Anáhuac Mayab · Septiembre 2026
   ═══════════════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── CONSTANTES ─── */
  const STATE_KEY  = 'anahuac-ia-progress';
  const TOTAL      = 8;

  var currentObserver = null; /* Referencia al IntersectionObserver activo */

  const LEVELS = [
    {
      id: 1,
      title: 'Fundamentos de IA Generativa',
      desc: 'Qué es la IA generativa, qué puede y qué no puede',
      duration: '25-30 min',
      icon: 'icon-compass',
      act: 1
    },
    {
      id: 2,
      title: 'Frameworks de Prompts',
      desc: 'Estructuras para obtener resultados consistentes',
      duration: '30-35 min',
      icon: 'icon-layers',
      act: 1
    },
    {
      id: 3,
      title: 'Email y Comunicados Institucionales',
      desc: 'Redacción y revisión de comunicación institucional',
      duration: '30-35 min',
      icon: 'icon-layers',
      act: 2
    },
    {
      id: 4,
      title: 'Análisis de Reportes con IA',
      desc: 'Interpretación de datos y métricas con asistencia de IA',
      duration: '30-35 min',
      icon: 'icon-eye',
      act: 2
    },
    {
      id: 5,
      title: 'Automatización de Procesos Directivos',
      desc: 'Flujos de trabajo para reportes y procesos recurrentes',
      duration: '30-35 min',
      icon: 'icon-layers',
      act: 2
    },
    {
      id: 6,
      title: 'Atención a Stakeholders con IA',
      desc: 'IA para atención a alumnos, padres, proveedores',
      duration: '25-30 min',
      icon: 'icon-layers',
      act: 2
    },
    {
      id: 7,
      title: 'Gestión de Proyectos con IA',
      desc: 'Planificación y seguimiento de proyectos con IA',
      duration: '30-35 min',
      icon: 'icon-telescope',
      act: 3
    },
    {
      id: 8,
      title: 'Agentes y Equipo Local de IA',
      desc: 'Configuración de agentes especializados para su equipo',
      duration: '35-40 min',
      icon: 'icon-telescope',
      act: 3
    }
  ];

  /* Datos de los 3 badges/credenciales */
  const BADGES = [
    {
      id: 'explorer',
      name: 'Explorador IA',
      range: 'Niveles 1 – 3',
      levels: [1, 2, 3],
      cssClass: 'ana-credential-badge--explorer',
      desc: 'Domina los fundamentos de la IA generativa y los frameworks de instrucciones efectivas.'
    },
    {
      id: 'strategist',
      name: 'Estratega IA',
      range: 'Niveles 4 – 6',
      levels: [4, 5, 6],
      cssClass: 'ana-credential-badge--strategist',
      desc: 'Aplica IA para analizar reportes, automatizar procesos y atender stakeholders.'
    },
    {
      id: 'leader',
      name: 'Líder IA',
      range: 'Niveles 7 – 8',
      levels: [7, 8],
      cssClass: 'ana-credential-badge--leader',
      desc: 'Lidera la adopción de IA en su equipo con agentes especializados y gestión de proyectos.'
    }
  ];

  /* ─── ESTADO (localStorage) ─── */

  function getState() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      completedLevels: [],
      currentLevel: 1,
      version: 'academica',
      startedAt: null
    };
  }

  function setState(updates) {
    const state = Object.assign(getState(), updates);
    try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) {}
    return state;
  }

  function isLevelComplete(n) {
    return getState().completedLevels.includes(n);
  }

  function isLevelUnlocked(n) {
    if (n === 1) return true;
    return isLevelComplete(n - 1);
  }

  function completeLevel(n) {
    const state = getState();
    if (!state.completedLevels.includes(n)) {
      state.completedLevels.push(n);
      state.completedLevels.sort((a, b) => a - b);
    }
    /* Avanzar currentLevel al siguiente no-completado */
    let next = n + 1;
    while (next <= TOTAL && state.completedLevels.includes(next)) next++;
    if (next > TOTAL) next = TOTAL;
    state.currentLevel = next;
    setState(state);
    updateHeaderProgress();

    /* Mensaje de celebración escalado por acto narrativo */
    var level = LEVELS[n - 1];
    var act = level ? level.act : 1;
    var msg = act === 1 ? 'Ha completado el Nivel ' + n + '. Su primer instrumento está calibrado.'
            : act === 2 ? 'Ha completado el Nivel ' + n + '. Su dominio del observatorio crece.'
            :             'Ha completado el Nivel ' + n + '. La vista panorámica es suya.';
    showToast(msg);

    /* Celebración visual */
    var card = document.querySelector('[data-level="' + n + '"]');
    if (card) {
      card.classList.add('ana-celebrate');
      if (act >= 2) card.classList.add('ana-celebrate-glow');
      setTimeout(function () { card.classList.remove('ana-celebrate', 'ana-celebrate-glow'); }, 800);
    }
  }

  function getCompletedCount() {
    return getState().completedLevels.length;
  }

  function getProgressPercent() {
    return Math.round((getCompletedCount() / TOTAL) * 100);
  }

  function isBadgeEarned(badge) {
    return badge.levels.every(function (l) { return isLevelComplete(l); });
  }

  /* ─── HELPERS ─── */

  /** Crea un ícono SVG inline via <use> */
  function svgIcon(id, size) {
    size = size || 24;
    return '<svg width="' + size + '" height="' + size + '" aria-hidden="true"><use href="#' + id + '"></use></svg>';
  }

  /** Devuelve la clase de estado de un nivel */
  function levelStateClass(n) {
    if (isLevelComplete(n)) return 'complete';
    if (isLevelUnlocked(n) && !isLevelComplete(n)) return 'current';
    return 'locked';
  }

  /** Toast notification */
  function showToast(msg) {
    var toast = document.getElementById('toast');
    var text  = document.getElementById('toast-text');
    if (!toast || !text) return;
    text.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3000);
  }

  /** Detecta si el usuario prefiere movimiento reducido */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /** Scroll suave al top (respetuoso de reduced motion) */
  function scrollToTop() {
    if (prefersReducedMotion()) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ─── HEADER PROGRESS ─── */

  function updateHeaderProgress() {
    var pct  = getProgressPercent();
    var fill = document.getElementById('header-progress-fill');
    var text = document.getElementById('header-progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent  = pct + '%';
  }

  /* ─── VERSION PICKER ─── */

  function initVersionPicker() {
    var btns = document.querySelectorAll('.ana-version-picker__btn');
    var state = getState();
    btns.forEach(function (btn) {
      var isActive = btn.dataset.version === state.version;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.ana-version-picker__btn');
      if (!btn) return;
      var version = btn.dataset.version;
      setState({ version: version });
      btns.forEach(function (b) {
        var active = b.dataset.version === version;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      showToast('Versión cambiada a: ' + (version === 'academica' ? 'Académica' : 'Administrativa'));
      applyVersionFilter();
    });
  }

  /* ─── MOBILE MENU ─── */

  function initMobileMenu() {
    var btn      = document.getElementById('hamburger-btn');
    var menu     = document.getElementById('mobile-menu');
    var close    = document.getElementById('mobile-menu-close');
    var backdrop = document.getElementById('mobile-menu-backdrop');
    if (!btn || !menu) return;

    function openMenu() {
      menu.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (close) close.focus();
    }

    function closeMenu() {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      btn.focus();
    }

    btn.addEventListener('click', openMenu);
    if (close)    close.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    /* Escape cierra el menú */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
      }
    });

    /* Cerrar al navegar */
    window.addEventListener('hashchange', closeMenu);

    /* Inyectar links de niveles en el menú mobile */
    updateMobileNav();
  }

  function updateMobileNav() {
    var nav = document.getElementById('mobile-nav');
    if (!nav) return;
    /* Remover links de nivel previos */
    var existing = nav.querySelectorAll('.mobile-level-link');
    existing.forEach(function (el) { el.remove(); });

    LEVELS.forEach(function (level) {
      var a = document.createElement('a');
      a.href = '#nivel-' + level.id;
      a.className = 'mobile-level-link';
      var st = levelStateClass(level.id);
      if (st === 'complete') {
        a.innerHTML = svgIcon('icon-check-circle', 18) + ' Nivel ' + level.id + '. ' + level.title;
        a.style.color = 'var(--ana-success)';
      } else if (st === 'current') {
        a.innerHTML = svgIcon('icon-circle-dot', 18) + ' Nivel ' + level.id + '. ' + level.title;
        a.style.color = 'var(--ana-primary)';
      } else {
        a.innerHTML = svgIcon('icon-lock', 18) + ' Nivel ' + level.id + '. ' + level.title;
        a.style.color = 'var(--ana-level-locked-text)';
      }
      nav.appendChild(a);
    });
  }

  /* ─── SCROLL REVEAL ─── */

  function initScrollReveal() {
    /* Desconectar observer anterior para evitar memory leak */
    if (currentObserver) { currentObserver.disconnect(); currentObserver = null; }

    if (prefersReducedMotion()) {
      /* Mostrar todo inmediatamente */
      document.querySelectorAll('.scroll-reveal').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(function (el) {
      observer.observe(el);
    });
    currentObserver = observer;
  }

  /* ─── COPY TO CLIPBOARD ─── */

  function initCopyButtons() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.ana-prompt-block__copy, .copy-btn');
      if (!btn) return;
      var block = btn.closest('.ana-prompt-block');
      if (!block) return;
      /* Soporta .ana-prompt-block__code (CSS propio) y <code> (HTML de contenido) */
      var code = block.querySelector('.ana-prompt-block__code') || block.querySelector('code');
      if (!code) return;
      var text = code.textContent || code.innerText;
      navigator.clipboard.writeText(text.trim()).then(function () {
        btn.classList.add('copied');
        /* Actualiza etiqueta visible (.label) si existe, o innerHTML completo */
        var label = btn.querySelector('.label');
        if (label) {
          label.textContent = 'Copiado';
          setTimeout(function () { label.textContent = 'Copiar'; }, 2200);
        } else {
          btn.innerHTML = svgIcon('icon-check', 16) + ' Copiado';
          setTimeout(function () {
            btn.innerHTML = svgIcon('icon-copy', 16) + ' Copiar';
          }, 2200);
        }
        setTimeout(function () { btn.classList.remove('copied'); }, 2200);
      }).catch(function () {
        showToast('No se pudo copiar al portapapeles.');
      });
    });
  }

  /* ─── KEYBOARD ACCESSIBILITY ─── */

  function initKeyboard() {
    /* Permitir Enter/Space en cards de nivel */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var card = e.target.closest('.ana-level-card[data-level]');
      if (!card) return;
      e.preventDefault();
      card.click();
    });
  }

  /* ─── ACCORDION EXPAND/COLLAPSE ─── */

  function initAccordions() {
    document.addEventListener('click', function(e) {
      var toggle = e.target.closest('.ana-accordion__toggle');
      if (!toggle) return;
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      var content = toggle.nextElementSibling;
      if (content) content.setAttribute('aria-hidden', String(expanded));
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════════════
     VISTAS (ROUTER)
     ═══════════════════════════════════════════════════════════════════════════════ */

  var app; /* referencia al contenedor #app */

  /* ─── RENDER HOME ─── */

  function renderHome() {
    var state   = getState();
    var pct     = getProgressPercent();
    var done    = getCompletedCount();
    var current = state.currentLevel;

    /* CTA dinámico */
    var ctaText, ctaHash;
    if (done === 0) {
      ctaText = 'Iniciar programa';
      ctaHash = '#nivel-1';
    } else if (done >= TOTAL) {
      ctaText = 'Revisar programa completo';
      ctaHash = '#progreso';
    } else {
      ctaText = 'Continuar Nivel ' + current;
      ctaHash = '#nivel-' + current;
    }

    var html = '';

    /* ── Hero Section ── */
    html += '<section class="ana-hero" aria-labelledby="hero-title">';
    html += '  <div class="ana-container">';
    html += '    <p class="ana-hero__overline">Universidad Anáhuac Mayab · Formación Continua</p>';
    html += '    <h1 class="ana-hero__title" id="hero-title">IA Práctica para Líderes Anáhuac</h1>';
    html += '    <p class="ana-hero__subtitle">Programa de formación en inteligencia artificial generativa para directivos. 8 niveles progresivos, de conceptos fundamentales a agentes de IA.</p>';
    html += '    <div class="ana-hero__actions">';
    html += '      <a href="' + ctaHash + '" class="ana-btn ana-btn--primary ana-btn--lg">' + ctaText + ' ' + svgIcon('icon-arrow-right', 20) + '</a>';
    html += '      <a href="#progreso" class="ana-btn ana-btn--secondary">Mi progreso</a>';
    html += '    </div>';

    /* Progreso global en hero */
    if (done > 0) {
      html += '    <div class="ana-hero__progress">';
      html += '      <p class="ana-body-sm">' + done + ' de ' + TOTAL + ' niveles completados</p>';
      html += '      <div class="ana-progress-bar">';
      html += '        <div class="ana-progress-bar__fill" style="width:' + pct + '%"></div>';
      html += '      </div>';
      html += '    </div>';
    }

    html += '  </div>';
    html += '</section>';

    /* ── Grid de niveles ── */
    html += '<section class="ana-section" aria-label="Niveles del programa">';
    html += '  <div class="ana-container">';
    html += '    <div class="ana-section__header">';
    html += '      <h2 class="ana-h2">Niveles del programa</h2>';
    html += '      <p class="ana-body-sm">Cada nivel construye sobre el anterior. Complete cada uno antes de avanzar.</p>';
    html += '    </div>';
    html += '    <div class="ana-grid ana-grid--levels">';

    LEVELS.forEach(function (level) {
      var st = levelStateClass(level.id);
      var mod = st === 'complete' ? ' ana-level-card--complete'
              : st === 'current'  ? ' ana-level-card--current'
              : ' ana-level-card--locked';
      var clickable = st !== 'locked';
      var tag = clickable ? 'a' : 'div';
      var href = clickable ? ' href="#nivel-' + level.id + '"' : '';
      var role = clickable ? '' : ' aria-disabled="true"';
      var tabindex = clickable ? ' tabindex="0"' : '';

      html += '<' + tag + ' class="ana-level-card' + mod + '" data-level="' + level.id + '"' + href + role + tabindex + '>';
      html += '  <div class="ana-level-card__header">';
      html += '    <span class="ana-level-card__number">' + level.id + '</span>';
      html += '    <span class="ana-level-card__status">';
      if (st === 'complete') {
        html += svgIcon('icon-check-circle', 20);
      } else if (st === 'current') {
        html += svgIcon('icon-circle-dot', 20);
      } else {
        html += svgIcon('icon-lock', 20);
      }
      html += '    </span>';
      html += '  </div>';
      html += '  <h3 class="ana-level-card__title">' + level.title + '</h3>';
      html += '  <p class="ana-level-card__desc">' + level.desc + '</p>';
      html += '  <div class="ana-level-card__meta">';
      html += '    <span class="ana-level-card__meta-item">' + svgIcon('icon-clock', 14) + ' ' + level.duration + '</span>';
      html += '  </div>';
      html += '</' + tag + '>';
    });

    html += '    </div>';
    html += '  </div>';
    html += '</section>';

    /* ── Sección informativa ── */
    html += '<section class="ana-section scroll-reveal" aria-label="Información del programa">';
    html += '  <div class="ana-container">';
    html += '    <div class="ana-grid ana-grid--3col">';

    html += '      <div class="ana-callout ana-callout--theory">';
    html += '        <p class="ana-callout__label">' + svgIcon('icon-graduation-cap', 16) + ' Audiencia</p>';
    html += '        <p class="ana-body-sm">Directores, coordinadores y jefes de departamento de la Universidad Anáhuac Mayab.</p>';
    html += '      </div>';

    html += '      <div class="ana-callout ana-callout--exercise">';
    html += '        <p class="ana-callout__label">' + svgIcon('icon-clock', 16) + ' Duración</p>';
    html += '        <p class="ana-body-sm">8 niveles · 12-16 horas de contenido interactivo · 6.5 créditos SATCA.</p>';
    html += '      </div>';

    html += '      <div class="ana-callout ana-callout--theory">';
    html += '        <p class="ana-callout__label">' + svgIcon('icon-trophy', 16) + ' Entregables</p>';
    html += '        <p class="ana-body-sm">Banco de 25 prompts personalizados + Flujo de creación de reportes para su área.</p>';
    html += '      </div>';

    html += '    </div>';
    html += '  </div>';
    html += '</section>';

    app.innerHTML = html;
    initScrollReveal();
  }

  /* ─── RENDER SIDEBAR ─── */

  function renderSidebar(activeLevel) {
    var html = '';
    html += '<aside class="ana-sidebar" aria-label="Navegación de niveles">';
    html += '  <p class="ana-sidebar__title">Niveles</p>';
    html += '  <ul class="ana-sidebar__list" role="list">';

    LEVELS.forEach(function (level) {
      var st = levelStateClass(level.id);
      var mod = st === 'complete' ? ' ana-sidebar__item--complete'
              : st === 'current' || level.id === activeLevel ? ' ana-sidebar__item--current'
              : ' ana-sidebar__item--locked';
      var isCurrent = level.id === activeLevel;
      var clickable = st !== 'locked' || level.id === activeLevel;

      html += '<li>';
      if (clickable) {
        html += '<a href="#nivel-' + level.id + '" class="ana-sidebar__item' + mod + '"' + (isCurrent ? ' aria-current="page"' : '') + '>';
      } else {
        html += '<span class="ana-sidebar__item' + mod + '" aria-disabled="true">';
      }
      html += '  <span class="ana-sidebar__icon">';
      if (st === 'complete') {
        html += svgIcon('icon-check-circle', 18);
      } else if (st === 'current' || level.id === activeLevel) {
        html += svgIcon('icon-circle-dot', 18);
      } else {
        html += svgIcon('icon-lock', 18);
      }
      html += '  </span>';
      html += '  <span>Nivel ' + level.id + '</span>';
      if (clickable) {
        html += '</a>';
      } else {
        html += '</span>';
      }
      html += '</li>';
    });

    html += '  </ul>';
    html += '</aside>';
    return html;
  }

  /* ─── RENDER LEVEL ─── */

  /**
   * Carga el contenido HTML de un nivel via fetch().
   * Muestra un skeleton animado mientras carga.
   * Si fetch falla (ej: file:// o archivo no existe), muestra placeholder.
   * Aplica filtro de versión (académica/administrativa) tras inyectar.
   */
  function loadLevelContent(n) {
    var container = document.getElementById('level-content');
    if (!container) return;

    var url = 'contenido/nivel-' + n + '.html';

    fetch(url)
      .then(function (resp) {
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        return resp.text();
      })
      .then(function (html) {
        /* Sanitizar: usar DOMParser para evitar ejecución de scripts inyectados */
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        container.innerHTML = '';
        Array.from(doc.body.childNodes).forEach(function (node) {
          container.appendChild(document.importNode(node, true));
        });
        applyVersionFilter();
        initScrollReveal();
      })
      .catch(function () {
        /* Fallback para file:// o contenido no disponible */
        container.innerHTML =
          '<div class="ana-placeholder" style="text-align:center;padding:var(--ana-space-16) var(--ana-space-4)">' +
          '  <h2 class="ana-h3" style="margin-bottom:var(--ana-space-2)">Contenido del Nivel ' + n + '</h2>' +
          '  <p class="ana-body-sm">El contenido no pudo cargarse. Si abrió el sitio desde un archivo local (file://), ' +
          'use un servidor local: <code class="ana-code-inline">npx serve .</code> o abra desde GitHub Pages.</p>' +
          '</div>';
      });
  }

  /**
   * Filtra secciones data-version según la versión seleccionada.
   */
  function applyVersionFilter() {
    var state = getState();
    var version = state.version;
    var blocks = document.querySelectorAll('[data-version]');
    blocks.forEach(function (block) {
      if (block.dataset.version === version) {
        block.style.display = '';
        block.removeAttribute('hidden');
      } else {
        block.style.display = 'none';
        block.setAttribute('hidden', '');
      }
    });
  }

  function renderLevel(n) {
    var level = LEVELS[n - 1];
    if (!level) { renderHome(); return; }

    var st = levelStateClass(n);
    var state = getState();
    var version = state.version;
    var versionLabel = version === 'academica' ? 'Académica' : 'Administrativa';

    var html = '';

    /* Breadcrumbs */
    html += '<nav class="ana-breadcrumbs" aria-label="Ubicación">';
    html += '  <a href="#home">Inicio</a>';
    html += '  <span class="ana-breadcrumbs__sep">' + svgIcon('icon-chevron-right', 14) + '</span>';
    html += '  <span class="ana-breadcrumbs__current" aria-current="page">Nivel ' + n + '. ' + level.title + '</span>';
    html += '</nav>';

    /* Progreso del nivel dentro del acto */
    var actName = level.act === 1 ? 'Acto I — Descubrimiento'
                : level.act === 2 ? 'Acto II — Dominio'
                : 'Acto III — Liderazgo';

    /* Hero banner del nivel con imagen */
    html += '<div class="ana-level-hero" style="background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url(\'assets/images/nivel-' + n + '-hero.png\')">';
    html += '  <div class="ana-level-hero__content">';
    html += '    <p class="ana-level-hero__overline">NIVEL ' + n + ' · ' + actName + ' · Versión ' + versionLabel + '</p>';
    html += '    <h1 class="ana-level-hero__title">' + level.title + '</h1>';
    html += '    <p class="ana-level-hero__desc">' + level.desc + '</p>';
    html += '    <p class="ana-level-hero__meta">' + svgIcon('icon-clock', 14) + ' Duración estimada: ' + level.duration + '</p>';
    html += '  </div>';
    html += '</div>';

    /* Layout con sidebar */
    html += '<div class="ana-level-layout">';

    /* Sidebar */
    html += renderSidebar(n);

    /* Contenido principal */
    html += '<div class="ana-content">';
    html += '  <div class="ana-container">';

    /* Preview compacto de la presentación */
    html += '    <div class="ana-pres-preview">';
    html += '      <div class="ana-pres-preview__header">';
    html += '        <span class="ana-pres-preview__label">' + svgIcon('icon-layers', 16) + ' Presentación del nivel</span>';
    html += '        <button class="ana-pres-preview__btn" onclick="SlideViewer.open(' + n + ')" aria-label="Ampliar presentación del nivel ' + n + '">';
    html += '          ' + svgIcon('icon-expand', 14) + ' Ampliar</button>';
    html += '      </div>';
    html += '      <div class="ana-pres-preview__stage" onclick="SlideViewer.open(' + n + ')" role="button" tabindex="0" aria-label="Abrir presentación">';
    html += '        <iframe class="ana-pres-preview__iframe" src="slides/preview.html?n=' + n + '" title="Preview presentación nivel ' + n + '" loading="lazy"></iframe>';
    html += '        <div class="ana-pres-preview__overlay">';
    html += '          <span>' + svgIcon('icon-expand', 24) + '</span>';
    html += '          <span>Clic para abrir presentación</span>';
    html += '        </div>';
    html += '      </div>';
    html += '    </div>';

    /* Contenedor para contenido dinámico del módulo — skeleton mientras carga */
    html += '    <div id="level-content">';
    html += '      <div class="ana-skeleton ana-skeleton-heading"></div>';
    html += '      <div class="ana-skeleton ana-skeleton-text"></div>';
    html += '      <div class="ana-skeleton ana-skeleton-text"></div>';
    html += '      <div class="ana-skeleton ana-skeleton-text" style="width:80%"></div>';
    html += '      <div class="ana-skeleton ana-skeleton-block"></div>';
    html += '      <div class="ana-skeleton ana-skeleton-text"></div>';
    html += '      <div class="ana-skeleton ana-skeleton-text" style="width:60%"></div>';
    html += '    </div>';

    /* Botón: Ver presentación del nivel */
    html += '    <button class="ana-btn--slides" onclick="SlideViewer.open(' + n + ')" aria-label="Ver presentación del nivel ' + n + '">';
    html += '      ' + svgIcon('icon-layers', 18) + ' Ver presentación del nivel</button>';

    /* Navegación inferior */
    html += '    <div style="display:flex;flex-wrap:wrap;gap:var(--ana-space-3);justify-content:space-between;margin-top:var(--ana-space-8);padding-top:var(--ana-space-6);border-top:1px solid var(--ana-border-divider)">';

    /* Botón anterior */
    if (n > 1) {
      html += '      <a href="#nivel-' + (n - 1) + '" class="ana-btn ana-btn--secondary ana-btn--sm">' + svgIcon('icon-chevron-right', 16).replace('chevron-right', 'chevron-down').replace('m9 18 6-6-6-6', 'm18 15-6-6-6 6') + ' Nivel anterior</a>';
    } else {
      html += '      <a href="#home" class="ana-btn ana-btn--secondary ana-btn--sm">Inicio</a>';
    }

    /* Botón completar */
    if (st === 'complete') {
      html += '      <span class="ana-btn ana-btn--sm" style="background:var(--ana-success);color:#fff;cursor:default">' + svgIcon('icon-check-circle', 16) + ' Completado</span>';
    } else if (st !== 'locked') {
      html += '      <button class="ana-btn ana-btn--primary ana-btn--sm" id="btn-complete-level" data-level="' + n + '">' + svgIcon('icon-check', 16) + ' Marcar como completado</button>';
    }

    /* Botón siguiente */
    if (n < TOTAL) {
      var nextUnlocked = isLevelUnlocked(n + 1) || isLevelComplete(n);
      if (nextUnlocked) {
        html += '      <a href="#nivel-' + (n + 1) + '" class="ana-btn ana-btn--secondary ana-btn--sm">Siguiente nivel ' + svgIcon('icon-arrow-right', 16) + '</a>';
      } else {
        html += '      <span class="ana-btn ana-btn--sm" style="opacity:0.5;cursor:not-allowed">Siguiente nivel ' + svgIcon('icon-lock', 16) + '</span>';
      }
    } else {
      html += '      <a href="#progreso" class="ana-btn ana-btn--primary ana-btn--sm">' + svgIcon('icon-trophy', 16) + ' Ver mis logros</a>';
    }

    html += '    </div>';

    html += '  </div>';
    html += '</div>';
    html += '</div>';

    app.innerHTML = html;

    /* ── Cargar contenido HTML del módulo via fetch ── */
    loadLevelContent(n);

    /* Evento: marcar como completado */
    var btnComplete = document.getElementById('btn-complete-level');
    if (btnComplete) {
      btnComplete.addEventListener('click', function () {
        var lvl = parseInt(this.dataset.level, 10);
        completeLevel(lvl);
        updateMobileNav();
        renderLevel(lvl);
      });
    }

    initScrollReveal();
  }

  /* ─── RENDER PROGRESO ─── */

  function renderProgress() {
    var pct  = getProgressPercent();
    var done = getCompletedCount();

    var html = '';

    /* Hero de cierre si completó todo */
    if (pct >= 100) {
      html += '<div class="ana-level-hero" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.55)), url(\'assets/images/hero-cierre.png\'); min-height:240px">';
      html += '  <div class="ana-level-hero__content">';
      html += '    <p class="ana-level-hero__overline">PROGRAMA COMPLETADO</p>';
      html += '    <h1 class="ana-level-hero__title">¡Felicidades, Líder IA!</h1>';
      html += '    <p class="ana-level-hero__desc">Ha completado los 8 niveles del programa. Su equipo invisible está listo.</p>';
      html += '  </div>';
      html += '</div>';
    }

    html += '<section class="ana-section" aria-labelledby="progress-title">';
    html += '  <div class="ana-container">';

    /* Encabezado */
    html += '    <h1 class="ana-h1" id="progress-title">Mi progreso</h1>';
    html += '    <p class="ana-body-sm" style="margin-bottom:var(--ana-space-8)">' + done + ' de ' + TOTAL + ' niveles completados</p>';

    /* Barra de progreso grande */
    html += '    <div style="margin-bottom:var(--ana-space-10)">';
    html += '      <div style="display:flex;justify-content:space-between;margin-bottom:var(--ana-space-2)">';
    html += '        <span class="ana-label">Progreso general</span>';
    html += '        <span class="ana-h3" style="color:var(--ana-primary)">' + pct + '%</span>';
    html += '      </div>';
    html += '      <div class="ana-progress-bar" style="height:12px">';
    html += '        <div class="ana-progress-bar__fill' + (pct >= 100 ? ' ana-progress-bar__fill--complete' : '') + '" style="width:' + pct + '%"></div>';
    html += '      </div>';
    html += '    </div>';

    /* Nodos de progreso */
    html += '    <div class="ana-progress-nodes" style="margin-bottom:var(--ana-space-12)">';
    html += '      <div class="ana-progress-nodes__line"><div class="ana-progress-nodes__line-fill" style="width:' + pct + '%"></div></div>';
    LEVELS.forEach(function (level) {
      var st = levelStateClass(level.id);
      var nodeMod = st === 'complete' ? ' ana-progress-node--complete'
                  : st === 'current'  ? ' ana-progress-node--current'
                  : ' ana-progress-node--pending';
      html += '      <a href="#nivel-' + level.id + '" class="ana-progress-node' + nodeMod + ' tooltip-trigger">';
      html += '        <span>' + level.id + '</span>';
      html += '        <span class="tooltip">Nivel ' + level.id + ': ' + level.title + '</span>';
      html += '      </a>';
    });
    html += '    </div>';

    /* Badges / Credenciales */
    html += '    <div class="ana-section__header" style="margin-top:var(--ana-space-8)">';
    html += '      <h2 class="ana-h2">' + svgIcon('icon-trophy', 24) + ' Micro-credenciales</h2>';
    html += '      <p class="ana-body-sm">Complete los niveles indicados para obtener cada badge.</p>';
    html += '    </div>';
    html += '    <div class="ana-grid ana-grid--3col" style="margin-bottom:var(--ana-space-10)">';

    BADGES.forEach(function (badge) {
      var earned = isBadgeEarned(badge);
      var mod = earned ? ' ana-credential-badge--earned' : ' ana-credential-badge--locked';
      html += '    <div class="ana-credential-card scroll-reveal tooltip-trigger">';
      html += '      <div class="ana-credential-badge ' + badge.cssClass + mod + '">';
      html += '        ' + svgIcon('icon-trophy', 32);
      html += '      </div>';
      html += '      <p class="ana-credential-card__name">' + badge.name + '</p>';
      html += '      <p class="ana-credential-card__range">' + badge.range + '</p>';
      html += '      <p class="ana-credential-card__info">' + badge.desc + '</p>';
      html += '      <span class="tooltip">Complete ' + badge.range + ' para obtener este badge</span>';
      if (earned) {
        html += '      <span class="ana-badge ana-badge--complete">' + svgIcon('icon-check', 14) + ' Obtenido</span>';
      } else {
        var remaining = badge.levels.filter(function (l) { return !isLevelComplete(l); });
        html += '      <span class="ana-badge ana-badge--locked">' + svgIcon('icon-lock', 14) + ' Faltan ' + remaining.length + ' nivel' + (remaining.length > 1 ? 'es' : '') + '</span>';
      }
      html += '    </div>';
    });

    html += '    </div>';

    /* Entregables del participante */
    html += '    <div class="ana-section__header">';
    html += '      <h2 class="ana-h2">' + svgIcon('icon-briefcase', 24) + ' Entregables del participante</h2>';
    html += '    </div>';
    html += '    <div class="ana-grid ana-grid--2col">';

    html += '      <div class="ana-callout ana-callout--exercise scroll-reveal">';
    html += '        <p class="ana-callout__label">' + svgIcon('icon-layers', 16) + ' Banco de Prompts</p>';
    html += '        <p class="ana-body">25 instrucciones personalizadas para su área funcional, construidas a lo largo de los 8 niveles.</p>';
    html += '      </div>';

    html += '      <div class="ana-callout ana-callout--exercise scroll-reveal">';
    html += '        <p class="ana-callout__label">' + svgIcon('icon-layers', 16) + ' Flujo de Reportes</p>';
    html += '        <p class="ana-body">Flujo de creación de reportes de su área, configurado para dispararse manualmente con Amazon Quick.</p>';
    html += '      </div>';

    html += '    </div>';

    /* Grid de niveles rápido */
    html += '    <div class="ana-section__header" style="margin-top:var(--ana-space-10)">';
    html += '      <h2 class="ana-h2">Detalle por nivel</h2>';
    html += '    </div>';
    html += '    <div class="ana-grid ana-grid--4col" style="margin-bottom:var(--ana-space-8)">';

    LEVELS.forEach(function (level) {
      var st = levelStateClass(level.id);
      var bg = st === 'complete' ? 'var(--ana-success-light)' : st === 'current' ? 'var(--ana-level-current-bg)' : 'var(--ana-level-locked-bg)';
      var borderColor = st === 'complete' ? 'var(--ana-success-border)' : st === 'current' ? 'var(--ana-primary)' : 'var(--ana-inactive)';
      html += '    <a href="#nivel-' + level.id + '" class="scroll-reveal" style="display:block;padding:var(--ana-space-4);border-radius:var(--ana-radius-md);background:' + bg + ';border:1px solid ' + borderColor + ';text-decoration:none;color:inherit">';
      html += '      <p class="ana-label" style="margin-bottom:var(--ana-space-1)">Nivel ' + level.id + '</p>';
      html += '      <p class="ana-body-sm">' + level.title + '</p>';
      if (st === 'complete') {
        html += '      <p class="ana-caption" style="color:var(--ana-success);margin-top:var(--ana-space-1)">' + svgIcon('icon-check-circle', 14) + ' Completado</p>';
      } else if (st === 'current') {
        html += '      <p class="ana-caption" style="color:var(--ana-primary);margin-top:var(--ana-space-1)">' + svgIcon('icon-circle-dot', 14) + ' En curso</p>';
      } else {
        html += '      <p class="ana-caption" style="color:var(--ana-level-locked-text);margin-top:var(--ana-space-1)">' + svgIcon('icon-lock', 14) + ' Bloqueado</p>';
      }
      html += '    </a>';
    });

    html += '    </div>';

    html += '  </div>';
    html += '</section>';

    app.innerHTML = html;
    initScrollReveal();
  }

  /* ─── RENDER RECURSOS ─── */

  function renderResources() {
    var html = '';

    html += '<section class="ana-section" aria-labelledby="recursos-title">';
    html += '  <div class="ana-container" style="max-width:var(--ana-max-width-content)">';
    html += '    <h1 class="ana-h1" id="recursos-title">Recursos complementarios</h1>';
    html += '    <p class="ana-body" style="margin-bottom:var(--ana-space-8)">Material de apoyo para aprovechar al máximo el programa.</p>';

    html += '    <div class="ana-callout ana-callout--theory scroll-reveal" style="margin-bottom:var(--ana-space-6)">';
    html += '      <p class="ana-callout__label">' + svgIcon('icon-compass', 16) + ' Tutoriales</p>';
    html += '      <ul style="margin:var(--ana-space-3) 0 0 var(--ana-space-6);list-style:disc">';
    html += '        <li class="ana-body-sm" style="margin-bottom:var(--ana-space-2)">Tutorial de Amazon Quick — Configuración inicial y primeros pasos</li>';
    html += '        <li class="ana-body-sm" style="margin-bottom:var(--ana-space-2)">Guía de prompts avanzados — Técnicas de iteración y cadenas de pensamiento</li>';
    html += '        <li class="ana-body-sm">Guía de agentes y flujos — Configuración de agentes especializados</li>';
    html += '      </ul>';
    html += '    </div>';

    html += '    <div class="ana-callout ana-callout--exercise scroll-reveal" style="margin-bottom:var(--ana-space-6)">';
    html += '      <p class="ana-callout__label">' + svgIcon('icon-layers', 16) + ' Herramientas principales</p>';
    html += '      <ul style="margin:var(--ana-space-3) 0 0 var(--ana-space-6);list-style:disc">';
    html += '        <li class="ana-body-sm" style="margin-bottom:var(--ana-space-2)"><strong>Amazon Quick</strong> — Herramienta principal del curso (workspace local, agentes, archivos)</li>';
    html += '        <li class="ana-body-sm" style="margin-bottom:var(--ana-space-2)"><strong>ChatGPT</strong> — Alternativa para ejercicios de contraste</li>';
    html += '        <li class="ana-body-sm"><strong>Google Gemini</strong> — Alternativa con integración Google Workspace</li>';
    html += '      </ul>';
    html += '    </div>';

    html += '    <div class="ana-callout ana-callout--theory scroll-reveal">';
    html += '      <p class="ana-callout__label">' + svgIcon('icon-telescope', 16) + ' Bibliografía recomendada</p>';
    html += '      <p class="ana-body-sm">La bibliografía completa y los frameworks de referencia (UNESCO AI Competency Framework, Stanford HAI, RAIL-Ed) están disponibles dentro de cada nivel.</p>';
    html += '    </div>';

    html += '  </div>';
    html += '</section>';

    app.innerHTML = html;
    initScrollReveal();
  }

  /* ─── RENDER 404 ─── */

  function render404() {
    var html = '';
    html += '<section class="ana-section">';
    html += '  <div class="ana-container" style="text-align:center;padding:var(--ana-space-20) 0">';
    html += '    <p style="font-size:var(--ana-text-5xl);margin-bottom:var(--ana-space-4)">' + svgIcon('icon-compass', 64) + '</p>';
    html += '    <h1 class="ana-h1">Página no encontrada</h1>';
    html += '    <p class="ana-body-sm" style="margin:var(--ana-space-4) 0 var(--ana-space-8)">La dirección solicitada no existe en este programa.</p>';
    html += '    <a href="#home" class="ana-btn ana-btn--primary">Volver al inicio</a>';
    html += '  </div>';
    html += '</section>';
    app.innerHTML = html;
  }

  /* ═══════════════════════════════════════════════════════════════════════════════
     ROUTER
     ═══════════════════════════════════════════════════════════════════════════════ */

  function getRoute() {
    var hash = window.location.hash || '#home';
    return hash.replace('#', '').toLowerCase();
  }

  function navigate() {
    var route = getRoute();

    /* Actualizar estado de navegación en el header */
    var navLinks = document.querySelectorAll('.ana-header__nav a');
    navLinks.forEach(function (a) {
      var linkRoute = (a.getAttribute('href') || '').replace('#', '');
      a.classList.toggle('active', linkRoute === route);
    });

    /* Determinar vista */
    if (route === '' || route === 'home') {
      renderHome();
    } else if (route === 'progreso') {
      renderProgress();
    } else if (route === 'recursos') {
      renderResources();
    } else if (route.startsWith('nivel-')) {
      var num = parseInt(route.replace('nivel-', ''), 10);
      if (num >= 1 && num <= TOTAL) {
        renderLevel(num);
      } else {
        render404();
      }
    } else {
      render404();
    }

    scrollToTop();
    updateHeaderProgress();
    updateMobileNav();

    /* Focus management para accesibilidad */
    var heading = app.querySelector('h1');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════════════
     INICIALIZACIÓN
     ═══════════════════════════════════════════════════════════════════════════════ */

  function init() {
    app = document.getElementById('app');
    if (!app) return;

    /* Registrar timestamp de inicio */
    var state = getState();
    if (!state.startedAt) {
      setState({ startedAt: new Date().toISOString() });
    }

    /* Inicializar componentes */
    updateHeaderProgress();
    initVersionPicker();
    initMobileMenu();
    initCopyButtons();
    initKeyboard();
    initAccordions();

    /* Routing */
    window.addEventListener('hashchange', navigate);
    navigate();
  }

  /* ─── EASTER EGG: triple clic en logo ─── */
  (function () {
    var clickCount = 0;
    var clickTimer = null;
    var facts = [
      'El 73% de las universidades top-100 del mundo ya integran IA en sus procesos administrativos. (UNESCO, 2025)',
      'Un directivo que domina el diseño de instrucciones para IA ahorra en promedio 8 horas semanales. (McKinsey, 2025)',
      'La IA no reemplaza directivos — amplifica a los que saben dar instrucciones claras.',
      'El término «alucinación» de IA fue acuñado en 2022. En 2026, sigue siendo el error más común y más peligroso.',
      'Amazon Quick puede leer un documento de 200 páginas en 3 segundos. Verificar su respuesta le toma a usted 3 minutos. Ese es el equilibrio.'
    ];
    document.addEventListener('click', function (e) {
      var logo = e.target.closest('.ana-header__logo');
      if (!logo) return;
      clickCount++;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(function () { clickCount = 0; }, 600);
      if (clickCount >= 3) {
        clickCount = 0;
        var fact = facts[Math.floor(Math.random() * facts.length)];
        showToast(fact);
      }
    });
  })();

  /* Arrancar cuando el DOM esté listo */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
