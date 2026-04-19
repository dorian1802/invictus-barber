"use client";

import { useInView } from "@/hooks/useInView";
import { Star, Clock, Award, Users } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

const features = [
  {
    icon: Star,
    title: "4.9 ★★★★★",
    description: "Valoración media de 59 reseñas en Booksy.",
  },
  {
    icon: Clock,
    title: "Puntuales",
    description: "Respetamos tu tiempo. Cita reservada, hora cumplida.",
  },
  {
    icon: Award,
    title: "Profesionales",
    description: "Barberos formados con el estándar Invictus.",
  },
  {
    icon: Users,
    title: "Atención personal",
    description: "Cada cliente es único. Escuchamos y ejecutamos.",
  },
];

export default function WhySection() {
  const ref = useInView(0.1);

  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sage/5 rounded-full blur-[80px] blur-mobile-safe" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              data-animate
              className="text-xs tracking-[0.5em] uppercase text-sage font-medium block mb-4"
            >
              Por qué Invictus
            </span>
            <h2
              data-animate="slide-left"
              className="font-display text-5xl md:text-6xl text-charcoal mb-6"
            >
              Más que una <span className="text-sage italic">barbería</span>
            </h2>
            <p data-animate className="text-charcoal/40 leading-relaxed mb-8">
              Invictus es un lugar para el hombre moderno. Ven, relájate y
              disfruta de nuestro ambiente.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={BOOKSY_URL}
              data-animate
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-8 py-3 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300"
            >
              Reservar Cita
            </a>
          </div>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                data-animate
                className={`animate-delay-${i + 1} flex items-start gap-4 p-5 rounded-xl bg-white border border-sage-pale`}
              >
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal/40">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}