import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
};

/** Encabezado de sección consistente: kicker dorado + título Manrope + descripción. */
export function SectionHeading({
  kicker,
  title,
  description,
  dark = false,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold",
          centered && "justify-center"
        )}
      >
        <span className="hidden h-px w-8 bg-gold/70 sm:block" aria-hidden="true" />
        {kicker}
        <span className="hidden h-px w-8 bg-gold/70 sm:block" aria-hidden="true" />
      </p>
      <h2
        className={cn(
          "mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]",
          dark ? "text-white" : "text-petrol"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-steel"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
