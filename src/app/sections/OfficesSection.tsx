import { ExternalLink, MapPin } from "lucide-react";
import { officeItems } from "../content/site-content";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Av.%201%20%2311-66%2C%20Cucuta%2C%20Norte%20de%20Santander&z=17&output=embed";

const googleMapsOpenUrl =
  "https://www.google.com/maps/search/?api=1&query=Av.%201%20%2311-66%2C%20Cucuta%2C%20Norte%20de%20Santander";

export function OfficesSection() {
  const mainOffice = officeItems[0];

  return (
    <section id="oficinas" className="scroll-mt-24 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Sede principal
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Atencion presencial desde Cucuta, Norte de Santander
          </h2>
          <p className="mt-4 text-muted-foreground">
            Caja Union cuenta con una sede principal para la atencion presencial y
            acompanamiento a sus asociados.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-border/80">
            <CardHeader className="pb-1">
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <CardTitle className="text-2xl font-bold">
                {mainOffice.zone}, {mainOffice.city}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 pt-3 text-sm text-muted-foreground">
              <p className="text-base font-semibold text-foreground">{mainOffice.address}</p>
              <p>{mainOffice.schedule}</p>
              <p>{mainOffice.note}</p>

              <div className="rounded-2xl border border-border bg-muted/40 p-4">
                <p className="text-sm font-semibold text-foreground">Referencia</p>
                <p className="mt-2">
                  Ubicacion principal para visitas, informacion comercial y
                  acompanamiento presencial.
                </p>
              </div>

              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={googleMapsOpenUrl} target="_blank" rel="noreferrer">
                  Abrir en Google Maps
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="overflow-hidden rounded-[28px] border border-border/80 bg-card shadow-sm">
            <iframe
              title="Mapa de la sede principal Caja Union en Cucuta"
              src={googleMapsEmbedUrl}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
