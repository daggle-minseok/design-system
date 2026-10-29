import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { docsNav } from "@/lib/docs"
import { Button } from "@/registry/daggle/ui/button"

export function Pager({ href }: { href: string }) {
  const flat = docsNav.flatMap((group) => group.items)
  const index = flat.findIndex((item) => item.href === href)
  const prev = flat[index - 1]
  const next = flat[index + 1]

  return (
    <div className="mt-16 flex items-center justify-between border-t pt-6">
      {prev ? (
        <Button variant="outline" asChild>
          <Link href={prev.href}>
            <ChevronLeft /> {prev.title}
          </Link>
        </Button>
      ) : (
        <span />
      )}
      {next && (
        <Button variant="outline" asChild>
          <Link href={next.href}>
            {next.title} <ChevronRight />
          </Link>
        </Button>
      )}
    </div>
  )
}
