import { Download, Plus } from "lucide-react"

import { Button } from "@/registry/daggle/ui/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button leftIcon={<Plus />}>추가</Button>
      <Button variant="outline" intent="secondary" rightIcon={<Download />}>
        다운로드
      </Button>
      <Button variant="ghost" size="s" leftIcon={<Plus />}>
        항목 추가
      </Button>
    </div>
  )
}
