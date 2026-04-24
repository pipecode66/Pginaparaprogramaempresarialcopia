import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { ArrowUpRight, CreditCard, PiggyBank, QrCode, WalletCards } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

const featureCards = [
  {
    title: "Productos de ahorro",
    description: "Conozca nuestro portafolio que le ayudara a ahorrar mas.",
    href: "/productos/ahorro-inversion",
    icon: PiggyBank,
  },
  {
    title: "Productos de credito",
    description: "Disenamos estos productos especialmente para usted.",
    href: "/productos/creditos",
    icon: WalletCards,
  },
  {
    title: "Tarjeta debito",
    description: "La tarjeta adecuada para usted.",
    href: "/productos/medios-pago",
    icon: CreditCard,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/micajaunion/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/caja_union/",
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCRide2uQKnErEy74KYypiGA",
    icon: YouTubeIcon,
  },
];

const typewriterTerms = ["Ahorro", "Credito", "Tarjeta debito/credito"];

export function HomeSavingsSection() {
  const [termIndex, setTermIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTerm = typewriterTerms[termIndex];
    const isComplete = !isDeleting && visibleChars === currentTerm.length;
    const isEmpty = isDeleting && visibleChars === 0;
    const delay = isComplete ? 1400 : isEmpty ? 260 : isDeleting ? 45 : 80;

    const timeoutId = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setTermIndex((currentIndex) => (currentIndex + 1) % typewriterTerms.length);
        return;
      }

      setVisibleChars((currentLength) => currentLength + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, termIndex, visibleChars]);

  const typedTerm = typewriterTerms[termIndex].slice(0, visibleChars);

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
        <h2 className="flex min-h-[3.25rem] flex-wrap items-center justify-center gap-x-3 text-center font-display text-3xl font-bold md:text-4xl">
          <span className="text-primary">Obten tu</span>{" "}
          <span
            aria-live="polite"
            className="inline-flex min-w-[13ch] justify-start border-r-2 border-amber-400 pr-1 text-amber-400"
          >
            {typedTerm || "\u00a0"}
          </span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[350px] overflow-hidden rounded-lg border border-border/80 bg-card shadow-[0_22px_48px_rgba(7,52,29,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(7,52,29,0.22)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,114,48,0.08),rgba(255,255,255,0)_48%)]" />
                <div className="absolute -right-14 -top-14 size-40 rounded-full bg-accent/12" />
                <div className="absolute -bottom-16 left-1/2 size-44 -translate-x-1/2 rounded-full bg-primary/6" />

                <div className="relative grid h-full min-h-[350px] grid-rows-[64px_86px_72px_54px] justify-items-center px-7 py-10 text-center">
                  <span className="inline-flex size-14 items-center justify-center self-start rounded-full border border-primary/15 bg-primary/10 text-primary shadow-sm">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="max-w-[250px] self-center text-2xl font-bold uppercase leading-tight tracking-wide text-foreground">
                    {card.title}
                  </h3>
                  <p className="max-w-[260px] self-start text-lg leading-6 text-muted-foreground">
                    {card.description}
                  </p>
                  <Button
                    asChild
                    className="self-end rounded-full bg-amber-400 px-8 text-base text-foreground hover:bg-amber-300"
                  >
                    <Link to={card.href}>Mas info</Link>
                  </Button>
                </div>
              </article>
            );
          })}

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

              <div className="mt-5 flex w-full justify-end gap-3 pr-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${item.label} de Caja Union`}
                      className="inline-flex size-11 items-center justify-center rounded-full bg-foreground text-background shadow-md transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Icon className="size-5" fontSize="inherit" />
                    </a>
                  );
                })}
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
