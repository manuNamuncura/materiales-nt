import { SERVICIOS } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="titulo-servicios"
      className="relative overflow-hidden bg-petrol py-20 sm:py-28"
    >
      {/* Acento decorativo sutil */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          kicker="Servicios"
          title="Soluciones industriales de principio a fin."
          description="Nos ocupamos de todo el proceso: desde la evaluación y la compra hasta el desmontaje, el retiro y el pago."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICIOS.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <Reveal key={servicio.titulo} delay={(index % 2) * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.07]">
                  <span
                    className="pointer-events-none absolute right-6 top-5 font-heading text-5xl font-extrabold text-white/[0.07] transition-colors duration-300 group-hover:text-gold/15"
                    aria-hidden="true"
                  >
                    {servicio.num}
                  </span>

                  <span className="flex h-13 w-13 items-center justify-center rounded-lg bg-gold/15 p-3.5">
                    <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-heading text-xl font-bold text-white">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {servicio.descripcion}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
