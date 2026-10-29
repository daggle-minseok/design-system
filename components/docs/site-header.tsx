import { GITHUB_URL } from "@/lib/docs"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/docs/github-icon"
import { Logo } from "@/components/docs/logo"
import { MainNav } from "@/components/docs/main-nav"
import { MobileNav } from "@/components/docs/mobile-nav"
import { ThemeToggle } from "@/components/docs/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-6 px-4 md:px-8">
        <MobileNav />
        <Logo />
        <MainNav />
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
