"use client";

import { useInView } from "@/hooks/useInView";
import { Scissors, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Av. de Ruzafa, 16, Local 07", "03501 Benidorm, España"],
  },
  {
    icon: Phone,
    title: "Reservar",
    lines: ["Reserva online en Booksy"],
    href: BOOKSY_URL,
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lunes a Viernes: 9:00 – 20:00", "Sábado: 9:00 – 18:00", "Domingo: Cerrado"],
  },
];

export default function ContactoContent() {
  const heroRef = useInView(0.1);
  const infoRef = useInView(0.1);
  const mapRef = useInView(0.1);

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
            Contacto
          </span>
          <h1
            data-animate="fade-up-lg"
            className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-6"
          >
            Ven a <span className="text-sage italic">visitarnos</span>
          </h1>
          <p
            data-animate="fade-up-lg"
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Estamos en el corazón de Benidorm. Pasa por la barbería o reserva online.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />
        <div className="container mx-auto px-6" ref={infoRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Info cards */}
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={info.title}
                  data-animate
                  className={`animate-delay-${i + 1} flex items-start gap-4 p-6 rounded-2xl bg-cream border border-sage-pale`}
                >
                  <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-charcoal mb-2">{info.title}</h3>
                    {info.lines.map((line) =>
                      info.href ? (
                        <a
                          key={line}
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-charcoal/50 text-sm hover:text-sage transition-colors block"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-charcoal/50 text-sm">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Reservar CTA */}
              <div data-animate className="animate-delay-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={BOOKSY_URL}
                  className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-8 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 w-full"
                >
                  <Scissors className="w-4 h-4" />
                  Reservar en Booksy <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div data-animate="slide-right" ref={mapRef}>
              <div className="rounded-2xl overflow-hidden border border-sage-pale h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.1!2d-0.1049!3d38.5412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd621e1e1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sAv.+de+Ruzafa%2C+16%2C+Benidorm!5e0!3m2!1ses!2ses!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Invictus Barber Shop en Benidorm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}