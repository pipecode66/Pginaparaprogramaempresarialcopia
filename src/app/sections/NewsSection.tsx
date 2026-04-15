import { ArrowUpRight, Newspaper } from "lucide-react";
import { newsItems } from "../content/site-content";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function NewsSection() {
  return (
    <section id="noticias" className="scroll-mt-24 bg-muted/45 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Noticias
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Bloque informativo para visibilizar actividad institucional, eventos y
              contenidos de interes para asociados
            </h2>
            <p className="mt-4 text-muted-foreground">
              La seccion toma como referencia el historico visible del portal publico
              de Caja Union y deja el home listo para crecer con nuevas publicaciones.
            </p>
          </div>

          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contacto">
              Compartir una novedad
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {newsItems.map((item) => (
            <Card
              key={item.title}
              className="border-border/80 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader className="pb-2">
                <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Newspaper className="size-5" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.category}
                </p>
                <CardTitle className="text-xl font-bold leading-snug">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{item.date}</p>
                <p>{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
