import { SidebarNav } from "@/components/docs/sidebar-nav"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
        <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] overflow-y-auto py-8 pr-2 md:block">
          <SidebarNav />
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  )
}
