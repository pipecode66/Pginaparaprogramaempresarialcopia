import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { navItems } from "./content/site-content";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { OfficesSection } from "./sections/OfficesSection";
import { ProductsSection } from "./sections/ProductsSection";

// asdads

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader navItems={navItems} />

      <main>
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <OfficesSection />
        <ContactSection />
      </main>

      <SiteFooter navItems={navItems} />
      <WhatsAppButton />
    </div>
  );
}
