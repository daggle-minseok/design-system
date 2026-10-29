import { REGISTRY_URL } from "@/lib/docs"
import { CodeBlock } from "@/components/docs/code-block"
import { DocPage, DocSection } from "@/components/docs/doc-page"
import { InstallCommand } from "@/components/docs/install-command"

export const metadata = { title: "설치" }

const registriesConfig = `{
  "registries": {
    "@daggle": "${REGISTRY_URL}/r/{name}.json"
  }
}`

export default function InstallationPage() {
  return (
    <DocPage
      href="/docs/installation"
      section="시작하기"
      title="설치"
      description="Tailwind CSS v4 를 쓰는 React 프로젝트에 다글 레지스트리를 연결합니다."
      toc={[
        { id: "init", title: "shadcn 초기화" },
        { id: "registry", title: "레지스트리 등록" },
        { id: "theme", title: "토큰 설치" },
        { id: "usage", title: "사용" },
      ]}
    >
      <DocSection
        id="init"
        title="1. shadcn 초기화"
        description="components.json 이 없는 프로젝트라면 먼저 만듭니다. 이미 있다면 건너뜁니다."
      >
        <InstallCommand args="init" />
      </DocSection>

      <DocSection
        id="registry"
        title="2. 레지스트리 등록"
        description="components.json 에 @daggle 네임스페이스를 추가합니다."
      >
        <CodeBlock code={registriesConfig} lang="json" />
      </DocSection>

      <DocSection
        id="theme"
        title="3. 토큰 설치"
        description="색·타이포·radius 토큰을 globals.css 에 넣습니다."
      >
        <InstallCommand args="add @daggle/theme" />
      </DocSection>

      <DocSection id="usage" title="4. 사용" description="설치한 토큰은 Tailwind 클래스로 바로 씁니다.">
        <CodeBlock
          code={`export default function Page() {
  return (
    <section className="rounded-lg border border-gray-300 bg-gray-50 p-6">
      <h1 className="text-heading-2 text-text-strong">프로젝트</h1>
      <p className="text-body-2 text-text-tertiary">설명 텍스트</p>
    </section>
  )
}`}
        />
      </DocSection>
    </DocPage>
  )
}
