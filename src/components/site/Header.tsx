"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, CONTACTO } from "@/lib/site-content";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al agrandar la ventana
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-white/10 bg-petrol/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Metales NT - Inicio"
        >
          <Logo />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-sm font-medium text-slate-200 transition-colors hover:text-white"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACTO.telefonos[0].href}
            className="hidden items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-gold-soft xl:flex"
            aria-label={`Llamar al ${CONTACTO.telefonos[0].label}`}
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            {CONTACTO.telefonos[0].label}
          </a>

          <Link
            href="#contacto"
            className="hidden items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-petrol-deep shadow-md shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-petrol sm:inline-flex"
          >
            Solicitar cotización
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          {/* Botón hamburguesa */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="menu-mobile"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-petrol lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3.5 text-base font-semibold text-petrol-deep transition-colors hover:bg-gold-soft"
                >
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
