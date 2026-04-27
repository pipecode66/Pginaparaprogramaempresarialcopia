import { type ReactNode, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router";
import { FloatingServiceAccess } from "./components/FloatingServiceAccess";
import { FloatingSocialLinks } from "./components/FloatingSocialLinks";
import { PageIntro, type PageIntroData } from "./components/PageIntro";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppButton } from "./components/WhatsAppButton";
import {
  getAboutPageIntro,
  getProductsPageIntro,
  pageIntros,
} from "./content/page-intros";
import { navItems } from "./content/site-content";
import { AboutSection } from "./sections/AboutSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { ConveniosSection } from "./sections/ConveniosSection";
import { GestoresConveniosSection } from "./sections/GestoresConveniosSection";
import { HeroSection } from "./sections/HeroSection";
import { HomeContactMapSection } from "./sections/HomeContactMapSection";
import { HomeNewsEventsSection } from "./sections/HomeNewsEventsSection";
import { HomeProductSplitSection } from "./sections/HomeProductSplitSection";
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
  intro: PageIntroData;
};

function SectionPage({ children, intro }: SectionPageProps) {
  return (
    <div className="pt-20">
      <PageIntro {...intro} />
      {children}
    </div>
  );
}

function AboutAliasPage({ itemId }: { itemId: string }) {
  return (
    <SectionPage intro={getAboutPageIntro(itemId)}>
      <AboutSection itemId={itemId} />
    </SectionPage>
  );
}

function ProductsPage() {
  const { sectionId } = useParams();
  const isAccessSection =
    sectionId === "portal-transaccional" || sectionId === "medios-pago";

  return (
    <SectionPage intro={getProductsPageIntro(sectionId)}>
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
      <HomeProductSplitSection />
      <HomeNewsEventsSection />
      <HomeContactMapSection />
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
            path="/nosotros"
            element={<AboutAliasPage itemId="nosotros" />}
          />
          <Route
            path="/vision-y-mision"
            element={<AboutAliasPage itemId="vision-y-mision" />}
          />
          <Route
            path="/vision-mision"
            element={<AboutAliasPage itemId="vision-mision" />}
          />
          <Route
            path="/propuesta-de-negocio"
            element={<AboutAliasPage itemId="propuesta-de-negocio" />}
          />
          <Route
            path="/propuesta-negocio"
            element={<AboutAliasPage itemId="propuesta-negocio" />}
          />
          <Route
            path="/asambleas"
            element={<AboutAliasPage itemId="asambleas" />}
          />
          <Route
            path="/politicas"
            element={<AboutAliasPage itemId="politicas" />}
          />
          <Route
            path="/politicas-estatutos-y-codigos"
            element={<AboutAliasPage itemId="politicas-estatutos-y-codigos" />}
          />
          <Route path="/rte" element={<AboutAliasPage itemId="rte" />} />
          <Route
            path="/productos"
            element={
              <SectionPage intro={pageIntros.products}>
                <ProductsSection />
              </SectionPage>
            }
          />
          <Route path="/productos/:sectionId" element={<ProductsPage />} />
          <Route
            path="/ahorro"
            element={
              <SectionPage intro={pageIntros.savings}>
                <ProductsSection categoryId="ahorro-inversion" />
              </SectionPage>
            }
          />
          <Route
            path="/credito"
            element={
              <SectionPage intro={pageIntros.credit}>
                <ProductsSection categoryId="creditos" />
              </SectionPage>
            }
          />
          <Route
            path="/metodos-de-pago"
            element={
              <SectionPage intro={pageIntros.paymentMethods}>
                <ProductsSection accessCardId="medios-pago" />
              </SectionPage>
            }
          />
          <Route
            path="/beneficios"
            element={
              <SectionPage intro={pageIntros.benefits}>
                <BenefitsSection />
              </SectionPage>
            }
          />
          <Route
            path="/convenios"
            element={
              <SectionPage intro={pageIntros.convenios}>
                <ConveniosSection />
              </SectionPage>
            }
          />
          <Route
            path="/gestores-convenios"
            element={
              <SectionPage intro={pageIntros.gestoresConvenios}>
                <GestoresConveniosSection />
              </SectionPage>
            }
          />
          <Route
            path="/noticias"
            element={
              <SectionPage intro={pageIntros.news}>
                <NewsSection />
              </SectionPage>
            }
          />
          <Route
            path="/oficinas"
            element={
              <SectionPage intro={pageIntros.offices}>
                <OfficesSection />
              </SectionPage>
            }
          />
          <Route
            path="/contacto"
            element={
              <SectionPage intro={pageIntros.contact}>
                <ContactSection />
              </SectionPage>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <SiteFooter />
      <FloatingSocialLinks />
      <FloatingServiceAccess />
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
