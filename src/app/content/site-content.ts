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
    label: "Union Empresarial",
    href: "https://v0-caja-union-pie.vercel.app/",
    external: true,
  },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Oficinas", href: "#oficinas" },
  { label: "Contacto", href: "#contacto" },
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
    question: "Donde esta ubicada la sede principal?",
    answer:
      "La sede principal esta ubicada en la Av. 1 #11-66, Cucuta, Norte de Santander. En la seccion de oficinas puedes abrir la ubicacion directamente en Google Maps.",
  },
  {
    question: "Cual es el horario de atencion?",
    answer:
      "La atencion presencial en la sede principal funciona de lunes a viernes, de 8:00 a.m. a 5:00 p.m.",
  },
  {
    question: "Puedo recibir asesoria antes de elegir un producto?",
    answer:
      "Si. Puedes escribir por el formulario de contacto o usar el boton de WhatsApp para recibir orientacion inicial segun tu necesidad.",
  },
  {
    question: "Que canales tengo para comunicarme con Caja Union?",
    answer:
      "Puedes contactarte desde esta pagina por el formulario, el acceso directo a WhatsApp y la atencion presencial en la sede principal.",
  },
];
