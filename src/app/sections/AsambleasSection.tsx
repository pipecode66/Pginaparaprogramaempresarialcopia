import {
  CalendarDays,
  Download,
  FileText,
  UsersRound,
} from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

const delegateNames = [
  "Libybeth Miranda",
  "Lizeth Bautista",
  "Álvaro Ureña",
  "Martha Llaín",
  "Manuel Niño",
  "Freddy Sánchez",
  "Daniel Gómez",
  "Carlos Londoño",
  "Einny Acevedo",
  "Sergio Palacios",
  "Jhon Pino",
];

const managementReports = [2012, 2017, 2019, 2020, 2022, 2023, 2024].map(
  (year) => ({
    href: `/docs/asambleas/informes-gestion/informe-gestion-${year}.pdf`,
    label: `Informe de gestión ${year}`,
    year,
  })
);

const assemblyDocuments = [
  {
    href: "/docs/asambleas/delegados/reglamento-asamblea-delegados-2021.pdf",
    label: "Asamblea de Delegados",
    meta: "Reglamento XIV Asamblea 2021",
  },
];

const balanceDocuments = [
  {
    href: "/docs/asambleas/balance-social/balance-social-2023.pdf",
    label: "Balance social 2023",
    meta: "Documento disponible",
  },
];

function DocumentLink({
  href,
  label,
  meta,
}: {
  href: string;
  label: string;
  meta?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-4 py-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex min-w-0 items-start gap-3">
        <FileText
          aria-hidden="true"
          className="mt-0.5 size-5 shrink-0 text-primary"
        />
        <span>
          <span className="block font-semibold text-foreground">{label}</span>
          {meta ? (
            <span className="mt-1 block text-sm text-muted-foreground">{meta}</span>
          ) : null}
        </span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary">
        Descargar
        <Download
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-y-0.5"
        />
      </span>
    </a>
  );
}

function DelegatesBoard() {
  return (
    <div className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-3 border-b-2 border-foreground/80 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
            Asamblea
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
            Delegados 2023-2026
          </h2>
        </div>
        <CalendarDays aria-hidden="true" className="size-10 text-primary" />
      </div>

      <div className="mt-6 rounded-lg bg-muted/45 p-5">
        <div className="text-center">
          <h3 className="font-display text-2xl font-black uppercase tracking-wide text-foreground md:text-3xl">
            Delegados elegidos 2023-2026
          </h3>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {delegateNames.map((name) => {
            const initials = name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <article key={name} className="text-center">
                <div className="mx-auto flex size-20 items-center justify-center rounded-lg border border-border bg-white text-lg font-black text-primary shadow-sm">
                  {initials}
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">{name}</p>
              </article>
            );
          })}
        </div>

        <BrandLogo className="mx-auto mt-7 w-56" />
      </div>
    </div>
  );
}

export function AsambleasContent() {
  return (
    <div className="space-y-12">
      <DelegatesBoard />

      <section className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FileText aria-hidden="true" className="size-6" />
          </span>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Historial información de gestión
            </h2>
            <p className="mt-3 text-muted-foreground">
              Puedes ver y descargar los informes disponibles en el repositorio
              documental de Caja Unión.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {managementReports.map((report) => (
            <DocumentLink
              key={report.year}
              href={report.href}
              label={report.label}
              meta={`Año ${report.year}`}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.82fr]">
        <div className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UsersRound aria-hidden="true" className="size-6" />
            </span>
            <div>
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                Reglamentos asamblea de nuestra cooperativa
              </h2>
              <p className="mt-3 text-muted-foreground">
                Puedes ver y descargar los reglamentos de asamblea disponibles.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-3">
            {assemblyDocuments.map((document) => (
              <DocumentLink
                key={document.href}
                href={document.href}
                label={document.label}
                meta={document.meta}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            Balance social
          </h2>
          <p className="mt-3 text-muted-foreground">
            Lea aquí nuestro balance social disponible.
          </p>

          <div className="mt-7 grid gap-3">
            {balanceDocuments.map((document) => (
              <DocumentLink
                key={document.href}
                href={document.href}
                label={document.label}
                meta={document.meta}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function AsambleasSection() {
  return (
    <section id="asambleas" className="scroll-mt-24 bg-muted/45 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <AsambleasContent />
      </div>
    </section>
  );
}
