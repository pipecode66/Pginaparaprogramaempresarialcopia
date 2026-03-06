import { ArrowRight, Handshake } from "lucide-react";
import { heroHighlights } from "../content/site-content";
import { Button } from "../components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="scroll-mt-24 pt-20">
      <div className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,.18),transparent_38%),radial-gradient(circle_at_80%_85%,rgba(89,193,60,.28),transparent_44%)]" />

        <div className="container relative mx-auto px-4 py-18 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 text-sm font-semibold">
                <Handshake className="size-4" />
                Cooperativa de ahorro y credito
              </span>

              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-bold md:text-5xl">
                Impulsamos tus metas con soluciones financieras cooperativas.
              </h1>

              <p className="mt-5 max-w-2xl text-base text-white/90 md:text-lg">
                Caja Union conecta personas, familias y empresas con productos de
                ahorro, credito y acompanamiento integral. Disenamos experiencias
                simples, claras y cercanas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="#contacto">
                    Solicitar asesoria
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white/12 hover:text-white"
                >
                  <a href="#productos">Ver productos</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-2xl border border-white/20 bg-white/12 p-5 shadow-lg backdrop-blur-sm"
                >
                  <h2 className="text-lg font-bold">{highlight.title}</h2>
                  <p className="mt-2 text-sm text-white/88">{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
