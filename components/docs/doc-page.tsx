import * as React from "react"

import { Pager } from "@/components/docs/pager"

export type TocItem = { id: string; title: string }

export function DocPage({
  href,
  section,
  title,
  description,
  toc,
  children,
}: {
  href: string
  section: string
  title: string
  description: string
  toc?: TocItem[]
  children: React.ReactNode
}) {
  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_180px] xl:gap-12">
      <article className="min-w-0 py-8 md:py-10">
        <p className="text-description-regular-2 text-primary mb-2 font-semibold">{section}</p>
        <h1 className="text-heading-2 scroll-m-20">{title}</h1>
        <p className="text-body-regular-2 text-muted-foreground mt-2">{description}</p>
        <div className="mt-10 flex flex-col gap-12">{children}</div>
        <Pager href={href} />
      </article>
      {toc && toc.length > 0 && (
        <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] py-10 xl:block">
          <p className="text-description-regular-2 mb-3 font-medium">이 페이지</p>
          <ul className="flex flex-col gap-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-description-regular-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  )
}

export function DocSection({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 id={id} className="text-heading-4 scroll-m-20 border-b pb-2">
          {title}
        </h2>
        {description && <p className="text-body-regular-4 text-muted-foreground pt-1">{description}</p>}
      </div>
      {children}
    </section>
  )
}
