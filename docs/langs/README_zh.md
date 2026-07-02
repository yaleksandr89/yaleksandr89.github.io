# yaleksandr89.github.io

Public website: https://yaleksandr89.github.io/

## 选择语言

| Русский | English | Español | 中文 | Français | Deutsch |
| --- | --- | --- | --- | --- | --- |
| [Русский](../../README.md) | [English](README_en.md) | [Español](README_es.md) | **已选择** | [Français](README_fr.md) | [Deutsch](README_de.md) |

## 关于项目

这是一个 PHP Backend / Laravel Developer 的静态作品集，发布在 GitHub Pages 上。

该网站是在没有手动编写代码的情况下实现的，但这并不是不受控制的自动生成结果：工作通过任务定义、结果 review 和人工确认决策来完成。

## 方法与能力发展

项目上下文、限制条件和架构决策都在 ChatGPT Project 中记录并确认。AI 被用作受控开发工具：决策不会被自动接受，而是通过 review 和人工确认进行检查。

### 受控 workflow

1. 对当前状态进行 read-only audit，并制定简短计划。
2. 确认解决方案、任务边界以及将要修改的文件列表。
3. 通过 Codex 完成一个小型 implementation step。
4. 检查 `git diff`，review 结果，然后才运行已确认的技术检查。

### 使用 Codex

- 在 Ubuntu 中使用 Codex CLI：`codex-ro` 用于 read-only audit、分析和 review；`codex-rw` 仅用于已确认的小型修改。
- 在 Windows 中使用 Codex app / GUI，并保持相同的分离方式：分析和确认分开进行，implementation step 在计划确认后执行。
- 需要 Node 或 Docker 的检查由用户在 WSL 中单独执行，不在 Codex 内运行；Open Graph images 在 ChatGPT 中准备。

这个过程帮助扩展了使用 ChatGPT Project 和 AI-assisted workflow 的能力，同时 Astro 也成为本项目中的一项新技术。

## 技术栈

- `Astro`.
- `HTML`, `CSS`.
- `TypeScript`.
- `GitHub Pages`.
- `GitHub Actions`.

## 项目边界

- 静态网站。
- 不使用后端、CMS 或数据库。
- 不使用 React、Vue、Tailwind 或 UI 库。
