# yaleksandr89.github.io

Public website: https://yaleksandr89.github.io/

## Choose a language

| Русский | English | Español | 中文 | Français | Deutsch |
| --- | --- | --- | --- | --- | --- |
| [Русский](../../README.md) | **Selected** | [Español](README_es.md) | [中文](README_zh.md) | [Français](README_fr.md) | [Deutsch](README_de.md) |

## About the project

A static portfolio for a PHP Backend / Laravel Developer, published on GitHub Pages.

The site was implemented without writing code manually, but it was not an uncontrolled auto-generated result: the work was carried out through task definition, review of results, and manual approval of decisions.

## Approach and competency development

The project context, constraints, and architectural decisions were documented and approved in a ChatGPT Project. AI was used as a controlled development tool: decisions were not accepted automatically, but were checked through review and manual approval.

### Controlled workflow

1. Read-only audit of the current state and a short plan.
2. Approval of the solution, task boundaries, and list of files to be changed.
3. One small implementation step through Codex.
4. Checking `git diff`, reviewing the result, and only then running an approved technical check.

### Working with Codex

- In Ubuntu, Codex CLI was used: `codex-ro` for read-only audit, analysis, and review; `codex-rw` only for approved small changes.
- In Windows, the Codex app / GUI was used with the same separation: analysis and approval separately, implementation step after a confirmed plan.
- Checks requiring Node or Docker were performed by the user separately in WSL, outside Codex; Open Graph images were prepared in ChatGPT.

This process helped expand competency in working with ChatGPT Project and an AI-assisted workflow, while Astro became a new technology within the project.

## Technology stack

- `Astro`.
- `HTML`, `CSS`.
- `TypeScript`.
- `GitHub Pages`.
- `GitHub Actions`.

## Project boundaries

- Static site.
- No backend, CMS, or database.
- No React, Vue, Tailwind, or UI libraries.

## Local development

Use Node.js 24 and npm for local development.

```bash
git clone https://github.com/yaleksandr89/yaleksandr89.github.io.git
cd yaleksandr89.github.io
npm ci
npm run dev
```

Start the development server and open the URL printed by Astro. The Russian version is available at `/` and the English version at `/en/`.

## Build and deployment

Stop the development server before running these commands:

```bash
npm run build
npm run preview
```

The build generates a static site in `dist/`. `npm run preview` serves the local build without publishing it. The production build includes Yandex Metrica; a local preview may make requests to the analytics service.

CI checks the build for pull requests and the `master` branch. A separate `Deploy to GitHub Pages` workflow publishes the site on pushes to `master` or when manually triggered by the owner.
