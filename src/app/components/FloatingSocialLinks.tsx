import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
  return (
    <nav
      aria-label="Redes sociales"
      className="fixed left-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:left-5"
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${item.label} de Caja Union`}
            className="inline-flex size-12 items-center justify-center rounded-full bg-foreground text-background shadow-[0_12px_28px_rgba(7,20,13,0.32)] transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-14"
          >
            <Icon className="size-5 sm:size-6" fontSize="inherit" />
          </a>
        );
      })}
    </nav>
  );
}
