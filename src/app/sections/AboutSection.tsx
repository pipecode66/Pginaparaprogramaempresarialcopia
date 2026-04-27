import { ArrowUpRight, Check } from "lucide-react";
import {
  aboutHighlights,
  aboutItems,
} from "../content/site-content";
import {
  AboutInstitutionalLayout,
  getCanonicalAboutItemId,
} from "./AboutInstitutionalLayout";
import { AsambleasContent } from "./AsambleasSection";
import { NosotrosContent } from "./NosotrosSection";
import { PoliticasContent } from "./PoliticasSection";
import { PropuestaNegocioContent } from "./PropuestaNegocioSection";
import { RteContent } from "./RteSection";
import { VisionMisionContent } from "./VisionMisionSection";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

type AboutSectionProps = {
  itemId?: string;
};

export function AboutSection({ itemId }: AboutSectionProps) {
  const canonicalItemId = getCanonicalAboutItemId(itemId);

  if (canonicalItemId === "nosotros") {
    return (
      <AboutInstitutionalLayout activeItemId={canonicalItemId}>
        <NosotrosContent />
      </AboutInstitutionalLayout>
    );
  }

  if (canonicalItemId === "vision-mision") {
    return (
      <AboutInstitutionalLayout activeItemId={canonicalItemId}>
        <VisionMisionContent />
      </AboutInstitutionalLayout>
    );
  }

  if (canonicalItemId === "propuesta-negocio") {
    return (
      <AboutInstitutionalLayout activeItemId={canonicalItemId}>
        <PropuestaNegocioContent />
      </AboutInstitutionalLayout>
    );
  }

  if (canonicalItemId === "asambleas") {
    return (
      <AboutInstitutionalLayout activeItemId={canonicalItemId}>
        <AsambleasContent />
      </AboutInstitutionalLayout>
    );
  }

  if (canonicalItemId === "politicas") {
    return (
      <AboutInstitutionalLayout activeItemId={canonicalItemId}>
        <PoliticasContent />
      </AboutInstitutionalLayout>
    );
  }

  if (canonicalItemId === "rte") {
    return (
      <AboutInstitutionalLayout activeItemId={canonicalItemId}>
        <RteContent />
      </AboutInstitutionalLayout>
    );
  }

  const selectedItem = canonicalItemId
    ? aboutItems.find((item) => item.id === canonicalItemId)
    : undefined;
  const visibleItems = selectedItem ? [selectedItem] : aboutItems;

  return (
    <AboutInstitutionalLayout activeItemId={canonicalItemId}>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Acerca de
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
          {selectedItem
            ? selectedItem.title
            : "Un espacio para explicar quienes somos, como trabajamos y que respaldo institucional tiene Caja Union"}
        </h2>
        <p className="mt-4 text-muted-foreground">
          {selectedItem
            ? selectedItem.description
            : "Este bloque consolida el apartado institucional solicitado con foco en claridad comercial y lectura rapida para asociados, empresas y visitantes."}
        </p>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] bg-primary p-8 text-primary-foreground shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
            Caja Union
          </p>
          <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
            Cooperativa de ahorro y credito con narrativa institucional mas solida,
            ordenada y facil de navegar.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/85 md:text-base">
            La nueva seccion de acerca de organiza la informacion corporativa en
            bloques claros para que el visitante encuentre rapido el enfoque de la
            cooperativa, su direccion estrategica, los documentos institucionales y
            las referencias publicas de cumplimiento.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid gap-4 ${selectedItem ? "" : "md:grid-cols-2"}`}>
          {visibleItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                id={item.id}
                className="scroll-mt-28 border-border/80 bg-background shadow-sm"
              >
                <CardHeader className="pb-2">
                  <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>{item.description}</p>

                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {item.cta ? (
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-2 w-full justify-between border border-border/80 bg-muted/50 text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      <a
                        href={item.cta.href}
                        target={item.cta.external ? "_blank" : undefined}
                        rel={item.cta.external ? "noreferrer" : undefined}
                      >
                        {item.cta.label}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AboutInstitutionalLayout>
  );
}
