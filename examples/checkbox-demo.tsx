import { Checkbox } from "@/registry/daggle/ui/checkbox"
import { Label } from "@/registry/daggle/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" defaultChecked />
        <Label htmlFor="terms">이용약관 동의 (필수)</Label>
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="marketing" />
        <div className="grid gap-1">
          <Label htmlFor="marketing">마케팅 수신 동의 (선택)</Label>
          <p className="text-caption text-muted-foreground">
            이벤트와 혜택 소식을 이메일로 받습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
