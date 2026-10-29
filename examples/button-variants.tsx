import { Button } from "@/registry/daggle/ui/button"

const intents = ["primary", "secondary", "danger"] as const
const variants = ["fill", "outline", "ghost"] as const

export default function ButtonVariants() {
  return (
    <div className="grid grid-cols-[auto_repeat(3,auto)] items-center gap-x-6 gap-y-3">
      <span />
      {intents.map((intent) => (
        <span key={intent} className="text-description-regular-2 text-text-tertiary">
          {intent}
        </span>
      ))}
      {variants.flatMap((variant) =>
        (["strong", "weak"] as const).map((emphasis) => (
          <div key={`${variant}-${emphasis}`} className="contents">
            <span className="text-description-regular-2 text-text-tertiary">
              {variant} · {emphasis}
            </span>
            {intents.map((intent) => (
              <Button key={intent} variant={variant} intent={intent} emphasis={emphasis}>
                버튼
              </Button>
            ))}
          </div>
        ))
      )}
    </div>
  )
}
