import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "Ringfence",
  description: "Ringfence is a product company focused on personal artificial intelligence. We build onchain products designed for the future we want to see - one of prosperous, self-sovereign, hypercapable humans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spectral.variable} antialiased`}>{children}</body>
    </html>
  );
}
