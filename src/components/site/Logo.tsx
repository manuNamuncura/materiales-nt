import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

/**
 * Lockup de marca: isotipo real de Metales NT (extraído del brochure)
 * + wordmark tipográfico provisorio. No modifica el nombre de la empresa.
 */
export function Logo({ className, iconClassName, textClassName }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/images/logo-icon.png"
        alt="Isotipo de Metales NT"
        width={48}
        height={48}
        className={cn("h-10 w-10 shrink-0", iconClassName)}
        priority
      />
      <span
        className={cn(
          "font-heading text-xl font-extrabold tracking-tight text-white",
          textClassName
        )}
      >
        METALES<span className="text-gold">NT</span>
      </span>
    </span>
  );
}
