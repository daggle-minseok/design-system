import { fonts, textStyles } from "@/tokens/tokens.mjs"
import { CodeBlock } from "@/components/docs/code-block"
import { DocPage, DocSection } from "@/components/docs/doc-page"

export const metadata = { title: "Typography" }

type TextStyle = { figma: string; size: string; lineHeight: string; weight: string; letterSpacing: string }

// Figma 스타일 이름의 분류(Display, Body …)별로 묶는다. 클래스는 tokens.css 의 @source inline 으로 모두 생성됨
const groups = Object.entries(textStyles as Record<string, TextStyle>).reduce<
  { title: string; styles: [string, TextStyle][] }[]
>((acc, [name, style]) => {
  const title = style.figma.split(" (")[0]
  const group = acc.find((g) => g.title === title)
  if (group) group.styles.push([name, style])
  else acc.push({ title, styles: [[name, style]] })
  return acc
}, [])

const toPx = (rem: string) => `${parseFloat(rem) * 16}px`

export default function TypographyPage() {
  return (
    <DocPage
      href="/docs/foundations/typography"
      section="테마"
      title="Typography"
      description="Figma 어드민 디자인 시스템 v.1 의 텍스트 스타일입니다. 클래스 하나로 크기·행간·굵기·자간을 함께 지정합니다."
      toc={[
        { id: "font", title: "폰트" },
        ...groups.map((g) => ({ id: g.title.toLowerCase(), title: g.title })),
        { id: "usage", title: "사용법" },
      ]}
    >
      <DocSection id="font" title="폰트">
        <div className="bg-code flex flex-col gap-4 rounded-lg border p-6">
          <p className="text-display-1">Pretendard</p>
          <p className="text-body-regular-2 text-muted-foreground">
            가나다라마바사아자차카타파하 ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
          </p>
          <code className="text-description-regular-2 text-muted-foreground font-mono">font-sans: {fonts.sans}</code>
        </div>
      </DocSection>

      {groups.map((group) => (
        <DocSection key={group.title} id={group.title.toLowerCase()} title={group.title}>
          <div className="divide-y rounded-lg border">
            {group.styles.map(([name, s]) => (
              <div key={name} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex w-52 shrink-0 flex-col gap-0.5">
                  <code className="text-primary font-mono text-[13px] font-medium">text-{name}</code>
                  <span className="text-description-regular-2 text-muted-foreground">{s.figma}</span>
                  <span className="text-description-regular-2 text-muted-foreground">
                    {toPx(s.size)} / {toPx(s.lineHeight)} · {s.weight} · {s.letterSpacing}
                  </span>
                </div>
                <p className={`text-${name} min-w-0 truncate`}>다글 디자인 시스템</p>
              </div>
            ))}
          </div>
        </DocSection>
      ))}

      <DocSection id="usage" title="사용법">
        <CodeBlock
          code={`<h1 className="text-heading-2 text-text-strong">페이지 제목</h1>
<p className="text-body-regular-4 text-text-tertiary">설명 텍스트</p>
<span className="text-label-semibold-4">라벨</span>`}
        />
      </DocSection>
    </DocPage>
  )
}
