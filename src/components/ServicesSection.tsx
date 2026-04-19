"use client";

import { useInView } from "@/hooks/useInView";
import { Scissors, ArrowRight } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

const services = [
  {
    title: "Corte Caballero",
    price: "15€",
    duration: "30 min",
    description:
      "Corte personalizado con acabado perfecto. Escuchamos lo que quieres y lo hacemos realidad.",
  },
  {
    title: "Corte y Barba",
    price: "23€+",
    duration: "45 min",
    description:
      "El combo completo. Corte de pelo + arreglo de barba para lucir impecable.",
  },
  {
    title: "Recorte de Barba",
    price: "10€",
    duration: "15 min",
    description:
      "Barba definida y cuidada. Recorte profesional con navaja y productos premium.",
  },
];

export default function ServicesSection() {
  const ref = useInView(0.1);

  return (
    <section id="servicios" className="py-32 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <span
            data-animate
            className="text-xs tracking-[0.5em] uppercase text-sage font-medium block mb-4"
          >
            Servicios
          </span>
          <h2
            data-animate
            className="font-display text-5xl md:text-6xl text-charcoal mb-4"
          >
            Lo que <span className="text-sage italic">hacemos</span>
          </h2>
          <p data-animate className="text-charcoal/40 max-w-xl mx-auto">
            Profesionales, puntuales y con talento. Tu imagen en las mejores
            manos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-animate
              className={`animate-delay-${i + 1} group bg-cream hover:bg-white p-8 rounded-2xl border border-sage-pale hover:border-sage/20 hover:shadow-lg hover:shadow-sage/5 transition-all duration-500`}
            >
              <div className="flex items-end justify-between mb-6">
                <h3 className="font-display text-2xl text-charcoal">
                  {service.title}
                </h3>
                <span className="font-display text-3xl text-sage">
                  {service.price}
                </span>
              </div>
              <p className="text-xs text-charcoal/30 tracking-wider uppercase mb-4">
                {service.duration}
              </p>
              <p className="text-charcoal/40 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={BOOKSY_URL}
                className="inline-flex items-center gap-2 text-sm text-sage hover:gap-3 transition-all"
              >
                <Scissors className="w-3.5 h-3.5" /> Reservar{" "}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}