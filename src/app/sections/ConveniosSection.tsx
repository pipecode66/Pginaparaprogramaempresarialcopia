import type { LucideIcon } from "lucide-react";
import {
  Bike,
  BookOpenText,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Languages,
  Mountain,
  SmilePlus,
  Stethoscope,
  Utensils,
  UsersRound,
  Wrench,
  Eye,
} from "lucide-react";

type CoverTheme = {
  accent: string;
  icon: LucideIcon;
  label: string;
  soft: string;
  tint: string;
};

type ConvenioDirectoryItem = {
  category: string;
  cover?: keyof typeof coverThemes;
  logoLines: string[];
  logoSubline?: string;
  mark?: string;
  reservedCover?: boolean;
  title: string;
  tone: string;
};

const coverThemes = {
  community: {
    accent: "#f97316",
    icon: UsersRound,
    label: "Bienestar comunitario",
    soft: "#ecfdf3",
    tint: "#007a3d",
  },
  language: {
    accent: "#2563eb",
    icon: Languages,
    label: "Formación en idiomas",
    soft: "#eff6ff",
    tint: "#1d4ed8",
  },
  university: {
    accent: "#ef4444",
    icon: GraduationCap,
    label: "Educación superior",
    soft: "#fff7ed",
    tint: "#334155",
  },
  travel: {
    accent: "#22c55e",
    icon: Mountain,
    label: "Viajes y turismo",
    soft: "#ecfeff",
    tint: "#0369a1",
  },
  dental: {
    accent: "#0ea5e9",
    icon: SmilePlus,
    label: "Salud oral",
    soft: "#f0f9ff",
    tint: "#0369a1",
  },
  medical: {
    accent: "#84cc16",
    icon: Stethoscope,
    label: "Salud y asistencia",
    soft: "#f7fee7",
    tint: "#15803d",
  },
  optical: {
    accent: "#2563eb",
    icon: Eye,
    label: "Cuidado visual",
    soft: "#f8fafc",
    tint: "#1e40af",
  },
  food: {
    accent: "#b45309",
    icon: Utensils,
    label: "Gastronomía",
    soft: "#fffbeb",
    tint: "#713f12",
  },
  motorcycle: {
    accent: "#dc2626",
    icon: Bike,
    label: "Movilidad",
    soft: "#f8fafc",
    tint: "#1e3a8a",
  },
  urology: {
    accent: "#64748b",
    icon: HeartPulse,
    label: "Centro médico",
    soft: "#f1f5f9",
    tint: "#334155",
  },
  transit: {
    accent: "#ef4444",
    icon: ClipboardCheck,
    label: "Trámites de tránsito",
    soft: "#f8fafc",
    tint: "#111827",
  },
  mechanic: {
    accent: "#f97316",
    icon: Wrench,
    label: "Diagnóstico automotor",
    soft: "#eff6ff",
    tint: "#1d4ed8",
  },
  learning: {
    accent: "#1d4ed8",
    icon: BookOpenText,
    label: "Aprendizaje",
    soft: "#eef2ff",
    tint: "#1e3a8a",
  },
} satisfies Record<string, CoverTheme>;

const convenioDirectoryItems: ConvenioDirectoryItem[] = [
  {
    title: "Royal Films",
    category: "Entretenimiento",
    logoLines: ["ROYAL", "FILMS"],
    logoSubline: "Cine y entretenimiento",
    reservedCover: true,
    tone: "#243b88",
  },
  {
    title: "Fundación Virgilio Barco",
    category: "Bienestar social",
    logoLines: ["Fundación", "VIRGILIO BARCO"],
    logoSubline: "Programa aliado",
    reservedCover: true,
    tone: "#3f2f25",
  },
  {
    title: "Liga Colombiana Contra el Cáncer",
    category: "Salud",
    logoLines: ["LIGA COLOMBIANA", "CONTRA EL CÁNCER"],
    logoSubline: "Prevención y cuidado",
    mark: "+",
    reservedCover: true,
    tone: "#07558a",
  },
  {
    title: "Elaser Radiólogos",
    category: "Diagnóstico",
    logoLines: ["ELASER"],
    logoSubline: "Radiólogos",
    mark: "C",
    reservedCover: true,
    tone: "#9c168f",
  },
  {
    title: "FINEF",
    category: "Recreación y cultura",
    cover: "community",
    logoLines: ["FINEF"],
    logoSubline: "Fundación de integración educativa",
    mark: "*",
    tone: "#007a3d",
  },
  {
    title: "Active English Institute",
    category: "Idiomas",
    cover: "language",
    logoLines: ["Active", "English", "Institute"],
    logoSubline: "Tu mejor opción",
    tone: "#2563eb",
  },
  {
    title: "FESC",
    category: "Educación",
    cover: "university",
    logoLines: ["FESC"],
    logoSubline: "La Universidad",
    tone: "#4b5563",
  },
  {
    title: "Fomatours Travel",
    category: "Turismo",
    cover: "travel",
    logoLines: ["FOMATOURS"],
    logoSubline: "Agencia de viajes y turismo",
    mark: "F",
    tone: "#4caf50",
  },
  {
    title: "Odontoworld",
    category: "Odontología",
    cover: "dental",
    logoLines: ["Odontoworld"],
    logoSubline: "Un mundo de sonrisas",
    tone: "#1685c7",
  },
  {
    title: "ODONTO Cúcuta",
    category: "Odontología",
    cover: "dental",
    logoLines: ["ODONTO", "Cúcuta"],
    logoSubline: "Asistencia odontológica completa",
    tone: "#1d4ed8",
  },
  {
    title: "Dali Odontología Spa",
    category: "Odontología",
    cover: "dental",
    logoLines: ["Dali"],
    logoSubline: "Odontología Spa",
    tone: "#8b5a84",
  },
  {
    title: "AME Asistencia Médica",
    category: "Salud",
    cover: "medical",
    logoLines: ["ame"],
    logoSubline: "Asistencia Médica",
    mark: "+",
    tone: "#62b72f",
  },
  {
    title: "Óptica Científica",
    category: "Óptica",
    cover: "optical",
    logoLines: ["optica", "cientifica"],
    logoSubline: "Cuidado visual",
    tone: "#dc2626",
  },
  {
    title: "Óptica Visual",
    category: "Óptica",
    cover: "optical",
    logoLines: ["OPTICA VISUAL"],
    logoSubline: "Soluciones visuales",
    mark: "O",
    tone: "#1d4ed8",
  },
  {
    title: "La Llanerada",
    category: "Gastronomía",
    cover: "food",
    logoLines: ["La", "Llanerada"],
    logoSubline: "Autenticidad y calidad",
    tone: "#92400e",
  },
  {
    title: "Mundo Cross Suzuki",
    category: "Movilidad",
    cover: "motorcycle",
    logoLines: ["MUNDO", "CROSS"],
    logoSubline: "Suzuki - Colsag",
    tone: "#1e40af",
  },
  {
    title: "Uronorte",
    category: "Salud especializada",
    cover: "urology",
    logoLines: ["uronorte"],
    logoSubline: "Centro urológico",
    tone: "#64748b",
  },
  {
    title: "Uniremington",
    category: "Educación",
    cover: "learning",
    logoLines: ["UNIREMINGTON"],
    logoSubline: "Corporación universitaria",
    tone: "#075985",
  },
  {
    title: "Centro Visual Dr Marcelo Rubiano",
    category: "Óptica",
    cover: "optical",
    logoLines: ["CENTRO VISUAL"],
    logoSubline: "Dr Marcelo Rubiano",
    tone: "#075985",
  },
  {
    title: "Tramicar",
    category: "Tránsito",
    cover: "transit",
    logoLines: ["TRAMICAR"],
    logoSubline: "Expertos en trámites de tránsito",
    tone: "#111827",
  },
  {
    title: "CDA Avanzar",
    category: "Automotor",
    cover: "mechanic",
    logoLines: ["CDA AVANZAR"],
    logoSubline: "Centro de diagnóstico automotor",
    tone: "#1e3a8a",
  },
];

const convenioLogoSources: Record<string, string> = {
  "Active English Institute": "/convenios/logos/logoactiveenglish.png",
  "AME Asistencia Médica": "/convenios/logos/logoame.png",
  "CDA Avanzar": "/convenios/logos/logocdaavanzar.png",
  "Centro Visual Dr Marcelo Rubiano": "/convenios/logos/logocentrovisual.png",
  "Dali Odontología Spa": "/convenios/logos/logodaliodontologiaspa.png",
  "Elaser Radiólogos": "/convenios/logos/logoelaser.png",
  FESC: "/convenios/logos/logofesc.png",
  FINEF: "/convenios/logos/logofinef.png",
  "Fomatours Travel": "/convenios/logos/logofomatours.png",
  "Fundación Virgilio Barco": "/convenios/logos/logovirgiliobarco.png",
  "La Llanerada": "/convenios/logos/logolallanerada.png",
  "Liga Colombiana Contra el Cáncer": "/convenios/logos/logoligaccc.png",
  "Mundo Cross Suzuki": "/convenios/logos/logosuzuki.png",
  "ODONTO Cúcuta": "/convenios/logos/logoodontocucuta.png",
  Odontoworld: "/convenios/logos/logoodontoworld.png",
  "Óptica Científica": "/convenios/logos/logoopticacientifica.png",
  "Óptica Visual": "/convenios/logos/logoopticavisual.png",
  "Royal Films": "/convenios/logos/logoroyalfilms.png",
  Tramicar: "/convenios/logos/logotramicar.png",
  Uniremington: "/convenios/logos/logouniremington.png",
  Uronorte: "/convenios/logos/logouronorte.png",
};

const convenioCoverSources: Record<string, string> = {
  "Active English Institute": "/convenios/covers/active-english-institute.jpg",
  "AME Asistencia Médica": "/convenios/covers/ame-asistencia-medica.jpg",
  "CDA Avanzar": "/convenios/covers/cda-avanzar.jpg",
  "Centro Visual Dr Marcelo Rubiano":
    "/convenios/covers/centro-visual-dr-marcelo-rubiano.jpg",
  "Dali Odontología Spa": "/convenios/covers/dali-odontologia-spa.jpg",
  "Elaser Radiólogos": "/convenios/covers/elaser-radiologos.jpg",
  FESC: "/convenios/covers/fesc.jpg",
  FINEF: "/convenios/covers/finef.jpg",
  "Fomatours Travel": "/convenios/covers/fomatours-travel.jpg",
  "Fundación Virgilio Barco":
    "/convenios/covers/fundacion-virgilio-barco.jpg",
  "La Llanerada": "/convenios/covers/la-llanerada.jpg",
  "Liga Colombiana Contra el Cáncer":
    "/convenios/covers/liga-colombiana-contra-el-cancer.jpg",
  "Mundo Cross Suzuki": "/convenios/covers/mundo-cross-suzuki.jpg",
  "ODONTO Cúcuta": "/convenios/covers/odonto-cucuta.jpg",
  Odontoworld: "/convenios/covers/odontoworld.jpg",
  "Óptica Científica": "/convenios/covers/optica-cientifica.jpg",
  "Óptica Visual": "/convenios/covers/optica-visual.jpg",
  "Royal Films": "/convenios/covers/royal-films.jpg",
  Tramicar: "/convenios/covers/tramicar.jpg",
  Uniremington: "/convenios/covers/uniremington.jpg",
  Uronorte: "/convenios/covers/uronorte.jpg",
};

function ReservedCover({ title }: { title: string }) {
  return (
    <div
      aria-label={`Portada real pendiente para ${title}`}
      className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85),transparent_28%),linear-gradient(135deg,#e5e7eb,#f8fafc)]"
      role="img"
    >
      <span className="rounded-full border border-zinc-300 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
        Portada pendiente
      </span>
    </div>
  );
}

function GeneratedCover({ cover, title }: { cover: keyof typeof coverThemes; title: string }) {
  const theme = coverThemes[cover];
  const Icon = theme.icon;

  return (
    <div
      aria-label={`Portada generada para ${title}: ${theme.label}`}
      className="relative flex h-full items-center justify-center overflow-hidden"
      role="img"
      style={{
        background: `linear-gradient(135deg, ${theme.soft} 0%, #ffffff 45%, ${theme.tint} 150%)`,
      }}
    >
      <span
        aria-hidden="true"
        className="absolute -left-12 -top-10 size-44 rounded-full opacity-20"
        style={{ backgroundColor: theme.accent }}
      />
      <span
        aria-hidden="true"
        className="absolute -right-16 bottom-6 size-56 rounded-full opacity-15"
        style={{ backgroundColor: theme.tint }}
      />
      <span
        aria-hidden="true"
        className="absolute left-8 top-8 h-16 w-28 rounded-full border-[10px] opacity-20"
        style={{ borderColor: theme.accent }}
      />

      <div
        className="relative flex size-24 items-center justify-center rounded-full border border-white/70 bg-white/75 shadow-[0_18px_48px_rgba(15,23,42,0.18)] backdrop-blur"
        style={{ color: theme.tint }}
      >
        <Icon aria-hidden="true" className="size-11" />
      </div>
    </div>
  );
}

export function ConveniosSection() {
  return (
    <section id="convenios" className="scroll-mt-24 bg-muted/45 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Convenios
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Aliados para bienestar, salud, educación, recreación y servicios
          </h2>
          <p className="mt-4 text-muted-foreground">
            Este directorio reune los convenios disponibles para asociados. Los
            logos oficiales y portadas generadas se integran en cada tarjeta para
            identificar mejor cada aliado.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {convenioDirectoryItems.map((item) => {
            const logoSrc = convenioLogoSources[item.title];
            const coverSrc = convenioCoverSources[item.title];

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-lg border border-border/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] border-b border-border/70">
                  {coverSrc ? (
                    <img
                      src={coverSrc}
                      alt={`Portada ilustrativa de ${item.title}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : item.reservedCover || !item.cover ? (
                    <ReservedCover title={item.title} />
                  ) : (
                    <GeneratedCover cover={item.cover} title={item.title} />
                  )}
                </div>

                <div className="flex min-h-[168px] items-center justify-center bg-white p-6 text-center">
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={`Logo de ${item.title}`}
                      className="mx-auto max-h-24 max-w-[210px] object-contain"
                      loading="lazy"
                    />
                  ) : null}

                  <p className="sr-only">{item.category}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
