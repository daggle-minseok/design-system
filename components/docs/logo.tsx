import Link from "next/link"

export function Logo() {
  return (
    <Link href="/docs" className="flex items-center gap-2">
      <span className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md text-[13px] font-bold">
        D
      </span>
      <span className="text-body-2 font-semibold">Daggle UI</span>
    </Link>
  )
}
