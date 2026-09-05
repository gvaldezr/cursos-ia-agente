# Micro-credenciales Open Badges: IA Práctica para Líderes Anáhuac Mayab
## Sistema de Credencialización — Fase 3

> **Versión:** 1.0 | **Fecha:** 4 de septiembre de 2026  
> **Estándar:** Open Badges 3.0 (W3C Verifiable Credentials)  
> **Emisor:** Universidad Anáhuac Mayab — Centro de Educación Continua  
> **Alineación:** DigComp 2.2, SFIA 9 (AUTY Level 3-5), UNESCO ICT-CFT v3  
> **Arquitectura:** 3 badges stackables + 1 badge integrador final

---

## 1. Arquitectura del Sistema de Badges

### 1.1 Modelo Stackable (Apilable)

```
                    ┌─────────────────────────────────┐
                    │     🏆 LÍDER DIGITAL ANÁHUAC     │
                    │    (Badge Integrador Final)       │
                    │   = Badge 1 + Badge 2 + Badge 3   │
                    │   + 2 Entregables Finales ⭐       │
                    └────────────────┬────────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
   ┌──────────▼─────────┐ ┌─────────▼──────────┐ ┌────────▼──────────┐
   │  🟢 FUNDAMENTOS IA  │ │  🔵 IA APLICADA     │ │  🟣 LÍDER IA       │
   │   Módulos 1-3       │ │   Módulos 4-6       │ │   Módulos 7-8      │
   │   Consciencia        │ │   Competencia        │ │   Agencia           │
   └─────────────────────┘ └──────────────────────┘ └────────────────────┘
```

### 1.2 Principios del Sistema

1. **Independencia:** Cada badge tiene valor propio; no es obligatorio completar los 3
2. **Progresión:** Los badges siguen la secuencia del curso (Consciencia → Competencia → Agencia)
3. **Prerequisito:** Badge 2 requiere Badge 1; Badge 3 requiere Badge 2
4. **Verificabilidad:** Cada badge incluye URL de verificación pública y hash de evidencia
5. **Interoperabilidad:** Compatible con Open Badges 3.0, mochila digital Mozilla/Badgr, y LinkedIn Credentials
6. **Vigencia:** 3 años desde emisión; renovable mediante evidencia de uso continuo

---

## 2. Badge 1: Fundamentos IA 🟢

### 2.1 Metadatos del Badge

| Campo | Valor |
|-------|-------|
| **Nombre** | Fundamentos de IA para Gestión Universitaria |
| **Nombre corto** | Fundamentos IA |
| **Emisor** | Universidad Anáhuac Mayab — Centro de Educación Continua |
| **Nivel** | Introductorio (DigComp 2.2 Nivel 2-3: Básico-Intermedio) |
| **Módulos cubiertos** | 1. Fundamentos de IA Generativa · 2. Frameworks de Prompts · 3. Email/Comunicados/Casos de Uso |
| **Horas de aprendizaje** | 6-8 horas (contenido + práctica) |
| **Vigencia** | 3 años |
| **Identificador** | `urn:uuid:anahuac-mayab:ia-lideres:fundamentos-v1` |

### 2.2 Competencias Certificadas

| # | Competencia | Descriptor | Alineación DigComp 2.2 | Alineación SFIA 9 | Nivel UNESCO ICT-CFT |
|---|-------------|-----------|------------------------|-------------------|---------------------|
| F1 | **Comprensión de IA Generativa** | Distingue qué puede y qué no puede hacer la IA generativa; identifica oportunidades y riesgos en su contexto directivo | 1.1 Navegación, búsqueda y filtrado de datos | AUTY Level 3 | Adquisición de conocimiento |
| F2 | **Prompting estructurado** | Construye instrucciones efectivas para IA usando el marco Rol-Contexto-Tarea-Especificaciones (RCTE) y técnicas de iteración | 2.1 Interacción a través de tecnologías digitales | ISCO-3 AI User | Aplicación |
| F3 | **Comunicación institucional con IA** | Produce comunicación formal (correos, comunicados, convocatorias) con tono institucional apropiado y manejo de casos sensibles | 3.1 Desarrollo de contenidos digitales | ISCO-3 AI User | Aplicación |
| F4 | **Conciencia de limitaciones** | Reconoce que la IA puede generar información falsa (alucinaciones) y mantiene actitud de verificación ante todo output | 1.2 Evaluación de datos, información y contenidos | AUTY Level 3 | Conocimiento ético |

### 2.3 Evidencia Requerida

| Evidencia | Criterio mínimo | Verificación |
|-----------|-----------------|--------------|
| Mini-diagnóstico personal | 5 tareas reales identificadas con viabilidad IA | Evaluador verifica especificidad |
| 3 prompts maestros | Estructura RCTE en los 3; outputs funcionales | Evaluador verifica estructura y output |
| 5 templates de comunicación | Específicos del contexto institucional; tono correcto | Evaluador aplica rúbrica Módulo 3 |
| Caso difícil resuelto | Equilibrio empatía-normatividad; edición humana visible | Evaluador verifica edición del output IA |
| **Puntaje mínimo Bloque 1** | **≥70% ponderado** | Cálculo automático |

### 2.4 Criterios de Emisión

```
EMITIR Badge "Fundamentos IA" cuando:
  ✅ Módulos 1, 2 y 3 completados con todos los entregables
  ✅ Puntaje ponderado del Bloque 1 ≥ 70%
  ✅ Ninguna dimensión ⚡ (crítica) en Módulo 3 quedó en "Básico"
  ✅ Los 5 templates del Módulo 3 son funcionales (evaluación "Competente" o superior)
```

### 2.5 Alineación DigComp 2.2 Detallada

| Área DigComp | Competencia específica | Nivel alcanzado | Evidencia del curso |
|-------------|----------------------|-----------------|-------------------|
| **1. Información y alfabetización informacional** | 1.1 Navegación, búsqueda y filtrado | Nivel 3 (Intermedio) | Identificación de cuándo IA sirve vs. cuándo buscar en fuentes reales |
| | 1.2 Evaluación de datos | Nivel 2 (Básico) | Reconocimiento de alucinaciones en primer nivel |
| **2. Comunicación y colaboración** | 2.1 Interacción a través de tecnologías | Nivel 3 (Intermedio) | Uso de IA conversacional con estructura RCTE |
| **3. Creación de contenido digital** | 3.1 Desarrollo de contenidos | Nivel 3 (Intermedio) | Producción de comunicación institucional con IA |

---

## 3. Badge 2: IA Aplicada 🔵

### 3.1 Metadatos del Badge

| Campo | Valor |
|-------|-------|
| **Nombre** | IA Aplicada a la Gestión Universitaria |
| **Nombre corto** | IA Aplicada |
| **Emisor** | Universidad Anáhuac Mayab — Centro de Educación Continua |
| **Nivel** | Intermedio (DigComp 2.2 Nivel 4-5: Intermedio-Avanzado) |
| **Prerequisito** | Badge "Fundamentos IA" 🟢 |
| **Módulos cubiertos** | 4. Análisis de Reportes/Evaluación Crítica · 5. Ética + Automatización · 6. Stakeholders/Flujos Integrados |
| **Horas de aprendizaje** | 8-10 horas (contenido + práctica) |
| **Vigencia** | 3 años |
| **Identificador** | `urn:uuid:anahuac-mayab:ia-lideres:aplicada-v1` |

### 3.2 Competencias Certificadas

| # | Competencia | Descriptor | Alineación DigComp 2.2 | Alineación SFIA 9 | Nivel UNESCO ICT-CFT |
|---|-------------|-----------|------------------------|-------------------|---------------------|
| A1 | **Evaluación crítica de outputs de IA** | Verifica, cuestiona y clasifica información generada por IA usando sistema de semáforo; detecta alucinaciones y sesgos | 1.3 Gestión de datos, información y contenidos | AUTY Level 4 | Análisis |
| A2 | **Juicio ético en uso de IA** | Clasifica escenarios de gestión por apropiación ética (apropiado/precaución/inapropiado) con justificación fundamentada | 4.2 Protección de datos personales y privacidad | ETHC Level 4 | Gobernanza |
| A3 | **Diseño de flujos automatizados** | Diseña y documenta flujos de trabajo multi-paso con IA para reportes recurrentes de su área | 3.4 Programación | AUTY Level 4 | Creación |
| A4 | **Gestión de comunicación de alto volumen** | Usa IA para atender comunicación masiva con stakeholders manteniendo calidad, personalización y límites éticos | 2.4 Colaboración mediante tecnologías digitales | ISCO-4 AI Manager | Integración |
| A5 | **Diseño de procesos IA-asistidos** | Identifica en un proceso real dónde IA agrega valor, dónde el humano es insustituible y dónde se necesitan puntos de control | 4.4 Protección del medioambiente (uso responsable de recursos digitales) | AUTY Level 4 | Análisis |

### 3.3 Evidencia Requerida

| Evidencia | Criterio mínimo | Verificación |
|-----------|-----------------|--------------|
| Dictamen de confiabilidad | ≥2 errores verificables identificados con justificación | Evaluador verifica contra output original |
| Semáforo ético | ≥8/10 escenarios clasificados coherentemente con justificación | Evaluador valida razonamiento |
| ⭐ **Flujo de reporte documentado** | 5-6 pasos claros, prompts exactos, checklist de verificación, replicable por tercero | **Evaluador replica el flujo** o verifica replicabilidad |
| Kit de atención | 10 respuestas específicas del área + protocolo de escalamiento | Evaluador verifica personalización |
| Flujo integrado multi-paso | ≥3 pasos encadenados con output final completo | Evaluador verifica encadenamiento |
| **Puntaje mínimo Bloque 2** | **≥70% ponderado** | Cálculo automático |

### 3.4 Criterios de Emisión

```
EMITIR Badge "IA Aplicada" cuando:
  ✅ Badge "Fundamentos IA" 🟢 ya emitido
  ✅ Módulos 4, 5 y 6 completados con todos los entregables
  ✅ Puntaje ponderado del Bloque 2 ≥ 70%
  ✅ Flujo de reporte ⭐ evaluado como "Competente" o superior en TODAS las dimensiones ⚡
  ✅ Kit de atención incluye protocolo de límites éticos funcional
```

### 3.5 Alineación DigComp 2.2 Detallada

| Área DigComp | Competencia específica | Nivel alcanzado | Evidencia del curso |
|-------------|----------------------|-----------------|-------------------|
| **1. Información** | 1.3 Gestión de datos e información | Nivel 4 (Intermedio+) | Dictamen de confiabilidad con sistema de verificación |
| **2. Comunicación** | 2.4 Colaboración mediante tecnologías | Nivel 4 (Intermedio+) | Kit de atención a stakeholders personalizable |
| **3. Creación de contenido** | 3.3 Copyright y licencias | Nivel 3 (Intermedio) | Conciencia de autoría/responsabilidad en outputs IA |
| | 3.4 Programación/automatización | Nivel 4 (Intermedio+) | Flujo de reporte automatizado funcional |
| **4. Seguridad** | 4.2 Protección de datos personales | Nivel 4 (Intermedio+) | Semáforo ético con criterios de privacidad |
| | 4.4 Protección del medioambiente | Nivel 3 (Intermedio) | Uso responsable y eficiente de recursos IA |

---

## 4. Badge 3: Líder IA 🟣

### 4.1 Metadatos del Badge

| Campo | Valor |
|-------|-------|
| **Nombre** | Líder de IA en Gestión Universitaria |
| **Nombre corto** | Líder IA |
| **Emisor** | Universidad Anáhuac Mayab — Centro de Educación Continua |
| **Nivel** | Avanzado (DigComp 2.2 Nivel 5-6: Avanzado-Altamente especializado) |
| **Prerequisito** | Badge "IA Aplicada" 🔵 |
| **Módulos cubiertos** | 7. Gestión de Proyectos/Agentes · 8. Ecosistema IA + Plan de Adopción |
| **Horas de aprendizaje** | 8-10 horas (contenido + práctica) |
| **Vigencia** | 3 años |
| **Identificador** | `urn:uuid:anahuac-mayab:ia-lideres:lider-v1` |

### 4.2 Competencias Certificadas

| # | Competencia | Descriptor | Alineación DigComp 2.2 | Alineación SFIA 9 | Nivel UNESCO ICT-CFT |
|---|-------------|-----------|------------------------|-------------------|---------------------|
| L1 | **Configuración de agentes IA** | Crea, configura y prueba agentes especializados en Amazon Quick con instrucciones RCTE, documentos de referencia y protocolo de uso | 5.1 Resolución de problemas técnicos | AUTY Level 5 | Creación avanzada |
| L2 | **Orquestación de flujos multi-agente** | Diseña y ejecuta flujos donde el output de un agente alimenta el input de otro para resolver procesos complejos | 5.3 Uso creativo de tecnologías digitales | AUTY Level 5 | Integración |
| L3 | **Gestión de portafolio de prompts** | Organiza, mantiene y evoluciona un banco de 20+ prompts como herramienta operativa de su cargo | 5.2 Identificación de necesidades y respuestas tecnológicas | ISCO-4 AI Manager | Gestión |
| L4 | **Liderazgo de adopción de IA** | Diseña un plan de adopción de IA para su área con política de uso, gestión de riesgos, capacitación y métricas de impacto | 5.4 Identificación de brechas en competencia digital | STPL Level 4 | Liderazgo |
| L5 | **Gobernanza de IA a nivel de área** | Define reglas de uso de IA para su equipo: qué se puede automatizar, quién supervisa, qué datos se pueden usar | 4.2 Protección de datos (nivel avanzado) | ETHC Level 4 | Gobernanza institucional |

### 4.3 Evidencia Requerida

| Evidencia | Criterio mínimo | Verificación |
|-----------|-----------------|--------------|
| Agente funcional + ficha técnica | Agente responde correctamente a 3 consultas reales; ficha incluye limitaciones | Evaluador prueba agente o verifica capturas |
| Perfil de contexto institucional | Incluye cargo, área, estilo, prioridades; demostrada diferencia con/sin contexto | Evaluador compara outputs |
| Plan de proyecto real | Objetivos SMART, WBS, riesgos, responsables, calendario | Evaluador verifica factibilidad |
| ⭐ **Ecosistema de IA personal** | 3 agentes diferenciados + 1 flujo multi-paso funcional + 20+ prompts organizados | **Evaluador verifica funcionalidad integral** |
| Plan de adopción de IA | 6 elementos completos: quick wins, política, riesgos, capacitación, métricas, gobernanza | Evaluador verifica presentabilidad |
| **Puntaje mínimo Bloque 3** | **≥70% ponderado** | Cálculo automático |

### 4.4 Criterios de Emisión

```
EMITIR Badge "Líder IA" cuando:
  ✅ Badge "IA Aplicada" 🔵 ya emitido
  ✅ Módulos 7 y 8 completados con todos los entregables
  ✅ Puntaje ponderado del Bloque 3 ≥ 70%
  ✅ Ecosistema ⭐ evaluado como "Competente" o superior en TODAS las dimensiones ⚡
  ✅ Plan de adopción es presentable a un superior (evaluación "Competente" o superior)
```

### 4.5 Alineación DigComp 2.2 Detallada

| Área DigComp | Competencia específica | Nivel alcanzado | Evidencia del curso |
|-------------|----------------------|-----------------|-------------------|
| **5. Resolución de problemas** | 5.1 Resolución de problemas técnicos | Nivel 5 (Avanzado) | Agentes configurados y funcionales |
| | 5.2 Identificación de necesidades tecnológicas | Nivel 5 (Avanzado) | Banco de prompts como solución operativa |
| | 5.3 Uso creativo de tecnologías | Nivel 5 (Avanzado) | Flujo multi-agente funcional |
| | 5.4 Identificación de brechas de competencia | Nivel 5 (Avanzado) | Plan de adopción con capacitación |

---

## 5. Badge Final: Líder Digital Anáhuac 🏆

### 5.1 Metadatos del Badge

| Campo | Valor |
|-------|-------|
| **Nombre** | Líder Digital Anáhuac — IA para Gestión Universitaria |
| **Nombre corto** | Líder Digital Anáhuac |
| **Emisor** | Universidad Anáhuac Mayab — Centro de Educación Continua |
| **Nivel** | Avanzado-Integral (DigComp 2.2 Nivel 5-6 en áreas 1-5) |
| **Prerequisito** | Los 3 badges anteriores (🟢🔵🟣) |
| **Módulos cubiertos** | Los 8 módulos completos del curso |
| **Horas de aprendizaje** | 22-28 horas totales |
| **Vigencia** | 3 años |
| **Identificador** | `urn:uuid:anahuac-mayab:ia-lideres:lider-digital-v1` |

### 5.2 Naturaleza del Badge Integrador

> Este badge NO es simplemente la suma de los 3 anteriores. Representa la **integración** de todas las competencias en un ecosistema funcional que el directivo usa activamente en su gestión.

**Lo que certifica adicionalmente:**
- Capacidad de **integrar** las competencias de los 3 bloques en un sistema cohesivo
- Los 2 entregables finales (⭐ flujo de reporte + ⭐ ecosistema) demuestran **aplicación real sostenida**
- El directivo no solo "aprendió" IA — **la integró en su práctica profesional**

### 5.3 Competencias Certificadas (Integradoras)

| # | Competencia integradora | Descriptor | Evidencia |
|---|------------------------|-----------|-----------|
| I1 | **Alfabetización integral en IA para gestión** | Comprende, usa, evalúa críticamente y orquesta IA generativa como herramienta directiva | Completitud del portafolio (8 módulos) |
| I2 | **Automatización responsable de procesos** | Ha diseñado y ejecutado al menos un flujo automatizado real con controles de calidad y ética | Flujo de reporte ⭐ funcionando |
| I3 | **Ecosistema de productividad con IA** | Tiene un sistema operativo de IA personal: agentes, prompts y flujos integrados y documentados | Ecosistema ⭐ completo y funcional |
| I4 | **Liderazgo de transformación digital** | Ha diseñado un plan de adopción de IA para su área con política, métricas y gobernanza | Plan de adopción presentable |
| I5 | **Pensamiento crítico ante IA** | Demuestra capacidad sostenida de verificar, cuestionar y mejorar outputs de IA | Portafolio muestra progresión en criticidad |

### 5.4 Criterios de Emisión

```
EMITIR Badge "Líder Digital Anáhuac" cuando:
  ✅ Badge "Fundamentos IA" 🟢 emitido
  ✅ Badge "IA Aplicada" 🔵 emitido  
  ✅ Badge "Líder IA" 🟣 emitido
  ✅ Flujo de reporte ⭐ evaluado como "Competente" o superior
  ✅ Ecosistema de IA ⭐ evaluado como "Competente" o superior
  ✅ Puntaje global del curso ≥ 70%
  ✅ Reflexión de cierre demuestra trayectoria de consciencia → agencia
```

### 5.5 Alineación DigComp 2.2 Completa

| Área DigComp 2.2 | Nivel alcanzado | Competencias específicas |
|------------------|-----------------|-------------------------|
| **1. Información y alfabetización informacional** | Nivel 4 (Intermedio+) | 1.1, 1.2, 1.3 |
| **2. Comunicación y colaboración** | Nivel 4 (Intermedio+) | 2.1, 2.4 |
| **3. Creación de contenido digital** | Nivel 5 (Avanzado) | 3.1, 3.3, 3.4 |
| **4. Seguridad** | Nivel 4 (Intermedio+) | 4.2, 4.4 |
| **5. Resolución de problemas** | Nivel 5 (Avanzado) | 5.1, 5.2, 5.3, 5.4 |

---

## 6. Especificación Técnica Open Badges 3.0

### 6.1 Estructura del Badge (JSON-LD)

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "id": "urn:uuid:anahuac-mayab:ia-lideres:fundamentos-v1:2026-001",
  "type": ["VerifiableCredential", "OpenBadgeCredential"],
  "issuer": {
    "id": "https://anahuacmayab.mx/credentials/issuer",
    "type": "Profile",
    "name": "Universidad Anáhuac Mayab — Centro de Educación Continua",
    "url": "https://www.anahuacmayab.mx",
    "image": "https://anahuacmayab.mx/assets/logo-ec.png"
  },
  "validFrom": "2026-10-01T00:00:00Z",
  "validUntil": "2029-10-01T00:00:00Z",
  "credentialSubject": {
    "type": "AchievementSubject",
    "achievement": {
      "id": "urn:uuid:anahuac-mayab:ia-lideres:fundamentos-v1",
      "type": "Achievement",
      "name": "Fundamentos de IA para Gestión Universitaria",
      "description": "El titular demuestra competencia en comprensión de IA generativa, prompting estructurado (RCTE), producción de comunicación institucional con IA, y conciencia de limitaciones y riesgos.",
      "criteria": {
        "narrative": "Completar módulos 1-3 del curso 'IA Práctica para Líderes' con ≥70% y entregables evaluados como 'Competente' o superior."
      },
      "alignment": [
        {
          "type": "Alignment",
          "targetName": "DigComp 2.2 — Competencia 2.1",
          "targetUrl": "https://publications.jrc.ec.europa.eu/repository/handle/JRC128415",
          "targetFramework": "DigComp 2.2"
        },
        {
          "type": "Alignment",
          "targetName": "SFIA 9 — AUTY Level 3",
          "targetUrl": "https://sfia-online.org/en/sfia-9",
          "targetFramework": "SFIA 9"
        }
      ],
      "tag": ["IA-generativa", "prompting", "comunicacion-institucional", "gestion-universitaria"]
    }
  },
  "evidence": [
    {
      "id": "urn:uuid:evidence:portfolio-bloque1",
      "type": "Evidence",
      "name": "Portafolio Bloque 1 — Fundamentos IA",
      "description": "Mini-diagnóstico, 3 prompts maestros, 5 templates de comunicación, caso difícil resuelto"
    }
  ]
}
```

### 6.2 Verificación

| Método | Detalle |
|--------|---------|
| **URL de verificación** | `https://anahuacmayab.mx/credentials/verify/{badge-id}` |
| **Formato** | Open Badges 3.0 (W3C Verifiable Credentials Data Model) |
| **Firma** | Ed25519 digital signature del emisor |
| **Revocación** | Lista de revocación en `https://anahuacmayab.mx/credentials/revocation` |
| **Exportación** | JSON-LD descargable + imagen PNG con metadata embebida |

### 6.3 Plataformas de Almacenamiento Compatible

| Plataforma | Compatibilidad | Notas |
|-----------|----------------|-------|
| **Badgr** | ✅ Completa | Mochila digital gratuita; verificación automática |
| **LinkedIn Credentials** | ✅ Completa | Importación directa desde Open Badges 3.0 |
| **Credly** | ✅ Completa | Verificación institucional |
| **Mozilla Backpack** (legacy) | ⚠️ Parcial | Soporta OB 2.0; requiere conversión |
| **Europass** | ✅ Completa | Compatible con credenciales digitales europeas |

---

## 7. Proceso de Emisión

### 7.1 Flujo de Emisión

```
1. EVALUACIÓN
   └── Facilitador/evaluador aplica rúbricas al portafolio del bloque

2. VERIFICACIÓN DE CRITERIOS
   ├── ¿Puntaje ≥ 70%?
   ├── ¿Dimensiones ⚡ (críticas) ≥ "Competente"?
   ├── ¿Prerequisitos cumplidos? (para badges 2, 3, final)
   └── ¿Entregables finales ⭐ ≥ "Competente"? (para badge final)

3. EMISIÓN
   ├── Genera credencial JSON-LD con datos del participante
   ├── Firma digitalmente con clave del emisor
   ├── Publica en URL de verificación pública
   └── Genera imagen PNG con metadata embebida

4. ENTREGA
   ├── Email al participante con badge en formato .json y .png
   ├── Instrucciones para agregar a LinkedIn y Badgr
   └── Certificado PDF complementario (formato institucional Anáhuac)

5. REGISTRO
   ├── Base de datos de credenciales emitidas
   ├── Registro en blockchain (opcional, si la institución lo implementa)
   └── URL pública de verificación activa
```

### 7.2 Certificado PDF Complementario

Además del badge digital, se emite un certificado en PDF con:
- Logo y membrete de la Universidad Anáhuac Mayab
- Nombre completo del participante
- Nombre del badge y descripción de competencias
- Fecha de emisión y vigencia
- Código QR vinculado a la URL de verificación
- Firma digital del Director de Educación Continua
- Número de horas acreditadas

---

## 8. Renovación y Vigencia

### 8.1 Política de Vigencia

| Badge | Vigencia | Renovación |
|-------|----------|-----------|
| 🟢 Fundamentos IA | 3 años | Evidencia de uso continuo (mínimo 5 prompts nuevos documentados) |
| 🔵 IA Aplicada | 3 años | Evidencia de flujo actualizado + 1 nuevo flujo diseñado |
| 🟣 Líder IA | 3 años | Evidencia de ecosistema actualizado + capacitación a 1+ persona |
| 🏆 Líder Digital Anáhuac | 3 años | Renovación de los 3 badges componentes |

### 8.2 Justificación de la Vigencia de 3 Años

En el campo de IA generativa, la tecnología evoluciona rápidamente. La vigencia de 3 años garantiza que:
- Las competencias certificadas siguen siendo relevantes
- El directivo se mantiene actualizado
- La credencial representa competencia **actual**, no histórica

### 8.3 Proceso de Renovación

```
Para renovar cualquier badge:
1. El titular presenta evidencia de uso continuo (ver tabla arriba)
2. Un evaluador verifica la evidencia
3. Se emite nueva credencial con fecha actualizada
4. La credencial anterior se marca como "renovada" (no revocada)
5. No se requiere repetir el curso completo
```

---

## 9. Mapa Resumen: Badges × Módulos × Competencias × DigComp

| | Mód 1 | Mód 2 | Mód 3 | Mód 4 | Mód 5 | Mód 6 | Mód 7 | Mód 8 |
|---|---|---|---|---|---|---|---|---|
| 🟢 **Fundamentos** | ✅ | ✅ | ✅ | | | | | |
| 🔵 **IA Aplicada** | | | | ✅ | ✅ | ✅ | | |
| 🟣 **Líder IA** | | | | | | | ✅ | ✅ |
| 🏆 **Líder Digital** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| | | | | | | | | |
| **DigComp 1.x** | 1.1 | | 1.2 | 1.3 | | | | |
| **DigComp 2.x** | | 2.1 | | | | 2.4 | | |
| **DigComp 3.x** | | | 3.1 | | | 3.3, 3.4 | | |
| **DigComp 4.x** | | | | | 4.2, 4.4 | | | |
| **DigComp 5.x** | | | | | | | 5.1, 5.3 | 5.2, 5.4 |
| | | | | | | | | |
| **SFIA Level** | 3 | 3 | 3 | 4 | 4 | 4 | 5 | 5 |
| **UNESCO ICT-CFT** | Conoc. | Aplic. | Aplic. | Análisis | Gob. | Integ. | Creación | Liderazgo |

---

## 10. Consideraciones de Implementación

### 10.1 Recursos Necesarios

| Recurso | Descripción | Prioridad |
|---------|------------|-----------|
| Plataforma de emisión de badges | Badgr, Credly, o solución institucional | Alta |
| Clave de firma digital del emisor | Ed25519 para firmar credenciales | Alta |
| URL pública de verificación | Endpoint institucional para validar badges | Alta |
| Diseño gráfico de badges | 4 imágenes PNG con estilo institucional Anáhuac | Media |
| Integración LMS (opcional) | Emisión automática al completar criterios en plataforma | Baja |

### 10.2 Comunicación al Participante

Al inicio del curso, el participante recibe:
- Mapa visual de los 4 badges (como el diagrama de la sección 1.1)
- Criterios de emisión de cada badge (transparencia total)
- Rúbricas de evaluación (ANTES de empezar los módulos)
- Instrucciones de qué es un Open Badge y cómo compartirlo
- Link a tutorial de LinkedIn Credentials

### 10.3 Valor Curricular

| Contexto | Valor |
|---------|-------|
| **Expediente institucional** | Constancia de competencia digital certificada |
| **LinkedIn** | Credencial verificable en perfil profesional |
| **Evaluación de desempeño** | Evidencia de desarrollo profesional continuo |
| **Promoción interna** | Diferenciador documentado en competencias IA |
| **Portafolio de evidencias para acreditación** | Evidencia de capacitación docente/directiva en tecnología |

---

*Documento generado como parte de la Fase 3 — Sistema de Evaluación del curso "IA Práctica para Líderes", Universidad Anáhuac Mayab.*  
*Estándar: Open Badges 3.0 (W3C Verifiable Credentials). Alineación: DigComp 2.2, SFIA 9, UNESCO ICT-CFT v3.*  
*Arquitectura: 3 badges stackables + 1 badge integrador = sistema de micro-credencialización completo.*
