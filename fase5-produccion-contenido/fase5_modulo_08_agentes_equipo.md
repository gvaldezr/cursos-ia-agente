# Nivel 8. Flujos con agentes y trabajo en equipo local
## «Su equipo de IA personalizado, listo para trabajar con usted»

> **Fase:** IV — INTEGRAR  
> **Epígrafe:** *«Un líder no es quien hace todo. Es quien sabe a quién pedirle qué — incluidos los agentes que diseñó.»*  
> **Título narrativo:** *Su equipo invisible*  
> **Competencia:** Configura agentes especializados en Amazon Quick, crea flujos de varios pasos y establece prácticas para integrar IA en el trabajo de su equipo. Completa sus dos entregables finales: flujo de reportes automatizado y banco de instrucciones personalizado.  
> **Nivel Bloom:** Crear  
> **Producto integrador:** ⭐ Ecosistema de IA personal: 3 agentes configurados + 1 flujo de varios pasos funcional + banco de instrucciones completo (20+). ENTREGABLE FINAL 2.

---

## 1. Concepto clave

### ¿Qué es un agente de IA?

A lo largo del curso, usted ha conversado con la IA iniciando cada vez una conversación nueva. Cada vez tenía que explicar quién es usted, qué programa coordina, qué formato necesita y qué tono usar. Un *agente de IA* elimina esa repetición: es un asistente con instrucciones permanentes y archivos de referencia que siempre están listos. Solo le dice «analiza estos nuevos datos» y el agente ya sabe el resto.

### ¿Por qué varios agentes y no uno solo?

Piense en su equipo ideal: un analista que maneja datos, un comunicador que redacta y un especialista en su área normativa. Cada uno es experto en UNA función. Un agente que intente hacerlo todo produce resultados mediocres en todo. Tres agentes especializados producen resultados excelentes en su área.

### ¿Qué es un flujo de varios pasos?

Es una cadena donde el resultado de un agente alimenta al siguiente. Ejemplo: datos brutos → Agente Analista → resumen ejecutivo → Agente Comunicador → comunicado a docentes. En vez de hacer cada paso por separado, usted diseña la secuencia completa y la ejecuta de principio a fin.

**Importante:** Orquestar agentes es dirigir, no programar. Requiere precisión y criterio — exactamente la habilidad que ha desarrollado desde el Nivel 1.

---

## 2. Demostración paso a paso

**Contexto:** Crear un ecosistema de tres agentes y un flujo encadenado para su área.

### Paso 1 — Diseñar la arquitectura de agentes

| Agente | Función | Archivos de referencia | Tono |
|---|---|---|---|
| 🎓 Analista Académico | Indicadores, matrícula, retención, eficiencia terminal | Criterios de acreditación, datos históricos | Ejecutivo, basado en datos |
| 🎓 Comunicador Institucional | Correos a docentes, estudiantes, padres, rectoría | Plantillas de comunicación, reglamentos | Institucional Anáhuac |
| 🎓 Asistente de Acreditación | Revisión de evidencias, autoevaluación, preparación de visitas | Marco de referencia del organismo, expedientes | Técnico-institucional |

> **Nota para versión 🏢:** Los agentes equivalentes serían Analista de Gestión (KPIs, presupuesto), Comunicador Institucional (proveedores, equipo) y Project Manager (proyectos, seguimiento).

### Paso 2 — Configurar el agente principal

En Amazon Quick, cree su primer agente:

1. **Crear nuevo agente** → nombre: «Analista de [MI PROGRAMA]»
2. **Instrucciones del agente:**

```
Eres el analista de indicadores del programa de [LICENCIATURA]
de la Universidad Anáhuac Mayab (Mérida, Yucatán).

Responsabilidades:
- Analizar datos de matrícula, retención, eficiencia terminal,
  titulación y satisfacción estudiantil
- Comparar indicadores con el ciclo anterior y con metas
  institucionales
- Generar reportes ejecutivos con formato semáforo (🟢🟡🔴)
- Sugerir acciones correctivas para indicadores en riesgo

Formato por defecto: tabla de indicadores + párrafo ejecutivo
+ recomendaciones accionables
Audiencia: Dirección de Escuela y Rectoría
Tono: formal, basado en datos, orientado a acciones
Tratamiento: de «usted» siempre
```

3. **Agregar archivos:** criterios de acreditación, reportes del ciclo anterior, metas institucionales
4. **Probar:** «Con estos nuevos datos de matrícula, genera el reporte del semestre»

### Paso 3 — Diseñar y ejecutar un flujo de varios pasos

```
PASO 1 (Agente Analista):
«Analiza los datos de matrícula del semestre [archivo adjunto]
y genera un reporte semáforo con las 3 alertas principales.»

PASO 2 (Agente Comunicador):
«Con base en el análisis anterior, redacta:
(a) Un resumen ejecutivo de 1 párrafo para la Directora de Escuela
(b) Un comunicado para los coordinadores de los programas en
    amarillo/rojo con las acciones que deben tomar»

PASO 3 (Revisión humana):
Usted revisa ambos productos, verifica datos, ajusta tono
y distribuye.
```

**Resultado esperado:** Dos documentos listos para distribuir — un resumen ejecutivo y un comunicado — generados en cadena a partir de los mismos datos, con revisión humana antes de enviar.

### Paso 4 — Consolidar el banco de instrucciones

Revise todas las instrucciones que ha creado a lo largo del curso y organícelas en un banco permanente:

| # | Nivel de origen | Tarea | Marco usado | Instrucción completa |
|---|---|---|---|---|
| 1 | Nivel 2 | Análisis de retención | RISE | [instrucción guardada] |
| 2 | Nivel 3 | Correo a docentes | RTF | [instrucción guardada] |
| 3 | Nivel 3 | Respuesta a padre de familia | CO-STAR | [instrucción guardada] |
| ... | ... | ... | ... | ... |
| 20+ | Nivel 8 | Flujo de varios pasos | Agentes | [instrucción guardada] |

---

## 3. Ejercicio práctico

### 🎓 Versión académica

1. **Configure tres agentes** en Amazon Quick: Analista Académico, Comunicador Institucional y Asistente de Acreditación (o equivalente para su área).
2. **Ejecute un flujo de dos pasos:** pase datos reales al Agente Analista y use su resultado como entrada para el Agente Comunicador.
3. **Complete su banco de instrucciones** con al menos 20 entradas organizadas por tarea y marco utilizado.
4. **Elabore su plan de adopción personal** (ver formato abajo).

**Entregable final:** Ecosistema documentado (3 agentes + 1 flujo probado + banco de 20+ instrucciones + plan de adopción).

### 🏢 Versión administrativa

1. **Configure tres agentes:** Analista de Gestión, Comunicador Institucional y Project Manager.
2. **Ejecute un flujo de dos pasos:** datos de KPIs operativos → análisis → comunicado para Vicerrectoría.
3. **Complete su banco de instrucciones** con al menos 20 entradas orientadas a gestión administrativa.
4. **Elabore su plan de adopción personal.**

### Plan de adopción personal

```
MI COMPROMISO DE IMPLEMENTACIÓN DE IA
Nombre: [MI NOMBRE]
Cargo: [MI CARGO]
Programa/Área: [MI PROGRAMA O ÁREA]
Fecha: [HOY]

Esta semana voy a usar IA para: ___________
Mi meta al cierre del mes: ___________
3 cosas que la IA NO hará por mí: ___________
Mi criterio para evaluar si la IA me ayuda: ___________
Lo primero que compartiré con mi equipo: ___________
```

---

## 4. Tips y anti-patrones

| ✅ Haga esto | ❌ Evite esto |
|---|---|
| Cree un agente especializado por función clave (analista, comunicador, proyecto) | Crear un solo agente que «haga todo» — producirá resultados mediocres en todo |
| Pruebe cada agente con tres preguntas antes de integrarlo en un flujo | Asumir que el agente funciona bien sin probarlo |
| Revise siempre el resultado del flujo completo antes de distribuir | Confiar en que «si el Agente A hizo bien su parte, el Agente B también lo hará» |
| Documente sus instrucciones en un banco permanente y actualícelo cada ciclo | Depender de su memoria para recordar qué instrucciones funcionaron |
| Defina reglas claras de gobernanza: quién puede usar los agentes, qué datos se suben, quién revisa | Compartir agentes con su equipo sin establecer protocolos de uso |

---

## 5. Momento ético

Usted presenta su ecosistema de IA al rector. Un colega pregunta: «¿Y si esto elimina puestos de trabajo?» La IA no reemplaza a las personas — amplifica a las personas. Pero esa ampliación requiere criterio, ética y liderazgo. Reflexione: ¿cómo introduciría estas herramientas en su equipo de forma que potencie a cada integrante en vez de generar temor?

---

## 6. Instrucción de tarea

Este es el nivel final. Su tarea es ejecutar su ecosistema completo con datos reales y entregar los dos productos evaluables del curso.

```
ENTREGABLE FINAL — Ecosistema de IA Personal

Entregue:
1. Flujo de reporte documentado (del Nivel 5, ejecutado con
   datos reales y ajustes incorporados)
2. Banco de instrucciones completo (20+ instrucciones organizadas
   por tarea y marco, acumuladas a lo largo del curso)
3. Tres agentes configurados en Amazon Quick (capturas de
   configuración + prueba con 3 preguntas cada uno)
4. Un flujo de varios pasos probado y documentado
5. Plan de adopción personal (1 página)

Para cada agente, incluya: nombre, instrucciones, archivos
de referencia y resultados de las 3 preguntas de prueba.
```

---

## 7. Cierre del curso

> *«Hace ocho niveles, usted pensaba que la IA era para técnicos. Hoy tiene tres agentes trabajando para su área, un flujo que genera su reporte principal en 15 minutos, y 20 instrucciones listas para cualquier tarea. No aprendió tecnología. Aprendió a liderar de una forma nueva — una en la que su experiencia, su criterio y su visión tienen un amplificador que antes no existía.*
>
> *El lunes a las 9 AM, su equipo invisible estará listo. Y usted, al frente.»*

---

### Gobernanza básica de IA para su área

Antes de compartir sus agentes con su equipo, defina estas reglas:

| Elemento | Definición |
|---|---|
| ¿Quién puede usar los agentes? | Coordinador + asistentes con capacitación |
| ¿Qué datos se pueden subir? | Datos institucionales no confidenciales. Datos personales: SOLO en Amazon Quick (local) |
| ¿Quién revisa los resultados? | El coordinador SIEMPRE revisa antes de distribuir |
| ¿Qué NO se hace con IA? | Decisiones sobre alumnos, evaluaciones docentes definitivas, comunicaciones legales |

---

*Nivel 8 — Flujos con agentes y trabajo en equipo local*  
*Curso «IA Práctica para Líderes Anáhuac Mayab» — Universidad Anáhuac Mayab*  
*Septiembre 2026*
