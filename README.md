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
| `typography` | Pretendard + Figma 텍스트 스타일 48종 — `text-display-1~4` `text-heading-1~4` `text-title-1~6` `text-subtitle-1~6` `text-body-{semibold,regular}-1~6` `text-label-{semibold,regular}-1~6` `text-description-*` `text-caption-1` |
| `radius` | Figma Radius 6단계 — `rounded-0` · `rounded-4` · `rounded-8` · `rounded-12` · `rounded-16` · `rounded-full` (단계 None·XS·S·M·L·Full) |
| `theme` | colors + typography + radius 묶음 |
| `utils` | `cn()` — 텍스트 스타일을 font-size 로 등록한 tailwind-merge (`registry/daggle/lib/utils.ts`, build-tokens 가 생성) |
| `button` | Figma Atomic › Button — `variant`(Type) · `intent`(Style) · `emphasis` · `size` |

shadcn 표준 의미 토큰(`primary`, `border` 등)은 쓰지 않는다. 컴포넌트 색은 Figma 컴포넌트 스펙의 Semantic 토큰을 그대로 쓴다.

## 토큰 수정하기

원본은 `tokens/tokens.mjs` 하나다. 수정 후 `pnpm registry:build` 하면

- `registry.json` 의 `colors` / `typography` / `theme` 항목
- 미리보기용 `app/tokens.css`

가 다시 생성된다. 두 파일은 직접 고치지 않는다.

사용처에 반영: `npx shadcn@latest add @daggle/theme` 재실행 (globals.css 의 같은 변수를 덮어쓴다).

## 컴포넌트 추가하기

1. `registry/daggle/ui/<name>.tsx` 작성 — 색은 Figma Semantic 토큰(`bg-interactive-primary-default`, `border-border-strong`, `text-text-strong`), 글자는 텍스트 스타일(`text-body-regular-4`)을 쓴다. import 는 `@/lib/utils` 처럼 기본 alias (설치 시 사용처 alias 로 바뀜)
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

- `cn()` 을 직접 수정하지 않는다. 기본 tailwind-merge 는 `text-text-strong`(색)과 `text-body-regular-4`(크기)를 같은 그룹으로 보고 하나를 지우므로, 텍스트 스타일 목록을 등록한 버전을 build-tokens 가 생성한다.
- 토큰은 `@theme inline` 으로 등록돼 클래스(`rounded-4`, `text-heading-2`)로만 쓸 수 있다. `var(--radius-4)` 같은 CSS 변수로는 남지 않는다 (색은 `:root` 변수라 `var(--gray-500)` 가능).
- `files` 필드가 없는 항목은 `shadcn build` 가 건너뛴다 → 파일 없는 토큰 항목도 `"files": []`.
- Tailwind 는 소스의 문자열 그대로만 클래스를 만든다 → `` `text-${name}` `` 같은 동적 조합 금지. (예외: 텍스트 스타일은 build-tokens 가 tokens.css 에 `@source inline` 으로 전부 등록해 둠 — 문서 사이트 전용)

## 로컬 실행

```bash
devs up daggle-ui        # 미리보기 + /r/*.json 서빙
```

로컬 테스트 시 사용처 `@daggle` 주소를 `http://localhost:<포트>/r/{name}.json` 으로 둔다.
