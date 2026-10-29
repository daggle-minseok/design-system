// tokens/tokens.mjs → registry.json (colors / typography / theme) + app/tokens.css
import { readFileSync, writeFileSync } from "node:fs"

import { fonts, palette, radius, semantic, textStyles } from "../tokens/tokens.mjs"

const FONT_IMPORT = "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"

const paletteVars = Object.fromEntries(
  Object.entries(palette).flatMap(([name, scale]) =>
    Object.entries(scale).map(([step, value]) => [`${name}-${step}`, value])
  )
)

const semanticVars = Object.assign({}, ...Object.values(semantic))

const colorThemeMap = Object.fromEntries(
  [...Object.keys(paletteVars), ...Object.keys(semanticVars)].map((name) => [
    `color-${name}`,
    `var(--${name})`,
  ])
)

const radiusTheme = Object.fromEntries(
  Object.entries(radius).map(([name, value]) => [`radius-${name}`, value])
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
    description: "다글 컬러 토큰 (Figma Base Color 팔레트 + Semantic text·bg·border·icon·interactive·status)",
    files: [],
    cssVars: {
      theme: colorThemeMap,
      light: { ...paletteVars, ...semanticVars },
    },
  },
  typography: {
    name: "typography",
    type: "registry:theme",
    title: "Typography",
    description: "다글 타이포 토큰 (Pretendard + Figma 텍스트 스타일 48종: text-display-1 ~ text-caption-1)",
    dependencies: ["pretendard"],
    files: [],
    css: { [`@import "${FONT_IMPORT}"`]: {} },
    cssVars: { theme: typographyTheme },
  },
  radius: {
    name: "radius",
    type: "registry:theme",
    title: "Radius",
    description: "다글 모서리 토큰 (Figma Radius: rounded-0 · 4 · 8 · 12 · 16 · full)",
    files: [],
    cssVars: { theme: radiusTheme },
  },
  theme: {
    name: "theme",
    type: "registry:theme",
    title: "Daggle Theme",
    description: "다글 디자인 토큰 묶음 (colors + typography + radius)",
    registryDependencies: ["@daggle/colors", "@daggle/typography", "@daggle/radius"],
    files: [],
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
    // 문서 사이트가 `text-${name}` 처럼 동적으로 쓰므로 전 스타일 클래스를 생성 대상에 포함
    `@source inline("${Object.keys(textStyles).map((name) => `text-${name}`).join(" ")}");\n`,
    block("@theme inline", { ...colorThemeMap, ...typographyTheme, ...radiusTheme }),
    block(":root", { ...paletteVars, ...semanticVars }),
  ].join("\n")
)

// tailwind-merge 는 모르는 text-* 를 글자색으로 보고 text-text-strong(색)과 text-body-regular-4(크기) 중 하나를 지운다.
// 텍스트 스타일을 font-size 그룹으로 등록한 cn() 을 생성한다.
writeFileSync(
  new URL("../registry/daggle/lib/utils.ts", import.meta.url),
  `// scripts/build-tokens.mjs 가 생성. 직접 수정하지 말고 tokens/tokens.mjs 를 고친다.
import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// 텍스트 스타일(text-body-regular-4 등)을 글자 크기로 등록해 글자색(text-text-strong)과 함께 남도록 하고,
// radius(rounded-4 등)를 등록해 서로 덮어쓰도록 한다
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
${Object.keys(textStyles).map((name) => `            "${name}",`).join("\n")}
          ],
        },
      ],
      rounded: [{ rounded: [${Object.keys(radius).filter((name) => name !== "full").map((name) => `"${name}"`).join(", ")}] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`
)

console.log(`✔ tokens → registry.json (${generated.join(", ")}) + app/tokens.css + registry/daggle/lib/utils.ts`)
