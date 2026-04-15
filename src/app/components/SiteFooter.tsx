import type { NavItem } from "../content/site-content";
import { serviceAccessCards } from "../content/site-content";
import { BrandLogo } from "./BrandLogo";

type SiteFooterProps = {
  navItems: NavItem[];
};

export function SiteFooter({ navItems }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <a href="#inicio" aria-label="Caja Union inicio">
              <BrandLogo />
            </a>
            <p className="max-w-sm text-sm text-muted-foreground">
              Cooperativa de ahorro y credito orientada al bienestar financiero
              de sus asociados con enfoque humano, responsable y sostenible.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-foreground">Navegacion</h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-foreground">Accesos utiles</h3>
            <ul className="space-y-3 text-sm">
              {serviceAccessCards.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.primaryCta.href}
                    target={item.primaryCta.external ? "_blank" : undefined}
                    rel={item.primaryCta.external ? "noreferrer" : undefined}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://v0-caja-union-pie.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Union Empresarial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Correo: contacto@cajaunion.coop</li>
              <li>Telefono: +57 3125038082</li>
              <li>Sede principal: Av. 1 #11-66, Cucuta, Norte de Santander</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            {currentYear} Caja Union. Zivra Studio - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
