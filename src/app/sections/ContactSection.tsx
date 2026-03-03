import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const STORAGE_KEY = "caja_union_contact_requests";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  requestType: string;
  message: string;
  acceptPolicy: boolean;
};

const requestTypes = [
  "Asociarme",
  "Solicitar producto",
  "Recibir asesoria",
  "Aliarme como empresa",
];

export function ContactSection() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      requestType: requestTypes[0],
    },
  });

  const onSubmit = (values: ContactFormData) => {
    try {
      const payload = {
        ...values,
        createdAt: new Date().toISOString(),
        source: "landing-caja-union",
      };

      const previous = localStorage.getItem(STORAGE_KEY);
      const parsed = previous ? JSON.parse(previous) : [];
      const nextData = [payload, ...parsed].slice(0, 100);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextData));

      setStatusMessage(
        "Recibido. Tu solicitud fue guardada localmente y esta lista para enviarse a una API."
      );

      reset({
        fullName: "",
        email: "",
        phone: "",
        requestType: requestTypes[0],
        message: "",
        acceptPolicy: false,
      });
    } catch {
      setStatusMessage(
        "No se pudo guardar la solicitud localmente. Revisa permisos del navegador."
      );
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24 bg-muted/45 py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Contacto
            </p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Cuentanos que necesitas y te contactamos
            </h2>
            <p className="text-muted-foreground">
              El formulario usa validacion con <code>react-hook-form</code>. En
              este MVP se almacena en <code>localStorage</code> para pruebas y
              queda listo para integrar backend.
            </p>

            <Card className="border-primary/20 bg-primary/6">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-primary">
                  Canales rapidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>WhatsApp: +57 300 000 0000 (placeholder)</p>
                <p>Correo: contacto@cajaunion.coop (placeholder)</p>
                <p>Horario de atencion: lunes a viernes, 8:00 a.m. - 5:00 p.m.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/80 bg-background">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-semibold">
                      Nombre completo
                    </label>
                    <Input
                      id="fullName"
                      placeholder="Tu nombre"
                      {...register("fullName", {
                        required: "Ingresa tu nombre completo.",
                        minLength: {
                          value: 4,
                          message: "Minimo 4 caracteres.",
                        },
                      })}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold">
                      Telefono
                    </label>
                    <Input
                      id="phone"
                      placeholder="+57 3XX XXX XXXX"
                      {...register("phone", {
                        required: "Ingresa un numero de contacto.",
                        minLength: {
                          value: 7,
                          message: "Telefono invalido.",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Correo electronico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nombre@correo.com"
                      {...register("email", {
                        required: "Ingresa un correo valido.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Formato de correo invalido.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="requestType" className="text-sm font-semibold">
                      Tipo de solicitud
                    </label>
                    <select
                      id="requestType"
                      className="border-input bg-input-background focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full rounded-md border px-3 text-sm outline-none focus-visible:ring-[3px]"
                      {...register("requestType", {
                        required: "Selecciona una opcion.",
                      })}
                    >
                      {requestTypes.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.requestType && (
                      <p className="text-sm text-destructive">{errors.requestType.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Describe tu necesidad"
                    {...register("message", {
                      required: "Comparte un mensaje breve.",
                      minLength: {
                        value: 10,
                        message: "Escribe al menos 10 caracteres.",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-start gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      className="mt-0.5 size-4 rounded border-border text-primary focus-visible:ring-ring/50"
                      {...register("acceptPolicy", {
                        required: "Debes aceptar el tratamiento de datos.",
                      })}
                    />
                    <span>
                      Acepto el uso de mis datos para contacto comercial y
                      seguimiento de solicitud.
                    </span>
                  </label>
                  {errors.acceptPolicy && (
                    <p className="text-sm text-destructive">
                      {errors.acceptPolicy.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                </Button>

                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {statusMessage}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
