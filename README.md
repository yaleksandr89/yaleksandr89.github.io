# yaleksandr89.github.io

Публичный сайт: https://yaleksandr89.github.io/

## Выберите язык

| Русский | English | Español | 中文 | Français | Deutsch |
| --- | --- | --- | --- | --- | --- |
| **Выбран** | [English](docs/langs/README_en.md) | [Español](docs/langs/README_es.md) | [中文](docs/langs/README_zh.md) | [Français](docs/langs/README_fr.md) | [Deutsch](docs/langs/README_de.md) |

## О проекте

Статическое портфолио PHP Backend / Laravel Developer, опубликованное на GitHub Pages.

Сайт реализован без ручного написания кода, но это не был бесконтрольный автогенерируемый результат: работа велась через постановку задач, review результатов и ручное согласование решений.

## Подход и расширение компетенций

Контекст проекта, ограничения и архитектурные решения фиксировались и согласовывались в ChatGPT Project. AI использовался как инструмент управляемой разработки: решения не принимались автоматически, а проверялись через review и ручное согласование.

### Контролируемый workflow

1. Read-only audit текущего состояния и короткий план.
2. Согласование решения, границ задачи и списка изменяемых файлов.
3. Один небольшой implementation step через Codex.
4. Проверка `git diff`, review результата и только затем согласованная техническая проверка.

### Работа с Codex

- В Ubuntu использовался Codex CLI: `codex-ro` для read-only audit, анализа и review; `codex-rw` — только для согласованных небольших изменений.
- В Windows применялся Codex app / GUI с тем же разделением: анализ и согласование отдельно, implementation step — после подтверждённого плана.
- Проверки, требующие Node или Docker, выполнялись пользователем в WSL отдельно от Codex; Open Graph-изображения были подготовлены в ChatGPT.

Этот процесс позволил расширить компетенции работы с ChatGPT Project и AI-assisted workflow, а Astro стал новой технологией в рамках проекта.

## Стек

- `Astro`.
- `HTML`, `CSS`.
- `TypeScript`.
- `GitHub Pages`.
- `GitHub Actions`.

## Границы проекта

- Статический сайт.
- Без backend, CMS и database.
- Без React, Vue, Tailwind и UI libraries.
