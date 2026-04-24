import { ArrowUpRight, CreditCard, PiggyBank, QrCode, WalletCards } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

const savingsCards = [
  {
    title: "Productos de ahorro",
    description: "Conozca nuestro portafolio que le ayudara a ahorrar mas.",
    href: "/productos/ahorro-inversion",
    imagePosition: "object-[42%_20%]",
    icon: PiggyBank,
  },
  {
    title: "Productos de credito",
    description: "Disenamos estos productos especialmente para usted.",
    href: "/productos/creditos",
    imagePosition: "object-[72%_20%]",
    icon: WalletCards,
  },
];

export function HomeSavingsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-18 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-full w-80 opacity-10"
      >
        <div className="absolute left-6 top-12 size-40 rotate-45 rounded-[32px] border-[12px] border-primary" />
        <div className="absolute left-28 top-48 size-48 rotate-45 rounded-[32px] border-[12px] border-accent" />
        <div className="absolute -left-8 bottom-6 size-56 rotate-45 rounded-[36px] border-[12px] border-primary" />
      </div>

      <div className="container relative mx-auto px-4">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
          <span className="text-primary">Obten tu</span>{" "}
          <span className="text-amber-400">Ahorro</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {savingsCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[350px] overflow-hidden rounded-lg bg-primary text-white shadow-lg"
              >
                <img
                  src="/bannercajaunion.png"
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover ${card.imagePosition} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-black/52" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                <div className="relative flex h-full min-h-[350px] flex-col items-center justify-center px-7 text-center">
                  <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="max-w-[250px] text-2xl font-bold uppercase leading-tight tracking-wide">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-[260px] text-lg leading-5 text-white/95">
                    {card.description}
                  </p>
                  <Button
                    asChild
                    className="mt-8 rounded-full bg-amber-400 px-8 text-base text-foreground hover:bg-amber-300"
                  >
                    <Link to={card.href}>Mas info</Link>
                  </Button>
                </div>
              </article>
            );
          })}

          <article className="group relative min-h-[350px] overflow-hidden rounded-lg bg-primary text-white shadow-lg">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b1b12_0%,#007230_54%,#59c13c_100%)]" />
            <div className="absolute -right-20 -top-16 size-56 rounded-full bg-white/12" />
            <div className="absolute -bottom-14 left-5 h-44 w-72 rotate-[-17deg] rounded-[22px] border border-white/20 bg-[#123b66] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="absolute left-6 top-8 h-9 w-12 rounded-md bg-amber-300" />
              <div className="absolute bottom-7 left-6 h-3 w-28 rounded-full bg-white/35" />
              <div className="absolute bottom-7 right-7 text-xl font-bold italic text-white">
                VISA
              </div>
            </div>
            <div className="absolute bottom-16 right-2 h-40 w-64 rotate-[12deg] rounded-[22px] border border-white/20 bg-[#0f5f31] shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
              <img
                src="/brand/logo-cajaunion.png"
                alt=""
                className="absolute left-6 top-6 h-8 w-auto brightness-0 invert"
              />
              <CreditCard className="absolute bottom-6 left-6 size-8 text-amber-300" />
            </div>

            <div className="relative flex h-full min-h-[350px] flex-col items-center justify-center px-7 text-center">
              <h3 className="max-w-[250px] text-2xl font-bold uppercase leading-tight tracking-wide">
                Tarjeta debito
              </h3>
              <p className="mt-4 max-w-[260px] text-lg leading-5 text-white/95">
                La tarjeta adecuada para usted.
              </p>
              <Button
                asChild
                className="mt-8 rounded-full bg-amber-400 px-8 text-base text-foreground hover:bg-amber-300"
              >
                <Link to="/productos/medios-pago">Mas info</Link>
              </Button>
            </div>
          </article>

          <article className="relative min-h-[350px] overflow-hidden rounded-lg border border-border bg-muted/35 shadow-lg">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-accent" />
            <div className="absolute -bottom-16 -left-12 h-36 w-[120%] -rotate-6 rounded-[50%] bg-background" />

            <div className="relative flex h-full min-h-[350px] flex-col items-center justify-center px-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold uppercase text-primary-foreground">
                <QrCode className="size-4" />
                Escanea
              </span>
              <p className="mt-3 max-w-[260px] text-sm font-semibold text-foreground">
                El codigo QR desde cualquier dispositivo movil para ingresar a
                nuestras redes sociales.
              </p>

              <div className="mt-5 grid size-40 grid-cols-7 gap-1 rounded-lg border-4 border-white bg-white p-2 shadow-xl">
                {Array.from({ length: 49 }).map((_, index) => {
                  const active =
                    index % 2 === 0 ||
                    index % 5 === 0 ||
                    [1, 7, 8, 13, 35, 41, 42, 47].includes(index);

                  return (
                    <span
                      key={index}
                      className={`rounded-sm ${active ? "bg-foreground" : "bg-muted"}`}
                    />
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  f
                </span>
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  ig
                </span>
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  in
                </span>
              </div>

              <Link
                to="/contacto"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent-foreground"
              >
                No te pierdas nuestras novedades
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
