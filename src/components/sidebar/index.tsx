import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Blocks,
  Home,
  LogOut,
  PanelBottom,
  ShieldCheck,
  User,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              className="flex w-9 h-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
              href="#"
            >
              <User className="h-4 w-4" />
              <span className="sr-only">Avatar</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                  href="/"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                  href="/leaks"
                >
                  <ShieldCheck className="h-5 w-5" />
                  <span className="sr-only">Vazamento de dados</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Vazamento de dados</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                  href="/blockchain"
                >
                  <Blocks className="h-5 w-5" />
                  <span className="sr-only">Blockchain</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Blockchain</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  <LogOut className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="h-5 w-5" />
                <span className="sr-only">Abrir/fechar menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                  href="#"
                  prefetch={false}
                >
                  <User className="h-4 w-4" />
                  <span className="sr-only">Avatar</span>
                </Link>

                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Início
                </Link>
                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/leaks"
                  prefetch={false}
                >
                  <ShieldCheck className="h-5 w-5 transition-all" />
                  Vazamento de dados
                </Link>
                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/blockchain"
                  prefetch={false}
                >
                  <Blocks className="h-5 w-5 transition-all" />
                  Blockchain
                </Link>
              </nav>
            </SheetContent>
            <h2>Menu</h2>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
