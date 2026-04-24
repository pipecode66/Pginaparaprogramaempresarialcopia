import { ArrowUpRight } from "lucide-react";
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
      </div>
    </section>
  );
}
