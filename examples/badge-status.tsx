import { Badge } from "@/registry/daggle/ui/badge"

export default function BadgeStatus() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="info">진행중</Badge>
      <Badge variant="success">완료</Badge>
      <Badge variant="warning">보류</Badge>
      <Badge variant="destructive">실패</Badge>
    </div>
  )
}
