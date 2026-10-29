// 문서 사이트 내용. 컴포넌트를 추가하면 components 에 항목을 넣고 examples/ 에 예시 파일을 둔다.

export type ComponentDoc = {
  name: string
  title: string
  description: string
  usage: { imports: string; code: string }
  examples: { name: string; title: string; description?: string }[]
}

export const components: ComponentDoc[] = [
  {
    name: "alert",
    title: "Alert",
    description: "사용자의 주의가 필요한 메시지를 배너 형태로 보여줍니다.",
    usage: {
      imports: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"`,
      code: `<Alert variant="success">
  <CircleCheck />
  <AlertTitle>저장 완료</AlertTitle>
  <AlertDescription>변경사항이 저장되었습니다.</AlertDescription>
</Alert>`,
    },
    examples: [
      { name: "alert-demo", title: "기본" },
      {
        name: "alert-status",
        title: "상태",
        description: "info · success · warning · destructive 상태 토큰을 사용합니다.",
      },
    ],
  },
  {
    name: "badge",
    title: "Badge",
    description: "상태나 분류를 짧은 라벨로 표시합니다.",
    usage: {
      imports: `import { Badge } from "@/components/ui/badge"`,
      code: `<Badge variant="success">완료</Badge>`,
    },
    examples: [
      { name: "badge-demo", title: "기본" },
      { name: "badge-status", title: "상태", description: "진행 상태 표시에 사용합니다." },
    ],
  },
  {
    name: "button",
    title: "Button",
    description: "클릭으로 동작을 실행하는 버튼입니다.",
    usage: {
      imports: `import { Button } from "@/components/ui/button"`,
      code: `<Button variant="outline">버튼</Button>`,
    },
    examples: [
      { name: "button-demo", title: "기본" },
      { name: "button-variants", title: "Variant" },
      { name: "button-sizes", title: "Size" },
      {
        name: "button-with-icon",
        title: "아이콘",
        description: "lucide-react 아이콘을 자식으로 넣으면 크기와 간격이 자동으로 맞춰집니다.",
      },
    ],
  },
  {
    name: "card",
    title: "Card",
    description: "관련된 내용을 하나의 영역으로 묶습니다.",
    usage: {
      imports: `import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"`,
      code: `<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
    <CardAction>액션</CardAction>
  </CardHeader>
  <CardContent>내용</CardContent>
  <CardFooter>푸터</CardFooter>
</Card>`,
    },
    examples: [
      { name: "card-demo", title: "폼" },
      { name: "card-stats", title: "지표", description: "CardAction 으로 우측 상단에 요소를 배치합니다." },
    ],
  },
  {
    name: "checkbox",
    title: "Checkbox",
    description: "선택 여부를 켜고 끄는 입력입니다.",
    usage: {
      imports: `import { Checkbox } from "@/components/ui/checkbox"`,
      code: `<Checkbox id="terms" />`,
    },
    examples: [
      { name: "checkbox-demo", title: "기본" },
      { name: "checkbox-disabled", title: "비활성" },
    ],
  },
  {
    name: "input",
    title: "Input",
    description: "한 줄 텍스트를 입력받습니다.",
    usage: {
      imports: `import { Input } from "@/components/ui/input"`,
      code: `<Input type="email" placeholder="name@daggle.io" />`,
    },
    examples: [
      { name: "input-demo", title: "기본" },
      { name: "input-with-label", title: "라벨" },
      {
        name: "input-invalid",
        title: "에러",
        description: "aria-invalid 를 주면 에러 스타일이 적용됩니다.",
      },
      { name: "input-disabled", title: "비활성" },
    ],
  },
  {
    name: "label",
    title: "Label",
    description: "입력 요소에 연결되는 라벨입니다.",
    usage: {
      imports: `import { Label } from "@/components/ui/label"`,
      code: `<Label htmlFor="email">이메일</Label>`,
    },
    examples: [{ name: "label-demo", title: "기본" }],
  },
  {
    name: "tabs",
    title: "Tabs",
    description: "같은 영역에서 여러 화면을 전환합니다.",
    usage: {
      imports: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`,
      code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">계정</TabsTrigger>
    <TabsTrigger value="password">비밀번호</TabsTrigger>
  </TabsList>
  <TabsContent value="account">계정 설정</TabsContent>
  <TabsContent value="password">비밀번호 변경</TabsContent>
</Tabs>`,
    },
    examples: [{ name: "tabs-demo", title: "기본" }],
  },
  {
    name: "textarea",
    title: "Textarea",
    description: "여러 줄 텍스트를 입력받습니다.",
    usage: {
      imports: `import { Textarea } from "@/components/ui/textarea"`,
      code: `<Textarea placeholder="내용을 입력하세요" />`,
    },
    examples: [{ name: "textarea-demo", title: "기본" }],
  },
]

export type NavItem = { title: string; href: string }

export const docsNav: { title: string; items: NavItem[] }[] = [
  {
    title: "시작하기",
    items: [
      { title: "소개", href: "/docs" },
      { title: "설치", href: "/docs/installation" },
    ],
  },
  {
    title: "테마",
    items: [
      { title: "Colors", href: "/docs/foundations/colors" },
      { title: "Typography", href: "/docs/foundations/typography" },
    ],
  },
  {
    title: "컴포넌트",
    items: components.map((c) => ({
      title: c.title,
      href: `/docs/components/${c.name}`,
    })),
  },
]

export const REGISTRY_URL = "https://design-system-roan-theta.vercel.app"
export const GITHUB_URL = "https://github.com/daggle-minseok/design-system"
