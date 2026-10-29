"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/docs/copy-button"

const managers = {
  pnpm: (args: string) => `pnpm dlx shadcn@latest ${args}`,
  npm: (args: string) => `npx shadcn@latest ${args}`,
  yarn: (args: string) => `yarn dlx shadcn@latest ${args}`,
  bun: (args: string) => `bunx --bun shadcn@latest ${args}`,
}

type Manager = keyof typeof managers

export function InstallCommand({ args }: { args: string }) {
  const [manager, setManager] = React.useState<Manager>("pnpm")
  const command = managers[manager](args)

  return (
    <div className="bg-code overflow-hidden rounded-lg border">
      <div className="flex items-center gap-1 border-b px-2">
        {(Object.keys(managers) as Manager[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setManager(m)}
            className={cn(
              "text-description-regular-2 -mb-px border-b-2 px-2 py-2.5 font-medium transition-colors",
              m === manager
                ? "border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground border-transparent"
            )}
          >
            {m}
          </button>
        ))}
        <CopyButton value={command} className="ml-auto" />
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px]">
        <code>{command}</code>
      </pre>
    </div>
  )
}
