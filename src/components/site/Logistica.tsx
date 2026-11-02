import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Container, Construction, Truck, Weight } from "lucide-react";
import { FLOTA, LOGISTICA_FEATURES } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FLOTA_ICONS = [Truck, Container, Weight, Construction];

export function Logistica() {
  return (
    <section
      id="logistica"
      aria-labelledby="titulo-logistica"
      className="bg-industrial py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Texto */}
          <div>
            <SectionHeading
              dark
              align="left"
              kicker="Logística"
              title="Retiramos en todo el país."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-slate-300">
                En Metales NT realizamos retiros en cualquier punto del país con
                una flota preparada para trabajos industriales: camiones,
                carretones, hidrogrúas y grúas telescópicas.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                Trabajamos con equipos propios y tercerizados que cumplen con
                todas las habilitaciones y seguros. Garantizamos seguridad,
                puntualidad y profesionalismo en cada operación, dentro de
                plantas industriales, obradores, depósitos y yacimientos.
              </p>

              {/* Flota */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {FLOTA.map((vehiculo, index) => {
                  const Icon = FLOTA_ICONS[index % FLOTA_ICONS.length];
                  return (
                    <span
                      key={vehiculo}
                      className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-soft"
                    >
                      <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                      {vehiculo}
                    </span>
                  );
                })}
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {LOGISTICA_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <Check className="h-3.5 w-3.5 text-gold-soft" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contacto"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
              >
                Coordiná el retiro de tus materiales
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          {/* Composición fotográfica */}
          <Reveal className="mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative pr-6 pb-6 sm:pr-10 sm:pb-10">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/logistica-main.jpg"
                  alt="Camión industrial cargado con bobinas de cables y autoelevadora en depósito"
                  width={1100}
                  height={825}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0 right-0 w-32 overflow-hidden rounded-xl border-4 border-industrial shadow-xl sm:w-44">
                <Image
                  src="/images/logistica-1.jpg"
                  alt="Grúa realizando maniobra de izaje de estructura metálica"
                  width={700}
                  height={928}
                  sizes="(min-width: 640px) 176px, 128px"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
