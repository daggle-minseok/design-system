// 문서 사이트 예시 목록. lib/docs.ts 의 example 이름과 파일명이 같아야 한다.
import type { ComponentType } from "react"

import AlertDemo from "./alert-demo"
import AlertStatus from "./alert-status"
import BadgeDemo from "./badge-demo"
import BadgeStatus from "./badge-status"
import ButtonDemo from "./button-demo"
import ButtonSizes from "./button-sizes"
import ButtonVariants from "./button-variants"
import ButtonWithIcon from "./button-with-icon"
import CardDemo from "./card-demo"
import CardStats from "./card-stats"
import CheckboxDemo from "./checkbox-demo"
import CheckboxDisabled from "./checkbox-disabled"
import InputDemo from "./input-demo"
import InputDisabled from "./input-disabled"
import InputInvalid from "./input-invalid"
import InputWithLabel from "./input-with-label"
import LabelDemo from "./label-demo"
import TabsDemo from "./tabs-demo"
import TextareaDemo from "./textarea-demo"

export const examples: Record<string, ComponentType> = {
  "alert-demo": AlertDemo,
  "alert-status": AlertStatus,
  "badge-demo": BadgeDemo,
  "badge-status": BadgeStatus,
  "button-demo": ButtonDemo,
  "button-sizes": ButtonSizes,
  "button-variants": ButtonVariants,
  "button-with-icon": ButtonWithIcon,
  "card-demo": CardDemo,
  "card-stats": CardStats,
  "checkbox-demo": CheckboxDemo,
  "checkbox-disabled": CheckboxDisabled,
  "input-demo": InputDemo,
  "input-disabled": InputDisabled,
  "input-invalid": InputInvalid,
  "input-with-label": InputWithLabel,
  "label-demo": LabelDemo,
  "tabs-demo": TabsDemo,
  "textarea-demo": TextareaDemo,
}
