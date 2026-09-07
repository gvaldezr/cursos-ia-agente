/* ══════════════════════════════════════════════════════════════════
   SLIDES.JS — Motor de Presentaciones Web
   IA Práctica para Líderes Anáhuac · Universidad Anáhuac Mayab
   Septiembre 2026
   ══════════════════════════════════════════════════════════════════ */

window.SlideViewer = (function () {
  'use strict';

  /* ─── State ─── */
  var viewer      = null; // .ana-slide-viewer
  var stage       = null; // .ana-slide-stage (where slides are rendered)
  var titleEl     = null; // .ana-slide-toolbar__title
  var counterEl   = null; // .ana-slide-toolbar__counter
  var progressEl  = null; // .ana-slide-progress__fill
  var prevBtn     = null; // #slide-prev
  var nextBtn     = null; // #slide-next
  var dotsContainer = null; // .ana-slide-nav__dots

  var slides      = [];   // NodeList → Array of .slide elements
  var current     = 0;    // 0-indexed
  var totalSlides = 0;
  var isOpen      = false;
  var currentLevel = 0;

  /* Touch state */
  var touchStartX = 0;
  var touchStartY = 0;
  var touchDeltaX = 0;
  var isSwiping   = false;

  /* Reduced motion */
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── LEVEL TITLES (matching LEVELS in app.js) ─── */
  var LEVEL_TITLES = [
    'Fundamentos de IA Generativa',
    'Frameworks de Prompts',
    'Email y Comunicados Institucionales',
    'Análisis de Reportes con IA',
    'Automatización de Procesos Directivos',
    'Atención a Stakeholders con IA',
    'Gestión de Proyectos con IA',
    'Agentes y Equipo Local de IA'
  ];

  /* ─── Init: cache DOM refs (called once) ─── */
  function cacheDom() {
    viewer      = document.getElementById('slide-viewer');
    stage       = document.getElementById('slide-stage');
    titleEl     = document.getElementById('slide-title');
    counterEl   = document.getElementById('slide-counter');
    progressEl  = document.getElementById('slide-progress-fill');
    prevBtn     = document.getElementById('slide-prev');
    nextBtn     = document.getElementById('slide-next');
    dotsContainer = document.getElementById('slide-dots');
  }

  /* ─── OPEN: Load and show slides for level N ─── */
  function open(levelN) {
    if (!viewer) cacheDom();
    if (!viewer || !stage) {
      console.error('[SlideViewer] DOM elements not found.');
      return;
    }

    currentLevel = levelN;
    current = 0;

    /* Show viewer immediately with loading state */
    viewer.classList.add('active');
    isOpen = true;
    document.body.style.overflow = 'hidden';

    /* Update title */
    var title = LEVEL_TITLES[levelN - 1] || ('Nivel ' + levelN);
    if (titleEl) titleEl.textContent = 'Nivel ' + levelN + '. ' + title;

    /* Loading placeholder */
    stage.innerHTML =
      '<div style="text-align:center;color:rgba(255,255,255,0.6);font-family:var(--ana-font-body)">' +
      '  <div class="ana-skeleton ana-skeleton-heading" style="margin:0 auto var(--ana-space-4);max-width:300px"></div>' +
      '  <p style="font-size:var(--ana-text-sm)">Cargando presentación…</p>' +
      '</div>';

    /* Fetch slide HTML */
    fetch('slides/nivel-' + levelN + '.html')
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.text();
      })
      .then(function (html) {
        /* Parse via DOMParser (safe: no script execution) */
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var parsedSlides = doc.querySelectorAll('.slide');

        if (parsedSlides.length === 0) {
          stage.innerHTML =
            '<div style="text-align:center;color:rgba(255,255,255,0.6);font-family:var(--ana-font-body);padding:var(--ana-space-8)">' +
            '  <p style="font-size:var(--ana-text-lg);margin-bottom:var(--ana-space-3)">📊</p>' +
            '  <p>No se encontraron slides para este nivel.</p>' +
            '  <p style="font-size:var(--ana-text-sm);opacity:0.7;margin-top:var(--ana-space-2)">Los slides se están generando. Intente más tarde.</p>' +
            '</div>';
          return;
        }

        /* Inject slides into stage */
        stage.innerHTML = '';
        slides = [];
        parsedSlides.forEach(function (slide) {
          slide.classList.remove('active');
          stage.appendChild(slide);
          slides.push(slide);
        });

        totalSlides = slides.length;
        current = 0;

        /* Build dot indicators */
        buildDots();

        /* Show first slide */
        showSlide(0);

        /* Focus viewer for keyboard */
        viewer.setAttribute('tabindex', '-1');
        viewer.focus({ preventScroll: true });
      })
      .catch(function (err) {
        console.error('[SlideViewer] Error loading slides:', err);
        stage.innerHTML =
          '<div style="text-align:center;color:rgba(255,255,255,0.6);font-family:var(--ana-font-body);padding:var(--ana-space-8)">' +
          '  <p style="font-size:var(--ana-text-lg);margin-bottom:var(--ana-space-3)">⚠️</p>' +
          '  <p>Error al cargar la presentación.</p>' +
          '  <p style="font-size:var(--ana-text-sm);opacity:0.7;margin-top:var(--ana-space-2)">' + err.message + '</p>' +
          '</div>';
      });
  }

  /* ─── CLOSE: Hide viewer, restore page ─── */
  function close() {
    if (!viewer) return;
    viewer.classList.remove('active');
    isOpen = false;
    document.body.style.overflow = '';
    slides = [];
    totalSlides = 0;
    current = 0;

    /* Exit fullscreen if active */
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(function () {});
    }
  }

  /* ─── SHOW SLIDE ─── */
  function showSlide(index, direction) {
    if (index < 0 || index >= totalSlides) return;

    /* Hide all */
    slides.forEach(function (s) {
      s.classList.remove('active', 'slide--reverse');
    });

    /* Apply direction class for animation */
    var target = slides[index];
    if (!reducedMotion && direction === 'prev') {
      target.classList.add('slide--reverse');
    }
    target.classList.add('active');

    current = index;
    updateUI();

    /* Scroll the active slide to top (overflow-y is on .slide now) */
    if (target) target.scrollTop = 0;
    if (stage)  stage.scrollTop  = 0;
  }

  /* ─── NAVIGATION ─── */
  function next() {
    if (current < totalSlides - 1) {
      showSlide(current + 1, 'next');
    }
  }

  function prev() {
    if (current > 0) {
      showSlide(current - 1, 'prev');
    }
  }

  function goTo(n) {
    /* n is 1-indexed for external API, 0-indexed internally */
    var idx = (typeof n === 'number') ? n : parseInt(n, 10);
    if (idx >= 1 && idx <= totalSlides) {
      var direction = idx - 1 > current ? 'next' : 'prev';
      showSlide(idx - 1, direction);
    }
  }

  /* ─── UI UPDATE (counter, progress, dots, buttons) ─── */
  function updateUI() {
    /* Counter */
    if (counterEl) {
      counterEl.textContent = (current + 1) + ' / ' + totalSlides;
    }

    /* Progress bar */
    if (progressEl && totalSlides > 0) {
      var pct = ((current + 1) / totalSlides) * 100;
      progressEl.style.width = pct + '%';
    }

    /* Prev/Next button states */
    if (prevBtn) prevBtn.disabled = (current === 0);
    if (nextBtn) nextBtn.disabled = (current >= totalSlides - 1);

    /* Dots */
    if (dotsContainer) {
      var dots = dotsContainer.querySelectorAll('.ana-slide-nav__dot');
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
      });
    }
  }

  /* ─── BUILD DOTS ─── */
  function buildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';

    /* Only show dots if ≤ 20 slides (otherwise too cluttered) */
    if (totalSlides > 20) return;

    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement('button');
      dot.className = 'ana-slide-nav__dot';
      dot.setAttribute('aria-label', 'Ir a slide ' + (i + 1));
      dot.dataset.index = i;
      if (i === current) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    }
  }

  /* ─── FULLSCREEN ─── */
  function toggleFullscreen() {
    if (!viewer) return;

    if (!document.fullscreenElement) {
      viewer.requestFullscreen().catch(function (err) {
        console.warn('[SlideViewer] Fullscreen not available:', err.message);
      });
    } else {
      document.exitFullscreen().catch(function () {});
    }
  }

  /* ─── KEYBOARD HANDLER ─── */
  function onKeydown(e) {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        next();
        break;

      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prev();
        break;

      case 'Home':
        e.preventDefault();
        if (totalSlides > 0) showSlide(0, 'prev');
        break;

      case 'End':
        e.preventDefault();
        if (totalSlides > 0) showSlide(totalSlides - 1, 'next');
        break;

      case 'Escape':
        e.preventDefault();
        close();
        break;

      case 'f':
      case 'F':
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          toggleFullscreen();
        }
        break;
    }
  }

  /* ─── TOUCH / SWIPE ─── */
  function onTouchStart(e) {
    if (!isOpen) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    isSwiping = false;
  }

  function onTouchMove(e) {
    if (!isOpen) return;
    var dx = e.touches[0].clientX - touchStartX;
    var dy = e.touches[0].clientY - touchStartY;

    /* Only track horizontal swipes (angle < 30°) */
    if (!isSwiping && Math.abs(dx) > 10) {
      isSwiping = Math.abs(dx) > Math.abs(dy) * 1.5;
    }

    if (isSwiping) {
      e.preventDefault();
      touchDeltaX = dx;
    }
  }

  function onTouchEnd() {
    if (!isOpen || !isSwiping) return;
    var threshold = 60; /* px to count as a swipe */

    if (touchDeltaX < -threshold) {
      next();
    } else if (touchDeltaX > threshold) {
      prev();
    }

    touchDeltaX = 0;
    isSwiping = false;
  }

  /* ─── CLICK HANDLERS (delegated) ─── */
  function onClick(e) {
    /* Close button */
    if (e.target.closest('#slide-close')) {
      close();
      return;
    }

    /* Fullscreen button */
    if (e.target.closest('#slide-fullscreen')) {
      toggleFullscreen();
      return;
    }

    /* Prev/Next buttons */
    if (e.target.closest('#slide-prev')) {
      prev();
      return;
    }
    if (e.target.closest('#slide-next')) {
      next();
      return;
    }

    /* Dot navigation */
    var dot = e.target.closest('.ana-slide-nav__dot');
    if (dot && dot.dataset.index !== undefined) {
      var idx = parseInt(dot.dataset.index, 10);
      var direction = idx > current ? 'next' : 'prev';
      showSlide(idx, direction);
      return;
    }
  }

  /* ─── SETUP EVENT LISTENERS ─── */
  function bindEvents() {
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd, { passive: true });

    /* Delegated click on the viewer element */
    if (viewer) {
      viewer.addEventListener('click', onClick);
    } else {
      /* Fallback: delegate on document */
      document.addEventListener('click', function (e) {
        if (!isOpen) return;
        onClick(e);
      });
    }

    /* Listen for fullscreen changes to update icon */
    document.addEventListener('fullscreenchange', function () {
      var btn = document.getElementById('slide-fullscreen');
      if (!btn) return;
      btn.textContent = document.fullscreenElement ? '⊠' : '⛶';
      btn.setAttribute('aria-label',
        document.fullscreenElement ? 'Salir de pantalla completa' : 'Pantalla completa'
      );
    });
  }

  /* ─── INIT (auto-run on load) ─── */
  function init() {
    cacheDom();
    bindEvents();
  }

  /* Run init when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ─── PUBLIC API ─── */
  return {
    open: open,
    close: close,
    next: next,
    prev: prev,
    goTo: goTo,
    toggleFullscreen: toggleFullscreen,

    /* Getters */
    isOpen: function () { return isOpen; },
    getCurrentSlide: function () { return current + 1; },
    getTotalSlides: function () { return totalSlides; }
  };

})();
