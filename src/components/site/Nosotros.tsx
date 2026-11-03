import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const DESTACADOS = [
  "Transparencia comercial",
  "Seriedad y responsabilidad",
  "Pagos inmediatos",
  "Capacidad operativa nacional",
  "Seguridad, seguros, ART y protocolos industriales",
];

export function Nosotros() {
  return (
    <section
      id="nosotros"
      aria-labelledby="titulo-nosotros"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Composición fotográfica */}
          <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/nosotros-main.jpg"
                  alt="Operario de Metales NT trabajando con materiales industriales en planta"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>

              {/* Foto secundaria superpuesta */}
              <div className="absolute -bottom-10 -right-3 w-36 overflow-hidden rounded-xl border-4 border-white shadow-xl sm:-right-8 sm:w-48">
                <Image
                  src="/images/nosotros-sec.jpg"
                  alt="Izaje de bobinas de cable con grúa en obra"
                  width={600}
                  height={800}
                  sizes="(min-width: 640px) 192px, 144px"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>

              {/* Indicador de trayectoria */}
              <div className="absolute -top-7 -left-3 rounded-2xl bg-petrol px-6 py-4 shadow-xl sm:-left-7">
                <p className="font-heading text-4xl font-extrabold leading-none text-gold">
                  +25
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300">
                  años de trayectoria
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texto institucional */}
          <div>
            <SectionHeading
              align="left"
              kicker="Nosotros"
              title="Experiencia que genera confianza."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-steel">
                En Metales NT contamos con más de 25 años de trayectoria
                dedicados a la compra, retiro y gestión de materiales
                industriales en desuso. Nacimos como una empresa familiar y nos
                consolidamos como un referente confiable del sector energético,
                industrial y de la construcción.
              </p>
              <blockquote className="mt-6 border-l-2 border-gold pl-5 italic leading-relaxed text-slate-700">
                Nuestra misión es convertir los residuos industriales en valor,
                brindando a cada empresa una solución confiable, rápida y
                totalmente segura.
              </blockquote>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {DESTACADOS.map((destacado) => (
                  <li key={destacado} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {destacado}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#servicios"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
              >
                Conocé cómo trabajamos
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
