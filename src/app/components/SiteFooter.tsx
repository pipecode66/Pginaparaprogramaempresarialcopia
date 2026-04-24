import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Heart, Landmark, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { BrandLogo } from "./BrandLogo";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/micajaunion/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/caja_union/",
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573125038082",
    icon: WhatsAppIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCRide2uQKnErEy74KYypiGA",
    icon: YouTubeIcon,
  },
  {
    label: "X",
    href: "https://x.com/MiCajaUnion",
    icon: TwitterIcon,
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="border-t border-border bg-muted/55">
        <div className="container mx-auto grid gap-8 px-4 py-12 text-muted-foreground md:grid-cols-2 md:items-center">
          <div className="flex items-center justify-center gap-4 text-center">
            <ShieldCheck
              aria-hidden="true"
              className="size-12 text-muted-foreground/70"
            />
            <div>
              <p className="text-3xl font-bold tracking-tight">FOGACOOP</p>
              <p className="text-sm font-semibold">
                Fondo de Garantías de Entidades Cooperativas
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-center">
            <Landmark
              aria-hidden="true"
              className="size-12 text-muted-foreground/70"
            />
            <div>
              <p className="text-3xl font-bold tracking-tight">Supersolidaria</p>
              <p className="text-sm font-semibold">
                Superintendencia de la Economía Solidaria
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center">
          <Link to="/" aria-label="Caja Union inicio">
            <BrandLogo className="w-[240px] brightness-0 invert" />
          </Link>

          <nav aria-label="Redes sociales del footer" className="mt-8 flex gap-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${item.label} de Caja Unión`}
                  className="inline-flex size-7 items-center justify-center text-white transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon aria-hidden="true" className="size-6" fontSize="inherit" />
                </a>
              );
            })}
          </nav>

          <div className="mt-6 space-y-2 text-base font-bold text-white">
            <p>Av. 1 #11-66, Cúcuta, Norte de Santander</p>
            <p>Tel: 312 503 8082</p>
          </div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-1 text-sm text-white md:text-base">
            <span>Copyright 2026 Caja Unión | Hecho por</span>
            <span>por Zivra Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
