import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  description: "Multi-Agent Intelligence for High-Stakes Decisions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable}`}>
      <body className="min-h-screen bg-cream text-dark antialiased">
        <div className="relative">
          {/* Vertical content border lines */}
          <div className="hidden min-[810px]:block pointer-events-none fixed inset-0 z-40">
            <div className="mx-auto max-w-[1200px] h-full relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-border/40" />
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-border/40" />
            </div>
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
