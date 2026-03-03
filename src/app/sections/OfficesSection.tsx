import { MapPin } from "lucide-react";
import { officeItems } from "../content/site-content";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function OfficesSection() {
  return (
    <section id="oficinas" className="scroll-mt-24 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Oficinas y canales
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Presencia fisica y digital para atenderte donde estes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Los datos de sedes en esta etapa son placeholders y deben
            reemplazarse por informacion oficial validada.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {officeItems.map((office) => (
              <Card key={`${office.city}-${office.zone}`} className="border-border/80">
                <CardHeader className="pb-1">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-2 text-sm text-muted-foreground">
                  <p>{office.zone}</p>
                  <p>{office.schedule}</p>
                  <p>{office.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary/20 bg-primary/6">
            <CardHeader>
              <CardTitle className="font-display text-2xl font-bold text-primary">
                Cobertura en evolucion continua
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-foreground">
              <p>
                Esta landing queda lista para conectar una API de oficinas,
                horarios y medios de pago sin alterar la estructura visual.
              </p>
              <p>
                Tambien se puede integrar geolocalizacion, mapa embebido y
                agenda de citas por oficina.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
