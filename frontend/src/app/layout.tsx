import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProvidersGroup from "./ProvidersGroup";
import "@/global/reset.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autenticação",
  description: "Sistema de Autenticação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}`}  cz-shortcut-listen="true">
        <ProvidersGroup>{children}</ProvidersGroup>
      </body>
    </html>
  );
}
