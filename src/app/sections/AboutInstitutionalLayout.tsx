import type { ReactNode } from "react";
import { NavLink } from "react-router";

export const aboutItemAliases: Record<string, string> = {
  "politicas-estatutos-y-codigos": "politicas",
  "propuesta-de-negocio": "propuesta-negocio",
  "vision-y-mision": "vision-mision",
};

const aboutNavigationItems = [
  { id: "nosotros", href: "/acerca-de/nosotros", label: "Nosotros" },
  {
    id: "vision-mision",
    href: "/acerca-de/vision-y-mision",
    label: "Visión y Misión",
  },
  {
    id: "propuesta-negocio",
    href: "/acerca-de/propuesta-de-negocio",
    label: "Propuesta de negocio",
  },
  { id: "asambleas", href: "/acerca-de/asambleas", label: "Asambleas" },
  {
    id: "politicas",
    href: "/acerca-de/politicas-estatutos-y-codigos",
    label: "Políticas, Estatutos y Códigos",
  },
  { id: "rte", href: "/acerca-de/rte", label: "RTE" },
];

export function getCanonicalAboutItemId(itemId?: string) {
  if (!itemId) {
    return undefined;
  }

  return aboutItemAliases[itemId] ?? itemId;
}

type AboutInstitutionalLayoutProps = {
  activeItemId?: string;
  children: ReactNode;
};

export function AboutInstitutionalLayout({
  activeItemId,
  children,
}: AboutInstitutionalLayoutProps) {
  const canonicalActiveItemId = getCanonicalAboutItemId(activeItemId);

  return (
    <section
      id={canonicalActiveItemId ?? "acerca-de"}
      className="scroll-mt-24 bg-muted/45 py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-label="Secciones institucionales"
              className="rounded-lg bg-primary p-4 text-primary-foreground shadow-xl"
            >
              <ul className="grid gap-1">
                {aboutNavigationItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => {
                        const active = canonicalActiveItemId === item.id || isActive;

                        return `block rounded-md px-4 py-4 text-base font-bold text-white transition-colors hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                          active ? "bg-white/12 shadow-inner" : ""
                        }`;
                      }}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
