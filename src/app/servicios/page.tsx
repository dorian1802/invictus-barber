import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiciosContent from "./ServiciosContent";

export const metadata = {
  title: "Servicios — Invictus Barber Shop",
  description:
    "Corte Caballero 15€, Corte y Barba 23€+, Recorte de Barba 10€. Barbería premium en Benidorm.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiciosContent />
      </main>
      <Footer />
    </>
  );
}