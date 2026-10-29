// 문서 사이트 내용. 컴포넌트를 추가하면 components 에 항목을 넣고 examples/ 에 예시 파일을 둔다.

export type ComponentDoc = {
  name: string
  title: string
  description: string
  usage: { imports: string; code: string }
  examples: { name: string; title: string; description?: string }[]
}

// 색은 컴포넌트마다 직접 정의해서 추가한다.
export const components: ComponentDoc[] = []

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
