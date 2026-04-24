import { LayoutTemplate } from "lucide-react";

export function GestoresConveniosSection() {
  return (
    <section id="gestores-convenios" className="scroll-mt-24 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-[28px] border border-dashed border-primary/35 bg-muted/35 p-8 md:p-10">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <LayoutTemplate className="size-5" />
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Gestores de Convenios
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Espacio reservado para integrar el software de gestores cuando llegue el
            codigo en PHP
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
            Por ahora se deja una pantalla placeholder limpia para no prometer una
            funcionalidad que aun no ha sido entregada. Cuando recibamos el modulo,
            aqui podremos conectar un redireccionamiento o una integracion completa.
          </p>
          <div className="mt-6 rounded-[24px] border border-border/70 bg-background/85 px-6 py-12 text-center text-muted-foreground">
            Proximamente: modulo de Gestores de Convenios.
          </div>
        </div>
      </div>
    </section>
  );
}
