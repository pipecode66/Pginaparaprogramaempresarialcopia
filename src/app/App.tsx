import { type ReactNode, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { navItems } from "./content/site-content";
import { AboutSection } from "./sections/AboutSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { ConveniosSection } from "./sections/ConveniosSection";
import { GestoresConveniosSection } from "./sections/GestoresConveniosSection";
import { HeroSection } from "./sections/HeroSection";
import { HomeSavingsSection } from "./sections/HomeSavingsSection";
import { NewsSection } from "./sections/NewsSection";
import { OfficesSection } from "./sections/OfficesSection";
import { ProductsSection } from "./sections/ProductsSection";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}

type SectionPageProps = {
  children: ReactNode;
};

function SectionPage({ children }: SectionPageProps) {
  return <div className="pt-20">{children}</div>;
}

function AboutPage() {
  const { itemId } = useParams();

  return (
    <SectionPage>
      <AboutSection itemId={itemId} />
    </SectionPage>
  );
}

function ProductsPage() {
  const { sectionId } = useParams();
  const isAccessSection =
    sectionId === "portal-transaccional" || sectionId === "medios-pago";

  return (
    <SectionPage>
      <ProductsSection
        accessCardId={isAccessSection ? sectionId : undefined}
        categoryId={!isAccessSection ? sectionId : undefined}
      />
    </SectionPage>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeSavingsSection />
    </>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader navItems={navItems} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/acerca-de"
            element={
              <SectionPage>
                <AboutSection />
              </SectionPage>
            }
          />
          <Route path="/acerca-de/:itemId" element={<AboutPage />} />
          <Route
            path="/productos"
            element={
              <SectionPage>
                <ProductsSection />
              </SectionPage>
            }
          />
          <Route path="/productos/:sectionId" element={<ProductsPage />} />
          <Route
            path="/beneficios"
            element={
              <SectionPage>
                <BenefitsSection />
              </SectionPage>
            }
          />
          <Route
            path="/convenios"
            element={
              <SectionPage>
                <ConveniosSection />
              </SectionPage>
            }
          />
          <Route
            path="/gestores-convenios"
            element={
              <SectionPage>
                <GestoresConveniosSection />
              </SectionPage>
            }
          />
          <Route
            path="/noticias"
            element={
              <SectionPage>
                <NewsSection />
              </SectionPage>
            }
          />
          <Route
            path="/oficinas"
            element={
              <SectionPage>
                <OfficesSection />
              </SectionPage>
            }
          />
          <Route
            path="/contacto"
            element={
              <SectionPage>
                <ContactSection />
              </SectionPage>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <SiteFooter navItems={navItems} />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
}
