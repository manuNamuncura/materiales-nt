import { NextResponse } from "next/server";
import { z } from "zod";

const contactoSchema = z.object({
  nombre: z.string().trim().min(2, "Nombre inválido").max(120),
  empresa: z.string().trim().max(160).optional().or(z.literal("")),
  telefono: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 6, "Teléfono inválido"),
  email: z.email("Correo electrónico inválido").max(160),
  tipoMaterial: z.string().trim().min(1, "Tipo de material requerido").max(120),
  descripcion: z.string().trim().max(2000).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Cuerpo de la solicitud inválido." },
      { status: 400 }
    );
  }

  const parsed = contactoSchema.safeParse(body);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      if (!errors[field]) errors[field] = issue.message;
    }
    return NextResponse.json(
      { ok: false, message: "Hay campos inválidos.", errors },
      { status: 400 }
    );
  }

  // Demo: la consulta se valida y se acepta. Aquí se integraría el envío
  // de correo o el almacenamiento cuando el cliente defina el backend real.
  return NextResponse.json({
    ok: true,
    message: "Consulta recibida. Te contactaremos a la brevedad.",
  });
}
