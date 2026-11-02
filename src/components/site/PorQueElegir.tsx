import { DIFERENCIALES } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function PorQueElegir() {
  return (
    <section
      id="por-que-elegir"
      aria-labelledby="titulo-por-que"
      className="bg-mist py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Por qué elegir Metales NT"
          title="Confianza real, construida con hechos."
          description="Cumplimiento, responsabilidad y seriedad en cada paso del proceso. Por eso las empresas nos eligen."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIALES.map((diferencial, index) => {
            const Icon = diferencial.icon;
            return (
              <Reveal key={diferencial.texto} delay={(index % 3) * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-slate-200/70 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-petrol">
                    <Icon className="h-5 w-5 text-gold-soft" aria-hidden="true" />
                  </span>
                  <p className="pt-2 text-[15px] font-medium leading-snug text-slate-700">
                    {diferencial.texto}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
