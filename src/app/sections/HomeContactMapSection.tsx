import { Mail, MapPin, Phone } from "lucide-react";

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Avenida%201%20%2311-66%20Centro%2C%20Cucuta%2C%20Colombia&z=17&output=embed";

const contactItems = [
  {
    label: "Contacto",
    value: "5720155 - 5838374",
    icon: Phone,
  },
  {
    label: "Ubicación",
    value: "Avenida 1 # 11-66 Centro - Cúcuta - Colombia",
    icon: MapPin,
  },
  {
    label: "Correo",
    value: "CONTACTO@CAJAUNION.COOP",
    icon: Mail,
  },
];

export function HomeContactMapSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-18 text-primary-foreground md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-full w-[34rem] opacity-35"
      >
        <div className="absolute right-4 top-4 size-44 rotate-45 rounded-[34px] border-[12px] border-white" />
        <div className="absolute right-32 top-44 size-56 rotate-45 rounded-[38px] border-[12px] border-white" />
        <div className="absolute right-2 bottom-10 size-64 rotate-45 rounded-[44px] border-[12px] border-white" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-bold text-white md:text-2xl">
            Explora y accede a la información que buscas
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
            Encuentra lo que necesitas:
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.2fr_0.85fr]">
          <div className="overflow-hidden rounded-lg border border-white/20 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.24)]">
            <iframe
              title="Mapa de Caja Unión en Cúcuta"
              src={googleMapsEmbedUrl}
              className="h-[360px] w-full md:h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-5">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-dashed border-white/70 bg-amber-400 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                    <Icon aria-hidden="true" className="size-7" />
                  </span>
                  <span>
                    <span className="block text-xl font-bold text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-lg leading-7 text-white/95 md:text-xl">
                      {item.value}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
