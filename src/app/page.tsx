import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Nosotros } from "@/components/site/Nosotros";
import { Materiales } from "@/components/site/Materiales";
import { Servicios } from "@/components/site/Servicios";
import { Planta } from "@/components/site/Planta";
import { Logistica } from "@/components/site/Logistica";
import { PorQueElegir } from "@/components/site/PorQueElegir";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CONTACTO } from "@/lib/site-content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Metales NT",
  slogan: "Convertimos tus desechos en valor",
  description:
    "Compra, retiro, valorización y gestión de materiales industriales en desuso, cables y transformadores en toda Argentina.",
  telephone: CONTACTO.telefonos.map((t) => t.label),
  email: CONTACTO.emails.map((e) => e.label),
  url: CONTACTO.sitio.href,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Puente del Inca 2050",
    addressLocality: "Ezeiza",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Nosotros />
        <Materiales />
        <Servicios />
        <Planta />
        <Logistica />
        <PorQueElegir />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
