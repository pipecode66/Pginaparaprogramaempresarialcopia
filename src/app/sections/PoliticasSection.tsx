import { Download, FileText } from "lucide-react";

const policyDocuments = [
  {
    href: "/docs/politicas/politica-seguridad-tic.pdf",
    label: "Políticas de seguridad TIC",
  },
  {
    href: "/docs/politicas/politica-tratamiento-datos-personales.pdf",
    label: "Política de tratamiento de datos personales",
  },
  {
    label: "Política de crédito",
    pending: true,
  },
  {
    href: "/docs/politicas/estatuto-2024.pdf",
    label: "Estatuto",
  },
  {
    href: "/docs/politicas/codigo-etica-conducta-2024.pdf",
    label: "Código de ética y conducta",
  },
  {
    href: "/docs/politicas/codigo-buen-gobierno-2024.pdf",
    label: "Código de buen gobierno",
  },
];

function PolicyDocumentPill({
  document,
}: {
  document: (typeof policyDocuments)[number];
}) {
  const className =
    "group inline-flex min-h-10 w-full max-w-[480px] items-center justify-center gap-2 rounded-full bg-accent px-6 py-2 text-center text-sm font-bold uppercase text-accent-foreground shadow-[0_10px_24px_rgba(255,170,43,0.24)] transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  if ("pending" in document && document.pending) {
    return (
      <span
        aria-label={`${document.label}: documento pendiente`}
        className={`${className} cursor-not-allowed opacity-70 hover:translate-y-0 hover:bg-accent`}
      >
        {document.label}
        <span className="text-[10px] normal-case tracking-normal">
          Próximamente
        </span>
      </span>
    );
  }

  return (
    <a
      href={document.href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {document.label}
      <Download
        aria-hidden="true"
        className="size-4 transition-transform group-hover:translate-y-0.5"
      />
    </a>
  );
}

export function PoliticasContent() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-background p-6 text-center shadow-sm md:p-10">
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
          Reconoce que los sistemas y la información de TIC son activos valiosos
          que son esenciales para apoyar los objetivos estratégicos de la entidad.
        </p>

        <div className="mx-auto mt-9 flex max-w-2xl flex-col items-center gap-5">
          {policyDocuments.map((document) => (
            <PolicyDocumentPill key={document.label} document={document} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PoliticasSection() {
  return (
    <section id="politicas" className="scroll-mt-24 bg-muted/45 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <PoliticasContent />
      </div>
    </section>
  );
}
