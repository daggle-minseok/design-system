import { createHighlighter, type Highlighter } from "shiki"

let highlighter: Promise<Highlighter> | undefined

export async function highlight(code: string, lang: "tsx" | "bash" | "json" | "css" = "tsx") {
  highlighter ??= createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["tsx", "bash", "json", "css"],
  })
  return (await highlighter).codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
  })
}

// 예시는 레지스트리 경로를 import 하지만 사용처에는 components/ui 로 설치된다
export function toInstalledPaths(code: string) {
  return code.replaceAll("@/registry/daggle/ui/", "@/components/ui/").replaceAll("@/registry/daggle/lib/", "@/lib/")
}
