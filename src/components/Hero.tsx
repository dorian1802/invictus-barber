"use client";

import { useInView } from "@/hooks/useInView";
import { Scissors, ArrowDown } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

export default function Hero() {
  const ref = useInView(0.1);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-sage-pale" />
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[80px] blur-mobile-safe" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px] blur-mobile-safe" />
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="h-lines"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="#8B9D83"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#h-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center" ref={ref}>
        <span
          data-animate
          className="inline-block text-xs tracking-[0.5em] uppercase text-sage font-medium mb-8"
        >
          Benidorm — Barbería Premium
        </span>

        <h1
          data-animate
          className="font-display text-7xl md:text-9xl lg:text-[10rem] font-light text-charcoal leading-[0.85] mb-4"
        >
          Invictus
        </h1>

        <p
          data-animate
          className="font-display text-2xl md:text-3xl text-charcoal/30 italic mb-2"
        >
          Barber Shop
        </p>

        <p
          data-animate
          className="text-charcoal/30 text-sm tracking-[0.3em] uppercase mb-12"
        >
          More than a barbershop — It&apos;s a lifestyle
        </p>

        <div
          data-animate
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={BOOKSY_URL}
            className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300"
          >
            <Scissors className="w-4 h-4" />
            Reservar Cita
          </a>
          <a
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300"
          >
            Nuestros Servicios
          </a>
        </div>

        <div data-animate className="mt-20 flex justify-center gap-20">
          <div className="text-center hidden md:block">
            <p className="font-display text-3xl text-sage">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="text-xs text-charcoal/40 mt-1 tracking-wider uppercase">4.9</p>
            <p className="text-xs text-charcoal/25">59 reseñas</p>
          </div>
          <div className="text-center hidden md:block">
            <p className="font-display text-3xl text-sage">15€</p>
            <p className="text-xs text-charcoal/40 mt-1 tracking-wider uppercase">Desde</p>
            <p className="text-xs text-charcoal/25">Corte caballero</p>
          </div>
          <div className="text-center hidden md:block">
            <p className="font-display text-3xl text-sage">Av. Ruzafa</p>
            <p className="text-xs text-charcoal/40 mt-1 tracking-wider uppercase">Local 07</p>
            <p className="text-xs text-charcoal/25">Benidorm</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-sage/40 animate-bounce" />
      </div>
    </section>
  );
}