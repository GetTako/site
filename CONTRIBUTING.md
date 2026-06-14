# Contributing to Takoterm Site

First off, thank you for considering contributing to Takoterm! We value your time and effort.

This document provides guidelines and instructions for contributing to this repository.

## 📁 Project Architecture

This repository (`gettako/site`) handles the web framework and UI (Nuxt & Docus). However, the actual documentation markdown files live in a separate repository (`gettako/docs`). We use a side-by-side repository architecture rather than git submodules.

### How to Edit Documentation

1. Ensure you have the `docs` and `tako` repositories synced by running the sync script:
   ```bash
   ./bin/tako sync
   ```
2. Make your documentation changes inside the `./docs` directory.
3. Commit and push those changes from **inside** the `./docs` directory (this updates the `gettako/docs` repo).
4. The Nuxt development server in the root of `site` will automatically reflect your changes in real-time.

## 📝 Conventional Commits Guide

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages. This leads to more readable messages that are easy to follow when looking through the project history, and helps automate release notes.

### Format

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Allowed Types

- **`feat`**: A new feature
- **`fix`**: A bug fix
- **`docs`**: Documentation only changes
- **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **`refactor`**: A code change that neither fixes a bug nor adds a feature
- **`perf`**: A code change that improves performance
- **`test`**: Adding missing tests or correcting existing tests
- **`chore`**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Examples

- `feat: add dark mode support`
- `fix(ui): resolve alignment issue on mobile sidebar`
- `docs: update installation instructions in README`
- `chore: update content submodule reference`

## 🚀 Pull Request Process

1. Fork the repository and create your branch from `main`.
2. Make sure your local `content` submodule is up to date (`git submodule update --remote content`).
3. If you've added code that should be tested, add tests.
4. Ensure your code passes any linting or build checks.
5. Write a clear, descriptive pull request message.
6. Submit your PR and await review from the maintainers!

Thank you for contributing!
