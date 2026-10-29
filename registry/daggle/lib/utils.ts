// scripts/build-tokens.mjs 가 생성. 직접 수정하지 말고 tokens/tokens.mjs 를 고친다.
import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// 텍스트 스타일(text-body-regular-4 등)을 글자 크기로 등록해 글자색(text-text-strong)과 함께 남도록 하고,
// radius(rounded-4 등)를 등록해 서로 덮어쓰도록 한다
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-1",
            "display-2",
            "display-3",
            "display-4",
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "title-1",
            "title-2",
            "title-3",
            "title-4",
            "title-5",
            "title-6",
            "subtitle-1",
            "subtitle-2",
            "subtitle-3",
            "subtitle-4",
            "subtitle-5",
            "subtitle-6",
            "body-semibold-1",
            "body-semibold-2",
            "body-semibold-3",
            "body-semibold-4",
            "body-semibold-5",
            "body-semibold-6",
            "body-regular-1",
            "body-regular-2",
            "body-regular-3",
            "body-regular-4",
            "body-regular-5",
            "body-regular-6",
            "label-semibold-1",
            "label-semibold-2",
            "label-semibold-3",
            "label-semibold-4",
            "label-semibold-5",
            "label-semibold-6",
            "label-regular-1",
            "label-regular-2",
            "label-regular-3",
            "label-regular-4",
            "label-regular-5",
            "label-regular-6",
            "description-semibold-1",
            "description-regular-1",
            "description-regular-2",
            "caption-1",
          ],
        },
      ],
      rounded: [{ rounded: ["0", "4", "8", "12", "16"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
