import {
  BadgeCheck,
  BriefcaseBusiness,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Target,
  WalletCards,
} from "lucide-react";

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

export function PropuestaNegocioContent() {
  return (
    <div className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
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
            "Estrategias básicas de diferenciación para entregar una propuesta de
            negocio única en el mercado".
          </p>

          <div className="mt-7 space-y-6 text-base leading-8 text-foreground/85 md:text-lg">
            <p>
              <strong className="font-bold text-foreground">CAJA UNIÓN</strong>{" "}
              será reconocida por ofrecer y cumplir un portafolio de productos y
              servicios financieros y sociales ajustados a las necesidades de sus
              asociados. Los factores diferenciales de los servicios y productos
              que ofrecerá la cooperativa serán la respuesta oportuna, el costo y
              la calidad del servicio.
            </p>
            <p>
              Estos factores diferenciales serán la oferta de valor específica de
              la Cooperativa, la razón por la cual sus asociados la prefieran
              sobre las demás. Serán la base de los beneficios que recibirán los
              asociados, no solamente la revalorización de sus aportes, sino
              también la integración en redes de los servicios financieros,
              educativos y de solidaridad, creando una cadena de valor agregado.
              Los beneficios que obtendrán los asociados están ligados con la
              mayor capacidad de negociación y la conformación de una red integral
              de servicios financieros.
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
    </div>
  );
}

export function PropuestaNegocioSection() {
  return (
    <section
      id="propuesta-negocio"
      className="scroll-mt-24 bg-muted/45 py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <PropuestaNegocioContent />
      </div>
    </section>
  );
}
