import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Figma › Component › Atomic › Button (node 234:6577)
// Figma 속성 → prop: Type → variant, Style → intent, Emphasis → emphasis, Size → size, State → hover/active/disabled
const buttonVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        fill: "",
        outline:
          "bg-bg-surface border disabled:border-border-disabled disabled:bg-bg-surface",
        ghost: "bg-transparent",
      },
      intent: {
        primary: "",
        secondary: "",
        danger: "",
      },
      emphasis: {
        strong: "",
        weak: "",
      },
      size: {
        xs: "h-7 rounded-4 px-2.5 text-label-semibold-6 [&_svg]:size-3.5",
        s: "h-8 rounded-4 px-3 text-label-semibold-6 [&_svg]:size-4",
        m: "h-10 rounded-8 px-4 text-label-semibold-4 [&_svg]:size-[18px]",
        l: "h-12 rounded-12 px-5 text-label-semibold-2 [&_svg]:size-5",
      },
    },
    compoundVariants: [
      // ── Fill
      {
        variant: "fill",
        intent: "primary",
        emphasis: "strong",
        className:
          "bg-interactive-primary-default text-text-inverse enabled:hover:bg-interactive-primary-hover enabled:active:bg-interactive-primary-pressed disabled:bg-interactive-primary-disabled",
      },
      {
        variant: "fill",
        intent: "primary",
        emphasis: "weak",
        className:
          "bg-interactive-primary-weak-default text-text-primary enabled:hover:bg-interactive-primary-weak-hover enabled:active:bg-interactive-primary-weak-pressed disabled:bg-interactive-primary-weak-disabled",
      },
      {
        variant: "fill",
        intent: "secondary",
        emphasis: "strong",
        className:
          "bg-interactive-secondary-default text-text-inverse enabled:hover:bg-interactive-secondary-hover enabled:active:bg-interactive-secondary-pressed disabled:bg-interactive-secondary-disabled",
      },
      {
        variant: "fill",
        intent: "secondary",
        emphasis: "weak",
        className:
          "bg-interactive-secondary-weak-default text-text-strong enabled:hover:bg-interactive-secondary-weak-hover enabled:active:bg-interactive-secondary-weak-pressed disabled:bg-interactive-secondary-weak-disabled",
      },
      {
        variant: "fill",
        intent: "danger",
        emphasis: "strong",
        className:
          "bg-interactive-danger-default text-text-inverse enabled:hover:bg-interactive-danger-hover enabled:active:bg-interactive-danger-pressed disabled:bg-interactive-danger-disabled",
      },
      {
        variant: "fill",
        intent: "danger",
        emphasis: "weak",
        className:
          "bg-interactive-danger-weak-default text-text-error enabled:hover:bg-interactive-danger-weak-hover enabled:active:bg-interactive-danger-weak-pressed disabled:bg-interactive-danger-weak-disabled",
      },
      // ── Outline: strong 은 테두리가 상태별 interactive 색, weak 은 border-strong 고정
      {
        variant: "outline",
        emphasis: "weak",
        className: "border-border-strong",
      },
      {
        variant: "outline",
        intent: "primary",
        emphasis: "strong",
        className:
          "border-interactive-primary-default enabled:hover:border-interactive-primary-hover enabled:active:border-interactive-primary-pressed",
      },
      {
        variant: "outline",
        intent: "secondary",
        emphasis: "strong",
        className:
          "border-interactive-secondary-default enabled:hover:border-interactive-secondary-hover enabled:active:border-interactive-secondary-pressed",
      },
      {
        variant: "outline",
        intent: "danger",
        emphasis: "strong",
        className:
          "border-interactive-danger-default enabled:hover:border-interactive-danger-hover enabled:active:border-interactive-danger-pressed",
      },
      // ── Outline · Ghost: 글자색과 hover/pressed 배경은 intent 의 weak 색
      {
        variant: ["outline", "ghost"],
        intent: "primary",
        className:
          "text-text-primary enabled:hover:bg-interactive-primary-weak-hover enabled:active:bg-interactive-primary-weak-pressed",
      },
      {
        variant: ["outline", "ghost"],
        intent: "secondary",
        className:
          "text-text-strong enabled:hover:bg-interactive-secondary-weak-hover enabled:active:bg-interactive-secondary-weak-pressed",
      },
      {
        variant: ["outline", "ghost"],
        intent: "danger",
        className:
          "text-text-error enabled:hover:bg-interactive-danger-weak-hover enabled:active:bg-interactive-danger-weak-pressed",
      },
      // ── Ghost: padding 이 좁고, weak 은 라벨이 Regular
      { variant: "ghost", size: "xs", className: "px-2" },
      { variant: "ghost", size: "s", className: "px-2" },
      { variant: "ghost", size: "m", className: "px-3" },
      { variant: "ghost", size: "l", className: "px-3.5" },
      { variant: "ghost", emphasis: "weak", size: ["xs", "s"], className: "text-label-regular-6" },
      { variant: "ghost", emphasis: "weak", size: "m", className: "text-label-regular-4" },
      { variant: "ghost", emphasis: "weak", size: "l", className: "text-label-regular-2" },
      // ── Disabled 글자색은 전 조합 공통 (compound 뒤에 둬서 intent 글자색을 덮는다)
      {
        variant: ["fill", "outline", "ghost"],
        className: "disabled:text-text-disabled",
      },
    ],
    defaultVariants: {
      variant: "fill",
      intent: "primary",
      emphasis: "strong",
      size: "m",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }

function Button({
  className,
  variant,
  intent,
  emphasis,
  size,
  leftIcon,
  rightIcon,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, intent, emphasis, size }), className)}
      {...props}
    >
      {leftIcon}
      {children != null && <span className="px-0.5">{children}</span>}
      {rightIcon}
    </button>
  )
}

export { Button, buttonVariants }
