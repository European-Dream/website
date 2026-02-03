/**
 * Generates inline-ready assets for production builds.
 *
 * This script:
 * 1. Reads font files and converts them to base64 data URLs
 * 2. Generates an SCSS file with embedded fonts in .build/
 * 3. The SCSS compiler uses .build/ as a priority load path in production
 */

import { mkdir, readdir } from "node:fs/promises";

const FONTS_DIR = "static/fonts";
const OUTPUT_DIR = ".build/scss/generated";
const OUTPUT_FILE = `${OUTPUT_DIR}/_jost.scss`;

interface FontDefinition {
  filename: string;
  unicodeRange: string;
}

const FONT_DEFINITIONS: FontDefinition[] = [
  {
    filename: "jost-cyrillic-wght-normal.woff2",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
  },
  {
    filename: "jost-latin-ext-wght-normal.woff2",
    unicodeRange:
      "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
  },
  {
    filename: "jost-latin-wght-normal.woff2",
    unicodeRange:
      "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
  },
];

async function fontToBase64DataUrl(filepath: string): Promise<string> {
  const file = Bun.file(filepath);
  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:font/woff2;base64,${base64}`;
}

function generateFontFace(dataUrl: string, unicodeRange: string): string {
  return `@font-face {
  font-family: "Jost";
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url("${dataUrl}") format("woff2-variations");
  unicode-range: ${unicodeRange};
}`;
}

async function main(): Promise<void> {
  const files = await readdir(FONTS_DIR);
  const fontFaces: string[] = [];

  for (const definition of FONT_DEFINITIONS) {
    if (!files.includes(definition.filename)) {
      console.error(`Font file not found: ${definition.filename}`);
      process.exit(1);
    }

    const filepath = `${FONTS_DIR}/${definition.filename}`;
    const dataUrl = await fontToBase64DataUrl(filepath);
    const fontFace = generateFontFace(dataUrl, definition.unicodeRange);
    fontFaces.push(fontFace);
  }

  const output = fontFaces.join("\n\n") + "\n";
  await mkdir(OUTPUT_DIR, { recursive: true });
  await Bun.write(OUTPUT_FILE, output);

  console.log(`Generated ${OUTPUT_FILE}`);
}

main();
