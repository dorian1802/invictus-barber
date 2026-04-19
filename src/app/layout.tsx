import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invictus Barber Shop — Benidorm",
  description:
    "Barbería premium en Benidorm. Cortes de caballero, barba y afeitado. Reserva tu cita online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-loading');document.addEventListener('DOMContentLoaded',function(){document.documentElement.classList.remove('js-loading');document.documentElement.classList.add('js-loaded');});`,
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}