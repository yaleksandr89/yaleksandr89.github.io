# yaleksandr89.github.io

Public website: https://yaleksandr89.github.io/

## Seleccionar idioma

| Русский | English | Español | 中文 | Français | Deutsch |
| --- | --- | --- | --- | --- | --- |
| [Русский](../../README.md) | [English](README_en.md) | **Seleccionado** | [中文](README_zh.md) | [Français](README_fr.md) | [Deutsch](README_de.md) |

## Sobre el proyecto

Un portafolio estático para un PHP Backend / Laravel Developer, publicado en GitHub Pages.

El sitio se implementó sin escribir código manualmente, pero no fue un resultado autogenerado sin control: el trabajo se realizó mediante definición de tareas, review de resultados y aprobación manual de decisiones.

## Enfoque y desarrollo de competencias

El contexto del proyecto, las restricciones y las decisiones arquitectónicas se documentaron y aprobaron en un ChatGPT Project. La AI se utilizó como una herramienta de desarrollo controlado: las decisiones no se aceptaban automáticamente, sino que se verificaban mediante review y aprobación manual.

### Workflow controlado

1. Read-only audit del estado actual y un plan breve.
2. Aprobación de la solución, los límites de la tarea y la lista de archivos que se iban a modificar.
3. Un pequeño implementation step mediante Codex.
4. Revisión de `git diff`, review del resultado y solo después una verificación técnica aprobada.

### Trabajo con Codex

- En Ubuntu se utilizó Codex CLI: `codex-ro` para read-only audit, análisis y review; `codex-rw` solo para pequeños cambios aprobados.
- En Windows se utilizó Codex app / GUI con la misma separación: análisis y aprobación por separado, implementation step después de un plan confirmado.
- Las verificaciones que requerían Node o Docker fueron ejecutadas por el usuario por separado en WSL, fuera de Codex; las imágenes Open Graph se prepararon en ChatGPT.

Este proceso ayudó a ampliar las competencias de trabajo con ChatGPT Project y con un AI-assisted workflow, mientras que Astro se convirtió en una tecnología nueva dentro del proyecto.

## Stack tecnológico

- `Astro`.
- `HTML`, `CSS`.
- `TypeScript`.
- `GitHub Pages`.
- `GitHub Actions`.

## Límites del proyecto

- Sitio estático.
- Sin backend, CMS ni database.
- Sin React, Vue, Tailwind ni UI libraries.
