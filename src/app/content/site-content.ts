import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  CarFront,
  CreditCard,
  FileCheck2,
  FileText,
  Film,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartHandshake,
  Landmark,
  MapPinned,
  Newspaper,
  PiggyBank,
  ReceiptText,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export type AboutHighlight = {
  label: string;
  value: string;
};

export type AboutItem = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  cta?: NavLink;
};

export type ProductItem = {
  title: string;
  description: string;
  rate: string;
  term: string;
  highlights: string[];
  requirements?: string[];
  cta: string;
  icon: LucideIcon;
};

export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  items: ProductItem[];
};

export type AccessCard = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  primaryCta: NavLink;
  secondaryCta?: NavLink;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ConvenioItem = {
  title: string;
  summary: string;
  benefit: string;
  access: string;
  href: string;
  icon: LucideIcon;
};

export type NewsItem = {
  category: string;
  title: string;
  date: string;
  excerpt: string;
};

export type OfficeItem = {
  city: string;
  zone: string;
  address: string;
  schedule: string;
  note: string;
};

export const directoryLink: NavLink = {
  label: "Directorio",
  href: "https://v0-caja-union-pie.vercel.app/",
  external: true,
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Acerca de",
    href: "/nosotros",
    children: [
      {
        label: "Nosotros",
        href: "/nosotros",
        description: "Panorama institucional y enfoque cooperativo.",
      },
    ],
  },
  {
    label: "Productos",
    href: "/productos",
    children: [
      {
        label: "Portafolio",
        href: "/productos",
        description: "Resumen completo de productos y accesos.",
      },
    ],
  },
  {
    label: "Beneficios",
    href: "/beneficios",
    children: [
      {
        label: "Beneficios",
        href: "/beneficios",
        description: "Valor cooperativo y acompanamiento cercano.",
      },
      {
        label: "Convenios",
        href: "/convenios",
        description: "Beneficios culturales, educativos y recreativos.",
      },
      {
        label: "Gestores de Convenios",
        href: "/gestores-convenios",
        description: "Espacio reservado para el software en PHP.",
      },
    ],
  },
  { label: "Oficinas", href: "/oficinas" },
  { label: "Contacto", href: "/contacto" },
];

export const aboutHighlights: AboutHighlight[] = [
  { label: "Trayectoria institucional", value: "Desde 2008" },
  { label: "Cobertura presencial", value: "Cucuta" },
  { label: "Atencion cercana", value: "Ahorro, credito y convenios" },
];

export const aboutItems: AboutItem[] = [
  {
    id: "nosotros",
    title: "Nosotros",
    description:
      "Caja Union acompana a asociados, familias y empresas con servicios de ahorro, credito, educacion y bienestar, desde un modelo cooperativo orientado al desarrollo regional.",
    points: [
      "Enfoque humano, solidario y responsable.",
      "Acompanamiento financiero con cercania comercial.",
      "Servicios pensados para bienestar individual y colectivo.",
    ],
    icon: Users,
  },
  {
    id: "vision-mision",
    title: "Vision y Mision",
    description:
      "La cooperativa proyecta crecimiento sostenible con acceso facil a sus productos y una experiencia de servicio confiable.",
    points: [
      "Mision: contribuir al progreso del asociado y su familia con transparencia, cercania y responsabilidad social.",
      "Vision: consolidarse al 2027 como una cooperativa innovadora y de facil acceso.",
      "Talento humano comprometido y soporte tecnologico adecuado.",
    ],
    icon: Target,
  },
  {
    id: "propuesta-negocio",
    title: "Propuesta de Negocio",
    description:
      "La propuesta de valor publica de Caja Union se apoya en respuesta oportuna, costo competitivo, calidad del servicio y multiples canales de relacion.",
    points: [
      "Actitud y calidad humana en el servicio.",
      "Asesoria efectiva acorde con las necesidades del asociado.",
      "Seguridad, solidez y transparencia en la gestion.",
    ],
    icon: BriefcaseBusiness,
  },
  {
    id: "asambleas",
    title: "Asambleas",
    description:
      "El historico institucional visible incluye delegados 2023-2026, informes de gestion, reglamentos de asamblea y balance social.",
    points: [
      "Historial de informes y documentos de gestion.",
      "Reglamentos y convocatorias de asamblea.",
      "Balance social y consulta institucional.",
    ],
    icon: ScrollText,
    cta: {
      label: "Ver referencia oficial",
      href: "https://cajaunion.coop/asambleas/",
      external: true,
    },
  },
  {
    id: "politicas",
    title: "Politicas, Estatutos y Codigos",
    description:
      "El marco documental institucional contempla politicas de seguridad TIC, tratamiento de datos, estatuto, codigo de etica y codigo de buen gobierno.",
    points: [
      "Politica de seguridad TIC.",
      "Politica de tratamiento de datos personales.",
      "Estatuto, codigo de etica y codigo de buen gobierno.",
    ],
    icon: FileText,
    cta: {
      label: "Consultar base documental",
      href: "https://cajaunion.coop/nosotros/",
      external: true,
    },
  },
  {
    id: "rte",
    title: "RTE",
    description:
      "El Regimen Tributario Especial publica informacion legal, fiscal y documental de la cooperativa para consulta institucional.",
    points: [
      "NIT 900.206.146-7 y domicilio en Cucuta, Norte de Santander.",
      "Objeto social asociado a ahorro, credito, educacion y solidaridad.",
      "Estados financieros, certificaciones e informe de gestion disponibles en su sitio publico.",
    ],
    icon: FileCheck2,
    cta: {
      label: "Abrir RTE",
      href: "https://cajaunion.coop/rte/",
      external: true,
    },
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: "ahorro-inversion",
    title: "Ahorro e Inversión",
    description:
      "Opciones para ahorrar, invertir y programar tus metas con disponibilidad, rentabilidad y acompañamiento cooperativo.",
    items: [
      {
        title: "CDAT",
        description:
          "Invierte tu dinero de forma rentable y segura con tasas competitivas. Es un Certificado de Depósito de Ahorro a Término que permite invertir por un plazo determinado y recibir al vencimiento el monto invertido más los intereses generados.",
        rate: "Tasas competitivas y preferenciales previamente acordadas.",
        term: "De 90 a 360 días, con opciones de 6, 9 y 12 meses.",
        highlights: [
          "Inversión por un plazo determinado.",
          "Monto mínimo de constitución: $200.000.",
          "Devolución al vencimiento del monto invertido más los intereses generados.",
          "Tasas preferenciales.",
        ],
        requirements: [
          "Documento de identificación original y fotocopia de la cédula ampliada al 150%.",
          "Monto mínimo de $200.000.",
          "Constancia de ingresos.",
          "Ser afiliado.",
        ],
        cta: "Solicitar CDAT",
        icon: Landmark,
      },
      {
        title: "Ahorro Unión",
        description:
          "¡Ahorrar te ayuda a cumplir tus sueños! Cuenta de ahorros con disponibilidad inmediata, rentabilidad mensual y posibilidad de descontar por nómina el valor que quieras ahorrar.",
        rate:
          "Rentabilidad mensual con generación de intereses diarios sobre el saldo promedio.",
        term: "Disponibilidad inmediata del dinero.",
        highlights: [
          "Apertura mínima: $20.000.",
          "Manejo por libreta de ahorros o tarjeta débito.",
          "Saldo mínimo en la cuenta: $20.000.",
          "Libreta de ahorro sin cuota de manejo.",
          "Tarjeta débito disponible según condiciones vigentes.",
        ],
        requirements: [
          "Copia de la cédula al 150%.",
          "Formulario de solicitud debidamente diligenciado.",
          "Monto de apertura: $27.000.",
          "Estar afiliado.",
        ],
        cta: "Abrir Ahorro Unión",
        icon: PiggyBank,
      },
      {
        title: "Chiquicuenta",
        description:
          "Forma grandes ahorradores. Enséñale a los más chiquitos de la casa el hábito de ahorrar para alcanzar cada uno de sus sueños.",
        rate:
          "Sin cuota mensual cuando el niño está afiliado con un representante asociado a Caja Unión.",
        term: "Para niños de 0 a 11 años.",
        highlights: [
          "Cuentas conjuntas y/o individuales de fácil manejo para los asociados.",
          "Cuenta creada para niños de cero (0) a once (11) años.",
          "Manejo a través de libreta de ahorros.",
          "Apertura desde $27.000.",
        ],
        requirements: [
          "Si el niño abre la cuenta, debe cancelar $29.000 de afiliación.",
          "Si el padre o acudiente abre la cuenta, debe cancelar $27.000 de afiliación.",
          "Copia del documento del acudiente ampliado al 150%.",
          "Copia de tarjeta de identidad o registro civil.",
        ],
        cta: "Abrir Chiquicuenta",
        icon: Sparkles,
      },
      {
        title: "Ahorro Unijoven",
        description:
          "Que los sueños sigan siendo su motivación al crecer. Cuenta de ahorro para jóvenes de 12 a 18 años.",
        rate: "Ahorro con disponibilidad mediante libreta de ahorros.",
        term: "Para jóvenes de 12 a 18 años.",
        highlights: [
          "Orientada a adolescentes a partir de los 12 años.",
          "Ahorro y disponibilidad del dinero mediante la libreta de ahorros.",
          "Diseñada para acompañar el crecimiento de sus metas.",
        ],
        requirements: [
          "Si se afilia, el padre debe cancelar $27.000.",
          "Cancelar $5.000 de la tarjeta.",
          "Cancelar $29.000.",
          "Copia de registro civil.",
        ],
        cta: "Abrir Ahorro Unijoven",
        icon: GraduationCap,
      },
      {
        title: "Línea de Ahorro Programado",
        description:
          "A un solo clic de alcanzar tus sueños. Ahorro que el afiliado realiza a través de cuotas periódicas, pactadas de acuerdo con una programación contractualmente definida entre el ahorrador y Caja Unión. Los intereses se liquidan en el último mes sobre el saldo promedio del mes, y el retiro se puede realizar al vencimiento del tiempo acordado, incluyendo capital e intereses.",
        rate:
          "Intereses liquidados en el último mes sobre el saldo promedio del mes.",
        term: "Plazos de 6, 9, 12, 18, 25 o 36 meses.",
        highlights: [
          "Dinámico y flexible.",
          "Monto mínimo para la constitución de un PAC: $25.000.",
          "Cuotas periódicas pactadas según programación contractual.",
          "Retiro al vencimiento del tiempo acordado, incluyendo capital e intereses.",
        ],
        requirements: [
          "Copia de la cédula al 150%.",
          "Monto de apertura: $27.000.",
          "Ahorrar mínimo 3 meses.",
        ],
        cta: "Programar ahorro",
        icon: WalletCards,
      },
    ],
  },
  {
    id: "creditos",
    title: "Creditos",
    description:
      "Lineas para libre inversion, estudio, unificacion de cartera, viajes, vehiculo y microempresa, sujetas a analisis y politicas vigentes.",
    items: [
      {
        title: "Creditos",
        description:
          "Portafolio general de financiacion para libre inversion y necesidades puntuales del asociado.",
        rate: "Tasas segun linea, estudio y tarifario vigente",
        term: "Plazos segun destino, pagaduria y habito de pago",
        highlights: [
          "Atencion personalizada desde el analisis comercial.",
          "Canales de pago digitales y presenciales.",
          "Cobertura para necesidades personales y productivas.",
        ],
        cta: "Solicitar asesoria",
        icon: HandCoins,
      },
      {
        title: "Crediaportes",
        description:
          "Linea de libre inversion cuya garantia principal son los aportes del asociado.",
        rate: "Tasas preferenciales vigentes",
        term: "Plazo maximo 48 meses",
        highlights: [
          "Cuota mensual fija.",
          "Sin codeudor.",
          "Proceso agil para asociados habilitados.",
        ],
        cta: "Evaluar cupo",
        icon: BadgeDollarSign,
      },
      {
        title: "Crediunion",
        description:
          "Credito en efectivo para libre inversion, con cupo diferenciado por modalidad con o sin libranza.",
        rate: "Tasa fija",
        term: "Hasta 48 meses con libranza y hasta 36 meses sin libranza",
        highlights: [
          "Hasta 50 SMMLV con libranza.",
          "Hasta 25 SMMLV sin libranza.",
          "Analisis segun experiencia crediticia y pagaduria.",
        ],
        cta: "Revisar condiciones",
        icon: Building2,
      },
      {
        title: "Crediestudio",
        description:
          "Credito orientado a continuidad academica y matriculas, divulgado comercialmente con convenio universitario.",
        rate: "Tasa publicada: 2%",
        term: "Plazo maximo 36 meses",
        highlights: [
          "Convenio exclusivo visible con la Universidad Simon Bolivar.",
          "Apoyo para continuar estudios.",
          "Requisitos sujetos al perfil del solicitante.",
        ],
        cta: "Solicitar apoyo academico",
        icon: BookOpenText,
      },
      {
        title: "Credicartera",
        description:
          "Producto para unificar obligaciones bajo una estructura mas ordenada para el asociado elegible.",
        rate: "Tasas competitivas",
        term: "Condiciones segun estudio de cartera",
        highlights: [
          "Pensado para reorganizar deudas.",
          "Dirigido a asociados con trayectoria y buen historial.",
          "Pago por transferencia o corresponsales aliados.",
        ],
        cta: "Unificar deudas",
        icon: ReceiptText,
      },
      {
        title: "Crediviajes",
        description:
          "Financiacion para giras tecnicas y actividades vacacionales o recreativas del asociado y su grupo familiar.",
        rate: "Tasas segun linea de viaje y estudio",
        term: "Plazo hasta 24 meses",
        highlights: [
          "Pago directo a la agencia de viajes.",
          "Cuotas fijas con opcion de prepago.",
          "Aplica a planes vacacionales y recreativos.",
        ],
        cta: "Planear viaje",
        icon: MapPinned,
      },
      {
        title: "Credivehiculo",
        description:
          "Producto para adquirir vehiculo con distintos esquemas de financiacion y acompanamiento comercial.",
        rate: "Tasas segun estudio y plan de financiacion",
        term: "Diferentes planes de financiacion",
        highlights: [
          "Aplica para compra de vehiculo.",
          "Pago por Banco de Bogota, Super Giros o PSE.",
          "Atencion desde oficinas o asesoria comercial.",
        ],
        cta: "Cotizar credito",
        icon: CarFront,
      },
      {
        title: "Microcredito",
        description:
          "Credito para capital de trabajo, compra de activos fijos o cancelacion de pasivos para microempresarios.",
        rate: "Tasas segun monto, actividad y estudio",
        term: "Condiciones segun evaluacion del negocio",
        highlights: [
          "Para actividades formales e informales.",
          "Requiere antiguedad minima de 12 meses en la actividad.",
          "Menos papeleo y acompanamiento cercano.",
        ],
        cta: "Fortalecer negocio",
        icon: BriefcaseBusiness,
      },
    ],
  },
  {
    id: "seguros",
    title: "Seguros",
    description:
      "Soluciones para proteger vida y patrimonio, con acompanamiento comercial y facilidades de financiacion donde aplique.",
    items: [
      {
        title: "Autoplus",
        description:
          "Seguro todo riesgo para automoviles y motocicletas con opcion de financiacion por lineas de credito de la cooperativa.",
        rate: "Prima segun estudio, vehiculo y cobertura",
        term: "Vigencia segun poliza contratada",
        highlights: [
          "Perdida total o parcial por hurto.",
          "Perdida total o parcial por danos.",
          "Responsabilidad civil extracontractual y proteccion patrimonial.",
        ],
        cta: "Solicitar cotizacion",
        icon: ShieldCheck,
      },
      {
        title: "Vida Grupo",
        description:
          "Cobertura para el asociado y su nucleo familiar, con pago mensual mediante estado de cuenta.",
        rate: "Prima economica segun edad y cobertura",
        term: "Pago mensual recurrente",
        highlights: [
          "Cobertura para conyuge, padres e hijos.",
          "Acompanamiento en reclamaciones.",
          "Ingreso hasta 70 anos para el amparo basico, segun publicacion institucional.",
        ],
        cta: "Proteger a mi familia",
        icon: HeartHandshake,
      },
    ],
  },
];

export const serviceAccessCards: AccessCard[] = [
  {
    id: "portal-transaccional",
    title: "Portal Transaccional",
    description:
      "Accede a los servicios transaccionales y a la guia oficial de ingreso publicada por la cooperativa.",
    details: [
      "Consulta y acceso a servicios en linea.",
      "Soporte rapido para primer ingreso.",
      "Canal util para operacion recurrente del asociado.",
    ],
    icon: CreditCard,
    primaryCta: {
      label: "Acceder al portal",
      href: "https://ceus.redcoopcentral.com/",
      external: true,
    },
    secondaryCta: {
      label: "Como ingreso",
      href: "https://cajaunion.coop/como-ingreso/",
      external: true,
    },
  },
  {
    id: "medios-pago",
    title: "Medios de Pago",
    description:
      "Caja Union publica canales como PSE, Banco de Bogota, Efecty y SuperGiros para recaudos y obligaciones.",
    details: [
      "Pagar en linea por PSE.",
      "Cuenta de ahorros Banco de Bogota 303081293.",
      "Convenio 10612 para recaudo por corresponsales.",
    ],
    icon: WalletCards,
    primaryCta: {
      label: "Pagar por PSE",
      href: "https://www.avalpaycenter.com/",
      external: true,
    },
    secondaryCta: {
      label: "Ver medios disponibles",
      href: "https://cajaunion.coop/metodos-de-pago/",
      external: true,
    },
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

export const convenioItems: ConvenioItem[] = [
  {
    title: "Royal Films",
    summary:
      "Convenio de entretenimiento para acceder a descuentos en entradas y combos de cine.",
    benefit: "Descuento publico visible del 10% en entradas 2D, 3D y combos seleccionados.",
    access:
      "Solicitud de certificacion de asociado en oficina o por lineas de atencion de Caja Union.",
    href: "https://cajaunion.coop/royal-films/",
    icon: Film,
  },
  {
    title: "Finef",
    summary:
      "Convenio con oferta de escuelas deportivas y culturales para asociados y beneficiarios.",
    benefit:
      "Incluye futbol, baloncesto, natacion, voleibol, patinaje, guitarra, piano, danzas y mas.",
    access:
      "Se solicita por correo o WhatsApp con nombre, telefono y correo de la persona interesada.",
    href: "https://cajaunion.coop/finef/",
    icon: Handshake,
  },
  {
    title: "Active English Institute",
    summary:
      "Convenio academico para formacion en ingles con horarios flexibles y modalidad semipersonalizada.",
    benefit:
      "Descuento publico visible del 20% en el programa estandar y duracion de 15 meses.",
    access:
      "Gestion desde los canales de Caja Union para validar el beneficio y el proceso de inscripcion.",
    href: "https://cajaunion.coop/active-english-institute/",
    icon: GraduationCap,
  },
];

export const newsItems: NewsItem[] = [
  {
    category: "Institucional",
    title: "XVII Asamblea Ordinaria de Delegados",
    date: "Actualidad visible en el portal institucional",
    excerpt:
      "Bloque destacado dentro del home oficial para contenido institucional y comunicacion con asociados.",
  },
  {
    category: "Eventos",
    title: "Actividades recreativas y culturales",
    date: "22 marzo 2024",
    excerpt:
      "Contenido visible en noticias y en el informe de gestion 2024, enfocado en integracion y bienestar de asociados y beneficiarios.",
  },
  {
    category: "Servicio al cliente",
    title: "Agrofer 17 junio 2023 servicio al cliente",
    date: "22 marzo 2024",
    excerpt:
      "Publicacion destacada dentro del historico visible del portal de Caja Union.",
  },
  {
    category: "Educacion financiera",
    title: "Fundacion VYC educacion financiera 15/febrero/2023",
    date: "22 marzo 2024",
    excerpt:
      "Actividad formativa orientada al fortalecimiento de habitos y conocimientos financieros de los asociados.",
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
    question: "Las tasas y plazos publicados son definitivos?",
    answer:
      "No. La pagina muestra informacion comercial de referencia consolidada desde el portal publico de Caja Union. Toda tasa, cupo, plazo y requisito debe confirmarse con el tarifario y estudio vigentes al momento de la solicitud.",
  },
  {
    question: "Como puedo pagar mis obligaciones o aportes?",
    answer:
      "Caja Union publica medios como PSE, Banco de Bogota, Efecty y SuperGiros. En la seccion de productos puedes abrir rapidamente el bloque de Medios de Pago.",
  },
  {
    question: "Donde consulto el portal transaccional?",
    answer:
      "Dentro de la seccion de productos encontraras el recuadro de Portal Transaccional con acceso directo al portal y a la guia oficial de ingreso.",
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
];
