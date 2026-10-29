// 문서 사이트 예시 목록. lib/docs.ts 의 example 이름과 파일명이 같아야 한다.
import type { ComponentType } from "react"

import ButtonDemo from "./button-demo"
import ButtonDisabled from "./button-disabled"
import ButtonSizes from "./button-sizes"
import ButtonVariants from "./button-variants"
import ButtonWithIcon from "./button-with-icon"

export const examples: Record<string, ComponentType> = {
  "button-demo": ButtonDemo,
  "button-disabled": ButtonDisabled,
  "button-sizes": ButtonSizes,
  "button-variants": ButtonVariants,
  "button-with-icon": ButtonWithIcon,
}
