import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "../content/site-content";
import { BrandLogo } from "./BrandLogo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
          {navItems.map((item) => {
            if (!item.children?.length) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    {item.label}
                    <ChevronDown className="size-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[280px] rounded-2xl border-border/80 p-2"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem
                      key={child.href}
                      asChild
                      className="rounded-xl px-3 py-3 text-center"
                    >
                      <a
                        href={child.href}
                        target={child.external ? "_blank" : undefined}
                        rel={child.external ? "noreferrer" : undefined}
                        className="block w-full"
                      >
                        <span className="block font-semibold text-foreground">
                          {child.label}
                        </span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
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
          <SheetContent side="right" className="w-[86%] sm:max-w-sm">
            <SheetHeader className="border-b border-border pb-5">
              <SheetTitle>
                <BrandLogo compact />
              </SheetTitle>
            </SheetHeader>

            <Accordion type="multiple" className="px-4" aria-label="Menu movil">
              {navItems.map((item) => {
                if (!item.children?.length) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <AccordionItem key={item.label} value={item.label}>
                    <AccordionTrigger className="px-3 text-sm font-semibold text-foreground hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-3">
                      <div className="flex flex-col gap-2">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noreferrer" : undefined}
                            onClick={() => setOpen(false)}
                            className="rounded-md px-3 py-2 text-center text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

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
