import Link from "next/link"
import { Blocks, Palette, Type } from "lucide-react"

import { components } from "@/lib/docs"
import { Card, CardDescription, CardHeader, CardTitle } from "@/registry/daggle/ui/card"
import { DocPage, DocSection } from "@/components/docs/doc-page"

export const metadata = { title: "소개" }

const cards = [
  {
    href: "/docs/foundations/colors",
    icon: Palette,
    title: "Colors",
    description: "brand · gray 팔레트와 라이트/다크 의미 토큰",
  },
  {
    href: "/docs/foundations/typography",
    icon: Type,
    title: "Typography",
    description: "Pretendard 와 8단계 텍스트 스타일",
  },
  {
    href: "/docs/components/button",
    icon: Blocks,
    title: "컴포넌트",
    description: `${components.length}개 컴포넌트와 사용 예시`,
  },
]

export default function IntroductionPage() {
  return (
    <DocPage
      href="/docs"
      section="시작하기"
      title="소개"
      description="다글 디자인 시스템은 프로젝트에 소스 코드를 그대로 복사해 쓰는 컴포넌트 모음입니다."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map(({ href, icon: Icon, title, description }) => (
          <Link key={href} href={href} className="group">
            <Card className="group-hover:border-primary/40 h-full gap-3 transition-colors">
              <CardHeader>
                <div className="bg-accent text-accent-foreground mb-2 flex size-9 items-center justify-center rounded-lg">
                  <Icon className="size-4.5" />
                </div>
                <CardTitle className="text-body-1 font-semibold">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <DocSection id="why" title="패키지가 아니라 소스 코드">
        <div className="text-body-1 text-foreground/90 flex flex-col gap-3">
          <p>
            npm 패키지로 설치하는 대신 shadcn CLI 로 컴포넌트 소스를 프로젝트 안에 복사합니다. 복사된 코드는 그
            프로젝트의 코드이므로 클라이언트 요구에 맞게 자유롭게 고칠 수 있습니다.
          </p>
          <ul className="text-body-2 text-muted-foreground ml-5 list-disc space-y-1.5">
            <li>클라이언트별 브랜딩은 토큰(CSS 변수)만 바꿔서 적용</li>
            <li>납품 후에도 사내 패키지 의존 없이 프로젝트가 독립적으로 동작</li>
            <li>AI 에이전트와 Figma MCP 가 컴포넌트 코드를 직접 읽고 수정</li>
          </ul>
        </div>
      </DocSection>

      <DocSection id="principles" title="사용 원칙">
        <ul className="text-body-2 text-foreground/90 ml-5 list-disc space-y-1.5">
          <li>
            색은 의미 토큰(<code className="bg-muted rounded px-1 font-mono text-[13px]">bg-primary</code>,{" "}
            <code className="bg-muted rounded px-1 font-mono text-[13px]">text-success</code>)을 씁니다. 팔레트는
            의미 토큰을 정의할 때만 씁니다.
          </li>
          <li>
            글자는 텍스트 스타일(<code className="bg-muted rounded px-1 font-mono text-[13px]">text-body-2</code>)
            하나로 크기·행간·굵기를 함께 지정합니다.
          </li>
          <li>토큰 값을 바꾸려면 레지스트리의 tokens/tokens.mjs 를 고친 뒤 theme 을 다시 설치합니다.</li>
        </ul>
      </DocSection>
    </DocPage>
  )
}
