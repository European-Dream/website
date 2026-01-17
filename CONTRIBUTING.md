# Contributing to European Dream Website

Thank you for your interest in contributing to the European Dream website.

## Content Guidelines

We write content in English following EU institutional style, which helps with clarity and future translations:

- UK spelling (e.g., "organisation", "colour", "behaviour")
- EU institutional terminology where appropriate
- Plain language over idioms and slang (easier to translate and understand)
- Oxford comma for consistency

Translations into other languages are done after the English version is finalised.

## For Non-Developers

Simply edit the content files in the [`content/`](./content) directory via GitHub.

This will trigger a pull request, which will be reviewed, discussed if necessary, and merged if approved.

### Content Structure

Each page is a folder with an `index.md` file:
```
content/
├── _index.md           # Homepage
├── why/index.md        # Why page
├── goals/index.md      # Our Goals page
├── roadmap/index.md    # Roadmap page
├── contact/index.md    # Contact page
├── identity/index.md   # Identity page
└── website-elements/   # Style guide
```

### Available Shortcodes

#### Unsplash Images
```markdown
{{</* unsplash PHOTO_ID */>}}
```

#### YouTube Videos
```markdown
{{</* youtube VIDEO_ID */>}}
{{</* youtube VIDEO_ID title="Video description" */>}}
```

#### Vimeo Videos
```markdown
{{</* vimeo VIDEO_ID */>}}
{{</* vimeo VIDEO_ID title="Video description" */>}}
```

## For Developers

### Prerequisites

- [mise](https://mise.jdx.dev/) (tool version manager)

mise will automatically install the required versions of:
- Hugo 0.153+ (extended)
- Bun 1.3+

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
bun run test:unit    # Run unit tests
bun run test:watch   # Run unit tests in watch mode
bun run test:e2e     # Run E2E tests
bun run test:e2e:ui  # Run E2E tests with Playwright UI
```

### Directory Structure

```
website/
├── config/_default/      # Hugo configuration
├── content/              # Markdown content
├── layouts/              # Hugo templates
│   ├── _partials/        # Reusable partials
│   ├── _shortcodes/      # Custom shortcodes
│   └── _markup/          # Markup renderers
├── assets/
│   ├── scss/             # SCSS source (7-1 pattern)
│   └── js/               # TypeScript source
├── static/               # Static files (CSS, JS, images)
├── e2e/                  # Playwright E2E tests
└── i18n/                 # Translation strings
```

### Code Style

We aim for readable, maintainable code:

- Strong typing (TypeScript) helps catch errors early
- Small, focused functions are easier to test and understand
- Clear separation of concerns keeps the codebase organised
- Docstrings for modules and functions (rather than inline comments) document intent
- Descriptive names using full words make code self-explanatory
- Unit tests give confidence when making changes
- SCSS follows BEM naming for consistent styling

### Accessibility

We care deeply about making the website usable by everyone. These practices help us achieve that:

- Semantic HTML (using appropriate elements like `<nav>`, `<main>`, `<article>`) helps assistive technologies understand the page structure
- A single `<h1>` per page and logical heading order helps screen reader users navigate
- Alt text on images describes content to those who cannot see them (use empty `alt=""` for purely decorative images)
- Good colour contrast (4.5:1 ratio) ensures readability for people with low vision
- Keyboard navigation support helps users who cannot use a mouse
- ARIA labels on interactive elements provide context for assistive technologies

The E2E tests check for WCAG 2.1 AA compliance, so you will know if something needs attention.

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) (Angular pattern) to keep the history readable:

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

Here is a typical workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Make your changes
4. Run the tests (`bun run test:unit && bun run test:e2e`) to check everything works
5. Commit using conventional commit messages
6. Push to your fork
7. Open a pull request

Do not worry if something is not perfect — we are happy to help during the review.

## Licensing

Contributions are shared under open licences so everyone can benefit:

- **EUPL-1.2** for code
- **CC BY-SA 4.0** for content

This means your work helps build a commons that others can learn from and build upon.

Note: The European Dream name and logo are protected and not covered by these licences.

See the [README](./README.md#licensing) for full details.
