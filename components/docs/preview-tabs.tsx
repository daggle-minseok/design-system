"use client"

import * as React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const lineTrigger =
  "text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-foreground dark:data-[state=active]:border-b-foreground h-10 flex-none rounded-none border-0 border-b-2 border-b-transparent bg-transparent px-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent"

export function PreviewTabs({ preview, code }: { preview: React.ReactNode; code: React.ReactNode }) {
  return (
    <Tabs defaultValue="preview" className="gap-4">
      <TabsList className="h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0">
        <TabsTrigger value="preview" className={lineTrigger}>
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className={lineTrigger}>
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="preview-grid flex min-h-[320px] w-full items-center justify-center rounded-lg border p-6 sm:p-10">
          {preview}
        </div>
      </TabsContent>
      <TabsContent value="code">{code}</TabsContent>
    </Tabs>
  )
}
