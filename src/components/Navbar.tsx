"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scissors, Menu, X } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/126588_invictus-barber-shop_barberia_56048_benidorm";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white py-5 shadow-sm"
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-charcoal"
        >
          INVICTUS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                i === 0 ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={BOOKSY_URL}
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all"
          >
            <Scissors className="w-3.5 h-3.5" />
            Reservar
          </a>
        </div>

        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sage-pale">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-charcoal py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={BOOKSY_URL}
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all"
            >
              <Scissors className="w-3.5 h-3.5" />
              Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}