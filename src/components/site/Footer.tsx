import Link from "next/link";
import { CONTACTO, NAV_LINKS } from "@/lib/site-content";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-petrol-deep text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 font-heading text-lg font-bold text-gold">
              &ldquo;Convertimos tus desechos en valor&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Compra, retiro y valorización de materiales industriales, cables y
              transformadores en toda Argentina.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5">
              {CONTACTO.telefonos.map((tel) => (
                <li key={tel.href}>
                  <a
                    href={tel.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gold-soft"
                  >
                    {tel.label}
                  </a>
                </li>
              ))}
              {CONTACTO.emails.map((mail) => (
                <li key={mail.href} className="break-all">
                  <a
                    href={mail.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gold-soft"
                  >
                    {mail.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACTO.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-gold-soft"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Ubicación
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {CONTACTO.ubicacion.zona}
              <br />
              {CONTACTO.ubicacion.direccion}
            </p>
            <a
              href={CONTACTO.sitio.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-slate-400 transition-colors hover:text-gold-soft"
            >
              {CONTACTO.sitio.label}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} Metales NT. Todos los derechos reservados.
          </p>
          <p>Polo Industrial Ezeiza, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
