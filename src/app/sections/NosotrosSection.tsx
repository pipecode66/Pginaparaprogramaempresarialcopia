import {
  BadgeCheck,
  BriefcaseBusiness,
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
import { AsambleasContent } from "./AsambleasSection";

const internalNavItems = [
  { href: "#nosotros-presentacion", label: "Nosotros" },
  { href: "#vision-mision", label: "Visión y Misión" },
  { href: "#propuesta-negocio", label: "Propuesta de negocio" },
  { href: "#asambleas", label: "Asambleas" },
  { href: "#politicas", label: "Políticas, Estatutos y Códigos" },
  { href: "#rte", label: "RTE" },
];

const missionVisionItems = [
  {
    icon: HeartHandshake,
    title: "Misión",
    text: "Somos una cooperativa que contribuye al progreso de sus asociados y su familia, brindando servicios de ahorro y crédito con transparencia, cercanía y responsabilidad social, con un talento humano comprometido y tecnología adecuada.",
  },
  {
    icon: Target,
    title: "Visión",
    text: "Ser al 2027 una cooperativa innovadora, que incrementa su base social y la fideliza a través de productos y servicios financieros de fácil acceso, con un capital humano comprometido.",
  },
];

const proposalPoints = [
  {
    icon: HeartHandshake,
    label: "1.",
    text: "Actitud y calidad humana en el servicio.",
  },
  {
    icon: Target,
    label: "2.",
    text: "Asesoría efectiva acorde con sus necesidades y expectativas.",
  },
  {
    icon: BadgeCheck,
    label: "3.",
    text: "Aportar valor a nuestros asociados y ser fuente confiable de soluciones.",
  },
  {
    icon: ShieldCheck,
    label: "4.",
    text: "Seguridad, solidez y transparencia en el manejo de los recursos y la gestión organizacional.",
  },
  {
    icon: Lightbulb,
    label: "5.",
    text: "Listos para ser creativos según las necesidades del cliente, buscando maneras de ayudar.",
  },
  {
    icon: WalletCards,
    label: "6.",
    text: "Ofrecemos servicios financieros únicos y competitivos.",
  },
  {
    icon: BriefcaseBusiness,
    label: "7.",
    text: "Diseñamos un portafolio atractivo que cubre las necesidades de los asociados.",
  },
  {
    icon: MessageCircle,
    label: "8.",
    text: "Usamos múltiples canales para conectar, como atención presencial, correo electrónico, redes sociales y eventos.",
  },
];

const policyDocuments = [
  "Políticas de seguridad TIC",
  "Política de tratamiento de datos personales",
  "Política de crédito",
  "Estatuto",
  "Código de ética y conducta",
  "Código de buen gobierno",
];

const supportCards = [
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

function MissionVisionVisual({
  title,
  index,
}: {
  index: number;
  title: string;
}) {
  const Icon = index === 0 ? HeartHandshake : Target;

  return (
    <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-lg bg-primary/10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.85),transparent_34%),radial-gradient(circle_at_75%_80%,rgba(255,170,43,0.22),transparent_32%)]"
      />
      <div className="relative flex size-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl">
        <Icon aria-hidden="true" className="size-11" />
      </div>
      <span className="sr-only">Visual de apoyo para {title}</span>
    </div>
  );
}

export function NosotrosSection() {
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

          <div className="space-y-12">
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

            <section
              id="vision-mision"
              className="scroll-mt-28 rounded-lg border border-border bg-background p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-8">
                {missionVisionItems.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid items-center gap-6 md:grid-cols-[280px_1fr]"
                  >
                    <MissionVisionVisual index={index} title={item.title} />
                    <div>
                      <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                        {item.title}
                      </h2>
                      <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="propuesta-negocio"
              className="scroll-mt-28 rounded-lg border border-border bg-background p-6 shadow-sm md:p-8"
            >
              <div className="relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-20 size-[28rem] -translate-x-1/2 rounded-full border border-primary/5"
                />
                <div className="relative">
                  <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">
                    Propuesta de negocio
                  </h2>
                  <p className="mt-4 max-w-5xl text-xl font-bold leading-7 text-[#53c83a] md:text-2xl">
                    "Estrategias básicas de diferenciación para entregar una
                    propuesta de negocio única en el mercado".
                  </p>

                  <div className="mt-7 space-y-6 text-base leading-8 text-foreground/85 md:text-lg">
                    <p>
                      <strong className="font-bold text-foreground">CAJA UNIÓN</strong>{" "}
                      será reconocida por ofrecer y cumplir un portafolio de
                      productos y servicios financieros y sociales ajustados a las
                      necesidades de sus asociados. Los factores diferenciales de
                      los servicios y productos que ofrecerá la cooperativa serán la
                      respuesta oportuna, el costo y la calidad del servicio.
                    </p>
                    <p>
                      Estos factores diferenciales serán la oferta de valor
                      específica de la Cooperativa, la razón por la cual sus
                      asociados la prefieran sobre las demás. Serán la base de los
                      beneficios que recibirán los asociados, no solamente la
                      revalorización de sus aportes, sino también la integración en
                      redes de los servicios financieros, educativos y de
                      solidaridad, creando una cadena de valor agregado. Los
                      beneficios que obtendrán los asociados están ligados con la
                      mayor capacidad de negociación y la conformación de una red
                      integral de servicios financieros.
                    </p>
                  </div>

                  <ol className="mt-9 grid gap-3">
                    {proposalPoints.map((point) => {
                      const Icon = point.icon;

                      return (
                        <li
                          key={point.label}
                          className="flex items-start gap-3 rounded-md border border-border/70 bg-muted/35 p-4"
                        >
                          <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-accent-foreground">
                            {point.label.replace(".", "")}
                          </span>
                          <Icon
                            aria-hidden="true"
                            className="mt-1 hidden size-5 shrink-0 text-primary sm:block"
                          />
                          <span className="text-base font-bold leading-7 text-foreground">
                            {point.text}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </section>

            <section
              id="politicas"
              className="relative scroll-mt-28 overflow-hidden rounded-lg border border-border bg-background p-6 text-center shadow-sm md:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 size-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5"
              />

              <div className="relative">
                <FileText aria-hidden="true" className="mx-auto size-11 text-primary" />
                <h2 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-bold leading-tight text-primary md:text-4xl">
                  La cooperativa de ahorro y crédito Caja Unión
                </h2>
                <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-muted-foreground">
                  Reconoce que los sistemas y la información de TIC son activos
                  valiosos que son esenciales para apoyar los objetivos estratégicos
                  de la entidad.
                </p>

                <div className="mx-auto mt-9 flex max-w-2xl flex-col items-center gap-5">
                  {policyDocuments.map((document) => (
                    <span
                      key={document}
                      className="inline-flex min-h-10 w-full max-w-[480px] items-center justify-center rounded-full bg-accent px-6 py-2 text-center text-sm font-bold uppercase text-accent-foreground shadow-[0_10px_24px_rgba(255,170,43,0.24)]"
                    >
                      {document}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section id="asambleas" className="scroll-mt-28">
              <AsambleasContent />
            </section>

            <section className="grid scroll-mt-28 gap-5 md:grid-cols-2">
              {supportCards.map((card) => {
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
