import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AK.dev | Strony i aplikacje internetowe na zamówienie",
  description:
    "Projektowanie i wdrażanie nowoczesnych stron oraz aplikacji internetowych.",
  icons: {
    icon: "/06_symbol_AK_kod_przezroczysty.png",
    apple: "/06_symbol_AK_kod_przezroczysty.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={montserrat.variable}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
