import { Download, Loader2 } from "lucide-react"

import { Button } from "@/registry/daggle/ui/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <Download /> 다운로드
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" /> 처리 중
      </Button>
    </div>
  )
}
