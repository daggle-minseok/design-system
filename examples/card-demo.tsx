import { Button } from "@/registry/daggle/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/daggle/ui/card"
import { Input } from "@/registry/daggle/ui/input"
import { Label } from "@/registry/daggle/ui/label"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>프로젝트 생성</CardTitle>
        <CardDescription>새 클라이언트 프로젝트를 등록합니다.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Label htmlFor="project">프로젝트명</Label>
        <Input id="project" placeholder="예: 셀포레스트" />
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">취소</Button>
        <Button>생성</Button>
      </CardFooter>
    </Card>
  )
}
