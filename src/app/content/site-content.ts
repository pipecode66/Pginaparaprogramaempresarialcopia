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

export type OfficeItem = {
  city: string;
  zone: string;
  schedule: string;
  note: string;
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Oficinas", href: "#oficinas" },
  { label: "Contacto", href: "#contacto" },
];

export const heroHighlights = [
  {
    title: "Ahorro con propósito",
    description: "Opciones diseñadas para metas personales, familiares y empresariales.",
  },
  {
    title: "Crédito responsable",
    description: "Acompañamiento para cada solicitud con enfoque humano y sostenible.",
  },
  {
    title: "Atención cercana",
    description: "Equipo experto para resolver dudas y orientar tu siguiente paso financiero.",
  },
  {
    title: "Educación cooperativa",
    description: "Programas formativos para tomar mejores decisiones con tu dinero.",
  },
];

export const productItems: ProductItem[] = [
  {
    title: "Línea de Ahorro Unión",
    description:
      "Producto de ahorro flexible para construir historial y consolidar metas de mediano plazo.",
    cta: "Solicitar asesoría",
    icon: PiggyBank,
  },
  {
    title: "Ahorro Programado",
    description:
      "Aportes periódicos para objetivos específicos con seguimiento mensual personalizado.",
    cta: "Programar ahorro",
    icon: Landmark,
  },
  {
    title: "Crédito Cooperativo",
    description:
      "Alternativas de financiamiento para educación, proyectos productivos o necesidades personales.",
    cta: "Conocer requisitos",
    icon: HandCoins,
  },
  {
    title: "Vinculación de Asociados",
    description:
      "Proceso guiado para asociarte y acceder a servicios, convenios y acompañamiento permanente.",
    cta: "Iniciar vinculación",
    icon: HeartHandshake,
  },
  {
    title: "Seguridad y Respaldo",
    description:
      "Protocolos operativos y de atención orientados al cuidado de la información del asociado.",
    cta: "Revisar cobertura",
    icon: ShieldCheck,
  },
  {
    title: "Pagos y Recaudos",
    description:
      "Canales habilitados para gestionar aportes y obligaciones de manera práctica y oportuna.",
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
    title: "Asesoría personalizada",
    description:
      "Atención individual para revisar perfil financiero y recomendar la mejor ruta.",
    icon: Building2,
  },
  {
    title: "Procesos claros",
    description:
      "Información simple, tiempos definidos y seguimiento visible en cada solicitud.",
    icon: MapPinned,
  },
  {
    title: "Cultura de ahorro",
    description:
      "Acciones formativas para fortalecer hábitos financieros responsables en el largo plazo.",
    icon: PiggyBank,
  },
];

export const officeItems: OfficeItem[] = [
  {
    city: "Bogotá D.C.",
    zone: "Sede principal (placeholder)",
    schedule: "Lunes a viernes, 8:00 a.m. a 5:00 p.m.",
    note: "Dirección referencial. Confirmar ubicación final antes de producción.",
  },
  {
    city: "Medellín",
    zone: "Punto de atención (placeholder)",
    schedule: "Lunes a viernes, 8:00 a.m. a 5:00 p.m.",
    note: "Dirección referencial. Confirmar ubicación final antes de producción.",
  },
  {
    city: "Cali",
    zone: "Punto de atención (placeholder)",
    schedule: "Lunes a viernes, 8:00 a.m. a 5:00 p.m.",
    note: "Dirección referencial. Confirmar ubicación final antes de producción.",
  },
  {
    city: "Canal digital",
    zone: "Atención virtual",
    schedule: "Respuesta en horario hábil",
    note: "Formulario y WhatsApp habilitados para radicar solicitudes.",
  },
];

export const faqItems = [
  {
    question: "¿Cómo me asocio a Caja Unión?",
    answer:
      "Desde esta landing puedes iniciar la solicitud en el formulario de contacto. Un asesor valida datos y te comparte los pasos de vinculación.",
  },
  {
    question: "¿Qué necesito para solicitar un producto?",
    answer:
      "Depende del tipo de producto. El equipo comercial te enviará requisitos actualizados y lista de documentos según tu perfil.",
  },
  {
    question: "¿El formulario ya está conectado a backend?",
    answer:
      "En este MVP se guarda en localStorage y confirma recepción. El código está preparado para reemplazar ese paso por un endpoint de API.",
  },
];
