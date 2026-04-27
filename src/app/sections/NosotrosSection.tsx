import {
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  ClipboardList,
  FileCheck2,
  FileText,
  HeartHandshake,
  Lightbulb,
  Mail,
  MessageCircle,
  ShieldCheck,
  Target,
  WalletCards,
} from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

const internalNavItems = [
  { href: "#nosotros-presentacion", label: "Nosotros" },
  { href: "#vision-mision", label: "Visión y Misión" },
  { href: "#propuesta-negocio", label: "Propuesta de negocio" },
  { href: "#asambleas", label: "Asambleas" },
  { href: "#politicas", label: "Políticas, Estatutos y Códigos" },
  { href: "#rte", label: "RTE" },
];

const proposalPoints = [
  {
    icon: HeartHandshake,
    label: "01.",
    text: "Actitud y calidad humana en el servicio.",
  },
  {
    icon: Target,
    label: "02.",
    text: "Asesoría efectiva acorde con sus necesidades y expectativas.",
  },
  {
    icon: BadgeCheck,
    label: "03.",
    text: "Aportar valor a nuestros asociados y ser fuente confiable de soluciones.",
  },
  {
    icon: ShieldCheck,
    label: "04.",
    text: "Seguridad, solidez y transparencia en el manejo de los recursos y la gestión organizacional.",
  },
  {
    icon: Lightbulb,
    label: "05.",
    text: "Creatividad para responder a las necesidades del asociado y encontrar nuevas maneras de ayudar.",
  },
  {
    icon: WalletCards,
    label: "06.",
    text: "Servicios financieros únicos, competitivos y conectados con el bienestar.",
  },
  {
    icon: BriefcaseBusiness,
    label: "07.",
    text: "Un portafolio atractivo que cubre necesidades reales de los asociados.",
  },
  {
    icon: MessageCircle,
    label: "08.",
    text: "Múltiples canales para conectar: atención presencial, correo electrónico, redes sociales y eventos.",
  },
];

const institutionalCards = [
  {
    id: "vision-mision",
    icon: Target,
    title: "Visión y Misión",
    text: "Contribuimos al progreso del asociado y su familia con transparencia, cercanía y responsabilidad social, proyectando una cooperativa innovadora y de fácil acceso.",
  },
  {
    id: "asambleas",
    icon: ClipboardList,
    title: "Asambleas",
    text: "Organizamos informes, reglamentos, convocatorias y balance social para que la gestión institucional pueda consultarse con claridad.",
  },
  {
    id: "politicas",
    icon: FileText,
    title: "Políticas, Estatutos y Códigos",
    text: "Reunimos el marco documental de seguridad TIC, tratamiento de datos, estatuto, código de ética y buen gobierno.",
  },
  {
    id: "rte",
    icon: FileCheck2,
    title: "RTE",
    text: "Mantenemos visible la información legal, fiscal y documental vinculada al Régimen Tributario Especial.",
  },
];

function PeopleVisualCard() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#55c83a] shadow-[0_24px_60px_rgba(0,122,61,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_50%_45%,transparent_0,transparent_33%,rgba(255,255,255,0.12)_33%,rgba(255,255,255,0.12)_34%,transparent_35%),radial-gradient(circle_at_50%_45%,transparent_0,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_51%,transparent_52%)]" />
      <BrandLogo className="absolute left-1/2 top-8 z-10 w-44 -translate-x-1/2 brightness-0 invert" />
      <img
        src="/bannercajaunion.png"
        alt="Personas asociadas a Caja Unión en un ambiente cercano"
        className="relative h-[420px] w-full object-cover object-[64%_18%] md:h-[500px]"
      />
    </div>
  );
}

function FinanceVisualCard() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-[#55c83a] shadow-[0_24px_60px_rgba(0,122,61,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_50%_48%,transparent_0,transparent_38%,rgba(255,255,255,0.12)_38%,rgba(255,255,255,0.12)_39%,transparent_40%),radial-gradient(circle_at_50%_48%,transparent_0,transparent_58%,rgba(255,255,255,0.1)_58%,rgba(255,255,255,0.1)_59%,transparent_60%)]" />
      <div className="relative z-10 flex h-full min-h-[520px] flex-col items-center justify-center px-8 py-12 text-center text-white">
        <BrandLogo className="w-56 brightness-0 invert" />
        <div className="mt-12 flex size-36 items-center justify-center rounded-full border border-white/25 bg-white/15 shadow-2xl backdrop-blur">
          <WalletCards aria-hidden="true" className="size-20" />
        </div>
        <h3 className="mt-10 font-display text-3xl font-bold leading-tight">
          Valor cooperativo para cada etapa financiera
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-6 text-white/90">
          Ahorro, crédito, educación financiera y servicios sociales conectados en
          una misma experiencia.
        </p>
      </div>
    </div>
  );
}

export function NosotrosSection() {
  const leftPoints = proposalPoints.slice(0, 4);
  const rightPoints = proposalPoints.slice(4);

  return (
    <section id="nosotros" className="scroll-mt-24 bg-muted/45 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-label="Contenido de Nosotros"
              className="rounded-lg bg-primary p-4 text-primary-foreground shadow-xl"
            >
              <ul className="grid gap-1">
                {internalNavItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-md px-4 py-4 text-base font-bold text-white transition-colors hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-14">
            <section
              id="nosotros-presentacion"
              className="scroll-mt-28 rounded-lg border border-border bg-background p-6 shadow-sm md:p-8"
            >
              <div className="grid items-center gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                <PeopleVisualCard />

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                    Cooperativa de ahorro y crédito
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
                    Estamos trabajando para darte más beneficios.
                  </h2>
                  <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                    ¡Bienvenido a Caja Unión! Aquí eres más que un cliente, eres
                    parte de nuestra familia financiera. Ofrecemos productos y
                    servicios diseñados para tu bienestar, desde cuentas de ahorro
                    hasta líneas de crédito flexibles. Además, proporcionamos
                    programas educativos para fortalecer tu conocimiento financiero.
                    Únete a nosotros y descubre una cooperativa comprometida con tu
                    éxito y el desarrollo de la comunidad.
                  </p>
                </div>
              </div>
            </section>

            <section id="propuesta-negocio" className="scroll-mt-28">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Nuestra propuesta
                </p>
                <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">
                  Propuesta de negocio
                </h2>
                <p className="mx-auto mt-4 max-w-5xl text-xl font-bold leading-8 text-accent md:text-2xl">
                  "Estrategias básicas de diferenciación para entregar una propuesta
                  de negocio única en el mercado".
                </p>
              </div>

              <div className="mt-8 rounded-lg border border-border bg-background p-6 text-base leading-8 text-muted-foreground shadow-sm md:p-8 md:text-lg">
                <p>
                  <strong className="text-foreground">CAJA UNIÓN</strong> será
                  reconocida por ofrecer y cumplir un portafolio de productos y
                  servicios financieros y sociales ajustados a las necesidades de
                  sus asociados. Los factores diferenciales serán la respuesta
                  oportuna, el costo y la calidad del servicio.
                </p>
                <p className="mt-6">
                  Estos factores serán la oferta de valor específica de la
                  Cooperativa y la razón por la cual sus asociados la prefieran. Los
                  beneficios estarán ligados a la revalorización de sus aportes, la
                  integración en redes de servicios financieros, educativos y de
                  solidaridad, y la conformación de una red integral de servicios.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {proposalPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <article
                      key={point.label}
                      className="rounded-lg border border-accent/25 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Icon aria-hidden="true" className="size-6" />
                        </span>
                        <div>
                          <p className="text-sm font-black text-accent">
                            {point.label}
                          </p>
                          <p className="mt-1 text-lg font-bold leading-7 text-accent">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="scroll-mt-28">
              <div className="grid items-center gap-8 xl:grid-cols-[0.7fr_1.15fr_0.7fr]">
                <div className="grid gap-5">
                  {leftPoints.map((point) => {
                    const Icon = point.icon;

                    return (
                      <article
                        key={point.label}
                        className="rounded-lg border border-border bg-background p-5 text-center shadow-sm"
                      >
                        <span className="mx-auto flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon aria-hidden="true" className="size-7" />
                        </span>
                        <p className="mt-4 text-base font-black leading-6 text-accent">
                          {point.text}
                        </p>
                      </article>
                    );
                  })}
                </div>

                <FinanceVisualCard />

                <div className="grid gap-5">
                  {rightPoints.map((point) => {
                    const Icon = point.icon;

                    return (
                      <article
                        key={point.label}
                        className="rounded-lg border border-border bg-background p-5 text-center shadow-sm"
                      >
                        <span className="mx-auto flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon aria-hidden="true" className="size-7" />
                        </span>
                        <p className="mt-4 text-base font-black leading-6 text-accent">
                          {point.text}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            <section id="vision-mision" className="scroll-mt-28">
              <div className="grid gap-5 md:grid-cols-2">
                {institutionalCards.slice(0, 1).map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.id}
                      className="rounded-lg border border-primary/20 bg-primary p-6 text-primary-foreground shadow-lg"
                    >
                      <Icon aria-hidden="true" className="size-10 text-accent" />
                      <h3 className="mt-4 text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/85 md:text-base">
                        {card.text}
                      </p>
                    </article>
                  );
                })}

                <article className="rounded-lg border border-border bg-background p-6 shadow-sm">
                  <BookOpenText aria-hidden="true" className="size-10 text-primary" />
                  <h3 className="mt-4 text-2xl font-bold text-foreground">
                    Educación y acompañamiento
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                    Promovemos hábitos financieros responsables y orientación clara
                    para que cada asociado pueda tomar mejores decisiones.
                  </p>
                </article>
              </div>
            </section>

            <section className="grid scroll-mt-28 gap-5 md:grid-cols-3">
              {institutionalCards.slice(1).map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    id={card.id}
                    key={card.id}
                    className="rounded-lg border border-border bg-background p-6 shadow-sm"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </section>

            <section className="rounded-lg border border-accent/30 bg-accent/10 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                    Canales de relación
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">
                    Atención presencial, correo electrónico, redes sociales y eventos
                  </h3>
                </div>
                <Mail aria-hidden="true" className="size-12 shrink-0 text-accent" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
