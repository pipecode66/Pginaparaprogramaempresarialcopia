import { ArrowUpRight } from "lucide-react";
import { bannerItems } from "../content/site-content";
import { Button } from "../components/ui/button";

export function BannerShowcaseSection() {
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Destacados
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Banners con escenas humanas para una experiencia mas cercana
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ilustraciones locales con personas ficticias para dar contexto visual
            al ahorro, la asesoria y la vinculacion.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {bannerItems.map((banner) => (
            <article
              key={banner.title}
              className="group overflow-hidden rounded-[28px] border border-border/80 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-bold">{banner.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{banner.description}</p>
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between border border-border/80 bg-muted/40 text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <a href={banner.href}>
                    {banner.cta}
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
