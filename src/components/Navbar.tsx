"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-border/30">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-5 py-4 max-[809px]:px-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="2.5" fill="#FF5101" />
            <circle cx="12" cy="4" r="1.5" fill="#FF5101" />
            <circle cx="12" cy="20" r="1.5" fill="#FF5101" />
            <circle cx="4" cy="12" r="1.5" fill="#FF5101" />
            <circle cx="20" cy="12" r="1.5" fill="#FF5101" />
            <circle cx="6.34" cy="6.34" r="1.5" fill="#FF5101" />
            <circle cx="17.66" cy="17.66" r="1.5" fill="#FF5101" />
            <circle cx="6.34" cy="17.66" r="1.5" fill="#FF5101" />
            <circle cx="17.66" cy="6.34" r="1.5" fill="#FF5101" />
          </svg>
          <span className="font-serif text-[18px] text-dark">Humigent</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden min-[810px]:flex items-center gap-8">
          <a href="#about" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            About
          </a>
          <a href="#industries" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            Industries
          </a>
          <a href="#products" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            Products
          </a>
          <a href="#thought-leadership" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            Thought Leadership
          </a>
          <a href="#contact" className="text-[14px] text-gray-text leading-[1.6] hover:text-dark transition-colors">
            Contact Us
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#demo"
          className="hidden min-[810px]:inline-block bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
        >
          Request A Demo
        </a>

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
            <a href="#about" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#industries" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>Industries</a>
            <a href="#products" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>Products</a>
            <a href="#thought-leadership" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>Thought Leadership</a>
            <a href="#contact" className="text-[14px] text-gray-text" onClick={() => setMobileOpen(false)}>Contact Us</a>
            <a href="#demo" className="bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] text-center" onClick={() => setMobileOpen(false)}>Request A Demo</a>
          </div>
        </div>
      )}
    </nav>
  );
}
