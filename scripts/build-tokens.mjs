// tokens/tokens.mjs → registry.json (colors / typography / theme) + app/tokens.css
import { readFileSync, writeFileSync } from "node:fs"

import { fonts, palette, radius, semantic, textStyles } from "../tokens/tokens.mjs"

const FONT_IMPORT = "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"

const paletteVars = Object.fromEntries(
  Object.entries(palette).flatMap(([name, scale]) =>
    Object.entries(scale).map(([step, value]) => [`${name}-${step}`, value])
  )
)

const colorThemeMap = Object.fromEntries(
  [...Object.keys(paletteVars), ...Object.keys(semantic.light)].map((name) => [
    `color-${name}`,
    `var(--${name})`,
  ])
)

const typographyTheme = {
  "font-sans": fonts.sans,
  ...Object.fromEntries(
    Object.entries(textStyles).flatMap(([name, s]) => [
      [`text-${name}`, s.size],
      [`text-${name}--line-height`, s.lineHeight],
      [`text-${name}--font-weight`, s.weight],
      [`text-${name}--letter-spacing`, s.letterSpacing],
    ])
  ),
}

const items = {
  colors: {
    name: "colors",
    type: "registry:theme",
    title: "Colors",
    description: "다글 컬러 토큰 (brand/gray 팔레트 + 의미 토큰, 라이트/다크)",
    files: [],
    cssVars: {
      theme: colorThemeMap,
      light: { ...paletteVars, ...semantic.light },
      dark: semantic.dark,
    },
  },
  typography: {
    name: "typography",
    type: "registry:theme",
    title: "Typography",
    description: "다글 타이포 토큰 (Pretendard + text-display-1 ~ text-caption)",
    dependencies: ["pretendard"],
    files: [],
    css: { [`@import "${FONT_IMPORT}"`]: {} },
    cssVars: { theme: typographyTheme },
  },
  theme: {
    name: "theme",
    type: "registry:theme",
    title: "Daggle Theme",
    description: "다글 디자인 토큰 묶음 (colors + typography + radius)",
    registryDependencies: ["@daggle/colors", "@daggle/typography"],
    files: [],
    cssVars: { light: { radius } },
  },
}

const registryPath = new URL("../registry.json", import.meta.url)
const registry = JSON.parse(readFileSync(registryPath, "utf-8"))
const generated = Object.keys(items)
const rest = registry.items.filter((item) => !generated.includes(item.name))
const utilsIndex = rest.findIndex((item) => item.name === "utils")
rest.splice(utilsIndex + 1, 0, ...Object.values(items))
registry.items = rest
writeFileSync(registryPath, JSON.stringify(registry, null, 2) + "\n")

const block = (selector, vars) =>
  `${selector} {\n${Object.entries(vars)
    .map(([k, v]) => `  --${k}: ${v};`)
    .join("\n")}\n}\n`

writeFileSync(
  new URL("../app/tokens.css", import.meta.url),
  [
    "/* scripts/build-tokens.mjs 가 생성. 직접 수정하지 말고 tokens/tokens.mjs 를 고친다. */\n",
    `@import "${FONT_IMPORT}";\n`,
    block("@theme inline", { ...colorThemeMap, ...typographyTheme }),
    block(":root", { radius, ...paletteVars, ...semantic.light }),
    block(".dark", semantic.dark),
  ].join("\n")
)

console.log(`✔ tokens → registry.json (${generated.join(", ")}) + app/tokens.css`)
