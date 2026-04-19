import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactoContent from "./ContactoContent";

export const metadata = {
  title: "Contacto — Invictus Barber Shop",
  description:
    "Contacta Invictus Barber Shop en Benidorm. Av. de Ruzafa, 16, Local 07. Reserva tu cita.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactoContent />
      </main>
      <Footer />
    </>
  );
}