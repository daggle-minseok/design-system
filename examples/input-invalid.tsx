import { Input } from "@/registry/daggle/ui/input"
import { Label } from "@/registry/daggle/ui/label"

export default function InputInvalid() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="phone">휴대폰 번호</Label>
      <Input id="phone" aria-invalid defaultValue="010-12" />
      <p className="text-caption text-destructive">올바른 번호를 입력해 주세요.</p>
    </div>
  )
}
