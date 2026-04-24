import { CreditCard, PiggyBank, Sparkles, WalletCards } from "lucide-react";
import { Link } from "react-router";
import { AnimatedObtenHeading } from "../components/AnimatedObtenHeading";

const overviewItems = [
  {
    title: "Productos de ahorro",
    description: "Conozca nuestro portafolio que le ayudara a ahorrar mas.",
    href: "/ahorro",
    icon: PiggyBank,
  },
  {
    title: "Productos de credito",
    description: "Disenamos estos productos especialmente para usted.",
    href: "/credito",
    icon: WalletCards,
  },
  {
    title: "Tarjeta debito / credito",
    description: "La tarjeta adecuada para usted.",
    icon: CreditCard,
  },
];

export function HomeProductSplitSection() {
  return (
    <section className="bg-background py-18 md:py-24">
      <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          {overviewItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="flex size-24 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-inner sm:size-28">
                  <Icon className="size-10 transition-transform group-hover:scale-110" />
                </span>
                <span>
                  <span className="block text-2xl font-bold uppercase leading-tight text-primary">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-base text-muted-foreground md:text-lg">
                    {item.description}
                  </span>
                </span>
              </>
            );

            const itemClassName =
              "group grid gap-5 rounded-lg border border-border/80 bg-background p-5 shadow-[0_18px_42px_rgba(7,52,29,0.12)] transition-all hover:border-primary/25 hover:shadow-[0_24px_54px_rgba(7,52,29,0.18)] sm:grid-cols-[7rem_1fr] sm:items-center";

            if (!item.href) {
              return (
                <article key={item.title} className={itemClassName}>
                  {content}
                </article>
              );
            }

            return (
              <Link
                key={item.title}
                to={item.href}
                className={`${itemClassName} hover:-translate-y-1`}
              >
                {content}
              </Link>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-lg border border-border/80 bg-background p-8 text-center shadow-[0_22px_58px_rgba(7,52,29,0.18)] md:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(89,193,60,0.16),rgba(255,255,255,0)_48%)]" />
          <div className="absolute -right-24 -top-24 size-56 rounded-full bg-accent/20" />
          <div className="absolute -bottom-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/8" />

          <div className="relative">
            <AnimatedObtenHeading />

            <div className="mx-auto mt-8 flex aspect-[4/3] max-w-sm items-center justify-center rounded-lg border border-primary/10 bg-primary/5 shadow-inner">
              <div className="relative flex size-48 items-center justify-center rounded-full bg-accent/20 text-primary md:size-56">
                <div className="absolute inset-6 rounded-full border border-primary/15" />
                <Sparkles className="absolute right-7 top-8 size-7 text-amber-400" />
                <CreditCard className="size-24 md:size-28" />
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-md text-base leading-7 text-muted-foreground">
              Encuentra rapidamente las opciones de ahorro, credito y medios de pago
              que Caja Union tiene disponibles para acompanarte.
            </p>

            <Link
              to="/productos"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ver portafolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
