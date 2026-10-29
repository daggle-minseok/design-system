import { Badge } from "@/registry/daggle/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/daggle/ui/card"

export default function CardStats() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>이번 달 주문</CardDescription>
        <CardTitle className="text-heading-2">1,284건</CardTitle>
        <CardAction>
          <Badge variant="success">+12.5%</Badge>
        </CardAction>
      </CardHeader>
    </Card>
  )
}
