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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/daggle/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="password">비밀번호</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>계정</CardTitle>
            <CardDescription>프로필 정보를 수정합니다.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Label htmlFor="tabs-name">이름</Label>
            <Input id="tabs-name" defaultValue="홍길동" />
          </CardContent>
          <CardFooter>
            <Button>저장</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>비밀번호</CardTitle>
            <CardDescription>변경 후 다시 로그인해야 합니다.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Label htmlFor="tabs-current">현재 비밀번호</Label>
            <Input id="tabs-current" type="password" />
          </CardContent>
          <CardFooter>
            <Button>변경</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
