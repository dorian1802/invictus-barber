"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import { Scissors, ArrowRight } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Corte degradado moderno" },
  { src: "/images/gallery-2.jpg", alt: "Detalle de corte" },
  { src: "/images/gallery-3.jpg", alt: "Arreglo de barba profesional" },
  { src: "/images/gallery-4.jpg", alt: "Acabado perfecto" },
  { src: "/images/gallery-5.jpg", alt: "Estilo y detalle" },
  { src: "/images/gallery-6.jpg", alt: "Resultado final" },
];

export default function GaleriaContent() {
  const heroRef = useInView(0.1);
  const gridRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sage/15 rounded-full blur-[80px] blur-mobile-safe" />
        <div className="container mx-auto px-6 relative z-10 pt-28 pb-16" ref={heroRef}>
          <span
            data-animate="fade-up-lg"
            className="inline-block text-xs tracking-[0.5em] uppercase text-sage font-medium mb-6"
          >
            Galería
          </span>
          <h1
            data-animate="fade-up-lg"
            className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-6"
          >
            Nuestros <span className="text-sage italic">trabajos</span>
          </h1>
          <p
            data-animate="fade-up-lg"
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Cada corte cuenta una historia. Descubre nuestros resultados.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6" ref={gridRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                data-animate
                className={`animate-delay-${Math.min(i + 1, 4)} group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-charcoal relative overflow-hidden" ref={ctaRef}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[80px] blur-mobile-safe" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div>
            <span
              data-animate="fade-up-lg"
              className="text-xs tracking-[0.5em] uppercase text-sage font-medium block mb-4"
            >
              ¿Te gusta lo que ves?
            </span>
            <h2
              data-animate="fade-up-lg"
              className="font-display text-5xl md:text-6xl text-white mb-6"
            >
              Reserva tu <span className="text-sage italic">cita</span>
            </h2>
            <p
              data-animate="fade-up-lg"
              className="text-white/30 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Tu próximo corte podría estar en nuestra galería. Reserva ahora.
            </p>
            <div data-animate="fade-up-lg" className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={BOOKSY_URL}
                className="inline-flex items-center justify-center gap-2 bg-sage hover:bg-sage-dark text-white px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300"
              >
                <Scissors className="w-4 h-4" />
                Reservar Ahora
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-charcoal px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300"
              >
                Contacto <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}