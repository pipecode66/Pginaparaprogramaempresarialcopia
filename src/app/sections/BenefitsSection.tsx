import { benefitItems, faqItems } from "../content/site-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="scroll-mt-24 bg-muted/45 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Beneficios
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Relacion cooperativa con foco en confianza y acompanamiento
          </h2>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefitItems.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <Card key={benefit.title} className="border-border/80 bg-card">
                  <CardHeader className="pb-0">
                    <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-accent/20 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-3 text-sm text-muted-foreground">
                    {benefit.description}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border/80 bg-background">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">
                Preguntas frecuentes del MVP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqItems.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-sm font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
