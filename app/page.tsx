import * as React from "react"
import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/daggle/ui/alert"
import { Badge } from "@/registry/daggle/ui/badge"
import { Button } from "@/registry/daggle/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/daggle/ui/card"
import { Checkbox } from "@/registry/daggle/ui/checkbox"
import { Input } from "@/registry/daggle/ui/input"
import { Label } from "@/registry/daggle/ui/label"
import { Textarea } from "@/registry/daggle/ui/textarea"
import { palette, semantic, textStyles } from "@/tokens/tokens.mjs"
// This page previews items from the @daggle registry.

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

function Preview({
  name,
  description,
  children,
}: {
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4 border rounded-lg p-4">
      <div className="flex flex-col gap-1 sm:pl-3">
        <h2 className="text-title">{name}</h2>
        <p className="text-body-2 text-muted-foreground">{description}</p>
        <code className="text-caption font-mono text-muted-foreground">
          npx shadcn@latest add @daggle/{name}
        </code>
      </div>
      <div className="flex flex-col gap-3 p-4">{children}</div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-heading-1">Daggle UI</h1>
        <p className="text-body-1 text-muted-foreground">
          다글 디자인 시스템 컴포넌트 레지스트리
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <Preview
          name="colors"
          description="원시 팔레트(bg-brand-500)와 의미 토큰(bg-primary)"
        >
          {Object.entries(palette).map(([name, scale]) => (
            <div key={name} className="flex flex-col gap-1">
              <span className="text-caption text-muted-foreground">{name}</span>
              <div className="grid grid-cols-11 gap-1">
                {Object.keys(scale).map((step) => (
                  <div key={step} className="flex flex-col gap-1">
                    <div
                      className="h-10 rounded-md border"
                      style={{ background: `var(--${name}-${step})` }}
                    />
                    <span className="text-caption text-muted-foreground">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {Object.keys(semantic.light)
              .filter((name) => !name.endsWith("-foreground"))
              .map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <div
                    className="size-6 shrink-0 rounded-md border"
                    style={{ background: `var(--${name})` }}
                  />
                  <span className="text-caption">{name}</span>
                </div>
              ))}
          </div>
        </Preview>

        <Preview
          name="typography"
          description="Pretendard + 텍스트 스타일 (크기·행간·굵기·자간 한 번에)"
        >
          {Object.entries(textStyles).map(([name, s]) => (
            <div key={name} className="flex items-baseline gap-4">
              <code className="w-24 shrink-0 text-caption font-mono text-muted-foreground">
                text-{name}
              </code>
              <span className={textClass[name]}>다글 디자인 시스템 Aa</span>
              <span className="ml-auto shrink-0 text-caption text-muted-foreground">
                {s.size} / {s.lineHeight} / {s.weight}
              </span>
            </div>
          ))}
        </Preview>

        <Preview name="button" description="기본 버튼">
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </Preview>

        <Preview name="badge" description="상태 배지">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="info">진행중</Badge>
            <Badge variant="success">완료</Badge>
            <Badge variant="warning">보류</Badge>
            <Badge variant="destructive">실패</Badge>
          </div>
        </Preview>

        <Preview
          name="alert"
          description="알림 배너 (default / info / success / warning / destructive)"
        >
          <Alert>
            <Info />
            <AlertTitle>기본 알림</AlertTitle>
            <AlertDescription>일반적인 안내 메시지입니다.</AlertDescription>
          </Alert>
          <Alert variant="info">
            <Info />
            <AlertTitle>안내</AlertTitle>
            <AlertDescription>새 버전이 배포되었습니다.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <CircleCheck />
            <AlertTitle>저장 완료</AlertTitle>
            <AlertDescription>변경사항이 저장되었습니다.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <TriangleAlert />
            <AlertTitle>확인 필요</AlertTitle>
            <AlertDescription>입력하지 않은 필수 항목이 있습니다.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <CircleAlert />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>요청을 처리하지 못했습니다.</AlertDescription>
          </Alert>
        </Preview>

        <Preview name="input" description="텍스트 입력 (label / textarea 와 함께)">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="name@daggle.io" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="invalid">잘못된 입력</Label>
            <Input id="invalid" aria-invalid defaultValue="abc" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="memo">메모</Label>
            <Textarea id="memo" placeholder="내용을 입력하세요" />
          </div>
        </Preview>

        <Preview name="checkbox" description="체크박스">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" defaultChecked />
            <Label htmlFor="terms">이용약관에 동의합니다</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">비활성</Label>
          </div>
        </Preview>

        <Preview name="card" description="카드 컨테이너">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>프로젝트 생성</CardTitle>
              <CardDescription>새 클라이언트 프로젝트를 등록합니다.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Label htmlFor="project">프로젝트명</Label>
              <Input id="project" placeholder="예: 셀포레스트" />
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline">취소</Button>
              <Button>생성</Button>
            </CardFooter>
          </Card>
        </Preview>
      </main>
    </div>
  )
}
