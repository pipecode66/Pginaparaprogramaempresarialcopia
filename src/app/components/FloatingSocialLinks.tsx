import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Share2, X } from "lucide-react";
import { useState } from "react";

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
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCRide2uQKnErEy74KYypiGA",
    icon: YouTubeIcon,
  },
];

export function FloatingSocialLinks() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Redes sociales"
      className="fixed left-5 bottom-5 z-40"
    >
      <div className="relative flex flex-col items-start">
        {open ? (
          <div className="absolute bottom-16 left-0 flex flex-col gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  title={item.label}
                  aria-label={`Abrir ${item.label} de Caja Union`}
                  className="inline-flex size-12 items-center justify-center rounded-full bg-foreground text-background shadow-[0_12px_28px_rgba(7,20,13,0.32)] transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon aria-hidden="true" className="size-5" fontSize="inherit" />
                  <span className="sr-only">{item.label}</span>
                </a>
              );
            })}
          </div>
        ) : null}

        <button
          type="button"
          title={open ? "Cerrar redes sociales" : "Abrir redes sociales"}
          aria-label={open ? "Cerrar redes sociales" : "Abrir redes sociales"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {open ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Share2 aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>
    </nav>
  );
}
