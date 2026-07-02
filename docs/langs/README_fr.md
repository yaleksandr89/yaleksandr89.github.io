# yaleksandr89.github.io

Public website: https://yaleksandr89.github.io/

## Choisir une langue

| Русский | English | Español | 中文 | Français | Deutsch |
| --- | --- | --- | --- | --- | --- |
| [Русский](../../README.md) | [English](README_en.md) | [Español](README_es.md) | [中文](README_zh.md) | **Sélectionné** | [Deutsch](README_de.md) |

## À propos du projet

Un portfolio statique pour un PHP Backend / Laravel Developer, publié sur GitHub Pages.

Le site a été réalisé sans écriture manuelle de code, mais il ne s'agissait pas d'un résultat autogénéré sans contrôle : le travail a été mené par définition des tâches, review des résultats et approbation manuelle des décisions.

## Approche et développement des compétences

Le contexte du projet, les contraintes et les décisions architecturales ont été documentés et approuvés dans un ChatGPT Project. L'AI a été utilisée comme un outil de développement contrôlé : les décisions n'étaient pas acceptées automatiquement, mais vérifiées par review et approbation manuelle.

### Workflow contrôlé

1. Read-only audit de l'état actuel et plan court.
2. Approbation de la solution, des limites de la tâche et de la liste des fichiers à modifier.
3. Un petit implementation step via Codex.
4. Vérification de `git diff`, review du résultat, puis seulement lancement d'une vérification technique approuvée.

### Travailler avec Codex

- Sous Ubuntu, Codex CLI a été utilisé : `codex-ro` pour le read-only audit, l'analyse et la review ; `codex-rw` uniquement pour de petits changements approuvés.
- Sous Windows, Codex app / GUI a été utilisé avec la même séparation : analyse et approbation séparées, implementation step après un plan confirmé.
- Les vérifications nécessitant Node ou Docker ont été exécutées séparément par l'utilisateur dans WSL, en dehors de Codex ; les images Open Graph ont été préparées dans ChatGPT.

Ce processus a permis de développer les compétences de travail avec ChatGPT Project et un AI-assisted workflow, tandis qu'Astro est devenu une nouvelle technologie dans le cadre du projet.

## Stack technique

- `Astro`.
- `HTML`, `CSS`.
- `TypeScript`.
- `GitHub Pages`.
- `GitHub Actions`.

## Limites du projet

- Site statique.
- Sans backend, CMS ni database.
- Sans React, Vue, Tailwind ni UI libraries.
