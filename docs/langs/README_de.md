# yaleksandr89.github.io

Public website: https://yaleksandr89.github.io/

## Sprache auswählen

| Русский | English | Español | 中文 | Français | Deutsch |
| --- | --- | --- | --- | --- | --- |
| [Русский](../../README.md) | [English](README_en.md) | [Español](README_es.md) | [中文](README_zh.md) | [Français](README_fr.md) | **Ausgewählt** |

## Über das Projekt

Ein statisches Portfolio für einen PHP Backend / Laravel Developer, veröffentlicht auf GitHub Pages.

Die Website wurde ohne manuelles Schreiben von Code umgesetzt, war aber kein unkontrolliert automatisch generiertes Ergebnis: Die Arbeit erfolgte über Aufgabenstellung, Review der Ergebnisse und manuelle Freigabe von Entscheidungen.

## Ansatz und Kompetenzentwicklung

Der Projektkontext, die Einschränkungen und die Architekturentscheidungen wurden in einem ChatGPT Project dokumentiert und abgestimmt. AI wurde als Werkzeug für kontrollierte Entwicklung genutzt: Entscheidungen wurden nicht automatisch übernommen, sondern durch Review und manuelle Freigabe geprüft.

### Kontrollierter Workflow

1. Read-only audit des aktuellen Zustands und ein kurzer Plan.
2. Freigabe der Lösung, der Aufgabengrenzen und der Liste der zu ändernden Dateien.
3. Ein kleiner implementation step über Codex.
4. Prüfung von `git diff`, Review des Ergebnisses und erst danach eine freigegebene technische Prüfung.

### Arbeit mit Codex

- In Ubuntu wurde Codex CLI verwendet: `codex-ro` für read-only audit, Analyse und Review; `codex-rw` nur für freigegebene kleine Änderungen.
- In Windows wurde Codex app / GUI mit derselben Trennung verwendet: Analyse und Freigabe getrennt, implementation step nach einem bestätigten Plan.
- Prüfungen, die Node oder Docker erforderten, wurden vom Benutzer separat in WSL außerhalb von Codex ausgeführt; Open Graph images wurden in ChatGPT vorbereitet.

Dieser Prozess half dabei, die Kompetenzen im Umgang mit ChatGPT Project und einem AI-assisted workflow zu erweitern, während Astro eine neue Technologie innerhalb des Projekts wurde.

## Technologie-Stack

- `Astro`.
- `HTML`, `CSS`.
- `TypeScript`.
- `GitHub Pages`.
- `GitHub Actions`.

## Projektgrenzen

- Statische Website.
- Kein Backend, kein CMS und keine Datenbank.
- Kein React, Vue, Tailwind oder UI-Bibliotheken.
