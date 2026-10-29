"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/registry/daggle/ui/button"
import { SidebarNav } from "@/components/docs/sidebar-nav"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" aria-label="메뉴" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <div className="bg-background fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto border-t px-4 py-6">
          <SidebarNav onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  )
}
