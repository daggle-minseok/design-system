import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/daggle/ui/alert"

export default function AlertStatus() {
  return (
    <div className="grid w-full max-w-md gap-3">
      <Alert variant="info">
        <Info />
        <AlertTitle>안내</AlertTitle>
        <AlertDescription>점검이 예정되어 있습니다.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheck />
        <AlertTitle>저장 완료</AlertTitle>
        <AlertDescription>변경사항이 저장되었습니다.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>확인 필요</AlertTitle>
        <AlertDescription>입력하지 않은 필수 항목이 있습니다.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>요청을 처리하지 못했습니다.</AlertDescription>
      </Alert>
    </div>
  )
}
