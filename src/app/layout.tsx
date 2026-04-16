import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Humigent",
  description: "AI Agents that automate modern workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable}`}>
      <body className="min-h-screen bg-cream text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
