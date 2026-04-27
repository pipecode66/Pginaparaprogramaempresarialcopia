import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { productCategories, serviceAccessCards } from "../content/site-content";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const defaultCategoryId = productCategories[0]?.id ?? "";
const categoryIds = new Set(productCategories.map((category) => category.id));
const accessCardIds = new Set(serviceAccessCards.map((card) => card.id));
const categoryRoutes: Record<string, string> = {
  "ahorro-inversion": "/ahorro",
  creditos: "/credito",
};
const productWhatsAppUrl =
  "https://api.whatsapp.com/send/?phone=573508173170&text&type=phone_number&app_absent=0";

type ProductsSectionProps = {
  accessCardId?: string;
  categoryId?: string;
};

function getValidCategoryId(categoryId?: string) {
  return categoryId && categoryIds.has(categoryId) ? categoryId : defaultCategoryId;
}

export function ProductsSection({
  accessCardId,
  categoryId,
}: ProductsSectionProps) {
  const navigate = useNavigate();
  const showAccessOnly = Boolean(accessCardId && accessCardIds.has(accessCardId));
  const selectedAccessCards = showAccessOnly
    ? serviceAccessCards.filter((card) => card.id === accessCardId)
    : serviceAccessCards;
  const [activeTab, setActiveTab] = useState(() => getValidCategoryId(categoryId));

  useEffect(() => {
    setActiveTab(getValidCategoryId(categoryId));
  }, [categoryId]);

  const selectedAccessTitle = selectedAccessCards[0]?.title ?? "canales digitales";

  const handleTabChange = (nextTab: string) => {
    setActiveTab(nextTab);
    navigate(categoryRoutes[nextTab] ?? `/productos/${nextTab}`);
  };

  return (
    <section
      id={showAccessOnly ? accessCardId : "productos"}
      className="scroll-mt-24 bg-background py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            {showAccessOnly ? "Acceso" : "Portafolio"}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            {showAccessOnly
              ? `${selectedAccessTitle} para operar con Caja Union desde canales aliados`
              : "Productos, seguros y accesos digitales organizados para que el usuario encuentre rapido lo que necesita"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {showAccessOnly
              ? "Consulta el acceso, los canales disponibles y las referencias oficiales para usar este servicio."
              : "Las tasas, cupos y plazos visibles en esta seccion funcionan como referencia comercial basada en informacion publica de Caja Union. Todas las condiciones deben confirmarse con el tarifario y estudio vigentes."}
          </p>
        </div>

        {!showAccessOnly ? (
          <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-10 gap-6">
            <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-2xl bg-muted/70 p-2 md:w-auto">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="min-w-[180px] flex-none rounded-xl px-4 py-2 text-sm font-semibold"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div
                  id={category.id}
                  className="scroll-mt-28 rounded-[28px] border border-border/70 bg-muted/35 p-6 md:p-8"
                >
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground md:text-base">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {category.items.map((product) => {
                      const Icon = product.icon;

                      return (
                        <Card
                          key={product.title}
                          className="border-border/80 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <CardHeader className="pb-2">
                            <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Icon className="size-5" />
                            </span>
                            <CardTitle className="text-xl font-bold">
                              {product.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="space-y-5 text-sm text-muted-foreground">
                            <p>{product.description}</p>

                            <div className="grid gap-3 rounded-2xl border border-border/70 bg-muted/45 p-4">
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                  Tasa
                                </p>
                                <p className="mt-1 text-sm font-medium text-foreground">
                                  {product.rate}
                                </p>
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                  Plazo
                                </p>
                                <p className="mt-1 text-sm font-medium text-foreground">
                                  {product.term}
                                </p>
                              </div>
                            </div>

                            <ul className="space-y-2">
                              {product.highlights.map((highlight) => (
                                <li key={highlight} className="flex items-start gap-2">
                                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>

                            <Button
                              asChild
                              variant="ghost"
                              className="w-full justify-between border border-border/80 bg-muted/50 text-foreground hover:bg-accent hover:text-accent-foreground"
                            >
                              <a
                                href={productWhatsAppUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {product.cta}
                                <ArrowUpRight className="size-4" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : null}

        <div
          className={`mt-10 grid gap-6 ${showAccessOnly ? "max-w-3xl" : "lg:grid-cols-2"}`}
        >
          {selectedAccessCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                id={card.id}
                className="scroll-mt-28 rounded-[28px] border border-primary/15 bg-primary p-8 text-primary-foreground shadow-2xl"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-2xl font-bold md:text-3xl">{card.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 md:text-base">
                  {card.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-white/85">
                  {card.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a
                      href={card.primaryCta.href}
                      target={card.primaryCta.external ? "_blank" : undefined}
                      rel={card.primaryCta.external ? "noreferrer" : undefined}
                    >
                      {card.primaryCta.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>

                  {card.secondaryCta ? (
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    >
                      <a
                        href={card.secondaryCta.href}
                        target={card.secondaryCta.external ? "_blank" : undefined}
                        rel={card.secondaryCta.external ? "noreferrer" : undefined}
                      >
                        {card.secondaryCta.label}
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
