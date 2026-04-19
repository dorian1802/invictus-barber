"use client";

import { useInView } from "@/hooks/useInView";
import { Scissors, ArrowRight } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

export default function CTASection() {
  const ref = useInView(0.1);

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[80px] blur-mobile-safe" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div>
          <span
            data-animate
            className="text-xs tracking-[0.5em] uppercase text-sage font-medium block mb-4"
          >
            Reserva tu cita
          </span>
          <h2
            data-animate
            className="font-display text-5xl md:text-6xl text-white mb-6"
          >
            ¿Listo para lucir <span className="text-sage italic">invicto</span>?
          </h2>
          <p data-animate className="text-white/30 max-w-xl mx-auto mb-10 leading-relaxed">
            Reserva en línea en menos de un minuto. Sin esperas, sin
            complicaciones.
          </p>

          <div
            data-animate
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
  );
}