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
npx shadcn@latest add @daggle/theme          # 토큰만 (colors + typography + radius)
npx shadcn@latest add @daggle/button @daggle/card
```

컴포넌트는 `@daggle/theme`·`@daggle/utils`를 의존성으로 함께 설치한다.

| 항목 | 내용 |
|---|---|
| `colors` | `bg-brand-500`, `text-gray-700` 팔레트 + `bg-primary`, `text-success` 의미 토큰 (라이트/다크) |
| `typography` | Pretendard + `text-display-1` `text-heading-1~3` `text-title` `text-body-1~2` `text-caption` |
| `theme` | colors + typography + radius 묶음 |
| ui | button, alert, badge, input, textarea, label, checkbox, card |

## 토큰 수정하기

원본은 `tokens/tokens.mjs` 하나다. 수정 후 `pnpm registry:build` 하면

- `registry.json` 의 `colors` / `typography` / `theme` 항목
- 미리보기용 `app/tokens.css`

가 다시 생성된다. 두 파일은 직접 고치지 않는다.

사용처에 반영: `npx shadcn@latest add @daggle/theme` 재실행 (globals.css 의 같은 변수를 덮어쓴다).

## 컴포넌트 추가하기

1. `registry/daggle/ui/<name>.tsx` 작성 — 색은 의미 토큰(`bg-primary`), 글자는 텍스트 스타일(`text-body-2`)을 쓴다. import 는 `@/lib/utils` 처럼 기본 alias (설치 시 사용처 alias 로 바뀜)
2. `registry.json` 의 `items` 에 추가 (`registryDependencies: ["@daggle/utils", "@daggle/theme"]`)
3. `app/page.tsx` 에 미리보기 추가
4. `pnpm registry:build` → `public/r/<name>.json` 생성, **`public/r` 까지 커밋** (raw URL 로 서빙하므로)

## 주의

- `files` 필드가 없는 항목은 `shadcn build` 가 건너뛴다 → 파일 없는 토큰 항목도 `"files": []`.
- Tailwind 는 소스의 문자열 그대로만 클래스를 만든다 → `` `text-${name}` `` 같은 동적 조합 금지.

## 로컬 실행

```bash
devs up daggle-ui        # 미리보기 + /r/*.json 서빙
```

로컬 테스트 시 사용처 `@daggle` 주소를 `http://localhost:<포트>/r/{name}.json` 으로 둔다.
