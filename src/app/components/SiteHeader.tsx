import { Menu } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "../content/site-content";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#inicio" aria-label="Ir al inicio de Caja Union">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contacto">Asociate</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menu movil"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[82%] sm:max-w-xs">
            <SheetHeader className="border-b border-border pb-5">
              <SheetTitle>
                <BrandLogo compact />
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-2 px-4" aria-label="Menu movil">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="px-4 pb-6">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#contacto" onClick={() => setOpen(false)}>
                  Asociate
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
