import { palette, semantic } from "@/tokens/tokens.mjs"
import { CodeBlock } from "@/components/docs/code-block"
import { PaletteSwatch } from "@/components/docs/color-swatch"
import { DocPage, DocSection } from "@/components/docs/doc-page"

export const metadata = { title: "Colors" }

const groups: { key: keyof typeof semantic; title: string; usage: string }[] = [
  { key: "text", title: "텍스트", usage: "text-text-strong" },
  { key: "bg", title: "배경", usage: "bg-bg-canvas" },
  { key: "border", title: "테두리", usage: "border-border-strong" },
  { key: "icon", title: "아이콘", usage: "text-icon-default" },
  { key: "interactive", title: "인터랙티브", usage: "bg-interactive-primary-default hover:bg-interactive-primary-hover" },
  { key: "status", title: "상태", usage: "bg-status-success-weak text-status-success-strong" },
]

export default function ColorsPage() {
  return (
    <DocPage
      href="/docs/foundations/colors"
      section="테마"
      title="Colors"
      description="Figma 어드민 디자인 시스템 v.1 의 Base Color 와 Semantic 토큰을 옮겼습니다."
      toc={[
        { id: "palette", title: "팔레트" },
        ...groups.map((g) => ({ id: g.key, title: g.title })),
        { id: "usage", title: "사용법" },
      ]}
    >
      <DocSection
        id="palette"
        title="팔레트"
        description="클릭하면 클래스 이름(예: gray-500)이 복사됩니다. bg-· text-· border- 앞에 붙여 씁니다."
      >
        <div className="flex flex-col gap-6">
          {Object.entries(palette).map(([name, scale]) => (
            <div key={name} className="flex flex-col gap-2">
              <p className="text-body-2 font-semibold capitalize">{name}</p>
              <div className="grid grid-cols-6 gap-2 sm:grid-cols-11">
                {Object.entries(scale as Record<string, string>).map(([step, value]) => (
                  <PaletteSwatch key={step} name={name} step={step} value={value} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      {groups.map((group) => (
        <DocSection
          key={group.key}
          id={group.key}
          title={group.title}
          description={
            <>
              Figma Semantic/{group.key} · 예:{" "}
              <code className="bg-muted rounded px-1 font-mono text-[12px]">{group.usage}</code>
            </>
          }
        >
          <div className="overflow-x-auto rounded-lg border">
            <table className="text-body-2 w-full">
              <thead className="bg-muted/50 text-caption text-muted-foreground">
                <tr className="text-left">
                  <th className="px-4 py-2.5 font-medium">토큰</th>
                  <th className="w-20 px-4 py-2.5 font-medium">색</th>
                  <th className="px-4 py-2.5 font-medium">값</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(semantic[group.key] as Record<string, string>).map(([token, value]) => (
                  <tr key={token} className="border-t">
                    <td className="px-4 py-2.5">
                      <code className="font-mono text-[13px]">{token}</code>
                    </td>
                    <td className="px-4 py-2.5">
                      <div
                        className="size-8 rounded-md ring-1 ring-black/10 ring-inset"
                        style={{ background: `var(--${token})` }}
                      />
                    </td>
                    <td className="text-caption text-muted-foreground px-4 py-2.5 font-mono">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>
      ))}

      <DocSection id="usage" title="사용법">
        <CodeBlock
          code={`// 텍스트: Figma 텍스트 토큰
<h2 className="text-text-strong">제목</h2>
<p className="text-text-tertiary">보조 설명</p>

// 배경·테두리
<div className="bg-bg-surface border border-border-strong">...</div>

// 버튼: 인터랙티브 상태별 토큰
<button className="bg-interactive-primary-default hover:bg-interactive-primary-hover active:bg-interactive-primary-pressed disabled:bg-interactive-primary-disabled text-text-inverse">
  저장
</button>

// 상태 배지
<span className="bg-status-success-weak text-status-success-strong">완료</span>`}
        />
      </DocSection>
    </DocPage>
  )
}
