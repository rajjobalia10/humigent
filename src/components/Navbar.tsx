"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-border/30">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-5 py-4 max-[809px]:px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/humigent-logo-dark.png" alt="Humigent" width={140} height={40} className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden min-[810px]:flex items-center gap-8">
          <Link href="/about" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            About
          </Link>
          <Link href="/products" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            Industries
          </Link>
          <Link href="/blogs" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            Thought Leadership
          </Link>
          <Link href="/contact" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            Contact Us
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden min-[810px]:inline-block bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
        >
          Request A Demo
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="min-[810px]:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-dark transition-transform ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-dark transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-dark transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="min-[810px]:hidden bg-cream border-t border-gray-border/30 px-5 pb-5">
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/about" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/products" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>Industries</Link>
            <Link href="/blogs" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>Thought Leadership</Link>
            <Link href="/contact" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            <Link href="/contact" className="bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] text-center" onClick={() => setMobileOpen(false)}>Request A Demo</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
