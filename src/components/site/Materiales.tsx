import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MATERIALES } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Materiales() {
  return (
    <section
      id="materiales"
      aria-labelledby="titulo-materiales"
      className="bg-mist py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Materiales que compramos"
          title="Compramos una amplia variedad de materiales y equipos industriales."
          description="Cada material se clasifica y valúa en el momento, con criterios transparentes desde el primer contacto."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALES.map((material, index) => {
            const Icon = material.icon;
            return (
              <Reveal key={material.titulo} delay={(index % 3) * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={material.imagen}
                      alt={material.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-petrol/40 to-transparent opacity-60"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-petrol/5">
                        <Icon className="h-5 w-5 text-petrol" aria-hidden="true" />
                      </span>
                      <h3 className="font-heading text-lg font-bold leading-snug text-petrol">
                        {material.titulo}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-steel">
                      {material.descripcion}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {material.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      <span className="inline-flex rounded-full bg-petrol px-3.5 py-1.5 text-xs font-semibold text-gold-soft">
                        {material.spec}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* Tarjeta CTA para completar la grilla */}
          <Reveal delay={0.16}>
            <article className="flex h-full flex-col justify-between rounded-xl bg-petrol p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  ¿Tenés otro material?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Si tenés equipos o materiales industriales en desuso que no
                  están en esta lista, escribinos: lo evaluamos sin costo y te
                  damos una respuesta rápida.
                </p>
              </div>
              <Link
                href="#contacto"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-petrol-deep transition-all hover:bg-gold-soft"
              >
                Consultar por tu material
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
