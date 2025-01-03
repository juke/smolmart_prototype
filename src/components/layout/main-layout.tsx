import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-lg">SmolMart</span>
            </Link>
            <nav className="hidden md:flex items-center">
              <Link to="/gallery" className="px-3 py-2 text-sm">Gallery</Link>
              <Link to="/artists" className="px-3 py-2 text-sm">Artists</Link>
              <Link to="/about" className="px-3 py-2 text-sm">About</Link>
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[160px]">
                <DropdownMenuItem asChild>
                  <Link to="/gallery">Gallery</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/artists">Artists</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>
      <main className="pt-14 h-[calc(100vh] overflow-x-hidden">
        <div className="container mx-auto max-w-[1400px] h-full px-4 overflow-visible pb-0">
          {children}
        </div>
      </main>
    </div>
  )
} 