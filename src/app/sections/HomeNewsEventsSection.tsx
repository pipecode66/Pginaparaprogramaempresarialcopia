import { CalendarDays, ChevronRight, Newspaper } from "lucide-react";
import { Link } from "react-router";
import { newsItems } from "../content/site-content";

const featuredNews = newsItems[0];
const eventItems = newsItems.slice(1);

export function HomeNewsEventsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-18 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-4 h-full w-80 opacity-10"
      >
        <div className="absolute left-8 top-4 size-36 rotate-45 rounded-[32px] border-[12px] border-primary" />
        <div className="absolute left-32 top-56 size-44 rotate-45 rounded-[34px] border-[12px] border-accent" />
        <div className="absolute -left-10 bottom-12 size-56 rotate-45 rounded-[40px] border-[12px] border-primary" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.8fr]">
          <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                Noticias
              </h2>
              <Link
                to="/noticias"
                className="inline-flex items-center gap-2 text-base font-semibold text-amber-500 transition-colors hover:text-amber-400"
              >
                <ChevronRight className="size-5" />
                Ver mas
              </Link>
            </div>

            <article className="overflow-hidden rounded-lg border border-border/80 bg-background shadow-[0_22px_58px_rgba(7,52,29,0.16)]">
              <div className="flex aspect-[16/9] min-h-[320px] items-center justify-center bg-[linear-gradient(145deg,rgba(0,114,48,0.12),rgba(89,193,60,0.06))]">
                <div className="flex size-28 items-center justify-center rounded-full border border-primary/15 bg-background/80 text-primary shadow-inner">
                  <Newspaper className="size-12" />
                </div>
              </div>
              <div className="bg-amber-400 px-6 py-5 text-primary-foreground">
                <h3 className="text-2xl font-bold uppercase leading-tight text-white">
                  {featuredNews.title}
                </h3>
              </div>
            </article>
          </div>

          <aside>
            <h2 className="mb-8 font-display text-3xl font-bold text-primary md:text-4xl">
              Eventos
            </h2>

            <div className="space-y-6">
              {eventItems.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-lg border border-border/80 bg-background p-4 shadow-[0_16px_38px_rgba(7,52,29,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(7,52,29,0.18)] sm:grid-cols-[8rem_1fr]"
                >
                  <div className="flex aspect-square min-h-28 items-center justify-center rounded-lg bg-primary/8 text-primary shadow-inner">
                    <Newspaper className="size-9" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="size-4 text-primary/60" />
                      {item.date}
                    </p>
                    <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
