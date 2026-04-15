import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { navItems } from "./content/site-content";
import { AboutSection } from "./sections/AboutSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { ConveniosSection } from "./sections/ConveniosSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsSection } from "./sections/NewsSection";
import { OfficesSection } from "./sections/OfficesSection";
import { ProductsSection } from "./sections/ProductsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader navItems={navItems} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BenefitsSection />
        <ConveniosSection />
        <NewsSection />
        <OfficesSection />
        <ContactSection />
      </main>

      <SiteFooter navItems={navItems} />
      <WhatsAppButton />
    </div>
  );
}
