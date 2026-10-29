import { Checkbox } from "@/registry/daggle/ui/checkbox"
import { Label } from "@/registry/daggle/ui/label"

export default function CheckboxDisabled() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled" disabled defaultChecked />
      <Label htmlFor="disabled">변경할 수 없음</Label>
    </div>
  )
}
