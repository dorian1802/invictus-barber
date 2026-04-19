"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Corte degradado moderno" },
  { src: "/images/gallery-2.jpg", alt: "Detalle de corte" },
  { src: "/images/gallery-3.jpg", alt: "Arreglo de barba profesional" },
  { src: "/images/gallery-4.jpg", alt: "Acabado perfecto" },
  { src: "/images/gallery-5.jpg", alt: "Estilo y detalle" },
  { src: "/images/gallery-6.jpg", alt: "Resultado final" },
];

export default function PhotoCarousel() {
  const ref = useInView(0.05);

  return (
    <section className="py-24 bg-white overflow-hidden relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />

      <div className="container mx-auto px-6 mb-12">
        <span
          data-animate
          className="text-xs tracking-[0.5em] uppercase text-sage font-medium block mb-4"
        >
          Galería
        </span>
        <h2
          data-animate
          className="font-display text-4xl md:text-5xl text-charcoal"
        >
          Nuestros <span className="text-sage italic">trabajos</span>
        </h2>
      </div>

      <div className="flex gap-4 mb-4 animate-marquee">
        {galleryImages.map((img) => (
          <div key={`a-${img.src}`} className="flex-none w-[300px] md:w-[380px]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
            </div>
          </div>
        ))}
        {galleryImages.map((img) => (
          <div key={`b-${img.src}`} className="flex-none w-[300px] md:w-[380px]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 animate-marquee-reverse">
        {galleryImages.map((img) => (
          <div key={`c-${img.src}`} className="flex-none w-[300px] md:w-[380px]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
            </div>
          </div>
        ))}
        {galleryImages.map((img) => (
          <div key={`d-${img.src}`} className="flex-none w-[300px] md:w-[380px]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}