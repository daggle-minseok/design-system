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
        { id: "components", title: "컴포넌트 설치" },
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
        description="색·타이포·radius 토큰을 globals.css 에 넣습니다. 컴포넌트를 설치하면 자동으로 함께 설치되므로 생략해도 됩니다."
      >
        <InstallCommand args="add @daggle/theme" />
      </DocSection>

      <DocSection id="components" title="4. 컴포넌트 설치" description="필요한 컴포넌트만 골라서 설치합니다.">
        <InstallCommand args="add @daggle/button @daggle/card" />
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>시작하기</Button>
}`}
        />
      </DocSection>
    </DocPage>
  )
}
