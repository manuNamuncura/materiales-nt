import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.metalesnt.com.ar"),
  title: "Metales NT | Convertimos tus desechos en valor",
  description:
    "Compramos, retiramos y valorizamos materiales industriales, cables y transformadores en toda Argentina. Más de 25 años de trayectoria, pagos inmediatos y retiros en todo el país.",
  keywords: [
    "Metales NT",
    "compra de metales",
    "reciclaje industrial",
    "cables de cobre",
    "transformadores",
    "materiales industriales",
    "Argentina",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Metales NT | Convertimos tus desechos en valor",
    description:
      "Compramos, retiramos y valorizamos materiales industriales, cables y transformadores en toda Argentina.",
    siteName: "Metales NT",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1433 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
