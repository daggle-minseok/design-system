import { palette, semantic } from "@/tokens/tokens.mjs"
import { CodeBlock } from "@/components/docs/code-block"
import { PaletteSwatch } from "@/components/docs/color-swatch"
import { DocPage, DocSection } from "@/components/docs/doc-page"

export const metadata = { title: "Colors" }

const groups: { title: string; tokens: string[] }[] = [
  { title: "Base", tokens: ["background", "foreground", "card", "popover", "border", "input", "ring"] },
  {
    title: "Brand",
    tokens: ["primary", "primary-foreground", "secondary", "secondary-foreground", "accent", "accent-foreground"],
  },
  { title: "Muted", tokens: ["muted", "muted-foreground"] },
  { title: "Status", tokens: ["info", "success", "warning", "destructive"] },
]

const semanticLight = semantic.light as Record<string, string>
const semanticDark = semantic.dark as Record<string, string>

function Chip({ token, dark }: { token: string; dark?: boolean }) {
  return (
    <div className={dark ? "dark" : undefined}>
      <div
        className="ring-foreground/10 size-8 rounded-md ring-1 ring-inset"
        style={{ background: `var(--${token})` }}
      />
    </div>
  )
}

export default function ColorsPage() {
  return (
    <DocPage
      href="/docs/foundations/colors"
      section="테마"
      title="Colors"
      description="원시 팔레트로 의미 토큰을 정의하고, 컴포넌트는 의미 토큰만 사용합니다."
      toc={[
        { id: "palette", title: "팔레트" },
        { id: "semantic", title: "의미 토큰" },
        { id: "usage", title: "사용법" },
      ]}
    >
      <DocSection
        id="palette"
        title="팔레트"
        description="클릭하면 클래스 이름(예: brand-500)이 복사됩니다. bg-· text-· border- 앞에 붙여 씁니다."
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

      <DocSection
        id="semantic"
        title="의미 토큰"
        description="라이트/다크 모드마다 다른 값을 가리킵니다. 테마를 바꾸면 컴포넌트 색이 함께 바뀝니다."
      >
        <div className="overflow-x-auto rounded-lg border">
          <table className="text-body-2 w-full">
            <thead className="bg-muted/50 text-caption text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">토큰</th>
                <th className="px-4 py-2.5 font-medium">Light</th>
                <th className="px-4 py-2.5 font-medium">Dark</th>
                <th className="hidden px-4 py-2.5 font-medium sm:table-cell">값 (light)</th>
              </tr>
            </thead>
            {groups.map((group) => (
              <tbody key={group.title} className="border-t">
                <tr>
                  <td colSpan={4} className="text-caption text-primary px-4 pt-4 pb-1 font-semibold">
                    {group.title}
                  </td>
                </tr>
                {group.tokens.map((token) => (
                  <tr key={token} className="border-border/60 border-t first:border-0">
                    <td className="px-4 py-2.5">
                      <code className="font-mono text-[13px]">{token}</code>
                    </td>
                    <td className="px-4 py-2.5">
                      <Chip token={token} />
                    </td>
                    <td className="px-4 py-2.5">
                      <Chip token={token} dark />
                    </td>
                    <td className="text-caption text-muted-foreground hidden px-4 py-2.5 font-mono sm:table-cell">
                      {semanticLight[token]}
                      {semanticDark[token] && <span className="opacity-60"> / {semanticDark[token]}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </DocSection>

      <DocSection id="usage" title="사용법">
        <CodeBlock
          code={`// 컴포넌트·화면: 의미 토큰
<div className="bg-card text-card-foreground border">...</div>
<p className="text-muted-foreground">보조 텍스트</p>
<span className="text-success">완료</span>

// 일러스트·차트처럼 고정 색이 필요할 때만 팔레트
<div className="bg-brand-50 text-brand-700">...</div>`}
        />
      </DocSection>
    </DocPage>
  )
}
