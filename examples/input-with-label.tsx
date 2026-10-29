import { Input } from "@/registry/daggle/ui/input"
import { Label } from "@/registry/daggle/ui/label"

export default function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email">이메일</Label>
      <Input id="email" type="email" placeholder="name@daggle.io" />
    </div>
  )
}
