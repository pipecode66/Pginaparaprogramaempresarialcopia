import { Mail } from "lucide-react";
import { Link } from "react-router";
import { BrandLogo } from "../components/BrandLogo";
import { AsambleasContent } from "./AsambleasSection";
import { PoliticasContent } from "./PoliticasSection";
import { PropuestaNegocioContent } from "./PropuestaNegocioSection";
import { RteContent } from "./RteSection";
import { VisionMisionContent } from "./VisionMisionSection";

const internalNavItems = [
  { href: "/acerca-de/nosotros", label: "Nosotros" },
  { href: "/acerca-de/vision-y-mision", label: "Visión y Misión" },
  { href: "/acerca-de/propuesta-de-negocio", label: "Propuesta de negocio" },
  { href: "/acerca-de/asambleas", label: "Asambleas" },
  {
    href: "/acerca-de/politicas-estatutos-y-codigos",
    label: "Políticas, Estatutos y Códigos",
  },
  { href: "/acerca-de/rte", label: "RTE" },
];

function PeopleVisualCard() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#55c83a] shadow-[0_24px_60px_rgba(0,122,61,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_50%_45%,transparent_0,transparent_33%,rgba(255,255,255,0.12)_33%,rgba(255,255,255,0.12)_34%,transparent_35%),radial-gradient(circle_at_50%_45%,transparent_0,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_51%,transparent_52%)]" />
      <BrandLogo className="absolute left-1/2 top-8 z-10 w-44 -translate-x-1/2 brightness-0 invert" />
      <img
        src="/bannercajaunion.png"
        alt="Personas asociadas a Caja Unión en un ambiente cercano"
        className="relative h-[420px] w-full object-cover object-[64%_18%] md:h-[500px]"
      />
    </div>
  );
}

export function NosotrosSection() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-muted/45 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-label="Contenido de Nosotros"
              className="rounded-lg bg-primary p-4 text-primary-foreground shadow-xl"
            >
              <ul className="grid gap-1">
                {internalNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="block rounded-md px-4 py-4 text-base font-bold text-white transition-colors hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-12">
            <section
              id="nosotros-presentacion"
              className="scroll-mt-28 rounded-lg border border-border bg-background p-6 shadow-sm md:p-8"
            >
              <div className="grid items-center gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                <PeopleVisualCard />

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                    Cooperativa de ahorro y crédito
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
                    Estamos trabajando para darte más beneficios.
                  </h2>
                  <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                    ¡Bienvenido a Caja Unión! Aquí eres más que un cliente, eres
                    parte de nuestra familia financiera. Ofrecemos productos y
                    servicios diseñados para tu bienestar, desde cuentas de ahorro
                    hasta líneas de crédito flexibles. Además, proporcionamos
                    programas educativos para fortalecer tu conocimiento financiero.
                    Únete a nosotros y descubre una cooperativa comprometida con tu
                    éxito y el desarrollo de la comunidad.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="vision-mision"
              className="scroll-mt-28"
            >
              <VisionMisionContent />
            </section>

            <section
              id="propuesta-negocio"
              className="scroll-mt-28"
            >
              <PropuestaNegocioContent />
            </section>

            <section id="asambleas" className="scroll-mt-28">
              <AsambleasContent />
            </section>

            <section id="politicas" className="scroll-mt-28">
              <PoliticasContent />
            </section>

            <section id="rte" className="scroll-mt-28">
              <RteContent />
            </section>

            <section className="rounded-lg border border-accent/30 bg-accent/10 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                    Canales de relación
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">
                    Atención presencial, correo electrónico, redes sociales y eventos
                  </h3>
                </div>
                <Mail aria-hidden="true" className="size-12 shrink-0 text-accent" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
