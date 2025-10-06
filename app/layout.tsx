import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayPhone Integration | Next.js + NestJS",
  description: "Repositorio de ejemplo para integrar pagos con PayPhone usando Next.js en frontend y NestJS en backend. Starter kit modular, listo para desarrollo y producción.",
  keywords: [
    "PayPhone", 
    "Next.js", 
    "NestJS", 
    "TypeScript", 
    "integration", 
    "payment gateway", 
    "Ecuador", 
    "LATAM", 
    "e-commerce"
  ],
  authors: [{ name: "FasteryDev", url: "https://fastery.dev" }],
  creator: "FasteryDev",
  publisher: "FasteryDev",
  metadataBase: new URL("https://github.com/fasterydev/payphone-ecomerce"),
  openGraph: {
    title: "PayPhone Integration | Next.js + NestJS",
    description: "Repositorio de ejemplo para integrar pagos con PayPhone usando Next.js en frontend y NestJS en backend. Starter kit modular, listo para desarrollo y producción.",
    url: "https://github.com/fasterydev/payphone-ecomerce",
    siteName: "PayPhone Integration",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/fasterydev/payphone-ecomerce/main/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "PayPhone Integration Next.js + NestJS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPhone Integration | Next.js + NestJS",
    description: "Repositorio de ejemplo para integrar pagos con PayPhone usando Next.js en frontend y NestJS en backend.",
    creator: "@FasteryDev",
    images: ["https://raw.githubusercontent.com/fasterydev/payphone-ecomerce/main/assets/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
