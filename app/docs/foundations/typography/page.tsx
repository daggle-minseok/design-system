import { fonts, textStyles } from "@/tokens/tokens.mjs"
import { CodeBlock } from "@/components/docs/code-block"
import { DocPage, DocSection } from "@/components/docs/doc-page"

export const metadata = { title: "Typography" }

// Tailwind 는 소스의 문자열 그대로만 클래스를 생성하므로 동적 조합 대신 매핑
const textClass: Record<string, string> = {
  "display-1": "text-display-1",
  "heading-1": "text-heading-1",
  "heading-2": "text-heading-2",
  "heading-3": "text-heading-3",
  title: "text-title",
  "body-1": "text-body-1",
  "body-2": "text-body-2",
  caption: "text-caption",
}

const toPx = (rem: string) => `${parseFloat(rem) * 16}px`

export default function TypographyPage() {
  return (
    <DocPage
      href="/docs/foundations/typography"
      section="테마"
      title="Typography"
      description="클래스 하나로 크기·행간·굵기·자간을 함께 지정합니다."
      toc={[
        { id: "font", title: "폰트" },
        { id: "scale", title: "텍스트 스타일" },
        { id: "usage", title: "사용법" },
      ]}
    >
      <DocSection id="font" title="폰트">
        <div className="bg-code flex flex-col gap-4 rounded-lg border p-6">
          <p className="text-display-1">Pretendard</p>
          <p className="text-body-1 text-muted-foreground">
            가나다라마바사아자차카타파하 ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
          </p>
          <code className="text-caption text-muted-foreground font-mono">font-sans: {fonts.sans}</code>
        </div>
      </DocSection>

      <DocSection id="scale" title="텍스트 스타일">
        <div className="divide-y rounded-lg border">
          {Object.entries(textStyles).map(([name, s]) => (
            <div key={name} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex w-36 shrink-0 flex-col gap-0.5">
                <code className="text-primary font-mono text-[13px] font-medium">{textClass[name]}</code>
                <span className="text-caption text-muted-foreground">
                  {toPx(s.size)} / {toPx(s.lineHeight)} · {s.weight}
                </span>
              </div>
              <p className={`${textClass[name]} min-w-0 truncate`}>다글 디자인 시스템</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="usage" title="사용법">
        <CodeBlock
          code={`<h1 className="text-heading-1">페이지 제목</h1>
<p className="text-body-2 text-muted-foreground">설명 텍스트</p>

// 굵기만 바꾸고 싶을 때는 font-* 로 덮어씁니다
<span className="text-body-2 font-semibold">강조</span>`}
        />
      </DocSection>
    </DocPage>
  )
}
