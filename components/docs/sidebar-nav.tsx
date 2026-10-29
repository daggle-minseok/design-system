"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { docsNav } from "@/lib/docs"
import { cn } from "@/lib/utils"

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-6">
      {docsNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <h4 className="text-caption text-muted-foreground px-2 pb-1 font-medium">{group.title}</h4>
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "text-body-2 rounded-md px-2 py-1.5 transition-colors",
                pathname === item.href
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}
