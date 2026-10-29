import { Checkbox } from "@/registry/daggle/ui/checkbox"
import { Label } from "@/registry/daggle/ui/label"

export default function LabelDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="label-terms" />
      <Label htmlFor="label-terms">이용약관에 동의합니다</Label>
    </div>
  )
}
