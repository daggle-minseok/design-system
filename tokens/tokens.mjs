// 다글 디자인 토큰 원본. 값 수정 후 `pnpm registry:build`
// → registry.json 의 colors / typography / theme 항목과 app/tokens.css 가 다시 생성된다.

// 원시 팔레트: `--brand-500` + Tailwind 클래스 `bg-brand-500`
export const palette = {
  brand: {
    50: "oklch(0.97 0.014 254.604)",
    100: "oklch(0.932 0.032 255.585)",
    200: "oklch(0.882 0.059 254.128)",
    300: "oklch(0.809 0.105 251.813)",
    400: "oklch(0.707 0.165 254.624)",
    500: "oklch(0.623 0.214 259.815)",
    600: "oklch(0.546 0.245 262.881)",
    700: "oklch(0.488 0.243 264.376)",
    800: "oklch(0.424 0.199 265.638)",
    900: "oklch(0.379 0.146 265.522)",
    950: "oklch(0.282 0.091 267.935)",
  },
  gray: {
    50: "oklch(0.985 0 0)",
    100: "oklch(0.967 0.001 286.375)",
    200: "oklch(0.92 0.004 286.32)",
    300: "oklch(0.871 0.006 286.286)",
    400: "oklch(0.705 0.015 286.067)",
    500: "oklch(0.552 0.016 285.938)",
    600: "oklch(0.442 0.017 285.786)",
    700: "oklch(0.37 0.013 285.805)",
    800: "oklch(0.274 0.006 286.033)",
    900: "oklch(0.21 0.006 285.885)",
    950: "oklch(0.141 0.005 285.823)",
  },
}

// 의미 토큰: 컴포넌트는 이것만 쓴다. `--primary` + 클래스 `bg-primary`
export const semantic = {
  light: {
    background: "oklch(1 0 0)",
    foreground: "var(--gray-950)",
    card: "oklch(1 0 0)",
    "card-foreground": "var(--gray-950)",
    popover: "oklch(1 0 0)",
    "popover-foreground": "var(--gray-950)",
    primary: "var(--brand-600)",
    "primary-foreground": "oklch(1 0 0)",
    secondary: "var(--gray-100)",
    "secondary-foreground": "var(--gray-900)",
    muted: "var(--gray-100)",
    "muted-foreground": "var(--gray-500)",
    accent: "var(--brand-50)",
    "accent-foreground": "var(--brand-700)",
    destructive: "oklch(0.577 0.245 27.325)",
    border: "var(--gray-200)",
    input: "var(--gray-200)",
    ring: "var(--brand-400)",
    info: "var(--brand-600)",
    success: "oklch(0.527 0.154 150.069)",
    warning: "oklch(0.555 0.163 48.998)",
  },
  dark: {
    background: "var(--gray-950)",
    foreground: "var(--gray-50)",
    card: "var(--gray-900)",
    "card-foreground": "var(--gray-50)",
    popover: "var(--gray-900)",
    "popover-foreground": "var(--gray-50)",
    primary: "var(--brand-500)",
    "primary-foreground": "oklch(1 0 0)",
    secondary: "var(--gray-800)",
    "secondary-foreground": "var(--gray-50)",
    muted: "var(--gray-800)",
    "muted-foreground": "var(--gray-400)",
    accent: "var(--brand-950)",
    "accent-foreground": "var(--brand-200)",
    destructive: "oklch(0.704 0.191 22.216)",
    border: "oklch(1 0 0 / 10%)",
    input: "oklch(1 0 0 / 15%)",
    ring: "var(--brand-600)",
    info: "var(--brand-400)",
    success: "oklch(0.765 0.177 163.223)",
    warning: "oklch(0.828 0.189 84.429)",
  },
}

export const fonts = {
  sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
}

// 텍스트 스타일: 클래스 하나(`text-heading-1`)로 크기·행간·굵기·자간 적용
export const textStyles = {
  "display-1": { size: "2.5rem", lineHeight: "3.25rem", weight: "700", letterSpacing: "-0.025em" },
  "heading-1": { size: "2rem", lineHeight: "2.75rem", weight: "700", letterSpacing: "-0.02em" },
  "heading-2": { size: "1.5rem", lineHeight: "2.125rem", weight: "700", letterSpacing: "-0.02em" },
  "heading-3": { size: "1.25rem", lineHeight: "1.75rem", weight: "600", letterSpacing: "-0.01em" },
  title: { size: "1.125rem", lineHeight: "1.625rem", weight: "600", letterSpacing: "-0.01em" },
  "body-1": { size: "1rem", lineHeight: "1.5rem", weight: "400", letterSpacing: "0" },
  "body-2": { size: "0.875rem", lineHeight: "1.25rem", weight: "400", letterSpacing: "0" },
  caption: { size: "0.75rem", lineHeight: "1rem", weight: "400", letterSpacing: "0" },
}

export const radius = "0.5rem"
