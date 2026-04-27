import { BrandLogo } from "../components/BrandLogo";
import { AboutInstitutionalLayout } from "./AboutInstitutionalLayout";

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

export function NosotrosContent() {
  return (
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
            ¡Bienvenido a Caja Unión! Aquí eres más que un cliente, eres parte de
            nuestra familia financiera. Ofrecemos productos y servicios diseñados
            para tu bienestar, desde cuentas de ahorro hasta líneas de crédito
            flexibles. Además, proporcionamos programas educativos para fortalecer
            tu conocimiento financiero. Únete a nosotros y descubre una
            cooperativa comprometida con tu éxito y el desarrollo de la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}

export function NosotrosSection() {
  return (
    <AboutInstitutionalLayout activeItemId="nosotros">
      <NosotrosContent />
    </AboutInstitutionalLayout>
  );
}
