import { readFile } from "node:fs/promises"
import path from "node:path"

import { toInstalledPaths } from "@/lib/highlight"
import { CodeBlock } from "@/components/docs/code-block"
import { PreviewTabs } from "@/components/docs/preview-tabs"
import { examples } from "@/examples"

export async function ComponentPreview({ name }: { name: string }) {
  const Example = examples[name]
  if (!Example) throw new Error(`examples/${name}.tsx 가 없습니다.`)

  const source = await readFile(path.join(process.cwd(), "examples", `${name}.tsx`), "utf-8")

  return (
    <PreviewTabs
      preview={<Example />}
      code={<CodeBlock code={toInstalledPaths(source).trimEnd()} />}
    />
  )
}
