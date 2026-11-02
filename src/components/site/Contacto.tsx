"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { CONTACTO, TIPOS_MATERIAL } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type FormState = {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  tipoMaterial: string;
  descripcion: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  nombre: "",
  empresa: "",
  telefono: "",
  email: "",
  tipoMaterial: "",
  descripcion: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (form.nombre.trim().length < 2) {
    errors.nombre = "Ingresá tu nombre y apellido.";
  }
  if (form.telefono.replace(/\D/g, "").length < 6) {
    errors.telefono = "Ingresá un teléfono de contacto válido.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Ingresá un correo electrónico válido.";
  }
  if (!form.tipoMaterial) {
    errors.tipoMaterial = "Seleccioná el tipo de material.";
  }
  return errors;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const inputBase =
  "h-11 w-full rounded-lg border bg-white px-3.5 text-sm text-slate-800 shadow-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/30 disabled:cursor-not-allowed disabled:opacity-60";

export function Contacto() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section
      id="contacto"
      aria-labelledby="titulo-contacto"
      className="relative overflow-hidden bg-petrol py-20 sm:py-28"
    >
      {/* Acentos decorativos sutiles */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Información de contacto */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                <span className="hidden h-px w-8 bg-gold/70 sm:block" aria-hidden="true" />
                Contacto
              </p>
              <h2
                id="titulo-contacto"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
              >
                ¿Tenés materiales industriales para vender?
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
                Contactanos y encontrá una solución rápida, segura y
                transparente para tus materiales.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15">
                    <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Teléfonos
                    </h3>
                    <div className="mt-1.5 flex flex-col gap-1 sm:flex-row sm:gap-5">
                      {CONTACTO.telefonos.map((tel) => (
                        <a
                          key={tel.href}
                          href={tel.href}
                          className="text-[15px] font-medium text-white transition-colors hover:text-gold-soft"
                        >
                          {tel.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15">
                    <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Correos electrónicos
                    </h3>
                    <div className="mt-1.5 flex flex-col gap-1">
                      {CONTACTO.emails.map((mail) => (
                        <a
                          key={mail.href}
                          href={mail.href}
                          className="break-all text-[15px] font-medium text-white transition-colors hover:text-gold-soft"
                        >
                          {mail.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15">
                    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Ubicación
                    </h3>
                    <p className="mt-1.5 text-[15px] font-medium text-white">
                      {CONTACTO.ubicacion.zona}
                    </p>
                    <p className="text-[15px] text-slate-300">
                      {CONTACTO.ubicacion.direccion}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15">
                    <Globe className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Sitio web
                    </h3>
                    <a
                      href={CONTACTO.sitio.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-[15px] font-medium text-white transition-colors hover:text-gold-soft"
                    >
                      {CONTACTO.sitio.label}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={CONTACTO.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#25d366] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25d366]/20 transition-all hover:-translate-y-0.5 hover:bg-[#2be372]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {CONTACTO.whatsapp.label}
              </a>
            </Reveal>
          </div>

          {/* Formulario de cotización */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-9">
              {status === "success" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                    <CheckCircle2 className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-extrabold text-petrol">
                    ¡Consulta enviada!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel">
                    Gracias por contactarte con Metales NT. Un asesor te va a
                    responder a la brevedad para coordinar la evaluación de tus
                    materiales.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-petrol transition-colors hover:border-gold hover:text-gold-dark"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h3 className="font-heading text-2xl font-extrabold text-petrol">
                    Solicitar cotización
                  </h3>
                  <p className="mt-2 text-sm text-steel">
                    Completá el formulario y te contactamos para evaluar tus
                    materiales sin costo.
                  </p>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="campo-nombre"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Nombre y apellido <span className="text-gold-dark">*</span>
                      </label>
                      <input
                        id="campo-nombre"
                        type="text"
                        autoComplete="name"
                        value={form.nombre}
                        onChange={(e) => setField("nombre", e.target.value)}
                        aria-invalid={Boolean(errors.nombre)}
                        aria-describedby={errors.nombre ? "error-nombre" : undefined}
                        placeholder="Juan Pérez"
                        className={cn(
                          inputBase,
                          errors.nombre
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-300 focus:border-gold"
                        )}
                      />
                      {errors.nombre && (
                        <p id="error-nombre" className="mt-1.5 text-xs text-red-600">
                          {errors.nombre}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="campo-telefono"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Teléfono <span className="text-gold-dark">*</span>
                      </label>
                      <input
                        id="campo-telefono"
                        type="tel"
                        autoComplete="tel"
                        value={form.telefono}
                        onChange={(e) => setField("telefono", e.target.value)}
                        aria-invalid={Boolean(errors.telefono)}
                        aria-describedby={errors.telefono ? "error-telefono" : undefined}
                        placeholder="11-0000-0000"
                        className={cn(
                          inputBase,
                          errors.telefono
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-300 focus:border-gold"
                        )}
                      />
                      {errors.telefono && (
                        <p id="error-telefono" className="mt-1.5 text-xs text-red-600">
                          {errors.telefono}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="campo-email"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Correo electrónico <span className="text-gold-dark">*</span>
                      </label>
                      <input
                        id="campo-email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "error-email" : undefined}
                        placeholder="juan@empresa.com.ar"
                        className={cn(
                          inputBase,
                          errors.email
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-300 focus:border-gold"
                        )}
                      />
                      {errors.email && (
                        <p id="error-email" className="mt-1.5 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="campo-empresa"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Empresa
                      </label>
                      <input
                        id="campo-empresa"
                        type="text"
                        autoComplete="organization"
                        value={form.empresa}
                        onChange={(e) => setField("empresa", e.target.value)}
                        placeholder="Nombre de tu empresa"
                        className={cn(inputBase, "border-slate-300 focus:border-gold")}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="campo-material"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Tipo de material <span className="text-gold-dark">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="campo-material"
                          value={form.tipoMaterial}
                          onChange={(e) => setField("tipoMaterial", e.target.value)}
                          aria-invalid={Boolean(errors.tipoMaterial)}
                          aria-describedby={errors.tipoMaterial ? "error-material" : undefined}
                          className={cn(
                            inputBase,
                            "appearance-none pr-10",
                            !form.tipoMaterial && "text-slate-400",
                            errors.tipoMaterial
                              ? "border-red-400 focus:border-red-400"
                              : "border-slate-300 focus:border-gold"
                          )}
                        >
                          <option value="" disabled>
                            Seleccioná una opción
                          </option>
                          {TIPOS_MATERIAL.map((tipo) => (
                            <option key={tipo} value={tipo} className="text-slate-800">
                              {tipo}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                          aria-hidden="true"
                        />
                      </div>
                      {errors.tipoMaterial && (
                        <p id="error-material" className="mt-1.5 text-xs text-red-600">
                          {errors.tipoMaterial}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="campo-descripcion"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Descripción de la consulta
                      </label>
                      <textarea
                        id="campo-descripcion"
                        rows={4}
                        value={form.descripcion}
                        onChange={(e) => setField("descripcion", e.target.value)}
                        placeholder="Contanos brevemente qué materiales tenés, cantidades aproximadas y dónde se encuentran."
                        className={cn(
                          inputBase,
                          "h-auto resize-none py-3 border-slate-300 focus:border-gold"
                        )}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                      No pudimos enviar tu consulta. Intentá de nuevo o
                      contactanos por teléfono.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-base font-semibold text-petrol-deep shadow-md shadow-gold/25 transition-all hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Solicitar cotización
                      </>
                    )}
                  </button>
                  <p className="mt-3.5 text-center text-xs text-steel">
                    Tus datos se usan únicamente para responder tu consulta.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
