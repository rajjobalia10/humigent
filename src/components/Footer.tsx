import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 py-16 max-[809px]:py-10">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] max-[1199px]:grid-cols-2 max-[809px]:grid-cols-1 gap-12 max-[809px]:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image src="/images/humigent-logo-light.png" alt="Humigent" width={140} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-[14px] leading-[1.6] text-gray-light mb-6">
              Multi-agent intelligence for high-stakes decisions.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="1.5" />
                  <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-5">Useful Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[14px] text-gray-light hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/about" className="text-[14px] text-gray-light hover:text-white transition-colors">Leadership Team</Link></li>
              <li><Link href="/contact" className="text-[14px] text-gray-light hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-[14px] text-gray-light hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="text-[14px] text-gray-light hover:text-white transition-colors">Request A Demo</Link></li>
            </ul>
          </div>

          {/* Industry */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-5">Industry</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-[14px] text-gray-light hover:text-white transition-colors">Life Sciences</Link></li>
              <li><Link href="/products" className="text-[14px] text-gray-light hover:text-white transition-colors">Food and Hospitality</Link></li>
              <li><Link href="/products" className="text-[14px] text-gray-light hover:text-white transition-colors">Government</Link></li>
              <li><Link href="/products" className="text-[14px] text-gray-light hover:text-white transition-colors">Oil &amp; Gas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="text-[14px] text-gray-light">US: 33 S Wood Ave Suite 660, Iselin, NJ 08830</li>
              <li className="text-[14px] text-gray-light">India: Tower B1, Spaze I-Tech Park, Sector 49, Gurgaon</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 py-5 flex items-center justify-between max-[809px]:flex-col max-[809px]:gap-3 max-[809px]:text-center">
          <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
            Copyright &copy; 2026 Humigent All rights reserved
          </p>
          <Link href="/privacy-policy" className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
