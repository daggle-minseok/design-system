"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <button
      type="button"
      aria-label="복사"
      onClick={() => navigator.clipboard.writeText(value).then(() => setCopied(true))}
      className={cn(
        "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors [&_svg]:size-3.5",
        className
      )}
    >
      {copied ? <Check /> : <Copy />}
    </button>
  )
}
