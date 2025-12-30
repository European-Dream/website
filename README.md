# European Dream Website

---

## Table of Contents

- [Contributing](#contributing)
  - [For non-developers](#for-non-developers)
  - [For developers](#for-developers)
- [Licensing](#licensing)
  - [Website Code](#website-code)
  - [Website Content](#website-content)

---

## Contributing

> [!IMPORTANT]  
> The textual content is first written in English using EU style: UK spelling + EU institutional terminology. Please avoid idioms and slang. We then translate it into other languages.

### For non-developers

Simply edit the content files in the [`content/`](./content) directory via GitHub.

This will trigger a pull request, which will be reviewed, discussed if necessary, and merged if approved.

### For developers

The website is built using [Hugo](https://gohugo.io/). 

```sh
git clone https://github.com/European-Dream/website.git
cd website
git submodule update --init --recursive
hugo server # to start the development server
```

## Licensing

This repository contains **both software (website code)** and **editorial content**, which are licensed **separately**.

### Website Code

All source code in this repository — including but not limited to:

* HTML templates
* CSS stylesheets
* JavaScript / TypeScript
* Build scripts and tooling

is licensed under the **European Union Public License v1.2 (EUPL-1.2)**.

See the [`LICENSE`](./LICENSE) file for the full license text.

SPDX identifier:

```text
EUPL-1.2
```

### Website Content

All non-code content — including but not limited to:

* Textual content (articles, pages, documentation)
* Publications and reports
* Images, diagrams, and illustrations (unless otherwise stated)

is licensed under the **Creative Commons Attribution–ShareAlike 4.0 International License (CC BY-SA 4.0)**.

SPDX identifier:

```text
CC-BY-SA-4.0
```

Attribution must be given to **European Dream**.
