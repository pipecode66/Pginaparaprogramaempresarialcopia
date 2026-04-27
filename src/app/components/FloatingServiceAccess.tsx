import { CreditCard, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function FloatingServiceAccess() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 items-center">
      {open ? (
        <div
          id="floating-service-access"
          className="mr-2 w-56 overflow-hidden rounded-lg border border-border bg-background shadow-[0_18px_48px_rgba(7,20,13,0.22)] sm:w-64"
        >
          <Link
            to="/metodos-de-pago"
            onClick={() => setOpen(false)}
            className="flex min-h-36 flex-col items-center justify-center bg-accent px-6 py-7 text-center text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-background/95 text-primary shadow-sm">
              <CreditCard className="size-7" />
            </span>
            <span className="mt-4 text-xl font-semibold">Pagos</span>
          </Link>

          <a
            href="https://ceus.redcoopcentral.com/"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-36 flex-col items-center justify-center px-6 py-7 text-center transition-colors hover:bg-muted"
          >
            <span className="inline-flex size-20 items-center justify-center rounded-full border border-border bg-white p-3 shadow-sm">
              <img
                src="/brand/logoceus.png"
                alt=""
                className="max-h-12 max-w-16 object-contain"
              />
            </span>
            <span className="mt-4 text-xl font-semibold text-foreground">Ceus</span>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Abrir portal
              <ExternalLink className="size-3.5" />
            </span>
          </a>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="floating-service-access"
        onClick={() => setOpen((current) => !current)}
        className="flex h-64 w-12 items-center justify-center rounded-l-lg bg-primary px-2 py-4 text-primary-foreground shadow-[0_14px_34px_rgba(7,20,13,0.28)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-72 sm:w-14"
      >
        <span className="rotate-180 text-center text-base font-bold leading-tight [writing-mode:vertical-rl] sm:text-lg">
          Servicios y Atencion en Linea
        </span>
      </button>
    </div>
  );
}
