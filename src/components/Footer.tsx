import { Scissors, MapPin } from "lucide-react";
import Link from "next/link";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-sage-pale py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-charcoal tracking-wide"
            >
              INVICTUS
            </Link>
            <p className="text-charcoal/30 mt-4 text-sm leading-relaxed italic">
              More than a barbershop — It&apos;s a lifestyle.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider uppercase text-charcoal/50 mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-charcoal/30 hover:text-sage transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-sm text-charcoal/30 hover:text-sage transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-sm text-charcoal/30 hover:text-sage transition-colors"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-charcoal/30 hover:text-sage transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider uppercase text-charcoal/50 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3 text-sm text-charcoal/30">
              <li>Corte Caballero — 15€</li>
              <li>Corte y Barba — 23€+</li>
              <li>Recorte de Barba — 10€</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider uppercase text-charcoal/50 mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-charcoal/30">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sage" />
                Av. de Ruzafa, 16, Local 07
              </li>
              <li>03501 Benidorm, España</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-pale pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal/20">
            © {new Date().getFullYear()} Invictus Barber Shop — Todos los
            derechos reservados
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={BOOKSY_URL}
            className="inline-flex items-center gap-2 text-xs text-sage hover:text-sage-dark transition-colors"
          >
            <Scissors className="w-3 h-3" /> Reservar en Booksy
          </a>
        </div>
      </div>
    </footer>
  );
}