import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Del Mar Desing | Stickers, Papelería y Regalos Personalizados — Mar del Plata",
  description:
    "Stickers en vinilo, planchas personalizadas, impresión de fotos, polaroids y papelería para marcas. Minorista y mayorista. Presupuesto sin cargo. 📍 Mar del Plata, Argentina.",
  icons: {
    icon: "/delmar-negro.png",
    apple: "/delmar-negro.png",
  },
  keywords: [
    "stickers personalizados mar del plata",
    "papelería personalizada",
    "impresión polaroid",
    "stickers vinilo",
    "regalos personalizados",
    "del mar Desing",
    "stickers mar del plata",
  ],
  authors: [{ name: "Del Mar Desing" }],
  openGraph: {
    title: "Del Mar Desing | Stickers y Papelería Personalizada",
    description:
      "El emprendimiento que no sabías que necesitabas 💗 — Stickers, fotos polaroid y papelería desde Mar del Plata.",
    url: "https://delmarDesing.vercel.app",
    siteName: "Del Mar Desing",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Del Mar Desing | Stickers y Papelería Personalizada",
    description: "El emprendimiento que no sabías que necesitabas 💗",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
