import Image from "next/image";
import { PLANTA_FEATURES, PLANTA_GALERIA } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Planta() {
  return (
    <section
      id="infraestructura"
      aria-labelledby="titulo-planta"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            align="left"
            kicker="Infraestructura"
            title="Nuestra planta de reciclaje."
            description="Contamos con un depósito industrial en Buenos Aires, equipado para recibir, clasificar y procesar materiales."
          />
          <Reveal delay={0.1} className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-relaxed text-steel lg:text-right">
              Una infraestructura propia que nos permite trabajar con procesos
              ordenados, eficientes y claros en cada operación.
            </p>
          </Reveal>
        </div>

        {/* Características de la planta */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLANTA_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.titulo} delay={(index % 3) * 0.07}>
                <div className="flex h-full items-start gap-4 rounded-xl bg-mist p-5 transition-colors duration-300 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-slate-200">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-petrol">
                    <Icon className="h-5 w-5 text-gold-soft" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-petrol">
                      {feature.titulo}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-steel">
                      {feature.descripcion}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Galería fotográfica */}
        <div className="mt-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Galería
            </p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-petrol">
              Nuestra infraestructura en imágenes
            </h3>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLANTA_GALERIA.map((foto, index) => (
              <Reveal key={foto.src} delay={(index % 3) * 0.07}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-petrol/80 via-petrol/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
                    {foto.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
