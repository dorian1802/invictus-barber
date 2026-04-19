import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import WhySection from "@/components/WhySection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <PhotoCarousel />
        <WhySection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}