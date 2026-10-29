import { highlight } from "@/lib/highlight"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/docs/copy-button"

export async function CodeBlock({
  code,
  lang = "tsx",
  className,
}: {
  code: string
  lang?: "tsx" | "bash" | "json" | "css"
  className?: string
}) {
  const html = await highlight(code, lang)

  return (
    <div className={cn("code-block group relative rounded-lg border bg-code", className)}>
      <CopyButton value={code} className="absolute top-2.5 right-2.5 z-10" />
      <div
        className="max-h-[480px] overflow-auto py-4 text-[13px] leading-6 [&_pre]:px-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
