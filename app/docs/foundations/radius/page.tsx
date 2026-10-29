import { radius } from "@/tokens/tokens.mjs"
import { CodeBlock } from "@/components/docs/code-block"
import { DocPage, DocSection } from "@/components/docs/doc-page"

export const metadata = { title: "Radius" }

// Figma › Radius 의 단계 이름과 대표 컴포넌트.
// @theme inline 토큰은 :root 변수로 남지 않아 var(--radius-*) 를 쓸 수 없으므로 클래스를 그대로 적는다
const scale: Record<string, { step: string; usage: string; className: string }> = {
  0: { step: "None", usage: "Table, Breadcrumb, Tab", className: "rounded-0" },
  4: { step: "XS", usage: "Number, Arrow, Calendar, Button(Xs·S)", className: "rounded-4" },
  8: { step: "S", usage: "Tooltip, Tag(각진), Button(M), Input Field(M) 등 필드류", className: "rounded-8" },
  12: {
    step: "M",
    usage: "Segmented Control, Option Row, File Uploader, Button(L), Input Field(L) 등 필드류",
    className: "rounded-12",
  },
  16: { step: "L", usage: "Calendar, Popover, Alert", className: "rounded-16" },
  full: { step: "Full", usage: "Badge, Tag(Round), Switch, Avatar", className: "rounded-full" },
}

export default function RadiusPage() {
  return (
    <DocPage
      href="/docs/foundations/radius"
      section="테마"
      title="Radius"
      description="Figma 어드민 디자인 시스템 v.1 의 6단계 모서리 스케일입니다."
      toc={[
        { id: "scale", title: "스케일" },
        { id: "usage", title: "사용법" },
      ]}
    >
      <DocSection
        id="scale"
        title="스케일"
        description="클래스는 값 기준(rounded-4)입니다. 단계 이름(xs·s·m·l)은 Tailwind 의 rounded-s(시작쪽)·rounded-l(왼쪽)과 겹쳐 쓰지 않습니다."
      >
        <div className="overflow-x-auto rounded-lg border">
          <table className="text-body-regular-4 w-full">
            <thead className="bg-muted/50 text-description-regular-2 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">단계</th>
                <th className="px-4 py-2.5 font-medium">클래스</th>
                <th className="px-4 py-2.5 font-medium">값</th>
                <th className="px-4 py-2.5 font-medium">미리보기</th>
                <th className="px-4 py-2.5 font-medium">대표 컴포넌트</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(radius as Record<string, string>).map(([name, value]) => (
                <tr key={name} className="border-t">
                  <td className="px-4 py-3">{scale[name]?.step}</td>
                  <td className="px-4 py-3">
                    <code className="text-primary font-mono text-[13px]">rounded-{name}</code>
                  </td>
                  <td className="text-muted-foreground px-4 py-3 font-mono text-[13px]">{value}</td>
                  <td className="px-4 py-3">
                    <div className={`bg-primary-50 border-primary-200 size-10 border ${scale[name]?.className}`} />
                  </td>
                  <td className="text-muted-foreground px-4 py-3">{scale[name]?.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="usage" title="사용법">
        <CodeBlock
          code={`<div className="rounded-8 border border-border-strong">필드</div>
<span className="rounded-full bg-status-success-weak">배지</span>`}
        />
      </DocSection>
    </DocPage>
  )
}
