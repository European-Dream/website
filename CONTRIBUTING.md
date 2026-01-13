# Contributing to European Dream Website

Thank you for your interest in contributing to the European Dream website.

## Content Guidelines

The textual content is first written in English using EU style:
- UK spelling (e.g., "organisation", "colour", "behaviour")
- EU institutional terminology
- Avoid idioms and slang

Translations into other languages are done after the English version is finalised.

## For Non-Developers

Simply edit the content files in the [`content/`](./content) directory via GitHub.

This will trigger a pull request, which will be reviewed, discussed if necessary, and merged if approved.

## For Developers

### Prerequisites

- [mise](https://mise.jdx.dev/) (tool version manager)

mise will automatically install the required versions of:
- Hugo (extended)
- Bun

### Setup

```sh
git clone https://github.com/European-Dream/website.git
cd website
mise install
bun install
```

### Development

```sh
bun run dev          # Start development server with live reload
bun run build        # Production build
```

### Testing

```sh
bun run test         # Run unit tests
bun run test:watch   # Run unit tests in watch mode
bun run test:e2e     # Run E2E tests (requires build first)
bun run test:all     # Run all tests (unit + build + E2E)
```

### Code Style

- Strong typing (TypeScript)
- Small, focused functions
- Clear separation of concerns
- No inline comments; use docstrings for modules and functions
- Descriptive variable and function names using full words (no abbreviations)
- All functions must be unit tested

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (Angular pattern):

```
<type>(<scope>): <subject>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

Examples:
```
feat(footer): add social media icons
fix(nav): resolve mobile menu accessibility issue
docs(readme): update setup instructions
```

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Make your changes
4. Ensure all tests pass (`bun run test:all`)
5. Commit using conventional commit messages
6. Push to your fork
7. Open a pull request

## Licensing

By contributing, you agree that your contributions will be licensed under:
- **EUPL-1.2** for code
- **CC BY-SA 4.0** for content

See the [README](./README.md#licensing) for full licensing details.
