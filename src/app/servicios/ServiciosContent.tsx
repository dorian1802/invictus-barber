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
    details: [
      "Corte personalizado",
      "Lavado incluido",
      "Acabado con productos premium",
      "Asesoramiento de estilo",
    ],
  },
  {
    title: "Corte y Barba",
    price: "23€+",
    duration: "45 min",
    description:
      "El combo completo. Corte de pelo + arreglo de barba para lucir impecable.",
    details: [
      "Corte personalizado",
      "Arreglo de barba con navaja",
      "Recorte de bigacho",
      "Hidratación de barba",
    ],
  },
  {
    title: "Recorte de Barba",
    price: "10€",
    duration: "15 min",
    description:
      "Barba definida y cuidada. Recorte profesional con navaja y productos premium.",
    details: [
      "Recorte y definición",
      "Navaja profesional",
      "Productos premium",
      "Hidratación final",
    ],
  },
];

export default function ServiciosContent() {
  const heroRef = useInView(0.1);
  const cardsRef = useInView(0.1);
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
            Servicios
          </span>
          <h1
            data-animate="fade-up-lg"
            className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-6"
          >
            Lo que <span className="text-sage italic">hacemos</span>
          </h1>
          <p
            data-animate="fade-up-lg"
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Profesionales, puntuales y con talento. Tu imagen en las mejores manos.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />
        <div className="container mx-auto px-6" ref={cardsRef}>
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
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-charcoal/50 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={BOOKSY_URL}
                  className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-6 py-3 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 w-full justify-center"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  Reservar
                </a>
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
              Reserva tu cita
            </span>
            <h2
              data-animate="fade-up-lg"
              className="font-display text-5xl md:text-6xl text-white mb-6"
            >
              ¿Listo para lucir <span className="text-sage italic">invicto</span>?
            </h2>
            <p
              data-animate="fade-up-lg"
              className="text-white/30 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Reserva en línea en menos de un minuto. Sin esperas, sin complicaciones.
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