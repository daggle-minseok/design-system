import { Button } from "@/registry/daggle/ui/button"

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">Xs</Button>
      <Button size="s">S</Button>
      <Button size="m">M</Button>
      <Button size="l">L</Button>
    </div>
  )
}
