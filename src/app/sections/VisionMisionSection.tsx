import { HeartHandshake, Target } from "lucide-react";

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

export function VisionMisionContent() {
  return (
    <div className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
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
    </div>
  );
}

export function VisionMisionSection() {
  return (
    <section
      id="vision-mision"
      className="scroll-mt-24 bg-muted/45 py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <VisionMisionContent />
      </div>
    </section>
  );
}
