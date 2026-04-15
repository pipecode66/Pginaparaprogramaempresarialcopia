import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import { convenioItems } from "../content/site-content";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function ConveniosSection() {
  return (
    <section id="convenios" className="scroll-mt-24 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Convenios
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Beneficios aliados para entretenimiento, educacion y actividades de
            bienestar
          </h2>
          <p className="mt-4 text-muted-foreground">
            La seccion reune convenios visibles del ecosistema publico de Caja Union
            para que el asociado identifique rapido el beneficio y el canal de acceso.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {convenioItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="pb-2">
                  <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>{item.summary}</p>
                  <div className="rounded-2xl border border-border/70 bg-muted/45 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Beneficio visible
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {item.benefit}
                    </p>
                  </div>
                  <p>{item.access}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between border border-border/80 bg-muted/50 text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Ver referencia oficial
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          id="gestores-convenios"
          className="scroll-mt-28 mt-10 rounded-[28px] border border-dashed border-primary/35 bg-muted/35 p-8 md:p-10"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <LayoutTemplate className="size-5" />
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Gestores de Convenios
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Espacio reservado para integrar el software de gestores cuando llegue el
            codigo en PHP
          </h3>
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
