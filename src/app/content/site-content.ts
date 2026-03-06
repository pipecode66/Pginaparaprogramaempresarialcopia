import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Building2,
  HandCoins,
  HeartHandshake,
  Landmark,
  MapPinned,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProductItem = {
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type BannerItem = {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};

export type OfficeItem = {
  city: string;
  zone: string;
  address: string;
  schedule: string;
  note: string;
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  {
    label: "Directorio",
    href: "https://v0-caja-union-pie.vercel.app/",
    external: true,
  },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Oficinas", href: "#oficinas" },
  { label: "Contacto", href: "#contacto" },
];

export const heroHighlights = [
  {
    title: "Ahorro con proposito",
    description: "Opciones disenadas para metas personales, familiares y empresariales.",
  },
  {
    title: "Credito responsable",
    description: "Acompanamiento para cada solicitud con enfoque humano y sostenible.",
  },
  {
    title: "Atencion cercana",
    description: "Equipo experto para resolver dudas y orientar tu siguiente paso financiero.",
  },
  {
    title: "Educacion cooperativa",
    description: "Programas formativos para tomar mejores decisiones con tu dinero.",
  },
];

export const bannerItems: BannerItem[] = [
  {
    title: "Soluciones pensadas para familias y asociados",
    description:
      "Banners visuales con personajes ficticios para comunicar cercania, confianza y progreso financiero.",
    cta: "Quiero asesoria",
    href: "#contacto",
    image: "/banners/banner-familia.svg",
    alt: "Ilustracion de una familia ficticia revisando opciones financieras.",
  },
  {
    title: "Acompana tu negocio con respaldo cooperativo",
    description:
      "Escena ilustrada de una empresaria ficticia recibiendo asesoria para impulsar su crecimiento.",
    cta: "Ver productos",
    href: "#productos",
    image: "/banners/banner-empresaria.svg",
    alt: "Ilustracion de una empresaria ficticia con asesor financiero.",
  },
  {
    title: "Atencion humana para decisiones importantes",
    description:
      "Imagen promocional con asociado ficticio y asesora en una conversacion clara y cercana.",
    cta: "Contactar ahora",
    href: "#contacto",
    image: "/banners/banner-asesoria.svg",
    alt: "Ilustracion de una asesora ficticia atendiendo a un asociado.",
  },
];

export const productItems: ProductItem[] = [
  {
    title: "Linea de Ahorro Union",
    description:
      "Producto de ahorro flexible para construir historial y consolidar metas de mediano plazo.",
    cta: "Solicitar asesoria",
    icon: PiggyBank,
  },
  {
    title: "Ahorro Programado",
    description:
      "Aportes periodicos para objetivos especificos con seguimiento mensual personalizado.",
    cta: "Programar ahorro",
    icon: Landmark,
  },
  {
    title: "Credito Cooperativo",
    description:
      "Alternativas de financiamiento para educacion, proyectos productivos o necesidades personales.",
    cta: "Conocer requisitos",
    icon: HandCoins,
  },
  {
    title: "Vinculacion de Asociados",
    description:
      "Proceso guiado para asociarte y acceder a servicios, convenios y acompanamiento permanente.",
    cta: "Iniciar vinculacion",
    icon: HeartHandshake,
  },
  {
    title: "Seguridad y Respaldo",
    description:
      "Protocolos operativos y de atencion orientados al cuidado de la informacion del asociado.",
    cta: "Revisar cobertura",
    icon: ShieldCheck,
  },
  {
    title: "Pagos y Recaudos",
    description:
      "Canales habilitados para gestionar aportes y obligaciones de manera practica y oportuna.",
    cta: "Ver canales",
    icon: BadgeDollarSign,
  },
];

export const benefitItems: BenefitItem[] = [
  {
    title: "Modelo solidario",
    description:
      "Cada servicio se orienta al bienestar colectivo y al crecimiento de la comunidad asociada.",
    icon: HeartHandshake,
  },
  {
    title: "Asesoria personalizada",
    description:
      "Atencion individual para revisar perfil financiero y recomendar la mejor ruta.",
    icon: Building2,
  },
  {
    title: "Procesos claros",
    description:
      "Informacion simple, tiempos definidos y seguimiento visible en cada solicitud.",
    icon: MapPinned,
  },
  {
    title: "Cultura de ahorro",
    description:
      "Acciones formativas para fortalecer habitos financieros responsables en el largo plazo.",
    icon: PiggyBank,
  },
];

export const officeItems: OfficeItem[] = [
  {
    city: "Cucuta",
    zone: "Sede principal",
    address: "Av. 1 #11-66, Cucuta, Norte de Santander",
    schedule: "Lunes a viernes, 8:00 a.m. a 5:00 p.m.",
    note: "Atencion presencial y acompanamiento comercial desde la sede principal.",
  },
];

export const faqItems = [
  {
    question: "Como me asocio a Caja Union?",
    answer:
      "Desde esta landing puedes iniciar la solicitud en el formulario de contacto. Un asesor valida datos y te comparte los pasos de vinculacion.",
  },
  {
    question: "Que necesito para solicitar un producto?",
    answer:
      "Depende del tipo de producto. El equipo comercial te enviara requisitos actualizados y lista de documentos segun tu perfil.",
  },
  {
    question: "El formulario ya esta conectado a backend?",
    answer:
      "En este MVP se guarda en localStorage y confirma recepcion. El codigo esta preparado para reemplazar ese paso por un endpoint de API.",
  },
];
