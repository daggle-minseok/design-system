// 문서 사이트 내용. 컴포넌트를 추가하면 components 에 항목을 넣고 examples/ 에 예시 파일을 둔다.

export type ComponentDoc = {
  name: string
  title: string
  description: string
  usage: { imports: string; code: string }
  examples: { name: string; title: string; description?: string }[]
}

// 색은 컴포넌트마다 Figma 스펙에서 정의해서 추가한다.
export const components: ComponentDoc[] = [
  {
    name: "button",
    title: "Button",
    description: "Figma Atomic › Button. Type(variant) · Style(intent) · Emphasis · Size 조합과 Hover·Pressed·Disabled 상태를 지원합니다.",
    usage: {
      imports: `import { Button } from "@/components/ui/button"`,
      code: `<Button variant="outline" intent="secondary" emphasis="weak" size="s" leftIcon={<Plus />}>
  버튼
</Button>`,
    },
    examples: [
      { name: "button-demo", title: "기본" },
      {
        name: "button-variants",
        title: "Variant · Intent · Emphasis",
        description: "Figma 의 Type · Style · Emphasis. 마우스를 올리거나 누르면 Hover · Pressed 상태가 됩니다.",
      },
      { name: "button-sizes", title: "Size", description: "Xs 28 · S 32 · M 40 · L 48px" },
      {
        name: "button-with-icon",
        title: "아이콘",
        description: "leftIcon · rightIcon 에 아이콘을 넣으면 크기가 자동으로 맞춰집니다.",
      },
      { name: "button-disabled", title: "Disabled" },
    ],
  },
]

export type NavItem = { title: string; href: string }

const nav: { title: string; items: NavItem[] }[] = [
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
      { title: "Radius", href: "/docs/foundations/radius" },
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

// 항목이 없는 그룹(예: 컴포넌트가 아직 없을 때)은 사이드바·상단 메뉴에서 숨긴다
export const docsNav = nav.filter((group) => group.items.length > 0)

export const REGISTRY_URL = "https://design-system-roan-theta.vercel.app"
export const GITHUB_URL = "https://github.com/daggle-minseok/design-system"
