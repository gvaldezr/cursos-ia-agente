#!/bin/bash
# ══════════════════════════════════════════════════════════════
# PUSH: Sprint 4 + Slide Decks Web + Rediseño + Preview
# Curso "IA Práctica para Líderes Anáhuac"
# 7 septiembre 2026
# ══════════════════════════════════════════════════════════════

cd ~/Desktop/cursos-ia-agente || exit 1

echo "═══════════════════════════════════════════════"
echo "  Push: Sprint 4 + Slides + Rediseño + Preview"
echo "═══════════════════════════════════════════════"

# ── Stage todo ──
echo ""
echo "📦 Staging todos los cambios..."
git add -A

echo ""
echo "📋 Archivos staged:"
git diff --cached --stat
echo ""

# ── Commit ──
echo "💾 Creando commit..."
git commit -m "feat: Sprint 4 + Slides Web dark glassmorphism + preview embebido

Sprint 4 — Polish Final (8/8):
- Tuteo corregido, meta tags, favicon SVG, print styles
- Dead code cleanup, CSS naming docs, tables audit
- Version picker verificado

Slide Decks Web — 104 slides en 8 niveles:
- Rediseño dark glassmorphism (#0a0a1a)
- Branding Anáhuac: gradient #FF5900→#432F64
- Manrope + Roboto, cards translúcidas
- Fullscreen viewer, keyboard/touch nav
- 512 inline styles eliminados

Preview compacto de presentación:
- Embebido en cada nivel después del concepto clave
- Primer slide visible en miniatura (scale 0.5)
- Hover overlay con 'Clic para abrir'
- Botón Ampliar en header del preview
- Dark theme consistente con viewer

CSS fixes: prompt overflow, .ana-prompt pre-wrap
"

echo ""
echo "✅ Commit creado"

# ── Push ──
echo ""
echo "🚀 Pushing a GitHub..."
git push origin main

echo ""
echo "═══════════════════════════════════════════════"
echo "  ✅ Listo — verifica en:"
echo "  https://gvaldezr.github.io/cursos-ia-agente/"
echo "═══════════════════════════════════════════════"
