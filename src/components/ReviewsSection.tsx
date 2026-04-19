"use client";

import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

const reviews = [
  {
    text: "De 10, un grupo joven que hace las cosas muy bien! Puntuales y con talento!",
    author: "Óscar",
  },
  {
    text: "Super profesionales! Son muy amables, tú imaginas y ellos te lo hacen.",
    author: "Noelia",
  },
  {
    text: "Muy profesionales. Acabado perfecto.",
    author: "Juan",
  },
  {
    text: "Perfecto, muy contentos con el corte, volveremos pronto.",
    author: "Paola",
  },
  {
    text: "Parfait 👍",
    author: "François",
  },
  {
    text: "Excelente corte de pelo. Profesional y preciso.",
    author: "Ivan",
  },
];

export default function ReviewsSection() {
  const ref = useInView(0.1);

  return (
    <section className="py-32 bg-white relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span
            data-animate
            className="text-xs tracking-[0.5em] uppercase text-sage font-medium block mb-4"
          >
            Reseñas
          </span>
          <h2
            data-animate
            className="font-display text-5xl md:text-6xl text-charcoal mb-4"
          >
            Lo que dicen nuestros{" "}
            <span className="text-sage italic">clientes</span>
          </h2>
          <div data-animate className="flex items-center justify-center gap-1 mt-4">
            <span className="text-gold text-xl">★</span>
            <span className="text-gold text-xl">★</span>
            <span className="text-gold text-xl">★</span>
            <span className="text-gold text-xl">★</span>
            <span className="text-gold text-xl">★</span>
            <span className="text-charcoal/30 text-sm ml-2">
              4.9 / 5 — 59 reseñas
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={review.author}
              data-animate
              className={`animate-delay-${Math.min(i + 1, 4)} p-6 bg-cream rounded-2xl border border-sage-pale`}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-gold text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-charcoal/50 text-sm leading-relaxed mb-3 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-sage text-sm font-medium">— {review.author}</p>
            </div>
          ))}
        </div>

        <div data-animate className="text-center mt-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={BOOKSY_URL}
            className="inline-flex items-center gap-2 text-sage hover:gap-3 transition-all text-sm tracking-widest uppercase"
          >
            Ver todas las reseñas{" "}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}