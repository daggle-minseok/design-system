"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

export function PaletteSwatch({ name, step, value }: { name: string; step: string; value: string }) {
  const [copied, setCopied] = React.useState(false)
  const className = `${name}-${step}`

  return (
    <button
      type="button"
      title={`${className} · ${value}`}
      onClick={() =>
        navigator.clipboard.writeText(className).then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 1200)
        })
      }
      className="group flex min-w-0 flex-col gap-1.5 text-left"
    >
      <span
        className="ring-foreground/10 flex aspect-square w-full items-center justify-center rounded-md ring-1 ring-inset transition-transform group-hover:scale-105 sm:aspect-[4/3]"
        style={{ background: `var(--${className})` }}
      >
        {copied && <Check className={cn("size-4", Number(step) >= 500 ? "text-white" : "text-black")} />}
      </span>
      <span className="text-description-regular-2 font-medium">{step}</span>
    </button>
  )
}
