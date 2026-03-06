import { ArrowRight, Handshake } from "lucide-react";
import { Button } from "../components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="scroll-mt-24 pt-20">
      <div className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,.18),transparent_38%),radial-gradient(circle_at_80%_85%,rgba(89,193,60,.28),transparent_44%)]" />

        <div className="container relative mx-auto px-4 py-18 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
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

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/85">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  Ahorro y credito con acompanamiento cercano
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  Atencion presencial en Cucuta
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/8 shadow-2xl backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-black/8" />
              <img
                src="/bannercajaunion.png"
                alt="Grupo de personas representando cercania y confianza en Caja Union"
                className="h-[360px] w-full object-cover object-[72%_18%] sm:h-[420px] sm:object-[69%_18%] md:h-[500px] md:object-[67%_20%] lg:h-[560px] lg:object-[64%_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
