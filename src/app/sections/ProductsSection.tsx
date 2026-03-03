import { ArrowUpRight } from "lucide-react";
import { productItems } from "../content/site-content";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function ProductsSection() {
  return (
    <section id="productos" className="scroll-mt-24 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Portafolio
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Productos para cada etapa de tus objetivos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Base visual inspirada en la referencia, optimizada para una
            experiencia corporativa de Caja Union con enfoque en conversion.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productItems.map((product) => {
            const Icon = product.icon;

            return (
              <Card
                key={product.title}
                className="border-border/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="pb-0">
                  <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-3">
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between border border-border/80 bg-muted/40 text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <a href="#contacto">
                      {product.cta}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
