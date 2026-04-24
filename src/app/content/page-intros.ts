import type { PageIntroData } from "../components/PageIntro";

const homeCrumb = { label: "Inicio", href: "/" };
const aboutCrumb = { label: "Acerca de", href: "/acerca-de" };
const productsCrumb = { label: "Productos", href: "/productos" };
const benefitsCrumb = { label: "Beneficios", href: "/beneficios" };

export const pageIntros = {
  about: {
    title: "Acerca de",
    breadcrumbs: [homeCrumb, { label: "Acerca de" }],
    headline: "Conoce quiénes somos y cómo trabajamos por nuestros asociados",
  },
  products: {
    title: "Productos",
    breadcrumbs: [homeCrumb, { label: "Productos" }],
    headline: "Encuentra productos de ahorro, crédito y servicios digitales",
  },
  savings: {
    title: "Ahorro e Inversión",
    breadcrumbs: [homeCrumb, productsCrumb, { label: "Ahorro e Inversión" }],
    headline: "Ahorra hoy para construir tus próximos objetivos",
  },
  credit: {
    title: "Créditos",
    breadcrumbs: [homeCrumb, productsCrumb, { label: "Créditos" }],
    headline: "Financia tus proyectos con acompañamiento cooperativo",
  },
  benefits: {
    title: "Beneficios",
    breadcrumbs: [homeCrumb, { label: "Beneficios" }],
    headline: "¿Cuáles son las ventajas de unirse a CAJA UNIÓN?",
  },
  convenios: {
    title: "Convenios",
    breadcrumbs: [homeCrumb, benefitsCrumb, { label: "Convenios" }],
    headline: "Aprovecha alianzas pensadas para tu bienestar",
  },
  gestoresConvenios: {
    title: "Gestores de Convenios",
    breadcrumbs: [homeCrumb, benefitsCrumb, { label: "Gestores de Convenios" }],
    headline: "Espacio para gestionar y consultar convenios aliados",
  },
  news: {
    title: "Noticias",
    breadcrumbs: [homeCrumb, benefitsCrumb, { label: "Noticias" }],
    headline: "Mantente al día con la actualidad de Caja Unión",
  },
  offices: {
    title: "Oficinas",
    breadcrumbs: [homeCrumb, { label: "Oficinas" }],
    headline: "Ubica nuestra sede y canales de atención presencial",
  },
  contact: {
    title: "Contacto",
    breadcrumbs: [homeCrumb, { label: "Contacto" }],
    headline: "Cuéntanos qué necesitas y hablemos",
  },
  paymentMethods: {
    title: "Medios de Pago",
    breadcrumbs: [homeCrumb, productsCrumb, { label: "Medios de Pago" }],
    headline: "Elige el canal de pago que mejor se ajuste a ti",
  },
} satisfies Record<string, PageIntroData>;

const aboutPageIntros: Record<string, PageIntroData> = {
  nosotros: {
    title: "Nosotros",
    breadcrumbs: [homeCrumb, aboutCrumb, { label: "Nosotros" }],
    headline: "Una cooperativa cercana para crecer con confianza",
  },
  asambleas: {
    title: "Asambleas",
    breadcrumbs: [homeCrumb, aboutCrumb, { label: "Asambleas" }],
    headline: "Consulta la gestión institucional y sus documentos clave",
  },
  politicas: {
    title: "Políticas, Estatutos y Códigos",
    breadcrumbs: [homeCrumb, aboutCrumb, { label: "Políticas" }],
    headline: "Transparencia, gobierno cooperativo y documentos institucionales",
  },
  rte: {
    title: "RTE",
    breadcrumbs: [homeCrumb, aboutCrumb, { label: "RTE" }],
    headline: "Información legal y tributaria para consulta pública",
  },
  "vision-mision": {
    title: "Visión y Misión",
    breadcrumbs: [homeCrumb, aboutCrumb, { label: "Visión y Misión" }],
    headline: "Dirección estratégica con sentido cooperativo",
  },
  "propuesta-negocio": {
    title: "Propuesta de Negocio",
    breadcrumbs: [homeCrumb, aboutCrumb, { label: "Propuesta de Negocio" }],
    headline: "Servicios claros, cercanos y orientados al asociado",
  },
};

const productsPageIntros: Record<string, PageIntroData> = {
  "ahorro-inversion": pageIntros.savings,
  creditos: pageIntros.credit,
  seguros: {
    title: "Seguros",
    breadcrumbs: [homeCrumb, productsCrumb, { label: "Seguros" }],
    headline: "Protege lo que más importa con soluciones a tu medida",
  },
  "portal-transaccional": {
    title: "Portal Transaccional",
    breadcrumbs: [homeCrumb, productsCrumb, { label: "Portal Transaccional" }],
    headline: "Accede a tus servicios en línea de forma simple",
  },
  "medios-pago": pageIntros.paymentMethods,
};

export function getAboutPageIntro(itemId?: string) {
  if (!itemId) {
    return pageIntros.about;
  }

  return aboutPageIntros[itemId] ?? pageIntros.about;
}

export function getProductsPageIntro(sectionId?: string) {
  if (!sectionId) {
    return pageIntros.products;
  }

  return productsPageIntros[sectionId] ?? pageIntros.products;
}
