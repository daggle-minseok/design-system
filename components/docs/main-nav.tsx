"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { docsNav } from "@/lib/docs"
import { cn } from "@/lib/utils"

// 사이드바 그룹과 같은 단위. 그룹 첫 페이지로 이동하고, 그룹 안의 페이지에 있으면 활성 표시
export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden items-center gap-5 md:flex">
      {docsNav.map((group) => (
        <Link
          key={group.title}
          href={group.items[0].href}
          className={cn(
            "text-body-2 transition-colors",
            group.items.some((item) => item.href === pathname)
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {group.title}
        </Link>
      ))}
    </nav>
  )
}
