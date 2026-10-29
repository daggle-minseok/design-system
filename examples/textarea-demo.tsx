import { Label } from "@/registry/daggle/ui/label"
import { Textarea } from "@/registry/daggle/ui/textarea"

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="memo">메모</Label>
      <Textarea id="memo" placeholder="내용을 입력하세요" />
    </div>
  )
}
