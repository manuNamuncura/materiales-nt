"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Banknote,
  Handshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const TRUST_ITEMS = [
  { icon: MapPin, label: "Retiros en todo el país" },
  { icon: Banknote, label: "Pagos inmediatos" },
  { icon: Handshake, label: "Compra directa, sin intermediarios" },
  { icon: ShieldCheck, label: "EPP, ART y seguros" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      aria-label="Presentación de Metales NT"
      className="relative flex min-h-svh flex-col overflow-hidden bg-petrol"
    >
      {/* Fotografía industrial de fondo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-petrol via-petrol/85 to-petrol/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-petrol via-transparent to-petrol/60" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="max-w-2xl"
        >
          <motion.p
            variants={reduceMotion ? undefined : item}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-soft backdrop-blur-sm"
          >
            <Award className="h-4 w-4 text-gold" aria-hidden="true" />
            +25 años de trayectoria
          </motion.p>

          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Convertimos tus desechos en{" "}
            <span className="text-gold">valor</span>.
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            Compramos, retiramos y valorizamos materiales industriales, cables y
            transformadores en toda Argentina.
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-petrol-deep shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-petrol"
            >
              Solicitar cotización
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Conocer nuestros servicios
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Franja de confianza */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative border-t border-white/10 bg-petrol/60 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15">
                <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-200">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
