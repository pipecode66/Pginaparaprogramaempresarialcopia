import { Link } from "react-router";

export type PageIntroBreadcrumb = {
  href?: string;
  label: string;
};

export type PageIntroData = {
  breadcrumbs: PageIntroBreadcrumb[];
  headline: string;
  title: string;
};

type PageIntroProps = PageIntroData;

export function PageIntro({ breadcrumbs, headline, title }: PageIntroProps) {
  return (
    <header className="overflow-hidden">
      <div className="relative bg-zinc-700 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-primary/25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-4 hidden h-40 w-96 rotate-12 rounded-[2rem] border-[10px] border-white/15 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-40 -bottom-24 hidden size-56 rotate-45 rounded-[2rem] border-[12px] border-white/10 lg:block"
        />

        <div className="container relative mx-auto px-4 py-12 md:py-16">
          <h1 className="font-display text-4xl font-bold tracking-normal md:text-5xl">
            {title}
          </h1>

          <nav
            aria-label={`Ruta de navegación de ${title}`}
            className="mt-6 text-sm font-bold uppercase tracking-wide text-white"
          >
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((item, index) => {
                const isCurrent = index === breadcrumbs.length - 1;

                return (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {item.href && !isCurrent ? (
                      <Link to={item.href} className="transition-colors hover:text-accent">
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current={isCurrent ? "page" : undefined}>
                        {item.label}
                      </span>
                    )}

                    {!isCurrent ? (
                      <span aria-hidden="true" className="text-white/90">
                        /
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-primary px-4 py-8 text-center text-primary-foreground md:py-10">
        <h2 className="mx-auto max-w-5xl font-display text-2xl font-bold leading-tight text-white md:text-4xl">
          {headline}
        </h2>
      </div>
    </header>
  );
}
