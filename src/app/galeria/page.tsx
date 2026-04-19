import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GaleriaContent from "./GaleriaContent";

export const metadata = {
  title: "Galería — Invictus Barber Shop",
  description:
    "Nuestros trabajos de corte y barba. Barbería premium en Benidorm.",
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main>
        <GaleriaContent />
      </main>
      <Footer />
    </>
  );
}