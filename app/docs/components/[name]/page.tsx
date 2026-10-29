import { readFile } from "node:fs/promises"
import path from "node:path"
import { notFound } from "next/navigation"
import { ExternalLink } from "lucide-react"

import registry from "@/registry.json"
import { components, GITHUB_URL } from "@/lib/docs"
import { toInstalledPaths } from "@/lib/highlight"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPage, DocSection } from "@/components/docs/doc-page"
import { InstallCommand } from "@/components/docs/install-command"

type Params = { params: Promise<{ name: string }> }

export function generateStaticParams() {
  return components.map((c) => ({ name: c.name }))
}

export async function generateMetadata({ params }: Params) {
  const { name } = await params
  const doc = components.find((c) => c.name === name)
  return doc ? { title: doc.title, description: doc.description } : {}
}

export default async function ComponentPage({ params }: Params) {
  const { name } = await params
  const doc = components.find((c) => c.name === name)
  const item = registry.items.find((i) => i.name === name)
  if (!doc || !item) notFound()

  const [main, ...rest] = doc.examples
  const sourcePath = item.files[0].path
  const source = await readFile(path.join(process.cwd(), sourcePath), "utf-8")
  const dependencies = "dependencies" in item ? (item.dependencies as string[]) : []

  return (
    <DocPage
      href={`/docs/components/${name}`}
      section="컴포넌트"
      title={doc.title}
      description={doc.description}
      toc={[
        { id: "installation", title: "설치" },
        { id: "usage", title: "사용법" },
        ...(rest.length ? [{ id: "examples", title: "예시" }] : []),
        ...rest.map((e) => ({ id: e.name, title: `· ${e.title}` })),
        { id: "source", title: "소스 코드" },
      ]}
    >
      <div className="-mt-6 flex flex-wrap gap-2">
        <Badge variant="secondary" asChild>
          <a href={`/r/${name}.json`} target="_blank" rel="noreferrer">
            registry JSON <ExternalLink />
          </a>
        </Badge>
        <Badge variant="secondary" asChild>
          <a href={`${GITHUB_URL}/blob/main/${sourcePath}`} target="_blank" rel="noreferrer">
            GitHub <ExternalLink />
          </a>
        </Badge>
      </div>

      <ComponentPreview name={main.name} />

      <DocSection
        id="installation"
        title="설치"
        description={
          dependencies.length > 0 ? (
            <>
              함께 설치되는 패키지:{" "}
              {dependencies.map((d) => (
                <code key={d} className="bg-muted mr-1 rounded px-1 font-mono text-[12px]">
                  {d}
                </code>
              ))}
            </>
          ) : undefined
        }
      >
        <InstallCommand args={`add @daggle/${name}`} />
      </DocSection>

      <DocSection id="usage" title="사용법">
        <CodeBlock code={doc.usage.imports} />
        <CodeBlock code={doc.usage.code} />
      </DocSection>

      {rest.length > 0 && (
        <DocSection id="examples" title="예시">
          <div className="flex flex-col gap-10">
            {rest.map((example) => (
              <div key={example.name} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 id={example.name} className="text-body-semibold-2 scroll-m-20">
                    {example.title}
                  </h3>
                  {example.description && (
                    <p className="text-body-regular-4 text-muted-foreground">{example.description}</p>
                  )}
                </div>
                <ComponentPreview name={example.name} />
              </div>
            ))}
          </div>
        </DocSection>
      )}

      <DocSection
        id="source"
        title="소스 코드"
        description="CLI 없이 직접 복사할 때는 아래 코드를 components/ui 에 붙여넣고 패키지를 설치합니다."
      >
        <CodeBlock code={toInstalledPaths(source).trimEnd()} />
      </DocSection>
    </DocPage>
  )
}
