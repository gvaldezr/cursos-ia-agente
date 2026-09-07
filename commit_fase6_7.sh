#!/bin/bash
# Commit de Fase 6 y Fase 7 al repositorio
# Ejecutar después de: xcode-select --install

cd ~/Desktop/cursos-ia-agente

# Agregar todos los archivos nuevos
git add fase6-construccion-assets/
git add fase7-ensamble-publicacion/
git add docs/ESTADO_PROYECTO.md
git add README.md

# Commit
git commit -m "feat: Fase 6 (Construcción de Assets) + Fase 7 (Mini sitio SPA)

Fase 6 — Construcción de Assets (5 entregables):
- fase6_brand_design_system.md: Design system completo, tokens CSS light/dark
- fase6_ui_components.md: Componentes UI responsive, WCAG AA
- fase6_visual_narrative.md: Metáfora 'El Observatorio', journey visual
- fase6_whimsy_elements.md: 15 microinteracciones, celebraciones
- fase6_lms_templates.md: Templates Canvas, SCORM/xAPI, Open Badges v3

Fase 7 — Mini sitio HTML autocontenido (211 KB):
- index.html: Shell SPA con header, footer, skip link
- css/styles.css: Design system Anáhuac Mayab (44 KB)
- js/app.js: Router SPA, fetch dinámico, progress tracker, versiones
- contenido/nivel-{1..8}.html: 8 módulos completos
- 34 bloques de prompt copiables
- Version picker Académica/Administrativa
- Dark mode, responsive mobile-first, WCAG AA
- 3 badges Open Badges (Explorador, Estratega, Líder IA)"

echo ""
echo "✅ Commit realizado. Para hacer push:"
echo "   git remote add origin https://github.com/TU_USUARIO/cursos-ia-agente.git"
echo "   git push -u origin main"
