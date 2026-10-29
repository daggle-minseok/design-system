import { Info } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/daggle/ui/alert"

export default function AlertDemo() {
  return (
    <Alert className="max-w-md">
      <Info />
      <AlertTitle>안내</AlertTitle>
      <AlertDescription>새 버전이 배포되었습니다. 새로고침해 주세요.</AlertDescription>
    </Alert>
  )
}
