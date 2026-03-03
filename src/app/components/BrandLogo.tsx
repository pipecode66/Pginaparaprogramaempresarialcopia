import { cn } from "./ui/utils";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className, compact = false }: BrandLogoProps) {
  return (
    <img
      src="/brand/logo-cajaunion.png"
      alt="Caja Union Cooperativa de Ahorro y Credito"
      className={cn("h-auto w-[184px]", compact && "w-[152px]", className)}
    />
  );
}
