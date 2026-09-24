import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MedSecure — Consultation médicale augmentée par l'IA",
  description: "Préparez votre consultation, assistez la rédaction médicale et protégez vos données avec MedSecure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ background: "var(--bg)", color: "var(--text-hi)" }}>
        {children}
      </body>
    </html>
  );
}
