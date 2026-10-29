import { Button } from "@/registry/daggle/ui/button"

export default function ButtonDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>Fill</Button>
      <Button disabled emphasis="weak">
        Fill weak
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
    </div>
  )
}
