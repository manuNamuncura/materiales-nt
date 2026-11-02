import {
  Award,
  Banknote,
  Cable,
  ClipboardCheck,
  Cog,
  Droplets,
  Factory,
  Forklift,
  Handshake,
  HardHat,
  Layers,
  MapPin,
  Scissors,
  ShieldCheck,
  Thermometer,
  Truck,
  Users,
  Warehouse,
  Zap,
  ArrowLeftRight,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Datos de contacto (fuente: brochure oficial de Metales NT)          */
/* ------------------------------------------------------------------ */

export const CONTACTO = {
  telefonos: [
    { label: "11-3277-8731", href: "tel:+541132778731" },
    { label: "11-5958-5949", href: "tel:+541159585949" },
  ],
  emails: [
    { label: "Metalesnt@gmail.com", href: "mailto:Metalesnt@gmail.com" },
    { label: "gerencia@metalesnt.com.ar", href: "mailto:gerencia@metalesnt.com.ar" },
  ],
  ubicacion: {
    zona: "Polo Industrial Ezeiza – Buenos Aires",
    direccion: "Puente del Inca 2050",
  },
  sitio: { label: "www.metalesnt.com.ar", href: "https://www.metalesnt.com.ar" },
  whatsapp: {
    href: "https://wa.me/5491132778731",
    label: "Escribinos por WhatsApp",
  },
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Materiales", href: "#materiales" },
  { label: "Servicios", href: "#servicios" },
  { label: "Infraestructura", href: "#infraestructura" },
  { label: "Contacto", href: "#contacto" },
] as const;

/* ------------------------------------------------------------------ */
/* Materiales que compramos                                            */
/* ------------------------------------------------------------------ */

export type Material = {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
  items: string[];
  spec: string;
  imagen: string;
  alt: string;
};

export const MATERIALES: Material[] = [
  {
    icon: Cable,
    titulo: "Cables eléctricos",
    descripcion:
      "Bobinas y cables sueltos en cobre y aluminio, de obra o fuera de servicio.",
    items: [
      "Bobinas y cables sueltos",
      "Cobre y aluminio",
      "Blindados, armados y estándar",
      "Sobrantes de obra o fuera de servicio",
    ],
    spec: "Secciones de 1 mm² a 800 mm²",
    imagen: "/images/mat-cables.jpg",
    alt: "Bobinas de cables eléctricos de cobre apiladas en depósito industrial",
  },
  {
    icon: Zap,
    titulo: "Transformadores",
    descripcion:
      "Rurales, de distribución y de potencia, en cualquier estado y tecnología.",
    items: [
      "Secos, con aceite y encapsulados",
      "Monofásicos y trifásicos",
      "Rurales, de distribución y de potencia",
    ],
    spec: "Desde 10 kVA hasta 500 MVA",
    imagen: "/images/mat-transformadores.jpg",
    alt: "Transformadores eléctricos de distribución alineados en depósito",
  },
  {
    icon: Layers,
    titulo: "Metales ferrosos y no ferrosos",
    descripcion:
      "Metales industriales en caños, chapas, perfiles y hierros, listos para valorizar.",
    items: [
      "Cobre, bronce y aluminio",
      "Acero inoxidable y plomo",
      "Níquel, tungsteno y metales preciosos",
      "Caños, chapas, perfiles y hierros",
    ],
    spec: "Ferrosos y no ferrosos",
    imagen: "/images/mat-metales.jpg",
    alt: "Maquinaria pesada manipulando chatarra y metales para reciclaje industrial",
  },
  {
    icon: Factory,
    titulo: "Equipamiento energético e industrial",
    descripcion:
      "Equipos energéticos e industriales en desuso, incluso de gran porte.",
    items: [
      "Turbinas de gas y eléctricas",
      "Motores eléctricos y grupos electrógenos",
      "Barras, tableros y disyuntores",
      "Reactores de potencia y de neutro",
      "Equipos de frío industriales",
    ],
    spec: "Compra y retiro programado",
    imagen: "/images/mat-equipos.jpg",
    alt: "Turbina industrial de gran porte en planta de energía",
  },
  {
    icon: Thermometer,
    titulo: "Intercambiadores y equipos térmicos",
    descripcion:
      "Equipos térmicos de industria, completos o por componentes.",
    items: [
      "Intercambiadores de calor y de frío",
      "Radiadores",
      "Columnas, bombas y reactores",
    ],
    spec: "Relevamiento y valuación inmediata",
    imagen: "/images/mat-termicos.jpg",
    alt: "Intercambiadores de calor y radiadores industriales de metal",
  },
];

/* ------------------------------------------------------------------ */
/* Servicios                                                           */
/* ------------------------------------------------------------------ */

export type Servicio = {
  icon: LucideIcon;
  num: string;
  titulo: string;
  descripcion: string;
};

export const SERVICIOS: Servicio[] = [
  {
    icon: Handshake,
    num: "01",
    titulo: "Compra directa",
    descripcion:
      "Compradores directos, sin intermediarios: valores competitivos, negociación clara y transparente, y retiro programado de los materiales.",
  },
  {
    icon: HardHat,
    num: "02",
    titulo: "Desmontajes y desguaces in situ",
    descripcion:
      "Corte de estructuras, levantamiento de cables subterráneos y aéreos, desarmado de transformadores y desmontajes industriales en fábricas, plantas, centrales, depósitos y obras. Cumplimiento estricto de EPP, ART y seguros.",
  },
  {
    icon: ClipboardCheck,
    num: "03",
    titulo: "Evaluación de materiales",
    descripcion:
      "Relevamiento sin costo, clasificación y valuación inmediata de tus materiales, con criterios claros desde el primer momento.",
  },
  {
    icon: Banknote,
    num: "04",
    titulo: "Pago inmediato",
    descripcion:
      "Transferencia, efectivo o pago contra factura. Operaciones simples y sin demoras.",
  },
];

/* ------------------------------------------------------------------ */
/* Planta de reciclaje                                                 */
/* ------------------------------------------------------------------ */

export type PlantaFeature = {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
};

export const PLANTA_FEATURES: PlantaFeature[] = [
  {
    icon: Warehouse,
    titulo: "Sectores cubiertos",
    descripcion: "Depósito industrial techado para almacenar materiales.",
  },
  {
    icon: Scissors,
    titulo: "Área de corte y clasificación",
    descripcion: "Zonas dedicadas al procesamiento de materiales.",
  },
  {
    icon: Forklift,
    titulo: "Equipos de carga propios",
    descripcion: "Maniobras internas de carga y descarga.",
  },
  {
    icon: ArrowLeftRight,
    titulo: "Control de ingreso y egreso",
    descripcion: "Registro y seguimiento de los materiales.",
  },
  {
    icon: Droplets,
    titulo: "Descontaminación y desguace",
    descripcion: "Zona para descontaminación y desguace de transformadores.",
  },
  {
    icon: Cog,
    titulo: "Peladoras y picadoras de cables",
    descripcion: "Procesamiento de cables para recuperación de metales.",
  },
];

export const PLANTA_GALERIA = [
  {
    src: "/images/planta-1.jpg",
    alt: "Depósito industrial con bobinas de cables almacenadas",
    caption: "Depósito y almacenamiento de bobinas",
  },
  {
    src: "/images/planta-2.jpg",
    alt: "Personal clasificando y procesando cables de cobre",
    caption: "Clasificación y procesamiento de cables",
  },
  {
    src: "/images/planta-3.jpg",
    alt: "Interior de la planta de reciclaje con big bags y autoelevadora",
    caption: "Interior de la planta",
  },
  {
    src: "/images/planta-4.jpg",
    alt: "Trabajos de desguace sobre un transformador eléctrico",
    caption: "Desguace de transformadores",
  },
  {
    src: "/images/planta-5.jpg",
    alt: "Operarios trabajando sobre un transformador de potencia",
    caption: "Trabajos sobre transformadores",
  },
  {
    src: "/images/planta-6.jpg",
    alt: "Camión cargado con transformadores en zona de ingreso",
    caption: "Ingreso de materiales y carga",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Logística nacional                                                  */
/* ------------------------------------------------------------------ */

export const FLOTA = ["Camiones", "Carretones", "Hidrogrúas", "Grúas telescópicas"];

export const LOGISTICA_FEATURES = [
  "Equipos propios y tercerizados",
  "Vehículos y equipos habilitados",
  "Seguros de camiones, semirremolques, grúas e hidrogrúas",
  "Personal capacitado",
  "EPP completo",
  "Maniobras de izaje y movimientos pesados",
] as const;

/* ------------------------------------------------------------------ */
/* Por qué elegir Metales NT                                           */
/* ------------------------------------------------------------------ */

export type Diferencial = { icon: LucideIcon; texto: string };

export const DIFERENCIALES: Diferencial[] = [
  { icon: Award, texto: "Más de 25 años de experiencia real" },
  { icon: Handshake, texto: "Compra directa, sin intermediarios" },
  { icon: Banknote, texto: "Pagos rápidos y valores competitivos" },
  { icon: MapPin, texto: "Retiros en todo el país" },
  { icon: Truck, texto: "Camiones propios o tercerizados habilitados" },
  { icon: Warehouse, texto: "Depósito industrial propio en Buenos Aires" },
  { icon: Users, texto: "Personal profesional, asegurado y capacitado" },
  { icon: HardHat, texto: "Cumplimiento de EPP, ART y normativa industrial" },
  { icon: ShieldCheck, texto: "Servicio serio, ordenado y confiable" },
];

/* ------------------------------------------------------------------ */
/* Tipos de material para el formulario                                */
/* ------------------------------------------------------------------ */

export const TIPOS_MATERIAL = [
  "Cables eléctricos",
  "Transformadores",
  "Metales ferrosos y no ferrosos",
  "Equipamiento energético e industrial",
  "Intercambiadores y equipos térmicos",
  "Otros / no estoy seguro",
] as const;
