# daggle design-system

다글 디자인 시스템 shadcn 레지스트리 (Tailwind v4). [shadcn-ui/registry-template](https://github.com/shadcn-ui/registry-template) 기반.

## 프로젝트에서 사용하기

`components.json`에 레지스트리를 등록한다.

```json
{
  "registries": {
    "@daggle": "https://raw.githubusercontent.com/daggle-minseok/design-system/main/public/r/{name}.json"
  }
}
```

```bash
npx shadcn@latest add @daggle/theme          # colors + typography + radius
```

| 항목 | 내용 |
|---|---|
| `colors` | Figma Base Color 팔레트(`bg-gray-500`) + Semantic 토큰 — text·bg·border·icon·interactive·status (`text-text-strong`, `bg-bg-canvas`, `border-border-strong`, `bg-interactive-primary-default`) |
| `typography` | Pretendard + `text-display-1` `text-heading-1~3` `text-title` `text-body-1~2` `text-caption` |
| `theme` | colors + typography + radius 묶음 |
| `utils` | `cn()` — 컴포넌트용 |

컴포넌트는 아직 없다. shadcn 표준 의미 토큰(`primary`, `border` 등)은 쓰지 않고, 컴포넌트마다 색을 Figma 팔레트·텍스트 토큰으로 직접 정의해서 추가한다.

## 토큰 수정하기

원본은 `tokens/tokens.mjs` 하나다. 수정 후 `pnpm registry:build` 하면

- `registry.json` 의 `colors` / `typography` / `theme` 항목
- 미리보기용 `app/tokens.css`

가 다시 생성된다. 두 파일은 직접 고치지 않는다.

사용처에 반영: `npx shadcn@latest add @daggle/theme` 재실행 (globals.css 의 같은 변수를 덮어쓴다).

## 컴포넌트 추가하기

1. `registry/daggle/ui/<name>.tsx` 작성 — 색은 Figma Semantic 토큰(`bg-interactive-primary-default`, `border-border-strong`, `text-text-strong`), 글자는 텍스트 스타일(`text-body-2`)을 쓴다. import 는 `@/lib/utils` 처럼 기본 alias (설치 시 사용처 alias 로 바뀜)
2. `registry.json` 의 `items` 에 추가 (`registryDependencies: ["@daggle/utils", "@daggle/theme"]`)
3. 문서 페이지: `examples/<name>-demo.tsx` 등 예시 파일 작성 → `examples/index.ts` 에 등록 → `lib/docs.ts` 의 `components` 에 설명·사용법·예시 목록 추가 (사이드바와 `/docs/components/<name>` 페이지가 자동 생성)
4. `pnpm registry:build` → `public/r/<name>.json` 생성, **`public/r` 까지 커밋** (raw URL 로 서빙하므로)

## 문서 사이트 구조

| 경로 | 내용 |
|---|---|
| `app/docs/**` | 소개 · 설치 · Foundations(Colors/Typography) · 컴포넌트 페이지 |
| `components/docs/`, `components/ui/` | 문서 사이트 전용 UI (헤더, 사이드바, 코드 블록, 버튼·탭 등). 레지스트리에 포함되지 않음. 이 UI 의 색(`bg-background`, `border` 등)은 `app/globals.css` 에만 정의 |
| `examples/` | 컴포넌트 예시. Preview 탭에 렌더링되고 같은 파일 소스가 Code 탭에 표시됨 |
| `lib/docs.ts` | 사이드바 메뉴와 컴포넌트 문서 내용 |

dev 서버가 떠 있는 동안 `next build` 를 돌리면 `.next` 를 덮어써 dev 서버가 500 을 낸다. 검증은 `pnpm exec tsc --noEmit` / `pnpm lint` 로 한다.

## 주의

- `files` 필드가 없는 항목은 `shadcn build` 가 건너뛴다 → 파일 없는 토큰 항목도 `"files": []`.
- Tailwind 는 소스의 문자열 그대로만 클래스를 만든다 → `` `text-${name}` `` 같은 동적 조합 금지.

## 로컬 실행

```bash
devs up daggle-ui        # 미리보기 + /r/*.json 서빙
```

로컬 테스트 시 사용처 `@daggle` 주소를 `http://localhost:<포트>/r/{name}.json` 으로 둔다.
